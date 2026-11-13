import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/ui";
import { pilotContent as content } from "@/modules/VibecodedAppLaunch/content";

export function PilotSection() {
  return (
    <section id={content.sectionId} className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
        <div>
          <p className="eyebrow text-brand-violet">{content.eyebrow}</p>
          <h2 className="display mt-5 text-4xl text-brand-ink md:text-6xl">{content.heading}</h2>
          <ul className="mt-9 grid gap-4">
            {content.benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg leading-7 text-brand-ink/75">
                <Check className="mt-1 size-5 shrink-0 text-brand-violet" />{item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-[2rem] bg-brand-night p-8 text-white shadow-glow md:p-10">
          <p className="text-6xl font-bold tracking-tight">{content.price}</p>
          <p className="mt-2 text-white/60">{content.duration}</p>
          <p className="mt-7 rounded-2xl bg-white/[0.07] p-5 text-lg">{content.refundLead} <strong>{content.refundText}</strong></p>
          <p className="eyebrow mt-7 text-brand-purple-light">{content.afterEyebrow}</p>
          <p className="mt-2 text-white/70">{content.afterText}</p>
          <a href={content.ctaHref} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5">
            {content.ctaLabel} <ArrowRight className="size-4" />
          </a>
        </aside>
      </Container>
    </section>
  );
}
