import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
    // State to store if the media query is matched
    const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

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
