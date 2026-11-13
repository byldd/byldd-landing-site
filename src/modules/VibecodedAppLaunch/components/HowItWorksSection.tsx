import { Container } from "@/components/ui";
import { howItWorksContent as content } from "@/modules/VibecodedAppLaunch/content";

export function HowItWorksSection() {
  return (
    <section id={content.sectionId} className="scroll-mt-24 bg-brand-mist py-20 md:py-28">
      <Container>
        <p className="eyebrow text-brand-violet">{content.eyebrow}</p>
        <h2 className="display mt-5 text-balance text-4xl text-brand-ink md:text-6xl">{content.heading}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-ink/60">{content.description}</p>

        <div className="mt-12 hidden md:block" aria-label={content.timeline.ariaLabel}>
          <div className="grid grid-cols-[47fr_53fr] gap-2">
            <div className="rounded-xl border border-brand-purple/25 bg-white px-4 py-2.5 text-sm font-semibold text-brand-violet">{content.timeline.pilotBand}</div>
            <div className="rounded-xl border border-brand-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink/55">{content.timeline.launchBand}</div>
          </div>
          <div className="relative mt-3 grid grid-cols-[10fr_37fr_53fr] gap-1">
            <div className="flex h-12 items-center rounded-xl bg-brand-lavender px-4 text-sm font-bold text-brand-ink">{content.timeline.phases[0]}</div>
            <div className="flex h-12 items-center rounded-xl bg-brand-purple/45 px-4 text-sm font-bold text-brand-ink">{content.timeline.phases[1]}</div>
            <div className="flex h-12 items-center rounded-xl bg-brand-purple px-4 text-sm font-bold text-white">{content.timeline.phases[2]}</div>
            <span aria-hidden="true" className="absolute -bottom-2 -top-2 left-[47%] border-l-2 border-dashed border-brand-ink" />
          </div>
          <div className="relative mt-4 h-7 text-sm text-brand-ink/55">
            <span className="absolute left-0">{content.timeline.marks[0]}</span>
            <span className="absolute left-[10%] -translate-x-1/2">{content.timeline.marks[1]}</span>
            <span className="absolute left-[47%] -translate-x-1/2 font-bold text-brand-ink">{content.timeline.marks[2]}</span>
            <span className="absolute right-0">{content.timeline.marks[3]}</span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.steps.map((step) => (
            <article key={step.number} className={`rounded-[2rem] p-7 ${step.featured ? "bg-brand-purple text-white shadow-glow" : "border border-brand-ink/10 bg-white text-brand-ink"}`}>
              <div className={`grid size-11 place-items-center rounded-full text-sm font-bold ${step.featured ? "bg-white text-brand-violet" : "bg-brand-purple/10 text-brand-violet"}`}>{step.number}</div>
              <p className={`eyebrow mt-7 ${step.featured ? "text-white/65" : "text-brand-violet"}`}>{step.when}</p>
              <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
              <p className={`mt-4 leading-7 ${step.featured ? "text-white/75" : "text-brand-ink/60"}`}>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
