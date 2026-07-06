import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LatestBlog from "@/components/sections/LatestBlog";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

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

      <Footer />
    </>
  );
}