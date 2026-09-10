import Image from "next/image";

import type { CampaignProcessContent } from "@/components/campaign/product-development/types";
import { Container } from "@/components/ui";

export function CampaignProcessSection({ content }: { content: CampaignProcessContent }) {
  return (
    <section className="bg-[#0d0d0d] py-20 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-5xl text-center text-[1.75rem] font-semibold leading-[1.4] tracking-tight text-white md:text-[2rem] md:leading-[1.35]">
          {content.heading}
        </h2>
        <div className="mx-auto mt-12 max-w-[320px] md:max-w-[1170px]">
          {content.steps.map((step, index) => (
            <article
              key={step.title}
              style={{
                top: `calc(6rem + ${index * 0.75}rem)`,
                zIndex: index + 1,
                backgroundColor: step.backgroundColor,
              }}
              className="sticky mb-8 grid overflow-hidden rounded-2xl shadow-[0_-12px_35px_rgba(0,0,0,0.24)] md:min-h-[30rem] md:grid-cols-2"
            >
              <div
                className={`flex flex-col justify-center px-5 pb-8 pt-11 md:p-10 lg:px-[60px] ${
                  step.imageFirst ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image src={step.icon} alt="" width={50} height={50} className="size-[50px]" />
                <h3 className="mt-0 text-[1.75rem] font-bold leading-tight tracking-tight text-[#171717] md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] font-medium leading-5 text-[#30303a] md:mt-3 md:text-base md:leading-7">
                  {step.subtitle}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-[0.95rem] leading-6 text-[#30303a] md:mt-3 md:space-y-1.5">
                  {step.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className="mt-4 border-t border-[#171717]/45 pt-3 text-[0.95rem] font-bold text-[#24242a] md:mt-5 md:text-base">
                  {step.result}
                </p>
              </div>

              <div
                className={`relative hidden min-h-[400px] items-center overflow-hidden md:flex ${
                  step.imageFirst ? "md:order-1 justify-start" : "md:order-2 justify-end"
                }`}
              >
                <Image
                  src={step.image}
                  alt={`${step.title} illustration`}
                  width={step.imageWidth}
                  height={step.imageHeight}
                  className="h-auto w-full max-w-[490px] object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
