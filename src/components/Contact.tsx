import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: Phone },
  { label: "GitHub", value: "github.com/fevenabebe", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/feven-abebe", href: profile.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad max-content py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 sm:p-14">
        <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-node/5 blur-3xl" />
        <div className="relative">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Open to AI/ML engineering and research opportunities.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-dim sm:text-base">
            Reach out directly — happy to talk about federated learning, health informatics, robotics, or anything
            in between.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-borderStrong px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-node">
              Available {profile.availability}
            </span>
            <span className="rounded-full border border-borderStrong px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
              {profile.careerGoal}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-raised px-5 py-4 transition-colors hover:border-signal"
              >
                <span className="flex items-center gap-3">
                  <c.icon size={17} className="text-node" />
                  <span className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">{c.label}</span>
                    <span className="text-sm text-ink">{c.value}</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
