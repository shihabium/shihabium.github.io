"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <a
          href="#home"
          className="text-2xl font-black tracking-widest text-white"
        >
          SHIHAB
        </a>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative text-sm font-medium transition duration-300 ${
                active === item.id
                  ? "text-violet-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}

              {active === item.id && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-violet-500" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}