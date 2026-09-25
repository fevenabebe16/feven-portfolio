import { skills } from "@/lib/data";

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="section-pad max-content border-b border-border py-24 sm:py-32">
      <p className="eyebrow">Capabilities</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Technical Skills</h2>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([group, items]) => (
          <div key={group}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-node">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-sm text-ink-dim transition-colors hover:border-node-dim hover:text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
