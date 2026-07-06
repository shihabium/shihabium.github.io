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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home", "home")}
          className="text-2xl font-black tracking-widest text-white transition hover:text-violet-400"
        >
          SHIHAB
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              className={`relative text-sm font-medium transition-all duration-300 ${
                active === item.id
                  ? "text-violet-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-violet-500 transition-all duration-300 ${
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
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0 border-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.id)}
            className={`block border-b border-white/5 px-8 py-5 transition ${
              active === item.id
                ? "bg-violet-500/10 text-violet-400"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}