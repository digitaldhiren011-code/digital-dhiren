import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
};

export default function ButtonLink({ href, children, variant = "primary", icon }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300",
        variant === "primary"
          ? "bg-white text-zinc-950 shadow-glow hover:-translate-y-0.5 hover:bg-brand-accent"
          : "border border-white/15 bg-white/5 text-white hover:border-brand-accent/70 hover:bg-white/10"
      )}
    >
      {children}
      {icon || <ArrowRight size={17} />}
    </Link>
  );
}
