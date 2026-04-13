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
    id: "cloud-scaler",
    title: "Cloud Infrastructure Auto-Scaler",
    description: "Intelligent resource management system that adjusts server capacity based on real-time demand metrics.",
    problem: "Static cloud resources lead to either wasted costs or system crashes during traffic spikes.",
    solution: "Dynamic scaling system that monitors CPU/RAM usage and automates resource provisioning.",
    tech: ["Python", "AWS SDK", "Monitoring", "DevOps"],
    features: ["Real-time monitoring", "Cost optimization", "Automatic provisioning", "Incident alerts"],
    category: "Automation",
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
    id: "churn-predictor",
    title: "Predictive Churn Model",
    description: "Machine learning solution that identifies at-risk customers before they leave the platform.",
    problem: "SaaS companies struggle to retain customers due to lack of early predictive insights.",
    solution: "Trained Random Forest model that analyzes usage patterns to rank churn probability.",
    tech: ["Python", "Scikit-Learn", "NumPy", "MLOps"],
    features: ["Usage analysis", "Risk scoring", "Automated re-engagement", "Performance metrics"],
    category: "AI",
  },
  {
    id: "automation-bot",
    title: "Intelligent Workflow Bot",
    description: "Custom automation bot designed to handle repetitive client tasks across multiple platforms.",
    problem: "Legacy businesses lose hours to manual data entry and cross-platform syncing.",
    solution: "Automated workflow bot that interfaces with multiple APIs to sync data in real-time.",
    tech: ["Python", "Requests", "Scheduling", "API Integration"],
    features: ["Real-time syncing", "Error handling", "Configurable workflows", "Detailed logs"],
    category: "Automation",
  },
  {
    id: "crypto-dashboard",
    title: "Crypto Sentiment Dashboard",
    description: "Real-time tracker that aggregates and analyzes social sentiment for various cryptocurrencies.",
    problem: "Traders struggle to keep up with fast-moving market sentiment across social media.",
    solution: "Integrated scraper and NLP engine that provides live sentiment scores and alerts.",
    tech: ["Python", "Websockets", "NLP", "Pandas"],
    features: ["Live sentiment analysis", "Social media scraping", "Price correlation", "Custom alerts"],
    category: "Data",
  },
  {
    id: "lead-scraper",
    title: "Multi-Source Lead Engine",
    description: "High-performance scraper that generates targeted leads from professional directories.",
    problem: "Sales teams spend too much time manually finding and verifying prospect contact info.",
    solution: "Automated engine that extracts, cleans, and verifies leads from LinkedIn and specialized industry sites.",
    tech: ["Python", "Playwright", "Regular Expressions", "Search"],
    features: ["Automated extraction", "Email verification", "CSV/CRM integration", "Scheduled runs"],
    category: "Automation",
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
