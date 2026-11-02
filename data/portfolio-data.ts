export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  role: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  iconName: string;
}

export interface TechCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    level?: string;
    tag?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Julfikar Ali",
  firstName: "Julfikar",
  lastName: "Ali",
  monogram: "JA",
  tagline: "Full-Stack Developer | AI & ML Engineer",
  shortRole: "Full-Stack Developer & Product Engineer",
  intro: "B.Tech CSE (AI & ML) student with hands-on experience in full-stack development, AI-powered applications, and machine learning.",
  availableStatus: "Available for Opportunities",
  editorialNote: "Dream Big, Build Bigger",
  location: "Kolkata, India",
  college: "Narula Institute of Technology",
  degree: "B.Tech Computer Science & Engineering (AI & ML)",
  graduationYear: "Expected June 2027 · CGPA: 7.22/10",
  careerGoal: "Full-Stack Developer / AI & ML Engineer",
  aboutHeading: "Turning Ideas into Impact.",
  aboutBio: "I'm a B.Tech CSE (AI & ML) student at Narula Institute of Technology, Kolkata, with hands-on experience in full-stack development, AI-powered applications, and machine learning. I enjoy building scalable software that solves real problems.",
  email: "julfikar4277@gmail.com",
  socials: {
    github: "https://github.com/julfikar-ali",
    linkedin: "https://linkedin.com/in/mrjulfikar",
    youtube: "https://youtube.com/@julfikar-ali",
    twitter: "https://x.com/julfikar_ali",
  },
  stats: {
    leetcode: "150+",
    hackathons: "10+",
    internships: "2",
    graduation: "2027",
  },
  portrait: "/assets/julfikar_back_er.png",
  portraitFull: "/assets/julfikar_Ali.png",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "growup-ai",
    number: "01",
    title: "GrowUp AI",
    category: "AI-Powered Fashion & Glow Up App",
    description: "A mobile application published on Google Play, handling the full cycle from development to Play Store release.",
    longDescription: "Developed and published GrowUp AI, a Flutter and Firebase mobile application on Google Play that has reached 3.5K+ downloads.",
    technologies: ["Flutter", "Firebase", "Google Play"],
    image: "/assets/project-easyfolio1.png",
    demoUrl: "https://youtu.be/MbzQ1yXqy7E?si=TtTWBQlm4Z7aTHG0",
    githubUrl: "https://github.com/julfikar-91/growup-ai",
    badge: "Mobile Application",
    highlights: [
      "Published on Google Play",
      "Reached 3.5K+ downloads",
      "Built with Flutter and Firebase",
      "Managed the development-to-release lifecycle"
    ],
  },
  {
    id: "biosearch",
    number: "02",
    title: "PubMed AI Semantic Search Engine",
    category: "Biomedical Semantic Search Engine",
    description: "Biomedical literature search platform with an 8-stage NLP and semantic retrieval pipeline.",
    longDescription: "Built a biomedical literature search platform with an 8-stage NLP and semantic retrieval pipeline, a React and TypeScript frontend, and a FastAPI backend.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS", "Sentence Transformers", "Gemini API", "NCBI API", "AWS", "Vercel"],
    image: "/assets/project-artgenio1.png",
    demoUrl: "https://youtu.be/5cHpHnMxP9M?si=OWhM2H-c6KUYdXqY",
    githubUrl: "https://github.com/julfikar-91/biosearch-nlp",
    badge: "NLP & Semantic Search",
    highlights: [
      "8-stage NLP and semantic retrieval pipeline",
      "Dense vector search with Sentence Transformers",
      "Automated paper retrieval through the NCBI Entrez API",
      "Gemini-powered query expansion, MeSH validation, and hybrid reranking"
    ],
  },
  {
    id: "betazenx-erp",
    number: "03",
    title: "School Management System",
    category: "Full-Stack School Management Platform",
    description: "A full-stack platform with role-based access control for Super Admin, Admin, Teacher, and Student.",
    longDescription: "Built a full-stack school management platform with role-based access control for Super Admin, Admin, Teacher, and Student, RESTful APIs, and AI-powered assistance through the Gemini API.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "DigitalOcean", "Gemini API"],
    image: "/assets/hero1.png",
    demoUrl: "https://youtu.be/HEBnoFdxedU?si=lUYrhjv1-n-t7w7R",
    githubUrl: "https://github.com/julfikar-ali/betazenx-erp",
    badge: "Full-Stack Platform",
    highlights: [
      "Role-based access for Super Admin, Admin, Teacher, and Student",
      "RESTful APIs with Node.js and Express.js",
      "Responsive Next.js and TypeScript frontend",
      "PostgreSQL deployment on DigitalOcean with Gemini-powered assistance"
    ],
  },
  {
    id: "causal-ai-advisory",
    number: "04",
    title: "Causal AI Advisory Pipeline",
    category: "Ongoing B.Tech Final-Year Research",
    description: "An advisory pipeline for Indian agriculture that combines crop imagery, soil and weather data with causal RAG.",
    longDescription: "Designing a Causal AI advisory pipeline for Indian agriculture. It uses crop photos, soil and weather data to identify problems, remedies, and underlying causes, supported by an agricultural knowledge graph and multi-agent verification.",
    technologies: ["Python", "Gemini Vision API", "Knowledge Graph", "RAG", "Bhashini API"],
    image: "/assets/exact/workspace.png",
    badge: "Ongoing Research",
    highlights: [
      "Crop image, soil, and weather-aware diagnosis pipeline",
      "Indian agricultural knowledge graph using ICAR and public sources",
      "Multi-agent verification with a critic agent",
      "Planned Bengali, Hindi, and Indian-language output via Bhashini API"
    ],
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    category: "Programming",
    description: "Foundational languages for robust systems and algorithmic computing",
    skills: [
      { name: "Java", icon: "SiOpenjdk", tag: "Enterprise & OOP" },
      { name: "Python", icon: "SiPython", tag: "AI / Data / Backend" },
      { name: "JavaScript", icon: "SiJavascript", tag: "Web Standard" },
      { name: "TypeScript", icon: "SiTypescript", tag: "Type-Safe Modern Web" },
      { name: "SQL", icon: "SiPostgresql", tag: "Relational Queries" },
      { name: "C", icon: "SiC", tag: "Systems & Memory" },
    ],
  },
  {
    category: "Frontend",
    description: "Crafting responsive, accessible, and high-performance interfaces",
    skills: [
      { name: "React", icon: "SiReact", tag: "Component Architecture" },
      { name: "Next.js", icon: "SiNextdotjs", tag: "App Router & SSR" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", tag: "Utility-First Styling" },
    ],
  },
  {
    category: "Backend",
    description: "Scalable API architectures, microservices, and asynchronous systems",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", tag: "Runtime Engine" },
      { name: "Express.js", icon: "SiExpress", tag: "RESTful Framework" },
      { name: "FastAPI", icon: "SiFastapi", tag: "High-Speed Async Python" },
    ],
  },
  {
    category: "Database",
    description: "Data modeling, indexing, relational consistency, and NoSQL stores",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql", tag: "ACID Relational" },
      { name: "MySQL", icon: "SiMysql", tag: "Structured Data" },
      { name: "MongoDB", icon: "SiMongodb", tag: "Document Store" },
      { name: "Firebase", icon: "SiFirebase", tag: "Real-time & Auth" },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "State-of-the-art embedding models, vector retrieval, and LLMs",
    skills: [
      { name: "Sentence Transformers", icon: "SiTensorflow", tag: "Dense Embeddings" },
      { name: "Semantic Search", icon: "SiScikitlearn", tag: "Vector Similarity" },
      { name: "Hybrid Retrieval", icon: "SiPytorch", tag: "Dense + Sparse" },
      { name: "RAG", icon: "SiGooglecloud", tag: "Augmented Generation" },
      { name: "Gemini API", icon: "SiGooglegemini", tag: "Multimodal Foundation" },
    ],
  },
  {
    category: "Cloud & Deployment",
    description: "Containerization, serverless infrastructure, and automated delivery",
    skills: [
      { name: "AWS", icon: "SiAmazonwebservices", tag: "Compute & S3" },
      { name: "Vercel", icon: "SiVercel", tag: "Edge & Frontend CI" },
      { name: "DigitalOcean", icon: "SiDigitalocean", tag: "Droplets & VPC" },
      { name: "Docker", icon: "SiDocker", tag: "Containerization" },
    ],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "sbh-2025",
    title: "Smart Bengal Hackathon 2025 — Finalist",
    organization: "RCCIIT, Kolkata",
    location: "Kolkata, India",
    period: "2025",
    role: "Finalist",
    badge: "Finalist",
    description: "Finalist at Smart Bengal Hackathon 2025, hosted at RCCIIT.",
    skills: ["Hackathon", "Problem Solving", "Rapid Prototyping"],
  },
  {
    id: "internship-nit",
    title: "10-Week AI & Machine Learning Virtual Internship",
    organization: "Virtual Internship",
    location: "Kolkata, India",
    period: "2026",
    role: "AI & Machine Learning Intern",
    badge: "10 Weeks",
    description: "Successfully completed a 10-week AI & Machine Learning Virtual Internship.",
    skills: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    id: "ml-data-science-internship",
    title: "8-Week Machine Learning & Data Science Virtual Internship",
    organization: "Narula Institute of Technology",
    location: "Kolkata, India",
    period: "August – October 2026",
    role: "Machine Learning & Data Science Intern",
    badge: "8 Weeks",
    description: "Successfully completed an 8-week Machine Learning & Data Science Virtual Internship.",
    skills: ["Machine Learning", "Data Science"],
  },
  {
    id: "freelance-client",
    title: "Freelance Full-Stack Developer & Product Engineer",
    organization: "Independent",
    location: "Global / Remote",
    period: "2024 – Present",
    role: "Full-Stack Developer & Product Engineer",
    badge: "Independent",
    description: "Developed 20+ projects, including QR-based digital menus, online food delivery platforms, school management systems, and other custom software solutions. Collaborated with clients and team members to develop, deploy, and improve products.",
    skills: ["Full-Stack Development", "Product Engineering", "Client Collaboration", "Rapid Prototyping"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "leetcode",
    number: "150+",
    title: "LeetCode Problems Solved",
    subtitle: "Data Structures, Algorithms & Algorithmic Problem Solving",
    category: "Competitive Coding",
    iconName: "Code2",
  },
  {
    id: "sbh",
    number: "Finalist",
    title: "Smart Bengal Hackathon 2025",
    subtitle: "RCCIIT · Smart Bengal Hackathon Finalist",
    category: "Statewide Hackathon",
    iconName: "Trophy",
  },
  {
    id: "internships",
    number: "2",
    title: "Virtual Internships",
    subtitle: "AI & Machine Learning · Machine Learning & Data Science",
    category: "Professional Experience",
    iconName: "Briefcase",
  },
  {
    id: "hackathons",
    number: "10+",
    title: "Hackathon Participations",
    subtitle: "Collaborative builder, rapid prototyper, and engineering lead",
    category: "Innovation & Sprints",
    iconName: "Flame",
  },
];

