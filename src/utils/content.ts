/**
 * Centralized homepage copy + data.
 * Voice: the new Studio Tasa positioning — venture studio, "clarity before code",
 * "stop building the wrong product". Facts (metrics, founder, address, services)
 * are the real Byldd details carried over from byldd.com.
 */

export const nav = [
  { label: "What We Build", href: "/services" },
  { label: "How We Work", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;

/**
 * Technologies we work with — blurb and item labels carried over verbatim from
 * the current byldd.com homepage. `icon` keys map into components/brand/icons.
 */
export const technologies = {
  blurb:
    "From fresh builds to complete overhauls, we deliver solutions with technologies that move faster than the industry's best.",
  items: [
    { label: "AI", icon: "ai" },
    { label: "Machine Learning", icon: "machine-learning" },
    { label: "Cloud", icon: "cloud" },
    { label: "Natural Language Processing", icon: "nlp" },
    { label: "Web3 / Blockchain", icon: "web3" },
    { label: "API Development & Integration", icon: "api" },
    { label: "DevOps and Automation", icon: "devops" },
    { label: "Workflow Automation", icon: "workflow-automation" },
    { label: "Agentic AI", icon: "agentic-ai" },
    { label: "Data Engineering and Analytics", icon: "data-engineering" },
  ],
} as const;

/** Industries we serve — names carried over from the current site's carousel. */
export const industries = [
  { label: "Healthcare", icon: "healthcare" },
  { label: "FinTech", icon: "fintech" },
  { label: "Restaurant", icon: "restaurant" },
  { label: "Travel", icon: "travel" },
  { label: "Banking", icon: "banking" },
  { label: "Fitness", icon: "fitness" },
  { label: "Entertainment", icon: "entertainment" },
  { label: "E-Commerce", icon: "e-commerce" },
  { label: "Construction", icon: "construction" },
  { label: "Politics", icon: "politics" },
  { label: "Logistics", icon: "logistics" },
  { label: "Supply Chain", icon: "supply-chain" },
  { label: "Insurance", icon: "insurance" },
  { label: "Real Estate", icon: "real-estate" },
  { label: "Retail", icon: "retail" },
  { label: "Education", icon: "education" },
] as const;

export const stats = [
  { num: 100, decimals: 0, suffix: "+", label: "Products launched" },
  { num: 45, decimals: 0, suffix: "", label: "Days to revenue" },
  { num: 9.8, decimals: 1, suffix: "", label: "Average client NPS" },
  { num: 100, decimals: 0, suffix: "%", label: "Client retention post product launch" },
] as const;

/** Audience-split service catalog — mirrors the old site's Startup/Enterprise toggle. */
export const audiences = [
  {
    key: "startups",
    tab: "For Startups",
    headline: "Idea to revenue in 45 days.",
    sub: "Whether you're starting from scratch or taking your startup to the next stage, Byldd helps expert non-technical founders build and grow their tech businesses.",
    backedByLabel: "Our partner companies are backed by",
    backedBy: ["Google", "Y Combinator", "Tacklebox", "Ember Co."],
    logos: [
      { src: "/brand/logos/google-new.svg", alt: "Google for Startups" },
      { src: "/brand/logos/yc.svg", alt: "Y Combinator" },
      { src: "/brand/logos/tackelbox.svg", alt: "Tacklebox" },
      { src: "/brand/logos/newage.svg", alt: "New Age" },
      { src: "/brand/logos/rg.svg", alt: "RG" },
      { src: "/brand/logos/ember.svg", alt: "The Ember Company" },
    ],
    items: [
      { slug: "mvp-development-services", title: "MVP Development", blurb: "Launch and validate your MVP fast with Byldd's agile team." },
      { slug: "ai", title: "AI Services", blurb: "Infuse AI into your product for smarter, data-driven growth." },
      { slug: "workflow-automation", title: "Workflow Automation", blurb: "Automate tasks to save time and scale your early-stage ops." },
      { slug: "app-development-company", title: "Mobile App Development", blurb: "Design, build, and launch mobile apps users love to use daily." },
      { slug: "software-development-company", title: "Software Development", blurb: "Custom software that scales as your startup grows faster." },
      { slug: "digital-transformation", title: "Digital Transformation", blurb: "Go digital from day one and build agile, cloud-native systems." },
    ],
  },
  {
    key: "enterprise",
    tab: "For Enterprise",
    headline: "Secure, scalable, modern solutions.",
    sub: "We help enterprises scale and modernize operations with digital transformation, AI, and workflow automation.",
    backedByLabel: "Featured by leading platforms",
    backedBy: ["Yahoo Finance", "The Manifest", "Starter Story", "Businesswire"],
    logos: [
      { src: "/brand/logos/yahoo.png", alt: "Yahoo Finance" },
      { src: "/brand/logos/manifest.png", alt: "The Manifest" },
      { src: "/brand/logos/starter-story.png", alt: "Starter Story" },
      { src: "/brand/logos/businesswire.png", alt: "Businesswire" },
    ],
    items: [
      { slug: "ai", title: "AI Services", blurb: "Build scalable AI systems to enhance operations and insights." },
      { slug: "workflow-automation", title: "Workflow Automation", blurb: "Streamline workflows and reduce manual effort with AI." },
      { slug: "digital-transformation", title: "Digital Transformation", blurb: "Modernize legacy tech with scalable digital transformation." },
      { slug: "enterprise-mobile-app-development", title: "Mobile App Development", blurb: "Deliver secure, scalable mobile apps for your global teams." },
      { slug: "enterprise-software-development-company", title: "Software Development", blurb: "Enterprise-grade software built for performance and control." },
      { slug: "web-app-development-services", title: "Web App Development", blurb: "Design, build & scale secure web apps for enterprise efficiency." },
    ],
  },
] as const;

/** Partner + press logos (fetched from byldd.com) for the moving logo band. */
export const partnerLogos = [
  { src: "/brand/logos/google-new.svg", alt: "Google for Startups" },
  { src: "/brand/logos/yc.svg", alt: "Y Combinator" },
  { src: "/brand/logos/tackelbox.svg", alt: "Tacklebox" },
  { src: "/brand/logos/newage.svg", alt: "New Age" },
  { src: "/brand/logos/rg.svg", alt: "RG" },
  { src: "/brand/logos/ember.svg", alt: "The Ember Company" },
  { src: "/brand/logos/yahoo.png", alt: "Yahoo Finance" },
  { src: "/brand/logos/manifest.png", alt: "The Manifest" },
  { src: "/brand/logos/starter-story.png", alt: "Starter Story" },
  { src: "/brand/logos/businesswire.png", alt: "Businesswire" },
] as const;

export type TextTestimonial = {
  quote: string;
  name: string;
  company: string;
  role?: string;
  /**
   * Screenshot of the original review — the actual email, LinkedIn message or
   * Slack thread, as byldd.com publishes them on its testimonials page. They
   * render as image cards in the wall of love and open full size in the
   * lightbox. Files live in public/people.
   */
  image?: string;
};
/** Written testimonials — real client reviews carried over from byldd.com. */
export const textTestimonials: TextTestimonial[] = [
  {
    quote:
      "Working with Byldd has been a game-changer for me as a non-technical entrepreneur. When I first came to Byldd, Keepsake was merely an idea. Their team didn't just execute; they enriched the concept — turning my vision into a tangible reality.",
    name: "Jason Walker",
    image: "jason-blackbg.webp",
    company: "Keepsake",
  },
  {
    quote:
      "After going through so many unreliable engineers and cofounders, working with you guys has been a refreshing game-changer. I'm going to be recommending Byldd as THE people to talk to if you're a founder looking to build tech.",
    name: "Kimia Hangafarin",
    image: "userSeven.webp",
    company: "Shadow",
  },
  {
    quote:
      "Great design work — understood our vision for Rake from the beginning and nailed it from the first set of drafts. Your team has delivered beyond our expectations on our MVP build.",
    name: "Drew Torrey",
    image: "drew.webp",
    company: "Rake",
  },
  {
    quote:
      "The past year working with Vikas and the rest of the Byldd team has been fantastic. Vikas has proven to be truly dedicated to the success of our project and we couldn't ask for anything more.",
    name: "Jamie Friling",
    image: "james.webp",
    company: "Mulhern + Kulp",
  },
  {
    quote:
      "Collaborating with Byldd has truly transformed our journey at CIVA. Your team's knack for blending innovation with practical tech solutions has been key in elevating our platform.",
    name: "Jermaine Hartsfield",
    image: "jermain.webp",
    company: "CIVA",
  },
  {
    quote:
      "The team worked incredibly fast getting our (admittedly) complex MVP off the ground. I'll definitely recommend Byldd to anyone in my network that needs solid, fast, cost-efficient, and RELIABLE software development.",
    name: "Chris Wright",
    image: "userNine.webp",
    company: "Franzy",
  },
  {
    quote:
      "I just looked through all the work you've done with Rake. Absolutely fantastic job. We're excited to continue recommending you to our founders and alumni.",
    name: "Brian Scordato",
    image: "brain.webp",
    company: "Tacklebox Accelerator",
  },
  {
    quote:
      "We wanted to say thank you so much for your team's amazing work and due diligence. They have been great to work with and we truly appreciate all your team's efforts.",
    name: "Dylan Price",
    image: "userFour.webp",
    company: "ShowFleet",
  },
  {
    quote: "I can't say enough positive things about you and the team you've built. I'll be your reference anytime.",
    name: "Evelyne White",
    image: "userThree.webp",
    company: "Six Plus",
  },
];

/** Placeholder client logos (swap for real files at launch). */
export const clientLogos = [
  { src: "/brand/logos/clients/arrange.svg", alt: "Arrange" },
  { src: "/brand/logos/clients/between.svg", alt: "Between" },
  { src: "/brand/logos/clients/decimal.svg", alt: "Decimal" },
  { src: "/brand/logos/clients/keepsake.svg", alt: "Keepsake" },
  { src: "/brand/logos/clients/franzy.svg", alt: "Franzy" },
  { src: "/brand/logos/clients/civa.svg", alt: "CIVA" },
  { src: "/brand/logos/clients/rake.svg", alt: "Rake" },
  { src: "/brand/logos/clients/shadow.svg", alt: "Shadow" },
  { src: "/brand/logos/clients/automojo.svg", alt: "AutoMojo" },
  { src: "/brand/logos/clients/showfleet.svg", alt: "ShowFleet" },
  { src: "/brand/logos/clients/six-plus.svg", alt: "Six Plus" },
  { src: "/brand/logos/clients/mulhern-kulp.svg", alt: "Mulhern + Kulp" },
] as const;

/** Client testimonials — real partners + their YouTube videos from byldd.com. */
export const testimonials = {
  headline: "Our work speaks through our partners.",
  sub: "From seed-stage startups to Fortune 500 teams, Byldd delivers secure, scalable software — on time, on budget. Hear it from them.",
  /**
   * Reels with a real pull-quote. The quote is rendered by our own overlay
   * (VideoCard in testimonials.tsx) over each video's own YouTube thumbnail —
   * not byldd.com's baked-in poster images, whose white caption chip doesn't
   * match the brand. All six reels (featured + secondary) render through the
   * same card at the same size; only the presence of a quote differs.
   */
  featured: [
    { videoId: "BDurGQ7lzQo", quote: "We went from confusion to streamlined.", name: "Brian Gabay", company: "Arrange" },
    { videoId: "u_Ng_boYUFM", quote: "There would be no product without Byldd.", name: "Sheereen Brown", company: "Between" },
    { videoId: "Ckg0V_r8pGU", quote: "We were acquired by a larger fintech company.", name: "Jasie Dunk", company: "Decimal" },
    { videoId: "OFGVF2_WEIg", quote: "Pretty flawless.", name: "Dylan Price", company: "AutoMojo" },
  ],
  /**
   * Earnest and Ryan have no pull-quote anywhere in the source material —
   * checked the testimonials page, the homepage, and every YouTube thumbnail
   * variant; nothing exists to show. They render in the same card, same size,
   * as everyone else, just without a caption. Add a `quote` here to promote
   * either into a captioned card — no other change needed.
   */
  secondary: [
    { videoId: "riwXntvcJIs", name: "Earnest", company: "SoCon" },
    { videoId: "Jo73bd6GXwA", name: "Ryan Dalton", company: "Rare" },
  ],
  more: ["Rake", "Keepsake", "Franzy", "Six Plus", "Shadow", "CIVA", "ShowFleet", "Tacklebox Accelerator", "Mulhern + Kulp"],
} as const;

/** Homepage FAQ (condensed) — full list lives on /faqs. */
export const homeFaqs = [
  {
    q: "How does it work — what's your process like?",
    a: "Clarity before code. We pressure-test your idea with real evidence, cut it to what's worth building, then design, build, and ship with one senior team — idea to revenue in about 45 days.",
  },
  {
    q: "How do I determine the product development cost?",
    a: "Most MVPs come in under $15k. Larger builds and enterprise engagements vary with scope and integrations — we scope to outcomes and tell you honestly what a given result takes.",
  },
  {
    q: "What happens after the MVP is built?",
    a: "We instrument from day one so real usage guides what's next — then keep iterating with you, or hand a clean, maintainable codebase to your team. Flexible maintenance and scaling packages are available.",
  },
  {
    q: "Who owns the product?",
    a: "You do — 100%. All code, assets, and documentation belong to you from day one.",
  },
  {
    q: "What happens on the first call?",
    a: "A quick discovery call: we dig into your goals, scope, and timeline — and tell you honestly how we'd approach it, and whether we're the right partner.",
  },
  {
    q: "Are you like Bubble and other no-code platforms?",
    a: "No — we write production-grade custom code. No-code is great for prototypes; we build products designed to scale, integrate, and be owned outright.",
  },
] as const;

export const services = [
  {
    slug: "mvp-development-services",
    title: "MVP Development",
    blurb:
      "Turn an idea into a working, validated MVP in ~45 days — built lean, shipped to real users fast.",
  },
  {
    slug: "app-development-company",
    title: "App Development",
    blurb:
      "iOS, Android, web and cross-platform apps engineered with clarity and designed to scale from day one.",
  },
  {
    slug: "software-development-company",
    title: "Software Development",
    blurb:
      "Custom and enterprise software that grows with you — clean architecture, no bloat, built to last.",
  },
  {
    slug: "ai",
    title: "AI Implementation",
    blurb:
      "Copilots, agents and AI workflows woven into your product for smarter, data-driven growth.",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    blurb:
      "Automate the busywork so a lean team can operate — and scale — like one many times its size.",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    blurb:
      "Go cloud-native and agile from the start, modernising the systems your business runs on.",
  },
] as const;

export const steps = [
  {
    no: "01",
    title: "Understand better",
    blurb:
      "We pressure-test the idea against real users and evidence before a line of code is written. Clarity before code.",
  },
  {
    no: "02",
    title: "Decide smarter",
    blurb:
      "We cut features that won't move the needle and align around the few that will — so investment goes where it matters.",
  },
  {
    no: "03",
    title: "Build what matters",
    blurb:
      "A focused, flexible team designs, builds and ships the product — engineered to scale, designed to last.",
  },
  {
    no: "04",
    title: "Launch & grow",
    blurb:
      "From idea to revenue in 45 days, then iterate with confidence backed by what real customers actually do.",
  },
] as const;

export const testimonial = {
  pullQuote: "Get founders in front of customers — as fast as humanly possible.",
  paragraphs: [
    "I started Byldd because I saw founders spending exorbitant amounts of time and money trying to launch software businesses. Typically, founders spend too much time over-engineering their product and too little time validating it with customers. Beyond that, the bulk of their investment went into building generic, undifferentiated features and functionality — leading to over-engineered products that took too long, cost too much and solved no market need.",
    "My team and I are looking to change this stereotype by helping founders get in front of customers with the product as quickly as humanly possible. Byldd is focused on product development for startups with a commitment to being lean and helping founders build successful businesses.",
  ],
  name: "Ayush Singhvi",
  role: "Founder & CEO, Byldd",
} as const;

export const footer = {
  columns: [
    {
      heading: "What We Build",
      links: [
        { label: "MVP Development", href: "/services/mvp-development-services" },
        { label: "App Development", href: "/services/app-development-company" },
        { label: "Software Development", href: "/services/software-development-company" },
        { label: "AI Implementation", href: "/services/ai" },
        { label: "Workflow Automation", href: "/services/workflow-automation" },
        { label: "Digital Transformation", href: "/services/digital-transformation" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "How We Work", href: "/#process" },
        { label: "About", href: "/about" },
        { label: "Insights", href: "/blog" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  address: "32 Saint Marks Place, New York, NY 10003",
  email: "contactus@byldd.com",
} as const;
