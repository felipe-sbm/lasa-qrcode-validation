import Link from "next/link";
import { referencias } from "@/data/data";

export default function ReferenciasPage() {
  // Agrupar referências por tipo
  const referenciasPorTipo = {
    site: referencias.filter(r => r.tipo === 'site'),
    relatorio: referencias.filter(r => r.tipo === 'relatorio'),
    artigo: referencias.filter(r => r.tipo === 'artigo'),
    livro: referencias.filter(r => r.tipo === 'livro')
  };

  const tipoLabels: Record<string, string> = {
    site: "Sites e Recursos Online",
    relatorio: "Relatórios e Documentos Técnicos",
    artigo: "Artigos Científicos",
    livro: "Livros e Publicações"
  };

  const tipoIcons: Record<string, string> = {
    site: "🌐",
    relatorio: "📋",
    artigo: "📄",
    livro: "📚"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Referências
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bibliografia e recursos sobre a Década dos Oceanos, mudanças climáticas e conservação marinha
          </p>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Sobre as Referências
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Esta seção reúne uma seleção de recursos científicos, documentos oficiais e materiais educacionais 
            que fundamentam os temas abordados durante a Semana de Ciência e Tecnologia da UFRN.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As referências estão organizadas por tipo de publicação e incluem links diretos quando disponíveis. 
            Recomendamos a consulta destes materiais para aprofundamento nos temas relacionados à Década dos Oceanos.
          </p>
        </div>

        {/* Referências por Tipo */}
        <div className="max-w-5xl mx-auto space-y-12">
          {Object.entries(referenciasPorTipo).map(([tipo, refs]) => (
            refs.length > 0 && (
              <section key={tipo}>
                <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">
                  {tipoLabels[tipo]}
                </h2>
                
                <div className="space-y-6">
                  {refs.map((ref) => (
                    <div
                      key={ref.id}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-blue-900 flex-1">
                          {ref.titulo}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold ml-4">
                          {ref.ano}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-3">
                        <strong>Autores:</strong> {ref.autores}
                      </p>
                      
                      {ref.descricao && (
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {ref.descricao}
                        </p>
                      )}
                      
                      {ref.link && (
                        <a
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                        >
                          Acessar recurso →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>

        {/* Citação ABNT */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Como Citar
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As referências estão formatadas seguindo padrões acadêmicos. Ao utilizar qualquer destes recursos 
            em trabalhos acadêmicos, certifique-se de citá-los adequadamente conforme as normas ABNT ou o 
            padrão adotado pela sua instituição.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
            <p className="text-sm text-gray-700 italic">
              <strong>Exemplo de citação ABNT:</strong><br />
              UNESCO. Década das Nações Unidas da Ciência Oceânica para o Desenvolvimento Sustentável (2021-2030). 
              Disponível em: &lt;https://oceandecade.org/&gt;. Acesso em: {new Date().toLocaleDateString('pt-BR')}.
            </p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {Object.entries(referenciasPorTipo).map(([tipo, refs]) => (
            <div key={tipo} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900 mb-1">{refs.length}</div>
              <p className="text-sm text-gray-600 font-semibold">
                {tipo === 'site' ? 'Sites' :
                 tipo === 'relatorio' ? 'Relatórios' :
                 tipo === 'artigo' ? 'Artigos' :
                 'Livros'}
              </p>
            </div>
          ))}
        </div>

        {/* Links Úteis */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Links Úteis Adicionais
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.un.org/sustainabledevelopment/oceans/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 p-4 rounded-lg transition-colors"
            >
              <h3 className="font-semibold mb-2">ONU - Objetivo 14: Vida na Água</h3>
              <p className="text-sm text-blue-200">Desenvolvimento sustentável dos oceanos</p>
            </a>
            <a
              href="https://www.ufrn.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 p-4 rounded-lg transition-colors"
            >
              <h3 className="font-semibold mb-2">UFRN - Universidade Federal do RN</h3>
              <p className="text-sm text-blue-200">Pesquisa e inovação no Rio Grande do Norte</p>
            </a>
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
