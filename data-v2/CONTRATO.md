# Contrato de dados — dashboard v2 (Academia DTM)

Cada view é um objeto em `window.DASH.views[<id>]`, um arquivo por grupo em `data-v2/*.js`.
Comece cada arquivo com `window.DASH = window.DASH || {}; DASH.views = DASH.views || {};`

```js
DASH.views['form-oferta'] = {
  titulo: 'A oferta',                 // H1 curto, sem ponto
  status: 'em-revisao',               // entregue | em-revisao | em-producao | pendente
  kicker: 'Formação',                 // rótulo mono acima do título
  resumo: '…',                        // 1–2 frases, ≤ 40 palavras — o que o Rodrigo precisa saber
  fatos: [ {rotulo:'vagas presencial', valor:'20'}, … ],      // 2–5 números-âncora
  blocos: [                           // 2–6 blocos, cada um ≤ 120 palavras
    {tipo:'texto', titulo:'…', html:'<p>…</p>'},
    {tipo:'lista', titulo:'…', itens:['…','…']},
    {tipo:'tabela', titulo:'…', colunas:['…'], linhas:[['…','…']]},
    {tipo:'framework', titulo:'…', svg:'../brandbook-academia-dtm/kit-frameworks/svg/F1.svg', legenda:'…'},
    {tipo:'logos', titulo:'…',                     // galeria de download; o preview e' sempre PNG
      zip:{href:'marca/academia-dtm_logos.zip', tamanho:'2,2 MB', nota:'…'},
      itens:[{nome:'…', descricao:'…', preview:'marca/x.png', fundo:'papel'|'navy',
              formatos:{png:'marca/x.png', svg:'marca/x.svg', jpg:'marca/x.jpg'},
              nota:'…'}]},                         // formato ausente nao vira botao; `nota` e' opcional
    {tipo:'detalhe', titulo:'Ver o documento completo', html:'…'}   // colapsado por padrão; único lugar onde texto longo pode viver
  ],
  decisoes: [ {data:'2026-09-05', texto:'…'} ],               // já decididas, com data
  pendencias: [ {quem:'rodrigo'|'inception', feito:false, texto:'…', prazo:'…'} ],
  links: [ {rotulo:'Abrir a página', href:'pecas/pagina-aplicacao/index.html'} ],
  atualizado: '2026-09-05'
};
```

**Status e conclusão.** `status` é obrigatório em toda view: ele desenha o selo no menu,
no cabeçalho da tela e no quadro da tela inicial. `entregue` = octógono menta com check;
`em-revisao` = octógono cobalto vazado; `em-producao` = octógono meio preenchido;
`pendente` = octógono tracejado. Na dúvida, `em-revisao`.

`feito` é obrigatório em toda pendência. `true` rende check menta e texto riscado; `false`
rende octógono aberto, a etiqueta de quem está com a bola e o prazo. Item de `decisoes[]`
já é fato consumado e recebe check menta sem precisar de campo.

O renderer agrega sozinho: a tela `inicio` monta o quadro de entregas e os dois cartões a
partir do `status` e das `pendencias[]` de todas as views; a tela `decisoes-rodrigo` monta
o lado "Com você" a partir das próprias tabelas de três colunas cujo cabeçalho do meio é
`Por que importa`, e o lado "Comigo, na Inception" a partir de toda pendência com
`quem:'inception'` e `feito:false`. Nada disso é escrito à mão.

Regras: PT-BR técnico simplificado (Zinsser). Um assunto por bloco. Nada de "vale ressaltar". Sem emoji. Sem placeholder. Sem `R$` fora de `form-oferta` e `com-apresentacao`. A palavra **mentoria** só em `continuidade` (é planejamento interno dele; nunca em seção que fale de aluno ou público). HTML só com `<p> <strong> <em> <ul><li> <ol><li> <table>`. Sem style inline.
