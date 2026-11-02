"use client";

import { useState } from "react";
import { Mail, Download, Github, Linkedin, Youtube, Copy, Check, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolio-data";

function TwitterXIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface ContactProps {
  onOpenCVModal?: () => void;
}

export default function Contact({ onOpenCVModal }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85 },
      colors: ["#315CEB", "#111111", "#F59E0B"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Inquiry from ${name} via Portfolio`
    )}&body=${encodeURIComponent(`Hi Julfikar,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-b border-border/40 overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 subtle-grid-bg opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-12 sm:mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-royal-600 dark:text-royal-400 font-semibold">
            // 06. INITIATE DIALOGUE
          </span>
          <div className="h-[1px] w-12 bg-royal-500/40" />
        </div>

        {/* Editorial Contact Banner Box */}
        <div className="rounded-[2.5rem] border border-border/80 bg-card p-8 sm:p-12 lg:p-16 shadow-card relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Big Editorial CTA & Contact Info (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-royal-500" />
                  AVAILABLE FOR NEW OPPORTUNITIES & COLLABORATIONS
                </span>
                
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight editorial-title">
                  Let's Work Together<span className="text-royal-500">.</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Have a project in mind? Let's discuss how I can help you build something amazing. Whether it is full-stack engineering, AI/ML models, or engineering leadership.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-royal-600 hover:text-white transition-all duration-300 shadow-sm active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>

                <button
                  onClick={onOpenCVModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/90 hover:border-foreground/40 bg-card hover:bg-muted/50 text-foreground font-medium text-sm transition-all duration-300 active:scale-95 shadow-subtle"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Direct Email with Copy Interaction */}
              <div className="pt-6 border-t border-border/60">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-2">
                  Direct Email
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-serif text-xl sm:text-2xl font-bold text-foreground hover:text-royal-600 dark:hover:text-royal-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="w-9 h-9 rounded-full border border-border hover:border-foreground/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  {copied && (
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold animate-fade-in">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              {/* Verified Social Networks */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block">
                  Find Me Online
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/40 hover:bg-card hover:border-foreground/30 text-xs font-medium text-foreground transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/40 hover:bg-card hover:border-foreground/30 text-xs font-medium text-foreground transition-all duration-200"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/40 hover:bg-card hover:border-foreground/30 text-xs font-medium text-foreground transition-all duration-200"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-600" />
                    <span>YouTube</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/40 hover:bg-card hover:border-foreground/30 text-xs font-medium text-foreground transition-all duration-200"
                  >
                    <TwitterXIcon className="w-3 h-3" />
                    <span>X</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Quick Message Card (Cols 8-12) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl border border-border/90 bg-muted/30 backdrop-blur-xs shadow-subtle">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Send a Quick Note
                </h3>
                <p className="text-xs text-muted-foreground mb-6">
                  Direct message through your default email client.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-royal-500 transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-royal-500 transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project, timeline, or engineering role..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-royal-500 transition-all placeholder:text-muted-foreground/60 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-sm hover:bg-royal-600 hover:text-white transition-colors shadow-xs active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  {formSent && (
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs text-center font-medium">
                      Opening your email client to send message...
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

