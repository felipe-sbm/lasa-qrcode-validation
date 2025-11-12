import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import "./globals.scss";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trilha do Conhecimento do LASA - VIII Semana de C&T",
  description: "Trilha do Conhecimento do Laboratório de Soluções Ambientais (LASA) na VIII Semana de Ciência e Tecnologia da UFRN. Pesquisas de alta qualidade para a sustentabilidade da vida urbana e rural.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${figtree.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
