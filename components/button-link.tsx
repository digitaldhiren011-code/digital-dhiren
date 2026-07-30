import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "default" | "cta";
  icon?: ReactNode;
};

export default function ButtonLink({ href, children, variant = "primary", size = "default", icon }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition duration-300",
        size === "cta"
          ? "h-[92px] w-full max-w-[225px] px-8 text-[18px] leading-none sm:w-[225px]"
          : "min-h-12 px-6",
        variant === "primary"
          ? "bg-white text-zinc-950 hover:bg-zinc-100"
          : "border border-white/15 bg-white/5 text-white hover:border-brand-accent/70 hover:bg-white/10"
      )}
    >
      {children}
      {icon || <ArrowRight size={size === "cta" ? 20 : 17} />}
    </Link>
  );
}
