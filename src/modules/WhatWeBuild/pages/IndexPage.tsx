import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { CTA } from "@/components/sections/cta";
import { BASE_PATH, getCategory, indexPage, modules } from "@/utils/what-we-build";
import { breadcrumbJsonLd, JsonLdScript } from "@/utils/seo";
import { ModulesSection } from "../components/ModulesSection";

export const metadata: Metadata = {
  title: { absolute: indexPage.metaTitle },
  description: indexPage.metaDescription,
  alternates: { canonical: BASE_PATH },
  openGraph: { title: indexPage.metaTitle, description: indexPage.metaDescription, url: BASE_PATH, type: "website" },
};

export function WhatWeBuildIndexPage() {
  const [subtitle, ...intro] = indexPage.intro;
  return (
    <main>
      <JsonLdScript data={breadcrumbJsonLd([{ name: "What we build", path: BASE_PATH }])} />
      <PageHero title={indexPage.h1} subtitle={subtitle}>
        <Reveal delay={0.3} className="mt-8">
          <Pill href="/contact">Book a strategy call</Pill>
        </Reveal>
      </PageHero>

      <section className="bg-white py-16 md:py-24">
        <Container>
          {intro.map((p) => (
            <Reveal key={p}>
              <p className="max-w-3xl text-lg leading-relaxed text-brand-ink/70">{p}</p>
            </Reveal>
          ))}
          <Reveal className="mt-14">
            <Eyebrow>Product categories</Eyebrow>
          </Reveal>
          <Stagger className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
            {indexPage.cards.map((card) => {
              const category = getCategory(card.category);
              return (
                <StaggerItem key={card.category}>
                  <Link
                    href={`${BASE_PATH}/${card.category}`}
                    className="group flex h-full flex-col gap-3 rounded-card border border-brand-ink/[0.07] bg-brand-mist/60 p-6 transition-colors hover:border-brand-purple/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
                  >
                    <h2 className="text-xl font-semibold text-brand-ink transition-colors group-hover:text-brand-violet">
                      {card.label}
                    </h2>
                    <p className="text-[0.95rem] text-brand-ink/60">{card.blurb}</p>
                    <p className="text-sm leading-relaxed text-brand-ink/50">{card.types.join(" · ")}</p>
                    {category && category.products.length > 0 && (
                      <span className="mt-auto pt-2 text-sm font-semibold text-brand-violet">
                        {category.products.length} detailed product guides →
                      </span>
                    )}
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-brand-mist pt-16 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="display text-3xl leading-tight text-brand-ink sm:text-4xl">{indexPage.modulesHeading}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-brand-ink/70">{indexPage.modulesIntro}</p>
          </Reveal>
        </Container>
      </section>
      <ModulesSection variant="index" ids={modules.map((m) => m.id)} />

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="display text-3xl leading-tight text-brand-ink sm:text-4xl">{indexPage.whyHeading}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-brand-ink/70">{indexPage.whySummary}</p>
            <Link
              href={`${BASE_PATH}/why-byldd`}
              className="mt-6 inline-block font-semibold text-brand-violet underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
            >
              Why Byldd →
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
