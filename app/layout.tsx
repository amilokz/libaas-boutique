import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Libaas — Premium Pret & Luxury Lawn | Lahore",
  description:
    "Libaas Boutique — women's premium pret and luxury lawn, hand-finished in Lahore. Shop new arrivals and festive formals, order effortlessly on WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jost.variable} bg-cream font-sans text-maroon-deep antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
