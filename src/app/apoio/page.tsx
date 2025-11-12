import Image from "next/image";
import Link from "next/link";
import { apoio } from "@/data/data";

export default function PatrocinadoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 pt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#018768] mb-4">
            Apoio
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Agradecemos aos nossos parceiros que tornam possível a realização da
            Trilha do Conhecimento do LASA na VIII Semana de Ciência e Tecnologia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {apoio.map((apoio) => (
              <div
                key={apoio.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col"
              >
                {/* Logo */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-50 to-white">
                  <Image
                    src={apoio.logo}
                    alt={apoio.nome}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Nome, Descrição e Link */}
                <div className="p-6 md:p-8 bg-white flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-[#018768] mb-3 text-center">
                    {apoio.nome}
                  </h3>

                  <p className="text-gray-600 text-center mb-4 leading-relaxed flex-grow">
                    {apoio.descricao}
                  </p>

                  {apoio.website && (
                    <a
                      href={apoio.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-base text-white bg-[#018768] hover:bg-[#A0C556] font-semibold py-3 px-6 rounded-lg transition-colors mt-auto"
                    >
                      Visitar site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}