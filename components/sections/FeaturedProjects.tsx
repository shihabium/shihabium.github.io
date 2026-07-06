"use client";

import FadeUp from "@/components/motion/FadeUp";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Modern portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "#",
    github: "https://github.com/shihabium/shihabium.github.io",
  },
  {
    title: "ALADIN Store",
    description:
      "Modern Shopify e-commerce store focused on premium products and user experience.",
    tech: ["Shopify", "Liquid", "CSS"],
    demo: "#",
    github: "#",
  },
  {
    title: "AI Assistant",
    description:
      "Python-based AI assistant with speech recognition and automation features.",
    tech: ["Python", "AI", "Automation"],
    demo: "#",
    github: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-10">

        <FadeUp>
          <div className="text-center">

            <p className="uppercase tracking-[6px] text-violet-400">
              PROJECTS
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              A selection of projects showcasing my skills in web development,
              AI and modern technologies.
            </p>

          </div>
        </FadeUp>

        <div className="mt-20 grid gap-10 xl:grid-cols-3">

          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.15}>

              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-violet-500">

                <div className="flex h-72 items-center justify-center bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-cyan-500/20">

                  <span className="text-6xl">🚀</span>

                </div>

                <div className="p-10">

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-lg leading-9 text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="mt-8 flex gap-4">

                    <a
                      href={project.demo}
                      className="rounded-full bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/10"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </FadeUp>
          ))}

        </div>

      </div>
    </section>
  );
}