import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import type { LegalSection } from "../types/legal-section";

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main>
      <PageHero eyebrow="Legal" title={title} subtitle={intro} />
      <section className="bg-brand-mist py-24 md:py-32">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="muted">Last updated: {updated}</Eyebrow>
          </Reveal>
          <div className="mt-10 flex flex-col gap-10">
            {sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="text-2xl font-semibold text-brand-ink">{s.heading}</h2>
                <div className="mt-3 flex flex-col gap-3 leading-relaxed text-brand-ink/70">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
