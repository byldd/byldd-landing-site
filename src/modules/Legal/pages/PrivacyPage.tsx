import type { Metadata } from "next";
import { LegalPage } from "@/modules/Legal/components/LegalPage";
import { privacy, LAST_UPDATED } from "@/modules/Legal/utils/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Byldd collects, uses, and protects the information you share with us.",
};

export function PrivacyPage() {
  return <LegalPage title={privacy.title} intro={privacy.intro} sections={privacy.sections} updated={LAST_UPDATED} />;
}
