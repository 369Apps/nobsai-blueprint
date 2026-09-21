/* No BS AI Daily - weekly 5-minute automation missions.
   SINGLE SOURCE OF TRUTH: both the blueprint.nobsai.com app and the
   No BS AI Secrets WhatsApp daily post read from this file.
   Monday = mission 0, Tuesday = mission 1, ... Sunday = mission 6.
   Each mission has: title, tagline, time ("5 min"), steps (3 concrete
   strings), win (the win to watch for), post (the WhatsApp post text,
   copy-paste ready, includes the resource line).
   Voice rules: short plain human words, no polish, no buzzwords, NO em dashes.
   Every mission must work for a business owner AND for someone who sells to
   local businesses ("use it in your business, or set it up for a client").
   Never call readers "agents" in copy. */

const MISSION_WEEKS = {
"2026-09-21": [
  {
    title: "Get a free business number tonight",
    tagline: "Your personal cell is your business line. That ends tonight.",
    time: "5 min",
    steps: [
      "Download the Google Voice app and sign in with your Gmail.",
      "Pick a local number. It is free. Set it to ring your phone.",
      "Put THIS number on your Google listing, your cards, your truck. Your personal number stays private from now on."
    ],
    win: "The first time your phone rings and you can tell it is business before you answer.",
    post: "*5-minute mission, Monday.*\n\nCustomers call your personal cell at all hours. Family, spam, and customers all ring the same number.\n\nThe fix: a free second number for the business.\n\nDownload Google Voice, sign in with Gmail, pick a local number. Set it to ring your phone. Now the business number goes on your Google listing and your cards, and your personal number stays yours.\n\nYou will know it is business before you answer, and you can set business hours in the app so late calls go to voicemail.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nSet it up today, message me directly how it goes."
  },
  {
    title: "Your shop greets people while you sleep",
    tagline: "First message gets an instant reply. You wrote it once, it works forever.",
    time: "5 min",
    steps: [
      "WhatsApp Business: Settings, Business tools, Greeting message. Turn it on.",
      "Write it short: Hi, thanks for messaging [business]. I reply within a few hours. Urgent? Call [number].",
      "It sends itself to anyone who messages you first. In the morning, reply to the warm ones."
    ],
    win: "Waking up to a chat where your greeting already answered, and the customer is waiting on YOU.",
    post: "*5-minute mission, Tuesday.*\n\nPeople message you at midnight and hear nothing back. By morning they have messaged someone else.\n\nThe fix: a greeting message that fires on its own.\n\nWhatsApp Business, Settings, Business tools, Greeting message, on. Write it short: \"Hi, thanks for messaging [business]. I reply within a few hours. Urgent? Call [number].\"\n\nAnyone who messages you first gets it instantly. You wrote it once, it works forever.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nSet it up today, message me directly how it goes."
  },
  {
    title: "Let customers book without calling you",
    tagline: "Phone tag kills bookings. A booking link never plays phone tag.",
    time: "5 min",
    steps: [
      "On your phone browser, go to calendly.com. Make a free account. Create a 15-minute event called Book a free quote.",
      "Set the hours you actually take appointments. Turn off the rest.",
      "Put the link in your Instagram bio and your Google Business Profile. Customers book themselves, you get an email."
    ],
    win: "The first booking that shows up in your email while you were doing something else.",
    post: "*5-minute mission, Wednesday.*\n\nBooking by phone means missed calls and phone tag. Every missed call is a customer who books someone else.\n\nThe fix: a free booking link.\n\ncalendly.com on your phone, free account, one 15-minute event called \"Book a free quote\". Set your real available hours. Put the link in your Instagram bio and your Google Business Profile.\n\nCustomers pick a time themselves. You get an email. No phone tag.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nSet it up today, message me directly how it goes."
  },
  {
    title: "Quotes in 2 minutes flat",
    tagline: "Every quote you forget to send is a job you handed to someone else.",
    time: "5 min",
    steps: [
      "Notes app. New note, title it Quote template. List the lines you always need: name, what they asked for, price, when you can start.",
      "Pin the note to the top of your notes.",
      "Every quote now: duplicate the template, fill the lines, screenshot and send. Same two minutes, every time."
    ],
    win: "A quote that goes out the same day someone asks, because the template was sitting there waiting.",
    post: "*5-minute mission, Thursday.*\n\nQuotes die in your head. You mean to send them, then the day eats you, then the customer hires someone faster.\n\nThe fix: a quote template that lives pinned in your Notes.\n\nNew note, title: \"Quote template\". Lines: name, what they asked for, price, when you can start. Pin it to the top.\n\nEvery quote: duplicate it, fill the lines, screenshot and send. Two minutes, same every time.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nBuild the template today, message me directly how it goes."
  },
  {
    title: "Put your prices where customers can see them",
    tagline: "How much? is the question you answer most. Answer it before they ask.",
    time: "5 min",
    steps: [
      "WhatsApp Business: Settings, Business tools, Catalog. Tap the plus.",
      "Add each service with a photo and a price. Three items is plenty to start.",
      "Customers tap your profile and see the prices. The chats that start are from buyers, not browsers."
    ],
    win: "A customer who says I saw the price on your profile, when can you come?",
    post: "*5-minute mission, Friday.*\n\nHow much? You answer it more than any other question. Every answer takes minutes you will never get back.\n\nThe fix: a price catalog inside WhatsApp.\n\nWhatsApp Business, Settings, Business tools, Catalog, plus. Add each service with a photo and a price. Three items is plenty.\n\nCustomers tap your profile and see prices before they ask. The chats you get are from buyers.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nAdd your first 3 items today, message me directly how it goes."
  },
  {
    title: "Catch junk charges the day they land",
    tagline: "Fraud and junk subscriptions hide in your statement. Stop reading statements.",
    time: "5 min",
    steps: [
      "Open your bank app. Find settings, then alerts or notifications.",
      "Turn on an alert for every card charge, any amount. Yes, every single one.",
      "A text hits your phone the second money moves. A charge you do not know? Call the bank that day, not at month end."
    ],
    win: "The first alert for a charge you did not make, caught the same day.",
    post: "*5-minute mission, Saturday.*\n\nJunk charges and fraud hide in your card statement. You find them weeks later, if ever.\n\nThe fix: a text for every charge.\n\nOpen your bank app, settings, alerts. Turn on a notification for every card charge, any amount.\n\nNow a text hits your phone the second money moves. A charge you do not know? Call the bank that day, not at month end.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nTurn the alerts on today, message me directly how it goes."
  },
  {
    title: "The Sunday sweep",
    tagline: "The weekly boss mission. Check the week's automations and collect what they caught.",
    time: "5 min",
    steps: [
      "WhatsApp Business: read your greeting message out loud. Change one word if it does not sound like you anymore.",
      "Tap your booking link from your bio. Does it open? Does it show your real hours? Fix it if not.",
      "Look at this week's quotes. Text the one who never replied: Hi, this is [name] at [business]. Sent your quote this week, still thinking it over?"
    ],
    win: "One fix or one follow-up that turns into money. That is the sweep paying for itself.",
    post: "*5-minute mission, Sunday. Boss level.*\n\nThis week you set up 6 automations. Tonight, check they are still working and collect what they caught.\n\nThe sweep: read your WhatsApp greeting out loud and fix one word if it sounds off. Tap your booking link from your bio and make sure it opens. Then text the one quote this week that never got a reply: \"Hi, this is [name] at [business]. Sent your quote this week, still thinking it over?\"\n\nAnd scan your bank alerts. Any charge you did not recognize? Call the bank tomorrow morning.\n\nFive minutes. Systems checked, money collected.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nRun the sweep tonight, message me directly what it found."
  }
]
};
