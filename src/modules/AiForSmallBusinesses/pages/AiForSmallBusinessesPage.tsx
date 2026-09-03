import type { Metadata } from "next";

import { CampaignFaq } from "@/modules/AiForSmallBusinesses/components/CampaignFaq";
import { CampaignHero } from "@/modules/AiForSmallBusinesses/components/CampaignHero";
import {
  AuditSection,
  ComparisonSection,
  ProblemSection,
  ProcessSection,
  ProofSection,
  StatsBand,
  UseCasesSection,
} from "@/modules/AiForSmallBusinesses/components/CampaignSections";
import { StickyAuditBar } from "@/modules/AiForSmallBusinesses/components/StickyAuditBar";

export const metadata: Metadata = {
  title: "AI for Small Businesses | Byldd",
  description:
    "Put AI to work in your small business in 10 days with a fixed-scope system built around the tools your team already uses.",
};

export function AiForSmallBusinessesPage() {
  return (
    <main className="overflow-clip">
      <CampaignHero />
      <StatsBand />
      <ProblemSection />
      <UseCasesSection />
      <ProcessSection />
      <ComparisonSection />
      <ProofSection />
      <AuditSection />
      <CampaignFaq />
      <StickyAuditBar />
    </main>
  );
}
