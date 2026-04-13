"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Layers, Zap } from "lucide-react";
import { Project } from "@/lib/projects";

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "AI": return <Zap className="w-4 h-4" />;
    case "Automation": return <Code2 className="w-4 h-4" />;
    case "Data": return <Layers className="w-4 h-4" />;
    default: return <Code2 className="w-4 h-4" />;
  }
};

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass rounded-2xl p-6 glow-hover transition-all flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
          <CategoryIcon category={project.category} />
          {project.category}
        </div>
        <div className="flex gap-2">
          {project.tech.slice(0, 2).map((t) => (
            <span key={t} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/40 font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      
      <p className="text-sm text-white/60 mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-black/40 border border-white/5">
          <p className="text-[10px] uppercase tracking-tighter text-white/40 mb-1">Problem</p>
          <p className="text-xs text-white/70 italic line-clamp-2">"{project.problem}"</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono text-white/30">#{t.toLowerCase().replace(" ", "")}</span>
          ))}
        </div>

        <a 
          href="https://github.com/HanzalaKamran1234" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold hover:bg-white hover:text-black transition-all group-hover:border-transparent"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};
