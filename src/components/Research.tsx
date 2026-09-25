import { researchArea, publications } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="section-pad max-content border-b border-border py-24 sm:py-32">
      <p className="eyebrow">Research</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Research Focus</h2>

      <div className="relative mt-12 overflow-hidden rounded-2xl border border-signal-dim/50 bg-gradient-to-br from-raised to-surface p-8 sm:p-10">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(242,164,92,0.12),transparent_65%)]" />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
              {researchArea.area}
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink">
              {researchArea.title}
            </h3>
            <span className="mt-4 inline-block rounded-full border border-borderStrong px-3 py-1 font-mono text-[11px] text-ink-faint">
              {researchArea.status}
            </span>
          </div>

          <div className="lg:col-span-8">
            <p className="text-sm leading-relaxed text-ink-dim sm:text-base">{researchArea.description}</p>

            <div className="mt-6 border-t border-border pt-6">
              <h4 className="eyebrow">Methodology</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{researchArea.methodology}</p>
            </div>

            {publications.length > 0 && (
              <div className="mt-6 border-t border-border pt-6">
                <h4 className="eyebrow">Publications</h4>
                <div className="mt-3 space-y-4">
                  {publications.map((pub) => (
                    <div key={pub.title}>
                      <p className="text-sm font-medium leading-snug text-ink">{pub.title}</p>
                      <p className="mt-1 font-mono text-[11px] text-ink-faint">{pub.authors}</p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-signal">{pub.venue}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-dim">{pub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
