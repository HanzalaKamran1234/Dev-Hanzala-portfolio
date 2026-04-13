"use client";

import { motion } from "framer-motion";
import { Code, Brain, Terminal } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full glass rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] -z-10" />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Left Side: Portrait */}
          <div className="relative flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-accent to-purple-500 animate-glow">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-black border-4 border-black">
                <Image 
                  src="/hanzala.png" 
                  alt="Hanzala Kamran" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center shadow-2xl"
              >
                <Brain className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                <span className="font-mono text-sm tracking-widest text-white/40 uppercase">Developer Profile</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-white/80">
                I'm <span className="text-accent underline underline-offset-8 decoration-accent/30">Hanzala Kamran</span>
              </h3>
            </div>

            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                I am a passionate AI Automation & AI Agent Developer with hands-on experience in 
                building smart automation solutions. I have completed two Python certifications 
                and successfully finished an internship in AI Agents, where I worked on real-world AI workflows.
              </p>
              <p>
                I specialize in Python automation, AI agents, and AI automation systems, helping 
                businesses save time and improve efficiency. I am continuously learning and 
                growing in the field of Artificial Intelligence to deliver high-quality and reliable solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                <Code className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-medium text-white/80">Python Specialist</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                <Brain className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-white/80">AI Agents</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
