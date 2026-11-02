"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiDocker,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface AboutTechSectionProps {
  onOpenCVModal?: () => void;
}

const TECH_ITEMS = [
  // Row 1
  { name: "Java", icon: FaJava, color: "#EA2D2E", bg: "bg-red-50/50" },
  { name: "Python", icon: SiPython, color: "#3776AB", bg: "bg-blue-50/50" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bg: "bg-amber-50/50" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", bg: "bg-blue-50/50" },

  // Row 2
  { name: "React", icon: SiReact, color: "#61DAFB", bg: "bg-cyan-50/50" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", bg: "bg-neutral-100/50" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", bg: "bg-emerald-50/50" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", bg: "bg-teal-50/50" },

  // Row 3
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", bg: "bg-indigo-50/50" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", bg: "bg-green-50/50" },
  { name: "AWS", icon: FaAws, color: "#FF9900", bg: "bg-orange-50/50" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", bg: "bg-sky-50/50" },
];

export default function AboutTechSection({ onOpenCVModal }: AboutTechSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 60;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-8 sm:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Column 1 (Left): Workspace Photo & LeetCode Badge (Cols 1-4) */}
          <div className="md:col-span-4">
            <div className="relative w-full aspect-[318/178] rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 shadow-xs bg-neutral-100 group">
              <Image
                src="/assets/exact/workspace.png"
                alt="Workspace with laptop, headphones and LeetCode solved badge"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(min-width: 768px) 33vw, 95vw"
              />
            </div>
          </div>

          {/* Column 2 (Center): About Me Content (Cols 5-8) */}
          <div className="md:col-span-4 flex flex-col justify-center space-y-3 pt-1">
            
            {/* Tag */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
              <span>// ABOUT ME</span>
              <span>—</span>
            </div>

            {/* Heading with royal blue accent on Impact */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Turning Ideas<br />
              into <span className="text-[#315CEB]">Impact.</span>
            </h2>

            {/* Bio */}
            <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {PERSONAL_INFO.aboutBio}
            </p>

            {/* CTA Link */}
            <div className="pt-1">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-0.5 hover:text-[#315CEB] hover:border-[#315CEB] transition-colors group"
              >
                <span>Know More About Me</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Column 3 (Right): Tech Stack 4x3 Grid (Cols 9-12) */}
          <div id="skills" className="md:col-span-4 flex flex-col space-y-3 pt-1">
            
            {/* Header with triangle bullet */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white font-sans">
              <span className="text-[10px] text-neutral-600 dark:text-neutral-400">▸</span>
              <span>Tech Stack</span>
            </div>

            {/* 4x3 Matrix of Technologies */}
            <div className="grid grid-cols-4 gap-2">
              {TECH_ITEMS.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="p-2 rounded-xl border border-neutral-150 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 flex flex-col items-center justify-center gap-1 text-center shadow-2xs group"
                  >
                    <Icon
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="text-[9px] font-medium text-neutral-700 dark:text-neutral-300 truncate max-w-full">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

