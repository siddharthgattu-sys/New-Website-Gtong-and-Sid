"use client";

import { Briefcase, Wrench, ListChecks, HelpCircle, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Work", url: "#work", icon: Briefcase },
  { name: "Services", url: "#services", icon: Wrench },
  { name: "Process", url: "#process", icon: ListChecks },
  { name: "FAQ", url: "#faq", icon: HelpCircle },
  { name: "Contact", url: "#contact", icon: Mail },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center">
          <img
            src="/logo-sitespark.png"
            alt="SiteSpark"
            className="h-7 w-auto transition-[filter] duration-300 sm:h-8"
            style={{ filter: scrolled ? "brightness(0)" : "none" }}
          />
        </a>

        <a href="#contact" className="btn-cta !px-4 !py-2 text-xs sm:!px-5 sm:!py-2.5 sm:text-sm">
          Request a Quote
        </a>
      </header>

      <NavBar items={navItems} />
    </>
  );
}
