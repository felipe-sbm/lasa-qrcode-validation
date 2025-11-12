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
                <p className="text-lg sm:text-xl text-[#018768] mb-2">
                  VIII Semana de Ciência e Tecnologia • UFRN
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Bem-vindo à <strong>Trilha do Conhecimento do LASA</strong> na
                VIII Semana de Ciência e Tecnologia! Incluindo exposição
                temática sobre cultura oceânica, perfil do profissional da
                engenharia, agronomia e geociências, águas subterrâneas,
                minicurso Conexão Qgis e Brasil Mais, Geotecnologias, o que é
                Ser um Consultor Ambiental Hoje, tecnologia Anammox para o
                tratamento de águas residuárias e Água, esgoto,resíduos sólidos
                e drenagem urbana: como está em Natal.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/eventos"
                  className="bg-[#018768] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-[#016B54] transition-colors shadow-lg"
                >
                  Ver Eventos
                </Link>
                <a
                  href="https://www.instagram.com/lasa.ufrn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Siga-nos no Instagram
                </a>
              </div>
            </div>

            {/* Logos à direita */}
            <div className="flex flex-col justify-center items-center gap-8">
              {/* Logos ECT e LASA Secondary */}
              <div className="flex flex-col items-center justify-center gap-12">
                <div className="relative w-48 h-48 sm:w-64 md:w-80">
                  <Image
                    src="/semana-cet.webp"
                    alt="Logo da Semana de C&T - ECT, UFRN"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
                <div className="relative w-48 h-48 sm:w-64 md:w-80">
                  <Image
                    src="/lasa-secondary.webp"
                    alt="Logo LASA Secondary"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="relative w-48 h-48 sm:w-64 md:w-80">
                  <Image
                    src="/ect-logo.webp"
                    alt="Logo ECT - Escola de Ciências e Tecnologia"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
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
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Laboratório de Soluções Ambientais (LASA)</strong> — criado em 2019 e reativado em 2024.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nossa missão é atuar em pesquisa, extensão, capacitação, inovação e
                consultoria nas seguintes áreas:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Meio ambiente e sustentabilidade</li>
                <li>Recursos minerais</li>
                <li>Recursos energéticos</li>
                <li>Recursos hídricos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Eventos Destaque */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#018768] text-center mb-10">
            Eventos da Trilha de conhecimento do Lasa na VIII Semana de Ciência e Tecnologia da ECT/UFRN.

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
                    <p>
                      <strong>Data:</strong> {evento.data}
                    </p>
                    <p>
                      <strong>Horário:</strong> {evento.horario}
                    </p>
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
            Explore nossos eventos e faça parte dessa jornada de conhecimento e
            descobertas
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
              href="/Apoio"
              className="bg-[#018768] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#016B54] transition-colors border-2 border-white"
            >
              Apoio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
