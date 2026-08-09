import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { trustPointsData } from "@/data/about";
import { processStepsData } from "@/data/process";
import { TrustPoint } from "@/components/about/TrustPoint";
import { ProcessStep } from "@/components/process/ProcessStep";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function AboutProcess() {
  return (
    <Section
      id="about"
      className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808] py-20 sm:py-24 lg:py-28 transition-colors duration-200"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-900/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-purple-500/5 dark:bg-purple-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 space-y-24 sm:space-y-28 lg:space-y-32">
        {/* ========================================================================= */}
        {/* PART 1: ABOUT NIRMITEE STUDIO                                             */}
        {/* ========================================================================= */}
        <div className="space-y-12 md:space-y-16">
          {/* Eyebrow & Desktop Editorial 50/50 Layout */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>ABOUT NIRMITEE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Heading (50% Desktop) */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  We Build Around the Problem,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 dark:from-white dark:via-zinc-200 dark:to-indigo-300">
                    Not Just the Technology.
                  </span>
                </h2>
              </div>

              {/* Description Copy (50% Desktop) */}
              <div className="space-y-4 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Nirmitee Studio is a digital product development studio focused
                  on turning ideas and business requirements into practical web,
                  mobile and AI-powered products.
                </p>
                <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
                  Our approach starts by understanding the actual workflow, users
                  and goals of the product before deciding how it should be
                  designed and built.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Trust Points (2x2 Desktop Grid, 1-col Mobile) */}
          <div>
            <div className="mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
                WHY WORK WITH US
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {trustPointsData.map((point) => (
                <TrustPoint key={point.id} point={point} />
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Visual Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />

        {/* ========================================================================= */}
        {/* PART 2: DEVELOPMENT PROCESS                                               */}
        {/* ========================================================================= */}
        <div className="space-y-12 md:space-y-16">
          {/* Process Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              HOW WE WORK
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              From Idea to Working Product
            </h2>

            <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
              Every project moves through a structured process designed to reduce
              confusion, validate important decisions early and keep development
              focused on usable outcomes.
            </p>
          </div>

          {/* Desktop 5-Step Grid (lg breakpoint) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-5 relative">
            {processStepsData.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                totalSteps={processStepsData.length}
              />
            ))}
          </div>

          {/* Mobile & Tablet Vertical Timeline (< lg breakpoint) */}
          <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-indigo-500/40 before:to-slate-300 dark:before:to-zinc-800">
            {processStepsData.map((step) => (
              <div key={step.number} className="relative group">
                {/* Timeline Dot Node */}
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-slate-50 dark:bg-[#080808] border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d0d12] space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>{step.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 3: CTA TRANSITION TOWARD CONTACT                                     */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-50/80 via-white to-slate-100 dark:from-[#0f0f18] dark:via-[#141424] dark:to-[#0d0d14] text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl dark:shadow-2xl relative overflow-hidden">
          {/* Subtle Glow inside CTA */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Have an Idea You Want to Build?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed">
              Tell us what you're planning and let's discuss the right way to
              turn it into a working product.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="whitespace-nowrap group shadow-lg shadow-indigo-600/25 px-8"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
