import type { Metadata } from "next";
import { LegalPage } from "@/modules/Legal/components/LegalPage";
import { cookies, LAST_UPDATED } from "@/modules/Legal/utils/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How and why byldd.com uses cookies.",
};

export function CookiePolicyPage() {
  return <LegalPage title={cookies.title} intro={cookies.intro} sections={cookies.sections} updated={LAST_UPDATED} />;
}
