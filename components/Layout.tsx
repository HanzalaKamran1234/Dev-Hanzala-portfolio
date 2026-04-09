"use client";

import { Terminal, Send, MessageSquare } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/[0.08] backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Terminal className="w-5 h-5 text-black" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">Hanzala Dev</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform active:scale-95">
          Resume
        </button>
      </div>
    </nav>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -z-10" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Let's build something <span className="text-gradient">powerful</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              I'm always looking for new challenges and interesting projects. 
              Whether you have a specific problem to solve or just want to chat about automation, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                  <Send className="w-4 h-4" />
                </div>
                <span>hello@hanzala.dev</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Schedule a 15m consultation</span>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
            <button type="button" className="w-full py-4 bg-accent text-black font-bold rounded-xl hover:opacity-90 transition-opacity active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 transition-opacity cursor-default">
          <Terminal className="w-4 h-4" />
          <span className="font-mono text-xs uppercase tracking-widest">Built with precision & Python</span>
        </div>
        
        <div className="text-white/40 text-xs font-mono">
          © {new Date().getFullYear()} HANZALA DEV. ALL SYSTEMS OPERATIONAL.
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 hover:text-accent transition-colors"><GithubIcon /></a>
          <a href="#" className="p-2 hover:text-accent transition-colors"><LinkedinIcon /></a>
        </div>
      </div>
    </footer>
  );
};

