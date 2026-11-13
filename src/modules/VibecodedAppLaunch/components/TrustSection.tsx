import type { ComponentType } from "react";
import { FileCheck2, GitBranch, KeyRound, ShieldCheck, Users } from "lucide-react";

import { Container } from "@/components/ui";
import { trustContent as content } from "@/modules/VibecodedAppLaunch/content";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  branch: GitBranch,
  file: FileCheck2,
  key: KeyRound,
  shield: ShieldCheck,
  users: Users,
};

export function TrustSection() {
  return (
    <section className="bg-brand-night py-20 text-white md:py-28">
      <Container>
        <p className="eyebrow text-brand-purple-light">{content.eyebrow}</p>
        <h2 className="display mt-5 text-4xl md:text-6xl">{content.heading}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.items.map(({ icon, title, text }) => {
            const Icon = icons[icon];
            return (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <Icon className="size-7 text-brand-purple-light" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 leading-6 text-white/60">{text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
