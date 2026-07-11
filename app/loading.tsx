export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816]">
      <div className="flex flex-col items-center gap-6">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-600 border-t-transparent" />

        <p className="animate-pulse text-sm tracking-[4px] text-violet-300">
          Loading...
        </p>

      </div>
    </div>
  );
}