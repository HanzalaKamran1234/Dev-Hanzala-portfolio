"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const messages = [
  "Initializing Hanzala-Dev Runtime...",
  "Mounting /system/python-core...",
  "Loading Advanced Automation Modules...",
  "Fetching Real-World Project Data...",
  "Optimizing Cinematic UI...",
  "Ready to Build."
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [currentMsg, setCurrentMsg] = useState(0);

  useEffect(() => {
    if (currentMsg < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMsg((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(finalTimer);
    }
  }, [currentMsg, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0D0D0D] flex flex-col items-center justify-center p-4"
    >
      <div className="max-w-md w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <Terminal className="w-6 h-6 text-black" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white tracking-tight">Hanzala Dev</h2>
        </div>

        <div className="space-y-2 mb-8">
          {messages.slice(0, currentMsg + 1).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm flex items-center gap-2"
            >
              <span className={i === currentMsg ? "text-accent" : "text-white/20"}>
                {i === currentMsg ? "➜" : "✓"}
              </span>
              <span className={i === currentMsg ? "text-white" : "text-white/40"}>{msg}</span>
            </motion.div>
          ))}
        </div>

        {/* Technical Progress Bar */}
        <div className="relative w-full h-[1px] bg-white/5 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (currentMsg + 1) / messages.length }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-accent origin-left"
          />
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>

        <div className="mt-4 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-white/20">
          <span>0xHanzala_Init</span>
          <span>{Math.round(((currentMsg + 1) / messages.length) * 100)}%</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>
    </motion.div>
  );
}
