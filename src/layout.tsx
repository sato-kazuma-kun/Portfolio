import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <section>
            {/* <div>

            </div> */}

            <React.Suspense
                fallback={
                    <p>Loading...</p>
                }>
                <Outlet />
            </React.Suspense>
        </section>
    );
}
