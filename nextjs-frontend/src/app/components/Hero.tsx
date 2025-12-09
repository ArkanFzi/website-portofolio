import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-dark-red mb-6">
          M. Arkan Fauzi
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full Stack Developer passionate about creating innovative solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-dark-red hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-dark-red text-dark-red hover:bg-dark-red hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
