export function BrowserMockup() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-white">
      <div className="flex items-center gap-2 border-b border-brand-100 bg-brand-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <div className="ml-4 h-5 w-48 rounded-full bg-white" />
      </div>
      <div className="flex-1 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 p-6 sm:p-10 md:p-14">
        <div className="flex items-center justify-between">
          <div className="h-7 w-28 rounded bg-gradient-to-r from-brand-400 to-brand-600" />
          <div className="hidden gap-8 sm:flex">
            <div className="h-3 w-14 rounded bg-ink/10" />
            <div className="h-3 w-14 rounded bg-ink/10" />
            <div className="h-3 w-14 rounded bg-ink/10" />
          </div>
          <div className="h-9 w-28 rounded-full bg-cta-500" />
        </div>

        <div className="mt-10 max-w-md space-y-4 sm:mt-16">
          <div className="h-9 w-3/4 rounded bg-ink/15" />
          <div className="h-9 w-1/2 rounded bg-gradient-to-r from-brand-400 to-brand-600" />
          <div className="h-4 w-full rounded bg-ink/10" />
          <div className="h-4 w-5/6 rounded bg-ink/10" />
          <div className="mt-2 h-11 w-44 rounded-full bg-cta-500" />
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-16">
          <div className="h-24 rounded-xl border border-brand-100 bg-white shadow-sm sm:h-32" />
          <div className="h-24 rounded-xl border border-brand-100 bg-white shadow-sm sm:h-32" />
          <div className="h-24 rounded-xl border border-brand-100 bg-white shadow-sm sm:h-32" />
        </div>
      </div>
    </div>
  );
}
