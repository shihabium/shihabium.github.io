"use client";

import FadeUp from "@/components/motion/FadeUp";

import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGithub,
} from "react-icons/si";

const skills = [
  { title: "Frontend", level: 95 },
  { title: "Backend", level: 88 },
  { title: "AI & Python", level: 90 },
  { title: "UI / UX", level: 82 },
];

const tech = [
  {
    name: "Next.js",
    icon: <SiNextdotjs size={38} />,
  },
  {
    name: "React",
    icon: <FaReact size={38} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={38} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={38} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={38} />,
  },
  {
    name: "Python",
    icon: <FaPython size={38} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={38} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={38} />,
  },
  {
    name: "GitHub",
    icon: <SiGithub size={38} />,
  },
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <FadeUp>
          <div className="mb-20 text-center">

            <p className="uppercase tracking-[6px] text-violet-400">
              MY SKILLS
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Technologies & Expertise
            </h2>

          </div>
        </FadeUp>

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Left */}

          <FadeUp>

            <div>

              {skills.map((item) => (

                <div
                  key={item.title}
                  className="mb-10"
                >

                  <div className="mb-3 flex justify-between">

                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    <span className="text-violet-300">
                      {item.level}%
                    </span>

                  </div>

                  <div className="h-4 rounded-full bg-white/10">

                    <div
                      className="h-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
                      style={{
                        width: `${item.level}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </FadeUp>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">

            {tech.map((item) => (

              <FadeUp key={item.name}>

                <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-500/10">

                  <div className="mb-5 flex justify-center text-violet-400 transition duration-300 group-hover:scale-125">

                    {item.icon}

                  </div>

                  <h3 className="font-semibold">

                    {item.name}

                  </h3>

                </div>

              </FadeUp>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}