"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'React', 'Next.js', '.NET 8', 'PostgreSQL', 
  'TypeScript', 'C#', 'Tailwind', 'Three.js',
  'Docker', 'Azure', 'Git', 'Redis',
  'Node.js', 'Python', 'Rest API', 'GraphQL'
];

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ camera }) => {
    // Make text always face the camera
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Float position={position.toArray()} speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        ref={ref}
        fontSize={0.5}
        color="#DC143C" // Crimson
        anchorX="center"
        anchorY="middle"
        characters="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
        font="/fonts/Geist-Bold.ttf" // We might need to handle font loading, or use default
      >
        {children}
        <meshStandardMaterial attach="material" color="#DC143C" emissive="#500000" />
      </Text>
    </Float>
  );
}

export function TechCloud() {
  const words = useMemo(() => {
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (skills.length + 1);
    const thetaSpan = (Math.PI * 2) / skills.length;
    
    return skills.map((skill, i) => {
      // Distribute on a sphere
      return {
        word: skill,
        position: new THREE.Vector3().setFromSpherical(
          spherical.set(4, phiSpan * (i + 1), thetaSpan * i)
        )
      };
    });
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Slow rotation
    }
  });

  return (
    <group ref={groupRef}>
      {words.map(({ word, position }, i) => (
        <Word key={i} position={position}>{word}</Word>
      ))}
    </group>
  );
}
