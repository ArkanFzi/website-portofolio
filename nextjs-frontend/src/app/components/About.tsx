import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-red mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-dark-red mb-4">
              Hi, I am M. Arkan Fauzi
            </h3>
            <p className="text-gray-600 mb-6">
              I am a passionate Full Stack Developer with expertise in creating
              innovative web solutions. I love turning ideas into reality
              through clean, efficient code and user-friendly designs.
            </p>
            <p className="text-gray-600 mb-6">
              With a strong foundation in both frontend and backend
              technologies, I enjoy tackling complex problems and delivering
              high-quality applications that make a difference.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                TypeScript
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                Python
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl text-dark-red">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
