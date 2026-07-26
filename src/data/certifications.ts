export interface CertificationItem {
    id: string;
    title: string;
    issuer: string;
    issueDate?: string;
    credentialId?: string;
    verificationUrl?: string;
    category: 'Programming' | 'AI / ML' | 'Cloud & DevOps' | 'Web Development' | 'Leadership';
    status: 'Completed' | 'In Progress';
    description: string;
    icon: string;
}

export const certificationCategories = [
    'All',
    'Programming',
    'AI / ML',
    'Web Development',
    'Leadership'
] as const;

export type CertificationCategory = typeof certificationCategories[number];

export const certificationsData: CertificationItem[] = [
    {
        id: "ibm-ml",
        title: "Machine Learning with Python",
        issuer: "IBM",
        issueDate: "2024",
        credentialId: "IBM-ML-984210",
        verificationUrl: "https://coursera.org/verify/ibm-ml",
        category: "AI / ML",
        status: "Completed",
        description: "Certification demonstrating expertise in machine learning concepts, regression, classification, clustering algorithms, and model evaluation using Python.",
        icon: "cpu"
    },
    {
        id: "ethontech-java",
        title: "Java Programming Masterclass",
        issuer: "EthonTech Solutions",
        issueDate: "2024",
        credentialId: "ETH-JAV-7721",
        verificationUrl: "#",
        category: "Programming",
        status: "Completed",
        description: "Completed advanced hands-on training in object-oriented programming, data structures, multithreading, and software design patterns in Java.",
        icon: "code"
    },
    {
        id: "simplilearn-mern",
        title: "Introduction to MERN Stack",
        issuer: "Simplilearn",
        issueDate: "2023",
        credentialId: "SIMPLI-MERN-3041",
        verificationUrl: "https://simplilearn.com/verify",
        category: "Web Development",
        status: "Completed",
        description: "Completed comprehensive training on building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        icon: "layers"
    },
    {
        id: "ethontech-flutter",
        title: "Flutter & Mobile App Development",
        issuer: "EthonTech Solutions",
        issueDate: "2024",
        credentialId: "ETH-FLT-8890",
        verificationUrl: "#",
        category: "Programming",
        status: "Completed",
        description: "Comprehensive training on Flutter framework fundamentals, state management, Dart language, and cross-platform app development.",
        icon: "smartphone"
    },
    {
        id: "mckinsey-forward",
        title: "McKinsey.org Forward Program",
        issuer: "McKinsey.org",
        issueDate: "2023",
        credentialId: "MCK-FWD-2023",
        verificationUrl: "https://mckinsey.org/forward/verify",
        category: "Leadership",
        status: "Completed",
        description: "Completed the McKinsey Forward Program focused on strategic problem solving, agile thinking, effective communication, and digital leadership skills.",
        icon: "award"
    },
    {
        id: "ethontech-web-programming",
        title: "Web Programming Fundamentals",
        issuer: "EthonTech Solutions",
        issueDate: "2023",
        credentialId: "ETH-WEB-5512",
        verificationUrl: "#",
        category: "Web Development",
        status: "Completed",
        description: "Successfully completed intensive training covering core web programming standards, asynchronous JavaScript, DOM APIs, and HTTP architecture.",
        icon: "globe"
    },
    {
        id: "ethontech-web-technologies",
        title: "Modern Web Technologies & UI",
        issuer: "EthonTech Solutions",
        issueDate: "2023",
        credentialId: "ETH-WTECH-6102",
        verificationUrl: "#",
        category: "Web Development",
        status: "Completed",
        description: "Acquired deep practical knowledge in modern frontend engineering, responsive design principles, CSS architecture, and web performance optimization.",
        icon: "layout"
    }
];
