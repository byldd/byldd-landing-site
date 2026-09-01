import { Marquee } from "@/components/motion/marquee";
import { Sparkle } from "@/components/brand/marks";
import { services } from "@/utils/content";

/**
 * Moving text band — the service offerings at a restrained size. Decorative
 * only; the same services are listed accessibly in the Services section.
 */
export function MarqueeBand() {
  return (
    <section aria-hidden className="overflow-hidden border-y border-white/10 bg-brand-night py-6 md:py-7">
      <Marquee baseVelocity={1.8}>
        {services.map((s) => (
          <span key={s.slug} className="flex items-center">
            <span className="whitespace-nowrap px-6 text-lg font-medium tracking-tight text-white/85 md:px-8 md:text-2xl">
              {s.title}
            </span>
            <Sparkle solid className="h-3.5 w-3.5 shrink-0 text-brand-purple-light md:h-4 md:w-4" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
