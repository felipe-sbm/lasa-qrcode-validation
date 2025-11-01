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
    nome: "Dra. Marina Costa",
    cargo: "Oceanógrafa",
    instituicao: "UFRN - Universidade Federal do Rio Grande do Norte",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Doutora em Oceanografia Biológica com mais de 15 anos de experiência em pesquisas sobre ecossistemas marinhos costeiros. Coordenadora do projeto de monitoramento da biodiversidade marinha do litoral norte-rio-grandense.",
    email: "marina.costa@ufrn.br"
  },
  {
    id: "2",
    nome: "Dr. Roberto Marinho",
    cargo: "Biólogo Marinho",
    instituicao: "UFRN - Departamento de Oceanografia",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Especialista em conservação de tartarugas marinhas e ecologia comportamental. Lidera projetos de preservação de espécies ameaçadas no litoral nordestino há 10 anos.",
    email: "roberto.marinho@ufrn.br"
  },
  {
    id: "3",
    nome: "Profª. Ana Flávia Santos",
    cargo: "Professora de Ciências Marinhas",
    instituicao: "UFRN - Instituto de Ciências do Mar",
    foto: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    bio: "Doutora em Ciências Marinhas com foco em mudanças climáticas e seus impactos nos oceanos. Desenvolve pesquisas sobre acidificação oceânica e aquecimento global.",
    email: "ana.santos@ufrn.br"
  },
  {
    id: "4",
    nome: "MSc. Carlos Eduardo Lima",
    cargo: "Pesquisador em Oceanografia Física",
    instituicao: "UFRN - Laboratório de Oceanografia Física",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Mestre em Oceanografia Física, especializado em correntes marinhas e modelagem oceânica. Atua no desenvolvimento de modelos preditivos para fenômenos oceânicos.",
    email: "carlos.lima@ufrn.br"
  },
  {
    id: "5",
    nome: "Dra. Juliana Ferreira",
    cargo: "Bióloga e Educadora Ambiental",
    instituicao: "UFRN - Núcleo de Educação Ambiental",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Doutora em Educação Ambiental com experiência em projetos de conscientização sobre preservação marinha. Coordena programas de educação oceânica em escolas públicas.",
    email: "juliana.ferreira@ufrn.br"
  },
  {
    id: "6",
    nome: "Dr. Pedro Henrique Alves",
    cargo: "Geólogo Marinho",
    instituicao: "UFRN - Departamento de Geologia",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Doutor em Geologia Marinha, especialista em processos costeiros e erosão. Desenvolve estudos sobre a dinâmica sedimentar e morfologia costeira do RN.",
    email: "pedro.alves@ufrn.br"
  }
];

// Dados dos Eventos
export const eventos: Evento[] = [
  {
    id: "1",
    titulo: "A Década dos Oceanos: Desafios e Oportunidades",
    descricao: "Palestra sobre a Década das Nações Unidas da Ciência Oceânica para o Desenvolvimento Sustentável (2021-2030).",
    descricaoCompleta: `
      <p>A Década dos Oceanos é uma iniciativa global da ONU que visa mobilizar a comunidade científica, governos, setor privado e sociedade civil para reverter o ciclo de declínio da saúde dos oceanos e criar melhores condições para o desenvolvimento sustentável.</p>
      
      <p>Nesta palestra, exploraremos os sete resultados esperados da Década dos Oceanos:</p>
      <ul>
        <li><strong>Um oceano limpo:</strong> onde as fontes de poluição são identificadas e reduzidas ou removidas</li>
        <li><strong>Um oceano saudável e resiliente:</strong> onde os ecossistemas marinhos são compreendidos, protegidos, restaurados e gerenciados</li>
        <li><strong>Um oceano produtivo:</strong> que sustenta o abastecimento de alimentos e uma economia oceânica sustentável</li>
        <li><strong>Um oceano previsto:</strong> onde a sociedade compreende e pode responder às mudanças nas condições oceânicas</li>
        <li><strong>Um oceano seguro:</strong> onde a vida e os meios de subsistência são protegidos de perigos relacionados ao oceano</li>
        <li><strong>Um oceano acessível:</strong> com acesso aberto e equitativo a dados, informações e tecnologia</li>
        <li><strong>Um oceano inspirador e envolvente:</strong> onde a sociedade compreende e valoriza o oceano</li>
      </ul>
      
      <p>Discutiremos também os principais desafios enfrentados pelos oceanos atualmente, como a poluição por plásticos, a acidificação oceânica, a perda de biodiversidade marinha e os impactos das mudanças climáticas. Além disso, apresentaremos as oportunidades de pesquisa, inovação e colaboração que a Década dos Oceanos proporciona para a comunidade científica brasileira.</p>
      
      <p>O evento contará com apresentação de dados sobre a situação dos oceanos no litoral do Rio Grande do Norte, destacando iniciativas locais de conservação e pesquisa marinha desenvolvidas pela UFRN.</p>
    `,
    data: "28 de outubro de 2025",
    horario: "14:00 - 16:00",
    local: "Auditório do Centro de Biociências - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "3", "5"],
    categoria: "Palestra",
    formularioUrl: "https://forms.google.com/exemplo-decada-oceanos",
    formularioAtivo: false
  },
  {
    id: "2",
    titulo: "Biodiversidade Marinha do Litoral Potiguar",
    descricao: "Workshop prático sobre identificação de espécies marinhas e técnicas de monitoramento da biodiversidade costeira.",
    descricaoCompleta: `
      <p>O litoral do Rio Grande do Norte abriga uma rica diversidade de ecossistemas marinhos, incluindo recifes de corais, manguezais, praias arenosas e costões rochosos. Esta diversidade de habitats sustenta uma fauna e flora marinha única e de grande importância ecológica e econômica.</p>
      
      <p>Neste workshop prático, os participantes terão a oportunidade de:</p>
      <ul>
        <li>Aprender sobre as principais espécies marinhas encontradas no litoral potiguar</li>
        <li>Conhecer técnicas de identificação e catalogação de organismos marinhos</li>
        <li>Compreender a importância ecológica de cada grupo taxonômico</li>
        <li>Praticar métodos de monitoramento da biodiversidade marinha</li>
        <li>Entender os principais desafios de conservação da fauna e flora costeira</li>
      </ul>
      
      <p><strong>Espécies em destaque:</strong></p>
      <ul>
        <li><strong>Tartarugas marinhas:</strong> Cinco das sete espécies de tartarugas marinhas do mundo ocorrem no litoral brasileiro, incluindo a tartaruga-de-pente (Eretmochelys imbricata), criticamente ameaçada de extinção</li>
        <li><strong>Peixes recifais:</strong> Mais de 200 espécies habitam os recifes costeiros do RN, incluindo o peixe-palhaço e o peixe-papagaio</li>
        <li><strong>Corais:</strong> Espécies endêmicas como o coral-cérebro e coral-estrela formam importantes recifes na costa potiguar</li>
        <li><strong>Mamíferos marinhos:</strong> Golfinhos e baleias são avistados regularmente na costa, especialmente durante períodos migratórios</li>
      </ul>
      
      <p>O workshop incluirá atividades práticas de observação de espécimes preservados, análise de fotografias subaquáticas e demonstração de equipamentos de pesquisa marinha. Os participantes receberão materiais didáticos sobre biodiversidade marinha local.</p>
      
      <p><strong>Atividade prática:</strong> Saída de campo para observação de organismos marinhos na Praia de Ponta Negra (sujeita às condições climáticas).</p>
    `,
    data: "29 de outubro de 2025",
    horario: "09:00 - 13:00",
    local: "Laboratório de Biologia Marinha - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop"
    ],
    autoresIds: ["2", "1", "6"],
    categoria: "Workshop",
    formularioUrl: "https://forms.google.com/exemplo-biodiversidade",
    formularioAtivo: false
  },
  {
    id: "3",
    titulo: "Mudanças Climáticas e os Oceanos",
    descricao: "Mesa redonda sobre os impactos das mudanças climáticas nos ecossistemas marinhos e estratégias de mitigação.",
    descricaoCompleta: `
      <p>As mudanças climáticas representam uma das maiores ameaças aos oceanos e aos ecossistemas marinhos do planeta. O aumento da temperatura global está causando profundas alterações nos mares, afetando desde organismos microscópicos até grandes mamíferos marinhos.</p>
      
      <p><strong>Principais impactos discutidos:</strong></p>
      
      <h3>1. Aquecimento dos Oceanos</h3>
      <p>Os oceanos absorvem cerca de 90% do calor excedente do planeta. Isso está resultando em:</p>
      <ul>
        <li>Branqueamento de corais em escala global</li>
        <li>Alteração na distribuição de espécies marinhas</li>
        <li>Aumento da intensidade de furacões e tempestades tropicais</li>
        <li>Derretimento das calotas polares e elevação do nível do mar</li>
      </ul>
      
      <h3>2. Acidificação Oceânica</h3>
      <p>O excesso de CO₂ na atmosfera está sendo absorvido pelos oceanos, causando:</p>
      <ul>
        <li>Redução do pH oceânico (acidificação)</li>
        <li>Dificuldade na formação de conchas e esqueletos de carbonato de cálcio</li>
        <li>Ameaça a moluscos, corais e outros organismos calcificadores</li>
        <li>Impactos na cadeia alimentar marinha</li>
      </ul>
      
      <h3>3. Desoxigenação</h3>
      <p>Águas mais quentes retêm menos oxigênio dissolvido:</p>
      <ul>
        <li>Expansão de zonas mortas (áreas com baixo oxigênio)</li>
        <li>Mortalidade em massa de organismos marinhos</li>
        <li>Mudanças comportamentais em peixes e invertebrados</li>
      </ul>
      
      <h3>4. Elevação do Nível do Mar</h3>
      <p>Consequências para áreas costeiras:</p>
      <ul>
        <li>Erosão costeira acelerada</li>
        <li>Inundação de áreas baixas e manguezais</li>
        <li>Salinização de aquíferos costeiros</li>
        <li>Ameaça a comunidades costeiras e infraestrutura</li>
      </ul>
      
      <p><strong>Estratégias de mitigação e adaptação:</strong></p>
      <ul>
        <li>Criação e expansão de áreas marinhas protegidas</li>
        <li>Restauração de ecossistemas costeiros (manguezais, recifes)</li>
        <li>Desenvolvimento de tecnologias de captura de carbono</li>
        <li>Redução da poluição e da pesca predatória</li>
        <li>Educação e conscientização pública</li>
        <li>Políticas públicas baseadas em ciência</li>
      </ul>
      
      <p>A mesa redonda contará com apresentação de dados científicos recentes, estudos de caso do litoral brasileiro e debate sobre ações concretas que podem ser implementadas em nível local, nacional e global.</p>
      
      <p><strong>Haverá sessão de perguntas e respostas ao final do evento.</strong></p>
    `,
    data: "30 de outubro de 2025",
    horario: "15:00 - 18:00",
    local: "Sala de Conferências - Centro de Ciências Exatas e da Terra - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop"
    ],
    autoresIds: ["3", "4", "1"],
    categoria: "Mesa Redonda",
    formularioUrl: "https://forms.google.com/exemplo-mudancas-climaticas",
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
