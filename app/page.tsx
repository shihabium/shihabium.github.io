import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestBlog from "@/components/LatestBlog";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <LatestBlog />
    </>
  );
}