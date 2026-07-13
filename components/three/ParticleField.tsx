"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 350;

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const { positions, colors, originalPositions, speeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const originalPositions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);

    const palette = [
      new THREE.Color("#6366f1"),
      new THREE.Color("#a855f7"),
      new THREE.Color("#818cf8"),
      new THREE.Color("#c084fc"),
      new THREE.Color("#4f46e5"),
    ];

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 12;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      speeds[i] = 0.5 + Math.random() * 1.5;
    }
    return { positions, colors, originalPositions, speeds };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    const posArr = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    // Scroll-linked: spread particles outward as user scrolls
    const spread = 1 + scrollProgress * 0.8;
    const drift = scrollProgress * 2;

    for (let i = 0; i < COUNT; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];
      const s = speeds[i];

      posArr[i * 3] =
        ox * spread + Math.sin(t * s * 0.3 + i) * 0.15;
      posArr[i * 3 + 1] =
        oy * spread +
        Math.cos(t * s * 0.2 + i * 0.5) * 0.1 +
        drift;
      posArr[i * 3 + 2] =
        oz * spread + Math.sin(t * s * 0.25 + i * 0.3) * 0.12;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Slow rotation
    pointsRef.current.rotation.y = t * 0.012;
    pointsRef.current.rotation.x = Math.sin(t * 0.006) * 0.08;

    // Scroll-linked opacity
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.opacity = 0.65 - scrollProgress * 0.3;
    mat.size = 0.045 + scrollProgress * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
