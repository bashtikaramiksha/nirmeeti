import React from "react";
import Image from "next/image";

interface PhoneFrameProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function PhoneFrame({
  imageSrc,
  imageAlt,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      className={`group relative mx-auto w-full max-w-[280px] sm:max-w-[320px] transition-all duration-300 ${className}`}
    >
      {/* Dynamic Ambient Backlight Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-indigo-400/20 rounded-[44px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Phone Outer Chassis Frame */}
      <div className="relative rounded-[40px] border-[6px] border-[#1c1c22] bg-[#0c0c10] p-2.5 shadow-2xl shadow-black ring-1 ring-white/10">
        {/* Hardware Notch / Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-24 h-4 bg-[#000000] rounded-full flex items-center justify-end px-2 border border-white/5">
          <span className="w-2 h-2 rounded-full bg-[#111116]" />
        </div>

        {/* Screen Display Container */}
        <div className="relative aspect-[9/18.5] w-full overflow-hidden rounded-[30px] bg-[#060608]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 280px, 320px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            priority={false}
          />
          {/* Subtle Screen Reflection Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Bottom Indicator Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-32 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}
