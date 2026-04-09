"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import { Navbar, Contact, Footer } from "@/components/Layout";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
    }
  }, []);

  const handleComplete = () => {
    setLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
  };

  return (
    <main className="relative min-h-screen bg-[#0D0D0D]">
      <AnimatePresence>
        {loading && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <ProjectGrid />
          <Skills />
          <Process />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
