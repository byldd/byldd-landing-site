import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Pill } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import { CTA } from "@/components/sections/cta";
import { BASE_PATH, whyByldd } from "@/utils/what-we-build";
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/utils/seo";
import { Breadcrumbs, ContentBlocks, FaqSection, ProcessSection } from "../components/PageParts";
import { plainText } from "../components/RichText";

const path = `${BASE_PATH}/why-byldd`;

export const metadata: Metadata = {
  title: { absolute: whyByldd.metaTitle },
  description: whyByldd.metaDescription,
  alternates: { canonical: path },
  openGraph: { title: whyByldd.metaTitle, description: whyByldd.metaDescription, url: path, type: "website" },
};

export function WhyBylddPage() {
  const [subtitle, ...intro] = whyByldd.intro;
  const crumbs = [
    { label: "What we build", href: BASE_PATH },
    { label: "Why Byldd", href: path },
  ];
  return (
    <main>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(crumbs.map((c) => ({ name: c.label, path: c.href }))),
          faqJsonLd(whyByldd.faqs.map((f) => ({ q: f.q, a: plainText(f.a) }))),
        ]}
      />
      <PageHero title={whyByldd.h1} subtitle={subtitle} breadcrumbs={<Breadcrumbs items={crumbs} />}>
        <Reveal delay={0.3} className="mt-8">
          <Pill href="/contact">Book a strategy call</Pill>
        </Reveal>
      </PageHero>
      <ContentBlocks
        blocks={[...intro.map((text) => ({ type: "p" as const, text })), ...whyByldd.blocks]}
        process={<ProcessSection />}
      />
      <FaqSection faqs={whyByldd.faqs} heading="Working with Byldd FAQs" />
      <CTA />
    </main>
  );
}
