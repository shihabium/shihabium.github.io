"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Blog", href: "#blog", id: "blog" },
  { name: "Gallery", href: "#gallery", id: "gallery" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();

    setActive(id);
    setMenuOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
    className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-500"
    >
      <div
  className={`flex h-16 w-full max-w-6xl items-center justify-between rounded-full border px-6 transition-all duration-500 ${
    scrolled
      ? "border-white/10 bg-[#050816]/75 shadow-[0_8px_40px_rgba(139,92,246,0.15)] backdrop-blur-2xl"
      : "border-white/5 bg-white/5 backdrop-blur-2xl"
  }`}
>

        {/* Logo */}

        <a
          href="#home"
          aria-label="Go to Home"
          onClick={(e) => handleClick(e, "#home", "home")}
          className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-2xl font-black tracking-[6px] text-transparent transition duration-300 hover:opacity-90"
        >
          SHIHAB
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-9 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={
            active === item.id
              ? "page"
              : undefined
          }
              onClick={(e) => handleClick(e, item.href, item.id)}
              className={`relative text-sm font-medium transition-all duration-300 ${
                active === item.id
                  ? "text-white"
                  : "text-white/70 hover:text-violet-300"
              }`}
            >
              {item.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-all duration-300 ${
                  active === item.id
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur-2xl transition hover:border-violet-500 lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`absolute left-4 right-4 top-[72px] overflow-hidden rounded-3xl border border-white/10 bg-[#050816]/90 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0 border-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.id)}
            className={`block text-center border-b border-white/5 px-8 py-5 transition ${
              active === item.id
                ? "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400/10 text-white"
                : "text-white/70 hover:bg-white/5 hover:text-violet-300"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}