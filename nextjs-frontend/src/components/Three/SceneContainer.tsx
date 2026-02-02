"use client";

import dynamic from 'next/dynamic';
import { HeroObject } from './HeroObject';

// Dynamically import Scene to avoid SSR issues with Three.js
// This configuration is only allowed in Client Components
const Scene = dynamic(() => import('./Scene'), { ssr: false });

export default function SceneContainer() {
  return (
    <Scene>
      <HeroObject />
    </Scene>
  );
}
