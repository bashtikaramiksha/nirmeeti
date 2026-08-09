import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  fullWidth = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-20 lg:py-28 relative overflow-hidden", className)}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
