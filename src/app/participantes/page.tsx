import Link from "next/link";
import { participantes } from "@/data/data";

export default function QuemSomosPage() {
  // Comitê Gestor (2024/2026): Membros específicos identificados pela professora
  const nomesComiteGestor = ["Mary", "Débora", "Kaline", "Paula", "Raduam"];
  const comiteGestor = participantes.filter((p) =>
    nomesComiteGestor.some((nome) => p.nome.includes(nome))
  );

  // Pesquisadores: Doutores e professores especialistas (podem aparecer duplicados)
  const nomesPesquisadores = [
    "Mary",
    "Paula",
    "Jazielly",
    "Jazi",
    "Luciana",
    "Sebastião",
    "Vera",
  ];
  const pesquisadores = participantes.filter((p) =>
    nomesPesquisadores.some((nome) => p.nome.includes(nome))
  );

  // Alunos: Lista específica fornecida pela professora
  const nomesAlunos = [
    "Beatriz",
    "Sara",
    "Bárbara",
    "Camila",
    "Nelis",
    "Mesael",
    "Letícia",
    "Luan",
    "Thainara",
    "Thallyana",
    "Felipe",
  ];
  const alunos = participantes.filter((p) =>
    nomesAlunos.some((nome) => p.nome.includes(nome))
  );
  // Ordena alfabeticamente pelo nome (pt-BR) para exibição
  const alunosOrdenados = [...alunos].sort((a, b) =>
    a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" })
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#018768] mb-4">
            Quem Somos
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça a equipe que está organizando e contribuindo para o evento
          </p>
        </div>{" "}
        {/* Seção: Comitê Gestor */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#018768] mb-2">
              Comitê Gestor
            </h2>
            <p className="text-gray-600">Coordenação e organização do evento</p>
          </div>

          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comiteGestor.map((participante) => (
                <li
                  key={participante.id}
                  id={participante.id}
                  className="flex items-center gap-2 text-gray-700 h-12 min-w-0"
                >
                  <span className="text-[#018768] text-xl">•</span>
                  <span
                    className="font-medium truncate flex-1"
                    title={participante.nome}
                  >
                    {participante.nome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* Seção: Pesquisadores */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#018768] mb-2">
              Pesquisadores
            </h2>
            <p className="text-gray-600">
              Palestrantes e especialistas convidados
            </p>
          </div>

          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pesquisadores.map((participante) => (
                <li
                  key={participante.id}
                  id={participante.id}
                  className="flex items-center gap-2 text-gray-700 h-12 min-w-0"
                >
                  <span className="text-[#018768] text-xl">•</span>
                  <span
                    className="font-medium truncate flex-1"
                    title={participante.nome}
                  >
                    {participante.nome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* Seção: Alunos */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#018768] mb-2">Alunos</h2>
            <p className="text-gray-600">Estudantes e membros do LASA</p>
          </div>

          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {alunosOrdenados.map((participante) => (
                <li
                  key={participante.id}
                  className="flex items-center gap-2 text-gray-700 h-12 min-w-0"
                >
                  <span className="text-[#018768] text-xl">•</span>
                  <span
                    className="font-medium truncate flex-1"
                    title={participante.nome}
                  >
                    {participante.nome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>{" "}
        {/* Estatísticas */}
        <div className="mt-16 bg-gradient-to-r from-[#018768] to-[#A0C556] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Nossa Equipe</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {participantes.length}
              </div>
              <p className="text-green-100">Total de Pessoas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {comiteGestor.length}
              </div>
              <p className="text-green-100">Comitê Gestor</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {pesquisadores.length}
              </div>
              <p className="text-green-100">Pesquisadores</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{alunos.length}</div>
              <p className="text-green-100">Alunos</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block text-[#018768] hover:text-[#016B54] font-semibold"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </main>
    </div>
  );
}
