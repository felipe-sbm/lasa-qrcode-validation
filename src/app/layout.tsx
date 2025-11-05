import type { Metadata } from "next";
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
  title: "Semana de Ciência e Tecnologia - LASA",
  description: "Semana de Ciência e Tecnologia organizada pela Liga Acadêmica de Sistemas Aquáticos (LASA) - UFRN",
  viewport: 'width=device-width, initial-scale=1',
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
