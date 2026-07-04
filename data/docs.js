/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   Pesquisas — síntese executiva dos 4 relatórios.
   Nota de reorganização (v2): as antigas seções D1-D3 e D5-D7 foram
   redistribuídas nas seções "O Método — The Path" e "O Produto"
   (data/metodo.js e data/produto.js). Aqui fica só a página de Pesquisas.
   ═══════════════════════════════════════════════════════════════════ */

window.DASH_DOCS = [

{
  id: 'doc-pesquisas',
  n: 'P',
  titulo: 'Pesquisas',
  subtitulo: 'Mercado, concorrência, público e certificação — os 4 relatórios',
  eyebrow: 'Pesquisas',
  html: `
    <p class="page-lead">Síntese executiva dos relatórios de pesquisa do projeto. Os relatórios completos (com todas as fontes) ficam no repositório interno do projeto.</p>

    <h2 class="section-title">1 · Mercado DTM <span class="ei">(pesquisa-base, mai/2026)</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Mercado endereçável</dt><dd>~450 mil dentistas no Brasil, +15-16 mil novos/ano</dd>
        <dt>Especialistas DTM</dt><dd>Apenas 1.649 (0,38% do total) — uma das menores densidades entre as 24 especialidades</dd>
        <dt>Demanda clínica</dt><dd>40-60% da população com sinais de DTM; 3,6-7% com necessidade severa de tratamento</dd>
        <dt>Honorários DTM</dt><dd>Placa R$ 1.250-1.500 · tratamento completo R$ 3.500-10.000+</dd>
        <dt>Conclusão</dt><dd>Oceano azul qualificado — janela competitiva estimada de 18-36 meses</dd>
      </dl>
    </div>

    <h2 class="section-title">2 · Concorrência em formações <span class="ei">(jul/2026)</span></h2>
    <div class="card">
      <p style="margin:0 0 10px;"><strong>A moldura mudou com o pivô do produto:</strong> a formação de 8-9 meses compete com infoprodutos técnicos de nicho (cursos online, mentorias curtas), não com especializações MEC/CFO de 2 anos.</p>
      <dl class="kv">
        <dt>Cluster direto</dt><dd>Cursos gravados a partir de R$ 397 · mentorias intensivas curtas (4 semanas) por R$ 6.000-9.000 · pós EAD de baixo custo (~R$ 1.000-2.600 total)</dd>
        <dt>Referência de valor/hora</dt><dd>Mentoria intensiva do nicho cobra R$ 375-563/hora ao vivo</dd>
        <dt>GAP confirmado</dt><dd><strong>Ninguém oferece cadência semanal ao vivo por 8-9 meses com hands-on presencial</strong> — o formato da formação não tem concorrente direto</dd>
        <dt>Atenção estratégica</dt><dd>Apenas 1 concorrente ensina precificação/negócio dentro de curso técnico — validando a urgência de ocupar esse espaço</dd>
        <dt>Bônus do levantamento</dt><dd>Dois "concorrentes" encontrados são ativos do PRÓPRIO Rodrigo (curso presencial + curso gravado na Hotmart) — viram prova social e funil de entrada</dd>
      </dl>
    </div>

    <h2 class="section-title">3 · O Aprendiz <span class="ei">(jul/2026)</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Perfil provável</dt><dd>Clínico geral 3-10+ anos de formado, maioria mulheres, teto de renda no convênio</dd>
        <dt>Dor validada por ciência</dt><dd>A maioria dos dentistas confunde bruxismo com DTM (paper com metodologia) — exatamente a tese do Rodrigo</dd>
        <dt>Desejo dominante</dt><dd>Status e maestria: "decifrar o que ninguém decifrou" — não só dinheiro</dd>
        <dt>Objeções críticas</dt><dd>"Tem paciente na minha cidade?" · desconfiança de EAD na odonto · burnout (vender alívio, não só ganho)</dd>
        <dt>Canais</dt><dd>Instagram de professores-referência + congressos do nicho (bienal, 800+ participantes)</dd>
      </dl>
      <p style="font-size:12px;color:var(--cinza);margin:10px 0 0;">Lacuna: linguagem literal de grupos fechados — será coberta com depoimentos de ex-alunos do Rodrigo (pendência). A versão completa e estruturada desta pesquisa vive em <a href="#met-aprendiz" style="color:var(--vermelho);font-weight:600;">O Aprendiz</a>.</p>
    </div>

    <h2 class="section-title">4 · Certificação <span class="ei">(jul/2026)</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Fato central</dt><dd>O MEC credencia INSTITUIÇÕES, nunca pessoa física — "selo MEC" pro Rodrigo só via parceria com faculdade credenciada</dd>
        <dt>Rota A — Curso livre</dt><dd>Amparo legal no art. 42 da LDB; total liberdade de formato; não pode chamar de "especialização" nem prometer título</dd>
        <dt>Rota B — Lato sensu via IES parceira</dt><dd>Exige 360h e estrutura acadêmica formal; dá "pós-graduação", mas NÃO dá registro de especialista no CRO (isso exige 750h presenciais, regra CFO)</dd>
        <dt>Risco ético</dt><dd>Código de Ética Odontológica proíbe anunciar especialidade sem registro — a linguagem de venda precisa ser precisa</dd>
        <dt>Recomendação preliminar</dt><dd><strong>Lançar como curso livre</strong> (formato 8-9 meses online não encaixa nas rotas reguladas sem mudança estrutural grande) e comunicar a força real: quem assina é quem formou 10% dos especialistas do país. Reavaliar parceria com IES na v2</dd>
      </dl>
      <p style="font-size:12px;color:var(--cinza);margin:10px 0 0;">Decisão final na Validação da Estratégia, com validação jurídica da linguagem de venda.</p>
    </div>
  `,
},
];
