import syncupImg from '../assets/projects/syncup.png';
import agritechImg from '../assets/projects/agritech.jpeg';
import blogImg from '../assets/projects/personalblog.png';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  status: 'Production Ready' | 'Completed' | 'In Progress';
  category: 'Blockchain' | 'Full Stack' | 'Frontend' | 'WebAssembly';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  problemStatement?: string;
  solutionSummary?: string;
  keyFeatures: string[];
  metrics: ProjectMetric[];
  achievements?: string[];
  architecture?: string;
  challenges?: string;
  lessonsLearned?: string;
}

export type Project = ProjectItem;

export const projectsData: ProjectItem[] = [
  {
    id: "agritech",
    title: "Agritech Blockchain Supply Chain",
    isFeatured: true,
    status: "Completed",
    category: "Blockchain",
    description: "A decentralized agri-food supply chain platform leveraging smart contracts, peer-to-peer networking, and SHA-256 cryptographic hashing to eliminate supply fraud and deliver complete food traceability.",
    tags: ["Blockchain", "Smart Contracts", "SHA-256", "P2P Network", "JavaScript"],
    githubUrl: "https://github.com/Sameer-0501/AGRITECH-Blockchain-Based-Argi-Food-Supply-Chain-Management",
    liveUrl: "",
    image: agritechImg,
    problemStatement: "Traditional food supply chains suffer from a lack of transparency, susceptibility to fraud, and delayed provenance tracking between producers and consumers.",
    solutionSummary: "Engineered an immutable, peer-to-peer blockchain application with automated smart contracts that track crop batches from farm to retail with cryptographic proof.",
    keyFeatures: [
      "Decentralized P2P Ledger",
      "Automated Smart Contracts",
      "SHA-256 Cryptographic Hashing",
      "Batch Provenance Tracking",
      "Transparent Audit Trail"
    ],
    metrics: [
      { label: "Cryptographic Nodes", value: "P2P" },
      { label: "Smart Contracts", value: "4" },
      { label: "Security Level", value: "SHA-256" }
    ],
    achievements: [
      "Developed a decentralized food supply chain application using blockchain technology",
      "Implemented secure smart contracts for automated, transparent transactions",
      "Integrated P2P networking for decentralized data distribution",
      "Utilized SHA-256 cryptographic hashing to ensure data integrity"
    ],
    architecture: "Decentralized Node Network with SHA-256 Hashing, Smart Contract Validation Layer, and Responsive Client Portal.",
    challenges: "Ensuring low-latency P2P block propagation while preserving cryptographic integrity across distributed verification nodes.",
    lessonsLearned: "Gained deep insights into cryptographic verification protocols, immutability patterns, and decentralized state consensus."
  },
  {
    id: "Syncbuddy",
    title: "Syncbuddy - Real-Time Collaborative Workspace",
    isFeatured: false,
    status: "Production Ready",
    category: "Full Stack",
    description: "A high-performance project and task management platform featuring dynamic drag-and-drop boards, real-time REST backend endpoints, and complex relational PostgreSQL schemas.",
    tags: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Sameer-0501/syncbuddy",
    liveUrl: "",
    image: syncupImg,
    problemStatement: "Teams require frictionless workspace coordination to track multi-stage software sprints without complex overhead or delayed state updates.",
    solutionSummary: "Built a responsive, Trello-inspired full-stack application with a modular React frontend connected to an Express/PostgreSQL backend.",
    keyFeatures: [
      "Interactive Drag & Drop Boards",
      "RESTful API Endpoints",
      "Relational PostgreSQL Schema",
      "User & Team Role Permissions",
      "Responsive Glassmorphic UI"
    ],
    metrics: [
      { label: "API Endpoints", value: "14+" },
      { label: "DB Tables", value: "6" },
      { label: "Components", value: "22" }
    ],
    achievements: [
      "Architected a real-time collaborative workspace mimicking core Trello functionality",
      "Built a responsive, dynamic user interface utilizing React.js and Tailwind CSS",
      "Designed and implemented a robust RESTful API using Node.js and Express",
      "Managed complex relational data structures utilizing PostgreSQL"
    ],
    architecture: "React 18 Component Frontend -> Express REST Controller -> PostgreSQL Database Layer.",
    challenges: "Managing state synchronization across complex nested task cards while maintaining smooth 60fps drag-and-drop UX.",
    lessonsLearned: "Mastered relational data normalization and optimistic UI state updating."
  },
  {
    id: "prp",
    title: "Placement Readiness Platform (PRP)",
    isFeatured: false,
    status: "Completed",
    category: "Frontend",
    description: "A type-safe analytics and readiness tracking dashboard enabling engineering students to evaluate interview preparedness, track skill milestones, and benchmark progress.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Sameer-0501/placement-readiness-platform",
    liveUrl: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    problemStatement: "Students preparing for engineering placement drives lack structured data visualizations to track technical preparedness across domain topics.",
    solutionSummary: "Created a type-safe, interactive dashboard built with React 18 and TypeScript that calculates readiness metrics and visualizes progress.",
    keyFeatures: [
      "Comprehensive Analytics Dashboard",
      "100% Strict TypeScript Safety",
      "Skill Benchmark Calculators",
      "Framer Motion Micro-Interactions",
      "Fully Mobile-Responsive"
    ],
    metrics: [
      { label: "Type Coverage", value: "100%" },
      { label: "Dashboard Widgets", value: "8" },
      { label: "React Features", value: "v18" }
    ],
    achievements: [
      "Built a comprehensive student analytics dashboard",
      "Implemented complete type safety across the entire application stack",
      "Created a fully responsive design for seamless mobile and desktop use",
      "Optimized rendering performance using React 18 concurrent features"
    ],
    architecture: "React 18 + TypeScript strict architecture utilizing custom hooks for state computation and Framer Motion visual rendering.",
    challenges: "Designing multi-dimensional benchmark calculations while guaranteeing bulletproof TypeScript typings.",
    lessonsLearned: "Deepened expertise in strict TypeScript generics, React custom hooks, and data visualization UX."
  },
  {
    id: "blog",
    title: "Personal Recipe & Tech Blog",
    isFeatured: false,
    status: "Completed",
    category: "WebAssembly",
    description: "A Blazor WebAssembly full-stack application featuring client-side C# rendering, an ASP.NET Core REST Web API backend, and shared domain models for seamless client-server parity.",
    tags: ["C#", "ASP.NET Core", "Blazor WebAssembly", "REST API"],
    githubUrl: "https://github.com/Sameer-0501/PersonalBlog-or-recipe-blog",
    liveUrl: "",
    image: blogImg,
    problemStatement: "Bridging client-side web interfaces with server-side C# code often requires duplicate code models across JavaScript and C#.",
    solutionSummary: "Architected a single-language full-stack web application with Blazor WebAssembly executing C# directly in the browser.",
    keyFeatures: [
      "Blazor WebAssembly Client",
      "ASP.NET Core Web API",
      "Shared C# Domain Models",
      "Full CRUD Content Management",
      "RESTful API Integration"
    ],
    metrics: [
      { label: "C# Code Parity", value: "100%" },
      { label: "API Endpoints", value: "10+" },
      { label: "Runtime", value: "Wasm" }
    ],
    achievements: [
      "Developed a full-stack WebAssembly application using Blazor",
      "Engineered a secure server-side ASP.NET Core REST API",
      "Implemented robust CRUD functionality for dynamic recipe & post management",
      "Architected shared C# models connecting the client and server seamlessly"
    ],
    architecture: "Blazor Single Page Application executing in WebAssembly -> ASP.NET Core Web API -> Entity Controller Layer.",
    challenges: "Optimizing initial Wasm bundle load times and managing asynchronous WebAssembly HTTP calls.",
    lessonsLearned: "Gained hands-on proficiency in modern .NET web ecosystems, WebAssembly compilation, and C# full-stack architectures."
  }
];
