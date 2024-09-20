import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout() {
    return (
        <section>
            <div>
                <ThemeToggle />
            </div>

            <React.Suspense
                fallback={
                    <p>Loading...</p>
                }>
                <Outlet />
            </React.Suspense>

            <Toaster />
        </section>
    );
}
