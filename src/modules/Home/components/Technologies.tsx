import { Container, Eyebrow } from "@/components/ui";
import { Icon, type IconName } from "@/components/brand/icons";
import { MaskText } from "@/components/motion/split-reveal";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { technologies } from "@/utils/content";

/**
 * Technologies we work with — blurb and labels carried over verbatim from the
 * current byldd.com; icons are the bespoke brand set.
 *
 * Laid out VERTICALLY (heading block, then full-width tiles) to match every
 * other section on the page — the earlier two-column sticky treatment read as
 * a sideways outlier. Icon and label sizes sit at the same level as their
 * peers in the other card grids.
 */
export function Technologies() {
  return (
    <section id="technologies" className="bg-brand-mist py-20 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Technologies</Eyebrow>
          <MaskText
            as="h2"
            text="Technologies we work with."
            gradientFrom={2}
            className="display mt-4 text-pretty text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
          />
          <p className="mt-5 text-lg leading-relaxed text-brand-ink/65">{technologies.blurb}</p>
        </Reveal>

        <Stagger
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-14 lg:grid-cols-5"
          amount={0.1}
        >
          {technologies.items.map((t) => (
            <StaggerItem
              key={t.label}
              className="group flex flex-col gap-6 rounded-card border border-brand-ink/[0.07] bg-white p-6 transition-colors duration-300 hover:border-brand-purple/30 md:p-7"
            >
              <Icon
                name={t.icon as IconName}
                className="h-9 w-9 text-brand-purple transition-transform duration-300 group-hover:scale-110"
              />
              <span className="mt-auto text-lg font-semibold leading-snug text-brand-ink">{t.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
