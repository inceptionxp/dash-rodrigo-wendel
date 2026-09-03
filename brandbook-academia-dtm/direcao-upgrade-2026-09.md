# Direção de upgrade · setembro de 2026

> **Para quem:** @landing-designer (página de vendas) · @slides-designer (apresentação comercial) ·
> quem for fazer o próximo passe do Módulo 3 do Design System.
> **De:** @brand-director · 03/09/2026
> **Herda:** DESIGN DNA Academia DTM v1 · `outputs/brandbook-academia-dtm/_contrato.md` §§ 2 a 13.
> **Entrega irmã:** `outputs/brandbook-academia-dtm/kit-frameworks/index.html` — os nove desenhos
> citados aqui já existem, em SVG, prontos para colar. Ninguém redesenha nenhum deles.

---

## 0 · O diagnóstico de uma frase

As três peças estão corretas e vazias de desenho.

O número que resume tudo: somadas, a página de vendas, o deck e o Módulo 3 têm **74 elementos
`<svg>` e nenhum deles é um diagrama**. Sessenta e um são a `<use href="#trama">` — o próprio
símbolo da marca, repetido. Os oito `<line>` de cada arquivo são as oito linhas de dentro do
símbolo. Zero `<path>`, zero `<circle>`, zero `<polygon>` em qualquer uma das três.

Isso significa que **todo conceito do método está sendo explicado em prosa**. O guarda-chuva da
DTM aparece escrito seis vezes na página de vendas e nunca é desenhado. A escada terapêutica é
descrita num parágrafo de sete linhas. O percurso de dez meses é uma tabela de três linhas de
texto. Os dois tripés, que o Rodrigo desenha à mão diante do paciente há anos, não existem em
lugar nenhum do sistema.

O efeito de leitura é o esperado: a página de vendas tem **15.410 px em 1440 e 21.496 px em
390**, e a densidade é uniforme do começo ao fim. Não há zona de compressão contra zona de vazio,
não há um elemento em escala desproporcional por dobra, não há caminho de olho — há um bloco de
texto atrás do outro, todos no mesmo ritmo, em papel bonito.

**A correção não é cortar texto. É trocar texto por desenho.** Cada framework do kit substitui
entre 6 e 12 linhas de prosa por um objeto que se lê em dois segundos, e é isso que encurta a
página sem tirar informação.

---

# PEÇA 1 · Página de vendas

`outputs/pagina-vendas-viver-de-dtm/index.html` · 87 KB · 16 dobras · 2.764 palavras

## 1.1 Diagnóstico

Medido em Chromium via Playwright, com o observer de reveal disparado até o fim da página, em
1440 × 900 e 390 × 844.

| # | Achado | Etiqueta | Medida |
|---|---|---|---|
| A1 | Página comprida demais para o formato de aplicação | `defeito` | 15.410 px em 1440 · 21.496 px em 390, o equivalente a 25 telas de celular |
| A2 | Nenhum conceito do método está desenhado | `defeito` | 5 `<svg>` no arquivo, dos quais 4 são o símbolo da marca. Zero `<path>` |
| A3 | Duas dobras concentram 22% da altura só de texto | `defeito` | `#mecanismo` 1.718 px · `#percurso` 1.668 px, ambas com uma imagem pequena ou nenhuma |
| A4 | Imagem em duas dobras apenas, e pequena | `defeito` | 3 `<img>` no arquivo. `rodrigo-arsenal` a 356 × 445 px e `rodrigo-retrato` a 445 × 556 px, ou seja 8,5% e 12% da largura útil |
| A5 | A coluna direita do cabeçalho de dobra fica vazia | `defeito` | Em `#mecanismo`, a headline ocupa 50% da largura e sobram cerca de 700 × 300 px sem nada |
| A6 | A dobra `#percurso` desenha uma tabela onde cabe uma linha do tempo | `padrão` | 3 linhas de texto com coluna de numeração de 88 px praticamente vazia |
| A7 | O único CTA intermediário é uma faixa de 264 px que interrompe o ritmo sem ganhar nada | `padrão` | dobra 7, 264 px, uma frase e um botão |
| A8 | O gesto 02 (octógono-janela) só aparece como moldura de número | `padrão` | 3 octógonos em `#mecanismo`, todos com um número de 21 px dentro de uma caixa de 90 px — escala tímida |
| A9 | Sem framework compartilhado, cada canal vai desenhar o guarda-chuva de um jeito | `novo` | o kit resolve |
| A10 | O `.junta` estoura 52 px do contêiner em todo lugar | não é defeito | `scrollWidth` 156 contra `clientWidth` 104 é o próprio gesto de assinatura: o segundo filete deslocado 50%. O `overflow-x: clip` do `<html>` já contém |
| A11 | O hero tem `scrollWidth` 1.541 contra 1.440 | não é defeito | é o símbolo sangrando a borda, a quebra de grid única permitida pela regra 20 |
| A12 | Alvos de toque, contraste e overflow de página | limpo | zero alvo abaixo de 36 px · `docW` igual a `vw` nos dois tamanhos |

**O que a página acerta e não se mexe:** a headline do hero é o dado com fonte citada, e é a
decisão certa para um público inconsciente do próprio erro. A alternância papel / navy / tinta
está no ritmo do sistema. A dobra de investimento é a única marcada como clímax e é a única que
precisa ser. Não há garantia, não há depoimento, não há cifra de faturamento — as três travas do
projeto estão respeitadas.

## 1.2 As mudanças, em ordem

**01 · Dezesseis dobras viram doze.** *Por quê:* seis das dezesseis carregam menos de 500 px de
informação real e existem só como respiro entre blocos. Respiro se faz com espaço dentro da dobra,
não com dobra nova. Nenhuma seção que a oferta exige some — percurso, investimento, bônus, vagas,
FAQ e aplicação continuam todas, e a de vagas ganha peso em vez de perder.

**02 · O F9 entra no hero, à direita da headline.** *Por quê:* hoje a headline diz "cerca de 3 em
cada 10 adultos têm DTM" e o leitor precisa acreditar na palavra. Com as dez marcas e três
preenchidas, ele **vê** a proporção antes de terminar de ler. E resolve A5: a metade direita do
hero deixa de ser vazio.

**03 · A dobra do ponto cego absorve a dobra do paciente que peregrina.** *Por quê:* são o mesmo
argumento em dois tempos — o diagnóstico que ninguém fecha e a conta que não fecha. Juntas, com o
F1 ocupando a coluna direita, viram uma dobra de cerca de 1.000 px no lugar de 1.695 px de prosa.

**04 · A escada terapêutica deixa de ser um parágrafo e vira o F3.** *Por quê:* é o item 02 dos
três blocos de `#mecanismo`, hoje sete linhas de texto que descrevem degraus. Degrau se desenha.
O bloco 01 ganha a ilustração da ficha marcada e o bloco 03 continua em texto, porque é o único
dos três que é processo comercial e não geometria clínica.

**05 · A dobra do percurso perde a tabela e ganha o F4.** *Por quê:* uma formação de dez meses com
três etapas encadeadas e três viagens é uma linha do tempo, não uma tabela. O F4 já carrega as
datas, os intervalos de encontro e os quatro números de rodapé. A dobra cai de 1.668 px para cerca
de 780 px sem perder um dado sequer.

**06 · A foto do Rodrigo dobra de tamanho e sangra a borda esquerda.** *Por quê:* o retrato está a
445 px de largura numa página de 1.180 px de coluna. Numa peça cuja prova social hoje depende
inteiramente da autoridade dele — não há depoimento autorizado —, a foto é o ativo mais forte
disponível e está tratada como ilustração de apoio. Usar `retrato-urbano-jaqueta.jpg` a partir de
620 px de altura, encostando na borda esquerda, com o F8 na coluna direita.

**07 · As dobras de quem conduz e de números de carreira viram uma.** *Por quê:* o F8 já é o bloco
de números. Foto à esquerda, F8 à direita, a história do timing perdido embaixo, em coluna de 68
caracteres. De 1.633 px para cerca de 950 px.

**08 · O CTA intermediário sai da faixa de 264 px e vira botão no fim de duas dobras.** *Por quê:*
a faixa interrompe o ritmo e não é lida como convite, é lida como banner. Botão no fim da dobra do
mecanismo e no fim da dobra de quem conduz converte melhor e economiza uma dobra inteira.

**09 · Vagas e FAQ se fundem, e o número 8–12 fica gigante.** *Por quê:* a dobra de vagas hoje
explica a escassez real num parágrafo de seis linhas. A escassez é o argumento mais honesto da
oferta e está diagramada como nota de rodapé. Um "8–12" em Archivo 800 a 180 px, o parágrafo
reduzido a duas linhas ao lado, e o FAQ em acordeão logo abaixo.

**10 · A dobra de aplicação recebe o F7.** *Por quê:* o leitor que chega até ali precisa saber o
que acontece depois de clicar. Seis estações desenhadas respondem isso melhor do que a frase
"aplicar para uma conversa de avaliação de vaga", e o desenho já diz que não existe carrinho.

**11 · Uma zona de compressão por dobra.** *Por quê:* a densidade hoje é uniforme, e uniforme é
plano. Regra: cada dobra tem um elemento desproporcional — o número, a foto, o framework — e o
resto se contém. Duas dobras seguidas com o mesmo protagonista, não.

**12 · Alvo de altura.** 1440: **de 15.410 px para no máximo 11.000 px**. 390: **de 21.496 px para
no máximo 14.500 px**. Se passar disso, a última coisa a cortar é seção; a primeira é parágrafo
que o framework ao lado já explica.

### Ordem de dobras recomendada

| # | Dobra | Fundo | Vem de | Alvo 1440 |
|---|---|---|---|---|
| 01 | Hero · o dado | navy | dobra 1 | 780 px |
| 02 | O que é · ficha técnica | papel-2 | dobra 2 | 400 px |
| 03 | O ponto cego · o guarda-chuva e a conta que não fecha | papel | dobras 3 + 4 | 1.000 px |
| 04 | A virada · o Martelo Único e o arsenal em degraus | tinta | dobra 5 | 1.150 px |
| 05 | O percurso · dez meses | papel | dobra 6 | 780 px |
| 06 | Fit · para quem é | papel-2 | dobra 8 | 700 px |
| 07 | Quem conduz · o professor e os números | papel | dobras 9 + 10 | 950 px |
| 08 | O que está dentro · o stack | papel | dobra 11 | 780 px |
| 09 | Investimento · o clímax | navy | dobra 12 | 860 px |
| 10 | Bônus de fundador | papel-2 | dobra 13 | 640 px |
| 11 | O teto da turma e as perguntas | tinta | dobras 14 + 15 | 1.100 px |
| 12 | Aplicação · o próximo passo | papel-2 | dobra 16 | 900 px |

Dobra 7 do arquivo atual (a faixa navy de CTA) sai. Total previsto: cerca de 10.040 px mais o
cabeçalho.

## 1.3 O que entra em cada dobra

| Dobra | Framework | Foto ou ilustração |
|---|---|---|
| 01 Hero | **F9** dado de mercado, coluna direita, versão navy | — |
| 02 O que é | — | — |
| 03 O ponto cego | **F1** guarda-chuva, coluna direita, versão papel | — |
| 04 A virada | **F5** na abertura · **F3** escada no bloco 02 | `ficha-anamnese-marcada.png` no bloco 01 · `placa-e-dispositivo-retrato.jpg` no fecho |
| 05 O percurso | **F4** percurso, largura de coluna, versão papel | — |
| 06 Fit | — | — |
| 07 Quem conduz | **F8** números, coluna direita, versão papel | `retrato-urbano-jaqueta.jpg` sangrando a borda esquerda, a partir de 620 px de altura |
| 08 O que está dentro | — | `arsenal-bandeja-instrumentos.png` em faixa larga, texto sobre a área vazia da direita |
| 09 Investimento | — | — |
| 10 Bônus | — | `consultorio-cadeira.jpg` no bônus de shadowing |
| 11 Teto e perguntas | — | — |
| 12 Aplicação | **F7** fluxo, coluna direita, versão papel | — |

Cinco frameworks, duas fotos reais, duas ilustrações geradas. Contra as três imagens pequenas de
hoje.

## 1.4 O que não muda

A headline do hero e o dado que a sustenta. A ordem narrativa problema → mecanismo → percurso →
prova → oferta. A alternância de fundos. A dobra de investimento como único clímax. Os tokens, o
símbolo, os lockups e os dois gestos. A ausência de garantia, de depoimento e de cifra de
faturamento. Nenhuma seção que a oferta exige sai da página.

---

# PEÇA 2 · Apresentação comercial

`outputs/apresentacao-comercial-viver-de-dtm/index.html` · 18 lâminas · base 1920 · 4 fotos

## 2.1 Diagnóstico

| # | Achado | Etiqueta | Medida |
|---|---|---|---|
| B1 | **A lâmina 09 contradiz a oferta.** O rodapé diz "Duas imersões · oito dias no total" | `defeito` | A oferta e a página dizem 3 imersões em 8 dias. A linha do tempo da própria lâmina mostra Imersão 1, Imersão 2 e Formatura — a formatura **é** a terceira imersão. Linha 405 do arquivo |
| B2 | Nenhum conceito desenhado | `defeito` | 4 `<svg>` no deck, 3 dos quais são o símbolo. A linha do tempo da lâmina 09 é o único diagrama e é feita de quatro `<div>` quadrados |
| B3 | Lâminas de texto com o terço inferior vazio | `defeito` | Lâmina 05: as duas colunas terminam a 60% da altura, restam cerca de 250 px de faixa vazia em cada uma. Lâmina 09: cerca de 230 px entre o texto e o rodapé |
| B4 | Os marcos da linha do tempo são quadrados | `padrão` | O sistema tem um gesto de forma — o octógono-janela — e ele não está sendo usado onde mais caberia |
| B5 | O retrato da capa está monocromado em navy | `padrão` | Achata a foto e aproxima do "azul dental" da lista de anti-referências. Um tratamento de duotone papel/navy preserva a pele |
| B6 | 18 lâminas para uma conversa 1:1 de avaliação de vaga | `padrão` | Não é defeito, é escolha. Mas 4 delas são de transição e podem virar 2 |
| B7 | Zero alvo de toque pequeno, zero overflow de página | limpo | — |

**O que o deck acerta:** a capa é forte, o lockup principal está no tamanho certo, a numeração
`01 · 18` em mono é exatamente o tom de documento que o DNA pede, e o split navy / papel da
lâmina 05 é a melhor composição das três peças.

## 2.2 As mudanças, em ordem

**01 · Corrigir "duas imersões" para "três imersões" na lâmina 09.** *Por quê:* é erro de fato,
não de estilo. Sai antes de qualquer outra coisa, inclusive antes de o deck ser usado uma vez.

**02 · Trocar a linha do tempo caseira da lâmina 09 pelo F4.** *Por quê:* o F4 já é essa linha do
tempo, com as três etapas, os intervalos de encontro, as três imersões e os quatro números de
rodapé — e já está certo. Usar a versão papel, girada para o formato 16:9 pela composição do
slide: o F4 na metade esquerda, os números grandes na direita.

**03 · Marcos em octógono, não em quadrado.** *Por quê:* o F4 já resolve, e a regra vale para
qualquer marco novo em qualquer lâmina.

**04 · Três lâminas de texto ganham framework.** *Por quê:* são as três que hoje pedem que o
Rodrigo explique em voz o que a lâmina deveria mostrar. A do problema recebe o **F1**, a do
mecanismo recebe o **F2** (é a lâmina em que ele desenharia no papel de qualquer jeito) e a do
vilão recebe o **F5**.

**05 · O terço inferior das lâminas de texto passa a carregar peso.** *Por quê:* faixa vazia de
250 px numa lâmina 16:9 projetada é um quarto da tela. Opções, nesta ordem: a legenda de fonte em
mono, um filete de junta em escala grande, ou o framework subindo para ocupar a altura.

**06 · Duotone papel/navy na capa, no lugar do monocromático navy.** *Por quê:* preserva a
gradação da pele e afasta a peça do azul-e-branco dental que o DNA lista como anti-referência.

**07 · A textura do caderno de atas entra como capa alternativa.** *Por quê:* para uso em
congresso ou apresentação institucional, onde a capa com o rosto dele não é o melhor abre. Texto
sobre a área navy da esquerda.

**08 · Pisos de projeção conferidos lâmina a lâmina.** *Por quê:* a regra R9 do contrato manda 32
pt em título e 28 pt em corpo. Numa base de 1920, isso é cerca de 42 px e 37 px. Todo corpo abaixo
disso é conteúdo a cortar, não fonte a encolher.

## 2.3 O que entra em cada lâmina

| Lâmina | Entra |
|---|---|
| 01 capa | Duotone papel/navy em `s01-rodrigo-retrato.jpg` · alternativa institucional com `textura-caderno-de-atas.png` |
| 03 e 04 o problema | **F9**, versão navy, um bloco por lâmina |
| lâmina do guarda-chuva | **F1**, versão papel |
| lâmina do mecanismo | **F2** dois tripés, versão papel — é a lâmina em que ele desenha à mão |
| lâmina do vilão | **F5**, versão navy |
| lâmina do método | **F3** escada, versão papel |
| 09 percurso | **F4**, versão papel, substituindo a linha do tempo atual **e o rodapé errado** |
| lâmina de autoridade | **F8** ao lado de `s11-rodrigo-ensinando.jpg` |
| lâmina do próximo passo | **F7**, versão navy |
| fecho | `arsenal-bandeja-instrumentos.png` em sangria |

## 2.4 O que não muda

O formato de 18 lâminas, a navegação por teclado, a base 1920, a numeração em mono no rodapé, o
split navy/papel da lâmina 05, e o fato de ser um deck de conversa 1:1 e não de webinar.

---

# PEÇA 3 · Módulo 3 · Conteúdos & Criativos

`outputs/brandbook-academia-dtm/ds-conteudos-criativos.html` · 9 seções · 96 KB

Auditoria só de design e organização. O direcionamento editorial está sendo produzido em paralelo
pelo @social-media e entra num passe seguinte.

## 3.1 Diagnóstico

| # | Achado | Etiqueta | Medida |
|---|---|---|---|
| C1 | As tarjas de bloqueio de foto ficaram desatualizadas | `defeito` | O módulo foi fechado em 20/08. As dez fotos do Rodrigo chegaram em 27/08 e estão em `assets/fotos-rodrigo/`. As maquetes P2 e P4 ainda dizem "retrato do Dr. Rodrigo · arquivo em alta pendente" |
| C2 | Nenhum framework para o produtor de carrossel reaproveitar | `defeito` | 30 `<svg>` no arquivo, 29 dos quais são o símbolo. Zero `<path>` |
| C3 | A grade de stories S5 a S9 quebra na última linha | `defeito` | S9 fica sozinho numa linha de 4 colunas, com cerca de 1.080 × 300 px de faixa vazia à direita |
| C4 | Maquete de feed estourando o card em 390 | `defeito` | `.art--feed` com `scrollWidth` 133 contra `clientWidth` 115 |
| C5 | O `main.wrap` estoura o contêiner em 1440 | `defeito` | `scrollWidth` 1.310 contra `clientWidth` 1.180 |
| C6 | Links de rodapé com 15 px de altura | `padrão` | Abaixo dos 36 px de alvo de toque. **Vem do §7 do contrato e vale para os quatro módulos** — não corrigir só aqui |
| C7 | Página com 19.862 px em 1440 e 40.288 px em 390 | `padrão` | O módulo 3 é o mais visual dos quatro; densidade acompanha assunto (divergência 3 do §13.2). Não é para encurtar |
| C8 | As pranchas com tarja de bloqueio, a proporção de cor do recorte social e a régua do story | acerto | É o melhor trabalho de sistema das três peças. Não mexer |

## 3.2 As mudanças, em ordem

**01 · Trocar as tarjas de bloqueio de foto por foto real.** *Por quê:* o bloqueio existia porque
o arquivo em alta não tinha chegado. Chegou. As maquetes P2 e P4 passam a usar
`retrato-urbano-jaqueta.jpg` e `consultorio-cadeira.jpg` de verdade, e a tarja continua reservada
para o que ainda está travado — depoimento, número financeiro, grade oficial.

**02 · Abrir uma seção nova de frameworks, apontando para o kit.** *Por quê:* o produtor de
carrossel precisa saber que existem nove desenhos prontos e qual entra em qual linha editorial.
A seção não repete o kit: mostra as miniaturas, diz qual framework serve a qual linha e manda ler
`kit-frameworks/index.html`.

**03 · Fechar a grade de stories em 3 colunas.** *Por quê:* com 5 peças, três colunas fecham em
duas linhas cheias mais uma de duas — melhor do que quatro colunas com uma órfã.

**04 · Corrigir o estouro de `.art--feed` em 390 e de `main.wrap` em 1440.** *Por quê:* são dois
defeitos medidos, de correção pontual.

**05 · O F6 entra na seção de sistema, como referência de planejamento.** *Por quê:* o mix
editorial das duas fases é decisão que o módulo 3 aplica sem nunca mostrar. Mostrar economiza uma
reunião.

## 3.3 O que não muda

A prancha como formato. A régua do story. A proporção de cor do recorte social (papel, navy,
tinta, fluor, com cobalto e menta fora do feed). A densidade e a extensão da página. A tarja de
bloqueio como componente — ela continua, muda só o que ela está bloqueando.

---

## 4 · Pendências que não são minhas

Nenhuma delas trava o kit. Todas travam alguma peça específica, e nenhuma se resolve por decisão
de direção de arte.

| # | Pendência | Trava | Quem decide |
|---|---|---|---|
| P1 | Os nomes dos dez diagnósticos e a distribuição deles entre os três grupos | o detalhamento do F1 · hoje ele mostra dez marcas sem nomear | Rodrigo |
| P2 | A marcação "capacita × só apresenta" em cada degrau das três escadas | o detalhamento do F3 · hoje o degrau 03 diz só "indica e encaminha" | Rodrigo |
| P3 | As quatro perguntas de triagem do formulário de aplicação | a estação 03 do F7 · o instrumento existe em `outputs/devolutivas/`, o formulário não | Maiara e @automation-engineer |
| P4 | O nome "o Martelo Único" para o vilão | o F5 e toda a copy que usa o nome · item D2 da auditoria de procedência do mapa de copy | Rodrigo |
| P5 | Autorização de uso dos depoimentos gravados sob a marca Instituto Ária | o bloco de prova social da página, a lâmina comercial de prova e o formato 09 de feed | Rodrigo |
| P6 | Modelo de garantia | nenhuma peça pode mencionar garantia até fechar | Maiara, com contabilidade e jurídico |
| P7 | A diferença entre o faturamento anualizado apurado da clínica e a cifra citada em call | qualquer número financeiro em peça pública · por isso o F8 não tem cifra | Rodrigo |
| P8 | Consentimento assinado da paciente de `atendimento-ultrassom.jpg` | a única foto boa de procedimento em andamento continua proibida de publicar | Rodrigo |
| P9 | Fonte do lockup Viver de DTM (aberta desde 02/08) | capa de encontro e material de venda da formação | Rodrigo |
| P10 | Alvo de toque de 15 px nos links de rodapé, herdado do §7 do contrato | vale nos quatro módulos e no kit · corrigir num só cria divergência | @brand-director, num passe de contrato v1.1 |

---

## 5 · A régua, para quem for produzir

Antes de entregar qualquer uma das três peças reformadas, as dez perguntas do craft. Abaixo de
8 acertos, com os itens 1, 3 e 10 obrigatórios, volta para a prancheta antes do guard.

1. A peça tem tese nomeável, e alguém do nicho reconheceria o projeto com o logo tapado?
2. Existe **um** elemento em escala dramática por dobra ou lâmina, com contenção no resto?
3. O fluor aparece pouco e no ponto de maior importância?
4. Algum neutro é `#000` ou `#FFF` puro em área grande?
5. O display tem salto de pelo menos 3× para o nível seguinte?
6. A junta ou o octógono estão presentes?
7. A peça tem matéria — grão, luz com direção, sombra navy?
8. O olho tem caminho traçável da âncora até o botão?
9. Existe uma quebra de grid, e só uma?
10. Ao lado de três peças de concorrente, ela vence ou some?

---

Direção de arte Inception · @brand-director · 03/09/2026
