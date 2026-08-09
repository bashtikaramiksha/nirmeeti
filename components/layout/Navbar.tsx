"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/90 dark:bg-[#080808]/90 backdrop-blur-md border-slate-200 dark:border-white/10 py-3 shadow-sm dark:shadow-lg dark:shadow-black/50"
          : "bg-white/80 dark:bg-[#080808]/80 backdrop-blur-md border-slate-200/80 dark:border-white/10 py-4"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo onClick={handleNavClick} />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-zinc-400"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-slate-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href="#contact" variant="primary" size="sm">
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Controls: Theme Toggle + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-[#080808]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <Container className="py-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-700 dark:text-zinc-300">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={handleNavClick}
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
