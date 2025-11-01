import Link from "next/link";
import Image from "next/image";
import { eventos } from "@/data/data";
import ImageSlideshow from "@/components/ImageSlideshow";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
                  Semana de Ciência e Tecnologia 2025
                </h1>
                <p className="text-2xl text-blue-600 mb-2">Laboratório de Soluções Ambientais • UFRN</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bem-vindo à <strong>Semana de Ciência e Tecnologia</strong> organizada pela LASA! 
                {" "}Explore diversos eventos sobre temas atuais e relevantes para a ciência e tecnologia, 
                incluindo a Década dos Oceanos, biodiversidade marinha, mudanças climáticas e muito mais.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/eventos"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Ver Eventos
                </Link>
                <Link 
                  href="/participantes"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600"
                >
                  Conheça os Participantes
                </Link>
              </div>
            </div>

            {/* Slideshow à direita */}
            <ImageSlideshow />
          </div>
        </section>

        {/* Sobre a LASA Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Sobre a LASA
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <strong>Liga Acadêmica de Sistemas Aquáticos (LASA)</strong> é uma organização estudantil da UFRN 
              dedicada à pesquisa, educação e extensão nas áreas de oceanografia, ecologia aquática e ciências ambientais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa missão é promover o conhecimento científico e a consciência ambiental através de eventos, 
              palestras, workshops e atividades práticas que conectam estudantes, pesquisadores e a comunidade.
            </p>
          </div>
        </section>

        {/* Eventos Destaque */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Eventos da Semana
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {eventos.map((evento) => (
              <Link 
                key={evento.id} 
                href={`/eventos/${evento.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={evento.imagens[0]}
                    alt={evento.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                    {evento.categoria}
                  </span>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {evento.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {evento.descricao}
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p><strong>Data:</strong> {evento.data}</p>
                    <p><strong>Horário:</strong> {evento.horario}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/eventos"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Todos os Eventos
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Participe da Semana de Ciência e Tecnologia
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore nossos eventos e faça parte dessa jornada de conhecimento e descobertas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/eventos"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Eventos
            </Link>
            <Link 
              href="/participantes"
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Participantes
            </Link>
            <Link 
              href="/patrocinadores"
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Patrocinadores
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
