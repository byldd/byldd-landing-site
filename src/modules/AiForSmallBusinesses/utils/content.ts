export const stats = [
  ["100+", "AI systems shipped"],
  ["10 days", "From call to running in your business"],
  ["~12 hrs", "Typical weekly hours given back per team"],
  ["9.8/10", "Client satisfaction"],
] as const;

export const problems = [
  {
    title: "Tool graveyard",
    description:
      "Six subscriptions, none talking to each other, and your team still copy-pasting between them.",
  },
  {
    title: "Quotes priced by guesswork",
    description:
      'Agencies pitch $80k “AI transformations” for a problem a $12k system solves in a month.',
  },
  {
    title: "Nobody to own it",
    description:
      "You don't have a CTO, and the person who set it up left. So it slowly breaks and gets abandoned.",
  },
] as const;

export const useCases = [
  {
    title: "Front-desk assistant",
    description:
      "Answers calls, texts and web chat with your real answers on pricing, hours and availability, then books the job.",
    bestFor: "services, clinics, retail",
  },
  {
    title: "Quote & proposal engine",
    description:
      "Turns a photo, spec or call transcript into a priced quote in your format, ready for you to approve and send.",
    bestFor: "trades, contractors, agencies",
  },
  {
    title: "Follow-up that never forgets",
    description:
      "Every lead chased on a schedule, in your voice, until they book or say no. Recovers the ones you lose to silence.",
    bestFor: "anyone with a leaky pipeline",
  },
  {
    title: "Paperwork killer",
    description:
      "Invoices, receipts, POs and timesheets read and filed into your accounting stack. No more Friday data entry.",
    bestFor: "ops-heavy, multi-location",
  },
  {
    title: "Ask-your-business dashboard",
    description:
      '“Which service made us the most last quarter?” Typed in plain English, answered from your own numbers.',
    bestFor: "owners flying blind on data",
  },
  {
    title: "Internal know-how bot",
    description:
      "Your SOPs, warranties and pricing rules, answered instantly for staff, so new hires stop asking you.",
    bestFor: "teams of 5–100",
  },
] as const;

export const processSteps = [
  {
    day: "Day 1",
    title: "Find the money leak",
    description:
      "A 30-minute call. We rank your use cases by payback and pick the one worth doing first.",
  },
  {
    day: "Day 2",
    title: "Fixed plan & price",
    description:
      "Scope, integrations, timeline and one number. You approve before anything is built.",
  },
  {
    day: "Day 3–9",
    title: "Build in your stack",
    description:
      "We wire it into your tools, test it on your real data, and you see progress every day.",
  },
  {
    day: "Day 10",
    title: "Hand over & watch it work",
    description:
      "Your team trained, accounts in your name, and a monthly check-in so it keeps earning.",
  },
] as const;

export const testimonials = [
  {
    stat: "50% less admin time",
    quote:
      "We were running the whole business across Airtable and Twilio. Byldd unified research, tracking and billing into one product, and we had paying customers within 24 hours of launch.",
    name: "Ryan Dalton",
    role: "Founder, RARE",
  },
  {
    stat: "Live in 3 months",
    quote:
      "They took messy designs and shipped a mobile-first product with automated contracts and payouts. We had something real to put in front of clients.",
    name: "Sheereen Brown",
    role: "Founder, Between",
  },
  {
    stat: "No dev team needed",
    quote:
      "I'm not technical. They handled strategy, architecture and build, and explained every decision in plain English. It just worked.",
    name: "Jasie Dunk",
    role: "Founder & CEO, Decimal",
  },
] as const;

export const faqs = [
  {
    question: "What does an AI project actually cost for a business my size?",
    answer:
      "Most first projects land between $8,000 and $25,000 for a single, scoped workflow, with the number quoted on your first call rather than after three discovery meetings. If the payback math doesn't work, we'll tell you to skip it.",
  },
  {
    question: "We're small. Do we have enough data for AI?",
    answer:
      "Almost certainly yes. Your invoices, emails, call notes and spreadsheets are data. When there genuinely isn't enough, we start with off-the-shelf models and plug your data in as it accumulates.",
  },
  {
    question: "Will this replace my staff?",
    answer:
      "That's not what we build. The systems take the repetitive parts, like data entry, first replies and chasing follow-ups, so the same team handles more work without a new hire.",
  },
  {
    question: "Can it work with the software we already use?",
    answer:
      "Yes. QuickBooks, Google Workspace, Shopify, HubSpot, Jobber, and Excel: if it has an export or an API, we can wire into it. We'll confirm your specific stack on the call.",
  },
  {
    question: "What happens if it breaks after you leave?",
    answer:
      "You get documentation, trained staff, and accounts in your own name. Support and monitoring plans are optional, not a hostage situation.",
  },
  {
    question: "Is our customer data safe?",
    answer:
      "We follow SOC2, GDPR and HIPAA-aligned practices: encryption, anonymization where possible, and controlled access. Your data isn't used to train anyone else's model.",
  },
] as const;
