"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Layers,
  Zap,
  Server,
  Smartphone,
  CheckCircle2,
  FileCode,
  Atom,
  Triangle,
  Hexagon,
  Terminal,
  Container,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { TECH_STACK } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/language-context";

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

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "custom-website": LayoutTemplate,
  "fullstack-app": Layers,
  "redesign-perf": Zap,
  "deployment-maintenance": Server,
  "mobile-app": Smartphone,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag={t.services.tag}
          title={t.services.title}
          highlight={t.services.highlight}
          description={t.services.description}
        />

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {t.services.items.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || LayoutTemplate;
            // First item spans 2 columns on large screens for a dynamic Bento look
            const isFeatured = index === 0;

            return (
              <ScrollReveal
                key={service.id}
                delay={index * 0.08}
                className={isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
              >
                <div
                  className="glass rounded-3xl p-6 sm:p-8 h-full border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  style={{
                    boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 10px 40px -10px ${service.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Background ambient glow */}
                  <div
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: service.color }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${service.color}18`,
                          border: `1px solid ${service.color}35`,
                        }}
                      >
                        <Icon size={22} style={{ color: service.color }} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border"
                        style={{
                          borderColor: `${service.color}30`,
                          color: service.color,
                          background: `${service.color}0c`,
                        }}
                      >
                        <CheckCircle2 size={11} className="opacity-80" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Compact Tech Stack Bar */}
        <ScrollReveal delay={0.25}>
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                {t.services.techStackTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Modern tools · High performance · Reliable deployment
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {TECH_STACK.map((tech, i) => {
                const Icon = ICON_MAP[tech.icon];
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="glass rounded-2xl px-3 py-3 flex flex-col items-center gap-1.5 border border-white/[0.06] hover:border-indigo-500/40 transition-colors duration-200"
                  >
                    {Icon ? (
                      <Icon size={20} className="text-indigo-400" />
                    ) : (
                      <span className="text-lg text-indigo-400">{tech.icon}</span>
                    )}
                    <span className="text-xs text-slate-400 font-medium text-center truncate max-w-full">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
