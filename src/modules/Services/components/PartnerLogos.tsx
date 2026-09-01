import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import { partnerLogos } from "@/utils/content";

/**
 * "Our portfolio companies are backed by" — the strip that sits under the hero
 * on every service page of the current byldd.com. Extracted out of
 * components/sections/services.tsx (where it was inline inside the audience
 * toggle) so service pages can render it without dragging in that state.
 */
export function PartnerLogos({
  label = "Our portfolio companies are backed by",
  logos = partnerLogos,
  className = "",
}: {
  label?: string;
  logos?: readonly { src: string; alt: string }[];
  className?: string;
}) {
  if (logos.length === 0) return null;
  return (
    <section className={`bg-white py-12 md:py-16 ${className}`}>
      <Container>
        <Reveal>
          <p className="text-sm font-medium text-brand-ink/50">{label}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-5">
            {logos.map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="h-7 w-auto object-contain opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-8"
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
