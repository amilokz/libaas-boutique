"use client";

import Image from "next/image";
import { Scissors, Leaf, Ruler } from "lucide-react";
import Reveal from "./Reveal";

const CRAFT = [
  {
    icon: Scissors,
    title: "Hand-finished embroidery",
    desc: "Every motif is placed and stitched by our master karigars in Lahore.",
  },
  {
    icon: Leaf,
    title: "Breathable premium fabrics",
    desc: "Swiss lawn, Korean silk and pure fabrics sourced for Pakistani weather.",
  },
  {
    icon: Ruler,
    title: "True-to-size promise",
    desc: "Standard XS–XL grading, plus free size-exchange within 7 days.",
  },
];

export default function About() {
  return (
    <section id="craft" className="scroll-mt-20 bg-blush/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl border-2 border-gold/50" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_70px_-24px_rgba(59,15,24,0.4)]">
              <Image
                src="/boutique-interior.webp"
                alt="Inside the Libaas boutique"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -right-4 -bottom-6 rounded-2xl bg-maroon px-6 py-5 text-cream shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-bold text-gold-soft">12+</p>
              <p className="text-xs tracking-widest uppercase opacity-80">
                Years of craft
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            Our Story
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-maroon-deep sm:text-5xl">
            The <em className="text-gilt italic">Libaas</em> Craft
          </h2>
          <p className="mt-6 leading-relaxed text-maroon-deep/70">
            Libaas began in a two-room atelier in Lahore with one belief — that
            a woman&apos;s everyday wear deserves the same love as her wedding
            trousseau. Today, our small team of cutters, embroiderers and
            finishers creates limited pret and lawn edits that sell out every
            season.
          </p>
          <p className="mt-4 leading-relaxed text-maroon-deep/70">
            No mass production. No compromised fabric. Just honest craft, fair
            prices, and WhatsApp-first service that treats you like family.
          </p>

          <div className="mt-8 space-y-5">
            {CRAFT.map((c) => (
              <div key={c.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/40">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-maroon-deep">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-maroon-deep/60">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
