/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   Roteamento, renderização, galerias e modais.
   v2 — reorganização: O Método (The Path) + O Produto.
   ═══════════════════════════════════════════════════════════════════ */

(function() {
  const { PROJETO, MARCOS, BLOCOS, MATERIAIS_PENDENTES, VALIDACOES, STATUS_LABELS } = window.DASH;
  const M = window.DASH_METODO || {};
  const P = window.DASH_PRODUTO || {};
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
    const all = [...MARCOS, ...BLOCOS, ...VALIDACOES];
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
          <span class="modal-tag proposta">nome proposto — em definição</span>
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
    home: () => `
      <span class="eyebrow">Visão geral</span>
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

      <h2 class="section-title">Os 4 <span class="ei">marcos</span></h2>
      <div class="blocos-grid">
        ${MARCOS.map(m => `
          <a class="bloco-resumo" href="#${m.id}">
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

      <h2 class="section-title">O Método — <span class="ei">The Path</span></h2>
      <div class="blocos-grid">
        <a class="bloco-resumo" href="#met-aprendiz"><div class="bloco-resumo-n">01</div><div class="bloco-resumo-titulo">O Aprendiz<small>ICP, mercado, dores, desejos, rotina e habilidades — os 7 outputs</small></div></a>
        <a class="bloco-resumo" href="#met-expert"><div class="bloco-resumo-n">02</div><div class="bloco-resumo-titulo">O Expert<small>Posicionamento, trajetória, números, voz e bandeiras</small></div></a>
        <a class="bloco-resumo" href="#met-historias"><div class="bloco-resumo-n">03</div><div class="bloco-resumo-titulo">Banco de Histórias<small>${(M.HISTORIAS || []).length} histórias reais estruturadas — galeria com narrativa completa</small></div></a>
        <a class="bloco-resumo" href="#met-metodo"><div class="bloco-resumo-n">04</div><div class="bloco-resumo-titulo">O Método &amp; Frameworks<small>PUV, jornada, ${(M.FRAMEWORKS || []).length} frameworks e 11 instrumentos — nomes em proposta</small></div></a>
      </div>

      <h2 class="section-title">O <span class="ei">Produto</span></h2>
      <div class="blocos-grid">
        <a class="bloco-resumo" href="#prod-formacao"><div class="bloco-resumo-n">P1</div><div class="bloco-resumo-titulo">Formação<small>Formato, etapas, investimento e as decisões em aberto</small></div></a>
        <a class="bloco-resumo" href="#prod-grade"><div class="bloco-resumo-n">P2</div><div class="bloco-resumo-titulo">Grade · 41 Encontros<small>Aula a aula, com output verificável e formato de cada encontro</small></div></a>
        <a class="bloco-resumo" href="#prod-mentoria"><div class="bloco-resumo-n">P3</div><div class="bloco-resumo-titulo">Mentoria<small>A continuidade — desenho preliminar pra decidir juntos</small></div></a>
        <a class="bloco-resumo" href="#prod-comparacao"><div class="bloco-resumo-n">P4</div><div class="bloco-resumo-titulo">Formação × Mentoria<small>Os dois produtos lado a lado</small></div></a>
        <a class="bloco-resumo" href="#prod-jornada"><div class="bloco-resumo-n">P5</div><div class="bloco-resumo-titulo">Jornada do Aluno<small>A linha do tempo de transformação — 3 fases + faixas</small></div></a>
        <a class="bloco-resumo" href="#prod-gamificacao"><div class="bloco-resumo-n">P6</div><div class="bloco-resumo-titulo">Gamificação · Faixas<small>O sistema de faixas de jiu-jitsu — estratégia e regras</small></div></a>
      </div>

      <a class="link-card" href="#doc-pesquisas">
        <div>
          <span class="link-card-titulo">Pesquisas</span>
          <span class="link-card-meta">Mercado, concorrência, público e certificação — síntese dos 4 relatórios</span>
        </div>
        <span class="link-card-cta">Abrir →</span>
      </a>
    `,

    proposta: () => `
      <span class="eyebrow">Proposta aprovada</span>
      <h1 class="page-title">A <span class="ei">proposta.</span></h1>
      <p class="page-lead">A proposta comercial completa, em formato de slide deck, com diagnóstico, pesquisa, estratégia, simulação em números e detalhamento dos 7 blocos de entrega.</p>

      <a class="link-card" href="${PROJETO.proposta_url}" target="_blank">
        <div>
          <span class="link-card-titulo">Abrir a proposta interativa</span>
          <span class="link-card-meta">19 slides · navegação por clique ou seta · publicada no acervo</span>
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

      <div class="alert verde">
        <strong>Status:</strong> aprovada em 22 de junho de 2026.
      </div>
    `,

    contrato: () => `
      <span class="eyebrow">Contrato assinado</span>
      <h1 class="page-title">O <span class="ei">contrato.</span></h1>
      <p class="page-lead">O contrato de prestação de serviços, com 15 cláusulas cobrindo objeto, cronograma, garantia, propriedade intelectual, LGPD e demais aspectos jurídicos.</p>

      <a class="link-card" href="${PROJETO.contrato_url}" target="_blank">
        <div>
          <span class="link-card-titulo">Abrir o contrato em PDF</span>
          <span class="link-card-meta">Assinado eletronicamente em 22/06/2026 · 15 cláusulas</span>
        </div>
        <span class="link-card-cta">PDF →</span>
      </a>

      <h2 class="section-title">Pontos-chave</h2>
      <div class="card">
        <dl class="kv">
          <dt>Prazo</dt><dd>Até 60 dias corridos após Marco 02</dd>
          <dt>Garantia</dt><dd>Devolução integral em 5 dias úteis após Marco 02 se incompatível</dd>
          <dt>Suporte pós-entrega</dt><dd>30 dias corridos</dd>
          <dt>Foro</dt><dd>Comarca de Curitiba/PR</dd>
        </dl>
      </div>

      <div class="alert verde">
        <strong>Status:</strong> contrato assinado · pagamento confirmado · projeto iniciado em 29/06/2026.
      </div>
    `,

    materiais: () => `
      <span class="eyebrow">Aguardando do cliente</span>
      <h1 class="page-title">Materiais <span class="ei">pendentes.</span></h1>
      <p class="page-lead">Tudo que o Rodrigo precisa enviar pra Maiara antes da reunião de Validação da Estratégia (Marco 02). O que não tiver, marcar "não tenho" e mandar referências.</p>

      <div class="alert amarelo">
        <strong>Como enviar:</strong> pasta única no Google Drive compartilhada com <strong>consultorianotion@gmail.com</strong>. Materiais via WhatsApp ou e-mail não contam como envio oficial (Cláusula 3.1.c do contrato).
      </div>

      ${MATERIAIS_PENDENTES.map(cat => `
        <h2 class="section-title">${cat.categoria}</h2>
        <ul class="entregas-lista">
          ${cat.itens.map(i => `<li>${i}</li>`).join('')}
        </ul>
      `).join('')}

      <div class="alert">
        <strong>Lembrete:</strong> envios parciais não iniciam a fase de produção (Cláusula 4.4). Quanto antes mandar, antes a Validação da Estratégia acontece.
      </div>
    `,

    validacoes: () => `
      <span class="eyebrow">Acompanhamento</span>
      <h1 class="page-title">Validações e <span class="ei">aprovações.</span></h1>
      <p class="page-lead">O que já foi aprovado, o que está em andamento e o que ainda depende de movimentação.</p>

      <div class="card">
        ${VALIDACOES.map(v => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--linha);">
            <div>
              <strong style="font-family:var(--serif);font-weight:500;font-size:16px;color:var(--preto);">${v.item}</strong>
              <span style="display:block;font-size:12px;color:var(--cinza);margin-top:2px;">${v.data}</span>
            </div>
            ${statusBadge(v.status)}
          </div>
        `).join('')}
      </div>
    `,

    /* ═══════════════ O MÉTODO — THE PATH ═══════════════ */

    'met-aprendiz': () => `
      ${hero('O Método — The Path · Camada 01', '01', 'O <span class="ei">Aprendiz</span>')}
      ${M.APRENDIZ ? M.APRENDIZ.html : ''}
    `,

    'met-expert': () => `
      ${hero('O Método — The Path · Camada 02', '02', 'O <span class="ei">Expert</span>')}
      ${M.EXPERT ? M.EXPERT.html : ''}
    `,

    'met-historias': () => `
      ${hero('O Método — The Path · Camada 02', '03', 'Banco de <span class="ei">Histórias</span>', 'As ' + (M.HISTORIAS || []).length + ' histórias reais do Rodrigo, estruturadas pra virar aula, copy e conteúdo. Clique em qualquer card pra abrir a narrativa completa, a versão curta pronta pra copy e o status de autorização. Todas as falas entre aspas são literais da call — nada foi parafraseado.')}

      <div class="gal-bar">
        ${(M.HISTORIAS_CATS || []).map(c => `<button class="gal-btn${c.id === 'todas' ? ' active' : ''}" data-cat="${c.id}" onclick="filterStories('${c.id}')">${c.label}</button>`).join('')}
        <span class="gal-count" id="story-count">${(M.HISTORIAS || []).length} histórias</span>
      </div>
      <div class="gal-grid" id="story-grid">${storyGrid()}</div>

      <div class="alert amarelo" style="margin-top:24px;">
        <strong>Pendências de prova:</strong> os 3 cases de clientes exigem autorização antes de uso público com identificação (vídeo-depoimento da paciente peregrina ainda não enviado). As histórias de forja e as pessoais são de uso livre — são vivências do próprio Rodrigo.
      </div>
    `,

    'met-metodo': () => `
      ${hero('O Método — The Path · Camada 03', '04', 'O Método &amp; <span class="ei">Frameworks</span>')}

      <div class="alert decisao">
        <strong>⚠️ Tudo nesta página é PROPOSTA — em definição.</strong> ${M.NOME_METODO ? M.NOME_METODO.aviso : ''}
      </div>

      <h2 class="section-title">Nome do método — <span class="ei">proposta nº 1</span></h2>
      <div class="card preto">
        <div class="modal-tags" style="margin-bottom:12px;"><span class="modal-tag vermelho">proposta — em definição</span></div>
        <h3 class="card-title" style="font-family:var(--cond);text-transform:uppercase;font-size:34px;">${M.NOME_METODO ? M.NOME_METODO.top1 : ''}</h3>
        <p style="font-family:var(--serif);font-style:italic;font-size:16px;">${M.NOME_METODO ? M.NOME_METODO.assinatura : ''}</p>
        <p style="font-size:13px;">${M.NOME_METODO ? M.NOME_METODO.top1_racional : ''}</p>
      </div>
      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>#</th><th>Nome proposto</th><th>Técnica de naming</th><th>Por que funciona</th><th>Risco</th></tr></thead>
          <tbody>
            ${(M.NOME_METODO ? M.NOME_METODO.opcoes : []).map((o, i) => `
              <tr><td class="tnum">${i + 1}</td><td><strong>${o.nome}</strong></td><td>${o.tecnica}</td><td>${o.porque}</td><td>${o.risco}</td></tr>
            `).join('')}
          </tbody>
        </table>
        <div class="tbl-foot">Decisão final: Maiara + Rodrigo, na Validação da Estratégia (Marco 02).</div>
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
        <div class="tbl-foot">Canais sugeridos com base no ICP e na presença atual do Rodrigo — validar quais entram.</div>
      </div>

      <h2 class="section-title">Os 4 princípios + os <span class="ei">transversais</span></h2>
      <ul class="entregas-lista">
        ${(M.PRINCIPIOS || []).map(p => `<li><strong>${p.nome}</strong><em>${p.desc}</em></li>`).join('')}
      </ul>
      ${M.TRANSVERSAIS ? `
      <div class="card">
        <h3 class="card-title">${M.TRANSVERSAIS.titulo}</h3>
        <p style="margin:0;">${M.TRANSVERSAIS.texto}</p>
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
      <p>As ferramentas práticas que o método exige — o que o aluno vai abrir, preencher e aplicar. Formato de uso é sugestão, confirmada na camada de produto pela habilidade digital do aluno.</p>
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

    /* ═══════════════ O PRODUTO ═══════════════ */

    'prod-formacao': () => `
      ${hero('O Produto · Visão geral', 'P1', 'A <span class="ei">Formação</span>')}
      ${P.FORMACAO ? P.FORMACAO.html : ''}
    `,

    'prod-grade': () => `
      ${hero('O Produto · Grade completa', 'P2', 'Os 41 <span class="ei">encontros</span>', 'A grade descida ao detalhe: 41 encontros semanais em 10 meses, em 3 etapas, cada um com sua essência, seu output verificável e seu formato. O princípio: toda aula leva a uma ação concreta — se não tem output, é palestra, não formação. Rascunho pra validar.')}

      <div class="leg">
        <span>${fmtTag('online')}</span>
        <span>${fmtTag('presencial')} (E9-E10, Brasília)</span>
        <span>${fmtTag('caso')}</span>
        <span>${fmtTag('gate')}</span>
        <span>⚠️ ponto que os pendentes do Rodrigo refinam</span>
      </div>

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
        <strong>Onde os 2 pendentes do Rodrigo refinam este plano (ajuste local, não redesenho):</strong> a marcação capacita × só-teoria afeta o rótulo e o output de 6 aulas da Etapa 2 (E22-E23, E26-E27, E30-E32); o material gravado dos tripés fortalece o E3 (pode virar aula invertida). Estrutura e contagem de encontros não mudam.
      </div>
    `,

    'prod-mentoria': () => `
      ${hero('O Produto · Continuidade', 'P3', 'A <span class="ei">Mentoria</span>')}
      ${P.MENTORIA ? P.MENTORIA.html : ''}
    `,

    'prod-comparacao': () => `
      ${hero('O Produto · Lado a lado', 'P4', 'Formação × <span class="ei">Mentoria</span>', 'Os dois produtos da esteira comparados critério a critério — pra ficar claro o que cada um promete, pra quem, e por que um prepara o outro. Tickets são hipóteses de trabalho, a fechar juntos no Marco 02.')}

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
      ${hero('O Produto · Experiência', 'P5', 'Jornada do <span class="ei">Aluno</span>', 'A linha do tempo de transformação da formação: 10 meses, 41 encontros + 1 imersão presencial, 3 fases + onboarding + formatura. Cada fase nomeada pela virada de identidade — não por "módulo 1, módulo 2".')}

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
      ${hero('O Produto · Engajamento', 'P6', 'Gamificação · <span class="ei">Faixas</span>', 'O sistema de faixas de jiu-jitsu que amarra a progressão do aluno aos gates técnicos reais da formação. A analogia é autoral do Rodrigo — faixa roxa, um grau — e todo o desenho segue uma régua só: linguagem de maestria, nunca de jogo.')}

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

  // Marcos individuais
  MARCOS.forEach(m => {
    views[m.id] = () => `
      <span class="eyebrow">Marco ${m.n}</span>
      <div class="marco-hero">
        <div class="marco-hero-num">M${m.n.replace(/^0/, '')}</div>
        <div class="marco-hero-titulo">${m.titulo}</div>
      </div>
      <p class="page-lead">${m.descricao}</p>

      <div class="card-head" style="margin-top:8px;">
        <dl class="kv" style="margin:0;">
          <dt>Prazo</dt><dd>${m.prazo}</dd>
        </dl>
        ${statusBadge(m.status)}
      </div>

      <h2 class="section-title">O que <span class="ei">acontece aqui</span></h2>
      <ul class="entregas-lista">
        ${m.detalhes.map(d => `<li>${d}</li>`).join('')}
      </ul>
    `;
  });

  // Blocos individuais
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

  // Pesquisas (docs.js)
  (window.DASH_DOCS || []).forEach(d => {
    views[d.id] = () => `
      <span class="eyebrow">${d.eyebrow}</span>
      <div class="marco-hero">
        <div class="marco-hero-num">${d.n}</div>
        <div class="marco-hero-titulo">${d.titulo}</div>
      </div>
      ${d.html}
    `;
  });

  // ─────── Roteamento ───────
  // Hashes antigos da seção "Documentação do Briefing" → novas páginas equivalentes
  const REDIRECTS = {
    'doc-expert':   'met-expert',
    'doc-aprendiz': 'met-aprendiz',
    'doc-metodo':   'met-metodo',
    'doc-produto':  'prod-formacao',
    'doc-grade':    'prod-grade',
    'doc-plano':    'prod-grade',
  };

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
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();
})();
