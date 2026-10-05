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
"2026-10-05": [
  {
    title: "The deposit text that ends no-shows",
    tagline: "Chasing customers who ghost is free labor. Get paid before you start.",
    time: "5 min",
    steps: [
      "Open the payment app you use (Stripe, Square, PayPal, whatever) and make a payment link for your deposit amount.",
      "Notes app, new note titled Deposit ask. Write: To lock your date, the deposit is $[X], pay here: [your link]. The balance is due when the job is done.",
      "New rule starting today: no name goes on the calendar until the deposit lands. Say it exactly like that."
    ],
    win: "The first customer who pays the deposit before you lift a finger, and actually shows up.",
    post: "*5-minute mission, Monday.*\n\nYou drive across town and the customer is not home. You waited, they ghosted, you worked for free.\n\nThe fix: a deposit before the date.\n\nMake a payment link for your deposit amount in whatever app you take payments with. Then save a note titled \"Deposit ask\": \"To lock your date, the deposit is $[X], pay here: [link]. The balance is due when the job is done.\"\n\nNew rule: no name goes on the calendar until the deposit lands. The customers who pay show up. The ones who were going to ghost, ghost now, before they cost you a trip.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nWrite the note today, message me directly how it goes."
  },
  {
    title: "Job photos that sell your next job",
    tagline: "Your best work disappears the day you finish it. Keep it selling for you.",
    time: "5 min",
    steps: [
      "Google Photos on your phone. New album, name it Our Work.",
      "New rule: every job gets two photos, one before and one after. Drop both in the album before you leave the site.",
      "Put the album link in your quote note. Now every quote carries proof, not promises."
    ],
    win: "A customer who says I saw your work in the photos, when can you come?",
    post: "*5-minute mission, Tuesday.*\n\nYour best work vanishes the day you finish the job. The next customer cannot see it, so you sell on promises.\n\nThe fix: a photo habit and one album.\n\nGoogle Photos, new album named \"Our Work\". New rule: every job gets a before photo and an after photo, dropped in the album before you leave.\n\nThen put the album link in your quote note. Every quote now carries proof. Customers buy what they can see.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nMake the album today, message me directly how it goes."
  },
  {
    title: "The birthday text machine",
    tagline: "One birthday text a month buys more loyalty than any ad.",
    time: "5 min",
    steps: [
      "Open your Contacts and pick your 10 best customers.",
      "Add the birthday field to each one. Ask them next visit, or check their Facebook page.",
      "When the phone reminds you, send: Happy birthday from all of us at [business]. Hope it is a good one. That is the whole machine."
    ],
    win: "A quiet customer who books again because you remembered their birthday.",
    post: "*5-minute mission, Wednesday.*\n\nLoyalty is not a punch card. It is being remembered.\n\nThe fix: your phone already knows the dates, you just never gave it the birthdays.\n\nOpen Contacts, pick your 10 best customers, add the birthday field to each. Ask them next visit or check their Facebook page.\n\nWhen the reminder pops, send: \"Happy birthday from all of us at [business]. Hope it is a good one.\" One text a month, and you are the business that remembers.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nAdd the birthdays today, message me directly how it goes."
  },
  {
    title: "Label every chat so nobody slips",
    tagline: "Money hides in forgotten chats. Labels drag it into the light.",
    time: "5 min",
    steps: [
      "WhatsApp Business: open any chat, tap the name, Labels, and make four: New lead, Quote sent, Waiting on money, Job done.",
      "Go through your last 20 chats and label each one. Ten minutes of tapping, once.",
      "Friday night: tap the Waiting on money label. Follow up every name there. That label is now your money list."
    ],
    win: "A payment you had forgotten about, caught by a label and collected the same night.",
    post: "*5-minute mission, Thursday.*\n\nYour money is hiding in chats you forgot to answer. Quotes you sent, payments you never chased.\n\nThe fix: four labels.\n\nWhatsApp Business, open a chat, tap the name, Labels, make four: \"New lead\", \"Quote sent\", \"Waiting on money\", \"Job done\". Label your last 20 chats.\n\nFriday night, tap \"Waiting on money\" and follow up every name there. That label is your money list now.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nMake the labels today, message me directly how it goes."
  },
  {
    title: "Raise one price tonight",
    tagline: "Your costs went up this year. Your prices should too.",
    time: "5 min",
    steps: [
      "Pick the service you sell the most. That is the one.",
      "Raise it by a step you can say with a straight face. Five dollars on a small job, ten percent on a big one.",
      "Update it in three places: your quote template note, your WhatsApp catalog, your Google Business Profile. Same night, done."
    ],
    win: "Your first week at the new price: same customers, more money in the door.",
    post: "*5-minute mission, Friday.*\n\nEverything you buy costs more than it did last year. Your prices are the one bill you control, and you have not touched them.\n\nThe fix: raise one price tonight.\n\nPick the service you sell the most. Raise it by a step you can say with a straight face: five dollars on a small job, ten percent on a big one.\n\nThen update it in three places: your quote template, your WhatsApp catalog, your Google Business Profile. Same night, done. Same work, more money.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nRaise it tonight, message me directly how it goes."
  },
  {
    title: "Set your holiday hours before customers guess wrong",
    tagline: "November is coming. Your Google page should already know your holidays.",
    time: "5 min",
    steps: [
      "Open your Google Business Profile app. Go to Hours, then Special hours.",
      "Add Thanksgiving, Christmas Eve, Christmas Day, and New Year's Day now, while you are thinking about it.",
      "Add one line to your voicemail greeting: Holiday hours are on our Google page. Customers check before they drive."
    ],
    win: "A holiday season with zero customers showing up to a locked door.",
    post: "*5-minute mission, Saturday.*\n\nEvery holiday season, customers drive to a closed shop because your hours online said nothing.\n\nThe fix: set the holidays now, in October, while you are thinking about it.\n\nGoogle Business Profile, Hours, Special hours. Add Thanksgiving, Christmas Eve, Christmas Day, New Year's Day.\n\nThen add one line to your voicemail greeting: \"Holiday hours are on our Google page.\" Customers check before they drive, and nobody shows up to a locked door.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nSet the hours today, message me directly how it goes."
  },
  {
    title: "The Sunday close-out",
    tagline: "The weekly boss mission. Close the week, collect the money, start clean.",
    time: "5 min",
    steps: [
      "Check this week's bookings. Any name on the calendar with no deposit? Text them the deposit ask tonight.",
      "Open your Our Work album. Any job this week missing its before and after? Add the photos now.",
      "Tap your Waiting on money label. Any name still there gets the nudge tonight. Then glance at next week: any customer birthdays coming up? Write the text now."
    ],
    win: "A Sunday where every job is paid, every photo is filed, and Monday starts with money already moving.",
    post: "*5-minute mission, Sunday. Boss level.*\n\nThis week you built 6 money systems. Tonight, close the week and collect what they caught.\n\nThe close-out: any booking with no deposit gets the deposit text tonight. Open your Our Work album and add any photos missing from this week's jobs. Tap your Waiting on money label and nudge every name still there. Then glance at next week: any customer birthdays? Write the text tonight.\n\nFive minutes. Every job paid, every photo filed, Monday starts with money already moving.\n\nUse it in your business, or set it up for a client. Same 5 minutes either way.\n\nFree resource, the full setup: https://blueprint.nobsai.com?ref=NB-SHARE\n\nRun the close-out tonight, message me directly what it found."
  }
]
};
