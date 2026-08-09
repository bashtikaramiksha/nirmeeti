import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-900/15 blur-3xl pointer-events-none rounded-full" />

      {/* Card Content */}
      <div className="relative z-10 max-w-md w-full text-center space-y-6 p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          <FileQuestion className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
            ERROR 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-2">
            Page Not Found
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-1">
            The page you are looking for doesn't exist, has been removed, or the link is incorrect.
          </p>
        </div>

        <div className="pt-4 border-t border-white/5">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto group">
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Nirmitee Studio</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
