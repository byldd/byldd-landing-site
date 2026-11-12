export const pageMetadata = {
  title: "Launch your AI-built app in 30 days | Byldd",
  description:
    "Built your app with Lovable, Base44, Replit or Claude and stuck at 80%? Senior engineers review it, fix what is broken or unsafe, and launch it.",
} as const;

export const formContent = {
  heading: "Book a free build review",
  description: "30 minutes. Show us the app and we'll tell you what's blocking launch.",
  submitLabel: "Book my free build review",
  finePrint: "We sign NDAs before the first call as standard.",
  heroIdPrefix: "vibecoded-app-launch-hero",
  footerIdPrefix: "vibecoded-app-launch-footer",
} as const;

export const heroContent = {
  formSectionId: "build-review",
  eyebrow: "For founders who built it with AI",
  headline: "Built your app with AI and stuck at 80%?",
  highlightedHeadline: "Let's get it live in ~30 days.",
  description:
    "Senior engineers review what you built in Lovable, Base44, Replit or Claude, keep what works, fix what's broken or unsafe, and launch it. AI makes us fast; our engineers make it hold up.",
  offerLead: "Start with a 14-day pilot for $4,000.",
  offerText: "Not happy by day 14? You get all $4,000 back.",
  benefits: [
    "We keep what works. No starting over.",
    "We sign an NDA before you show us anything.",
    "You own the code.",
  ],
} as const;

export const statsContent = {
  ariaLabel: "Byldd in numbers",
  items: [
    { value: "100+", label: "Products built" },
    { value: "9.8/10", label: "Founder satisfaction" },
    { value: "30 days", label: "Launch plan" },
    { value: "$4,000", label: "Pilot, 14-day refund" },
  ],
} as const;

export const backersContent = {
  heading: "Our portfolio companies are backed by",
  backers: [
    { src: "/brand/logos/google-new.svg", alt: "Google for Startups" },
    { src: "/brand/logos/yc.svg", alt: "Y Combinator" },
    { src: "/brand/logos/ember.svg", alt: "The Ember Company" },
    { src: "/brand/logos/newage.svg", alt: "New Age Capital" },
    { src: "/brand/logos/rg.svg", alt: "RG" },
    { src: "/brand/logos/tackelbox.svg", alt: "Tacklebox" },
  ],
} as const;

export const painPointsContent = {
  eyebrow: "Where AI-built apps get stuck",
  heading: "Sound familiar?",
  items: [
    { icon: "code", text: "It looks finished, but half of it doesn't work." },
    { icon: "refresh", text: "Every time the AI fixes one thing, it breaks another." },
    { icon: "layers", text: "It's a front end with nothing real behind it." },
    { icon: "warning", text: "You're not sure your users' data is safe." },
    { icon: "clock", text: "Investors or a first customer are waiting." },
  ],
  closing: "You've taken it as far as AI can.",
  highlightedClosing: "We take it the rest of the way.",
} as const;

export const howItWorksContent = {
  sectionId: "plan",
  eyebrow: "How it works",
  heading: "From stuck to live in 30 days",
  description: "You see the review and real fixes before you decide whether to keep going.",
  timeline: {
    ariaLabel: "30-day launch timeline",
    pilotBand: "$4,000 pilot · all of it refundable until day 14",
    launchBand: "Fixed price, set in your review",
    phases: ["Review", "Fix", "Launch"],
    marks: ["Day 1", "Day 3", "Day 14 · decide", "Day 30 · live"],
  },
  steps: [
    { number: "01", when: "Days 1–3", title: "Review", text: "A senior engineer reviews your code, data, hosting and security. You get a written report: what we keep, what we fix, what's unsafe, and a fixed price to launch.", featured: false },
    { number: "02", when: "Days 4–14", title: "Fix", text: "We fix what blocks launch first: open data, the missing backend and the parts that break. You see it working in a demo every week.", featured: false },
    { number: "03", when: "Day 14", title: "Decide", text: "Keep going at the price in your report, or take all $4,000 back.", featured: true },
    { number: "04", when: "Days 15–30", title: "Launch", text: "We finish, test it with real users, and put it live on your domain or submit it to the App Store and Google Play.", featured: false },
  ],
} as const;

export const pilotContent = {
  sectionId: "pilot",
  eyebrow: "The pilot",
  heading: "What $4,000 gets you",
  benefits: [
    "The written build review, yours to keep",
    "14 days of fixes on your launch blockers",
    "A demo and a written update every week",
    "A fixed price for the rest of the work, with the $4,000 counted toward it",
    "All $4,000 back if you're not happy by day 14",
  ],
  price: "$4,000",
  duration: "14-day pilot",
  refundLead: "Not happy by day 14?",
  refundText: "You get all $4,000 back.",
  afterEyebrow: "After the pilot",
  afterText: "A fixed price, set in your review.",
  ctaLabel: "Book a free build review",
  ctaHref: "#review",
} as const;

export const trustContent = {
  eyebrow: "Security and ownership",
  heading: "Your idea, your code, your data",
  items: [
    { icon: "file", title: "NDA first", text: "We sign an NDA before you show us anything." },
    { icon: "branch", title: "You own the code", text: "The code is yours. No lock-in." },
    { icon: "key", title: "Keep your keys", text: "We use separate build keys. Your passwords and accounts stay yours." },
    { icon: "shield", title: "Security checked", text: "We check exposed keys, open databases and missing access rules." },
    { icon: "users", title: "Senior oversight", text: "A senior engineer works on your app with CTO and QA oversight." },
  ],
} as const;

export const comparisonContent = {
  heading: "You've taken it as far as AI can.",
  description: "Here's how the ways forward compare.",
  columns: ["", "Keep prompting the AI", "A friend or freelancer", "Another agency", "Byldd"],
  rows: [
    ["Uses what you built", "Yes", "Sometimes", "Often quotes a rebuild", "Keeps what works"],
    ["Checks security", "No", "Rarely", "Usually", "Yes, in the review"],
    ["Time to live", "Unknown", "Their spare time", "Often months", "30-day plan"],
    ["Cost", "Your time and credits", "Varies", "Full build price", "$4,000 pilot, refundable"],
    ["After launch", "You", "Maybe", "Paid support", "Support plan or handover"],
  ],
} as const;

export const testimonialsContent = {
  id: "proof",
  headline: "Founders who handed us their build",
  sub: "Real founders. Real products. Real launches—with Byldd as the engineering partner.",
  showLogos: false,
} as const;

export const caseStudiesContent = {
  eyebrow: "",
  heading: "Avoid costly mistakes with a team that has built 100+ successful products.",
  carouselLabel: "Product case studies",
  studies: [
    { title: "Rank and Rent Engine (RARE)", image: "/case/rare.webp", description: "Byldd partnered with entrepreneur Ryan Dalton to transform his fragmented Airtable- and Twilio-based rank-and-rent business into a scalable SaaS platform. The challenge was unifying SEO research, due diligence, CRM, call tracking, and billing in one seamless product. Our team designed and built RARE, integrating real-time SEO tools, automated lead management, and subscription billing. Despite complex API dependencies and multi-tenant architecture needs, the first version launched successfully with paying customers within 24 hours. Today, RARE saves users 50% of their time and drives growing subscription revenue.", result: "" },
    { title: "Contra Padel", image: "/case/contra.webp", description: "Sports-tech startup Contra Padel partnered with Byldd to build a player-first ecosystem combining a mobile app, club web platform, and Spider hardware integration for performance tracking. Existing platforms focused only on bookings, ignoring player engagement and cancellations. We delivered a product that automated matchmaking, streamlined club refunds, and decoded raw sensor data into actionable performance insights. Key challenges included binary hardware integration and building a phased matchmaking algorithm under tight timelines. The product was showcased at the Olympic Museum in Italy, earning recognition and positioning Contra Padel for investor traction.", result: "" },
    { title: "Between", image: "/case/between.webp", description: "Between was founded to improve how clients connect with birth workers, addressing challenges around discovery, contracts, and payment friction in maternal care. Byldd worked with the founders to refine their Figma designs and deliver a mobile-first product in three months. The platform enabled easy doula-client matching, automated contracts, empathetic notifications, and a dispute-first payment model to minimize awkward conversations. Challenges included reconciling inconsistent designs mid-project and integrating vendor payouts. Despite problems, the product launched successfully alongside a marketing site, giving the founders a live solution to validate in-market and scale further.", result: "" },
  ],
} as const;

export const teamContent = {
  teamHeading: "Who works on your app",
  teamItems: ["A senior engineer on your app day to day", "CTO oversight of every change", "QA before anything goes live", "One person you message for updates and questions"],
  afterHeading: "After launch",
  afterItems: [
    { title: "Keep us on", text: "A support plan: we fix bugs and keep your app running after launch." },
    { title: "Take it back", text: "Docs and a handover call, so you or your developer can carry on." },
    { title: "Grow with a team", text: "When you're ready, add a monthly product team that scales with you." },
  ],
} as const;

export const reviewContent = {
  sectionId: "review",
  eyebrow: "Free · 30 minutes",
  heading: "Book a free build review",
  outcomes: ["Show us the app. A screen share is enough; no code access needed yet.", "Hear what's most likely blocking launch, and whether it's safe for real users.", "See what the pilot would cover for your app, and what it would cost after.", "Bring your co-founder or investor if they're part of the decision."],
  closing: "Even if we don't work together, you'll leave with clarity.",
  note: "We sign an NDA before the call. The written review is part of the paid pilot.",
} as const;

export const faqContent = {
  eyebrow: "Frequently asked questions",
  heading: "What founders ask before we start",
  items: [
    { question: "Will you keep what I built, or start over?", answer: "We keep what works. Your review shows what we keep, what we fix and anything we would rebuild—and why—before you spend more than the pilot." },
    { question: "What does it cost after the pilot?", answer: "Your review ends with a fixed price for the rest of the work to launch, and the $4,000 counts toward it." },
    { question: "How does the refund work?", answer: "If you are not happy by day 14, tell us and we refund the full $4,000." },
    { question: "What exactly do I get for the pilot?", answer: "A written review of your build that is yours to keep, 14 days of fixes on what is blocking launch, a demo and written update every week, and a fixed price for the rest." },
    { question: "Is my users’ data safe?", answer: "Security is part of every review. We check for exposed keys, open databases, missing access rules and other issues AI tools often leave behind, then fix open issues before launch." },
    { question: "Do you need my passwords, API keys or Stripe access?", answer: "No. We set up separate keys for the build, and you keep control of your accounts." },
    { question: "Which tools do you work with?", answer: "Lovable, Base44, Bolt, Replit, Claude, ChatGPT, Cursor and others. If you can export the code, we can work on it." },
    { question: "Can you get it into the App Store and Google Play?", answer: "Yes. App-store preparation and submission can be included in the launch plan." },
    { question: "Who fixes bugs after launch?", answer: "You can keep us on a support plan, or take the product back with documentation and a handover call." },
    { question: "Who owns the product and source code?", answer: "You do. One hundred percent of the product, source code and intellectual property belongs to you. There is no proprietary lock-in." },
    { question: "Do I need to be technical?", answer: "No. You bring the product and customer insight; we handle the engineering and explain every choice without jargon." },
  ],
} as const;
