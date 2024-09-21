import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Kazuma } from '@/constants/about-me';
import { NavLinks, PortfolioSections } from '@/constants/portfolio-sections';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { ThemeToggle } from '@/components/theme-toggle';

export default function RootLayout() {
    const scrollToSection = useScrollToSection();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <section className='h-screen small-container mx-auto'>
            <section id="nav" className='fixed small-container z-50 backdrop-blur-lg top-0 left-0 right-0 flex flex-row justify-normal gap-x-4 md:gap-x-0 md:justify-between h-[64px] items-center' >
                <div className='md:hidden'>
                    <NavigationSheet />
                </div>
                <div>
                    <p className={`tracking-tight inline font-semibold to-[#4B4B4B] from-[#FFFFFF] bg-clip-text text-transparent bg-gradient-to-b sm:!text-3xl lg:!text-3xl !text-3xl xl:!text-3xl md:!text-3xl`}>{Kazuma.name}</p>
                </div>
                <div className='hidden md:flex gap-x-2 md:flex-row'>
                    {location.pathname === '/' && (
                        Object.entries(PortfolioSections).map(([key, section]) => (
                            <Button variant={'outline'} key={key} onClick={() => scrollToSection(section.id)}>
                                {section.title}
                            </Button>
                        ))
                    )}
                    {Object.entries(NavLinks).map(([key, link]) => (
                        link.href === '/' && location.pathname === '/' ? (null) : (
                            <Button key={key} variant={'outline'} onClick={() => navigate(link.href)}>
                                {link.title}
                            </Button>
                        )
                    ))}
                    <ThemeToggle />
                </div>
            </section>

            <React.Suspense
                fallback={
                    <p>Loading...</p>
                }>
                <Outlet />
            </React.Suspense>

            <Toaster />
        </section >
    );
}


function NavigationSheet() {
    const scrollToSection = useScrollToSection();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className='w-9 h-9 p-[0.40rem] rounded-full'><MenuIcon /></Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='w-60'>
                <div className="flex flex-col flex-nowrap mt-4">
                    {location.pathname === '/' && (
                        Object.entries(PortfolioSections).map(([key, section]) => (
                            <SheetClose key={key} asChild>
                                <Button variant={'outline'} className='my-2' onClick={() => scrollToSection(section.id)}>
                                    <p className='w-full text-start'>{section.title}</p>
                                </Button>
                            </SheetClose>
                        ))
                    )}

                    {Object.entries(NavLinks).map(([key, link]) => (
                        link.href === '/' && location.pathname === '/' ? (null) : (
                            <SheetClose key={key} asChild>
                                <Button variant={'outline'} className='my-2' onClick={() => navigate(link.href)}>
                                    <p className='w-full text-start'>{link.title}</p>
                                </Button>
                            </SheetClose>
                        )
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
