# Década dos Oceanos - UFRN

Projeto desenvolvido para a **Semana de Ciência e Tecnologia da UFRN**, apresentando a iniciativa da **Década das Nações Unidas da Ciência Oceânica para o Desenvolvimento Sustentável (2021-2030)**.

## Sobre o Projeto

Este site apresenta informações sobre a Década dos Oceanos através de:
- **Página Inicial**: Apresentação da iniciativa e seus 7 objetivos principais
- **Eventos**: 3 eventos programados (Palestra, Workshop e Mesa Redonda)
- **Participantes**: Perfis dos pesquisadores e especialistas envolvidos
- **Referências**: Bibliografia e recursos sobre oceanografia e conservação marinha

## Tecnologias Utilizadas

- **Next.js 14+** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **React** para componentes
- **Next/Image** para otimização de imagens

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx                    # Página inicial
│   ├── eventos/
│   │   ├── page.tsx                # Lista de eventos
│   │   └── [id]/page.tsx           # Página individual de cada evento
│   ├── participantes/
│   │   └── page.tsx                # Lista de participantes
│   ├── referencias/
│   │   └── page.tsx                # Referências bibliográficas
│   ├── layout.tsx                  # Layout principal
│   └── globals.css                 # Estilos globais
├── components/
│   └── Header.tsx                  # Componente de cabeçalho/navegação
└── data/
    └── data.ts                     # Dados mockados (eventos, participantes, referências)
```

## Funcionalidades

### Página Inicial
- Hero section com imagem de destaque
- Cards com os 7 objetivos da Década dos Oceanos
- Preview dos 3 eventos principais
- Call-to-action para outras páginas

### Página de Eventos
- Lista completa dos 3 eventos
- Informações de data, horário e local
- Links para páginas individuais

### Páginas Individuais de Eventos
- Galeria de imagens
- Descrição completa do evento
- Lista de palestrantes/facilitadores
- Breadcrumb navigation

### Página de Participantes
- Cards com foto e biografia de cada participante
- Informações de cargo e instituição
- Email de contato
- Estatísticas do time

### Página de Referências
- Organização por tipo (Sites, Relatórios, Artigos, Livros)
- Links diretos para recursos online
- Orientações de citação ABNT
- Links úteis adicionais

## Design
O Design utilizado segue o movimento artístico Frutiger Aero,
e utiliza uma paleta de cores inspirada no oceano:
- **Azul primário**: #1e3a8a (blue-900)
- **Azul secundário**: #2563eb (blue-600)
- **Fundo**: Gradiente de #eff6ff (blue-50) para branco
- **Cards**: Fundo branco com sombras suaves

## Dados Mockados

### Eventos (3)
1. **A Década dos Oceanos: Desafios e Oportunidades** - Palestra
2. **Biodiversidade Marinha do Litoral Potiguar** - Workshop
3. **Mudanças Climáticas e os Oceanos** - Mesa Redonda

### Participantes (6)
- Dra. Marina Costa - Oceanógrafa
- Dr. Roberto Marinho - Biólogo Marinho
- Profª. Ana Flávia Santos - Professora de Ciências Marinhas
- MSc. Carlos Eduardo Lima - Pesquisador em Oceanografia Física
- Dra. Juliana Ferreira - Bióloga e Educadora Ambiental
- Dr. Pedro Henrique Alves - Geólogo Marinho

### Referências (12)
Organizadas em 4 categorias: Sites, Relatórios, Artigos e Livros

## Como Executar

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em modo de desenvolvimento**:
```bash
npm run dev
```

3. **Acessar no navegador**:
```
http://localhost:3000
```

## Navegação

O header principal contém links para todas as páginas:
- **Home** - Página inicial
- **Eventos** - Lista de eventos
- **Participantes** - Pesquisadores envolvidos
- **Referências** - Bibliografia

## Observações

- As imagens utilizadas são provenientes do Unsplash (placeholders)
- Os dados são mockados em TypeScript para fins de demonstração
- O projeto utiliza Next.js 14+ com App Router
- Todas as páginas são responsivas e otimizadas para SEO

## Créditos
Por Felipe Samuel, Desenvolvido para a **Semana de Ciência e Tecnologia da UFRN**, em apoio à **Década dos Oceanos (2021-2030)** da UNESCO.

---

**Década dos Oceanos**: A ciência que precisamos para o oceano que queremos 
