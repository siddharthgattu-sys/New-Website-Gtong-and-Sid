export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 pb-28 pt-12 text-brand-100/70 sm:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 font-heading text-xs font-bold text-white">
                TG
              </span>
              <span className="font-heading text-base font-bold text-white">Web Studio</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Modern, fast, conversion-focused websites for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Site</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="#work" className="transition-colors hover:text-white">Work</a>
              <a href="#services" className="transition-colors hover:text-white">Services</a>
              <a href="#process" className="transition-colors hover:text-white">Process</a>
              <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Get started</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="#contact" className="transition-colors hover:text-white">Request a Quote</a>
              <a href="#contact" className="transition-colors hover:text-white">Schedule a Discovery Call</a>
              <a href="mailto:hello@tgwebstudio.com" className="transition-colors hover:text-white">hello@tgwebstudio.com</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Founders</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <span>Siddharth Gattu</span>
              <span>Grant Tong</span>
            </div>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-brand-100/50">
          &copy; {year} TG Web Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
