import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wearme — Everyday style, considered",
  description: "Discover thoughtfully selected pieces for your everyday wardrobe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
