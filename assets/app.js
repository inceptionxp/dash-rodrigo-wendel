/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   Roteamento, renderização, galerias, modais e checklist.
   v3 — taxonomia: Consultoria · Extração da Consultoria · Produtos.
   ═══════════════════════════════════════════════════════════════════ */

(function() {
  const { PROJETO, MARCOS, BLOCOS, ACOMPANHAMENTO, STATUS_LABELS } = window.DASH;
  const M = window.DASH_METODO || {};
  const P = window.DASH_PRODUTO || {};
  const A = ACOMPANHAMENTO || {};
  const main = document.getElementById('main-inner');

  // ─────── Helpers ───────
  const statusBadge = (status) => {
    const label = STATUS_LABELS[status] || status;
    return `<span class="status ${status}">${label}</span>`;
  };

  const sumStatus = (items) => {
    const counts = {planejado: 0, 'aguard-material': 0, 'em-dev': 0, 'aguard-aprov': 0, aprovado: 0};
    items.forEach(i => { if (i.status && counts[i.status] !== undefined) counts[i.status]++; });
    return counts;
  };

  const progressOverview = () => {
    // Marcos + blocos + itens de acompanhamento (histórico = aprovado;
    // pendências prioritárias do Rodrigo = aguardando material; da consultoria = status próprio)
    const pendRod = (A.pendente_rodrigo || []).slice(0, 2).flatMap(g => (g.itens || []).map(() => ({status: 'aguard-material'})));
    const all = [
      ...MARCOS, ...BLOCOS,
      ...(A.historico || []).map(() => ({status: 'aprovado'})),
      ...pendRod,
      ...(A.pendente_consultoria || []).map(v => ({status: v.status || 'em-dev'})),
    ];
    const counts = sumStatus(all);
    const total = all.length;
    const pct = Math.round(((counts.aprovado) / total) * 100);
    return `
      <div class="progress-overview">
        <h3>Progresso geral do projeto</h3>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <div class="progress-stats">
          <div class="progress-stat"><span class="progress-stat-n">${counts.aprovado}</span><span class="progress-stat-l">Aprovado</span></div>
          <div class="progress-stat"><span class="progress-stat-n">${counts['em-dev']}</span><span class="progress-stat-l">Em dev</span></div>
          <div class="progress-stat"><span class="progress-stat-n">${counts['aguard-aprov']}</span><span class="progress-stat-l">Aguard. aprov.</span></div>
          <div class="progress-stat"><span class="progress-stat-n">${counts['aguard-material']}</span><span class="progress-stat-l">Aguard. material</span></div>
          <div class="progress-stat"><span class="progress-stat-n">${counts.planejado}</span><span class="progress-stat-l">Planejado</span></div>
        </div>
      </div>
    `;
  };

  const hero = (eyebrow, num, titulo, lead) => `
    <span class="eyebrow">${eyebrow}</span>
    <div class="marco-hero">
      <div class="marco-hero-num">${num}</div>
      <div class="marco-hero-titulo">${titulo}</div>
    </div>
    ${lead ? `<p class="page-lead">${lead}</p>` : ''}
  `;

  const fmtTag = (fmt) => ({
    online:     '<span class="fmt online">🖥️ Online ao vivo</span>',
    presencial: '<span class="fmt presencial">🏫 Presencial</span>',
    caso:       '<span class="fmt caso">📋 Estudo de caso</span>',
    gate:       '<span class="fmt gate">🥋 Gate · faixa</span>',
  }[fmt] || '');

  const faixaDot = (f) => `<span class="faixa ${f}" title="faixa ${f}"></span>`;

  // ═══════════════ SIDEBAR — grupo expansível ═══════════════
  window.toggleNavGroup = function(id) {
    const g = document.getElementById(id);
    if (g) g.classList.toggle('open');
  };

  // ═══════════════ CHECKLIST — persistência local ═══════════════
  const CHECK_KEY = 'dash-rw-checklist-v1';
  const loadChecks = () => { try { return JSON.parse(localStorage.getItem(CHECK_KEY)) || {}; } catch (e) { return {}; } };
  const saveChecks = (s) => { try { localStorage.setItem(CHECK_KEY, JSON.stringify(s)); } catch (e) {} };

  window.toggleCheck = function(id, input) {
    const s = loadChecks();
    s[id] = input.checked;
    saveChecks(s);
    const lab = input.closest('.chk');
    if (lab) lab.classList.toggle('done', input.checked);
    updateChkCounts();
  };

  function updateChkCounts() {
    document.querySelectorAll('[data-chk-grupo]').forEach(box => {
      const el = box.querySelector('.chk-count');
      if (!el) return;
      const inputs = box.querySelectorAll('.chk input');
      const done = box.querySelectorAll('.chk input:checked').length;
      el.textContent = `${done} / ${inputs.length}`;
    });
  }

  const chkItem = (id, item, checks) => {
    const done = !!checks[id];
    return `
      <label class="chk${done ? ' done' : ''}">
        <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleCheck('${id}', this)">
        <span class="chk-box"></span>
        <div class="chk-body"><strong>${item.t}</strong>${item.d ? `<em>${item.d}</em>` : ''}</div>
      </label>
    `;
  };

  const chkGrupos = () => {
    const checks = loadChecks();
    return (A.pendente_rodrigo || []).map(g => {
      const itens = (g.itens || []).map((it, i) => chkItem(`${g.slug}-${i}`, it, checks)).join('');
      const done = (g.itens || []).filter((it, i) => checks[`${g.slug}-${i}`]).length;
      if (g.aberto) {
        return `
          <div class="chk-card" data-chk-grupo="${g.slug}">
            <div class="chk-card-head"><span>${g.grupo}</span><span class="chk-count">${done} / ${(g.itens || []).length}</span></div>
            ${itens}
          </div>
        `;
      }
      return `
        <details class="chk-grupo" data-chk-grupo="${g.slug}">
          <summary>${g.grupo}<span class="chk-count" style="margin-left:auto;margin-right:10px;">${done} / ${(g.itens || []).length}</span></summary>
          ${itens}
        </details>
      `;
    }).join('');
  };

  // ═══════════════ MODAL ═══════════════
  const modalEl = () => document.getElementById('modal');
  const modalBody = () => document.getElementById('modal-body');

  function showModal(html) {
    const m = modalEl(); if (!m) return;
    modalBody().innerHTML = html;
    m.classList.add('active');
    m.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  window.closeModal = function() {
    const m = modalEl(); if (!m) return;
    m.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') window.closeModal(); });

  window.openStory = function(id) {
    const h = (M.HISTORIAS || []).find(x => x.id === id);
    if (!h) return;
    showModal(`
      <div class="modal-head">
        <div class="modal-tags">
          <span class="modal-tag vermelho">${h.catLabel}</span>
          ${h.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
        </div>
        <h2 class="modal-title">${h.titulo}</h2>
        <p class="modal-sub">${h.resumo}</p>
      </div>
      <div class="modal-body">
        <div class="modal-sec">
          <h4>Versão curta — pronta pra copy</h4>
          <div class="modal-quote">${h.curta}</div>
        </div>
        <div class="modal-sec">
          <h4>Narrativa completa</h4>
          <ul>
            <li><strong>Contexto —</strong> ${h.narrativa.contexto}</li>
            <li><strong>Conflito —</strong> ${h.narrativa.conflito}</li>
            <li><strong>Ação —</strong> ${h.narrativa.acao}</li>
            <li><strong>Resultado —</strong> ${h.narrativa.resultado}</li>
            <li><strong>Lição —</strong> ${h.narrativa.licao}</li>
          </ul>
        </div>
        ${h.zona ? `
        <div class="modal-sec">
          <h4>O que comprova da Zona de Maestria</h4>
          <ul>${h.zona.map(z => `<li>${z}</li>`).join('')}</ul>
        </div>` : ''}
        <div class="modal-sec">
          <h4>Contextos de uso sugeridos</h4>
          <ul>${h.contextos.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
        <div class="modal-sec">
          <h4>Status de autorização e prova</h4>
          <p style="margin:0;">${h.prova}</p>
        </div>
      </div>
    `);
  };

  window.openFramework = function(id) {
    const f = (M.FRAMEWORKS || []).find(x => x.id === id);
    if (!f) return;
    showModal(`
      <div class="modal-head">
        <div class="modal-tags">
          <span class="modal-tag vermelho">${f.n} · ${f.classe}</span>
          ${f.status_nome ? `<span class="modal-tag" style="background:#3D8A5A;color:#fff;">${f.status_nome}</span>` : '<span class="modal-tag proposta">nome proposto — em definição</span>'}
        </div>
        <h2 class="modal-title">${f.nome}</h2>
        ${f.nota_nome ? `<p class="modal-sub">${f.nota_nome}</p>` : ''}
      </div>
      <div class="modal-body">
        <div class="modal-sec">
          <div class="modal-quote">${f.o_que_e}</div>
        </div>
        <div class="modal-sec">
          <h4>Como funciona</h4>
          ${f.como_funciona.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="modal-sec">
          <h4>Quando usar</h4>
          <p style="margin:0;">${f.quando_usar}</p>
        </div>
        <div class="modal-sec">
          <h4>Por que funciona</h4>
          <p style="margin:0;">${f.por_que_funciona}</p>
        </div>
        <div class="modal-sec">
          <h4>Analogia didática</h4>
          <p style="margin:0;">${f.analogia}</p>
        </div>
        <div class="modal-sec">
          <div class="modal-two">
            <div class="modal-col temos"><div class="ch">✓ O que já temos</div><ul>${f.temos.map(t => `<li>${t}</li>`).join('')}</ul></div>
            <div class="modal-col falta"><div class="ch">✗ O que falta</div><ul>${f.falta.map(t => `<li>${t}</li>`).join('')}</ul></div>
          </div>
        </div>
        <div class="modal-sec">
          <h4>Onde vira conteúdo</h4>
          <ul>${f.vira_conteudo.map(v => `<li>${v}</li>`).join('')}</ul>
        </div>
        <div class="modal-sec">
          <h4>Alternativas de nome (também propostas)</h4>
          <ul>${f.alternativas.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
      </div>
    `);
  };

  // ═══════════════ GALERIA DE HISTÓRIAS (filtro) ═══════════════
  let storyFilter = 'todas';

  const storyGrid = () => {
    const list = (M.HISTORIAS || []).filter(h => storyFilter === 'todas' || h.cat === storyFilter);
    return list.map(h => `
      <div class="gal-card" onclick="openStory('${h.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')openStory('${h.id}')">
        <div class="gal-cat">${h.catLabel}</div>
        <h3>${h.titulo}</h3>
        <p>${h.resumo}</p>
        <div class="gal-tags">
          ${h.tags.map(t => `<span class="gal-pill neutra">${t}</span>`).join('')}
          <span class="gal-more">abrir →</span>
        </div>
      </div>
    `).join('');
  };

  window.filterStories = function(cat) {
    storyFilter = cat;
    const grid = document.getElementById('story-grid');
    if (grid) grid.innerHTML = storyGrid();
    document.querySelectorAll('.gal-btn[data-cat]').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    const count = document.getElementById('story-count');
    if (count) {
      const n = (M.HISTORIAS || []).filter(h => cat === 'todas' || h.cat === cat).length;
      count.textContent = n + (n === 1 ? ' história' : ' histórias');
    }
  };

  // ─────── Views ───────
  const views = {

    /* ═══════════════ CONSULTORIA ═══════════════ */

    home: () => `
      <span class="eyebrow">Consultoria · Visão geral</span>
      <h1 class="page-title">O Salto.<br><span class="ei">Painel do seu projeto.</span></h1>
      <p class="page-lead">Aqui você acompanha em tempo real o que está planejado, o que está em desenvolvimento, o que está aguardando você e o que já foi aprovado e entregue. Cada seção tem espaço pra você deixar comentários e validações.</p>

      ${progressOverview()}

      <h2 class="section-title">Dados do <span class="ei">projeto</span></h2>
      <div class="card">
        <dl class="kv">
          <dt>Cliente</dt><dd>${PROJETO.cliente}</dd>
          <dt>Produto</dt><dd>${PROJETO.produto}</dd>
          <dt>Início</dt><dd>${PROJETO.data_inicio}</dd>
          <dt>Entrega prevista</dt><dd>${PROJETO.data_fim_prevista}</dd>
          <dt>Prazo total</dt><dd>${PROJETO.prazo_total}</dd>
        </dl>
      </div>

      <h2 class="section-title">Proposta e <span class="ei">contrato</span></h2>
      <div class="card">
        <dl class="kv">
          <dt>Status</dt><dd>Proposta aprovada e contrato assinado em 22/06/2026 · pagamento confirmado · projeto iniciado em 29/06</dd>
          <dt>Prazo</dt><dd>Até 60 dias corridos após a Validação da Estratégia (Marco 02)</dd>
          <dt>Garantia</dt><dd>Devolução integral em 5 dias úteis após o Marco 02, se a estratégia for incompatível com a expectativa</dd>
          <dt>Suporte pós-entrega</dt><dd>30 dias corridos após o treinamento de handoff</dd>
        </dl>
      </div>
      <a class="link-card" href="${PROJETO.proposta_url}" target="_blank">
        <div>
          <span class="link-card-titulo">Abrir a proposta interativa</span>
          <span class="link-card-meta">19 slides · diagnóstico, pesquisa, estratégia, simulação em números e os 7 blocos</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>
      <a class="link-card" href="../proposta/proposta-rodrigo-wendel.pdf" target="_blank">
        <div>
          <span class="link-card-titulo">Baixar a proposta em PDF</span>
          <span class="link-card-meta">Versão para download ou impressão</span>
        </div>
        <span class="link-card-cta">PDF →</span>
      </a>
      <a class="link-card" href="${PROJETO.contrato_url}" target="_blank">
        <div>
          <span class="link-card-titulo">Abrir o contrato em PDF</span>
          <span class="link-card-meta">Assinado eletronicamente em 22/06/2026 · 15 cláusulas</span>
        </div>
        <span class="link-card-cta">PDF →</span>
      </a>

      <h2 class="section-title">Os 4 <span class="ei">marcos</span></h2>
      <div class="blocos-grid">
        ${MARCOS.map(m => `
          <a class="bloco-resumo" href="#marcos">
            <div class="bloco-resumo-n">${m.n}</div>
            <div class="bloco-resumo-titulo">${m.titulo}<small>${m.prazo}</small></div>
            ${statusBadge(m.status)}
          </a>
        `).join('')}
      </div>

      <h2 class="section-title">Os 7 <span class="ei">blocos de entrega</span></h2>
      <div class="blocos-grid">
        ${BLOCOS.map(b => `
          <a class="bloco-resumo" href="#${b.id}">
            <div class="bloco-resumo-n">${b.n}</div>
            <div class="bloco-resumo-titulo">${b.titulo}<small>${b.subtitulo}</small></div>
            ${statusBadge(b.status)}
          </a>
        `).join('')}
      </div>

      <h2 class="section-title">Extração da <span class="ei">Consultoria</span></h2>
      <div class="blocos-grid">
        <a class="bloco-resumo" href="#met-aprendiz"><div class="bloco-resumo-n">01</div><div class="bloco-resumo-titulo">Cliente Ideal<small>Perfil, mercado, dores, desejos, rotina e habilidades — o estudo completo</small></div></a>
        <a class="bloco-resumo" href="#met-expert"><div class="bloco-resumo-n">02</div><div class="bloco-resumo-titulo">Diferenciais e Autoridade<small>Posicionamento, trajetória, números, voz e bandeiras</small></div></a>
        <a class="bloco-resumo" href="#met-historias"><div class="bloco-resumo-n">03</div><div class="bloco-resumo-titulo">Banco de Histórias<small>${(M.HISTORIAS || []).length} histórias reais estruturadas — galeria com narrativa completa</small></div></a>
        <a class="bloco-resumo" href="#met-metodo"><div class="bloco-resumo-n">04</div><div class="bloco-resumo-titulo">Método e Frameworks<small>Abordagem MODAL · PUV, jornada, ${(M.FRAMEWORKS || []).length} frameworks e ${(M.INSTRUMENTOS || []).length} instrumentos</small></div></a>
        <a class="bloco-resumo" href="brandbook/opcao-d-pulso.html" target="_blank"><div class="bloco-resumo-n">05</div><div class="bloco-resumo-titulo">Brandbook · Território Pulso<small>A identidade visual escolhida: paleta, tipografia, direção de arte e aplicação (abre em nova aba)</small></div></a>
      </div>

      <h2 class="section-title"><span class="ei">Produtos</span></h2>
      <div class="blocos-grid">
        <a class="bloco-resumo" href="#prod-formacao"><div class="bloco-resumo-n">F</div><div class="bloco-resumo-titulo">Formação<small>O carro-chefe — visão geral + 4 subpáginas: Oferta · Grade (43 encontros) · Jornada do Aluno · Gamificação</small></div></a>
        <a class="bloco-resumo" href="#prod-mentoria"><div class="bloco-resumo-n">M</div><div class="bloco-resumo-titulo">Mentoria<small>A continuidade — escopo macro, timing de abertura e a comparação com a formação</small></div></a>
      </div>

      <h2 class="section-title">Marca e <span class="ei">entregas</span></h2>
      <div class="card" style="margin-bottom:8px;"><dl class="kv" style="margin:0;">
        <dt>Nomes definidos</dt><dd>Método <strong>Abordagem MODAL</strong> · Empresa <strong>Academia DTM</strong> · Formação <strong>Viver de DTM</strong></dd>
        <dt>Identidade visual</dt><dd><strong>Território Pulso</strong> — saúde digital energética (navy + fluor-lime)</dd>
      </dl></div>
      <a class="link-card" href="brandbook/opcao-d-pulso.html" target="_blank">
        <div>
          <span class="link-card-titulo">Brandbook — Território Pulso</span>
          <span class="link-card-meta">A identidade visual escolhida: paleta, tipografia, direção de arte e aplicação</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>
      <a class="link-card" href="naming-guia/index.html" target="_blank">
        <div>
          <span class="link-card-titulo">Guia de Naming — os 3 nomes e o porquê</span>
          <span class="link-card-meta">Método · Empresa · Formação — as opções consideradas e o que levou a cada escolha</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>
      <a class="link-card" href="guia-setup-marca/index.html" target="_blank">
        <div>
          <span class="link-card-titulo">Guia de Setup &amp; Infraestrutura — checklist do Rodrigo</span>
          <span class="link-card-meta">Domínios, hospedagem (Hostinger) + Cloudflare, canais pro CRM (WhatsApp, e-mail, Meta, agenda), INPI e a virada do Instagram — com o que ele precisa mandar pra gente</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>

      <h2 class="section-title">Ferramentas do <span class="ei">aluno</span></h2>
      <a class="link-card" href="ferramentas/roteiro-primeira-consulta/index.html" target="_blank">
        <div>
          <span class="link-card-titulo">Roteiro da Primeira Consulta — instrumento (Etapa 3)</span>
          <span class="link-card-meta">Ferramenta interativa que o aluno preenche pra construir a própria narrativa de consulta: 9 movimentos, banco de perguntas de descoberta, calculadora de régua de desconto, baixar/imprimir. Construída a partir do script real do Rodrigo</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>

      <h2 class="section-title"><span class="ei">Consultoria</span> — navegação</h2>
      <a class="link-card" href="#pesquisas">
        <div>
          <span class="link-card-titulo">Pesquisas</span>
          <span class="link-card-meta">Mercado, concorrência, perfil do aluno e certificação — os 4 relatórios em profundidade</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>
      <a class="link-card" href="#acompanhamento">
        <div>
          <span class="link-card-titulo">Acompanhamento</span>
          <span class="link-card-meta">Checklist do que está pendente (seu e da consultoria) + histórico do que já foi aprovado</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>
    `,

    marcos: () => `
      <span class="eyebrow">Consultoria · Marcos do projeto</span>
      <h1 class="page-title">Os 4 <span class="ei">marcos.</span></h1>
      <p class="page-lead">A espinha dorsal do contrato: 4 marcos, 2 deles com reunião síncrona obrigatória. Aqui você vê onde o projeto está e o que cada marco destrava.</p>

      <div class="tl">
        ${MARCOS.map(m => `
          <div class="tl-item${m.status === 'aprovado' ? ' hl' : ''}">
            <div class="tl-when">Marco ${m.n} · ${m.prazo} ${statusBadge(m.status)}</div>
            <h3>${m.titulo}</h3>
            <p>${m.descricao}</p>
            <ul style="font-size:13.5px;">
              ${m.detalhes.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="alert">
        <strong>O que destrava o próximo passo:</strong> o Marco 02 (Validação da Estratégia) é agendado quando os materiais prioritários chegarem — a lista viva está na página <a href="#acompanhamento" style="color:var(--vermelho);font-weight:600;">Acompanhamento</a>.
      </div>
    `,

    pesquisas: () => `
      ${hero('Consultoria · Pesquisas', 'P', 'As <span class="ei">pesquisas</span>')}
      ${window.DASH_PESQUISAS ? window.DASH_PESQUISAS.html : ''}
    `,

    acompanhamento: () => `
      <span class="eyebrow">Consultoria · Acompanhamento</span>
      <h1 class="page-title">O que anda, o que <span class="ei">espera.</span></h1>
      <p class="page-lead">O checklist vivo do projeto: o que depende do Rodrigo, o que está com a consultoria e o histórico do que já foi recebido e aprovado. Item entregue sai de "pendente" e entra no histórico — aqui nada fica duplicado.</p>

      <h2 class="section-title">Pendente do <span class="ei">Rodrigo</span></h2>
      <div class="alert amarelo">
        <strong>Como enviar:</strong> ${A.regra_envio || ''}
      </div>
      <p style="font-size:12.5px;color:var(--cinza);">Marcar um item abaixo é um registro visual seu (fica salvo neste navegador) — o envio oficial continua sendo a pasta no Drive.</p>
      ${chkGrupos()}

      <h2 class="section-title">Pendente da <span class="ei">consultoria</span></h2>
      <ul class="entregas-lista">
        ${(A.pendente_consultoria || []).map(v => `
          <li><strong>${v.t}</strong> ${statusBadge(v.status || 'em-dev')}<em>${v.d || ''}</em></li>
        `).join('')}
      </ul>

      <h2 class="section-title">Aprovado e recebido — <span class="ei">histórico</span></h2>
      <div class="card">
        ${(A.historico || []).map(h => `
          <div class="hist-item">
            <span class="hi-t">${h.item}</span>
            <span class="hi-d">✓ ${h.data}</span>
          </div>
        `).join('')}
      </div>
    `,

    /* ═══════════════ EXTRAÇÃO DA CONSULTORIA ═══════════════ */

    'met-aprendiz': () => `
      ${hero('Extração da Consultoria · 01', '01', 'Cliente <span class="ei">Ideal</span>')}
      ${M.APRENDIZ ? M.APRENDIZ.html : ''}
    `,

    'met-expert': () => `
      ${hero('Extração da Consultoria · 02', '02', 'Diferenciais e <span class="ei">Autoridade</span>')}
      ${M.EXPERT ? M.EXPERT.html : ''}
    `,

    'met-historias': () => `
      ${hero('Extração da Consultoria · 03', '03', 'Banco de <span class="ei">Histórias</span>', 'As ' + (M.HISTORIAS || []).length + ' histórias reais do Rodrigo, estruturadas pra virar aula, copy e conteúdo. Clique em qualquer card pra abrir a narrativa completa, a versão curta pronta pra copy e o status de autorização. Todas as falas entre aspas são literais da call — nada foi parafraseado.')}

      <div class="gal-bar">
        ${(M.HISTORIAS_CATS || []).map(c => `<button class="gal-btn${c.id === 'todas' ? ' active' : ''}" data-cat="${c.id}" onclick="filterStories('${c.id}')">${c.label}</button>`).join('')}
        <span class="gal-count" id="story-count">${(M.HISTORIAS || []).length} histórias</span>
      </div>
      <div class="gal-grid" id="story-grid">${storyGrid()}</div>

      <div class="alert amarelo" style="margin-top:24px;">
        <strong>Pendências de prova:</strong> 4 cases de pacientes agora têm <strong>depoimento em vídeo</strong> (recebidos em 07/07 — Raquel, Carol, Maria Alice + 1). Todos os cases de clientes exigem <strong>autorização de imagem</strong> antes de uso público com identificação. As histórias de forja e as pessoais são de uso livre — são vivências do próprio Rodrigo.
      </div>
    `,

    'met-metodo': () => `
      ${hero('Extração da Consultoria · 04', '04', 'Método e <span class="ei">Frameworks</span>')}

      <div class="alert decisao">
        <strong>Status de naming:</strong> ${M.NOME_METODO ? M.NOME_METODO.aviso : ''}
      </div>

      <a class="link-card" href="naming-guia/index.html" target="_blank">
        <div>
          <span class="link-card-titulo">Guia de Naming — os 3 nomes e o porquê de cada um</span>
          <span class="link-card-meta">Método · Empresa · Formação — as opções consideradas, prós/contras e disponibilidade que levaram às escolhas.</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>

      <h2 class="section-title">Nome do método — <span class="ei">definido</span></h2>
      <div class="card preto">
        <div class="modal-tags" style="margin-bottom:12px;"><span class="modal-tag" style="background:#3D8A5A;color:#fff;">${M.NOME_METODO && M.NOME_METODO.status_nome ? M.NOME_METODO.status_nome : 'definido'}</span></div>
        <h3 class="card-title" style="font-family:var(--cond);text-transform:uppercase;font-size:34px;">${M.NOME_METODO ? M.NOME_METODO.top1 : ''}</h3>
        <p style="font-family:var(--sans);font-style:italic;font-size:15.5px;">${M.NOME_METODO ? M.NOME_METODO.assinatura : ''}</p>
        <p style="font-size:13px;">${M.NOME_METODO ? M.NOME_METODO.top1_racional : ''}</p>
      </div>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>#</th><th>Opção de nome</th><th>Estilo</th><th>O que comunica</th><th>Ponto de atenção</th></tr></thead>
          <tbody>
            ${(M.NOME_METODO ? M.NOME_METODO.opcoes : []).map((o, i) => `
              <tr><td class="tnum">${i + 1}</td><td><strong>${o.nome}</strong></td><td>${o.tecnica}</td><td>${o.porque}</td><td>${o.risco}</td></tr>
            `).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">Decisão final: Rodrigo, na Validação da Estratégia (Marco 02). Opções completas dos 3 nomes no Guia de Naming acima.</div>
      </div>

      <h2 class="section-title">PUV — Proposta Única de <span class="ei">Valor</span></h2>
      <div class="card">
        <dl class="kv">
          ${(M.PUV ? M.PUV.componentes : []).map(c => `<dt>${c.k}</dt><dd>${c.v}</dd>`).join('')}
        </dl>
      </div>
      ${(M.PUV ? M.PUV.versoes : []).map(v => `
        <div class="puv-v"><span class="pl">${v.label}</span><p>${v.texto}</p></div>
      `).join('')}
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Canal</th><th>Adaptação da PUV</th></tr></thead>
          <tbody>
            ${(M.PUV ? M.PUV.canais : []).map(c => `<tr><td><strong>${c.canal}</strong></td><td>${c.adaptacao}</td></tr>`).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">Canais sugeridos com base no perfil do cliente ideal e na presença atual do Rodrigo — validar quais entram.</div>
      </div>

      <h2 class="section-title">Os 4 princípios + os <span class="ei">transversais</span></h2>
      <ul class="entregas-lista">
        ${(M.PRINCIPIOS || []).map(p => `<li><strong>${p.nome}</strong><em>${p.desc}</em></li>`).join('')}
      </ul>
      ${M.TRANSVERSAIS ? `
      <h2 class="section-title">Princípios <span class="ei">transversais</span></h2>
      <p class="page-lead" style="font-size:15px;">${M.TRANSVERSAIS.intro}</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:14px;">
        ${(M.TRANSVERSAIS.itens || []).map(t => `
          <div class="card" style="margin:0;">
            <div class="modal-tags" style="margin-bottom:8px;"><span class="modal-tag vermelho">${t.tag}</span></div>
            <h3 class="card-title" style="margin-bottom:12px;">${t.nome}</h3>
            ${t.pontos.map(p => `<p style="margin:0 0 12px;font-size:14px;line-height:1.55;"><strong style="display:block;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--vermelho);margin-bottom:3px;">${p.k}</strong>${p.v}</p>`).join('')}
          </div>`).join('')}
      </div>` : ''}

      <h2 class="section-title">Jornada do <span class="ei">método</span></h2>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Etapa (faixa)</th><th>O que acontece</th><th>Framework que sustenta</th><th>Transformação do aluno</th></tr></thead>
          <tbody>
            ${(M.JORNADA_METODO || []).map(j => `
              <tr><td><strong>${j.etapa}</strong></td><td>${j.acontece}</td><td>${j.framework}</td><td>${j.transformacao}</td></tr>
            `).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">Princípio transversal a toda a jornada: "Antes de intervir, você precisa entender" — Fenotipação e Educação em Dor atravessam diagnóstico, tratamento e venda.</div>
      </div>

      <h2 class="section-title">Galeria de <span class="ei">frameworks</span></h2>
      <p>F1, F2 e F3 são frameworks-âncora (atravessam o método inteiro); F4, F5 e F6 são frameworks de etapa. Clique em qualquer card pra abrir o detalhe completo — como funciona, quando usar, o que temos × o que falta e as alternativas de nome.</p>
      <div class="gal-grid">
        ${(M.FRAMEWORKS || []).map(f => `
          <div class="gal-card" onclick="openFramework('${f.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')openFramework('${f.id}')">
            <div class="gal-cat">${f.n} · ${f.classe}</div>
            <h3>${f.nome}</h3>
            <p>${f.o_que_e}</p>
            <div class="gal-tags">
              <span class="gal-pill">nome em proposta</span>
              <span class="gal-more">abrir →</span>
            </div>
          </div>
        `).join('')}
      </div>

      <h2 class="section-title">Os 11 <span class="ei">instrumentos</span></h2>
      <p>As ferramentas práticas que o método exige — o que o aluno vai abrir, preencher e aplicar. Formato de uso é sugestão, confirmada no desenho do produto pela habilidade digital do aluno.</p>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Instrumento</th><th>Formato de uso</th><th>Etapa / framework</th><th>O que o aluno faz</th><th>Status</th></tr></thead>
          <tbody>
            ${(M.INSTRUMENTOS || []).map(i => `
              <tr><td><strong>${i.nome}</strong></td><td>${i.formato}</td><td>${i.etapa}</td><td>${i.uso}</td><td>${i.status}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `,

    /* ═══════════════ PRODUTOS ═══════════════ */

    'prod-formacao': () => `
      ${hero('Produtos · Formação', 'F', 'A <span class="ei">Formação</span>')}
      ${P.FORMACAO ? P.FORMACAO.html : ''}
    `,

    'prod-oferta': () => `
      ${hero('Produtos · Formação · Oferta', 'O', 'A <span class="ei">Oferta</span>')}
      ${P.OFERTA ? P.OFERTA.html : ''}
    `,

    'prod-grade': () => `
      ${hero('Produtos · Formação · Grade completa', '43', 'Os 43 <span class="ei">encontros</span>', 'A grade descida ao detalhe: 43 encontros em 10 meses, em 3 etapas, cada um com sua essência, seu output verificável e seu formato. O princípio: toda aula leva a uma ação concreta — se não tem output, é palestra, não formação. ✅ Macro aprovado pelo Rodrigo em 02/08 — "no macro a gente pode fazer do jeito que tá já".')}

      <div class="leg">
        <span>${fmtTag('online')}</span>
        <span>${fmtTag('presencial')} (E13-15, E33-35, E42-43 — Brasília)</span>
        <span>${fmtTag('caso')}</span>
        <span>${fmtTag('gate')}</span>
        <span>⚠️ ponto que os pendentes do Rodrigo refinam</span>
      </div>

      ${P.CALENDARIO ? P.CALENDARIO.html : ''}

      ${(P.GRADE_ETAPAS || []).map(et => {
        const encs = (P.ENCONTROS || []).filter(e => e.etapa === et.n);
        let lastBloco = '';
        const rows = encs.map(e => {
          const blocoHead = e.bloco !== lastBloco ? `<div class="enc-bloco">${e.bloco}</div>` : '';
          lastBloco = e.bloco;
          return `
            ${blocoHead}
            <div class="enc-item">
              <div class="enc-n">E${e.n}</div>
              <div>
                <div class="enc-t">${e.titulo} ${fmtTag(e.fmt)}</div>
                <div class="enc-e">${e.essencia}</div>
                <div class="enc-o"><b>Output:</b> ${e.output}</div>
                ${e.nota ? `<div class="enc-nota">${e.nota}</div>` : ''}
              </div>
            </div>
          `;
        }).join('');
        return `
          <details class="enc-etapa" open>
            <summary>
              <span class="enc-etapa-t">${et.titulo}</span>
              <span class="enc-etapa-meta">${et.meta} ${et.faixa ? faixaDot(et.faixa) : ''}</span>
            </summary>
            <div class="enc-body">
              <div class="card" style="margin-top:4px;">
                <dl class="kv">
                  <dt>Objetivo</dt><dd>${et.objetivo}</dd>
                  <dt>🥋 Gate</dt><dd>${et.gate}</dd>
                </dl>
                ${et.nota ? `<p style="font-size:12.5px;color:var(--status-aguard-material);margin:8px 0 0;">${et.nota}</p>` : ''}
              </div>
              ${rows}
            </div>
          </details>
        `;
      }).join('')}

      <h2 class="section-title">Transversais <span class="ei">(o ano inteiro)</span></h2>
      <ul class="entregas-lista">
        ${(P.GRADE_TRANSVERSAIS || []).map(t => `<li><strong>${t.t}</strong><em>${t.d}</em></li>`).join('')}
      </ul>

      <div class="alert">
        <strong>Os 2 pendentes que refinavam este plano estão resolvidos.</strong> (1) A marcação <em>capacita × só-teoria</em> foi revisada e confirmada por escrito pelo Rodrigo em 28/07 — o aluno é capacitado em todos os conservadores + infiltração anestésica e dry needling; ácido hialurônico, corticoide, iPRF, toxina, artrocentese e cirúrgicos ficam em indicação/teoria. Já aplicada em E25, E29, E30 e E34. (2) O material dos <em>Dois Tripés</em> foi recebido em 28/07 e está incorporado ao E3. Estrutura e contagem de encontros não mudaram.
      </div>

      <div class="alert">
        <strong>Pedido do Rodrigo em 02/08 — as "aulas em branco" — está resolvido no calendário acima.</strong> A grade nunca precisou de 43 semanas: os 8 dias de imersão acontecem em 3 semanas de viagem, não em 8 semanas. Sobram <strong>5 semanas de respiro</strong> dentro do ano, além da pausa de Carnaval. Detalhamento completo em <code>produto/calendario-turma-2027.md</code>.
      </div>
    `,

    'prod-mentoria': () => `
      ${hero('Produtos · Mentoria', 'M', 'A <span class="ei">Mentoria</span>')}
      ${P.MENTORIA ? P.MENTORIA.html : ''}

      <h2 class="section-title">Formação × Mentoria — <span class="ei">lado a lado</span></h2>
      <p>Os dois produtos da esteira comparados critério a critério — pra ficar claro o que cada um promete, pra quem, e por que um prepara o outro. Tickets são hipóteses de trabalho, a fechar juntos no Marco 02.</p>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Critério</th><th>Formação</th><th>Mentoria</th></tr></thead>
          <tbody>
            ${(P.COMPARACAO || []).map(r => `
              <tr><td><strong>${r.c}</strong></td><td>${r.f}</td><td>${r.m}</td></tr>
            `).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">A lógica da divisão: a formação MONETIZA a competência recém-adquirida; a mentoria ESCALA — e é isso que justifica a renovação.</div>
      </div>
    `,

    'prod-jornada': () => `
      ${hero('Produtos · Formação · Experiência', 'J', 'Jornada do <span class="ei">Aluno</span>', 'A linha do tempo de transformação da formação: 10 meses, 41 encontros + 1 imersão presencial, 3 fases + onboarding + formatura. Cada fase nomeada pela virada de identidade — não por "módulo 1, módulo 2".')}

      <div class="alert amarelo"><strong>⚠️ Nomes de fase = proposta.</strong> ${P.JORNADA_NOTA || ''}</div>

      <div class="tl">
        ${(P.JORNADA || []).map(j => `
          <div class="tl-item${j.hl ? ' hl' : ''}">
            <div class="tl-when">
              ${j.quando}
              ${j.faixas && j.faixas.length === 2 ? `<span class="faixa-passo">${faixaDot(j.faixas[0])} → ${faixaDot(j.faixas[1])}</span>` : ''}
              ${j.faixas && j.faixas.length === 1 ? `<span class="faixa-passo">${faixaDot(j.faixas[0])}</span>` : ''}
              ${j.proposta ? `<span class="gal-pill">nome em proposta</span>` : ''}
            </div>
            <h3>${j.nome}</h3>
            <p><strong>Objetivo:</strong> ${j.objetivo}</p>
            ${j.vive && j.vive.length ? `<ul style="font-size:13.5px;">${j.vive.map(v => `<li>${v}</li>`).join('')}</ul>` : ''}
            ${j.ganhos ? `
              <div class="card">
                <dl class="kv">
                  <dt>Ganho técnico</dt><dd>${j.ganhos.tecnico}</dd>
                  <dt>Ganho financeiro</dt><dd>${j.ganhos.financeiro}</dd>
                  <dt>Ganho identitário</dt><dd>${j.ganhos.identitario}</dd>
                </dl>
              </div>` : ''}
            ${j.marco ? `<p><strong>🥋 Marco de conclusão:</strong> ${j.marco}</p>` : ''}
            ${j.checkpoint && j.checkpoint.length ? `<p style="margin-bottom:4px;"><strong>Checkpoint de medição (transformação, não vaidade):</strong></p><ul style="font-size:13px;">${j.checkpoint.map(c => `<li>${c}</li>`).join('')}</ul>` : ''}
            ${j.risco ? `<p style="margin-bottom:4px;"><strong>Risco de evasão:</strong> ${j.risco}</p>` : ''}
            ${j.antidoto ? `<p><strong>Antídoto:</strong> ${j.antidoto}</p>` : ''}
          </div>
        `).join('')}
      </div>
    `,

    'prod-gamificacao': () => {
      const G = P.GAMIFICACAO || {};
      return `
      ${hero('Produtos · Formação · Engajamento', 'G', 'Gamificação · <span class="ei">Faixas</span>', 'O sistema de faixas de jiu-jitsu que amarra a progressão do aluno aos gates técnicos reais da formação. A analogia é autoral do Rodrigo — faixa roxa, um grau — e todo o desenho segue uma régua só: linguagem de maestria, nunca de jogo.')}

      <div class="alert amarelo"><strong>Status:</strong> ${G.status || ''}</div>

      <h2 class="section-title">Por que este sistema existe <span class="ei">(e não é enfeite)</span></h2>
      <div class="card destaque"><p style="margin:0;">${G.por_que || ''}</p></div>

      <h2 class="section-title">Visão <span class="ei">geral</span></h2>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Faixa</th><th>Momento</th><th>O que ela diz</th></tr></thead>
          <tbody>
            ${(G.visao_geral || []).map(f => `
              <tr><td style="white-space:nowrap;">${faixaDot(f.faixa)} <strong>${f.nome}</strong></td><td>${f.quando}</td><td>${f.diz}</td></tr>
            `).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">Nomenclatura das faixas = proposta, a validar com Maiara e Rodrigo. ${G.nota_marrom || ''}</div>
      </div>

      <h2 class="section-title">Graus na faixa azul — o antídoto do <span class="ei">silêncio da Fase 2</span></h2>
      <p>${G.graus ? G.graus.intro : ''}</p>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Marco</th><th>Quando</th><th>Critério (já existe no plano de ensino)</th></tr></thead>
          <tbody>
            ${(G.graus ? G.graus.rows : []).map(g => `
              <tr><td><strong>${g.marco}</strong></td><td>${g.quando}</td><td>${g.criterio}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h2 class="section-title">Mecânica de cada marco — o que o aluno faz, quem valida, <span class="ei">o que recebe</span></h2>
      <div class="tbl-wrap">
        <table class="tbl" style="min-width:820px;">
          <thead><tr><th>Marco</th><th>O que o aluno faz</th><th>Quem valida</th><th>O que recebe</th><th>Comportamento sustentado</th></tr></thead>
          <tbody>
            ${(G.marcos || []).map(m => `
              <tr><td style="white-space:nowrap;">${faixaDot(m.faixa)} <strong>${m.nome}</strong></td><td>${m.faz}</td><td>${m.valida}</td><td>${m.recebe}</td><td>${m.sustenta}</td></tr>
            `).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">${G.regra_marcos || ''}</div>
      </div>

      <h2 class="section-title">Rastreabilidade — por que cada <span class="ei">mecânica</span></h2>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Mecânica</th><th>Motor · necessidade atendida</th><th>Por que esta e não outra</th></tr></thead>
          <tbody>
            ${(G.rastreabilidade || []).map(r => `
              <tr><td><strong>${r.mec}</strong></td><td>${r.motor}</td><td>${r.porque}</td></tr>
            `).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">${G.rastreabilidade_nota || ''}</div>
      </div>

      <h2 class="section-title">A cerimônia de <span class="ei">passagem de faixa</span></h2>
      <div class="alert"><strong>Regra de tom:</strong> ${G.cerimonia ? G.cerimonia.tom : ''}</div>
      <ul class="entregas-lista">
        ${(G.cerimonia ? G.cerimonia.passos : []).map(p => `<li>${p}</li>`).join('')}
      </ul>
      <h2 class="section-title">Falas-modelo <span class="ei">(esqueleto, na voz dele)</span></h2>
      ${(G.cerimonia ? G.cerimonia.falas : []).map(f => `
        <div class="puv-v"><span class="pl">${f.marco}</span><p>${f.texto}</p></div>
      `).join('')}
      <p style="font-size:12.5px;color:var(--cinza);">${G.cerimonia ? G.cerimonia.nota : ''}</p>

      <h2 class="section-title">A comunicação do <span class="ei">"ainda não"</span></h2>
      <div class="card destaque"><p style="margin:0;">${G.ainda_nao ? G.ainda_nao.principio : ''}</p></div>
      <h3 class="card-title" style="margin-top:22px;">O que NUNCA fazer</h3>
      <ul class="entregas-lista">
        ${(G.ainda_nao ? G.ainda_nao.nunca : []).map(n => `<li>${n}</li>`).join('')}
      </ul>
      <h3 class="card-title" style="margin-top:22px;">A conversa individual (privada, antes da cerimônia)</h3>
      <ul class="entregas-lista">
        ${(G.ainda_nao ? G.ainda_nao.passos : []).map(p => `<li>${p}</li>`).join('')}
      </ul>
      <div class="puv-v"><span class="pl">Fala-modelo · conversa privada</span><p>${G.ainda_nao ? G.ainda_nao.fala : ''}</p></div>
      <div class="alert"><strong>No painel do aluno:</strong> ${G.ainda_nao ? G.ainda_nao.painel : ''}</div>

      <h2 class="section-title">Onde a faixa aparece <span class="ei">pro aluno</span></h2>
      <div class="modal-two" style="margin:16px 0;">
        <div class="modal-col temos"><div class="ch">✓ O que ele vê</div><ul>${(G.aparece ? G.aparece.ve : []).map(v => `<li>${v}</li>`).join('')}</ul></div>
        <div class="modal-col falta"><div class="ch">✗ O que NÃO aparece (a engenharia)</div><ul>${(G.aparece ? G.aparece.nao_ve : []).map(v => `<li>${v}</li>`).join('')}</ul></div>
      </div>

      <h2 class="section-title">Identidade visual — <span class="ei">diretriz</span></h2>
      <div class="card">
        <dl class="kv">
          <dt>Registro correto</dt><dd>${G.visual ? G.visual.certo : ''}</dd>
          <dt>Registro errado</dt><dd>${G.visual ? G.visual.errado : ''}</dd>
          <dt>Referência de tom</dt><dd>${G.visual ? G.visual.referencia : ''}</dd>
        </dl>
      </div>

      <h2 class="section-title">Anti-armadilhas — confirmação <span class="ei">item a item</span></h2>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Armadilha do brief</th><th>Como foi evitada neste sistema</th></tr></thead>
          <tbody>
            ${(G.anti_armadilhas_confirma || []).map(n => `
              <tr><td><strong>${n.el}</strong></td><td>${n.pq}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <ul class="entregas-lista">
        ${(G.regras_operacionais || []).map(r => `<li>${r}</li>`).join('')}
      </ul>

      <h2 class="section-title">Materiais <span class="ei">necessários</span></h2>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Material</th><th>Responsável</th><th>Depende de</th></tr></thead>
          <tbody>
            ${(G.materiais || []).map(m => `
              <tr><td><strong>${m.material}</strong></td><td>${m.resp}</td><td>${m.dep}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    },
  };

  // Blocos individuais (acessados pela home)
  BLOCOS.forEach(b => {
    views[b.id] = () => `
      <span class="eyebrow">Bloco ${b.n}</span>
      <div class="marco-hero">
        <div class="marco-hero-num">${b.n}</div>
        <div class="marco-hero-titulo">${b.titulo}</div>
      </div>
      <p class="page-lead">${b.descricao}</p>

      <div class="card-head" style="margin-top:8px;">
        <dl class="kv" style="margin:0;">
          <dt>Valor de mercado</dt><dd>${b.valor_mercado}</dd>
        </dl>
        ${statusBadge(b.status)}
      </div>

      <h2 class="section-title">O que <span class="ei">você recebe</span></h2>
      <ul class="entregas-lista">
        ${b.entregas.map(e => `
          <li>
            <strong>${e.titulo}</strong>
            <em>${e.detalhe}</em>
            ${statusBadge(e.status)}
          </li>
        `).join('')}
      </ul>
    `;
  });

  // ─────── Roteamento ───────
  // Hashes antigos → páginas novas equivalentes
  const REDIRECTS = {
    // reorganização v2 (documentação antiga)
    'doc-expert':      'met-expert',
    'doc-aprendiz':    'met-aprendiz',
    'doc-metodo':      'met-metodo',
    'doc-produto':     'prod-formacao',
    'doc-grade':       'prod-grade',
    'doc-plano':       'prod-grade',
    // reorganização v3 (taxonomia atual)
    'doc-pesquisas':   'pesquisas',
    'proposta':        'home',
    'contrato':        'home',
    'marco-1':         'marcos',
    'marco-2':         'marcos',
    'marco-3':         'marcos',
    'marco-4':         'marcos',
    'materiais':       'acompanhamento',
    'validacoes':      'acompanhamento',
    'prod-comparacao': 'prod-mentoria',
  };

  const FORMACAO_FAMILY = ['prod-formacao', 'prod-oferta', 'prod-grade', 'prod-jornada', 'prod-gamificacao'];

  function route() {
    const hash = (location.hash.slice(1) || 'home').split('/')[0];
    if (REDIRECTS[hash]) { location.replace('#' + REDIRECTS[hash]); return; }
    window.closeModal();
    storyFilter = 'todas';
    const view = views[hash] || views.home;
    main.innerHTML = view();
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.dataset.view === hash);
    });
    const grupoFormacao = document.getElementById('nav-group-formacao');
    if (grupoFormacao && FORMACAO_FAMILY.includes(hash)) grupoFormacao.classList.add('open');
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();
})();
