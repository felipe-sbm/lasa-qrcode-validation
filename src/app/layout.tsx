import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import "./globals.scss";

// Note: Font loading removed to fix build issues in restricted network environments
// The application now uses system fonts defined in globals.scss

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
      <body className="antialiased">
        <Header/>
        {children}
      </body>
    </html>
  );
}
