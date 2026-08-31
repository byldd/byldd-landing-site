import { Hero } from "@/modules/Home/components/Hero";
import { Belief } from "@/modules/Home/components/Belief";
import { Services } from "@/modules/Home/components/Services";
import { Technologies } from "@/modules/Home/components/Technologies";
import { Industries } from "@/components/sections/industries";
import { MarqueeBand } from "@/modules/Home/components/MarqueeBand";
import { Process } from "@/modules/Home/components/Process";
import { Testimonials } from "@/components/sections/testimonials";
import { Proof } from "@/modules/Home/components/Proof";
import { FAQ } from "@/modules/Home/components/Faq";
import { CTA } from "@/components/sections/cta";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Belief />
      <Services />
      <Technologies />
      <MarqueeBand />
      <Process />
      <Industries />
      <Testimonials />
      {/* shared band: continuous brand-kit grid behind founder's desk → FAQ */}
      <div className="relative isolate bg-brand-mist">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/brand/pattern-dots.svg)",
            backgroundSize: "420px",
            backgroundRepeat: "repeat",
            opacity: 0.045,
          }}
        />
        <Proof />
        <FAQ />
      </div>
      <CTA />
    </main>
  );
}
