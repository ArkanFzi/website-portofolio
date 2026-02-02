"use client";

import { Canvas } from '@react-three/fiber';
import { Stars, Preload } from '@react-three/drei';
import { Suspense } from 'react';

interface SceneProps {
  children?: React.ReactNode;
}

export default function Scene({ children }: SceneProps) {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Optimize pixel ratio
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {children}
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
