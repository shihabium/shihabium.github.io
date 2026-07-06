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
    <footer className="border-t border-white/10 bg-[#050816] text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-3">

        {/* Left */}

        <div>

          <h2 className="text-3xl font-black tracking-wider">
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
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
            >
              <FaFacebook size={22} />
            </a>

          </div>

          <a
            href="#home"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-300 transition duration-300 hover:bg-violet-600 hover:text-white"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 text-sm text-white/50 md:flex-row">

          <p>
            © {new Date().getFullYear()} Shihab. All rights reserved.
          </p>

          <p>
            Built with ❤️ using{" "}
            <span className="text-violet-400">Next.js</span> &
            <span className="text-cyan-400"> Tailwind CSS</span>
          </p>

        </div>

      </div>

    </footer>
  );
}