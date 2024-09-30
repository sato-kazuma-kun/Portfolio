'use client';

import SectionTitle from "@/components/app/section-title";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import Title from "@/components/ui/title";

export default function ProjectsSection() {
    const scrollToSection = useScrollToSection();

    return (
        <section id="projects" className="min-h-screen w-full relative pb-[calc(64px_+_16px)] pt-[64px]"> {/* "pb-[calc(10px_+_16px_+_16px_+_16px_+10px)]" */}
            <SectionTitle info={"Browse My Recent"} title={"Projects"} />
            <div className="flex items-center h-full justify-center">
                <Title varient={"subtitle"} className="text-center underline">No Projects</Title>
            </div>

            <Button className='absolute right-[16px] bottom-[16px] rounded-full h-10 w-10 p-2' variant={'outline'} onClick={() => scrollToSection('contacts')} aria-label="Scroll to contacts section"><ChevronDownIcon /></Button>
        </section>
    );
}
