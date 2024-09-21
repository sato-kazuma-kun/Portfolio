export type TechStack = "ReactJS" | "NextJS" | "React Native" | "Svelte" | "Svelte Kit" | "Javascript" | "Typescript" | "C++" | "Swift" | "Rust" | "Dart" | "Flutter" | "Ruby" | "Python" | "C#" | "Unity Engene" | "Unreal Engene" | "Java" | "Kotlin" | "SwiftUI" | "MongoDB" | "Postgress" | "MySQL" | "SQL Lite" | "Git" | "CSS" | "HTML" | "Vapor" | "NodeJS" | "C";

export type Profession = "Student" | "Software Developer" | "Software Engineer" | "Fullstack Developer" | "Frontend Developer" | "Backend Developer";

export type Field = "Software Development" | "Software Engineer" | "Fullstack Development" | "Frontend Development" | "Backend Development" | "Web Development" | "App Development" | "Game Development" | "AI Development" | "Cyber Security" | "Database";

export type Explore = {
    technology: TechStack,
    level: "Experienced" | "Intermediate" | "Beginner";
};

export interface Kazuma {
    name: string,
    profession: Profession;
    education: string;
    experience: {
        timespan: number;
        field: Field;
    }[];
    dob: Date;
    speech: string[];
    quote: string[];
    explore: {
        [K in Field]?: Explore[];
    };
    projects_demo: {
        title: string;
        thumbnail: string;
        github_url: string;
        live_demo_url: string;
        description: string;
    }[];
    contact_options: {
        gmail?: string;
        x?: string;
        linkedin?: string;
        links: '/links';
    };
}

