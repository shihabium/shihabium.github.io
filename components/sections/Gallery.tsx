"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/gallery/1.png",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.png",
    "/images/gallery/5.png",
    "/images/gallery/6.png",
  ];

  useEffect(() => {
    if (!selectedImage) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedImage]);

  return (
    <>
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

            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              A collection of my work, projects and creative moments.
            </p>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {images.map((img, index) => (

              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:border-violet-500"
              >

                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  width={600}
                  height={600}
                  loading="lazy"
                  quality={90}
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Lightbox */}

      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-black/60 p-3 text-white transition hover:bg-violet-600"
          >
            <X size={24} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-6xl overflow-hidden rounded-3xl"
          >

            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1600}
              height={1200}
              quality={100}
              priority
              className="max-h-[90vh] w-auto rounded-3xl object-contain"
            />

          </div>

        </div>

      )}

    </>
  );
}