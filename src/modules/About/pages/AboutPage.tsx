import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui";
import { Logomark } from "@/components/brand/logo";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { Counter } from "@/components/motion/counter";
import { CTA } from "@/components/sections/cta";
import { testimonial, stats } from "@/utils/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Byldd is a venture studio and product development partner helping founders turn uncertainty into clarity — and build products people actually use.",
};

const values = [
  { title: "Clarity before code", body: "We validate with real users before we build. Evidence beats assumptions every time." },
  { title: "Lean by design", body: "We cut features that won't move the needle, so investment goes where it matters." },
  { title: "One senior team", body: "Strategy, design, and engineering under one roof — no hand-offs, no telephone." },
  { title: "Built to last", body: "Clean architecture and honest craft, so what we ship keeps working as you grow." },
];

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Byldd"
        title="Products that build businesses."
        gradientFrom={1}
        subtitle="We partner with founders and product teams to design, build, and scale software that moves the needle — fast."
      />

      {/* Founder note */}
      <section className="bg-brand-mist py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
              <div className="flex flex-col">
                <Eyebrow>From the founder&apos;s desk</Eyebrow>
                <blockquote className="display mt-6 text-balance text-3xl leading-[1.08] text-brand-ink md:mt-7 md:text-4xl">
                  {testimonial.pullQuote}
                </blockquote>
                <div className="mt-7 space-y-5 text-lg leading-relaxed text-brand-ink/70 md:mt-8">
                  {testimonial.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <figcaption className="mt-10 flex items-center gap-4 md:mt-12">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-lavender/60">
                    <Logomark title="" className="h-5 w-auto text-brand-purple" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-brand-ink">{testimonial.name}</span>
                    <span className="text-sm text-brand-ink/65">{testimonial.role}</span>
                  </span>
                </figcaption>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder-ayush.jpg"
                  alt="Ayush Singhvi, Founder & CEO of Byldd"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy py-16 text-white md:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-7 text-center">
                <Counter value={s.num} decimals={s.decimals} suffix={s.suffix} className="display block text-3xl tabular-nums md:text-4xl" />
                <p className="mt-1.5 text-sm text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="display mt-5 max-w-2xl text-balance text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]">
              The principles behind every build.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2" amount={0.2}>
            {values.map((v, i) => (
              <StaggerItem key={v.title} className="rounded-card border border-brand-ink/[0.07] bg-brand-mist p-8">
                <span className="display block text-3xl tabular-nums text-brand-purple/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-brand-ink">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-ink/60">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
