import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventoById, getParticipantesByIds, getSubEventos, participantes } from "@/data/data";
import SubEventoModal from "@/components/SubEventoModal";

export default async function EventoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const evento = getEventoById(id);

  if (!evento) {
    notFound();
  }

  const autores = getParticipantesByIds(evento.autoresIds);
  const subEventos = getSubEventos(id);
  
  // Criar mapa de participantes para o modal
  const participantesMap = participantes.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {} as Record<string, typeof participantes[0]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Modal de Sub-eventos */}
      <SubEventoModal 
        subEventos={subEventos} 
        eventoId={id}
        participantesMap={participantesMap}
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#018768]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/eventos" className="hover:text-[#018768]">Eventos</Link>
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
              <span className="inline-block bg-[#018768] text-white text-sm px-4 py-2 rounded-full font-semibold mb-4">
                {evento.categoria}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {evento.titulo}
              </h1>
            </div>
          </div>

          {/* Informações do Evento */}
          <div className="p-8 bg-green-50">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start border-l-4 border-[#018768] pl-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Data</p>
                  <p className="text-lg text-gray-900 font-bold">{evento.data}</p>
                </div>
              </div>
              
              <div className="flex items-start border-l-4 border-[#018768] pl-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Horário</p>
                  <p className="text-lg text-gray-900 font-bold">{evento.horario}</p>
                </div>
              </div>
              
              <div className="flex items-start border-l-4 border-[#018768] pl-4">
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
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-[#A0C556]">
              <h2 className="text-3xl font-bold text-[#018768] mb-6">
                Sobre o Evento
              </h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: evento.descricaoCompleta }}
              />
            </div>

            {/* Sub-eventos / Atividades do Colóquio */}
            {subEventos.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-[#018768]">
                <h2 className="text-3xl font-bold text-[#018768] mb-6">
                  Atividades do Colóquio
                </h2>
                <p className="text-gray-600 mb-8">
                  Confira a programação completa das palestras que compõem o colóquio. Clique em cada palestra para mais detalhes:
                </p>
                
                <div className="space-y-6">
                  {subEventos.map((subEvento, index) => (
                    <Link
                      key={subEvento.id}
                      href={`/eventos/${id}?subevento=${subEvento.id}`}
                      scroll={false}
                      className="block bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border-l-4 border-[#A0C556] hover:shadow-lg hover:border-[#018768] transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start flex-1">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#018768] text-white font-bold text-sm mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#018768] mb-2 group-hover:text-[#016B54] transition-colors">
                              {subEvento.titulo}
                            </h3>
                            <p className="text-gray-700 mb-3">
                              {subEvento.descricao}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center">
                                <span className="font-semibold text-[#018768] mr-1">🕒</span>
                                {subEvento.horario}
                              </div>
                              <div className="flex items-center">
                                <span className="font-semibold text-[#018768] mr-1">📍</span>
                                {subEvento.local}
                              </div>
                            </div>
                            <div className="flex items-center text-[#018768] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                              <span>Ver detalhes e registrar presença</span>
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Galeria de Imagens */}
            {evento.imagens.length > 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-[#018768] mb-6">
                  Galeria
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {evento.imagens.slice(0).map((imagem, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={imagem}
                        alt={`${evento.titulo} - Imagem ${index + 1}`}
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
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8 border-l-4 border-[#A0C556]">
              {autores.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-[#018768] mb-6">
                    {evento.categoria === "Palestra" ? "Palestrantes" : 
                     evento.categoria === "Workshop" ? "Facilitadores" : 
                     "Participantes"}
                  </h2>
                  
                  <div className="space-y-6">
                    {autores.map((autor) => (
                      <Link
                        key={autor.id}
                        href={`/participantes#${autor.id}`}
                        className="block hover:bg-green-50 p-4 rounded-lg transition-colors"
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
                            <h3 className="font-semibold text-[#018768] mb-1">
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
                </>
              )}

              {/* CTA - Não exibir botão se tiver sub-eventos */}
              {subEventos.length === 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                  {evento.formularioUrl && evento.formularioAtivo && (
                    <a
                      href={evento.formularioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors bg-[#018768] text-white hover:bg-[#016B54]"
                    >
                      Registrar Presença
                    </a>
                  )}
                  {evento.formularioUrl && !evento.formularioAtivo && (
                    <div className="block w-full text-center px-6 py-3 rounded-lg font-semibold bg-gray-300 text-gray-500 cursor-not-allowed">
                      Lista de Presença em Breve
                    </div>
                  )}
                </div>
              )}
              
              {/* Mensagem para eventos com sub-eventos */}
              {subEventos.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="bg-green-50 border-l-4 border-[#018768] p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-[#018768]">💡 Importante:</span> Para você registrar a sua presença, acesse individualmente cada palestra do colóquio na seção <strong>Atividades do Colóquio</strong> acima.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="mt-12 text-center">
          <Link
            href="/eventos"
            className="inline-block text-[#018768] hover:text-[#016B54] font-semibold"
          >
            ← Voltar para Eventos
          </Link>
        </div>
      </main>
    </div>
  );
}
