"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Sparkles, Code2, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { STATS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-4 sm:p-6 text-center glow-indigo"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">{value}</div>
      <div className="text-xs sm:text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        tag={t.about.tag}
        title={t.about.title}
        highlight={t.about.highlight}
        description={t.about.description}
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {/* Main bio — spans 2 cols */}
        <ScrollReveal delay={0.05} className="md:col-span-2">
          <div className="glass rounded-3xl p-5 sm:p-7 md:p-8 h-full border border-white/[0.07] hover:border-indigo-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Code2 size={18} className="text-indigo-400" />
              </div>
              <span className="text-slate-400 text-sm font-medium">{t.about.whoIAm}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
              {t.about.bioTitle}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
              {t.about.bio1}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.about.bio2}
            </p>
          </div>
        </ScrollReveal>

        {/* Location card */}
        <ScrollReveal delay={0.15}>
          <div className="glass rounded-3xl p-5 sm:p-7 md:p-8 h-full border border-white/[0.07] hover:border-purple-500/30 transition-colors duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <MapPin size={18} className="text-purple-400" />
                </div>
                <span className="text-slate-400 text-sm font-medium">{t.about.locationTag}</span>
              </div>
              <p className="text-white font-semibold text-base sm:text-lg">{t.about.locationCity}</p>
              <p className="text-slate-400 text-sm">{t.about.locationCountry}</p>
            </div>
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/[0.06]">
              <p className="text-slate-400 text-xs sm:text-sm">{t.about.remoteNotice}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs sm:text-sm font-medium">
                  {t.about.availableNow}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Currently active projects */}
        <ScrollReveal delay={0.2}>
          <div className="glass rounded-3xl p-5 sm:p-7 md:p-8 border border-white/[0.07] hover:border-indigo-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Layers size={18} className="text-indigo-400" />
              </div>
              <span className="text-slate-400 text-sm font-medium">{t.about.currentlyBuildingTag}</span>
            </div>
            <div className="space-y-3">
              {[
                { name: "AniKenji Streaming Platform", color: "#6366f1" },
                { name: "Cao Bang Geopark Portal", color: "#a855f7" },
                { name: "YokoGoods Digital Marketplace", color: "#818cf8" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-300 text-xs sm:text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Core Values / Facts */}
        <ScrollReveal delay={0.25}>
          <div className="glass rounded-3xl p-5 sm:p-7 md:p-8 border border-white/[0.07] hover:border-purple-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <Sparkles size={18} className="text-purple-400" />
              </div>
              <span className="text-slate-400 text-sm font-medium">{t.about.funFactsTag}</span>
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <p>• {t.about.funFact1}</p>
              <p>• {t.about.funFact2}</p>
              <p>• {t.about.funFact3}</p>
              <p>• {t.about.funFact4}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Gradient accent CTA card */}
        <ScrollReveal delay={0.3}>
          <div className="rounded-3xl p-5 sm:p-7 md:p-8 border border-white/[0.07] bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm flex flex-col justify-between">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.about.ctaCardLine1}
              <br />
              <span className="gradient-text">{t.about.ctaCardHighlight}</span>
              <br />
              {t.about.ctaCardLine2}
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-indigo-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {t.about.ctaCardButton}
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
        {STATS.map((stat, i) => {
          const label = language === "vi" ? stat.labelVi : stat.label;
          return (
            <StatCard key={stat.label} value={stat.value} label={label} delay={i * 0.1} />
          );
        })}
      </div>
    </section>
  );
}
