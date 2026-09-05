/* ============================================================
   PAINEL DO PROJETO · ACADEMIA DTM · SHELL V2 · 05/09/2026
   Casca do painel: menu, roteamento por hash e os sete
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
    'F6': '600/610', 'F7': '600/990', 'F8': '600/656', 'F9': '600/748',
    'infra-do-funil': '1000/892'
  };


  /* ---------- simbologia de status ----------
     Um octógono, quatro estados. É o mesmo desenho no menu, no cabeçalho da
     view e em cada item de lista, para que o estado do projeto se leia sem
     legenda depois da primeira vez. */
  var OCTO  = 'M7.03 1H16.97L23 7.03V16.97L16.97 23H7.03L1 16.97V7.03Z';
  var MEIO  = 'M12 1H7.03L1 7.03V16.97L7.03 23H12Z';
  var CHECK = 'M7.4 12.3 10.5 15.4 16.6 9.3';

  var STATUS = {
    'entregue':    { rotulo: 'Entregue' },
    'em-revisao':  { rotulo: 'Em revisão' },
    'em-producao': { rotulo: 'Em produção' },
    'pendente':    { rotulo: 'Pendente' }
  };

  function desenhoSelo(status) {
    if (status === 'entregue') {
      return '<path d="' + OCTO + '" fill="currentColor"/>' +
             '<path d="' + CHECK + '" fill="none" stroke="var(--selo-check,#0B0F1A)" ' +
             'stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    if (status === 'em-producao') {
      return '<path d="' + MEIO + '" fill="currentColor"/>' +
             '<path d="' + OCTO + '" fill="none" stroke="currentColor" stroke-width="2"/>';
    }
    if (status === 'em-revisao') {
      return '<path d="' + OCTO + '" fill="none" stroke="currentColor" stroke-width="2.6"/>';
    }
    return '<path d="' + OCTO + '" fill="none" stroke="currentColor" stroke-width="2" ' +
           'stroke-dasharray="4 3.2"/>';
  }

  function seloHTML(status, extra) {
    var st = STATUS[status] ? status : 'pendente';
    return '<span class="selo selo--' + st + (extra ? ' ' + extra : '') + '" role="img" ' +
           'aria-label="' + STATUS[st].rotulo + '"><svg viewBox="0 0 24 24" aria-hidden="true">' +
           desenhoSelo(st) + '</svg></span>';
  }

  function selo(status, extra) {
    var d = document.createElement('div');
    d.innerHTML = seloHTML(status, extra);
    return d.firstChild;
  }

  /* ---------- prazo como número, só para ordenar ----------
     Os prazos são escritos em português corrido. Esta função devolve um número
     comparável; ela nunca aparece na tela e nunca reescreve o texto do prazo. */
  var MESES = { 'janeiro':1, 'fevereiro':2, 'marco':3, 'março':3, 'abril':4, 'maio':5,
    'junho':6, 'julho':7, 'agosto':8, 'setembro':9, 'outubro':10, 'novembro':11, 'dezembro':12 };

  function pesoPrazo(txt) {
    var s = String(txt || '').toLowerCase();
    var d = s.match(/(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/);
    if (d) {
      var a = d[3] ? (+d[3] < 100 ? 2000 + (+d[3]) : +d[3]) : 2026;
      return a * 10000 + (+d[2]) * 100 + (+d[1]);
    }
    var ano = s.match(/20\d{2}/);
    for (var mes in MESES) {
      if (s.indexOf(mes) >= 0) return (ano ? +ano[0] : 2026) * 10000 + MESES[mes] * 100 + 28;
    }
    /* a divulgação começa em outubro de 2026: é a régua de tudo que precisa
       estar pronto "antes da abertura de vendas" ou "antes da campanha" */
    if (/abertura de vendas|antes da campanha|antes da divulga/.test(s)) return 20261015;
    return 99999999;
  }

  function pendenciasAbertas(quem) {
    var fora = [];
    Object.keys(VIEWS).forEach(function (id) {
      (VIEWS[id].pendencias || []).forEach(function (p) {
        var dono = p.quem === 'rodrigo' ? 'rodrigo' : 'inception';
        if (quem && dono !== quem) return;
        fora.push({ id: id, titulo: VIEWS[id].titulo, quem: dono, texto: p.texto,
                    prazo: p.prazo, feito: p.feito === true });
      });
    });
    fora.sort(function (a, b) {
      if (a.feito !== b.feito) return a.feito ? 1 : -1;
      return pesoPrazo(a.prazo) - pesoPrazo(b.prazo);
    });
    return fora;
  }

  /* As decisões do Rodrigo vivem nas tabelas da tela dele, já priorizadas por
     quanto travam o projeto. Esta função lê aquelas tabelas — e só elas. */
  function decisoesDoRodrigo() {
    var v = VIEWS['decisoes-rodrigo'];
    if (!v) return [];
    var fora = [];
    (v.blocos || []).forEach(function (b) {
      if (b.tipo !== 'tabela' || !b.colunas || b.colunas[1] !== 'Por que importa') return;
      (b.linhas || []).forEach(function (l) {
        fora.push({ grupo: b.titulo, texto: l[0], porque: l[1], prazo: l[2], feito: false });
      });
    });
    return fora;
  }

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
        a.innerHTML = seloHTML(VIEWS[par[0]].status, 'selo--mini') +
          '<span>' + par[1] + '</span>';
        li.appendChild(a);
        ul.appendChild(li);
      });
      g.appendChild(ul);
      frag.appendChild(g);
    });
    el.menu.appendChild(frag);
  }


  /* A legenda fica fixa no pé da lateral: a simbologia se aprende uma vez. */
  function montarLegenda() {
    var caixa = document.getElementById('legenda');
    if (!caixa) return;
    caixa.appendChild(nodo('p', 'legenda-rotulo', 'Simbologia'));
    var ul = nodo('ul', 'legenda-lista');
    ['entregue', 'em-revisao', 'em-producao', 'pendente'].forEach(function (st) {
      var li = document.createElement('li');
      li.innerHTML = seloHTML(st, 'selo--mini') + '<span>' + STATUS[st].rotulo + '</span>';
      ul.appendChild(li);
    });
    caixa.appendChild(ul);
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
    var nome = (b.svg || '').split('/').pop().replace(/\.svg$/, '');
    var kit = nome.match(/^(F\d)/);
    var chave = kit ? kit[1] : nome;
    if (PROPORCAO_FW[chave]) img.style.aspectRatio = PROPORCAO_FW[chave];
    caixa.appendChild(img);
    /* desenho mais largo que o padrão do kit não encolhe até ficar ilegível no
       celular: ele rola no eixo próprio, com a mesma mecânica das tabelas */
    if (PROPORCAO_FW[chave] && parseInt(PROPORCAO_FW[chave], 10) > 600) {
      var rolo = nodo('div', 'tabela-rolo fw-rolo');
      rolo.setAttribute('tabindex', '0');
      rolo.setAttribute('role', 'region');
      rolo.setAttribute('aria-label', texto(b.titulo) || 'Diagrama');
      rolo.appendChild(caixa);
      c.appendChild(rolo);
      marcarRolagem(rolo);
      c.appendChild(nodo('p', 'dica-rolo', 'Arraste o diagrama para o lado'));
    } else {
      c.appendChild(caixa);
    }
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

  /* A galeria existe para o Rodrigo baixar a logo sem abrir o brandbook: cada
     arquivo aparece sobre o fundo em que ele funciona e leva os proprios
     botoes de download. Formato que nao existe nao vira botao morto. */
  var FORMATOS = [['png', 'PNG'], ['svg', 'SVG'], ['jpg', 'JPG']];

  function cartaoLogo(item) {
    var card = nodo('figure', 'logo-card');
    var palco = nodo('div', 'logo-palco' + (item.fundo === 'navy' ? ' logo-palco--navy' : ''));
    var img = document.createElement('img');
    img.src = item.preview;
    img.alt = item.nome;
    img.loading = 'lazy';
    img.decoding = 'async';
    palco.appendChild(img);
    card.appendChild(palco);

    var legenda = document.createElement('figcaption');
    legenda.appendChild(nodo('p', 'logo-nome', item.nome));
    if (item.descricao) legenda.appendChild(nodo('p', 'logo-uso', item.descricao));
    card.appendChild(legenda);

    var linha = nodo('div', 'logo-formatos');
    FORMATOS.forEach(function (par) {
      var href = (item.formatos || {})[par[0]];
      if (!href) return;
      var a = document.createElement('a');
      a.className = 'baixar';
      a.href = href;
      a.setAttribute('download', '');
      a.setAttribute('aria-label', 'Baixar ' + texto(item.nome) + ' em ' + par[1]);
      a.textContent = par[1];
      linha.appendChild(a);
    });
    card.appendChild(linha);

    if (item.nota) card.appendChild(nodo('p', 'logo-nota', item.nota));
    return card;
  }

  function blocoLogos(b) {
    var c = nodo('div', 'bloco bloco--logos');
    if (b.titulo) c.appendChild(nodo('h2', 'bloco-titulo', b.titulo));
    if (b.zip && b.zip.href) {
      var topo = nodo('div', 'logos-zip');
      topo.appendChild(junta());
      var a = document.createElement('a');
      a.className = 'btn btn--zip';
      a.href = b.zip.href;
      a.setAttribute('download', '');
      a.innerHTML = '<span>Baixar ZIP completo</span>' +
        (b.zip.tamanho ? '<span class="btn-peso">' + b.zip.tamanho + '</span>' : '');
      topo.appendChild(a);
      if (b.zip.nota) topo.appendChild(nodo('p', 'logos-zip-nota', b.zip.nota));
      c.appendChild(topo);
    }
    var grade = nodo('div', 'logos-grade');
    (b.itens || []).forEach(function (item) { grade.appendChild(cartaoLogo(item)); });
    c.appendChild(grade);
    return c;
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
    logos: blocoLogos,
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
      li.appendChild(selo('entregue', 'selo--mini'));
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
      var feito = p.feito === true;
      var li = nodo('li', 'pend-item pend-item--' + dono + (feito ? ' pend-item--feito' : ''));
      li.appendChild(selo(feito ? 'entregue' : 'pendente'));
      var corpo = nodo('div', 'pend-corpo');
      corpo.appendChild(nodo('p', 'pend-texto', p.texto || ''));
      var pe = nodo('div', 'pend-pe');
      pe.appendChild(nodo('span', 'etiqueta etiqueta--' + dono,
        dono === 'rodrigo' ? 'Dr. Rodrigo' : 'Inception'));
      if (p.prazo) pe.appendChild(nodo('span', 'pend-prazo', feito ? 'Concluído' : p.prazo));
      corpo.appendChild(pe);
      li.appendChild(corpo);
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


  /* ---------- a fila: o cartão fino que se lê em três segundos ---------- */
  function fila(item) {
    var feito = item.feito === true;
    var art = nodo('article', 'fila' + (feito ? ' fila--feita' : ''));
    art.appendChild(selo(feito ? 'entregue' : 'pendente'));
    var corpo = nodo('div', 'fila-corpo');
    corpo.appendChild(nodo('p', 'fila-texto', item.texto || ''));
    if (item.porque) corpo.appendChild(nodo('p', 'fila-porque', item.porque));
    art.appendChild(corpo);
    if (item.prazo) art.appendChild(nodo('span', 'fila-prazo', feito ? 'Concluído' : item.prazo));
    return art;
  }

  /* ---------- painel de status da tela inicial ----------
     Duas leituras, nesta ordem: o que já está de pé e o que ainda anda; depois,
     de quem é a bola. Tudo sai das próprias views — nada é escrito à mão aqui. */
  function bolaDaView(v) {
    var abertas = (v.pendencias || []).filter(function (p) { return p.feito !== true; });
    var temR = abertas.some(function (p) { return p.quem === 'rodrigo'; });
    var temI = abertas.some(function (p) { return p.quem !== 'rodrigo'; });
    if (temR && temI) return 'Com os dois';
    if (temR) return 'Com o Dr. Rodrigo';
    if (temI) return 'Com a Inception';
    return 'Sem item aberto';
  }

  function colunaQuadro(titulo, status, itens, montar) {
    var col = nodo('div', 'quadro-col');
    var cab = nodo('p', 'quadro-rotulo');
    cab.appendChild(selo(status, 'selo--mini'));
    cab.appendChild(nodo('span', null, titulo));
    cab.appendChild(nodo('b', 'quadro-conta', String(itens.length)));
    col.appendChild(cab);
    var ul = nodo('ul', 'quadro-lista');
    itens.forEach(function (it) { ul.appendChild(montar(it)); });
    col.appendChild(ul);
    return col;
  }

  function cartaoLado(rotulo, dono, numero, unidade, topo, destino) {
    var a = document.createElement('a');
    a.className = 'cartao cartao--' + dono;
    a.href = destino;
    a.appendChild(nodo('p', 'cartao-rotulo', rotulo));
    var n = nodo('p', 'cartao-numero');
    n.appendChild(nodo('span', null, String(numero)));
    n.appendChild(nodo('em', null, unidade));
    a.appendChild(n);
    var ul = nodo('ul', 'cartao-top');
    topo.forEach(function (it) {
      var li = document.createElement('li');
      li.appendChild(selo('pendente', 'selo--mini'));
      li.appendChild(nodo('span', 'cartao-item', it.texto));
      if (it.prazo) li.appendChild(nodo('span', 'cartao-prazo', it.prazo));
      ul.appendChild(li);
    });
    a.appendChild(ul);
    a.appendChild(nodo('span', 'cartao-ir', 'Ver a lista inteira'));
    return a;
  }

  /* as duas telas de acompanhamento não entram no próprio quadro */
  var FORA_DO_QUADRO = { 'inicio': 1, 'decisoes-rodrigo': 1 };

  function painelDeStatus() {
    var ids = Object.keys(VIEWS).filter(function (i) { return !FORA_DO_QUADRO[i]; });
    var entregues = ids.filter(function (i) { return VIEWS[i].status === 'entregue'; });
    var andando = ids.filter(function (i) {
      return VIEWS[i].status === 'em-producao' || VIEWS[i].status === 'em-revisao';
    });

    var quadro = nodo('div', 'quadro');
    quadro.appendChild(colunaQuadro('Entregue', 'entregue', entregues, function (id) {
      var v = VIEWS[id];
      var li = document.createElement('li');
      li.appendChild(selo('entregue', 'selo--mini'));
      li.appendChild(nodo('span', 'quadro-nome', v.titulo));
      var l = (v.links || [])[0];
      var a = document.createElement('a');
      a.className = 'quadro-abrir';
      a.href = l ? l.href : '#' + id;
      if (l && l.href.charAt(0) !== '#') { a.target = '_blank'; a.rel = 'noopener'; }
      a.innerHTML = '<span>Abrir</span><span class="seta" aria-hidden="true">&#8594;</span>';
      a.setAttribute('aria-label', 'Abrir ' + texto(v.titulo));
      li.appendChild(a);
      return li;
    }));
    quadro.appendChild(colunaQuadro('Em andamento', 'em-producao', andando, function (id) {
      var v = VIEWS[id];
      var li = document.createElement('li');
      li.appendChild(selo(v.status, 'selo--mini'));
      var a = document.createElement('a');
      a.className = 'quadro-nome quadro-nome--link';
      a.href = '#' + id;
      a.textContent = v.titulo;
      li.appendChild(a);
      li.appendChild(nodo('span', 'quadro-bola', bolaDaView(v)));
      return li;
    }));

    var dele = decisoesDoRodrigo().sort(function (a, b) {
      return pesoPrazo(a.prazo) - pesoPrazo(b.prazo);
    });
    var nossas = pendenciasAbertas('inception').filter(function (p) { return !p.feito; });

    var lado = nodo('div', 'cartoes');
    lado.appendChild(cartaoLado('Com o Dr. Rodrigo', 'rodrigo', dele.length,
      dele.length === 1 ? 'decisão aberta' : 'decisões abertas', dele.slice(0, 3), '#decisoes-rodrigo'));
    lado.appendChild(cartaoLado('Com a Inception', 'inception', nossas.length,
      nossas.length === 1 ? 'item aberto' : 'itens abertos', nossas.slice(0, 3), '#decisoes-rodrigo'));

    var sec = secao('Estado das entregas', quadro);
    sec.className = 'secao secao--painel';
    sec.appendChild(lado);
    return sec;
  }

  /* ---------- a tela de decisões, em dois lados ---------- */
  function quadroDecisoes() {
    var frag = document.createDocumentFragment();

    var caixaDele = nodo('div', 'lados');
    var grupos = {};
    decisoesDoRodrigo().forEach(function (d) {
      (grupos[d.grupo] = grupos[d.grupo] || []).push(d);
    });
    Object.keys(grupos).forEach(function (g) {
      var bloco = nodo('div', 'lado-grupo');
      bloco.appendChild(nodo('p', 'lado-rotulo', g));
      var lista = nodo('div', 'fila-lista');
      grupos[g].sort(function (a, b) { return pesoPrazo(a.prazo) - pesoPrazo(b.prazo); })
        .forEach(function (d) { lista.appendChild(fila(d)); });
      bloco.appendChild(lista);
      caixaDele.appendChild(bloco);
    });
    frag.appendChild(secao('Com você', caixaDele));

    var nossas = pendenciasAbertas('inception');
    var listaNossa = nodo('div', 'fila-lista');
    nossas.forEach(function (p) {
      listaNossa.appendChild(fila({ texto: p.texto, porque: 'De onde vem: ' + p.titulo,
                                    prazo: p.prazo, feito: p.feito }));
    });
    frag.appendChild(secao('Comigo, na Inception', listaNossa));
    return frag;
  }

  /* ---------- a view inteira ---------- */
  function desenhar(id) {
    var v = VIEWS[id];
    if (!v) return;

    var frag = document.createDocumentFragment();

    var cab = nodo('header', 'cab-view');
    cab.appendChild(junta());
    if (v.kicker) cab.appendChild(nodo('p', 'kicker', v.kicker));
    var linha = nodo('div', 'titulo-linha');
    linha.appendChild(nodo('h1', 'titulo-view', v.titulo || ''));
    if (v.status) {
      var chip = nodo('p', 'status-chip status-chip--' + v.status);
      chip.appendChild(selo(v.status));
      chip.appendChild(nodo('span', null, (STATUS[v.status] || STATUS.pendente).rotulo));
      linha.appendChild(chip);
    }
    cab.appendChild(linha);
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

    if (id === 'inicio') frag.appendChild(painelDeStatus());

    /* Na tela de decisões as tabelas viram cartões finos, um por decisão, e as
       pendências da Inception que estão espalhadas nas outras telas se juntam
       ali. Por isso ela não passa pelo desenho comum de blocos. */
    var ehDecisoes = id === 'decisoes-rodrigo';

    if (v.blocos && v.blocos.length) {
      var caixa = nodo('div', 'blocos');
      v.blocos.forEach(function (b) {
        if (ehDecisoes && b.tipo === 'tabela') return;
        var fn = RENDER[b.tipo];
        if (fn) caixa.appendChild(fn(b));
      });
      if (ehDecisoes) {
        frag.appendChild(quadroDecisoes());
        if (caixa.children.length) frag.appendChild(caixa);
      } else {
        frag.appendChild(caixa);
      }
    }

    if (v.decisoes && v.decisoes.length) frag.appendChild(montarDecisoes(v.decisoes));
    if (!ehDecisoes && v.pendencias && v.pendencias.length) {
      frag.appendChild(montarPendencias(v.pendencias));
    }
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
  montarLegenda();
  window.addEventListener('hashchange', rotear);
  rotear();
})();
