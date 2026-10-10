import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Pill } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import { CTA } from "@/components/sections/cta";
import { services } from "@/utils/services";
import {
  BASE_PATH,
  categories,
  categoryModuleIds,
  categoryPath,
  getCategory,
} from "@/utils/what-we-build";
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript, serviceJsonLd } from "@/utils/seo";
import { ModulesSection } from "../components/ModulesSection";
import { Breadcrumbs, ContentBlocks, FaqSection, ProcessSection, RelatedLinks } from "../components/PageParts";
import { plainText, RichText } from "../components/RichText";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const c = getCategory(slug);
  if (!c) return {};
  const path = categoryPath(c);
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url: path, type: "website" },
  };
}

export async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const path = categoryPath(category);
  const [subtitle, ...intro] = category.intro;
  const relatedServices = category.relatedServices
    .map((s) => services.find((x) => x.slug === s))
    .filter((s) => s !== undefined)
    .map((s) => ({ label: s.title, href: `/services/${s.slug}` }));

  const blocks = [
    ...intro.map((text) => ({ type: "p" as const, text })),
    ...category.blocks,
  ];

  return (
    <main>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: "What we build", path: BASE_PATH },
            { name: category.h1, path },
          ]),
          serviceJsonLd({
            name: category.h1,
            description: category.metaDescription,
            path,
            serviceType: category.primaryKeyword,
          }),
          ...(category.faqs.length ? [faqJsonLd(category.faqs.map((f) => ({ q: f.q, a: plainText(f.a) })))] : []),
        ]}
      />
      <PageHero
        title={category.h1}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: "What we build", href: BASE_PATH },
              { label: category.h1, href: path },
            ]}
          />
        }
      >
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              <RichText text={subtitle} />
            </p>
          </Reveal>
        )}
        <Reveal delay={0.3} className="mt-8">
          <Pill href="/contact">Book a strategy call</Pill>
        </Reveal>
      </PageHero>

      <ContentBlocks
        blocks={blocks}
        modules={<ModulesSection variant="category" ids={categoryModuleIds(category)} />}
        process={<ProcessSection />}
      />

      <FaqSection faqs={category.faqs} heading={`${category.h1} FAQs`} />

      <RelatedLinks
        heading="Products in this category"
        links={category.products.map((p) => ({ label: p.h1, href: `${path}/${p.slug}` }))}
      />
      <RelatedLinks heading="Related services" links={relatedServices} />

      <CTA />
    </main>
  );
}
