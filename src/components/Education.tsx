import { GraduationCap, BadgeCheck, Sparkles, ExternalLink } from "lucide-react";
import { education, certifications, languages, qiyasTraining } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-pad max-content border-b border-border py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Education</p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">Academic Background</h2>

          <div className="mt-8 space-y-6">
            {education.map((ed) => (
              <div key={ed.school} className="flex gap-4 rounded-xl border border-border bg-surface p-5">
                <GraduationCap size={20} className="mt-0.5 shrink-0 text-node" />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{ed.degree}</h3>
                  <p className="mt-1 text-sm text-ink-dim">{ed.school}</p>
                  {ed.dates && <p className="mt-1 font-mono text-xs text-ink-faint">{ed.dates}</p>}
                  {ed.detail && <p className="mt-1 font-mono text-xs text-node">{ed.detail}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-6 font-mono text-xs text-ink-faint">
            {languages.map((l) => (
              <span key={l.name}>
                {l.name} <span className="text-ink-dim">— {l.level}</span>
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">Certifications</h2>

          <div className="mt-8 space-y-3">
            {certifications.map((c) => (
              <div key={c.name} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <BadgeCheck size={18} className="mt-0.5 shrink-0 text-signal" />
                <span className="flex flex-col">
                  <span className="text-sm text-ink-dim">{c.name}</span>
                  {c.org && <span className="mt-0.5 font-mono text-[11px] text-ink-faint">{c.org}</span>}
                  {"file" in c && c.file && (
                    <a
                      href={c.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex w-fit items-center gap-1 font-mono text-[11px] text-signal hover:underline"
                    >
                      View certificate <ExternalLink size={11} />
                    </a>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="flex items-center gap-2">
            <Sparkles size={18} className="text-signal" />
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Qiyas Training — {qiyasTraining.program}
            </h3>
          </span>
          <span className="font-mono text-xs text-ink-faint">{qiyasTraining.period}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {qiyasTraining.competencies.map((c) => (
            <span
              key={c}
              className="rounded-md border border-border bg-raised px-2.5 py-1.5 text-sm text-ink-dim"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
