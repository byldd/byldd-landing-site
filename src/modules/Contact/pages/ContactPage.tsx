import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion/primitives";
import { ContactForm } from "@/modules/Contact/components/ContactForm";
import { footer } from "@/utils/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building. Book a strategy session with the Byldd team.",
};

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Let's talk"
        title="Byldd what's next, together."
        gradientFrom={1}
        subtitle="Tell us what you're building. We'll come back with how we'd approach it — and whether we're the right partner."
      />

      <section className="bg-brand-mist py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          {/* Direct contact */}
          <Reveal className="flex flex-col gap-8">
            <div>
              <Eyebrow>Direct</Eyebrow>
              <a
                href={`mailto:${footer.email}`}
                className="mt-4 block text-2xl font-semibold text-brand-ink transition-colors hover:text-brand-violet"
              >
                {footer.email}
              </a>
              <p className="mt-2 text-brand-ink/60">{footer.address}</p>
            </div>
            <div>
              <Eyebrow>Follow</Eyebrow>
              <div className="mt-4 flex gap-3">
                {footer.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-brand-ink/15 px-4 py-2 text-sm font-medium text-brand-ink/70 transition-colors hover:border-brand-purple hover:text-brand-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-brand-ink/55">
              Prefer email? Reach us directly and we&apos;ll reply within a business day.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15} className="rounded-card border border-brand-ink/[0.07] bg-white p-8 md:p-10">
            <ContactForm email={footer.email} />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
