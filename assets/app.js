/* ============================================================
   PAINEL DO PROJETO · ACADEMIA DTM · SHELL V2 · 05/09/2026
   Casca do painel: menu, roteamento por hash e os seis
   renderizadores do contrato (data-v2/CONTRATO.md).
   Este arquivo nunca inventa conteúdo — só desenha o que
   está em window.DASH.views.
   ============================================================ */
(function () {
  'use strict';

  var VIEWS = (window.DASH && window.DASH.views) || {};

  /* ---------- a arquitetura da navegação ----------
     Rótulo curto para a lateral; o título longo vive no cabeçalho da view. */
  var MENU = [
    { rotulo: 'Início', itens: [
      ['inicio', 'Onde o projeto está'],
      ['marcos', 'Os quatro marcos'],
      ['decisoes-rodrigo', 'O que depende de você']
    ]},
    { rotulo: 'Método', itens: [
      ['met-aprendiz', 'Quem é o dentista'],
      ['met-expert', 'Quem é você nesse mercado'],
      ['met-historias', 'Banco de histórias'],
      ['met-metodo', 'O método']
    ]},
    { rotulo: 'Formação', itens: [
      ['form-oferta', 'A oferta'],
      ['form-grade', 'As etapas e os encontros'],
      ['form-calendario', 'O calendário de 2027'],
      ['form-jornada', 'A jornada e as faixas'],
      ['form-area-membros', 'O sistema do aluno']
    ]},
    { rotulo: 'Comercial', itens: [
      ['com-pagina', 'A página de aplicação'],
      ['com-apresentacao', 'A apresentação'],
      ['com-fluxo', 'Do formulário à matrícula']
    ]},
    { rotulo: 'Marca e conteúdo', itens: [
      ['marca-identidade', 'Academia DTM e Viver de DTM'],
      ['marca-social', 'A linha editorial'],
      ['marca-crencas', 'As crenças do conteúdo']
    ]},
    { rotulo: 'Depois da fundadora', itens: [
      ['devolutivas', 'O que você já validou'],
      ['continuidade', 'Depois da turma fundadora']
    ]}
  ];

  var PADRAO = 'inicio';
  var DESTAQUE = 'decisoes-rodrigo';

  /* proporção dos frameworks do kit · evita salto de layout na carga do SVG */
  var PROPORCAO_FW = {
    'F1': '600/478', 'F2': '600/896', 'F3': '600/792', 'F4': '600/830', 'F5': '600/552',
    'F6': '600/610', 'F7': '600/990', 'F8': '600/656', 'F9': '600/748'
  };

  var el = {
    menu: document.getElementById('menu'),
    view: document.getElementById('view'),
    palco: document.getElementById('conteudo'),
    lateral: document.getElementById('lateral'),
    veu: document.getElementById('veu'),
    botao: document.getElementById('abrir-menu')
  };

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- utilidades ---------- */
  function texto(s) {
    return String(s == null ? '' : s).replace(/<[^>]+>/g, '').trim();
  }
  function nodo(tag, classe, html) {
    var n = document.createElement(tag);
    if (classe) n.className = classe;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function junta() {
    var s = document.createElement('span');
    s.className = 'junta';
    s.setAttribute('aria-hidden', 'true');
    return s;
  }

  /* ---------- menu ---------- */
  function montarMenu() {
    var frag = document.createDocumentFragment();
    MENU.forEach(function (grupo) {
      var g = nodo('div', 'menu-grupo');
      g.appendChild(nodo('p', 'menu-rotulo', grupo.rotulo));
      var ul = nodo('ul', 'menu-lista');
      grupo.itens.forEach(function (par) {
        if (!VIEWS[par[0]]) return;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + par[0];
        a.dataset.view = par[0];
        a.innerHTML = '<span class="octo" aria-hidden="true"></span><span>' + par[1] + '</span>';
        li.appendChild(a);
        ul.appendChild(li);
      });
      g.appendChild(ul);
      frag.appendChild(g);
    });
    el.menu.appendChild(frag);
  }

  function marcarAtivo(id) {
    var links = el.menu.querySelectorAll('a[data-view]');
    for (var i = 0; i < links.length; i++) {
      var ativo = links[i].dataset.view === id;
      links[i].classList.toggle('ativo', ativo);
      if (ativo) links[i].setAttribute('aria-current', 'page');
      else links[i].removeAttribute('aria-current');
    }
  }

  /* ---------- renderizadores de bloco ---------- */
  function envolverTabela(tabela, larga) {
    var rolo = nodo('div', 'tabela-rolo' + (larga ? ' tabela-rolo--larga' : ''));
    rolo.setAttribute('tabindex', '0');
    rolo.setAttribute('role', 'region');
    tabela.parentNode.insertBefore(rolo, tabela);
    rolo.appendChild(tabela);
    marcarRolagem(rolo);
    return rolo;
  }

  /* a borda direita só esmaece enquanto ainda existe tabela para o lado */
  function marcarRolagem(rolo) {
    var medir = function () {
      var sobra = rolo.scrollWidth - rolo.clientWidth - rolo.scrollLeft;
      rolo.classList.toggle('tem-mais', sobra > 4);
    };
    rolo.addEventListener('scroll', medir, { passive: true });
    window.addEventListener('resize', medir);
    requestAnimationFrame(medir);
    if (window.ResizeObserver) new ResizeObserver(medir).observe(rolo);
  }

  function blocoTexto(b) {
    var c = nodo('div', 'bloco bloco--texto');
    if (b.titulo) c.appendChild(nodo('h2', 'bloco-titulo', b.titulo));
    c.appendChild(nodo('div', 'corpo', b.html || ''));
    return c;
  }

  function blocoLista(b) {
    var c = nodo('div', 'bloco bloco--lista');
    if (b.titulo) c.appendChild(nodo('h2', 'bloco-titulo', b.titulo));
    var ul = nodo('ul', 'lista');
    (b.itens || []).forEach(function (item) { ul.appendChild(nodo('li', null, item)); });
    c.appendChild(ul);
    return c;
  }

  function blocoTabela(b) {
    var c = nodo('div', 'bloco bloco--tabela');
    if (b.titulo) c.appendChild(nodo('h2', 'bloco-titulo', b.titulo));
    var cols = b.colunas || [];
    var t = document.createElement('table');
    if (cols.length) {
      var thead = document.createElement('thead');
      var tr = document.createElement('tr');
      cols.forEach(function (col) {
        var th = document.createElement('th');
        th.scope = 'col';
        th.innerHTML = col || '';
        tr.appendChild(th);
      });
      thead.appendChild(tr);
      t.appendChild(thead);
    }
    var tbody = document.createElement('tbody');
    (b.linhas || []).forEach(function (linha) {
      var tr = document.createElement('tr');
      linha.forEach(function (cel) {
        var td = document.createElement('td');
        td.innerHTML = cel == null ? '' : cel;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    t.appendChild(tbody);
    c.appendChild(t);
    var rolo = envolverTabela(t, cols.length >= 5);
    rolo.setAttribute('aria-label', texto(b.titulo) || 'Tabela');
    c.appendChild(nodo('p', 'dica-rolo', 'Arraste a tabela para o lado'));
    return c;
  }

  function blocoFramework(b) {
    var c = nodo('div', 'bloco bloco--fw');
    if (b.titulo) c.appendChild(nodo('h2', 'bloco-titulo', b.titulo));
    var caixa = nodo('figure', 'fw-caixa');
    var img = document.createElement('img');
    img.src = b.svg;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = texto(b.legenda) || texto(b.titulo) || 'Framework do método';
    var chave = (b.svg || '').match(/\/(F\d)/);
    if (chave && PROPORCAO_FW[chave[1]]) img.style.aspectRatio = PROPORCAO_FW[chave[1]];
    caixa.appendChild(img);
    c.appendChild(caixa);
    if (b.legenda) c.appendChild(nodo('figcaption', 'fw-legenda', b.legenda));
    inlinarSvg(img);
    return c;
  }

  /* O SVG vira inline quando o fetch é permitido (servidor HTTP): só assim as
     fontes Archivo e Space Mono da página valem dentro do desenho. Em file://
     o fetch falha e a imagem continua como está — o SVG já traz o próprio
     fallback de fonte e a cor navy embutida. */
  function inlinarSvg(img) {
    if (!window.fetch || location.protocol === 'file:') return;
    fetch(img.src).then(function (r) {
      if (!r.ok) throw new Error('svg');
      return r.text();
    }).then(function (t) {
      var doc = new DOMParser().parseFromString(t, 'image/svg+xml');
      var svg = doc.querySelector('svg');
      if (!svg || doc.querySelector('parsererror') || !img.parentNode) return;
      svg.setAttribute('width', '100%');
      svg.removeAttribute('height');
      img.parentNode.replaceChild(svg, img);
    }).catch(function () { /* fica o <img> */ });
  }

  function blocoDetalhe(b) {
    var c = nodo('div', 'bloco bloco--detalhe');
    var d = document.createElement('details');
    d.className = 'detalhe';
    var s = document.createElement('summary');
    s.innerHTML = '<span>' + (b.titulo || 'Ver o documento completo') +
                  '</span><span class="sinal" aria-hidden="true"></span>';
    d.appendChild(s);
    var corpo = nodo('div', 'detalhe-corpo corpo', b.html || '');
    d.appendChild(corpo);
    c.appendChild(d);
    /* tabela longa dentro do detalhe ganha rolagem própria */
    var tabelas = corpo.querySelectorAll('table');
    for (var i = 0; i < tabelas.length; i++) {
      var nCols = tabelas[i].querySelectorAll('thead th').length;
      var rolo = envolverTabela(tabelas[i], nCols >= 5);
      rolo.setAttribute('aria-label', texto(b.titulo) || 'Tabela');
      var dica = nodo('p', 'dica-rolo', 'Arraste a tabela para o lado');
      rolo.parentNode.insertBefore(dica, rolo.nextSibling);
    }
    return c;
  }

  var RENDER = {
    texto: blocoTexto,
    lista: blocoLista,
    tabela: blocoTabela,
    framework: blocoFramework,
    detalhe: blocoDetalhe
  };

  /* ---------- seções de rodapé da view ---------- */
  function secao(titulo, conteudo) {
    var s = nodo('section', 'secao');
    var cab = nodo('div', 'secao-cab');
    cab.appendChild(nodo('h2', 'secao-titulo', titulo));
    s.appendChild(cab);
    s.appendChild(conteudo);
    return s;
  }

  function montarDecisoes(lista) {
    var ol = nodo('ol', 'tempo');
    lista.forEach(function (d) {
      var li = document.createElement('li');
      li.appendChild(nodo('span', 'tempo-data', formatarData(d.data)));
      li.appendChild(nodo('span', 'tempo-texto', d.texto || ''));
      ol.appendChild(li);
    });
    return secao('Decisões registradas', ol);
  }

  function formatarData(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
    return m ? m[3] + '/' + m[2] + '/' + m[1] : (iso || '');
  }

  function grupoPendencias(titulo, itens, dono) {
    var col = document.createElement('div');
    col.appendChild(nodo('p', 'pend-rotulo pend-rotulo--' + dono, titulo));
    var ul = nodo('ul', 'pend-lista');
    itens.forEach(function (p) {
      var li = nodo('li', 'pend-item pend-item--' + dono);
      li.appendChild(nodo('p', 'pend-texto', p.texto || ''));
      if (p.prazo) li.appendChild(nodo('span', 'pend-prazo', 'Prazo: ' + p.prazo));
      ul.appendChild(li);
    });
    col.appendChild(ul);
    return col;
  }

  function montarPendencias(lista) {
    var dele = lista.filter(function (p) { return p.quem === 'rodrigo'; });
    var nossas = lista.filter(function (p) { return p.quem !== 'rodrigo'; });
    var cols = nodo('div', 'pend-cols');
    if (dele.length) cols.appendChild(grupoPendencias('Com o Rodrigo', dele, 'rodrigo'));
    if (nossas.length) cols.appendChild(grupoPendencias('Com a Inception', nossas, 'inception'));
    return secao('O que está em aberto', cols);
  }

  function montarLinks(lista) {
    var box = nodo('div', 'acoes');
    lista.forEach(function (l) {
      var a = document.createElement('a');
      a.className = 'btn';
      a.href = l.href;
      if (l.href && l.href.charAt(0) !== '#') {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      a.innerHTML = '<span>' + (l.rotulo || 'Abrir') + '</span><span class="seta" aria-hidden="true">&#8594;</span>';
      box.appendChild(a);
    });
    return secao('Abrir os arquivos', box);
  }

  /* ---------- a view inteira ---------- */
  function desenhar(id) {
    var v = VIEWS[id];
    if (!v) return;

    var frag = document.createDocumentFragment();

    var cab = nodo('header', 'cab-view');
    cab.appendChild(junta());
    if (v.kicker) cab.appendChild(nodo('p', 'kicker', v.kicker));
    cab.appendChild(nodo('h1', 'titulo-view', v.titulo || ''));
    if (v.resumo) cab.appendChild(nodo('p', 'resumo', v.resumo));
    if (v.atualizado) cab.appendChild(nodo('p', 'atualizado', 'Atualizado em ' + formatarData(v.atualizado)));
    frag.appendChild(cab);

    if (v.fatos && v.fatos.length) {
      var ul = nodo('ul', 'fatos');
      v.fatos.forEach(function (f) {
        var li = document.createElement('li');
        li.appendChild(nodo('span', 'fato-valor', f.valor || ''));
        li.appendChild(nodo('span', 'fato-rotulo', f.rotulo || ''));
        ul.appendChild(li);
      });
      frag.appendChild(ul);
    }

    if (v.blocos && v.blocos.length) {
      var caixa = nodo('div', 'blocos');
      v.blocos.forEach(function (b) {
        var fn = RENDER[b.tipo];
        if (fn) caixa.appendChild(fn(b));
      });
      frag.appendChild(caixa);
    }

    if (v.decisoes && v.decisoes.length) frag.appendChild(montarDecisoes(v.decisoes));
    if (v.pendencias && v.pendencias.length) frag.appendChild(montarPendencias(v.pendencias));
    if (v.links && v.links.length) frag.appendChild(montarLinks(v.links));

    el.view.classList.remove('vis');
    el.view.textContent = '';
    el.view.appendChild(frag);

    var ehDestaque = id === DESTAQUE;
    el.palco.classList.toggle('destaque', ehDestaque);
    el.palco.classList.toggle('sobre-navy', ehDestaque);

    document.title = texto(v.titulo) + ' · Painel do projeto · Academia DTM';
    marcarAtivo(id);

    if (reduz) {
      el.view.classList.add('vis');
    } else {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { el.view.classList.add('vis'); });
      });
    }
  }

  /* ---------- roteamento ---------- */
  var primeira = true;
  function rotear() {
    var id = decodeURIComponent(location.hash.slice(1) || '');
    if (!VIEWS[id]) id = PADRAO;
    desenhar(id);
    fecharMenu();
    if (!primeira) window.scrollTo(0, 0);
    primeira = false;
  }

  /* ---------- menu no celular ---------- */
  function abrirMenu() {
    el.lateral.classList.add('aberta');
    el.veu.hidden = false;
    requestAnimationFrame(function () { el.veu.classList.add('vis'); });
    el.botao.setAttribute('aria-expanded', 'true');
  }
  function fecharMenu() {
    if (!el.lateral.classList.contains('aberta')) return;
    el.lateral.classList.remove('aberta');
    el.veu.classList.remove('vis');
    el.veu.hidden = true;
    el.botao.setAttribute('aria-expanded', 'false');
  }

  el.botao.addEventListener('click', function () {
    if (el.lateral.classList.contains('aberta')) fecharMenu(); else abrirMenu();
  });
  el.veu.addEventListener('click', fecharMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharMenu(); });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) fecharMenu();
  });

  /* ---------- partida ---------- */
  montarMenu();
  window.addEventListener('hashchange', rotear);
  rotear();
})();
