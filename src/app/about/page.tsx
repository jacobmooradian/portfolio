// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jacob Mooradian",
  description: "Learn more about Jacob—work, interests, and what this site is about.",
};

export default function AboutPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-6 text-lg text-neutral-700">
          Hey! I’m Jacob—full-stack engineer building at the intersection of climate, data, and playful UX.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-medium">What I’m into</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>GCP infra, APIs, and data plumbing.</li>
            <li>React/Next.js, motion design, interactive visuals.</li>
            <li>Applied ML for climate & consumer services.</li>
          </ul>
        </section>
      </main>
    </>
  );
}