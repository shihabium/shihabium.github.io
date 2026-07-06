export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute -top-52 -left-40 h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[160px] animate-pulse" />

      <div
        className="absolute top-40 right-[-150px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[170px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div
        className="absolute bottom-[-250px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[180px] animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(5,8,22,.65))]" />

    </div>
  );
}