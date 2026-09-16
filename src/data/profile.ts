export const profile = {
  name: "Yuvraj Singh",
  firstName: "Yuvraj",
  fullName: "Yuvraj Singh",
  title: "AI/ML Engineer & AI Integration Specialist",
  headline:
    "I design, build and integrate intelligent systems that combine modern machine learning with practical, search-optimized software — turning data into products recruiters and businesses can verify and trust.",
  tagline: "Building AI-native products with verified, measurable results.",
  email: "yuvrajsingh45842@gmail.com",
  location: {
    current: "Jaipur, Rajasthan, India",
    origin: "Sasaram, Rohtas, Bihar, India",
    timezone: "IST · UTC+5:30",
  },
  university: {
    name: "Jagannath University",
    city: "Jaipur",
    program: "B.Tech in Computer Science & Engineering",
    enrolled: "Pursuing",
  },
  agenticBrowsingScore: "3/3",
  techStack: [
    "Python",
    "JavaScript / TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Machine Learning",
    "Deep Learning",
    "LangChain",
    "RAG Systems",
    "Prompt Engineering",
    "Tailwind CSS",
    "REST APIs",
  ],
  links: {
    github: "https://github.com/yuvraj860-hue",
    githubUsername: "yuvraj860-hue",
    linkedin: "https://www.linkedin.com/in/yuvraj-singh-1742a3393/",
    linkedinUsername: "yuvraj-singh-1742a3393",
    email: "yuvrajsingh45842@gmail.com",
  },
} as const;

export const domains = [
  {
    abbreviation: "AI/ML",
    name: "AI & Machine Learning",
    description:
      "Hands-on experience building machine learning pipelines, deep learning models, and data-driven features that solve real business problems.",
    icon: "BrainCircuit",
  },
  {
    abbreviation: "AI Integration",
    name: "AI Integration & Agents",
    description:
      "Wiring LLMs into production products using APIs, embeddings, retrieval pipelines and prompt systems — delivering a perfect agentic browsing score of 3/3.",
    icon: "Bot",
  },
  {
    abbreviation: "SEO",
    name: "Search Engine Optimization",
    description:
      "Structuring content, metadata and architecture so products rank, load fast and get discovered by real users on Google and beyond.",
    icon: "Search",
  },
  {
    abbreviation: "AEO",
    name: "Answer Engine Optimization",
    description:
      "Formatting information so it is directly extractable as clear, direct answers by answer engines like ChatGPT, Perplexity and AI Overviews.",
    icon: "MessagesSquare",
  },
  {
    abbreviation: "GEO",
    name: "Generative Engine Optimization",
    description:
      "Optimizing for generative search engines by making content authoritative, quote-worthy and contextually structured for AI-generated results.",
    icon: "Sparkles",
  },
  {
    abbreviation: "LLMO",
    name: "Large Language Model Optimization",
    description:
      "Designing context-aware, token-efficient content and systems that LLMs can reliably parse, cite and surface in references.",
    icon: "FileText",
  },
  {
    abbreviation: "AISEO",
    name: "AI Search Optimization",
    description:
      "A combined modern strategy so that brands are visible across classic search, AI assistants and conversational interfaces simultaneously.",
    icon: "Globe",
  },
  {
    abbreviation: "EEAT",
    name: "Experience, Expertise, Authoritativeness, Trustworthiness",
    description:
      "Building genuinely verifiable proof — real projects, real certificates, real profiles — the quality signals Google and AI engines evaluate.",
    icon: "ShieldCheck",
  },
] as const;

export const stats = [
  {
    value: "3/3",
    label: "Agentic Browsing Score",
  },
  {
    value: "8+",
    label: "Search & AI Domains",
  },
  {
    value: "2",
    label: "Certified Internships",
  },
  {
    value: "1+",
    label: "Years Building Products",
  },
] as const;

export const projects = [
  {
    name: "Stylio — AI-Enhanced Online Shopping",
    role: "Solo Developer",
    description:
      "A full-stack online shopping platform engineered for speed, trust and discoverability. Built for the way today's customers actually shop — across mobile, web and AI-driven discovery channels.",
    highlights: [
      "Modern product catalog & cart experience built with a component-driven frontend architecture",
      "Optimized Core Web Vitals and semantic markup so pages load fast and appear in search results",
      "Clean REST API integrations and structured data for AI-engine visibility",
      "Responsive UI that works seamlessly on desktop, tablet and mobile",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    github: "https://github.com/yuvraj860-hue/stylio",
    status: "Public Repository",
    featured: true,
  },
] as const;

export const certifications = [
  {
    title: "6-Week Internship Certificate",
    duration: "6 Weeks",
    focus: "Advanced Development & Engineering",
    description:
      "Completed a full 6-week professional internship, applying production development practices, project delivery and engineering fundamentals in a structured, mentor-guided environment.",
    url: "https://drive.google.com/file/d/1G1agQUWK6UYR9G5wFJjzarH5xWqwEExg/view?usp=sharing",
    durationLabel: "6 Weeks",
  },
  {
    title: "4-Week Internship Certificate",
    duration: "4 Weeks",
    focus: "Technical Foundations & Deployment",
    description:
      "Completed a focused 4-week internship covering core development workflows, tooling, version control and practical deployment — evidence of disciplined, timely delivery.",
    url: "https://drive.google.com/file/d/11PGMyZdZ4e_ORXhqnfC9S64mLkR0jfiZ/view?usp=sharing",
    durationLabel: "4 Weeks",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;