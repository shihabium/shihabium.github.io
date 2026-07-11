export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />

      {/* Glow Left */}

      <div className="absolute -left-60 -top-56 h-[850px] w-[850px] rounded-full bg-violet-600/25 blur-[220px] animate-pulse" />

      {/* Glow Right */}

      <div
        className="absolute -right-60 top-24 h-[750px] w-[750px] rounded-full bg-cyan-500/20 blur-[220px] animate-pulse"
        style={{
          animationDelay: "1.8s",
        }}
      />

      {/* Glow Bottom */}

      <div
        className="absolute bottom-[-350px] left-1/2 h-[950px] w-[950px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[240px] animate-pulse"
        style={{
          animationDelay: "3s",
        }}
      />

      {/* Floating Particles */}

      {Array.from({ length: 35 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${2 + Math.random() * 5}px`,
            height: `${2 + Math.random() * 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particleFloat ${8 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}