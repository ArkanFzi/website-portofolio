"use client";

import React from "react";
import { GlassCard } from "@/components/UI/GlassCard";
import { Code2, Server, Database, BrainCircuit, User } from "lucide-react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-white"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-12 border-red-900/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-8 h-8 text-accent-primary" />
                  <h3 className="text-2xl font-semibold text-white">
                    M. Arkan Fauzi
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I am a dedicated <span className="text-accent-primary font-semibold">Software Engineer</span> focused on building scalable backend architectures and immersive frontend experiences.
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With deep expertise in modern stacks like <span className="text-white">.NET</span> and <span className="text-white">Next.js</span>, I solve complex business challenges through clean, maintainable, and efficient code.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Architecture', icon: Code2, color: 'text-red-400' },
                    { name: 'Security', icon: Server, color: 'text-red-500' },
                    { name: 'Database Optimization', icon: Database, color: 'text-red-400' },
                    { name: 'Cloud Solutions', icon: BrainCircuit, color: 'text-white' }
                  ].map((tag, idx) => (
                    <motion.span 
                      key={tag.name} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="flex items-center gap-2 bg-red-950/30 border border-red-900/30 px-4 py-2 rounded-full text-sm text-gray-200"
                    >
                      <tag.icon className={`w-4 h-4 ${tag.color}`} />
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="text-center relative">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-black rounded-full blur-3xl opacity-30 animate-pulse" />
                  <div className="relative w-full h-full bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(220,20,60,0.2)]">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
