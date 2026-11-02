"use client";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-neutral-200/70 dark:border-neutral-800/70 bg-background text-[11px] text-neutral-500">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          {/* Left */}
          <div>
            <span>© 2026 Julfikar Ali. All rights reserved.</span>
          </div>

          {/* Center */}
          <div className="font-mono text-neutral-600 dark:text-neutral-400">
            <span>Code • Innovate • Inspire</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>for a better tomorrow.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
