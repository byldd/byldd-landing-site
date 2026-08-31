import { Container, Eyebrow } from "@/components/ui";
import { Logomark } from "@/components/brand/logo";
import { Reveal } from "@/components/motion/primitives";
import { testimonial } from "@/utils/content";

export function Proof() {
  // Asymmetric padding: the founder's note and the FAQ share one mist band, so
  // symmetric py-32 on both stacked ~312px of dead space between them.
  return (
    <section id="proof" className="relative z-10 pb-10 pt-16 md:pb-16 md:pt-32">
      <Container>
        <Reveal>
          <figure className="overflow-hidden rounded-card border border-brand-ink/[0.07] bg-white p-8 md:p-12 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
              {/* Left — heading + body share this column, so their line lengths match */}
              <div className="flex flex-col">
                <Eyebrow>From the founder&apos;s desk</Eyebrow>

                <blockquote className="display mt-6 text-balance text-3xl leading-[1.08] text-brand-ink md:mt-7 md:text-[2.4rem]">
                  {testimonial.pullQuote}
                </blockquote>

                <div className="mt-7 space-y-5 leading-relaxed text-brand-ink/70 md:mt-8">
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

              {/* Right — founder photo (brand sparkle backdrop baked in) */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder-ayush.jpg"
                  alt="Ayush Singhvi, Founder & CEO of Byldd"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
