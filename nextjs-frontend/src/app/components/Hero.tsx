"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowRight, MousePointer2 } from "lucide-react";
import { AnimatedText } from "@/components/UI/AnimatedText";
import { TypewriterText } from "@/components/UI/TypewriterText";
// import { ScrambleText } from "@/components/UI/ScrambleText";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="text-center px-4 z-10 pt-20">
        
        <div className="mb-6 flex justify-center">
          <AnimatedText 
            text="M. Arkan Fauzi" 
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-white to-accent-primary drop-shadow-[0_0_15px_rgba(220,20,60,0.5)]"
          />
        </div>
        
        <div className="h-20 md:h-24 mb-6">
          <p className="text-xl md:text-3xl text-gray-200 font-light tracking-wide flex justify-center gap-2 items-center flex-wrap">
            I Engineer <span className="font-bold text-red-500 bg-red-950/30 px-2"><TypewriterText text="High-Performance Systems" delay={1} /></span>
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4"
        >
          {/* Magnetic Start Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-accent-primary border border-accent-secondary text-white font-bold text-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(220,20,60,0.4)] hover:shadow-[0_0_50px_rgba(220,20,60,0.7)] flex items-center gap-3"
          >
            <span className="relative z-10">Start Exploring</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
            
            {/* Gloss Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" />
          </motion.a>
          
          {/* Magnetic GitHub Button */}
          <motion.a
            href="https://github.com/ArkanFzi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all font-semibold backdrop-blur-sm flex items-center gap-3"
          >
            <Github className="w-6 h-6 group-hover:text-accent-primary transition-colors" />
            <span>GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <MousePointer2 className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;
