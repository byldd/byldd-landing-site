import Image from "next/image";

import { Container, Pill, SectionHeading } from "@/components/ui";
import type { CampaignFlexibleTeamContent } from "@/components/campaign/product-development/types";

export function CampaignFlexibleTeamSection({ content }: { content: CampaignFlexibleTeamContent }) {
  return (
    <section className="bg-brand-night py-20 text-brand-mist md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.heading}
            lead={<>{content.lead} <strong className="text-white">{content.emphasizedLead}</strong> {content.trailingLead}</>}
            tone="light"
          />
          <Pill href={content.ctaHref} className="mt-8">{content.ctaLabel}</Pill>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-glow">
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={900}
            height={650}
            unoptimized
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </Container>
    </section>
  );
}
