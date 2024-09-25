"use client";

import { useRouter } from "next/navigation";

interface NavigateOptions {
    external?: boolean;         // Whether the link is external or internal
    newTab?: boolean;           // Whether to open the link in a new tab
    replace?: boolean;          // Whether to replace the current route (for internal navigation)
}

/**
 * Custom hook to handle both internal and external navigation.
 * @returns A function that takes a URL and options to navigate accordingly.
 */
const useExternalNavigate = () => {
    const router = useRouter();

    const navigateTo = (url: string, options?: NavigateOptions) => {
        if (options?.external) {
            // Handle external navigation
            if (options.newTab) {
                if (typeof window !== 'undefined') {
                    window.open(url, '_blank', 'noopener,noreferrer');
                }
            } else {
                if (typeof window !== 'undefined') {
                    window.location.href = url;
                }
            }
        } else {
            // Handle internal navigation using react-router-dom's useNavigate
            if (options?.replace) {
                router.replace(url);
            } else {
                router.push(url);
            }
        }
    };

    return navigateTo;
};

export default useExternalNavigate;
