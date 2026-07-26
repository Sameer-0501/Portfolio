export interface QuickFactItem {
  id: string;
  iconName: 'GraduationCap' | 'Code' | 'Cpu' | 'MapPin' | 'Briefcase';
  label: string;
  value: string;
}

export interface HighlightCardItem {
  id: string;
  iconName: 'Target' | 'ShieldCheck' | 'Zap' | 'Users';
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

export const aboutData = {
  greeting: "Engaged in engineering solutions at the intersection of web technology and data intelligence.",
  introParagraphs: [
    "I'm Sameer, an Information Science & Engineering student based in Bengaluru, India. I specialize in bridging full-stack web development with intelligent backend data systems to build scalable, high-performance software.",
    "My technical foundation spans React, javaScript, HTML, CSS, TypeScript, Node.js, and modern responsive interfaces on the frontend, paired with C#, MySQL, PostgreSQL and MongoDB on the backend.",
    "Whether optimizing database queries, crafting responsive user flows, or deploying machine learning models, I am driven by engineering precision, clean code principles, and tangible real-world impact."
  ],
  careerObjective: "To engineer high-performance web applications and scalable data-driven backends as a Full Stack Software Engineer, contributing to high-impact digital products while continuously mastering modern cloud and AI architectures.",

  quickFacts: [
    {
      id: "edu",
      iconName: "GraduationCap",
      label: "Education",
      value: "B.E. Information Science & Eng."
    },
    {
      id: "focus",
      iconName: "Code",
      label: "Core Focus",
      value: "Full Stack & Data Systems"
    },
    {
      id: "spec",
      iconName: "Cpu",
      label: "Specialization",
      value: "Information Science & Engineering"
    },
    {
      id: "loc",
      iconName: "MapPin",
      label: "Location",
      value: "Bengaluru, India"
    },
    {
      id: "status",
      iconName: "Briefcase",
      label: "Status",
      value: "Open to Full-Time Roles"
    }
  ] as QuickFactItem[],

  highlights: [
    {
      id: "problem-solver",
      iconName: "Target",
      title: "Problem Solver",
      description: "Tackling complex algorithmic and architectural challenges with analytical rigor."
    },
    {
      id: "clean-code",
      iconName: "ShieldCheck",
      title: "Clean Architecture",
      description: "Writing modular, maintainable, and type-safe code adhering to design patterns."
    },
    {
      id: "fast-learner",
      iconName: "Zap",
      title: "Rapid Adapter",
      description: "Quickly mastering emerging frameworks, languages, and modern engineering tools."
    },
    {
      id: "collaboration",
      iconName: "Users",
      title: "Team Collaboration",
      description: "Communicating technical concepts effectively across cross-functional teams."
    }
  ] as HighlightCardItem[],

  stats: [
    { id: "projects", value: 7, label: "Projects Completed", suffix: "+" },
    { id: "tech", value: 5, label: "Technologies Mastered", suffix: "+" },
    { id: "certs", value: 3, label: "Certifications Earned", suffix: "+" },
    { id: "quality", value: 100, label: "Commitment to Quality", suffix: "%" }
  ] as StatItem[]
};
