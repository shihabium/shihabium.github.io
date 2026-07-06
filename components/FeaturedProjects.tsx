export default function FeaturedProjects() {
  const projects = [
    {
      title: "Personal Website",
      description: "A premium portfolio built with Next.js and Tailwind CSS.",
    },
    {
      title: "AI Assistant",
      description: "An AI assistant with voice and automation features.",
    },
    {
      title: "E-Commerce Platform",
      description: "Modern shopping platform with payment integration.",
    },
  ];

  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-center text-violet-400 tracking-[6px] uppercase">
          Featured Work
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-white">
          Projects
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
            >
              <div className="mb-6 h-40 rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20"></div>

              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-8 text-white/60">
                {project.description}
              </p>

              <button className="mt-8 rounded-full border border-violet-500 px-6 py-3 text-violet-300 transition hover:bg-violet-600 hover:text-white">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}