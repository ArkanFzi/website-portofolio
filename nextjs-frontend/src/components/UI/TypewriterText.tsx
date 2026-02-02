"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export function TypewriterText({ text, delay = 0 }: { text: string, delay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      delay: delay,
      ease: "easeInOut",
    });

    return () => {
      clearInterval(cursorInterval);
      controls.stop();
    };
  }, [count, text.length, delay]);

  return (
    <span className="inline-flex">
      <motion.span>{displayText}</motion.span>
      <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-accent-primary ml-1`}>|</span>
    </span>
  );
}
