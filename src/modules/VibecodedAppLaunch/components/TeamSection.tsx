import { Container } from "@/components/ui";
import { teamContent as content } from "@/modules/VibecodedAppLaunch/content";

export function TeamSection() {
  return (
    <section className="bg-brand-mist py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="display text-4xl text-brand-ink md:text-5xl">{content.teamHeading}</h2>
          <ul className="mt-8 grid gap-3">
            {content.teamItems.map((item) => (
              <li key={item} className="rounded-2xl border border-brand-ink/10 bg-white p-5 font-semibold text-brand-ink">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="display text-4xl text-brand-ink md:text-5xl">{content.afterHeading}</h2>
          <div className="mt-8 grid gap-3">
            {content.afterItems.map(({ title, text }) => (
              <article key={title} className="rounded-2xl border border-brand-ink/10 bg-white p-5">
                <h3 className="font-bold text-brand-ink">{title}</h3>
                <p className="mt-2 text-brand-ink/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
