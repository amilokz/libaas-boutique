"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { waLink } from "@/data/products";

const COLLECTIONS = [
  {
    name: "Pret",
    desc: "Ready-to-wear everyday elegance — kurtas, co-ords & sets, stitched to perfection.",
    image: "/outfit-hanger.webp",
    count: "40+ styles",
  },
  {
    name: "Luxury Lawn",
    desc: "Breathable premium lawn with intricate embroidery — made for Pakistani summers.",
    image: "/dress-emerald.webp",
    count: "25+ styles",
  },
  {
    name: "Formals",
    desc: "Wedding & festive formals in silk, zari and hand embellishment.",
    image: "/fabric-closeup.webp",
    count: "18+ styles",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="scroll-mt-20 bg-blush/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            Curated For You
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-maroon-deep sm:text-5xl">
            Shop by <em className="text-gilt italic">Collection</em>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <a
                href={waLink(
                  `Assalam-o-Alaikum Libaas! Please share your ${c.name} collection catalogue.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-96 overflow-hidden rounded-3xl shadow-[0_20px_60px_-24px_rgba(59,15,24,0.35)]"
              >
                <Image
                  src={c.image}
                  alt={`${c.name} collection`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/90 via-maroon-deep/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-semibold tracking-[0.3em] text-gold-soft uppercase">
                    {c.count}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-bold text-cream">
                    {c.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/75">
                    {c.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-gold-soft uppercase transition-colors group-hover:text-gold">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
