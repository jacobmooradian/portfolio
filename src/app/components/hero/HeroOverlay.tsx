"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const SceneCanvas = dynamic(() => import("../SceneCanvas"), { ssr: false });

export default function HeroOverlay() {
  const pathname = usePathname(); // remount canvas on each route

  return (
    <section className="relative">
      {/* BACKGROUND 3D on the right, behind text */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden md:block overflow-visible">
        {/* Only positioning here */}
        <div className="md:translate-x-[18%] md:-translate-y-[15%]">
          {/* Only sizing here (stable box across routes) */}
          <div className="relative md:w-[min(55vw,900px)] md:h-[70vh] lg:h-[78vh]">
            <SceneCanvas key={`canvas-${pathname}`} />
          </div>
        </div>
      </div>

      {/* FOREGROUND TEXT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24">
        <div className="max-w-[58ch] md:max-w-[62ch] lg:max-w-[56ch] md:pr-16">
          <h1 className="text-6xl font-semibold tracking-[-0.02em] text-balance">
            Jacob Mooradian
          </h1>
          <p className="mt-5 text-xl text-neutral-700 text-pretty">
            With a background in full-stack engineering, I design human-centered
            interfaces that bring clarity to complexity. My work focuses on turning
            high-volume weather and geospatial data into visually compelling,
            intuitive experiences that empower decision-making.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View projects</a>
            <a href="/resume.pdf" className="btn-ghost">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}