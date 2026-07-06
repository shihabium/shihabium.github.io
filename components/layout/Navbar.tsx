"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#"
          className="text-4xl font-black tracking-[6px] text-white"
        >
          SHIHAB
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-white/70 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-violet-500 hover:bg-violet-500/20">
            🌙
          </button>

          <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3 font-semibold text-white shadow-lg shadow-violet-700/30 transition duration-300 hover:scale-105">
            Download CV
          </button>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col p-6">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 text-white/80 transition hover:text-violet-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <button className="mt-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 font-semibold text-white">
              Download CV
            </button>

          </div>
        </div>
      )}
    </header>
  );
}