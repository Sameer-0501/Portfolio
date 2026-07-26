export interface EducationItem {
    id: string;
    degree: string;
    specialization?: string;
    institution: string;
    location?: string;
    period: string;
    gpa?: string;
    description?: string;
    bullets?: string[];
    coursework?: string[];
    achievements?: string[];
    logo?: string;
}

export const educationData: EducationItem[] = [
    {
        id: "bachelor",
        degree: "Bachelor of Engineering",
        specialization: "Information Science and Engineering",
        institution: "East West Institute of Technology",
        location: "Bengaluru, Karnataka, India",
        period: "2022 — Expected 2026",
        gpa: "Current CGPA: 8.0 / 10.0",
        description: "Pursued a comprehensive engineering curriculum in Information Science with a strong foundation in data structures, algorithms, database systems, software engineering, and modern web applications.",

        coursework: [
            "Data Structures & Algorithms",
            "Database Management Systems (DBMS)",
            "Operating Systems",
            "Computer Networks & Security",
            "Web Technology & Applications",
            "Object-Oriented Programming (Java/C++)",
            "Software Engineering & Agile Methodologies",
            "Information Systems & Architecture",
            "Cloud Computing & Distributed Systems",
            "Data Mining & Machine Learning"
        ],
        achievements: [
            "Published research paper titled 'AgriTech — Blockchain Based Agri-Food Supply Chain Management' in the International Journal of Scientific Research in Engineering and Management (IJSREM)",
            "I have participated in National Conference on Recent Innovations in Engineering (NCRIE-2025)",
            "Presented a Research Paper titled 'AgriTech - Blockchain Based Agri-Food Supply Chain Management' at NCRIE-2025 organized by K. S. Institute of Technology, Bengaluru on Dec 2025",
        ],
        logo: "EWIT"
    },
    {
        id: "puc",
        degree: "Pre-University Course (12th)",
        specialization: "Physics, Chemistry, Mathematics, Biology (PCMB)",
        institution: "Nagarjuna PU College",
        location: "Bengaluru, Karnataka, India",
        period: "2020 — 2022",
        gpa: "Score: 84.4%",
        description: "Completed pre-university education with distinction in STEM disciplines.",

        coursework: [
            "Mathematics & Calculus",
            "Physics",
            "Chemistry",
            "Biology"
        ],
        achievements: [
            "Distinction in Board Examinations",
        ],
        logo: "NPUC"
    },
    {
        id: "high-school",
        degree: "Secondary School Leaving Certificate (10th)",
        specialization: "General Science & Mathematics",
        institution: "Jnana Bhodhini High School",
        location: "Pavagada, Karnataka, India",
        period: "2019 — 2020",
        gpa: "Score: 86.5%",
        description: "Graduated with High Distinction, developing strong analytical thinking, mathematics skills, and active participation in school co-curricular activities.",

        coursework: [
            "Mathematics",
            "General Science",
            "Social Sciences",
            "English Literature"
        ],
        logo: "JBHS"
    }
];
