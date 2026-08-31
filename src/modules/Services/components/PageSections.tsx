import Link from "next/link";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { Icon, type IconName } from "@/components/brand/icons";
import { MaskText } from "@/components/motion/split-reveal";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";

import { PartnerLogos } from "./PartnerLogos";
import type { PageSection } from "../types/page-section";

/**
 * Page-specific sections for service pages.
 *
 * Every service page on the current byldd.com carries sections that the shared
 * template does not — "End-to-End Development Services", "The brains behind the
 * builds", "Full-cycle Delivery", Jasie's MVP story, and so on. Rather than
 * hand-build 14 bespoke page files, each service carries an ordered list of
 * these blocks and this renderer switches on the type. Content is verbatim from
 * the previous site by design, including its typos and mismatched card bodies —
 * this mirrors the source intentionally, not by oversight.
 */

type Surface = "white" | "mist";

const H2 =
  "display mt-4 text-pretty text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]";
const LEAD = "mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/65";
const CARD_TITLE = "text-xl font-semibold text-brand-ink";
const CARD_BODY = "text-[0.95rem] leading-relaxed text-brand-ink/60";

const colClass = (n: number) =>
  n >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : n === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

/** Shared heading block so every generated section shares the homepage rhythm. */
function Head({ eyebrow, heading, lead }: { eyebrow: string; heading: string; lead?: string }) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <MaskText as="h2" text={heading} gradientFrom={2} className={H2} />
      {lead && <p className={LEAD}>{lead}</p>}
    </Reveal>
  );
}

function Section({
  surface,
  children,
  className = "",
}: {
  surface: Surface;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${surface === "white" ? "bg-white" : "bg-brand-mist"} py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

function CardGrid({
  s,
  surface,
}: {
  s: PageSection;
  surface: Surface;
}) {
  const items = s.items ?? [];
  const cols = s.columns ?? (items.length >= 8 ? 4 : items.length >= 5 ? 3 : 2);
  const cardBg = surface === "white" ? "bg-brand-mist/60" : "bg-white";
  return (
    <Section surface={surface}>
      <Head eyebrow="What we deliver" heading={s.heading ?? ""} lead={s.lead} />
      <Stagger className={`mt-10 grid gap-5 md:mt-14 ${colClass(cols)}`} amount={0.1}>
        {items.map((it, i) => (
          <StaggerItem
            key={`${it.title ?? "item"}-${i}`}
            className={`group flex h-full flex-col gap-4 rounded-card border border-brand-ink/[0.07] ${cardBg} p-6 transition-colors duration-300 hover:border-brand-purple/30 md:p-7`}
          >
            <div className="flex items-start justify-between gap-4">
              {it.icon ? (
                <Icon
                  name={it.icon as IconName}
                  className="h-8 w-8 shrink-0 text-brand-purple transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <span className="display text-3xl tabular-nums text-brand-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
            </div>
            <div className="mt-auto">
              {it.title && <h3 className={CARD_TITLE}>{it.title}</h3>}
              {it.body && <p className={`${it.title ? "mt-2" : ""} ${CARD_BODY}`}>{it.body}</p>}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      {s.footnote && (
        <Reveal className="mt-10">
          <p className="max-w-3xl text-lg leading-relaxed text-brand-ink/65">{s.footnote}</p>
        </Reveal>
      )}
    </Section>
  );
}

/**
 * "1. Full-cycle Delivery" — the original renders a radial diagram image. That
 * art is in the old blue/dark brand, so the eight capabilities are rendered as
 * a numbered grid around the centre label instead: same content, our type system.
 */
function FullCycle({ s, surface }: { s: PageSection; surface: Surface }) {
  const cardBg = surface === "white" ? "bg-brand-mist/60" : "bg-white";
  return (
    <Section surface={surface}>
      <Head eyebrow="Full cycle" heading={s.heading ?? ""} lead={s.lead} />
      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4" amount={0.1}>
        {(s.labels ?? []).map((label, i) => (
          <StaggerItem
            key={label}
            className={`flex h-full flex-col gap-4 rounded-card border border-brand-ink/[0.07] ${cardBg} p-6`}
          >
            <span className="display text-3xl tabular-nums text-brand-purple">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-auto text-[1.05rem] font-semibold leading-snug text-brand-ink">{label}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/** Alternating image + text rows (Jasie's MVP story). */
function StoryBlocks({ s, surface }: { s: PageSection; surface: Surface }) {
  return (
    <Section surface={surface}>
      <Head eyebrow="Client story" heading={s.heading ?? ""} lead={s.lead} />
      <div className="mt-12 flex flex-col gap-14 md:mt-16 md:gap-20">
        {(s.items ?? []).map((it, i) => (
          <Reveal key={it.title ?? i}>
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
              }`}
            >
              <div>
                <span className="display text-3xl tabular-nums text-brand-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {it.title && <h3 className="mt-3 text-2xl font-semibold text-brand-ink sm:text-3xl">{it.title}</h3>}
                {it.body && <p className="mt-4 text-lg leading-relaxed text-brand-ink/65">{it.body}</p>}
              </div>
              {it.image && (
                <figure className="overflow-hidden rounded-card border border-brand-ink/[0.07] bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/case/${it.image}`}
                    alt={it.title ?? ""}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Case studies — long-form, so stacked rows rather than clamped cards. */
function CaseStudies({ s, surface }: { s: PageSection; surface: Surface }) {
  const cardBg = surface === "white" ? "bg-brand-mist/60" : "bg-white";
  return (
    <Section surface={surface}>
      <Head eyebrow="Case studies" heading={s.heading ?? ""} lead={s.lead} />
      <div className="mt-10 flex flex-col gap-5 md:mt-14">
        {(s.items ?? []).map((it, i) => (
          <Reveal key={it.title ?? i}>
            <article
              className={`grid gap-6 rounded-card border border-brand-ink/[0.07] ${cardBg} p-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-8 md:p-8`}
            >
              {it.image && (
                <figure className="overflow-hidden rounded-2xl bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/case/${it.image}`}
                    alt={it.title ?? ""}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
              )}
              <div>
                {it.title && <h3 className="text-2xl font-semibold text-brand-ink">{it.title}</h3>}
                {it.body && <p className="mt-3 leading-relaxed text-brand-ink/65">{it.body}</p>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Reviews({ s, surface }: { s: PageSection; surface: Surface }) {
  const cardBg = surface === "white" ? "bg-brand-mist/60" : "bg-white";
  return (
    <Section surface={surface}>
      <Head eyebrow="Testimonials" heading={s.heading ?? ""} lead={s.lead} />
      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3" amount={0.1}>
        {(s.items ?? []).map((it, i) => (
          <StaggerItem
            key={`${it.name ?? i}`}
            className={`flex h-full flex-col justify-between gap-5 rounded-card border border-brand-ink/[0.07] ${cardBg} p-6`}
          >
            <blockquote className="text-pretty text-[0.95rem] leading-relaxed text-brand-ink">
              &ldquo;{it.body}&rdquo;
            </blockquote>
            <figcaption>
              <span className="block font-semibold text-brand-ink">{it.name}</span>
              {it.company && <span className="text-sm text-brand-ink/55">{it.company}</span>}
            </figcaption>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function ServicesStrip({ s, surface }: { s: PageSection; surface: Surface }) {
  const cardBg = surface === "white" ? "bg-brand-mist/60" : "bg-white";
  return (
    <Section surface={surface}>
      <Head eyebrow="What we build" heading={s.heading ?? ""} lead={s.lead} />
      <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-14 lg:grid-cols-6" amount={0.1}>
        {(s.items ?? []).map((it) => (
          <StaggerItem
            key={it.title}
            className={`group flex flex-col gap-4 rounded-card border border-brand-ink/[0.07] ${cardBg} p-5`}
          >
            {it.icon && (
              <Icon
                name={it.icon as IconName}
                className="h-8 w-8 text-brand-purple transition-transform duration-300 group-hover:scale-110"
              />
            )}
            <span className="mt-auto text-[0.95rem] font-semibold leading-snug text-brand-ink">{it.title}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function LogoRow({ s }: { s: PageSection }) {
  // Names only — these press/partner marks live in public/brand/logos.
  const known: Record<string, string> = {
    yahoo: "/brand/logos/yahoo.png",
    businesswire: "/brand/logos/businesswire.png",
    manifest: "/brand/logos/manifest.png",
    "the manifest": "/brand/logos/manifest.png",
    "starter story": "/brand/logos/starter-story.png",
    google: "/brand/logos/google-new.svg",
    "google for startups": "/brand/logos/google-new.svg",
    "y combinator": "/brand/logos/yc.svg",
    yc: "/brand/logos/yc.svg",
    tacklebox: "/brand/logos/tackelbox.svg",
    rg: "/brand/logos/rg.svg",
    "new age": "/brand/logos/newage.svg",
    ember: "/brand/logos/ember.svg",
    "the ember company": "/brand/logos/ember.svg",
  };
  const logos = (s.items ?? [])
    .map((it) => ({ alt: it.title ?? "", src: known[(it.title ?? "").toLowerCase().trim()] }))
    .filter((l): l is { alt: string; src: string } => Boolean(l.src));

  if (logos.length === 0) return null;
  return <PartnerLogos label={s.heading ?? ""} logos={logos} />;
}

function CtaBand({ s }: { s: PageSection }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-night py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem]"
        style={{ background: "radial-gradient(circle, rgba(131,77,251,0.16), transparent 65%)" }}
      />
      <Container className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="display max-w-2xl text-balance text-[1.9rem] leading-[1.08] sm:text-4xl">{s.heading}</h2>
        <Pill href={s.href ?? "/contact"}>{s.linkLabel ?? "Learn more"}</Pill>
      </Container>
    </section>
  );
}

function BookingCta({ s, surface }: { s: PageSection; surface: Surface }) {
  return (
    <Section surface={surface}>
      <Reveal className="max-w-3xl">
        <Eyebrow>Next step</Eyebrow>
        <MaskText as="h2" text={s.heading ?? ""} gradientFrom={2} className={H2} />
        {s.lead && <p className={LEAD}>{s.lead}</p>}
        <div className="mt-8">
          <Pill href="/contact">{s.ctaLabel ?? "Book a Call"}</Pill>
        </div>
      </Reveal>
    </Section>
  );
}

/** Renders one service page's ordered block list. */
export function PageSections({ sections }: { sections: PageSection[] }) {
  // Alternate light surfaces so consecutive generated sections stay legible.
  let surfaceIndex = 0;
  const nextSurface = (): Surface => (surfaceIndex++ % 2 === 0 ? "white" : "mist");

  return (
    <>
      {sections.map((s, i) => {
        const key = `${s.type}-${i}`;
        switch (s.type) {
          case "cardGrid":
            return <CardGrid key={key} s={s} surface={nextSurface()} />;
          case "fullCycle":
            return <FullCycle key={key} s={s} surface={nextSurface()} />;
          case "storyBlocks":
            return <StoryBlocks key={key} s={s} surface={nextSurface()} />;
          case "caseStudies":
            return <CaseStudies key={key} s={s} surface={nextSurface()} />;
          case "reviews":
            return <Reviews key={key} s={s} surface={nextSurface()} />;
          case "servicesStrip":
            return <ServicesStrip key={key} s={s} surface={nextSurface()} />;
          case "bookingCta":
            return <BookingCta key={key} s={s} surface={nextSurface()} />;
          case "ctaBand":
            return <CtaBand key={key} s={s} />;
          case "logoRow":
            return <LogoRow key={key} s={s} />;
          case "partners":
            return <PartnerLogos key={key} label={s.heading} />;
          case "industries":
            // Distinct id so a service page never collides with the homepage anchor.
            return (
              <Industries
                key={key}
                id={`industries-${i}`}
                {...(s.heading ? { title: s.heading } : {})}
                {...(s.lead ? { lead: s.lead } : {})}
              />
            );
          case "testimonials":
            return (
              <Testimonials
                key={key}
                id={`testimonials-${i}`}
                showLogos={false}
                {...(s.heading ? { headline: s.heading } : {})}
                {...(s.lead ? { sub: s.lead } : {})}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
