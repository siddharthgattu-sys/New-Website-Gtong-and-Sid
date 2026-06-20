import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Serve } from "@/components/sections/serve";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Serve />
        <Portfolio />
        <Services />
        <Process />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
