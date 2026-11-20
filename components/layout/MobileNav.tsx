"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <div className="md:hidden">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-[60] p-2 rounded-xl border border-white/10 bg-white/5 text-white"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#050508]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {NAV_LINKS.map((link, i) => {
                const label = language === "vi" ? link.labelVi : link.label;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-2xl sm:text-3xl font-bold text-white hover:text-indigo-400 transition-colors duration-200 py-2.5 px-6"
                  >
                    {label}
                  </motion.button>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: NAV_LINKS.length * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 flex flex-col items-center gap-4"
              >
                {/* Language Switcher inside Mobile Drawer */}
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-sm font-semibold tracking-wider text-slate-300 flex items-center gap-2"
                >
                  <span className={language === "en" ? "text-indigo-400 font-bold" : "text-slate-500"}>
                    English
                  </span>
                  <span className="text-white/20">|</span>
                  <span className={language === "vi" ? "text-indigo-400 font-bold" : "text-slate-500"}>
                    Tiếng Việt
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick("#contact")}
                  className="px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200"
                >
                  {t.nav.hireMe} &rarr;
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
