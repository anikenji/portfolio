"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GitFork, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-24 pb-12 sm:pt-16 sm:pb-0 flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] rounded-full bg-indigo-600/10 blur-[90px] sm:blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg shadow-indigo-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.badge}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight text-white mb-5 sm:mb-6"
          >
            {t.hero.titleLine1}{" "}
            <span className="gradient-text text-glow">{t.hero.titleHighlight}</span>
            <br />
            {t.hero.titleLine2}
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mb-8 sm:mb-10 leading-relaxed px-2 font-normal"
          >
            {t.hero.subHeadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto text-center group px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              {t.hero.viewProjects}
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-2xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              {t.hero.startProject}
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <GitFork size={18} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>{t.hero.scroll}</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
