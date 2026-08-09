"use client";

import React from "react";
import { Project } from "@/data/projects";
import { BrowserFrame } from "@/components/projects/BrowserFrame";
import { PhoneFrame } from "@/components/projects/PhoneFrame";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const projectNumber = String(index + 1).padStart(2, "0");
  const displayTitle = project.title || project.name || "Selected Project";

  return (
    <article className="group relative py-12 sm:py-16 first:pt-0 last:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Project Visual Column (Desktop alternating, Mobile top) */}
        <div
          className={`lg:col-span-7 ${
            isEven ? "lg:order-1" : "lg:order-2"
          } flex justify-center w-full`}
        >
          {project.type === "web" ? (
            <BrowserFrame
              imageSrc={project.image}
              imageAlt={project.imageAlt}
              url={project.liveUrl}
              className="w-full"
            />
          ) : (
            <PhoneFrame
              imageSrc={project.mobileImage || project.image}
              imageAlt={project.imageAlt}
            />
          )}
        </div>

        {/* Project Information Column */}
        <div
          className={`lg:col-span-5 ${
            isEven ? "lg:order-2" : "lg:order-1"
          } flex flex-col justify-center`}
        >
          {/* Eyebrow: 01 / CATEGORY */}
          <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3">
            <span className="font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              {projectNumber}
            </span>
            <span className="text-slate-400 dark:text-zinc-600">•</span>
            <span>{project.category}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
            {displayTitle}
          </h3>

          {/* Description answering What, Why, How */}
          <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Outcome Metrics (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-3.5 rounded-xl bg-slate-100 dark:bg-[#121216] border border-slate-200 dark:border-white/5">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs text-slate-500 dark:text-zinc-500 font-medium">
                    {metric.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Tags (3-5 tags) */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-md transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Logic */}
          <div className="flex items-center gap-4">
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="group/btn inline-flex items-center gap-2 shadow-md shadow-indigo-600/20"
                onClick={() => trackEvent("project_view_click", { projectId: project.id, projectTitle: project.title })}
              >
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            ) : project.caseStudyUrl ? (
              <Button
                href={project.caseStudyUrl}
                variant="secondary"
                size="md"
                className="group/btn inline-flex items-center gap-2"
                onClick={() => trackEvent("project_view_click", { projectId: project.id, projectTitle: project.title })}
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Button>
            ) : (
              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="group/btn inline-flex items-center gap-2"
                onClick={() => trackEvent("project_view_click", { projectId: project.id, projectTitle: project.title })}
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
