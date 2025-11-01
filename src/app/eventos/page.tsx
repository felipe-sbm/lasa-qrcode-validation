import Image from "next/image";
import Link from "next/link";
import { eventos } from "@/data/data";

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Eventos da Semana
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore os diversos eventos da Semana de Ciência e Tecnologia organizada pela LASA
          </p>
        </div>

        {/* Lista de Eventos */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {eventos.map((evento) => (
            <Link
              key={evento.id}
              href={`/eventos/${evento.id}`}
              className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="md:flex">
                {/* Imagem */}
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src={evento.imagens[0]}
                    alt={evento.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                      {evento.categoria}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="md:w-3/5 p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    {evento.titulo}
                  </h2>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {evento.descricao}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-start text-gray-600">
                      <div className="w-full">
                        <p className="text-xs text-gray-500 uppercase font-semibold">Data</p>
                        <p className="font-semibold text-blue-900">{evento.data}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-gray-600">
                      <div className="w-full">
                        <p className="text-xs text-gray-500 uppercase font-semibold">Horário</p>
                        <p className="font-semibold text-blue-900">{evento.horario}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-gray-600">
                      <div className="w-full">
                        <p className="text-xs text-gray-500 uppercase font-semibold">Local</p>
                        <p className="font-semibold text-sm text-blue-900">{evento.local}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-blue-600 font-semibold">
                      Ver detalhes do evento →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
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
