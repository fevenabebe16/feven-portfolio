import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { profile } from "@/lib/data";
import NetworkCanvas from "./NetworkCanvas";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0">
        <NetworkCanvas />
      </div>

      <div className="section-pad max-content relative z-10 w-full py-32">
        <p className="eyebrow fade-up">
          {profile.location} · Available for AI/ML roles · {profile.availability}
        </p>

        <h1 className="fade-up mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl [animation-delay:80ms]">
          {profile.name}
        </h1>

        <p className="fade-up mt-4 font-mono text-sm uppercase tracking-[0.14em] text-node sm:text-base [animation-delay:140ms]">
          {profile.subtitle}
        </p>

        <p className="fade-up mt-7 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg [animation-delay:200ms]">
          {profile.heroLine}
        </p>

        <div className="fade-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:280ms]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-wide text-base transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            View My Projects
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-borderStrong px-6 py-3 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-node hover:text-node"
          >
            <Download size={14} />
            Download CV
          </a>

          <div className="ml-1 flex items-center gap-3 pl-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-dim transition-colors hover:text-ink"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-dim transition-colors hover:text-ink"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-faint transition-colors hover:text-node"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
