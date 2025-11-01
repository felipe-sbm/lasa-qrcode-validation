import Image from "next/image";
import Link from "next/link";
import { patrocinadores } from "@/data/data";

export default function PatrocinadoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Nossos Patrocinadores
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Agradecemos aos nossos parceiros que tornam possível a realização da
            Semana de Ciência e Tecnologia do Laboratório de Soluções Ambientais
          </p>
        </div>

        {/* Galeria de Patrocinadores */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {patrocinadores.map((patrocinador) => (
              <div
                key={patrocinador.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group"
              >
                {/* Logo */}
                <div className="relative h-40 bg-gray-50 flex items-center justify-center p-6">
                  <Image
                    src={patrocinador.logo}
                    alt={patrocinador.nome}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Nome e Link */}
                <div className="p-4 bg-white">
                  <h3 className="text-sm font-bold text-blue-900 mb-2 text-center line-clamp-2">
                    {patrocinador.nome}
                  </h3>

                  {patrocinador.website && (
                    <a
                      href={patrocinador.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs text-blue-600 hover:text-blue-700 font-semibold group-hover:underline"
                    >
                      Visitar site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-16 bg-blue-900 text-white rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Quer ser um Patrocinador?</h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e faça parte dessa iniciativa de educação e
            ciência
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:lasa@ufrn.br"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Entrar em Contato
            </a>
            <Link
              href="/eventos"
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Conhecer os Eventos
            </Link>
          </div>
        </section>

        {/* Navegação */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </main>
    </div>
  );
}
