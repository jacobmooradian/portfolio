import Image from "next/image";
import clsx from "clsx";

export const metadata = {
  title: "Fire Weather Dashboard — Case Study",
  description:
    "Rebuilt and redesigned a real-time dashboard for exploring fire-weather data.",
};

/** Responsive video wrapper with optional top cropping (masking) */
function MediaVideo({
  src,
  type = "video/mp4",
  poster,
  label,
  /** Percentage of video height to crop from the top (masked), e.g., 8 = 8% */
  cropTopPct = 8,
  className,
}: {
  src: string;
  type?: string;
  poster?: string;
  label?: string;
  cropTopPct?: number;
  className?: string;
}) {
  const extraHeightPct = Math.max(100 + cropTopPct, 100);
  const translateYPct = Math.min(cropTopPct, 40);

  return (
    <figure className={clsx("rounded-xl overflow-hidden bg-black", className)}>
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0 w-full"
          style={{ height: `${extraHeightPct}%`, top: `-${translateYPct}%` }}
        >
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={label}
          >
            <source src={src} type={type} />
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

/** Image in a consistent “media frame”.
 * fillMode:
 *  - "cover": fills & crops to the frame (good for alignment)
 *  - "contain": shows the whole image, letterboxes if needed
 */
function MediaShot({
  src,
  alt,
  caption,
  fillMode = "contain",
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  fillMode?: "cover" | "contain";
  className?: string;
}) {
  return (
    <figure
      className={clsx(
        "rounded-xl border border-black/5 bg-neutral-50",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        {/* We use a plain <img> inside the frame so we can switch contain/cover reliably with fill */}
        {/* Next/Image fill also works; this keeps code readable */}
        <Image
          src={src}
          alt={alt}
          fill
          className={clsx(
            "absolute inset-0",
            fillMode === "cover" ? "object-cover" : "object-contain",
            "bg-neutral-100"
          )}
          sizes="(min-width: 1024px) 900px, 100vw"
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

/** Split section with media and text */
function Split({
  title,
  children,
  media,
  reverse = false,
}: {
  title: string;
  children: React.ReactNode;
  media: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="mt-16">
      <div
        className={clsx(
          "grid items-start gap-6 md:gap-10",
          "md:grid-cols-12"
        )}
      >
        <div className={clsx("md:col-span-6", reverse && "md:order-2")}>
          {media}
        </div>
        <div className={clsx("md:col-span-6", reverse && "md:order-1")}>
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="mt-2 text-neutral-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <main>
        <section className="mx-auto max-w-5xl px-6 py-16">
          {/* HERO */}
          <header className="space-y-8">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Fire Weather Dashboard
              </h1>
              <p className="mt-3 text-neutral-600 max-w-prose">
                Rebuilt and redesigned Climformatics’ Fire Weather Dashboard into a
                map-first, shareable tool with progressive controls for variables,
                time windows, and precise locations—designed to ease new users in
                and let power users go deep.
              </p>
            </div>

            {/* Video with masked top bar */}
            <MediaVideo
              src="/videos/fireweather-dashboard-main-demo.mp4"
              poster="/images/fireweatherdashboard/fire-weather-dashboard-after.PNG"
              label="Fire Weather Dashboard — main demo"
              cropTopPct={8}
            />
          </header>

          {/* CONTEXT */}
          <section className="mt-20">
            <h2 className="text-xl font-medium">Context</h2>
            <p className="mt-2 text-neutral-700 max-w-prose">
              The previous dashboard was a cramped, map-centric prototype with scattered
              controls and sparse content blocks. Only a few variables had basic tile color
              maps, interactivity was limited, and the overall signal-to-noise was low.
            </p>

            {/* Aligned before/after: force equal frames & aligned captions */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <MediaShot
                src="/images/fireweatherdashboard/fire-weather-dashboard-before.PNG"
                alt="Original prototype before redesign"
                caption="Before: crowded layout, scattered controls"
                fillMode="cover"
              />
              <MediaShot
                src="/images/fireweatherdashboard/fire-weather-dashboard-after.PNG"
                alt="Redesigned dashboard after improvements"
                caption="After: map-first layout with progressive controls"
                fillMode="cover"
              />
            </div>
          </section>

          {/* GOALS */}
          <section className="mt-16">
            <h2 className="text-xl font-medium">Goals</h2>
            <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
              <li>Make the map the hero; keep supporting features discoverable but unobtrusive.</li>
              <li>Progressive complexity: simple defaults first, deep controls on demand.</li>
              <li>Deep-link shareability and exportable visuals for stakeholder alignment.</li>
              <li>Handle large time-series (365 points) without overwhelming users.</li>
            </ul>
          </section>

          {/* INDIVIDUAL FEATURE SECTIONS (each image stands alone with copy placeholders) */}
          <Split
            title="Side panel controls"
            media={
              <MediaShot
                src="/images/fireweatherdashboard/fire-weather-dashboard-side-panel-controls.PNG"
                alt="Side panel controls"
                caption="Side panel controls"
                fillMode="contain"
              />
            }
          >
            <p>
              Placeholder: describe how the collapsible panel organizes variables, time
              windows, and chart toggles. Mention progressive disclosure and default states.
            </p>
          </Split>

          <Split
            title="Map overlay controls"
            reverse
            media={
              <MediaShot
                src="/images/fireweatherdashboard/fire-weather-dashboard-map-overlay-controls.PNG"
                alt="Map overlay controls"
                caption="Map overlay controls"
                fillMode="contain"
              />
            }
          >
            <p>
              Placeholder: explain overlay/layers (e.g., cameras, power plants) and how the
              checklist interacts with tiles. Note defaults and saved state.
            </p>
          </Split>

          <Split
            title="Time slider for 365-point series"
            media={
              <MediaShot
                src="/images/fireweatherdashboard/fire-weather-dashboard-map-slider.PNG"
                alt="Time slider"
                caption="Time slider for 365-point series"
                fillMode="contain"
              />
            }
          >
            <p>
              Placeholder: call out performance strategy (windowing, debounced updates),
              keyboard/drag affordances, and the way the scale communicates extremes.
            </p>
          </Split>

          <Split
            title="Contextual popup details"
            reverse
            media={
              <MediaShot
                src="/images/fireweatherdashboard/fire-weather-dashboard-popup.PNG"
                alt="Contextual popup details"
                caption="Contextual popup details"
                fillMode="contain"
              />
            }
          >
            <p>
              Placeholder: describe the per-location readout, summary stats, and export /
              deep-link affordances surfaced contextually.
            </p>
          </Split>

          {/* TRADE-OFFS */}
          <section className="mt-20">
            <h2 className="text-xl font-medium">Trade-offs & Decisions</h2>
            <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
              <li><b>Controls visibility vs. map focus:</b> default collapsed; an “Edit” affordance + tooltips mitigate discoverability risk.</li>
              <li><b>Pins vs. legibility:</b> clustering + zoom-based density and a “featured points only” toggle.</li>
              <li><b>Speed to insight vs. depth:</b> opinionated defaults first; a single “More” pattern for power options.</li>
            </ul>
          </section>

          {/* OUTCOME */}
          <section className="mt-16">
            <h2 className="text-xl font-medium">Outcome</h2>
            <p className="mt-2 text-neutral-700 max-w-prose">
              A map-first, shareable dashboard with expanded features and clearer defaults.
              The deep-link URL and chart-export tools simplified internal reviews and public sharing.
            </p>

            {/* Optional secondary demo (kept) */}
            <div className="mt-6">
              <figure className="rounded-xl overflow-hidden bg-black">
                <video
                  className="w-full h-full"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/fireweatherdashboard/fire-weather-dashboard-after.PNG"
                >
                  <source src="/videos/fire-dashboard.webm" type="video/webm" />
                  <source src="/videos/fire-dashboard.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <figcaption className="text-sm text-neutral-300 px-3 py-1 bg-black/60">
                  Result demo / animated walkthrough
                </figcaption>
              </figure>
            </div>
          </section>

          {/* REFLECTION */}
          <section className="mt-16">
            <h2 className="text-xl font-medium">Reflections & Next Steps</h2>
            <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
              <li>Unify tokens across sliders, panels, and overlays; add panel minimize for full-bleed map.</li>
              <li>Explore non-pin selection (lasso/brush) to reduce clutter; revisit popup composition.</li>
              <li>Strengthen responsive patterns across small screens and ultra-wide monitors.</li>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}
