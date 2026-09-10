import type { Metadata } from "next";

import {
  CampaignBackersSection,
  CampaignCaseStudiesSection,
  CampaignFaqSection,
  CampaignFlexibleTeamSection,
  CampaignHero,
  CampaignProcessSection,
  CampaignStrategyCallSection,
  CampaignThinkingSection,
} from "@/components/campaign/product-development";
import { Testimonials } from "@/components/sections/testimonials";
import { productDevelopmentForFoundersContent as content } from "@/modules/ProductDevelopmentForFounders/content";

export const metadata: Metadata = {
  title: "Product Development Partner for Founders | Byldd",
  description:
    "A ready-to-execute product team for founders. Go from concept to a production-ready product without the delays and cost of hiring in-house.",
  robots: { index: false, follow: true },
};

export function ProductDevelopmentForFoundersPage() {
  return (
    <main className="overflow-clip">
      <CampaignHero content={content.hero} />
      <CampaignBackersSection content={content.backers} />
      <CampaignProcessSection content={content.process} />
      <CampaignThinkingSection content={content.thinking} />
      <Testimonials {...content.testimonials} />
      <CampaignFlexibleTeamSection content={content.flexibleTeam} />
      <CampaignCaseStudiesSection content={content.caseStudies} />
      <CampaignStrategyCallSection content={content.strategyCall} />
      <CampaignFaqSection content={content.faq} />
    </main>
  );
}
