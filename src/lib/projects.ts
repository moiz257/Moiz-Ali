export type Project = {
  title: string;
  slug: string;
  category: string;
  year?: string;
  description: string;
  contribution: string;
  technologies: string[];
  image: string;
  href?: string;
  caseStudy?: boolean;
};

export const projects: Project[] = [
  {
    title: "Sourcely AI",
    slug: "sourcely-ai",
    category: "AI platform",
    year: "2025",
    description: "An AI-powered academic source-finding and research assistance platform.",
    contribution: "Product interface and full-stack implementation across the research workflow.",
    technologies: ["Next.js", "Python", "AI", "Tailwind", "Postgres"],
    image: "/sourcely.png",
    href: "https://sourcely.islpulse.com/login",
    caseStudy: true,
  },
  {
    title: "Dimer Health Services",
    slug: "dimer-health-services",
    category: "Healthcare application",
    year: "2025",
    description: "A custom web application for health-services management and patient tracking.",
    contribution: "Full-stack product engineering with a focus on structured operational workflows.",
    technologies: ["Next.js", "Tailwind", "Node.js", "Postgres"],
    image: "/dimer.png",
    href: "https://dimer-frontend-b9a36b8e3ad4.herokuapp.com/login",
    caseStudy: true,
  },
  {
    title: "LMS Application",
    slug: "lms-application",
    category: "EdTech platform",
    year: "2025",
    description: "A learning management system for courses, quizzes, and analytics.",
    contribution: "Interface development and application architecture for a multi-surface learning product.",
    technologies: ["React + Astro", "Python", "Zustand", "Tailwind"],
    image: "/lms.png",
    href: "https://lmsapp.islpulse.com/",
    caseStudy: true,
  },
  {
    title: "Kajabi Custom Widget",
    slug: "kajabi-custom-widget",
    category: "No-code extension",
    year: "2025",
    description: "A custom extension that expands Kajabi's native capabilities.",
    contribution: "Custom widget development with a lightweight, platform-aware user experience.",
    technologies: ["React", "JavaScript", "Tailwind", "Firebase"],
    image: "/kajabi.png",
    href: "https://temp.islpulse.com/",
  },
  {
    title: "InflamaScan AI",
    slug: "inflamascan-ai",
    category: "MedTech AI",
    year: "2025",
    description: "An AI-powered inflammation detection and reporting concept for medical professionals.",
    contribution: "Product interface and application engineering for an AI-assisted clinical workflow.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/inflama.png",
  },
  {
    title: "Speak Your Menu",
    slug: "speak-your-menu",
    category: "SaaS product",
    year: "2025",
    description: "A voice-activated restaurant menu experience designed around ordering by voice.",
    contribution: "Web application implementation across the customer-facing ordering experience.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/speak.png",
    href: "https://app.speakyourmenu.com/",
  },
];
