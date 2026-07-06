export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black text-white">
              SHIHAB
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Full Stack Developer,
              AI Enthusiast and Content Creator.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Navigation
            </h3>

            <ul className="space-y-3 text-white/60">
              <li><a href="#about" className="hover:text-violet-400">About</a></li>
              <li><a href="#skills" className="hover:text-violet-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-violet-400">Projects</a></li>
              <li><a href="#blog" className="hover:text-violet-400">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">
              Connect
            </h3>

            <div className="flex gap-4">
              {["GitHub", "Facebook", "LinkedIn"].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-violet-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/50">
          © 2026 Shihab. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}