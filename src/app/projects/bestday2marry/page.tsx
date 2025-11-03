import Image from "next/image";
import clsx from "clsx";

export const metadata = {
  title: "BestDay2Marry — Case Study",
  description:
    "Building a dual-audience SaaS for couples and wedding businesses using weather intelligence.",
};

/** Generic framed media image (keeps consistent look) */
function MediaShot({
  src,
  alt,
  caption,
  className,
  fillMode = "cover",
  sizes = "(min-width: 1024px) 1000px, 100vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  fillMode?: "cover" | "contain";
  sizes?: string;
}) {
  return (
    <figure
      className={clsx(
        "rounded-xl border border-black/5 bg-neutral-50 overflow-hidden",
        className
      )}
    >
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className={clsx(
            "absolute inset-0 bg-neutral-100",
            fillMode === "cover" ? "object-cover" : "object-contain"
          )}
          sizes={sizes}
          priority={false}
        />
      </div>
      {caption ? (
        <figcaption className="px-4 py-2 text-xs text-neutral-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Responsive video with optional top-crop masking if your export has letterbox bars */
function MediaVideo({
  src,
  poster,
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

export default function BestDay2MarryCaseStudy() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
      {/* HERO */}
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">BestDay2Marry</h1>
        <p className="mt-3 text-neutral-600 max-w-prose">
          Designed and built a dual-audience SaaS that helps couples and wedding
          businesses plan around long-term weather forecasts. From concept to
          code, I created a brand-aligned experience that made complex data feel
          celebratory, intuitive, and actionable.
        </p>

        {/* Landing page hero image */}
        <MediaShot
          className="mt-8"
          src="/images/bestday2marry/bestday2marry-hero.PNG"
          alt="BestDay2Marry landing page hero"
          caption="Marketing landing page hero — romantic, celebratory visual language over a data-backed promise."
          fillMode="cover"
        />
      </header>

      {/* CONTEXT */}
      <section>
        <h2 className="text-xl font-medium">Context</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          BestDay2Marry was envisioned as a weather intelligence SaaS serving
          both wedding couples and event professionals. When I joined, there was
          no existing product—only a vision and early design direction. My role
          was to transform that idea into a working product.
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
              Developed an expressive color palette and layout system that
              reflected a romantic yet data-rich theme.
            </p>
          </div>

          <div>
            <h3 className="font-medium">2. Dual User Journeys</h3>
            <p className="mt-1 text-neutral-700 max-w-prose">
              Built separate webflows for couples and businesses to avoid
              confusion and tailor the experience. Couples saw guided venue and
              date selection tools; businesses viewed data dashboards and pricing
              panels.
            </p>
          </div>

          <div>
            <h3 className="font-medium">3. Engineering & Components</h3>
            <ul className="mt-1 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
              <li>Reusable React components for charts, scoring cards, and calendars.</li>
              <li>Guided tours, in-app help, and gifting workflows.</li>
              <li>Custom theming to differentiate business vs. consumer modes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COUPLES ONBOARDING → DATE PICKER (video) */}
      <section>
        <h2 className="text-xl font-medium">Couples Onboarding Flow</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          Quick, celebratory onboarding that leads into a custom date picker
          grounded in historical and forecast data. <em>(Fill in details: e.g.,
          info capture, nudges, tone, guardrails.)</em>
        </p>
        <MediaVideo
          className="mt-6"
          src="/videos/bestday2marry-onboarding-flow.mp4"
          poster="/images/bestday2marry/bestday2marry-hero.PNG"
          label="Onboarding → custom date picker"
          // bump if your export has small letterbox bars
          cropTopPct={0}
        />
      </section>

      {/* DASHBOARD DEMO (video) */}
      <section>
        <h2 className="text-xl font-medium">Dashboard Demo</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          The main dashboard surfaces venue/date scoring, weather risk profiles,
          and shareable insights for couples and professionals. <em>(Fill in
          details: KPIs, scoring logic, export/share, pricing prompts.)</em>
        </p>
        <MediaVideo
          className="mt-6"
          src="/videos/bestday2marry-dashboard-video.mp4"
          poster="/images/bestday2marry/bestday2marry-hero.PNG"
          label="BestDay2Marry — dashboard walkthrough"
          cropTopPct={0}
        />
      </section>

      {/* OUTCOME */}
      <section>
        <h2 className="text-xl font-medium">Outcome</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          Successfully launched the MVP, onboarded first paying customers, and
          increased user traffic after introducing gifting and sharing features.
          The app now provides a scalable foundation for expansion.
        </p>
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
