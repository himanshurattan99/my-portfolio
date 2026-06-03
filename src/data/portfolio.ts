export type SectionId = "about" | "skills" | "projects" | "experience" | "education" | "contact";

export type SectionColor = "red" | "blue" | "green" | "orange" | "purple" | "gold" | "teal" | "pink";

export type SketchIconName =
    | "person"
    | "lightning"
    | "compass"
    | "briefcase"
    | "mortarboard"
    | "envelope"
    | "pencil"
    | "server"
    | "wrench"
    | "bug"
    | "bot"
    | "certificate"
    | "email"
    | "github"
    | "linkedin";

export interface SectionMeta {
    id: SectionId;
    title: string;
    icon: SketchIconName;
    color: SectionColor;
    bobDelay: number;
    rotation: number;
}

export interface SkillGroup {
    group: string;
    icon: SketchIconName;
    items: string[];
}

export interface ProjectItem {
    name: string;
    description: string;
    tech: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface EducationItem {
    title: string;
    institution: string;
    period: string;
    cgpa: number;
}

export interface ContactItem {
    icon: SketchIconName;
    text: string;
}

export const sectionColors: SectionColor[] = ["red", "blue", "green", "orange", "purple", "gold", "teal", "pink"];

export const sections: SectionMeta[] = [
    { id: "about", title: "About Me", icon: "person", color: "red", bobDelay: 0, rotation: -2.5 },
    { id: "skills", title: "Skills", icon: "lightning", color: "blue", bobDelay: 0.8, rotation: 1.8 },
    { id: "projects", title: "Projects", icon: "compass", color: "green", bobDelay: 1.6, rotation: -1.2 },
    { id: "experience", title: "Experience", icon: "briefcase", color: "orange", bobDelay: 2.4, rotation: 2.2 },
    { id: "education", title: "Education", icon: "mortarboard", color: "purple", bobDelay: 3.2, rotation: -1.8 },
    { id: "contact", title: "Contact", icon: "envelope", color: "gold", bobDelay: 4, rotation: 1.3 },
];

export const aboutContent = [
    "I build full-stack apps that feel alive: interfaces that respond, surprise, and occasionally delight. From the database to the last pixel, I handle it all.",
    "I love tinkering with various AI tools, experimenting and building new ideas.",
];

export const skillGroups: SkillGroup[] = [
    {
        group: "Frontend",
        icon: "pencil",
        items: ["TypeScript", "JavaScript", "React", "Framer Motion", "Tailwind CSS", "CSS3", "HTML5"],
    },
    {
        group: "Backend",
        icon: "server",
        items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Prisma"],
    },
    {
        group: "Tools & Deployment",
        icon: "wrench",
        items: ["Git", "GitHub", "Vercel", "Netlify", "Docker"],
    },
    {
        group: "Testing",
        icon: "bug",
        items: ["Jest", "Playwright", "Postman"],
    },
    {
        group: "AI Tools",
        icon: "bot",
        items: ["OpenAI API", "Anthropic API", "Hugging Face", "Ollama", "Cursor", "Codex CLI"],
    },
];

export const projects: ProjectItem[] = [
    {
        name: "VidShelf",
        description: "Built a fully browser-based, offline video streaming app that manages local video files using browser APIs, with thumbnail generation, persistent state, and a polished streaming-style UI.",
        tech: "JavaScript, React, Tailwind CSS",
    },
    {
        name: "Cuento Lingo",
        description: "Built a story-based language learning app with 100+ stories featuring conversational dialogues and inline translations.",
        tech: "TypeScript, React, Tailwind CSS, Framer Motion",
    }
];

export const experience: ExperienceItem[] = [
    {
        role: "Web Developer Intern",
        company: "Adidof Solutions, Mohali",
        period: "Jan 2023 - May 2023",
        description: "Developed two full-stack projects: a Blog website and a Student Assessment Portal, gaining hands-on experience with MVC architecture, database design, and server-side development.",
    }
];

export const education: EducationItem[] = [
    {
        title: "BE Information Technology",
        institution: "UIET Panjab University, Chandigarh",
        period: "Aug 2019 - May 2023",
        cgpa: 8.09,
    },
];

export const contactItems: ContactItem[] = [
    { icon: "email", text: "himanshurattan99@proton.me" },
    { icon: "github", text: "github.com/himanshurattan99/" },
    { icon: "linkedin", text: "linkedin.com/in/himanshurattan99/" },
];