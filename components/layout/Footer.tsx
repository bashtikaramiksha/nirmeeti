import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/common/Logo";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#080808] text-slate-600 dark:text-zinc-400 pt-16 pb-12 transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Brand & Description */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <Logo />
            <p className="text-slate-600 dark:text-zinc-400 text-sm max-w-sm leading-relaxed mt-1">
              Building modern digital products for businesses and ideas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Social
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-zinc-500 gap-4">
          <p>© 2026 Nirmitee Studio. All rights reserved.</p>
          <p className="text-slate-400 dark:text-zinc-600">Designed & Built with Precision</p>
        </div>
      </Container>
    </footer>
  );
}
