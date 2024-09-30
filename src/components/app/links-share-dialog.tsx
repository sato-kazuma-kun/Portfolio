'use client';

import { Link2Icon, MailIcon, ShareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import * as React from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from '@/hooks/useMediaQuery';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Kazuma } from '@/constants/about-me';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { copyString } from '@/utils';
import Image from 'next/image';

type ShareProps = {
    [key: string]: {
        icon_node: React.ReactNode,
        action: ({ text, url }: { text: string; url: string; }) => void,
    };
}[];

const ShareURL = 'https://sato-kazuma.vercel.app/links';
const ShareText = 'Check out Kazuma\'s social media profiles';

const SHARE: ShareProps = [
    {
        "Copy link": {
            icon_node: <Link2Icon height={30} width={30} />,
            action: function ({ url }) { copyString(url); },
        },
        "WhatsApp": {
            icon_node: <Image width={30} height={30} src='/assets/whatsapp-logo.png' className='w-[30px] h-[30px]' alt=' WhatsApp icon' />,
            action: function ({ text, url }) { if (typeof window !== 'undefined') { window.open(`https://wa.me/?text=${text} - ${url}`, '_blank'); } },
        },
        "Email": {
            icon_node: <MailIcon height={30} width={30} />,
            action: function ({ text, url }) { if (typeof window !== 'undefined') { window.open(`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`, '_blank'); } },
        },
        "X": {
            icon_node: <Image width={30} height={30} src='/assets/x-brand.svg' className='w-[30px] h-[30px] bg-white rounded-sm' alt='Twitter icon' />,
            action: function ({ text, url }) { if (typeof window !== 'undefined') { window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' - ')}&url=${encodeURIComponent(url)}`, '_blank'); } },
        },
        "iMessage": {
            icon_node: <Image width={30} height={30} src='/assets/iMessage.png' className='w-[30px] h-[30px]' alt='iMessage icon' />,
            action: function ({ text, url }) { if (typeof window !== 'undefined') { window.open(`sms:&body=${encodeURIComponent(text + ' - ')} ${encodeURIComponent(url)}`, '_blank'); } },
        }
    }
];
export default function LinksShareDialog() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button aria-label='Share this page' id='share-button' variant={'secondary'} size={'icon'} className='!text-white !transition-all !duration-300 !rounded-full !h-9 !px-[0.60rem] !bg-[#1a1a1a] !bg-opacity-35 hover:!bg-opacity-25'>
                        <ShareIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-full font-kite">
                    <DialogHeader>
                        <DialogTitle>Share</DialogTitle>
                    </DialogHeader>
                    <ShareForm />
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button aria-label='Share this page' id='share-button' variant={'secondary'} size={'icon'} className='!text-white !transition-all !duration-300 !rounded-full !h-9 !px-[0.60rem] !bg-[#1a1a1a] !bg-opacity-35 hover:!bg-opacity-25'>
                    <ShareIcon />
                </Button>
            </DrawerTrigger>
            <DrawerContent className='font-kite'>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Share</DrawerTitle>
                </DrawerHeader>
                <ShareForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button aria-label='Cancel sharing' variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function ShareForm({ className }: React.ComponentProps<"section">) {
    const user = '/assets/user.jpeg';

    return (
        <section className={cn("", className)}>
            <div className="flex flex-col gap-y-8">
                <div className='bg-[#342a2b] flex flex-col items-center justify-center rounded-md py-8 gap-y-4'>
                    <Image
                        alt='Kazuma-kun'
                        height={80}
                        width={80}
                        src={user}
                        className='w-20 h-20 rounded-full'
                    />
                    <p className="text-center font-semibold text-2xl md:text-3xl !text-white">{Kazuma.name}</p>
                </div>

                <div className='flex items-center justify-center'>
                    <Carousel className="w-[calc(100%_-_100px)]">
                        <CarouselContent>
                            {Object.entries(SHARE[0]).map(([key, value], index) => (
                                <CarouselItem key={index} className='basis-1/3'>
                                    <div
                                        onClick={() => value.action({ text: ShareText, url: ShareURL })}
                                        className="p-1 flex gap-y-1 flex-col flex-nowrap items-center justify-center cursor-pointer select-none"
                                    >
                                        {value.icon_node}
                                        <span className="text-sm">{key}</span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
