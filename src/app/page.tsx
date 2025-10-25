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
                  Década dos Oceanos
                </h1>
                <p className="text-2xl text-blue-600 mb-2">2021-2030</p>
                <p className="text-xl text-gray-700">
                  Semana de Ciência e Tecnologia - UFRN
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong>Década das Nações Unidas da Ciência Oceânica para o Desenvolvimento Sustentável</strong> 
                {" "}(2021-2030) é uma iniciativa global para reverter o ciclo de declínio da saúde dos oceanos 
                e criar melhores condições para o desenvolvimento sustentável através da ciência oceânica e do conhecimento.
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

        {/* Objetivos Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Os Sete Resultados da Década dos Oceanos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titulo: "Oceano Limpo", descricao: "Identificar e reduzir fontes de poluição" },
              { titulo: "Oceano Saudável", descricao: "Proteger e restaurar ecossistemas marinhos" },
              { titulo: "Oceano Produtivo", descricao: "Sustentar abastecimento de alimentos" },
              { titulo: "Oceano Previsto", descricao: "Compreender mudanças nas condições oceânicas" },
              { titulo: "Oceano Seguro", descricao: "Proteger vidas de perigos relacionados ao oceano" },
              { titulo: "Oceano Acessível", descricao: "Acesso aberto a dados e tecnologia" },
              { titulo: "Oceano Inspirador", descricao: "Sociedade que valoriza o oceano" }
            ].map((objetivo, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{objetivo.titulo}</h3>
                <p className="text-gray-600">{objetivo.descricao}</p>
              </div>
            ))}
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
            Junte-se a Nós na Proteção dos Oceanos
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Participe dos nossos eventos e contribua para um futuro sustentável dos oceanos
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
              href="/referencias"
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Referências
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
