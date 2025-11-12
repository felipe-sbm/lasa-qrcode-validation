import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Ilustração */}
        <div className="relative w-full max-w-lg mx-auto mb-8 h-48 sm:h-80 md:h-96">
          <Image
            src="/undraw_server-down_lxs9.svg"
            alt="Página não encontrada"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Conteúdo */}
        <div className="space-y-6">
          <h1 className="text-6xl sm:text-6xl md:text-8xl font-bold text-[#018768]">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Ops! Página não encontrada
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Parece que a página que você está procurando não existe ou foi movida. 
            Não se preocupe, vamos te levar de volta para a Trilha do Conhecimento!
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="/"
              className="bg-[#018768] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#016B54] transition-colors shadow-lg"
            >
              Voltar para Home
            </Link>
            
            <Link
              href="/eventos"
              className="bg-white text-[#018768] border-2 border-[#018768] px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              Ver Eventos
            </Link>
          </div>

          {/* Links úteis */}
          <div className="pt-8 border-t border-gray-200 mt-12">
            <p className="text-gray-600 mb-4">Você também pode estar procurando:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/participantes" className="text-[#018768] hover:underline">
                Participantes
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/referencias" className="text-[#018768] hover:underline">
                Referências
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/sobre" className="text-[#018768] hover:underline">
                Sobre
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/apoio" className="text-[#018768] hover:underline">
                Apoio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
