import user from '/assets/user.jpeg';
import githubDark from '/assets/github-mark-white.png';
import githubWhite from '/assets/github-mark.png';

import { Kazuma } from '@/constants/about-me';
import { Button } from '@/components/ui/button';
import useExternalNavigate from '@/hooks/useExternalNavigation';
import { ChevronDownIcon } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import Title from '@/components/ui/title';
import { useTheme } from '@/providers/theme';

export default function HeroSection() {
    const externalNavigate = useExternalNavigate();
    const scrollToSection = useScrollToSection();
    const { theme } = useTheme();

    return (
        <section id='hero' className="min-h-screen w-full items-center flex flex-col md:flex-row justify-center gap-x-20 relative">
            <div>
                <img
                    src={user}
                    className='h-52 w-52 md:h-60 md:w-60 lg:h-96 lg:w-96 aspect-square rounded-full'
                />
            </div>

            <div className='flex flex-nowrap flex-col items-center justify-center pt-4 md:pt-0'>
                <Title varient='info' className='text-center'>Hello , I'm</Title>
                <Title varient='title' fullWidth color='pink' className={`text-center`}>{Kazuma.name}</Title>
                <Title varient='subtitle' className={`text-center`}>{Kazuma.profession}</Title>
                <span className='mt-4 mb-2 flex flex-row gap-x-2'>
                    <Button className='rounded-full px-6 py-6 border-[2px]' variant='outline'><p className='font-semibold'>Download CV</p></Button>
                    <Button className='rounded-full px-6 py-6 border-[2px] border-transparent' variant='default'><p className='font-semibold'>Contact Info</p></Button>
                </span>
                <Button onClick={() => externalNavigate('https://github.com/sato-kazuma-kun', { external: true, newTab: true })} variant='ghost' className='rounded-full w-12 h-12 p-0 py-0 px-0'>
                    <img src={theme === 'dark' ? githubDark : githubWhite} className='p-2 w-10 h-10' />
                </Button>
            </div>

            <Button className='absolute right-[16px] bottom-[16px] rounded-full h-10 w-10 p-2' variant={'outline'} onClick={() => scrollToSection('about')}><ChevronDownIcon /></Button>
        </section>
    );
}
