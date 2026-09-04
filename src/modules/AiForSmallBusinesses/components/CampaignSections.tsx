import { ArrowRight, Check, X } from "lucide-react";

import { ContactForm } from "@/modules/Contact/components/ContactForm";
import {
  problems,
  processSteps,
  stats,
  testimonials,
  useCases,
} from "@/modules/AiForSmallBusinesses/utils/content";

const section = "px-5 py-20 md:py-28";
const eyebrow = "eyebrow text-brand-violet";
const heading = "display mt-4 text-balance text-4xl leading-[1.04] md:text-5xl";

export function StatsBand() {
  return (
    <section className="bg-brand-purple px-5 py-9 text-white">
      <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="border-l-2 border-white/30 pl-5">
            <p className="text-4xl font-bold tracking-tight">{value}</p>
            <p className="mt-1 text-sm font-medium text-white/75">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className={`${section} bg-brand-mist text-brand-ink`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className={eyebrow}>The real problem</p>
          <h2 className={heading}>
            You don&apos;t need an AI strategy. You need one thing that stops costing
            you Tuesdays.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-ink/60">
            Most owners we talk to have already tried ChatGPT, bought a tool, and
            quietly stopped using both. The gap isn&apos;t ambition. It&apos;s that nothing
            was wired into how your business actually runs.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((problem, index) => (
            <article key={problem.title} className="rounded-3xl border border-brand-lavender bg-white p-7 shadow-soft">
              <span className="text-xs font-semibold text-red-500">0{index + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{problem.title}</h3>
              <p className="mt-2 leading-7 text-brand-ink/60">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section className={`${section} bg-brand-night text-brand-mist`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-purple-light">What we build</p>
            <h2 className={heading}>Boring AI that pays for itself</h2>
            <p className="mt-5 text-lg leading-8 text-brand-mist/65">
              Pick the one that sounds like your week. We build it into your
              existing tools, so nobody has to learn a new app.
            </p>
          </div>
          <a href="#ai-audit-form" className="inline-flex items-center gap-2 font-semibold text-brand-purple-light hover:text-white">
            See which one fits you <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="rounded-3xl border border-brand-purple-light/15 bg-white/[0.055] p-7 transition hover:border-brand-purple/45 hover:bg-white/[0.08]">
              <h3 className="text-xl font-bold">{useCase.title}</h3>
              <p className="mt-3 leading-7 text-brand-mist/65">{useCase.description}</p>
              <p className="mt-5 text-xs font-semibold text-brand-purple-light">
                Best for: {useCase.bestFor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className={`${section} bg-brand-mist text-brand-ink`}>
      <div className="mx-auto max-w-7xl">
        <p className={eyebrow}>The 10-day path</p>
        <h2 className={`${heading} max-w-3xl`}>How we go from your first call to something running</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const final = index === processSteps.length - 1;
            return (
              <article key={step.title} className={`rounded-3xl border p-7 ${final ? "border-brand-night bg-brand-night text-brand-mist" : "border-brand-lavender bg-white"}`}>
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-full bg-brand-purple text-sm font-bold text-white">{index + 1}</span>
                  <span className={`eyebrow ${final ? "text-white/45" : "text-brand-ink/40"}`}>{step.day}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className={`mt-2 leading-7 ${final ? "text-brand-mist/65" : "text-brand-ink/60"}`}>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const alternatives = [
    "You're handed a login and left to figure it out",
    'Six-figure “transformation” retainers',
    "Pilot ends, nothing reaches production",
    "Your data sits on someone else's platform",
  ];
  const byldd = [
    "We install it, train your team, and stay on call",
    "One fixed price, quoted on the first call",
    "Live in your business in 10 days or we keep working",
    "You own the code, the data and the accounts",
  ];

  return (
    <section className={`${section} bg-brand-night text-brand-mist`}>
      <div className="mx-auto max-w-6xl">
        <h2 className={`${heading} text-center`}>Why owners pick us over the alternatives</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ComparisonCard title="DIY tools & big agencies" items={alternatives} />
          <ComparisonCard title="The Byldd difference" items={byldd} winning />
        </div>
        <p className="mt-8 text-center text-sm text-brand-mist/45">
          100+ products built · SOC2, GDPR & HIPAA-aligned practices · Based in New York City
        </p>
      </div>
    </section>
  );
}

function ComparisonCard({ title, items, winning = false }: { title: string; items: readonly string[]; winning?: boolean }) {
  return (
    <article className={`rounded-3xl border p-8 ${winning ? "border-brand-purple bg-brand-purple" : "border-brand-purple-light/15 bg-white/[0.055]"}`}>
      <h3 className="eyebrow text-white/65">{title}</h3>
      <ul className="mt-6 grid gap-4">
        {items.map((item) => (
          <li key={item} className={`flex items-start gap-3 leading-7 ${winning ? "font-semibold text-white" : "text-brand-mist/60"}`}>
            {winning ? <Check className="mt-1 size-5 shrink-0" /> : <X className="mt-1 size-5 shrink-0 text-red-400" />}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProofSection() {
  return (
    <section className={`${section} bg-brand-mist text-brand-ink`}>
      <div className="mx-auto max-w-7xl">
        <p className={eyebrow}>Proof</p>
        <h2 className={`${heading} max-w-3xl`}>Owners who stopped doing it manually</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col rounded-3xl border border-brand-lavender bg-white p-7 shadow-soft">
              <p className="text-3xl font-bold tracking-tight">{testimonial.stat}</p>
              <blockquote className="mt-5 flex-1 leading-7 text-brand-ink/70">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-brand-lavender pt-4">
                <strong className="block">{testimonial.name}</strong>
                <span className="text-sm text-brand-ink/45">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AuditSection() {
  const outcomes = [
    "Map where AI actually pays back in your business, and where it doesn't",
    "Estimate the hours and dollars you'd get back",
    "Give you a real cost range and timeline on the call",
    "Flag the risks in your data and tooling before you spend",
  ];

  return (
    <section className={`${section} bg-brand-night text-brand-mist`}>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow text-brand-purple-light">Your free AI audit</p>
          <h2 className={heading}>Book a 30-minute AI opportunity call</h2>
          <p className="mt-5 text-lg text-brand-mist/65">Straight to our founder, not a sales rep. On the call we&apos;ll:</p>
          <ul className="mt-7 grid gap-4">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 leading-7 text-brand-mist/85">
                <ArrowRight className="mt-1 size-5 shrink-0 text-brand-purple-light" />
                {outcome}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg">
            Even if we never work together, <strong className="text-brand-purple-light">you&apos;ll leave with a plan you can act on.</strong>
          </p>
        </div>
        <div className="rounded-[2rem] bg-brand-mist p-6 text-brand-ink md:p-8">
          <h3 className="text-2xl font-bold tracking-tight">Claim your no-cost AI audit</h3>
          <p className="mb-6 mt-2 text-sm text-brand-ink/55">Takes less than a minute. NDA covered.</p>
          <ContactForm
            idPrefix="ai-footer"
            submitLabel="Get my free AI plan"
            className="[&_button[type=submit]]:w-full [&_button[type=submit]]:justify-center"
          />
        </div>
      </div>
    </section>
  );
}
