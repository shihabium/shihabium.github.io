"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 md:flex-row">

        <div>
          <h2 className="text-3xl font-black">
            SHIHAB
          </h2>

          <p className="mt-3 max-w-md text-white/60">
            Full Stack Developer passionate about building
            modern web applications and AI-powered solutions.
          </p>
        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/shihabium"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-4 transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 p-4 transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 p-4 transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <FaFacebook size={22} />
          </a>

        </div>

      </div>

      <div className="mt-10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Shihab. All rights reserved.
      </div>
    </footer>
  );
}