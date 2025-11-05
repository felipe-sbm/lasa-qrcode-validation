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

// Dados dos Participantes
export const participantes: Participante[] = [
  {
    id: "1",
    nome: "Mary",
    cargo: "Organizadora e Ministrante",
    instituicao: "ECT - UFRN",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Organizadora de eventos e ministrante de cursos sobre geotecnologias e consultoria ambiental. Coordena projetos de pesquisa e extensão na área de sistemas aquáticos.",
    email: ""
  },
  {
    id: "2",
    nome: "Jazi",
    cargo: "Organizadora de Eventos",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Organizadora responsável por palestras e eventos sobre saneamento ambiental e sistemas aquáticos.",
    email: ""
  },
  {
    id: "3",
    nome: "Paula",
    cargo: "Organizadora do Colóquio",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    bio: "Organizadora do Colóquio de Águas Subterrâneas, especialista em recursos hídricos subterrâneos.",
    email: ""
  },
  {
    id: "4",
    nome: "Filipe Gregório de Farias e Silva",
    cargo: "Palestrante - Tecnologia Anammox",
    instituicao: "Pesquisador em Tratamento de Efluentes",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Especialista em tecnologia Anammox para tratamento de águas residuárias em clima tropical. Apresenta soluções sustentáveis para efluentes concentrados.",
    email: ""
  },
  {
    id: "5",
    nome: "Thalyana",
    cargo: "Participante - Mostra de Laboratórios",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Membro da equipe da Mostra de Laboratórios sobre Cultura Oceânica. Atua em projetos de pesquisa sobre ecossistemas marinhos.",
    email: ""
  },
  {
    id: "6",
    nome: "Beatriz",
    cargo: "Participante - Múltiplos Eventos",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Participante ativa em eventos sobre cultura oceânica, colóquio de águas subterrâneas e consultoria ambiental.",
    email: ""
  },
  {
    id: "7",
    nome: "Jessiane",
    cargo: "Participante - Múltiplos Eventos",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Membro da equipe da Mostra de Laboratórios e Palestra do CREA. Contribui com pesquisas sobre sistemas aquáticos.",
    email: ""
  },
  {
    id: "8",
    nome: "Felipe",
    cargo: "Participante - Mostra de Laboratórios",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Membro da equipe de apresentação da Mostra de Laboratórios sobre Cultura Oceânica.",
    email: ""
  },
  {
    id: "9",
    nome: "Thainara",
    cargo: "Participante - Múltiplos Minicursos",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Participante de minicursos sobre QGIS e Brasil Mais, além de palestras sobre geotecnologias e consultoria ambiental.",
    email: ""
  },
  {
    id: "10",
    nome: "Leticia",
    cargo: "Participante - Mostra de Laboratórios",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Membro da equipe da Mostra de Laboratórios sobre Cultura Oceânica.",
    email: ""
  },
  {
    id: "11",
    nome: "Mesael",
    cargo: "Participante - Múltiplos Eventos",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Participante em eventos sobre saneamento, colóquio de águas subterrâneas e geotecnologias.",
    email: ""
  },
  {
    id: "12",
    nome: "Elisa",
    cargo: "Participante - Palestra do CREA",
    instituicao: "LASA - UFRN",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Participante da Palestra do CREA sobre saneamento ambiental.",
    email: ""
  },
  {
    id: "13",
    nome: "Luan",
    cargo: "Aluno - Minicurso QGIS",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Aluno participando do minicurso de Conexão QGIS e Brasil Mais na segunda-feira.",
    email: ""
  },
  {
    id: "14",
    nome: "Júlio",
    cargo: "Ministrante - Minicurso QGIS",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Ministrante do curso de Conexão QGIS e Brasil Mais, especialista em geotecnologias.",
    email: ""
  },
  {
    id: "15",
    nome: "Gustavo",
    cargo: "Ministrante - Minicurso QGIS",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Ministrante do curso de Conexão QGIS e Brasil Mais, especialista em geoprocessamento.",
    email: ""
  },
  {
    id: "16",
    nome: "Camila",
    cargo: "Participante - Colóquio de Águas Subterrâneas",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Membro da equipe fechada do Colóquio de Águas Subterrâneas.",
    email: ""
  },
  {
    id: "17",
    nome: "Bárbara",
    cargo: "Participante - Colóquio de Águas Subterrâneas",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Membro da equipe fechada do Colóquio de Águas Subterrâneas.",
    email: ""
  },
  {
    id: "18",
    nome: "Sara",
    cargo: "Participante - Múltiplos Eventos",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Participante do Colóquio de Águas Subterrâneas e Palestra sobre Saneamento em Natal.",
    email: ""
  },
  {
    id: "19",
    nome: "Nelis",
    cargo: "Participante - Colóquio de Águas Subterrâneas",
    instituicao: "UFRN",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Membro da equipe fechada do Colóquio de Águas Subterrâneas.",
    email: ""
  },
  {
    id: "20",
    nome: "Gilbrano",
    cargo: "Palestrante - CREA",
    instituicao: "Conselho Regional de Engenharia e Agronomia - CREA",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Especialista em saneamento e gestão ambiental pelo CREA, palestrante sobre práticas ambientais.",
    email: ""
  },
  {
    id: "21",
    nome: "Arsban",
    cargo: "Palestrante - Saneamento em Natal",
    instituicao: "Autoridade de Saneamento de Natal",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Especialista em infraestrutura de saneamento e gestão de resíduos em Natal.",
    email: ""
  }
];

// Dados dos Eventos
export const eventos: Evento[] = [
  {
    id: "1",
    titulo: "Cerimônia de Abertura",
    descricao: "Cerimônia de abertura da Semana de Ciência e Tecnologia 2025.",
    descricaoCompleta: `
      <p>Bem-vindo à Semana de Ciência e Tecnologia 2025 organizada pela LASA!</p>
      <p>Junte-se a nós para a cerimônia de abertura onde compartilharemos a programação dos três dias de eventos, palestras, workshops e atividades práticas sobre ciência, tecnologia e meio ambiente.</p>
      <p>Este é o início de uma semana repleta de conhecimento, inovação e oportunidades de aprendizado com pesquisadores e especialistas em diversas áreas.</p>
    `,
    data: "17 de novembro de 2025",
    horario: "10:00 - 12:00",
    local: "Auditório do Centro de Biociências - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1"],
    categoria: "Abertura",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform?usp=dialog",
    formularioAtivo: true
  },
  {
    id: "2",
    titulo: "Mostra de Laboratórios - Cultura Oceânica",
    descricao: "Mostra de laboratórios apresentando projetos sobre cultura oceânica com LASA, GGEMMA e Saberes do Oceano (IFRN).",
    descricaoCompleta: `
      <p>Conheça os trabalhos desenvolvidos por nossos laboratórios de pesquisa em oceanografia e ciências marinhas!</p>
      <p>Esta mostra apresentará os projetos de pesquisa sobre cultura oceânica, educação ambiental e conservação marinha desenvolvidos pela LASA, GGEMMA e Saberes do Oceano do IFRN.</p>
      <p><strong>Organizador:</strong> Mary</p>
      <p><strong>Equipe:</strong> Thalyana, Beatriz, Jessiane, Felipe, Thainara, Leticia</p>
    `,
    data: "17 de novembro de 2025",
    horario: "14:00 - 17:00",
    local: "Laboratórios e Espaços de Pesquisa - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "5", "6", "7", "8", "9", "10"],
    categoria: "Mostra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdGfAyQoM9toQos5jzf2VNSe_7eV6GX85Zl9KkOqmb46B-h5Q/viewform?usp=dialog",
    formularioAtivo: true
  },
  {
    id: "3",
    titulo: "Palestra do CREA - Saneamento Ambiental",
    descricao: "Palestra com especialista do CREA sobre saneamento e gestão ambiental.",
    descricaoCompleta: `
      <p>Palestra apresentada por Gilbrano do Conselho Regional de Engenharia e Agronomia (CREA), abordando temas relacionados ao saneamento ambiental e boas práticas em gestão de recursos hídricos.</p>
      <p><strong>Palestrante:</strong> Gilbrano (CREA)</p>
      <p><strong>Organizador:</strong> Jazi</p>
      <p><strong>Equipe:</strong> Jessiane, Mesael, Elisa</p>
    `,
    data: "17 de novembro de 2025",
    horario: "17:00 - 18:00",
    local: "Sala de Conferências - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop"
    ],
    autoresIds: ["2", "20", "7", "11", "12"],
    categoria: "Palestra",
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "4",
    titulo: "Minicurso - Conexão QGIS e Brasil Mais",
    descricao: "Minicurso prático sobre GIS e geotecnologias aplicadas ao Brasil.",
    descricaoCompleta: `
      <p>Aprenda a utilizar as ferramentas QGIS e Brasil Mais para análise espacial e geoprocessamento.</p>
      <p><strong>Ministrantes:</strong> Mary, Júlio, Gustavo</p>
      <p><strong>Aluno:</strong> Luan</p>
      <p><strong>Horário:</strong> 15:00 - 17:00</p>
      <p>Este minicurso apresentará técnicas de mapeamento digital e análise geoespacial com ferramentas de código aberto para pesquisa ambiental.</p>
    `,
    data: "17 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Laboratório de Geomática - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1552996881-daf0e9f37341?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "13", "14", "15"],
    categoria: "Minicurso",
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "5",
    titulo: "Colóquio de Águas Subterrâneas",
    descricao: "Colóquio sobre pesquisa e gestão de águas subterrâneas.",
    descricaoCompleta: `
      <p>Evento acadêmico dedicado à discussão de pesquisas, tecnologias e estratégias de gestão de águas subterrâneas.</p>
      <p><strong>Organizador:</strong> Paula</p>
      <p><strong>Período:</strong> 08:00 - 17:00 (dia inteiro)</p>
      <p><strong>Equipe (Fechada):</strong> Camila, Mesael, Bárbara, Sara, Nelis</p>
      <p>Este é um evento com inscrição por equipe fechada. Participantes selecionados apresentarão seus trabalhos e pesquisas sobre aquíferos, contaminação e preservação de recursos hídricos subterrâneos.</p>
    `,
    data: "18 de novembro de 2025",
    horario: "08:00 - 17:00",
    local: "Auditório e Laboratórios - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1581092918692-8d1d08905f23?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581092162562-40038e57e0b5?w=800&h=600&fit=crop"
    ],
    autoresIds: ["3", "16", "11", "17", "18", "19"],
    categoria: "Colóquio",
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "6",
    titulo: "Palestra - Adaptação da Tecnologia Anammox para Tratamento de Águas Residuárias",
    descricao: "Palestra sobre tecnologias inovadoras de tratamento de efluentes em clima tropical.",
    descricaoCompleta: `
      <p>Palestra apresentando a tecnologia Anammox (anaerobic ammonia oxidation) como solução sustentável para tratamento de águas residuárias em ambientes de clima tropical.</p>
      <p><strong>Palestrante:</strong> Filipe Gregório de Farias e Silva</p>
      <p><strong>Organizador:</strong> Mary</p>
      <p><strong>Horário:</strong> 17:00</p>
      <p>Conheça como essa tecnologia revolucionária pode ser aplicada em contextos tropicais, reduzindo custos operacionais e impactos ambientais no tratamento de efluentes concentrados.</p>
    `,
    data: "18 de novembro de 2025",
    horario: "17:00 - 18:30",
    local: "Auditório - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1581092918692-8d1d08905f23?w=800&h=600&fit=crop"
    ],
    autoresIds: ["4"],
    categoria: "Palestra",
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "7",
    titulo: "Palestra - Saneamento em Natal",
    descricao: "Palestra sobre saneamento e gestão de resíduos na cidade de Natal.",
    descricaoCompleta: `
      <p>Palestra apresentando os desafios e soluções de saneamento na cidade de Natal, com foco em tratamento de efluentes e gestão de resíduos sólidos.</p>
      <p><strong>Palestrante:</strong> Arsban</p>
      <p><strong>Organizador:</strong> Jazi</p>
      <p><strong>Equipe:</strong> Beatriz, Sara</p>
      <p><strong>Horário:</strong> 19:00</p>
      <p>Conheça as iniciativas municipais, desafios operacionais e perspectivas futuras para melhorar a infraestrutura de saneamento em Natal.</p>
    `,
    data: "18 de novembro de 2025",
    horario: "19:00 - 20:00",
    local: "Sala de Conferências - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1581092918692-8d1d08905f23?w=800&h=600&fit=crop"
    ],
    autoresIds: ["2", "21", "6", "18"],
    categoria: "Palestra",
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "8",
    titulo: "Minicurso - Conexão QGIS e Brasil Mais (Turma 2)",
    descricao: "Segunda turma do minicurso sobre GIS e geotecnologias.",
    descricaoCompleta: `
      <p>Segunda turma do minicurso prático sobre QGIS e Brasil Mais para análise espacial e geoprocessamento.</p>
      <p><strong>Ministrantes:</strong> Mary, Júlio, Gustavo</p>
      <p><strong>Aluno:</strong> Thainara</p>
      <p><strong>Horário:</strong> 15:00 - 17:00</p>
      <p>Este minicurso apresentará técnicas de mapeamento digital e análise geoespacial com ferramentas de código aberto para pesquisa ambiental.</p>
    `,
    data: "18 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Laboratório de Geomática - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1552996881-daf0e9f37341?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "9", "14", "15"],
    categoria: "Minicurso",
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "9",
    titulo: "Geotecnologias e Soluções Ambientais",
    descricao: "Palestra sobre aplicações de geotecnologias para soluções ambientais com Cabugi Soluções.",
    descricaoCompleta: `
      <p>Palestra apresentando as aplicações práticas de geotecnologias no desenvolvimento de soluções ambientais.</p>
      <p><strong>Empresa:</strong> Cabugi Soluções</p>
      <p><strong>Organizador:</strong> Mary</p>
      <p><strong>Equipe:</strong> Thainara, Beatriz, Mesael</p>
      <p><strong>Horário:</strong> 10:00</p>
      <p>Conheça como ferramentas de geoprocessamento e sensoriamento remoto são aplicadas em projetos de monitoramento ambiental, planejamento urbano e desenvolvimento sustentável.</p>
    `,
    data: "19 de novembro de 2025",
    horario: "10:00 - 12:00",
    local: "Auditório - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1552996881-daf0e9f37341?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "9", "6", "11"],
    categoria: "Palestra",
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "10",
    titulo: "Entre o Campo e o Escritório - Ser um Consultor Ambiental Hoje",
    descricao: "Palestra sobre a profissão de consultor ambiental com o CRNBio.",
    descricaoCompleta: `
      <p>Palestra explorar os desafios, oportunidades e rotina da profissão de consultor ambiental nos dias atuais.</p>
      <p><strong>Instituição:</strong> CRNBio (Conselho Regional de Biologia)</p>
      <p><strong>Organizador:</strong> Mary</p>
      <p><strong>Equipe (Fechada):</strong> Thainara, Beatriz, Thallyana</p>
      <p><strong>Horário:</strong> 15:00</p>
      <p>Uma visão prática e sincera sobre a carreira de consultor ambiental, abrangendo desde projetos no campo até a elaboração de relatórios técnicos em escritório, com cases reais e perspectivas de mercado.</p>
    `,
    data: "19 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Auditório - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "9", "6", "5"],
    categoria: "Palestra",
    formularioUrl: "",
    formularioAtivo: false
  }
];

// Dados das Referências
export const referencias: Referencia[] = [
  {
    id: "1",
    titulo: "Década das Nações Unidas da Ciência Oceânica para o Desenvolvimento Sustentável (2021-2030)",
    autores: "UNESCO - Comissão Oceanográfica Intergovernamental",
    ano: "2021",
    tipo: "site",
    link: "https://oceandecade.org/",
    descricao: "Portal oficial da Década dos Oceanos da ONU, com informações sobre objetivos, programas e iniciativas globais."
  },
  {
    id: "2",
    titulo: "The Ocean and Climate Change",
    autores: "IPCC - Intergovernmental Panel on Climate Change",
    ano: "2022",
    tipo: "relatorio",
    link: "https://www.ipcc.ch/srocc/",
    descricao: "Relatório especial sobre o oceano e a criosfera em um clima em mudança, documentando os impactos das mudanças climáticas nos oceanos."
  },
  {
    id: "3",
    titulo: "State of the Ocean Report 2024",
    autores: "IUCN - International Union for Conservation of Nature",
    ano: "2024",
    tipo: "relatorio",
    link: "https://www.iucn.org/",
    descricao: "Análise abrangente sobre o estado atual dos oceanos, incluindo biodiversidade, poluição e mudanças climáticas."
  },
  {
    id: "4",
    titulo: "Biodiversidade Marinha do Brasil",
    autores: "Ministério do Meio Ambiente - Brasil",
    ano: "2023",
    tipo: "livro",
    descricao: "Catálogo da biodiversidade marinha brasileira, com informações sobre espécies, habitats e áreas de conservação."
  },
  {
    id: "5",
    titulo: "Acidificação Oceânica: Impactos e Perspectivas",
    autores: "Feely, R.A.; Sabine, C.L.; Hernandez-Ayon, J.M.; Ianson, D.; Hales, B.",
    ano: "2021",
    tipo: "artigo",
    descricao: "Estudo sobre os processos de acidificação dos oceanos e seus impactos em organismos marinhos calcificadores."
  },
  {
    id: "6",
    titulo: "Conservação de Tartarugas Marinhas no Brasil",
    autores: "Projeto TAMAR - ICMBio",
    ano: "2024",
    tipo: "relatorio",
    link: "https://www.tamar.org.br/",
    descricao: "Relatório sobre as ações de conservação de tartarugas marinhas no litoral brasileiro, incluindo dados populacionais e ameaças."
  },
  {
    id: "7",
    titulo: "Recifes de Coral e Mudanças Climáticas",
    autores: "Hughes, T.P.; Anderson, K.D.; Connolly, S.R.; et al.",
    ano: "2023",
    tipo: "artigo",
    descricao: "Análise dos impactos do aquecimento global sobre recifes de coral, incluindo eventos de branqueamento em massa."
  },
  {
    id: "8",
    titulo: "Atlas dos Oceanos - ONU",
    autores: "Organização das Nações Unidas",
    ano: "2024",
    tipo: "site",
    link: "https://www.un.org/Depts/los/index.htm",
    descricao: "Recurso educacional interativo sobre geografia oceânica, biodiversidade marinha e gestão sustentável dos oceanos."
  },
  {
    id: "9",
    titulo: "Oceanografia Física: Uma Introdução",
    autores: "Pickard, G.L.; Emery, W.J.",
    ano: "2022",
    tipo: "livro",
    descricao: "Livro-texto abrangente sobre processos físicos oceânicos, correntes marinhas e dinâmica dos oceanos."
  },
  {
    id: "10",
    titulo: "Poluição por Plásticos nos Oceanos: Desafios e Soluções",
    autores: "Jambeck, J.R.; Geyer, R.; Wilcox, C.; et al.",
    ano: "2023",
    tipo: "artigo",
    descricao: "Estudo sobre a poluição por plásticos nos oceanos, quantificando os resíduos e propondo soluções de mitigação."
  },
  {
    id: "11",
    titulo: "Educação Oceânica: Princípios e Práticas",
    autores: "UNESCO; IOC",
    ano: "2021",
    tipo: "relatorio",
    link: "https://oceanliteracy.unesco.org/",
    descricao: "Guia sobre princípios de educação oceânica para desenvolver consciência sobre a importância dos oceanos."
  },
  {
    id: "12",
    titulo: "Monitoramento de Ecossistemas Marinhos Costeiros do RN",
    autores: "Laboratório de Oceanografia - UFRN",
    ano: "2024",
    tipo: "relatorio",
    descricao: "Relatório técnico sobre o monitoramento contínuo de ecossistemas marinhos no litoral do Rio Grande do Norte."
  }
];

// Dados dos Patrocinadores
export const patrocinadores: Patrocinador[] = [
  {
    id: "1",
    nome: "UFRN - Universidade Federal do Rio Grande do Norte",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop",
    descricao: "Principal instituição de ensino superior do estado, apoiando pesquisa e extensão em ciências marinhas.",
    website: "https://ufrn.br",
    categoria: "Ouro"
  },
  {
    id: "2",
    nome: "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
    descricao: "Agência de fomento à pesquisa científica e tecnológica no Brasil.",
    website: "https://cnpq.br",
    categoria: "Ouro"
  },
  {
    id: "3",
    nome: "CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop",
    descricao: "Fundação do Ministério da Educação que atua na expansão e consolidação da pós-graduação stricto sensu.",
    website: "https://capes.gov.br",
    categoria: "Prata"
  },
  {
    id: "4",
    nome: "Petrobras",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    descricao: "Empresa brasileira de energia com projetos de pesquisa em oceanografia e meio ambiente.",
    website: "https://petrobras.com.br",
    categoria: "Prata"
  },
  {
    id: "5",
    nome: "Instituto Chico Mendes de Conservação da Biodiversidade",
    logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    descricao: "Órgão ambiental responsável pela conservação da biodiversidade marinha brasileira.",
    website: "https://icmbio.gov.br",
    categoria: "Bronze"
  },
  {
    id: "6",
    nome: "Projeto TAMAR",
    logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    descricao: "Programa brasileiro de conservação de tartarugas marinhas, reconhecido internacionalmente.",
    website: "https://tamar.org.br",
    categoria: "Bronze"
  },
  {
    id: "7",
    nome: "Fundação Grupo Boticário",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
    descricao: "Organização que apoia projetos de conservação da natureza em todo o Brasil.",
    website: "https://fundacaogrupoboticario.org.br",
    categoria: "Apoio"
  },
  {
    id: "8",
    nome: "Oceana Brasil",
    logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    descricao: "ONG internacional dedicada à proteção e restauração dos oceanos do mundo.",
    website: "https://oceana.org.br",
    categoria: "Apoio"
  }
];

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

export function getPatrocinadoresByCategoria(categoria: string): Patrocinador[] {
  return patrocinadores.filter(patrocinador => patrocinador.categoria === categoria);
}
