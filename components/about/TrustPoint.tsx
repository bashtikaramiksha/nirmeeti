import React from "react";
import { TrustPointItem } from "@/data/about";

interface TrustPointProps {
  point: TrustPointItem;
}

export function TrustPoint({ point }: TrustPointProps) {
  const Icon = point.icon;

  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f0f14]/80 hover:bg-slate-50 dark:hover:bg-[#14141c] hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-indigo-500/5">
      <div>
        {/* Icon & Title row */}
        <div className="flex items-center gap-3.5 mb-3.5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
            {point.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
          {point.description}
        </p>
      </div>
    </div>
  );
}
