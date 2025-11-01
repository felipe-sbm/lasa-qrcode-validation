import Image from "next/image";
import Link from "next/link";
import { participantes } from "@/data/data";

export default function ParticipantesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Participantes
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça os pesquisadores e especialistas que estão contribuindo para o evento
          </p>
        </div>

        {/* Grade de Participantes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {participantes.map((participante) => (
            <div
              key={participante.id}
              id={participante.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              {/* Foto */}
              {participante.foto && (
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={participante.foto}
                    alt={participante.nome}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}

              {/* Conteúdo */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  {participante.nome}
                </h2>
                
                <p className="text-blue-600 font-semibold mb-1">
                  {participante.cargo}
                </p>
                
                <p className="text-sm text-gray-600 mb-4">
                  {participante.instituicao}
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {participante.bio}
                </p>

                {participante.email && (
                  <a
                    href={`mailto:${participante.email}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline"
                  >
                    {participante.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nosso Time
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{participantes.length}</div>
              <p className="text-blue-200">Pesquisadores</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-200">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-blue-200">Áreas de Especialização</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
