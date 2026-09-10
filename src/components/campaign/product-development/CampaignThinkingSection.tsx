import { Check, X } from "lucide-react";

import { Container, SectionHeading } from "@/components/ui";
import type {
  CampaignComparisonColumn,
  CampaignThinkingContent,
} from "@/components/campaign/product-development/types";

function ComparisonCard({
  title,
  items,
  winning = false,
}: {
  title: string;
  items: CampaignComparisonColumn["items"];
  winning?: boolean;
}) {
  return (
    <article
      className={`rounded-[2rem] border p-8 md:p-10 ${
        winning
          ? "border-brand-purple bg-brand-night text-white shadow-glow"
          : "border-brand-ink/10 bg-white text-brand-ink"
      }`}
    >
      <p className={`eyebrow ${winning ? "text-brand-purple-light" : "text-brand-ink/45"}`}>
        {title}
      </p>
      <ul className="mt-8 grid gap-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-lg leading-7">
            {winning ? (
              <Check className="mt-1 size-5 shrink-0 text-brand-purple-light" />
            ) : (
              <X className="mt-1 size-5 shrink-0 text-red-500" />
            )}
            <span className={winning ? "text-white/85" : "text-brand-ink/65"}>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CampaignThinkingSection({ content }: { content: CampaignThinkingContent }) {
  return (
    <section className="bg-brand-mist py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={<>{content.heading} <span className="text-brand-violet">{content.highlightedHeading}</span></>}
          align="center"
          className="mx-auto max-w-4xl"
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          <ComparisonCard title={content.standard.title} items={content.standard.items} />
          <ComparisonCard title={content.preferred.title} items={content.preferred.items} winning />
        </div>
      </Container>
    </section>
  );
}
