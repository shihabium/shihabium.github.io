import AdminLayout from "@/components/admin/AdminLayout";

export default function ProjectsPage() {
  return (
    <AdminLayout>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-4xl font-black">
            Projects
          </h1>

          <p className="mt-2 text-white/60">
            Manage all your portfolio projects.
          </p>

        </div>

        <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-4 font-semibold transition hover:scale-[1.02]">
          + Add Project
        </button>

      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl">

        <table className="w-full">

          <thead className="border-b border-white/10">

            <tr className="text-left text-white/60">

              <th className="p-6">Project</th>

              <th className="p-6">Category</th>

              <th className="p-6">Status</th>

              <th className="p-6">Year</th>

              <th className="p-6 text-right">Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-white/10">

              <td className="p-6 font-semibold">
                Portfolio Website
              </td>

              <td className="p-6">
                Web
              </td>

              <td className="p-6">
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  Completed
                </span>
              </td>

              <td className="p-6">
                2026
              </td>

              <td className="p-6">

                <div className="flex justify-end gap-3">

                  <button className="rounded-xl border border-cyan-500/30 px-4 py-2 hover:bg-cyan-500/10">
                    Edit
                  </button>

                  <button className="rounded-xl border border-red-500/30 px-4 py-2 hover:bg-red-500/10">
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}