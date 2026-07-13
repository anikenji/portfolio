"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
    <header className="sticky top-0 z-50 w-full">
      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-[100] h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "mx-auto mt-3 mb-0 transition-all duration-500",
          "w-[92%] max-w-4xl px-5 py-2.5 rounded-2xl",
          scrolled
            ? "liquid-glass"
            : "bg-transparent"
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
            <span className="gradient-text">KK.</span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/80 hover:bg-indigo-500/90 backdrop-blur-sm text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 border border-indigo-400/20"
          >
            Hire Me
            <span className="text-xs">&rarr;</span>
          </a>

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </motion.nav>
    </header>
  );
}
