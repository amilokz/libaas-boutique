"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import {
  PRODUCTS,
  SIZES,
  formatPKR,
  orderMessage,
  waLink,
  type Product,
  type Size,
} from "@/data/products";

function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState<Size>("M");

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-24px_rgba(59,15,24,0.25)] ring-1 ring-maroon-deep/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-24px_rgba(59,15,24,0.35)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-blush">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.tagline}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {product.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold tracking-widest text-maroon-deep uppercase shadow-lg">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold text-maroon-deep">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-maroon-deep/60">
          {product.tagline} · {product.fabric}
        </p>
        <p className="mt-1 text-xs tracking-wide text-maroon-deep/45">
          {product.pieces}
        </p>

        <div className="mt-4 flex items-baseline justify-between">
          <span className="font-display text-3xl font-bold text-maroon">
            {formatPKR(product.price)}
          </span>
          <span className="text-xs text-maroon-deep/45">incl. taxes</span>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold tracking-widest text-maroon-deep/60 uppercase">
            Select size
          </p>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Size">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                role="radio"
                aria-checked={size === s}
                onClick={() => setSize(s)}
                className={`min-w-11 rounded-full border px-3 py-2 text-sm font-semibold transition-all ${
                  size === s
                    ? "border-maroon bg-maroon text-cream shadow-md"
                    : "border-maroon-deep/20 bg-cream text-maroon-deep hover:border-gold hover:text-maroon"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <a
          href={waLink(orderMessage(product, size))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition-all hover:bg-maroon-deep hover:shadow-[0_12px_30px_-10px_rgba(92,29,41,0.6)]"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            Just Landed
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-maroon-deep sm:text-5xl">
            New <em className="text-gilt italic">Arrivals</em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-maroon-deep/60">
            Fresh from our atelier — limited pieces in breathable luxury
            fabrics, each finished by hand. Pick your size and order in one
            tap.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
