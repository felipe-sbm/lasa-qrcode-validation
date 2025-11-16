import Link from "next/link";
import { participantes } from "@/data/data";

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

        {/* Lista de nomes (apenas nomes, sem cards e descrições) */}
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#A0C556]">
          <h2 className="text-2xl font-bold text-[#018768] mb-6">Quem Somos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {participantes.map((p) => (
              <div key={p.id} className="text-gray-800 font-medium">
                {p.nome}
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link href="/eventos" className="text-sm text-[#018768] hover:underline">Ver eventos →</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
