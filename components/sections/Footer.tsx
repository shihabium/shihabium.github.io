"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-white">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-3">
        {/* Left */}

        <div>

          <h2 className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-black tracking-[4px] text-transparent">
            SHIHAB
          </h2>

          <p className="mt-5 leading-8 text-white/60">
            Full Stack Developer passionate about building modern web
            applications, AI-powered solutions and premium digital
            experiences.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Quick Links
          </h3>

          <div className="space-y-3">

            {links.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="block text-white/60 transition duration-300 hover:translate-x-2 hover:text-violet-400"
              >
                {item.name}
              </a>

            ))}

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="mb-5 text-xl font-bold">
            Connect
          </h3>

          <div className="flex gap-4">

            <a
              href="https://github.com/shihabium"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-2 hover:scale-110 hover:border-violet-500 hover:bg-violet-500/10"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-2 hover:scale-110 hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://facebook.com/your-profile"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-2 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10"
            >
              <FaFacebook size={22} />
            </a>

          </div>

          <a
            href="#home"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-300 transition duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:text-white hover:shadow-xl hover:shadow-violet-500/30"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

      {/* Bottom */}
    <div className="relative z-10 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-8 text-center">

          <p className="bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-sm font-medium text-transparent">

          © {new Date().getFullYear()} Shihab. All rights reserved.

          </p>

        </div>

    </div>

    </footer>
  );
}