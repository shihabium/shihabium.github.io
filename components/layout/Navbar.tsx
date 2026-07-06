const menu = [
  "Home",
  "About",
  "Blog",
  "Projects",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/40 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a
          href="/"
          className="text-4xl font-black tracking-[6px] text-white transition hover:text-violet-400"
        >
          SHIHAB
        </a>

        {/* Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-[15px] font-medium text-white/70 transition-all duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="hidden rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:flex">
            🌙
          </button>

          <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-3 font-semibold text-white shadow-lg shadow-violet-700/30 transition duration-300 hover:scale-105">
            Download CV
          </button>

        </div>

      </div>
    </header>
  );
}