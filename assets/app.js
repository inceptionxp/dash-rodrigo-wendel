/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   Lógica de roteamento e renderização.
   ═══════════════════════════════════════════════════════════════════ */

(function() {
  const { PROJETO, MARCOS, BLOCOS, MATERIAIS_PENDENTES, VALIDACOES, STATUS_LABELS } = window.DASH;
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

      <h2 class="section-title">Documentação do <span class="ei">briefing</span></h2>
      <div class="blocos-grid">
        ${(window.DASH_DOCS || []).map(d => `
          <a class="bloco-resumo" href="#${d.id}">
            <div class="bloco-resumo-n">${d.n}</div>
            <div class="bloco-resumo-titulo">${d.titulo}<small>${d.subtitulo}</small></div>
          </a>
        `).join('')}
      </div>
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

  // Documentação do briefing
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
  function route() {
    const hash = (location.hash.slice(1) || 'home').split('/')[0];
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
