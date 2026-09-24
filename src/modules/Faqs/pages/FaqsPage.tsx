import type { Metadata } from "next";
import { Fragment } from "react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Common questions about working with Byldd — process, timelines, cost, ownership and more.",
};

const faqs = [
  {
    heading: "General",
    q: "What does Byldd do?",
    a: "We design and build web and mobile apps for startups and enterprises — from MVPs to full-scale digital products.",
  },
  {
    q: "How long does it take to launch an MVP?",
    a: "Most MVPs are built in <b>under 45 days</b>, depending on complexity.",
  },
  {
    q: "How much does it cost?",
    a: "Most MVPs cost <b>under $15k</b>, though enterprise solutions vary based on scope and integrations.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. We offer flexible post-launch maintenance and scaling packages.",
  },
  {
    q: "What technologies do you use?",
    a: "React, React Native, Flutter, Node.js, Nest.js, Python, AWS, GCP, and more — chosen based on the project’s needs.",
  },
  {
    q: "Do we own the code?",
    a: "Yes, 100%. All code, assets, and documentation belong to you from day one.",
  },
  {
    q: "Can you integrate AI into products?",
    a: "Absolutely — we specialize in integrating GPT-powered features, recommendation systems, and intelligent automations.",
  },
  {
    q: "How do we start working with Byldd?",
    a: 'Book a quick discovery call — we’ll discuss goals, scope, and timelines. <a href="/contact">Book a Call</a>',
  },
  {
    heading: "Services",
    q: "What’s included in Byldd’s app development services?",
    a: "We handle end-to-end builds — design, development, testing, and launch across iOS, Android, and Web.",
  },
  {
    q: "How long does it take to build an app?",
    a: "Most MVPs go live in 45 days, depending on scope and integrations.",
  },
  {
    q: "What kind of AI solutions do you build?",
    a: "From GPT-powered chatbots to predictive analytics and workflow automation — all built around your use case.",
  },
  {
    q: "Do you offer custom model training or fine-tuning?",
    a: "Yes. We fine-tune and deploy models using your proprietary data for accuracy and domain fit.",
  },
  {
    q: "Can you automate existing processes without replacing our tools?",
    a: "Yes — we integrate with CRMs, ERPs, and SaaS platforms like Notion, HubSpot, and Salesforce.",
  },
  {
    q: "How much time or cost can automation save?",
    a: "Clients typically see up to 70% time saved and 50% lower ops costs.",
  },
  {
    q: "Do you work with existing systems or build from scratch?",
    a: "Both — we can re-engineer legacy systems or design new applications from the ground up.",
  },
  {
    q: "Do we retain full ownership of custom software?",
    a: "Yes, you own all IP, source code, and documentation from day one.",
  },
  {
    q: "Do cross-platform apps perform as well as native ones?",
    a: "Yes — when architected right, Flutter and React Native apps feel just as smooth and native.",
  },
  {
    q: "Can you migrate an existing web app to mobile?",
    a: "Absolutely — we reuse core logic and optimize for iOS and Android.",
  },
  {
    heading: "Industries",
    q: "What industries does Byldd serve?",
    a: "Byldd partners with startups and enterprises across 25+ industries — including <b>Healthcare, FinTech, Retail, Education, Real Estate, Logistics, Travel, Insurance, and E-commerce</b>. Whether you’re building a customer app, AI-powered workflow, or enterprise platform, we tailor our approach to your domain.",
  },
  {
    q: "Do you have experience with regulated or complex industries like Healthcare and Banking?",
    a: "Yes. We’ve delivered apps and platforms that comply with <b>HIPAA, PCI DSS, and SOC2</b> standards. Our team understands data security, integrations with core systems, and industry-specific compliance needs — from <b>medical data management to digital banking solutions</b>.",
  },
  {
    q: "Can you help with digital transformation across traditional industries like Manufacturing, Supply Chain, or Construction?",
    a: "Absolutely. We modernize legacy systems through <b>custom software, AI, and automation</b>, helping teams streamline operations, improve visibility, and reduce manual work. Our projects often involve <b>infrastructure modernization, workflow automation, and app re-engineering</b> for operational efficiency.",
  },
  {
    q: "Do you work with creative or consumer-focused industries like Entertainment, OTT, Fitness, or Social Media?",
    a: "Yes — we’ve built scalable consumer platforms, streaming apps, and engagement-driven products that handle high traffic and user interaction. From <b>fitness tracking to social media integrations</b>, we design experiences that convert and retain users.",
  },
  {
    q: "How does your approach differ by industry?",
    a: "Each industry has unique challenges — so we customize everything from <b>architecture to feature prioritization</b>. FinTech apps need compliance and uptime; Retail needs personalization and analytics; Healthcare demands security and accessibility. Our pods adapt their tech stack and process to match those needs.",
  },
];

export function FaqsPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered."
        gradientFrom={1}
        subtitle="The things founders ask us most, before we start building together."
      />

      <section className="bg-brand-mist py-24 md:py-32">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <Fragment key={f.q}>
                {f.heading && (
                  <Reveal>
                    <h2
                      className={`display text-3xl text-brand-purple md:text-4xl ${
                        i === 0 ? "mb-3" : "mb-3 mt-12"
                      }`}
                    >
                      {f.heading}
                    </h2>
                  </Reveal>
                )}
                <Reveal delay={i * 0.03}>
                  <details className="group rounded-card border border-brand-ink/[0.07] bg-white px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-ink">
                      {f.q}
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-lavender/60 text-brand-purple transition-transform duration-300 group-open:rotate-45">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <div
                      className="mt-4 leading-relaxed text-brand-ink/65 [&_a]:text-brand-purple"
                      dangerouslySetInnerHTML={{ __html: f.a }}
                    />
                  </details>
                </Reveal>
              </Fragment>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
