"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <ScrollReveal delay={index * 0.12}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "glass rounded-3xl border border-white/[0.08] overflow-hidden group cursor-pointer",
          "transition-[border-color,box-shadow] duration-300",
          hovered && "border-indigo-500/30 shadow-2xl shadow-indigo-500/10"
        )}
      >
        {/* Card header — colored band */}
        <div
          className={cn(
            "relative h-48 bg-gradient-to-br flex items-center justify-center overflow-hidden",
            project.gradient
          )}
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Abstract geometric decoration */}
          <div
            className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-20 blur-2xl"
            style={{ background: project.color }}
          />
          <div
            className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full opacity-10 blur-xl"
            style={{ background: project.color }}
          />

          {/* Window chrome mockup */}
          <div className="relative w-[75%] bg-black/40 rounded-xl border border-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 rounded-full bg-white/20 w-3/4" />
              <div className="h-1.5 rounded-full bg-white/10 w-full" />
              <div className="h-1.5 rounded-full bg-white/15 w-5/6" />
              <div className="h-1.5 rounded-full bg-white/10 w-2/3" />
            </div>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 border border-white/20 text-[10px] text-white font-semibold backdrop-blur-sm">
              Featured
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-7" style={{ transform: "translateZ(10px)" }}>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                style={{
                  borderColor: `${project.color}40`,
                  color: project.color,
                  background: `${project.color}10`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.link}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              <GitFork size={14} />
              Source
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Projects"
          title="Things I've"
          highlight="built"
          description="A selection of real-world projects that demonstrate my technical range and design sensibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 hover:border-indigo-500/50 bg-white/5 hover:bg-indigo-500/10 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Projects
              <ExternalLink size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
