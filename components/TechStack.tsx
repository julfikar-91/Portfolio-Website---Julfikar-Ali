"use client";

import { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiVercel,
  SiDigitalocean,
  SiDocker,
  SiGooglegemini,
  SiHuggingface,
  SiC,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { Cpu, Search, Layers, BrainCircuit, Terminal } from "lucide-react";
import { TECH_STACK } from "@/data/portfolio-data";

// Mapping of skill names to their authentic brand icons and brand colors
const ICON_COMPONENT_MAP: Record<string, { icon: React.ElementType; color: string }> = {
  // Programming
  Java: { icon: FaJava, color: "#EA2D2E" },
  Python: { icon: SiPython, color: "#3776AB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  SQL: { icon: SiPostgresql, color: "#4169E1" },
  C: { icon: SiC, color: "#A8B9CC" },

  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  FastAPI: { icon: SiFastapi, color: "#009688" },

  // Database
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },

  // AI & Machine Learning
  "Sentence Transformers": { icon: SiHuggingface, color: "#FFD21E" },
  "Semantic Search": { icon: Search, color: "#315CEB" },
  "Hybrid Retrieval": { icon: Layers, color: "#8B5CF6" },
  RAG: { icon: BrainCircuit, color: "#10B981" },
  "Gemini API": { icon: SiGooglegemini, color: "#1A73E8" },

  // Cloud & Deployment
  AWS: { icon: FaAws, color: "#FF9900" },
  Vercel: { icon: SiVercel, color: "#000000" },
  DigitalOcean: { icon: SiDigitalocean, color: "#0080FF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...TECH_STACK.map((c) => c.category)];

  const filteredCategories =
    activeCategory === "All"
      ? TECH_STACK
      : TECH_STACK.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-royal-600 dark:text-royal-400 font-semibold">
                // 02. TECHNICAL PROFICIENCY
              </span>
              <div className="h-[1px] w-12 bg-royal-500/40" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight editorial-title">
              Tech Stack<span className="text-royal-500">.</span>
            </h2>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-md">
            Production-grade technologies, frameworks, and foundational AI libraries leveraged to build high-performance software systems.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-foreground text-background shadow-xs font-semibold"
                    : "border border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Stack Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-3xl border border-border/80 bg-card hover:border-foreground/20 transition-all duration-300 shadow-subtle flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-royal-500" />
                    <h3 className="font-semibold text-base text-foreground tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {group.skills.length} tools
                  </span>
                </div>

                <p className="text-xs text-muted-foreground mb-6 line-clamp-2">
                  {group.description}
                </p>

                {/* Grid of authentic skills with icons */}
                <div className="grid grid-cols-2 gap-2.5">
                  {group.skills.map((skill) => {
                    const iconConfig = ICON_COMPONENT_MAP[skill.name];
                    const Icon = iconConfig?.icon || Terminal;
                    
                    return (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl border border-border/60 bg-muted/40 hover:bg-card hover:border-royal-500/40 transition-all duration-200 flex items-center gap-2.5 group/item"
                      >
                        <div
                          className="w-7 h-7 rounded-lg bg-background border border-border/80 flex items-center justify-center shrink-0 text-foreground transition-transform group-hover/item:scale-110"
                        >
                          <Icon className="w-4 h-4 transition-colors" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-medium text-foreground truncate group-hover/item:text-royal-600 dark:group-hover/item:text-royal-400">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-muted-foreground truncate font-mono">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>VERIFIED SKILLSET</span>
                <span className="text-royal-500">PROD-READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
