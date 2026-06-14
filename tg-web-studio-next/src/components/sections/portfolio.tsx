"use client";

import { useState } from "react";
import {
  UtensilsCrossed,
  Hammer,
  Smile,
  Home,
  Rocket,
  Coffee,
  type LucideIcon,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BrowserMockup } from "@/components/ui/browser-mockup";

type Category = "all" | "restaurant" | "contractor" | "dental" | "realestate" | "startup";

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Restaurants", value: "restaurant" },
  { label: "Contractors", value: "contractor" },
  { label: "Dentists", value: "dental" },
  { label: "Real Estate", value: "realestate" },
  { label: "Startups", value: "startup" },
];

const projects: {
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  icon: LucideIcon;
  gradient: string;
}[] = [
  {
    title: "Corner Bistro",
    description: "Warm, appetizing design with menu highlights and online ordering links.",
    category: "restaurant",
    categoryLabel: "Restaurant",
    icon: UtensilsCrossed,
    gradient: "from-orange-400 to-rose-500",
  },
  {
    title: "Summit Builders",
    description: "Bold, trustworthy layout that showcases projects, reviews, and free quotes.",
    category: "contractor",
    categoryLabel: "Contractor",
    icon: Hammer,
    gradient: "from-slate-600 to-slate-800",
  },
  {
    title: "Bright Smile Dental",
    description: "Calming, modern design with easy appointment requests and service info.",
    category: "dental",
    categoryLabel: "Dentist",
    icon: Smile,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Harborview Realty",
    description: "Listing-focused design with featured properties and a simple contact flow.",
    category: "realestate",
    categoryLabel: "Real Estate",
    icon: Home,
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    title: "Nimbus Analytics",
    description: "Clean SaaS landing page built to explain the product and drive sign-ups.",
    category: "startup",
    categoryLabel: "Startup",
    icon: Rocket,
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    title: "Maple & Co. Cafe",
    description: "Cozy branding with a focus on photos, hours, and location.",
    category: "restaurant",
    categoryLabel: "Restaurant",
    icon: Coffee,
    gradient: "from-amber-400 to-orange-500",
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="work" className="scroll-mt-24 bg-white">
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <p className="eyebrow">Our work</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-6xl">
              See your future website
              <br />
              <span className="bg-gradient-to-r from-brand-500 to-cta-500 bg-clip-text text-transparent">
                come to life
              </span>
            </h2>
          </div>
        }
      >
        <BrowserMockup />
      </ContainerScroll>

      <div className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Design concepts</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Design concepts for businesses like yours
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            A look at the kinds of websites we design — explore by industry below.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Filter portfolio by category"
        >
          {filters.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={activeFilter === value}
              onClick={() => setActiveFilter(value)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeFilter === value
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                  : "border border-brand-200 bg-white text-ink-muted hover:border-brand-400 hover:text-brand-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map(({ title, description, categoryLabel, icon: Icon, gradient }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${gradient}`}>
                <Icon className="h-12 w-12 text-white/90" />
                <span className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Concept
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
                <span className="mt-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                  {categoryLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
