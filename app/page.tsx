"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTechSection from "@/components/AboutTechSection";
import ProjectsSection from "@/components/ProjectsSection";
import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";
import CVModal from "@/components/CVModal";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAF9] dark:bg-[#0C0C0D] text-foreground flex flex-col selection:bg-[#315CEB] selection:text-white transition-colors duration-300">
      {/* Exact Sticky Top Navbar */}
      <Navbar onOpenCVModal={() => setCvModalOpen(true)} />

      {/* Main Content Flow matching exact reference layout */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Middle Row: Workspace Photo + About Me + Tech Stack Grid */}
        <AboutTechSection onOpenCVModal={() => setCvModalOpen(true)} />

        {/* 3. Featured Projects: Left Title + 4 Horizontal Cards */}
        <ProjectsSection />

        {/* 4. Bottom Row: My Journey Timeline + Milestones Cards + Let's Work Together */}
        <BottomSection onOpenCVModal={() => setCvModalOpen(true)} />
      </main>

      {/* 5. Exact 3-Part Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
