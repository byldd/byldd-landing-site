import { Container, Pill } from "@/components/ui";
import { HeroCanvasGate } from "@/components/webgl/hero-canvas-gate";
import { MaskText } from "@/components/motion/split-reveal";
import { Reveal } from "@/components/motion/primitives";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { stats } from "@/utils/content";

export function Hero() {
  return (
    <section
      id="top"
      tabIndex={-1}
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-brand-night pt-28 text-white outline-none"
    >
      {/* WebGL field — desktop only; mobile keeps the static brand-night field */}
      <HeroCanvasGate className="absolute inset-0 -z-20 h-full w-full" />
      {/* legibility scrims */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-night/92 via-brand-night/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-night via-brand-night/10 to-brand-night/40" />

      <Container className="relative flex flex-1 flex-col justify-center py-20">
        <div className="max-w-3xl">
          <MaskText
            as="h1"
            text="Byldd what's next."
            gradientFrom={1}
            amount={0.4}
            className="display text-balance text-5xl text-white sm:text-7xl lg:text-[5.5rem]"
          />

          <Reveal delay={0.3}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 [text-shadow:0_1px_14px_rgba(22,12,46,0.7)] sm:text-xl">
              Byldd turns uncertainty into clarity — so founders ship what customers
              actually use. Engineered with clarity, built to scale, designed to last.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Pill href="/contact">
                  Book a Strategy Session
                </Pill>
              </Magnetic>
              <Magnetic>
                <Pill href="#process" variant="outlineLight">
                  See How We Work
                </Pill>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Stat strip with counters */}
      <Container className="relative pb-10">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-sm md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center px-4 py-5 text-center sm:px-6 sm:py-6">
              <Counter
                value={s.num}
                decimals={s.decimals}
                suffix={s.suffix}
                className="display block text-2xl text-white tabular-nums sm:text-3xl md:text-4xl"
              />
              <p className="mt-1.5 max-w-[16ch] text-balance text-xs leading-snug text-white/55 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
