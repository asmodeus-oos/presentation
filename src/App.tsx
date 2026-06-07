import { sections } from './posterData';
import SectionCard from './SectionCard';
import { useReveal } from './useReveal';

function Hero() {
  const { ref, visible } = useReveal(0.05);
  return (
    <header
      ref={ref}
      className="relative mx-auto w-full max-w-[1240px] px-5 pt-12 sm:px-8 sm:pt-20"
    >
      <div
        className={`relative overflow-hidden rounded-[32px] border-2 border-slate-300/90 bg-white px-7 py-12 shadow-[0_40px_120px_-50px_rgba(20,50,100,0.65)] transition-all duration-1000 ease-out sm:px-14 sm:py-16 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* ambient gradient blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-blue-300 bg-blue-100/90 px-4 py-2 shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-600 shadow-[0_0_12px_3px_rgba(6,182,212,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-800">
                Clinical Prosthodontics · Digital Poster
              </span>
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              Adhesive Resin Cements
              <span className="block bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                in Indirect Restorations
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-800">
              Composition, bonding mechanisms, classification, surface treatment
              protocols, clinical indications, and evidence-based cementation
              strategies for durable, esthetic indirect restorations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['10-MDP Chemistry', 'Dual-Cure Systems', 'Evidence-Based'].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-md"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Hero illustration */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-[28px] shadow-[0_30px_70px_-25px_rgba(15,40,80,0.6)] ring-2 ring-slate-200">
              <img
                src="/images/hero.jpg"
                alt="Adhesive resin bonding of a ceramic crown restoration"
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-white/15" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 via-slate-100/30 to-slate-200/20 text-slate-900 antialiased">
      {/* global ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-200/30 to-slate-300/20" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-blue-400/30 blur-[140px]" />
      </div>

      <Hero />

      <main className="pb-10 pt-4">
        {sections.map((s, i) => (
          <SectionCard key={s.id} section={s} n={i} />
        ))}
      </main>

      {/* Footer / closing */}
      <footer className="mx-auto w-full max-w-[1240px] px-5 pb-16 sm:px-8">
        <div className="rounded-[28px] border-2 border-slate-300 bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-12 text-center shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Clinical Takeaway
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-xl font-medium leading-relaxed text-white sm:text-2xl">
            Dual-cure adhesive resin systems remain the clinical standard — pairing
            10-MDP chemistry with material-specific surface treatment for predictable,
            long-lasting indirect restorations.
          </p>
          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
        </div>
      </footer>
    </div>
  );
}
