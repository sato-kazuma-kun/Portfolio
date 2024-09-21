import user from '/assets/user.jpg';

import { Kazuma } from '@/constants/about-me';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import Title from '@/components/ui/title';
import Education from '@/icons/education';
import Experience from '@/icons/experience';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { useTheme } from '@/providers/theme';
import SectionTitle from '@/components/app/section-title';

export default function AboutSection() {
    const scrollToSection = useScrollToSection();

    return (
        <section id='about' className="w-full min-h-screen relative pb-[calc(64px_+_16px)] pt-[64px]"> {/* "pb-[calc(10px_+_16px_+_16px_+_16px_+10px)]" */}
            <SectionTitle title='About Me' info='Get to Know More' />

            <div className='mt-5 flex flex-col lg:flex-row justify-center lg:gap-x-20 items-center'>
                <div>
                    <img
                        src={user}
                        className='w-full h-full max-h-52 max-w-52 sm:max-h-72 sm:max-w-72 lg:max-h-80 lg:max-w-80 xl:max-h-96 xl:max-w-96 aspect-square rounded-3xl'
                    />
                </div>

                <div className='flex flex-1 flex-nowrap flex-col justify-center pt-4 lg:pt-0'>
                    <AboutMeCard />
                    <SpeechAndQuote />
                </div>
            </div>

            <Button className='absolute right-[16px] bottom-[16px] rounded-full h-10 w-10 p-2' variant={'outline'} onClick={() => scrollToSection('explore')}><ChevronDownIcon /></Button>
        </section>
    );
}



function AboutMeCard() {
    const { theme } = useTheme();

    return (
        <div className='flex flex-row gap-x-2 w-full items-center justify-center'>
            <Card className="w-[50%] xl:w-[350px]">
                <CardContent className='flex w-full h-full items-center flex-col flex-nowrap justify-center p-0 py-2'>
                    <Experience theme={theme} />
                    <Title color='yellow' varient='subtitle' fullWidth={true} className={`!text-[1rem] md:!text-xl my-2 text-center`}>Experience</Title>

                    <Title varient='info' className='!font-medium !text-lg !text-ellipsis !line-clamp-1 text-center' fullWidth={true}>{String(Kazuma.experience[0].timespan) + '+ years'}</Title>
                    <Title varient='info' className='!font-medium !text-lg !text-ellipsis !line-clamp-1 text-center' fullWidth={true}>{String(Kazuma.experience[0].field)}</Title>
                </CardContent>
            </Card>

            <Card className="w-[50%] xl:w-[350px]">
                <CardContent className='flex w-full h-full items-center flex-col flex-nowrap justify-center p-0 py-2'>
                    <Education theme={theme} />
                    <Title color='yellow' varient='subtitle' fullWidth={true} className={`!text-[1rem] md:!text-xl my-2 text-center`}>Education</Title>

                    <Title varient='info' className='!font-medium !text-lg !text-ellipsis !line-clamp-1 text-center' fullWidth={true}>Student of</Title>
                    <Title varient='info' className='!font-medium !text-lg !text-ellipsis !line-clamp-1 text-center' fullWidth={true}>{String(Kazuma.education)}</Title>
                </CardContent>
            </Card>
        </div>
    );
}

function SpeechAndQuote() {
    return (
        <React.Fragment>
            {Kazuma.speech.map((s, index) => (
                <p key={index} className='mt-5 text-justify'>
                    {s}
                </p>
            ))}

            {Kazuma.quote.map((q, index) => (
                <p key={index} className='mt-5 italic font-semibold text-justify'>"{q}" - Kazuma kun</p>
            ))}
        </React.Fragment>
    );
}