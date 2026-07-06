"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";

type Project = {
  title: string;
  category?: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  features: string[];
  live: string;
  github: string;
};

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b1020] shadow-2xl"
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-black/60 p-3 text-white transition hover:bg-violet-600"
        >
          <X size={20} />
        </button>

        {/* Image */}

        <div className="relative">

          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={700}
            priority
            className="h-[220px] w-full object-cover sm:h-[350px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-black/20 to-transparent" />

          {project.category && (
            <span className="absolute left-6 top-6 rounded-full bg-violet-600 px-4 py-2 text-xs font-bold tracking-widest text-white">
              {project.category}
            </span>
          )}

        </div>

        {/* Content */}

        <div className="p-6 sm:p-10">

          <h2 className="text-3xl font-black text-white sm:text-5xl">
            {project.title}
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            {project.longDescription ?? project.description}
          </p>

          {/* Features */}

          <h3 className="mt-10 text-2xl font-bold text-white">
            Features
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {project.features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >

                <CheckCircle2
                  size={20}
                  className="text-violet-400"
                />

                <span className="text-white/80">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* Technologies */}

          <h3 className="mt-10 text-2xl font-bold text-white">
            Technologies
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">

            {project.tags.map((tag) => (

              <span
                key={tag}
                className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
              >
                {tag}
              </span>

            ))}

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-8 py-4 font-semibold transition ${
                project.live === "#"
                  ? "cursor-not-allowed bg-gray-700 text-gray-400"
                  : "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
              }`}
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border px-8 py-4 transition ${
                project.github === "#"
                  ? "cursor-not-allowed border-gray-600 text-gray-500"
                  : "border-white/20 text-white hover:border-violet-500 hover:bg-violet-500/10"
              }`}
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}