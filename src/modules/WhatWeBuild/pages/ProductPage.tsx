import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Pill } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import { CTA } from "@/components/sections/cta";
import {
  BASE_PATH,
  categories,
  categoryPath,
  getProduct,
  productModuleIds,
  productPath,
} from "@/utils/what-we-build";
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript, serviceJsonLd } from "@/utils/seo";
import { ModulesSection } from "../components/ModulesSection";
import { Breadcrumbs, ContentBlocks, FaqSection, ProcessSection, RelatedLinks } from "../components/PageParts";
import { plainText, RichText } from "../components/RichText";

type Params = Promise<{ category: string; product: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.flatMap((c) => c.products.map((p) => ({ category: c.slug, product: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category, product } = await params;
  const found = getProduct(category, product);
  if (!found) return {};
  const p = found.product;
  const path = productPath(found.category, p);
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url: path, type: "website" },
  };
}

export async function ProductDetailPage({ params }: { params: Params }) {
  const { category: categorySlug, product: productSlug } = await params;
  const found = getProduct(categorySlug, productSlug);
  if (!found) notFound();
  const { category, product } = found;

  const path = productPath(category, product);
  const hubPath = categoryPath(category);
  const { own, rest } = productModuleIds(category, product);
  const [subtitle, ...intro] = product.intro;
  const crumbs = [
    { label: "What we build", href: BASE_PATH },
    { label: category.h1, href: hubPath },
    { label: product.h1, href: path },
  ];

  return (
    <main>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(crumbs.map((c) => ({ name: c.label, path: c.href }))),
          serviceJsonLd({
            name: product.h1,
            description: product.metaDescription,
            path,
            serviceType: product.primaryKeyword,
          }),
          ...(product.faqs.length ? [faqJsonLd(product.faqs.map((f) => ({ q: f.q, a: plainText(f.a) })))] : []),
        ]}
      />
      <PageHero title={product.h1} breadcrumbs={<Breadcrumbs items={crumbs} />}>
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
        blocks={[...intro.map((text) => ({ type: "p" as const, text })), ...product.blocks]}
        modules={
          <ModulesSection variant="product" own={own} rest={rest} categoryShortName={category.shortName} />
        }
        process={<ProcessSection />}
      />

      <FaqSection faqs={product.faqs} heading={`${product.h1} FAQs`} />
      <RelatedLinks links={product.related} />
      <CTA />
    </main>
  );
}
