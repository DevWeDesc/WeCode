import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab, Lato } from "next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "WeCode",
  description:
    "WeCode - Soluções para tecnologia em desenvolvimento de sistemas!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${lato.variable}`}>
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
}
