import type { Metadata } from "next";

import {
  BackersSection,
  CaseStudiesSection,
  ComparisonSection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  PainPointsSection,
  PilotSection,
  ReviewSection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
  TrustSection,
} from "@/modules/VibecodedAppLaunch/components";
import { pageMetadata } from "@/modules/VibecodedAppLaunch/content";

export const metadata: Metadata = {
  ...pageMetadata,
  robots: { index: false, follow: true },
};

export function VibeCodedAppLaunchPage() {
  return (
    <main className="overflow-clip bg-white">
      <HeroSection />
      <StatsSection />
      <BackersSection />
      <PainPointsSection />
      <HowItWorksSection />
      <PilotSection />
      <TrustSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <TeamSection />
      <ReviewSection />
      <FaqSection />
    </main>
  );
}
