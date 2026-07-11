"use client";

import { useEffect, useState } from "react";

type Particle = {
  width: number;
  height: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 18 }).map(() => ({
      width: 2 + Math.random() * 5,
      height: 2 + Math.random() * 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 8,
      opacity: 0.25 + Math.random() * 0.5,
    }));

    setParticles(data);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/30"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}