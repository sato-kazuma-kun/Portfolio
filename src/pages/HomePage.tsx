import AboutSection from "@/components/app/about-section";
import ContactsSection from "@/components/app/contacts-section";
import ExploreSection from "@/components/app/explore-section";
import HeroSection from "@/components/app/hero-section";
import ProjectsSection from "@/components/app/projects-section";

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

