// Exportar tipos
export type { Participante, Evento, Referencia, Patrocinador } from './types';

// Exportar dados
export { participantes } from './participantes';
export { eventos } from './eventos';
export { referencias } from './referencias';
export { apoio } from './patrocinadores';

// Importar para as funções auxiliares
import { participantes } from './participantes';
import { eventos } from './eventos';
import { apoio } from './patrocinadores';
import type { Participante, Evento, Patrocinador } from './types';

// Funções auxiliares
export function getEventoById(id: string): Evento | undefined {
  return eventos.find(evento => evento.id === id);
}

export function getParticipanteById(id: string): Participante | undefined {
  return participantes.find(participante => participante.id === id);
}

export function getParticipantesByIds(ids: string[]): Participante[] {
  return ids.map(id => getParticipanteById(id)).filter(Boolean) as Participante[];
}

export function getEventosByCategoria(categoria: string): Evento[] {
  return eventos.filter(evento => evento.categoria === categoria);
}

export function getApoioByCategoria(categoria: string): Patrocinador[] {
  return apoio.filter(patrocinador => patrocinador.categoria === categoria);
}

export function getSubEventos(eventoId: string): Evento[] {
  const evento = getEventoById(eventoId);
  if (!evento || !evento.subEventos) return [];
  return evento.subEventos.map(id => getEventoById(id)).filter(Boolean) as Evento[];
}

export function getEventosPrincipais(): Evento[] {
  return eventos.filter(evento => !evento.eventosPaiId);
}
