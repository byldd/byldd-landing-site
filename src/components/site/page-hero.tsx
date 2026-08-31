import type { ReactNode } from "react";
import { Container, Eyebrow } from "../ui";
import { MaskText } from "../motion/split-reveal";
import { Reveal } from "../motion/primitives";

/** Lighter interior hero — soft brand glow + masked title, no WebGL. */
export function PageHero({
  eyebrow,
  title,
  gradientFrom,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  gradientFrom?: number;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section id="top" tabIndex={-1} className="relative isolate overflow-hidden bg-brand-night pb-20 pt-36 text-white outline-none md:pb-28 md:pt-44">
      {/* Subtle brand glow — matches the homepage hero's dark, clean treatment
          (no corner pattern tiling, for uniformity across all heroes). */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem]"
        style={{ background: "radial-gradient(circle, rgba(131,77,251,0.14), transparent 65%)" }}
      />
      <Container className="relative">
        {eyebrow && (
          <Reveal className="mb-6">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <MaskText
          as="h1"
          text={title}
          gradientFrom={gradientFrom}
          amount={0.5}
          className="display max-w-4xl text-balance text-4xl sm:text-5xl lg:text-[3.75rem]"
        />
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
