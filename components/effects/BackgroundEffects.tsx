export default function BackgroundEffects() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow 1 */}
      <div className="absolute left-[-250px] top-[-200px] h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[180px] animate-pulse" />

      {/* Glow 2 */}
      <div
        className="absolute right-[-200px] top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Glow 3 */}
      <div
        className="absolute bottom-[-250px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[200px] animate-pulse"
        style={{ animationDelay: "3s" }}
      />
    </>
  );
}