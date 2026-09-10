import { Container, SectionHeading } from "@/components/ui";
import { CampaignCaseStudiesCarousel } from "@/components/campaign/product-development/CampaignCaseStudiesCarousel";
import type { CampaignCaseStudiesContent } from "@/components/campaign/product-development/types";

export function CampaignCaseStudiesSection({ content }: { content: CampaignCaseStudiesContent }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.heading}
          align="center"
          className="mx-auto max-w-5xl"
        />
        <CampaignCaseStudiesCarousel studies={content.studies} ariaLabel={content.carouselLabel} />
      </Container>
    </section>
  );
}
