export const useScrollToSection = () => {
    return function scrollToSection(id: string) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
};