"use client";

import { Ruler, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_CHAT_LINK } from "@/data/products";

const ROWS = [
  { size: "XS", bust: "32", waist: "26", hips: "35" },
  { size: "S", bust: "34", waist: "28", hips: "37" },
  { size: "M", bust: "36", waist: "30", hips: "39" },
  { size: "L", bust: "38", waist: "32", hips: "41" },
  { size: "XL", bust: "40", waist: "34", hips: "43" },
];

export default function SizeGuide() {
  return (
    <section id="size-guide" className="scroll-mt-20 bg-maroon-deep py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            <Ruler className="h-4 w-4" />
            Find Your Fit
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Size <em className="text-gilt italic">Guide</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/65">
            All measurements in inches. Between sizes? We recommend sizing up
            for a relaxed desi fit.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl ring-1 ring-gold/25">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gold/15 text-gold-soft">
                  <th className="px-6 py-4 font-semibold tracking-widest uppercase">Size</th>
                  <th className="px-6 py-4 font-semibold tracking-widest uppercase">Bust</th>
                  <th className="px-6 py-4 font-semibold tracking-widest uppercase">Waist</th>
                  <th className="px-6 py-4 font-semibold tracking-widest uppercase">Hips</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr
                    key={r.size}
                    className={`text-cream/85 transition-colors hover:bg-cream/5 ${
                      i % 2 === 1 ? "bg-cream/[0.03]" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-display text-lg font-bold text-gold-soft">
                      {r.size}
                    </td>
                    <td className="px-6 py-4">{r.bust}&quot;</td>
                    <td className="px-6 py-4">{r.waist}&quot;</td>
                    <td className="px-6 py-4">{r.hips}&quot;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 text-center">
          <p className="text-cream/65">
            Still unsure? Send us your measurements — we&apos;ll suggest your
            perfect size.
          </p>
          <a
            href={WHATSAPP_CHAT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-maroon-deep uppercase transition-all hover:bg-gold-soft"
          >
            <MessageCircle className="h-4 w-4" />
            Ask on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
