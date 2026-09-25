import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section-pad max-content flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
      <p className="font-mono text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs text-ink-faint">Built with Next.js &amp; Tailwind CSS</p>
    </footer>
  );
}
