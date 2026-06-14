import { ArrowRight } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24">
      <HeroGeometric
        badge="Web design studio for growing businesses"
        title1="Websites built to"
        title2="grow your business"
      >
        <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="btn-cta !px-8 !py-4 text-base">
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-outline-light !px-8 !py-4 text-base">
            Schedule a Discovery Call
          </a>
        </div>
      </HeroGeometric>
    </section>
  );
}
