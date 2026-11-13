import { Check } from "lucide-react";

import { formContent, heroContent } from "@/modules/VibecodedAppLaunch/content";
import { LaunchForm } from "@/modules/VibecodedAppLaunch/components/LaunchForm";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-night px-5 pb-20 pt-32 text-white md:pb-28 md:pt-40">
      <div aria-hidden className="absolute -left-40 top-20 size-[32rem] rounded-full bg-brand-purple/25 blur-3xl" />
      <div aria-hidden className="absolute -right-32 bottom-0 size-[28rem] rounded-full bg-brand-purple/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
        <div className="pt-3 lg:sticky lg:top-28">
          <p className="eyebrow text-brand-purple-light">{heroContent.eyebrow}</p>
          <h1 className="display mt-5 max-w-4xl text-balance text-[2.8rem] leading-[0.98] sm:text-6xl lg:text-[4.5rem]">
            {heroContent.headline}{" "}
            <span className="text-gradient">{heroContent.highlightedHeadline}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            {heroContent.description}
          </p>
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-lg text-white/85">
            <strong className="text-white">{heroContent.offerLead}</strong>{" "}
            {heroContent.offerText}
          </div>
          <ul className="mt-7 grid gap-3 text-white/80">
            {heroContent.benefits.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-brand-purple">
                  <Check className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div id={heroContent.formSectionId} className="scroll-mt-24">
          <LaunchForm idPrefix={formContent.heroIdPrefix} />
        </div>
      </div>
    </section>
  );
}
