"use client";

import { Calendar, MapPin, Trophy, Briefcase, GraduationCap, ArrowUpRight, Award } from "lucide-react";
import { EXPERIENCE_TIMELINE } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-royal-600 dark:text-royal-400 font-semibold">
                // 04. MILESTONES & HISTORY
              </span>
              <div className="h-[1px] w-12 bg-royal-500/40" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight editorial-title">
              My Journey<span className="text-royal-500">.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            A chronological timeline of engineering milestones, competitive hackathons, academic internships, and production client work.
          </p>
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative border-l border-border/90 ml-4 md:ml-32 space-y-12 sm:space-y-16">
          
          {EXPERIENCE_TIMELINE.map((item, index) => {
            const isHackathon = item.id === "sbh-2025";
            
            return (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Year / Period pill for desktop (left aligned outside border) */}
                <div className="hidden md:block absolute -left-36 top-0 text-right w-28">
                  <span className="text-xs font-mono font-semibold text-foreground/80 block">
                    {item.period}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono block">
                    {item.location.split(",")[0]}
                  </span>
                </div>

                {/* Timeline node marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-foreground group-hover:border-royal-500 group-hover:scale-125 transition-all duration-300 shadow-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground group-hover:bg-royal-500 transition-colors" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-card hover:border-foreground/30 transition-all duration-300 shadow-subtle group-hover:shadow-cardHover">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-border/60">
                    <div className="flex items-center gap-2">
                      {isHackathon ? (
                        <Trophy className="w-4 h-4 text-amber-500" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-royal-500" />
                      )}
                      <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                        {item.organization}
                      </span>
                    </div>

                    {/* Mobile Period Badge */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-royal-50 dark:bg-royal-950/50 text-royal-600 dark:text-royal-400 border border-royal-200 dark:border-royal-800">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Role */}
                  <div className="space-y-1 mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-royal-600 dark:text-royal-400">
                      {item.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Skills / Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-border/70 bg-muted/30 text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

