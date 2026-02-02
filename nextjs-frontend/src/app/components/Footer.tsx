"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/80 backdrop-blur-md border-t border-red-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Arkan<span className="text-accent-primary">.dev</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting immersive digital experiences with cutting-edge technologies. 
              Focused on performance, security, and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/ArkanFzi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-full hover:bg-accent-primary hover:text-white text-gray-400 transition-all border border-white/10"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all border border-white/10"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:arkan@example.com"
                className="p-2 bg-white/5 rounded-full hover:bg-red-500 hover:text-white text-gray-400 transition-all border border-white/10"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} M. Arkan Fauzi. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Built with  using Next.js & .NET 9
          </p>
        </div>
      </div>
    </footer>
  );
}
