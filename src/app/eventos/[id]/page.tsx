import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventoById, getParticipantesByIds } from "@/data/data";

export default function EventoPage({ params }: { params: { id: string } }) {
  const evento = getEventoById(params.id);

  if (!evento) {
    notFound();
  }

  const autores = getParticipantesByIds(evento.autoresIds);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/eventos" className="hover:text-blue-600">Eventos</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{evento.titulo}</span>
        </div>

        {/* Header do Evento */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-96">
            <Image
              src={evento.imagens[0]}
              alt={evento.titulo}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-semibold mb-4">
                {evento.categoria}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {evento.titulo}
              </h1>
            </div>
          </div>

          {/* Informações do Evento */}
          <div className="p-8 bg-blue-50">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start border-l-4 border-blue-600 pl-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Data</p>
                  <p className="text-lg text-gray-900 font-bold">{evento.data}</p>
                </div>
              </div>
              
              <div className="flex items-start border-l-4 border-blue-600 pl-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Horário</p>
                  <p className="text-lg text-gray-900 font-bold">{evento.horario}</p>
                </div>
              </div>
              
              <div className="flex items-start border-l-4 border-blue-600 pl-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Local</p>
                  <p className="text-lg text-gray-900 font-bold">{evento.local}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2">
            {/* Descrição */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Sobre o Evento
              </h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: evento.descricaoCompleta }}
              />
            </div>

            {/* Galeria de Imagens */}
            {evento.imagens.length > 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Galeria
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {evento.imagens.slice(1).map((imagem, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={imagem}
                        alt={`${evento.titulo} - Imagem ${index + 2}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Palestrantes/Autores */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                {evento.categoria === "Palestra" ? "Palestrantes" : 
                 evento.categoria === "Workshop" ? "Facilitadores" : 
                 "Participantes"}
              </h2>
              
              <div className="space-y-6">
                {autores.map((autor) => (
                  <Link
                    key={autor.id}
                    href={`/participantes#${autor.id}`}
                    className="block hover:bg-blue-50 p-4 rounded-lg transition-colors"
                  >
                    <div className="flex items-start">
                      {autor.foto && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                          <Image
                            src={autor.foto}
                            alt={autor.nome}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">
                          {autor.nome}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {autor.cargo}
                        </p>
                        <p className="text-xs text-gray-500">
                          {autor.instituicao}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  href="/participantes"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Ver Todos os Participantes
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="mt-12 text-center">
          <Link
            href="/eventos"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Voltar para Eventos
          </Link>
        </div>
      </main>
    </div>
  );
}
