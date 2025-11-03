// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About | Jacob Mooradian",
    description:
        "Product-minded engineer focused on weather-driven decision tools, interface design, and human-centered systems.",
};

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            {/* --- INTRO HEADER --- */}
            <header>
                <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
                    About
                </h1>

                <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
                    Hey, I’m Jacob! I build and design weather intelligence tools at a climate tech
                    startup called Climformatics. I turn high resolution forecasts and weather indices
                    into digestable formats through dashboards, APIs and tools that real people use. I
                    care a lot about transforming complex data into easy to read information that
                    benefits everyone.
                </p>

                {/* Headshot / Hero image placeholder */}
                <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-neutral-300 bg-neutral-200">
                        <Image
                            src="/images/jacob_headshot.jpeg"
                            alt="Jacob headshot"
                            width={560}
                            height={560}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <p className="text-sm text-neutral-500 leading-relaxed">
                        I do product, design, and engineering. I like being responsible
                        for something end-to-end.
                    </p>
                </div>
            </header>

            {/* --- WHAT I DO / CURRENT WORK --- */}
            <section className="mt-12 space-y-6">
                <h2 className="text-xl font-medium text-neutral-900">What I work on</h2>

                <p className="text-neutral-700 leading-relaxed">
                    I’m a software engineer, where my main focus lies on building things from 0 to 1.
                    My work spans across the entire tech stack, from infrastructure to interface. In my
                    current position, I own the entire design process as a part of our product cycle. I
                    get to shape how things work and feel. Even though my work spans across backend services,
                    data pipelines, or wiring up the front-end experience, I always think about the end user.
                </p>

                <p className="text-neutral-700 leading-relaxed">
                    Some days that means I am writing clean documentation or designing a new interface,
                    but the mentality remains the same; Whatever I am creating will always be in mind for
                    the person using it. Clarity and usability will always come first.
                </p>

                <p className="text-neutral-700 leading-relaxed">
                    Ultimately, I end up spending a lot of time considering my audience. If it's internal,
                    I am thinking about how engineers will navigate my code. For my clients, I am
                    considering what gaps users may fall into or if the application feels nice to use.
                    I translate these thoughts into prototyping, testing and iterating quickly through
                    meaningful feedback. Every project I work on is an opportunity to build up these skills
                    and align myself with how humans interact with technology.
                </p>

                <p className="text-neutral-700 leading-relaxed">
                    Here are a few examples of what that process actually looks like in practice:
                </p>

                <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
                    <li>
                        Designing interactive forecast dashboards that help businesses answer
                        questions like “How much heat stress are we expecting this week?” or
                        “Where should we send crews first?”
                    </li>
                    <li>
                        Prototyping flows and layouts, testing them with stakeholders, then
                        translating those decisions into production UI.
                    </li>
                    <li>
                        Building the backend services so the interface is powered by real forecast
                        data — not mock data — and is fast enough to be trusted in the field.
                    </li>
                    <li>
                        Iterating based on direct feedback (“this number doesn’t mean anything to
                        me”) and adjusting copy, thresholds, and visual hierarchy until it does.
                    </li>
                </ul>

                <p className="text-neutral-700 leading-relaxed">
                    The part I like most is shaping how information shows up: deciding what matters,
                    what can wait, and what needs to feel urgent.
                </p>

                {/* Screenshot / Product UI placeholder */}
                <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
                        <Image
                            src="/images/about_bestday2marry_dashboard.png"
                            alt="Weather intelligence dashboard preview"
                            width={1600} // put the real pixel width of your screenshot here
                            height={900} // put the real pixel height of your screenshot here
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>

                    <p className="mt-3 text-center text-neutral-400 text-sm leading-relaxed">
                        The production dashboard users interact with to view forecast insights for their chosen venue and date.
                    </p>
                </div>
            </section>

            {/* --- EXPERIENCE TIMELINE --- */}
            <section className="mt-20">
                <h2 className="text-xl font-medium text-neutral-900">Experience</h2>

                <p className="mt-4 text-neutral-700 leading-relaxed">
                    A quick view of what I’ve been building and the kinds of problems I’ve owned.
                </p>

                <ol className="mt-10 space-y-10 border-l border-neutral-200 pl-4">
                    {/* TIMELINE ITEM 1 */}
                    <li className="relative flex gap-4">
                        {/* dot */}
                        <span className="absolute left-[-10px] top-[6px] h-2.5 w-2.5 rounded-full border border-neutral-300 bg-white shadow-sm" />

                        {/* spacer column so text doesn't collide with the dot */}
                        <div className="w-4 shrink-0" />

                        {/* content */}
                        <div className="flex flex-col gap-1">
                            <div className="text-sm text-neutral-500">2024 — Present</div>

                            <div className="text-base font-semibold text-neutral-900">
                                Software Engineer @ Climformatics
                            </div>

                            <div className="text-sm text-neutral-700 leading-relaxed">
                                Lead the design and development of weather intelligence dashboards and data
                                services used for planning, forecasting, and operational risk assessment.
                            </div>

                            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 leading-relaxed space-y-1.5">
                                <li>
                                    Designed and launched <em>BestDay2Marry</em>, a public-facing product
                                    turning climate forecasts into accessible planning insights.
                                </li>
                                <li>
                                    Led UX and information design for multiple client dashboards, focusing on
                                    clear visual hierarchies, interactive map layouts, and data storytelling.
                                </li>
                                <li>
                                    Partnered with clients to refine visual language and feature priorities
                                    based on real user feedback and operational needs.
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* TIMELINE ITEM 2 */}
                    <li className="relative flex gap-4">
                        {/* dot */}
                        <span className="absolute left-[-10px] top-[6px] h-2.5 w-2.5 rounded-full border border-neutral-300 bg-white shadow-sm" />

                        {/* spacer column */}
                        <div className="w-4 shrink-0" />

                        {/* content */}
                        <div className="flex flex-col gap-1">
                            <div className="text-sm text-neutral-500">
                                October 2023 — April 2024
                            </div>

                            <div className="text-base font-semibold text-neutral-900">
                                Software Engineer Intern @ Climformatics
                            </div>

                            <div className="text-sm text-neutral-700 leading-relaxed">
                                Built early prototypes for new climate analytics products and internal
                                visualization tools.
                            </div>

                            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 leading-relaxed space-y-1.5">
                                <li>
                                    Created an MVP weather analytics dashboard used for investor demos and
                                    partner working sessions.
                                </li>
                                <li>
                                    Designed interactive data exploration views and produced early
                                    wireframes that helped define the product roadmap.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </section>

            {/* --- PERSONAL NOTE --- */}
            <section className="mt-20 space-y-6">
                <h2 className="text-xl font-medium text-neutral-900">
                    Outside of work
                </h2>

                <p className="text-neutral-700 leading-relaxed">
                    I love to stay active whether I'm walking or running around SF. I am
                    currently training to run my first marathon! Other than that, I enjoy
                    cooking, playing games, or reading about history.
                </p>
            </section>
        </main>
    );
}