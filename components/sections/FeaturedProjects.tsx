"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className=" py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <FadeUp>
          <div className="text-center">
            <p className="uppercase tracking-[6px] text-violet-400">
              PROJECTS
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              A selection of projects showcasing my skills in web development,
              AI and modern technologies.
            </p>
          </div>
        </FadeUp>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <FadeUp
              key={project.title}
              delay={index * 0.15}
            >

              <div
  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/20"
>

                {/* Image */}

                <div className="relative h-72 overflow-hidden">

                  {/* Category */}

                  <div className="absolute left-5 top-5 z-20 rounded-full bg-violet-600/90 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur">
                    {project.category}
                  </div>

                  {/* Image */}

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                  />

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-black/20 to-transparent" />

                  {/* Hover Overlay */}

                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">

                    <button
                      type="button"
                      aria-label={`View details of ${project.title}`}
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full bg-violet-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:bg-violet-500"
                    >
                      View Project
                    </button>

                  </div>

                </div>

                {/* Content */}

                <div className="flex h-full flex-col p-8">

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-8 text-white/60">
                    {project.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-6 flex min-h-[72px] flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>
                  
                <div className="mt-auto">
                  {/* Buttons */}

                  <div className="mt-8 flex flex-wrap items-center gap-4">

                    <a
                      href={project.live}
                      aria-label={`Open ${project.title} live demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-center font-semibold transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
                     >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      aria-label={`View ${project.title} source code`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-white/20 px-6 py-3 text-center transition duration-300 hover:border-violet-500 hover:bg-violet-500/10"
                      >
                      GitHub
                    </a>

                  </div>
                  </div>

                </div>

              </div>

            </FadeUp>

          ))}

        </div>

      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}