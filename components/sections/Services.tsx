import React from "react";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/services/ServiceCard";
import { servicesData } from "@/data/services";

export function Services() {
  return (
    <Section id="services" className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808] transition-colors duration-200">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 md:mb-16 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-4">
          WHAT WE BUILD
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Services Built Around Your Idea
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
          From websites and mobile apps to AI-powered tools and custom business software, Nirmitee Studio helps turn ideas into practical digital products.
        </p>
      </div>

      {/* 2 x 2 Desktop / 1-column Mobile Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
