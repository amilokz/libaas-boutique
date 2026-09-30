"use client";

import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "The Zumurrud lawn suit is the softest fabric I have ever worn — and the embroidery looks even better in person. Ordered on WhatsApp, delivered in 3 days!",
    name: "Ayesha Khan",
    city: "Lahore",
  },
  {
    quote:
      "I was nervous about sizing online, but their team guided me on WhatsApp and the fit is perfect. My Gulnaaz kurta got so many compliments at the dawat.",
    name: "Mahnoor Siddiqui",
    city: "Karachi",
  },
  {
    quote:
      "Premium quality at honest prices. The finishing, the packaging, the little handwritten note — Libaas truly treats you like family.",
    name: "Fatima Raza",
    city: "Islamabad",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            Love Notes
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-maroon-deep sm:text-5xl">
            Worn &amp; <em className="text-gilt italic">Adored</em>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-[0_20px_60px_-28px_rgba(59,15,24,0.3)] ring-1 ring-maroon-deep/5">
                <Quote className="h-8 w-8 text-gold/60" aria-hidden="true" />
                <div className="mt-4 flex gap-1" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-maroon-deep/75">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-maroon-deep/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon font-display text-lg font-bold text-gold-soft">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-maroon-deep">
                      {r.name}
                    </span>
                    <span className="block text-sm text-maroon-deep/50">
                      {r.city}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
