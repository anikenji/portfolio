"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GitFork, Mail, Download } from "lucide-react";
import { SITE } from "@/lib/constants";

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
  return (
    <section
      id="hero"
      className="relative min-h-screen -mt-16 pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            CEO of Kensobanto, Inc.
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-6"
          >
            Building{" "}
            <span className="gradient-text text-glow">Modern</span>
            <br />
            Experiences
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Hi, I&apos;m{" "}
            <span className="text-white font-semibold">{SITE.alias}</span> — a Frontend
            Engineer &amp; DevOps enthusiast, crafting performant web applications
            and pursuing excellence one commit at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              View Projects
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
              className="px-7 py-3.5 rounded-2xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5"
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

            <div className="w-px h-6 bg-white/10" />

            <a
              href="#"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Download size={15} />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
