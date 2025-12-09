import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-red shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-bold text-xl hover:text-gray-200 transition duration-300"
            >
              Portfolio
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition duration-300 font-medium"
            >
              About Me
            </Link>
            <Link
              href="/project"
              className="text-white hover:text-gray-200 transition duration-300 font-medium"
            >
              Project
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 transition duration-300 font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
