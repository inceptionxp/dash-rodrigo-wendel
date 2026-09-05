# Kit de frameworks · Academia DTM — CHANGELOG

## v2.1 · 05/09/2026 · F4 alinhado ao calendário V2 da turma 2027

**Motivo:** a data de abertura decidida com o cliente em 05/09 é **23 de fevereiro de 2027**, e não
mais 1º de fevereiro. Fonte única: `produto/calendario-turma-2027.md` (V2, bloco "Números que vão
para as peças"). O F4 era o último lugar do kit que ainda mostrava a data velha.

**Só texto de data mudou. Nada de redesenho:** geometria do símbolo congelada, viewBox 600×830
intacto, tokens, cores, famílias, corpos e gestos de assinatura idênticos aos da v2.

### F4 · O percurso da formação
- **Abertura:** `1º DE FEVEREIRO DE 2027` → **`23 DE FEVEREIRO DE 2027`**. Mesma contagem de
  caracteres (23), então a caixa não mexeu.
- **Imersão 3:** `29 DE NOVEMBRO DE 2027` → **`29 E 30 DE NOVEMBRO DE 2027`**. A imersão ocupa os
  dois dias e a **formatura é em 30/11**; a data velha exibia só o primeiro dia e escondia a
  formatura. A linha cresceu de 23 para 27 caracteres, ou seja, ~43 unidades a mais, e termina em
  x≈432 — 128 unidades antes da margem direita.
- **Imersões 1 e 2:** `MAIO DE 2027` e `OUTUBRO DE 2027` **mantidas**. As semanas de 17/05 e 04/10
  caem nesses meses, então nada estava errado, e o registro mês-a-mês é o mesmo da copy da página
  de vendas ("imersões em maio, outubro e novembro").
- **`10 MESES` mantido**, por decisão do briefing ("de fevereiro a novembro"). Registro de
  divergência: o calendário V2 mede **9 meses e 1 semana** entre 23/02 e 30/11 e recomenda trocar
  o número. Enquanto a copy da página de vendas disser "10 meses", o F4 acompanha. Handoff aberto.
- **Sem contador de semanas no F4** — a régua de números é 43 encontros · 10 meses · 3 imersões ·
  8 dias em Brasília. As "41 semanas" do calendário não aparecem aqui e não foram introduzidas.
- **Colisões:** 0 → 0. Medido por tinta real (`canvas.measureText` com
  `actualBoundingBoxAscent/Descent`, convertido para unidades de viewBox), sobre o SVG renderizado
  no Chromium com as três fontes carregadas: folga mínima **texto × traço ou nó = 20,4 un.**,
  **texto × borda = 19,8 un.**, **texto × outro rótulo = 8+ un.** O único par abaixo de 8 é
  `DIAS EM` / `BRASÍLIA` (4,1 un.), que é a entrelinha de um rótulo de duas linhas criado na v2, e
  não colisão entre rótulos distintos. Verificação cruzada: o mesmo medidor rodado na versão
  anterior devolve exatamente o mesmo resultado — as datas novas não custaram um pixel de folga.
- **Menor corpo:** 15 (piso da v2 preservado).
- **viewBox:** 600×830 → **600×830** (sem alteração).
- **Prova:** `_prova/F4-percurso-da-formacao.png` (Playwright, retina 2×, 1200×1660).

### Sincronia
- `svg/F4-percurso-da-formacao.svg`, os 2 SVG inline do `index.html` e o bloco `<pre>` escapado
  conferidos por comparação exata: 2 ocorrências inline + 1 escapada, todas idênticas ao arquivo.
- Espelho `outputs/dashboard/brandbook-academia-dtm/kit-frameworks/` recebeu SVG, `index.html` e
  este CHANGELOG. O deploy em si não foi feito.
- `outputs/pagina-vendas-viver-de-dtm/index.html`: o embed **não** bate byte a byte com o arquivo
  do kit — a página usa a variante sem a linha de título `F4 · O PERCURSO DA FORMAÇÃO`. Por isso a
  correção foi cirúrgica no embed, e não substituição do bloco. A abertura já estava em 23/02
  (trocada pelo agente da página); aqui entrou a Imersão 3 (`NOVEMBRO DE 2027` →
  `29 E 30 DE NOVEMBRO DE 2027`). Colisão dentro de SVG na página: **0 em 1440×900 e 0 em 390×844**
  (`_prova/colisao-svg.py`).

### Pendente (fora desta rodada)
- `outputs/brandbook-academia-dtm/ds-conteudos-criativos.html` — em edição por outro agente. O F4
  de lá ainda mostra `29 DE NOVEMBRO DE 2027` e precisa reembutir o SVG novo depois.
- `outputs/dashboard/brandbook-academia-dtm/ds-conteudos-criativos.html` — espelho do arquivo
  acima; reespelhar junto.
- `outputs/dashboard/pecas/pagina-aplicacao/index.html` — cópia de 04/09 de outra peça, com um F4
  desatualizado (`2 DE FEVEREIRO DE 2027`, `NOVEMBRO DE 2027`). Fora do escopo deste briefing.

---

## v2 · 03/09/2026 · correção de colisão de texto e piso tipográfico

**Regra aplicada (nova, vinda da dona do projeto):** texto nunca sobre linha nem sobre
elemento. Todo rótulo tem área própria, com folga mínima de **8 unidades de viewBox** de
qualquer traço, nó, caixa ou outro rótulo — e das quatro bordas do viewBox.

**Como foi medido:** pela geometria do próprio SVG, sem navegador. Um checador lê cada
`<text>` (largura estimada por métrica de caractere por família, altura por ascendente com
acento + descendente), converte `line`, `rect`, `polygon`, `circle` e `path` em segmentos, e
calcula a distância retângulo↔segmento e retângulo↔retângulo. Reprova qualquer par abaixo de
8 unidades. Resultado: **30 colisões encontradas → 0**.

**Piso tipográfico:** rótulo secundário (legenda cinza, nota de rodapé, fonte de dado,
sobrelinha) subiu de 11–13 para **15–16 unidades** — a queixa era ilegibilidade a 390 px,
onde 11 unidades viravam ~7 px reais. Nenhum texto do kit fica abaixo de 15.

**O que não mudou:** tokens, cores (`#101C46`, `#CDF23F`), famílias (Archivo · Hanken
Grotesk · Space Mono), gestos de assinatura (par de filetes do cabeçalho, octógono, barra
flúor, filete de rodapé), largura do viewBox (600 em todos) e o texto de cada peça. Nada anima.

---

### F1 · O guarda-chuva da DTM
- **Colisões:** 0 → 0.
- **Mudou:** rodapé "CERCA DE DEZ DIAGNÓSTICOS…" de 14 → 16 un., `letter-spacing` 1.7 → 1.2
  para a linha continuar dentro da margem.
- **Menor corpo:** 14 → 16.
- **viewBox:** 600×478 → **600×478** (sem alteração).
- **Trocar o embed nas peças:** sim (apresentação comercial · página de vendas · ds-conteudos-criativos).

### F2 · Os dois tripés
- **Colisões:** 8 → 0. Eram: "Sono" sobre o nó do vértice e sobre as duas arestas; "Bruxismo"
  sobre o nó; "Bruxismo"/"do sono" cruzando as duas arestas do triângulo direito.
- **Mudou:** os dois tripés saíram de lado a lado e passaram a **empilhados**, um por linha,
  cada um com os 600 de largura. Era impossível manter dois triângulos em meias-larguras de
  284 un. com rótulo de 15 caracteres ("psicoemocionais") fora da aresta e ainda com 8 de
  folga. Agora: rótulo do vértice **acima** do nó (13 un. de folga), rótulos da base
  **abaixo** dos nós, centrados em cada nó, sem tocar aresta nenhuma. Corpo dos rótulos
  19 → 22. O divisor vertical com marca flúor virou divisor horizontal com a mesma marca,
  entre os dois tripés. Rodapé quebrado em duas linhas.
- **Menor corpo:** 13 → 16.
- **viewBox:** 600×518 → **600×896**.
- **Trocar o embed nas peças:** sim (apresentação comercial · ds-conteudos-criativos).

### F3 · A escada terapêutica
- **Colisões:** 7 → 0. Eram: descendentes das legendas ("liberação miofascial · exercícios",
  "executados pelo aluno, sob supervisão") passando por baixo da borda do próprio card e
  invadindo o card de cima; "não a executar" sobre a borda do card 03; "03" a 3,4 un. da
  barra flúor; conector vertical cortando legenda.
- **Mudou:** card de 320×88 → **360×120**, com o texto realojado (número em +30, título +60,
  legendas +86 e +104) — 12 un. livres até a borda inferior. Degraus recalculados
  (y 408 / 272 / 136, passo horizontal de 90). Legendas 12,5 → 16; lista de critério 16 → 17;
  rótulo de seção 15 → 16; rodapé 13 → 16.
- **Menor corpo:** 12,5 → 16.
- **viewBox:** 600×648 → **600×792**.
- **Trocar o embed nas peças:** sim (apresentação comercial · página de vendas · ds-conteudos-criativos).

### F4 · O percurso da formação
- **Colisões:** 1 → 0. Era: "DIAS EM BRASÍLIA" vazando 1 un. para fora do viewBox à direita.
- **Mudou:** a régua de números foi para 4 colunas em 40/180/320/460 e a última legenda
  quebrou em duas linhas ("DIAS EM" / "BRASÍLIA"). Sobrelinhas de data/etapa 14 → 15,
  legendas de encontro 15 → 16, legendas da régua 11 → 15. A linha do tempo, os nós e os
  títulos ficaram onde estavam.
- **Menor corpo:** 11 → 15.
- **viewBox:** 600×812 → **600×830**.
- **Trocar o embed nas peças:** sim (página de vendas · ds-conteudos-criativos).

### F5 · O martelo único e o arsenal
- **Colisões:** 5 → 0. Eram: "O protesista faz prótese" atravessando o divisor central e a
  marca flúor; "O ortodontista aparelha" a 7,3 un. do divisor; a frase de fechamento
  encostando na ponta de baixo do divisor; "A FERRAMENTA CERTA PARA CADA CASO" vazando 7 un.
  para fora do viewBox.
- **Mudou:** divisor central de x=300 → **x=330** (e encurtado para y 110–430, longe da frase
  de fechamento); ícones do arsenal reespaçados nas colunas 380/450/520; a legenda do arsenal
  quebrou em duas linhas e subiu de 11 → 15. Coluna da esquerda intacta.
- **Menor corpo:** 11 → 15.
- **viewBox:** 600×546 → **600×552**.
- **Trocar o embed nas peças:** sim (apresentação comercial · página de vendas · ds-conteudos-criativos).

### F6 · O mix editorial
- **Colisões:** 0 → 0.
- **Mudou:** só corpo e respiro. Rótulos de linha 15 → 17, percentuais 13 → 16 (e opacidade
  0,55 → 0,70), rótulos de fase 12 → 15, legendas dos perfis 15 → 16. Para o rótulo de linha
  maior caber, as barras começam em x=248 (fase 1) e x=430 (fase 2) — 20 un. de folga entre
  rótulo e barra, 38 entre o percentual da fase 1 e a barra da fase 2.
- **Menor corpo:** 12 → 15.
- **viewBox:** 600×610 → **600×610** (sem alteração).
- **Trocar o embed nas peças:** sim (ds-conteudos-criativos).

### F7 · O fluxo de aplicação
- **Colisões:** 9 → 0. Eram: legendas dos cards 01, 02, 04 a 5,9 un. da borda inferior do
  card e do conector; "turma fundadora de 8 a 12 alunos" a 0,3 un. do filete de rodapé; e o
  **filete de rodapé atravessando o card 06**, com o texto do rodapé por cima do card.
- **Mudou:** card de 86 → **106** de altura, passo vertical de 128 (conector de 22),
  legendas 14 → 16 com 16 un. livres até a borda do card. O filete de rodapé desceu para
  y=912, abaixo do último card, e o rodapé quebrou em duas linhas de 15 un. A barra flúor
  continua marcando o card 06, agora na borda superior dele.
- **Menor corpo:** 11 → 15.
- **viewBox:** 600×784 → **600×990**.
- **Trocar o embed nas peças:** sim (página de vendas · ds-conteudos-criativos).
  Atenção: a apresentação comercial usa **outra variante** deste framework
  (`aria-label="O fluxo de aplicação: conversa, proposta e matrícula"`), que não faz parte do
  kit e não foi tocada.

### F8 · A carreira em números
- **Colisões:** 0 → 0.
- **Mudou:** só corpo e respiro. Legendas dos números 16 → 17, legenda do bloco grande
  18 → 17 (unificada), rodapé 13 → 16 com `letter-spacing` 1,6 → 1,0. A barra flúor sob o
  "+92%" desceu de y=236 → 240 (12 un. livres do número, 11,5 do "de melhora sem cirurgia") e
  os dois blocos de números desceram 4 un. para acompanhar.
- **Menor corpo:** 13 → 16.
- **viewBox:** 600×648 → **600×656**.
- **Trocar o embed nas peças:** sim (apresentação comercial · página de vendas · ds-conteudos-criativos).

### F9 · O dado de mercado
- **Colisões:** 0 → 0.
- **Mudou:** as fontes dos dados (Valesan; Prabhakar) subiram de 12 → 16 e, por não caberem
  numa linha nesse corpo, quebraram em duas linhas cada. Legendas dos títulos 17 (mantido),
  agora com opacidade 0,70. Blocos reespaçados para dar 8+ de folga entre pictograma, barra
  flúor e fonte do dado.
- **Menor corpo:** 12 → 16.
- **viewBox:** 600×672 → **600×748**.
- **Trocar o embed nas peças:** sim (página de vendas · ds-conteudos-criativos).

---

### Sincronia do kit
`index.html` foi reescrito nos **dois lugares** de cada framework: os 2 SVG inline (amostra
clara e amostra escura) e o bloco `<pre>` de código para colar. Conferido por comparação
byte a byte: cada arquivo de `svg/` aparece 2× inline e 1× escapado no `<pre>` — kit e
arquivo não divergem.

A cópia publicável em `outputs/dashboard/brandbook-academia-dtm/kit-frameworks/` recebeu os
mesmos arquivos. O deploy em si não foi feito.

### Impacto nos embeds
Todos os nove mudaram de conteúdo, então **todo embed atual está desatualizado**. Sete dos
nove também mudaram de altura de viewBox — nesses, o bloco fica mais alto na página (a
largura continua 600 e os embeds usam `width:100%` sem altura fixa, então nada quebra: o
espaço vertical ocupado é que cresce). Peças a atualizar quando o dono do projeto der o
sinal: `outputs/apresentacao-comercial-viver-de-dtm/index.html`,
`outputs/pagina-vendas-viver-de-dtm/index.html` e
`outputs/brandbook-academia-dtm/ds-conteudos-criativos.html` (mais as cópias em
`outputs/dashboard/`). Nenhuma delas foi editada nesta rodada.
