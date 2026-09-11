import Image from "next/image";

import { Container } from "@/components/ui";
import type { CampaignBackersContent } from "@/components/campaign/product-development/types";

export function CampaignBackersSection({ content }: { content: CampaignBackersContent }) {
  return (
    <section className="bg-brand-mist py-10">
      <Container>
        <p className="text-center text-sm font-semibold text-brand-violet">
          {content.heading}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:justify-between">
          {content.backers.map((backer) => (
            <Image
              key={backer.alt}
              src={backer.src}
              alt={backer.alt}
              width={130}
              height={38}
              className="h-7 w-auto max-w-28 object-contain opacity-65 grayscale"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
