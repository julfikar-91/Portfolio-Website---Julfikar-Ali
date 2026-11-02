"use client";

import { useState } from "react";
import { ArrowRight, Mail, Linkedin, Github, Youtube } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface BottomSectionProps {
  onOpenCVModal?: () => void;
}

export default function BottomSection({ onOpenCVModal }: BottomSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.9 },
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="experience" className="py-8 sm:py-12 border-t border-neutral-200/60 dark:border-neutral-800/60 relative overflow-hidden">
      
      {/* Background Soft Blue Gradient Ribbon on bottom right */}
      <div className="absolute right-0 bottom-0 w-[420px] h-[320px] bg-gradient-to-tl from-blue-100/70 via-indigo-50/40 to-transparent dark:from-blue-950/20 dark:via-transparent rounded-tl-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Experience / "My Journey" (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
              <span>// Experience</span>
              <span>—</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              My Journey
            </h2>

            {/* Vertical timeline items with blue dots */}
            <div className="relative pl-4 space-y-4 pt-1">
              {/* Connecting line */}
              <div className="absolute left-[3px] top-2 bottom-3 w-[1.5px] bg-neutral-200 dark:bg-neutral-800" />

              {/* Item 1 */}
              <div className="relative flex items-start justify-between gap-2">
                <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-[#315CEB]" />
                <div className="space-y-0.5">
                  <h3 className="text-xs font-semibold text-neutral-900 dark:text-white leading-tight">
                    Freelance Full-Stack Developer
                  </h3>
                  <p className="text-[10px] text-neutral-500">
                    Independent • Product Engineer
                  </p>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 shrink-0">
                  2024–Present
                </span>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-start justify-between gap-2">
                <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-[#315CEB]" />
                <div className="space-y-0.5">
                  <h3 className="text-xs font-semibold text-neutral-900 dark:text-white leading-tight">
                    10-Week AI & ML Virtual Internship
                  </h3>
                  <p className="text-[10px] text-neutral-500">
                    Machine Learning
                  </p>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 shrink-0">
                  2026
                </span>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-start justify-between gap-2">
                <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-[#315CEB]" />
                <div className="space-y-0.5">
                  <h3 className="text-xs font-semibold text-neutral-900 dark:text-white leading-tight">
                    8-Week ML & Data Science Internship
                  </h3>
                  <p className="text-[10px] text-neutral-500">
                    Narula Institute of Technology
                  </p>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 shrink-0">
                  Aug–Oct 2026
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs active:scale-95"
              >
                <span>View Full Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Achievements / "Milestones" (Cols 5-8) */}
          <div id="achievements" className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
              <span>// Achievements</span>
              <span>—</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Milestones
            </h2>

            {/* 4 Cards in a horizontal grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              
              {/* Card 1: 150+ LeetCode */}
              <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-2.5 flex flex-col items-center justify-center text-center shadow-xs min-h-[105px]">
                {/* Gold Trophy */}
                <div className="text-amber-500 mb-1.5">
                  <svg className="w-5 h-5 fill-amber-500" viewBox="0 0 24 24">
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                  </svg>
                </div>
                <span className="font-bold text-sm text-neutral-900 dark:text-white">
                  150+
                </span>
                <span className="text-[9px] text-neutral-500 leading-tight">
                  LeetCode Problems
                </span>
              </div>

              {/* Card 2: Smart Bengal Hackathon Finalist */}
              <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-2.5 flex flex-col items-center justify-center text-center shadow-xs min-h-[105px]">
                {/* Gold Star */}
                <div className="text-amber-500 mb-1.5">
                  <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-neutral-800 dark:text-neutral-200 leading-tight">
                  Smart Bengal<br />
                  Hackathon 2025<br />
                  Finalist
                </span>
              </div>

              {/* Card 3: Virtual Internships */}
              <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-2.5 flex flex-col items-center justify-center text-center shadow-xs min-h-[105px]">
                {/* Blue Graduation Cap */}
                <div className="text-[#315CEB] mb-1.5">
                  <svg className="w-5 h-5 fill-[#315CEB]" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-neutral-800 dark:text-neutral-200 leading-tight">
                  2 Virtual<br />
                  Internships
                </span>
              </div>

              {/* Card 4: 10+ Hackathons */}
              <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-2.5 flex flex-col items-center justify-center text-center shadow-xs min-h-[105px]">
                {/* Cyan/Blue Diamond */}
                <div className="text-blue-500 mb-1.5">
                  <svg className="w-5 h-5 fill-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2L2 9l10 13 10-13-10-7zM7.5 9l4.5-5.5 4.5 5.5H7.5z" />
                  </svg>
                </div>
                <span className="font-bold text-sm text-neutral-900 dark:text-white">
                  10+
                </span>
                <span className="text-[9px] text-neutral-500 leading-tight">
                  Hackathons
                </span>
              </div>

            </div>
          </div>

          {/* Column 3: Contact / "Let's Work Together" (Cols 9-12) */}
          <div id="contact" className="lg:col-span-4 space-y-2 pt-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Let's Work Together
            </h2>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xs leading-relaxed">
              Have a project in mind? Let's discuss how I can help you.
            </p>

            <div className="pt-1 pb-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Circular Social Buttons Row */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleCopyEmail}
                className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-colors"
                title={copied ? "Email Copied!" : "Copy Email"}
              >
                <Mail className="w-3.5 h-3.5" />
              </button>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-colors text-xs font-bold font-sans"
                title="LinkedIn"
              >
                in
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-colors"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>

              {copied && (
                <span className="text-[10px] text-emerald-600 font-medium animate-fade-in pl-1">
                  Email Copied!
                </span>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

