import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { Icon } from "@/components/brand/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { MaskText } from "@/components/motion/split-reveal";
import { CTA } from "@/components/sections/cta";
import { PageSections } from "@/modules/Services/components/PageSections";
import { TechStack } from "@/modules/Services/components/TechStack";
import { PartnerLogos } from "@/modules/Services/components/PartnerLogos";
import { services, getService } from "@/utils/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.tagline,
    openGraph: { title: s.title, description: s.tagline, url: `/services/${s.slug}/` },
  };
}

export async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  // Related services — siblings first, topped up with other category landing
  // pages so this section is never empty. (Client: "this section to not be
  // removed" — categories like MVP Development have no siblings of their own.)
  const siblings = services.filter((s) => s.category === service.category && s.slug !== service.slug);
  const fallback = services.filter(
    (s) => s.isCategoryLanding && s.category !== service.category && s.slug !== service.slug,
  );
  const related = [...siblings, ...fallback].slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow={service.category}
        title={service.heading}
        subtitle={service.tagline}
      >
        <Reveal delay={0.3} className="mt-8">
          <Pill href={service.cta.href}>{service.cta.label}</Pill>
        </Reveal>
      </PageHero>

      {/* "Our portfolio companies are backed by" — sits under the hero on every
          service page of the current site. Rendered here for all pages, so the
          per-page section lists must not repeat it. */}
      <PartnerLogos />

      {/* Overview + why us */}
      <section className="bg-brand-mist py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Overview</Eyebrow>
              <p className="mt-5 text-lg leading-relaxed text-brand-ink/65">{service.intro}</p>

              {/* Stat tiles: evenly divided cells with dividers, so the three
                  values read as one balanced strip. Previously bare divs in a
                  gap-4 grid, which auto-sized to their labels and looked
                  unevenly spaced. */}
              {service.stats && service.stats.length > 0 && (
                <div className="mt-10 grid grid-cols-3 divide-x divide-brand-ink/10 border-t border-brand-ink/10 pt-8">
                  {service.stats.map((st, i) => (
                    <div
                      key={st.label}
                      className={`flex flex-col items-center text-center ${i === 0 ? "pr-3" : i === service.stats!.length - 1 ? "pl-3" : "px-3"}`}
                    >
                      <span className="display block text-2xl text-brand-purple md:text-3xl">{st.value}</span>
                      <span className="mt-1.5 block text-xs leading-snug text-brand-ink/55">{st.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          <Stagger className="flex flex-col gap-5" amount={0.15}>
            {service.benefits.map((b, i) => (
              <StaggerItem
                key={b.title}
                className="rounded-card border border-brand-ink/[0.07] bg-white p-7"
              >
                <div className="flex items-start gap-5">
                  {/* Solid brand purple: the previous /40 opacity read as a
                      disabled/hoverable affordance, which it isn't. */}
                  <span className="display shrink-0 text-3xl tabular-nums text-brand-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-ink">{b.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-ink/60">{b.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* From idea to adoption — the process section that runs across every
          service page on the current site. */}
      {service.process.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <Reveal className="max-w-2xl">
              <Eyebrow>How we work</Eyebrow>
              <MaskText
                as="h2"
                text="From idea to adoption — step by step."
                gradientFrom={3}
                className="display mt-4 text-pretty text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
              />
            </Reveal>

            {/* Process CHAIN, not loose tiles: a connector rail runs behind the
                cards on desktop and each card carries a node on it, so the five
                steps read as one sequence. Column count follows the step count
                (Digital Transformation has 4, MVP has 6). */}
            <div className="relative mt-12 md:mt-16">
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 right-0 top-[2.35rem] hidden border-t border-dashed border-brand-purple/25 lg:block"
              />
              <Stagger
                className={`relative grid gap-5 sm:grid-cols-2 ${
                  service.process.length >= 6
                    ? "lg:grid-cols-6"
                    : service.process.length === 4
                      ? "lg:grid-cols-4"
                      : "lg:grid-cols-5"
                }`}
                amount={0.1}
              >
                {service.process.map((p, i) => (
                  <StaggerItem
                    key={p.step}
                    className="group flex h-full flex-col gap-4 rounded-card border border-brand-ink/[0.07] bg-brand-mist/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40 hover:bg-white hover:shadow-soft"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-purple/20 bg-white transition-colors duration-300 group-hover:border-brand-purple group-hover:bg-brand-purple">
                        <Icon
                          name={p.icon}
                          className="h-6 w-6 text-brand-purple transition-colors duration-300 group-hover:text-white"
                        />
                      </span>
                      <span className="display text-2xl tabular-nums text-brand-purple">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-ink">{p.step}</h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-ink/60">{p.blurb}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Container>
        </section>
      )}

      {/* Page-specific sections, in the original's order. */}
      <PageSections sections={service.sections} />

      {/* Tech stack — categorized, with each tool's real product logo. */}
      {service.techStack && service.techStack.groups.length > 0 && (
        <TechStack
          heading={service.techStack.heading}
          lead={service.techStack.lead}
          groups={service.techStack.groups}
          ungrouped={service.techStack.ungrouped}
        />
      )}

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <Container className="max-w-3xl">
            <Reveal>
              <Eyebrow>FAQs</Eyebrow>
              <MaskText
                as="h2"
                text="Questions, answered."
                gradientFrom={2}
                className="display mt-4 text-pretty text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
              />
            </Reveal>
            <div className="mt-10 flex flex-col gap-3">
              {service.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.03}>
                  <details className="group rounded-card border border-brand-ink/[0.07] bg-brand-mist/60 px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-ink">
                      {f.q}
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-lavender/60 text-brand-purple transition-transform duration-300 group-open:rotate-45">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-brand-ink/65">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related services — cross-links into the rest of the catalogue. */}
      {related.length > 0 && (
        <section className="bg-brand-mist py-16 md:py-20">
          <Container>
            <Reveal>
              <Eyebrow>Related services</Eyebrow>
            </Reveal>
            <Stagger className="mt-8 grid gap-5 sm:grid-cols-3" amount={0.2}>
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group flex h-full flex-col gap-3 rounded-card border border-brand-ink/[0.07] bg-white p-6 transition-colors hover:border-brand-purple/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-mist"
                  >
                    <Icon name={r.icon} className="h-6 w-6 text-brand-purple" />
                    <span>
                      <span className="block font-semibold text-brand-ink transition-colors group-hover:text-brand-violet">
                        {r.title}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-brand-ink/55">
                        {r.tagline}
                      </span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      )}

      <CTA />
    </main>
  );
}
