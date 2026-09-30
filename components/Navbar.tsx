"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Sparkle } from "lucide-react";
import { WHATSAPP_CHAT_LINK } from "@/data/products";

const LINKS = [
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Collections", href: "#collections" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Our Craft", href: "#craft" },
  { label: "Size Guide", href: "#size-guide" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid
          ? "bg-cream/90 shadow-[0_8px_30px_rgba(59,15,24,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={`flex items-center gap-2 font-display text-2xl font-bold tracking-wide ${
            solid ? "text-maroon-deep" : "text-cream"
          }`}
        >
          <Sparkle className="h-5 w-5 text-gold" />
          Libaas
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                solid
                  ? "text-maroon-deep/80 hover:text-gold"
                  : "text-cream/85 hover:text-gold-soft"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_CHAT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-maroon-deep shadow-[0_0_24px_rgba(198,156,78,0.45)] transition-all hover:bg-gold-soft sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`rounded-full p-2 transition-colors lg:hidden ${
              solid ? "text-maroon-deep" : "text-cream"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-maroon-deep/10 bg-cream/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-maroon-deep/5 py-3 text-sm font-medium tracking-widest text-maroon-deep uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_CHAT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-maroon-deep"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
