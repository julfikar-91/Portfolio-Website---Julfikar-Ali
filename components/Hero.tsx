"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight, Github, Linkedin, Mail, Sparkles, Youtube } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

function TwitterXIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { label: "GitHub", href: PERSONAL_INFO.socials.github, Icon: Github },
  { label: "LinkedIn", href: PERSONAL_INFO.socials.linkedin, Icon: Linkedin },
  { label: "YouTube", href: PERSONAL_INFO.socials.youtube, Icon: Youtube },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset - 64,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-surface relative isolate overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-70 dark:opacity-40" />

      <div className="relative mx-auto max-w-[1240px] px-4 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-10 lg:col-span-6 xl:pl-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur dark:border-blue-400/20 dark:bg-slate-950/50 dark:text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="mb-4 font-mono text-[10px] font-medium tracking-[0.22em] text-blue-700 dark:text-blue-300">
              FULL-STACK DEVELOPER · AI &amp; ML ENGINEER
            </p>

            <h1 className="max-w-[680px] text-[clamp(3.25rem,7vw,6.3rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-slate-950 dark:text-white">
              Hello, I&apos;m <span className="hero-name-gradient block font-serif italic font-medium tracking-[-0.07em]">Julfikar Ali.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              {PERSONAL_INFO.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo("projects")} className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold text-white shadow-[0_12px_28px_-12px_rgba(15,23,42,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100">
                View selected work <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-xs font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:hover:border-blue-400 dark:hover:bg-slate-800">
                <Mail className="h-3.5 w-3.5" /> Let&apos;s talk
              </button>
            </div>

            <div className="mt-9 flex items-center gap-2">
              <span className="mr-1 font-mono text-[9px] tracking-[0.18em] text-slate-400 dark:text-slate-500">CONNECT</span>
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:text-blue-300">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
              <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:text-blue-300">
                <TwitterXIcon />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px] lg:col-span-6 lg:max-w-none">
            <div className="hero-portrait-frame relative aspect-[1/1.05] overflow-hidden rounded-[2rem] border border-white/80 bg-[#e8effb] shadow-[0_32px_70px_-32px_rgba(30,64,175,0.42)] dark:border-slate-700/60 dark:bg-[#101b31]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_53%_25%,rgba(255,255,255,0.95),rgba(223,235,255,0.56)_34%,transparent_66%)] dark:bg-[radial-gradient(circle_at_53%_25%,rgba(74,120,196,0.5),rgba(18,35,66,0.25)_36%,transparent_67%)]" />
              <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full border-[34px] border-blue-400/20" />
              <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border-[1px] border-blue-700/25" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between border-b border-slate-900/10 pb-3 font-mono text-[9px] font-medium tracking-[0.16em] text-slate-700/75 dark:border-white/10 dark:text-slate-200/70"><span>JULFIKAR ALI</span><span>01 — 2026</span></div>
              <div className="absolute bottom-0 left-[11%] h-[62%] w-[78%] rounded-t-[12rem] bg-gradient-to-b from-blue-500/25 via-blue-700/10 to-slate-900/20 blur-[1px]" />

              <Image src="/assets/julfikar_back_er.png" alt="Julfikar Ali, Software Engineer and AI & ML Developer" width={1086} height={1448} priority quality={100} className="absolute bottom-0 left-1/2 z-10 h-[94%] w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom drop-shadow-[0_24px_22px_rgba(15,23,42,0.28)] transition-transform duration-700 hover:scale-[1.015]" />

              <div className="absolute bottom-5 left-5 z-20 max-w-[185px] rounded-2xl border border-white/80 bg-white/75 p-3.5 shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/60">
                <Sparkles className="mb-2 h-4 w-4 text-blue-600 dark:text-blue-300" />
                <p className="text-[10px] font-semibold leading-4 text-slate-800 dark:text-white">Building practical products where design, code, and intelligence meet.</p>
              </div>

              <button onClick={() => scrollTo("about")} className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-slate-950/70 dark:text-white" aria-label="Scroll to about section">
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
