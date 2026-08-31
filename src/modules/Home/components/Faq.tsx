import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { ArrowUpRight } from "@/components/brand/marks";
import { Reveal } from "@/components/motion/primitives";
import { MaskText } from "@/components/motion/split-reveal";
import { homeFaqs } from "@/utils/content";

export function FAQ() {
  // Paired with Proof's asymmetric padding — see the note there.
  return (
    <section id="faq" className="relative z-10 pb-16 pt-10 md:pb-32 md:pt-16">
      {/* background grid comes from the shared Proof→FAQ band wrapper */}
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Eyebrow>FAQs</Eyebrow>
            <MaskText
              as="h2"
              text="Questions, answered."
              gradientFrom={1}
              className="display mt-4 text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
            />
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-brand-ink/65">
              The things founders ask us most, before we start building together.
            </p>
            <Link
              href="/faqs"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-violet transition-colors hover:text-brand-purple"
            >
              All FAQs
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {homeFaqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <details className="group rounded-card border border-brand-ink/[0.07] bg-white px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-ink">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-lavender/60 text-brand-purple transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-brand-ink/65">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
