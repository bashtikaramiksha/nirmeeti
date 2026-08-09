import React from "react";
import { ProcessStepItem } from "@/data/process";
import { CheckCircle2 } from "lucide-react";

interface ProcessStepProps {
  step: ProcessStepItem;
  index: number;
  totalSteps: number;
}

export function ProcessStep({ step, index, totalSteps }: ProcessStepProps) {
  const isLast = index === totalSteps - 1;

  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d0d12] hover:bg-slate-50 dark:hover:bg-[#12121a] hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5">
      {/* Top Header: Step Number */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-indigo-500 to-slate-400 dark:from-indigo-400 dark:via-indigo-300 dark:to-zinc-500 group-hover:from-indigo-500 group-hover:to-slate-900 dark:group-hover:to-white transition-all">
            {step.number}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-500 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10">
            Step {step.number}
          </span>
        </div>

        {/* Step Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
          {step.title}
        </h3>

        {/* Step Description */}
        <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
          {step.description}
        </p>
      </div>

      {/* Main Output / Deliverable Badge */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/5">
        <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-zinc-500 block mb-1">
          Main Deliverable
        </span>
        <div className="flex items-start gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
          <span>{step.output}</span>
        </div>
      </div>
    </div>
  );
}
