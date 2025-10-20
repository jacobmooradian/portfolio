import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />

      <main>
        <Hero />

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
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

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-10">
          <div className="glass p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">About</h2>
            <p className="mt-3 text-neutral-700">
              I’m a builder who sweats the details—interfaces, systems, and the glue code between them.
              I love flat vector art with vibrant palettes and bringing those visuals to life with
              lightweight, fast frontends.
            </p>
          </div>
        </section>

        {/* TOOLKIT */}
        <section id="toolkit" className="mx-auto max-w-6xl px-6 py-10">
          <div className="glass p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Toolkit</h2>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Figma', 'MapLibre', 'GCP', 'BigQuery', 'Cloud Run'].map(
                (item) => (
                  <span key={item} className="tag">{item}</span>
                )
              )}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
          <div className="glass p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Open to collabs & roles</h2>
              <p className="mt-1 text-neutral-700">
                Let’s build something crisp. Case studies available on request.
              </p>
            </div>
            <a href="mailto:hello@yourdomain.com" className="btn-primary">Email me</a>
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