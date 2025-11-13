import { Evento } from './types';

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
    formularioUrl: "",
    formularioAtivo: false
  },
  {
    id: "2",
    titulo: "Mostra de Laboratórios: Cultura Oceânica",
    descricao: "Apresentação dos projetos LASA, GEMMA e Saberes do Oceano (IFRN) sobre cultura oceânica e conservação marinha.",
    descricaoCompleta: `
      <p>Explore os trabalhos desenvolvidos por laboratórios de pesquisa dedicados à oceanografia, educação ambiental e conservação dos oceanos!</p>
      
      <h3>Laboratórios Participantes:</h3>
      <ul>
        <li><strong>LASA</strong> - Laboratório de Soluções Ambientais</li>
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
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLScIil1wJH393AWQYTo_8fEAPUmoO_7PtEyK6COA9ZyH6kQHXA/viewform?usp=sharing&ouid=110366408967725576592",
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
    horario: "17:00 - 19:00",
    local: "Escola de Ciência e Tecnologia - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    autoresIds: ["20"],
    categoria: "Palestra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLScOZ9xfnaKsLCgpHFDFOJ7sNtvunvqmnSDXfsLA3ncqU_ExRQ/viewform?usp=publish-editor",
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
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeglF6NDCjMUxjYYDWuB__K8XaeoRZbxZ7T1-vg9_DdtBaF9A/viewform?usp=publish-editor",
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
      
      <p>O colóquio reunirá pesquisadores, gestores públicos, profissionais da área e estudantes para debater soluções e compartilhar conhecimentos sobre este recurso vital para o RN.</p>
      
      <p><strong>Confira a programação completa e as palestras na seção de Atividades do Colóquio abaixo.</strong></p>
      
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
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfSNxrctRrzsEZjSgbHMuzMqhAz0vRr9W_EDeeS0yeZbu1oAA/viewform?usp=dialog",
    formularioAtivo: true,
    subEventos: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]
  },
  // Sub-eventos do Colóquio
  {
    id: "5.1",
    titulo: "Apresentação da Rede de Monitoramento Hidrogeológico do Serviço Geológico do Brasil: RIMAS/SGB",
    descricao: "Palestra sobre a rede de monitoramento de águas subterrâneas do Serviço Geológico do Brasil.",
    descricaoCompleta: `
      <p>Conheça o sistema de monitoramento hidrogeológico desenvolvido pelo Serviço Geológico do Brasil.</p>
      
      <h3>Temas abordados:</h3>
      <ul>
        <li>Estrutura e funcionamento da RIMAS/SGB</li>
        <li>Tecnologias de monitoramento em tempo real</li>
        <li>Dados coletados e sua importância</li>
        <li>Aplicações práticas para gestão de recursos hídricos</li>
        <li>Acesso aos dados e plataformas digitais</li>
      </ul>
    `,
    data: "18 de novembro de 2025",
    horario: "08:30 - 09:30",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop"
    ],
    autoresIds: ["16"],
    categoria: "Palestra do Colóquio",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfSNxrctRrzsEZjSgbHMuzMqhAz0vRr9W_EDeeS0yeZbu1oAA/viewform?usp=dialog",
    formularioAtivo: true,
    eventosPaiId: "5"
  },
  {
    id: "5.2",
    titulo: "A contaminação do aquífero Dunas-Barreiras por derivados de petróleo",
    descricao: "Análise da ameaça à principal fonte de abastecimento da cidade de Natal/RN.",
    descricaoCompleta: `
      <p>Uma análise crítica sobre a contaminação do principal aquífero de Natal.</p>
      
      <h3>Conteúdo:</h3>
      <ul>
        <li>Características do aquífero Dunas-Barreiras</li>
        <li>Fontes de contaminação por derivados de petróleo</li>
        <li>Impactos na qualidade da água</li>
        <li>Riscos para o abastecimento público</li>
        <li>Medidas de prevenção e remediação</li>
        <li>Monitoramento e fiscalização</li>
      </ul>
    `,
    data: "18 de novembro de 2025",
    horario: "09:30 - 10:30",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=800&h=600&fit=crop"
    ],
    autoresIds: ["17"],
    categoria: "Palestra do Colóquio",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfuhTrgDK96hj9StDZ3HUfo7SELPqC3IG4NVzsIcbfPumobBA/viewform?usp=publish-editor",
    formularioAtivo: true,
    eventosPaiId: "5"
  },
  {
    id: "5.3",
    titulo: "Aspectos legais, técnicos e regulatórios da exploração de águas minerais no RN",
    descricao: "Discussão sobre a legislação e regulamentação da exploração de águas minerais no estado.",
    descricaoCompleta: `
      <p>Entenda o marco legal e regulatório da exploração de águas minerais no Rio Grande do Norte.</p>
      
      <h3>Abordagem:</h3>
      <ul>
        <li>Legislação federal e estadual sobre águas minerais</li>
        <li>Processo de outorga e licenciamento</li>
        <li>Aspectos técnicos da exploração</li>
        <li>Fiscalização e controle de qualidade</li>
        <li>Direitos minerários e concessões</li>
        <li>Sustentabilidade na exploração</li>
      </ul>
    `,
    data: "18 de novembro de 2025",
    horario: "11:00 - 12:00",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop"
    ],
    autoresIds: ["18"],
    categoria: "Palestra do Colóquio",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_5Jnf1k4aDNvdyyb8bDuOP0T9hSHCHisgJ0EXA7w1Tf4MkA/viewform?usp=publish-editor",
    formularioAtivo: true,
    eventosPaiId: "5"
  },
  {
    id: "5.4",
    titulo: "A importância dos mananciais subterrâneos como fonte de abastecimento para os sistemas operados pela CAERN",
    descricao: "Palestra sobre o papel das águas subterrâneas no abastecimento público do RN.",
    descricaoCompleta: `
      <p>Descubra como as águas subterrâneas são fundamentais para o abastecimento público no RN.</p>
      
      <h3>Tópicos:</h3>
      <ul>
        <li>Sistemas de abastecimento da CAERN</li>
        <li>Dependência de águas subterrâneas</li>
        <li>Captação e tratamento</li>
        <li>Desafios operacionais</li>
        <li>Investimentos e expansão</li>
        <li>Perspectivas futuras</li>
      </ul>
    `,
    data: "18 de novembro de 2025",
    horario: "14:00 - 15:00",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop"
    ],
    autoresIds: ["19"],
    categoria: "Palestra do Colóquio",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLScjxU9RELidXCUsuYXrisBti-LRoAZwaHMJ05dbQYR2Svu4eQ/viewform?usp=publish-editor",
    formularioAtivo: true,
    eventosPaiId: "5"
  },
  {
    id: "5.5",
    titulo: "O papel das águas subterrâneas na segurança hídrica e a sua gestão sustentável",
    descricao: "Discussão sobre gestão sustentável e segurança hídrica a partir das águas subterrâneas.",
    descricaoCompleta: `
      <p>Uma reflexão sobre a importância estratégica das águas subterrâneas para a segurança hídrica.</p>
      
      <h3>Discussão:</h3>
      <ul>
        <li>Conceito de segurança hídrica</li>
        <li>Águas subterrâneas como reserva estratégica</li>
        <li>Gestão integrada de recursos hídricos</li>
        <li>Mudanças climáticas e impactos</li>
        <li>Sustentabilidade no uso</li>
        <li>Governança e participação social</li>
      </ul>
    `,
    data: "18 de novembro de 2025",
    horario: "15:00 - 16:00",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1"],
    categoria: "Palestra do Colóquio",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfky65GWl5DLgFTTGViYzyqM3y20cUOpIsKyKl1A2oZyD7a2Q/viewform?usp=publish-editor",
    formularioAtivo: true,
    eventosPaiId: "5"
  },
  {
    id: "5.6",
    titulo: "Adaptação da tecnologia Anammox para o tratamento de águas residuárias concentradas em clima tropical",
    descricao: "Palestra sobre tecnologias inovadoras de tratamento de efluentes.",
    descricaoCompleta: `
      <p>Conheça a tecnologia Anammox e sua aplicação em clima tropical.</p>
      
      <h3>Conteúdo:</h3>
      <ul>
        <li>Fundamentos da tecnologia Anammox</li>
        <li>Vantagens para tratamento de efluentes</li>
        <li>Adaptação para clima tropical</li>
        <li>Casos de aplicação</li>
        <li>Desafios e perspectivas</li>
        <li>Sustentabilidade e eficiência energética</li>
      </ul>
    `,
    data: "18 de novembro de 2025",
    horario: "16:00 - 17:00",
    local: "Sala 1, 1º Andar - ECT/UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1"],
    categoria: "Palestra do Colóquio",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfopeoEcuvzhMnfijTvRwbh7erx2kS2SYICOQvJZ0NhyjTn7Q/viewform?usp=publish-editor",
    formularioAtivo: true,
    eventosPaiId: "5"
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
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    autoresIds: ["21"],
    categoria: "Palestra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfx-16pqbLN6Nuqgm4N4YAhurLma-UEKbc4Pmb44fpAtxSRYw/viewform?usp=publish-editor",
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
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSenrFQnk_uJhV8Lh1ApJqsZz865EsxO5qOvtDVsRv1dmg3r3g/viewform?usp=publish-editor",
    formularioAtivo: true
  },
  {
    id: "8",
    titulo: "Palestra: Da Terra ao Digital - Geotecnologias e Inovação a Serviço das Engenharias",
    descricao: "Apresentação sobre aplicações práticas de geotecnologias em projetos de engenharia e gestão ambiental.",
    descricaoCompleta: `
      <p>Descubra como as geotecnologias estão revolucionando a gestão ambiental e territorial!</p>
      
      <h3>Palestrante:</h3>
      <p><strong>Marcelo Edgleyson de Oliveira Freire</strong></p>
      <p>Especialista em geotecnologias, Diretor Técnico e Sócio da Cabugi Serviços</p>
      
      <h3>Sobre o Palestrante:</h3>
      <ul>
        <li>Técnico em Edificações pelo Instituto Federal do Rio Grande do Norte (2008-2009)</li>
        <li>Topógrafo na Metro topografia (2009-2010)</li>
        <li>Coordenador de Mina na Mineradora Nosso Senhor do Bonfim (2011-2019)</li>
        <li>Diretor técnico e sócio na Cabugi Serviços (2019-presente)</li>
        <li>Especialização em Geotecnologias pelo Instituto Iquality (2020)</li>
      </ul>
      
      <h3>Temas:</h3>
      <ul>
        <li>Panorama das geotecnologias no Brasil</li>
        <li>Sensoriamento remoto e imagens de satélite</li>
        <li>Sistemas de Informação Geográfica (SIG)</li>
        <li>Drones e fotogrametria aplicados ao meio ambiente</li>
        <li>Modelagem territorial e análise espacial</li>
        <li>Aplicações práticas em engenharia</li>
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
    autoresIds: ["4"],
    categoria: "Palestra",
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdC58U6a-MFthOfS0xssy0JgdaVEMuMjCPQWIlBDlJU8woJ5g/viewform?usp=publish-editor",
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
    formularioUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdK2S_CgIXo6OtNtwCqDAljFzyOgXbJvIX9fENagjI0cQjMXQ/viewform?usp=publish-editor",
    formularioAtivo: true
  }
];
