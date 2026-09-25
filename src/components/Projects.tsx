import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad max-content border-b border-border py-24 sm:py-32">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Featured Projects</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-ink-faint">
          Each project below expands into the problem, approach, and what I specifically built or investigated.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {other.length > 0 && (
        <div className="mt-20">
          <p className="eyebrow">More Projects</p>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {other.map((p) => (
              <div key={p.slug} className="bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-ink-faint">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
