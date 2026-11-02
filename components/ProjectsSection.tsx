"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Github, X } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolio-data";

function getYouTubeVideoId(url?: string) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v") || parsedUrl.pathname.split("/").filter(Boolean).pop() || null;
    }
  } catch {
    return null;
  }

  return null;
}

function getYouTubeEmbedUrl(videoId: string) {
  const parameters = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    iv_load_policy: "3",
    cc_load_policy: "0",
    disablekb: "1",
    fs: "0",
    vq: "hd1080",
  });

  return `https://www.youtube-nocookie.com/embed/${videoId}?${parameters.toString()}`;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeVideoProjectId, setActiveVideoProjectId] = useState<string | null>(null);
  const selectedVideoId = getYouTubeVideoId(selectedProject?.demoUrl);

  const exactProjectImages: Record<string, string> = {
    "growup-ai": "/assets/exact/project-growup.png",
    "biosearch": "/assets/exact/project-biosearch.png",
    "betazenx-erp": "/assets/exact/project-betazenx.png",
    "syndoc": "/assets/exact/project-syndoc.png",
  };

  const exactDisplayTags: Record<string, string[]> = {
    "growup-ai": ["Flutter", "Firebase", "Gemini"],
    "biosearch": ["React", "FastAPI", "Vercel"],
    "betazenx-erp": ["Next.js", "PostgreSQL", "Docker"],
    "syndoc": ["Node.js", "Socket.io", "MongoDB"],
  };

  const exactDisplayTitles: Record<string, string> = {
    "growup-ai": "GrowUp AI",
    "biosearch": "PubMed AI Search",
    "betazenx-erp": "School Management",
    "causal-ai-advisory": "Causal AI Advisory",
  };

  const exactDisplayCategories: Record<string, string> = {
    "growup-ai": "AI-Powered Fashion & Glow Up App",
    "biosearch": "Biomedical Semantic Search Engine",
    "betazenx-erp": "Role-Based School Management Platform",
    "causal-ai-advisory": "Ongoing B.Tech Final-Year Research",
  };

  return (
    <section id="projects" className="border-t border-neutral-200/60 py-12 dark:border-neutral-800/60 sm:py-16">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Heading & Intro (Cols 1-3) */}
          <div className="space-y-4 pt-1 lg:col-span-3">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
              <span>// MY PROJECTS</span>
              <span>—</span>
            </div>

            <h2 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Featured<br />
              Projects.
            </h2>

            <p className="max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              A collection of real-world projects that showcase my skills and creativity.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setSelectedProject(FEATURED_PROJECTS[0])}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs active:scale-95"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Larger project cards stay readable as a 2 × 2 grid on desktop. */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 lg:gap-6">
            {FEATURED_PROJECTS.map((proj) => {
              const imgSrc = exactProjectImages[proj.id] || proj.image;
              const title = exactDisplayTitles[proj.id] || proj.title;
              const cat = exactDisplayCategories[proj.id] || proj.category;
              const tags = exactDisplayTags[proj.id] || proj.technologies.slice(0, 3);
              const videoId = getYouTubeVideoId(proj.demoUrl);

              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse" && videoId) setActiveVideoProjectId(proj.id);
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === "mouse") setActiveVideoProjectId(null);
                  }}
                  className="group flex min-h-[340px] cursor-pointer flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/5 dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-blue-500/50 sm:p-5"
                >
                  <div>
                    {/* Project Preview Image */}
                    <div
                      className="relative mb-4 w-full aspect-video overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950"
                    >
                      <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 46vw, 100vw"
                      />

                      {videoId && activeVideoProjectId === proj.id && (
                        <iframe
                          src={getYouTubeEmbedUrl(videoId)}
                          title={`${title} silent project preview`}
                          className="pointer-events-none absolute inset-0 z-10 h-full w-full border-0"
                          allow="autoplay; encrypted-media"
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      )}
                    </div>

                    {/* Title with Arrow Up-Right */}
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold text-neutral-900 transition-colors group-hover:text-[#315CEB] dark:text-white sm:text-lg">
                        {title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-black dark:group-hover:text-white" />
                    </div>

                    {/* Category */}
                    <p className="mb-4 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {cat}
                    </p>
                  </div>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1.5 border-t border-neutral-100 pt-3 dark:border-neutral-800/80">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Case Study Modal on click */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 my-6 animate-fade-in p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#315CEB] font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {selectedVideoId && (
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">Product walkthrough</h4>
                  <span className="text-[10px] text-muted-foreground">Loops silently</span>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-neutral-950 shadow-sm">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedVideoId)}
                    title={`${selectedProject.title} silent project preview`}
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    allow="autoplay; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="p-2.5 rounded-xl border border-border/80 bg-muted/30 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#315CEB] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[10px] font-mono border border-border bg-card">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:border-foreground text-foreground text-xs font-medium hover:bg-muted transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-medium hover:bg-neutral-800 transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

