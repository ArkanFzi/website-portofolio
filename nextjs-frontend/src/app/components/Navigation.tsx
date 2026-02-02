"use client";

import React, { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { clsx } from 'clsx';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = ['Hero', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-[#050000]/80 backdrop-blur-xl border-red-900/30 shadow-[0_4px_30px_rgba(220,20,60,0.1)] py-3" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Glow */}
          <Link
            href="/"
            className="group relative text-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-accent-primary transition-all relative z-10">
              Arkan<span className="text-accent-primary">.dev</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={clsx(
                  "relative px-2 py-1 text-sm font-medium transition-colors group",
                  activeSection === item.toLowerCase() 
                    ? "text-accent-primary" 
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item}
                <span className={clsx(
                  "absolute inset-x-0 -bottom-1 h-0.5 bg-accent-primary transition-transform origin-left duration-300",
                  activeSection === item.toLowerCase() ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}

            {/* GitHub Button */}
            <a
              href="https://github.com/ArkanFzi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-accent-primary/50 transition-all group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-accent-primary transition-colors" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">GitHub</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-red-900/30 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    activeSection === item.toLowerCase()
                      ? "text-accent-primary bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://github.com/ArkanFzi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
