import { ArrowRight } from "lucide-react";

import { ContactForm } from "@/modules/Contact/components/ContactForm";
import type { CampaignStrategyCallContent } from "@/components/campaign/product-development/types";

export function CampaignStrategyCallSection({ content }: { content: CampaignStrategyCallContent }) {
  return (
    <section id={content.sectionId} className="scroll-mt-24 bg-brand-purple px-5 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="relative">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-white/65">{content.eyebrow}</p>
            <h2 className="display mt-5 text-balance text-4xl md:text-6xl">
              {content.heading}
            </h2>
            <ul className="mt-8 grid gap-4">
              {content.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-lg leading-7 text-white/85">
                  <ArrowRight className="mt-1 size-5 shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-white/75">
              {content.closingText} <strong className="text-white">{content.emphasizedClosingText}</strong>
            </p>
          </div>
        </div>
        <div className="self-start rounded-[2rem] bg-brand-mist p-6 text-brand-ink shadow-[0_30px_90px_rgba(31,18,75,0.3)] md:p-8">
          <h3 className="text-center text-2xl font-bold tracking-tight">{content.formHeading}</h3>
          <p className="mb-6 mt-2 text-center text-sm text-brand-ink/55">{content.formDescription}</p>
          <ContactForm
            idPrefix={content.formIdPrefix}
            submitLabel={content.submitLabel}
            defaultCountry={content.defaultCountry}
            className="[&_button[type=submit]]:w-full [&_button[type=submit]]:justify-center"
          />
        </div>
      </div>
    </section>
  );
}
