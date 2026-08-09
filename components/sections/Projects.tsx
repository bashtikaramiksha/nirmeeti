"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, FolderKanban, Monitor, Smartphone, Layers } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const handleCategoryFilter = (e: CustomEvent<{ category: string }>) => {
      if (e.detail?.category) {
        setActiveCategory(e.detail.category);
      }
    };
    window.addEventListener(
      "filter-projects-category",
      handleCategoryFilter as EventListener
    );
    return () => {
      window.removeEventListener(
        "filter-projects-category",
        handleCategoryFilter as EventListener
      );
    };
  }, []);

  const categories = [
    { label: "All Projects", key: "All", icon: Layers },
    { label: "Web Development", key: "Web Development", icon: Monitor },
    { label: "Mobile & AI", key: "Mobile & AI", icon: Smartphone },
  ];

  const filteredProjects = PROJECTS ? PROJECTS.filter((p) => {
    if (!p) return false;
    if (activeCategory === "Web Development") return p.category === "Web Application";
    if (activeCategory === "Mobile & AI") return p.category !== "Web Application";
    return true;
  }) : [];

  return (
    <Section
      id="work"
      className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808] py-24 sm:py-28 lg:py-32 transition-colors duration-200"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-indigo-500/5 dark:bg-indigo-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>SELECTED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Projects We've Built
          </h2>

          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Explore live web applications, mobile platforms, and digital solutions designed and delivered for real-world clients.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-16 sm:mb-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30 scale-105"
                    : "bg-slate-100 dark:bg-[#121216] text-slate-700 dark:text-zinc-400 border-slate-200 dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-200 dark:hover:bg-[#18181f]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500 dark:text-zinc-400"}`} />
                <span>{cat.label}</span>
                {cat.key === "Web Development" && (
                  <span className="ml-1 text-[10px] bg-indigo-500/20 dark:bg-white/20 text-indigo-700 dark:text-white px-1.5 py-0.5 rounded-full font-mono">
                    4
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Project Items Alternating Showcase List or Empty Fallback State */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-20 sm:space-y-28 lg:space-y-32 divide-y divide-slate-200 dark:divide-white/5">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-slate-300 dark:border-zinc-800 rounded-2xl bg-slate-100 dark:bg-[#0d0d10]">
            <FolderKanban className="w-10 h-10 text-slate-400 dark:text-zinc-600 mb-3" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
              No Projects Found
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 text-sm max-w-md">
              We are currently updating our selected case studies in this category. Select another filter to view our portfolio.
            </p>
          </div>
        )}

        {/* Bottom Callout / Conversion Prompt */}
        <div className="mt-24 sm:mt-32 p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-[#121218] dark:via-[#161622] dark:to-[#121218] text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl dark:shadow-2xl">
          <div className="text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Have a product idea or custom workflow in mind?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base">
              We specialize in turning complex operational problems into clean, high-performance web & mobile products.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="whitespace-nowrap group shadow-lg shadow-indigo-600/25"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
