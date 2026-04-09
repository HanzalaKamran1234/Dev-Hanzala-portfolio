"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Understanding problem",
    desc: "In-depth analysis of business requirements and identifying core bottlenecks.",
    icon: Search,
  },
  {
    title: "Designing solution",
    desc: "Architecting a modular, scalable system using best practices and modern patterns.",
    icon: PenTool,
  },
  {
    title: "Building system",
    desc: "Precision engineering with high-quality, maintainable Python code.",
    icon: Code,
  },
  {
    title: "Delivering results",
    desc: "Rigorous testing and seamless deployment for immediate business impact.",
    icon: CheckCircle,
  }
];

export default function Process() {
  return (
    <section className="py-24 px-4 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Workflow</h2>
          <h3 className="text-4xl font-display font-bold">How I Work with <span className="text-gradient">Clients</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-[60%] h-[2px] z-0 overflow-hidden">
                  <div className="w-full h-full bg-white/5" />
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: index * 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent w-1/2"
                  />
                  <div className="absolute inset-0 bg-accent/20 blur-sm" />
                </div>
              )}
              
              <div className="relative z-10 w-20 h-20 bg-white/5 border border-white/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500 shadow-xl overflow-hidden">
                <step.icon className="w-8 h-8 text-white/40 group-hover:text-accent transition-colors duration-500" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-black shadow-lg">
                  0{index + 1}
                </span>
                
                {/* Scanner effect on hover */}
                <motion.div
                  initial={{ top: "-100%" }}
                  whileHover={{ top: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-accent/10 to-transparent pointer-events-none"
                />
              </div>
              
              <h4 className="text-lg font-display font-bold mb-3 group-hover:text-white transition-colors">
                {step.title}
              </h4>

              <p className="text-sm text-white/50 leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
