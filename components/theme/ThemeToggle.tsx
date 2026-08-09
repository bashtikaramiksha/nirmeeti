"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 text-xs font-semibold select-none ${className}`}
        aria-label="Toggle Theme"
      >
        <Moon className="w-3.5 h-3.5 text-indigo-400" />
        <span className="hidden sm:inline">Dark</span>
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer text-xs font-semibold select-none ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Currently ${isDark ? "Dark" : "Light"} mode. Click to switch.`}
    >
      {isDark ? (
        <>
          <Moon className="w-3.5 h-3.5 text-indigo-400 transition-transform duration-300" />
          <span className="hidden sm:inline">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-500 transition-transform duration-300" />
          <span className="hidden sm:inline">Light Mode</span>
        </>
      )}
    </button>
  );
}
