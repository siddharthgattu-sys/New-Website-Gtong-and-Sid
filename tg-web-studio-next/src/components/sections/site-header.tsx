"use client";

import { Briefcase, Wrench, ListChecks, HelpCircle, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Work", url: "#work", icon: Briefcase },
  { name: "Services", url: "#services", icon: Wrench },
  { name: "Process", url: "#process", icon: ListChecks },
  { name: "FAQ", url: "#faq", icon: HelpCircle },
  { name: "Contact", url: "#contact", icon: Mail },
];

export function SiteHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-lg"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 font-heading text-xs font-bold text-white">
            TG
          </span>
          <span className="font-heading text-sm font-bold text-ink sm:text-base">
            Web Studio
          </span>
        </a>

        <a href="#contact" className="btn-cta !px-4 !py-2 text-xs sm:!px-5 sm:!py-2.5 sm:text-sm">
          Request a Quote
        </a>
      </header>

      <NavBar items={navItems} />
    </>
  );
}
