"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/contact";
import { trackEvent } from "@/lib/analytics";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "emerald";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  label = "Chat on WhatsApp",
  variant = "emerald",
  size = "md",
  className = "",
}) => {
  const href = getWhatsAppUrl(message);

  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    emerald:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/35 active:scale-[0.98]",
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/35 active:scale-[0.98]",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white border border-white/10 active:scale-[0.98]",
    outline:
      "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 active:scale-[0.98]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { sourceLocation: "whatsapp_button" })}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={`${label} via WhatsApp (opens in new tab)`}
    >
      <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
      <span className="text-xs font-normal opacity-80" aria-hidden="true">
        →
      </span>
    </a>
  );
};
