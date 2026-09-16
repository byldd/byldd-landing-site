import type { Metadata } from "next";

import { LegalPage } from "@/modules/Legal/components/LegalPage";
import {
  LAST_UPDATED,
  serviceTerms,
} from "@/modules/Legal/utils/legal";

export const metadata: Metadata = {
  title: "Service Terms and Conditions",
  description:
    "The terms and conditions governing Byldd software development engagements.",
};

export function ServiceTermsPage() {
  return (
    <LegalPage
      title={serviceTerms.title}
      intro={serviceTerms.intro}
      sections={serviceTerms.sections}
      updated={LAST_UPDATED}
    />
  );
}
