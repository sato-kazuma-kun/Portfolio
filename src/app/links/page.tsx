import LinksSection from '@/components/app/links-section';
import { Metadata } from 'next';

export function metadata(): Metadata {
    return {
        title: "Links"
    };
}

export default function LinksPage() {
    return (
        <LinksSection />
    );
}
