import type { Metadata } from "next";
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
    q: "How does it work — what's your process like?",
    a: "Clarity before code. We pressure-test your idea with real evidence, cut it to what's worth building, then design, build, and ship with one senior team. From idea to revenue in about 45 days.",
  },
  {
    q: "How long does it take to launch an MVP?",
    a: "Most MVPs are built in under 45 days, depending on complexity. We bias hard toward shipping early and iterating with real users.",
  },
  {
    q: "How do I determine the product development cost?",
    a: "Most MVPs come in under $15k. Larger builds and enterprise engagements vary with scope and integrations — we scope to outcomes, not hours, and tell you honestly what a given result takes.",
  },
  {
    q: "What happens on the first call?",
    a: "A quick discovery call: we dig into your goals, scope, and timeline — and tell you honestly how we'd approach it, and whether we're the right partner.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. Most of the founders we work with aren't engineers. We handle strategy, design, and engineering, and translate everything into plain language so you stay in control.",
  },
  {
    q: "Who handles project management?",
    a: "A dedicated Byldd project lead runs your build end to end — planning, priorities, and regular demos — so you always know exactly where things stand.",
  },
  {
    q: "Who owns the product?",
    a: "You do — 100%. All code, assets, and documentation belong to you from day one. No lock-in.",
  },
  {
    q: "What happens after the MVP is built?",
    a: "We instrument from day one so real usage guides what's next. We can keep iterating with you, or hand a clean, maintainable codebase to your team — with flexible post-launch maintenance and scaling packages.",
  },
  {
    q: "Which stack do we use?",
    a: "React, React Native, Flutter, Node.js, Nest.js, Python, AWS, GCP, and more — chosen for the project's needs, never for lock-in.",
  },
  {
    q: "Can you integrate AI into products?",
    a: "Absolutely — GPT-powered features, recommendation systems, and intelligent automations, built around your use case and data.",
  },
  {
    q: "Are you like Bubble and other no-code platforms?",
    a: "No — we write production-grade custom code. No-code is great for prototypes; we build products designed to scale, integrate, and be owned outright.",
  },
  {
    q: "How do we start working with Byldd?",
    a: "Book a strategy session — we'll discuss goals, scope, and timelines, and come back with how we'd approach it.",
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
              <Reveal key={f.q} delay={i * 0.03}>
                <details className="group rounded-card border border-brand-ink/[0.07] bg-white px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-ink">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-lavender/60 text-brand-purple transition-transform duration-300 group-open:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-brand-ink/65">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
