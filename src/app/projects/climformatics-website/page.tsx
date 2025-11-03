import clsx from "clsx";

export const metadata = {
  title: "Climformatics Website — Case Study",
  description:
    "Redesigning and extending Climformatics’ company website to unify brand identity, expand content, and modernize the experience.",
};

/** Responsive video with optional top-crop masking if the export has letterbox bars */
function MediaVideo({
  src,
  poster = "/images/climformatics/climformatics-hero.PNG", // <-- use your new hero as the poster
  label,
  cropTopPct = 0,
  className,
}: {
  src: string;
  poster?: string;
  label?: string;
  /** Percentage of the video height to mask from the top (e.g., 8 = mask 8%) */
  cropTopPct?: number;
  className?: string;
}) {
  const extraH = Math.max(100 + cropTopPct, 100);
  const shiftUp = Math.min(cropTopPct, 40);

  return (
    <figure className={clsx("rounded-xl overflow-hidden bg-black", className)}>
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 w-full"
          style={{ height: `${extraH}%`, top: `-${shiftUp}%` }}
        >
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={label}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {label ? (
        <figcaption className="text-sm text-neutral-300 px-3 py-1 bg-black/60">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function ClimformaticsWebsiteCaseStudy() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
      {/* HERO */}
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">
          Climformatics — Website Redesign
        </h1>
        <p className="mt-3 text-neutral-600 max-w-prose">
          Took over and completed Climformatics’ partially redesigned website,
          refining its structure, expanding content, and implementing new interactive
          features to better reflect the company’s evolving identity and mission.
        </p>

        {/* Hero video: 3D hero + landing interactions */}
        <MediaVideo
          className="mt-8"
          src="/videos/climformatics-hero-demo.mp4"
          poster="/images/climformatics/climformatics-hero.PNG" // <-- new hero poster
          label="Landing page hero & interactions"
          cropTopPct={0}
        />
      </header>

      {/* CONTEXT */}
      <section>
        <h2 className="text-xl font-medium">Context</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          The previous web engineer had begun a redesign before leaving the company.
          The codebase was incomplete, layouts were inconsistent, and content lacked cohesion.
          My task was to continue development, refine the design, and expand the site’s content structure.
        </p>
      </section>

      {/* GOALS */}
      <section>
        <h2 className="text-xl font-medium">Goals</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
          <li>Finish and polish the incomplete website design.</li>
          <li>Refactor the messy codebase for clarity and scalability.</li>
          <li>Add new content sections: news, publications, products, and team.</li>
          <li>Enhance the landing page with a distinctive, modern visual identity.</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section>
        <h2 className="text-xl font-medium">Process</h2>

        <div className="space-y-8 mt-4">
          <div>
            <h3 className="font-medium">1. Codebase Audit & Cleanup</h3>
            <p className="mt-1 text-neutral-700 max-w-prose">
              Reviewed the existing code, standardized components, improved responsiveness,
              and restructured folder organization to streamline development.
            </p>
          </div>

          <div>
            <h3 className="font-medium">2. Design Continuity & Expansion</h3>
            <p className="mt-1 text-neutral-700 max-w-prose">
              Maintained prior design language but improved polish and scalability.
              Added content sections including news, products, and leadership profiles
              to showcase the company’s full scope and activity.
            </p>
          </div>

          <div>
            <h3 className="font-medium">3. Interactive Features</h3>
            <ul className="mt-1 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
              <li>Integrated 3D hero model for a distinctive landing experience.</li>
              <li>Implemented a carousel to highlight Climformatics’ core value statements.</li>
              <li>Added modular cards for solutions and products to simplify future scaling.</li>
            </ul>
          </div>
        </div>

        {/* Full site walkthrough video */}
        <MediaVideo
          className="mt-6"
          src="/videos/climformatics-full-web-demo.mp4"
          poster="/images/climformatics/climformatics-hero.PNG" // <-- new hero poster
          label="Full website walkthrough"
          cropTopPct={0}
        />
      </section>

      {/* TRADE-OFFS */}
      <section>
        <h2 className="text-xl font-medium">Trade-offs & Decisions</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
          <li>3D model improved visual impact but increased layout complexity and load time.</li>
          <li>Carousel showcased brand values but risked reducing CTA visibility.</li>
          <li>Single-page “Solutions” layout simplified browsing but limits future scalability.</li>
          <li>News feed prioritizes recency, potentially burying important older stories.</li>
        </ul>
      </section>

      {/* OUTCOME */}
      <section>
        <h2 className="text-xl font-medium">Outcome</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          The completed website launched with rich content and a unified brand identity.
          Early analytics showed increased engagement, navigation depth, and visitor diversity.
          The new modular architecture makes future updates faster and easier to maintain.
        </p>

        {/* Repeat the full demo near the results for easy access (optional) */}
        <MediaVideo
          className="mt-6"
          src="/videos/climformatics-full-web-demo.mp4"
          poster="/images/climformatics/climformatics-hero.PNG" // <-- new hero poster
          label="Final site demo"
          cropTopPct={0}
        />
      </section>

      {/* REFLECTION */}
      <section>
        <h2 className="text-xl font-medium">Reflections & Next Steps</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
          <li>Refine homepage layout to balance storytelling, products, and news.</li>
          <li>Collect stakeholder or user feedback to inform content prioritization.</li>
          <li>Explore CMS integration for easier content updates.</li>
          <li>Investigate lightweight animation options to complement the 3D hero.</li>
        </ul>
      </section>
    </main>
  );
}