export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-violet-400">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Who Am I?
          </h2>

          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto" />

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <h3 className="text-4xl font-bold leading-tight">
              Passionate about
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Technology
              </span>
            </h3>

            <p className="mt-8 text-lg leading-9 text-white/70">
              Hello! I'm Shihab.
              I enjoy building modern websites,
              learning Artificial Intelligence,
              exploring new technologies,
              and creating digital experiences
              that people love to use.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/70">
              My goal is to combine design,
              programming and AI to build
              beautiful, useful and meaningful products.
            </p>

            <button className="mt-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold hover:scale-105 transition">
              Download Resume
            </button>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="text-5xl font-black text-violet-400">
                4+
              </h4>

              <p className="mt-3 text-white/70">
                Projects Completed
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="text-5xl font-black text-cyan-400">
                2+
              </h4>

              <p className="mt-3 text-white/70">
                Years Learning
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="text-5xl font-black text-fuchsia-400">
                100%
              </h4>

              <p className="mt-3 text-white/70">
                Passion
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="text-5xl font-black text-green-400">
                ∞
              </h4>

              <p className="mt-3 text-white/70">
                Curiosity
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}