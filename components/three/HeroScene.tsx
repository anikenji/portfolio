"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { Suspense } from "react";
import { FloatingSphere } from "./FloatingSphere";
import { ParticleField } from "./ParticleField";
import { GeometricShapes } from "./GeometricShapes";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#6366f1" />
        <pointLight position={[-5, -3, -5]} intensity={1.2} color="#a855f7" />
        <spotLight
          position={[0, 8, 3]}
          intensity={1.5}
          color="#818cf8"
          angle={0.5}
          penumbra={1}
        />
        <Suspense fallback={null}>
          <ParticleField />
          <FloatingSphere />
          <GeometricShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
