import { Zap, Smartphone, TrendingUp, GraduationCap } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Most projects go from kickoff to launch in just a few weeks.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Every site is designed to look and work great on any screen size.",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    description: "Clear calls-to-action and layouts designed to turn visitors into customers.",
  },
  {
    icon: GraduationCap,
    title: "Student Pricing",
    description: "Quality design and development at a price that fits a growing business.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-b border-brand-100 bg-page py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="text-center sm:text-left">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:mx-0">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
