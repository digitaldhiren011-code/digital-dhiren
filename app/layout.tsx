import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["600", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://digitaldhiren.com"),
  title: {
    default: "Digital Dhiren | Creative Agency & Digital Solutions",
    template: "%s | Digital Dhiren"
  },
  description: "Premium graphic design, video editing, marketing, branding, UI/UX, and creative production services in Lalitpur, Kathmandu.",
  keywords: ["Digital Dhiren", "graphic design Nepal", "video editing Kathmandu", "digital marketing Lalitpur", "creative agency Nepal"],
  openGraph: {
    title: "Digital Dhiren",
    description: brand.tagline,
    url: "https://digitaldhiren.com",
    siteName: "Digital Dhiren",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Dhiren",
    description: brand.tagline
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <div className="noise" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
