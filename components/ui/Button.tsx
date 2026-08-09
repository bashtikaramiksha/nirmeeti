import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    onClick?: () => void;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-[#080808] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 border border-indigo-500/50",
    secondary:
      "bg-slate-200/80 dark:bg-zinc-900/80 hover:bg-slate-300 dark:hover:bg-zinc-800 text-slate-900 dark:text-white border border-slate-300 dark:border-zinc-800 backdrop-blur-sm",
    outline:
      "bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20",
    ghost:
      "bg-transparent text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 rounded-full gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-full gap-2",
    lg: "text-base px-7 py-3 rounded-full gap-2.5",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
