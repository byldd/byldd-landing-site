/**
 * Service catalog — one source of truth for the /services hub, the Services
 * mega-menu, and every /services/[slug] detail page.
 *
 * Copy is carried over VERBATIM from the current byldd.com by design. That
 * includes the original's own defects: card
 * bodies that describe the previous card's title, truncations ("journe",
 * "Make (Inte..", "App Developmen"), a stray "**", and group labels that file
 * tools under the wrong heading. Do not "fix" these without asking — they are
 * deliberate fidelity, not oversights.
 *
 * app-development-company and software-development-company intentionally have
 * NO techStack: the original pages have no tools section.
 */

import type { IconName } from "@/components/brand/icons";
import type { PageSection } from "@/modules/Services/types/page-section";

export const serviceCategories = [
  "App Development",
  "Software Development",
  "MVP Development",
  "Workflow Automation",
  "AI Implementation",
  "Digital Transformation",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export type TechStackData = {
  /** Verbatim section heading from the original page. */
  heading: string;
  lead?: string;
  /** True for the MVP page, which uses one flat marquee rather than groups. */
  ungrouped?: boolean;
  groups: { group: string; items: { label: string; logo?: string }[] }[];
};

export type Service = {
  slug: string;
  /** Short label for cards, nav and breadcrumbs. */
  title: string;
  category: ServiceCategory;
  /** This page is the category's own landing page (not a sub-service). */
  isCategoryLanding?: boolean;
  /** Slug of the parent landing page, for sub-services. */
  parent?: string;
  icon: IconName;
  /** H1 from the current site. */
  heading: string;
  tagline: string;
  intro: string;
  stats?: { value: string; label: string }[];
  /** USP / "why us" bullets. */
  benefits: { title: string; body: string }[];
  /** "From idea to adoption" steps. Empty when the source page has none. */
  process: { step: string; blurb: string; icon: IconName }[];
  /** Page-specific sections, in the original's order. */
  sections: PageSection[];
  techStack?: TechStackData;
  faqs: { q: string; a: string }[];
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "app-development-company",
    title: "App Development",
    category: "App Development",
    isCategoryLanding: true,
    icon: "app",
    heading: "App Development Company",
    tagline: "End-to-end app development that balances startup speed with enterprise reliability — from MVPs to full-scale products across iOS, Android, and Web.",
    intro: "Anyone can “build an app.” The difference is building an app that actually gets traction. At Byldd, our pods blend product strategy, design, and engineering to help founders validate faster and enterprises innovate without compromise.",
    stats: [
      { value: "100+", label: "Products Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "MVPs Fast", body: "Investor-ready apps in under 45 days" },
      { title: "Cross-platform Expertise", body: "iOS, Android, Web, Flutter, React Native" },
      { title: "Enterprise-grade", body: "Security, compliance, integrations handled upfront" },
      { title: "Outcome-driven", body: "From launch metrics to retention and scalability" },
    ],
    process: [
      { step: "Discover", blurb: "Scope, success metrics, roadmap alignment", icon: "discover" },
      { step: "Design", blurb: "Wireframes, UI/UX, user journeys", icon: "design" },
      { step: "Build", blurb: "Agile sprints, weekly demos, CI/CD", icon: "build" },
      { step: "Launch", blurb: "Beta, staged rollout, App Store/Play Store/web deployment", icon: "launch" },
      { step: "Iterate", blurb: "Analytics-driven improvements & scaling support", icon: "iterate" },
    ],
    sections: [
      {
        type: "cardGrid",
        heading: "Everything you need, from MVPs to enterprise builds",
        columns: 3,
        items: [
          { title: "Android App Development", body: "Launch Android apps that perform across devices and scale with your users.", icon: "app" },
          { title: "iOS App Development", body: "Ship elegant, secure iOS apps built in Swift/SwiftUI, ready for the App Store.", icon: "app" },
          { title: "Cross-Platform App Development", body: "Go live on iOS and Android with a single codebase — faster, leaner, future-proof.", icon: "app" },
          { title: "Web Application Development", body: "Build high-performance web apps with modern frameworks that grow with your business.", icon: "software" },
          { title: "Custom App Development", body: "Get bespoke apps tailored to your workflows, integrations, and long-term roadmap.", icon: "build" },
          { title: "Enterprise Mobile Apps", body: "Deploy secure, compliant apps with SSO, MDM, and SLA-backed delivery.", icon: "software" },
        ],
      },
      {
        type: "testimonials",
        heading: "Trusted by founders and enterprises alike",
      },
      {
        type: "industries",
        heading: "Custom solutions across industries",
      },
      {
        type: "bookingCta",
        heading: "Let’s build your app the right way",
        lead: "Book a 30-minute consultation. Walk away with a draft scope, cost, and timeline for your app.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade software development?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-mobile-app-development",
      },
    ],
    faqs: [
      { q: "How fast can you build an MVP?", a: "Most MVPs are shipped in under 45 days, depending on features and integrations." },
      { q: "How much does it cost to build an app?", a: "Most MVPs cost under $15k. Enterprise builds cost more depending on integrations, compliance, and scale." },
      { q: "Do we own the code and infrastructure?", a: "Yes — you own everything from day one. We provide full documentation and handover." },
      { q: "What platforms do you support?", a: "Native Android (Kotlin), iOS (Swift), cross-platform (Flutter, React Native), and modern web stacks (Next.js, Node/Nest)." },
      { q: "How do you handle compliance?", a: "We align with SOC2, HIPAA, and PCI where required. For enterprises, we support SSO/SAML, MDM, audit trails, and SLA-backed delivery." },
      { q: "Company vs agency — what’s the difference?", a: "Byldd operates as a product partner, not a vendor. Our pods include product, design, engineering, and QA, accountable to outcomes not just code." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "custom-app-development-services",
    title: "Custom App Development",
    category: "App Development",
    parent: "app-development-company",
    icon: "app",
    heading: "Custom App Development Services",
    tagline: "Off-the-shelf software wasn't built for your business. We craft apps that match your workflows, integrate with your systems, and scale with your growth.",
    intro: "Pre-packaged tools and \"app builders\" might work at the start, but they can't handle unique processes, compliance requirements, or complex integrations. Byldd builds apps designed around your business, not the other way around.",
    stats: [
      { value: "70+", label: "Apps Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "Tailored Features", body: "Built exactly for your users and workflows" },
      { title: "Seamless Integrations", body: "Payments, CRM, ERP, SSO — whatever you already use" },
      { title: "Scalable Foundations", body: "Clean architecture that won't crumble as you grow" },
      { title: "Compliance Ready", body: "HIPAA, SOC2, PCI baked in from the start" },
    ],
    process: [
      { step: "Discover", blurb: "We dive deep into your workflows, bottlenecks, and goals", icon: "discover" },
      { step: "Design", blurb: "Wireframes and prototypes shaped around your users", icon: "design" },
      { step: "Build", blurb: "Agile sprints, weekly demos, maintainable code", icon: "build" },
      { step: "Launch", blurb: "Internal pilots, beta testing, staged rollouts", icon: "launch" },
      { step: "Iterate", blurb: "Continuous updates guided by feedback and data", icon: "iterate" },
    ],
    sections: [
      {
        type: "testimonials",
        heading: "Trusted by founders and enterprises alike",
      },
      {
        type: "reviews",
        items: [
          { body: "We wanted to say thank you so much for your team's amazing work & due diligence. They have been great to work with and we truly appreciate all your team's efforts.", name: "Dylan Price", company: "ShowFleet" },
          { body: "I just looked through all the work you've done with Rake. Absolutely fantastic job. We're excited to continue recommending you to our founders and alumni. It's tough finding great resources for our founders and we appreciate the hard work. Thank you.", name: "Brian Scordato", company: "Tacklebox Accelerator" },
          { body: "Working with Byldd has been a game-changer for me as a non-technical entrepreneur. Ayush and his team went beyond just offering a service; they became true partners in breathing life into my vision. When I first came to Byldd, Keepsake was merely an idea. Their team didn't just execute; they enriched the concept, focusing on design and user experience, which became the soul of our MVP. Their proactive approach and creative problem-solving were key in developing Keepsake into something more than functional – it became a MVP that truly connects with its users. Byldd played (and continues to play) a pivotal role in turning my vision into a tangible reality, elevating Keepsake from a mere MVP to an impactful user experience.", name: "Jason Walker", company: "Keepsake" },
          { body: "Collaborating with Byldd has truly transformed our journey at CIVA as we navigate the path to our beta launch. Your team's knack for blending innovation with practical tech solutions has been key in elevating our platform. It's this kind of partnership that pushes us to innovate further and makes this journey exciting. Thanks for the incredible support and looking forward to more collaboration.", name: "Jermaine Hartsfield", company: "CIVA" },
        ],
      },
      {
        type: "industries",
        heading: "Custom solutions across industries",
      },
      {
        type: "bookingCta",
        heading: "Let’s build something that actually fits",
        lead: "Book a 30-minute call to scope your custom app. You’ll walk away with a rough plan, timeline, and cost — no strings attached.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade software development?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-mobile-app-development/",
      },
    ],
    techStack: {
      heading: "Modern tools for complex builds",
      groups: [
        {
          group: "Frameworks",
          items: [
            { label: "LangChain", logo: "lanchain.webp" },
            { label: "OpenAi", logo: "openai.webp" },
            { label: "AWS Sagemaker", logo: "awsbrain.webp" },
            { label: "GCP Vertex AI", logo: "vertixai.webp" },
            { label: "Docker", logo: "docker.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Why build custom instead of using existing tools?", a: "Because tools fit for everyone rarely fit anyone well. A custom app adapts to your business, integrates with your systems, and scales cleanly." },
      { q: "How much does it cost?", a: "Most MVPs cost under $15k and take ~45 days. Complex builds with heavy integrations or compliance may cost more." },
      { q: "Do we own the code and infrastructure?", a: "Yes. From day one, you own repos, infra, and IP. We provide documentation and handover support." },
      { q: "Can you integrate with our existing stack?", a: "Absolutely. We integrate with CRMs, ERPs, payments, analytics, and custom APIs." },
      { q: "How do you handle compliance?", a: "We've delivered HIPAA, SOC2, and PCI-ready apps. Compliance is built into the architecture, testing, and deployment." },
      { q: "What happens after launch?", a: "You can continue with Byldd for flexible maintenance — bug fixes, new features, or scaling support — paying only for what you need." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "android-app-development-company",
    title: "Android App Development",
    category: "App Development",
    parent: "app-development-company",
    icon: "app",
    heading: "Android App Development Company",
    tagline: "We help startups launch investor-ready MVPs and enterprises deploy secure, scalable Android apps — fast, predictable, and built to last.",
    intro: "Android dominates mobile, but the real challenge is creating an app that users actually stick with. Byldd's pods combine product strategy, design, and engineering to launch fast while ensuring performance, usability, and long-term maintainability.",
    stats: [
      { value: "70+", label: "Apps Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "Fast MVPs", body: "Get to market in ~45 days" },
      { title: "Exceptional UX", body: "Native Android design with Material You" },
      { title: "Future-proof", body: "Clean architecture, CI/CD, automated testing" },
      { title: "Enterprise Ready", body: "Security, compliance, and integrations baked in" },
    ],
    process: [
      { step: "Discover", blurb: "Align on goals, scope, and success metrics", icon: "discover" },
      { step: "Design", blurb: "Wireframes, flows, and polished UI kits", icon: "design" },
      { step: "Build", blurb: "Kotlin + Jetpack, modular code, weekly demos", icon: "build" },
      { step: "Launch", blurb: "Beta testing, staged rollouts, Play Store release", icon: "launch" },
      { step: "Iterate", blurb: "Data-driven improvements and roadmap execution", icon: "iterate" },
    ],
    sections: [
      {
        type: "testimonials",
        heading: "What it’s like to build with us",
      },
      {
        type: "industries",
        heading: "Built for startups and enterprises across sectors",
      },
      {
        type: "bookingCta",
        heading: "Plan your Android roadmap with us",
        lead: "Book a 30-minute call. We’ll review your goals, scope, and timeline - and share a draft launch plan tailored to your needs.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Looking for enterprise-grade mobile solutions?",
        linkLabel: "Explore Enterprise App Development Services",
        href: "/services/enterprise-mobile-app-development",
      },
    ],
    techStack: {
      heading: "Modern tools for complex builds",
      groups: [
        {
          group: "",
          items: [
            { label: "Jetpack Compose", logo: "jetpack.webp" },
            { label: "Kotlin", logo: "kotlin.webp" },
            { label: "Espresso", logo: "espresso.webp" },
            { label: "JUnit", logo: "junit.webp" },
            { label: "Firebase Test Lab", logo: "firebase.webp" },
          ],
        },
        {
          group: "Backend",
          items: [
            { label: "Node.js", logo: "nodejs.webp" },
            { label: "NestJS", logo: "nestjs.webp" },
            { label: "Django", logo: "django.webp" },
          ],
        },
        {
          group: "Databases",
          items: [
            { label: "PostgreSQL", logo: "postgresql.webp" },
            { label: "MongoDB", logo: "mongodb.webp" },
            { label: "Firebase", logo: "firebasehost.webp" },
          ],
        },
        {
          group: "Cloud",
          items: [
            { label: "AWS", logo: "aws.webp" },
            { label: "Coroutine", logo: "coroutine.webp" },
            { label: "CI/CD", logo: "cicd.webp" },
          ],
        },
        {
          group: "Integrations",
          items: [
            { label: "Stripe", logo: "stripe.webp" },
            { label: "Twilio", logo: "twilio.webp" },
            { label: "SSO/MDM", logo: "sso.webp" },
            { label: "Salesforce", logo: "salesforce.webp" },
            { label: "Custom API", logo: "customapi.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Company vs. agency — what's the difference?", a: "We don't hand off projects like a typical agency. You get a dedicated product pod — product, design, Android engineering, QA — working as an extension of your team." },
      { q: "Can you really deliver an MVP in 45 days?", a: "Yes — by focusing on must-have features. Most MVPs launch in under 45 days; more complex builds (compliance, integrations) can take longer." },
      { q: "What makes Kotlin the right choice for Android?", a: "Kotlin is Google's preferred Android language. It's safer, faster, and easier to maintain than Java — perfect for scalable products." },
      { q: "How do you handle device fragmentation?", a: "We test on targeted device sets with Firebase Test Lab, profile performance early, and set budgets so your app runs smoothly across devices." },
      { q: "What about compliance (SOC2, SSO, MDM)?", a: "Enterprise apps require it. We support SSO/SAML, MDM, SOC2-aligned practices, and secure data storage. We've cleared security reviews for Fortune 500 companies." },
      { q: "Do we own the code and infrastructure?", a: "Yes — you own the repos, infra, and IP. We provide documentation, runbooks, and transition support." },
      { q: "How much does it cost to build an Android app?", a: "Most MVPs cost under $15k and take ~45 days. Final cost depends on scope, integrations, and compliance. After launch, costs stay predictable with flexible maintenance packages." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "ios-app-development-services",
    title: "iOS App Development",
    category: "App Development",
    parent: "app-development-company",
    icon: "app",
    heading: "iOS App Development Services",
    tagline: "We design and build iOS apps in Swift and SwiftUI that are fast, secure, and designed to delight — ready for the App Store from day one.",
    intro: "iOS users expect polish, performance, and security. We deliver all three — with apps that match Apple's design standards, integrate seamlessly with iOS features, and scale from MVP to enterprise rollout.",
    stats: [
      { value: "70+", label: "Apps Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "MVPs Fast", body: "Investor-ready apps in ~45 days" },
      { title: "Design-first", body: "Native Apple UX patterns, SwiftUI, accessibility" },
      { title: "Future-proof", body: "Modular code, automated testing, CI/CD" },
      { title: "Enterprise-ready", body: "SSO, SOC2, and compliance handled upfront" },
    ],
    process: [
      { step: "Discover", blurb: "Scope features and success metrics", icon: "discover" },
      { step: "Design", blurb: "Wireframes, prototypes, and UI kits following Apple HIG", icon: "design" },
      { step: "Build", blurb: "Swift + SwiftUI, Combine, XCTest, weekly demos", icon: "build" },
      { step: "Launch", blurb: "TestFlight betas, staged App Store rollout", icon: "launch" },
      { step: "Iterate", blurb: "Analytics-driven improvements and ongoing support", icon: "iterate" },
    ],
    sections: [
      {
        type: "testimonials",
        heading: "Don’t just take it from us…",
      },
      {
        type: "industries",
        heading: "Custom solutions across industries",
      },
      {
        type: "bookingCta",
        heading: "Plan your IOS roadmap with us",
        lead: "Book a 30-minute consultation and get a draft scope, timeline, and cost estimate tailored to your iOS app idea.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade app development?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-mobile-app-development/",
      },
    ],
    techStack: {
      heading: "Tools we trust to ship reliable custom builds",
      groups: [
        {
          group: "Frameworks",
          items: [
            { label: "Swift", logo: "swift.webp" },
            { label: "SwiftUI", logo: "swiftui.webp" },
            { label: "combine", logo: "combine.webp" },
            { label: "Flutter", logo: "flutter.webp" },
            { label: "Angular", logo: "angulard.webp" },
            { label: "XCTest", logo: "xctest.webp" },
            { label: "XCUITest", logo: "xcuitest.webp" },
            { label: "TestFlight", logo: "testflight.webp" },
          ],
        },
        {
          group: "Languages",
          items: [
            { label: "CI/CD Pipeline", logo: "pipeline.webp" },
            { label: "Apple Pay", logo: "applepay.webp" },
            { label: "Apple Sign In" },
            { label: "Push Notification", logo: "pushnotification.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "How much does it cost to build an iOS app?", a: "Most MVPs cost under $15k and take ~45 days. Enterprise builds vary depending on integrations, features, and compliance." },
      { q: "Do we own the code and infrastructure?", a: "Yes — you own the repos, infra, and IP. We hand over with full documentation." },
      { q: "Swift vs. SwiftUI — which do you use?", a: "Both. Swift is the language, SwiftUI is Apple's modern UI framework. We use them together for maintainable and future-proof code." },
      { q: "How do you handle App Store submission?", a: "We manage the entire App Store process — provisioning profiles, TestFlight betas, compliance checks, and staged release." },
      { q: "How do you handle compliance?", a: "We support SOC2, HIPAA, PCI, and implement security practices (encryption, audit trails, SSO/MDM) for enterprise clients." },
      { q: "Can you integrate Apple-specific features?", a: "Yes — Apple Pay, Sign in with Apple, FaceID/TouchID, push notifications, SiriKit, and more." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "web-app-development-services",
    title: "Web App Development",
    category: "App Development",
    parent: "app-development-company",
    icon: "software",
    heading: "Web App Development Services",
    tagline: "We build web apps that feel effortless to use and powerful under the hood — designed for real users, not just demos..",
    intro: "A web app isn't just a site with buttons. It's your product — and it has to be responsive, reliable, and ready to scale. At Byldd, we ship apps that are investor-ready for startups and compliance-ready for enterprises.",
    stats: [
      { value: "70+", label: "Apps Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "Fast MVPs", body: "Get to market in ~45 days" },
      { title: "Modern Stacks", body: "Built with React, Next.js, and Node/Nest" },
      { title: "Future-proof", body: "Modular, maintainable, test-covered code" },
      { title: "Enterprise Ready", body: "Secure, SOC2-aligned, and integration-friendly" },
    ],
    process: [
      { step: "Discover", blurb: "Define use cases, workflows, and success metrics", icon: "discover" },
      { step: "Design", blurb: "Wireframes, clickable prototypes, UX tested early", icon: "design" },
      { step: "Build", blurb: "Agile sprints, clean architecture, weekly demos", icon: "build" },
      { step: "Launch", blurb: "Internal pilots, staged rollout, production deploy", icon: "launch" },
      { step: "Iterate", blurb: "Analytics-driven updates, roadmap execution", icon: "iterate" },
    ],
    sections: [
      {
        type: "testimonials",
        heading: "What founders and teams say about working with us",
      },
      {
        type: "bookingCta",
        heading: "Ready to build your web app?",
        lead: "Book a 30-minute consultation. You’ll walk away with a draft scope, timeline, and cost estimate for your web app.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade apps with compliance in mind?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-mobile-app-development/",
      },
    ],
    techStack: {
      heading: "Modern tools for complex builds",
      groups: [
        {
          group: "Frontend",
          items: [
            { label: "React", logo: "react.webp" },
            { label: "Next.js", logo: "nextjs.webp" },
            { label: "Vue.js", logo: "vuejs.webp" },
          ],
        },
        {
          group: "Backend",
          items: [
            { label: "Node.js", logo: "nodejs.webp" },
            { label: "Nest.js", logo: "nestjs.webp" },
            { label: "Django", logo: "django.webp" },
          ],
        },
        {
          group: "Databases",
          items: [
            { label: "PostgreSQL", logo: "postgresql.webp" },
            { label: "MongoDB", logo: "mongodb.webp" },
            { label: "Firebase", logo: "firebasehost.webp" },
          ],
        },
        {
          group: "Cloud",
          items: [
            { label: "AWS", logo: "aws.webp" },
            { label: "GCP", logo: "gcp.webp" },
            { label: "Docker", logo: "docker.webp" },
            { label: "CI/CD pipelines", logo: "cicd.webp" },
          ],
        },
        {
          group: "Integrations",
          items: [
            { label: "Stripe", logo: "stripe.webp" },
            { label: "Twilio", logo: "twilio.webp" },
            { label: "SSO/MDM", logo: "sso.webp" },
            { label: "Salesforce", logo: "salesforce.webp" },
            { label: "Custom API", logo: "customapi.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "How much does it cost to build a web app?", a: "Most MVPs cost under $15k and ship in ~45 days. Enterprise builds may cost more depending on scope, integrations, and compliance." },
      { q: "Do we own the code and infrastructure?", a: "Yes. You own everything from day one — repos, infra, and IP. We provide documentation and handover." },
      { q: "Which technologies do you use?", a: "We primarily use React/Next.js for the frontend and Node.js/Nest.js for the backend, with PostgreSQL or MongoDB for data. But we pick stacks based on your needs." },
      { q: "Can you integrate with our existing tools?", a: "Yes. We integrate with CRMs, ERPs, payments, analytics, and custom APIs." },
      { q: "How do you handle compliance?", a: "We've shipped HIPAA, SOC2, and PCI-ready web apps. Compliance is factored into architecture, QA, and deployment." },
      { q: "What happens after launch?", a: "We offer flexible maintenance packages where you pay only for the support or features you need post-launch." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "cross-platform-app-development-services",
    title: "Cross Platform App Development",
    category: "App Development",
    parent: "app-development-company",
    icon: "app",
    heading: "Cross Platform App Development Services",
    tagline: "One codebase, two platforms. We build apps in React Native and Flutter that feel native, ship fast, and scale without surprises.",
    intro: "Cross platform doesn’t mean cutting corners. With Byldd, you get apps that look and feel like native iOS and Android — while saving time and money with a single shared codebase.",
    stats: [
      { value: "70+", label: "Apps Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "MVPs Fast", body: "MVP in ~45 days" },
      { title: "Lower Costs", body: "One build instead of two" },
      { title: "Native Feel", body: "Access to device features and smooth UX" },
      { title: "Enterprise Ready", body: "Secure, compliant, and built to scale" },
    ],
    process: [
      { step: "Discover", blurb: "Define goals, scope, and success metrics", icon: "discover" },
      { step: "Design", blurb: "Wireframes and UI aligned for both platforms", icon: "design" },
      { step: "Build", blurb: "React Native or Flutter, modular code, weekly demos", icon: "build" },
      { step: "Launch", blurb: "App Store + Play Store rollouts with QA baked in", icon: "launch" },
      { step: "Iterate", blurb: "Analytics, feature flags, continuous improvements", icon: "iterate" },
    ],
    sections: [
      {
        type: "testimonials",
        heading: "Trusted by founders and enterprises alike",
      },
      {
        type: "industries",
        heading: "Custom solutions across industries",
      },
      {
        type: "bookingCta",
        heading: "One codebase, two platforms. Ready to build?",
        lead: "Let’s talk through your app idea. In 30 minutes, you’ll get a draft scope, timeline, and cost estimate.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade app development?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-mobile-app-development/",
      },
    ],
    techStack: {
      heading: "Tools we trust to ship reliable custom builds",
      groups: [
        {
          group: "Frameworks",
          items: [
            { label: "React", logo: "react.webp" },
            { label: "Flutter", logo: "flutter.webp" },
          ],
        },
        {
          group: "Languages",
          items: [
            { label: "Dart", logo: "dart.webp" },
            { label: "Javascript", logo: "javascript.webp" },
            { label: "Typescript", logo: "typescript.webp" },
          ],
        },
        {
          group: "Testing",
          items: [
            { label: "Detox", logo: "detox.webp" },
            { label: "FireBase Test Lab", logo: "firebase.webp" },
            { label: "HubSpot", logo: "hubspot.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Why choose cross platform over native?", a: "Cross platform can cut build time and cost by ~40%. It’s great for MVPs and many production apps. For heavy device integrations, we may still recommend native." },
      { q: "Which is better — React Native or Flutter?", a: "Both are solid. React Native works well if you need strong web + mobile alignment. Flutter shines when you want consistent UI across platforms. We’ll recommend based on your goals." },
      { q: "How much does it cost?", a: "Most cross-platform MVPs ship in ~45 days for under $15k. Costs and timelines rise with complex integrations (payments, SSO, enterprise compliance)." },
      { q: "Do cross platform apps feel slower than native?", a: "Not with proper architecture. We use native modules where performance matters — so your users won’t feel the difference." },
      { q: "Will we own the code?", a: "Yes. You own repos, infra, and IP from day one. We document everything so your team (or ours) can keep building." },
      { q: "Can you handle enterprise compliance?", a: "Yes. We support SOC2, HIPAA, PCI, and integrate with enterprise security (SSO, MDM, audit logs)." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "enterprise-mobile-app-development",
    title: "Enterprise Mobile App Development",
    category: "App Development",
    parent: "app-development-company",
    icon: "app",
    heading: "Enterprise-Grade App Development That Scales With You",
    tagline: "Build powerful, secure, and scalable enterprise applications tailored to your organisation’s needs. From strategy to deployment, we deliver solutions that accelerate innovation and efficiency.",
    intro: "Explore our suite of enterprise-focused services — from AI-driven automation to custom software — designed to streamline operations, boost efficiency, and drive measurable growth.",
    stats: [
      { value: "70+", label: "Products Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
    ],
    process: [
    ],
    sections: [
      {
        type: "cardGrid",
        heading: "End-to-End Development Services",
        lead: "Explore our suite of enterprise-focused services — from AI-driven automation to custom software — designed to streamline operations, boost efficiency, and drive measurable growth.",
        columns: 4,
        items: [
          { title: "AI Powered Apps", body: "Native & cross-platform apps for employees, customers, and partners", icon: "ai" },
          { title: "Cross-Platform App Development", body: "Scalable web solutions tailored to your workflows", icon: "app" },
          { title: "Progressive Web App Development", body: "Upgrade legacy systems into agile, modern applications", icon: "software" },
          { title: "App Modernization", body: "Cloud-native apps built for efficiency and accessibility.", icon: "digital-transformation" },
        ],
      },
      {
        type: "logoRow",
        heading: "Trusted and Featured By Leading Platforms like",
        items: [
          { title: "Yahoo" },
          { title: "Businesswire" },
          { title: "Manifest" },
          { title: "Starter Story" },
        ],
      },
      {
        type: "cardGrid",
        heading: "Compliance & Certifications",
        footnote: "With Byldd, your enterprise applications are designed to meet stringent compliance requirements ensuring data privacy, legal adherence, and uncompromised trust.",
        columns: 4,
        items: [
          { title: "ISO 27001", body: "Information security management systems" },
          { title: "SOC 2 Type II", body: "Data protection and operational security assurance" },
          { title: "GDPR", body: "General Data Protection Regulation (EU)" },
          { title: "Custom Enterprise Compliance", body: "Tailored to your industry standards (e.g., FINRA, FedRAMP, or industry-specific protocols)" },
          { title: "HIPAA", body: "Healthcare data protection compliance" },
          { title: "PCI DSS", body: "Secure handling of financial transactions" },
          { title: "Cloud Security", body: "AWS, Azure, and GCP security best practices" },
        ],
      },
      {
        type: "industries",
        heading: "Industries We serve",
      },
      {
        type: "testimonials",
        heading: "Client Stories",
      },
    ],
    techStack: {
      heading: "Built With Cutting-Edge Technology",
      lead: "Tools we use to build fast, scalable products – modern, proven, and production-ready.",
      groups: [
        {
          group: "Cloud",
          items: [
            { label: "AWS", logo: "aws.webp" },
            { label: "GCP", logo: "gcp.webp" },
            { label: "Azure", logo: "azure.webp" },
          ],
        },
        {
          group: "Enterprise",
          items: [
            { label: "SAP", logo: "sap.webp" },
            { label: "Salesforce", logo: "salesforce.webp" },
            { label: "Oracle", logo: "oracle.webp" },
          ],
        },
        {
          group: "Mobile",
          items: [
            { label: "iOS", logo: "ios.webp" },
            { label: "Android", logo: "androidd.webp" },
            { label: "React Native", logo: "react.webp" },
            { label: "Flutter", logo: "flutter.webp" },
          ],
        },
        {
          group: "Web",
          items: [
            { label: "React", logo: "react.webp" },
            { label: "Angular", logo: "angular.webp" },
            { label: "Node.js", logo: "js.webp" },
            { label: ".NET", logo: "net.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "What is enterprise app development, and how is it different from regular app development?", a: "Enterprise app development focuses on building secure, scalable, and integrated applications designed for large organizations. Unlike regular apps, enterprise apps must handle complex workflows, strict compliance requirements, and high user volumes." },
      { q: "How does Byldd ensure security and compliance for enterprise applications?", a: "We follow industry-leading security practices and adhere to global compliance standards like ISO 27001, SOC 2, GDPR, and HIPAA. Every app is built with enterprise-grade security protocols, encryption, and rigorous testing." },
      { q: "Which industries does Byldd specialize in for enterprise app development?", a: "We work across healthcare, finance, retail, logistics, manufacturing, education, SaaS, and the public sector—delivering tailored solutions that meet each industry’s unique compliance and scalability needs." },
      { q: "Can you integrate new apps with our existing enterprise systems (ERP, CRM, HRMS)?", a: "Yes. We specialize in seamless integrations with leading platforms such as SAP, Salesforce, Oracle, and Microsoft Dynamics to ensure your new apps work smoothly with your existing ecosystem." },
      { q: "Do you handle legacy app modernization for large enterprises?", a: "Absolutely. We transform outdated systems into modern, cloud-native, and scalable applications—enhancing performance, security, and user experience." },
      { q: "What compliance standards and certifications does Byldd adhere to (e.g., GDPR, HIPAA, SOC 2)?", a: "We comply with GDPR, HIPAA, SOC 2, ISO 27001, and PCI DSS, along with cloud security best practices on AWS, Azure, and GCP. Industry-specific compliance (e.g., FedRAMP, FINRA) is also supported." },
      { q: "How scalable are the enterprise apps you build?", a: "Our apps are built on cloud-native, microservices-driven architectures that can scale to millions of users and transactions, ensuring reliability and performance as your business grows." },
      { q: "Do you provide ongoing maintenance and support after the app is launched?", a: "Yes. We offer long-term maintenance, monitoring, and optimization services to ensure your enterprise apps remain secure, updated, and high-performing." },
      { q: "What technologies and platforms do you use for enterprise app development?", a: "We leverage modern frameworks like React, Angular, Node.js, .NET, Flutter, and React Native, alongside cloud platforms (AWS, Azure, GCP) and enterprise system integrations." },
      { q: "How long does it typically take to develop an enterprise application?", a: "Timelines vary based on complexity, but most enterprise apps take between 4-9 months. We follow an agile methodology to deliver working versions quickly and refine them iteratively." },
      { q: "Can Byldd provide a dedicated development team for our enterprise project?", a: "Yes. We offer dedicated enterprise-grade development teams that act as an extension of your in-house IT department, ensuring speed, quality, and scalability." },
      { q: "What is the typical cost range for enterprise app development?", a: "The cost depends on complexity, integrations, and compliance needs. We provide transparent estimates after the discovery phase." },
    ],
    cta: { label: "Book a consultation", href: "/contact" },
  },
  {
    slug: "software-development-company",
    title: "Software Development",
    category: "Software Development",
    isCategoryLanding: true,
    icon: "software",
    heading: "Software Development Company",
    tagline: "We turn napkin sketches and enterprise roadmaps into real software — built lean, shipped fast, and ready to scale.",
    intro: "Code alone doesn’t move the needle. What matters is shipping something users love and investors or stakeholders trust. That’s why we combine product thinking, design, and engineering into pods that deliver outcomes, not just output.",
    stats: [
      { value: "100+", label: "products shipped" },
      { value: "100%", label: "Client Retention" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "Speed", body: "Get live in weeks, not quarters" },
      { title: "Breadth", body: "Mobile, web, and custom solutions under one roof" },
      { title: "Enterprise Credibility", body: "Security, compliance, and integrations handled" },
      { title: "Proven Process", body: "100+ launches across industries" },
    ],
    process: [
      { step: "Discover", blurb: "We start with the problem, not the feature list", icon: "discover" },
      { step: "Design", blurb: "Wireframes, prototypes, UI kits tested early", icon: "design" },
      { step: "Build", blurb: "Agile sprints, clean code, weekly demos", icon: "build" },
      { step: "Launch", blurb: "Betas, staged rollouts, production-ready delivery", icon: "launch" },
      { step: "Iterate", blurb: "Analytics, feedback, continuous improvement", icon: "iterate" },
    ],
    sections: [
      {
        type: "cardGrid",
        heading: "Everything you need, from MVPs to enterprise builds",
        columns: 4,
        items: [
          { title: "App Developmen", body: "iOS, Android, Web, Cross-platform", icon: "app" },
          { title: "Custom Software", body: "Tailored tools and workflows", icon: "software" },
          { title: "Enterprise Software", body: "Compliance, security, integrations", icon: "software" },
          { title: "Product Strategy & Design", body: "Wireframes, prototypes, UX", icon: "design" },
        ],
      },
      {
        type: "bookingCta",
        heading: "Got an idea? Let’s make it real",
        lead: "In 30 minutes, we’ll walk through your goals and sketch a launch plan with scope, cost, and timeline.",
        ctaLabel: "Book a Call",
      },
      {
        type: "testimonials",
        heading: "What it feels like to work with us",
      },
      {
        type: "industries",
        heading: "From scrappy startups to regulated enterprises",
      },
      {
        type: "ctaBand",
        heading: "Looking for enterprise-grade software solutions?",
        linkLabel: "Explore Enterprise Services",
        href: "/services/enterprise-software-development-company/",
      },
    ],
    faqs: [
      { q: "How much does it cost to build software with Byldd?", a: "Most MVPs cost under $15k and ship in ~45 days. Enterprise projects vary based on integrations, compliance, and scope." },
      { q: "Do we own the code and infrastructure?", a: "Yes — everything is yours from day one. We provide full documentation and handover." },
      { q: "Do you only work with startups?", a: "Nope. We’ve worked with both early-stage founders and enterprise IT teams. Our pods flex to fit your stage." },
      { q: "What technologies do you use?", a: "React, React Native, Flutter, Next.js, Node/Nest, PostgreSQL, Firebase, AWS, GCP — and more based on project fit." },
      { q: "Can you handle compliance and security?", a: "Yes. We’ve shipped HIPAA, SOC2, and PCI-ready apps. We also support SSO, MDM, audit logs, and SLA-backed delivery." },
      { q: "What happens after launch?", a: "You can continue with flexible maintenance or a dedicated pod. Either way, you pay only for what you need." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "custom-software-development-company",
    title: "Custom Software Development",
    category: "Software Development",
    parent: "software-development-company",
    icon: "software",
    heading: "Custom Software Development Company",
    tagline: "No two businesses are the same — so why use cookie-cutter software? We design and build custom solutions that match how you work and scale as you grow.",
    intro: "Off-the-shelf tools often force you to change how you work. We flip that. Byldd builds software around your workflows, users, and systems — not the other way around.",
    stats: [
      { value: "70+", label: "Products Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "Bespoke Features", body: "Tailored to your exact processes" },
      { title: "Seamless Integrations", body: "CRM, ERP, APIs, SSO, payments, anything in your stack" },
      { title: "Built to Scale", body: "Architected for growth, not rewrites" },
      { title: "Compliance Included", body: "HIPAA, SOC2, PCI handled from the start" },
    ],
    process: [
      { step: "Discover", blurb: "Understand your workflows and challenges", icon: "discover" },
      { step: "Design", blurb: "Prototypes and UX shaped around real users", icon: "design" },
      { step: "Build", blurb: "Agile sprints, clean code, weekly demos", icon: "build" },
      { step: "Launch", blurb: "Pilot, beta, and full rollout", icon: "launch" },
      { step: "Iterate", blurb: "Continuous improvements powered by feedback and data", icon: "iterate" },
    ],
    sections: [
      {
        type: "testimonials",
        heading: "What’s it like building with us",
      },
      {
        type: "industries",
        heading: "Custom solutions across industries",
      },
      {
        type: "bookingCta",
        heading: "Need software that actually fits?",
        lead: "Let’s design and build a solution around your business. Book a 30-minute call to get a draft scope, cost, and timeline.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade software development?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-software-development-company",
      },
    ],
    techStack: {
      heading: "Modern tools for complex builds",
      groups: [
        {
          group: "Frontend",
          items: [
            { label: "React/Native", logo: "react.webp" },
            { label: "Vue.js", logo: "vuejs.webp" },
            { label: "Flutter", logo: "flutter.webp" },
            { label: "Angular", logo: "angular.webp" },
          ],
        },
        {
          group: "Backend",
          items: [
            { label: "Node.js", logo: "nodejs.webp" },
            { label: "Nest.js", logo: "nestjs.webp" },
            { label: "Django", logo: "django.webp" },
            { label: "Ruby on Rails", logo: "ruby.webp" },
          ],
        },
        {
          group: "Databases",
          items: [
            { label: "PostgreSQL", logo: "postgresql.webp" },
            { label: "MongoDB", logo: "mongodb.webp" },
            { label: "Firebase", logo: "firebasehost.webp" },
          ],
        },
        {
          group: "Cloud",
          items: [
            { label: "AWS", logo: "aws.webp" },
            { label: "GCP", logo: "gcp.webp" },
            { label: "Docker", logo: "docker.webp" },
            { label: "Kubernetes", logo: "kubernetes.webp" },
          ],
        },
        {
          group: "Integrations",
          items: [
            { label: "Salesforce", logo: "salesforce.webp" },
            { label: "Stripe", logo: "stripe.webp" },
            { label: "HubSpot", logo: "hubspotnew.webp" },
            { label: "Custom API", logo: "customapi.webp" },
            { label: "SSO/MDM", logo: "mdm.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Why go custom instead of off-the-shelf?", a: "Because software should fit your business, not force you to fit it. Custom builds integrate seamlessly and scale cleanly." },
      { q: "How much does it cost?", a: "Most MVPs cost under $15k and take ~45 days. Complex builds with multiple integrations or compliance may cost more." },
      { q: "Do we own the code and infrastructure?", a: "Yes — everything is yours from day one. We provide full documentation and transition support." },
      { q: "Can you integrate with our stack?", a: "Yes. Salesforce, Stripe, HubSpot, ERPs, APIs — we design around what you already use." },
      { q: "How do you handle compliance?", a: "We’ve shipped HIPAA, SOC2, and PCI-ready solutions. Security is baked into design and deployment." },
      { q: "What happens after launch?", a: "Choose flexible maintenance packages or a dedicated pod for scaling — pay only for what you use." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "enterprise-software-development-company",
    title: "Enterprise Software Development",
    category: "Software Development",
    parent: "software-development-company",
    icon: "software",
    heading: "Enterprise-grade Software Development that Ships Fast",
    tagline: "From discovery to deployment, we design, build, and scale secure, compliant software that your users love — and your stakeholders trust.",
    intro: "From discovery to deployment, we design, build, and scale secure, compliant software that your users love — and your stakeholders trust.",
    stats: [
      { value: "100+", label: "Products Shipped" },
      { value: "~45 days", label: "for MVP Launch" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
    ],
    process: [
      { step: "Discover", blurb: "Understand your workflows and challenges", icon: "discover" },
      { step: "Design", blurb: "Prototypes and UX shaped around real users", icon: "design" },
      { step: "Build", blurb: "Agile sprints, clean code, weekly demos", icon: "build" },
      { step: "Launch", blurb: "Pilot, beta, and full rollout", icon: "launch" },
      { step: "Iterate", blurb: "Continuous improvements powered by feedback and data", icon: "iterate" },
    ],
    sections: [
      {
        type: "fullCycle",
        heading: "Services We Offer",
        lead: "1. Full-cycle Delivery",
        labels: ["Product discovery & roadmapping", "UX/UI design & design systems", "Web, mobile, and backend engineering", "API design & integrations (ERP/CRM/ATS/Payments)", "Data engineering & analytics", "QA automation & performance testing", "DevOps, SRE & FinOps", "Post-launch optimization & growth experiments"],
      },
      {
        type: "cardGrid",
        heading: "2. Specialized Capabilities",
        columns: 4,
        items: [
          { body: "Legacy modernisation & re-platforming", icon: "digital-transformation" },
          { body: "Multi-tenant/SaaS architecture", icon: "cloud" },
          { body: "AI features (RAG, LLMs, copilots) with guardrails", icon: "ai" },
          { body: "Security hardening & compliance readiness assessments" },
        ],
      },
      {
        type: "cardGrid",
        heading: "Value Proposition",
        columns: 2,
        items: [
          { title: "Velocity without the chaos", body: "Parallelized discovery, design sprints, and CI/CD to reduce lead time from idea to release." },
          { title: "Compliance-first delivery", body: "SOC 2/ISO-aligned processes, PII handling, encryption, access controls, audit trails." },
          { title: "Scale that won’t crack", body: "Cloud-native architectures, containerization, IaC, and performance-budgeting." },
          { title: "Designed for adoption", body: "UX research, accessibility (WCAG 2.1 AA), and measurable product outcomes." },
        ],
      },
      {
        type: "cardGrid",
        heading: "Compliance & Security",
        columns: 2,
        items: [
          { title: "Frameworks", body: "SOC 2 Type II-aligned controls, ISO 27001-informed ISMS, GDPR/CCPA data handling" },
          { title: "Practices", body: "Secure SDLC, least-privilege IAM, SAST/DAST, dependency scanning, SBOM, encryption in transit/at rest, secrets management, vulnerability management" },
          { title: "Data & Privacy", body: "DPA support, data residency strategy, audit logging, incident response runbook" },
          { title: "Accessibility", body: "WCAG 2.1 AA guidelines across design & dev" },
        ],
      },
      {
        type: "industries",
        heading: "Industries We serve",
      },
      {
        type: "testimonials",
        heading: "Client Stories",
      },
    ],
    techStack: {
      heading: "Built With Cutting-Edge Technology",
      lead: "Tools we use to build fast, scalable products – modern, proven, and production-ready.",
      groups: [
        {
          group: "Cloud",
          items: [
            { label: "AWS", logo: "aws.webp" },
            { label: "GCP", logo: "gcp.webp" },
            { label: "Azure", logo: "azure.webp" },
          ],
        },
        {
          group: "Enterprise",
          items: [
            { label: "SAP", logo: "sap.webp" },
            { label: "Salesforce", logo: "salesforce.webp" },
            { label: "Oracle", logo: "oracle.webp" },
          ],
        },
        {
          group: "Mobile",
          items: [
            { label: "iOS", logo: "ios.webp" },
            { label: "Android", logo: "androidd.webp" },
            { label: "React Native", logo: "react.webp" },
            { label: "Flutter", logo: "flutter.webp" },
          ],
        },
        {
          group: "Web",
          items: [
            { label: "React", logo: "react.webp" },
            { label: "Angular", logo: "angular.webp" },
            { label: "Node.js", logo: "js.webp" },
            { label: ".NET", logo: "net.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "How do you handle enterprise security and compliance requirements?", a: "We align with SOC 2 Type II and ISO 27001 standards, implement secure SDLC practices, and provide audit-ready documentation. Data is encrypted at rest and in transit, with role-based access controls and full logging to meet enterprise vendor assessment needs." },
      { q: "Can you work with our InfoSec and compliance teams during procurement?", a: "Yes. We regularly collaborate with enterprise InfoSec, procurement, and legal teams during due diligence. We support security questionnaires, vendor risk assessments, DPAs, and compliance reviews as part of onboarding." },
      { q: "How do you ensure scalability and performance at enterprise scale?", a: "We design cloud-native, multi-tenant architectures with containerization and Infrastructure-as-Code. Load testing, performance budgets, and monitoring are built into delivery to ensure 99.9%+ uptime and support for millions of users." },
      { q: "Do you support integration with enterprise systems (ERP, CRM, HRIS, SSO)?", a: "Absolutely. We’ve integrated with SAP, Salesforce, Workday, Oracle, Okta, Azure AD, and other enterprise platforms. Our team follows enterprise API and middleware standards to ensure seamless connectivity." },
      { q: "What is your approach to vendor onboarding and legal requirements?", a: "We work with your legal, procurement, and vendor management teams to align on contracts, SLAs, data processing agreements, and security standards. Our flexible engagement models can adapt to your enterprise procurement workflows." },
      { q: "How do you manage intellectual property (IP) ownership?", a: "All IP developed for you remains 100% owned by your organization. We provide clear contractual guarantees and transfer rights, ensuring you maintain control over your software assets." },
      { q: "How do you manage large-scale, distributed projects?", a: "We follow Agile-at-scale frameworks (Scrum, SAFe, or hybrid models) and use enterprise-grade project management tools like Jira, Confluence, and Azure DevOps. Stakeholders get full visibility through sprint reviews, KPIs, and dashboards." },
      { q: "Do you provide long-term support and SLAs?", a: "Yes. We offer post-launch support with defined SLAs, including uptime guarantees, incident response times, and performance monitoring. Support can be structured as L1–L3 tiers or integrated with your internal support teams." },
      { q: "How do you handle data residency and privacy regulations?", a: "We support region-specific deployments (AWS, Azure, GCP regions) and comply with GDPR, CCPA, HIPAA (when applicable). We’ll work with your legal and compliance teams to align with organizational and regional data requirements." },
      { q: "Can you collaborate with our in-house development teams?", a: "Yes. Many of our enterprise engagements are co-build models, where our squads integrate directly with your teams. We provide playbooks, documentation, and knowledge transfer to ensure smooth collaboration and handover." },
    ],
    cta: { label: "Book a strategy call", href: "/contact" },
  },
  {
    slug: "mvp-development-services",
    title: "MVP Development",
    category: "MVP Development",
    isCategoryLanding: true,
    icon: "mvp",
    heading: "MVP Development Services for Startups Who Want to Launch Smart",
    tagline: "Byldd helps startup founders turn ideas into working MVPs in ~ 45 days.",
    intro: "Our all-in-one MVP team handles design, development, and launch so you can focus on growth.",
    stats: [
      { value: "100+", label: "MVPs Delivered" },
      { value: "100%", label: "Client Retention" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
      { title: "Control costs while hitting goals - at all stages.", body: "Byldd gives you a flexible full-stack MVP team; Engineers, Designers, PM, QA, and CTO oversight - build only the team you need, when you need it." },
    ],
    process: [
      { step: "Idea Refinement & Scope", blurb: "We work closely with you to sharpen your MVP vision and define the core problem worth solving.", icon: "discover" },
      { step: "Rapid MVP Development", blurb: "Using our proprietary AI automation tools, we fast-track development by auto-generating essential features — saving time and cost.", icon: "build" },
      { step: "Launch/Scale Fast", blurb: "We help you launch or level up your MVP with a strategic plan.", icon: "launch" },
      { step: "User Behavior Loops", blurb: "We dive deep into collected data and metrics to uncover key insights that shape strategy.", icon: "discover" },
      { step: "Iterative Development", blurb: "We make continuous updates that improve usability, boost engagement, and increase your MVP’s value.", icon: "iterate" },
      { step: "Scale & Partner Long-Term", blurb: "As your growth partner, we help scale infrastructure, optimize performance, and guide long-term MVP evolution.", icon: "iterate" },
    ],
    sections: [
      {
        type: "storyBlocks",
        heading: "JASIE’S MVP STORY",
        items: [
          { title: "Turn your Idea into a Clear MVP Roadmap.", body: "Jasie had a brilliant idea for a consumer-debt management platform but coding wasn’t her thing. She needed a partner who could turn her vision into a plan - enter Byldd.", image: "jasie.webp" },
          { title: "Flexible Teams Built Around the MVP’s Needs.", body: "With Byldd, Jasie had the freedom to scale her MVP team up or down as her platform evolved — getting exactly the expertise she needed, when she needed it.", image: "flexible-team.webp" },
          { title: "Long Term Partners - MVP and beyond.", body: "JASIE’S MVP launched, users onboarded, revenue followed and eventually, a fintech giant acquired her platform (so proud!). Byldd supported her through every step.", image: "long-term.webp" },
        ],
      },
      {
        type: "testimonials",
        heading: "Build MVPs that investors and customers LOVE.",
        items: [
          { name: "Brian Gabay", company: "Founder & CEO at Arrange" },
          { name: "Sheereen Brown", company: "Co-Founder & CEO at Between", image: "between.webp" },
          { name: "Jasie Dunk", company: "Founder & CEO at Decimal" },
        ],
      },
      {
        type: "storyBlocks",
        heading: "Control costs while hitting goals - at all stages.",
        ctaLabel: "Get Started",
        items: [
          { body: "Byldd gives you a flexible full-stack MVP team; Engineers, Designers, PM, QA, and CTO oversight - build only the team you need, when you need it.", image: "team-flex.gif" },
        ],
      },
      {
        type: "caseStudies",
        heading: "Avoid costly mistakes with a team that has built 100+ successful MVPs.",
        items: [
          { title: "Rank and Rent Engine (RARE)", body: "Byldd partnered with entrepreneur Ryan Dalton to transform his fragmented Airtable- and Twilio-based rank-and-rent business into a scalable SaaS platform. The challenge was unifying SEO research, due diligence, CRM, call tracking, and billing in one seamless MVP. Our team designed and built RARE, integrating real-time SEO tools, automated lead management, and subscription billing. Despite complex API dependencies and multi-tenant architecture needs, the first version launched successfully with paying customers within 24 hours. Today, RARE saves users 50% of their time and drives growing subscription revenue.", image: "rare.webp" },
          { title: "Contra Padel", body: "Sports-tech startup Contra Padel partnered with Byldd to build a player-first ecosystem combining a mobile app, club web platform, and Spider hardware integration for performance tracking. Existing platforms focused only on bookings, ignoring player engagement and cancellations. We delivered a MVP that automated matchmaking, streamlined club refunds, and decoded raw sensor data into actionable performance insights. Key challenges included binary hardware integration and building a phased matchmaking algorithm under tight timelines. The MVP was showcased at the Olympic Museum in Italy, earning recognition and positioning Contra Padel for investor traction.", image: "contra.webp" },
          { title: "Between", body: "Between was founded to improve how clients connect with birth workers, addressing challenges around discovery, contracts, and payment friction in maternal care. Byldd worked with the founders to refine their Figma designs and deliver a mobile-first MVP in three months. The platform enabled easy doula-client matching, automated contracts, empathetic notifications, and a dispute-first payment model to minimize awkward conversations. Challenges included reconciling inconsistent designs mid-project and integrating vendor payouts. Despite problems, the MVP launched successfully alongside a marketing site, giving the founders a live solution to validate in-market and scale further", image: "between.webp" },
        ],
      },
      {
        type: "servicesStrip",
        heading: "Services",
        lead: "What we build — always modern, always scalable.",
        columns: 3,
        items: [
          { title: "Web App Development", icon: "app" },
          { title: "Android App Development", icon: "app" },
          { title: "iOS App Development", icon: "app" },
          { title: "Software Development", icon: "software" },
          { title: "AI Integration", icon: "ai" },
          { title: "Digital Transformation", icon: "digital-transformation" },
        ],
      },
      {
        type: "reviews",
        heading: "Founders are RAVING about us.",
        columns: 4,
        items: [
          { body: "I just wanted to reach out and let you know that the past year of working with Vikas and the rest of the Byldd team has been fantastic. We have had a lot of fun seeing our software vision become a reality and we have been really pleased with our choice to work with Byldd. Vikas has proven to be truly dedicated to the success of our project and we couldn’t ask for anything more.Thank you and we look forward to another year ahead!", name: "Jamie Friling", company: "Mulhern + Kulp Structural Engg." },
          { body: "Prapanch and I can't say enough about our experience working with you and your team at Byldd. From the beginning you have been extremely professional and a great resource to get feedback/bounce ideas off as we continue to work through our concept. Great design work, understood our vision for Rake from the beginning and nailed it from the first set of design drafts. Clear communication and you have shown great understanding for the pain points founders have in getting their MVP up and running. Your team has delivered beyond our expectations on our MVP build thus far and look forward to completing the project!", name: "Drew Torrey", company: "Rake" },
          { body: "Of course! I'll be your reference anytime. I can't say enough positive things about you and the team you've built.", name: "Evelyne White", company: "Six Plus" },
          { body: "Working with Byldd has been a game-changer for me as a non-technical entrepreneur. Ayush and his team went beyond just offering a service; they became true partners in breathing life into my vision. When I first came to Byldd, Keepsake was merely an idea. Their team didn't just execute; they enriched the concept, focusing on design and user experience, which became the soul of our MVP. Their proactive approach and creative problem-solving were key in developing Keepsake into something more than functional – it became a MVP that truly connects with its users. Byldd played (and continues to play) a pivotal role in turning my vision into a tangible reality, elevating Keepsake from a mere MVP to an impactful user experience.", name: "Jason Walker", company: "Keepsake" },
          { body: "Collaborating with Byldd has truly transformed our journey at CIVA as we navigate the path to our beta launch. Your team's knack for blending innovation with practical tech solutions has been key in elevating our platform. It's this kind of partnership that pushes us to innovate further and makes this journey exciting. Thanks for the incredible support and looking forward to more collaboration.", name: "Jermaine Hartsfield", company: "CIVA" },
          { body: "I just wanna say that after going through so many unreliable engineers and cofounders, working with you guys has been a refreshing game-changer. I also really appreciate how reliable, communicative and proactive Udit and the rest of the team are. I'm gonna be recommending Byldd as THE people to talk to if you're a founder looking to build tech.", name: "Kimia Hangafarin", company: "Shadow" },
          { body: "Just wanted to give a huge shoutout to Jyoti, Arjun, Tanish, and the rest of the Byldd team we worked with to get Franzy's MVP off the ground. The team worked incredibly fast getting our (admittedly) complex 'MVP' off the ground. I'll definitely recommend Byldd to anyone in my network that needs solid, fast, cost efficient, and RELIABLE software development, with a team they can trust.", name: "Chris Wright", company: "Franzy" },
          { body: "We wanted to say thank you so much for your team's amazing work & due diligence. They have been great to work with and we truly appreciate all your team's efforts.", name: "Dylan Price", company: "ShowFleet" },
        ],
      },
      {
        type: "bookingCta",
        heading: "Empowering ambitious Founders to launch/scale tech MVPs — fast.",
        lead: "Get your no-cost MVP consultation.",
        footnote: "All aligned to build what matters — your MVP.",
        ctaLabel: "Book a Strategy Session",
        items: [
          { title: "Fractional CTO/Software Architect." },
          { title: "Designer, Product Manager and Testers." },
          { title: "Dedicated Full-stack developers." },
        ],
      },
    ],
    techStack: {
      heading: "The Right Tech Stack for Faster, Smarter Growth",
      lead: "Tools we use to build fast, scalable MVPs — modern, proven, and production-ready.",
      ungrouped: true,
      groups: [
        {
          group: "",
          items: [
            { label: "JavaScript", logo: "js.webp" },
            { label: "React", logo: "react.webp" },
            { label: "Flutter", logo: "flutter.webp" },
            { label: "Node.js", logo: "nodejs.webp" },
            { label: "Express.js", logo: "express.webp" },
            { label: "MongoDB", logo: "mongodb.webp" },
            { label: "Python", logo: "python.webp" },
            { label: "React Native", logo: "reactNative.webp" },
            { label: "Swift", logo: "swift.webp" },
            { label: "Kotlin", logo: "kotlin.webp" },
          ],
        },
      ],
    },
    faqs: [
    ],
    cta: { label: "Book a Strategy Session", href: "/contact" },
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    category: "Workflow Automation",
    isCategoryLanding: true,
    icon: "workflow",
    heading: "Workflow Automation Services",
    tagline: "We help teams ditch the busywork — automating repetitive tasks so you can focus on what actually grows your business.",
    intro: "Most growing teams hit the same wall — manual processes that don’t scale. From operations to finance, we help companies replace routine work with smart, connected automations that save time, reduce costs, and cut down on human errors.",
    stats: [
      { value: "upto 70%", label: "time saved" },
      { value: "50%", label: "operational cost reduction" },
      { value: "98%", label: "accuracy in automated workflows" },
    ],
    benefits: [
      { title: "Time Saved", body: "Free up 20–30 hours per employee each month" },
      { title: "Cost Efficiency", body: "Slash ops spend by up to 50%" },
      { title: "Accuracy", body: "Reduce human errors by 90%+ with structured automation" },
      { title: "Scalable Systems", body: "Automations that grow with your team, not against it" },
    ],
    process: [
      { step: "Discover", blurb: "Identify high-impact workflows and define measurable ROI", icon: "discover" },
      { step: "Design", blurb: "Map current processes and plan integration architecture", icon: "design" },
      { step: "Build", blurb: "Automate using APIs, logic-based workflows, and AI triggers", icon: "build" },
      { step: "Launch", blurb: "Connect CRMs, ERPs, billing systems, and analytics tools", icon: "launch" },
      { step: "Iterate", blurb: "Monitor efficiency, accuracy, and evolving workflow needs", icon: "iterate" },
    ],
    sections: [
      {
        type: "cardGrid",
        heading: "The engines behind the automation",
        lead: "We blend rule-based logic, AI orchestration, and data-driven intelligence to create automations that actually think — not just execute.",
        columns: 4,
        items: [
          { title: "Workflow Orchestration", body: "End-to-end automation using n8n, Airflow, or Temporal", icon: "workflow-automation" },
          { title: "AI Agents", body: "Self-running bots that reason and make context-aware decisions", icon: "agentic-ai" },
          { title: "Fine-Tuning", body: "Customize pre-trained models on proprietary datasets for better accuracy and domain fit", icon: "machine-learning" },
          { title: "Retrieval-Augmented Generation", body: "Combine LLMs with live, relevant data for accurate and up-to-date responses", icon: "nlp" },
          { title: "Knowledge Grounding", body: "Tie AI outputs to verified, domain-specific sources for reliability and context", icon: "data-engineering" },
          { title: "Controlled Generation", body: "Ensure model outputs stay factual, consistent, and aligned with brand or compliance needs", icon: "ai" },
          { title: "RPA (Robotic Process Automation)", body: "Eliminate repetitive manual tasks and cross-platform actions", icon: "workflow" },
          { title: "Custom Integrations", body: "Sync data across CRMs, ERPs, databases, and SaaS tools", icon: "api" },
        ],
      },
      {
        type: "cardGrid",
        heading: "Where automation creates real impact",
        columns: 3,
        items: [
          { title: "Sales & Marketing", body: "Auto-sync leads, send follow-ups, update pipelines" },
          { title: "Operations", body: "Assign tasks, process data, and generate daily summaries" },
          { title: "Finance & Accounting", body: "Automate billing, reconciliation, and reporting" },
          { title: "Customer Support", body: "Intelligent ticket triage, routing, and escalation" },
          { title: "HR & Talent", body: "Onboarding workflows, candidate tracking, and document sync" },
          { title: "Custom Workflows", body: "Whatever’s repetitive — we’ll make it automatic" },
        ],
      },
      {
        type: "testimonials",
        heading: "Trusted by founders and enterprises alike",
      },
      {
        type: "industries",
        heading: "Custom solutions across industries",
      },
      {
        type: "bookingCta",
        heading: "Let’s automate the boring stuff",
        lead: "Book a quick call. We’ll map your processes, identify automation opportunities, and show you the potential time and cost savings.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade software development?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-software-development-company",
      },
    ],
    techStack: {
      heading: "Our AI tech stack, tuned for speed and reliability",
      lead: "AI isn’t one-size-fits-all — we pick the right tools and models for the job. Here’s how we get results:",
      groups: [
        {
          group: "Automation Frameworks",
          items: [
            { label: "Zapier", logo: "zapier.webp" },
            { label: "n8n", logo: "n8n.webp" },
            { label: "Make (Inte..", logo: "make.webp" },
            { label: "Temporal", logo: "temporal.webp" },
          ],
        },
        {
          group: "Languages",
          items: [
            { label: "Node.js", logo: "nodejs.webp" },
            { label: "Python", logo: "python.webp" },
            { label: "JavaScript", logo: "javascript.webp" },
          ],
        },
        {
          group: "AI & ML",
          items: [
            { label: "LangChain", logo: "lanchain.webp" },
            { label: "OpenAi", logo: "openai.webp" },
            { label: "HuggingFace", logo: "huggingfan.webp" },
            { label: "Anthropic Claude", logo: "anthropic.webp" },
          ],
        },
        {
          group: "Cloud",
          items: [
            { label: "AWS Lambda", logo: "lamda.webp" },
            { label: "Docker", logo: "docker.webp" },
            { label: "GCP Cloud Functions", logo: "cloudgcp.webp" },
          ],
        },
        {
          group: "Integrations",
          items: [
            { label: "Slack", logo: "slack.webp" },
            { label: "HubSpot", logo: "hubspotnew.webp" },
            { label: "Notion", logo: "notion.webp" },
            { label: "Salesforce", logo: "salesforce.webp" },
            { label: "Google Workspace", logo: "workspace.webp" },
            { label: "Internal APIs", logo: "customapi.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "How much time can automation save us?", a: "On average, clients save 60–70% of manual processing time within the first 3 months." },
      { q: "How does automation reduce costs?", a: "By eliminating repetitive work, teams typically see 30–50% lower operational costs." },
      { q: "How accurate are AI-driven automations?", a: "Our systems maintain 95–98% accuracy, thanks to validation layers and knowledge grounding." },
      { q: "What if our tools are custom or legacy?", a: "No problem. We specialize in building custom integrations around older systems." },
      { q: "Can you add AI to our existing automations?", a: "Yes — we use AI agents, RAG pipelines, and LLM orchestration to make workflows smarter and adaptive." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "ai",
    title: "AI Implementation",
    category: "AI Implementation",
    isCategoryLanding: true,
    icon: "ai-service",
    heading: "AI Development Services",
    tagline: "We help startups and teams turn data into decisions — building AI-powered products that actually solve problems, not just sound smart.",
    intro: "Most AI projects fail because they chase hype, not outcomes. We take a product-first approach — combining solid engineering with practical AI that delivers real impact. From chatbots and recommendation systems to fully custom LLM integrations, we build AI that works in production.",
    stats: [
      { value: "30+", label: "AI Products Launched" },
      { value: "90%", label: "Model Accuracy" },
      { value: "99.9%", label: "uptime on deployed AI services" },
    ],
    benefits: [
      { title: "AI that ships", body: "From prototype to production-ready MVPs" },
      { title: "Product-first approach", body: "Aligned with your business goals" },
      { title: "End-to-end", body: "Data pipelines, model training, deployment, and MLOps" },
      { title: "Scalable", body: "Cloud-ready, modular, and secure" },
    ],
    process: [
      { step: "Discover", blurb: "Identify high-impact AI use cases and define success metrics", icon: "discover" },
      { step: "Design", blurb: "Map data flows, model requirements, and user experience", icon: "design" },
      { step: "Build", blurb: "Train, test, and validate models", icon: "build" },
      { step: "Launch", blurb: "Embed AI into your apps, systems, or tools", icon: "launch" },
      { step: "Iterate", blurb: "Improve continuously with feedback and retraining", icon: "iterate" },
    ],
    sections: [
      {
        type: "cardGrid",
        heading: "The brains behind the builds",
        lead: "AI isn’t one-size-fits-all — we pick the right tools and models for the job. Here’s how we get results:",
        columns: 3,
        items: [
          { title: "Machine Learning Models", body: "Regression, Classification, Clustering, Anomaly Detection", icon: "machine-learning" },
          { title: "Deep Learning", body: "Neural networks for NLP, time series, and embeddings", icon: "ai" },
          { title: "Natural Language Processing", body: "Chatbots, summarization, semantic search, text analytics", icon: "nlp" },
          { title: "Large Language Models", body: "OpenAI, Claude, Hugging Face, LangChain integrations", icon: "ai-service" },
          { title: "Reinforcement Learning", body: "Smart decision systems that learn from outcomes", icon: "machine-learning" },
          { title: "Retrieval-Augmented Generation", body: "Combine LLMs with live, relevant data for accurate and up-to-date responses", icon: "data-engineering" },
          { title: "Knowledge Grounding", body: "Tie AI outputs to verified, domain-specific sources for reliability and context", icon: "data-engineering" },
          { title: "Controlled Generation", body: "Ensure model outputs stay factual, consistent, and aligned with brand or compliance needs", icon: "ai" },
          { title: "Fine-Tuning", body: "Customize pre-trained models on proprietary datasets for better accuracy and domain fit", icon: "machine-learning" },
          { title: "Orchestration", body: "Manage complex AI workflows using agents, pipelines, and contextual memory for multi-step automation", icon: "workflow-automation" },
          { title: "Prompt Engineering", body: "Craft structured prompts and chains for precise, context-aware results", icon: "agentic-ai" },
        ],
      },
      {
        type: "cardGrid",
        heading: "AI Solutions We Build",
        columns: 3,
        items: [
          { title: "Predictive Analytics", body: "Anticipate demand, churn, or user behavior", icon: "data-engineering" },
          { title: "Recommendation Engines", body: "Personalize products, content, and user journeys", icon: "machine-learning" },
          { title: "Chatbots & Virtual Assistants", body: "Conversational AI that actually helps customers", icon: "nlp" },
          { title: "AI Agents", body: "Autonomous systems that reason, plan, and act using your data", icon: "agentic-ai" },
          { title: "Process Automation", body: "Eliminate repetitive tasks with intelligent workflows", icon: "workflow-automation" },
          { title: "Custom LLM Integrations", body: "Bring GPT-style intelligence safely into your product", icon: "api" },
        ],
      },
      {
        type: "testimonials",
        heading: "Trusted by founders and enterprises alike",
      },
      {
        type: "industries",
        heading: "Custom solutions across industries",
      },
      {
        type: "bookingCta",
        heading: "Let’s make your product smarter",
        lead: "Book a 30-minute call to explore your AI use case. You’ll leave with a roadmap, rough cost, and timeline — no jargon, no fluff.",
        ctaLabel: "Book a Call",
      },
      {
        type: "ctaBand",
        heading: "Need enterprise-grade software development?",
        linkLabel: "Explore Enterprise Solutions",
        href: "/services/enterprise-software-development-company",
      },
    ],
    techStack: {
      heading: "Our AI tech stack, tuned for speed and reliability",
      lead: "AI isn’t one-size-fits-all — we pick the right tools and models for the job. Here’s how we get results:",
      groups: [
        {
          group: "Libraries & APIs",
          items: [
            { label: "LangChain", logo: "lanchain.webp" },
            { label: "OpenAi", logo: "openai.webp" },
            { label: "HuggingFace", logo: "huggingfan.webp" },
            { label: "Scikit Learn", logo: "scikit.webp" },
          ],
        },
        {
          group: "Cloud & MLOps",
          items: [
            { label: "AWS Sagemaker", logo: "awsbrain.webp" },
            { label: "GCP Vertex AI", logo: "vertixai.webp" },
            { label: "Docker", logo: "docker.webp" },
            { label: "Kubernetes", logo: "kubernetes.webp" },
          ],
        },
        {
          group: "Data Infrastructure",
          items: [
            { label: "Kafka", logo: "kafka.webp" },
            { label: "SQL/No SQL", logo: "sql.webp" },
            { label: "Pinecone", logo: "pinecone.webp" },
            { label: "ChromaDB", logo: "chromadb.webp" },
          ],
        },
      ],
    },
    faqs: [
      { q: "How much does it cost to build an AI product?", a: "The investment depends on your project's complexity and specific requirements. Let's discuss your goals to determine an accurate estimate." },
      { q: "What kind of AI solutions do you build?", a: "Everything from predictive analytics and recommendation systems to LLM-based agents and chatbots." },
      { q: "Do we need our own data?", a: "Not always. We can start with public or synthetic data, then plug in your datasets when you’re ready." },
      { q: "Can you integrate AI into our existing system?", a: "Yes — we specialize in embedding models securely into mobile, web, or backend platforms." },
      { q: "How do you ensure reliability and accuracy?", a: "We use rigorous validation, retraining loops, and MLOps monitoring to keep models performing accurately post-launch." },
      { q: "What about data security and compliance?", a: "We follow SOC2, GDPR, and HIPAA standards — encryption, anonymization, and controlled access are non-negotiable." },
    ],
    cta: { label: "Book a Call", href: "/contact" },
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    category: "Digital Transformation",
    isCategoryLanding: true,
    icon: "digital-transformation",
    heading: "Stay Ahead in a Digital-First world",
    tagline: "Build powerful, secure, and scalable enterprise applications tailored to your organisation’s needs. From strategy to deployment, we deliver solutions that accelerate innovation and efficiency.",
    intro: "Build powerful, secure, and scalable enterprise applications tailored to your organisation’s needs. From strategy to deployment, we deliver solutions that accelerate innovation and efficiency.",
    stats: [
      { value: "100+", label: "Products successfully Delivered" },
      { value: "100%", label: "Client Retention" },
      { value: "9.8", label: "NPS" },
    ],
    benefits: [
    ],
    process: [
      { step: "Discover", blurb: "Identify gaps and opportunities.", icon: "discover" },
      { step: "Strategy & Roadmap", blurb: "Define goals, milestones, and KPIs.", icon: "design" },
      { step: "Implementation", blurb: "Deploy solutions with agility and precision.", icon: "build" },
      { step: "Continuous Optimisation", blurb: "Scale, refine, and future-proof.", icon: "iterate" },
    ],
    sections: [
      {
        type: "cardGrid",
        heading: "Transform Every Aspect of Your Business",
        columns: 3,
        items: [
          { title: "Application Re-engineering", body: "Revitalize existing applications for better performance, scalability, and user experience.", icon: "app" },
          { title: "Mainframe Modernization", body: "Transform legacy mainframes into agile, cloud-ready systems built for today's demands.", icon: "software" },
          { title: "Infrastructure modernization and Migration", body: "Upgrade infrastructure to boost speed, security, and scalability across environments.", icon: "devops" },
          { title: "Digital Strategy & Roadmapping", body: "Craft a clear vision and actionable steps for your transformation journe", icon: "discover" },
          { title: "Cloud Modernization", body: "Migrate, optimize, and scale with secure, flexible cloud solutions.", icon: "cloud" },
          { title: "Customer Experience Transformation", body: "Redefine engagement through digital-first customer journeys.", icon: "design" },
        ],
      },
      {
        type: "industries",
        heading: "Industries We serve",
      },
      {
        type: "cardGrid",
        heading: "Enterprise-Grade Security & Compliance",
        lead: "Byldd ensures every transformation aligns with global security and compliance standards, including:",
        columns: 4,
        items: [
          { title: "ISO/IEC 27001" },
          { title: "SOC 2 Type II" },
          { title: "GDPR & HIPAA compliance" },
          { title: "Industry-specific regulations" },
        ],
      },
      {
        type: "testimonials",
        heading: "What Byldding with us looks like",
      },
      {
        type: "bookingCta",
        heading: "Product Expertise That Scales With You",
        lead: "Schedule your free consultation with our founder",
        footnote: "Transforming bold ideas into market-ready solutions, faster than traditional teams.",
        ctaLabel: "Book a Strategy Session",
        items: [
          { title: "→ Accelerated product innovation" },
          { title: "→ Scalable, outcome-driven products" },
          { title: "→ End-to-end partnership" },
        ],
      },
    ],
    faqs: [
      { q: "What is digital transformation in simple terms?", a: "Digital transformation is the integration of digital technologies into all areas of business to improve efficiency, deliver value, and stay competitive." },
      { q: "How long does a digital transformation project take?", a: "Timelines vary depending on scope, but Byldd helps define achievable milestones and accelerates delivery through agile methods." },
      { q: "Is digital transformation only for large enterprises?", a: "No. Startups and enterprises alike benefit from digital-first strategies tailored to their unique needs." },
      { q: "How do you ensure ROI from digital transformation?", a: "We focus on measurable outcomes-improved efficiency, cost savings, customer satisfaction, and new revenue streams." },
    ],
    cta: { label: "Schedule a Consultation", href: "/contact" },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Sub-services belonging to a category landing page. */
export function getChildren(slug: string) {
  return services.filter((s) => s.parent === slug);
}

/** The 6 menu categories, each with its landing page + sub-services. */
export const serviceMenu = serviceCategories.map((category) => {
  const inCategory = services.filter((s) => s.category === category);
  const landing = inCategory.find((s) => s.isCategoryLanding);
  return {
    category,
    landing,
    children: inCategory.filter((s) => !s.isCategoryLanding),
  };
});
