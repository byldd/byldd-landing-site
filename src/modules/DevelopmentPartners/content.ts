import type { ProductDevelopmentCampaignContent } from "@/components/campaign/product-development/types";

export const developmentPartnersContent = {
  hero: {
    headline: "While you're hiring, your",
    highlightedHeadline: "competitors are shipping.",
    description:
      "Byldd gives you a ready-to-execute product team that takes your startup from concept to launch in 45 days,without the delays and costs of hiring in-house.",
    stats: [
      { value: "100+", label: "Products built" },
      { value: "9.8/10", label: "Founder satisfaction" },
      { value: "45 Days", label: "Most products launched" },
      { value: "~$15K", label: "Typical investment" },
    ],
    formId: "dev-partner-form",
    formIdPrefix: "dev-partner-hero",
    submitLabel: "Get in touch",
  },
  backers: {
    heading: "Our portfolio companies are backed by",
    backers: [
      { src: "/brand/logos/google-new.svg", alt: "Google for Startups" },
      { src: "/brand/logos/yc.svg", alt: "Y Combinator" },
      { src: "/brand/logos/ember.svg", alt: "The Ember Company" },
      { src: "/brand/logos/newage.svg", alt: "New Age Capital" },
      { src: "/brand/logos/rg.svg", alt: "RG" },
      { src: "/brand/logos/tackelbox.svg", alt: "Tacklebox" },
    ],
  },
  process: {
    heading: "Here's How We Turn Your Idea Into A Working Product",
    steps: [
      {
        title: "Product Clarity",
        subtitle: "We Break Down Your Idea Into a Clear Product Thesis",
        items: [
          "Who exactly it serves",
          "What core problem it solves",
          "Where AI adds real value (and where it does not)",
          "What the MVP must include—and what it should avoid",
        ],
        result: "You leave with clarity, not ambiguity.",
        icon: "/campaign/dev-partner/bulb.svg",
        image: "/campaign/dev-partner/yellow-img.png",
        imageWidth: 704,
        imageHeight: 552,
        imageFirst: false,
        backgroundColor: "#f3ff8a",
      },
      {
        title: "System Design Before Code",
        subtitle: "Before Writing Code, We Design",
        items: [
          "System architecture",
          "Data requirements",
          "AI model strategy",
          "Scalability considerations",
          "Cost implications",
        ],
        result: "Prevents expensive rebuilds later.",
        icon: "/campaign/dev-partner/setting.svg",
        image: "/campaign/dev-partner/orange-img.png",
        imageWidth: 664,
        imageHeight: 552,
        imageFirst: true,
        backgroundColor: "#ff9a6a",
      },
      {
        title: "Lean Product Build",
        subtitle: "We Build a Production-Ready Software Designed For:",
        items: ["Real user feedback", "Market validation", "Iteration without chaos"],
        result: "Not bloated. Not over-engineered.",
        icon: "/campaign/dev-partner/thunder.svg",
        image: "/campaign/dev-partner/green-img.png",
        imageWidth: 746,
        imageHeight: 552,
        imageFirst: false,
        backgroundColor: "#b6ffd6",
      },
      {
        title: "Launch With Confidence",
        subtitle: "You Launch With:",
        items: ["Technical confidence", "A clear roadmap", "A foundation built to grow"],
        result: "No dependency traps. No hidden complexity.",
        icon: "/campaign/dev-partner/rocket.svg",
        image: "/campaign/dev-partner/purple-img.png",
        imageWidth: 814,
        imageHeight: 552,
        imageFirst: true,
        backgroundColor: "#b8d9ff",
      },
    ],
  },
  thinking: {
    eyebrow: "",
    heading: "You don't just need developers. You need",
    highlightedHeading: "product thinking.",
    standard: {
      title: "Traditional agencies",
      items: ["Agencies just code what you say", "Features first", "One-time project"],
    },
    preferred: {
      title: "The Byldd difference",
      items: [
        "We pressure-test your idea before writing code",
        "Market and revenue first",
        "A long-term product partner",
      ],
    },
  },
  testimonials: {
    id: "dev-partner-testimonials",
    headline: "Build products that investors and customers love.",
    sub: "Founders are RAVING about us.",
    showLogos: false,
  },
  flexibleTeam: {
    eyebrow: "",
    heading: "Control costs while hitting goals—at every stage.",
    lead: "Byldd gives you a flexible full-stack product team:",
    emphasizedLead: "engineers, designers, PM, QA and CTO oversight.",
    trailingLead: "Build only the team you need, when you need it.",
    ctaLabel: "Get started",
    ctaHref: "#strategy-call",
    image: "/case/team-flex.gif",
    imageAlt: "A flexible product team scaling around a founder's needs",
  },
  caseStudies: {
    eyebrow: "",
    heading: "Avoid costly mistakes with a team that has built 100+ successful products.",
    carouselLabel: "Product case studies",
    studies: [
      {
        title: "Rank and Rent Engine (RARE)",
        image: "/case/rare.webp",
        description:
          "We turned a fragmented Airtable-and-Twilio workflow into one scalable SaaS platform for SEO research, lead management, call tracking and billing. The first version launched with paying customers within 24 hours.",
        result: "50% less manual work",
      },
      {
        title: "Contra Padel",
        image: "/case/contra.webp",
        description:
          "A player-first sports ecosystem combining a mobile app, club platform and hardware data. Byldd delivered matchmaking, automated refunds and actionable performance insights under a tight timeline.",
        result: "Showcased at the Olympic Museum",
      },
      {
        title: "Between",
        image: "/case/between.webp",
        description:
          "A mobile-first maternal-care platform for matching clients with birth workers, automating contracts and reducing payment friction. The product launched in three months alongside its marketing site.",
        result: "Idea to market in 3 months",
      },
    ],
  },
  strategyCall: {
    sectionId: "strategy-call",
    eyebrow: "No-cost consultation",
    heading: "Book a 30-minute product strategy call",
    outcomes: [
      "Evaluate your idea’s technical feasibility",
      "Identify risks you may not see yet",
      "Outline a realistic product approach",
      "Discuss timelines and budget ranges",
      "Help you understand your next best step",
    ],
    closingText: "Even if we don't work together,",
    emphasizedClosingText: "you'll leave with clarity.",
    formHeading: "Get your no-cost product consultation",
    formDescription: "Tell us a little about your idea. NDA covered.",
    formIdPrefix: "dev-partner-footer",
    submitLabel: "Get in touch",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    heading: "What founders ask before we start",
    items: [
      {
        question: "How does it work? What is your process like?",
        answer:
          "We start with founder deep dives to understand the vision, market, customers and technical feasibility. Then we define user stories, map the experience, create wireframes and build in weekly demo cycles. Once launched, real customer feedback drives the next product decisions.",
      },
      {
        question: "How do I determine the product development cost?",
        answer:
          "Cost depends on platforms, feature complexity, design and integrations. Byldd specializes in lean launches and can usually build the first market-ready product for around $15K in under 45 days. We give you a realistic range on the first strategy call.",
      },
      {
        question: "What happens after the MVP is built?",
        answer:
          "We help you learn from early customers and turn that evidence into a longer-term scaling roadmap. When it makes sense, the team shifts from launch mode into continuous product development and infrastructure growth.",
      },
      {
        question: "Who owns the product and source code?",
        answer:
          "You do. One hundred percent of the product, source code and intellectual property belongs to you. You are never locked into a proprietary platform or dependent on Byldd to keep the product running.",
      },
      {
        question: "Do I need to be technical to work with you?",
        answer:
          "No. You bring the industry insight and customer understanding; we handle product strategy, architecture, design and engineering. Our process is built to give non-technical founders clear choices without unnecessary jargon.",
      },
      {
        question: "How are you different from a development agency?",
        answer:
          "We do not begin by blindly coding a feature list. Product leadership and structured validation come first, so engineering stays aligned with customer needs, revenue goals and the long-term business.",
      },
    ],
  },
} satisfies ProductDevelopmentCampaignContent;
