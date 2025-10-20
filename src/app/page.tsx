import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // ⛳️ Later you can compute this from time/weather and choose a hero variant.
  // For now it's just a constant.
  const heroLabel = 'San Francisco • Golden Gate (placeholder)';

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* —— NAV —— */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-black/5 dark:bg-neutral-950/70 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            jacobmooradian<span className="text-neutral-400">/</span>portfolio
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#work" className="hover:underline underline-offset-4">Work</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#toolkit" className="hover:underline underline-offset-4">Toolkit</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
        </div>
      </header>

      {/* —— MAIN —— */}
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Placeholder for your SVG scene */}
          <div
            className="aspect-[16/9] w-full bg-gradient-to-b from-[#BEE3F8] via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950"
            aria-label={heroLabel}
          >
            {/* When ready: replace with your SVG in /public and use <Image src="/ggb_day.svg" .../> */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Golden Gate SVG Placeholder
              </div>
            </div>
          </div>

          {/* Glass overlay content */}
          <div className="absolute inset-x-0 bottom-6">
            <div className="mx-auto max-w-6xl px-6">
              <div className="glass max-w-2xl p-6 sm:p-8">
                <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-2">
                  Time-/weather-reactive hero (engineer × designer)
                </p>
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                  Jacob Mooradian
                </h1>
                <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200">
                  I build thoughtful, performant products. I’m a software engineer
                  transitioning into design—bringing systems thinking to UX and visual craft.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href="#work"
                    className="btn-primary"
                  >
                    View case studies
                  </Link>
                  <a
                    href="/resume.pdf"
                    className="btn-ghost"
                  >
                    Resume
                  </a>
                  <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                    <span className="tag">Next.js</span>
                    <span className="tag">Tailwind</span>
                    <span className="tag">Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
            <span className="text-sm text-neutral-500">Design × Engineering</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <div className="aspect-[4/3] w-full rounded-md bg-neutral-100 dark:bg-neutral-900 grid place-items-center">
                <span className="text-xs text-neutral-500">Case study cover (placeholder)</span>
              </div>
              <h3 className="mt-4 font-medium">Climformatics — Weather-driven dashboards</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                Map tiles, KPIs, and time-series with a design system you can scale.
              </p>
              <a href="#" className="link mt-3 inline-block">Open case study →</a>
            </article>

            {/* Card 2 */}
            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <div className="aspect-[4/3] w-full rounded-md bg-neutral-100 dark:bg-neutral-900 grid place-items-center">
                <span className="text-xs text-neutral-500">Case study cover (placeholder)</span>
              </div>
              <h3 className="mt-4 font-medium">SMART EHR — Research UX</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                Turning complex analyses into clear visuals and accessible flows.
              </p>
              <a href="#" className="link mt-3 inline-block">Open case study →</a>
            </article>

            {/* Card 3 */}
            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <div className="aspect-[4/3] w-full rounded-md bg-neutral-100 dark:bg-neutral-900 grid place-items-center">
                <span className="text-xs text-neutral-500">Case study cover (placeholder)</span>
              </div>
              <h3 className="mt-4 font-medium">Design Systems — Tokens & Glass</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
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
            <p className="mt-3 text-neutral-700 dark:text-neutral-200">
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
              <p className="mt-1 text-neutral-700 dark:text-neutral-200">
                Let’s build something crisp. Case studies available on request.
              </p>
            </div>
            <a href="mailto:hello@yourdomain.com" className="btn-primary">Email me</a>
          </div>
        </section>
      </main>

      {/* —— FOOTER —— */}
      <footer className="border-t border-black/5 dark:border-white/10">
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