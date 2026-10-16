import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dra. Thaís Costa | Pediatra em Salvador",
  description:
    "Pediatra com +12 anos de experiência em Salvador. Consultas de até 1 hora, atendimento particular, sem sala de espera lotada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
