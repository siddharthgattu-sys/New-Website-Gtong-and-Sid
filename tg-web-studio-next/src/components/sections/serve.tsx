import {
  UtensilsCrossed,
  Hammer,
  Smile,
  Building2,
  Rocket,
  Home,
  type LucideIcon,
} from "lucide-react";

const audiences: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: UtensilsCrossed,
    title: "Local Restaurants",
    description: "Menus, online ordering links, hours, and location info that's easy to find and update.",
  },
  {
    icon: Hammer,
    title: "Contractors",
    description: "Showcase past projects, services, and reviews so new leads can trust you before they call.",
  },
  {
    icon: Smile,
    title: "Dentists",
    description: "Friendly, modern sites with easy appointment requests and clear service information.",
  },
  {
    icon: Building2,
    title: "Small Businesses",
    description: "A professional online home base that builds trust with every new customer.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "A bold, credible landing page that helps you pitch, launch, and grow with confidence.",
  },
  {
    icon: Home,
    title: "Real Estate Agents",
    description: "Listings, neighborhood info, and contact forms that turn browsers into buyers.",
  },
];

export function Serve() {
  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-light">Who we work with</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Built for businesses like yours
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/70 sm:text-lg">
            Whatever you do, your customers are searching for it online. We design sites that
            help them find you — and choose you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 transition-colors hover:border-brand-400/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
