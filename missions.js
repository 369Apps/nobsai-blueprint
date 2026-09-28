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
"2026-09-28": [
  {
    title: "A voicemail that turns callers into texters",
    tagline: "Every missed call is a customer. Make yours text you instead.",
    time: "5 min",
    steps: [
      "Call your own business number from another phone so you hear exactly what callers hear.",
      "Record a new greeting: Hi, you reached [business]. I miss calls when I am with customers. Text me at this number and I will reply today.",
      "Say the fastest way to reach you in the greeting itself. Callers who hear it text instead of hanging up."
    ],
    win: "A customer who texts you after the voicemail instead of hanging up and calling your competitor.",
    post: "*5-minute mission, Monday.*\n\nYou are with a customer, the phone rings, and that caller becomes your competitor's customer.\n\nThe fix: a voicemail that turns callers into texters.\n\nCall your own business number and listen to what callers hear. Then record a new greeting: \"Hi, you reached [business]. I miss calls when I am with customers. Text me at this number and I will reply today.\"\n\nSay the fastest way to reach you in the greeting itself. Callers who hear it text you instead of hanging up.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nSet it up today, message me directly how it goes."
  },
  {
    title: "One link that ends 'where are you located?'",
    tagline: "Stop typing directions. One link puts your shop on their map.",
    time: "5 min",
    steps: [
      "Open Google Maps on your phone, find your shop, tap Share, copy the link.",
      "Save the link in a pinned Notes note titled Shop directions.",
      "Anyone who asks where you are gets the link. They get directions, your hours, and your reviews in one tap."
    ],
    win: "A customer who walks in and says your link took them right here.",
    post: "*5-minute mission, Tuesday.*\n\nWhere are you located? You type the same directions over and over, and some people still get lost.\n\nThe fix: one saved link.\n\nGoogle Maps, find your shop, Share, copy the link. Pin it in a Notes note titled \"Shop directions\".\n\nAnyone who asks gets the link. Directions, hours, and your reviews open in one tap. Nobody gets lost again.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nSave the link today, message me directly how it goes."
  },
  {
    title: "See who is calling before you answer",
    tagline: "Spam and customers sound the same on a ringing phone. Now they don't.",
    time: "5 min",
    steps: [
      "iPhone: Settings, Apps, Phone, Live Voicemail, turn it on. Pixel: Phone app, Settings, Call Screen, turn it on.",
      "When a strange number calls, let it go to the screen. You read what they say while they say it.",
      "Real customer? Pick up mid-call. Spam? Swipe it away without ever hearing their voice."
    ],
    win: "The first spam call you dodge while a real customer gets answered.",
    post: "*5-minute mission, Wednesday.*\n\nSpam and customers sound the same on a ringing phone. You either answer everything or dodge everything.\n\nThe fix: your phone screens the call for you.\n\nOn iPhone go to Settings, Apps, Phone, Live Voicemail and turn it on. On a Pixel open the Phone app, Settings, Call Screen, turn it on.\n\nWhen a strange number calls, let it go to the screen. You read what they say while they say it. Customer, you pick up mid-call. Spam, you swipe it away.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nTurn it on today, message me directly how it goes."
  },
  {
    title: "Receipts that file themselves",
    tagline: "Paper receipts die in your pocket. Photos live in one folder forever.",
    time: "5 min",
    steps: [
      "Google Drive on your phone. New folder, name it Receipts 2026.",
      "New rule: every business receipt gets a photo the second you pay. Drop it in the folder before you leave the store.",
      "At tax time, one folder, every receipt, done. Share the folder with your spouse or bookkeeper once."
    ],
    win: "Tax time with zero shoeboxes and zero digging through pockets.",
    post: "*5-minute mission, Thursday.*\n\nPaper receipts die in your pockets, your truck, your wallet. Come tax time you find half of them.\n\nThe fix: a photo habit and one folder.\n\nGoogle Drive, new folder named \"Receipts 2026\". New rule: every business receipt gets a photo the second you pay, dropped in the folder before you leave the store.\n\nAt tax time, one folder, every receipt, done. Share it with your spouse or bookkeeper once and they can pull what they need.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nMake the folder today, message me directly how it goes."
  },
  {
    title: "The Friday invoice nudge",
    tagline: "Unpaid invoices do not pay themselves. One saved note changes that.",
    time: "5 min",
    steps: [
      "Notes app. New note, title it Late payment nudge. Write: Hi [name], checking in on invoice [number] for [amount]. Can you pay this week?",
      "Set a phone reminder for every Friday at 4pm that says: Send payment nudges.",
      "Friday comes: paste the note to everyone over 14 days late. Two minutes, money back in the door."
    ],
    win: "A payment that lands Friday night from a note you almost forgot to send.",
    post: "*5-minute mission, Friday.*\n\nUnpaid invoices sit there quietly. The longer you wait, the longer they wait.\n\nThe fix: a Friday nudge you cannot forget.\n\nNotes app, new note titled \"Late payment nudge\". Write: \"Hi [name], checking in on invoice [number] for [amount]. Can you pay this week?\"\n\nSet a phone reminder every Friday at 4pm: Send payment nudges. When it fires, paste the note to everyone over 14 days late. Two minutes, money back in the door.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nWrite the note today, message me directly how it goes."
  },
  {
    title: "Back up your customer list tonight",
    tagline: "Your customers live in your phone. Phones die. Back up the list.",
    time: "5 min",
    steps: [
      "On your phone browser go to contacts.google.com and sign in.",
      "Export your contacts and save the file in Google Drive, in a folder named Business backups.",
      "Your list now survives a lost, broken, or stolen phone. Set a phone reminder to redo it on the first of every month."
    ],
    win: "Peace of mind: if your phone dies tomorrow, your customers are safe.",
    post: "*5-minute mission, Saturday.*\n\nYour whole customer list lives in your phone. One drop, one lost phone, and years of relationships are gone.\n\nThe fix: a 5-minute backup.\n\nPhone browser, contacts.google.com, sign in. Export your contacts and save the file in Google Drive, folder named \"Business backups\".\n\nYour list now survives a lost, broken, or stolen phone. Set a reminder to redo it on the first of every month.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nBack it up tonight, message me directly how it goes."
  },
  {
    title: "The Sunday money check",
    tagline: "The weekly boss mission. Check the week's systems and collect what they caught.",
    time: "5 min",
    steps: [
      "Call your business number and listen to your voicemail. Fix one word if it does not sound right anymore.",
      "Open your Receipts 2026 folder. Every receipt from this week in there? Snap the missing ones now.",
      "Check unpaid invoices. Send Friday's nudge to anyone you skipped. Then confirm every charge in your bank alerts this week was yours."
    ],
    win: "A Sunday where your systems checked out, your money is accounted for, and Monday starts clean.",
    post: "*5-minute mission, Sunday. Boss level.*\n\nThis week you set up 6 money systems. Tonight, check they are working and collect what they caught.\n\nThe check: call your business number and listen to your voicemail, fix one word if it sounds off. Open your Receipts 2026 folder and snap any missing receipts. Send Friday's invoice nudge to anyone you skipped. Then scan your bank alerts and confirm every charge this week was yours.\n\nFive minutes. Systems checked, money collected, Monday starts clean.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nRun the check tonight, message me directly what it found."
  }
]
};
