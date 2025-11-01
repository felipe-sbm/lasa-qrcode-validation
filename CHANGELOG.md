# Mudanças Realizadas - Semana de Ciência e Tecnologia LASA

## Resumo das Alterações

O site foi transformado de um portal específico sobre a "Década dos Oceanos" para o site oficial da **Semana de Ciência e Tecnologia** organizada pela **LASA (Liga Acadêmica de Sistemas Aquáticos)**. A Década dos Oceanos agora é um dos eventos dentro da programação, não mais o tema central do site.

---

## Alterações Detalhadas

### 1. **Header (src/components/Header.tsx)**
- ✅ Logo alterado de `/logo.webp` para `/lasa.png`
- ✅ Título alterado de "Década dos Oceanos" para "Semana de Ciência e Tecnologia"
- ✅ Subtítulo alterado de "2021-2030 • UFRN" para "LASA • UFRN"
- ✅ Removido link de navegação "Referências" (conforme solicitação de remoção de patrocinadores)

### 2. **Página Inicial (src/app/page.tsx)**
- ✅ Hero Section:
  - Título principal alterado para "Semana de Ciência e Tecnologia"
  - Subtítulo agora é "LASA - UFRN"
  - Texto descritivo atualizado para focar na Semana de C&T organizada pela LASA
  
- ✅ Seção de Objetivos transformada em "Sobre a LASA":
  - Removidos os 7 objetivos da Década dos Oceanos
  - Adicionada descrição sobre a LASA e sua missão
  
- ✅ Call-to-Action (CTA):
  - Texto alterado de "Junte-se a Nós na Proteção dos Oceanos" para "Participe da Semana de Ciência e Tecnologia"
  - Removido botão "Referências"

### 3. **Página de Eventos (src/app/eventos/page.tsx)**
- ✅ Título e descrição atualizados para refletir a Semana de C&T da LASA
- ✅ Layout mantido para exibir todos os eventos

### 4. **Página Individual de Evento (src/app/eventos/[id]/page.tsx)**
- ✅ **NOVO**: Adicionado botão de inscrição via Google Forms
  - Botão verde "Inscreva-se Agora" quando `formularioAtivo: true`
  - Botão cinza "Inscrições em Breve" quando `formularioAtivo: false`
  - Link abre em nova aba quando ativo
  - Botão desabilitado quando inativo

### 5. **Dados (src/data/data.ts)**
- ✅ **Interface Evento atualizada** com novos campos:
  - `formularioUrl?: string` - URL do Google Forms
  - `formularioAtivo?: boolean` - Controla se o formulário está ativo
  
- ✅ **Eventos atualizados**:
  - "A Década dos Oceanos: Desafios e Oportunidades" - agora um evento, não o tema principal
  - "Biodiversidade Marinha do Litoral Potiguar"
  - "Mudanças Climáticas e os Oceanos"
  - Todos os eventos incluem campos de formulário (atualmente inativos)

### 6. **Layout Principal (src/app/layout.tsx)**
- ✅ Metadata atualizado:
  - Title: "Semana de Ciência e Tecnologia - LASA"
  - Description: referencia a LASA e UFRN

### 7. **README.md**
- ✅ Título e descrição atualizados
- ✅ Documentação reflete nova estrutura do site
- ✅ Menção aos formulários do Google Forms

---

## Funcionalidades Implementadas

### Sistema de Inscrição por Evento
Cada evento pode ter:
- **URL do formulário**: Link para o Google Forms específico do evento
- **Status de ativação**: Controle para ativar/desativar inscrições

**Como usar:**
```typescript
{
  id: "1",
  titulo: "Nome do Evento",
  // ... outros campos ...
  formularioUrl: "https://forms.google.com/seu-formulario-aqui",
  formularioAtivo: true  // true = ativo, false = inativo
}
```

### Comportamento do Botão
- **Quando `formularioAtivo: true`**:
  - Botão verde com texto "Inscreva-se Agora"
  - Clicável, abre em nova aba
  - Efeito hover verde escuro
  
- **Quando `formularioAtivo: false`**:
  - Botão cinza com texto "Inscrições em Breve"
  - Não clicável (cursor not-allowed)
  - Sem link funcional

---

## O que NÃO foi alterado

- ✅ Página de Participantes (mantida intacta)
- ✅ Estrutura de rotas e navegação (exceto remoção de Referências)
- ✅ Estilos e design visual (cores, fontes, layouts)
- ✅ Componente ImageSlideshow
- ✅ Dados dos participantes

---

## Próximos Passos Sugeridos

1. **Adicionar mais eventos** além da Década dos Oceanos ao arquivo `data.ts`
2. **Atualizar URLs dos formulários** com links reais do Google Forms
3. **Configurar datas de ativação** dos formulários conforme cronograma
4. **Atualizar imagens** dos eventos com fotos reais da LASA
5. **Considerar adicionar** informações de contato da LASA
6. **Opcional**: Criar página "Sobre a LASA" com mais detalhes

---

## Arquivos Modificados

```
✏️ src/components/Header.tsx
✏️ src/app/page.tsx
✏️ src/app/eventos/page.tsx
✏️ src/app/eventos/[id]/page.tsx
✏️ src/data/data.ts
✏️ src/app/layout.tsx
✏️ README.md
```

---

## Logo LASA

O logo `lasa.png` está localizado em `/public/lasa.png` e é usado no Header do site.

---

**Data das modificações**: 1 de novembro de 2025
**Desenvolvido para**: LASA - Liga Acadêmica de Sistemas Aquáticos - UFRN
