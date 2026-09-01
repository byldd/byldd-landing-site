"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform, motion } from "motion/react";
import { Eyebrow, Pill } from "@/components/ui";
import { Sparkle } from "@/components/brand/marks";
import { MaskText } from "@/components/motion/split-reveal";
import { Reveal, useReducedMotionSafe } from "@/components/motion/primitives";
import { steps } from "@/utils/content";

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const sparkleRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  return (
    <section id="process" ref={ref} className="relative bg-brand-mist">
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-12 px-6 md:grid-cols-2 md:px-10">
        {/* Sticky left — pinned heading + scrubbed index */}
        <div className="flex flex-col justify-center py-14 md:sticky md:top-0 md:h-screen md:py-0">
          <Eyebrow>How We Work</Eyebrow>
          <MaskText
            as="h2"
            text="Clarity before code."
            gradientFrom={1}
            className="display mt-4 text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
          />
          <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-ink/65">
            A lean, evidence-led process that gets you from a fuzzy idea to a product worth
            scaling — without the wasted months in between.
          </p>

          {/* scrubbed big index (desktop) */}
          <div className="mt-12 hidden items-center gap-5 md:flex">
            <motion.span style={reduce ? undefined : { rotate: sparkleRotate }}>
              <Sparkle className="h-10 w-10" />
            </motion.span>
            <span className="display text-7xl text-brand-purple tabular-nums">{steps[active].no}</span>
            <span className="text-lg font-semibold text-brand-ink">{steps[active].title}</span>
          </div>

          {/* progress dots */}
          <div className="mt-8 hidden gap-2 md:flex">
            {steps.map((s, i) => (
              <span
                key={s.no}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-9 bg-brand-purple" : "w-1.5 bg-brand-ink/20"
                }`}
              />
            ))}
          </div>

          <div className="mt-10 hidden md:block">
            <Pill href="#contact" variant="outline">
              Start a Project
            </Pill>
          </div>
        </div>

        {/* Right — step blocks: numeral + copy; brighten as they pass on scroll.
            Dividers are full-bleed hairlines that run across the whole section
            (on desktop the top border extends left past the gap + left column). */}
        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <li
              key={step.no}
              className="relative py-9 md:flex md:min-h-[60vh] md:flex-col md:justify-center md:py-12"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 border-t border-brand-ink/10 md:left-[calc(-100%-3rem)]"
              />
              {i === steps.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-brand-ink/10 md:left-[calc(-100%-3rem)]"
                />
              )}
              <Reveal className="flex gap-5 md:h-full md:flex-col md:justify-center md:gap-0">
                <span
                  className={`display shrink-0 text-4xl tabular-nums transition-colors duration-500 md:text-5xl ${
                    i <= active ? "text-brand-purple" : "text-brand-purple/25"
                  }`}
                >
                  {step.no}
                </span>
                <div className="md:mt-4">
                  <h3
                    className={`text-2xl font-semibold transition-colors duration-500 sm:text-3xl md:text-4xl ${
                      i <= active ? "text-brand-ink" : "text-brand-ink/30"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-brand-ink/60 md:text-lg">{step.blurb}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* mobile CTA */}
      <div className="px-6 pb-12 pt-2 md:hidden">
        <Pill href="#contact" variant="outline">
          Start a Project
        </Pill>
      </div>
    </section>
  );
}
