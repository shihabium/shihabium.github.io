"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
      style={{
        scaleX,
      }}
    />
  );
}