import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={brand.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-glow transition hover:-translate-y-1 sm:grid"
    >
      <MessageCircle size={25} />
    </a>
  );
}
