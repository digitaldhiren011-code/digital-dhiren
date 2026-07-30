"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site";
import ButtonLink from "@/components/button-link";
import DigitalDhirenLogo from "@/components/digital-dhiren-logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-22 sm:px-6 lg:h-24 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Digital Dhiren home">
          <DigitalDhirenLogo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/book-free-consultation">Book Free Call</ButtonLink>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-brand-dark px-4 py-5 lg:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-zinc-200 hover:bg-white/5">
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/book-free-consultation">Book Free Call</ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
