# CONTRATO · Academia DTM · Design System v1

> **Fonte única.** Este arquivo é o contrato técnico entre a fase 1 (brandbook, fechada) e os três módulos de aplicação da fase 2. Tudo aqui é para **copiar e colar**, não para reinterpretar.
> **Fase 1:** `index.html` (Brandbook), fechada em 20/08/2026.
> **Fase 2:** `ds-paginas.html` · `ds-conteudos-criativos.html` · `ds-apresentacoes.html`.
> Quem precisar divergir de qualquer regra deste arquivo volta ao @brand-director **antes** de produzir. Divergência decidida sozinha volta para refazer.

---

## 0 · Como cada módulo abre o arquivo

Todos os quatro HTML são **autocontidos**. Isso significa:

- SVG inline e CSS inline no próprio arquivo.
- Zero dependência externa além do Google Fonts.
- Sem biblioteca de terceiros, sem CDN e sem imagem remota.
- Responsivo obrigatório. A Maiara e o Rodrigo abrem no computador e no celular.

Ordem de montagem de qualquer página do sistema:

```
<head> → link do Google Fonts → bloco <style> começando pelo :root do §2
<body> → bloco <svg> do símbolo (§3) → <nav> (§6) → conteúdo → <footer> (§7)
```

---

## 1 · Google Fonts · o bloco exato

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,300..900&family=Hanken+Grotesk:wght@300..700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Três famílias, três funções exclusivas:

- **Archivo** no display.
- **Hanken Grotesk** no texto.
- **Space Mono** em rótulo e dado.

O eixo `wdth` do Archivo está incluído porque a versão expandida é permitida em rótulo curto de capa. Em texto corrido, nunca.

---

## 2 · Tokens · o bloco `:root` completo

Nomes definitivos. Os três módulos usam **exatamente** estes nomes; token novo só com aval do @brand-director.

```css
:root{
  /* cor · base */
  --navy:#101C46;
  --navy-alto:#182559;
  --tinta:#0B0F1A;
  --papel:#F4F3EC;
  --papel-2:#E7E5D8;
  /* cor · sinal */
  --fluor:#CDF23F;
  --cobalto:#2C4BFF;
  --menta:#12D9A0;
  /* cor · revisão · NÃO é cor da marca. Só marca o que é proibido, dentro
     deste sistema de documentos. Nunca em peça que a Academia publica. */
  --erro:#B3261E;
  /* cor · derivadas */
  --papel-72:rgba(244,243,236,.72);
  --papel-45:rgba(244,243,236,.45);
  --tinta-70:rgba(11,15,26,.70);
  --tinta-45:rgba(11,15,26,.45);
  --linha-clara:rgba(244,243,236,.14);
  --linha-escura:rgba(11,15,26,.13);
  /* tipo */
  --display:"Archivo",system-ui,sans-serif;
  --corpo:"Hanken Grotesk",-apple-system,BlinkMacSystemFont,sans-serif;
  --mono:"Space Mono",ui-monospace,SFMono-Regular,monospace;
  /* escala tipográfica */
  --t-hero:clamp(44px,7.4vw,88px);
  --t-h1:clamp(32px,4.8vw,58px);
  --t-h2:clamp(24px,3.2vw,38px);
  --t-h3:21px;
  --t-corpo:17px;
  --t-corpo-s:15px;
  --t-legenda:13px;
  --t-rotulo:11px;
  /* espaço · base 4 */
  --e-1:4px; --e-2:8px; --e-3:12px; --e-4:16px; --e-5:24px;
  --e-6:32px; --e-7:48px; --e-8:64px; --e-9:96px; --e-10:128px;
  /* raio */
  --r-0:0; --r-1:3px; --r-2:6px; --r-3:12px; --r-pill:999px;
  /* sombra · sempre navy, nunca preto */
  --sombra-1:0 1px 2px rgba(16,28,70,.07);
  --sombra-2:0 14px 36px -14px rgba(16,28,70,.24);
  /* movimento */
  --d-micro:180ms; --d-base:240ms; --d-reveal:520ms;
  --ease:cubic-bezier(.22,1,.36,1);
  /* medida */
  --largura:1180px;
  --largura-texto:68ch;
}
```

### Base da página (obrigatória em todos os módulos)

```css
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:76px;overflow-x:clip}
body{
  background:var(--papel);color:var(--tinta);
  font-family:var(--corpo);font-size:var(--t-corpo);line-height:1.62;
  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
  overflow-x:clip;
}
/* grão · a matéria do sistema. Sem ele a peça parece renderizada. */
body::after{
  content:"";position:fixed;inset:0;pointer-events:none;z-index:200;opacity:.042;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E");
}
.wrap{max-width:var(--largura);margin:0 auto;padding:0 var(--e-6)}
@media(max-width:640px){.wrap{padding:0 20px}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
```

---

## 3 · O símbolo · SVG inline exato

Cola uma vez, logo depois de abrir o `<body>`. Depois disso, todo uso é `<use href="#trama"/>`. **A geometria está congelada: nenhum número abaixo muda.**

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="trama" viewBox="0 0 200 200" fill="none">
    <line x1="59.74" y1="28.53" x2="116.58" y2="28.53" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
    <line x1="122.07" y1="21.00" x2="162.26" y2="61.19" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
    <line x1="171.47" y1="59.74" x2="171.47" y2="116.58" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
    <line x1="179.00" y1="122.07" x2="138.81" y2="162.26" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
    <line x1="140.26" y1="171.47" x2="83.42" y2="171.47" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
    <line x1="77.93" y1="179.00" x2="37.74" y2="138.81" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
    <line x1="28.53" y1="140.26" x2="28.53" y2="83.42" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
    <line x1="21.00" y1="77.93" x2="61.19" y2="37.74" stroke="currentColor" stroke-width="23.94" stroke-linecap="round"/>
  </symbol>
</svg>
```

O símbolo herda `currentColor`. Para trocar a cor, troque a cor do container. Nunca edite o SVG.

---

## 4 · Lockups · CSS + markup

O tamanho do lockup é controlado por **uma coisa só**. É o `font-size` do container `.lk`, que equivale à altura do símbolo. Todo o resto é em `em`.

### 4.1 · CSS (os dois lockups, cola inteiro)

```css
.lk{display:inline-flex;align-items:center;color:var(--navy)}
.lk .sym{width:1em;height:1em;flex:none}
.lk .rule{width:.028em;min-width:1px;background:currentColor;opacity:.32;flex:none}
.lk .col{display:flex;flex-direction:column;font-family:var(--display);
  text-transform:uppercase;line-height:1;white-space:nowrap}
.lk .ac{font-weight:400;font-size:.225em;letter-spacing:.22em}
.lk .dtm{font-weight:800;font-size:.6875em;letter-spacing:-.04em}
.lk--principal .rule{height:.90em;margin:0 .325em}

.lk--hz{align-items:center}
.lk--hz .rule{height:.62em;margin-left:.30em;margin-right:.26em}
.lk--hz .row{display:flex;align-items:baseline;font-family:var(--display);
  text-transform:uppercase;white-space:nowrap;line-height:1}
.lk--hz .ac-h{font-weight:500;font-size:.44em;letter-spacing:.18em}
.lk--hz .dtm-h{font-weight:800;font-size:.44em;letter-spacing:-.035em;margin-left:.26em}

.lk--neg{color:var(--papel)}
.lk--neg .sym{color:var(--fluor)}
.lk--mono-papel{color:var(--papel)}
.lk--mono-papel .sym{color:var(--papel)}
.lk--mono-navy{color:var(--navy)}
.lk--mono-navy .sym{color:var(--navy)}

.selo{display:grid;place-items:center;background:var(--navy);border-radius:var(--r-pill)}
.selo svg{color:var(--fluor);width:62%;height:62%}
.selo--invertido{background:var(--fluor)}
.selo--invertido svg{color:var(--navy)}
.selo--papel{background:var(--papel-2)}
.selo--papel svg{color:var(--navy)}
.selo--quadrado{border-radius:var(--r-1)}
```

### 4.2 · Principal (V05) · markup

Escolha do Rodrigo, nas palavras dele:

> *"prefiri a V05, acho ela mais simétrica"*

Proporção de **3,26 : 1**. Piso de **símbolo 56 px** em tela e 20 mm em impresso.

```html
<span class="lk lk--principal" style="font-size:88px">
  <svg class="sym" viewBox="0 0 200 200" aria-hidden="true"><use href="#trama"/></svg>
  <span class="rule"></span>
  <span class="col"><span class="ac">Academia</span><span class="dtm">DTM</span></span>
</span>
```

Negativo (fundo navy ou tinta): acrescente `lk--neg`. Monocromático: `lk--mono-navy` ou `lk--mono-papel`.

### 4.3 · Horizontal · markup

Proporção de **5,65 : 1**. Piso de **símbolo 24 px** em tela e 9 mm em impresso. É a versão que assina cabeçalho, e-mail e rodapé.

```html
<span class="lk lk--hz" style="font-size:30px">
  <svg class="sym" viewBox="0 0 200 200" aria-hidden="true"><use href="#trama"/></svg>
  <span class="rule"></span>
  <span class="row"><span class="ac-h">Academia</span><span class="dtm-h">DTM</span></span>
</span>
```

### 4.4 · Selo · markup

```html
<span class="selo" style="width:96px;height:96px">
  <svg viewBox="0 0 200 200" aria-hidden="true"><use href="#trama"/></svg>
</span>
```

Símbolo a 62% do lado, com mínimo de **32 px** de diâmetro. Para favicon (quadrado, sem recorte circular) use `selo--quadrado` com o símbolo a 75%.

### 4.5 · Qual versão em qual lugar (resumo operacional)

| Versão | Usa em | Não usa em |
|---|---|---|
| **Principal** | capa de slide e de material, hero de página, certificado, criativo de feed, banner de congresso, capa de proposta | cabeçalho fixo, assinatura de e-mail, rodapé, qualquer faixa com símbolo abaixo de 56 px |
| **Horizontal** | cabeçalho de site e de área de membros, assinatura de e-mail, rodapé de documento e de certificado, topo de slide interno, crachá, legenda fixa de vídeo | capa, aplicação quadrada, avatar |
| **Selo** | avatar, favicon, carimbo de certificado, marca d'água, adesivo, marcador de canto de slide | primeira aparição da marca para quem não a conhece, capa, assinatura de e-mail |

---

## 5 · Gestos de assinatura · cola e usa

Os dois nascem do símbolo. **Toda peça do sistema carrega pelo menos um.**

```css
/* GESTO 01 · A JUNTA: abre seção, capítulo, capa */
.junta{display:block;width:104px;height:2px;position:relative;background:var(--navy);margin-bottom:var(--e-4)}
.junta::after{content:"";position:absolute;left:52px;top:5px;width:104px;height:2px;background:var(--fluor)}
.junta--claro{background:var(--papel-45)}
.junta--claro::after{background:var(--fluor)}

/* GESTO 02 · O OCTÓGONO-JANELA: máscara de foto, número e ícone. Sempre em caixa quadrada. */
.octo-janela{clip-path:polygon(29.3% 0,70.7% 0,100% 29.3%,100% 70.7%,70.7% 100%,29.3% 100%,0 70.7%,0 29.3%)}
```

```html
<span class="junta"></span>
<div class="octo-janela" style="aspect-ratio:1"><!-- foto, número ou ícone --></div>
```

---

## 6 · Cabeçalho de navegação · compartilhado pelas 4 páginas

Cola idêntico nos quatro arquivos, mudando **apenas** qual link recebe `aria-current="page"`.

```css
.nav{position:sticky;top:0;z-index:100;background:var(--navy);border-bottom:1px solid var(--linha-clara)}
.nav-in{max-width:var(--largura);margin:0 auto;padding:0 var(--e-6);
  display:flex;align-items:center;justify-content:space-between;gap:var(--e-5);min-height:64px;flex-wrap:wrap}
.nav-links{display:flex;gap:var(--e-5);list-style:none;flex-wrap:wrap}
.nav-links a{font-family:var(--mono);font-size:var(--t-rotulo);font-weight:700;letter-spacing:.13em;
  text-transform:uppercase;color:var(--papel-45);text-decoration:none;padding:20px 0;display:block;
  border-bottom:2px solid transparent;transition:color var(--d-base) var(--ease),border-color var(--d-base) var(--ease)}
.nav-links a:hover{color:var(--papel)}
.nav-links a[aria-current="page"]{color:var(--fluor);border-bottom-color:var(--fluor)}
@media(max-width:640px){.nav-in{padding:12px 20px 4px;min-height:0}
  .nav-links{gap:16px}.nav-links a{padding:10px 0}}
```

```html
<nav class="nav">
  <div class="nav-in">
    <a href="index.html" style="text-decoration:none">
      <span class="lk lk--hz lk--neg" style="font-size:26px">
        <svg class="sym" viewBox="0 0 200 200" aria-hidden="true"><use href="#trama"/></svg>
        <span class="rule"></span>
        <span class="row"><span class="ac-h">Academia</span><span class="dtm-h">DTM</span></span>
      </span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Brandbook</a></li>
      <li><a href="ds-paginas.html">Páginas</a></li>
      <li><a href="ds-conteudos-criativos.html">Conteúdos &amp; Criativos</a></li>
      <li><a href="ds-apresentacoes.html">Apresentações</a></li>
    </ul>
  </div>
</nav>
```

---

## 7 · Rodapé · compartilhado pelas 4 páginas

Muda **apenas** a terceira linha da assinatura (a que descreve a página).

```css
.rodape{background:var(--tinta);color:var(--papel-45);padding:var(--e-8) 0 var(--e-7);margin-top:var(--e-9)}
.rodape-in{display:flex;justify-content:space-between;gap:var(--e-6);flex-wrap:wrap;align-items:flex-end}
.rodape-nav{display:flex;gap:var(--e-5);flex-wrap:wrap;list-style:none}
.rodape a{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;
  color:var(--papel-45);text-decoration:none;transition:color var(--d-base) var(--ease)}
.rodape a:hover{color:var(--fluor)}
.rodape-assin{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;
  line-height:1.9}
.rodape-assin b{color:var(--papel-72);font-weight:700}
```

```html
<footer class="rodape">
  <div class="wrap">
    <div class="rodape-in">
      <div>
        <span class="lk lk--hz lk--neg" style="font-size:30px">
          <svg class="sym" viewBox="0 0 200 200" aria-hidden="true"><use href="#trama"/></svg>
          <span class="rule"></span>
          <span class="row"><span class="ac-h">Academia</span><span class="dtm-h">DTM</span></span>
        </span>
        <ul class="rodape-nav" style="margin-top:var(--e-5)">
          <li><a href="index.html">Brandbook</a></li>
          <li><a href="ds-paginas.html">Páginas</a></li>
          <li><a href="ds-conteudos-criativos.html">Conteúdos &amp; Criativos</a></li>
          <li><a href="ds-apresentacoes.html">Apresentações</a></li>
        </ul>
      </div>
      <div class="rodape-assin">
        <b>Academia DTM</b> &middot; Dr. Rodrigo Wendel<br>
        Brandbook &amp; Design System &middot; v1 &middot; 20/08/2026<br>
        <!-- trocar só esta linha por página -->
        Direção de arte <b>Inception</b>
      </div>
    </div>
  </div>
</footer>
```

---

## 8 · Componentes de base já validados

Cola o que precisar; **não invente variação de card, de tabela ou de rótulo** sem falar com o @brand-director.

```css
/* rótulo de seção · o mono em caixa alta com filete */
.rotulo{font-family:var(--mono);font-size:var(--t-rotulo);font-weight:700;letter-spacing:.16em;
  text-transform:uppercase;color:var(--fluor);display:flex;align-items:center;gap:var(--e-3);flex-wrap:wrap}
.rotulo i{display:block;width:34px;height:2px;background:var(--fluor);font-style:normal;flex:none}

/* cabeçalho de seção · número de artigo à esquerda */
.sec{padding:var(--e-9) 0;border-top:1px solid var(--linha-escura)}
.sec-h{display:grid;grid-template-columns:88px 1fr;gap:var(--e-6);align-items:start;margin-bottom:var(--e-7)}
.sec-n{font-family:var(--mono);font-size:var(--t-rotulo);font-weight:700;letter-spacing:.1em;
  color:var(--tinta-45);padding-top:10px}
.sec-h h2{font-family:var(--display);font-weight:800;font-size:var(--t-h2);letter-spacing:-.035em;
  line-height:1.02;max-width:20ch}
@media(max-width:720px){.sec-h{grid-template-columns:1fr;gap:var(--e-3)}.sec-n{padding-top:0}}

/* card e painel */
.painel{background:var(--papel-2);border:1px solid var(--linha-escura);border-radius:var(--r-1);padding:var(--e-6)}
.painel--claro{background:#FBFAF4}

/* tabela · o formato de documento do sistema */
.tab{width:100%;border-collapse:collapse;font-size:var(--t-corpo-s)}
.tab th,.tab td{text-align:left;padding:14px 16px;border-bottom:1px solid var(--linha-escura);vertical-align:top}
.tab th{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
  color:var(--tinta-45);border-bottom-width:2px;border-bottom-color:var(--navy)}
.tab .num{font-family:var(--mono);font-size:12px;font-variant-numeric:tabular-nums;white-space:nowrap}
.tab-rolo{overflow-x:auto;-webkit-overflow-scrolling:touch}

/* seção escura de página inteira, dentro de um container centralizado */
.sec--escuro{background:var(--navy);color:var(--papel);border-top:0;
  margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);width:100vw;padding:var(--e-9) 0}
```

---

## 9 · Regras duras · o que nenhum módulo pode violar

### 9.1 · Cor

1. **Proporção:** papel ~55% · navy ~30% · cobalto ~7% · fluor ~5% · menta ~3%. *Por quê: um órgão publica em papel e assina em tinta escura.*
2. **Uma peça, um lugar em fluor.** Fluor é rótulo, número-chave, filete de assinatura ou símbolo no negativo. **Nunca fundo de área grande, nunca texto sobre papel** (contraste 1,15:1).
3. **O que nunca é fluor:** texto corrido · botão inteiro · fundo de card · fundo de slide · cor de ícone sobre claro · cor do símbolo sobre papel.
4. **Menta é estado, cobalto é ação.** Menta sobre papel reprova em contraste (1,65:1): só como preenchimento de barra com rótulo escuro por cima. Cobalto sobre navy reprova (2,79:1): as duas nunca se encostam.
5. **Sem `#000` e sem `#FFF`** em área grande. Preto é `#0B0F1A`, branco é `#F4F3EC`.
6. **Sem degradê** fora do par `#101C46 → #182559`, e mesmo esse só em fundo.
7. **Sombra é navy translúcida**, só as duas do token. Nunca sombra preta, nunca brilho, nunca contorno.

> **Tinta de revisão — `--erro:#B3261E` — fora da paleta da marca.** Ratificada pelo @brand-director em 20/08/2026 e deliberadamente **não numerada**: ela não é a sexta voz da Academia, é a caneta vermelha que marca, dentro destes quatro documentos, o que é proibido. Já existia sem nome no módulo 1 (selo "não" das proibições e as três linhas reprovadas da tabela de contraste) e no módulo 4 (selo "reprova" dos anti-masters); agora tem nome, para os módulos pararem de rederivá-la cada um por conta.
> **Onde pode:** traço, texto de rótulo e marcação de linha reprovada em tabela (faixa de no máximo 6%), **sempre dentro deste sistema de documentos**.
> **Onde não pode, e é o que importa:** em qualquer peça que a Academia publica — página, post, story, criativo, lâmina, e-mail, certificado. Um caderno de atas tem caneta vermelha de revisor; não tem alerta vermelho de sistema operacional.
> **Consequência prática:** **erro de formulário não usa vermelho.** Resolve-se por peso (rótulo e aviso em tinta cheia), filete (barra navy de 3 px colada à esquerda do campo), rótulo em Space Mono e posição (o aviso encostado no campo que falhou). É a solução canônica dos três módulos — mais acessível que cor, porque cor sozinha nunca foi indicador suficiente. O token `--erro-fundo`, proposto pelo módulo 2, foi **recusado**: área tingida de vermelho é a única coisa do conjunto que parece produto.

### 9.2 · Logo

8. **Piso de tamanho:** principal = símbolo 56 px · horizontal = símbolo 24 px · selo = 32 px · símbolo solto = 18 px.
9. **Área de proteção** de X = 0,5 × altura do símbolo nos quatro lados. Única exceção: 0,75X na lateral de cabeçalho de altura fixa.
10. **Com o símbolo nunca se faz:** esticar ou condensar · girar · trocar a cor para fora da paleta · mudar a distância até o texto · aplicar sombra · aplicar contorno · aplicar brilho · aplicar degradê · colocar dentro de caixa ou moldura · usar sobre foto ou padrão sem tarja navy de opacidade mínima 88%.
11. **O texto do logo não se reescreve.** É Archivo em caixa alta, com as duas palavras na ordem "ACADEMIA DTM". Nada de "Academia de DTM", versalete ou caixa mista.
12. **O símbolo solto não substitui a logo** em documento oficial, certificado, contrato ou peça de venda.

### 9.3 · Tipografia

13. **Uma família por função:** Archivo nunca vira texto corrido; Hanken nunca vira título; Space Mono nunca passa de uma linha.
14. **Salto mínimo de 3×** entre o nível de display e o seguinte. Hierarquia tímida reprova.
15. **Tracking** negativo em display grande (−0,038 a −0,042em) e positivo em caixa alta pequena (+0,14em). Número em comparação usa `font-variant-numeric: tabular-nums`.
16. **Linha de texto com no máximo 68 caracteres** (`--largura-texto`).
17. **Fontes banidas:** Inter · Roboto · Open Sans · Montserrat · Poppins · Lato. Em qualquer nível, inclusive em slide e documento.

### 9.4 · Composição e movimento

18. **Escala de espaço em base 4** (4 → 128). Nenhum valor fora da lista.
19. **Raio:** 3 px em card, campo e botão; 6 px só em bloco grande de imagem; **nunca 12 px ou mais**. Círculo só no selo.
20. **Uma quebra de grid por peça:** o símbolo que sangra a borda. Duas viram bagunça, nenhuma vira modelo pronto.
21. **Grão obrigatório** em toda página, via `body::after` com opacidade de 3,5% a 5%.
22. **Curva única** `cubic-bezier(.22,1,.36,1)`; 180 ms micro, 240 ms estado, 520 ms entrada de bloco.
23. **Nunca animam:** o logo · o símbolo · qualquer número que seja dado clínico. Nada pulsa, nada flutua e nada faz *parallax*.

### 9.5 · Conteúdo e voz

24. **Zero emoji** em peça institucional. Vale para post · e-mail · slide · página · criativo.
25. **Zero ícone genérico, zero foto de banco de imagem, zero seta desenhada, zero selo de desconto, zero contador.**
26. **Nada de promessa de renda**, superlativo sem medida, nome de concorrente, urgência fabricada ou depoimento sem autorização.
27. **Número em peça pública só se validado.** Enquanto a conferência com a clínica não fechar, não entra número financeiro.
28. **Acentuação PT-BR impecável** é regra de marca, não detalhe de revisão.
29. **Nunca inventar** credencial · número de conselho · dado de clínica · depoimento · nome de método do Rodrigo. Registro profissional (CRM/CRP) não aparece em material público.

### 9.6 · Arquitetura de marca

30. **Material institucional:** Academia DTM assina sozinha. **Material de venda da formação:** Viver de DTM em destaque, com a Academia como endosso: a linha "uma formação da" + lockup horizontal da mãe a **no máximo 60% da altura** do lockup da formação.
31. **Nunca dois logos do mesmo tamanho lado a lado**, e nunca um lockup único misturando as duas marcas.
32. **O lockup da formação Viver de DTM não é Archivo.** Pendência aberta desde 02/08, decisão do Rodrigo. Enquanto não sair, use os arquivos atuais em `assets/marca-viver-de-dtm/` e **não redesenhe nada**.

---

## 10 · DESIGN DNA · cola no topo de qualquer delegação

```
DESIGN DNA · Academia DTM · v1 · 20/08/2026

TESE ESTÉTICA: o caderno de atas de uma sociedade científica aplicado a uma escola de dor
orofacial, atravessado por uma única fita fluorescente de marcação de exame. Órgão que
publica, não curso que anuncia.

PALETA (papel de cada cor):
  dominante  papel #F4F3EC · 55% · papel creme de anuário científico
  âncora     navy  #101C46 · 30% · esmalte de placa comemorativa
  dissonante cobalto #2C4BFF · 7% · tinta de esferográfica · 1 uso por peça (ação/link)
  acento     fluor #CDF23F · 5% · fita de marcação de exame · nunca fundo, nunca sobre papel
  funcional  menta #12D9A0 · 3% · verde de reagente · só estado positivo
  texto      tinta #0B0F1A · preto azulado · #000 e #FFF banidos em área grande
  revisão    erro  #B3261E · caneta vermelha de revisor · NÃO é cor da marca: só marca o
             proibido dentro dos documentos do sistema, nunca em peça publicada

TIPOGRAFIA: display Archivo (grotesca de arquivo suíço, 700/800) · texto Hanken Grotesk 400 ·
detalhe Space Mono 700 caixa alta +0,14em · salto mínimo de 3x · tracking negativo no display
grande, positivo na caixa alta pequena.

COMPOSIÇÃO: grid de 12 colunas, medianiz 24, largura máxima 1180 · escala de espaço base 4 ·
numeração de seção em mono à esquerda, como artigo de estatuto · um elemento desproporcional
por peça · quebra de grid permitida: o símbolo que sangra a borda, uma vez por peça.

MATÉRIA: grão fixo 3,5–5% na página inteira · borda de 1px como padrão, sombra como exceção ·
sombra sempre navy translúcida · sem degradê fora do par navy → navy-alto.

GESTO DE ASSINATURA:
  01 · A JUNTA: dois filetes, o segundo deslocado 50% do comprimento e 5px abaixo; primeiro
       navy, segundo fluor. Abre toda seção.
  02 · O OCTÓGONO-JANELA: clip-path octogonal (29,3% / 70,7%) em caixa quadrada.

MOTION: cubic-bezier(.22,1,.36,1) · 180ms micro · 240ms estado · 520ms entrada · nunca animam:
logo, símbolo e dado clínico.

ANTI-REFERÊNCIAS: dashboard de startup · lançamento de infoproduto · clínica odontológica
(azul-e-branco dental, dente estilizado, sorriso de banco de imagem).
```

---

## 11 · Procedência · o que cada módulo pode e não pode atribuir ao Rodrigo

Regra bloqueante do projeto: ele já corrigiu o squad uma vez por termos atribuído a ele algo que não era dele.

**Dele:**

- A rota Trama.
- A V05 como lockup principal, escolhida por ele com estas palavras. *"prefiri a V05, acho ela mais simétrica"*, seguidas da ressalva *"mas sem avaliar conceito, só a forma mesmo"*.
- O aceite do sistema de versões.
- Os cinco pedidos do áudio de 03/08.
- A pergunta *"Não acha que podemos aumentar a letra do DTM?"*.
- Os nomes Academia DTM e Viver de DTM.
**Da Maiara:** o sistema de duas versões de lockup · o pedido da tabela de aplicação · o tom "órgão, não produto" · a leitura conceitual das referências.
**Nosso (Inception, derivado):** geometria do símbolo · construção da horizontal e do selo · pisos de redução · tese estética · gestos · tokens · escala · proporção de cor · arquitetura de marca · textos de regra.

**Qualquer conteúdo novo que um módulo criar e que soe como fala, número ou método do Rodrigo entra marcado como nosso** até ele validar.

---

## 12 · Pendências herdadas (não resolver sozinho)

| # | Pendência | Quem decide |
|---|---|---|
| 01 | Fonte do lockup Viver de DTM (não é Archivo). Redesenhar em Archivo, ou manter como exceção | Rodrigo |
| 02 | Arquivo vetorial da logo antiga do Curso DTM | Rodrigo |
| 03 | Registro no INPI. Marca mista, ou dois pedidos separados | Rodrigo |
| 04 | Vetorização do wordmark em curvas para o pacote final | Inception, após aprovação |
| 05 | Pacote de arquivos finais (SVG, PNG, PDF das três versões) | Inception, após aprovação |
| 06 | Nome do método (duas rejeições): não trava nada, a marca que assina é Academia DTM | Rodrigo |

---

---

## 13 · Fechamento da v1 · o que já está decidido e não se rediscute

> Escrito pelo @brand-director em 20/08/2026, depois de ler os quatro arquivos lado a lado. **Serve para uma coisa: impedir que a v2 reabra o que a v1 já fechou.** Quem for produzir a v2 começa por aqui.

### 13.1 · Derivado pelos módulos e ratificado

| # | O que | Veredito | Onde vive |
|---|---|---|---|
| R1 | **`--erro:#B3261E`**, proposto pelo módulo 2 para erro de formulário | **Ratificado só como tinta de revisão** — marca o proibido dentro destes documentos, nunca em peça publicada. Já existia sem nome nos módulos 1 e 4 | §2 e o bloco destacado da §9.1 |
| R2 | **`--erro-fundo`** (área tingida de vermelho a 6%) | **Recusado.** Área tingida de alerta é a única coisa do conjunto que parece produto | removido do módulo 2 |
| R3 | **Erro de formulário sem cor** — peso no rótulo e no aviso, filete navy de 3 px colado à esquerda do campo, rótulo em Space Mono, aviso encostado no campo que falhou | **Canônico.** Vale nos três módulos e em qualquer formulário futuro | §9.1, bloco destacado · aplicado no módulo 2 § 03 |
| R4 | **Anel de foco muda de cor com o fundo:** cobalto sobre papel, fluor sobre navy e tinta | Ratificado. Vale em qualquer elemento clicável de qualquer módulo | módulo 2 § 03 |
| R5 | **Tarja de bloqueio é componente**, não improviso: filete tracejado, cobalto sobre papel e fluor sobre escuro. Toda peça que depende de liberação a usa em vez de inventar conteúdo | Ratificado. É o mecanismo que sustenta os três bloqueios do projeto | módulo 2 § 03 · módulo 3 § 07 |
| R6 | **A prancha** (etiqueta em cima, peça viva no meio, "usa em / não usa em" embaixo) como formato de apresentação de peça | Ratificado como formato comum dos módulos 2, 3 e 4 | módulos 2, 3 e 4 |
| R7 | **Proporção de cor do recorte social:** papel · navy · tinta · fluor, com cobalto e menta fora do feed | Ratificado como recorte, não como nova paleta. A proporção-mãe da §9.1 continua valendo no resto | módulo 3 § 05 |
| R8 | **Numeração de subseção em Space Mono à esquerda do título** | Ratificado e unificado nos quatro (era Archivo inline nos módulos 3 e 4). É a regra de numeração do DESIGN DNA | os quatro arquivos |
| R9 | **Pisos de projeção:** 32 pt em título e 28 pt em corpo de lâmina | Ratificado. É a regra do módulo 4 que mais muda o dia a dia — obriga a cortar conteúdo em vez de encolher fonte | módulo 4 § 00 |

### 13.2 · Divergências mantidas de propósito

Foram vistas, comparadas e **não são erro**. Não "corrigir" na v2.

1. **O módulo 2 não tem § 00.** Os módulos 1, 3 e 4 abrem com uma seção zero que declara a régua antes das peças. No módulo 2 a régua é a própria medida da página, e por isso ela vive dentro do § 01 (Anatomia). **§ 00 é opcional:** existe quando o módulo precisa de uma régua que não é o primeiro assunto.
2. **Lockup da capa maior no Brandbook** (símbolo em `clamp(64px,9vw,104px)`) do que nos três módulos (`clamp(60px,8.4vw,96px)`). É hierarquia de documento: o Brandbook é o pai, os três são módulos dele.
3. **Densidade diferente entre módulos.** O 2 é o mais denso (13 blocos com prancha por bloco), o 4 é o mais longo (18 masters + 6 anti-masters), o 3 é o mais visual. A densidade acompanha o assunto, não uma cota de página.
4. **O módulo 4 usa `--px` e o 3 usa `--u`** como unidade de escala das maquetes (lâmina 16:9 e canvas social). São duas maquetes de tamanho fixo diferente; unificar o nome não unificaria nada.
5. **Fluor como fundo de área aparece três vezes**, sempre como anti-exemplo marcado "reprova" ou como demonstração da proporção de cor. A regra dura da §9.1 continua intacta: fluor nunca é fundo em peça de verdade.
6. **`.rotulo` é muito mais usado no módulo 2** que nos outros. Ali ele rotula bloco de página, que é a unidade do módulo; nos demais rotula só seção.

### 13.3 · Pendências que continuam com o Rodrigo

Nenhuma delas trava a publicação do sistema. Todas travam alguma peça específica.

| # | Pendência | Trava o quê | Estado |
|---|---|---|---|
| P1 | **Aprovação da versão horizontal do logo** | cabeçalho de site, assinatura de e-mail, rodapé de documento e de certificado | aguardando |
| P2 | **O selo vira o avatar do @academiadtm?** | a troca de @cursodtm para @academiadtm, e com ela a produção de conteúdo | aguardando |
| P3 | **Fonte do lockup Viver de DTM** — redesenhar em Archivo (recomendado) ou manter a atual como exceção documentada | capa de encontro, material de venda da formação | aberta desde 02/08 |
| P4 | **Arquivo vetorial da logo antiga do Curso DTM** | o plano de transição de marca | material com ele |
| P5 | **Registro no INPI** — marca mista ou dois pedidos separados | nada de produção; é proteção jurídica | com ele, com apoio jurídico |
| P6 | **Depoimentos** — os nove existentes foram gravados sob a marca Instituto Ária, sem autorização de uso | bloco 08 de página, formato 09 de feed, lâmina comercial de prova | bloqueado até material novo com autorização |
| P7 | **Números financeiros** — preço, parcelamento, cancelamento e reembolso | bloco de preço, FAQ comercial, M15 de oferta | bloqueado até a conferência com a clínica |
| P8 | **Biografia e titulação** escritas ou aprovadas por ele | bloco 07 de página e capa de professor | aguardando. Registro de conselho não entra em material público, em nenhuma hipótese |
| P9 | **Grade oficial, carga horária e datas das três imersões** | grade curricular de página, M18, calendário | aguardando o fechamento do calendário da Turma 1 |
| P10 | **Fluxo de consentimento de imagem clínica** (módulo 4, § 03) — os seis passos são proposta nossa | qualquer imagem de paciente em lâmina de aula | com ele, com apoio jurídico no texto do termo |
| P11 | **Nome do método** (duas rejeições) | nada. A marca que assina é Academia DTM, e o sistema inteiro foi desenhado para não depender desse nome | desacoplado de propósito |

### 13.4 · Fila da Inception, depois da aprovação

Vetorização do wordmark em curvas · pacote de arquivos finais (SVG, PNG e PDF das três versões) · arquivo mestre de apresentação montado nos programas escolhidos. **Nada disso está entregue ainda, e nenhum dos quatro documentos promete o contrário.**

---

*Contrato do Design System Academia DTM · v1 · 20/08/2026 · Inception · fase 1 fechada pelo @brand-director · v1 ratificada e fechada em 20/08/2026*
