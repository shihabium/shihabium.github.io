import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

const LatestBlog = dynamic(
  () => import("@/components/sections/LatestBlog"),
  {
    loading: () => null,
  }
);

const Gallery = dynamic(
  () => import("@/components/sections/Gallery"),
  {
    loading: () => null,
  }
);

const Contact = dynamic(
  () => import("@/components/sections/Contact"),
  {
    loading: () => null,
  }
);

const Footer = dynamic(
  () => import("@/components/sections/Footer"),
  {
    loading: () => null,
  }
);

const BackToTop = dynamic(
  () => import("@/components/effects/BackToTop"),
  {
    loading: () => null,
  }
);

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Skills />

      <FeaturedProjects />

      <LatestBlog />

      <Gallery />

      <Contact />

      <BackToTop />

      <Footer />
    </>
  );
}