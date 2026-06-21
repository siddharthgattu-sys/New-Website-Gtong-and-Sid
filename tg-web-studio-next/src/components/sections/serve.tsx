const audiences: { title: string }[] = [
  { title: "Local Restaurants" },
  { title: "Contractors" },
  { title: "Dentists" },
  { title: "Small Businesses" },
  { title: "Startups" },
  { title: "Real Estate Agents" },
];

export function Serve() {
  return (
    <section className="bg-[#080D1A] pt-6 pb-9 sm:pt-7 sm:pb-11">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-4 text-2xl font-semibold text-white/70 sm:text-3xl md:text-4xl">
            Built for businesses like <span className="font-serif italic font-medium">yours</span>
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {audiences.map(({ title }) => (
            <div
              key={title}
              className="flex items-center justify-center rounded-lg border border-white/10 bg-navy-800/60 px-4 py-5 text-center transition-colors hover:border-brand-400/40"
            >
              <h3 className="font-heading text-sm font-bold text-white leading-tight">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
