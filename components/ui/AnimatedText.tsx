"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "chars" | "words" | "lines";
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  type = "words",
  tag: Tag = "h2",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items =
    type === "chars"
      ? text.split("")
      : type === "words"
        ? text.split(" ")
        : text.split("\n");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "chars" ? 0.02 : 0.06,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 40,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div ref={ref} style={{ perspective: "1000px" }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={cn("flex flex-wrap", className)}
        aria-label={text}
      >
        {items.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            variants={child}
            className="inline-block origin-bottom"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Tag className="inline">
              {item}
              {type !== "chars" && type !== "lines" && i < items.length - 1
                ? "\u00A0"
                : ""}
            </Tag>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

// Counter animation component
export function AnimatedCounter({
  target,
  suffix = "",
  className,
}: {
  target: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountUp target={target} />
          {suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  );
}

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function step(time: number) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}
