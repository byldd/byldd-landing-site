import { Plus } from "lucide-react";

import { faqs } from "@/modules/ApAutomation/utils/content";

export function ApFaq() {
  return (
    <section className="bg-brand-mist px-5 py-20 text-brand-ink md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="display text-balance text-4xl md:text-5xl">Questions finance leaders ask us</h2>
        <div className="mt-10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-brand-lavender">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold marker:content-none">
                {faq.question}
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-purple text-white transition-transform group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="max-w-3xl pb-6 text-base leading-7 text-brand-ink/60">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-brand-night p-7 text-brand-mist md:p-9">
          <div>
            <p className="text-xl font-bold">Still deciding between AP software and a custom build?</p>
            <p className="mt-1 text-brand-mist/60">That&apos;s what the audit call is for. Ask us anything.</p>
          </div>
          <a href="#ap-audit-form" className="rounded-full bg-brand-purple px-6 py-3 font-semibold text-white transition hover:bg-brand-violet">
            Book my AP audit
          </a>
        </div>
      </div>
    </section>
  );
}
