import Image from "next/image";
import { Check } from "lucide-react";

import { ContactForm } from "@/modules/Contact/components/ContactForm";

const benefits = [
  "Fixed scope, fixed price. You know the number on the first call",
  "Works with the tools you already pay for: QuickBooks, Sheets, Gmail, your CRM",
  "You own the code and the accounts. No lock-in, no per-seat surprises",
];

const backers = [
  { src: "/brand/logos/google-new.svg", alt: "Google for Startups", width: 116 },
  { src: "/brand/logos/yc.svg", alt: "Y Combinator", width: 104 },
  { src: "/brand/logos/newage.svg", alt: "New Age Capital", width: 94 },
  { src: "/brand/logos/rg.svg", alt: "RG", width: 58 },
  { src: "/brand/logos/tackelbox.svg", alt: "Tacklebox", width: 104 },
];

export function CampaignHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-night px-5 pb-20 pt-32 text-brand-mist md:pb-24 md:pt-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_0%,rgba(131,77,251,0.38),transparent_52%),radial-gradient(ellipse_at_95%_8%,rgba(107,52,224,0.28),transparent_45%)]"
      />
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-brand-purple/40 bg-brand-purple/10 px-4 py-2 text-brand-purple-light">
            <span className="size-1.5 rounded-full bg-brand-purple-light" />
            For owner-run businesses
          </span>
          <h1 className="display mt-6 max-w-3xl text-balance text-[clamp(2.75rem,5.8vw,5rem)] leading-[0.98]">
            Put AI to work in your business in{" "}
            <span className="text-gradient">10 days</span>, starting with one task
            that&apos;s costing you money.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-brand-mist/70">
            No AI strategy decks. No 6-month builds. We find the one workflow
            eating your team&apos;s week: quoting, scheduling, invoices, inbox or
            follow-ups. Then we ship a working system that handles it.
          </p>

          <ul className="mt-8 grid max-w-2xl gap-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-brand-mist/90">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-purple/20 text-brand-purple-light">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="leading-6">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-white/10 pt-7">
            <p className="eyebrow text-white/45">Our portfolio companies are backed by</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5 brightness-0 invert opacity-65">
              {backers.map((backer) => (
                <Image
                  key={backer.src}
                  src={backer.src}
                  alt={backer.alt}
                  width={backer.width}
                  height={28}
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>

        <div id="ai-audit-form" className="scroll-mt-28 rounded-[2rem] bg-brand-mist p-6 text-brand-ink shadow-[0_32px_100px_rgba(0,0,0,0.42)] md:p-8">
          <h2 className="text-2xl font-bold tracking-tight">Get your AI opportunity audit</h2>
          <p className="mb-6 mt-2 text-sm leading-6 text-brand-ink/60">
            30 minutes with our founder. You leave with 2–3 AI use cases ranked by
            payback, a rough cost, and a timeline. NDA covered.
          </p>
          <ContactForm
            idPrefix="ai-hero"
            submitLabel="Get my free AI plan"
            className="[&_button[type=submit]]:w-full [&_button[type=submit]]:justify-center"
          />
          <p className="mt-4 text-center text-xs font-medium text-brand-ink/45">
            No cost · No sales pressure · NDA covered
          </p>
        </div>
      </div>
      <span id="ai-hero-end" className="absolute bottom-0 h-px" />
    </section>
  );
}
