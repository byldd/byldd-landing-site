import { ArrowRight, Check, ShieldCheck, X } from "lucide-react";

import { ContactForm } from "@/modules/Contact/components/ContactForm";
import {
  auditOutcomes,
  comparison,
  modules,
  processSteps,
} from "@/modules/ApAutomation/utils/content";

const section = "px-5 py-20 md:py-28";
const heading = "display mt-4 text-balance text-4xl leading-[1.04] md:text-5xl";

export function ModulesSection() {
  return (
    <section className={`${section} bg-brand-night text-brand-mist`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-purple-light">What we build</p>
            <h2 className={heading}>
              Every step of AP, from inbox to payment file,{" "}
              <span className="text-brand-purple-light">and custom built for your process.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-brand-mist/65">
              Take the whole cycle or start with the step that hurts most. It all
              runs inside your ERP and the tools your team already uses.
            </p>
          </div>
          <a href="#ap-audit-form" className="inline-flex items-center gap-2 font-semibold text-brand-purple-light hover:text-white">
            Find your starting point <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="rounded-3xl border border-brand-purple-light/15 bg-white/[0.055] p-7 transition hover:border-brand-purple/45 hover:bg-white/[0.08]">
              <h3 className="text-xl font-bold">{module.title}</h3>
              <p className="mt-3 leading-7 text-brand-mist/65">{module.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-brand-purple/40 bg-brand-purple/10 p-7 md:flex-row md:items-center md:gap-6">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-purple text-white">
            <ShieldCheck className="size-6" />
          </span>
          <div>
            <p className="text-xl font-bold">A person releases every payment.</p>
            <p className="mt-1 leading-7 text-brand-mist/65">
              The system receives, matches, codes and queues. Your team approves and
              releases, and every step is logged with who did what and when. We
              never move money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className={`${section} bg-brand-mist text-brand-ink`}>
      <div className="mx-auto max-w-7xl">
        <h2 className={`${heading} max-w-3xl`}>How it works</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const final = index === processSteps.length - 1;
            return (
              <article key={step.title} className={`rounded-3xl border p-7 ${final ? "border-brand-night bg-brand-night text-brand-mist" : "border-brand-lavender bg-white"}`}>
                <span className="grid size-9 place-items-center rounded-full bg-brand-purple text-sm font-bold text-white">{index + 1}</span>
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
  return (
    <section className={`${section} bg-brand-night text-brand-mist`}>
      <div className="mx-auto max-w-6xl">
        <h2 className={`${heading} text-center`}>Why finance teams choose a custom build over AP software</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ComparisonCard title="AP software" items={comparison.software} />
          <ComparisonCard title="The Byldd build" items={comparison.byldd} winning />
        </div>
        <p className="mt-8 text-center text-sm text-brand-mist/45">
          100+ products built · SOC2, GDPR & HIPAA-aligned practices · Full audit trail on every invoice
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

export function RoiSection() {
  return (
    <section className={`${section} bg-brand-mist text-brand-ink`}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className={heading}>
          ROI in 3 months.{" "}
          <span className="text-brand-violet">
            For much less than one year of AP software subscriptions.
          </span>
        </h2>
      </div>
    </section>
  );
}

export function AuditSection() {
  return (
    <section className={`${section} bg-brand-night text-brand-mist`}>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow text-brand-purple-light">Your free AP audit</p>
          <h2 className={heading}>Book a 30-minute AP audit</h2>
          <p className="mt-5 text-lg text-brand-mist/65">Straight to a product manager, not a sales rep. On the call we&apos;ll:</p>
          <ul className="mt-7 grid gap-4">
            {auditOutcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 leading-7 text-brand-mist/85">
                <ArrowRight className="mt-1 size-5 shrink-0 text-brand-purple-light" />
                {outcome}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg">
            Even if we never work together,{" "}
            <strong className="text-brand-purple-light">you&apos;ll leave knowing what your AP process really costs.</strong>
          </p>
        </div>
        <div className="rounded-[2rem] bg-brand-mist p-6 text-brand-ink md:p-8">
          <h3 className="text-2xl font-bold tracking-tight">Claim your no-cost AP audit</h3>
          <p className="mb-6 mt-2 text-sm text-brand-ink/55">NDA covered.</p>
          <ContactForm
            idPrefix="ap-footer"
            submitLabel="Get my AP plan"
            variant="apAudit"
            className="[&_button[type=submit]]:w-full [&_button[type=submit]]:justify-center"
          />
        </div>
      </div>
    </section>
  );
}
