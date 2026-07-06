"use client";

import FadeUp from "@/components/motion/FadeUp";

const experiences = [
  {
    year: "2026",
    title: "Building My Personal Brand",
    description:
      "Developing premium portfolio websites, AI tools and modern web experiences.",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description:
      "Learning Next.js, React, TypeScript and backend development.",
  },
  {
    year: "2024",
    title: "Python & AI Journey",
    description:
      "Started learning Python, automation and Artificial Intelligence.",
  },
  {
    year: "2023",
    title: "Programming Journey Started",
    description:
      "Began learning programming, problem solving and web technologies.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-6xl px-8">

        <FadeUp>
          <div className="mb-20 text-center">

            <p className="uppercase tracking-[6px] text-violet-400">
              EXPERIENCE
            </p>

            <h2 className="mt-4 text-5xl font-black">
              My Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              Every year represents a new milestone in my learning and development.
            </p>

          </div>
        </FadeUp>

        <div className="relative">

          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400" />

          {experiences.map((item, index) => (
            <FadeUp key={item.year} delay={index * 0.15}>
              <div className="relative mb-16 flex gap-8">

                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 shadow-lg shadow-violet-600/40">
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-white/10">

                  <span className="text-sm font-semibold uppercase tracking-[3px] text-violet-400">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/60">
                    {item.description}
                  </p>

                </div>

              </div>
            </FadeUp>
          ))}

        </div>

      </div>
    </section>
  );
}