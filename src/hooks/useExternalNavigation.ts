import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const navigateTo = (url: string, options?: NavigateOptions) => {
        if (options?.external) {
            // Handle external navigation
            if (options.newTab) {
                window.open(url, '_blank', 'noopener,noreferrer');
            } else {
                window.location.href = url;
            }
        } else {
            // Handle internal navigation using react-router-dom's useNavigate
            if (options?.replace) {
                navigate(url, { replace: true });
            } else {
                navigate(url);
            }
        }
    };

    return navigateTo;
};

export default useExternalNavigate;
