"use client";

import Image from "next/image";
import { ArrowRight, Code2, GraduationCap, MapPin, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  const keyDetails = [
    {
      icon: GraduationCap,
      label: "Academic Degree",
      value: "B.Tech CSE (AI & ML)",
      sub: "Narula Institute of Technology",
    },
    {
      icon: Target,
      label: "Graduation Target",
      value: "Expected June 2027",
      sub: "Academic Session 2023–2027",
    },
    {
      icon: MapPin,
      label: "Current Base",
      value: "Kolkata, India",
      sub: "Open to Relocation & Remote",
    },
    {
      icon: Sparkles,
      label: "Career Trajectory",
      value: "Software Engineer / Tech Lead",
      sub: "Scalable Systems & AI Innovation",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-12 sm:mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-royal-600 dark:text-royal-400 font-semibold">
            // 01. ABOUT ME
          </span>
          <div className="h-[1px] w-12 bg-royal-500/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Monochrome Workspace & Floating LeetCode Card (Cols 1-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-border/80 bg-card shadow-card group">
              
              {/* Premium Monochrome Workspace Setup */}
              <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
                <Image
                  src="/assets/hero1.png"
                  alt="Modern developer workspace with laptop, code editor, and clean aesthetic"
                  fill
                  className="object-cover grayscale contrast-125 opacity-90 transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
                
                {/* Architectural gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Workspace Monogram Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 uppercase mb-1">
                    <span>ENGINEERING WORKSPACE</span>
                    <span>•</span>
                    <span>STUDIO</span>
                  </div>
                  <p className="text-sm font-light text-neutral-200">
                    Focused on algorithmic efficiency, clean architecture, and modern interfaces.
                  </p>
                </div>
              </div>

              {/* Small Floating Statistics Card: "150+ LeetCode Problems Solved" */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-card/95 backdrop-blur-md border border-border/90 p-4 sm:p-5 rounded-2xl shadow-cardHover z-20 max-w-[240px] animate-fade-in">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                        {PERSONAL_INFO.stats.leetcode}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      LeetCode Problems Solved
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                      Algorithms & Data Structures
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Bio, Degree, Goals & Details (Cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">
                PHILOSOPHY & BACKGROUND
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight editorial-title">
                {PERSONAL_INFO.aboutHeading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {PERSONAL_INFO.aboutBio}
            </p>

            {/* Key Academic & Career Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {keyDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-border/70 bg-card hover:border-royal-500/40 transition-all duration-300 shadow-subtle group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-royal-50 dark:bg-royal-950/40 text-royal-600 dark:text-royal-400 border border-royal-100 dark:border-royal-900/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-semibold text-sm text-foreground truncate mt-0.5">
                          {item.value}
                        </span>
                        <span className="text-xs text-muted-foreground truncate">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Editorial Quote & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Open for Full-Time, Remote & Internship Opportunities</span>
              </div>

              <button
                onClick={() => scrollTo("experience")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-royal-600 dark:text-royal-400 hover:text-royal-700 dark:hover:text-royal-300 group"
              >
                <span>Know More About Me</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

