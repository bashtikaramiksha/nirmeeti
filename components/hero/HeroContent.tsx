"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-none">
      {/* Availability Status Badge */}
      <div 
        className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6 backdrop-blur-md"
        style={{ animationDelay: "100ms" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for selected projects
      </div>

      {/* Eyebrow Label */}
      <div 
        className="animate-fade-in-up opacity-0 flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3"
        style={{ animationDelay: "200ms" }}
      >
        <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        <span>DIGITAL PRODUCT STUDIO</span>
      </div>

      {/* Main H1 Headline */}
      <h1 
        className="animate-fade-in-up opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
        style={{ animationDelay: "300ms" }}
      >
        We Build Digital Products{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 dark:from-white dark:via-zinc-200 dark:to-indigo-300 block sm:inline">
          That Work.
        </span>
      </h1>

      {/* Supporting Description */}
      <p 
        className="animate-fade-in-up opacity-0 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-[560px] mb-8"
        style={{ animationDelay: "400ms" }}
      >
        Nirmitee Studio helps businesses and startups turn ideas into
        modern web applications, mobile apps and AI-powered digital products.
      </p>

      {/* Primary & Secondary CTAs */}
      <div 
        className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10"
        style={{ animationDelay: "500ms" }}
      >
        <Button
          href="#contact"
          variant="primary"
          size="lg"
          className="group shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40"
          onClick={() => trackEvent("start_project_click", { sourceLocation: "hero" })}
        >
          <span>Start Your Project</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>

        <Button
          href="#work"
          variant="secondary"
          size="lg"
          onClick={() => trackEvent("view_work_click", { sourceLocation: "hero" })}
        >
          View Our Work
        </Button>
      </div>

      {/* Trust / Capability Line */}
      <div 
        className="animate-fade-in-up opacity-0 pt-4 border-t border-slate-200 dark:border-white/5 w-full max-w-lg"
        style={{ animationDelay: "600ms" }}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-500 font-medium">
          <span className="hover:text-slate-900 dark:hover:text-zinc-300 transition-colors">Web Applications</span>
          <span className="text-slate-300 dark:text-zinc-700">•</span>
          <span className="hover:text-slate-900 dark:hover:text-zinc-300 transition-colors">Mobile Apps</span>
          <span className="text-slate-300 dark:text-zinc-700">•</span>
          <span className="hover:text-slate-900 dark:hover:text-zinc-300 transition-colors">AI Integration</span>
          <span className="text-slate-300 dark:text-zinc-700">•</span>
          <span className="hover:text-slate-900 dark:hover:text-zinc-300 transition-colors">Custom Software</span>
        </div>
      </div>
    </div>
  );
}
