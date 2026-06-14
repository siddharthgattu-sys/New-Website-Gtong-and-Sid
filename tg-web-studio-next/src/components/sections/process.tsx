const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, your goals, and who you're trying to reach.",
  },
  {
    number: "02",
    title: "Design Concept",
    description: "We design a custom look and layout built around your brand and your customers.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build a fast, responsive, fully working website from the approved design.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We launch your site and stick around to help with updates and questions.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-brand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            A simple process, start to finish
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            No confusing jargon, no surprises — just a clear path from idea to live website.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm">
              <div className="font-heading text-4xl font-extrabold text-brand-200">{number}</div>
              <h3 className="mt-3 font-heading text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
