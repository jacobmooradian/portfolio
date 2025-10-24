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
                    Hey, I’m Jacob — I design and build weather intelligence tools.
                    I work in climate tech, where I turn high-resolution forecasts into
                    dashboards, APIs, and decision surfaces that real people actually
                    use. I care a lot about making complex systems feel easy to
                    understand and act on.
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
                    I’m a software engineer who focuses on building what needs to get done —
                    from the infrastructure up to the interface. I own the design process as part
                    of the full product cycle, shaping not just how things work, but how they feel to use.
                    My work often spans backend services, data pipelines, and front-end experiences,
                    but no matter what layer I’m working in, I’m always thinking about the end user.
                </p>

                <p className="text-neutral-700 leading-relaxed">
                    Some days that means writing clean, well-documented backend code so our systems stay
                    reliable and readable for whoever picks it up next. Other days it’s designing a new
                    interface, thinking through interaction flows, or refining copy so information feels
                    intuitive. I value clarity — in code, in visuals, and in how teams understand what
                    we’re building and why.
                </p>

                <p className="text-neutral-700 leading-relaxed">
                    I spend a lot of time considering the audience for whatever I’m building —
                    whether it’s an internal dashboard for our engineers or a tool for a client
                    making real-world decisions. I prototype quickly, test early, and iterate
                    based on meaningful feedback. Every project is an opportunity to make
                    something that feels more obvious, more usable, and more aligned with
                    how people actually think.
                </p>

                <p className="text-neutral-700 leading-relaxed">
                    Here are a few examples of what that process looks like in practice —
                    the kinds of problems I design, build, and iterate on day-to-day:
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
                    The part I like most is shaping how information shows up — deciding what matters,
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

            {/* --- DESIGN PHILOSOPHY / HCI ANGLE --- */}
            <section className="mt-16 space-y-6">
                <h2 className="text-xl font-medium text-neutral-900">
                    How I approach design
                </h2>

                <p className="text-neutral-700 leading-relaxed">
                    Most of what I build is used to make real decisions — planning operations,
                    preparing for risk, or responding to forecasted conditions before they
                    actually happen. That means the interface isn’t just “nice to have.”
                    It directly affects how people act.
                </p>

                <p className="text-neutral-700 leading-relaxed">
                    Because of that, I try to design and build in a way that supports decision-making,
                    not just data viewing:
                </p>

                <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
                    <li>
                        <span className="font-medium text-neutral-900">
                            Reduce the cognitive load.
                        </span>{" "}
                        My first job is to make it obvious what matters right now. I spend a lot of
                        time on hierarchy, copy, and visual rhythm so users can scan a dashboard
                        and immediately understand risk, timing, and priority — without having to
                        interpret a wall of numbers.
                    </li>

                    <li>
                        <span className="font-medium text-neutral-900">
                            Close the loop with the people using it.
                        </span>{" "}
                        I get feedback early and often from the people who rely on these tools,
                        and I iterate until it feels natural for them. The goal is that clients
                        and internal teams can navigate dashboards, services, and alerts without
                        needing a walkthrough — they should understand what the system can do,
                        and how to act on it.
                    </li>

                    <li>
                        <span className="font-medium text-neutral-900">
                            Be honest about what the system is saying.
                        </span>{" "}
                        Forecasts are probabilistic. Alerts can create urgency. I try to present
                        information with the right level of confidence and intent — clear,
                        up-to-date, and grounded in actual model output. If we say something is
                        high risk, it’s traceable to the data and it’s communicated in plain
                        language.
                    </li>
                </ul>

                <p className="text-neutral-700 leading-relaxed">
                    I like when something looks simple because the complexity was handled on
                    purpose — not hidden.
                </p>
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
                    I like long walks, long debug sessions, and aggressively clean UI.
                    I’m happiest when I’m building something real with people who care.
                </p>

                {/* lifestyle / vibe image placeholder */}
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center text-neutral-400 text-sm leading-relaxed">
                    <div className="aspect-[3/1] w-full rounded-lg bg-neutral-200/60" />
                    <p className="mt-3">
                        Placeholder for desk setup / city / “this is where I think.”
                    </p>
                </div>
            </section>
        </main>
    );
}