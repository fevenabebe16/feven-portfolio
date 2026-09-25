"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-base/85 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-pad max-content flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-wide text-ink">
          FA<span className="text-signal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-wide uppercase text-ink-dim transition-colors hover:text-node"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-borderStrong px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:border-signal hover:text-signal"
        >
          <Download size={13} strokeWidth={2} />
          CV
        </a>

        <button
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-base/95 backdrop-blur-md">
          <ul className="section-pad flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-mono text-sm uppercase tracking-wide text-ink-dim hover:text-node"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-borderStrong px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink"
              >
                <Download size={13} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
