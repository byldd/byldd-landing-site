"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui";
import { ArrowUpRight } from "@/components/brand/marks";
import { useReducedMotionSafe } from "@/components/motion/primitives";
import { MaskText } from "@/components/motion/split-reveal";
import { TiltCard } from "@/components/motion/tilt";
import { audiences } from "@/utils/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotionSafe();
  const audience = audiences[active];

  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 md:py-32">
      <Container className="relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <MaskText
            as="h2"
            text="One partner, from idea to scale."
            gradientFrom={3}
            className="display max-w-2xl text-pretty text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
          />

          {/* Audience toggle */}
          <div
            role="tablist"
            aria-label="Choose your audience"
            className="flex w-fit shrink-0 rounded-full border border-brand-ink/15 bg-brand-mist p-1"
          >
            {audiences.map((a, i) => (
              <button
                key={a.key}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${
                  active === i ? "bg-brand-purple text-white" : "text-brand-ink/60 hover:text-brand-ink"
                }`}
              >
                {a.tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={audience.key}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-12"
          >
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-brand-ink sm:text-3xl">{audience.headline}</h3>
              <p className="mt-3 leading-relaxed text-brand-ink/65">{audience.sub}</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {audience.items.map((s, i) => (
                <TiltCard key={`${audience.key}-${s.title}`} className="h-full">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex h-full flex-col gap-8 rounded-card border border-brand-ink/[0.08] bg-brand-mist/60 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple/30 hover:bg-white hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <div className="flex items-start justify-between">
                      <span className="display text-4xl tabular-nums text-brand-ink/15 transition-colors duration-300 group-hover:text-brand-purple">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-brand-ink/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-purple" />
                    </div>
                    <div className="mt-auto flex flex-col gap-2">
                      <h4 className="text-xl font-semibold text-brand-ink">{s.title}</h4>
                      <p className="text-[0.95rem] leading-relaxed text-brand-ink/60">{s.blurb}</p>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>

            {/* Backed-by logo row */}
            <div className="mt-14 border-t border-brand-ink/10 pt-8">
              <p className="text-sm font-medium text-brand-ink/50">{audience.backedByLabel}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-5">
                {audience.logos.map((l) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    className="h-7 w-auto object-contain opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-8"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
