"use client";

import { Sparkle, MapPin, Phone, Clock, MessageCircle, Camera, Globe } from "lucide-react";
import { WHATSAPP_CHAT_LINK, WHATSAPP_DISPLAY } from "@/data/products";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#2a0a11] text-cream/75">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-3xl font-bold text-cream">
              <Sparkle className="h-6 w-6 text-gold" />
              Libaas
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Premium pret &amp; luxury lawn, hand-finished in Lahore. Honest
              craft, fair prices, and service that treats you like family.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#home"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-cream/20 transition-colors hover:bg-gold hover:text-maroon-deep"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Website"
                className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-cream/20 transition-colors hover:bg-gold hover:text-maroon-deep"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.25em] text-gold-soft uppercase">
              Shop
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["New Arrivals", "#new-arrivals"],
                ["Pret Collection", "#collections"],
                ["Luxury Lawn", "#collections"],
                ["Formals", "#collections"],
                ["Lookbook", "#lookbook"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-gold-soft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.25em] text-gold-soft uppercase">
              Help
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Size Guide", "#size-guide"],
                ["Our Craft", "#craft"],
                ["Reviews", "#reviews"],
                ["Track Order", WHATSAPP_CHAT_LINK],
                ["Returns & Exchange", WHATSAPP_CHAT_LINK],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-gold-soft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.25em] text-gold-soft uppercase">
              Visit Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                <span>
                  14-B, MM Alam Road,
                  <br />
                  Gulberg III, Lahore
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>{WHATSAPP_DISPLAY}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                <span>
                  Mon – Sat · 11am – 9pm
                  <br />
                  Sunday · 2pm – 8pm
                </span>
              </li>
            </ul>
            <a
              href={WHATSAPP_CHAT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon-deep transition-all hover:bg-gold-soft"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row">
          <p>
            © 2026 Libaas Boutique. All rights reserved. · Designed &amp; built
            by{" "}
            <a
              href="https://akclnt.com"
              target="_blank"
              rel="noopener"
              className="underline-offset-4 transition-colors hover:text-cream/70 hover:underline"
            >
              AKCLNT
            </a>
          </p>
          <p className="tracking-widest uppercase">
            Crafted with love in Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}
