"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-indigo-800/30" />
        <div className="absolute inset-0 bg-[#050508]/50 backdrop-blur-sm" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-indigo-500/20 blur-[80px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-purple-500/20 blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 py-16 px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to build{" "}
              <span className="gradient-text">something</span>
              <br />
              extraordinary?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Whether it&apos;s a web application, a digital platform, or an innovative idea
              &mdash; let&apos;s bring it to life together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-8 py-4 rounded-2xl bg-white text-black font-bold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start a Conversation
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
              <a
                href="mailto:kobayashikenji126@gmail.com"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                kobayashikenji126@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
