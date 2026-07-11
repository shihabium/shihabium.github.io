export default function PageBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">

      {/* GRID */}

      <div
        className="fixed inset-0 -z-50 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* PURPLE */}

      <div className="pointer-events-none fixed -left-64 -top-56 -z-40 h-[750px] w-[750px] rounded-full bg-violet-600/20 blur-[180px] animate-[glow_10s_ease-in-out_infinite]" />

      {/* CYAN */}

      <div className="pointer-events-none fixed -right-56 top-24 -z-40 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px] animate-[glow_12s_ease-in-out_infinite]" />

      {/* PINK */}

      <div className="pointer-events-none fixed bottom-[-320px] left-1/2 -z-40 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[220px] animate-[glow_14s_ease-in-out_infinite]" />

      {children}
    </div>
  );
}