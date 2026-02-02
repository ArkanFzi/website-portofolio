"use client";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate constantly
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Move slightly with mouse (parallax feel) based on pointer
      const { x, y } = state.pointer;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 0.5, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 0.5, 0.1);
    }
  });

  return (
    <Float
      speed={4} 
      rotationIntensity={1} 
      floatIntensity={2}
    >
      <mesh
        ref={meshRef}
        scale={hovered ? 2.2 : 2}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={hovered ? "#DC143C" : "#500000"} // Crimson on hover, Dark Red default
          attach="material"
          distort={0.6} // Strength of distortion
          speed={2} // Speed of distortion
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}
