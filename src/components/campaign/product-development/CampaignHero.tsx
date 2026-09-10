import { ContactForm } from "@/modules/Contact/components/ContactForm";
import type { CampaignHeroContent } from "@/components/campaign/product-development/types";

export function CampaignHero({ content }: { content: CampaignHeroContent }) {
  return (
    <section className="relative bg-white px-[15px] pb-[60px] pt-[140px] text-brand-ink before:absolute before:inset-x-0 before:top-0 before:h-[4.5rem] before:bg-brand-night">
      <div className="relative mx-auto grid max-w-[1170px] lg:grid-cols-[3fr_2fr]">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:block lg:text-left">
          <h1 className="max-w-full text-[2.5rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[#1a1a2e] lg:max-w-[702px] lg:text-[3.75rem]">
            {content.headline}{" "}
            <span className="font-bold text-[#5a3bf5]">{content.highlightedHeadline}</span>
          </h1>
          <p className="mt-5 w-[83%] text-[1.5625rem] leading-[1.6] text-[#666] lg:max-w-[583px]">
            {content.description}
          </p>
        </div>

        <div
          id={content.formId}
          className="order-1 scroll-mt-28 rounded-[1.5rem] bg-[#FBFBFB] p-5 text-brand-ink  lg:order-2 lg:pt-5"
        >
          <ContactForm
            idPrefix={content.formIdPrefix}
            submitLabel={content.submitLabel}
            className="gap-3 [&>div.grid]:grid-cols-1 [&_button[type=submit]]:mt-0 [&_button[type=submit]]:w-full [&_button[type=submit]]:justify-center [&_button[type=submit]]:rounded-[10px] [&_label>span:first-child]:sr-only [&_textarea]:min-h-[150px]"
          />
        </div>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-[1170px] gap-2.5 sm:grid-cols-2 lg:mt-5 lg:grid-cols-4">
        {content.stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex min-h-[90px] flex-col items-center justify-center rounded-[10px] bg-[#fbfbfb] px-2 py-4 text-center"
          >
            <p className="text-2xl font-bold leading-none text-[#5d5d5d]">{value}</p>
            <p className="mt-2 text-sm font-medium uppercase text-[#6a7282]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
