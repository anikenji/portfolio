"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TESTIMONIALS = [
  {
    text: "Kenji's technical skills and attention to detail are exceptional. He delivered our platform ahead of schedule.",
    author: "Client Project",
    role: "Web Application",
    color: "#6366f1",
  },
  {
    text: "The Cao Bang Geopark portal perfectly captures the beauty and heritage of our region. Outstanding work.",
    author: "Tourism Portal",
    role: "Cao Bang Geopark",
    color: "#a855f7",
  },
  {
    text: "AniKenji has become our go-to anime streaming platform. The UX is smooth and intuitive.",
    author: "AniKenji Users",
    role: "Streaming Platform",
    color: "#818cf8",
  },
  {
    text: "A true full-stack developer who understands both frontend elegance and backend reliability.",
    author: "Kensobanto Team",
    role: "Internal Review",
    color: "#c084fc",
  },
  {
    text: "His drive to learn DevOps and infrastructure shows in the quality of his deployment pipelines.",
    author: "Tech Collaboration",
    role: "DevOps Project",
    color: "#6366f1",
  },
  {
    text: "Kenji brings a unique blend of Japanese-inspired precision and Vietnamese creativity to every project.",
    author: "Partner Feedback",
    role: "Collaboration",
    color: "#a855f7",
  },
];

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof TESTIMONIALS;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left" ? [0, -50 * items.length * 6] : [-50 * items.length * 6, 0],
        }}
        transition={{
          x: {
            duration: speed * items.length,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 border border-white/[0.06] w-[350px] flex-shrink-0 hover:border-white/[0.15] transition-colors duration-300"
          >
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              &ldquo;{item.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: `${item.color}30`, border: `1px solid ${item.color}50` }}
              >
                {item.author[0]}
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{item.author}</p>
                <p className="text-slate-500 text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />
    </div>
  );
}

export default function Testimonials() {
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3);

  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Testimonials"
          title="What people"
          highlight="say"
          description="Feedback and highlights from projects and collaborations."
        />
      </div>

      <div className="mt-12 space-y-2">
        <MarqueeRow items={firstRow} direction="left" speed={8} />
        <MarqueeRow items={secondRow} direction="right" speed={10} />
      </div>
    </section>
  );
}
