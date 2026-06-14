import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-brand-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-400 to-brand-600 opacity-20 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-brand-200 bg-white shadow-lg">
              <div className="flex -space-x-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-400 to-brand-600 font-heading text-2xl font-extrabold text-white shadow-lg sm:h-28 sm:w-28 sm:text-3xl">
                  SG
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-cta-500 to-cta-600 font-heading text-2xl font-extrabold text-white shadow-lg sm:h-28 sm:w-28 sm:text-3xl">
                  GT
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">About us</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Two students, one mission: better websites for local business
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            We&apos;re Siddharth Gattu and Grant Tong — student web designers who got tired of
            seeing great local businesses stuck with outdated, slow, hard-to-use websites. We
            started TG Web Studio to give restaurants, contractors, dentists, real estate agents,
            startups, and small businesses the kind of modern, fast, conversion-focused website
            that bigger companies pay thousands for, at a price that actually makes sense for a
            growing business.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            We handle everything from design to development to launch — so you can focus on
            running your business while we build the site that helps it grow.
          </p>
          <a href="#contact" className="btn-outline mt-8">
            Get to know us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
