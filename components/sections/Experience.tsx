"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

function TimelineItem({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-8 group">
      {/* Timeline line & dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-12 h-12 rounded-2xl border-2 flex items-center justify-center"
          style={{
            borderColor: `${item.color}60`,
            background: `${item.color}15`,
          }}
        >
          <Briefcase size={18} style={{ color: item.color }} />
        </motion.div>
        {/* Vertical connecting line */}
        {index < EXPERIENCE.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            className="w-px bg-gradient-to-b from-white/20 to-transparent absolute top-14"
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 glass rounded-3xl p-7 border border-white/[0.07] hover:border-white/[0.15] transition-all duration-300 mb-8 group-hover:shadow-lg"
        style={{
          boxShadow: `0 0 0 0 ${item.color}00`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${item.color}15`;
          e.currentTarget.style.borderColor = `${item.color}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 0 ${item.color}00`;
          e.currentTarget.style.borderColor = `rgba(255,255,255,0.07)`;
        }}
      >
        {/* Period badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
          style={{
            background: `${item.color}15`,
            color: item.color,
            border: `1px solid ${item.color}30`,
          }}
        >
          {item.period}
        </div>

        {/* Role & Company */}
        <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
        <p className="text-sm font-medium mb-3" style={{ color: item.color }}>
          {item.company}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Experience"
          title="My professional"
          highlight="journey"
          description="From university student to CEO — a timeline of growth, learning, and building."
        />

        <div className="relative mt-12">
          {EXPERIENCE.map((item, index) => (
            <TimelineItem key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
