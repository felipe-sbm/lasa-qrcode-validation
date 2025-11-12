// Tipos
export interface Participante {
  id: string;
  nome: string;
  cargo: string;
  instituicao: string;
  foto?: string;
  bio: string;
  email?: string;
}

export interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  data: string;
  horario: string;
  local: string;
  imagens: string[];
  autoresIds: string[];
  categoria: string;
  formularioUrl?: string;
  formularioAtivo?: boolean;
}

export interface Referencia {
  id: string;
  titulo: string;
  autores: string;
  ano: string;
  tipo: 'artigo' | 'livro' | 'site' | 'relatorio';
  link?: string;
  descricao?: string;
}

export interface Patrocinador {
  id: string;
  nome: string;
  logo: string;
  descricao: string;
  website?: string;
  categoria: 'Ouro' | 'Prata' | 'Bronze' | 'Apoio';
}
