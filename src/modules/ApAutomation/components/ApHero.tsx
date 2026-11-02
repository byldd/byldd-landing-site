import Image from "next/image";
import { Check } from "lucide-react";

import { ContactForm } from "@/modules/Contact/components/ContactForm";
import { clientLogos } from "@/utils/content";

const benefits = [
  "Fixed scope from $5k, quoted on the first call",
  "Works with QuickBooks Online, Xero, NetSuite, Sage Intacct and Business Central",
  "Your code, your cloud account, your data. No per-invoice or per-seat fees, ever",
];

export function ApHero() {
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
            For CFOs and controllers
          </span>
          <h1 className="display mt-6 max-w-3xl text-balance text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[0.98]">
            <span className="mb-4 block text-[0.55em] leading-[1.08] text-brand-purple-light">
              Frustrated with a broken AP process?
            </span>
            Get a custom-built accounts payable dashboard for your business in{" "}
            <span className="text-gradient">10 days</span> for $5k.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-brand-mist/70">
            AP software makes you change your process to fit theirs, then charges
            you per invoice for it. We build the system around how your team
            already approves, codes and pays, connect it to your ERP, and hand you
            the code. One fixed fee. No subscription.
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
            <p className="eyebrow text-white/45">Teams we&apos;ve built with</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5 opacity-65">
              {clientLogos.slice(0, 6).map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={28}
                  className="h-6 w-auto brightness-0 invert"
                />
              ))}
            </div>
          </div>
        </div>

        <div id="ap-audit-form" className="scroll-mt-28 rounded-[2rem] bg-brand-mist p-6 text-brand-ink shadow-[0_32px_100px_rgba(0,0,0,0.42)] md:p-8">
          <h2 className="text-2xl font-bold tracking-tight">Get your AP automation audit</h2>
          <p className="mb-6 mt-2 text-sm leading-6 text-brand-ink/60">
            30 minutes with a product manager. You leave knowing what it would
            cost to automate your AP process and own the result. NDA covered.
          </p>
          <ContactForm
            idPrefix="ap-hero"
            submitLabel="Book my AP audit"
            variant="apAudit"
            className="[&_button[type=submit]]:w-full [&_button[type=submit]]:justify-center"
          />
          <p className="mt-4 text-center text-xs font-medium text-brand-ink/45">
            No cost · No sales pressure · NDA covered
          </p>
        </div>
      </div>
      <span id="ap-hero-end" className="absolute bottom-0 h-px" />
    </section>
  );
}
