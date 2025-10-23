export const metadata = {
    title: "BestDay2Marry — Case Study",
    description: "Building a dual-audience SaaS for couples and wedding businesses using weather intelligence.",
  };
  
  export default function BestDay2MarryCaseStudy() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
  
        {/* HERO */}
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">BestDay2Marry</h1>
          <p className="mt-3 text-neutral-600 max-w-prose">
            Designed and built a dual-audience SaaS that helps couples and wedding businesses plan around long-term weather forecasts.
            From concept to code, I created a brand-aligned experience that made complex data feel celebratory, intuitive, and actionable.
          </p>
          <div className="mt-8 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-400">
            <span>Hero video / screenshot placeholder</span>
          </div>
        </header>
  
        {/* CONTEXT */}
        <section>
          <h2 className="text-xl font-medium">Context</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">
            BestDay2Marry was envisioned as a weather intelligence SaaS serving both wedding couples and event professionals.
            When I joined, there was no existing product—only a vision and early design direction. My role was to transform that idea into a working product.
          </p>
        </section>
  
        {/* GOALS */}
        <section>
          <h2 className="text-xl font-medium">Goals</h2>
          <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
            <li>Design and develop a complete dashboard from scratch.</li>
            <li>Create distinct yet unified experiences for couples and businesses.</li>
            <li>Ensure fast onboarding and easy access to forecasts and insights.</li>
            <li>Develop a strong visual brand aligned with wedding aesthetics.</li>
          </ul>
        </section>
  
        {/* PROCESS */}
        <section>
          <h2 className="text-xl font-medium">Process</h2>
  
          <div className="space-y-8 mt-4">
            <div>
              <h3 className="font-medium">1. Prototyping & Branding</h3>
              <p className="mt-1 text-neutral-700 max-w-prose">
                Created Figma prototypes to visualize early flows and dashboards.
                Developed an expressive color palette and layout system that reflected a romantic yet data-rich theme.
              </p>
            </div>
  
            <div>
              <h3 className="font-medium">2. Dual User Journeys</h3>
              <p className="mt-1 text-neutral-700 max-w-prose">
                Built separate webflows for couples and businesses to avoid confusion and tailor the experience.
                Couples saw guided venue and date selection tools; businesses viewed data dashboards and pricing panels.
              </p>
            </div>
  
            <div>
              <h3 className="font-medium">3. Engineering & Components</h3>
              <ul className="mt-1 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
                <li>Developed reusable React components for charts, scoring cards, and date calendars.</li>
                <li>Implemented guided tours, in-app help, and gifting workflows.</li>
                <li>Custom theming system to differentiate business vs. consumer modes.</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-6 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-400">
            <span>Dashboard / venue scoring mockup placeholder</span>
          </div>
        </section>
  
        {/* TRADE-OFFS */}
        <section>
          <h2 className="text-xl font-medium">Trade-offs & Challenges</h2>
          <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
            <li>Balancing two user types without overwhelming either flow.</li>
            <li>Choosing a strong niche aesthetic at the risk of limited general appeal.</li>
            <li>Increasing feature depth while maintaining clarity.</li>
            <li>Managing complex user paths (venue → date → forecast) without fatigue.</li>
          </ul>
        </section>
  
        {/* OUTCOME */}
        <section>
          <h2 className="text-xl font-medium">Outcome</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">
            Successfully launched the MVP, onboarded first paying customers, and increased user traffic after
            introducing gifting and sharing features. The app now provides a scalable foundation for expansion.
          </p>
          <div className="mt-6 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-400">
            <span>Final dashboard / mobile flow placeholder</span>
          </div>
        </section>
  
        {/* REFLECTION */}
        <section>
          <h2 className="text-xl font-medium">Reflections & Next Steps</h2>
          <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
            <li>Reduce complexity without sacrificing feature richness.</li>
            <li>Streamline onboarding for each audience type.</li>
            <li>Refine visualizations for readability and scalability.</li>
            <li>Strengthen first-touch experience and marketing hooks.</li>
          </ul>
        </section>
  
      </main>
    );
  }