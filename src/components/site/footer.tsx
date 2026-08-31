import { Logo } from "../brand/logo";
import { Container } from "../ui";
import { footer } from "@/utils/content";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-night text-white/70">
      {/* brand kit circle tiling (Repeat group 2) — continuous across the footer,
          like the business-card back */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url(/brand/pattern-circles.svg)",
          backgroundSize: "420px",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + contact */}
          <div className="flex flex-col gap-6">
            <Logo className="text-[28px]" tone="light" />
            <p className="max-w-sm text-pretty leading-relaxed text-white/60">
              A venture studio where ideas become scalable product systems.
              Understand better. Decide smarter. Build what matters.
            </p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <a
                href={`mailto:${footer.email}`}
                className={`w-fit rounded font-medium text-white transition-colors hover:text-brand-purple-light ${focusRing}`}
              >
                {footer.email}
              </a>
              <span className="text-white/60">{footer.address}</span>
            </div>
            <div className="mt-2 flex gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-brand-purple hover:text-white ${focusRing}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-white/80">{col.heading}</h3>
                <ul className="flex flex-col gap-1.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`block rounded py-1 text-sm text-white/65 transition-colors hover:text-white ${focusRing}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Byldd. All rights reserved.</p>
          <p>Built for what&apos;s next.</p>
        </div>
      </Container>
    </footer>
  );
}
