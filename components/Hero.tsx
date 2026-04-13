"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronRight, Play } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const TerminalEffect = () => {
  const [text, setText] = useState("");
  const fullText = "python engineer --analyze-market --automate-workflow --deploy-scalable-app";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="flex items-center gap-2 font-mono text-sm md:text-base text-accent">
      <span className="text-green-500">➜</span>
      <span className="text-purple-400">~/hanzala-dev</span>
      <span className="text-white">$</span>
      <span>{text}</span>
      <span className="w-2 h-5 bg-accent animate-pulse" />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
            Available for premium client work
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
          Python Developer Building <br />
          <span className="text-gradient">Real-World Solutions</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build scalable, automation-driven, and client-ready Python applications. 
          Turning complex problems into elegant, production-grade systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
            Hire Me
          </button>
          <a 
            href="https://github.com/HanzalaKamran1234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black/40 border border-white/10 text-white font-semibold rounded-full backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/20 active:scale-95 flex items-center gap-2"
          >
            <GithubIcon /> GitHub
          </a>
        </div>

        {/* Terminal Simulation */}
        <div className="max-w-2xl mx-auto glass rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <div className="flex-1 text-center font-mono text-[10px] text-white/40 uppercase tracking-widest">
              bash — 80x24
            </div>
          </div>
          <div className="p-6 text-left min-h-[100px] flex flex-col justify-center">
            <TerminalEffect />
          </div>
        </div>
      </motion.div>

      <div className="scanline" />
    </section>
  );
}
