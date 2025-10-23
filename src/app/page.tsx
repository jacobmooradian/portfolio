import Link from "next/link";
import Image from "next/image";

import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">

      <main>
        <Hero />

        {/* WORK */}
        <section id="projects" className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold tracking-tight">Selected Projects</h2>
            <span className="text-sm text-neutral-500">Design × Engineering</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fire Weather Dashboard */}
            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <Link href="/projects/fire-weather-dashboard" className="block group">
                {/* VIDEO COVER */}
                <div className="aspect-video w-full overflow-hidden rounded-md relative bg-black">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/fire-dashboard-poster.jpg"
                    preload="metadata"
                  >
                    <source src="/videos/fire-dashboard.webm" type="video/webm" />
                    <source src="/videos/fire-dashboard.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <span className="absolute bottom-2 left-2 text-[11px] px-2 py-1 rounded bg-black/50 text-white">
                    20s preview
                  </span>
                </div>

                <h3 className="mt-4 font-medium group-hover:underline underline-offset-4">
                  Fire Weather Dashboard
                </h3>
              </Link>

              <p className="text-sm text-neutral-600 mt-1">
                Rebuilt and redesigned a real-time dashboard for exploring fire-weather data.
              </p>
              <Link href="/projects/fire-weather-dashboard" className="link mt-3 inline-block">
                Open case study →
              </Link>
            </article>

            {/* BestDay2Marry */}
            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <Link href="/projects/bestday2marry" className="block group">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-neutral-100 relative">
                  <Image
                    src="/images/bd2m_logo12.png"
                    alt="BestDay2Marry Logo"
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                <h3 className="mt-4 font-medium group-hover:underline underline-offset-4">
                  BestDay2Marry
                </h3>
              </Link>

              <p className="text-sm text-neutral-600 mt-1">
                Created a platform delivering year-ahead weather insights for weddings and events.
              </p>
              <Link href="/projects/bestday2marry" className="link mt-3 inline-block">
                Open case study →
              </Link>
            </article>

            {/* Climformatics — Company Website */}
            <article className="glass p-5 hover:translate-y-[-2px] transition">
              <Link href="/projects/climformatics-website" className="block group">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-white relative p-6">
                  <Image
                    src="/images/climformatics_inc_logo.jpeg"
                    alt="Climformatics — company logo"
                    fill
                    className="object-contain"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    priority={false}
                  />
                </div>

                <h3 className="mt-4 font-medium group-hover:underline underline-offset-4">
                  Climformatics — Company Website
                </h3>
              </Link>

              <p className="text-sm text-neutral-600 mt-1">
                Redesigned and optimized the company site for a modern, cohesive brand.
              </p>
              <Link href="/projects/climformatics-website" className="link mt-3 inline-block">
                Open case study →
              </Link>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}