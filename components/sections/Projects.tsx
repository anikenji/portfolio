"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, GitFork, Image as ImageIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  featured: boolean;
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { t } = useLanguage();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
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
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "glass rounded-3xl border border-white/[0.08] overflow-hidden group cursor-pointer h-full flex flex-col",
          "transition-[border-color,box-shadow] duration-300",
          hovered && "border-indigo-500/40 shadow-2xl shadow-indigo-500/10"
        )}
      >
        {/* Real Image Container with Hover Zoom & Fallback Placeholder */}
        <div
          className="relative h-52 sm:h-60 w-full overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950/40 flex items-center justify-center border-b border-white/[0.06]"
          style={{ transform: "translateZ(20px)" }}
        >
          {!imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            /* Fallback Mockup Placeholder if file not yet dropped into public/projects/ */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-950/50 via-slate-900 to-purple-950/40">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 text-indigo-400 group-hover:scale-110 transition-transform">
                <ImageIcon size={22} />
              </div>
              <p className="text-xs text-slate-400 font-medium tracking-wide">
                Preview Screenshot
              </p>
              <p className="text-[11px] text-slate-600 mt-1 font-mono">
                {project.image}
              </p>
            </div>
          )}

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/30 pointer-events-none" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 border border-white/20 text-indigo-300 backdrop-blur-md shadow-lg">
              {project.category}
            </span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-indigo-600/80 border border-indigo-400/40 text-[10px] text-white font-semibold backdrop-blur-md shadow-lg">
              Featured
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(10px)" }}>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/[0.08] bg-white/[0.03] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  {t.projects.liveDemo}
                </a>
              ) : null}

              <a
                href="https://github.com/anikenji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                <GitFork size={14} />
                {t.projects.source}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag={t.projects.tag}
          title={t.projects.title}
          highlight={t.projects.highlight}
          description={t.projects.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.projects.items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="https://github.com/anikenji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl border border-white/20 hover:border-indigo-500/50 bg-white/5 hover:bg-indigo-500/10 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              {t.projects.viewAll}
              <ExternalLink size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
