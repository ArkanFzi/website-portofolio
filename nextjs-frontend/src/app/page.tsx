

import dynamic from 'next/dynamic';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SceneContainer from "@/components/Three/SceneContainer";
import { ScrollProgress } from '@/components/UI/ScrollProgress';
import Cursor from '@/components/UI/Cursor';
import Preloader from '@/components/UI/Preloader';
import VideoBackground from '@/components/UI/VideoBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative text-foreground selection:bg-accent-primary/50 selection:text-white">
      <Preloader />
      <VideoBackground />
      <ScrollProgress />
      <Cursor />
      
      <SceneContainer />

      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
