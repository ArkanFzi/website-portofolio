"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GlassCard } from "@/components/UI/GlassCard";
import { TiltCard } from "@/components/UI/TiltCard";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  createdDate: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-primary"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} className="h-full">
              <TiltCard className="h-full">
                <GlassCard className="group h-full flex flex-col border-red-900/30 hover:border-accent-primary/50 !transform-none !transition-none" hoverEffect={false}>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-black">
                    <Image
                      src={project.imageUrl || "/placeholder-project.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-accent-primary rounded-full hover:bg-red-500 transition-colors text-white shadow-lg shadow-red-900/50 transform hover:scale-110"
                          title="View Live"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white border border-white/20 transform hover:scale-110"
                          title="View Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-red-900/30">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.split(",").map((tech, index) => (
                          <span
                            key={index}
                            className="bg-accent-dark border border-accent-secondary/50 text-red-200 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
