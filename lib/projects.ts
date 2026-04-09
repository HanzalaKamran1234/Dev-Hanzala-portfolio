export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  category: "Automation" | "Web App" | "Data" | "API" | "AI";
}

export const projects: Project[] = [
  {
    id: "ai-content-generator",
    title: "AI Content Generation Engine",
    description: "An advanced content creation engine that transforms prompts into high-quality blogs, emails, or ads.",
    problem: "Manual content creation is slow and inconsistent for marketing teams.",
    solution: "Scalable AI-driven engine with tone-of-voice control and history logging.",
    tech: ["Python", "OpenAI API", "JSON", "Automation"],
    features: ["Multiple content formats", "Tone selection", "History persistence", "Modular API structure"],
    category: "AI",
  },
  {
    id: "saas-backend",
    title: "Full-Stack SaaS Backend",
    description: "A production-ready SaaS foundation with secure authentication and dashboard management.",
    problem: "Developers need a secure, reusable starter for subscription-based apps.",
    solution: "Secure Flask-based system with SQLite persistence and Werkzeug password hashing.",
    tech: ["Flask", "SQLite", "Werkzeug", "Flask-Login"],
    features: ["User Auth", "Role-based views", "Persistent DB", "Responsive Dashboard"],
    category: "Web App",
  },
  {
    id: "data-etl-pipeline",
    title: "Enterprise ETL Pipeline",
    description: "A robust data processing pipeline for enterprise-level data transformation.",
    problem: "Raw data from varied sources needs cleaning and structured storage.",
    solution: "Asynchronous processing pipeline with validation and error logging.",
    tech: ["Python", "Pandas", "Asyncio", "Logging"],
    features: ["Multi-source ingestion", "Data validation", "Automated cleanses", "Detailed reporting"],
    category: "Data",
  },
  {
    id: "automation-bot",
    title: "Intelligent Automation Bot",
    description: "Custom automation bot designed to handle repetitive client tasks at scale.",
    problem: "Legacy businesses lose hours to manual data entry and cross-platform syncing.",
    solution: "Automated workflow bot that interfaces with multiple APIs to sync data in real-time.",
    tech: ["Python", "Requests", "Scheduling", "API Integration"],
    features: ["Real-time syncing", "Error handling", "Configurable workflows", "Detailed logs"],
    category: "Automation",
  },
  {
    id: "realtime-chat",
    title: "Real-time Collaboration System",
    description: "Scalable websocket-based chat system for instant communication.",
    problem: "Distributed teams need fast, reliable communication shells.",
    solution: "Low-latency system optimized for high concurrency and message persistence.",
    tech: ["Python", "Websockets", "Redis", "FastAPI"],
    features: ["Instant messaging", "Room management", "Online status", "Message history"],
    category: "Web App",
  },
  {
    id: "stock-tracker",
    title: "Precision Stock Analytics",
    description: "Financial tracking tool with real-time data analysis and alerts.",
    problem: "Traders need accurate, low-latency financial insights.",
    solution: "Data-driven tool that scrapes and analyzes market trends with custom alerts.",
    tech: ["Python", "BeautifulSoup", "Analysis", "SMTP"],
    features: ["Market scraping", "Trend analysis", "Email alerts", "Visual reports"],
    category: "Data",
  }
];
