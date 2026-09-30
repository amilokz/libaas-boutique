export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number; // PKR
  image: string;
  tag?: string;
  fabric: string;
  pieces: string;
}

export const WHATSAPP_NUMBER = "923001234567";
export const WHATSAPP_DISPLAY = "0300 1234567";

export const SIZES = ["XS", "S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

export const PRODUCTS: Product[] = [
  {
    id: "zumurrud",
    name: "Zumurrud",
    tagline: "Emerald Embroidered 3-Piece",
    price: 8900,
    image: "/dress-emerald.webp",
    tag: "Bestseller",
    fabric: "Premium Swiss Lawn",
    pieces: "Shirt · Trouser · Dupatta",
  },
  {
    id: "gulnaaz",
    name: "Gulnaaz",
    tagline: "Blush Festive Kurta Set",
    price: 12500,
    image: "/outfit-hanger.webp",
    tag: "New In",
    fabric: "Korean Silk Blend",
    pieces: "Kurta · Dupatta",
  },
  {
    id: "raat-rani",
    name: "Raat Rani",
    tagline: "Maroon Zari Formal 3-Piece",
    price: 18900,
    image: "/fabric-closeup.webp",
    tag: "Limited",
    fabric: "Pure Silk · Gold Zari",
    pieces: "Shirt · Trouser · Dupatta",
  },
];

export function formatPKR(n: number): string {
  return "Rs " + n.toLocaleString("en-US");
}

export function orderMessage(p: Product, size: Size): string {
  return [
    "Assalam-o-Alaikum Libaas! I would like to order:",
    "",
    `${p.name} — ${p.tagline}`,
    `Size: ${size}`,
    `Price: ${formatPKR(p.price)}`,
    "",
    "Please confirm availability. Shukriya!",
  ].join("\n");
}

export const waLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_CHAT_LINK = waLink(
  "Assalam-o-Alaikum Libaas! I want to know more about your new arrivals."
);
