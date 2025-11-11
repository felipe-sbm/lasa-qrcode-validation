import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#018768] mb-4">
            Sobre O LASA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Laboratório de Soluções Ambientais
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Apresentação */}
          <section className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#A0C556]">
            <h2 className="text-2xl font-bold text-[#018768] mb-4">
              Quem Somos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O <strong>Laboratório de Soluções Ambientais (LASA)</strong> é um laboratório de excelência 
              da Universidade Federal do Rio Grande do Norte (UFRN), dedicado ao estudo e propostas de 
              mitigação de impactos ambientais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso trabalho se concentra em desenvolver pesquisas de alta qualidade que contribuam para 
              a sustentabilidade da vida urbana e rural, utilizando tecnologias avançadas e metodologias 
              inovadoras.
            </p>
          </section>

          {/* Missão */}
          <section className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#A0C556]">
            <h2 className="text-2xl font-bold text-[#018768] mb-4">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Desenvolver pesquisas de alta qualidade que contribuam para a sustentabilidade 
              da vida urbana e rural</strong>, utilizando tecnologias avançadas e metodologias inovadoras 
              para compreender ambientes aquáticos e propor soluções de conservação.
            </p>
          </section>

          {/* Áreas de Atuação */}
          <section className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#A0C556]">
            <h2 className="text-2xl font-bold text-[#018768] mb-4">
              Áreas de Atuação
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Estudo de ambientes aquáticos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Propostas de mitigação de impactos ambientais</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Gestão de recursos hídricos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Soluções para sustentabilidade urbana</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Conservação de ecossistemas aquáticos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Tecnologias ambientais inovadoras</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Sustentabilidade rural</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A0C556] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Educação ambiental</p>
                </div>
              </div>
            </div>
          </section>

          {/* Metodologia */}
          <section className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#A0C556]">
            <h2 className="text-2xl font-bold text-[#018768] mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Utilizamos <strong>tecnologias avançadas e metodologias inovadoras</strong> para:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A0C556] font-bold text-xl">→</span>
                <span className="text-gray-700">Compreender a dinâmica dos ambientes aquáticos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A0C556] font-bold text-xl">→</span>
                <span className="text-gray-700">Propor soluções efetivas de conservação</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A0C556] font-bold text-xl">→</span>
                <span className="text-gray-700">Desenvolver estratégias de sustentabilidade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A0C556] font-bold text-xl">→</span>
                <span className="text-gray-700">Promover a integração entre pesquisa e comunidade</span>
              </li>
            </ul>
          </section>

          {/* Atividades */}
          <section className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#A0C556]">
            <h2 className="text-2xl font-bold text-[#018768] mb-4">
              Nossas Atividades
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Através de diversas atividades, conectamos estudantes, pesquisadores e a comunidade 
              para promover o conhecimento científico e a consciência ambiental:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#018768] mb-2">🎓 Eventos Acadêmicos</h3>
                <p className="text-gray-600 text-sm">Seminários, colóquios e semanas de ciência e tecnologia</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#018768] mb-2">💬 Palestras</h3>
                <p className="text-gray-600 text-sm">Discussões com especialistas sobre temas ambientais</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#018768] mb-2">🔧 Workshops</h3>
                <p className="text-gray-600 text-sm">Capacitações práticas em tecnologias ambientais</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#018768] mb-2">🔬 Atividades Práticas</h3>
                <p className="text-gray-600 text-sm">Experimentos e estudos de campo em ambientes aquáticos</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-[#018768] to-[#A0C556] p-8 rounded-xl shadow-lg text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Participe da Trilha do Conhecimento
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Explore nossos eventos e faça parte da construção de um futuro mais sustentável
            </p>
            <Link 
              href="/eventos"
              className="inline-block bg-white text-[#018768] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Ver Eventos
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
