"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Check, X, Layers, Cpu } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolio-data";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-royal-600 dark:text-royal-400 font-semibold">
                // 03. SELECTED PORTFOLIO
              </span>
              <div className="h-[1px] w-12 bg-royal-500/40" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight editorial-title">
              Featured Projects<span className="text-royal-500">.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            A collection of real-world projects that showcase my skills and creativity in full-stack engineering and applied machine learning.
          </p>
        </div>

        {/* Project Cards (Editorial Layout with alternating visual orientation) */}
        <div className="space-y-16 lg:space-y-24">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl border border-border/80 bg-card hover:border-foreground/20 transition-all duration-500 shadow-subtle hover:shadow-cardHover overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Visual Preview Side (Cols 1-7 or 6-12) */}
                  <div
                    className={`lg:col-span-7 relative ${
                      !isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/30 shadow-xs">
                      
                      {/* Product Image */}
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category}`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 55vw, 95vw"
                      />

                      {/* Subtle gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Project Number badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-xs font-mono font-bold text-foreground">
                        PROJ {project.number}
                      </div>

                      {/* Category Pill on Image */}
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-[11px] font-medium text-foreground">
                        {project.badge || project.category}
                      </div>

                      {/* Project Realistic UI Mockup Overlay for Specific Projects */}
                      {project.id === "growup-ai" && (
                        <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between text-xs font-mono">
                          <span className="flex items-center gap-1.5 text-royal-600 dark:text-royal-400 font-semibold">
                            <Sparkles className="w-3.5 h-3.5" /> Face Mesh & Symmetry Model
                          </span>
                          <span className="text-muted-foreground">Mobile Client</span>
                        </div>
                      )}

                      {project.id === "biosearch" && (
                        <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between text-xs font-mono">
                          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                            <Layers className="w-3.5 h-3.5" /> 8-Stage MeSH Guardrail Pipeline
                          </span>
                          <span className="text-muted-foreground">Dense Rerank &lt;500ms</span>
                        </div>
                      )}

                      {project.id === "betazenx-erp" && (
                        <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between text-xs font-mono">
                          <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                            <Cpu className="w-3.5 h-3.5" /> Gemini RAG Campus Assistant
                          </span>
                          <span className="text-muted-foreground">PostgreSQL + Prisma</span>
                        </div>
                      )}

                      {project.id === "syndoc" && (
                        <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between text-xs font-mono">
                          <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-semibold">
                            <Layers className="w-3.5 h-3.5" /> CRDT Multi-Cursor Sync
                          </span>
                          <span className="text-muted-foreground">Sub-50ms Latency</span>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Project Details Side (Cols 8-12 or 1-5) */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                      !isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    
                    {/* Header info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-royal-600 dark:text-royal-400 uppercase tracking-widest font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.slice(0, 3).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <div className="w-4 h-4 rounded-full bg-royal-50 dark:bg-royal-950/40 text-royal-600 dark:text-royal-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-border/80 bg-muted/40 text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-royal-600 hover:text-white transition-all duration-300 shadow-sm"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border hover:border-foreground/40 bg-card text-foreground text-xs font-medium hover:bg-muted transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Details Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 my-8 animate-fade-in">
            {/* Modal Header */}
            <div className="relative aspect-[16/9] w-full bg-neutral-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono tracking-widest uppercase text-royal-600 dark:text-royal-400 font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Architecture & Overview
                </h4>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Key Capabilities & Engineering Feats
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-border/60 bg-muted/30 flex items-start gap-2.5 text-xs text-foreground/80"
                    >
                      <Check className="w-3.5 h-3.5 text-royal-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Core Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono border border-border bg-card text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  Project {selectedProject.number} of 04
                </span>
                
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:border-foreground text-foreground text-xs font-medium hover:bg-muted transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub Code</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium hover:bg-royal-600 hover:text-white transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

