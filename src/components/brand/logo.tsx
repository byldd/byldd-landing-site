import type { SVGProps } from "react";

/**
 * BYLDD logomark — the segmented-circle "b" system mark. Uses currentColor so
 * it can sit on any surface (purple on light, white on dark).
 */
export function Logomark({ title = "Byldd", ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 232 293"
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M54.3015 158.081C66.2274 112.78 45.7576 77.0594 41.723 70.4357C27.6611 46.9571 14.1212 23.4786 3.76894e-08 0C-6.88639e-08 76.1294 8.43606e-08 161.384 8.43606e-08 228.91C6.76394 225.006 42.435 203.382 54.3609 158.081H54.3015Z" />
      <path d="M210.525 107.102C177.476 52.1023 105.268 33.7689 49.1396 66.1776C82.188 121.178 154.396 139.511 210.525 107.102Z" />
      <path d="M4.40262 236.028C37.451 291.028 109.659 309.361 165.788 276.952C132.74 221.952 60.5315 203.619 4.40262 236.028Z" />
      <path d="M214.916 114.377C158.846 146.785 140.156 217.694 173.205 272.694C229.274 240.286 247.964 169.377 214.916 114.377Z" />
    </svg>
  );
}

/**
 * BYLDD wordmark. Source: "Logo Type Primary.svg". currentColor for theming.
 */
export function Wordmark({ title = "BYLDD", ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 357 81"
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 81V0H34.4979C53.7043 0 64.7123 8.14576 64.7123 22.3322C64.7123 28.1212 62.4784 32.789 58.1029 36.1983L55.086 38.5551L58.4483 40.3398C65.0577 43.8407 68.5582 49.6983 68.5582 57.2949C68.5582 72.3508 57.2047 81 37.4226 81H0ZM18.6307 65.0059H37.4226C44.5617 65.0059 49.0063 61.1161 49.0063 54.8466C49.0063 48.5771 44.5617 44.6873 37.4226 44.6873H18.6307V65.0059ZM18.6307 33.6127H34.5209C44.6077 33.6127 46.1046 28.0983 46.1046 24.8034C46.1046 21.5085 44.6077 15.9941 34.5209 15.9941H18.6307V33.6127Z" />
      <path d="M95.8018 81V48.4169L68.0976 0H89.1464L105.129 29.8602L121.088 0H142.137L114.433 48.4169V81H95.8018Z" />
      <path d="M181.333 81C158.28 81 146.604 67.3856 146.604 40.5V0H166.156V40.5C166.156 51.0254 167.722 65.0059 181.356 65.0059H206.573V81H181.333Z" />
      <path d="M212.1 81V0H241.485C265.735 0 282.04 16.2686 282.04 40.5C282.04 64.7314 265.735 81 241.485 81H212.1ZM230.73 64.5254H241.508C254.059 64.5254 262.511 54.8695 262.511 40.5C262.511 26.1305 254.082 16.4746 241.508 16.4746H230.73V64.5254Z" />
      <path d="M287.06 81V0H316.445C340.695 0 357 16.2686 357 40.5C357 64.7314 340.695 81 316.445 81H287.06ZM305.668 64.5254H316.445C328.996 64.5254 337.448 54.8695 337.448 40.5C337.448 26.1305 329.019 16.4746 316.445 16.4746H305.668V64.5254Z" />
    </svg>
  );
}

/**
 * Horizontal lockup: purple mark + wordmark (color set by `tone`).
 * Built from the two marks for full theming control rather than the flat
 * "Group 41" export.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  /** wordmark color — "dark" for light backgrounds, "light" for dark backgrounds */
  tone?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Logomark title="" className="h-[1.05em] w-auto text-brand-purple" />
      <Wordmark
        title="Byldd"
        className={`h-[0.62em] w-auto ${tone === "light" ? "text-brand-cream" : "text-brand-ink"}`}
      />
    </span>
  );
}
