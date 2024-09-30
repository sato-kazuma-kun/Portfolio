'use client';

import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import Title from '@/components/ui/title';
import { CheckmarkIcon } from '@/icons/checkmark';
import { Kazuma } from '@/constants/about-me';
import { Field } from '@/types/kazuma';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from "@/components/app/section-title";

export default function ExploreSection() {
    const scrollToSection = useScrollToSection();

    return (
        <section id='explore' className="w-full min-h-screen relative pb-[calc(10px_+_16px_+_16px_+_16px)] pt-[64px]">
            <SectionTitle style="mb-5" info={'Explore My'} title={'Experience'} />

            <div className='flex flex-col md:flex-row justify-center gap-x-20 items-center'>
                <div className='flex flex-col md:flex-row w-full'>
                    {Object.keys(Kazuma.explore).map((category) => {
                        // Cast category to Field to avoid the indexing error
                        const typedCategory = category as Field;
                        return (
                            <Card key={category} className='w-full my-4 md:mx-2 lg:mx-4'>
                                <CardContent>
                                    <Title color='blue' varient='subtitle' fullWidth={true} className={`!text-[1rem] md:!text-xl my-2 text-center`}>{category}</Title>
                                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-2'>
                                        {Kazuma.explore[typedCategory]?.map((tech, index) => (
                                            <span key={index} className='flex flex-row items-center gap-x-4 my-4'>
                                                <span className='w-[32px]'><CheckmarkIcon /></span>
                                                <span className='flex-1 flex flex-col overflow-hidden'>
                                                    <Title varient='info' className='!text-foreground text-ellipsis line-clamp-1'>{tech.technology}</Title>
                                                    <Title varient='info' className='!text-[1rem] !font-medium text-ellipsis line-clamp-1'>{tech.level}</Title>
                                                </span>
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            <Button className='absolute right-[16px] bottom-[16px] rounded-full h-10 w-10 p-2' variant={'outline'} onClick={() => scrollToSection('projects')} aria-label='Scroll to projects section'><ChevronDownIcon /></Button>
        </section>
    );
}
