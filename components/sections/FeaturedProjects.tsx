const projects = [
  {
    title: "Personal Portfolio",
    desc: "Modern portfolio website built with Next.js, TypeScript and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "AI Assistant",
    desc: "AI powered assistant using Python and OpenAI APIs.",
    tech: ["Python", "OpenAI", "FastAPI"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Complete shopping platform with dashboard and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <p className="tracking-[6px] uppercase text-violet-400">
            FEATURED WORK
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Selected Projects
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-violet-500"
            >

              <div className="h-56 bg-gradient-to-br from-violet-700 via-fuchsia-600 to-cyan-500 transition duration-500 group-hover:scale-105" />

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-white/60 leading-8">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 font-semibold transition hover:scale-105">
                    Live Demo
                  </button>

                  <button className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/10">
                    GitHub
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}