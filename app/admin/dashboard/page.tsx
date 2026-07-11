"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import AdminLayout from "@/components/admin/AdminLayout";
import DashboardCard from "@/components/admin/DashboardCard";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await getCurrentUser();

    if (!user) {
      router.replace("/admin/login");
    }
  }
    
  return (
    <AdminLayout>

      <div>

        <h1 className="text-4xl font-black">
          Dashboard
        </h1>

        <p className="mt-3 text-white/60">
          Welcome back. Here's an overview of your portfolio.
        </p>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="Projects"
          value="04"
          color="bg-violet-500/10 text-violet-300"
        />

        <DashboardCard
          title="Blogs"
          value="02"
          color="bg-cyan-500/10 text-cyan-300"
        />

        <DashboardCard
          title="Gallery"
          value="18"
          color="bg-fuchsia-500/10 text-fuchsia-300"
        />

        <DashboardCard
          title="Messages"
          value="00"
          color="bg-green-500/10 text-green-300"
        />

      </div>

      
     <div className="mt-10 grid gap-6 xl:grid-cols-3">

  {/* Quick Actions */}

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

    <h2 className="text-2xl font-bold">
      Quick Actions
    </h2>

    <div className="mt-6 space-y-4">

      <button className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 text-left font-semibold transition hover:scale-[1.02]">
        ➕ Add New Project
      </button>

      <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-cyan-400">
        📝 Write Blog
      </button>

      <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-green-400">
        🖼 Upload Gallery Image
      </button>

    </div>

  </div>

  {/* Recent Activity */}

  <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

    <h2 className="text-2xl font-bold">
      Recent Activity
    </h2>

    <div className="mt-6 space-y-5">

      <div className="flex items-center justify-between border-b border-white/10 pb-4">

        <div>
          <p className="font-semibold">
            Portfolio Website Updated
          </p>

          <p className="text-sm text-white/50">
            Projects section modified.
          </p>
        </div>

        <span className="text-sm text-violet-300">
          Today
        </span>

      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">

        <div>
          <p className="font-semibold">
            New Blog Published
          </p>

          <p className="text-sm text-white/50">
            AI Development Journey
          </p>
        </div>

        <span className="text-sm text-cyan-300">
          Yesterday
        </span>

      </div>

      <div className="flex items-center justify-between">

        <div>
          <p className="font-semibold">
            Gallery Updated
          </p>

          <p className="text-sm text-white/50">
            Uploaded 4 new images.
          </p>
        </div>

        <span className="text-sm text-fuchsia-300">
          2 Days Ago
        </span>

      </div>

    </div>

  </div>

</div> 
</AdminLayout>
  );
}