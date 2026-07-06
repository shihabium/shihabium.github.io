"use client";

import FadeUp from "@/components/motion/FadeUp";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import AuroraBackground from "../effects/AuroraBackground";

const stats = [
  { value: "4", label: "Projects" },
  { value: "Pending", label: "Articles" },
  { value: "9", label: "Years Learning" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">
      <AuroraBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-20 px-8 pt-24 lg:flex-row">

        {/* Left */}
        <FadeUp>
        <div className="max-w-2xl text-center lg:text-left">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm tracking-[5px] text-violet-300">
            THINK • BUILD • SHARE
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none text-white md:text-8xl">
            Hi,
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              I'm Shihab
            </span>
          </h1>

          <div className="mt-8 h-10 text-2xl font-semibold text-violet-300">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 2000,
                "AI Enthusiast", 2000,
                "UI/UX Designer", 2000,
                "Content Creator", 2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-lg leading-9 text-white/70">
            Building beautiful digital products and sharing ideas
            about AI, Programming, Business and Technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">
            <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white hover:scale-105 transition">
              Explore Blog
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 text-white hover:bg-white/10 transition">
              View Projects
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            {["GitHub", "Facebook", "LinkedIn"].map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-violet-600 transition"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-white">
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
        <div className="relative">

          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-violet-600/40 via-fuchsia-500/20 to-cyan-500/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

            <Image
              src="/images/profile.png"
              alt="Shihab"
              width={520}
              height={700}
              priority
              className="rounded-[30px] object-cover transition duration-500 hover:scale-105"
            />

          </div>

        </div>
        </FadeUp>

      </div>
    </section>
  );
}