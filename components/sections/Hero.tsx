import { Section } from "@/components/ui/Section";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function Hero() {
  return (
    <Section
      id="hero"
      className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#080808] pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 lg:pb-32 min-h-[calc(100vh-80px)] flex items-center transition-colors duration-200"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-40 pointer-events-none" />

      {/* Top Ambient Highlight Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-indigo-500/10 dark:from-indigo-900/15 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Hero Grid Container */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - 50% (6 cols on lg) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <HeroContent />
        </div>

        {/* Right Column - 50% (6 cols on lg) */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </Section>
  );
}
