"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  geometry,
  color,
  speed,
  rotationSpeed,
  scale = 1,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "torusKnot" | "dodecahedron";
  color: string;
  speed: number;
  rotationSpeed: number;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * rotationSpeed;
    ref.current.rotation.y = t * rotationSpeed * 0.7;
    ref.current.rotation.z = t * rotationSpeed * 0.3;
  });

  const getGeometry = () => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[0.5 * scale, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.5 * scale, 0]} />;
      case "torus":
        return <torusGeometry args={[0.4 * scale, 0.15 * scale, 16, 32]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.35 * scale, 0.1 * scale, 64, 8]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[0.45 * scale, 0]} />;
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

export function GeometricShapes() {
  return (
    <group>
      <FloatingShape
        position={[-4, 2, -3]}
        geometry="icosahedron"
        color="#6366f1"
        speed={1.2}
        rotationSpeed={0.15}
        scale={1.2}
      />
      <FloatingShape
        position={[4.5, -1, -2]}
        geometry="octahedron"
        color="#a855f7"
        speed={0.8}
        rotationSpeed={0.2}
        scale={0.9}
      />
      <FloatingShape
        position={[-3, -2.5, -4]}
        geometry="dodecahedron"
        color="#818cf8"
        speed={1.5}
        rotationSpeed={0.12}
        scale={0.7}
      />
      <FloatingShape
        position={[3.5, 3, -5]}
        geometry="torus"
        color="#c084fc"
        speed={1}
        rotationSpeed={0.18}
        scale={1}
      />
      <FloatingShape
        position={[-5, 0, -6]}
        geometry="torusKnot"
        color="#6366f1"
        speed={0.6}
        rotationSpeed={0.1}
        scale={0.8}
      />
    </group>
  );
}
