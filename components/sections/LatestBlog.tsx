export default function LatestBlog() {
  const blogs = [
    {
      title: "How I Started Learning AI",
      date: "July 2026",
      description:
        "My journey into Artificial Intelligence and modern technologies.",
    },
    {
      title: "Building My Dream Portfolio",
      date: "July 2026",
      description:
        "How I designed my personal website using Next.js and Tailwind CSS.",
    },
    {
      title: "Future of Programming",
      date: "July 2026",
      description:
        "Thoughts about AI, software engineering and the future of developers.",
    },
  ];

  return (
    <section
     id="blog"
     className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-center uppercase tracking-[6px] text-violet-400">
          Latest Articles
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-white">
          Blog
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <p className="text-sm text-violet-400">
                {blog.date}
              </p>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {blog.title}
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                {blog.description}
              </p>

              <button className="mt-8 rounded-full border border-violet-500 px-6 py-3 text-violet-300 transition group-hover:bg-violet-600 group-hover:text-white">
                Read Article →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}