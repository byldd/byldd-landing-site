import { Container, Eyebrow } from "@/components/ui";
import { MaskText } from "@/components/motion/split-reveal";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

export type TechItem = { label: string; logo?: string };
export type TechGroup = { group: string; items: TechItem[] };

/**
 * Per-service tech stack — grouped by category, with the real product logo
 * for each tool.
 *
 * Logos come from public/brand/tech, fetched from byldd.com's own asset
 * directories. Roughly half of them ship with a baked-in white or dark
 * background (they are Figma-exported tiles, not bare glyphs), so every logo is
 * rendered inside a WHITE tile on a light section — the same treatment the
 * original site uses. Do not move this onto a dark background: the
 * baked-white marks would read as white blocks. Entries with no usable logo
 * fall back to a label-only chip.
 */
export function TechStack({
  heading,
  lead,
  groups,
  ungrouped = false,
}: {
  heading: string;
  lead?: string;
  groups: TechGroup[];
  ungrouped?: boolean;
}) {
  if (groups.length === 0) return null;

  return (
    <section className="bg-brand-mist py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Tech stack</Eyebrow>
          <MaskText
            as="h2"
            text={heading}
            gradientFrom={2}
            className="display mt-4 text-pretty text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
          />
          {lead && <p className="mt-5 text-lg leading-relaxed text-brand-ink/65">{lead}</p>}
        </Reveal>

        <div className="mt-10 flex flex-col gap-10 md:mt-14 md:gap-12">
          {groups.map((g, gi) => (
            <div key={g.group || `group-${gi}`}>
              {/* The source omits the heading on one group (Android page) — only
                  render the label when there is one, so the grid stays aligned. */}
              {g.group && !ungrouped && (
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-brand-ink">{g.group}</h3>
                  <span className="h-px flex-1 bg-brand-ink/10" />
                </div>
              )}
              <Stagger
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
                amount={0.1}
              >
                {g.items.map((t) => (
                  <StaggerItem
                    key={`${g.group}-${t.label}`}
                    className="group flex flex-col items-center gap-3 rounded-card border border-brand-ink/[0.07] bg-white p-5 text-center transition-colors duration-300 hover:border-brand-purple/30"
                  >
                    {t.logo ? (
                      <span className="grid h-12 w-full place-items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/brand/tech/${t.logo}`}
                          alt=""
                          loading="lazy"
                          className="max-h-11 max-w-[86%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </span>
                    ) : (
                      <span
                        aria-hidden
                        className="grid h-12 w-full place-items-center text-2xl font-semibold text-brand-purple/30"
                      >
                        {t.label.slice(0, 1)}
                      </span>
                    )}
                    <span className="text-[0.95rem] font-medium leading-snug text-brand-ink/80">
                      {t.label}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
