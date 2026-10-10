import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { MaskText } from "@/components/motion/split-reveal";
import type { Block, Faq, RelatedLink } from "@/utils/what-we-build";
import { RichText } from "./RichText";

/* ------------------------------------------------------------------ blocks */

function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} className="display mt-14 text-3xl leading-tight text-brand-ink first:mt-0 sm:text-4xl">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 text-xl font-semibold text-brand-ink">
                <RichText text={b.text} />
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mt-4 text-[1.05rem] leading-relaxed text-brand-ink/70">
                <RichText text={b.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-4 flex flex-col gap-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="relative pl-5 text-[1.05rem] leading-relaxed text-brand-ink/70">
                    <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    <RichText text={it} />
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="mt-6 overflow-x-auto rounded-card border border-brand-ink/[0.07] bg-white">
                <table className="w-full min-w-[40rem] text-left text-sm">
                  <thead className="bg-brand-lavender/50">
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} scope="col" className="px-4 py-3 font-semibold text-brand-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-brand-ink/[0.06]">
                        {r.map((c, k) =>
                          k === 0 ? (
                            <th key={k} scope="row" className="px-4 py-3 align-top font-semibold text-brand-ink">
                              {c}
                            </th>
                          ) : (
                            <td key={k} className="px-4 py-3 align-top text-brand-ink/70">
                              {c}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/**
 * Renders a page's blocks. Prose runs sit in a readable column; the `modules`
 * and `process` markers break out into full-width sections at their position.
 */
export function ContentBlocks({
  blocks,
  modules,
  process,
}: {
  blocks: Block[];
  modules?: ReactNode;
  process?: ReactNode;
}) {
  const out: ReactNode[] = [];
  let run: Block[] = [];
  let heading: Block[] = [];
  const flush = (key: string) => {
    if (run.length === 0) return;
    out.push(
      <section key={key} className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <Prose blocks={run} />
        </Container>
      </section>,
    );
    run = [];
  };
  blocks.forEach((b, i) => {
    if (b.type === "modules" || b.type === "process") {
      // A heading + intro immediately before the modules marker belongs to the
      // modules section, so keep them together on the mist background.
      if (b.type === "modules") {
        const h = run.findLastIndex((x) => x.type === "h2");
        heading = h >= 0 ? run.slice(h) : [];
        run = h >= 0 ? run.slice(0, h) : run;
      }
      flush(`prose-${i}`);
      if (b.type === "modules" && modules) {
        if (heading.length) {
          out.push(
            <section key={`modules-head-${i}`} className="bg-brand-mist pt-16 md:pt-24">
              <Container className="max-w-3xl">
                <Prose blocks={heading} />
              </Container>
            </section>,
          );
        }
        out.push(<div key={`modules-${i}`}>{modules}</div>);
      }
      if (b.type === "process" && process) out.push(<div key={`process-${i}`}>{process}</div>);
      heading = [];
    } else {
      run.push(b);
    }
  });
  flush("prose-end");
  return <>{out}</>;
}

/* ----------------------------------------------------------------- process */

const steps = [
  {
    title: "Understand",
    body: "We start with your vision, market and competitors, and break the idea down into a clear product thesis: who it serves, what problem it solves, where AI adds real value, and what the product should leave out. This happens before anyone writes code.",
  },
  {
    title: "Scope and design",
    body: "We define a lean feature set aimed at your first customers, then design the system: architecture, data, integrations, AI approach, scalability and running costs. Getting this right early prevents expensive rebuilds later.",
  },
  {
    title: "Build",
    body: "We assemble the pre-built modules your product needs and build the parts that make it unique. The result is production-ready software designed for real user feedback and iteration.",
  },
  {
    title: "Launch and grow",
    body: "You launch with a product built to scale, a clear roadmap and a team that stays with you as the business grows.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="display mt-4 text-3xl leading-tight text-brand-ink sm:text-4xl">How we build it</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" amount={0.1}>
          {steps.map((s, i) => (
            <StaggerItem
              key={s.title}
              className="flex h-full flex-col gap-3 rounded-card border border-brand-ink/[0.07] bg-brand-mist/60 p-6"
            >
              <span className="display text-2xl tabular-nums text-brand-purple">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-semibold text-brand-ink">{s.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-brand-ink/60">{s.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------- faqs */

export function FaqSection({ faqs, heading }: { faqs: Faq[]; heading: string }) {
  if (faqs.length === 0) return null;
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <Eyebrow>FAQs</Eyebrow>
          <MaskText
            as="h2"
            text={heading}
            className="display mt-4 text-pretty text-3xl leading-tight text-brand-ink sm:text-4xl"
          />
        </Reveal>
        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <details className="group rounded-card border border-brand-ink/[0.07] bg-brand-mist/60 px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-ink">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-lavender/60 text-brand-purple transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-brand-ink/65">
                  <RichText text={f.a} />
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- related */

export function RelatedLinks({ links, heading = "Related pages" }: { links: RelatedLink[]; heading?: string }) {
  if (links.length === 0) return null;
  return (
    <section className="bg-brand-mist py-14 md:py-18">
      <Container>
        <Reveal>
          <Eyebrow>{heading}</Eyebrow>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" amount={0.2}>
          {links.map((l) => (
            <StaggerItem key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full items-center justify-between gap-3 rounded-card border border-brand-ink/[0.07] bg-white p-5 font-semibold text-brand-ink transition-colors hover:border-brand-purple/30 hover:text-brand-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-mist"
              >
                {l.label}
                <span aria-hidden className="text-brand-purple transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- breadcrumbs */

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-white/85">
                {it.label}
              </span>
            ) : (
              <Link href={it.href} className="transition-colors hover:text-brand-purple-light">
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
