"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const SHOTS = [
  { src: "/dress-emerald.webp", caption: "Zumurrud — Emerald Edit" },
  { src: "/outfit-hanger.webp", caption: "Gulnaaz — Festive Mornings" },
  { src: "/fabric-closeup.webp", caption: "Zari Detail — Atelier" },
  { src: "/boutique-interior.webp", caption: "The Boutique — Gulberg" },
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-gold uppercase">
              Style Diary
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-maroon-deep sm:text-5xl">
              The <em className="text-gilt italic">Lookbook</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-maroon-deep/55">
            A glimpse inside the Libaas world — swipe through the fabrics,
            fits and finishing we obsess over.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
          {SHOTS.map((s) => (
            <figure
              key={s.src}
              className="group w-72 shrink-0 snap-start overflow-hidden rounded-3xl bg-blush sm:w-96"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 288px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 font-display text-lg font-semibold text-cream italic">
                  {s.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
