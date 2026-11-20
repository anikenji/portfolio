"use client";

import { SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-4 sm:px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
        <p>
          Designed & Built with{" "}
          <span className="text-indigo-400">Next.js</span>,{" "}
          <span className="text-purple-400">Three.js</span> &{" "}
          <span className="text-indigo-400">Tailwind</span>
        </p>
        <p>
          &copy; {new Date().getFullYear()} {SITE.brandName} ({SITE.fullName}). {t.footer.rights}
        </p>
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
            href={SITE.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="Zalo"
          >
            Zalo
          </a>
          <a
            href={SITE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="Telegram"
          >
            Telegram
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
