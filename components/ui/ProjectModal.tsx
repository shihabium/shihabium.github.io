"use client";

type Project = {
  title: string;
  description: string;
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
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-6 backdrop-blur"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-3xl border border-white/10 bg-[#0b1020]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-[350px] w-full object-cover"
        />

        <div className="p-10">

          <h2 className="text-4xl font-black text-white">
            {project.title}
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            {project.description}
          </p>

          <h3 className="mt-10 text-xl font-bold text-white">
            Features
          </h3>

          <ul className="mt-5 space-y-3">

            {project.features.map((item) => (

              <li
                key={item}
                className="text-white/70"
              >
                ✅ {item}
              </li>

            ))}

          </ul>

          <div className="mt-8 flex flex-wrap gap-3">

            {project.tags.map((tag) => (

              <span
                key={tag}
                className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-300"
              >
                {tag}
              </span>

            ))}

          </div>

          <div className="mt-10 flex gap-5">

            <a
              href={project.live}
              target="_blank"
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              className="rounded-full border border-white/20 px-8 py-4 text-white"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}