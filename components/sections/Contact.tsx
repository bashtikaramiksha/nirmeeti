import React from "react";
import { Section } from "@/components/ui/Section";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact() {
  return (
    <Section
      id="contact"
      className="border-b border-slate-200 dark:border-white/5 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-[#080808] dark:via-[#0d0d12] dark:to-[#080808] py-20 sm:py-24 lg:py-28 transition-colors duration-200"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-t from-indigo-500/10 dark:from-indigo-900/15 via-purple-500/5 dark:via-purple-900/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            LET'S BUILD SOMETHING
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Have a Project in Mind?
          </h2>

          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Tell us what you're planning, and we'll get back to you to discuss the requirements, scope and next steps.
          </p>
        </div>

        {/* Responsive Grid Layout:
            Desktop: 35-40% Contact Info (5 cols) | 60-65% Form (7 cols)
            Mobile: Stacked with early WhatsApp option
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Information (35–40% on Desktop) */}
          <div className="lg:col-span-5 h-full">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f0f14] p-6 sm:p-8 h-full shadow-sm">
              <ContactInfo />
            </div>
          </div>

          {/* Right Column: Contact Form Surface (60–65% on Desktop) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121216] p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl dark:shadow-black/40">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
