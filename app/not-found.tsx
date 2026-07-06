export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <div className="text-center">

        <h1 className="text-8xl font-black text-violet-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-white/60">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold"
        >
          Go Home
        </a>

      </div>
    </main>
  );
}