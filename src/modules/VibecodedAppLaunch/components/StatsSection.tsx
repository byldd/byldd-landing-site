import { Container } from "@/components/ui";
import { statsContent } from "@/modules/VibecodedAppLaunch/content";

export function StatsSection() {
  return (
    <section aria-label={statsContent.ariaLabel} className="border-b border-brand-ink/10 bg-white py-10">
      <Container className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {statsContent.items.map(({ value, label }) => (
          <div key={label} className="rounded-2xl bg-brand-mist px-4 py-6 text-center">
            <p className="text-3xl font-bold tracking-tight text-brand-ink">{value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink/55">
              {label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
