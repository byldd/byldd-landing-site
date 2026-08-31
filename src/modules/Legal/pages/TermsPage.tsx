import type { Metadata } from "next";
import { LegalPage } from "@/modules/Legal/components/LegalPage";
import { terms, LAST_UPDATED } from "@/modules/Legal/utils/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Byldd website and our engagements.",
};

export function TermsPage() {
  return <LegalPage title={terms.title} intro={terms.intro} sections={terms.sections} updated={LAST_UPDATED} />;
}
