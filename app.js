/* No BS AI Daily - v1 */
(function () {
  "use strict";

  var STORE_KEY = "nbsai_done_v1";
  var DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var DAY_SHORT = ["M", "T", "W", "T", "F", "S", "S"];

  function todayStr(d) {
    var y = d.getFullYear();
    var m = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);
    return y + "-" + m + "-" + day;
  }

  function loadDone() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }

  function saveDone(arr) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  function streakInfo(done) {
    var set = {};
    done.forEach(function (d) { set[d] = true; });
    var total = done.length;
    var cursor = new Date();
    var todayS = todayStr(cursor);
    if (!set[todayS]) cursor.setDate(cursor.getDate() - 1);
    var streak = 0;
    while (set[todayStr(cursor)]) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return { streak: streak, total: total, set: set };
  }

  // Pick this week's missions: the greatest Monday key on or before today.
  function currentWeek() {
    var keys = Object.keys(MISSION_WEEKS).sort();
    var todayS = todayStr(new Date());
    var pick = null;
    keys.forEach(function (k) { if (k <= todayS) pick = k; });
    if (!pick) pick = keys[0];
    return MISSION_WEEKS[pick];
  }

  var now = new Date();
  var week = currentWeek();
  var missionIndex = (now.getDay() + 6) % 7; // Monday = 0 ... Sunday = 6
  var mission = week[missionIndex];
  var todayS = todayStr(now);

  // ---- Today tab ----
  document.getElementById("today-dayname").textContent = DAY_NAMES[missionIndex] + "'s mission";
  document.getElementById("today-time").textContent = mission.time;
  document.getElementById("today-title").textContent = mission.title;
  var currentMissionTitle = mission.title;
  document.getElementById("today-tagline").textContent = mission.tagline;
  var stepsEl = document.getElementById("today-steps");
  mission.steps.forEach(function (s) {
    var li = document.createElement("li");
    li.textContent = s;
    stepsEl.appendChild(li);
  });
  document.getElementById("today-win").textContent = mission.win;

  var doneBtn = document.getElementById("done-btn");
  var streakLine = document.getElementById("streak-line");

  // ---- Operator levels: progression titles by total missions done ----
  var LEVELS = [
    { at: 1, name: "Efficiency Rookie" },
    { at: 3, name: "Shortcut Pro" },
    { at: 7, name: "Automation Operator" },
    { at: 14, name: "Systems Thinker" },
    { at: 30, name: "Leverage Leader" },
    { at: 60, name: "Automation Boss" }
  ];
  function levelFor(total) {
    var idx = -1, next = null, i;
    for (i = 0; i < LEVELS.length; i++) {
      if (total >= LEVELS[i].at) idx = i;
      else { next = LEVELS[i]; break; }
    }
    return { idx: idx, name: idx >= 0 ? LEVELS[idx].name : "", next: next };
  }

  var WIN_MSGS = [
    "Time saved. Money kept.",
    "That hour is yours now.",
    "Your business just got leverage.",
    "One less thing eating your day.",
    "Automated and banked.",
    "Small fix, weekly payoff."
  ];

  function celebrate() {
    var layer = document.getElementById("confetti-layer");
    if (!layer) return;
    var colors = ["#00e5a0", "#ffffff", "#0c0c0e", "#7dffd4", "#f4f6ff"];
    for (var i = 0; i < 70; i++) {
      (function () {
        var p = document.createElement("div");
        p.className = "confetti-piece";
        var size = 6 + Math.random() * 8;
        p.style.left = (Math.random() * 100) + "vw";
        p.style.width = size + "px";
        p.style.height = (size * 0.6) + "px";
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (1.8 + Math.random() * 1.6) + "s";
        layer.appendChild(p);
        setTimeout(function () { p.remove(); }, 3600);
      })();
    }
  }

  function refresh() {
    var done = loadDone();
    var info = streakInfo(done);
    var isDone = info.set[todayS] === true;

    doneBtn.textContent = isDone ? "Done for today. Nice work." : "Did it";
    doneBtn.classList.toggle("done", isDone);
    document.getElementById("share-nudge").hidden = !isDone;

    if (info.streak > 0) {
      streakLine.innerHTML = "<strong>" + info.streak + "</strong> day" +
        (info.streak === 1 ? "" : "s") + " in a row. Keep it going.";
    } else {
      streakLine.textContent = "Tap Did it after today's mission to start your streak.";
    }

    document.getElementById("streak-num").textContent = info.streak;
    document.getElementById("streak-word").textContent = "day streak";
    document.getElementById("total-num").textContent = info.total;

    var lvl = levelFor(info.total);
    var badge = document.getElementById("level-badge");
    if (badge) {
      badge.hidden = false;
      if (lvl.idx >= 0) {
        document.getElementById("level-name").textContent = lvl.name;
        document.getElementById("level-next").textContent = lvl.next
          ? (lvl.next.at - info.total) + " more mission" + ((lvl.next.at - info.total) === 1 ? "" : "s") + " to " + lvl.next.name
          : "Max level. Absolute boss.";
      } else {
        document.getElementById("level-name").textContent = "No title yet";
        document.getElementById("level-next").textContent = "Do today's mission to earn your first title.";
      }
    }

    var note = document.getElementById("streak-note");
    if (info.streak >= 7) note.textContent = "A full week of automations. Your business runs smoother than most.";
    else if (info.streak >= 3) note.textContent = "Three days in a row. You are building a real habit.";
    else if (info.streak >= 1) note.textContent = "One mission down. Come back tomorrow for the next one.";
    else note.textContent = "Do today's mission, tap Did it, and your streak starts here.";

    var dots = document.getElementById("week-dots");
    dots.innerHTML = "";
    for (var i = 6; i >= 0; i--) {
      var d = new Date(now);
      d.setDate(d.getDate() - i);
      var s = todayStr(d);
      var dot = document.createElement("div");
      dot.className = "dot" + (info.set[s] ? " hit" : "") + (s === todayS ? " today" : "");
      dot.textContent = DAY_SHORT[(d.getDay() + 6) % 7];
      dot.title = s;
      dots.appendChild(dot);
    }
  }

  doneBtn.addEventListener("click", function () {
    var done = loadDone();
    var i = done.indexOf(todayS);
    var markingDone = (i === -1);
    var beforeLevel = levelFor(done.length).idx;
    if (markingDone) {
      done.push(todayS);
    } else {
      done.splice(i, 1);
    }
    saveDone(done);
    refresh();
    if (markingDone) {
      celebrate();
      var afterLevel = levelFor(done.length).idx;
      if (afterLevel > beforeLevel) {
        toast("LEVEL UP! " + LEVELS[afterLevel].name + "!");
      } else {
        toast(WIN_MSGS[Math.floor(Math.random() * WIN_MSGS.length)]);
      }
    }
  });

  // ---- Missions tab (this week's library) ----
  var lib = document.getElementById("library-list");
  week.forEach(function (g, i) {
    var card = document.createElement("div");
    card.className = "lib-card";

    var head = document.createElement("button");
    head.className = "lib-head";
    head.innerHTML = '<span><span class="t">' + g.title + '</span><div class="d">' +
      DAY_NAMES[i] + " &middot; " + g.time + "</div></span>" + '<span class="chev">+</span>';

    var body = document.createElement("div");
    body.className = "lib-body";
    var p = document.createElement("p");
    p.textContent = g.tagline;
    body.appendChild(p);
    var ol = document.createElement("ol");
    g.steps.forEach(function (s) {
      var li = document.createElement("li");
      li.textContent = s;
      ol.appendChild(li);
    });
    body.appendChild(ol);
    var win = document.createElement("p");
    win.innerHTML = "<strong>Win to watch for:</strong> ";
    win.appendChild(document.createTextNode(g.win));
    body.appendChild(win);

    head.addEventListener("click", function () {
      card.classList.toggle("open");
    });

    card.appendChild(head);
    card.appendChild(body);
    lib.appendChild(card);
  });

  // ---- Tab bar ----
  var tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      document.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
      document.getElementById("tab-" + btn.getAttribute("data-tab")).classList.add("active");
      window.scrollTo(0, 0);
    });
  });

  // ---- Install hint ----
  var banner = document.getElementById("install-banner");
  var dismissed = false;
  try { dismissed = localStorage.getItem("nbsai_install_dismissed") === "1"; } catch (e) {}
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (!dismissed && !isStandalone) {
    if (isIOS) {
      document.getElementById("install-text").textContent =
        "iPhone tip: tap Share, then Add to Home Screen for one-tap missions.";
    }
    banner.hidden = false;
  }
  document.getElementById("install-close").addEventListener("click", function () {
    banner.hidden = true;
    try { localStorage.setItem("nbsai_install_dismissed", "1"); } catch (e) {}
  });

  // ---- Referral codes and sharing ----
  var REF_KEY = "nbsai_refcode_v1";
  var REFBY_KEY = "nbsai_referred_by_v1";
  var APP_URL = "https://blueprint.nobsai.com/";

  function getRefCode() {
    var c = null;
    try { c = localStorage.getItem(REF_KEY); } catch (e) {}
    if (!/^NB-[A-Z0-9]{6}$/.test(c || "")) {
      var chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
      c = "NB-";
      var rnd = [];
      var i;
      if (window.crypto && crypto.getRandomValues) {
        var buf = new Uint32Array(6);
        crypto.getRandomValues(buf);
        for (i = 0; i < 6; i++) rnd.push(buf[i]);
      } else {
        for (i = 0; i < 6; i++) rnd.push(Math.floor(Math.random() * 4294967296));
      }
      for (i = 0; i < 6; i++) c += chars[rnd[i] % chars.length];
      try { localStorage.setItem(REF_KEY, c); } catch (e) {}
    }
    return c;
  }

  // Capture ?ref= on load. First touch wins; never overwrite.
  (function () {
    var m = /[?&]ref=([A-Za-z0-9-]+)/.exec(location.search);
    if (m) {
      var inbound = decodeURIComponent(m[1]).toUpperCase();
      try {
        var existing = localStorage.getItem(REFBY_KEY) || "";
        if (/^NB-[A-Z0-9]{5,8}$/.test(inbound) && inbound !== getRefCode() && !existing) {
          localStorage.setItem(REFBY_KEY, inbound);
        }
      } catch (e) {}
      try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {}
    }
  })();

  // ?from=community: the member-facing share loop. The footer CTA becomes
  // "share this with a business owner" instead of "join the community".
  (function () {
    var fromCommunity = new URLSearchParams(window.location.search).get("from") === "community";
    if (fromCommunity) {
      document.getElementById("community-line").textContent =
        "Know a business owner who loses leads every day?";
      var action = document.getElementById("community-action");
      action.textContent = "Share today's mission";
      action.href = "https://wa.me/?text=" + encodeURIComponent(
        "One 5-minute automation a day for your business. Today's mission is free here: " + APP_URL + "?ref=" + getRefCode()
      );
    }
  })();

  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    t.classList.add("show");
    setTimeout(function () { t.classList.remove("show"); t.hidden = true; }, 3000);
  }

  function doShare(text) {
    var link = APP_URL + "?ref=" + getRefCode();
    if (navigator.share) {
      navigator.share({ title: "No BS AI Daily", text: text, url: link }).catch(function () {});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text + " " + link).then(
        function () { toast("Link copied. Send it to a business owner."); },
        function () { toast("Copy this link: " + link); });
    } else {
      window.prompt("Copy this link and send it to a business owner:", link);
    }
  }

  document.getElementById("share-btn").addEventListener("click", function () {
    doShare("I've been doing one 5-min automation a day from this little app. Today's took 5 minutes and saves me an hour a week. Free here:");
  });

  document.getElementById("share-win-btn").addEventListener("click", function () {
    doShare("Just did today's 5-min automation: '" + currentMissionTitle + "'. Took 5 minutes, pays off every week. Free missions here:");
  });

  refresh();
})();
