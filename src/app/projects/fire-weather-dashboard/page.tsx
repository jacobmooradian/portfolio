import Image from "next/image";

export const metadata = {
    title: "Fire Weather Dashboard — Case Study",
    description: "Rebuilt and redesigned a real-time dashboard for exploring fire-weather data.",
};

export default function Page() {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <main>
                {/* HERO */}
                <section className="mx-auto max-w-5xl px-6 py-16 space-y-20">

                    {/* HERO & SUMMARY */}
                    <header>
                        <h1 className="text-3xl font-semibold tracking-tight">Fire Weather Dashboard</h1>
                        <p className="mt-3 text-neutral-600 max-w-prose">
                            Rebuilt and redesigned Climformatics’ Fire Weather Dashboard into a map-first, shareable tool with
                            progressive controls for variables, time windows, and precise locations—designed to ease new users in and let power users go deep.
                        </p>

                        {/* Placeholder visual */}
                        <div className="mt-8 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-400">
                            <span>Video / hero screenshot placeholder</span>
                        </div>
                    </header>

                    {/* CONTEXT */}
                    <section>
                        <h2 className="text-xl font-medium">Context</h2>
                        <p className="mt-2 text-neutral-700 max-w-prose">
                            The previous dashboard was a cramped, map-centric prototype with scattered controls and sparse content blocks.
                            Only a few variables had basic tile color maps, interactivity was limited, and the overall signal-to-noise was low.
                        </p>

                        {/* Before/after placeholders */}
                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                            <div className="aspect-video rounded-lg bg-neutral-100 grid place-items-center text-neutral-400">
                                <span>“Before” screenshot</span>
                            </div>
                            <div className="aspect-video rounded-lg bg-neutral-100 grid place-items-center text-neutral-400">
                                <span>“After” screenshot</span>
                            </div>
                        </div>
                    </section>

                    {/* GOALS */}
                    <section>
                        <h2 className="text-xl font-medium">Goals</h2>
                        <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
                            <li>Make the map the hero; keep supporting features discoverable but unobtrusive.</li>
                            <li>Progressive complexity: simple defaults first, deep controls on demand.</li>
                            <li>Deep-link shareability and exportable visuals for stakeholder alignment.</li>
                            <li>Handle large time-series (365 points) without overwhelming users.</li>
                        </ul>
                    </section>

                    {/* PROCESS */}
                    <section>
                        <h2 className="text-xl font-medium">Process</h2>

                        <div className="mt-4 space-y-8">
                            <div>
                                <h3 className="font-medium">Audit & Information Architecture</h3>
                                <p className="mt-1 text-neutral-700 max-w-prose">
                                    Consolidated scattered controls, redesigned layout so content frames the map, and defined a progressive
                                    disclosure model for advanced settings.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium">Interaction & Visual Design</h3>
                                <p className="mt-1 text-neutral-700 max-w-prose">
                                    Introduced a collapsible control panel, contextual detail views, standardized color maps, and motion
                                    primitives that reinforce hierarchy. Figma mocks aligned the team on key flows.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium">Engineering</h3>
                                <ul className="mt-1 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
                                    <li>Full rewrite into modular components (map, variables, time nav, charts, pins/clusters).</li>
                                    <li>Leaflet + plotting library integration for rapid prototyping, then perf and a11y refinements.</li>
                                    <li>Tile strategy + standardized color scales across variables.</li>
                                    <li>Progressive loading for time-series; windowed rendering for large datasets.</li>
                                    <li>Deep-link URLs and chart export (PNG) for social and stakeholder sharing.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Process visual placeholder */}
                        <div className="mt-6 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-400">
                            <span>IA diagram / control variants / color scales</span>
                        </div>
                    </section>

                    {/* TRADE-OFFS */}
                    <section>
                        <h2 className="text-xl font-medium">Trade-offs & Decisions</h2>
                        <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1 max-w-prose">
                            <li><b>Controls visibility vs. map focus:</b> default collapsed; “Edit” affordance + tooltips mitigate discoverability risk.</li>
                            <li><b>Pins vs. legibility:</b> clustering + zoom-based density and a “featured points only” toggle.</li>
                            <li><b>Speed to insight vs. depth:</b> opinionated defaults first; a single “More” pattern for power options.</li>
                        </ul>
                    </section>

                    {/* OUTCOME */}
                    <section>
                        <h2 className="text-xl font-medium">Outcome</h2>
                        <p className="mt-2 text-neutral-700 max-w-prose">
                            A map-first, shareable dashboard with expanded features and clearer defaults. The deep-link URL and
                            chart-export tools simplified internal reviews and public sharing.
                        </p>
                        <div className="mt-4 grid md:grid-cols-3 gap-3">
                            <div className="rounded-lg border border-black/5 p-4 text-sm">
                                <div className="font-medium">Shareability</div>
                                <div className="mt-1 text-neutral-700">Deep links + PNG export for precise states.</div>
                            </div>
                            <div className="rounded-lg border border-black/5 p-4 text-sm">
                                <div className="font-medium">Scalability</div>
                                <div className="mt-1 text-neutral-700">Standardized tiles & color maps for all variables.</div>
                            </div>
                            <div className="rounded-lg border border-black/5 p-4 text-sm">
                                <div className="font-medium">Usability</div>
                                <div className="mt-1 text-neutral-700">Progressive controls reduce overwhelm.</div>
                            </div>
                        </div>
                        {/* Outcome visual placeholder */}
                        <div className="mt-6 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-neutral-400">
                            <span>Result demo / animated walkthrough</span>
                        </div>
                    </section>

                    {/* REFLECTION */}
                    <section>
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