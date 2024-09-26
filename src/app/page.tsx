import AboutSection from "@/components/app/about-section";
import ContactsSection from "@/components/app/contacts-section";
import ExploreSection from "@/components/app/explore-section";
import HeroSection from "@/components/app/hero-section";
import ProjectsSection from "@/components/app/projects-section";
// import { Kazuma } from "@/constants/about-me";
// import { Metadata } from "next";

// export function metadata(): Metadata {
//   return {
//     title: "Portfolio",
//     description: Kazuma.description,
//   };
// }

export default function HomePage() {
  return (
    <section id="home-root" className="w-full">
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <ProjectsSection />
      <ContactsSection />
    </section>
  );
}

