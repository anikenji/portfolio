import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          Built with{" "}
          <span className="text-indigo-400">Next.js</span>,{" "}
          <span className="text-purple-400">Three.js</span> &{" "}
          <span className="text-indigo-400">Framer Motion</span>
        </p>
        <p>&copy; 2026 {SITE.alias}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
