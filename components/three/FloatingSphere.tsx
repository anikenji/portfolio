"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export function FloatingSphere() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5.5;
  const baseScale = isMobile ? Math.min(0.55, viewport.width / 5.5) : 1;

  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Base rotation
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.18;

    // Scroll-linked: scale down and move up as user scrolls
    const targetScale = (1 - scrollProgress * 0.5) * baseScale;
    const currentScale = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      0.05
    );
    groupRef.current.scale.setScalar(currentScale);

    // Scroll-linked: shift position
    const targetY = isMobile
      ? 0.3 + scrollProgress * 2
      : scrollProgress * 3;
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.05
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      isMobile ? 0 : Math.sin(scrollProgress * Math.PI) * 1.5,
      0.05
    );

    // Scroll-linked: opacity/color shift
    const distortAmount = (isMobile ? 0.3 : 0.45) + scrollProgress * 0.2;
    const material = meshRef.current.material as THREE.MeshStandardMaterial & { distort: number };
    if (material && "distort" in material) {
      material.distort = distortAmount;
    }

    // Animate rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.3;
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.2;
      ring2Ref.current.rotation.y = Math.cos(t * 0.3) * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.15;
      ring3Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.4) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={isMobile ? 0.2 : 0.4} floatIntensity={isMobile ? 0.4 : 0.8}>
        <Sphere ref={meshRef} args={[1, 128, 128]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={isMobile ? 0.3 : 0.45}
            speed={isMobile ? 1.8 : 2.5}
            roughness={0.15}
            metalness={0.7}
            emissive="#4338ca"
            emissiveIntensity={isMobile ? 0.2 : 0.3}
          />
        </Sphere>

        {/* Ring 1 - main orbit */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.015, 16, 100]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={isMobile ? 0.3 : 0.5} />
        </mesh>

        {/* Ring 2 - tilted */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[1.75, 0.008, 16, 100]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={isMobile ? 0.2 : 0.3} />
        </mesh>

        {/* Ring 3 - wide orbit */}
        <mesh ref={ring3Ref} rotation={[Math.PI / 5, Math.PI / 4, Math.PI / 8]}>
          <torusGeometry args={[2.0, 0.006, 16, 100]} />
          <meshBasicMaterial color="#c084fc" transparent opacity={isMobile ? 0.12 : 0.2} />
        </mesh>

        {/* Small orbiting spheres - only on larger viewports so they don't cover text on mobile */}
        {!isMobile && (
          <>
            <OrbitingDot radius={1.6} speed={0.8} color="#818cf8" size={0.04} offset={0} />
            <OrbitingDot radius={1.8} speed={-0.6} color="#a855f7" size={0.03} offset={Math.PI} />
            <OrbitingDot radius={2.05} speed={0.4} color="#c084fc" size={0.035} offset={Math.PI / 2} />
          </>
        )}
      </Float>
    </group>
  );
}

function OrbitingDot({
  radius,
  speed,
  color,
  size,
  offset,
}: {
  radius: number;
  speed: number;
  color: string;
  size: number;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 2) * 0.15;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}
