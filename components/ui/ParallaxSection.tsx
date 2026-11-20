"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Floating gradient blobs */}
      <ParallaxBlob
        scrollYProgress={scrollYProgress}
        className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-indigo-600/[0.04] blur-[100px]"
        speed={0.3}
      />
      <ParallaxBlob
        scrollYProgress={scrollYProgress}
        className="absolute -bottom-24 -right-16 w-[400px] h-[400px] rounded-full bg-purple-600/[0.04] blur-[80px]"
        speed={-0.2}
      />

      {/* Grid lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

function ParallaxBlob({
  scrollYProgress,
  className,
  speed,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  className: string;
  speed: number;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

  return (
    <motion.div
      className={className}
      style={{ y }}
    />
  );
}
