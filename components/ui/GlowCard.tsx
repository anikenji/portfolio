"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(99, 102, 241, 0.4)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative group rounded-3xl overflow-hidden", className)}
    >
      {/* Animated border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />

      {/* Rotating conic gradient border */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div
          className="absolute inset-[-2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${glowColor}, transparent, ${glowColor}, transparent)`,
          }}
        />
      </div>

      {/* Inner content */}
      <div className="relative z-10 rounded-3xl bg-[#0a0a0f] m-[1px]">
        {children}
      </div>
    </div>
  );
}
