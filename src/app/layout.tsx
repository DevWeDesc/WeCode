import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab, Lato } from "next/font/google";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

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
  robots: { follow: true, index: true },
  verification: {
    google: "kpMUX9_YimEwJTMlkY7EP8ovIjp0s-4pb5NMRzzhno0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${lato.variable}`}>
      <body className="bg-primary text-white">
        {children}
        <Link
          target="_blank"
          className="fixed"
          href="https://api.whatsapp.com/send?phone=5511937302594&text=Estou%20interessado%20em%20pedir%20um%20orçamento!"
          about=""
        >
          <BsWhatsapp className="fixed bottom-10 right-10 text-4xl z-30 cursor-pointer text-green-500 hover:text-green-600 transition-all" />
        </Link>
      </body>
    </html>
  );
}
