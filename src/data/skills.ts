export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Beginner–Intermediate' | 'Intermediate' | 'Advanced' | 'Expert';
  rating: number; // 1 to 5 segments
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  iconName: 'Code2' | 'Layout' | 'Server' | 'Database' | 'Bot' | 'Wrench';
  description: string;
  skills: SkillItem[];
}

export const categorizedSkills: SkillCategory[] = [
  {
    id: "programming-languages",
    categoryName: "Programming Languages",
    iconName: "Code2",
    description: "Core languages for object-oriented, functional, and system engineering.",
    skills: [
      { name: "Java", level: "Advanced", rating: 4 },
      { name: "JavaScript", level: "Advanced", rating: 4 },
      { name: "TypeScript", level: "Intermediate", rating: 3 },
      { name: "Python", level: "Beginner", rating: 1 },
      { name: "C#", level: "Intermediate", rating: 3 }
    ]
  },
  {
    id: "frontend",
    categoryName: "Frontend Development",
    iconName: "Layout",
    description: "Building responsive, high-performance, and accessible web interfaces.",
    skills: [
      { name: "React", level: "Intermediate", rating: 3 },
      { name: "Tailwind CSS", level: "Advanced", rating: 4 },
      { name: "HTML5", level: "Advanced", rating: 4 },
      { name: "CSS3", level: "Advanced", rating: 4 },
      { name: "Vite", level: "Intermediate", rating: 3 }
    ]
  },
  {
    id: "backend",
    categoryName: "Backend & Systems",
    iconName: "Server",
    description: "Architecting APIs, backend microservices, and server-side workflows.",
    skills: [
      { name: "Node.js", level: "Intermediate", rating: 3 },
      { name: "Spring Boot", level: "Intermediate", rating: 3 },
    ]
  },
  {
    id: "databases",
    categoryName: "Databases & Storage",
    iconName: "Database",
    description: "Structuring, querying, and managing relational & NoSQL data stores.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", rating: 4 },
      { name: "MySQL", level: "Intermediate", rating: 3 },
      { name: "MongoDB", level: "Intermediate", rating: 3 }
    ]
  },
  {
    id: "ai-ml",
    categoryName: "AI & Data Science",
    iconName: "Bot",
    description: "Developing machine learning workflows, model pipelines, and smart tech.",
    skills: [
      { name: "Machine Learning", level: "Beginner–Intermediate", rating: 2 },
      { name: "Blockchain & Smart Contracts", level: "Intermediate", rating: 3 }
    ]
  },
  {
    id: "tools",
    categoryName: "Tools & DevOps",
    iconName: "Wrench",
    description: "Version control, container environments, and development tools.",
    skills: [
      { name: "Git & GitHub", level: "Intermediate", rating: 3 },
      { name: "Docker", level: "Beginner", rating: 1 },
      { name: "Postman / API Testing", level: "Intermediate", rating: 3 }
    ]
  }
];

// Legacy flat list export for backwards compatibility
export const skillsData = categorizedSkills.flatMap(cat => cat.skills.map(s => s.name));
