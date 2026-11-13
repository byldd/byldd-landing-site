import { ArrowRight } from "lucide-react";

import { LaunchForm } from "@/modules/VibecodedAppLaunch/components/LaunchForm";
import { formContent, reviewContent as content } from "@/modules/VibecodedAppLaunch/content";

export function ReviewSection() {
  return (
    <section id={content.sectionId} className="scroll-mt-24 bg-brand-purple px-5 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-white/65">{content.eyebrow}</p>
          <h2 className="display mt-5 text-4xl md:text-6xl">{content.heading}</h2>
          <ul className="mt-8 grid gap-4 text-lg text-white/80">
            {content.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ArrowRight className="mt-1 size-5 shrink-0" />{item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-semibold">{content.closing}</p>
          <p className="mt-2 text-white/65">{content.note}</p>
        </div>
        <LaunchForm idPrefix={formContent.footerIdPrefix} />
      </div>
    </section>
  );
}
