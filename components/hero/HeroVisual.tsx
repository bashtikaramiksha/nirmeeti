import Image from "next/image";
import { Zap, ShieldCheck } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0 animate-fade-in-up opacity-0" style={{ animationDelay: "400ms" }}>
      {/* Background Radial Glow */}
      <div className="absolute -inset-4 sm:-inset-10 bg-gradient-to-tr from-indigo-600/25 via-indigo-500/10 to-purple-600/20 blur-3xl opacity-70 pointer-events-none rounded-full animate-pulse-glow" />

      {/* Hero Visual Container */}
      <div className="relative w-full max-w-[620px]">
        {/* Web Browser Frame (Primary Visual) */}
        <div className="relative rounded-2xl border border-zinc-800/90 bg-[#12141c]/90 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden transform lg:hover:scale-[1.01] transition-transform duration-300">
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-[#0d0f17]/90">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-400 font-mono max-w-[240px] w-full justify-center truncate">
              <span className="text-emerald-400">https://</span>
              <span>nirmitee.studio/app</span>
            </div>

            {/* Empty space to align center */}
            <div className="w-12 hidden sm:block" />
          </div>

          {/* Browser Content Screenshot */}
          <div className="relative w-full aspect-[16/10] bg-[#0d0e15] overflow-hidden">
            <Image
              src="/projects/hero/web-dashboard.png"
              alt="Nirmitee Studio web application project dashboard"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mobile Device Frame (Overlapping Bottom Front) */}
        <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 w-[180px] sm:w-[220px] rounded-[2rem] border-[3px] border-zinc-700/80 bg-zinc-950 p-1.5 shadow-2xl shadow-indigo-950/60 z-20 animate-float">
          {/* Dynamic Island Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-zinc-900 rounded-full z-30 flex items-center justify-end px-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
          </div>

          {/* Phone Screen Screenshot */}
          <div className="relative w-full aspect-[9/18] rounded-[1.5rem] overflow-hidden bg-zinc-900 border border-zinc-800">
            <Image
              src="/projects/hero/mobile-app.png"
              alt="Nirmitee Studio mobile application interface preview"
              fill
              sizes="220px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Floating Stat Badge 1 */}
        <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700/60 text-white text-xs font-semibold shadow-xl backdrop-blur-md">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-zinc-400 font-normal">Native Speed</div>
            <div className="text-white font-mono font-bold text-xs">60 FPS • AI Powered</div>
          </div>
        </div>

        {/* Floating Stat Badge 2 */}
        <div className="hidden sm:flex absolute bottom-4 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium shadow-lg backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Production Ready</span>
        </div>
      </div>
    </div>
  );
}
