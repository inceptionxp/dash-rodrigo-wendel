/* Área de membros · Formação Viver de DTM · Academia DTM
   Ondas 1 e 2 · Inception

   Roteador por hash e as quatro telas: Aulas, Materiais, Calendário e Plano de estudos.
   Script clássico de propósito: `type="module"`
   não abre por file://, e o cliente abre esta demonstração com dois cliques.
   Depende de dados.js, carregado antes deste arquivo. */

const RAIZ = document.getElementById('palco');
const TRILHO = document.getElementById('trilho');
const CRACHA = document.getElementById('cracha');
const CLASSE_GAVETA = 'trilho-aberto';

const NOME_FORMATO = {
  'aula': 'Aula ao vivo',
  'estudo-de-caso': 'Estudo de caso',
  'imersao': 'Imersão presencial'
};

const NOME_TIPO_MATERIAL = {
  'template': 'Material de apoio',
  'caso': 'Caso clínico',
  'video': 'Vídeo',
  'entrega': 'Entrega do aluno'
};

function escapar(valor) {
  return String(valor)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* Interpolação com duas regras, e só duas:
   texto e número são escapados; array é juntado sem escapar, porque array aqui
   significa "fragmentos que já saíram deste mesmo html". null e false somem. */
function html(partes, ...valores) {
  return partes.reduce((acumulado, parte, i) => {
    if (i >= valores.length) return acumulado + parte;
    const v = valores[i];
    if (v === null || v === undefined || v === false) return acumulado + parte;
    return acumulado + parte + (Array.isArray(v) ? v.join('') : escapar(v));
  }, '');
}

const ROTAS = {
  telas: new Map(),
  padrao: '',
  primeiroRender: true,

  registrar(nome, tela) {
    this.telas.set(nome, tela);
    return this;
  },

  ler() {
    const bruto = location.hash.replace(/^#\/?/, '');
    const [caminho, consulta = ''] = bruto.split('?');
    const partes = caminho.split('/').filter(Boolean).map(decodeURIComponent);
    const query = {};
    new URLSearchParams(consulta).forEach((valor, chave) => { query[chave] = valor; });
    return { rota: partes[0] || '', path: partes.slice(1), query };
  },

  iniciar(padrao) {
    this.padrao = padrao;
    addEventListener('hashchange', () => this.despachar());
    this.despachar();
  },

  despachar() {
    const endereco = this.ler();
    const tela = this.telas.get(endereco.rota);
    if (!tela) {
      location.replace('#/' + this.padrao);
      return;
    }
    RAIZ.innerHTML = tela.render(endereco);
    document.title = tela.titulo + ' · ' + DADOS.formacao.nome + ' · ' + DADOS.formacao.marcaMae;
    marcarMenu(endereco.rota);
    if (tela.aposRender) tela.aposRender(endereco);
    fecharGaveta();
    if (this.primeiroRender) {
      this.primeiroRender = false;
    } else {
      scrollTo(0, 0);
      const foco = RAIZ.querySelector('[data-foco]');
      if (foco) foco.focus();
    }
  }
};

/* A área tem quatro seções. As quatro telas da formação vivem sob Aulas e
   ganharam uma segunda barra; as três seções da Onda 3 rodam sem o trilho de
   encontros, que só faz sentido ao lado do conteúdo da grade. */
const GRUPO_DA_ROTA = {
  aulas: 'formacao', materiais: 'formacao', calendario: 'formacao', plano: 'formacao',
  ferramentas: 'ferramentas', assistente: 'assistente', jornada: 'jornada'
};

function marcarMenu(rota) {
  const grupo = GRUPO_DA_ROTA[rota] || 'formacao';
  document.querySelectorAll('.topo-links a').forEach(a => {
    if (a.dataset.grupo === grupo) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  const subnav = document.getElementById('subnav');
  subnav.hidden = grupo !== 'formacao';
  subnav.querySelectorAll('a').forEach(a => {
    const alvo = a.getAttribute('href').replace('#/', '').split('?')[0].split('/')[0];
    if (alvo === rota) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  document.body.classList.toggle('sem-trilho', grupo !== 'formacao');
}

/* ---------- crachá do aluno · a faixa fica sempre visível, nunca em configurações ---------- */

function montarCracha() {
  const aluno = DADOS.aluno;
  const faixa = DADOS.faixaPorId(aluno.faixaAtual);
  const graus = aluno.grausConquistados.length;
  const barras = Array.from({ length: graus }, () => '<i></i>');
  CRACHA.innerHTML = html`
    <span class="cracha-faixa octo-janela" aria-hidden="true">${faixa.nome.trim().charAt(0)}</span>
    ${graus ? [html`<span class="cracha-graus" aria-hidden="true">${barras}</span>`] : false}
    <span class="cracha-txt">
      <span class="cracha-nome">${aluno.nome}</span>
      <span class="cracha-sub">Faixa ${faixa.nome}${graus ? [html` &middot; ${graus}º grau`] : false}</span>
    </span>`;
}

/* ---------- trilho de encontros ---------- */

function rotuloTrilho(encontro) {
  if (encontro.marco) {
    const m = marcoDoEncontro(encontro);
    if (m && m.tipo === 'faixa') return 'Gate · faixa ' + m.faixa.nome.toLowerCase();
    if (m) return 'Grau ' + m.grau.numero + ' na faixa ' + m.faixa.nome.toLowerCase();
  }
  if (encontro.formato === 'imersao') return 'Presencial · dia ' + encontro.diaImersao + ' de ' + encontro.diasImersao;
  if (encontro.formato === 'estudo-de-caso') return 'Estudo de caso';
  return null;
}

function montarTrilho() {
  const aluno = DADOS.aluno;
  const concluidos = new Set(aluno.encontrosConcluidos);
  const feitos = aluno.encontrosConcluidos.length;
  const total = DADOS.formacao.totalEncontros;

  const etapas = DADOS.etapas.map(etapa => {
    const aberta = etapa.encontros.includes(aluno.encontroAtual);
    const blocos = etapa.blocos.map(bloco => {
      const itens = bloco.encontros.map(id => {
        const e = DADOS.encontroPorId(id);
        const tag = rotuloTrilho(e);
        const classes = ['enc'];
        if (concluidos.has(id)) classes.push('enc--feito');
        if (id === aluno.encontroAtual) classes.push('enc--atual');
        if (e.marco) classes.push('enc--marco');
        return html`<li><a class="${classes.join(' ')}" href="#/aulas/${e.id}" data-encontro="${e.id}">
          <span class="enc-n">${String(e.numero).padStart(2, '0')}<i></i></span>
          <span class="enc-t">${e.titulo}${tag ? [html`<span class="enc-tag">${tag}</span>`] : false}</span>
        </a></li>`;
      });
      return html`<div class="bloco">
        <p class="bloco-k">Bloco ${bloco.numero} <em>&middot;</em> ${bloco.nome} <em>&middot;</em> ${bloco.duracaoSemanas} sem</p>
        <ul>${itens}</ul>
      </div>`;
    });
    return html`<details class="etapa"${aberta ? [' open'] : false}>
      <summary>
        <span class="etapa-n">0${etapa.numero}</span>
        <span><span class="etapa-nome">${etapa.nome}</span>
          <span class="etapa-meta">${etapa.encontros.length} encontros <em>&middot;</em> faixa ${etapa.faixaDestino}</span></span>
        <span class="etapa-sinal" aria-hidden="true"></span>
      </summary>
      ${blocos}
    </details>`;
  });

  TRILHO.innerHTML = html`
    <div class="trilho-topo">
      <svg class="trilho-marca" viewBox="0 0 200 200" aria-hidden="true"><use href="#trama"/></svg>
      <button class="trilho-fechar" type="button" data-fechar-trilho aria-label="Fechar a trilha"><i></i></button>
      <p class="rotulo"><i></i>Trilha da formação</p>
      <h2>${DADOS.formacao.totalEncontros} encontros em ${DADOS.formacao.totalSemanas} semanas</h2>
      <p class="de">${DADOS.formacao.periodo} <em>&middot;</em> ${DADOS.formacao.turma}</p>
      <div class="andamento">
        <div class="andamento-barra"><span style="width:${Math.round(feitos / total * 100)}%"></span></div>
        <p class="andamento-txt"><span><b>${feitos}</b> de ${total} concluídos</span><span>Faixa ${DADOS.faixaPorId(aluno.faixaAtual).nome}</span></p>
      </div>
    </div>
    <nav class="trilho-rolo" aria-label="Encontros da formação">${etapas}</nav>`;
}

function marcarTrilho(id) {
  TRILHO.querySelectorAll('.enc').forEach(a => {
    if (a.dataset.encontro === id) {
      a.setAttribute('aria-current', 'page');
      const dono = a.closest('details');
      if (dono && !dono.open) dono.open = true;
    } else {
      a.removeAttribute('aria-current');
    }
  });
}

function abrirGaveta() {
  document.body.classList.add(CLASSE_GAVETA);
  const primeiro = TRILHO.querySelector('[data-fechar-trilho]');
  if (primeiro) primeiro.focus();
}

function fecharGaveta() {
  if (!document.body.classList.contains(CLASSE_GAVETA)) return;
  document.body.classList.remove(CLASSE_GAVETA);
  const botao = document.querySelector('[data-abrir-trilho]');
  if (botao) botao.focus();
}

/* ---------- tela Aulas ---------- */

function marcoDoEncontro(encontro) {
  if (!encontro.marco) return null;
  for (const faixa of DADOS.faixas) {
    if (encontro.marco === 'gate-faixa-' + faixa.id) return { tipo: 'faixa', faixa };
    if (encontro.marco === 'gate-formatura' && faixa.id === 'marrom') return { tipo: 'faixa', faixa };
    const grau = faixa.graus.find(g => g.id === encontro.marco);
    if (grau) return { tipo: 'grau', faixa, grau };
  }
  return null;
}

function estadoDoMaterial(material, concluido) {
  if (material.tipo === 'entrega') return concluido ? 'Entregue' : 'A entregar';
  return DADOS.aluno.materiaisBaixados.includes(material.id) ? 'Baixado' : 'Não baixado';
}

function blocoRetomada(encontro) {
  const atual = DADOS.encontroPorId(DADOS.aluno.encontroAtual);
  if (encontro.id === atual.id) {
    return html`<div class="retomada">
      <p class="k"><i></i>Você está aqui</p>
      <p>Este é o encontro em que <b>${DADOS.aluno.nome}</b> parou. Os ${DADOS.aluno.encontrosConcluidos.length} anteriores estão concluídos.</p>
    </div>`;
  }
  return html`<div class="retomada">
    <p class="k"><i></i>Continue de onde parou</p>
    <p>Você parou no <b>Encontro ${atual.numero}</b> — ${atual.titulo}.</p>
    <a class="btn btn--fantasma btn--curto" href="#/aulas/${atual.id}">Voltar para o encontro ${atual.numero}</a>
  </div>`;
}

function blocoPalco(encontro, semana) {
  const bloco = DADOS.blocoPorId(encontro.blocoId);
  const etapa = DADOS.etapaPorId(encontro.etapaId);

  if (encontro.modalidade === 'presencial') {
    return html`<div class="palco palco--imersao sobre-navy">
      <div class="dia octo-janela"><b>${encontro.diaImersao}</b><span>de ${encontro.diasImersao}</span></div>
      <div>
        <h2>Imersão presencial, sem aula gravada</h2>
        <p>Este encontro acontece com o aluno na sala, em rotação de estações, com supervisão direta do ${DADOS.formacao.professor}. É prática com as próprias mãos — não existe gravação que substitua.</p>
        <p class="local"><i></i>${DADOS.formacao.localImersoes}</p>
      </div>
    </div>`;
  }

  return html`<div class="palco chapa chapa--palco sobre-navy">
    <p class="chapa-cap">${NOME_FORMATO[encontro.formato]} &middot; gravação da turma</p>
    <button class="palco-play" type="button" data-play aria-expanded="false" aria-controls="aviso-video">
      <span class="oct octo-janela" aria-hidden="true"><svg viewBox="0 0 24 28"><path d="M2 1.6 22 14 2 26.4Z" fill="currentColor"/></svg></span>
      <span class="rot-oculto">Assistir ao encontro ${encontro.numero}</span>
    </button>
    <div class="tarja">
      <p class="palco-tit">Etapa ${etapa.numero} &middot; Bloco ${bloco.numero} &middot; ${bloco.nome}</p>
      <p class="palco-dado"><span>Encontro <b>${String(encontro.numero).padStart(2, '0')}</b></span><span>Semana <b>${semana.numero}</b></span><span>${encontro.duracao}</span></p>
    </div>
  </div>`;
}

function blocoFicha(encontro, semana) {
  const formato = encontro.formato === 'imersao'
    ? NOME_FORMATO.imersao + ' · dia ' + encontro.diaImersao + ' de ' + encontro.diasImersao
    : NOME_FORMATO[encontro.formato];
  const horario = encontro.modalidade === 'presencial'
    ? 'Brasília · datas a definir'
    : DADOS.formacao.janelaAula + ' · dia da semana a definir';
  return html`<div class="ficha">
    <div><p class="k">Semana</p><p class="v dado">${semana.numero} &middot; ${semana.rotulo}</p></div>
    <div><p class="k">Formato</p><p class="v">${formato}</p></div>
    <div><p class="k">Duração</p><p class="v${encontro.duracao ? '' : ' aberto'}">${encontro.duracao || 'A definir'}</p></div>
    <div><p class="k">Horário</p><p class="v aberto">${horario}</p></div>
  </div>`;
}

function blocoMateriais(encontro) {
  if (encontro.materiais.length === 0) {
    return html`<p class="mats-vazio">O plano de ensino não lista material de apoio nem entrega para este encontro. Nada foi inventado para preencher o espaço.</p>`;
  }
  const concluido = DADOS.aluno.encontrosConcluidos.includes(encontro.id);
  const itens = encontro.materiais.map(m => {
    const estado = estadoDoMaterial(m, concluido);
    const marcado = estado === 'Baixado' || estado === 'Entregue';
    return html`<li class="mat${marcado ? ' mat--baixado' : ''}">
      <p class="k"><i></i>${NOME_TIPO_MATERIAL[m.tipo]}</p>
      <p class="nome">${m.nome}</p>
      <p class="estado">${estado}</p>
    </li>`;
  });
  return html`<ul class="mats">${itens}</ul>`;
}

function blocoMarco(encontro) {
  const marco = marcoDoEncontro(encontro);
  if (!marco) return '';
  const ehFaixa = marco.tipo === 'faixa';
  const insignia = ehFaixa ? 'Faixa<br>' + escapar(marco.faixa.nome) : 'Grau<br>' + marco.grau.numero;
  const titulo = ehFaixa
    ? 'Gate de passagem para a faixa ' + marco.faixa.nome.toLowerCase()
    : marco.grau.numero + 'º grau na faixa ' + marco.faixa.nome.toLowerCase();
  const criterio = ehFaixa ? marco.faixa.criterio : marco.grau.criterio;
  const fecho = ehFaixa
    ? 'A passagem acontece ao vivo, diante da turma, dentro da imersão. O que ela reconhece: ' + marco.faixa.identidade + '.'
    : 'Grau não tem cerimônia. É reconhecimento verbal em aula e registro na trilha — o momento alto fica reservado para as três passagens de faixa.';
  return html`<div class="marco sobre-navy">
    <p class="insig octo-janela">${[insignia]}</p>
    <div>
      <p class="k"><i></i>${ehFaixa ? 'Gate da etapa' : 'Grau intermediário'}</p>
      <h3>${titulo}</h3>
      <p>${criterio}</p>
      <p style="margin-top:var(--e-3)">${fecho}</p>
    </div>
  </div>`;
}

function blocoPassos(encontro) {
  const anterior = DADOS.encontroPorId('E' + (encontro.numero - 1));
  const proximo = DADOS.encontroPorId('E' + (encontro.numero + 1));
  const antes = anterior
    ? html`<a class="passo" href="#/aulas/${anterior.id}"><p class="k">Encontro anterior &middot; ${anterior.numero}</p><p class="t">${anterior.titulo}</p></a>`
    : html`<div class="passo passo--vazio"><p class="k">Início da formação</p><p class="t">Este é o primeiro encontro.</p></div>`;
  const depois = proximo
    ? html`<a class="passo passo--fim" href="#/aulas/${proximo.id}"><p class="k">Próximo encontro &middot; ${proximo.numero}</p><p class="t">${proximo.titulo}</p></a>`
    : html`<div class="passo passo--fim passo--vazio"><p class="k">Fim da formação</p><p class="t">Depois deste encontro vem a formatura.</p></div>`;
  return html`<div class="passos">${[antes, depois]}</div>`;
}

function renderAulas({ path }) {
  const pedido = path[0];
  let encontro = pedido ? DADOS.encontroPorId(pedido) : null;
  if (!encontro) {
    encontro = DADOS.encontroPorId(DADOS.aluno.encontroAtual);
    if (pedido) history.replaceState(null, '', '#/aulas/' + encontro.id);
  }

  const semana = DADOS.semanaDoEncontro(encontro.id);
  const etapa = DADOS.etapaPorId(encontro.etapaId);
  const bloco = DADOS.blocoPorId(encontro.blocoId);
  marcarTrilho(encontro.id);

  return html`
    ${[blocoRetomada(encontro)]}
    <header class="enc-cab">
      <p class="enc-trilha"><span class="enc-numero">Encontro ${String(encontro.numero).padStart(2, '0')}</span>
        <em>&middot;</em> Etapa ${etapa.numero} &middot; ${etapa.nome}
        <em>&middot;</em> Bloco ${bloco.numero} &middot; ${bloco.nome}</p>
      <h1 tabindex="-1" data-foco>${encontro.titulo}</h1>
    </header>
    ${[blocoPalco(encontro, semana)]}
    <div class="bloqueio palco-aviso" id="aviso-video" hidden>
      <p class="k"><i></i>Sem vídeo nesta demonstração</p>
      <p>Esta é uma demonstração da área de membros. <b>Nenhuma aula foi gravada</b> — a Turma Fundadora só começa em ${DADOS.formacao.periodo.split(' a ')[0]} de 2027. O player existe aqui para mostrar onde a gravação vai viver.</p>
    </div>
    ${[blocoFicha(encontro, semana)]}
    <section class="secao">
      <span class="junta"></span>
      <h2>O que este encontro cobre</h2>
      <p class="corrido">${encontro.resumo}</p>
      ${encontro.pendencia ? [html`<div class="bloqueio" style="margin-top:var(--e-5)"><p class="k"><i></i>Pendência aberta</p><p>${encontro.pendencia}</p></div>`] : false}
    </section>
    <section class="secao">
      <span class="junta"></span>
      <h2>Material do encontro</h2>
      ${[blocoMateriais(encontro)]}
      <p style="margin-top:var(--e-5)"><a class="txt" href="#/materiais?encontro=${encontro.id}">Ver este encontro na tela de Materiais</a></p>
    </section>
    ${encontro.marco ? [html`<section class="secao"><span class="junta"></span><h2>Marco na jornada de faixas</h2>${[blocoMarco(encontro)]}</section>`] : false}
    ${[blocoPassos(encontro)]}`;
}

/* ---------- base comum das três telas da onda 2 ---------- */

const CONCLUIDOS = new Set(DADOS.aluno.encontrosConcluidos);

const MESES = ['', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const NOME_TIPO_SEMANA = { aula: 'Aula', respiro: 'Respiro', imersao: 'Imersão', pausa: 'Pausa' };

function semanaDoAluno() {
  return DADOS.semanaDoEncontro(DADOS.aluno.encontroAtual);
}

function irPara(id) {
  const alvo = document.getElementById(id);
  if (!alvo) return;
  const parado = matchMedia('(prefers-reduced-motion: reduce)').matches;
  alvo.scrollIntoView({ behavior: parado ? 'auto' : 'smooth', block: 'start' });
  const foco = alvo.hasAttribute('tabindex') ? alvo : alvo.querySelector('[tabindex]');
  if (foco) foco.focus({ preventScroll: true });
}

/* ---------- tela Materiais ---------- */

const MATERIAIS = DADOS.encontros.flatMap(e => e.materiais.map(m => ({ ...m, encontro: e })));

const FILTRO = { encontro: '', etapa: '', bloco: '', tipo: '', busca: '' };

function semAcento(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function materiaisVisiveis() {
  const busca = semAcento(FILTRO.busca.trim());
  return MATERIAIS.filter(m => {
    if (FILTRO.encontro && m.encontro.id !== FILTRO.encontro) return false;
    if (FILTRO.etapa && m.encontro.etapaId !== FILTRO.etapa) return false;
    if (FILTRO.bloco && m.encontro.blocoId !== FILTRO.bloco) return false;
    if (FILTRO.tipo && m.tipo !== FILTRO.tipo) return false;
    if (busca && !semAcento(m.nome + ' ' + m.encontro.titulo).includes(busca)) return false;
    return true;
  });
}

function opcoesBloco() {
  const etapas = FILTRO.etapa ? [DADOS.etapaPorId(FILTRO.etapa)] : DADOS.etapas;
  const grupos = etapas.map(etapa => {
    const itens = etapa.blocos.map(bloco => html`<option value="${bloco.id}"${FILTRO.bloco === bloco.id ? [' selected'] : false}>Bloco ${bloco.numero} &middot; ${bloco.nome}</option>`);
    return html`<optgroup label="Etapa ${etapa.numero} · ${etapa.nome}">${itens}</optgroup>`;
  });
  return html`<option value="">Todos os blocos</option>${grupos}`;
}

function barraFiltros() {
  const etapas = DADOS.etapas.map(etapa => html`<option value="${etapa.id}"${FILTRO.etapa === etapa.id ? [' selected'] : false}>Etapa ${etapa.numero} &middot; ${etapa.nome}</option>`);
  const tipos = Object.keys(NOME_TIPO_MATERIAL).map(tipo => html`<option value="${tipo}"${FILTRO.tipo === tipo ? [' selected'] : false}>${NOME_TIPO_MATERIAL[tipo]}</option>`);
  return html`<div class="filtros">
    <label class="campo"><span class="rot">Etapa</span>
      <select data-filtro="etapa"><option value="">Todas as etapas</option>${etapas}</select></label>
    <label class="campo"><span class="rot">Bloco</span>
      <select id="mtl-bloco" data-filtro="bloco">${[opcoesBloco()]}</select></label>
    <label class="campo"><span class="rot">Tipo</span>
      <select data-filtro="tipo"><option value="">Todos os tipos</option>${tipos}</select></label>
    <label class="campo"><span class="rot">Busca</span>
      <input type="search" data-filtro="busca" value="${FILTRO.busca}" placeholder="Nome do material ou do encontro"></label>
  </div>`;
}

function textoConta() {
  const total = MATERIAIS.length;
  const vistos = materiaisVisiveis().length;
  if (vistos === total) return html`<b>${total}</b> materiais catalogados em ${DADOS.formacao.totalEncontros} encontros`;
  return html`<b>${vistos}</b> de ${total} materiais &middot; filtro ativo`;
}

function chipDoEncontro() {
  if (!FILTRO.encontro) return '';
  const encontro = DADOS.encontroPorId(FILTRO.encontro);
  if (!encontro) return '';
  return html`<div class="chip-encontro">
    <p class="k">Filtrando por encontro</p>
    <p class="t"><b>Encontro ${String(encontro.numero).padStart(2, '0')}</b> &middot; ${encontro.titulo}</p>
    <a class="btn btn--fantasma btn--curto" href="#/aulas/${encontro.id}">Abrir o encontro</a>
  </div>`;
}

function itemMaterial(material) {
  const concluido = CONCLUIDOS.has(material.encontro.id);
  const estado = estadoDoMaterial(material, concluido);
  const marcado = estado === 'Baixado' || estado === 'Entregue';
  const daFormacao = material.tipo !== 'entrega';
  const avisoId = 'aviso-' + material.id;
  return html`<li class="mat${marcado ? ' mat--baixado' : ''}">
    <p class="k"><i></i>${NOME_TIPO_MATERIAL[material.tipo]}</p>
    <div>
      <p class="nome">${material.nome}</p>
      <p class="de"><a href="#/aulas/${material.encontro.id}">Encontro ${String(material.encontro.numero).padStart(2, '0')} &middot; ${material.encontro.titulo}</a></p>
    </div>
    <div class="acao">
      <p class="estado">${estado}</p>
      ${daFormacao ? [html`<button class="btn btn--fantasma btn--curto" type="button" data-revelar aria-expanded="false" aria-controls="${avisoId}">Baixar</button>`] : false}
    </div>
    ${daFormacao ? [html`<div class="bloqueio mat-aviso" id="${avisoId}" hidden>
      <p class="k"><i></i>Arquivo ainda não produzido</p>
      <p>Esta é uma demonstração: <b>nenhum material da formação foi produzido</b>. A Turma Fundadora começa em fevereiro de 2027, e o arquivo vai ficar exatamente aqui, com o nome que o plano de ensino já registra.</p>
    </div>`] : false}
  </li>`;
}

function grupoMateriais(rotulo, titulo, texto, itens, vazio) {
  const lista = itens.length
    ? html`<ul class="mats">${itens.map(m => itemMaterial(m))}</ul>`
    : html`<p class="mats-vazio">${vazio}</p>`;
  return html`<section class="secao">
    <span class="junta"></span>
    <p class="mono-k" style="color:var(--tinta-45);margin-bottom:var(--e-3)">${rotulo}</p>
    <h2>${titulo}</h2>
    <p class="corrido">${texto}</p>
    ${[lista]}
  </section>`;
}

function corpoMateriais() {
  const lista = materiaisVisiveis();
  const daFormacao = lista.filter(m => m.tipo !== 'entrega');
  const doAluno = lista.filter(m => m.tipo === 'entrega');
  return html`
    ${[grupoMateriais(
      'O que você recebe',
      'Material de apoio da formação',
      'Template, caso clínico e vídeo que o Rodrigo entrega ao longo dos encontros. Só entra nesta lista o que o plano de ensino nomeia — nada foi acrescentado para preencher espaço.',
      daFormacao,
      'Nenhum material de apoio corresponde a este filtro.')]}
    ${[grupoMateriais(
      'O que você produz',
      'Entregas do aluno',
      'O output verificável de cada encontro. Não é arquivo para baixar: é o que sai das suas mãos e é corrigido pelo Rodrigo — e é o que sustenta grau e passagem de faixa.',
      doAluno,
      'Nenhuma entrega corresponde a este filtro.')]}`;
}

function renderMateriais({ query }) {
  FILTRO.encontro = query.encontro && DADOS.encontroPorId(query.encontro) ? query.encontro : '';
  marcarTrilho(FILTRO.encontro || null);
  return html`
    <header class="tela-cab">
      <span class="junta"></span>
      <h1 tabindex="-1" data-foco>Materiais</h1>
      <p>Tudo que a formação entrega e tudo que você produz, nos ${DADOS.formacao.totalEncontros} encontros, em uma lista só. Os dois estão separados de propósito: o que se baixa não é o que se entrega.</p>
    </header>
    ${[barraFiltros()]}
    <div class="filtros-pe">
      <p class="conta" id="mtl-conta" role="status">${[textoConta()]}</p>
      <button class="btn btn--fantasma btn--curto" type="button" data-limpar>Limpar todos os filtros</button>
    </div>
    ${[chipDoEncontro()]}
    <div id="mtl-lista">${[corpoMateriais()]}</div>`;
}

function atualizarMateriais() {
  const lista = document.getElementById('mtl-lista');
  if (!lista) return;
  lista.innerHTML = corpoMateriais();
  document.getElementById('mtl-conta').innerHTML = textoConta();
}

/* ---------- tela Calendário ---------- */

function estadoDaSemana(semana, atual) {
  if (semana.numero === atual.numero) return 'aqui';
  return semana.numero < atual.numero ? 'feita' : 'futura';
}

function mesesDoCalendario() {
  const meses = [];
  DADOS.semanas.forEach(semana => {
    const chave = semana.inicio.slice(0, 7);
    const ultimo = meses[meses.length - 1];
    if (ultimo && ultimo.chave === chave) ultimo.semanas.push(semana);
    else meses.push({ chave, nome: MESES[Number(chave.slice(5))], semanas: [semana] });
  });
  return meses;
}

function tiraDoAno(atual) {
  const celulas = DADOS.semanas.map(semana => {
    const estado = estadoDaSemana(semana, atual);
    const rotulo = 'Semana ' + semana.numero + ' · ' + NOME_TIPO_SEMANA[semana.tipo].toLowerCase() + ' · semana de ' + semana.rotulo;
    return html`<li><button class="cal-cel cal-cel--${semana.tipo} cal-cel--${estado}" type="button"
      data-semana="${semana.numero}" aria-label="${rotulo}"${estado === 'aqui' ? [' aria-current="true"'] : false}>
      <span class="cal-cel-marca${semana.tipo === 'aula' || semana.tipo === 'imersao' ? ' octo-janela' : ''}" aria-hidden="true">${semana.numero}</span>
      <span class="cal-cel-pe" aria-hidden="true"></span>
    </button></li>`;
  });
  return html`<ul class="cal-tira">${celulas}</ul>`;
}

function linhaSemana(semana, atual) {
  const estado = estadoDaSemana(semana, atual);
  const encontros = semana.encontros.map(id => DADOS.encontroPorId(id));
  const links = encontros.map(encontro => html`<li><a href="#/aulas/${encontro.id}">
    <b>E${encontro.numero}</b>${encontro.titulo}</a></li>`);
  const presencial = semana.tipo === 'imersao';
  return html`<li class="cal-sem cal-sem--${semana.tipo} cal-sem--${estado}" id="sem-${semana.numero}" tabindex="-1">
    <p class="cal-sem-n">${semana.numero}<span>semana</span></p>
    <div>
      <p class="cal-sem-k"><b>Semana de ${semana.rotulo}</b> <em>&middot;</em> ${NOME_TIPO_SEMANA[semana.tipo]}${estado === 'aqui' ? [html` <em>&middot;</em> <b>você está aqui</b>`] : false}</p>
      ${links.length ? [html`<ul class="cal-encs">${links}</ul>`] : false}
      ${semana.nota ? [html`<p class="cal-nota">${semana.nota}</p>`] : false}
      ${presencial ? [html`<p class="cal-pe"><i></i>${DADOS.formacao.localImersoes}&nbsp;&middot; datas exatas a definir</p>`] : false}
      ${semana.feriado ? [html`<p class="cal-pe"><i></i>Feriado na semana &middot; ${semana.feriado}</p>`] : false}
    </div>
  </li>`;
}

function renderCalendario() {
  marcarTrilho(null);
  const atual = semanaDoAluno();
  const meses = mesesDoCalendario();
  const conta = tipo => DADOS.semanas.filter(s => s.tipo === tipo).length;

  const navegacao = meses.map(mes => {
    const daAluna = mes.semanas.some(s => s.numero === atual.numero);
    return html`<button class="cal-mes-btn" type="button" data-mes="${mes.chave}">${mes.nome}${daAluna ? [html`<i title="mês em que a aluna está"></i>`] : false}</button>`;
  });

  const secoes = meses.map(mes => html`<section class="cal-mes" id="mes-${mes.chave}">
    <h2 tabindex="-1">${mes.nome} <span>semanas ${mes.semanas[0].numero} a ${mes.semanas[mes.semanas.length - 1].numero}</span></h2>
    <ol class="cal-semanas">${mes.semanas.map(semana => linhaSemana(semana, atual))}</ol>
  </section>`);

  return html`
    <header class="tela-cab">
      <span class="junta"></span>
      <h1 tabindex="-1" data-foco>Calendário 2027</h1>
      <p>As ${DADOS.formacao.totalSemanas} semanas da Turma Fundadora, de ${DADOS.semanas[0].rotulo} a ${DADOS.semanas[DADOS.semanas.length - 1].rotulo}. O ano fecha na formatura, na última semana de novembro.</p>
    </header>
    <div class="ficha ficha--5">
      <div><p class="k">Semanas</p><p class="v dado">${DADOS.formacao.totalSemanas}</p></div>
      <div><p class="k">Encontros online</p><p class="v dado">${DADOS.formacao.totalEncontrosOnline}</p></div>
      <div><p class="k">Imersões</p><p class="v dado">${conta('imersao')}</p></div>
      <div><p class="k">Respiros</p><p class="v dado">${conta('respiro')}</p></div>
      <div><p class="k">Pausa</p><p class="v dado">${conta('pausa')}</p></div>
    </div>
    ${[tiraDoAno(atual)]}
    <ul class="cal-legenda">
      <li><span class="cal-amostra cal-amostra--aula octo-janela"></span>Aula</li>
      <li><span class="cal-amostra cal-amostra--imersao octo-janela"></span>Imersão presencial</li>
      <li><span class="cal-amostra cal-amostra--respiro"></span>Respiro</li>
      <li><span class="cal-amostra cal-amostra--pausa"></span>Pausa</li>
      <li><span class="cal-amostra cal-amostra--feita"></span>Semana cumprida</li>
      <li><span class="cal-amostra cal-amostra--aqui"></span>Onde a aluna está</li>
    </ul>
    <div class="bloqueio" style="margin-top:var(--e-6)">
      <p class="k"><i></i>Dia da semana ainda em aberto</p>
      <p>A janela combinada é <b>${DADOS.formacao.janelaAula}</b>, mas o dia exato ainda não foi definido com o ${DADOS.formacao.professor}. Por isso este calendário marca a <b>semana</b>, nunca o dia e a hora.</p>
      <p>Os feriados abaixo são os que caem na semana indicada — quais deles atingem a aula depende justamente dessa decisão.</p>
    </div>
    <section class="secao">
      <span class="junta"></span>
      <h2>Os cinco respiros</h2>
      <p class="corrido">Respiro é semana sem aula nova, reservada para absorver conteúdo que estourou, plantão de dúvidas ou recuperação de calendário. É elasticidade operacional do ano — <b>não é conteúdo extra</b>, e por isso não aparece como entrega da formação. Cada um está no lugar em que está por um motivo, registrado na própria semana abaixo.</p>
    </section>
    <nav class="cal-meses" aria-label="Meses do ano letivo">${navegacao}</nav>
    ${secoes}`;
}

/* ---------- tela Plano de estudos ---------- */

function chipEncontro(encontro) {
  const classes = ['pl-chip'];
  if (CONCLUIDOS.has(encontro.id)) classes.push('pl-chip--feito');
  if (encontro.id === DADOS.aluno.encontroAtual) classes.push('pl-chip--aqui');
  if (encontro.marco) classes.push('pl-chip--marco');
  else if (encontro.modalidade === 'presencial') classes.push('pl-chip--presencial');
  const rotulo = 'Encontro ' + encontro.numero + ' · ' + encontro.titulo;
  return html`<a class="${classes.join(' ')}" href="#/aulas/${encontro.id}" title="${rotulo}" aria-label="${rotulo}">
    <span class="pl-chip-oct octo-janela" aria-hidden="true">${String(encontro.numero).padStart(2, '0')}</span></a>`;
}

function itemLinha(marca, estado, corpo) {
  return html`<div class="pl-item${estado ? ' pl-item--' + estado : ''}">
    <div class="pl-mk octo-janela" aria-hidden="true">${[marca]}</div>
    <div>${[corpo]}</div>
  </div>`;
}

function blocoDoPlano(bloco) {
  const encontros = bloco.encontros.map(id => DADOS.encontroPorId(id));
  const feitos = encontros.filter(encontro => CONCLUIDOS.has(encontro.id)).length;
  const aqui = bloco.encontros.includes(DADOS.aluno.encontroAtual);
  const marcos = encontros.filter(encontro => encontro.marco).map(encontro => blocoMarco(encontro));
  const classes = ['pl-bloco'];
  if (feitos === encontros.length) classes.push('pl-bloco--feito');
  if (aqui) classes.push('pl-bloco--aqui');
  return html`<div class="${classes.join(' ')}">
    <div class="pl-bloco-in">
      <div>
        <p class="pl-bloco-k">Bloco ${bloco.numero} <em>&middot;</em> ${bloco.duracaoSemanas} ${bloco.duracaoSemanas === 1 ? 'semana' : 'semanas'} <em>&middot;</em> <b>${feitos}/${encontros.length}</b> concluídos</p>
        <h3>${bloco.nome}</h3>
      </div>
      <div class="pl-chips">${encontros.map(encontro => chipEncontro(encontro))}</div>
    </div>
    ${marcos.length ? [marcos] : false}
  </div>`;
}

function itemEtapa(etapa) {
  const feitos = etapa.encontros.filter(id => CONCLUIDOS.has(id)).length;
  const total = etapa.encontros.length;
  const aqui = etapa.encontros.includes(DADOS.aluno.encontroAtual);
  const faixa = DADOS.faixaPorId(etapa.faixaDestino);
  const corpo = html`
    <div class="pl-etapa sobre-navy">
      <p class="rotulo"><i></i>Etapa ${etapa.numero} &middot; ${etapa.duracao} &middot; fecha na faixa ${faixa.nome.toLowerCase()}</p>
      <h2>${etapa.nome}</h2>
      <p class="obj">${etapa.objetivo}</p>
      <div class="andamento">
        <div class="andamento-barra"><span style="width:${Math.round(feitos / total * 100)}%"></span></div>
        <p class="andamento-txt"><span><b>${feitos}</b> de ${total} encontros</span><span>${etapa.blocos.length} blocos</span></p>
      </div>
    </div>
    <div class="pl-blocos">${etapa.blocos.map(bloco => blocoDoPlano(bloco))}</div>`;
  return itemLinha(html`<b>0${etapa.numero}</b>Etapa`, feitos === total ? 'feito' : (aqui ? 'aqui' : ''), corpo);
}

function reguaDeFaixas() {
  const atual = DADOS.faixaPorId(DADOS.aluno.faixaAtual);
  const cartoes = DADOS.faixas.map(faixa => {
    const conquistada = faixa.ordem <= atual.ordem;
    const proxima = faixa.ordem === atual.ordem + 1;
    const gate = faixa.encontroGate ? DADOS.encontroPorId(faixa.encontroGate) : null;
    const semana = gate ? DADOS.semanaDoEncontro(gate.id) : null;
    const feitos = faixa.graus.filter(grau => DADOS.aluno.grausConquistados.includes(grau.id)).length;
    const barras = faixa.graus.map(grau => html`<i class="${DADOS.aluno.grausConquistados.includes(grau.id) ? 'on' : ''}"></i>`);
    const classes = ['pl-fx'];
    if (conquistada) classes.push('pl-fx--feita');
    else if (proxima) classes.push('pl-fx--proxima');
    return html`<li class="${classes.join(' ')}">
      <span class="pl-fx-oct octo-janela" aria-hidden="true">Faixa<br>${faixa.nome.split(' / ')[0]}</span>
      <span class="pl-fx-k">${gate ? [html`Encontro ${gate.numero} &middot; semana de ${semana.rotulo}`] : [html`Entrada &middot; antes do Encontro 1`]}</span>
      <span class="pl-fx-n">Faixa ${faixa.nome}</span>
      <span class="pl-fx-id">O que ela reconhece: <b>${faixa.identidade}</b>.</span>
      ${faixa.graus.length ? [html`<span class="pl-fx-graus" aria-hidden="true">${barras}</span>
        <span class="pl-fx-k">${feitos} de ${faixa.graus.length} graus</span>`] : false}
      <span class="pl-fx-k">${conquistada ? 'Conquistada' : 'A conquistar'}</span>
    </li>`;
  });
  return html`<ul class="pl-regua">${cartoes}</ul>`;
}

function renderPlano() {
  marcarTrilho(null);
  const aluno = DADOS.aluno;
  const atual = DADOS.encontroPorId(aluno.encontroAtual);
  const semana = semanaDoAluno();
  const bloco = DADOS.blocoPorId(atual.blocoId);
  const feitosNoBloco = bloco.encontros.filter(id => CONCLUIDOS.has(id)).length;
  const feitos = aluno.encontrosConcluidos.length;
  const total = DADOS.formacao.totalEncontros;
  const imersoes = DADOS.semanas.filter(s => s.tipo === 'imersao');
  const proximaImersao = imersoes.find(s => s.numero > semana.numero);
  const ordemImersao = imersoes.indexOf(proximaImersao) + 1;
  const proximoMarco = DADOS.encontros.find(e => e.marco && e.numero >= atual.numero);
  const marco = marcoDoEncontro(proximoMarco);
  const semanaDoMarco = DADOS.semanaDoEncontro(proximoMarco.id);
  const marrom = DADOS.faixaPorId('marrom');
  const branca = DADOS.faixaPorId('branca');
  const ultimaSemana = DADOS.semanas[DADOS.semanas.length - 1];

  const entrada = itemLinha(html`Início`, 'feito', html`<div class="pl-bloco pl-bloco--feito">
    <p class="pl-bloco-k">Antes do Encontro 1 <em>&middot;</em> semana de ${DADOS.semanas[0].rotulo}</p>
    <h3>Faixa branca &middot; o ponto de partida</h3>
    <p class="nota">${branca.criterio}</p>
  </div>`);

  const fecho = itemLinha(html`Fim`, '', html`<div class="pl-fecho sobre-navy">
    <p class="rotulo"><i></i>Semana ${ultimaSemana.numero} &middot; ${ultimaSemana.rotulo} &middot; ${DADOS.formacao.localImersoes}</p>
    <h2>Formatura e faixa ${marrom.nome.split(' / ')[0].toLowerCase()}</h2>
    <p>O critério do último gate está no Encontro 43, acima. Depois dele, a identidade que a formação entrega é uma só: <b>${marrom.identidade}</b>.</p>
    <p>No jiu-jitsu real, marrom antecede a preta — e é de propósito que a formação para aqui. A faixa preta representa a elite da DTM, quem vira referência na área e ensina outros profissionais. Isso não se forma em dez meses, e o próprio ${DADOS.formacao.professor} é faixa roxa com um grau.</p>
  </div>`);

  return html`
    <header class="tela-cab">
      <span class="junta"></span>
      <h1 tabindex="-1" data-foco>Plano de estudos</h1>
      <p>A formação inteira em uma página: ${DADOS.formacao.totalEtapas} etapas, ${DADOS.formacao.totalBlocos} blocos, ${total} encontros e ${DADOS.faixas.length} faixas, de ${DADOS.formacao.periodo}. O progresso marcado é o de <b>${aluno.nome}</b>, a aluna fictícia desta demonstração.</p>
    </header>
    <div class="ficha">
      <div><p class="k">Encontros</p><p class="v dado">${total}</p></div>
      <div><p class="k">Semanas</p><p class="v dado">${DADOS.formacao.totalSemanas}</p></div>
      <div><p class="k">Dias presenciais</p><p class="v dado">${DADOS.formacao.totalDiasPresenciais}</p></div>
      <div><p class="k">Faixas</p><p class="v dado">${DADOS.faixas.length}</p></div>
    </div>

    <div class="pl-agora">
      <p class="k"><i></i>Onde você está</p>
      <h2><a href="#/aulas/${atual.id}">Encontro ${atual.numero} &middot; ${atual.titulo}</a></h2>
      <div class="andamento andamento--claro" style="margin-top:var(--e-5)">
        <div class="andamento-barra"><span style="width:${Math.round(feitos / total * 100)}%"></span></div>
        <p class="andamento-txt"><span><b>${feitos}</b> de ${total} encontros concluídos</span><span>Semana ${semana.numero} de ${DADOS.formacao.totalSemanas}</span></p>
      </div>
      <div class="pl-ritmo">
        <div>
          <p class="k"><i></i>Bloco atual</p>
          <p class="v"><b>${bloco.nome}</b> &middot; ${bloco.duracaoSemanas} ${bloco.duracaoSemanas === 1 ? 'semana' : 'semanas'}, ${bloco.encontros.length} encontros. ${feitosNoBloco} concluídos até aqui.</p>
        </div>
        <div>
          <p class="k"><i></i>Próximo marco</p>
          <p class="v"><b>${marco.tipo === 'faixa' ? [html`Passagem para a faixa ${marco.faixa.nome.toLowerCase()}`] : [html`${marco.grau.numero}º grau na faixa ${marco.faixa.nome.toLowerCase()}`]}</b> &middot; Encontro ${proximoMarco.numero}, semana de ${semanaDoMarco.rotulo}.</p>
        </div>
        <div>
          <p class="k"><i></i>Próxima imersão</p>
          <p class="v"><b>Imersão ${ordemImersao}</b> &middot; semana de ${proximaImersao.rotulo}, em Brasília. Encontros ${proximaImersao.encontros.map(id => DADOS.encontroPorId(id).numero).join(', ')}. Datas exatas a definir.</p>
        </div>
      </div>
    </div>

    <section class="secao">
      <span class="junta"></span>
      <h2>As quatro faixas</h2>
      <p class="corrido">A faixa não vem por tempo de curso nem por presença: cada uma tem um gate técnico, corrigido pelo ${DADOS.formacao.professor} ao vivo, dentro da imersão presencial que fecha a etapa. Os três graus da faixa azul saem dos estudos de caso mensais que já existem no plano de ensino — reconhecimento registrado, sem cerimônia.</p>
      ${[reguaDeFaixas()]}
      <div class="bloqueio" style="margin-top:var(--e-5)">
        <p class="k"><i></i>Identidade visual das faixas pendente</p>
        <p>As faixas aparecem aqui em tipografia e no octógono da marca. <b>A arte de cada faixa ainda não existe</b> — é entrega do direção de arte, e a paleta da Academia DTM não tem roxo nem marrom. Nenhuma cor de faixa foi inventada nesta demonstração.</p>
      </div>
    </section>

    <section class="secao">
      <span class="junta"></span>
      <h2>A jornada, do primeiro encontro à formatura</h2>
      <p class="corrido">Cada octógono é um encontro e leva para a aula. Os marcos aparecem no fim do bloco que os decide, com o critério exato que o aluno precisa cumprir.</p>
      <ul class="pl-legenda">
        <li><span class="am octo-janela"></span>A cumprir</li>
        <li><span class="am am--feito octo-janela"></span>Concluído</li>
        <li><span class="am am--aqui octo-janela"></span>Onde a aluna está</li>
        <li><span class="am am--marco"></span>Gate ou grau</li>
        <li><span class="am am--presencial"></span>Presencial</li>
      </ul>
      <div class="pl-linha">
        ${[entrada]}
        ${DADOS.etapas.map(etapa => itemEtapa(etapa))}
        ${[fecho]}
      </div>
    </section>`;
}

/* ===================================================================
   ONDA 3 · caixa de ferramentas, assistente e minha jornada
   ===================================================================
   Regra que vale para as três seções: nada de conteúdo clínico que não
   esteja em DADOS.ferramentas, e tudo que o Rodrigo ainda não escreveu
   aparece na tela como conteúdo do professor, com a lacuna declarada. */

const FERRAMENTAS = [
  { id: 'anamnese', numero: 1, nome: 'Anamnese assistida',
    linha: 'Grave a consulta, receba a ficha padronizada',
    resumo: 'A conversa vira ficha nos campos que você definiu: tipo e característica da dor, intensidade de 0 a 10, frequência semanal, fatores e o tripé sistêmico. A conversa que não agrega fica de fora.',
    guia: {
      oque: 'Um assistente que ouve a anamnese falada e devolve o texto já organizado nos seus campos, para colar no prontuário sem redigitar nada.',
      quando: 'Na consulta de avaliação, quando a anamnese profunda é falada. A ficha de 40 perguntas o paciente continua preenchendo antes, por escrito.',
      passos: [
        'Peça a autorização do paciente e ligue a gravação.',
        'Conduza a anamnese do seu jeito. O assistente separa o que é clínico do que é conversa.',
        'Revise a ficha, corrija o que for preciso e leve para o prontuário.'
      ]
    } },
  { id: 'whitebook', numero: 2, nome: 'Mini whitebook da DTM',
    linha: 'O guarda-chuva inteiro em consulta rápida',
    resumo: 'Os três grupos do guarda-chuva com os diagnósticos nomeados na formação, os sinais de cada um e a escada terapêutica correspondente, do conservador ao invasivo.',
    guia: {
      oque: 'A consulta de bolso do guarda-chuva: grupo, diagnóstico, sinal e degrau terapêutico na mesma tela.',
      quando: 'Entre uma consulta e outra, quando o quadro não fecha de primeira e você precisa relembrar por onde diferenciar.',
      passos: [
        'Busque pelo sinal que o paciente trouxe, ou abra o grupo direto.',
        'Confira o que separa aquele grupo dos dois vizinhos.',
        'Desça para a escada e escolha o degrau em que o caso entra.'
      ]
    } },
  { id: 'questionarios', numero: 3, nome: 'Questionários integrados',
    linha: 'Instrumentos de apoio com pontuação',
    resumo: 'Registro estruturado da dor, rastreio de sono, triagem de bruxismo e medidas de movimento mandibular. Pontuação calculada na hora, para a reavaliação ter com o que comparar.',
    guia: {
      oque: 'Quatro instrumentos de apoio que transformam o relato do paciente em número comparável entre consultas.',
      quando: 'Na avaliação inicial e em cada reavaliação. É o que permite comparar o antes e o depois na mesma unidade.',
      passos: [
        'Escolha o instrumento e preencha com o paciente na cadeira.',
        'Leia a pontuação e a faixa correspondente.',
        'Registre o resultado e repita o mesmo instrumento na reavaliação.'
      ]
    } },
  { id: 'proposta', numero: 4, nome: 'Calculadora de proposta',
    linha: 'Do plano terapêutico à proposta ao paciente',
    resumo: 'Marque os degraus que o caso pede, defina o número de sessões e o seu valor. A calculadora monta o resumo da proposta com o total, pronto para apresentar.',
    guia: {
      oque: 'A ponte entre o plano terapêutico e a conversa comercial: o que será feito, em quantas sessões e por quanto.',
      quando: 'Depois de fechar o diagnóstico e o plano, na hora de apresentar a proposta ao paciente.',
      passos: [
        'Marque na escada os degraus que entram neste caso.',
        'Preencha o número de sessões e o seu valor por sessão.',
        'Confira o resumo e leve para a devolutiva.'
      ]
    } }
];

const MAPA_FERRAMENTAS = new Map(FERRAMENTAS.map(f => [f.id, f]));
const GC = DADOS.ferramentas.guardaChuva;
const MAPA_GRUPOS = new Map(GC.grupos.map(g => [g.id, g]));

function selo(texto) {
  return html`<span class="proc"><i></i>${texto}</span>`;
}

function blocoProfessor(texto) {
  return html`<div class="professor">
      <p class="k"><i></i>Conteúdo do professor</p>
      <p>${texto}</p>
    </div>`;
}

function cabecalhoFerramenta(ferramenta) {
  return html`
    <a class="voltar" href="#/ferramentas"><i aria-hidden="true"></i>Caixa de ferramentas</a>
    <header class="tela-cab" style="padding-top:0">
      <span class="junta"></span>
      <h1 tabindex="-1" data-foco>${ferramenta.nome}</h1>
      <p>${ferramenta.resumo}</p>
    </header>
    <section class="guia sobre-navy">
      <p class="rotulo"><i></i>Como usar</p>
      <div class="guia-topo">
        <div><h2>O que é</h2><p>${ferramenta.guia.oque}</p></div>
        <div><h2>Quando usar</h2><p>${ferramenta.guia.quando}</p></div>
      </div>
      <ol class="guia-passos">
        ${ferramenta.guia.passos.map((passo, i) => html`<li><b>${i + 1}</b><span>${passo}</span></li>`)}
      </ol>
    </section>`;
}

/* ---------- hub da caixa ---------- */

function renderFerramentasHub() {
  return html`
    <header class="tela-cab">
      <span class="junta"></span>
      <h1 tabindex="-1" data-foco>Caixa de ferramentas</h1>
      <p>Quatro ferramentas de uso clínico diário, construídas em cima do método: o guarda-chuva, as três escadas e a leitura de precisão. Elas não substituem a formação — são o que sobra dela na sua cadeira, todo dia.</p>
    </header>
    <div class="fx-grid">
      ${FERRAMENTAS.map(f => html`
        <a class="fx-card" href="#/ferramentas/${f.id}">
          <span class="fx-card-n">
            <span class="fx-card-oct octo-janela" aria-hidden="true">${f.numero}</span>
            <span class="fx-card-k">${f.linha}</span>
          </span>
          <h2>${f.nome}</h2>
          <p>${f.resumo}</p>
          <span class="abre"><i aria-hidden="true"></i>Abrir ferramenta</span>
        </a>`)}
    </div>
    <section class="secao">
      <span class="junta"></span>
      <h2>De onde vem cada conteúdo</h2>
      <p class="corrido">Toda ferramenta desta caixa carrega a origem do que mostra: framework do método, encontro do plano de ensino ou fala do próprio ${DADOS.formacao.professor}. Onde o conteúdo ainda não foi escrito, a tela diz isso em vez de preencher sozinha.</p>
      ${[blocoProfessor('A listagem nominal completa dos cerca de dez diagnósticos do guarda-chuva ainda não foi fechada. O mini whitebook mostra os que o plano de ensino nomeia e declara a lacuna nos demais.')]}
    </section>`;
}

/* ---------- ferramenta 1 · anamnese assistida ---------- */

const ANAMNESE = DADOS.ferramentas.anamnese;
const GRAV = { estado: 'parado', consentiu: false, segundos: 0, relogio: null, passo: 0 };
const PASSOS_IA = ['Transcrevendo o áudio', 'Separando o que é clínico', 'Preenchendo os campos da ficha', 'Levantando candidatos no guarda-chuva'];

function tempoGrav(s) {
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

function painelGravador() {
  const g = GRAV;
  const gravando = g.estado === 'gravando';
  const processando = g.estado === 'processando';
  const pronto = g.estado === 'pronto';
  const rotuloBotao = gravando ? 'Parar' : (pronto ? 'Refazer' : 'Gravar');
  const estadoTexto = gravando
    ? 'Gravando a consulta. Conduza a anamnese normalmente — o assistente só ouve.'
    : processando ? 'Processando o áudio. Nenhum arquivo sai da máquina nesta etapa.'
    : pronto ? 'Ficha pronta. Revise campo a campo antes de levar para o prontuário.'
    : GRAV.consentiu ? 'Autorização registrada. A gravação pode começar.'
    : 'Marque a autorização do paciente para liberar a gravação.';
  const barras = Array.from({ length: 28 }, (_, i) =>
    html`<i style="animation-delay:${(i % 7) * 90}ms"></i>`);
  return html`
    <div class="gv-palco">
      <button class="gv-bt octo-janela${gravando ? ' gv-bt--rec' : ''}" type="button" data-grav
        ${!GRAV.consentiu || processando ? 'disabled' : ''}>${rotuloBotao}</button>
      <span class="gv-est">
        <span class="k"><i aria-hidden="true"></i>${gravando ? 'Gravando' : (processando ? 'Processando' : (pronto ? 'Concluído' : 'Em espera'))}</span>
        <p>${estadoTexto}</p>
      </span>
      <span class="gv-tempo dado">${tempoGrav(g.segundos)}</span>
    </div>
    <div class="gv-onda" aria-hidden="true">${barras}</div>
    ${processando || pronto ? [html`<ol class="gv-etapas">
      ${PASSOS_IA.map((passo, i) => {
        const classe = pronto || i < GRAV.passo ? 'ok' : (i === GRAV.passo ? 'agora' : '');
        return html`<li class="${classe}"><b>${i + 1}</b><span>${passo}</span></li>`;
      })}
    </ol>`] : false}`;
}

function blocoTranscricao() {
  return html`
    <section class="tr">
      <span class="junta"></span>
      <h2 style="font-family:var(--display);font-weight:800;font-size:var(--t-h3);letter-spacing:-.028em;color:var(--navy);margin-bottom:var(--e-3)">Transcrição, com o corte à vista</h2>
      <p class="corrido" style="font-size:var(--t-corpo-s);color:var(--tinta-70);max-width:64ch">Riscado é o que o assistente descartou por não agregar à ficha. Nada some sem você ver o que saiu.</p>
      <ul class="tr-lista">
        ${ANAMNESE.transcricao.map(fala => html`
          <li class="${fala.corte ? 'corte' : ''}">
            <span class="k">${fala.quem === 'paciente' ? 'Paciente' : 'Profissional'}</span>
            <span class="fala">${fala.texto}</span>
          </li>`)}
      </ul>
      <p style="margin-top:var(--e-4)">${[selo('Conversa escrita para esta demonstração · não é paciente real, não é consulta real')]}</p>
    </section>`;
}

function blocoFicha3() {
  const f = ANAMNESE.ficha;
  return html`
    <section class="tr">
      <span class="junta"></span>
      <h2 style="font-family:var(--display);font-weight:800;font-size:var(--t-h3);letter-spacing:-.028em;color:var(--navy);margin-bottom:var(--e-3)">Ficha padronizada</h2>
      <p class="corrido" style="font-size:var(--t-corpo-s);color:var(--tinta-70);max-width:64ch">Os mesmos campos, na mesma ordem, em todo paciente. É o que faz um caso ser comparável com o outro.</p>
      <div class="fc">
        <div class="fc-cab">
          <h3>Anamnese estruturada</h3>
          <span class="cod">${f.identificacao}</span>
        </div>
        <p style="margin-top:var(--e-3)">${[selo(f.notaIdentificacao)]}</p>
        <ul class="fc-lista">
          ${ANAMNESE.campos.map(campo => html`
            <li>
              <span class="k">${campo.rotulo}</span>
              <span class="v">${f.valores[campo.id]}</span>
            </li>`)}
        </ul>
        <div class="fc-rasc">
          <p class="k">Descartado da conversa</p>
          <p>${f.cortado.join(' \u00b7 ')}</p>
        </div>
      </div>

      <h3 style="font-family:var(--display);font-weight:800;font-size:var(--t-h3);letter-spacing:-.028em;color:var(--navy);margin-top:var(--e-7);margin-bottom:var(--e-2)">Candidatos no guarda-chuva</h3>
      <p class="corrido" style="font-size:var(--t-corpo-s);color:var(--tinta-70);max-width:64ch">Levantados a partir dos sinais que o paciente relatou. Não é diagnóstico: pela leitura de precisão, o diagnóstico só fecha com anamnese, exame físico e imagem juntos.</p>
      <ul class="cand">
        ${f.candidatos.map(c => {
          const grupo = MAPA_GRUPOS.get(c.grupo);
          return html`<li>
            <h4>Grupo ${grupo.nome}</h4>
            <p>${c.porque}</p>
            <a class="btn btn--fantasma btn--curto" href="#/ferramentas/whitebook?grupo=${grupo.id}">Abrir no whitebook</a>
          </li>`;
        })}
      </ul>

      <h3 style="font-family:var(--display);font-weight:800;font-size:var(--t-h3);letter-spacing:-.028em;color:var(--navy);margin-top:var(--e-7);margin-bottom:var(--e-2)">Rascunho de plano terapêutico</h3>
      <div class="fc-rasc" style="margin-top:var(--e-4)">
        <p class="k">Rascunho &middot; revisão do profissional obrigatória</p>
        <p>O assistente devolve o primeiro degrau da escada de cada candidato, nunca um degrau acima. Subir degrau é decisão sua, com o critério do timing de intervenção.</p>
      </div>
      ${f.rascunhoPlano.map(r => {
        const grupo = MAPA_GRUPOS.get(r.grupo);
        return html`
          <div style="margin-top:var(--e-5)">
            <span class="mono-k" style="color:var(--tinta-45)">Escada ${grupo.nome} &middot; degrau ${r.degrau}</span>
            <ul class="degraus">${r.itens.map(item => html`<li>${item}</li>`)}</ul>
          </div>`;
      })}
      <div class="fc-rasc" style="margin-top:var(--e-6)">
        <p class="k">Antes do local, o sistêmico</p>
        <p>${f.sistemico}</p>
      </div>
      <div style="margin-top:var(--e-6);display:flex;gap:var(--e-3);flex-wrap:wrap">
        <a class="btn" href="#/ferramentas/proposta">Montar a proposta com este plano</a>
        <a class="btn btn--fantasma" href="#/ferramentas/questionarios">Aplicar os questionários</a>
      </div>
    </section>`;
}

function renderAnamnese() {
  const ferramenta = MAPA_FERRAMENTAS.get('anamnese');
  return html`
    ${[cabecalhoFerramenta(ferramenta)]}
    <div class="gv sobre-navy">
      <div class="gv-in">
        <div class="gv-consent">
          <input type="checkbox" id="gv-ok" data-consent ${GRAV.consentiu ? 'checked' : ''}>
          <label for="gv-ok">
            <b>&ldquo;${ANAMNESE.consentimento}&rdquo;</b> &mdash; a autorização do paciente é dita, ouvida e registrada no prontuário antes de a gravação começar. Não é implícita.
            <span class="fonte">Escopo técnico da IA de anamnese &middot; privacidade</span>
          </label>
        </div>
        <div id="gv-palco">${[painelGravador()]}</div>
      </div>
    </div>
    <div id="gv-saida">${GRAV.estado === 'pronto' ? [blocoTranscricao(), blocoFicha3()] : false}</div>
    <section class="secao">
      <span class="junta"></span>
      <h2>O que sai da máquina e o que fica</h2>
      <p class="corrido">O áudio nunca sai daqui: a transcrição roda no seu próprio equipamento. O texto que vai para a estruturação vai sem nome, sem documento, sem endereço e sem telefone — o paciente vira um código, e a correspondência com o nome real fica só no seu prontuário. Áudio e texto intermediário são descartados depois que você confirma; o registro oficial continua sendo o do seu prontuário.</p>
      <p style="margin-top:var(--e-4)">${[selo('Escopo técnico da IA de anamnese · seções de arquitetura e privacidade')]}</p>
      ${[blocoProfessor('A revisão jurídica do texto de consentimento e dos termos de uso é etapa obrigatória antes de qualquer uso com paciente real. O desenho técnico acima não substitui parecer de advogado.')]}
    </section>`;
}

function atualizarGravador() {
  const palco = document.getElementById('gv-palco');
  if (!palco) { pararRelogio(); return; }
  palco.innerHTML = painelGravador();
  palco.closest('.gv').classList.toggle('gv--gravando', GRAV.estado === 'gravando');
  const saida = document.getElementById('gv-saida');
  if (saida) saida.innerHTML = GRAV.estado === 'pronto' ? blocoTranscricao() + blocoFicha3() : '';
}

function pararRelogio() {
  if (GRAV.relogio) { clearInterval(GRAV.relogio); GRAV.relogio = null; }
}

function alternarGravacao() {
  if (GRAV.estado === 'gravando') {
    pararRelogio();
    GRAV.estado = 'processando';
    GRAV.passo = 0;
    atualizarGravador();
    GRAV.relogio = setInterval(() => {
      GRAV.passo += 1;
      if (GRAV.passo >= PASSOS_IA.length) {
        pararRelogio();
        GRAV.estado = 'pronto';
      }
      atualizarGravador();
    }, 620);
    return;
  }
  pararRelogio();
  GRAV.estado = 'gravando';
  GRAV.segundos = 0;
  atualizarGravador();
  GRAV.relogio = setInterval(() => {
    GRAV.segundos += 1;
    const alvo = document.querySelector('.gv-tempo');
    if (!alvo) { pararRelogio(); return; }
    alvo.textContent = tempoGrav(GRAV.segundos);
  }, 1000);
}

/* ---------- ferramenta 2 · mini whitebook ---------- */

const WB = { busca: '', grupoFoco: '' };
const ROMANOS = ['', 'I', 'II', 'III'];

function escadaDoGrupo(grupo) {
  const degraus = [
    { nome: 'Conservador', itens: grupo.escada.conservador, classe: '' },
    { nome: 'Minimamente invasivo', itens: grupo.escada.intermediario, classe: ' esc-d--2' },
    { nome: 'Invasivo', itens: grupo.escada.avancado, classe: ' esc-d--3' }
  ];
  return html`
    <div class="esc">
      <span class="mono-k" style="color:var(--tinta-45)">Escada ${grupo.nome} &middot; encontros ${grupo.encontrosEscada[0].replace('E', '')} a ${grupo.encontrosEscada[grupo.encontrosEscada.length - 1].replace('E', '')}</span>
      <div class="esc-cols">
        ${degraus.map((d, i) => html`
          <div class="esc-d${d.classe}${i === 2 ? ' sobre-navy' : ''}">
            <p class="k">Degrau <b>${ROMANOS[i + 1]}</b> &middot; ${d.nome}</p>
            <ul>${d.itens.map(item => html`<li>${item}</li>`)}</ul>
          </div>`)}
      </div>
      ${grupo.escopo ? [html`<p style="margin-top:var(--e-4)">${[selo(grupo.escopo)]}</p>`] : false}
    </div>`;
}

function cartaoGrupo(grupo) {
  return html`
    <article class="wb-grupo" id="grupo-${grupo.id}">
      <div class="wb-cab">
        <span class="wb-oct octo-janela" aria-hidden="true">${grupo.ordem}</span>
        <div class="wb-cab-txt">
          <h2>Grupo ${grupo.nome}</h2>
          <p>${grupo.resumo}</p>
        </div>
      </div>
      <div class="wb-secs">
        <div class="wb-sec">
          <span class="mono-k">Diagnósticos nomeados na formação</span>
          <ul class="wb-dx">
            ${grupo.diagnosticos.map(d => html`<li><b>${d.nome}</b>${[selo(d.fonte)]}</li>`)}
          </ul>
          <div style="margin-top:var(--e-3)">${[blocoProfessor(grupo.lacuna)]}</div>
        </div>
        <div class="wb-sec">
          <span class="mono-k">Sinais registrados</span>
          <ul class="wb-sn">
            ${grupo.sinais.map(s => html`<li><b>${s.termo}</b><p>${s.nota}</p>${[selo(s.fonte)]}</li>`)}
          </ul>
        </div>
      </div>
      <div style="margin-top:var(--e-6);padding-top:var(--e-5);border-top:1px solid var(--linha-escura)">
        <span class="mono-k" style="color:var(--tinta-45)">Como diferenciar dos vizinhos</span>
        <p style="font-size:var(--t-corpo-s);color:var(--tinta-70);line-height:1.6;max-width:64ch;margin-top:var(--e-3);text-wrap:pretty">${grupo.diferencial}</p>
        <div style="margin-top:var(--e-4)">${[blocoProfessor(grupo.diferencialLacuna)]}</div>
        <a class="btn btn--fantasma btn--curto" style="margin-top:var(--e-4)" href="#/aulas/${grupo.encontroDiagnostico}">Abrir o encontro ${grupo.encontroDiagnostico.replace('E', '')}</a>
      </div>
      ${[escadaDoGrupo(grupo)]}
    </article>`;
}

function semAcentoBusca(t) { return semAcento(t); }

function resultadoBusca() {
  const termo = WB.busca.trim();
  if (!termo) return '';
  const alvo = semAcentoBusca(termo);
  const achados = GC.sintomas.filter(s => semAcentoBusca(s.termo).includes(alvo) ||
    (s.nota && semAcentoBusca(s.nota).includes(alvo)));
  if (!achados.length) {
    return html`<div class="wb-res">
      <p class="k">Sem correspondência</p>
      <p>Nenhum sinal com esse termo está escrito nos materiais da formação. O mapa completo de sintoma para diagnóstico é conteúdo do professor — quando ele for escrito, a busca passa a encontrar.</p>
    </div>`;
  }
  return html`<div class="wb-res">
    <p class="k">${achados.length} ${achados.length === 1 ? 'sinal encontrado' : 'sinais encontrados'}</p>
    <ul>
      ${achados.map(s => {
        const nomes = s.grupos.map(id => MAPA_GRUPOS.get(id).nome);
        return html`<li>
          <b>${s.termo}</b> &mdash; ${nomes.length ? [html`candidato: grupo <b>${nomes.join(', ')}</b>.`] : [html`sem grupo mapeado nos materiais.`]}
          <br>${[selo(s.fonte)]}
          ${s.lacuna ? [html`<br><span style="font-size:var(--t-legenda);color:var(--tinta-70);line-height:1.5">${s.lacuna}</span>`] : false}
          ${s.nota ? [html`<br><span style="font-size:var(--t-legenda);color:var(--tinta-70);line-height:1.5">${s.nota}</span>`] : false}
        </li>`;
      })}
    </ul>
  </div>`;
}

function renderWhitebook({ query }) {
  const ferramenta = MAPA_FERRAMENTAS.get('whitebook');
  if (query.grupo && MAPA_GRUPOS.has(query.grupo)) WB.grupoFoco = query.grupo;
  const grupos = GC.grupos.slice().sort((a, b) => {
    if (WB.grupoFoco === a.id) return -1;
    if (WB.grupoFoco === b.id) return 1;
    return a.ordem - b.ordem;
  });
  return html`
    ${[cabecalhoFerramenta(ferramenta)]}
    <section class="painel" style="background:var(--navy);border:0;padding:var(--e-6);margin-bottom:var(--e-6)">
      <div class="sobre-navy">
        <p class="rotulo"><i></i>A tese</p>
        <p style="font-family:var(--display);font-weight:800;font-size:clamp(20px,2.6vw,27px);letter-spacing:-.03em;line-height:1.15;color:var(--papel);max-width:24ch;margin-top:var(--e-3)">${GC.tese}</p>
        <p style="font-size:var(--t-corpo-s);color:var(--papel-72);line-height:1.6;max-width:60ch;margin-top:var(--e-4);text-wrap:pretty">${GC.analogia}</p>
        <p style="font-size:var(--t-corpo-s);color:var(--papel-72);line-height:1.6;max-width:60ch;margin-top:var(--e-3);text-wrap:pretty">${GC.misto}</p>
      </div>
    </section>

    <div class="wb-busca">
      <label class="campo">
        <span class="rot">Busca por sinal ou sintoma</span>
        <input type="search" id="wb-campo" data-wb-busca value="${WB.busca}" placeholder="estalido, dor à palpação, crepitação…" autocomplete="off">
      </label>
      <div class="wb-chips">
        ${GC.sintomas.slice(0, 4).map(s => html`<button class="wb-chip" type="button" data-wb-chip="${s.termo}">${s.termo.split(' ').slice(0, 3).join(' ')}</button>`)}
      </div>
    </div>
    <div id="wb-res">${[resultadoBusca()]}</div>
    ${grupos.map(g => cartaoGrupo(g))}`;
}

/* ---------- ferramenta 3 · questionários ---------- */

const QZ = DADOS.ferramentas.questionarios;
const RESP = {};

function valorResp(id, padrao) {
  return Object.prototype.hasOwnProperty.call(RESP, id) ? RESP[id] : padrao;
}

function itemSimNao(item) {
  const v = valorResp(item.id, null);
  return html`
    <li>
      <span class="rot">${item.rotulo}${item.pendente ? [html`<em>${[selo('enunciado pendente')]}</em>`] : false}</span>
      <span class="qz-sn">
        <button type="button" data-qz-sn="${item.id}" data-v="1" aria-pressed="${v === 1 ? 'true' : 'false'}">Sim</button>
        <button type="button" data-qz-sn="${item.id}" data-v="0" aria-pressed="${v === 0 ? 'true' : 'false'}">Não</button>
      </span>
    </li>`;
}

function itemEscala(item) {
  const v = valorResp(item.id, 0);
  return html`
    <li>
      <span class="rot">${item.rotulo}</span>
      <span class="qz-esc">
        <input type="range" min="0" max="${item.max}" step="1" value="${v}" data-qz-esc="${item.id}"
          aria-label="${item.rotulo}">
        <output class="dado">${v}</output>
      </span>
    </li>`;
}

function itemMedida(item) {
  return html`
    <li>
      <span class="rot">${item.rotulo}</span>
      <span class="qz-mm">
        <input type="number" min="0" max="99" inputmode="numeric" value="${valorResp(item.id, '')}"
          data-qz-mm="${item.id}" aria-label="${item.rotulo} em milímetros">
        <span>${item.unidade}</span>
      </span>
    </li>`;
}

function placarSimNao(itens) {
  return itens.reduce((soma, item) => soma + (valorResp(item.id, 0) === 1 ? 1 : 0), 0);
}

function corpoQuestionario(q) {
  if (q.id === 'dor') {
    const pico = valorResp('pico', 0);
    const dias = valorResp('frequencia', 0);
    return html`
      <ul class="qz-itens">${q.itens.map(itemEscala)}</ul>
      <div class="qz-fim sobre-navy">
        <span class="placar"><b>${pico}</b><span>pior dor<br>0 a 10</span></span>
        <span class="placar"><b>${dias}</b><span>dias com dor<br>na semana</span></span>
        <p>${q.leitura}</p>
      </div>
      <p style="margin-top:var(--e-4)">${[selo(q.leituraFonte)]}</p>`;
  }
  if (q.id === 'sono') {
    const soma = placarSimNao(q.itens);
    const bateu = soma >= q.corte;
    return html`
      <div style="margin-top:var(--e-5)">${[blocoProfessor(q.lacuna)]}</div>
      <ul class="qz-itens">${q.itens.map(itemSimNao)}</ul>
      <div class="qz-fim sobre-navy">
        <span class="placar"><b>${soma}</b><span>de ${q.itens.length}<br>corte em ${q.corte}</span></span>
        <p>${bateu ? [html`<b>Acima do corte.</b> ${q.leitura}`] : [html`Abaixo do corte de ${q.corte} pontos. ${q.leitura}`]}</p>
      </div>
      <p style="margin-top:var(--e-4)">${[selo(q.leituraFonte)]}</p>`;
  }
  if (q.id === 'bruxismo') {
    return html`
      <div style="margin-top:var(--e-5)">${[blocoProfessor(q.lacuna)]}</div>
      ${q.grupos.map(g => {
        const soma = placarSimNao(g.itens);
        return html`
          <p class="qz-sub">${g.rotulo}<em>${soma} de ${g.itens.length}</em></p>
          <ul class="qz-itens">${g.itens.map(itemSimNao)}</ul>
          <div class="fc-rasc" style="margin-top:var(--e-4)">
            <p class="k">Porta do tripé local</p>
            <p>${g.conduta}</p>
          </div>`;
      })}
      <div class="qz-fim sobre-navy" style="margin-top:var(--e-5)">
        <span class="placar"><b>${placarSimNao(q.grupos[0].itens)}</b><span>sono</span></span>
        <span class="placar"><b>${placarSimNao(q.grupos[1].itens)}</b><span>vigília</span></span>
        <p>${q.leitura}</p>
      </div>
      <p style="margin-top:var(--e-4)">${[selo(q.leituraFonte)]}</p>`;
  }
  return html`
    <ul class="qz-itens">${q.itens.map(itemMedida)}</ul>
    <p class="qz-sub">Sons articulares<em>marque o que ouviu</em></p>
    <div class="qz-sons">
      ${q.sons.map((som, i) => html`<button class="wb-chip" type="button" data-qz-som="som-${i}"
        aria-pressed="${valorResp('som-' + i, 0) === 1 ? 'true' : 'false'}"
        style="${valorResp('som-' + i, 0) === 1 ? 'background:var(--navy);color:var(--papel);border-color:var(--navy)' : ''}">${som}</button>`)}
    </div>
    <div class="qz-fim sobre-navy" style="margin-top:var(--e-5)">
      <span class="placar"><b>${valorResp('abertura', 0) || '--'}</b><span>abertura<br>máxima em mm</span></span>
      <p>${q.leitura}</p>
    </div>
    <div style="margin-top:var(--e-5)">${[blocoProfessor(q.lacuna)]}</div>
    <p style="margin-top:var(--e-4)">${[selo(q.leituraFonte)]}</p>`;
}

function renderQuestionarios() {
  const ferramenta = MAPA_FERRAMENTAS.get('questionarios');
  return html`
    ${[cabecalhoFerramenta(ferramenta)]}
    <div class="bloqueio" style="margin-bottom:var(--e-6)">
      <p class="k"><i></i>Instrumento de apoio</p>
      <p>Os quatro instrumentos organizam o relato e a medida do paciente. <b>Nenhum deles substitui avaliação clínica</b>, e nenhum fecha diagnóstico sozinho.</p>
    </div>
    <div id="qz-lista">${[corpoListaQuestionarios()]}</div>`;
}

function corpoListaQuestionarios() {
  return QZ.map(q => html`
    <section class="qz" id="qz-${q.id}">
      <div class="qz-cab">
        <h2>${q.nome}</h2>
        <p>${q.resumo}</p>
      </div>
      ${[corpoQuestionario(q)]}
    </section>`).join('');
}

function atualizarQuestionarios() {
  const alvo = document.getElementById('qz-lista');
  if (alvo) alvo.innerHTML = corpoListaQuestionarios();
}

/* ---------- ferramenta 4 · calculadora de proposta ---------- */

const PP = { itens: new Set(), sessoes: '', valor: '' };

function itensDaProposta() {
  const lista = [];
  GC.grupos.forEach(grupo => {
    [['Conservador', grupo.escada.conservador], ['Minimamente invasivo', grupo.escada.intermediario],
     ['Invasivo', grupo.escada.avancado]].forEach(([degrau, itens]) => {
      itens.forEach((nome, i) => {
        lista.push({ id: grupo.id + '-' + degrau.charAt(0) + i, grupo: grupo.nome, degrau, nome });
      });
    });
  });
  return lista;
}

const ITENS_PROPOSTA = itensDaProposta();
const MAPA_ITENS_PROPOSTA = new Map(ITENS_PROPOSTA.map(i => [i.id, i]));

function moeda(n) {
  return 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function corpoProposta() {
  const sessoes = Number(PP.sessoes) || 0;
  const valor = Number(String(PP.valor).replace(',', '.')) || 0;
  const total = sessoes * valor;
  const marcados = ITENS_PROPOSTA.filter(i => PP.itens.has(i.id));
  return html`
    <div class="pp">
      <div class="pp-col">
        <span class="mono-k">1 &middot; o que entra neste caso</span>
        ${GC.grupos.map(grupo => html`
          <div style="margin-top:var(--e-5)">
            <span class="mono-k" style="display:block;color:var(--navy);margin-bottom:var(--e-2)">Escada ${grupo.nome}</span>
            <ul class="pp-itens">
              ${ITENS_PROPOSTA.filter(i => i.grupo === grupo.nome).map(i => html`
                <li><button class="pp-item" type="button" data-pp-item="${i.id}"
                  aria-pressed="${PP.itens.has(i.id) ? 'true' : 'false'}">
                  <span class="mk" aria-hidden="true">&check;</span>
                  <span class="nm">${i.nome}<span class="dg">${i.degrau}</span></span>
                </button></li>`)}
            </ul>
          </div>`)}
      </div>
      <div>
        <div class="pp-col">
          <span class="mono-k">2 &middot; sessões e valor</span>
          <div class="pp-campos" style="margin-top:0;padding-top:0;border-top:0">
            <label class="campo">
              <span class="rot">Número de sessões</span>
              <input type="number" min="0" max="99" inputmode="numeric" value="${PP.sessoes}"
                data-pp-campo="sessoes" placeholder="0">
            </label>
            <label class="campo">
              <span class="rot">Valor por sessão</span>
              <input type="text" inputmode="decimal" value="${PP.valor}"
                data-pp-campo="valor" placeholder="preencha com o seu valor">
            </label>
          </div>
          <p style="margin-top:var(--e-4)">${[selo('O valor é seu. A calculadora não sugere preço nenhum.')]}</p>
        </div>
        <div class="pp-total sobre-navy">
          <p class="k">Total da proposta</p>
          <p class="n dado${total ? '' : ' vazio'}">${total ? moeda(total) : 'preencha sessões e valor'}</p>
          <p>${sessoes && valor ? [html`${sessoes} ${sessoes === 1 ? 'sessão' : 'sessões'} &middot; ${moeda(valor)} por sessão.`] : [html`O total aparece quando os dois campos estiverem preenchidos.`]}</p>
        </div>
        <div class="pp-col" style="margin-top:var(--e-5)">
          <span class="mono-k">3 &middot; resumo para a devolutiva</span>
          <div class="pp-doc" style="margin-top:var(--e-3);padding-top:0;border-top:0">
            ${marcados.length ? [html`
              <h3>Plano proposto</h3>
              <ul>${marcados.map(i => html`<li>${i.nome} <span class="mono-k" style="color:var(--tinta-45)">&middot; ${i.grupo} &middot; ${i.degrau}</span></li>`)}</ul>`]
              : [html`<p class="pp-vazio">Marque ao lado os degraus que este caso pede e eles aparecem aqui, na ordem da escada.</p>`]}
          </div>
          <div class="fc-rasc" style="margin-top:var(--e-5)">
            <p class="k">Rascunho &middot; revisão do profissional obrigatória</p>
            <p>A proposta sai da escada, e a escada sobe do conservador ao invasivo. Marcar um degrau alto sem ter passado pelo anterior é decisão sua, com o critério do timing de intervenção.</p>
          </div>
        </div>
      </div>
    </div>`;
}

function renderProposta() {
  const ferramenta = MAPA_FERRAMENTAS.get('proposta');
  return html`
    ${[cabecalhoFerramenta(ferramenta)]}
    <div id="pp-corpo">${[corpoProposta()]}</div>
    <section class="secao">
      <span class="junta"></span>
      <h2>Onde isso é ensinado</h2>
      <p class="corrido">A apresentação do plano ao paciente é conteúdo da Etapa 3, nos encontros de consulta de avaliação, apresentação do plano pelos Dois Tripés e fechamento. A calculadora é a ferramenta; a narrativa é a aula.</p>
      <div style="margin-top:var(--e-5);display:flex;gap:var(--e-3);flex-wrap:wrap">
        <a class="btn btn--fantasma btn--curto" href="#/aulas/E36">Encontro 36</a>
        <a class="btn btn--fantasma btn--curto" href="#/aulas/E37">Encontro 37</a>
        <a class="btn btn--fantasma btn--curto" href="#/aulas/E38">Encontro 38</a>
      </div>
    </section>`;
}

function atualizarProposta() {
  const alvo = document.getElementById('pp-corpo');
  if (alvo) alvo.innerHTML = corpoProposta();
}

/* ---------- roteador da caixa ---------- */

function renderFerramentas(endereco) {
  marcarTrilho(null);
  const id = endereco.path[0];
  if (id === 'anamnese') return renderAnamnese();
  if (id === 'whitebook') return renderWhitebook(endereco);
  if (id === 'questionarios') return renderQuestionarios();
  if (id === 'proposta') return renderProposta();
  return renderFerramentasHub();
}

/* ---------- assistente da formação ---------- */

const AS = DADOS.ferramentas.assistente;
const AS_VAZIAS = new Set(['para', 'pela', 'pelo', 'onde', 'como', 'qual', 'quais', 'aula',
  'aulas', 'que', 'com', 'sem', 'dos', 'das', 'nos', 'nas', 'uma', 'uns', 'foi', 'ele', 'ela',
  'esse', 'essa', 'isso', 'nao', 'sim', 'entre', 'sobre', 'falamos', 'falou', 'temos', 'tem',
  'encontro', 'formacao', 'gente', 'quando', 'porque', 'entra', 'ensina', 'aprendo', 'diferencio',
  'apresentar', 'muito', 'mais', 'meu', 'minha', 'meus', 'pode', 'posso']);

const AS_INDICE = DADOS.encontros.map(e => {
  const bloco = DADOS.blocoPorId(e.blocoId);
  return { encontro: e, bloco, texto: semAcento(e.titulo + ' ' + e.resumo), tituloLimpo: semAcento(e.titulo),
    blocoLimpo: semAcento(bloco ? bloco.nome : '') };
});

function termosDaPergunta(texto) {
  return semAcento(texto).replace(/[^a-z0-9\s]/g, ' ').split(/\s+/)
    .filter(t => t.length > 3 && !AS_VAZIAS.has(t));
}

function buscarEncontros(texto) {
  const termos = termosDaPergunta(texto);
  if (!termos.length) return [];
  return AS_INDICE.map(item => {
    let nota = 0;
    termos.forEach(t => {
      if (item.tituloLimpo.includes(t)) nota += 3;
      else if (item.texto.includes(t)) nota += 1;
      if (item.blocoLimpo.includes(t)) nota += 2;
    });
    return { item, nota };
  }).filter(r => r.nota > 0).sort((a, b) => b.nota - a.nota).slice(0, 2).map(r => r.item);
}

const AS_LOG = [];

function bolhaAssistente(pergunta, chave) {
  const achados = buscarEncontros(chave || pergunta);
  if (!achados.length) {
    return html`<p>Não encontrei nada com esse termo nos títulos e nos resumos dos ${DADOS.formacao.totalEncontros} encontros. Tente pelo termo técnico — o índice é o da grade, não uma busca livre.</p>`;
  }
  const abertura = achados.length === 1
    ? 'Esse assunto está em um encontro:'
    : 'Esse assunto aparece em dois encontros:';
  return html`
    <p>${abertura}</p>
    ${achados.map(({ encontro, bloco }) => {
      const etapa = DADOS.etapaPorId(encontro.etapaId);
      return html`
        <a class="as-ref" href="#/aulas/${encontro.id}">
          <span class="n">Encontro ${encontro.numero} &middot; Etapa ${etapa.numero} &middot; Bloco ${bloco.numero} &middot; ${bloco.nome}</span>
          <span class="t">${encontro.titulo}</span>
          <span class="r">${encontro.resumo}</span>
          <span class="as-min">
            <span class="sel">Minutagem</span>
            <span>${AS.limite}</span>
          </span>
        </a>`;
    })}`;
}

function corpoAssistente() {
  const inicio = html`
    <div class="as-b">
      <span class="k"><i aria-hidden="true"></i>Assistente</span>
      <div class="bolha">
        <p>Pergunte por um assunto e eu digo em que encontro ele foi tratado, em que etapa e em que bloco. ${AS.aviso}</p>
      </div>
    </div>`;
  const trocas = AS_LOG.map(troca => html`
    <div class="as-b as-b--eu">
      <span class="k">${DADOS.aluno.nome}<i aria-hidden="true"></i></span>
      <div class="bolha"><p>${troca.texto}</p></div>
    </div>
    <div class="as-b">
      <span class="k"><i aria-hidden="true"></i>Assistente</span>
      <div class="bolha">${[bolhaAssistente(troca.texto, troca.chave)]}</div>
    </div>`);
  const usadas = new Set(AS_LOG.map(t => t.texto));
  return html`
    <div class="as-log" id="as-log">${[inicio, ...trocas]}</div>
    <div class="as-perg">
      <span class="mono-k">Perguntas prontas</span>
      <div class="lista">
        ${AS.perguntas.map(p => html`<button type="button" data-as-perg="${p.texto}"
          ${usadas.has(p.texto) ? 'disabled' : ''}>${p.texto}</button>`)}
      </div>
      <form class="pp-campos" data-as-form style="margin-top:var(--e-5);padding-top:var(--e-5);grid-template-columns:minmax(0,1fr) auto;align-items:end">
        <label class="campo">
          <span class="rot">Ou pergunte com as suas palavras</span>
          <input type="text" data-as-livre placeholder="ressonância, artrocentese, toxina, recepção…" autocomplete="off">
        </label>
        <button class="btn" type="submit">Perguntar</button>
      </form>
    </div>`;
}

function renderAssistente() {
  marcarTrilho(null);
  return html`
    <header class="tela-cab">
      <span class="junta"></span>
      <h1 tabindex="-1" data-foco>Assistente da formação</h1>
      <p>Onde foi mesmo que falamos daquilo? O assistente varre os ${DADOS.formacao.totalEncontros} encontros da grade e devolve o encontro, a etapa e o bloco, com o resumo da aula e o atalho para ela.</p>
    </header>
    <div class="as" id="as-caixa">${[corpoAssistente()]}</div>
    <section class="secao">
      <span class="junta"></span>
      <h2>O que ele responde, e o que ele não responde</h2>
      <p class="corrido">Ele responde sobre a <b>grade</b>: título, resumo, etapa, bloco e posição de cada encontro. Ele não responde dúvida clínica, não dá conduta e não inventa referência — quando o termo não está na grade, ele diz que não encontrou.</p>
      ${[blocoProfessor('A minutagem do trecho dentro da aula entra quando as gravações existirem. Nenhuma aula da Turma Fundadora foi gravada — a turma começa em fevereiro de 2027.')]}
    </section>`;
}

function atualizarAssistente() {
  const caixa = document.getElementById('as-caixa');
  if (!caixa) return;
  caixa.innerHTML = corpoAssistente();
  const log = document.getElementById('as-log');
  if (log && log.lastElementChild) log.lastElementChild.scrollIntoView({ block: 'center' });
}

/* ---------- minha jornada ---------- */

const JORNADA = DADOS.ferramentas.jornada;

function proximoMarco() {
  const atual = DADOS.encontroPorId(DADOS.aluno.encontroAtual);
  const seguinte = DADOS.encontros.find(e => e.numero >= atual.numero && e.marco);
  if (!seguinte) return null;
  return { encontro: seguinte, marco: marcoDoEncontro(seguinte), semana: DADOS.semanaDoEncontro(seguinte.id) };
}

function cartaoFase(fase) {
  const etapa = DADOS.etapaPorId(fase.etapaId);
  const feitos = etapa.encontros.filter(id => CONCLUIDOS.has(id)).length;
  const total = etapa.encontros.length;
  const pct = Math.round((feitos / total) * 100);
  const aqui = etapa.encontros.includes(DADOS.aluno.encontroAtual);
  const completa = feitos === total;
  const faixa = DADOS.faixaPorId(etapa.faixaDestino);
  const classe = aqui ? ' jr-fase--aqui' : (completa ? ' jr-fase--feita' : '');
  return html`
    <article class="jr-fase${classe}">
      <p class="jr-fase-k">Etapa <b>${etapa.numero}</b> <em>&middot;</em> ${fase.periodo} <em>&middot;</em> destino: faixa ${faixa.nome.split(' / ')[0].toLowerCase()}</p>
      <h3>${etapa.nome}</h3>
      <p class="nomeprop">&ldquo;${fase.nomeProposto}&rdquo; ${[selo('nome de fase em validação com o professor')]}</p>
      <p class="virada">${fase.virada}</p>
      <div class="andamento">
        <div class="andamento-barra"><span style="width:${pct}%"></span></div>
        <p class="andamento-txt"><span>Encontros concluídos</span><b>${feitos} / ${total}</b></p>
      </div>
      ${fase.checkpoints.length ? [html`<ul class="jr-ck">
        ${fase.checkpoints.map(c => html`<li>
          <span class="k">${c.tipo}<em>${c.quando}</em></span>
          <p>${c.o}</p>
        </li>`)}
      </ul>`] : [html`<div style="margin-top:var(--e-5)">${[blocoProfessor(JORNADA.lacunaCheckpoints)]}</div>`]}
    </article>`;
}

function renderJornada() {
  marcarTrilho(null);
  const aluno = DADOS.aluno;
  const faixa = DADOS.faixaPorId(aluno.faixaAtual);
  const graus = faixa.graus.length;
  const conquistados = aluno.grausConquistados.length;
  const barras = Array.from({ length: graus }, (_, i) =>
    html`<i class="${i < conquistados ? 'on' : ''}"></i>`);
  const prox = proximoMarco();
  const totalFeitos = aluno.encontrosConcluidos.length;
  const pctGeral = Math.round((totalFeitos / DADOS.formacao.totalEncontros) * 100);
  return html`
    <header class="tela-cab">
      <span class="junta"></span>
      <h1 tabindex="-1" data-foco>Minha jornada</h1>
      <p>Onde <b>${aluno.nome}</b> está na formação, o que vem a seguir e como cada fase é medida. ${totalFeitos} de ${DADOS.formacao.totalEncontros} encontros concluídos, ${pctGeral}% da formação.</p>
    </header>

    <div class="jr-topo">
      <section class="jr-faixa sobre-navy">
        <span class="jr-oct octo-janela" aria-hidden="true">${faixa.nome.trim().charAt(0)}</span>
        <div class="txt">
          <p class="rotulo"><i></i>Faixa atual</p>
          <h2>Faixa ${faixa.nome}</h2>
          <span class="id">${faixa.identidade}</span>
          <div class="jr-graus" aria-hidden="true">${barras}</div>
          <p class="crit">${conquistados} de ${graus} graus conquistados. Cada grau sai de um estudo de caso aprovado, não de presença em aula.</p>
        </div>
      </section>

      ${prox ? [html`
        <section class="jr-prox">
          <span class="mono-k">Próximo marco</span>
          <h2>${prox.marco.tipo === 'faixa' ? [html`Gate da faixa ${prox.marco.faixa.nome.split(' / ')[0].toLowerCase()}`] : [html`${prox.marco.grau.numero}º grau na faixa ${prox.marco.faixa.nome.toLowerCase()}`]}</h2>
          <span class="quando">Encontro ${prox.encontro.numero}${prox.semana ? [html` &middot; semana ${prox.semana.numero} &middot; ${prox.semana.rotulo}`] : false}</span>
          <p>${prox.marco.tipo === 'faixa' ? prox.marco.faixa.criterio : prox.marco.grau.criterio}</p>
          <a class="btn" href="#/aulas/${prox.encontro.id}">Abrir o encontro ${prox.encontro.numero}</a>
        </section>`] : false}
    </div>

    <section class="secao">
      <span class="junta"></span>
      <h2>As três fases</h2>
      <p class="corrido" style="margin-bottom:var(--e-5)">Cada fase entrega uma virada de identidade, não um bloco de conteúdo. A faixa marca a passagem, e o gate é presencial nas três.</p>
      ${JORNADA.fases.map(cartaoFase)}
    </section>

    <section class="secao">
      <span class="junta"></span>
      <h2>Como se mede</h2>
      <p class="corrido">A medição compara o aluno com ele mesmo: o que ele errava no Encontro 1 contra o que ele demonstra no gate presencial. Não há ranking entre colegas, e não há ponto por assistir aula.</p>
      <p style="margin-top:var(--e-4)">${[selo('Jornada do aluno · checkpoints de medição')]}</p>
    </section>`;
}

/* ---------- partida ---------- */

montarCracha();
montarTrilho();

ROTAS
  .registrar('ferramentas', { titulo: 'Caixa de ferramentas', render: renderFerramentas })
  .registrar('assistente', { titulo: 'Assistente da formação', render: renderAssistente })
  .registrar('jornada', { titulo: 'Minha jornada', render: renderJornada })
  .registrar('aulas', { titulo: 'Aulas', render: renderAulas })
  .registrar('materiais', { titulo: 'Materiais', render: renderMateriais })
  .registrar('calendario', { titulo: 'Calendário', render: renderCalendario })
  .registrar('plano', { titulo: 'Plano de estudos', render: renderPlano })
  .iniciar('aulas/' + DADOS.aluno.encontroAtual);

document.addEventListener('click', evento => {
  const revela = evento.target.closest('[data-play],[data-revelar]');
  if (revela) {
    const aviso = document.getElementById(revela.getAttribute('aria-controls'));
    const abrindo = aviso.hidden;
    aviso.hidden = !abrindo;
    revela.setAttribute('aria-expanded', String(abrindo));
    return;
  }
  const mes = evento.target.closest('[data-mes]');
  if (mes) { irPara('mes-' + mes.dataset.mes); return; }
  const semana = evento.target.closest('[data-semana]');
  if (semana) { irPara('sem-' + semana.dataset.semana); return; }
  if (evento.target.closest('[data-limpar]')) {
    Object.keys(FILTRO).forEach(chave => { FILTRO[chave] = ''; });
    history.replaceState(null, '', '#/materiais');
    ROTAS.despachar();
    return;
  }
  if (evento.target.closest('[data-abrir-trilho]')) { abrirGaveta(); return; }
  if (evento.target.closest('[data-fechar-trilho]') || evento.target.closest('.veu')) { fecharGaveta(); return; }
  if (evento.target.closest('.enc')) fecharGaveta();
});

document.addEventListener('input', evento => {
  const campo = evento.target.closest('[data-filtro]');
  if (!campo) return;
  FILTRO[campo.dataset.filtro] = campo.value;
  if (campo.dataset.filtro === 'etapa') {
    FILTRO.bloco = '';
    document.getElementById('mtl-bloco').innerHTML = opcoesBloco();
  }
  atualizarMateriais();
});

document.addEventListener('keydown', evento => {
  if (evento.key === 'Escape') fecharGaveta();
});

/* ---------- interações da Onda 3 · tudo por delegação, como manda o contrato ---------- */

document.addEventListener('click', evento => {
  const grav = evento.target.closest('[data-grav]');
  if (grav) { alternarGravacao(); return; }

  const chip = evento.target.closest('[data-wb-chip]');
  if (chip) {
    WB.busca = chip.dataset.wbChip;
    const campo = document.getElementById('wb-campo');
    if (campo) campo.value = WB.busca;
    const res = document.getElementById('wb-res');
    if (res) res.innerHTML = resultadoBusca();
    return;
  }

  const sn = evento.target.closest('[data-qz-sn]');
  if (sn) { RESP[sn.dataset.qzSn] = Number(sn.dataset.v); atualizarQuestionarios(); return; }

  const som = evento.target.closest('[data-qz-som]');
  if (som) {
    const id = som.dataset.qzSom;
    RESP[id] = valorResp(id, 0) === 1 ? 0 : 1;
    atualizarQuestionarios();
    return;
  }

  const ppItem = evento.target.closest('[data-pp-item]');
  if (ppItem) {
    const id = ppItem.dataset.ppItem;
    if (PP.itens.has(id)) PP.itens.delete(id); else PP.itens.add(id);
    atualizarProposta();
    return;
  }

  const perg = evento.target.closest('[data-as-perg]');
  if (perg) {
    const pronta = AS.perguntas.find(p => p.texto === perg.dataset.asPerg);
    AS_LOG.push({ texto: perg.dataset.asPerg, chave: pronta ? pronta.chave : '' });
    atualizarAssistente();
    return;
  }
});

document.addEventListener('input', evento => {
  const busca = evento.target.closest('[data-wb-busca]');
  if (busca) {
    WB.busca = busca.value;
    const res = document.getElementById('wb-res');
    if (res) res.innerHTML = resultadoBusca();
    return;
  }
  const escala = evento.target.closest('[data-qz-esc]');
  if (escala) {
    RESP[escala.dataset.qzEsc] = Number(escala.value);
    const saida = escala.parentElement.querySelector('output');
    if (saida) saida.textContent = escala.value;
    atualizarPlacarDor();
    return;
  }
  const medida = evento.target.closest('[data-qz-mm]');
  if (medida) { RESP[medida.dataset.qzMm] = medida.value; atualizarPlacarMovimento(); return; }

  const ppCampo = evento.target.closest('[data-pp-campo]');
  if (ppCampo) { PP[ppCampo.dataset.ppCampo] = ppCampo.value; atualizarTotalProposta(); return; }
});

/* Atualização cirúrgica: o placar muda, o campo em foco não é redesenhado. */
function atualizarPlacarDor() {
  const secao = document.getElementById('qz-dor');
  if (!secao) return;
  const placares = secao.querySelectorAll('.qz-fim .placar b');
  if (placares.length === 2) {
    placares[0].textContent = valorResp('pico', 0);
    placares[1].textContent = valorResp('frequencia', 0);
  }
}

function atualizarPlacarMovimento() {
  const secao = document.getElementById('qz-movimento');
  if (!secao) return;
  const placar = secao.querySelector('.qz-fim .placar b');
  if (placar) placar.textContent = valorResp('abertura', 0) || '--';
}

function atualizarTotalProposta() {
  const bloco = document.querySelector('.pp-total');
  if (!bloco) return;
  const sessoes = Number(PP.sessoes) || 0;
  const valor = Number(String(PP.valor).replace(',', '.')) || 0;
  const total = sessoes * valor;
  const n = bloco.querySelector('.n');
  n.textContent = total ? moeda(total) : 'preencha sessões e valor';
  n.classList.toggle('vazio', !total);
  bloco.querySelector('p:last-child').textContent = sessoes && valor
    ? sessoes + (sessoes === 1 ? ' sessão' : ' sessões') + ' · ' + moeda(valor) + ' por sessão.'
    : 'O total aparece quando os dois campos estiverem preenchidos.';
}

document.addEventListener('change', evento => {
  const consent = evento.target.closest('[data-consent]');
  if (!consent) return;
  GRAV.consentiu = consent.checked;
  if (!GRAV.consentiu && GRAV.estado !== 'parado') {
    pararRelogio();
    GRAV.estado = 'parado';
    GRAV.segundos = 0;
  }
  atualizarGravador();
});

document.addEventListener('submit', evento => {
  const form = evento.target.closest('[data-as-form]');
  if (!form) return;
  evento.preventDefault();
  const campo = form.querySelector('[data-as-livre]');
  const texto = campo.value.trim();
  if (!texto) return;
  AS_LOG.push({ texto: texto, chave: '' });
  atualizarAssistente();
});
