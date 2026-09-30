"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { WHATSAPP_CHAT_LINK } from "@/data/products";

export default function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-maroon-deep"
    >
      {/* cinematic video backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          src="/hero.mp4"
          poster="/dress-emerald.webp"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/85 via-maroon-deep/30 to-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(59,15,24,0.6)_100%)]" />
      </div>

      {/* floating sparkles */}
      <Sparkles
        className="absolute left-[12%] top-[24%] h-6 w-6 animate-float text-gold-soft/70"
        aria-hidden="true"
      />
      <Sparkles
        className="absolute bottom-[30%] right-[14%] h-8 w-8 animate-float text-gold/60 [animation-delay:1.4s]"
        aria-hidden="true"
      />
      <Sparkles
        className="absolute right-[24%] top-[18%] h-5 w-5 animate-float text-gold-soft/50 [animation-delay:2.6s]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-24 text-center sm:px-6">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-maroon-deep/40 px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold-soft uppercase backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Festive Edit &rsquo;26 — Now Live
        </p>
        <h1 className="font-display text-5xl leading-[1.08] font-bold tracking-tight text-cream sm:text-7xl lg:text-8xl">
          Wear Your{" "}
          <em className="text-gilt font-display italic">Noor</em>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
          Premium pret &amp; luxury lawn, hand-finished in Lahore — delicate
          embroidery, breathable fabrics, and silhouettes made to celebrate
          you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#new-arrivals"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-maroon-deep shadow-[0_0_44px_rgba(198,156,78,0.55)] transition-all hover:bg-gold-soft hover:shadow-[0_0_60px_rgba(198,156,78,0.75)]"
          >
            Shop New Arrivals
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_CHAT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-8 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold hover:text-gold-soft"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm tracking-wide text-cream/70">
          <span>500+ Happy Customers</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
          <span>4.9 Rated</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
          <span>Ships Across Pakistan</span>
        </div>
      </div>

      <a
        href="#new-arrivals"
        aria-label="Scroll to new arrivals"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-maroon-deep/60 transition-colors hover:text-gold"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
