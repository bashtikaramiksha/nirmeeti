"use client";

import React from "react";
import { contactInfo } from "@/data/contact";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full space-y-8">
      {/* Top Details Box */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Contact Information
          </h3>
          <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
            Reach out through form, email, or WhatsApp. We typically respond within 24 hours.
          </p>
        </div>

        {/* WhatsApp Direct Highlight Box */}
        <div className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-gradient-to-br dark:from-emerald-950/30 dark:to-emerald-900/10 space-y-3">
          <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
            <MessageCircle className="w-4 h-4" />
            <span>Fastest Response</span>
          </div>
          <p className="text-slate-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
            Need a quick answer or want to skip the form? Chat with us directly on WhatsApp.
          </p>
          <WhatsAppButton
            message={contactInfo.defaultMessage}
            variant="emerald"
            size="md"
            className="w-full sm:w-auto"
          />
        </div>

        {/* Info Rows */}
        <div className="space-y-4 pt-2">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            onClick={() => trackEvent("email_click", { sourceLocation: "contact_info" })}
            className="group flex items-center gap-4 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#111111] hover:bg-slate-100 dark:hover:bg-[#161616] hover:border-indigo-500/30 transition-all duration-200"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-slate-500 dark:text-zinc-500 font-medium">Email Us</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                {contactInfo.email}
              </div>
            </div>
          </a>

          {/* Phone / WhatsApp */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#111111] flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-slate-500 dark:text-zinc-500 font-medium">Call / WhatsApp</div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-semibold">
                {contactInfo.phones.map((p, idx) => (
                  <React.Fragment key={p.number}>
                    <a
                      href={`tel:+${p.number}`}
                      onClick={() => trackEvent("phone_click", { sourceLocation: "contact_info" })}
                      className="text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                    >
                      {p.display}
                    </a>
                    {idx < contactInfo.phones.length - 1 && (
                      <span className="text-slate-400 dark:text-zinc-600 font-normal">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#111111]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-slate-500 dark:text-zinc-500 font-medium">Studio Location</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                {contactInfo.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          Connect With Us
        </span>
        <div className="flex items-center gap-3">
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#111111] text-slate-600 dark:text-zinc-400 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-white transition-all"
            aria-label="Nirmitee Studio on Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#111111] text-slate-600 dark:text-zinc-400 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-white transition-all"
            aria-label="Nirmitee Studio on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#111111] text-slate-600 dark:text-zinc-400 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-white transition-all"
            aria-label="Nirmitee Studio on GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
