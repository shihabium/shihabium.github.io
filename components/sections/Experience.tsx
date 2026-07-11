"use client";

import FadeUp from "@/components/motion/FadeUp";

const experiences = [
  {
    year: "2023",
    title: "Started Programming",
    description:
      "Began my programming journey by learning HTML, CSS, JavaScript and problem solving.",
  },
  {
    year: "2024",
    title: "Python & Artificial Intelligence",
    description:
      "Learned Python, automation and explored Artificial Intelligence fundamentals.",
  },
  {
    year: "2025",
    title: "Full Stack Web Development",
    description:
      "Built responsive websites using React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    year: "2026",
    title: "Portfolio & Shopify Development",
    description:
      "Developing premium portfolio websites, Shopify stores and modern AI-powered web applications.",
  },
];

export default function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      id="experience"
      className="relative py-32 text-white"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-8">

        <FadeUp>
          <div className="mb-20 text-center">

            <p className="uppercase tracking-[6px] text-violet-400">
              EXPERIENCE
            </p>

            <h2
            id="experience-heading"
            className="mt-4 bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
              Career Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              A timeline of my learning journey, technical growth and the projects that shaped my development.
            </p>

          </div>
        </FadeUp>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_25px_rgba(139,92,246,.45)]" />

          {experiences.map((item, index) => (
            <FadeUp key={item.year} delay={index * 0.15}>
              <div className="relative mb-16 flex gap-5 sm:gap-8">

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/40 bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-xl shadow-violet-500/40 transition-all duration-500 hover:scale-110 hover:rotate-12">
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>

                <div className="group flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-violet-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-violet-500/20">

                  <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-violet-300 shadow-lg shadow-violet-500/20">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold transition duration-300 group-hover:text-violet-300">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-white/70">
                    {item.description}
                  </p>

                </div>

              </div>
            </FadeUp>
          ))}

        </div>

      </div>

    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

    </section>
  );
}