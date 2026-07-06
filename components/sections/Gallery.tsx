import Image from "next/image";
export default function Gallery() {
const images = [
  "/images/gallery/1.png",
  "/images/gallery/2.png",
  "/images/gallery/3.png",
  "/images/gallery/4.png",
  "/images/gallery/5.png",
  "/images/gallery/6.png",
];

  return (
    <section
      id="gallery"
      className="bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <p className="tracking-[6px] uppercase text-violet-400">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Moments & Works
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={600}
              height={600}
              loading="lazy"
              quality={90}
              className="h-[320px] w-full object-cover transition duration-500 hover:scale-110"
            />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}