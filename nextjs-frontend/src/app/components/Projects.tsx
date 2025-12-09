"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-red mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl || "/placeholder-project.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-red mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.split(",").map((tech, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dark-red hover:bg-red-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
