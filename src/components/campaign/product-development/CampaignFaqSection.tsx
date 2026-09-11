import { Plus } from "lucide-react";
import type { CampaignFaqContent } from "@/components/campaign/product-development/types";

export function CampaignFaqSection({ content }: { content: CampaignFaqContent }) {
  return (
    <section className="bg-brand-night px-5 py-20 text-brand-mist md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-brand-purple-light">{content.eyebrow}</p>
        <h2 className="display mt-5 text-balance text-4xl md:text-6xl">{content.heading}</h2>
        <div className="mt-10">
          {content.items.map((faq) => (
            <details key={faq.question} className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold marker:content-none">
                {faq.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-purple text-white transition-transform group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="max-w-3xl pb-6 leading-7 text-brand-mist/60">{faq.answer}</p>
            </details>
          ))}
        </div>
        {/* <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-white/[0.06] p-7 md:p-9">
          <div>
            <p className="text-xl font-bold">Have a question about your idea?</p>
            <p className="mt-1 text-brand-mist/60">Bring it to the strategy call. We&apos;ll give you a direct answer.</p>
          </div>
          <a href="#strategy-call" className="rounded-full bg-brand-purple px-6 py-3 font-semibold text-white transition hover:bg-brand-violet">
            Book your call
          </a>
        </div> */}
      </div>
    </section>
  );
}
