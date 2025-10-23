import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "./projects";

export const metadata = { title: "Projects" };

export default function ProjectsIndex() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <main>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((p: Project) => (
              <article key={p.slug} className="glass p-5 hover:translate-y-[-2px] transition">
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

                  <h3 className="mt-4 font-medium group-hover:underline underline-offset-4">
                    {p.title}
                  </h3>
                </Link>

                <p className="text-sm text-neutral-600 mt-1">{p.summary}</p>
                <Link href={`/projects/${p.slug}`} className="link mt-3 inline-block">
                  Open case study →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}