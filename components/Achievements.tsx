"use client";

import { Code2, Trophy, Briefcase, Flame, Award, CheckCircle } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolio-data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Trophy,
  Briefcase,
  Flame,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-royal-600 dark:text-royal-400 font-semibold">
                // 05. HONORS & RECOGNITION
              </span>
              <div className="h-[1px] w-12 bg-royal-500/40" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight editorial-title">
              Achievements<span className="text-royal-500">.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Verified milestones demonstrating consistent algorithmic problem-solving, hackathon leadership, and technical commitment.
          </p>
        </div>

        {/* Minimal High-End Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = ICON_MAP[item.iconName] || Award;

            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl border border-border/80 bg-card hover:border-foreground/30 transition-all duration-300 shadow-subtle hover:shadow-cardHover flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-border/50 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-muted/60 border border-border flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-royal-600 dark:text-royal-400" />
                    </div>
                  </div>

                  {/* Primary Metric Number */}
                  <div className="mb-2">
                    <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground block">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-semibold text-base text-foreground tracking-tight mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Verification Label */}
                <div className="mt-8 pt-4 border-t border-border/40 flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

