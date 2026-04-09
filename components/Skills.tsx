"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal as TerminalIcon, 
  Database, 
  Cpu, 
  Globe, 
  Lock,
  Search,
  Zap
} from "lucide-react";

const skillGroups = [
  {
    category: "Core Python",
    skills: [
      { name: "FastAPI / Flask", icon: Globe },
      { name: "Asynchronous IO", icon: Zap },
      { name: "Scripting & Automation", icon: TerminalIcon },
      { name: "Object Oriented Design", icon: Code2 },
    ]
  },
  {
    category: "Data & Systems",
    skills: [
      { name: "Data Engineering (Pandas/ETL)", icon: Database },
      { name: "Web Scraping (BS4/Selenium)", icon: Search },
      { name: "API Management", icon: Cpu },
      { name: "Secure Systems", icon: Lock },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-4 bg-black/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 blur-[120px] -z-10 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Deep expertise in building robust backends, complex automation suites, and high-performance data systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-[0.2em] px-2">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-accent/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <skill.icon className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" />
                    </div>
                    <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
