import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, navItems } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="font-heading text-2xl font-extrabold text-white">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">{brand.tagline}. Premium design, video, marketing, and digital production from Lalitpur.</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-brand-accent">Pages</p>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-400 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-brand-accent">Contact</p>
          <div className="grid gap-3 text-sm text-zinc-300">
            <a className="flex items-center gap-3 hover:text-white" href={`tel:${brand.phone.replace(/\s/g, "")}`}>
              <Phone size={16} /> {brand.phone}
            </a>
            <a className="flex items-center gap-3 hover:text-white" href={`mailto:${brand.email}`}>
              <Mail size={16} /> {brand.email}
            </a>
            <span className="flex items-center gap-3">
              <MapPin size={16} /> {brand.location}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-500">
        Copyright {new Date().getFullYear()} Digital Dhiren. All rights reserved.
      </div>
    </footer>
  );
}
