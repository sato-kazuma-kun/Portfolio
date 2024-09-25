'use client';

import { useTheme } from "next-themes";

export default function X() {
    const { theme, systemTheme } = useTheme();

    const fillColor = theme === 'dark' ? '#FFFFFF' : theme === 'light' ? '#000000' : systemTheme;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">
            <g id="surface1">
                <path
                    stroke="none"
                    fillRule="nonzero"
                    fill={fillColor === 'light' ? '#000000' : fillColor === 'dark' ? '#FFFFFF' : fillColor}
                    fillOpacity={1}
                    d="M 27.367188 3.375 L 32.328125 3.375 L 21.488281 15.765625 L 34.242188 32.625 L 24.257812 32.625 L 16.433594 22.402344 L 7.488281 32.625 L 2.515625 32.625 L 14.113281 19.371094 L 1.882812 3.375 L 12.121094 3.375 L 19.1875 12.71875 Z M 25.621094 29.65625 L 28.371094 29.65625 L 10.625 6.1875 L 7.671875 6.1875 Z M 25.621094 29.65625 "
                />
            </g>
        </svg>
    );
}
