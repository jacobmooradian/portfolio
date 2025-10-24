import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "./projects";

export const metadata = { title: "Projects" };

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="glass p-5 hover:translate-y-[-2px] transition">
      <Link href={`/projects/${p.slug}`} className="block group">
        <div className="aspect-video w-full overflow-hidden rounded-md relative">
          {p.cover.kind === "video" ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={p.cover.poster}
              preload="metadata"
            >
              {p.cover.webm ? <source src={p.cover.webm} type="video/webm" /> : null}
              <source src={p.cover.mp4} type="video/mp4" />
            </video>
          ) : (
            <div className={`absolute inset-0 ${p.cover.bg ?? "bg-neutral-100"}`}>
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                fill
                className="object-contain"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              />
            </div>
          )}
        </div>
        <h3 className="mt-4 font-medium group-hover:underline underline-offset-4">{p.title}</h3>
      </Link>
      <p className="text-sm text-neutral-600 mt-1">{p.summary}</p>
      <Link href={`/projects/${p.slug}`} className="link mt-3 inline-block">
        Open case study →
      </Link>
    </article>
  );
}

export default function ProjectsIndex() {
  const featuredTop3 = projects.filter(p => p.featured).slice(0, 3);
  const featuredSlugs = new Set(featuredTop3.map(p => p.slug));
  const others = projects.filter(p => !featuredSlugs.has(p.slug));

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">Highlighted Projects</h1>
        <p className="text-neutral-600 mt-1">A couple of handpicked projects I have worked on</p>

        {/* Featured */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {featuredTop3.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* More projects */}
      {others.length > 0 && (
        <section>
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-lg font-medium tracking-tight">More projects</h2>
            <span className="text-sm text-neutral-500">{others.length}</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </section>
      )}
    </main>
  );
}