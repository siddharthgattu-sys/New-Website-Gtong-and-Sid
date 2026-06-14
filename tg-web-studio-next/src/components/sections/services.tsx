import {
  Palette,
  Code2,
  Zap,
  Search,
  RefreshCw,
  FileText,
  type LucideIcon,
} from "lucide-react";

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "A unique design that reflects your brand — not a recycled template.",
  },
  {
    icon: Code2,
    title: "Responsive Development",
    description: "Hand-built, fast-loading code that works perfectly on phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Speed & Performance",
    description: "Optimized images and code so your site loads quickly and ranks better.",
  },
  {
    icon: Search,
    title: "Local SEO Setup",
    description: "Get found by nearby customers searching for your services on Google.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    description: "Need an update after launch? We're a quick message away.",
  },
  {
    icon: FileText,
    title: "Content & Copy Help",
    description: "No content ready? We help write and organize copy that sounds like you.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Everything you need to launch and grow online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            From first sketch to live site — and beyond — we cover the parts that matter most
            for a small business website.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
