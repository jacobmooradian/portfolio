export default function HeroOverlay() {
    return (
      <div className="mt-6 glass-on-white max-w-2xl p-6 sm:p-8">
        <p className="text-xs font-medium text-neutral-600 mb-2">
          Time-/weather-reactive hero (Sunset + Clear — demo)
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
          Jacob Mooradian
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700">
          I build thoughtful, performant products. Designer-leaning software engineer with a love for flat vectors and vibrant palettes.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary">View case studies</a>
          <a href="/resume.pdf" className="btn-ghost">Resume</a>
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="tag">Next.js</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Figma</span>
          </div>
        </div>
      </div>
    );
  }