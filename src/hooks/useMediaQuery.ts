'use client';

import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
    // State to store if the media query is matched, initializing with `false`
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        // Ensure that window is defined before proceeding
        if (typeof window === 'undefined') return;

        const mediaQueryList = window.matchMedia(query);

        // Set the initial state based on the media query match
        setMatches(mediaQueryList.matches);

        // Update the state whenever the media query result changes
        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add event listener for changes in the media query
        mediaQueryList.addEventListener('change', handleChange);

        // Clean up the event listener when the component unmounts or query changes
        return () => {
            mediaQueryList.removeEventListener('change', handleChange);
        };
    }, [query]);  // Re-run if the query changes

    return matches;  // Return if the query is matched
}

export default useMediaQuery;
