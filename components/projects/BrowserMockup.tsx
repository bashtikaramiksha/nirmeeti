import React from "react";
import Image from "next/image";
import { Lock, Globe } from "lucide-react";

interface BrowserMockupProps {
  imageSrc: string;
  imageAlt: string;
  url?: string;
  className?: string;
  aspectRatio?: string;
}

export function BrowserMockup({
  imageSrc,
  imageAlt,
  url = "app.nirmiteestudio.com",
  className = "",
}: BrowserMockupProps) {
  // Format URL for browser display
  const displayUrl = url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0f] shadow-2xl shadow-black/80 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-indigo-500/10 ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#141417] border-b border-white/10 select-none">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-400/30" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-400/30" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-400/30" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 bg-[#09090b] text-zinc-400 text-xs px-3 py-1 rounded-md border border-white/5 max-w-xs sm:max-w-md w-full justify-center truncate mx-4 font-mono">
          <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
          <span className="truncate text-zinc-300">{displayUrl}</span>
        </div>

        {/* Action Icon */}
        <div className="flex items-center gap-2 text-zinc-500">
          <Globe className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Screenshot Content Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0c]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          priority={false}
        />
        
        {/* Subtle Inner Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
