"use client";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-8">

        <div>

          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>

          <p className="text-sm text-white/50">
            Welcome back, Shihab 👋
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 font-bold">
          S
        </div>

      </div>

    </header>
  );
}