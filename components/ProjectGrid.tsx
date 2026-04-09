"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export default function ProjectGrid() {
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
          <div className="flex gap-2 font-mono text-xs text-white/40">
            <span className="text-accent underline underline-offset-4">ALL</span>
            <span className="hover:text-white cursor-pointer transition-colors">AUTOMATION</span>
            <span className="hover:text-white cursor-pointer transition-colors">AI</span>
            <span className="hover:text-white cursor-pointer transition-colors">DATA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
