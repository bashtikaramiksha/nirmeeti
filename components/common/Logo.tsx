import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md py-1 px-1.5 -ml-1.5",
        className
      )}
      aria-label="Nirmitee Studio Homepage"
    >
      <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent font-extrabold">
        Nirmitee
      </span>
      <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide text-xs uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
        Studio
      </span>
    </Link>
  );
}
