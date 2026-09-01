import { Container } from "@/components/ui";
import { Stagger, StaggerItem, Parallax } from "@/components/motion/primitives";
import { MaskText } from "@/components/motion/split-reveal";
import { Counter } from "@/components/motion/counter";

export function Belief() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white md:py-32">
      <Parallax className="pointer-events-none absolute left-1/2 top-1/2" distance={120}>
        {/* pre-soft radial glow — no filter, no per-frame repaint */}
        <div
          className="h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(131,77,251,0.18), rgba(131,77,251,0.05) 45%, transparent 70%)" }}
        />
      </Parallax>

      <Container className="relative">
        <div className="max-w-4xl">
          <MaskText
            as="h2"
            text="Better products don't come from more features. They come from better decisions."
            gradientFrom={7}
            amount={0.4}
            className="display text-balance text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]"
          />
        </div>

        <Stagger className="mt-16 grid items-end gap-x-12 gap-y-14 md:mt-20 md:grid-cols-[1fr_auto]">
          <StaggerItem className="max-w-2xl space-y-5 text-lg leading-relaxed text-white/70">
            <p>
              Most teams move to development too early. Ideas become roadmaps before
              they&apos;re validated. Features get prioritised without evidence — and teams
              build on assumptions instead of real user needs.
            </p>
            <p className="text-white/55">
              The result? Time lost, budgets wasted, and products that miss the mark. Byldd
              helps founders and product teams turn uncertainty into clarity — so they focus
              on what matters, align around the right priorities, and build with confidence.
            </p>
          </StaggerItem>

          {/* Oversized editorial stat — no box; caption is one line, flush with the digits */}
          <StaggerItem className="flex md:justify-end">
            <div className="inline-flex flex-col items-start">
              <Counter
                value={80}
                suffix="%"
                className="display block bg-gradient-to-b from-white to-brand-purple-light bg-clip-text text-[7rem] leading-[0.82] text-transparent tabular-nums sm:text-[9rem] lg:text-[10rem]"
              />
              <p className="mt-3 w-full text-[0.7rem] leading-none text-white/65 [text-align-last:justify] sm:text-[0.8rem] lg:text-[0.92rem]">
                of product features go unused.{" "}
                <span className="font-semibold text-white">Let&apos;s change that.</span>
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
