"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { language, toggleLanguage, t } = useLanguage();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);

    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    let found = "";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) {
        found = id;
      }
    }

    setActiveSection(found);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-[100] h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "mx-auto mt-2 sm:mt-3 mb-0 transition-all duration-500 pointer-events-auto",
          "w-[94%] sm:w-[92%] max-w-4xl px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl",
          scrolled ? "liquid-glass" : "bg-transparent"
        )}
      >
        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold text-lg tracking-tight"
          >
            <span className="gradient-text">AniKenji.</span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              const label = language === "vi" ? link.labelVi : link.label;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "relative px-3.5 py-1.5 text-sm font-medium rounded-xl transition-all duration-200",
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl border border-white/10 hover:border-indigo-500/40 bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 text-slate-300"
              aria-label="Toggle language"
              title={language === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
            >
              <span className={language === "en" ? "text-indigo-400 font-bold" : "text-slate-400"}>
                EN
              </span>
              <span className="text-white/20 text-[10px]">|</span>
              <span className={language === "vi" ? "text-indigo-400 font-bold" : "text-slate-400"}>
                VI
              </span>
            </button>

            {/* CTA button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 backdrop-blur-sm text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 border border-indigo-400/20"
            >
              {t.nav.hireMe}
              <span className="text-xs">&rarr;</span>
            </a>

            {/* Mobile Nav */}
            <MobileNav />
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
