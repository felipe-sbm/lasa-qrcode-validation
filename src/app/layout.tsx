import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import "./globals.scss";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header/>
        {children}
      </body>
    </html>
  );
}
