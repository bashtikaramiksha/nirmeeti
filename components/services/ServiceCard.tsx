"use client";

import { ArrowRight, Monitor, Smartphone, BrainCircuit, Blocks, LucideIcon } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { DiscussServiceLink } from "@/components/services/DiscussServiceLink";

interface ServiceCardProps {
  service: ServiceItem;
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-development": Monitor,
  "mobile-app-development": Smartphone,
  "ai-integration": BrainCircuit,
  "custom-software": Blocks,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = SERVICE_ICONS[service.id] || Monitor;

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111111] p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-50/80 dark:hover:bg-[#141417] shadow-sm hover:shadow-xl hover:shadow-indigo-500/5">
      {/* Top Header Row: Number + Arrow CTA indicator */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
            {service.number}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
        </div>

        {/* Icon Container */}
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        {/* Service Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Footer Area: Capability Badge/Pill & CTA Link */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/5 mt-2 flex flex-col gap-4">
        {/* Capability Label */}
        <div className="text-xs font-medium text-slate-500 dark:text-zinc-400 flex items-center gap-1.5 flex-wrap">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500/70"></span>
          <span>{service.compactLabel}</span>
        </div>

        {/* Interactive Client Links */}
        <div className="flex items-center justify-between gap-3 flex-wrap pt-1">
          {service.id === "web-development" && (
            <a
              href="#work"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("filter-projects-category", {
                      detail: { category: "Web Development" },
                    })
                  );
                }
              }}
              className="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20"
            >
              <span>View Projects</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </a>
          )}
          <DiscussServiceLink serviceId={service.id} title={service.title} />
        </div>
      </div>
    </article>
  );
};
