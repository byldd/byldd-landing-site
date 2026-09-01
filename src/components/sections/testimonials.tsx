"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { Sparkle } from "@/components/brand/marks";
import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/primitives";
import { MaskText } from "@/components/motion/split-reveal";
import { testimonials, textTestimonials, clientLogos, type TextTestimonial } from "@/utils/content";

/**
 * Wall of love — an auto-scrolling video row, then a masonry wall of written
 * reviews (screenshots + quote cards), styled after the onlygoodvibes.dev
 * testimonial section (www.onlygoodvibes.dev).
 *
 * The written-review masonry wraps EACH CARD in its own <Reveal>, not the
 * whole column: a past version wrapped one very tall column in a single
 * Reveal, whose 25%-in-view threshold could never be met on a phone, so it
 * sat at opacity:0 and read as a blank gap. Per-card reveals can't hit that
 * trap — each card is a few hundred px tall, so 25% of it is trivially
 * on-screen at any viewport height.
 */

/** One consistent size for all six video reels — mixing sizes read as a bug. */
const VIDEO = "h-[252px] w-[180px] md:h-[294px] md:w-[210px]";

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M9.2 6.4v11.2L18.4 12l-9.2-5.6z" />
    </svg>
  );
}

/**
 * Video reel — one size and one treatment for all six. The pull-quote (when
 * one exists) is bold white text we render over a gradient scrim, never a
 * boxed caption chip: byldd.com's own poster images bake the quote into a
 * white rounded box, which reads off-brand next to everything else on the
 * site. Name + company sit below the card, not overlaid on it.
 */
function VideoCard({
  videoId,
  quote,
  name,
  company,
  onPlay,
}: {
  videoId: string;
  quote?: string;
  name: string;
  company: string;
  onPlay: (id: string, label: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(videoId, `${name}, ${company}`)}
      aria-label={`Play testimonial from ${name}, ${company}`}
      className="group shrink-0 text-left focus-visible:outline-none"
    >
      <span
        className={`relative block overflow-hidden rounded-card bg-brand-navy shadow-soft transition-transform duration-500 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-brand-purple group-focus-visible:ring-offset-2 ${VIDEO}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-brand-night/90 via-brand-night/15 to-transparent" />
        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-purple text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
          <PlayGlyph className="h-5 w-5" />
        </span>
        {quote && (
          <span className="absolute inset-x-4 bottom-4 block text-[0.82rem] font-bold leading-snug text-white">
            &ldquo;{quote}&rdquo;
          </span>
        )}
      </span>
      <span className="mt-3 block">
        <span className="block text-sm font-semibold text-brand-ink">{name}</span>
        <span className="block text-xs text-brand-ink/55">{company}</span>
      </span>
    </button>
  );
}

/** Written review, full quote visible — natural height for the masonry. */
function QuoteCard({ quote, name, company, role }: TextTestimonial) {
  return (
    <figure className="flex w-full flex-col gap-5 rounded-card border border-brand-ink/[0.08] bg-brand-mist/70 p-6">
      <Sparkle solid className="h-4 w-4 shrink-0 text-brand-purple" />
      <blockquote className="text-pretty leading-relaxed text-brand-ink">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption>
        <span className="block text-sm font-semibold text-brand-ink">{name}</span>
        <span className="text-xs text-brand-ink/55">{role ? `${role}, ${company}` : company}</span>
      </figcaption>
    </figure>
  );
}

/**
 * The real review, as a screenshot — the actual email / LinkedIn message /
 * Slack thread — the same screenshots byldd.com itself publishes.
 * Shown at its natural, legible aspect (no crop) — the sender's name is
 * already part of the screenshot, so no caption is layered on top. Opens full
 * size in the lightbox.
 */
function ShotCard({ image, name, company, onOpen }: TextTestimonial & { image: string; onOpen: (src: string, label: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(`/people/${image}`, `${name}, ${company}`)}
      aria-label={`Read the full review from ${name}, ${company}`}
      className="group block w-full overflow-hidden rounded-card border border-brand-ink/[0.08] bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/people/${image}`}
        alt={`Review from ${name}, ${company}`}
        loading="lazy"
        className="block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </button>
  );
}

type LightboxItem = { kind: "video"; id: string; label: string } | { kind: "image"; src: string; label: string };

function Lightbox({ item, onClose }: { item: LightboxItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Testimonial — ${item.label}`}
      onClick={onClose}
      className="fixed inset-0 z-[60] grid place-items-center bg-brand-night/90 p-4 backdrop-blur-sm"
    >
      <div
        className={`relative w-full ${item.kind === "video" ? "max-w-3xl" : "max-w-md"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {item.kind === "video" ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-card bg-black shadow-glow">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&playsinline=1&rel=0`}
              title={`Testimonial — ${item.label}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.src}
            alt={`Review from ${item.label}`}
            className="max-h-[80vh] w-full rounded-card object-contain shadow-glow"
          />
        )}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function Testimonials({
  id = "testimonials",
  headline = testimonials.headline,
  sub = testimonials.sub,
  featured = testimonials.featured,
  secondary = testimonials.secondary,
  logosLabel = "Teams we've built with",
  showLogos = true,
}: {
  /** Override when rendered on a service page so DOM ids stay unique. */
  id?: string;
  headline?: string;
  sub?: string;
  featured?: readonly { videoId: string; quote: string; name: string; company: string }[];
  secondary?: readonly { videoId: string; name: string; company: string }[];
  logosLabel?: string;
  showLogos?: boolean;
} = {}) {
  const [item, setItem] = useState<LightboxItem | null>(null);
  const onPlay = (vid: string, label: string) => setItem({ kind: "video", id: vid, label });
  const onOpenShot = (src: string, label: string) => setItem({ kind: "image", src, label });

  // Every person appears exactly once: alternate the screenshot and the
  // typeset quote-card treatment across the nine reviewers instead of
  // showing each twice (once did — it read as duplicated feedback).
  const reviews = textTestimonials.map((t, i) => ({ t, asShot: Boolean(t.image) && i % 2 === 0 }));

  return (
    <section id={id} className="overflow-hidden bg-white py-16 md:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <MaskText
            as="h2"
            text={headline}
            gradientFrom={4}
            className="display text-pretty text-[2.5rem] leading-[1.02] text-brand-ink sm:text-5xl lg:text-[3.75rem]"
          />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/65">{sub}</p>
        </Reveal>
      </Container>

      {/* Video row — auto-scrolling, draggable/wheel-scrollable. All six reels
          share one card and one size; only the caption differs. */}
      <div className="mt-10 md:mt-14">
        <Marquee baseVelocity={1.5} pauseOnHover interactive>
          {featured.map((t) => (
            <div key={t.videoId} className="mr-4 md:mr-5">
              <VideoCard videoId={t.videoId} quote={t.quote} name={t.name} company={t.company} onPlay={onPlay} />
            </div>
          ))}
          {secondary.map((t) => (
            <div key={t.videoId} className="mr-4 md:mr-5">
              <VideoCard videoId={t.videoId} name={t.name} company={t.company} onPlay={onPlay} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Written reviews — a masonry wall (screenshots + quote cards), not a
          horizontal row: this section scrolls with the page, matching the
          onlygoodvibes.dev reference. */}
      <Container className="mt-10 md:mt-14">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map(({ t, asShot }) => (
            <Reveal key={t.name} className="mb-5 break-inside-avoid">
              {asShot ? <ShotCard {...t} image={t.image!} onOpen={onOpenShot} /> : <QuoteCard {...t} />}
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Teams we've built with — a single moving line instead of a grid. */}
      {showLogos && (
        <>
          <Container className="mt-12 md:mt-16">
            <div className="border-t border-brand-ink/10 pt-8">
              <p className="text-sm font-medium text-brand-ink/50">{logosLabel}</p>
            </div>
          </Container>
          <div className="mt-6">
            <Marquee baseVelocity={0.7}>
              {clientLogos.map((l) => (
                <span key={l.alt} className="flex shrink-0 items-center px-6 md:px-9">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.alt}
                    loading="lazy"
                    className="h-6 w-auto object-contain opacity-70 grayscale md:h-7"
                  />
                </span>
              ))}
            </Marquee>
          </div>
        </>
      )}

      <Lightbox item={item} onClose={() => setItem(null)} />
    </section>
  );
}
