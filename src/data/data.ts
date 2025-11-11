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
    descricao: "Abertura oficial da VIII Semana de Ciência e Tecnologia e da Trilha do Conhecimento LASA.",
    descricaoCompleta: `
      <p>Bem-vindo à VIII Semana de Ciência e Tecnologia e à <strong>Trilha do Conhecimento LASA</strong>!</p>
      
      <p>Junte-se a nós para a cerimônia de abertura onde compartilharemos a programação completa dos três dias de eventos, palestras, minicursos e atividades práticas sobre ciência, tecnologia e meio ambiente.</p>
      
      <p>Este é o início de uma jornada repleta de conhecimento, inovação e oportunidades de aprendizado com pesquisadores, especialistas e profissionais de diversas áreas.</p>
      
      <p><strong>Programação dos dias 17, 18 e 19 de novembro na Escola de Ciência e Tecnologia - UFRN.</strong></p>
    `,
    data: "17 de novembro de 2025",
    horario: "10:00 - 12:00",
    local: "Escola de Ciência e Tecnologia - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1"],
    categoria: "Cerimônia",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "2",
    titulo: "Mostra de Laboratórios: Cultura Oceânica",
    descricao: "Apresentação dos projetos LASA, GEMMA e Saberes do Oceano (IFRN) sobre cultura oceânica e conservação marinha.",
    descricaoCompleta: `
      <p>Explore os trabalhos desenvolvidos por laboratórios de pesquisa dedicados à oceanografia, educação ambiental e conservação dos oceanos!</p>
      
      <h3>Laboratórios Participantes:</h3>
      <ul>
        <li><strong>LASA</strong> - Liga Acadêmica de Sistemas Aquáticos</li>
        <li><strong>GEMMA</strong> - Grupo de Estudos do Meio Ambiente Marinho</li>
        <li><strong>Saberes do Oceano (IFRN)</strong></li>
      </ul>
      
      <p>A mostra apresentará projetos de pesquisa, experimentos, materiais educativos e ações de extensão voltadas para a cultura oceânica, alfabetização marinha e sustentabilidade dos ecossistemas aquáticos.</p>
      
      <p><strong>Venha conhecer de perto o trabalho científico desenvolvido na UFRN e IFRN!</strong></p>
    `,
    data: "17 de novembro de 2025",
    horario: "14:00 - 17:00",
    local: "Sala 3 - Escola de Ciência e Tecnologia - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "2", "3"],
    categoria: "Mostra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "3",
    titulo: "Palestra CREA: Engenharia Ambiental na Prática",
    descricao: "Palestra com Gilbrando Medeiros Trajano Júnior, Engenheiro Ambiental do CREA-RN, sobre a atuação profissional.",
    descricaoCompleta: `
      <p>Descubra os desafios e oportunidades da profissão de Engenheiro Ambiental com um profissional atuante no mercado!</p>
      
      <h3>Palestrante:</h3>
      <p><strong>Gilbrando Medeiros Trajano Júnior</strong><br>
      Engenheiro Ambiental - CREA-RN</p>
      
      <h3>Temas abordados:</h3>
      <ul>
        <li>Atuação do engenheiro ambiental no mercado de trabalho</li>
        <li>Papel do CREA na fiscalização e regulamentação</li>
        <li>Projetos ambientais e licenciamento</li>
        <li>Sustentabilidade e práticas ambientais</li>
        <li>Responsabilidade técnica e ética profissional</li>
      </ul>
      
      <p><strong>Sessão de perguntas e respostas ao final da palestra.</strong></p>
    `,
    data: "17 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Escola de Ciência e Tecnologia - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    autoresIds: ["20"],
    categoria: "Palestra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "4",
    titulo: "Minicurso: Conexão QGIS e Brasil Mais (Dia 1)",
    descricao: "Aprenda a utilizar QGIS e a plataforma Brasil Mais para geoprocessamento e análise espacial de dados ambientais.",
    descricaoCompleta: `
      <p>Domine ferramentas essenciais para geotecnologias aplicadas ao meio ambiente!</p>
      
      <h3>Ministrantes:</h3>
      <ul>
        <li><strong>Prof. Dr. Mary Lúcia da Silva Nogueira</strong> - UFRN/LASA</li>
        <li><strong>Júlio Danilo Soares de Santana</strong> - UFRN/LASA</li>
        <li><strong>Gustavo</strong> - UFRN/LASA</li>
      </ul>
      
      <h3>Conteúdo Programático:</h3>
      <ul>
        <li>Introdução ao QGIS: interface e funcionalidades básicas</li>
        <li>Importação e manipulação de dados geoespaciais</li>
        <li>Plataforma Brasil Mais: acesso e utilização</li>
        <li>Integração QGIS e Brasil Mais</li>
        <li>Análise espacial de dados ambientais</li>
        <li>Elaboração de mapas temáticos</li>
      </ul>
      
      <p><strong>Requisitos:</strong> Trazer notebook com QGIS instalado (versão 3.x ou superior).</p>
      
      <p><strong>Obs:</strong> Minicurso dividido em 2 dias (17 e 18/11).</p>
    `,
    data: "17 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Laboratório de Informática 3, 2º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "14", "15"],
    categoria: "Minicurso",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "5",
    titulo: "1º Colóquio das Águas Subterrâneas do RN",
    descricao: "Evento dedicado à gestão e desafios das águas subterrâneas para o abastecimento no Rio Grande do Norte.",
    descricaoCompleta: `
      <p>Participe do primeiro colóquio dedicado exclusivamente às águas subterrâneas do RN!</p>
      
      <h3>Tema Central:</h3>
      <p><strong>"Gestão e Desafios das Águas Subterrâneas para o Abastecimento no RN"</strong></p>
      
      <h3>Programação:</h3>
      <ul>
        <li>Situação atual dos aquíferos do RN</li>
        <li>Desafios na gestão de recursos hídricos subterrâneos</li>
        <li>Tecnologias de prospecção e monitoramento</li>
        <li>Legislação e políticas públicas</li>
        <li>Qualidade da água subterrânea</li>
        <li>Casos de sucesso e boas práticas</li>
        <li>Sustentabilidade e uso racional</li>
      </ul>
      
      <p>O colóquio reunirá pesquisadores, gestores públicos, profissionais da área e estudantes para debater soluções e compartilhar conhecimentos sobre este recurso vital para o RN.</p>
      
      <p><strong>Evento com programação integral durante todo o dia.</strong></p>
    `,
    data: "18 de novembro de 2025",
    horario: "08:00 - 17:00",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "16", "17", "18", "19"],
    categoria: "Colóquio",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "6",
    titulo: "Palestra: Saneamento em Natal",
    descricao: "Apresentação da ARSBAN sobre infraestrutura de saneamento básico e gestão de resíduos na capital potiguar.",
    descricaoCompleta: `
      <p>Conheça os desafios e avanços do saneamento básico em Natal com especialistas da ARSBAN!</p>
      
      <h3>Instituição:</h3>
      <p><strong>ARSBAN</strong> - Agência Reguladora de Saneamento Básico do Município de Natal</p>
      
      <h3>Tópicos abordados:</h3>
      <ul>
        <li>Histórico e situação atual do saneamento em Natal</li>
        <li>Abastecimento de água tratada</li>
        <li>Esgotamento sanitário e tratamento</li>
        <li>Gestão de resíduos sólidos urbanos</li>
        <li>Drenagem urbana e prevenção de enchentes</li>
        <li>Desafios e perspectivas futuras</li>
        <li>Papel da ARSBAN na regulação e fiscalização</li>
      </ul>
      
      <p>Uma oportunidade única para entender os aspectos técnicos, ambientais e sociais do saneamento básico na nossa capital!</p>
    `,
    data: "18 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Escola de Ciência e Tecnologia - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1581093458791-9d42e2c8a6b1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    autoresIds: ["21"],
    categoria: "Palestra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "7",
    titulo: "Minicurso: Conexão QGIS e Brasil Mais (Dia 2)",
    descricao: "Continuação do minicurso sobre QGIS e Brasil Mais, com prática em análise espacial e elaboração de mapas.",
    descricaoCompleta: `
      <p>Segundo dia do minicurso de geotecnologias aplicadas ao meio ambiente!</p>
      
      <h3>Ministrantes:</h3>
      <ul>
        <li><strong>Prof. Dr. Mary Lúcia da Silva Nogueira</strong> - UFRN/LASA</li>
        <li><strong>Júlio Danilo Soares de Santana</strong> - UFRN/LASA</li>
        <li><strong>Gustavo</strong> - UFRN/LASA</li>
      </ul>
      
      <h3>Conteúdo do Dia 2:</h3>
      <ul>
        <li>Revisão dos conceitos do dia 1</li>
        <li>Análises espaciais avançadas</li>
        <li>Geoprocessamento de dados ambientais</li>
        <li>Criação de layouts de mapas profissionais</li>
        <li>Exportação e compartilhamento de resultados</li>
        <li>Projeto prático aplicado</li>
      </ul>
      
      <p><strong>Requisitos:</strong> Ter participado do dia 1 do minicurso. Trazer notebook com QGIS instalado.</p>
      
      <p><strong>Ao final, os participantes receberão certificado de conclusão.</strong></p>
    `,
    data: "18 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Laboratório de Informática 3, 2º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "14", "15"],
    categoria: "Minicurso",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "8",
    titulo: "Palestra: Geotecnologias",
    descricao: "Apresentação da Cabugi Soluções sobre aplicações práticas de geotecnologias em projetos ambientais.",
    descricaoCompleta: `
      <p>Descubra como as geotecnologias estão revolucionando a gestão ambiental e territorial!</p>
      
      <h3>Empresa:</h3>
      <p><strong>Cabugi Soluções</strong> - Empresa especializada em geotecnologias e soluções ambientais</p>
      
      <h3>Temas:</h3>
      <ul>
        <li>Panorama das geotecnologias no Brasil</li>
        <li>Sensoriamento remoto e imagens de satélite</li>
        <li>Sistemas de Informação Geográfica (SIG)</li>
        <li>Drones e fotogrametria aplicados ao meio ambiente</li>
        <li>Modelagem territorial e análise espacial</li>
        <li>Casos práticos de aplicação</li>
        <li>Mercado de trabalho e oportunidades</li>
      </ul>
      
      <p>Uma excelente oportunidade para conhecer aplicações reais e tendências da área de geotecnologias!</p>
    `,
    data: "19 de novembro de 2025",
    horario: "10:00 - 12:00",
    local: "Auditório E - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1"],
    categoria: "Palestra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
  },
  {
    id: "9",
    titulo: "Palestra: Entre o Campo e o Escritório",
    descricao: "O que é ser um Consultor Ambiental Hoje - discussão sobre a carreira e atuação profissional com o CRNBIO.",
    descricaoCompleta: `
      <p>Entenda a rotina, desafios e oportunidades da consultoria ambiental com profissionais do mercado!</p>
      
      <h3>Tema:</h3>
      <p><strong>"O que é ser um Consultor Ambiental Hoje"</strong></p>
      
      <h3>Instituição:</h3>
      <p><strong>CRNBIO</strong> - Conselho Regional de Biologia</p>
      
      <h3>Abordagem:</h3>
      <ul>
        <li>Perfil e formação do consultor ambiental</li>
        <li>Áreas de atuação: licenciamento, perícias, auditorias</li>
        <li>Rotina entre trabalho de campo e escritório</li>
        <li>Elaboração de estudos ambientais (EIA/RIMA, RCA, etc.)</li>
        <li>Relacionamento com órgãos ambientais</li>
        <li>Desafios éticos e técnicos da profissão</li>
        <li>Mercado de trabalho e empreendedorismo</li>
        <li>Depoimentos e experiências práticas</li>
      </ul>
      
      <p><strong>Ideal para estudantes e profissionais interessados em consultoria ambiental!</strong></p>
    `,
    data: "19 de novembro de 2025",
    horario: "15:00 - 17:00",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1"],
    categoria: "Palestra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdD24sv-NALhPCmE6u3zoGz_ihOrMsgjjSunMwpObi1kJi2FA/viewform",
    formularioAtivo: true
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
