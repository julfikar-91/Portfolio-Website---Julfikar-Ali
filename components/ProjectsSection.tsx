"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Github, MonitorPlay, Pause, Play, VolumeX, X } from "lucide-react";
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

function getYouTubeEmbedUrl(videoId: string, autoplay = true, showControls = false) {
  const parameters = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: showControls ? "1" : "0",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    iv_load_policy: "3",
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
    "biosearch": ["React", "FastAPI", "AWS"],
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
    <section id="projects" className="py-8 sm:py-12 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Heading & Intro (Cols 1-3) */}
          <div className="lg:col-span-3 space-y-3 pt-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
              <span>// MY PROJECTS</span>
              <span>—</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Featured<br />
              Projects.
            </h2>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">
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

          {/* Right 4 Project Cards Row (Cols 4-12) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_PROJECTS.map((proj) => {
              const imgSrc = exactProjectImages[proj.id] || proj.image;
              const title = exactDisplayTitles[proj.id] || proj.title;
              const cat = exactDisplayCategories[proj.id] || proj.category;
              const tags = exactDisplayTags[proj.id] || proj.technologies.slice(0, 3);
              const videoId = getYouTubeVideoId(proj.demoUrl);
              const isVideoActive = activeVideoProjectId === proj.id;

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
                  className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-3 flex flex-col justify-between shadow-xs hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div>
                    {/* Project Preview Image */}
                    <div
                      role={videoId ? "button" : undefined}
                      tabIndex={videoId ? 0 : undefined}
                      aria-label={videoId ? `${isVideoActive ? "Pause" : "Play"} ${title} video preview` : undefined}
                      onClick={(event) => {
                        if (!videoId) return;
                        event.stopPropagation();
                        setActiveVideoProjectId(isVideoActive ? null : proj.id);
                      }}
                      onKeyDown={(event) => {
                        if (!videoId || (event.key !== "Enter" && event.key !== " ")) return;
                        event.preventDefault();
                        setActiveVideoProjectId(isVideoActive ? null : proj.id);
                      }}
                      className={`relative w-full aspect-[170/82] rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 mb-3 bg-neutral-100 dark:bg-neutral-950 ${videoId ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900" : ""}`}
                    >
                      <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        className={`object-cover transition-all duration-700 ${isVideoActive ? "scale-105 opacity-0" : "group-hover:scale-103"}`}
                        sizes="(min-width: 1024px) 20vw, 45vw"
                      />

                      {videoId && isVideoActive && (
                        <iframe
                          src={getYouTubeEmbedUrl(videoId)}
                          title={`${title} project video preview`}
                          className="absolute inset-0 z-10 h-full w-full pointer-events-none"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      )}

                      {videoId && (
                        <>
                          <div className={`absolute inset-0 z-20 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 transition-opacity duration-300 ${isVideoActive ? "opacity-35" : "opacity-100"}`} />
                          <div className="absolute left-2 top-2 z-30 inline-flex items-center gap-1 rounded-full border border-white/25 bg-slate-950/55 px-1.5 py-1 text-[8px] font-semibold tracking-[0.12em] text-white backdrop-blur-md">
                            <MonitorPlay className="h-2.5 w-2.5 text-blue-300" />
                            DEMO REEL
                          </div>
                          <div className="absolute right-2 top-2 z-30 rounded-full border border-white/20 bg-slate-950/50 px-1.5 py-1 font-mono text-[8px] text-white/85 backdrop-blur-md">HD · LOOP</div>
                          <div className="absolute bottom-2 left-2 right-2 z-30 flex items-center justify-between text-white">
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/55 px-2 py-1 text-[8px] font-medium backdrop-blur-md">
                              {isVideoActive ? <Pause className="h-2.5 w-2.5" /> : <Play className="h-2.5 w-2.5 fill-current" />}
                              {isVideoActive ? "Playing preview" : "Hover or tap to play"}
                            </span>
                            {isVideoActive && <VolumeX className="h-3 w-3 opacity-90" aria-label="Muted" />}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Title with Arrow Up-Right */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-xs text-neutral-900 dark:text-white group-hover:text-[#315CEB] transition-colors">
                        {title}
                      </h3>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" />
                    </div>

                    {/* Category */}
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight mb-3">
                      {cat}
                    </p>
                  </div>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1 pt-1 border-t border-neutral-100 dark:border-neutral-800/80">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-medium"
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
                  <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"><VolumeX className="h-3 w-3" /> Starts muted</span>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-neutral-950 shadow-sm">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedVideoId, true, true)}
                    title={`${selectedProject.title} project walkthrough`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
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

