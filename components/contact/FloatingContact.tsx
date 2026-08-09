"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/contact";

export const FloatingContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  const whatsappUrl = getWhatsAppUrl();

  const handleDesktopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // On desktop, scroll smoothly to #contact section if available
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-fade-in">
      {/* Desktop Floating Button (Scroll to #contact) */}
      <a
        href="#contact"
        onClick={handleDesktopClick}
        className="hidden md:inline-flex items-center gap-2.5 px-4 py-3 rounded-full border border-indigo-500/30 bg-[#12121c]/90 text-white font-semibold text-sm shadow-xl shadow-indigo-950/50 backdrop-blur-md hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-label="Scroll to contact section"
      >
        <span className="text-base">💬</span>
        <span>Let's Talk</span>
        <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />
      </a>

      {/* Mobile Floating Button (Direct WhatsApp Action) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden inline-flex items-center gap-2 px-4 py-3 rounded-full border border-emerald-500/40 bg-[#0c1a14]/90 text-emerald-300 font-semibold text-xs shadow-2xl backdrop-blur-md hover:bg-emerald-600 hover:text-white transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        aria-label="Chat on WhatsApp (opens in new tab)"
      >
        <MessageSquare className="w-4 h-4 text-emerald-400" />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
};
