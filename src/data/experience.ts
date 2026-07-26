export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    type?: string;
    duration?: string;
    location?: string;
    summary?: string;
    bullets?: string[];
    technologies?: string[];
    achievements?: string[];
    icon: string;
}

export const experienceData: ExperienceItem[] = [
    {
        id: "cognifyz-intern",
        title: "Full Stack Development Intern",
        company: "Cognifyz Technologies",
        type: "Internship",
        duration: "Nov 2025 – Dec 2025",
        location: "Remote",
        summary: "Engaged in full-stack web application development, contributing responsive interfaces and backend logic.",
        bullets: [
            "Worked on full stack development tasks involving responsive frontend components and API integrations.",
            "Contributed core project features focusing on clean component architecture, state management, and usability.",
            "Collaborated effectively within an agile development team environment following structured Git workflows.",
            "Demonstrated strong problem-solving ability, debugging edge-case issues and optimizing performance.",
            "Completed assigned feature modules and deliverable tasks within strict project deadlines.",
            "Strengthened practical understanding of production web development workflows and software delivery."
        ],
        technologies: ["JavaScript", "React", "HTML5", "CSS3", "Git", "REST APIs"],
        achievements: [
            "Delivered end-to-end web modules with responsive UI and integrated REST API endpoints."
        ],
        icon: "code"
    },
    {
        id: "kodnest-intern",
        title: "Full Stack Java Intern",
        company: "KodNest",
        type: "Practical Training & Internship",
        duration: "Jan 2026 – Present",
        location: "Bengaluru, India",
        summary: "Comprehensive hands-on training in object-oriented Java development, backend software design, and AI fundamentals.",
        bullets: [
            "Completed intensive hands-on Java training covering OOP concepts, data structures, and backend logic.",
            "Practiced algorithmic coding exercises daily to strengthen problem-solving logic and syntax efficiency.",
            "Gained foundational knowledge in AI systems, analyzing architecture differences between LLMs and specialized models.",
            "Gained hands-on exposure to real-world software development lifecycles and database integrations.",
            "Collaborated on practical project modules applying clean code principles and structured design patterns."
        ],
        technologies: ["Java", "Spring Boot", "SQL", "PostgreSQL", "OOP", "AI Systems"],
        achievements: [
            "Mastered core Java & OOP design patterns, building foundational backend project components."
        ],
        icon: "briefcase"
    },
];
