import ENV from "@/root/env.mjs";

export const PortfolioSections = {
    hero: { title: 'Home', id: 'hero' },
    about: { title: 'About', id: 'about' },
    explore: { title: 'Explore', id: 'explore' },
    projects: { title: 'Projects', id: 'projects' },
    contacts: { title: 'Contacts', id: 'contacts' },
};

export const NavLinks = {
    home: { title: 'Home', href: ENV.routes.portfolio },
    links: { title: 'Links', href: ENV.routes.links },
};