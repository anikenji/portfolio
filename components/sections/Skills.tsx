"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Zap,
  Accessibility,
  Palette,
  FlaskConical,
  FileCode,
  Atom,
  Triangle,
  Hexagon,
  Terminal,
  Container,
  Server,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { SKILLS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Map string names to Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  FileCode,
  Atom,
  Triangle,
  Hexagon,
  Terminal,
  Container,
  Server,
  GitBranch,
};

const TECH_STACK = [
  { name: "JavaScript", icon: "FileCode" },
  { name: "React", icon: "Atom" },
  { name: "Next.js", icon: "Triangle" },
  { name: "Node.js", icon: "Hexagon" },
  { name: "Python", icon: "Terminal" },
  { name: "Docker", icon: "Container" },
  { name: "Linux", icon: "Server" },
  { name: "Git", icon: "GitBranch" },
];

const APPROACH = [
  {
    icon: Zap,
    title: "Performance first",
    desc: "Core Web Vitals, bundle analysis & lazy loading.",
    color: "#6366f1",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    desc: "WCAG 2.1 compliant, keyboard navigable UIs.",
    color: "#a855f7",
  },
  {
    icon: Palette,
    title: "Design-minded",
    desc: "Close collaboration with designers, pixel-perfect output.",
    color: "#818cf8",
  },
  {
    icon: FlaskConical,
    title: "Test-driven",
    desc: "Unit, integration, and E2E coverage with Vitest & Playwright.",
    color: "#c084fc",
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={animated ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function TechBadge({
  name,
  iconName,
  delay,
}: {
  name: string;
  iconName: string;
  delay: number;
}) {
  const Icon = ICON_MAP[iconName];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="glass rounded-2xl px-5 py-4 flex flex-col items-center gap-2 border border-white/[0.08] hover:border-indigo-500/40 cursor-default transition-colors duration-300"
    >
      {Icon ? (
        <Icon size={24} className="text-indigo-400" />
      ) : (
        <span className="text-2xl text-indigo-400">{iconName}</span>
      )}
      <span className="text-xs text-slate-400 font-medium">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Skills & Tools"
          title="My technical"
          highlight="expertise"
          description="A curated set of technologies I use to build fast, reliable, and beautiful products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <ScrollReveal delay={0.05}>
            <div className="glass rounded-3xl p-8 border border-white/[0.07]">
              <h3 className="text-lg font-semibold text-white mb-8">Proficiency</h3>
              <div className="space-y-6">
                {SKILLS.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: approach + badges */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-3xl p-8 border border-white/[0.07]">
                <h3 className="text-lg font-semibold text-white mb-4">My Approach</h3>
                <div className="space-y-4">
                  {APPROACH.map(({ icon: Icon, title, desc, color }) => (
                    <div key={title} className="flex gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `${color}15`,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{title}</p>
                        <p className="text-slate-400 text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Tech badges */}
            <ScrollReveal delay={0.15}>
              <div className="glass rounded-3xl p-8 border border-white/[0.07]">
                <h3 className="text-lg font-semibold text-white mb-6">Tech Stack</h3>
                <div className="grid grid-cols-4 gap-3">
                  {TECH_STACK.map((tech, i) => (
                    <TechBadge
                      key={tech.name}
                      name={tech.name}
                      iconName={tech.icon}
                      delay={i * 0.06}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
