import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Inline renderer for /what-we-build copy. Supports exactly two marks:
 * **bold** and [label](/href). Keeping the syntax this small means the same
 * strings can later be imported into Payload's rich text without loss.
 */
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    if (m[1] !== undefined) {
      out.push(
        <strong key={i} className="font-semibold text-brand-ink">
          {m[1]}
        </strong>,
      );
    } else {
      const href = m[3];
      const cls =
        "font-semibold text-brand-violet underline decoration-brand-purple/30 underline-offset-4 transition-colors hover:decoration-brand-purple";
      out.push(
        href.startsWith("/") ? (
          <Link key={i} href={href} className={cls}>
            {m[2]}
          </Link>
        ) : (
          <a key={i} href={href} className={cls}>
            {m[2]}
          </a>
        ),
      );
    }
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}

/** Plain-text version (marks stripped), for meta tags and JSON-LD. */
export function plainText(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
