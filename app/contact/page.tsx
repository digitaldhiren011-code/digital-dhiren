import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import InquiryForm from "@/components/inquiry-form";
import Section from "@/components/section";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Digital Dhiren for design, video editing, marketing, branding, UI/UX, and creative production inquiries."
};

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Tell us what you want to build" intro="Share your project details and get a clear next step. WhatsApp is available for the fastest response.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-5">
          {[
            { icon: Phone, label: "Phone / WhatsApp", value: brand.phone, href: `tel:${brand.phone.replace(/\s/g, "")}` },
            { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
            { icon: MapPin, label: "Location", value: "Kupandol, Lalitpur", href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.mapQuery)}` }
          ].map((item) => (
            <a key={item.label} href={item.href} className="glass rounded-brand p-6 transition hover:-translate-y-1">
              <item.icon className="text-brand-accent" size={24} />
              <p className="mt-5 text-sm text-zinc-500">{item.label}</p>
              <p className="mt-1 font-heading text-xl font-extrabold">{item.value}</p>
            </a>
          ))}
          <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-bold text-white">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <iframe
            title="Digital Dhiren map"
            className="h-64 w-full rounded-brand border border-white/10"
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapQuery)}&output=embed`}
          />
        </div>
        <InquiryForm />
      </div>
    </Section>
  );
}
