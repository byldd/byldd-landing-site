import { Container, Eyebrow } from "@/components/ui";
import { Icon, type IconName } from "@/components/brand/icons";
import { MaskText } from "@/components/motion/split-reveal";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { industries } from "@/utils/content";

/**
 * Industries we serve — restored from the current byldd.com. The old site
 * showed a name-only icon carousel; there is no
 * per-industry copy to carry over, so these stay as compact chips rather than
 * padded cards — which also keeps 16 items to a few lines on mobile.
 */
export function Industries({
  id = "industries",
  title = "Industries we serve.",
  lead = "Regulated or scrappy, we ship in the environments our clients operate in.",
  items = industries,
}: {
  /** Override when rendered alongside the homepage copy, so DOM ids stay unique. */
  id?: string;
  title?: string;
  lead?: string;
  items?: readonly { label: string; icon: string }[];
} = {}) {
  return (
    <section id={id} className="bg-brand-night py-20 text-white md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light">Industries</Eyebrow>
          <MaskText
            as="h2"
            text={title}
            gradientFrom={2}
            className="display mt-4 text-pretty text-[2.5rem] leading-[1.02] sm:text-5xl lg:text-[3.75rem]"
          />
          <p className="mt-5 text-lg leading-relaxed text-white/65">{lead}</p>
        </Reveal>

        <Stagger className="mt-10 flex flex-wrap gap-2.5 md:mt-12 md:gap-3" amount={0.1}>
          {items.map((i) => (
            <StaggerItem
              key={i.label}
              className="group flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-2.5 pl-3.5 pr-5 transition-colors duration-300 hover:border-brand-purple/50 hover:bg-white/[0.08]"
            >
              <Icon
                name={i.icon as IconName}
                className="h-5 w-5 shrink-0 text-brand-purple-light transition-transform duration-300 group-hover:scale-110"
              />
              <span className="whitespace-nowrap text-sm font-medium text-white/85">{i.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
