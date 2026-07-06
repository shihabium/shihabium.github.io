export default function Skills() {
  const skills = [
    { title: "Frontend", level: 95 },
    { title: "Backend", level: 88 },
    { title: "AI & Python", level: 90 },
    { title: "UI / UX", level: 82 },
  ];

  const tech = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "Node.js",
    "Git",
    "GitHub",
    "VS Code",
    "OpenAI",
    "Linux",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">
          <p className="tracking-[6px] uppercase text-violet-400">
            MY SKILLS
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Technologies & Expertise
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            {skills.map((item) => (

              <div key={item.title} className="mb-10">

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

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            {tech.map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-500/10"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}