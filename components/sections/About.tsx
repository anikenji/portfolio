"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Heart, Code2, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { STATS } from "@/lib/constants";

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 text-center glow-indigo"
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeader
        tag="About Me"
        title="Passionate about"
        highlight="great software"
        description="A developer constantly growing, building real-world products and heading towards DevOps mastery."
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Main bio — spans 2 cols */}
        <ScrollReveal delay={0.05} className="md:col-span-2">
          <div className="glass rounded-3xl p-8 h-full border border-white/[0.07] hover:border-indigo-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Code2 size={18} className="text-indigo-400" />
              </div>
              <span className="text-slate-400 text-sm font-medium">Who I am</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Developer, founder &amp; lifelong learner
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m <span className="text-white font-semibold">Bui Cao Phuong</span>, also known as{" "}
              <span className="text-indigo-400 font-medium">Kobayashi Kenji</span>. A university student
              and CEO of <span className="text-purple-400 font-medium">Kensobanto, Inc.</span> with 3+
              years of hands-on experience building web applications and digital products.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My stack revolves around{" "}
              <span className="text-indigo-400 font-medium">Node.js</span>,{" "}
              <span className="text-purple-400 font-medium">Python</span>, and{" "}
              <span className="text-indigo-400 font-medium">JavaScript/React</span>.
              I&apos;m actively pursuing DevOps expertise and love turning ideas into
              production-ready systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Location card */}
        <ScrollReveal delay={0.15}>
          <div className="glass rounded-3xl p-8 h-full border border-white/[0.07] hover:border-purple-500/30 transition-colors duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <MapPin size={18} className="text-purple-400" />
                </div>
                <span className="text-slate-400 text-sm font-medium">Location</span>
              </div>
              <p className="text-white font-semibold text-lg">Ha Noi</p>
              <p className="text-slate-400 text-sm">Vietnam</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-slate-400 text-sm">UTC+7 · Open to remote</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available now</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Currently building */}
        <ScrollReveal delay={0.2}>
          <div className="glass rounded-3xl p-8 border border-white/[0.07] hover:border-indigo-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Zap size={18} className="text-indigo-400" />
              </div>
              <span className="text-slate-400 text-sm font-medium">Currently building</span>
            </div>
            <div className="space-y-3">
              {["AniKenji Platform", "Cao Bang Geopark Portal", "Kensobanto Infrastructure"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: ["#6366f1", "#a855f7", "#818cf8"][i],
                    }}
                  />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Fun facts */}
        <ScrollReveal delay={0.25}>
          <div className="glass rounded-3xl p-8 border border-white/[0.07] hover:border-purple-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <Heart size={18} className="text-purple-400" />
              </div>
              <span className="text-slate-400 text-sm font-medium">Fun facts</span>
            </div>
            <div className="space-y-2.5 text-sm text-slate-400">
              <p>Fascinated by Japanese culture</p>
              <p>University student by day, CEO by night</p>
              <p>DevOps dreamer, code builder</p>
              <p>Alias: Kobayashi Kenji</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Gradient accent card */}
        <ScrollReveal delay={0.3}>
          <div className="rounded-3xl p-8 border border-white/[0.07] bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm flex flex-col justify-between">
            <div className="text-5xl font-bold text-white leading-none">
              Let&apos;s build<br />
              <span className="gradient-text">something</span><br />
              great.
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 text-indigo-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Start a project &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
