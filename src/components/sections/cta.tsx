import { Container, Pill } from "../ui";
import { Sparkle } from "../brand/marks";
import { Reveal, Parallax } from "../motion/primitives";
import { MaskText } from "../motion/split-reveal";
import { Magnetic } from "../motion/magnetic";

const mantra = ["Understand Better", "Decide Smarter", "Build What Matters"];

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-night py-20 text-white md:py-36">
      <Parallax className="pointer-events-none absolute left-1/2 top-1/2" distance={100}>
        {/* pre-soft radial glow — no filter, no animation, no per-frame repaint */}
        <div
          className="h-[70rem] w-[70rem] -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(131,77,251,0.16), rgba(131,77,251,0.04) 45%, transparent 70%)" }}
        />
      </Parallax>
      {/* legibility scrim so the glow frames the text instead of washing it out */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 46% 42% at 50% 46%, rgba(11,7,20,0.72), transparent 72%)" }}
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <Reveal>
            <Sparkle gradientId="cta-sparkle" className="h-14 w-14 animate-float drop-shadow-[0_18px_40px_rgba(131,77,251,0.6)]" />
          </Reveal>
          <MaskText
            as="h2"
            text="Byldd what matters."
            gradientFrom={1}
            amount={0.5}
            className="display text-balance text-5xl sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl text-lg leading-relaxed text-white/65">
              Stop building the wrong product. Let&apos;s turn your idea into a product worth
              scaling — from idea to revenue in 45 days.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <Magnetic>
              <Pill href="/contact">
                Book a Strategy Session
              </Pill>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.44} className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {mantra.map((m, i) => (
              <span key={m} className="inline-flex items-center gap-5">
                {i > 0 && <Sparkle solid className="h-3 w-3 text-brand-purple" />}
                <span className="text-sm font-semibold tracking-tight text-white/65 sm:text-base">{m}</span>
              </span>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
