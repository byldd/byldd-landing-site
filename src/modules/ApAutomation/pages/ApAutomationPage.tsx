import type { Metadata } from "next";

import { ApFaq } from "@/modules/ApAutomation/components/ApFaq";
import { ApHero } from "@/modules/ApAutomation/components/ApHero";
import {
  AuditSection,
  ComparisonSection,
  ModulesSection,
  ProblemSection,
  ProcessSection,
  ProofSection,
} from "@/modules/ApAutomation/components/ApSections";
import { StickyAuditBar } from "@/modules/ApAutomation/components/StickyAuditBar";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Custom Accounts Payable Automation | Byldd",
  description:
    "AP automation built around your approval rules and your ERP, live in 10 days for a fixed $5k–$10k. You own the code. No subscription, no per-invoice fees.",
};

export function ApAutomationPage() {
  return (
    <main className="overflow-clip">
      <ApHero />
      <ProblemSection />
      <ModulesSection />
      <ProcessSection />
      <ComparisonSection />
      <ProofSection />
      <Testimonials />
      <AuditSection />
      <ApFaq />
      <StickyAuditBar />
    </main>
  );
}
