import Image from "next/image";
import { Check } from "lucide-react";

import { ContactForm } from "@/modules/Contact/components/ContactForm";

// Real client logos, taken from the pre-relaunch byldd.com.
const clientLogos = [
  { src: "/brand/logos/clients/real/rake.png", alt: "Rake", width: 116, height: 29 },
  { src: "/brand/logos/clients/real/rekt.png", alt: "REKT", width: 119, height: 90 },
  { src: "/brand/logos/clients/real/skiddoo.png", alt: "Skiddoo", width: 102, height: 25 },
  { src: "/brand/logos/clients/real/election-bridge.png", alt: "Election Bridge", width: 115, height: 25 },
  { src: "/brand/logos/clients/real/realiize.png", alt: "Realiize", width: 103, height: 25 },
];

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
          <h1 className="display max-w-3xl text-balance text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[0.98]">
            Frustrated with a broken AP process?{" "}
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
              {clientLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.height > 40 ? "-my-4 h-16" : "h-6"} w-auto brightness-0 invert`}
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
