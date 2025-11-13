"use client";

import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import type { Evento, Participante } from "@/data/types";

interface SubEventoModalProps {
  subEventos: Evento[];
  eventoId: string;
  participantesMap: Record<string, Participante>;
}

export default function SubEventoModal({ subEventos, eventoId, participantesMap }: SubEventoModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subEventoId = searchParams.get("subevento");

  const selectedSubEvento = useMemo(() => {
    if (!subEventoId) return null;
    return subEventos.find(se => se.id === subEventoId) || null;
  }, [subEventoId, subEventos]);

  const isOpen = !!selectedSubEvento;

  const closeModal = () => {
    router.push(`/eventos/${eventoId}`, { scroll: false });
  };

  // Prevenir scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !selectedSubEvento) return null;

  // Buscar autores do participantesMap
  const autores = selectedSubEvento.autoresIds
    .map(id => participantesMap[id])
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão Fechar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 cursor-pointer"
            aria-label="Fechar"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Imagem de Destaque */}
          <div className="relative h-64 md:h-80">
            <Image
              src={selectedSubEvento.imagens[0]}
              alt={selectedSubEvento.titulo}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-[#018768] text-white text-xs px-3 py-1 rounded-full font-semibold mb-3">
                {selectedSubEvento.categoria}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                {selectedSubEvento.titulo}
              </h2>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-6 md:p-8">
            {/* Informações Principais */}
            <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-green-50 rounded-lg">
              <div className="border-l-4 border-[#018768] pl-3">
                <p className="text-xs text-gray-600 uppercase font-semibold">Data</p>
                <p className="text-sm font-bold text-[#018768]">{selectedSubEvento.data}</p>
              </div>
              
              <div className="border-l-4 border-[#018768] pl-3">
                <p className="text-xs text-gray-600 uppercase font-semibold">Horário</p>
                <p className="text-sm font-bold text-[#018768]">{selectedSubEvento.horario}</p>
              </div>
              
              <div className="border-l-4 border-[#018768] pl-3">
                <p className="text-xs text-gray-600 uppercase font-semibold">Local</p>
                <p className="text-sm font-bold text-[#018768]">{selectedSubEvento.local}</p>
              </div>
            </div>

            {/* Descrição */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#018768] mb-4">Sobre a Palestra</h3>
              <div 
                className="prose prose-sm max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: selectedSubEvento.descricaoCompleta }}
              />
            </div>

            {/* Palestrantes */}
            {autores.length > 0 && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold text-[#018768] mb-4">
                  {autores.length > 1 ? "Palestrantes" : "Palestrante"}
                </h3>
                <div className="space-y-3">
                  {autores.map((autor) => (
                    <div key={autor.id} className="flex items-start">
                      {autor.foto && (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image
                            src={autor.foto}
                            alt={autor.nome}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-[#018768]">{autor.nome}</h4>
                        <p className="text-sm text-gray-600">{autor.cargo}</p>
                        <p className="text-xs text-gray-500">{autor.instituicao}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Botão de Registro */}
            {selectedSubEvento.formularioUrl && selectedSubEvento.formularioAtivo && (
              <div className="mt-6">
                <a
                  href={selectedSubEvento.formularioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 rounded-lg font-bold text-lg transition-all bg-[#018768] text-white hover:bg-[#016B54] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Registrar Presença
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
