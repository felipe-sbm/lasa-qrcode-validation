import Link from "next/link";
import Image from "next/image";
import { eventos } from "@/data/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#018768] mb-4">
                  Trilha do Conhecimento do LASA
                </h1>
                <p className="text-lg sm:text-xl text-[#018768] mb-2">VIII Semana de Ciência e Tecnologia • UFRN</p>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Bem-vindo à <strong>Trilha do Conhecimento do LASA</strong> na VIII Semana de Ciência e Tecnologia! 
                {" "}Explore diversos eventos sobre temas atuais e relevantes para a ciência e tecnologia, 
                incluindo a Década dos Oceanos, biodiversidade marinha, mudanças climáticas e muito mais.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/eventos"
                  className="bg-[#018768] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-[#016B54] transition-colors shadow-lg"
                >
                  Ver Eventos
                </Link>
              </div>
            </div>

            {/* Logo LASA à direita */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <Image
                  src="/lasa.png"
                  alt="Logo LASA - Laboratório de Soluções Ambientais"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre O LASA Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#018768] text-center mb-10">
            Sobre O LASA
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto border-l-4 border-[#A0C556]">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O <strong>Laboratório de Soluções Ambientais (LASA)</strong> é um laboratório de excelência da UFRN 
              dedicado ao estudo e propostas de mitigação de impactos ambientais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nossa missão é <strong>desenvolver pesquisas de alta qualidade que contribuam para a sustentabilidade 
              da vida urbana e rural</strong>, utilizando tecnologias avançadas e metodologias inovadoras para 
              compreender ambientes aquáticos e propor soluções de conservação.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Através de eventos, palestras, workshops e atividades práticas, conectamos estudantes, 
              pesquisadores e a comunidade para promover o conhecimento científico e a consciência ambiental.
            </p>
          </div>
        </section>

        {/* Eventos Destaque */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#018768] text-center mb-10">
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
                  <span className="inline-block bg-green-100 text-[#018768] text-sm px-3 py-1 rounded-full mb-3">
                    {evento.categoria}
                  </span>
                  <h3 className="text-xl font-semibold text-[#018768] mb-2">
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
              className="inline-block bg-[#018768] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#016B54] transition-colors"
            >
              Ver Todos os Eventos
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#018768] to-[#A0C556] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Participe da Trilha do Conhecimento do LASA
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore nossos eventos e faça parte dessa jornada de conhecimento e descobertas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/eventos"
              className="bg-white text-[#018768] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Eventos
            </Link>
            <Link 
              href="/participantes"
              className="bg-[#018768] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#016B54] transition-colors border-2 border-white"
            >
              Participantes
            </Link>
            <Link 
              href="/patrocinadores"
              className="bg-[#018768] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#016B54] transition-colors border-2 border-white"
            >
              Patrocinadores
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
