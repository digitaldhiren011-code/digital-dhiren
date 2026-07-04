import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { brand } from "@/lib/site";
import { slugify } from "@/lib/utils";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group gradient-border rounded-brand">
      <div className="glass flex h-full flex-col rounded-brand p-6 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-primary/20 text-brand-accent">
          <Icon size={25} />
        </div>
        <h3 className="font-heading text-xl font-extrabold text-white">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{service.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/services#${slugify(service.title)}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent">
            Learn More <ArrowRight size={16} />
          </Link>
          <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white">
            Inquiry <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
