import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad max-content border-b border-border py-24 sm:py-32">
      <p className="eyebrow">Experience</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Where I've Worked</h2>

      <div className="mt-14 space-y-0">
        {experience.map((e, i) => (
          <div key={e.role} className="relative border-l border-border pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-node bg-base" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{e.role}</h3>
              <span className="font-mono text-xs text-ink-faint">{e.dates}</span>
            </div>
            <p className="mt-1 text-sm text-node">
              {e.org}
              {e.location ? ` · ${e.location}` : ""}
            </p>

            <ul className="mt-4 space-y-2">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
