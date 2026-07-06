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

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <FadeUp>
          <div className="mb-20 text-center">

            <p className="uppercase tracking-[6px] text-violet-400">
              ABOUT ME
            </p>

            <h2 className="mt-4 text-5xl font-black">
              About Me
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
              I am a passionate Full Stack Developer from Bangladesh,
              focused on building modern, responsive and user-friendly
              web applications using Next.js, React, TypeScript and
              Tailwind CSS.
            </p>

          </div>
        </FadeUp>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <FadeUp>

            <div className="relative mx-auto w-fit">

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-violet-600/40 via-fuchsia-500/20 to-cyan-500/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

                <Image
                  src="/images/profile.png"
                  alt="Shihab"
                  width={450}
                  height={550}
                  loading="lazy"
                  quality={90}
                  className="rounded-[30px] object-cover transition duration-500 hover:scale-105"
                />

              </div>

            </div>

          </FadeUp>

          {/* Right */}

          <FadeUp delay={0.2}>

            <div>

              <h3 className="text-4xl font-bold">
                Full Stack Developer
              </h3>

              <p className="mt-8 leading-9 text-white/70">
                I enjoy solving real-world problems through clean code,
                modern UI design and scalable web technologies.
                I'm also exploring Artificial Intelligence, automation
                and Shopify development.
              </p>

              <p className="mt-6 leading-9 text-white/70">
                My goal is to become a professional software engineer
                while building useful digital products that make people's
                lives easier.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">

                {info.map((item) => (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >

                    <p className="text-sm uppercase tracking-[2px] text-violet-400">
                      {item.title}
                    </p>

                    <h4 className="mt-2 text-lg font-semibold">
                      {item.value}
                    </h4>

                  </div>

                ))}

              </div>

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold transition hover:scale-105"
                >
                  Contact Me
                </a>

                <a
                  href="#"
                  className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
                >
                  Download Resume
                </a>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  );
}