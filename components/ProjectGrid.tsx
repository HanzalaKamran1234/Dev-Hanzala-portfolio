import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === activeCategory);

  const categories = ["ALL", "AUTOMATION", "AI", "DATA"];

  return (
    <section id="projects" className="py-24 px-4 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured <span className="text-gradient">Projects</span></h3>
            <p className="mt-4 text-white/60 leading-relaxed">
              A curated selection of real-world Python applications developed to solve actual business challenges. 
              Each project represents a commitment to scalability and precision.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 font-mono text-xs text-white/40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-all duration-300 hover:text-white relative pb-1 ${
                  activeCategory === cat ? "text-accent font-bold" : ""
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
