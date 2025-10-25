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
  title: "Década dos Oceanos - UFRN",
  description: "Semana de Ciência e Tecnologia da UFRN - Década das Nações Unidas da Ciência Oceânica para o Desenvolvimento Sustentável (2021-2030)",
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
