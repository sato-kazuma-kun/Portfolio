'use client';

import SectionTitle from "@/components/app/section-title";
import { Button } from "@/components/ui/button";
import { ChevronUpIcon, MailIcon } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Card, CardContent } from "@/components/ui/card";
import { Kazuma } from "@/constants/about-me";
import X from '@/icons/x';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import Footer from './footer';
import Link from 'next/link';
import Image from "next/image";

export default function ContactsSection() {
    const scrollToSection = useScrollToSection();
    const user = '/assets/user.jpeg';

    return (
        <section id="contacts" className="min-h-screen w-full relative pb-[calc(64px_+_16px)] pt-[64px]">
            <SectionTitle info={"Get in Touch"} title={"Contacts"} />
            <div className="flex items-center h-full justify-center mt-5">
                <Card className="w-full md:w-auto">
                    <CardContent className="flex items-center justify-center p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            {Object.entries(Kazuma.contact_options).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-start">
                                    {key === 'gmail' && (
                                        <Link href={value} className="flex flex-row gap-x-2 items-center h-auto p-6 justify-center text-primary underline-offset-4 hover:underline">
                                            <MailIcon size={'36px'} />
                                            <p className='text-base'>{value.slice(7)}</p>
                                        </Link>
                                    )}

                                    {key === 'links' && (
                                        <Link href={value} className="flex flex-row gap-x-2 items-center h-auto p-6 justify-center text-primary underline-offset-4 hover:underline">
                                            <Image height={36} width={36} alt="Links" src={user} className="w-[36px] rounded-md" />
                                            <p className='text-base'>Social Media Profiles</p>
                                        </Link>
                                    )}

                                    {key === 'x' && (
                                        <Link href={value} className="flex flex-row gap-x-2 items-center h-auto p-6 justify-center text-primary underline-offset-4 hover:underline">
                                            <X />
                                            <p className='text-base'>X <span className='text-muted-foreground text-sm'>(Formerly Twitter)</span></p>
                                        </Link>
                                    )}

                                    {key === 'linkedin' && (
                                        <Link href={value} className="flex flex-row gap-x-2 items-center h-auto p-6 justify-center text-primary underline-offset-4 hover:underline">
                                            <LinkedInLogoIcon className='w-[36px] h-[36px]' />
                                            <p className='text-base'>LinkedIn</p>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className='absolute w-full bottom-[calc(16px_+_16px)] flex flex-col justify-center gap-y-4'>
                <Button className='self-end mr-[16px] rounded-full h-10 w-10 p-2 z-10' variant={'outline'} onClick={() => scrollToSection('hero')} aria-label="Scroll to hero section"><ChevronUpIcon /></Button>
                <Footer />
            </div>
        </section>
    );
}
