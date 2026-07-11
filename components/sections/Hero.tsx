"use client";
import { useEffect, useState } from "react";
import { getContent } from "@/services/contentService";
import { defaultHero } from "@/content/defaultHero";
import FadeUp from "@/components/motion/FadeUp";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const stats = [
  { value: "4+", label: "Projects" },
  { value: "2023", label: "Started Coding" },
  { value: "24/7", label: "Learning" },
];

export default function Hero() {
  const [hero, setHero] = useState(defaultHero);

const [loading, setLoading] = useState(true);

useEffect(() => {
  loadHero();
}, []);

async function loadHero() {
  try {
    const result = await getContent("hero");

    if (result?.data) {
      setHero(result.data);
    }
  } finally {
    setLoading(false);
  }
}

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-white/50">Loading...</p>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[150px]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-20 px-8 pt-24 lg:flex-row">

        {/* Left */}
        <FadeUp>
        <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex animate-[glow_6s_ease-in-out_infinite] items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 shadow-lg shadow-green-500/10">

              <span className="h-3 w-3 animate-[glow_6s_ease-in-out_infinite] rounded-full bg-green-400" />

              <span className="text-xs font-semibold uppercase tracking-[3px] text-green-300 sm:text-sm">
                {hero.badge}
              </span>

            </div>

          <h1 className="mt-8 text-6xl font-black leading-[0.95] text-white md:text-8xl">
            Hi,
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              I'm {hero.name}
            </span>
          </h1>

          <div className="mt-8">

        {/* Hero Title */}

        <h2 className="text-3xl font-bold text-violet-300">
          {hero.title}
        </h2>

        {/* Typewriter */}

        <div className="mt-4 min-h-[40px] text-xl font-medium text-cyan-300">

          <TypeAnimation
            sequence={hero.typewriter.flatMap((item: string) => [
              item,
              1800,
            ])}
            speed={50}
            repeat={Infinity}
            cursor
          />

        </div>

      </div>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
            {hero.description}
          </p>

            <div className="mt-6 flex flex-wrap gap-3">
            {(hero.highlights ?? []).map((item: string) => (
              <span
                key={item}
                className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
              >
                {item}
              </span>
            ))}
          </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

          <a
            href="#projects"
            aria-label="View my projects"
            className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/40"
          >
            View Projects
          </a>
          <a
            href={hero.resume}
            aria-label="Download my CV"
            className="rounded-full border border-violet-500/40 bg-white/5 px-8 py-4 font-semibold text-violet-300 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-600 hover:text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            aria-label="Contact me"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Contact Me
          </a>

        </div>

        <div className="mt-8 min-h-[64px] sm:min-h-[52px]">

          <a
            href={hero.github}
            aria-label="Visit my GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg"
          >
            GitHub
          </a>

          <a
            href={hero.facebook}
            aria-label="Visit my Facebook profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg"
          >
            Facebook
          </a>

          <a
            href={hero.linkedin}
            aria-label="Visit my LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg"
          >
            LinkedIn
          </a>

        </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/20"
              >
                <h3 className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-3xl font-black text-transparent">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
        </FadeUp>

        {/* Right */}
      <FadeUp delay={0.3}>
      <div className="relative animate-[float_6s_ease-in-out_infinite]">

      {/* Purple Orb */}

        <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-violet-600/30 blur-[90px] animate-[glow_6s_ease-in-out_infinite]" />

        {/* Cyan Orb */}

        <div className="absolute -right-10 bottom-16 h-44 w-44 rounded-full bg-cyan-500/30 blur-[100px] animate-[glow_6s_ease-in-out_infinite]" />

        {/* Pink Orb */}

        <div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/15 blur-[120px]"
          style={{
            animation: "float 8s ease-in-out infinite",
          }}
        />

          {/* OUTER GLOW */}

          <div className="absolute -inset-8 rounded-[60px] bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-cyan-500/20 blur-[90px]" />

      {/* Premium Border */}

        <div className="group relative rounded-[42px] p-[2px]">

          <div
            className="absolute inset-0 rounded-[42px] bg-[conic-gradient(from_180deg_at_50%_50%,#8b5cf6,#06b6d4,#d946ef,#8b5cf6)] opacity-70 blur-md transition duration-700 group-hover:opacity-100"
            style={{
              animation: "spin 10s linear infinite",
            }}
          />

          <div className="relative rounded-[42px] bg-[#050816] p-[2px]">
            
            {/* GLASS CARD */}

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.06] backdrop-blur-3xl transition-all duration-500">

              {/* Image */}

              <Image
                src={hero.image || "/images/profile.png"}
                alt="Shihab"
                width={520}
                height={700}
                priority
                quality={100}
                className="rounded-[38px] object-cover transition-all duration-700 hover:scale-[1.04] hover:rotate-[0.8deg]"
              />

            </div>

          </div>
        </div>
       
       </div>
      </FadeUp>

      </div>
      
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-white/40 transition hover:text-violet-300"
        >
          <span className="text-xs tracking-[6px]">
            SCROLL
          </span>

          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>

        </a>

      </div>

    </section>
  );
}