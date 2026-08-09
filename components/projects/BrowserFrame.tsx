import React from "react";
import Image from "next/image";
import { Lock, Globe } from "lucide-react";

interface BrowserFrameProps {
  imageSrc: string;
  imageAlt: string;
  url?: string;
  className?: string;
}

export function BrowserFrame({
  imageSrc,
  imageAlt,
  url = "app.nirmiteestudio.com",
  className = "",
}: BrowserFrameProps) {
  // Format URL for browser address bar display
  const displayUrl = url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const isExternal = url && url.startsWith("http");

  const Content = (
    <div
      className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0f] shadow-2xl shadow-black/80 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/20 cursor-pointer ${className}`}
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
        <div className="flex items-center gap-2 bg-[#09090b] text-zinc-400 text-xs px-3 py-1 rounded-md border border-white/5 max-w-xs sm:max-w-md w-full justify-center truncate mx-4 font-mono group-hover:border-indigo-500/30 transition-colors">
          <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
          <span className="truncate text-zinc-300">{displayUrl}</span>
        </div>

        {/* Browser Icon */}
        <div className="flex items-center gap-2 text-zinc-500">
          <Globe className="w-3.5 h-3.5 group-hover:text-indigo-400 transition-colors" />
        </div>
      </div>

      {/* Screenshot Content Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0c]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={false}
        />

        {/* Subtle Depth Shader & Hover CTA Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/60 via-transparent to-transparent group-hover:from-[#0d0d0f]/80 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 px-4 py-2 rounded-full bg-indigo-600/90 text-white text-xs font-semibold shadow-lg backdrop-blur-sm border border-indigo-400/30 flex items-center gap-1.5">
            Visit Live Site <Globe className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
        title={`Visit ${displayUrl}`}
      >
        {Content}
      </a>
    );
  }

  return Content;
}
