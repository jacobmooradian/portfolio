import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />

      <main>
        <Hero />

        {/* WORK */}
        <section id="projects" className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold tracking-tight">Selected Projects</h2>
            <span className="text-sm text-neutral-500">Design × Engineering</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <div className="aspect-[4/3] w-full rounded-md bg-neutral-100 grid place-items-center">
                <span className="text-xs text-neutral-500">Case study cover (placeholder)</span>
              </div>
              <h3 className="mt-4 font-medium">Climformatics — Weather-driven dashboards</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Map tiles, KPIs, and time-series with a design system you can scale.
              </p>
              <a href="#" className="link mt-3 inline-block">Open case study →</a>
            </article>

            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <div className="aspect-[4/3] w-full rounded-md bg-neutral-100 grid place-items-center">
                <span className="text-xs text-neutral-500">Case study cover (placeholder)</span>
              </div>
              <h3 className="mt-4 font-medium">SMART EHR — Research UX</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Turning complex analyses into clear visuals and accessible flows.
              </p>
              <a href="#" className="link mt-3 inline-block">Open case study →</a>
            </article>

            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <div className="aspect-[4/3] w-full rounded-md bg-neutral-100 grid place-items-center">
                <span className="text-xs text-neutral-500">Case study cover (placeholder)</span>
              </div>
              <h3 className="mt-4 font-medium">Design Systems — Tokens & Glass</h3>
              <p className="text-sm text-neutral-600 mt-1">
                A compact token set, glass surfaces, and motion primitives.
              </p>
              <a href="#" className="link mt-3 inline-block">Open case study →</a>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Jacob Mooradian</span>
          <div className="flex gap-4">
            <a className="hover:underline underline-offset-4" href="#" target="_blank">LinkedIn</a>
            <a className="hover:underline underline-offset-4" href="#" target="_blank">GitHub</a>
            <a className="hover:underline underline-offset-4" href="#" target="_blank">Figma</a>
          </div>
        </div>
      </footer>
    </div>
  );
}