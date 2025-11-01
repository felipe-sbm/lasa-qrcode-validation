# Como Gerenciar Eventos e Formulários

## Adicionando um Novo Evento

Para adicionar um novo evento ao site, edite o arquivo `src/data/data.ts` e adicione um novo objeto ao array `eventos`:

```typescript
{
  id: "4", // ID único e sequencial
  titulo: "Título do Seu Evento",
  descricao: "Descrição breve que aparece nos cards (1-2 linhas)",
  descricaoCompleta: `
    <p>Descrição completa em HTML que aparece na página individual do evento.</p>
    
    <h3>Subtítulo</h3>
    <p>Mais informações...</p>
    
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  `,
  data: "31 de outubro de 2025",
  horario: "10:00 - 12:00",
  local: "Auditório Principal - UFRN",
  imagens: [
    "https://images.unsplash.com/photo-exemplo1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-exemplo2?w=800&h=600&fit=crop",
  ],
  autoresIds: ["1", "2"], // IDs dos participantes que ministram/coordenam
  categoria: "Palestra", // Palestra, Workshop, Mesa Redonda, etc.
  formularioUrl: "https://forms.google.com/d/seu-formulario-aqui/viewform",
  formularioAtivo: false // true para ativar, false para desativar
}
```

---

## Ativando/Desativando Formulários

### Para ATIVAR inscrições de um evento:

1. Abra `src/data/data.ts`
2. Encontre o evento desejado
3. Altere `formularioAtivo: false` para `formularioAtivo: true`
4. Certifique-se de que `formularioUrl` está preenchida com o link correto

**Exemplo:**
```typescript
{
  id: "1",
  titulo: "A Década dos Oceanos",
  // ... outros campos ...
  formularioUrl: "https://forms.google.com/d/1234567890/viewform",
  formularioAtivo: true  // ✅ ATIVO
}
```

### Para DESATIVAR inscrições:

```typescript
{
  id: "1",
  titulo: "A Década dos Oceanos",
  // ... outros campos ...
  formularioUrl: "https://forms.google.com/d/1234567890/viewform",
  formularioAtivo: false  // ❌ INATIVO
}
```

---

## Criando Formulários no Google Forms

### Passo a passo:

1. Acesse [Google Forms](https://forms.google.com)
2. Crie um novo formulário
3. Adicione os campos desejados (ex: Nome, Email, CPF, Curso, etc.)
4. Clique em "Enviar" (botão no canto superior direito)
5. Na janela que abrir, clique no ícone de "Link"
6. Copie o link gerado
7. Cole esse link no campo `formularioUrl` do evento

**Estrutura sugerida do formulário:**
```
📋 Inscrição para [Nome do Evento]

1. Nome Completo *
2. Email *
3. CPF
4. Telefone
5. Curso/Área
6. Instituição
7. Como ficou sabendo do evento?
```

---

## Agendamento de Ativação

### Opção 1: Manual (Simples)
- No dia e horário desejado, altere `formularioAtivo` para `true`
- Faça commit e deploy das alterações

### Opção 2: Automática (Avançado)
Você pode implementar lógica para ativar automaticamente com base em data/hora:

```typescript
// Em src/data/data.ts
const isFormularioAtivo = (dataInicio: Date, dataFim: Date) => {
  const agora = new Date();
  return agora >= dataInicio && agora <= dataFim;
};

// Exemplo de uso:
{
  id: "1",
  titulo: "Evento Exemplo",
  // ...
  formularioUrl: "...",
  formularioAtivo: isFormularioAtivo(
    new Date('2025-10-28T08:00:00'),  // Data/hora de início
    new Date('2025-10-28T14:00:00')   // Data/hora de fim
  )
}
```

---

## Monitoramento de Inscrições

Para visualizar as inscrições recebidas:

1. Acesse [Google Forms](https://forms.google.com)
2. Abra o formulário do evento
3. Clique na aba "Respostas"
4. Você pode:
   - Ver resumo das respostas
   - Exportar para Google Sheets
   - Baixar como CSV
   - Receber notificações por email

---

## Boas Práticas

### ✅ Recomendações:

1. **Teste o formulário** antes de ativar para o público
2. **Configure limite de inscrições** no Google Forms se necessário
3. **Ative com antecedência** (ex: 2 semanas antes do evento)
4. **Desative após o evento** ou quando atingir limite
5. **Mantenha backup** das respostas regularmente

### ⚠️ Cuidados:

1. Não compartilhe o link do formulário antes de ativar
2. Teste o link antes de publicar
3. Configure mensagem de confirmação no Google Forms
4. Verifique permissões (público vs. restrito à UFRN)

---

## Exemplo Completo

```typescript
// src/data/data.ts
export const eventos: Evento[] = [
  {
    id: "1",
    titulo: "Introdução à Oceanografia",
    descricao: "Workshop prático sobre fundamentos de oceanografia física e biológica.",
    descricaoCompleta: `
      <p>Neste workshop, você aprenderá os conceitos fundamentais da oceanografia...</p>
    `,
    data: "5 de novembro de 2025",
    horario: "14:00 - 18:00",
    local: "Laboratório de Oceanografia - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    ],
    autoresIds: ["1", "2"],
    categoria: "Workshop",
    formularioUrl: "https://forms.google.com/d/e/1FAIpQLSc_exemplo/viewform",
    formularioAtivo: true  // Formulário ATIVO - aceita inscrições
  },
  {
    id: "2",
    titulo: "Biologia Marinha Avançada",
    descricao: "Curso intensivo sobre ecossistemas marinhos costeiros.",
    descricaoCompleta: `
      <p>Curso voltado para estudantes de graduação e pós-graduação...</p>
    `,
    data: "10 de novembro de 2025",
    horario: "09:00 - 17:00",
    local: "Centro de Biociências - UFRN",
    imagens: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=600&fit=crop"
    ],
    autoresIds: ["3"],
    categoria: "Curso",
    formularioUrl: "https://forms.google.com/d/e/1FAIpQLSc_exemplo2/viewform",
    formularioAtivo: false  // Formulário INATIVO - inscrições em breve
  }
];
```

---

## Suporte

Para dúvidas ou problemas:
- Revise este guia
- Consulte a documentação do Google Forms
- Entre em contato com a equipe de desenvolvimento

**Última atualização:** 1 de novembro de 2025
