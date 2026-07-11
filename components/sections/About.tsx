"use client";

import FadeUp from "@/components/motion/FadeUp";
import Image from "next/image";

const info = [
  {
    title: "Location",
    value: "Bangladesh",
  },
  {
    title: "Speciality",
    value: "Full Stack Development",
  },
  {
    title: "Learning",
    value: "AI & Automation",
  },
  {
    title: "Current Focus",
    value: "Next.js + Shopify",
  },
];

const achievements = [
  {
    value: "4+",
    label: "Projects Completed",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "10+",
    label: "Technologies",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-32 text-white"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <FadeUp>
          <div className="mb-20 text-center">

            <p className="uppercase tracking-[6px] text-violet-400">
              ABOUT ME
            </p>

            <h2 className="mt-4 bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
              About Me
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/60">
              I am a passionate Full Stack Developer from Bangladesh,
              focused on building modern, responsive and user-friendly
              web applications using Next.js, React, TypeScript and
              Tailwind CSS.
            </p>

          </div>
        </FadeUp>

        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">

          {/* Left */}

          <FadeUp>

            <div className="relative mx-auto w-fit">

              <div className="absolute inset-0 animate-pulse rounded-[40px] bg-gradient-to-r from-violet-600/40 via-fuchsia-500/20 to-cyan-500/40 blur-3xl" />

              <div className="group relative overflow-hidden rounded-[42px] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_60px_rgba(139,92,246,.20)]">

                <Image
                  src="/images/profile.png"
                  alt="Shihab"
                  width={450}
                  height={550}
                  loading="lazy"
                  quality={90}
                  className="rounded-[30px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[42px] border border-violet-400/20" />


              </div>

            </div>

          </FadeUp>

          {/* Right */}

          <FadeUp delay={0.2}>

            <div>

              <h3 className="bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                Full Stack Developer
              </h3>

              <p className="mt-8 text-lg leading-9 text-white/65">
                I enjoy solving real-world problems through clean code,
                modern UI design and scalable web technologies.
                I'm also exploring Artificial Intelligence, automation
                and Shopify development.
              </p>

              <p className="mt-6 text-lg leading-9 text-white/65">
                My goal is to become a professional software engineer
                while building useful digital products that make people's
                lives easier.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">

                {info.map((item) => (

                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/20"
                   >

                    <p className="text-xs font-semibold uppercase tracking-[4px] text-violet-300">
                      {item.title}
                    </p>

                    <h4 className="mt-3 text-xl font-bold text-white transition group-hover:text-violet-300">
                      {item.value}
                    </h4>

                  </div>

                ))}

              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-4">

                {achievements.map((item) => (

                  <div
                    key={item.label}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/20"
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

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="#contact"
                  aria-label="Contact me"
                  className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/40"
                >
                  Contact Me
                </a>

                <a
                  href="/files/Shihab_CV.pdf"
                  download
                  aria-label="Download my resume"
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  Download Resume
                </a>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>

    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

    </section>
  );
}