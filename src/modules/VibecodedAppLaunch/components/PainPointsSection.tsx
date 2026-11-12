import type { ComponentType } from "react";
import { Clock3, Code2, Layers3, RefreshCcw, TriangleAlert } from "lucide-react";

import { Container } from "@/components/ui";
import { painPointsContent } from "@/modules/VibecodedAppLaunch/content";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  clock: Clock3,
  code: Code2,
  layers: Layers3,
  refresh: RefreshCcw,
  warning: TriangleAlert,
};

export function PainPointsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <p className="eyebrow text-brand-violet">{painPointsContent.eyebrow}</p>
        <h2 className="display mt-5 text-4xl text-brand-ink md:text-6xl">
          {painPointsContent.heading}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {painPointsContent.items.map(({ icon, text }) => {
            const Icon = icons[icon];
            return (
              <article key={text} className="rounded-3xl border border-brand-ink/10 bg-white p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-purple/10 text-brand-violet">
                  <Icon className="size-5" />
                </span>
                <p className="mt-5 text-lg font-semibold leading-snug text-brand-ink">{text}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-12 text-balance text-2xl font-bold tracking-tight text-brand-ink md:text-4xl">
          {painPointsContent.closing}{" "}
          <span className="text-brand-violet">{painPointsContent.highlightedClosing}</span>
        </p>
      </Container>
    </section>
  );
}
