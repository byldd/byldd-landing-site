import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui";
import { Icon } from "@/components/brand/icons";
import { ArrowUpRight } from "@/components/brand/marks";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/primitives";
import { TiltCard } from "@/components/motion/tilt";
import { CTA } from "@/components/sections/cta";
import { serviceMenu } from "@/utils/services";

export const metadata: Metadata = {
  title: "What We Build",
  description:
    "MVP development, app and software development, AI, workflow automation and digital transformation — one senior team from idea to scale.",
};

export function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Build"
        title="One partner, from idea to scale."
        gradientFrom={3}
        subtitle="Strategy, design, and engineering under one roof — so you ship faster without stitching vendors together."
      />

      <section className="bg-brand-mist py-20 md:py-32">
        <Container className="flex flex-col gap-16">
          {serviceMenu.map(({ category, landing, children }) => (
            <div key={category}>
              <Reveal className="mb-8 flex items-center gap-4">
                <Eyebrow>{category}</Eyebrow>
                <span className="h-px flex-1 bg-brand-ink/10" />
              </Reveal>

              {/* Category landing page — the headline card. */}
              {landing && (
                <Reveal className="mb-5">
                  <Link
                    href={`/services/${landing.slug}`}
                    className="group flex flex-col gap-4 rounded-card border border-brand-ink/[0.07] bg-white p-7 transition-colors duration-300 hover:border-brand-purple/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-mist md:p-8"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <Icon
                        name={landing.icon}
                        className="h-8 w-8 shrink-0 text-brand-purple transition-transform duration-300 group-hover:scale-110"
                      />
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-ink/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-purple" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-brand-ink">{landing.title}</h2>
                      <p className="mt-2 max-w-2xl leading-relaxed text-brand-ink/60">{landing.tagline}</p>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* Sub-services */}
              {children.length > 0 && (
                <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" amount={0.1}>
                  {children.map((s, i) => (
                    <StaggerItem key={s.slug} className="h-full">
                      <TiltCard className="h-full">
                        <Link
                          href={`/services/${s.slug}`}
                          className="group relative flex h-full flex-col gap-8 rounded-card border border-brand-ink/[0.07] bg-white p-7 transition-colors duration-300 hover:border-brand-purple/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-mist"
                        >
                          <div className="flex items-start justify-between">
                            <span className="display text-4xl tabular-nums text-brand-ink/15 transition-colors duration-300 group-hover:text-brand-purple">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <ArrowUpRight className="h-5 w-5 text-brand-ink/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-purple" />
                          </div>
                          <div className="mt-auto flex flex-col gap-2">
                            <h3 className="text-xl font-semibold text-brand-ink">{s.title}</h3>
                            <p className="line-clamp-3 text-[0.95rem] leading-relaxed text-brand-ink/60">
                              {s.tagline}
                            </p>
                          </div>
                        </Link>
                      </TiltCard>
                    </StaggerItem>
                  ))}
                </Stagger>
              )}
            </div>
          ))}
        </Container>
      </section>

      <CTA />
    </main>
  );
}
