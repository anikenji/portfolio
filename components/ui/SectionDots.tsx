"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState("");
  const { language } = useLanguage();

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Find the section that is most visible or the last one scrolled past
            if (visibleSections.size > 0) {
              // Pick the one with highest ratio, or if tie, pick the one furthest down the page
              let best = "";
              let bestRatio = 0;
              for (const [sectionId, ratio] of visibleSections) {
                if (ratio > bestRatio || (ratio === bestRatio && sectionIds.indexOf(sectionId) > sectionIds.indexOf(best))) {
                  best = sectionId;
                  bestRatio = ratio;
                }
              }
              setActiveSection(best);
            }
          });
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75],
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Fallback: also listen to scroll for edge cases
    const handleScroll = () => {
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

      if (found) {
        setActiveSection(found);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
    >
      {NAV_LINKS.map((link) => {
        const id = link.href.replace("#", "");
        const isActive = activeSection === id;
        const label = language === "vi" ? link.labelVi : link.label;

        return (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            aria-label={`Scroll to ${label}`}
            className="group relative flex items-center"
          >
            {/* Label tooltip on hover + active */}
            <span
              className={cn(
                "absolute right-6 whitespace-nowrap text-xs font-medium transition-all duration-200",
                isActive
                  ? "opacity-100 translate-x-0 text-indigo-400"
                  : "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 text-slate-400"
              )}
            >
              {label}
            </span>

            {/* Dot */}
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                isActive
                  ? "bg-indigo-500 scale-[1.4] shadow-lg shadow-indigo-500/50"
                  : "bg-white/20 hover:bg-white/40 scale-100"
              )}
            />
          </button>
        );
      })}
    </motion.div>
  );
}
