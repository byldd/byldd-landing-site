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
  { label: "Blog", href: "/blog" },
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
  headline: "What Byldding with us looks like",
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
    q: "How does it work? What is your process like?", 
    a: "<p>We’ll start with a few deep dives with the founder. The purpose of the deep dives is to figure out the product vision, industry analysis, competitor analysis, and product strategy. We do about 2-3 deep dives to fully understand the founder’s vision and also to figure out technical feasibility and alternatives. This helps us nail down what problem we’re trying to solve and for whom. This helps us narrow down and identify our beachhead customers.</p><p>These will be the first set of customers that we’ll be going after, and we’ll define the scope of the product according to their most pressing problems.</p><p>Once we’ve identified the target audience, we then nail down all the user stories. User stories are a compilation of everything that the platform needs to do, starting with the basics like “Users should be able to log in” to nailing down the complexities of exactly how the product will function.</p><p>With the user stories defined, we create the user journeys and the low fidelity wireframes. This gives us a good idea of how users will interact with the product. We iterate over these as many times as necessary to make sure we’re creating the best, most intuitive experience for users. User experience is critical to the success of an app, and we want to make sure that end users can immediately figure out how to use a product without needing any kind of instruction.</p> <p>We then work on high fidelity wireframes - in this phase, we finalize all of the aesthetic aspects of the product, including color themes, fonts, etc. Once again, we can experiment and play with a lot of options here and finalize whatever feels best.</p> <p>The finished hi-fed wireframes will give us an exact idea of what the final product is going to look like. We only kick off the development phase once we’re fully satisfied with those wireframes.</p><p>During the development phase, we have weekly demo calls where we’ll show you the progress made and finalize product decisions. You’ll also have access to a demo app where you will have the ability to play with the product yourself. We’ll keep doing this until the product is fully developed.</p><p>Once the product is developed, we’ll help you market it to your target audience and get your initial paying customers. These customers are going to be incredibly valuable - not only for the revenue they give us, but because they feel the problem so acutely that they were willing to pay to experiment with a brand new product. Their feedback will help us drive further product development and scale the business. Paying customers are also the best way to validate and de-risk a venture. These customers will help us go to angels and seed-stage VCs for fundraising.</p><p>Once we’ve gotten this validation, we’re able to build a multi-month product scaling strategy. We shift to a longer term development process where we have a dedicated product team working exclusively with you over several months or years to achieve that vision.</p>",

  },
  {
    q: "How do I determine the product development cost?",
    a: "<p><strong>Byldd is able to build and launch the product for about $15K and in under 45 Days. We’ll talk about how we do that in a moment.</strong> Investment for product typically depends on a number of factors. Ultimately, it comes down to how many developer hours you need to build a product that is good enough to get paying customers. The simpler the product, the less developer hours you need and smaller your investment is going to be. You can read more about <a href=\"https://byldd.com/how-much-does-it-cost-to-build-an-app-part-1/\" style=\"color: blue;\">product development cost here</a>, but some of the factors that affect developer hours are:</p><p>Supported platforms (browser/web, iOS, Android, macOS, Windows, etc.) Number and complexity of the core features Complexity of the design Number and complexity of third-party integrations</p><p>Typically this can be anywhere from $30K to $50K and take 3 to 6 months, depending on the geography and experience of the development team. Byldd, however, specializes in launching products and can usually do it for under $15K and within 45 Days. We’re able to hit this price point because we’ve standardized the product development process by creating reusable blocks for common functionalities. Things like login, registration, payments, subscriptions, admin dashboards and more work out of the box and don’t cost any extra developer dollars or time. We provide these for free to all entrepreneurs that work with us to build their products. Beyond that, we have a really robust (read intense) process where we are in constant touch with founders, doing bi-weekly user experience reviews and product demos to make sure everyone is on the same page and we maintain development velocity.</p>",


  },
  {
    q: "What happens after the product is built?",
    a: "<p>Once the product is developed, we’ll help you market it to your target audience and get your initial paying customers. These customers are going to be incredibly valuable - not only for the revenue they give us, but because they feel the problem so acutely that they are willing to pay to experiment with a brand new product. Their feedback will help us drive further product development and scale the business. Paying customers are also the best way to validate and de-risk a venture. These customers will help us go to angels and seed-stage VCs for fundraising.</p><p>Once we’ve gotten this validation, we’re able to build a multi-month product scaling strategy. We shift to a longer-term development process where we have a dedicated product team working exclusively with you over several months or years to achieve that vision.</p><p><strong>Our goal is to help you build a business from this idea, not for us to build an app as a one-off ticket. We’re here to help you make sure this is a successful product in the long term.</strong></p>",

  },
  {
    q: "Which stack do we use?",
    a: "We have a diverse range of expertise when it comes to technology stacks. We specialize in JavaScript stacks, including MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js), which are ideal for web development. Additionally, for mobile app development, we are well-versed in React Native. Beyond JavaScript, we also have specialists in Flutter, Swift, Kotlin, and Laravel, making us flexible and capable of adapting to various project requirements. Whether it's web or mobile development, our team is equipped to select the right stack that best suits your project's needs and ensures a successful outcome.",
  },
  {
    q: "Who owns the product?",
    a: "100% of the ownership and intellectual property belongs to the entrepreneur with the idea. We just use our expertise to help you build and launch the product. In some cases, we offer funding for a small portion of equity. This is determined on a case by case basis.",
  },
  {
    q: "What happens on the first call?",
    a: "On our first call, we'll touch on the core problem you're trying to solve and how you think we should go about it. I'll be able to give you an estimate on the timeline and investment amount on the call itself - no hiding pricing and asking for multiple follow up calls. We aim to build products in under 45 Days and for less than $15K.",
  },
  {
    q: "Who handles the project management?",
    a: "We provide end-to-end product development services and handle all project and product management internally to deliver the finished, polished product to you. We keep you in the loop with weekly meetings but you don’t need to worry about resource or project management.",
  },
  {
    q: "Are you like Bubble and other no-code platforms?",
    a: "We are not a platform and founders who work with us aren't locked into any platfrom. The final deliverable if you choose to work with Byldd will be a unique, fully-customizable codebase that is independent of any 3rd parties and which you have 100% ownership of.",
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
        { label: "Blog", href: "/blog" },
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
    { label: "Instagram", href: "https://www.instagram.com/byldddev/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/byldd" },
    { label: "YouTube", href: "https://youtube.com/@byldddev?si=AxV0Wei8LB4L-Do7" },
  ],
  address: "32 Saint Marks Place, New York, NY 10003",
  email: "contactus@byldd.com",
} as const;
