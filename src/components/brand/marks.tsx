import type { SVGProps } from "react";

/**
 * The BYLDD "key element" — a 4-point concave star / sparkle.
 * Gradient #834DFB -> #B08CFF by default; pass `solid` to render flat in
 * currentColor.
 */
export function Sparkle({
  solid = false,
  gradientId = "byldd-sparkle",
  title,
  ...props
}: SVGProps<SVGSVGElement> & { solid?: boolean; gradientId?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 830 830"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M427.573 0L439.153 61.7643C470.441 228.843 601.157 359.538 768.236 390.847L830 402.427C830 416.589 830 413.411 830 427.573L768.236 439.153C601.157 470.441 470.462 601.157 439.153 768.236L427.573 830C413.411 830 416.589 830 402.427 830L390.847 768.236C359.559 601.157 228.843 470.462 61.7643 439.153L0 427.573V402.427L61.7643 390.847C228.843 359.559 359.538 228.843 390.847 61.7643L402.427 0C416.589 0 413.411 0 427.573 0Z"
        fill={solid ? "currentColor" : `url(#${gradientId})`}
      />
      {!solid && (
        <defs>
          <linearGradient id={gradientId} x1="415" y1="284.786" x2="415" y2="633.273" gradientUnits="userSpaceOnUse">
            <stop stopColor="#834DFB" />
            <stop offset="1" stopColor="#B08CFF" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}

/**
 * Soft radial "cross" glow device — the plus that anchors section intersections
 * in the brand world. Source: "Gradient element - 4.6.svg". Purely decorative.
 */
export function SoftCross({ glowId = "byldd-cross", ...props }: SVGProps<SVGSVGElement> & { glowId?: string }) {
  return (
    <svg
      viewBox="0 0 5927 6515"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.9"
        d="M2448.85 3314.8C2594.6 3314.8 2712.75 3196.65 2712.75 3050.9L2712.75 18.437C2712.75 8.25439 2721.01 -0.000488281 2731.19 -0.000488281C2741.37 -0.000488281 2749.63 8.25391 2749.63 18.4365L2749.63 3050.9C2749.63 3196.65 2867.78 3314.8 3013.52 3314.8L5908.27 3314.8C5918.62 3314.8 5927 3323.18 5927 3333.53C5927 3343.87 5918.62 3352.25 5908.27 3352.25L3013.52 3352.25C2867.78 3352.25 2749.63 3470.4 2749.63 3616.15V6496.29C2749.63 6506.48 2741.37 6514.73 2731.19 6514.73C2721.01 6514.73 2712.75 6506.48 2712.75 6496.3V3616.15C2712.75 3470.4 2594.6 3352.25 2448.85 3352.25H18.7277C8.38467 3352.25 0 3343.87 0 3333.53C0 3323.18 8.3847 3314.8 18.7277 3314.8H2448.85Z"
        fill={`url(#${glowId})`}
      />
      <defs>
        <radialGradient
          id={glowId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2733.57 3355.58) rotate(90) scale(1688.7 1856.16)"
        >
          <stop stopColor="#834DFB" />
          <stop offset="1" stopColor="#834DFB" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/**
 * Arrow used inside pill CTAs ("Let's Byldd ↗"). 45° up-right, stroked.
 */
export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The brand deck's outlined arrow pill that trails headlines
 * ("Byldd What's Next ⌾↗"). Sized relative to the surrounding text.
 */
export function ArrowPill({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-grid h-[0.72em] w-[1.25em] place-items-center rounded-full border-[0.045em] border-brand-purple align-baseline text-brand-purple ${className}`}
    >
      <ArrowUpRight className="h-[0.4em] w-[0.4em]" />
    </span>
  );
}

/**
 * The OFFICIAL brand intersection pattern — renders the actual
 * "Gradient element - 4.6" asset from the brand kit (public/brand/soft-cross.svg),
 * anchored so its line intersection sits at (x, y) of the parent and is cropped
 * by the parent's edges — an anchored edge/corner device per the brand deck.
 * Parent must be relative + overflow-hidden. Purely decorative.
 */
export function BrandPattern({
  x = "100%",
  y = "50%",
  size = 720,
  className = "",
  style,
}: {
  /** where the asset's line intersection sits, as percents of the parent */
  x?: string;
  y?: string;
  /** rendered width in px (asset is vector — crisp at any size) */
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/soft-cross.svg"
      alt=""
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        left: x,
        top: y,
        width: size,
        maxWidth: "none",
        // the asset's intersection sits at (46.08%, 51.16%) of its own box
        transform: "translate(-46.08%, -51.16%)",
        ...style,
      }}
    />
  );
}

/**
 * @deprecated Superseded by BrandPattern, which renders the official asset.
 */
export function DeckLines({
  x = "70%",
  y = "50%",
  tone = "vivid",
  bulge = 150,
  hFrom = "0%",
  hTo = "100%",
  className = "",
}: {
  x?: string;
  y?: string;
  /** vivid = dark surfaces, soft = light surfaces */
  tone?: "vivid" | "soft";
  /** bulge size in px */
  bulge?: number;
  /** horizontal line segment extents — keep the line out of copy zones */
  hFrom?: string;
  hTo?: string;
  className?: string;
}) {
  const line = tone === "vivid" ? "rgba(131,77,251,0.75)" : "rgba(131,77,251,0.45)";
  const lineFaint = tone === "vivid" ? "rgba(131,77,251,0.15)" : "rgba(131,77,251,0.08)";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {/* vertical line */}
      <span
        className="absolute inset-y-0 w-[3px] -translate-x-1/2"
        style={{ left: x, background: `linear-gradient(to bottom, ${lineFaint}, ${line} 35%, ${line} 65%, ${lineFaint})` }}
      />
      {/* horizontal line (segment) */}
      <span
        className="absolute h-[3px] -translate-y-1/2"
        style={{
          top: y,
          left: hFrom,
          right: `calc(100% - ${hTo})`,
          background: `linear-gradient(to right, ${lineFaint}, ${line} 35%, ${line} 65%, ${lineFaint})`,
        }}
      />
      {/* star bulge at the intersection — crisp vector with a soft radial core */}
      <span
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: x, top: y, width: bulge, height: bulge }}
      >
        <span
          className="absolute -inset-1/4 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(131,77,251,0.35), transparent 60%)" }}
        />
        <svg viewBox="0 0 830 830" className="relative h-full w-full" aria-hidden>
          <defs>
            <radialGradient id={`deck-bulge-${x}-${y}`.replace(/[%.\s]/g, "")} cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#d9c9ff" />
              <stop offset="38%" stopColor="#a98bfb" />
              <stop offset="100%" stopColor="#834dfb" />
            </radialGradient>
          </defs>
          <path
            d="M427.573 0L439.153 61.7643C470.441 228.843 601.157 359.538 768.236 390.847L830 402.427C830 416.589 830 413.411 830 427.573L768.236 439.153C601.157 470.441 470.462 601.157 439.153 768.236L427.573 830C413.411 830 416.589 830 402.427 830L390.847 768.236C359.559 601.157 228.843 470.462 61.7643 439.153L0 427.573V402.427L61.7643 390.847C228.843 359.559 359.538 228.843 390.847 61.7643L402.427 0C416.589 0 413.411 0 427.573 0Z"
            fill={`url(#${`deck-bulge-${x}-${y}`.replace(/[%.\s]/g, "")})`}
          />
        </svg>
      </span>
    </div>
  );
}
