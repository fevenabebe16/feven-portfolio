"use client";

import { useState, useId } from "react";
import { Plus, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-node-dim ${
        open ? "border-node-dim" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-node/0 blur-2xl transition-colors duration-500 group-hover:bg-node/10" />

      <div className="relative p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
          {(project.repo || project.demo) && (
            <a
              href={project.repo ?? project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-ink-faint transition-colors hover:text-node"
              aria-label={`Open repository for ${project.name}`}
            >
              <Github size={16} />
            </a>
          )}
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-ink-faint"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-signal transition-opacity hover:opacity-80"
        >
          {open ? "Hide details" : "View project"}
          {open ? <ArrowUpRight size={13} className="rotate-90 transition-transform" /> : <Plus size={13} />}
        </button>

        <div
          id={panelId}
          className={`grid transition-all duration-300 ease-out ${
            open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-5 border-t border-border pt-6">
              <div>
                <h4 className="eyebrow">Problem</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.problem}</p>
              </div>
              <div>
                <h4 className="eyebrow">Approach</h4>
                <ul className="mt-2 space-y-1.5">
                  {project.approach.map((a) => (
                    <li key={a} className="flex gap-2 text-sm leading-relaxed text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-node-dim" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="eyebrow">My Contribution</h4>
                <ul className="mt-2 space-y-1.5">
                  {project.contribution.map((c) => (
                    <li key={c} className="flex gap-2 text-sm leading-relaxed text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
