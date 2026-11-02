"use client";

import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO, FEATURED_PROJECTS, EXPERIENCE_TIMELINE, ACHIEVEMENTS, TECH_STACK } from "@/data/portfolio-data";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 my-6 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-royal-600 dark:text-royal-400 font-semibold">
              CURRICULUM VITAE
            </span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-xs text-muted-foreground">
              Julfikar Ali (2026 Edition)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-foreground/30 text-xs font-medium text-foreground bg-card hover:bg-muted transition-colors"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-card text-foreground" id="printable-cv">
          
          {/* Header */}
          <div className="border-b border-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-royal-600 dark:text-royal-400 mt-1">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                {PERSONAL_INFO.intro}
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 text-muted-foreground sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-royal-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-royal-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3.5 h-3.5 text-royal-500" />
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/julfikar-ali
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-royal-600 dark:text-royal-400 font-bold border-b border-border/60 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="font-semibold text-sm text-foreground">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {PERSONAL_INFO.college}, Kolkata
                </p>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {PERSONAL_INFO.graduationYear}
              </span>
            </div>
          </div>

          {/* Key Milestones & Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-royal-600 dark:text-royal-400 font-bold border-b border-border/60 pb-1">
              Engineering Experience & Milestones
            </h2>
            
            <div className="space-y-4">
              {EXPERIENCE_TIMELINE.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-foreground">
                        {exp.title}
                      </span>
                      {exp.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-royal-600 dark:text-royal-400 font-medium">
                    {exp.role} • {exp.organization}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-royal-600 dark:text-royal-400 font-bold border-b border-border/60 pb-1">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl border border-border/80 bg-muted/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-foreground">
                      {proj.title}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-[9px] font-mono px-1 py-0.5 rounded bg-card border border-border text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-royal-600 dark:text-royal-400 font-bold border-b border-border/60 pb-1">
              Technical Skillset
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-foreground">Languages: </span>
                <span className="text-muted-foreground">Java, Python, JavaScript, TypeScript, SQL, C</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Frontend: </span>
                <span className="text-muted-foreground">React, Next.js, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Backend & APIs: </span>
                <span className="text-muted-foreground">Node.js, Express.js, FastAPI</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Databases: </span>
                <span className="text-muted-foreground">PostgreSQL, MySQL, MongoDB, Firebase</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">AI & Search: </span>
                <span className="text-muted-foreground">Sentence Transformers, Semantic Search, RAG, Gemini API</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Cloud: </span>
                <span className="text-muted-foreground">AWS, Vercel, DigitalOcean, Docker</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

