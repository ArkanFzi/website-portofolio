"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const CHARS = "!@#$%^&*():{};|,.<>/?~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [text]);

  return (
    <motion.h1
      onMouseEnter={scramble}
      className={className}
    >
      {displayText}
    </motion.h1>
  );
};
