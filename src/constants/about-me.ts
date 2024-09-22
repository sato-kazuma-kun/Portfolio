import { Kazuma as KazumaInterface } from "@/types/kazuma";

export const Kazuma: KazumaInterface = {
    name: "Kazuma Satō",
    profession: "Student",
    education: "St. John's H.S. School, Barama",
    experience: [
        {
            timespan: 2,
            field: "Fullstack Development"
        }
    ],
    dob: new Date("2006-11-26"),
    speech: [
        "Konnichiwa! I'm Kazuma-kun, a student at St. John's H.S. School in Barama, Assam. I've proudly passed my HSLC exams, but my true passion lies in the enchanting realm of anime and all things otaku!",
        "As a devoted weeb, I've immersed myself in the captivating stories, vibrant characters, and awe-inspiring worlds that anime has to offer. From epic shounen battles to heartwarming slice-of-life tales, I've explored a vast range of genres and discovered hidden gems along the way. ",
        "When I'm not indulging in the latest anime releases, you'll often find me immersed in the world of programming. As a self-proclaimed computer nerd, I love tinkering with code, building apps, and bringing my own creative ideas to life. My ultimate goal is to create the perfect waifuu AI, a digital companion that embodies all the qualities of my favorite anime characters. ",
        "But that's not all! I have a burning desire to travel to the land of anime itself: Japan. I dream of immersing myself in the rich culture, exploring vibrant cityscapes, and meeting fellow otakus who share my passion. One day, I hope to settle down in Japan and embrace the anime-filled life that awaits me there. ",
        "Join me on this incredible journey through Anime World, where I'll be sharing my thoughts, recommendations, and insights into the captivating realm of anime. Together, let's celebrate our shared love for this art form, connect with fellow fans, and uncover the next masterpiece that will touch our hearts. ",
    ],
    quote: [
        "In this vast universe, let's embrace the endless possibilities and let our dreams take flight!"
    ],
    explore: {
        'Frontend Development': [
            { technology: "ReactJS", level: "Intermediate" },
            { technology: "React Native", level: "Intermediate" },
            { technology: "NextJS", level: "Intermediate" },
            { technology: "Svelte Kit", level: "Intermediate" },
            { technology: "Svelte", level: "Intermediate" },
        ],
        'Backend Development': [
            { technology: "NodeJS", level: "Beginner" },
            { technology: "MongoDB", level: "Beginner" },
        ],
        'Software Development': [
            { technology: 'Rust', level: 'Beginner' },
            { technology: 'C++', level: 'Beginner' },
            { technology: 'Typescript', level: 'Intermediate' },
            { technology: 'Javascript', level: 'Intermediate' },
            { technology: 'Swift', level: 'Beginner' }
        ]
    },
    projects_demo: [
        {
            title: "Demo",
            thumbnail: "",
            github_url: "https://github.com",
            live_demo_url: "https://github.com",
            description: "Demo description 1"
        },
        {
            title: "Demo 2",
            thumbnail: "",
            github_url: "https://github.com",
            live_demo_url: "https://github.com",
            description: "Demo description 2"
        }
    ],
    contact_options: {
        gmail: 'mailto:otaku.satoukazuma.002@gmail.com',
        links: "/links",
        x: 'https://x.com/@OtakuBoy00701',
        linkedin: 'https://www.linkedin.com/in/kazuma-sato-348b792b5/'
    },
    social_links: [
        { icon: { light: '/assets/twitter.png', dark: '/assets/twitter.png' }, title: 'X', link: 'https://x.com/@OtakuBoy00701' },
        { icon: { light: '/assets/Instagram_icon.webp', dark: '/assets/Instagram_icon.webp' }, title: 'Instagram', link: 'https://www.instagram.com/__kana.arima' },
        { icon: { light: '/assets/Instagram_icon.webp', dark: '/assets/Instagram_icon.webp' }, title: 'Instagram (Personal)', link: 'https://www.instagram.com/_kazuma_sama' },
        { icon: { light: '/assets/facebook(1).png', dark: '/assets/facebook(1).png' }, title: 'Facebook', link: 'https://www.facebook.com/satou.kazu.kun' },
        { icon: { light: '/assets/youtube.png', dark: '/assets/youtube.png' }, title: 'YouTube', link: 'https://www.youtube.com/@_kazuma-kun' },
        { icon: { light: '/assets/github-mark.png', dark: '/assets/github-mark.png' }, title: 'Github', link: 'https://github.com/sato-kazuma-kun' },
        { icon: { light: '/assets/linkedin-icon.png', dark: '/assets/linkedin-icon.png' }, title: 'LinkedIn', link: 'https://www.linkedin.com/in/kazuma-sato-348b792b5/' },
    ]
};