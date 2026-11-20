"use client";

import { motion } from "framer-motion";
import { MessageSquareText, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/lib/language-context";

const STEP_ICONS = [MessageSquareText, PenTool, Code2, Rocket];

export default function WorkProcess() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag={t.process.tag}
          title={t.process.title}
          highlight={t.process.highlight}
          description={t.process.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {t.process.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] || MessageSquareText;

            return (
              <ScrollReveal key={step.step} delay={index * 0.1} className="h-full">
                <div className="glass rounded-3xl p-6 sm:p-7 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden">
                  {/* Subtle step ambient glow */}
                  <div
                    className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: step.color }}
                  />

                  <div>
                    {/* Step badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${step.color}18`,
                          border: `1px solid ${step.color}35`,
                        }}
                      >
                        <Icon size={20} style={{ color: step.color }} />
                      </div>
                      <span className="text-xl font-mono font-bold text-slate-500 group-hover:text-indigo-400 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Step {index + 1} of 4</span>
                    {index < 3 && (
                      <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
