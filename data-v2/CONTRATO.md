# Contrato de dados — dashboard v2 (Academia DTM)

Cada view é um objeto em `window.DASH.views[<id>]`, um arquivo por grupo em `data-v2/*.js`.
Comece cada arquivo com `window.DASH = window.DASH || {}; DASH.views = DASH.views || {};`

```js
DASH.views['form-oferta'] = {
  titulo: 'A oferta',                 // H1 curto, sem ponto
  kicker: 'Formação',                 // rótulo mono acima do título
  resumo: '…',                        // 1–2 frases, ≤ 40 palavras — o que o Rodrigo precisa saber
  fatos: [ {rotulo:'vagas presencial', valor:'20'}, … ],      // 2–5 números-âncora
  blocos: [                           // 2–6 blocos, cada um ≤ 120 palavras
    {tipo:'texto', titulo:'…', html:'<p>…</p>'},
    {tipo:'lista', titulo:'…', itens:['…','…']},
    {tipo:'tabela', titulo:'…', colunas:['…'], linhas:[['…','…']]},
    {tipo:'framework', titulo:'…', svg:'../brandbook-academia-dtm/kit-frameworks/svg/F1.svg', legenda:'…'},
    {tipo:'detalhe', titulo:'Ver o documento completo', html:'…'}   // colapsado por padrão; único lugar onde texto longo pode viver
  ],
  decisoes: [ {data:'2026-09-05', texto:'…'} ],               // já decididas, com data
  pendencias: [ {quem:'rodrigo'|'inception', texto:'…', prazo:'…'} ],
  links: [ {rotulo:'Abrir a página', href:'pecas/pagina-aplicacao/index.html'} ],
  atualizado: '2026-09-05'
};
```

Regras: PT-BR técnico simplificado (Zinsser). Um assunto por bloco. Nada de "vale ressaltar". Sem emoji. Sem placeholder. Sem `R$` fora de `form-oferta` e `com-apresentacao`. A palavra **mentoria** só em `continuidade` (é planejamento interno dele; nunca em seção que fale de aluno ou público). HTML só com `<p> <strong> <em> <ul><li> <ol><li> <table>`. Sem style inline.
