/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   EXTRAÇÃO DA CONSULTORIA · Cliente Ideal, Diferenciais e Autoridade, Histórias, Frameworks
   Fontes: briefing/dna/dna-aprendiz.md · briefing/dna/banco-de-historias.md ·
   briefing/dna/frameworks-metodo.md · call de levantamento (02/07/2026).
   Regra da dashboard pública: concorrentes anonimizados · nomes de método,
   frameworks e fases sempre marcados como PROPOSTA · zero dado inventado.
   ═══════════════════════════════════════════════════════════════════ */

window.DASH_METODO = {

/* ─────────────────────── 01 · CLIENTE IDEAL ─────────────────────── */
APRENDIZ: {
  html: `
    <p class="page-lead">Quem é o dentista que a formação vai transformar — o estudo completo do cliente ideal em 7 blocos, com o grau de confiança de cada dado sempre à vista. Fontes: 4 pesquisas dedicadas + call de levantamento de 02/07.</p>

    <div class="leg">
      <span>🟢 <strong>dado</strong> — alta confiança, fonte Tier 1 (CFO, CRO, SciELO, papers, dados do próprio Rodrigo)</span>
      <span>🟡 <strong>médio</strong> — fonte Tier 2, usado só pra linguagem/comportamento</span>
      <span>🔴 <strong>hipótese fundamentada</strong> — sem fonte primária direta, com caminho de validação apontado</span>
    </div>

    <h2 class="section-title">1 · ICP — quem é o <span class="ei">aprendiz</span></h2>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Critério</th><th>Dado</th><th>Confiança</th></tr></thead>
        <tbody>
          <tr><td><strong>Universo de referência</strong></td><td>~450 mil cirurgiões-dentistas registrados no Brasil (2025)</td><td>🟢 CFO</td></tr>
          <tr><td><strong>Corte de especialização</strong></td><td>~33% têm alguma especialização registrada — a maioria (53%) segue generalista</td><td>🟡</td></tr>
          <tr><td><strong>Gênero da profissão</strong></td><td>60,1% mulheres entre cirurgiões-dentistas; 69,6% considerando toda a força de trabalho odontológica</td><td>🟢 CRO/CFO</td></tr>
          <tr><td><strong>Faturamento de consultório individual</strong></td><td>R$ 20-35 mil/mês bruto (não é pró-labore líquido)</td><td>🟢</td></tr>
          <tr><td><strong>Renda CLT de clínico júnior</strong></td><td>R$ 2.500-5.000/mês</td><td>🟡</td></tr>
          <tr><td><strong>Concentração geográfica</strong></td><td>~50% dos profissionais ativos no Sudeste (SP e MG)</td><td>🟢</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card destaque">
      <p style="margin:0;"><strong>Decisão já tomada na call (02/07):</strong> o aluno da formação NÃO é o especialista — é o clínico geral que decidiu aprender DTM do zero. A confusão com bruxismo é generalizada: <strong>63,9% dos dentistas</strong> relatam limitação de abertura bucal como sinal de bruxismo quando na verdade é sinal de DTM — dado de paper com metodologia e N amostral, não anedota. 🟢</p>
    </div>

    <ul class="entregas-lista">
      <li><strong>✅ Momento de carreira + público — validado pelo Rodrigo (12/07 e 26/07)</strong><em>O aluno que investe é o dentista mais sênior (de alguns anos de formado ao veterano de 20+), muitas vezes já com OUTRA especialidade e faturamento maior — quem tem caixa pra bancar a formação. Público NÃO é só clínico geral: inclui o especialista de outra área (orto, prótese, cirurgia), que é quem MAIS procura a especialização do Rodrigo.</em></li>
      <li><strong>✅ Gênero — validado com dado do expert (12/07)</strong><em>Maioria feminina forte: <strong>80% de mulheres nas duas últimas turmas</strong>. A comunicação e o retrato-falado assumem a mulher dentista como público majoritário.</em></li>
      <li><strong>🟢 Contexto financeiro</strong><em>O dentista ambicioso já orçamenta capacitação: o mercado de especialização em odontologia sustenta ticket de R$ 36-60 mil (DTM/DOF) e R$ 35-80 mil (implantodontia). A formação compete numa faixa mais acessível, mas ainda exige decisão financeira ponderada, não impulsiva.</em></li>
    </ul>

    <div class="retrato">
      <span class="rt-label">Retrato falado — a persona (síntese fundamentada, não citação literal)</span>
      <p>Ela tem entre 30 e 45 anos, formou-se há uns 6-8 anos, e hoje toca um consultório próprio ou divide uma cadeira alugada numa cidade do interior ou da região metropolitana. A agenda vive lotada de restauração, limpeza e canal, e o extrato bancário no fim do mês nunca reflete o tanto que ela trabalha. Pelo menos uma vez por semana, um paciente chega reclamando de dor na mandíbula, estalo ao mastigar, dor de cabeça constante ou desgaste nos dentes da frente — e ela faz o que aprendeu na faculdade: bruxismo, placa de mordida, "vamos ver se melhora". Às vezes melhora. Na maioria das vezes, o paciente some, procura outro profissional, ou passa a viver com a dor. Ela sente, sem conseguir nomear direito, que está tratando o sintoma sem entender a causa — e desconfia que está deixando dinheiro na mesa toda vez que devolve esse paciente ou trata mal um caso que, tratado direito, valeria de 10 a 20 vezes o preço de uma consulta comum. Ela já pensou em fazer uma pós, mas o preço de uma especialização tradicional (dois anos, presencial, longe de casa) trava a decisão — e ela desconfia, com razão, que curso gravado sem interação ao vivo não vai mudar a forma como ela atende segunda de manhã.</p>
    </div>
    <p style="font-size:12.5px;color:var(--cinza);">Proposta de validação do retrato: aplicar a pergunta "o que te fez procurar essa formação?" nos primeiros leads reais — é o dado mais barato disponível assim que a captação abrir.</p>

    <h2 class="section-title">2 · Pesquisa de mercado — TAM / SAM / SOM <span class="ei">com as contas</span></h2>
    <ul class="entregas-lista">
      <li><strong>TAM — ~450.000 dentistas 🟢</strong><em>Universo teórico máximo (CFO), crescendo ~4% a.a., com 15-16 mil novos formados por ano. Todo dentista é, em tese, candidato: a prevalência de sinais de DTM na população (40-60% 🟢 SciELO) faz da confusão diagnóstica um problema universal da profissão.</em></li>
      <li><strong>SAM — ~95.400 dentistas 🔴 (hipótese explícita)</strong><em>Generalistas (53% de 450 mil = ~238.500) × corte hipotético de 40% no intervalo de carreira/contexto compatível. Número construído pra dar ordem de grandeza — não citar como dado fechado em peça de venda.</em></li>
      <li><strong>SOM — o ecossistema real do Rodrigo 🟢</strong><em>~6.800 seguidores no Instagram + ~100-120 especialistas formados (≈10% dos especialistas de DTM do Brasil) + 300+ alunos no total + leads históricos da especialização. Hipótese de primeira turma: 15 a 40 alunos 🔴 — a validar com a lista de captação real.</em></li>
    </ul>
    <div class="mono-block">TAM  = 450.000 dentistas (universo total, Brasil)
SAM  = 450.000 × 53% (generalistas) × 40% (hipótese de corte de carreira)
     = 238.500 × 40% ≈ 95.400 dentistas
SOM  = ecossistema próprio (6.800 seguidores + 300+ alunos formados
       + leads históricos) — alcance real e mensurável hoje</div>
    <p style="font-size:12.5px;color:var(--cinza);">O SAM é deliberadamente o elo mais fraco da cadeia — não existe dado público de "quantos generalistas têm 3-10 anos de formado e consultório próprio". Lacuna real, não número inflado disfarçado de precisão.</p>

    <h2 class="section-title">3 · Dores conscientes × problemas <span class="ei">inconscientes</span></h2>
    <ul class="entregas-lista">
      <li><strong>Dor consciente #1 — "Não sei diferenciar bruxismo de DTM" 🟢</strong><em>O dado mais sólido do documento: a maioria estatística dos dentistas pesquisados confunde os sinais (63,9% erram a limitação de abertura; a maioria erra estalos, crepitação e desgastes). É o gancho natural de qualquer peça de atração.</em></li>
      <li><strong>Dor consciente #2 — "Não sei fazer diagnóstico correto" 🟢/🟡</strong><em>O protocolo diagnóstico (anamnese estruturada, palpação, imagem) não faz parte da rotina da clínica geral. Nas palavras do Rodrigo sobre os leads: "os dentistas não sabem abordar, avaliar, o que perguntar".</em></li>
      <li><strong>Dor consciente #3 — teto de renda na clínica geral 🟢</strong><em>R$ 20-35 mil/mês bruto de consultório individual, dependência de convênio. Linguagem provável (🔴 a capturar nos primeiros leads): "não dá pra viver só de convênio", "cansei de fazer restauração o dia inteiro".</em></li>
      <li><strong>Dor consciente #4 — trava comercial: "sei o que fazer, mas fico patinando" 🟢</strong><em>Novidade da aula comercial de 07/07 (interação real da turma): o dentista sabe que precisa da parte comercial mas não sabe por onde começar. Falas literais das alunas — "a gente sabe o que tem que fazer, é muita coisa, e fica patinando, não vai pra canto nenhum", "tenho dificuldade de dar nome aos planos de tratamento", "tenho dificuldade de fechamento — o paciente fala que vai pensar, vai falar com o marido". Não é só insegurança clínica: é trava comercial. A Etapa 3 resolve dando sequência e prioridade.</em></li>
      <li><strong>Problema inconsciente #1 — trata sintoma, não a disfunção 🟡</strong><em>Diante da dor de ATM, prescreve placa genérica achando que "fez o protocolo". Ele não sabe que não sabe. Conecta direto com a bandeira do Rodrigo: "não se trata DTM com cirurgia, ortodontia, botox ou placa!".</em></li>
      <li><strong>Problema inconsciente #2 — não vê o valor comercial do próprio diagnóstico 🟢</strong><em>Tratamento particular de DTM vale R$ 3.500-10.000; com 40-60% da população com sinais, esse paciente passa todo dia na cadeira dele. Ele não escolhe não monetizar: ele não vê. É o problema mais poderoso pro mecanismo de venda — ataca uma cegueira, não uma falta de vontade.</em></li>
    </ul>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>#</th><th>Item</th><th>Tipo</th><th>Confiança</th></tr></thead>
        <tbody>
          <tr><td class="tnum">1</td><td><strong>Confunde bruxismo com DTM</strong></td><td>Dor consciente</td><td>🟢</td></tr>
          <tr><td class="tnum">2</td><td><strong>Não sabe fazer diagnóstico protocolar</strong></td><td>Dor consciente</td><td>🟡/🟢</td></tr>
          <tr><td class="tnum">3</td><td><strong>Trata sintoma, não causa (placa genérica)</strong></td><td>Problema inconsciente</td><td>🟡</td></tr>
          <tr><td class="tnum">4</td><td><strong>Não vê o valor comercial do próprio diagnóstico</strong></td><td>Problema inconsciente</td><td>🟢 (cálculo direto)</td></tr>
          <tr><td class="tnum">5</td><td><strong>Teto de renda na clínica geral / convênio</strong></td><td>Dor consciente (de negócio)</td><td>🟢</td></tr>
        </tbody>
      </table>
      <div class="tbl-foot">Citações literais de alunos e pacientes chegaram em 07/07 (aula comercial + depoimentos) e já alimentam as dores acima. Ainda vale capturar linguagem de dentistas em grupos fechados pra ampliar o repertório.</div>
    </div>

    <h2 class="section-title">4 · Desejos e <span class="ei">necessidades</span></h2>
    <ul class="entregas-lista">
      <li><strong>Desejo dominante — ser "o profissional que decifra o que ninguém decifrou" 🟢</strong><em>O paciente de DTM peregrina por otorrino, neuro, ortopedista sem resposta (padrão documentado pela própria entidade da especialidade). O aprendiz quer ser quem finalmente diz "achei a causa". Ativa reconhecimento/status + domínio/maestria — mais forte que "ganhar mais dinheiro" isolado: o dinheiro é prova do status, não o desejo em si.</em></li>
      <li><strong>Desejo secundário — sair da lógica de volume, entrar na lógica de valor 🟢</strong><em>Tratamento particular de R$ 3.500-10.000 contra honorário de convênio de R$ 144-437. O contraponto vivo: o próprio Rodrigo fatura R$ 1 milhão/ano, sozinho, em 28-30h/semana.</em></li>
      <li><strong>Desejo terciário — segurança e pertencimento profissional 🟢</strong><em>A pergunta recorrente dos leads ("tem certificado? quantas horas?") revela o desejo de pertencer a algo reconhecido e validado, não só aprender uma técnica isolada.</em></li>
    </ul>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Nível</th><th>Frase típica (declarada)</th><th>O que está por trás (real)</th></tr></thead>
        <tbody>
          <tr><td>Declarado</td><td>"Quero aprender a tratar DTM"</td><td><strong>Quero parar de me sentir incompetente quando esse paciente senta na cadeira</strong></td></tr>
          <tr><td>Declarado</td><td>"Quero um diferencial"</td><td><strong>Quero deixar de ser só mais um dentista de convênio — ser procurado, não substituível</strong></td></tr>
          <tr><td>Declarado</td><td>"Quero ganhar mais"</td><td><strong>Quero trabalhar menos horas ganhando mais</strong> — o exemplo do Rodrigo é a prova que sustenta essa escada</td></tr>
          <tr><td>Real (topo)</td><td>—</td><td><strong>Quero ser reconhecido como o profissional que resolve o que os outros não resolvem</strong></td></tr>
        </tbody>
      </table>
      <div class="tbl-foot">🔴 Escada construída por triangulação (pesquisa + relato do expert), não por entrevista com aluno. Validar nos primeiros leads: "o que mudaria na sua rotina se você dominasse DTM?" e descer até o desejo real se repetir.</div>
    </div>

    <h2 class="section-title">5 · Rotina — a concorrência pelo <span class="ei">tempo dele</span></h2>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Concorrente pelo tempo</th><th>Por que compete</th></tr></thead>
        <tbody>
          <tr><td><strong>Agenda cheia de convênio</strong></td><td>Tempo de estudo é tempo "roubado" da cadeira que paga as contas</td></tr>
          <tr><td><strong>Burnout documentado na categoria</strong></td><td>1 em cada 10 dentistas vive burnout; o Brasil é o 2º país com mais casos diagnosticados 🟢 — a energia mental já está no limite</td></tr>
          <tr><td><strong>Vida familiar/pessoal</strong></td><td>🔴 hipótese geral de profissional liberal com agenda apertada</td></tr>
          <tr><td><strong>Cursos de gestão do nicho</strong></td><td>Concorrem pelo mesmo orçamento de capacitação e pela mesma atenção de quem "quer evoluir"</td></tr>
          <tr><td><strong>Cursos gravados de DTM já existentes</strong></td><td>Prometem o mesmo resultado com muito menos fricção de agenda (sem horário fixo semanal)</td></tr>
        </tbody>
      </table>
    </div>
    <ul class="entregas-lista">
      <li><strong>✅ Janela de horário — validada pelo Rodrigo (12/07)</strong><em>19h-21h numa noite de semana (segunda como exemplo), com abertura pra um encontro mais longo num sábado por mês conforme a turma pedir. Confirma o período (noite de semana) e ajusta a faixa para 19h-21h.</em></li>
      <li><strong>Implicação de formato (já decidido 🟢)</strong><em>1 encontro semanal em grupo, ao vivo, por 10 meses. O burnout torna qualquer "mais uma coisa pra fazer" um risco de abandono — comunicar o ALÍVIO (parar de tratar errado) tanto quanto o ganho.</em></li>
    </ul>

    <h2 class="section-title">Objeções <span class="ei">mapeadas</span></h2>
    <ul class="entregas-lista">
      <li><strong>"É muito longo / presencial demais / longe"</strong><em>Ouvidas pelo Rodrigo direto dos leads da especialização (2 anos, Brasília todo mês). A formação nasce como resposta: online, cadência semanal, poucas idas presenciais.</em></li>
      <li><strong>"Tem certificado? Quantas horas?"</strong><em>Certificação pesa na decisão — rota definida na estratégia (ver Pesquisas).</em></li>
      <li><strong>"Curso online de odontologia funciona?"</strong><em>Desconfiança cultural forte com EAD no setor (institucionalizada pelo CFO 🟢) — mitigar com o hands-on presencial (palpação) + acompanhamento semanal ao vivo, visíveis desde a primeira peça de comunicação.</em></li>
      <li><strong>"Será que tem paciente de DTM na minha cidade?"</strong><em>Quebrar com o dado de prevalência (40-60%) e com o argumento do Rodrigo: o paciente JÁ está na cadeira dele — ele só não vê.</em></li>
      <li><strong>"DTM não dá dinheiro"</strong><em>A falácia do mercado. Quebra com o caso do próprio Rodrigo: R$ 1M/ano, 28-30h/semana, clínica pequena.</em></li>
      <li><strong>"Vou investir e não vou aplicar"</strong><em>Responder com os ganhos rápidos comerciais desde o 1º mês + cadência semanal que não deixa esfriar.</em></li>
      <li><strong>"Não tenho tempo — já sou sobrecarregado"</strong><em>Formato de 1 encontro semanal (não diário); vender alívio e caminho, não só ganho.</em></li>
      <li><strong>"8-9 meses é muito tempo"</strong><em>Ancorar a duração como mecanismo (jornada completa: diagnóstico → tratamento → negócio) — nenhum concorrente entrega cadência semanal ao vivo por esse período.</em></li>
    </ul>

    <h2 class="section-title">Onde ele <span class="ei">está</span></h2>
    <ul class="entregas-lista">
      <li><strong>Instagram de professores-referência</strong><em>Principal canal de descoberta e confiança do nicho.</em></li>
      <li><strong>Congressos e sociedades</strong><em>Congresso da especialidade (bienal, 800+ participantes — o maior de Dor Orofacial da América Latina), CROs, eventos de atualização.</em></li>
      <li><strong>Base do próprio Rodrigo</strong><em>Leads aquecidos da especialização (com objeções conhecidas), 300+ ex-alunos, ~6.800 seguidores.</em></li>
    </ul>

    <h2 class="section-title">6 · Consciência &amp; <span class="ei">sofisticação</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Nível de consciência</dt><dd>Entre <strong>inconsciente do problema</strong> (não sabe que confunde bruxismo com DTM) e <strong>consciente do problema, inconsciente da solução</strong> (já sente o teto de renda, mas não sabe que existe um caminho estruturado) 🟢</dd>
        <dt>Frase que denuncia</dt><dd>"Os dentistas não sabem NADA de DTM. Não sabem abordar, avaliar, o que perguntar. Acham que DTM é bruxismo." — o próprio Rodrigo, sobre os leads</dd>
        <dt>Sofisticação do mercado</dt><dd><strong>Estágio 2-3 de 5</strong> — ao menos 8 ofertas ativas no nicho (curso gravado, mentoria curta, EAD, especialização longa), mas nenhum mecanismo dominante estabelecido. Não é mercado virgem nem exausto</dd>
        <dt>Espaço aberto</dt><dd>Nenhum player usa o mecanismo duração + cadência semanal ao vivo como argumento central; só 1 concorrente direta já testa o ângulo de precificação/negócio dentro de curso técnico — ainda sem escala</dd>
      </dl>
    </div>
    <div class="alert">
      <strong>Leitura que a venda herda:</strong> consciência baixa + sofisticação intermediária = a comunicação de topo de funil deve primeiro REVELAR o problema (confusão bruxismo × DTM, tratamento incompleto) antes de vender a formação. Abrir com prova de mecanismo (o dado científico da confusão, ou o caso das duas psicólogas) tem mais força que abrir com oferta ou preço.
    </div>
    <p style="font-size:12.5px;color:var(--cinza);">🔴 4 perguntas de detecção pros primeiros leads: (1) já ouviu falar em DTM antes de conhecer o Rodrigo? (2) sabia que bruxismo e DTM são coisas diferentes? (3) já tentou algum curso sobre isso? (4) o que te fez procurar essa formação?</p>

    <h2 class="section-title">7 · Habilidades <span class="ei">digitais</span></h2>
    <p>Lacuna fechada no essencial — <strong>validado pelo Rodrigo (12/07)</strong>: a turma hoje é familiarizada com <strong>Zoom e Teams</strong> (o único caso de dificuldade que ele lembra foi um aluno mais velho travando no Zoom, na pandemia — contexto superado). Zoom confirmado; resta validar só o conforto com a área de membros. 🟢</p>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Plataforma</th><th>Nível de uso (hipótese)</th><th>Evidência indireta</th><th>Confiança</th></tr></thead>
        <tbody>
          <tr><td><strong>WhatsApp</strong></td><td>Alto — ferramenta de trabalho diária</td><td>Uso profissional citado pelo próprio Rodrigo como canal de relacionamento</td><td>🟡</td></tr>
          <tr><td><strong>Instagram</strong></td><td>Médio-alto — consome conteúdo de referências</td><td>Canal confirmado de consumo do nicho</td><td>🟢 canal / 🔴 nível</td></tr>
          <tr><td><strong>Zoom / videochamada</strong></td><td>Médio</td><td>Um concorrente direto já opera mentoria 100% via Zoom sem relato de barreira</td><td>🟡</td></tr>
          <tr><td><strong>Área de membros / plataforma de curso</strong></td><td>Médio</td><td>O próprio Rodrigo já vende curso gravado nesse formato (R$ 397, 9 aulas)</td><td>🟢 produto / 🔴 conforto</td></tr>
          <tr><td><strong>Google Forms</strong></td><td>Alto</td><td>A ficha de 40 perguntas do próprio protocolo já roda em formulário digital</td><td>🟡</td></tr>
          <tr><td><strong>IA generativa (ChatGPT)</strong></td><td>Baixo-médio, crescente</td><td>Caso real: paciente encontrou o Rodrigo perguntando ao ChatGPT</td><td>🟡</td></tr>
          <tr><td><strong>Apps de saúde (bruxismo)</strong></td><td>Desconhecido</td><td>O método já prescreve apps ao paciente; sem dado sobre o dentista-aluno</td><td>🔴</td></tr>
        </tbody>
      </table>
    </div>
    <ul class="entregas-lista">
      <li><strong>Implicações de formato</strong><em>Onboarding explícito e redundante (vídeo curto de "como usar a área de membros"); Zoom é aposta segura; gamificação por faixas funciona mesmo com conforto médio (metáfora simples); comunidade via WhatsApp é o caminho de menor fricção.</em></li>
      <li><strong>O que perguntar ao Rodrigo e a ex-alunos</strong><em>Onde as turmas anteriores travavam com ferramenta; se "como funciona a plataforma" já foi barreira; resistência a componentes remotos; faixa etária real das turmas.</em></li>
    </ul>

    <h2 class="section-title">Leitura da consultoria — o que isso muda <span class="ei">nas próximas etapas</span></h2>
    <ul class="entregas-lista">
      <li><strong>ICP</strong><em>Confirmar com o Rodrigo o recorte etário/tempo-de-carreira antes de fechar a régua de conteúdo da Etapa 1.</em></li>
      <li><strong>Dor a atacar</strong><em>A confusão bruxismo × DTM é dado Tier 1 — gancho mais forte que qualquer apelo de ticket ou ROI.</em></li>
      <li><strong>Desejo a mirar</strong><em>Status + maestria ("decifrar o que ninguém decifrou"); a copy constrói identidade antes de falar de ticket.</em></li>
      <li><strong>Formato</strong><em>A resistência a EAD é institucional — o componente prático precisa estar visível desde a primeira peça.</em></li>
      <li><strong>Lacuna crítica</strong><em>Habilidades digitais: validar direto com ex-alunos antes de fechar decisões de plataforma/UX.</em></li>
    </ul>
  `,
},

/* ─────────────────────── 02 · DIFERENCIAIS E AUTORIDADE ─────────────────────── */
EXPERT: {
  html: `
    <p class="page-lead">A base de autoridade de toda a comunicação — quem é o Rodrigo nesse mercado. Extraído da Conversa de Levantamento de 02/07/2026. As histórias completas dele viram galeria própria no <a href="#met-historias" style="color:var(--vermelho);font-weight:600;">Banco de Histórias</a>.</p>

    <h2 class="section-title">Posicionamento em <span class="ei">uma frase</span></h2>
    <div class="card destaque">
      <p style="font-family:var(--sans);font-size:18px;font-weight:500;line-height:1.55;margin:0;">O único formador de DTM que une <strong>expertise clínica real</strong> (milhares de pacientes atendidos), <strong>base científica</strong> (mestrado, literatura, protocolos validados) e <strong>visão de negócio comprovada</strong> (R$ 1 milhão/ano em consultório próprio) — ensinando o raciocínio clínico completo, não uma técnica da moda.</p>
    </div>

    <h2 class="section-title">Linha do <span class="ei">tempo</span></h2>
    <div class="tl">
      <div class="tl-item"><div class="tl-when">2000 · Origem</div><h3>Graduação em Odontologia — UNESP Araçatuba</h3><p>Fascinado pela anatomia da ATM no 1º ano — ele mesmo tinha um estalo na articulação. Quase nenhum professor dominava o tema.</p></div>
      <div class="tl-item"><div class="tl-when">Ainda na graduação</div><h3>Estágio de 3 anos com o professor Norberto</h3><p>Conheceu a referência num congresso em Uberaba ainda estudante. "Me abriu muitas portas."</p></div>
      <div class="tl-item"><div class="tl-when">2001-2004</div><h3>Especialização + Mestrado — UNIFESP</h3><p>Formação científica sólida em dor orofacial.</p></div>
      <div class="tl-item"><div class="tl-when">2002</div><h3>A prova que virou gabarito da banca</h3><p>Estudou os 10 temas possíveis da prova de título e escreveu 10 dissertações. Sua prova virou o modelo de correção — e ele foi convidado a ser banca da prova seguinte.</p></div>
      <div class="tl-item"><div class="tl-when">2013</div><h3>Fellowship internacional — Universidade de Zurique, Suíça</h3><p>Marcador raro de autoridade internacional no nicho.</p></div>
      <div class="tl-item"><div class="tl-when">Brasília</div><h3>Primeira especialização de DTM de Brasília</h3><p>Co-fundador.</p></div>
      <div class="tl-item hl"><div class="tl-when">2014 · A virada</div><h3>Coordenar o curso "nos meus moldes"</h3><p>Formação ampla, sem viés de técnica única. "Quando você faz parte de uma equipe, você não determina a sua cara."</p></div>
      <div class="tl-item"><div class="tl-when">Hoje</div><h3>Referência nacional</h3><p>~10% dos especialistas de DTM do Brasil formados por ele.</p></div>
    </div>

    <h2 class="section-title">Números de <span class="ei">autoridade</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Tempo de atuação</dt><dd><strong>30 anos</strong> na área (desde 1996) · consultório próprio desde <strong>2003</strong></dd>
        <dt>Pacientes atendidos</dt><dd><strong>+8.000</strong> ao longo da carreira</dd>
        <dt>Resultado clínico</dt><dd>Melhora dos sintomas em <strong>+95% dos casos</strong> — tratamento conservador, sem cirurgia e sem mexer em dente</dd>
        <dt>Especialistas formados</dt><dd>~100-120 em 8 turmas ≈ <strong>10% dos especialistas de DTM do Brasil</strong> (total nacional: 1.649)</dd>
        <dt>Alunos no total</dt><dd>300+ (imersões, atualizações, palestras)</dd>
        <dt>Prova de negócio</dt><dd><strong>R$ 1 milhão faturado no último ano</strong> — clínica pequena, só ele atendendo, 28-30h/semana, nunca depois das 18h, nunca sábado, 2h de almoço</dd>
        <dt>Base de dados clínica</dt><dd>~1.500 avaliações estruturadas (formulário de 40 perguntas) · ~300/ano</dd>
        <dt>Voluntariado</dt><dd>17 anos de atendimento social — parte dos +8.000 pacientes</dd>
      </dl>
    </div>

    <h2 class="section-title">Credenciais e <span class="ei">formação</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Graduação</dt><dd>Odontologia — UNESP Araçatuba (2000)</dd>
        <dt>Especialização + Mestrado</dt><dd>DTM e Dor Orofacial — UNIFESP (2001-2004)</dd>
        <dt>Fellowship internacional</dt><dd>Universidade de Zurique, Suíça (2013)</dd>
        <dt>Título de especialista</dt><dd>Aprovado na prova de reconhecimento da especialidade (2002); sua resposta virou modelo da banca e depois foi convidado a compor a banca</dd>
      </dl>
    </div>

    <h2 class="section-title">Voz e <span class="ei">jargões</span></h2>
    <ul class="entregas-lista">
      <li><strong>"Cinto do Batman"</strong><em>O arsenal terapêutico completo: uma ferramenta pra cada demanda do paciente — nunca uma técnica só.</em></li>
      <li><strong>"Pra quem só tem martelo, tudo é prego"</strong><em>Crítica central aos cursos e profissionais de viés único.</em></li>
      <li><strong>"Antes de intervir, você precisa entender"</strong><em>Lema da abordagem educativa. Variação: "antes de invadir, você precisa entender".</em></li>
      <li><strong>"DTM é um guarda-chuva"</strong><em>Não é diagnóstico único — como "dor de dente": cárie pede restauração, pulpite pede canal, fratura pede extração. Mesmo sintoma, tratamentos opostos.</em></li>
      <li><strong>"Risco-benefício"</strong><em>Ele corrige de propósito o "custo-benefício" — a decisão clínica é sobre risco.</em></li>
      <li><strong>"Tem onda que é marola e tem onda que é tsunami"</strong><em>Sobre modas do mercado que arrastam tudo sem ciência.</em></li>
      <li><strong>"Enxugando gelo"</strong><em>Tratar o local sem resolver o sistêmico.</em></li>
      <li><strong>"Ciência aliada à prática clínica"</strong><em>Frase histórica do curso dele — candidata a evoluir com a frente de negócio.</em></li>
      <li><strong>"Educação em dor"</strong><em>Fundamento IASP (Associação Internacional de Estudos da Dor) da abordagem educativa.</em></li>
      <li><strong>Tom geral</strong><em>Científico mas coloquial; didático por analogias do cotidiano (Batman, martelo, guarda-chuva, faixas de jiu-jitsu); opinião forte contra picaretagem; riso fácil.</em></li>
    </ul>

    <h2 class="section-title">Crenças-âncora <span class="ei">(frases que ele repete)</span></h2>
    <ul class="entregas-lista">
      <li><strong>"Tratamento conservador e reversível como primeira opção"</strong><em>O princípio que abre toda decisão clínica.</em></li>
      <li><strong>"Tratamento multimodal — múltiplas modalidades para controle dos sintomas"</strong><em>O arsenal, nunca a técnica única.</em></li>
      <li><strong>"Avaliação protocolar individualizada" + "Diagnóstico específico"</strong><em>Cada paciente é um caso; o diagnóstico preciso vem antes de tudo.</em></li>
      <li><strong>"DTM não é um diagnóstico" · "Bruxismo não é DTM"</strong><em>As duas correções que separam quem sabe de quem acha que sabe.</em></li>
      <li><strong>"Não se trata DTM com cirurgia, ortodontia, botox ou placa!"</strong><em>A bandeira contra o viés único — pronta pra campanha.</em></li>
    </ul>

    <h2 class="section-title">Bandeiras e <span class="ei">inimigos em comum</span></h2>
    <ul class="entregas-lista">
      <li><strong>Cirurgia desnecessária</strong><em>"A cirurgia antes de esgotar o conservador é criminosa — negligência, imperícia, imprudência. Tem gente que não sabe. E tem gente que sabe."</em></li>
      <li><strong>Toxina botulínica indiscriminada</strong><em>Pesquisa de neurologistas: botox é tratamento 1A pra enxaqueca (neurovascular) e NÃO indicado pra cefaleia tensional (muscular) — o oposto da intuição. No músculo mastigatório pode causar dano ósseo.</em></li>
      <li><strong>Confundir DTM com bruxismo</strong><em>O erro nº 1 do dentista comum — validado por pesquisa científica (a maioria dos dentistas confunde os sinais).</em></li>
      <li><strong>Cada especialista puxando pro próprio viés</strong><em>"O cirurgião quer operar, o ortodontista quer aparelho, o protesista quer prótese, o de HOF quer toxina, o clínico que não sabe quer placa." Resultado: o paciente peregrina e "começa a duvidar de si — que é o mais triste".</em></li>
      <li><strong>Guruismo e deslumbramento digital</strong><em>Contra promessas de dinheiro fácil que iludem gente vulnerável. Posição da marca: "os bons têm que ocupar o palco pra tirar o lugar dos ruins".</em></li>
    </ul>

    <div class="alert">
      <strong>Frase-semente de campanha (nasceu na call):</strong> "Se você acha que DTM se trata com cirurgia, com orto, com ajuste oclusal, com placa ou com botox — você precisa da formação."
    </div>
  `,
},

/* ─────────────────────── BANCO DE HISTÓRIAS (13) ─────────────────────── */
HISTORIAS_CATS: [
  { id: 'todas',   label: 'Todas' },
  { id: 'forja',   label: 'Forjaram a expertise' },
  { id: 'pessoal', label: 'Pessoais' },
  { id: 'case',    label: 'Cases de clientes' },
],

HISTORIAS: [
  {
    id: 'forja-01', cat: 'forja', catLabel: 'Forjaram a expertise',
    titulo: 'A prova que virou gabarito da banca',
    resumo: 'Recém-formado, estudou os 10 temas possíveis da prova de título e escreveu uma dissertação sobre cada um — a prova dele virou o modelo de correção da banca, e ele foi convidado a ser banca da prova seguinte.',
    tags: ['superação', 'autoridade', 'topo e meio de funil'],
    narrativa: {
      contexto: 'Quando a especialidade de DTM foi criada (2002), havia duas formas de virar especialista: comprovar 10 anos de experiência clínica ou passar numa prova. Rodrigo era recém-formado — não tinha os 10 anos. A prova sorteava 1 entre 10 temas possíveis no dia.',
      conflito: 'Era uma prova nova, ninguém sabia direito o padrão de correção — nem a própria banca. Rodrigo não sabia qual dos 10 temas cairia, e não tinha o atalho da experiência de década para se apoiar.',
      acao: '"Peguei a literatura toda que existia, disponível. E estudei os 10 temas. Fiz 10 dissertações sobre cada tema. No dia da prova, eu tinha todas as dissertações na minha cabeça." Preparou-se para qualquer um dos 10 temas — não apostou, cobriu tudo.',
      resultado: 'Os avaliadores, sem um padrão de correção definido, pegaram a prova dele como modelo: "tudo que precisava ter, tem — o que estiver faltando nas outras, a gente tira ponto". A prova dele virou o gabarito. Foi aprovado — e o conselho o chamou para ser banca da prova seguinte, ainda recém-formado.',
      licao: 'Preparação exaustiva não é sobre acertar o palpite certo — é eliminar a necessidade de palpite. Quando você domina todos os cenários possíveis, você não compete com quem tem mais tempo de estrada: você redefine o próprio padrão.',
    },
    curta: '"Quando a especialidade de DTM foi criada, eu era recém-formado — não tinha os 10 anos de experiência que a maioria comprovava. Só me restava a prova. Estudei os 10 temas possíveis, escrevi uma dissertação sobre cada um, sem saber qual cairia. Resultado: minha prova virou o modelo de correção da banca — e me chamaram para ser banca da prova seguinte."',
    zona: ['Conhecimento: domínio literal de toda a literatura disponível sobre DTM no início da carreira', 'Habilidade: estruturar e comunicar conhecimento clínico complexo por escrito, sob pressão'],
    contextos: ['Abertura de aula 1 da formação (autoridade sem arrogância — é prova, não opinião)', 'Bio / seção "sobre o professor" na página de vendas', 'Quebra da objeção "por que aprender com ele" — rigor desde o início', 'Trecho de vídeo institucional / VSL'],
    prova: 'História contada diretamente por ele na call — uso livre. Pendência leve: confirmar ano exato (não bloqueia uso).',
  },
  {
    id: 'forja-02', cat: 'forja', catLabel: 'Forjaram a expertise',
    titulo: 'O estalo na própria articulação e o estágio que abriu as portas',
    resumo: 'No 1º ano da graduação, fascinado pela ATM — que nele mesmo tinha um estalo — foi a um congresso, foi apresentado como "o aluno interessado em DTM" e ganhou um convite de estágio de 3 anos que definiu a carreira.',
    tags: ['origem', 'curiosidade', 'topo de funil'],
    narrativa: {
      contexto: 'Rodrigo cursava o primeiro ano de Odontologia em Araçatuba (SP). Na disciplina de anatomia, se interessou pela articulação temporomandibular — ele mesmo tinha um estalo na própria articulação e "achei que aquilo podia ser alguma coisa". Quase nenhum professor da faculdade entendia do assunto.',
      conflito: 'Não havia ninguém na própria instituição para orientá-lo. O interesse existia, mas faltava porta de entrada — DTM ainda nem era especialidade reconhecida.',
      acao: 'Foi a um congresso em Uberaba. Lá, professores da própria faculdade o apresentaram como "o aluno que já tá se interessando pro DTM". Um dos professores presentes — o professor Norberto — ofereceu na hora: "faz um estágio comigo". Rodrigo aceitou.',
      resultado: 'Fez o estágio durante três anos. "Uma grande referência pra mim, o professor Norberto — ele me abriu muitas portas." A partir daí, começou a comprar livros, fez iniciação científica no tema, e seguiu para especialização e mestrado na UNIFESP.',
      licao: 'A curiosidade genuína (inclusive sobre o próprio corpo), reconhecida e verbalizada no momento certo, abriu uma porta que redirecionou toda a carreira. Mentoria de três anos — não um curso de fim de semana — foi o que sedimentou a base.',
    },
    curta: '"Eu tinha um estalo na minha própria articulação e isso me fascinou logo no primeiro ano da faculdade. Fui a um congresso em Uberaba só para entender melhor — e lá um professor, o Norberto, me chamou para um estágio. Fiquei três anos com ele. Foi essa pessoa que me abriu as portas para tudo que vim a construir depois."',
    zona: ['Paixão: interesse genuíno e pessoal pelo tema, não escolha por conveniência de mercado', 'Conhecimento: base de 3 anos de estágio direto com referência da área, antes da pós-graduação'],
    contextos: ['Aula de abertura / módulo de origem do método', 'Conteúdo "como comecei" em redes sociais / Reels de bastidor', 'Seção "minha história" na página de vendas', 'Resposta a "por que você" — origem de formação séria, não autodidata solto'],
    prova: 'Relato direto do expert — uso livre.',
  },
  {
    id: 'forja-03', cat: 'forja', catLabel: 'Forjaram a expertise',
    titulo: '2014 — a virada de coordenar o curso "nos meus moldes"',
    resumo: 'Ao assumir a coordenação de um curso com autonomia total, entendeu que fazer parte de uma equipe significa não determinar a própria cara — e construiu uma formação sem viés único, ensinando todas as ferramentas.',
    tags: ['convicção', 'diferencial', 'meio e fundo de funil'],
    narrativa: {
      contexto: 'Antes de 2014, Rodrigo já dava aula e ajudou a montar a primeira especialização de DTM de Brasília — mas em formato de equipe, dividindo decisões. Em 2014, passou a coordenar um curso com total autonomia sobre o formato.',
      conflito: '"Quando você faz parte de uma equipe, você não determina a sua cara." Ele observava no mercado cursos focados numa única ferramenta — um só em ácido hialurônico, outro só em agulhamento, outro em fármaco — cada um empurrando a técnica que domina.',
      acao: 'Ao assumir a coordenação sozinho, decidiu ensinar todas as ferramentas — fármaco, agulhamento seco, ácido hialurônico — "para entender que cada paciente é individual... ensinar a pessoa a pensar individualizado".',
      resultado: 'Isso virou o diferencial estrutural do curso dele: não é a técnica X ou Y, é o raciocínio clínico que escolhe entre X, Y ou Z conforme o paciente. Formou desde então ~120 especialistas — cerca de 10% dos especialistas de DTM do Brasil.',
      licao: '"Pra quem só tem martelo, tudo é prego." Autonomia sobre o formato de ensino não é ego — é poder ensinar sem filtro de viés único. O que parecia limitação de equipe virou a vantagem competitiva mais citada por ele.',
    },
    curta: '"Em 2014, quando comecei a coordenar meu próprio curso, entendi uma coisa: quando você faz parte de uma equipe, você não determina a sua cara. Ali eu decidi que ia ensinar todas as ferramentas — fármaco, agulhamento, ácido hialurônico — sem empurrar nenhuma. Porque quem só tem martelo, acha que tudo é prego."',
    zona: ['Valor: pluralismo terapêutico como princípio inegociável, mesmo quando o mercado recompensa o viés único', 'Conhecimento: domínio simultâneo de múltiplas modalidades terapêuticas'],
    contextos: ['Seção "diferencial" da página de vendas — comparação com cursos de viés único', 'Aula sobre a filosofia do método (o "cinto do Batman")', 'Objeção "por que não um curso focado numa técnica, mais rápido"', 'Post/carrossel sobre o erro dos cursos de DTM do mercado'],
    prova: 'Relato direto — uso livre.',
  },
  {
    id: 'forja-04', cat: 'forja', catLabel: 'Forjaram a expertise',
    titulo: 'O cinto do Batman — a filosofia contra o martelo único',
    resumo: 'A analogia autoral que organiza o método: múltiplas ferramentas terapêuticas, cada uma pra uma demanda específica — contraponto direto a quem domina uma técnica só e a aplica em tudo.',
    tags: ['analogia-assinatura', 'anti-modismo', 'viralizável'],
    narrativa: {
      contexto: 'Ao longo da carreira, Rodrigo observou (inclusive nele mesmo, no passado) a tendência de profissionais se especializarem numa única ferramenta terapêutica e passarem a indicá-la para todos os casos — a placa, o botox, a cirurgia, o ácido hialurônico.',
      conflito: '"Quem determina o tratamento não sou eu, é a literatura — e a literatura recomenda tratamento multimodal." Só que o mercado não trabalha assim: "o cirurgião quer operar, o ortodontista quer colocar aparelho, o protesista quer prótese, o de HOF quer toxina, e o clínico que não sabe quer colocar placa."',
      acao: 'Criou a linguagem e o raciocínio do "cinto do Batman": "isso aqui é pra subir montanha, isso é pra fazer a fumacinha de fugir, isso é pra jogar um gás paralisante" — cada ferramenta serve a uma demanda específica, e o profissional precisa ter (e saber escolher entre) todas.',
      resultado: 'Essa filosofia virou o núcleo do método — e a base do "grande futuro" que ele defende: a fenotipação do paciente. Quem se especializa numa única ferramenta corre o risco de "esse tratamento ficou defasado, pronto, eu sou boa no quê agora?".',
      licao: 'Dominar múltiplas ferramentas com raciocínio clínico individualizado é, ao mesmo tempo, o que gera melhor resultado pro paciente e a maior proteção de carreira contra modismos e obsolescência técnica.',
    },
    curta: '"Eu falo que é o cinto do Batman: uma ferramenta pra cada demanda. Isso aqui é pra subir montanha, isso é pra fugir correndo. Pra quem só tem martelo, tudo é prego — e quem só sabe uma técnica corre o risco de, um dia, essa técnica ficar defasada e não sobrar mais nada. Quem manda no tratamento não sou eu, é a literatura. E a literatura recomenda o multimodal."',
    zona: ['Valor: recusa deliberada de viés técnico único, mesmo quando é mais lucrativo', 'Conhecimento: amplitude real — domina fármaco, agulhamento, ácido hialurônico, dispositivos, e sabe quando cada um se aplica'],
    contextos: ['Frase-âncora / manifesto de posicionamento nas redes', 'Slide de abertura da aula de filosofia terapêutica', 'Objeção "por que não confiar num especialista de uma técnica só"', 'Roteiro de vídeo curto — a analogia já é visual e didática'],
    prova: 'Frase e analogia autorais dele — jargão literal a preservar na copy sem parafrasear.',
  },
  {
    id: 'forja-05', cat: 'forja', catLabel: 'Forjaram a expertise',
    titulo: 'Quando o ultrassom quebrou a resistência dele mesmo',
    resumo: 'Por anos ficou "fechado" pros agregados plaquetários por não ter como aplicá-los com precisão — e reconhece que essa resistência deixou pacientes piorarem. A aplicação guiada por ultrassom mudou a mentalidade dele.',
    tags: ['vulnerabilidade', 'evolução', 'meio e fundo de funil'],
    narrativa: {
      contexto: 'Há cerca de cinco anos surgiu no mercado o uso de agregados plaquetários (plasma rico em fibrina, do próprio sangue do paciente) na articulação temporomandibular — terapia ainda não totalmente regulamentada, aplicada de forma indiscriminada por alguns.',
      conflito: '"Eu não conseguia acessar o local mais preciso que a gente deveria acessar. Isso me deixava um pouco resistente." Ele reconhece abertamente: "acabei, às vezes, deixando um paciente piorar — porque eu também estava um pouco fechado para isso. Tem algo de mentalidade ali."',
      acao: 'Quando apareceu a oportunidade de um curso em Cadáver Lab pra entender a aplicação guiada por ultrassom, ele fez — e isso abriu a possibilidade de aplicar o agregado plaquetário com precisão, "exatamente no local que precisa ser colocado".',
      resultado: '"Isso abriu um campo enorme, que antes a gente ficava meio de mãos atadas." A precisão do ultrassom reduziu o risco, o que — na lógica de risco-benefício dele — aumentou a indicação. A partir daí, se tornou "mais seletivo, mais assertivo e mais resolutivo".',
      licao: 'Resistência a uma nova abordagem nem sempre é conservadorismo virtuoso — às vezes é limitação de ferramenta disfarçada de princípio. Reconhecer isso (mesmo doendo admitir que "deixei paciente piorar") é o que permite evoluir.',
    },
    curta: '"Por anos, fiquei resistente ao uso de agregados plaquetários na articulação, porque não conseguia aplicar com precisão. Isso, sem eu perceber, deixou pacientes piorarem. Foi só quando apareceu a aplicação guiada por ultrassom que eu consegui abrir a cabeça pra essa terapia. Hoje eu penso em risco-benefício, não custo-benefício — e isso mudou completamente minha forma de decidir."',
    zona: ['Conhecimento: acompanhamento ativo da evolução técnica da área', 'Habilidade: autocrítica e capacidade de atualizar a própria prática, mesmo admitindo erro passado'],
    contextos: ['Aula sobre atualização terapêutica (conecta com a história das duas psicólogas)', 'Conteúdo de autoridade que humaniza — vulnerabilidade real, não perfeição de guru', 'Quebra da objeção "ele é careta, conservador demais"', 'Módulo de tratamento articular/minimamente invasivo'],
    prova: 'Relato direto do expert — uso livre. Pendência leve: nome do amigo precursor da técnica (não bloqueia uso).',
  },
  {
    id: 'forja-06', cat: 'forja', catLabel: 'Forjaram a expertise',
    titulo: '"Perdi a mão do momento de intervir" — o aprendizado do timing',
    resumo: 'A primeira formação dele era "muito, muito conservadora" — e isso o fez perder, em casos reais, o timing de subir pro minimamente invasivo. Daí nasceu o critério objetivo de escalonamento do método.',
    tags: ['autocrítica', 'critério clínico', 'meio de funil'],
    narrativa: {
      contexto: 'A base de formação de Rodrigo é fortemente conservadora — no histórico do voluntariado dele, mais de 92% dos casos melhoraram sem cirurgia nem intervenção nos dentes.',
      conflito: '"Isso, eu acho, me fez perder a mão de qual é o momento que a gente precisa intervir de forma minimamente invasiva. Eu já perdi o timing de alguns casos, e não consegui ajudar tanto o paciente quanto eu poderia ter ajudado."',
      acao: 'Passou a estabelecer critérios objetivos pra subir o degrau: insistir no conservador por 3 a 6 meses; se o paciente não responde E o diagnóstico está correto, subir. Critérios adicionais: gravidade, exame de imagem, comprometimento de outras áreas da vida.',
      resultado: 'Hoje ensina esse timing de forma estruturada nos critérios de escalonamento (conservador → minimamente invasivo → cirúrgico), evitando tanto a cirurgia precoce quanto o excesso de conservadorismo que trava o paciente.',
      licao: 'Ser conservador por princípio não é o mesmo que ser conservador com critério. O erro que ele mais cita como próprio não foi intervir demais — foi insistir demais no conservador e perder o momento certo de agir.',
    },
    curta: '"Minha primeira formação era muito, muito conservadora. Isso me fez perder a mão do momento certo de subir o degrau em alguns casos — e isso significou não ajudar tanto o paciente quanto eu poderia. Hoje eu tenho critério: insisto no conservador de três a seis meses, mas se não responde e o diagnóstico está certo, eu subo o degrau. Não fico batendo cabeça."',
    zona: ['Conhecimento: critério clínico objetivo pra decisão de escalonamento terapêutico', 'Valor: equilíbrio entre o conservador por princípio e a responsabilidade de agir no tempo certo'],
    contextos: ['Aula de tratamento — módulo de critérios de escalonamento', 'Conteúdo de maturidade profissional (aprendeu com o próprio erro)', 'Quebra da objeção "ele é dogmático demais no conservador"', 'Diferenciação do "cirurgião que opera antes da hora" sem cair no extremo oposto'],
    prova: 'Relato direto — uso livre.',
  },
  {
    id: 'forja-07', cat: 'forja', catLabel: 'Forjaram a expertise',
    titulo: '17 anos, quase 3.000 pacientes — "a gente tem que devolver isso pra sociedade"',
    resumo: 'Formado inteiramente em instituições públicas, manteve por 17 anos um atendimento voluntário semanal que chegou a quase 3.000 pacientes — com melhora acima de 92%, sem cirurgia e sem mexer em dente.',
    tags: ['propósito', 'prova de resultado', 'topo e fundo de funil'],
    narrativa: {
      contexto: 'Rodrigo fez graduação em universidade estadual (Araçatuba) e pós-graduação na UNIFESP, federal — toda a formação dele veio de instituições públicas.',
      conflito: 'Não havia obrigação nenhuma — foi escolha pessoal contínua por quase duas décadas, uma vez por semana, mesmo com consultório próprio rodando e um faturamento relevante a proteger em termos de tempo.',
      acao: '"Eu acho que a gente tem que devolver isso pra sociedade." Atendeu voluntariamente por 17 anos, quase 3.000 pacientes ao todo — alguns acompanhados por 45 dias, outros por anos, chegando a quase 700 pacientes acompanhados por 10 anos.',
      resultado: 'Taxa de melhora acima de 92% no quadro clínico, com recursos limitados ("a gente tinha pouco recurso, mas muita vontade"), sem cirurgia nem intervenção nos dentes — só tratamento conservador escalonado. Só parou por problemas na instituição: "estaria fazendo até hoje".',
      licao: 'O voluntariado não foi item de currículo — foi onde ele testou e validou, em escala e ao longo de anos, que o tratamento conservador funciona mesmo com poucos recursos. "Me deu a oportunidade de ver uma realidade que o consultório não me permite."',
    },
    curta: '"Toda minha formação veio de escola pública — graduação estadual, pós numa federal. Eu acho que a gente tem que devolver isso pra sociedade. Fiquei 17 anos fazendo atendimento voluntário, uma vez por semana. Atendi quase três mil pacientes, alguns acompanhei por dez anos. Com pouco recurso, mas muita vontade — e tivemos mais de 92% de melhora, sem cirurgia, sem mexer em dente."',
    zona: ['Valor: gratidão e senso de retribuição como motor de ação sustentada por quase duas décadas', 'Paixão: manutenção do voluntariado mesmo sem necessidade financeira'],
    contextos: ['Prova social/autoridade central — +92% de melhora em quase 3.000 pacientes é dado forte de página de vendas', 'Conteúdo de humanização — "quem é o Rodrigo por trás do professor"', 'Resposta a "por que confiar no método" — validado em volume real', 'Combina com a história da paciente dos 15 comprimidos'],
    prova: 'Dado confirmado por ele em 03/07 — história pessoal, uso livre.',
  },
  {
    id: 'pessoal-01', cat: 'pessoal', catLabel: 'Pessoal',
    titulo: '"O pessoal achava estranho" — a escolha da Odontologia',
    resumo: 'Escolheu Odonto inspirado por um primo e um dentista de referência — indo bem em matemática e física, não em biologia. Só se identificou de verdade quando começou a atender pacientes reais.',
    tags: ['humanização', 'identificação', 'topo de funil'],
    narrativa: {
      contexto: 'No momento de escolher a carreira, Rodrigo "sempre teve meio dúvida do que fazer". Tinha um primo que desenhava bem e havia entrado em Odontologia, e um dentista "gente boa" como referência de decisão.',
      conflito: 'O perfil acadêmico não combinava com a expectativa do curso: "eu ia muito bem em matemática, física — não gostava muito de biologia, química. E o pessoal falava: que estranho, você vai fazer Odonto?". As matérias básicas iniciais foram difíceis: "fiquei meio assim, na dúvida".',
      acao: 'Persistiu mesmo com a dúvida inicial e o estranhamento alheio, apostando na habilidade manual como ponte.',
      resultado: '"A partir do momento que eu comecei a clinicar, eu comecei a me identificar mais" — usando a habilidade manual, o interesse genuíno apareceu, e a trajetória decolou (chegando ao encontro com a anatomia da ATM logo no primeiro ano).',
      licao: 'A identificação com a profissão não veio da aptidão acadêmica esperada — veio da prática. Ele só "se encontrou" quando pôs a mão na massa.',
    },
    curta: '"Eu sempre tive dúvida sobre o que fazer. Ia bem em matemática e física, não gostava de biologia — todo mundo estranhou quando eu disse que ia fazer Odonto. Mas eu tinha habilidade manual, e foi quando comecei a atender de verdade que me identifiquei. Foi aí que descobri a articulação temporomandibular, e o resto é história."',
    zona: null,
    contextos: ['Conteúdo de bastidor / "como comecei" em redes sociais', 'Quebra-gelo humano de abertura de palestra/aula', 'Conexão com aluno que também teve dúvida de carreira'],
    prova: 'Relato direto — uso livre.',
  },
  {
    id: 'pessoal-02', cat: 'pessoal', catLabel: 'Pessoal',
    titulo: 'Faixa roxa, um grau — a origem da gamificação por faixas',
    resumo: 'Praticante de jiu-jitsu (faixa roxa, um grau), ele mesmo trouxe a lógica de graduação por faixas como analogia pra estruturar a progressão do aluno na formação.',
    tags: ['identidade', 'gamificação', 'desenho de produto'],
    narrativa: {
      contexto: 'Durante a call, ao descrever o curso gravado de introdução que já existe (9 aulas), ele descreveu o objetivo como "tirar o aluno do zero absoluto e dar um grau na faixa branca".',
      conflito: 'Nenhum conflito — é um insight de estruturação pedagógica que ele já tinha engatilhado sozinho, mas não tinha verbalizado como sistema.',
      acao: 'Mostrou literalmente a própria faixa durante a call ("aqui, ó — eu faço faixa roxa, um grau, tá vendo? Tem um grauzinho aqui") e explicou a lógica de progressão: branca → azul → roxa → marrom → preta, cada uma com graus.',
      resultado: 'A ideia foi validada como gamificação aplicável à formação: cada etapa equivale a uma faixa, com a possibilidade de um encontro de "passagem de faixa" como evento simbólico. Ele citou também um grande player do mercado digital que usa a lógica de "faixas pretas" pra nomear os alunos mais avançados.',
      licao: 'A melhor gamificação não é a mais criativa — é a que já faz parte genuína da vida do próprio expert. A analogia das faixas não foi inventada pra formação; ela já organiza como ele pensa progressão e maestria há anos.',
    },
    curta: '"Eu faço jiu-jitsu, sou faixa roxa com um grau. E a lógica das faixas — branca, azul, roxa, marrom, preta, cada uma com seus graus — é exatamente como eu penso a progressão de um aluno em DTM. Quem começa do zero ganha o primeiro grau da faixa branca. Vai evoluindo, degrau a degrau, até a faixa preta."',
    zona: null,
    contextos: ['Estrutura de gamificação da formação (etapas como faixas)', 'Conteúdo de bastidor / identidade pessoal (hobby, disciplina, progressão)', 'Evento ao vivo de passagem de faixa como marco simbólico'],
    prova: 'Relato direto — uso livre. Oportunidade: foto/vídeo real dele de kimono como prova de autenticidade.',
  },
  {
    id: 'pessoal-03', cat: 'pessoal', catLabel: 'Pessoal',
    titulo: 'A mãe de 55 anos e o sonho de "ganhar dinheiro dormindo"',
    resumo: 'A mãe dele, aos 55 anos, cuidando da avó, foi seduzida pela promessa de "ganhar dinheiro dormindo" com um e-book — o episódio que cristalizou a posição dele contra o guruismo.',
    tags: ['anti-guruismo', 'autenticidade', 'topo e meio de funil'],
    narrativa: {
      contexto: 'Durante a conversa sobre o mercado de lançamentos e promessas de "seis dígitos em sete dias", Rodrigo trouxe um exemplo pessoal e doméstico do alcance dessas promessas.',
      conflito: '"Minha mãe tava outro dia lá e o sonho dela era ganhar dinheiro dormindo — ela queria fazer e-book pra ganhar dinheiro dormindo." Ele reconhece o padrão: "eles entram na mente das pessoas, e tá minha mãe lá, com 55 anos, cuidando da minha avó, achando que vai ganhar dinheiro dormindo".',
      acao: 'Ele nomeia esse episódio como evidência do dano real que o guruismo causa — não é crítica abstrata de mercado, é dentro da própria casa dele.',
      resultado: 'Reforçou a convicção de que o marketing dele precisa ser o oposto: sem promessa vazia, com dados reais ("eu tenho dados para provar que DTM dá dinheiro"), reconhecendo o trabalho real por trás de qualquer resultado.',
      licao: 'A crítica ao guruismo não é intelectual pra ele — é pessoal e concreta. Isso dá autenticidade e urgência ao posicionamento anti-picaretagem que ele quer assumir nas redes.',
    },
    curta: '"Minha mãe, com 55 anos, cuidando da minha avó, sonhava em ganhar dinheiro dormindo fazendo um e-book. Isso me mostrou na prática o estrago que esse tipo de promessa vazia faz — entra na cabeça de qualquer pessoa, inclusive da minha própria família."',
    zona: null,
    contextos: ['Posicionamento contra o guruismo do marketing digital', 'Justificativa emocional pro tom mais incisivo com promessas vazias', 'Gancho de Reels/carrossel: "por que eu não vendo sonho, vendo método"'],
    prova: 'Relato pessoal sobre a própria mãe — usar sempre anonimizado ("minha mãe", sem detalhes que a identifiquem).',
  },
  {
    id: 'case-01', cat: 'case', catLabel: 'Case de cliente',
    titulo: 'As duas psicólogas — o mesmo caso, décadas de diferença, desfechos opostos',
    resumo: 'Duas pacientes quase idênticas, com anos de intervalo: a primeira ficou bem, mas com sequela — faltavam recursos na época. A segunda, tratada com o arsenal atualizado, saiu sem sequela nenhuma.',
    tags: ['déjà-vu', 'evolução terapêutica', 'história-âncora'],
    narrativa: {
      contexto: 'Caso 1 (anos atrás): uma paciente estudando psicologia em Brasília, indicada por um grande amigo de Cuiabá, com processo degenerativo grande na articulação. Caso 2 (anos depois): outra psicóloga, também recém-mudada pra Brasília, indicada por outro grande amigo, com alteração degenerativa igualmente grande.',
      conflito: 'No primeiro caso, os recursos terapêuticos da época eram mais limitados. A paciente ficou bem — mantém contato com ele até hoje — mas desenvolveu sequela estética e funcional na mordida, precisando de tratamento ortodôntico de compensação. "Aquele caso me trouxe uma certa frustração — de a gente não ter tantos recursos na época."',
      acao: 'Ao começar a atender a segunda paciente, ele teve o insight em tempo real: "tô tendo um déjà-vu — o seu caso é muito similar ao de uma paciente que também foi indicada por um grande amigo". Com muito mais recursos disponíveis, imprimiu uma abordagem terapêutica completa (DTM + ortodôntica).',
      resultado: 'A segunda paciente foi resolvida "sem a mesma sequela funcional e estética que a outra apresentou" — um desfecho "muito mais convincente e satisfatório". As duas seguiram a mesma base de controle de dor e função; a diferença foi o acesso ao tratamento que só existia na segunda época.',
      licao: '"Foi muito marcante para entender como a gente precisa estar de olho nas evoluções dos tratamentos." Manter-se na fronteira da evolução terapêutica não é luxo acadêmico — é o que separa um desfecho com sequela permanente de um desfecho resolvido por completo.',
    },
    curta: '"Recebi duas pacientes, anos de diferença, quase o mesmo caso: as duas psicólogas, recém-chegadas a Brasília, indicadas por grandes amigos, com degeneração articular grave. Na primeira, com os recursos que eu tinha na época, ela ficou bem — mas com sequela na mordida. Anos depois, atendendo a segunda, eu falei: estou tendo um déjà-vu. Com mais recursos terapêuticos, resolvemos o caso dela sem sequela nenhuma. Ficar na fronteira da evolução do tratamento muda o desfecho do paciente."',
    zona: ['Conhecimento: evolução real e comprovada ao longo do tempo, não estagnação', 'Habilidade: reconhecimento de padrão clínico complexo em tempo real'],
    contextos: ['História-âncora de página de vendas — "antes e depois" dentro da própria carreira dele', 'Aula sobre atualização terapêutica', 'Conteúdo emocional forte pra redes (dois casos idênticos, desfechos opostos)', 'Combina com a história dos agregados plaquetários — mesma lição'],
    prova: 'Caso real contado pelo próprio Rodrigo. Uso público com nome/detalhe identificável requer autorização das pacientes — status: CONFIRMAR. Pra uso interno/aula, pode ser contada anonimizada.',
  },
  {
    id: 'case-02', cat: 'case', catLabel: 'Case de cliente',
    titulo: '"Eu tomava 15 comprimidos por dia" — a paciente peregrina',
    resumo: 'Peregrinou por otorrino, neurologista, ortopedista, bucomaxilo e psiquiatra sem diagnóstico, tomando 15 comprimidos por dia e cogitando se internar — até ser tratada pelo Rodrigo. Deixou vídeo-depoimento real.',
    tags: ['peregrinação', 'prova social', 'fundo de funil'],
    narrativa: {
      contexto: 'Rodrigo descreve o paciente típico de DTM não diagnosticada como alguém que peregrina: otorrino, neurologista, clínico, ortopedista, especialista em coluna, ortodontista, bucomaxilo, protesista — cada um dando uma abordagem diferente, "às vezes até contraindicando a outra".',
      conflito: '"As pessoas começam a duvidar dela, ela começa a duvidar dela — que eu acho que isso é o mais triste." A paciente do depoimento vivia exatamente isso: "tinha dia que eu tomava 15 comprimidos por dia — remédio pra acordar, pra dormir, pra comer, pra conseguir trabalhar, pra dor. Eu já tava desacreditada, já tava querendo me internar — porque ninguém sabia o que eu tinha."',
      acao: 'Foi atendida pelo Rodrigo, que conduziu diagnóstico e tratamento estruturado — anamnese detalhada, exame físico protocolar, exame de imagem, e só então tratamento conservador escalonado.',
      resultado: 'A paciente gravou um depoimento em vídeo relatando a jornada de peregrinação e o alívio de finalmente ter diagnóstico e tratamento reais. Rodrigo descreve o vídeo como "mal gravado, meio feio — mas muito sincero".',
      licao: 'A confusão diagnóstica de quem não entende DTM não gera só um problema clínico — gera erosão da confiança do paciente nele mesmo. O maior dano da peregrinação é psicológico antes de ser físico.',
    },
    curta: '"Recebo pacientes que peregrinam de especialista em especialista — otorrino, neuro, ortopedista, psiquiatra — cada um dando um diagnóstico diferente, às vezes contraditório. Uma paciente minha gravou um depoimento contando que chegava a tomar 15 comprimidos por dia — pra acordar, pra dormir, pra comer, pra trabalhar, pra dor — e já estava querendo se internar, porque ninguém sabia o que ela tinha. É um vídeo simples, sem produção, mas extremamente sincero."',
    zona: ['Conhecimento: capacidade diagnóstica que resolve o que múltiplos especialistas não conseguiram', 'Valor: abordagem educativa e protocolar como antídoto direto à peregrinação'],
    contextos: ['Prova social central da página de vendas — autenticidade > produção', 'Abertura de VSL ou CPL — dor extrema gera identificação imediata', 'Conteúdo educativo pra dentistas: o estrago de não saber diagnosticar', 'Quebra da objeção "meus pacientes não têm caso tão grave"'],
    prova: 'Vídeo-depoimento existe e está pendente de envio pelo Rodrigo. Uso público requer autorização explícita da paciente — status: CONFIRMAR.',
  },
  {
    id: 'case-03', cat: 'case', catLabel: 'Case de cliente',
    titulo: 'O professor aposentado que vem de carro todo mês para aprender',
    resumo: 'Ex-professor de universidade federal, aposentado há 28 anos, quase 77 anos de idade — viaja todo mês de carro a Brasília só pra assistir às aulas do Rodrigo. Senta na frente, participa, pergunta.',
    tags: ['admiração', 'prova pedagógica', 'topo e meio de funil'],
    narrativa: {
      contexto: 'Ao explicar por que a formação é natural pra ele — já dá aula de DTM há mais de 20 anos, de alunos de graduação a profissionais seniores — Rodrigo citou esse aluno como exemplo da amplitude de quem ele já formou.',
      conflito: 'Não há conflito clínico — é uma prova de dedicação e amplitude de público que valida a autoridade pedagógica, mesmo entre acadêmicos com muito mais tempo de carreira que o aluno médio.',
      acao: '"Ele foi professor da Universidade Federal de Uberlândia. É aposentado há 28 anos... ele vem todo mês pra Brasília de carro." E o carinho na descrição: "ele vem com o cabelinho tudo pintadinho assim, arrumadinho, senta lá na frente, pergunta."',
      resultado: '"Entende muita coisa difícil ali, mas tá ali." Rodrigo reconhece o empenho mesmo diante de conteúdo complexo: "acho muito bacana todo esse empenho dele".',
      licao: 'Quando um acadêmico sênior, sem nada a provar, faz esforço logístico real (viagem mensal de carro) pra aprender com você, isso valida a autoridade pedagógica de forma mais forte que qualquer estatística.',
    },
    curta: '"Tenho um aluno hoje que foi professor de universidade federal — aposentado há 28 anos, quase 77 anos de idade. Ele vem todo mês de carro pra Brasília só pra assistir minha aula. Chega arrumadinho, senta na frente, participa, pergunta. Isso pra mim diz muito sobre o valor do que a gente ensina."',
    zona: ['Conhecimento: profundidade reconhecida por quem tem décadas de carreira acadêmica', 'Habilidade: ensinar conteúdo complexo de forma acessível, pra públicos de diferentes gerações'],
    contextos: ['Prova social "nunca é tarde para aprender"', 'Conteúdo emocional de redes (a imagem do senhor arrumadinho na primeira fileira)', 'Quebra da objeção "já tenho muito tempo de formado"', 'Bio / prova social da página de vendas'],
    prova: 'Relato direto sobre aluno real. Uso com identificação requer autorização do aluno — status: CONFIRMAR. Uso descritivo sem nome: liberado.',
  },
  {
    id: 'case-04', cat: 'case', catLabel: 'Case de cliente',
    titulo: '"Viver sem dor é outra coisa" — Raquel, 20 anos sem diagnóstico',
    resumo: 'Conviveu com dor por cerca de 20 anos; profissionais falavam em canal, em extrair o dente, davam diagnósticos contraditórios. Encaminhada a um especialista em DTM, teve resposta rápida — e chama o tratamento de divisor de águas. Depoimento em vídeo.',
    tags: ['peregrinação', 'prova em vídeo', 'transformação'],
    narrativa: {
      contexto: 'Raquel conviveu por volta de 20 anos com dor, em fases piores e melhores, procurando vários profissionais sem solução. "Tinha fases que eu sentia mais dor, procurava vários profissionais e nada resolvia."',
      conflito: '"Falavam que era canal, falavam que tinha que extrair o dente... vários diagnósticos de perder o dente. Os exames não condiziam." E o mais duro: "foram 20 anos sofrendo... nenhum profissional me dava um diagnóstico, ninguém sabia o que tava acontecendo. E ninguém me explicava."',
      acao: 'Um profissional reconheceu que era DTM e a encaminhou: "Raquel, o que tá faltando é isso — tenho um especialista em DTM, vou te indicar". Ela foi na mesma semana e seguiu com disciplina todas as orientações (compressa 3x ao dia, massagem, pomada), com o marido ajudando em casa.',
      resultado: 'Resposta rápida apesar dos 20 anos: "coisas simples que eu aprendi aqui passavam a dor muito rápido" — em contraste com "eu virava noites tomando remédio e não funcionava". Abertura de boca maior, sono e humor melhores; a mãe notou "que sorrisão". "Viver sem dor é outra coisa."',
      licao: 'Diagnóstico correto + adesão do paciente (a "dupla" que caminha junto) + abordagem multimodal resolvem em semanas o que 20 anos de peregrinação por técnica única não resolveram.',
    },
    curta: '"Foram uns 20 anos sofrendo, procurando profissional, e nenhum me dava um diagnóstico — ninguém sabia o que eu tinha, ninguém me explicava. Aqui eu tive uma resposta rápida. Fui disciplinada, confiei, e deu muito certo. Viver sem dor é outra coisa — foi um divisor de águas na minha vida."',
    zona: ['Conhecimento: diagnóstico que resolve o que 20 anos de profissionais não deram', 'Valor: o paciente como parceiro do tratamento — a adesão faz parte do método'],
    contextos: ['Prova social central da página de vendas (transformação em vídeo)', 'Quebra da objeção "meu caso é antigo/crônico demais"', 'Conteúdo emocional de redes (o "divisor de águas")', 'Prova de que a abordagem MODAL funciona onde a técnica única falhou'],
    prova: 'Vídeo-depoimento recebido em 07/07 (materiais-cliente/depoimentos-pacientes/paciente-2). Paciente do consultório do Rodrigo — uso público com identificação requer autorização de imagem da paciente. Status: CONFIRMAR.',
  },
  {
    id: 'case-05', cat: 'case', catLabel: 'Case de cliente',
    titulo: '"Parecia mágica: eu chegava com dor e saía sem" — Carol',
    resumo: 'DTM crônica com dor de cabeça insistente e musculatura enrijecida. O agulhamento aliviava na hora e a reeducação muscular a ensinou a se autogerenciar. Hoje diz que preferia ter procurado antes. Depoimento em vídeo.',
    tags: ['agulhamento', 'prova em vídeo', 'reeducação'],
    narrativa: {
      contexto: 'Carol tinha "um incômodo muito grande, principalmente com dor de cabeça, algo muito insistente no dia a dia" que atrapalhava trabalhar e estudar; acordava com a musculatura muito enrijecida. Sua DTM "era muito crônica".',
      conflito: 'Prolongou a busca por ajuda: "tentei alguns tratamentos mais rápidos que não funcionaram". Como a dor era crônica, ela "não lembrava mais como de fato deixar a musculatura relaxada".',
      acao: 'Optou por um plano mais longo, com reeducação muscular ("reaprender a utilizar o corpo") e sessões de agulhamento a seco. O tempo estendido foi parte da estratégia: "com esse processo mais longo eu consegui compreender e ir treinando aos poucos".',
      resultado: '"Quando eu fiz o agulhamento, eu saía daqui já sem dores — parecia mágica." O músculo relaxava e os sintomas iam passando. Aprendeu a manter a musculatura relaxada sozinha.',
      licao: 'Reeducação + agulhamento na dose certa devolvem autonomia ao paciente crônico — e o plano mais longo, quando explicado, vira diferencial, não objeção. "Eu preferia ter procurado antes."',
    },
    curta: '"Minha DTM era muito crônica — dor de cabeça insistente todo dia. Quando eu fiz o agulhamento, eu saía daqui já sem dores, parecia mágica. E aprendi a manter a musculatura relaxada sozinha. Se eu fosse falar uma coisa pra mim mesma antes: procura o tratamento antes, não prolonga o sofrimento à toa."',
    zona: ['Habilidade: aplicação de agulhamento a seco com alívio imediato', 'Valor: reeducação que devolve autonomia ao paciente crônico'],
    contextos: ['Prova de eficácia do agulhamento (Etapa 2 · escada muscular)', 'Quebra da objeção "tratamento longo é ruim" (o longo virou vantagem)', 'Conteúdo sobre autogestão e educação em dor'],
    prova: 'Vídeo-depoimento recebido em 07/07 (materiais-cliente/depoimentos-pacientes/paciente-3). Paciente do consultório do Rodrigo — uso público com identificação requer autorização de imagem. Status: CONFIRMAR.',
  },
  {
    id: 'case-06', cat: 'case', catLabel: 'Case de cliente',
    titulo: '"A dor não vai passar sozinha — eu sou prova disso" — Maria Alice',
    resumo: 'Dor no maxilar com travamento, afetando fala, alimentação e vida social. Buscou ajuda, a dor aliviou, ela desistiu — e voltou pior. Hoje gerencia as crises sozinha. Depoimento em vídeo, com frase-âncora de urgência.',
    tags: ['urgência', 'prova em vídeo', 'autonomia'],
    narrativa: {
      contexto: 'Maria Alice sentia dor diária: "em qualquer movimento para comer, na hora de dormir". Chegou com dor no maxilar e descobriu, no tratamento, "outras dores na face que eu nem sabia que tinha". A dor afetava "a alimentação, a própria fala, a hora de socializar".',
      conflito: 'Ela viveu o padrão que o Rodrigo alerta: buscou ajuda, "a dor aliviou e aí eu desisti — e aí depois voltou, e voltou com muito mais intensidade". Só então entendeu que precisava tratar de verdade.',
      acao: 'Fez um ano de tratamento com liberação, laser e infravermelho, num ambiente que ela descreve como acolhedor ("me senti muito acolhida desde o primeiro dia; atendimentos divertidos e relaxantes"). Aprendeu a posição da mandíbula e estratégias de autogestão.',
      resultado: 'Hoje gerencia as crises sozinha: "quando eu sei que é uma dor da DTM, já sei o que fazer — boto uma compressa, se piorar posso tomar um relaxante". Saiu com autonomia real sobre a própria dor.',
      licao: 'A dor de DTM não é linear (alivia e volta pior) — esperar "passar sozinha" cronifica. A frase dela é uma das mais fortes do acervo: "a dor não vai passar sozinha, eu sou prova disso".',
    },
    curta: '"Eu sentia dor pra comer, pra dormir, pra falar. Busquei ajuda, a dor aliviou e eu desisti — aí voltou muito pior. Fiz um ano de tratamento e hoje eu sei gerenciar sozinha: sei o que fazer quando a dor vem. Pra quem acha que essa dor passa sozinha: não passa. Eu sou prova disso."',
    zona: ['Valor: transferir ao paciente a capacidade de se autogerir', 'Habilidade: condução de caso de um ano com adesão e vínculo'],
    contextos: ['Abertura de VSL/CPL — a frase "a dor não vai passar sozinha" é gancho de urgência', 'Quebra da objeção do paciente que adia', 'Prova de eficácia + experiência de atendimento (acolhimento)'],
    prova: 'Vídeo-depoimento recebido em 07/07 (materiais-cliente/depoimentos-pacientes/paciente-4). Paciente do consultório do Rodrigo — uso público com identificação requer autorização de imagem. Status: CONFIRMAR.',
  },
  {
    id: 'case-07', cat: 'case', catLabel: 'Case de cliente',
    titulo: '"Não é só passar uma placa e pronto" — a individualização na voz da paciente',
    resumo: 'Paciente com histórico de tratamentos de DTM. O que a marcou foi a clareza do plano e a disposição de adaptar a técnica até dar resultado — o oposto do viés único. A placa devolveu qualidade de sono. Depoimento em vídeo.',
    tags: ['individualização', 'prova em vídeo', 'multimodal'],
    narrativa: {
      contexto: 'Ela já vinha "com histórico de dentistas e de tratamento na área de DTM". O problema principal era o apertamento diário: sentia a boca travada ao abrir e mastigava sempre mais para um lado, com rigidez.',
      conflito: 'Em tratamentos anteriores, técnica única e desconfortável — "já tinha feito com outro dentista o agulhamento a seco, e tinha sido muito doloroso". E a crítica direta ao viés da placa: "não é só aquela coisa de vou passar uma placa e fica a placa".',
      acao: 'No tratamento com o Rodrigo, encontrou clareza e individualização: "desde o início há clareza sobre quanto tempo vai durar, o que vai ser feito, quais terapias — e se uma técnica não está dando certo, você tenta outra e vai adaptando". O agulhamento foi feito "de forma muito comedida"; o biofeedback (TENS) criou consciência do apertamento; a placa melhorou o sono.',
      resultado: '"Hoje eu tenho mais confiança de que vou poder fazer o que eu quiser, sem dores e sem dificuldade de mastigação." Menos remédio, menos enxaqueca em viagens, sono estável com a placa.',
      licao: 'A individualização e a adaptação multimodal — ajustar a abordagem ao paciente em vez de forçar uma técnica única — é o que o paciente percebe e valoriza. É a Abordagem MODAL sentida na pele.',
    },
    curta: '"Eu já vinha de outros tratamentos de DTM. O diferente aqui foi a clareza — quanto tempo, o que ia ser feito — e a preocupação com resultado: se uma técnica não dava certo, adaptava outra. Não é só passar uma placa e pronto. Hoje tenho confiança de fazer o que eu quiser, sem dor."',
    zona: ['Valor: individualização real do tratamento (o oposto do viés único)', 'Conhecimento: arsenal multimodal que permite adaptar até resolver'],
    contextos: ['Prova viva da Abordagem MODAL na voz do paciente', 'Quebra da objeção "já tentei tratar e não resolveu"', 'Conteúdo contra o viés único ("pra quem só tem martelo tudo é prego")'],
    prova: 'Vídeo-depoimento recebido em 07/07 (materiais-cliente/depoimentos-pacientes/paciente-1). Paciente do consultório do Rodrigo — uso público com identificação requer autorização de imagem. Status: CONFIRMAR.',
  },
],

/* ─────────────────────── 04 · MÉTODO E FRAMEWORKS ─────────────────────── */

NOME_METODO: {
  aviso: 'NOMES DEFINIDOS (10/07) — Método: ABORDAGEM MODAL · Empresa (marca-mãe): ACADEMIA DTM · Formação: VIVER DE DTM. Identidade visual: território PULSO (fluor-lime). Ratificação com o Rodrigo na Validação da Estratégia (Marco 02). O mecanismo de tratamento (Protocolo Escalonado de DTM · F4) segue como proposta. O porquê de cada escolha e as alternativas consideradas estão no GUIA DE NAMING (link abaixo); os próximos passos de marca (domínio, INPI, Instagram) no GUIA DE SETUP.',
  top1: 'Abordagem MODAL',
  status_nome: '✓ definido · 10/07 — MODAL (método) · Academia DTM (empresa) · Viver de DTM (formação)',
  assinatura: 'Abordagem MODAL — o raciocínio clínico completo em DTM: do diagnóstico protocolar ao arsenal multimodal.',
  top1_racional: 'Acrônimo-conceito: Multimodal · Orientada (educação em dor) · Diagnóstico · Arsenal · Literatura. "Abordagem" (e não "método") reforça o que ele mesmo diz — é postura clínica, não receita. O A de ARSENAL é explicado com a analogia oficial do cinto do Batman. Dentro da Abordagem MODAL vive o mecanismo central de tratamento: o PROTOCOLO ESCALONADO DE DTM (F4).',
  opcoes: [
    { nome: 'Abordagem MODAL — ✓ ESCOLHIDO', tecnica: 'Conceitual · acrônimo (M·O·D·A·L)', porque: 'Marca própria forte; ancora no multimodal sem colidir com território de concorrente; "abordagem" soa clínico e verdadeiro. O nome do método definido.', risco: 'Revelar o acrônimo como bônus didático, não como explicação obrigatória.' },
    { nome: 'Abordagem Multicritério', tecnica: 'Conceitual · neologismo', porque: 'Alternativa considerada — junta multimodalidade + rigor de decisão numa palavra só.', risco: 'Palavra menos imediata que "modal".' },
    { nome: 'DTM Multimodal · DTM Global · DTM 360', tecnica: 'Descritivos (com a sigla)', porque: 'Alternativas descritivas consideradas — comunicam o nicho na hora.', risco: 'Marca fraca no INPI (a sigla "DTM" é termo genérico).' },
  ],
},

PUV: {
  componentes: [
    { k: 'Verbo', v: 'FORMAR (não "ensinar", não "transformar") — ele forma raciocínio clínico, forma especialistas; "formação" foi a palavra que ele escolheu pro produto.' },
    { k: 'Aprendiz', v: 'Dentista clínico geral que não domina DTM — "não sabe que não sabe", confunde DTM com bruxismo.' },
    { k: 'Transformação', v: 'Sair diagnosticando com precisão, tratando com arsenal completo e monetizando (ROI dentro do próprio ano).' },
    { k: 'Diferencial', v: 'O arsenal multimodal ("cinto do Batman") + o escalonamento por critério + a camada comercial que os acadêmicos não ensinam.' },
  ],
  versoes: [
    { label: 'Versão 1 · uma linha — ✓ APROVADA (ajuste da consultora, 04/07)', texto: 'Formo dentistas capazes de diagnosticar, tratar e lucrar com DTM — com individualização de cada caso, e não com uma única técnica.' },
    { label: 'Variação 1a · mesmo ângulo (caso a caso)', texto: 'Cada paciente de DTM é um caso diferente — formo dentistas que tratam caso a caso, com o arsenal completo, e lucram com isso.' },
    { label: 'Variação 1b · mesmo ângulo (negativa primeiro)', texto: 'DTM não se resolve com uma técnica só. Formo dentistas que diagnosticam, tratam e lucram — individualizando cada caso.' },
    { label: 'Variação 1c · mesmo ângulo (ponta a ponta)', texto: 'Formo dentistas que dominam DTM de ponta a ponta: diagnóstico preciso, tratamento individualizado e retorno financeiro — sem depender de uma única técnica.' },
    { label: 'Versão 2 · um parágrafo (abertura de página, apresentação)', texto: 'A maioria dos dentistas trata DTM com o que tem à mão: uma placa, um encaminhamento, às vezes um botox no lugar errado. Para quem só tem martelo, tudo é prego. Esta formação faz o oposto: dá ao dentista clínico o cinto do Batman — o arsenal multimodal de diagnóstico e tratamento que a literatura recomenda —, ensina a escalonar do conservador ao invasivo com critério e mostra como cobrar pelo que passou a saber fazer. Você sai enxergando a demanda que já está na sua cadeira todo dia, diagnosticando com precisão e transformando isso em receita dentro do próprio ano.' },
    { label: 'Versão 3 · conversacional (vídeo, story, fala do Rodrigo)', texto: 'Olha, DTM não é bruxismo, e não se trata com uma placa, um aparelho ou um botox. DTM é um guarda-chuva — cada paciente é um diagnóstico diferente e pede um tratamento diferente. Eu vou te dar o cinto do Batman inteiro: a ferramenta certa pra cada caso, na ordem certa, sabendo a hora de subir o degrau. E, no fim, te ensino a vender isso — porque tem gente falando que DTM não dá dinheiro, e eu faturei um milhão no ano passado, sozinho, sem trabalhar depois das seis.' },
  ],
  canais: [
    { canal: 'Bio Instagram (~150 car.)', adaptacao: 'Formo dentistas capazes de diagnosticar, tratar e lucrar com DTM — caso a caso, não com técnica única. Zurique · 30 anos · +8.000 pacientes.' },
    { canal: 'Headline de conteúdo orgânico', adaptacao: '"Pra quem só tem martelo, tudo é prego." Por que a placa não resolve a DTM do seu paciente — e o que resolve.' },
    { canal: 'Hero de página de vendas', adaptacao: 'Diagnostique, trate e lucre com DTM — com individualização de cada caso, não com a única técnica que você aprendeu.' },
    { canal: 'LinkedIn (headline pessoal)', adaptacao: 'Cirurgião-dentista · DTM e Dor Orofacial · Fellowship Universidade de Zurique · formei ~10% dos especialistas em DTM do Brasil.' },
    { canal: 'Pitch comercial 30s', adaptacao: 'Formo o clínico geral a dominar DTM de ponta a ponta — do diagnóstico protocolar ao tratamento multimodal —, e ainda a monetizar. Em 10 meses, com ROI dentro do próprio ano.' },
    { canal: 'Assunto de e-mail', adaptacao: 'DTM dá dinheiro (eu tenho os dados) · O erro nº 1 do dentista com DTM não é técnico.' },
    { canal: 'Busca por IA (ChatGPT/Google)', adaptacao: 'Formação em DTM e Dor Orofacial baseada em RDC/DC e educação em dor (IASP), com arsenal multimodal e escalonamento clínico.' },
  ],
},

JORNADA_METODO: [
  { etapa: '0 · Nivelamento (faixa branca)', acontece: 'Desmonta a crença errada ("DTM é bruxismo", "é só placa"). Ganho comercial rápido já na semana 1.', framework: 'F3 Guarda-Chuva + F1 Dois Tripés (modelos-mãe)', transformacao: 'Deixa de "não saber que não sabe" — enxerga a demanda que já está na cadeira dele' },
  { etapa: '1 · Diagnóstico (→ faixa azul)', acontece: 'Ficha de 40 perguntas → anamnese profunda → exame físico protocolar (imersão presencial) → leitura de imagem. Fecha diagnóstico específico nos 3 grupos.', framework: 'F2 Leitura de Precisão (4 camadas) + F3 Guarda-Chuva', transformacao: 'Deixa de "achar que sabe" e passa a diagnosticar com precisão' },
  { etapa: '2 · Tratamento (→ faixa roxa)', acontece: 'Monta o plano escalonado (conservador → minimamente invasivo → invasivo) pra cada grupo, com timing e risco-benefício. Marca o que executa × o que encaminha.', framework: 'F4 Protocolo Escalonado de DTM + F5 Timing de Intervenção + F1 Tripé Local', transformacao: 'Deixa de "nomear o problema" e passa a resolver com julgamento clínico' },
  { etapa: '3 · Negócio (→ faixa marrom/formatura)', acontece: 'Opera a jornada completa do paciente (agendamento → avaliação → proposta → fechamento → pós-venda), capta por indicação/posicionamento, controla os números.', framework: 'F6 Motor Comercial + F7 Motor de Tração (básico) — com Educação em Dor como ponte clínico↔comercial', transformacao: 'Deixa de "saber sem cobrar" e passa a monetizar — ROI no próprio ano' },
  { etapa: 'Continuidade (mentoria)', acontece: 'Casos complexos, procedimentos avançados na prática, comercial avançado com o arsenal completo de tração (mix por aluno), comunidade.', framework: 'Todos os frameworks aprofundados + F7 Motor de Tração completo + procedimentos de topo das escadas', transformacao: 'De especialista formado a referência com escala' },
],

PRINCIPIOS: [
  { nome: '1 · Multimodal por literatura', desc: '"Quem determina o tratamento não sou eu — é a literatura. E a literatura recomenda tratamento multimodal." Contra o curso de técnica única.' },
  { nome: '2 · Individualização (fenotipação)', desc: 'Cada paciente responde diferente a cada terapia. "O grande futuro é a fenotipação do paciente." Princípio transversal — se realiza através dos frameworks F1, F2 e F4, não como caixinha separada.' },
  { nome: '3 · Educação antes da intervenção', desc: '"Antes de intervir, você precisa entender." Paciente educado e comprometido = dupla terapêutica. Base: educação em dor (IASP). É a espinha filosófica que atravessa diagnóstico, tratamento e venda.' },
  { nome: '4 · Conservador escalonado com timing', desc: 'Conservador primeiro (92%+ melhoram) → minimamente invasivo → cirúrgico (minoria). Mas com timing: 3-6 meses sem resposta + diagnóstico confirmado = subir o degrau. "Ser conservador demais também tem custo."' },
],

FRAMEWORKS: [
  {
    id: 'dois-tripes', n: 'F1', nome: 'Os Dois Tripés', classe: 'framework-âncora',
    o_que_e: 'Dois tripés que explicam por que a DTM aparece e por onde tratá-la. O tripé SISTÊMICO (sono · atividade física · psicoemocional) explica a origem da sobrecarga; o tripé LOCAL (hábitos no sono · hábitos na vigília · relaxamento muscular) é onde se intervém diretamente.',
    como_funciona: [
      'O sistêmico primeiro — "a tensão emocional gera tensão muscular; o paciente contrai a musculatura e sobrecarrega o sistema mastigatório. Se ele não dorme, não atinge sono profundo e REM, não tem relaxamento muscular; se não faz atividade física, não tem descarga do sistema opioide; se tem aspecto psicoemocional envolvido, isso altera a modulação e a percepção da dor." Sem cuidar disso, "tratamento local é enxugar gelo".',
      'O local depois: no SONO (sem consciência) → dispositivo interoclusal; na VIGÍLIA → aumentar a consciência (biofeedback de eletromiografia, adesivos, apps de hábito).',
    ],
    quando_usar: 'Na anamnese (investigar as 3 pernas sistêmicas é obrigatório); no início de qualquer tratamento (o tripé local é a primeira camada de todo plano); e na venda — é a estrutura que o Rodrigo usa pro paciente entender o que está sendo entregue e assumir corresponsabilidade ("formar uma dupla, os dois caminharem juntos").',
    por_que_funciona: 'Fisiologia da dor musculoesquelética (sono REM e relaxamento muscular; atividade física e sistema opioide endógeno; modulação central da dor por fatores psicoemocionais). Alinhado à IASP (educação em dor). Cria adesão porque transfere parte da responsabilidade ao paciente sem culpá-lo.',
    analogia: 'Os dois tripés (imagem dele) + "enxugar gelo" (tratar o local sem resolver o sistêmico).',
    temos: ['A lógica completa e a fala em 1ª pessoa (transcrição da call)'],
    falta: ['O material gravado dos dois tripés (pendência do Rodrigo) — vira aula invertida do Encontro 3'],
    vira_conteudo: ['Encontro 3 (aula-mãe) · 6 (tripé sistêmico na anamnese) · 18 (tripé local no tratamento) · 36 (tripés como narrativa de venda)', 'Copy de posicionamento ("enxugando gelo")', 'Instrumento: infográfico dos dois tripés pro consultório do aluno'],
    alternativas: ['Mapa Sistêmico-Local — descritiva; ganha clareza técnica, perde a imagem memorável do tripé', 'A Base de Seis Pernas — número marcante (6 pernas = 2 tripés); divertido, mas beira o exagero que ele evita'],
    nota_nome: 'Mantém o nome que ele já usa espontaneamente na clínica e na venda — não inventa nada, oficializa o que já funciona.',
  },
  {
    id: 'leitura-de-precisao', n: 'F2', nome: 'Leitura de Precisão — as 4 Camadas', classe: 'framework-âncora',
    o_que_e: 'O protocolo de quatro camadas que leva da primeira resposta do paciente ao diagnóstico específico. É a fundação de todo o método — "sem diagnóstico, você não pode tratar. E não pode monetizar."',
    como_funciona: [
      'CAMADA 1 — Ficha de 40 perguntas (formulário digital, base RDC/DC validada em PT-BR + acréscimos autorais: sono com 7 perguntas e corte em 5 pontos, atividade física, medicamentos). O paciente preenche antes, "já se sente acolhido"; o Rodrigo lê antes da consulta.',
      'CAMADA 2 — Anamnese profunda (intensidade, frequência, duração, fatores de melhora/piora/precipitação) — "não é simples, é difícil".',
      'CAMADA 3 — Exame físico protocolar (palpação muscular e articular, sons articulares, tipos e medidas de movimento) — exige o presencial, "aprender a palpar".',
      'CAMADA 4 — Imagem (ressonância magnética — "dentista nenhum sabe ver"). Anamnese + exame + imagem = diagnóstico preciso.',
    ],
    quando_usar: 'Toda a Etapa 1 da formação; na clínica do aluno, é o funil de todo primeiro atendimento de DTM.',
    por_que_funciona: 'RDC/DC é o padrão-ouro validado internacionalmente e no Brasil; a adição do rastreio de sono/atividade física/medicamentos captura os drivers sistêmicos que o protocolo puro não cobre. A leitura prévia da ficha reduz o tempo de consulta sem perder profundidade.',
    analogia: '"Resgatar a importância de sentar, parar e escutar o paciente" — o antídoto contra a anamnese apressada.',
    temos: ['As 4 camadas, a ficha real dele e a lógica completa'],
    falta: ['A lista de conteúdos mínimos de diagnóstico (pendência)', 'Disponibilizar a ficha de 40 perguntas como template do aluno'],
    vira_conteudo: ['Encontros 4-5 (ficha + anamnese) · 6 · 8-11 (exame físico + imersão) · 12 (imagem)', 'Instrumento-chave: ficha de 40 perguntas replicável pelo aluno', 'IA de anamnese (backlog)'],
    alternativas: ['O Funil Diagnóstico — metáfora de afunilamento clara, mas "funil" tem conotação de marketing que pode incomodar', 'Diagnóstico em 4 Camadas — descritivo puro; seguro, menos assinatura'],
    nota_nome: 'Nomeação pelo rigor + processo, deslocando o foco de "diagnóstico individualizado" (território já ocupado por concorrente) pro método de leitura protocolar em camadas.',
  },
  {
    id: 'guarda-chuva-dtm', n: 'F3', nome: 'O Guarda-Chuva da DTM', classe: 'framework-âncora',
    o_que_e: 'DTM não é UM diagnóstico — é um guarda-chuva que abriga ~10 diagnósticos em 3 grandes grupos (muscular · articular · deslocamento de disco). Corrige o erro nº 1 do mercado: tratar "DTM" como se fosse doença única.',
    como_funciona: [
      '"DTM é como dor de dente. Eu posso ter uma cárie e faço uma restauração; uma pulpite irreversível e faço um canal; uma fratura catastrófica e extraio o dente. Os três doem, o sintoma é o mesmo — mas o diagnóstico e o tratamento são totalmente diferentes."',
      'Cada grupo tem pelo menos ~3 diagnósticos (≈10 no total pelo DC). O paciente pode ter quadro isolado ou misto (ex.: um estalo por deslocamento de disco + uma dor muscular sem relação entre si). "Tenho que ser assertivo no diagnóstico pra ser assertivo no tratamento."',
    ],
    quando_usar: 'Apresentado no Encontro 3 (modelo-mãe); aplicado nos Encontros 13-15 (um por grupo); estrutura toda a Etapa 2 (uma escada por grupo).',
    por_que_funciona: 'Espelha a taxonomia do DC/TMD. A analogia da dor de dente é pedagogicamente perfeita: usa um conhecimento que o dentista já domina (cárie/pulpite/fratura) pra ensinar um que ele não domina — transferência analógica, princípio da andragogia.',
    analogia: 'O guarda-chuva + a dor de dente (cárie→restauração / pulpite→canal / fratura→extração).',
    temos: ['Os 3 grupos, o número aproximado de diagnósticos e a analogia'],
    falta: ['A listagem nominal dos ~10 diagnósticos por grupo (sai junto da lista de conteúdos de diagnóstico)'],
    vira_conteudo: ['Encontro 3 · 13 (muscular) · 14 (articular) · 15 (deslocamento de disco)', 'Copy de autoridade ("DTM não é um diagnóstico")', 'Instrumento: pôster/mapa do guarda-chuva pro consultório'],
    alternativas: ['Os 3 Grupos, os 10 Diagnósticos — ótima pra material técnico, fraca como marca', 'Mapa da DTM — descritivo neutro; perde a força visual do guarda-chuva'],
    nota_nome: 'Mantém a analogia que ele já usa e ama — metáfora-assinatura já consolidada na fala dele.',
  },
  {
    id: 'tres-escadas', n: 'F4', nome: 'Protocolo Escalonado de DTM', classe: 'framework de etapa · Tratamento — MECANISMO CENTRAL da Abordagem MODAL',
    status_nome: '✓ nome aprovado pela consultoria · 04/07',
    o_que_e: 'O mecanismo central de tratamento da Abordagem MODAL: três escadas — uma pra cada grupo do guarda-chuva — onde cada degrau sobe do conservador ao invasivo, com critério. É o arsenal ("cinto do Batman") organizado: a ferramenta certa, na ordem certa.',
    como_funciona: [
      'ESCADA MUSCULAR — conservador: eletroestimulação · infravermelho · laser · liberação miofascial manual · controle do bruxismo de vigília (biofeedback/eletromiografia, apps, adesivos) · controle do bruxismo do sono (dispositivo interoclusal) · fármacos · exercícios caseiros · educação em dor → minimamente invasivo: infiltração anestésica · dry needling → invasivo: TOXINA BOTULÍNICA NO TOPO, último recurso. "Começo fazendo compressa quente e posso terminar fazendo toxina."',
      'ESCADA DESLOCAMENTO DE DISCO — conservador: exercícios de amplitude bucal → minimamente invasivo: ácido hialurônico · artrocentese → cirúrgico: artroscopia · discopexia.',
      'ESCADA ARTICULAR — conservador: laserterapia · fármaco · crioterapia → minimamente invasivo: corticoide · artrocentese · iPRF (agregado plaquetário) · ácido hialurônico → invasivo: artroscopia · cirurgia aberta · prótese de ATM.',
      'CAPACITA × SÓ-TEORIA (revisado pelo Rodrigo em 28/07 — versão vigente). CAPACITA A FAZER: todos os conservadores das 3 escadas + infiltração anestésica e dry needling (muscular). SÓ TEORIA (domina a indicação, conduz o paciente e encaminha; execução fica na mentoria): ácido hialurônico, corticoide e iPRF — em todas as variantes; toxina botulínica (muscular); artrocentese + cirúrgicos (disco: artroscopia, discopexia); artrocentese + cirúrgicos (articular: artroscopia, cirurgia aberta, prótese de ATM).',
    ],
    quando_usar: 'Toda a Etapa 2 (Encontros 19-32), um bloco por escada; na clínica, é o mapa de decisão terapêutica do aluno.',
    por_que_funciona: 'Tratamento multimodal escalonado é a recomendação da literatura. Começar pelo reversível e só subir por critério minimiza risco e maximiza adesão. O posicionamento da toxina no topo (não na base) é a bandeira central do método contra o uso indiscriminado.',
    analogia: 'O cinto do Batman ("a ferramenta certa pra cada demanda") + "pra quem só tem martelo, tudo é prego".',
    temos: ['As três escadas completas (recebidas em 03/07)', 'A marcação capacita × só-teoria de cada degrau — confirmada pelo Rodrigo em 04/07'],
    falta: ['Montar o formulário de triagem pré-imersão (sintomas, dor, estalo, tensão) — instrumento novo aprovado em 28/07: mede quantos alunos podem receber agulhamento naquela turma, define o recrutamento externo da diferença e ainda vira aula (o aluno preenche a ficha de avaliação do método em si mesmo antes de aplicar em paciente)'],
    vira_conteudo: ['Encontros 19-24 (muscular) · 25-28 (disco) · 29-32 (articular)', 'Copy anti-botox ("tem onda que é marola e tem onda que é tsunami")', 'Instrumento-estrela: as três escadas como pôster/fluxograma de decisão'],
    alternativas: ['As Três Escadas — nome de trabalho anterior; permanece como descrição interna das 3 escadas dentro do protocolo', 'Cascata Terapêutica — plantado na call; descartado ("cascata" sugere descida, o mecanismo é subida)'],
    nota_nome: 'APROVADO em 04/07 como nome do mecanismo dentro da Abordagem MODAL. Comunica o diferencial na lata: trata por degraus, com critério — zero cara de guru. Validação final com o Rodrigo no Marco 02.',
  },
  {
    id: 'timing-de-intervencao', n: 'F5', nome: 'Timing de Intervenção', classe: 'framework de etapa · Tratamento',
    o_que_e: 'O conjunto de critérios que diz quando insistir no conservador e quando subir o degrau — o julgamento que separa o clínico maduro do conservador-demais (ou do intervencionista-precoce). Subtítulo: a hora certa de subir o degrau.',
    como_funciona: [
      '"A gente insiste no tratamento conservador até uns três a seis meses no máximo. Se o paciente não está respondendo e você tem certeza do seu diagnóstico, precisa subir o degrau."',
      'Critérios de subida: (1) TEMPO — 3-6 meses sem resposta; (2) DIAGNÓSTICO CONFIRMADO; (3) GRAVIDADE, imagem e impacto em outras áreas da vida.',
      'A lição de humildade dele: "eu tinha uma formação muito conservadora, e isso me fez perder a mão do momento de intervir. Já perdi o timing de alguns casos e não consegui ajudar o paciente tanto quanto poderia."',
    ],
    quando_usar: 'Encontro 18 (aula dedicada) + revisitado em cada escada; na clínica, é o gatilho de reavaliação a cada 3-6 meses.',
    por_que_funciona: 'Transforma uma decisão intuitiva ("achismo") em critério objetivo e ensinável. Corrige os dois erros opostos — intervir cedo demais (a onda "tsunami" do mercado) e tarde demais (o erro pessoal dele). É a peça que faz as Três Escadas serem aplicadas com julgamento, não como receita.',
    analogia: '"Subir o degrau" + "não ficar batendo cabeça e insistindo até perder o time".',
    temos: ['Os critérios (3-6 meses + confirmação + gravidade)'],
    falta: ['Refinar eventualmente os critérios objetivos por grupo diagnóstico (pode nascer da lista de conteúdos de tratamento)'],
    vira_conteudo: ['Encontro 18 · reforço nos Encontros 22-23, 27 e 32 (pontos de subida em cada escada)', 'Copy de autoridade — a humildade do "já perdi o timing" é história-âncora poderosa', 'Instrumento: checklist de reavaliação a cada 3-6 meses'],
    alternativas: ['A Régua do Degrau — concreta e memorável, um pouco mais informal', 'Critério de Escalonamento — técnico e casado com as Escadas; seguro, menos assinatura'],
    nota_nome: 'Nomeação pelo critério de decisão — é sobre QUANDO, não sobre o quê. Termo que ele já usa ("esse timing é muito importante").',
  },
  {
    id: 'motor-comercial', n: 'F6', nome: 'Motor Comercial', classe: 'framework de etapa · Negócio',
    o_que_e: 'O sistema que converte a competência clínica em receita olhando pra JORNADA COMPLETA DO PACIENTE — do agendamento à recorrência, não só "a venda". O diferencial do Rodrigo é enxergar cada elo: agendamento → pré-avaliação → consulta de avaliação → formato da proposta comercial → fechamento → pós-venda e acompanhamento.',
    como_funciona: [
      'A JORNADA DE PONTA A PONTA — cada elo é desenhado: agendamento (com ou sem sinal, conforme contexto), pré-avaliação (ficha de 40 perguntas + acolhimento antes da consulta), consulta de avaliação (a devolutiva de diagnóstico), formatos de proposta comercial (como apresentar plano e investimento), fechamento e pós-venda/recorrência. O aluno não aprende "a vender" — aprende a operar a jornada inteira.',
      'O núcleo é a NARRATIVA DA PRIMEIRA CONSULTA — a educação em dor e os Dois Tripés já são o que converte ("antes de intervir, você precisa entender" vira também a lógica de venda).',
      'O funil-base (números atualizados na aula de 07/07): avaliação R$ 540 (evoluiu de R$ 150 → R$ 490 → R$ 540, meta R$ 600) → conversão avaliação→tratamento 45-55% historicamente, hoje subindo pra ~60% (meta 60, "nunca 80, porque meu preço é o maior"). Controles essenciais: nº de avaliações/mês (meta 40), taxa da recepção (lead→avaliação: Meta 20% / Google 30% / indicação ~100%) e taxa dele (avaliação→tratamento).',
      'VIRADA DE TICKET (novidade da aula): ele ABANDONOU os tratamentos longos de 1 ano e passou a vender uma abordagem inicial mais curta com reavaliação — ticket médio menor, mas conversão maior, o paciente circula mais na clínica e o LTV sobe. E a oferta deixou de ser "3 planos ancorados" (básico/completo/multi) pra ser modelada ao diagnóstico: "cada paciente tem um diagnóstico, cada diagnóstico tem uma oferta — nada é cravado em pedra".',
      'Elementos CONTEXTUAIS (não regra pra todos): cobrança de sinal pra agendar — modelo atual R$ 140 antes + R$ 400 no dia, sem devolução, com os R$ 400 revertíveis em crédito de tratamento (nasceu da crise de 50 desmarcações em 3 meses); vídeo pré-consulta (hoje em casos específicos, não parou 100%).',
      'A prova viva: "faturei um milhão ano passado vendendo DTM, com uma clínica pequena, atendendo só eu, e ainda viajei com a família."',
    ],
    quando_usar: 'Toda a Etapa 3 (Encontros 35-41); na clínica, é o sistema de gestão comercial que o aluno passa a rodar. Comercial BÁSICO na formação; comercial AVANÇADO fica na mentoria. Matéria-prima real: a aula "Como eu faço uma abordagem comercial em DTM" (4h08, 07/07) — ver análise em materiais-cliente/aula-rodrigo/.',
    por_que_funciona: 'Ataca a objeção-mestra do mercado ("DTM não dá dinheiro") com dados reais; conecta a venda ao método clínico — a devolutiva de diagnóstico com os tripés é o que fecha (na aula ele usa os Dois Tripés como roteiro de venda, papel dividido ao meio), então não parece técnica de venda enxertada. E resolve a dor central do aluno ("a gente sabe o que fazer mas fica patinando"): começa mandando quantificar. A distinção básico × avançado protege a promessa da formação e cria a ponte pra mentoria.',
    analogia: '"Não é corrida de 100 metros, é maratona" (LTV e recorrência) + "vender é uma ajuda, não é chato" + o contraste do próprio caso (R$ 1M / 28-30h por semana / sem trabalhar após as 18h).',
    temos: ['O funil, os números e as teses', 'Os scripts e a mecânica reais, ponta a ponta (aula comercial de 4h08 transcrita e analisada, 07/07)', 'O corte básico (formação) × avançado (mentoria) já mapeado por encontro', 'CRM atual confirmado pelo Rodrigo (26/07): era Kommo, migrou pra RD Station — hoje RD Station'],
    falta: ['Pegar com o Rodrigo os números atuais de venda da clínica (ticket médio, taxa de conversão de lead em avaliação, volume de leads por mês) pra calibrar os scripts'],
    vira_conteudo: ['Encontros 35-41', 'Copy de quebra de objeção ("DTM dá dinheiro — eu tenho os dados")', 'Ganchos de voz: "quero ser o seu último dentista", "vender é ajudar", "a dor não vai passar sozinha"', 'Scripts de recepção (lead→avaliação) + roteiro da 1ª consulta (autoapresentar-se antes da queixa, colher sins)', 'Instrumento: planilha de controles do funil + roteiro de devolutiva de diagnóstico'],
    alternativas: ['Da Avaliação ao Tratamento — descritivo do funil-núcleo; clareza total, menos marca', 'Jornada do Paciente — descreve o diferencial de ponta a ponta; forte, mas colide com "jornada do aluno" no vocabulário do produto'],
    nota_nome: 'Metáfora de sistema que gera movimento — comunica mecanismo repetível, não "vendinha". Sóbrio e alinhado ao mundo do consultório. Par com o F7: o Motor de TRAÇÃO atrai, o Motor COMERCIAL converte e retém. Headline forte que nasce da aula: "DTM dá dinheiro" é a falácia que ele mais ataca.',
  },
  {
    id: 'motor-de-tracao', n: 'F7', nome: 'Motor de Tração', classe: 'framework de etapa · Negócio (básico na formação · arsenal completo na mentoria)',
    status_nome: '✓ nomeado pela consultora · 04/07',
    o_que_e: 'O arsenal de formas de ATRAIR pacientes pro consultório — marketing digital pago e gratuito, programas de indicação estruturada, autoridade local e outros motores permitidos pelo Código de Ética. A tese central: não existe "o funil certo" universal — existe o arsenal e o encaixe com o contexto, as convicções e a personalidade de cada dentista.',
    como_funciona: [
      'MAPEAR o arsenal de motores possíveis: tráfego pago · conteúdo orgânico/redes · Google e busca (incluindo busca por IA) · programas de indicação estruturada (paciente e colegas) · autoridade local (aulas, palestras, parcerias com médicos e encaminhadores) · presença em convênios/plataformas conforme estratégia.',
      'FILTRAR duas vezes: (1) pelo CÓDIGO DE ÉTICA — só motores permitidos pra publicidade em odontologia; (2) pela PERSONALIDADE E CONVICÇÕES do dentista — nem todo mundo quer produzir conteúdo, nem todo mundo quer dar palestra pra construir autoridade. O motor que o aluno odeia operar é o motor que ele abandona.',
      'MONTAR O MIX do contexto dele: cidade, perfil de paciente, capital disponível, tempo e temperamento — cada aluno sai com o próprio conjunto de motores, não com uma receita única.',
      'É a lógica clínica da Abordagem MODAL aplicada ao negócio: assim como não se trata todo paciente com uma única técnica, não se capta todo paciente com um único funil. Individualização — do tratamento E da tração.',
    ],
    quando_usar: 'Na formação, o básico: indicação estruturada + posicionamento pra rede atual (Encontro 39) — o canal mais barato de quem começa. Na mentoria, o arsenal completo: tráfego pago, conteúdo multi-plataforma, busca por IA, parcerias — com o mix desenhado por aluno.',
    por_que_funciona: 'Adesão: o aluno opera o motor que combina com ele, então sustenta no tempo. Ética: filtro explícito do Código de Ética protege o aluno (e a marca) de publicidade irregular. Simetria com o método clínico: a mesma filosofia de individualização — o que torna o framework inconfundível com "curso de marketing pra dentista".',
    analogia: 'O paralelo direto com o arsenal clínico: "pra quem só tem martelo, tudo é prego" também vale pra captação — quem só conhece um funil força o funil errado no contexto errado.',
    temos: ['A tese e o diferencial (call + direcionamento da consultora em 04/07)', 'O caso real dele: Google + Instagram + indicação + paciente vindo do ChatGPT'],
    falta: ['Catalogar o arsenal de motores com o Rodrigo (quais ele domina e endossa)', 'Matriz motor × perfil de aluno (o instrumento de escolha do mix)', 'Separar o que entra na formação (básico) × mentoria (completo)'],
    vira_conteudo: ['Encontro 39 (posicionamento + indicação — o básico)', 'Mentoria: módulo de tração completo, mix por aluno', 'Copy: "não existe o funil certo — existe o funil certo pra VOCÊ"', 'Instrumento: Mapa de Motores de Tração (matriz motor × perfil)'],
    alternativas: ['Arsenal de Tração — liga com o vocabulário do "arsenal" clínico; forte, mas repete a palavra em dois territórios', 'Motores de Captação — descritivo puro; claro, menos assinatura'],
    nota_nome: 'Nomeado pela consultora em 04/07 ("motor de tração"). Par natural com o Motor Comercial: tração atrai, comercial converte.',
  },
],

TRANSVERSAIS: {
  intro: 'Fenotipação e Educação em Dor foram avaliadas como candidatas a framework próprio — e ficam como <strong>princípios transversais</strong>: atravessam todos os frameworks em vez de virar caixinha ao lado deles.',
  itens: [
    {
      nome: 'Fenotipação', tag: 'a visão de futuro',
      pontos: [
        { k: 'O que é', v: 'A filosofia de <strong>individualização</strong> — "o grande futuro é a <strong>fenotipação do paciente</strong>": entender por que cada paciente responde diferente a cada terapia.' },
        { k: 'Por que não é framework (ainda)', v: 'Hoje <strong>não tem passo a passo próprio ensinável</strong> — ela se realiza através dos Dois Tripés, da Leitura de Precisão e do Protocolo Escalonado.' },
        { k: 'Quando promove', v: 'Se na <strong>mentoria</strong> virar um protocolo concreto de fenotipagem, sobe pra framework.' },
      ],
    },
    {
      nome: 'Educação em Dor', tag: 'a espinha filosófica',
      pontos: [
        { k: 'O que é', v: '"<strong>Antes de intervir, você precisa entender</strong>" — a base IASP que atravessa diagnóstico, tratamento e venda.' },
        { k: 'Onde vive', v: 'Dentro do <strong>F1 Dois Tripés</strong> (adesão do paciente) · como degrau conservador do <strong>F4 Protocolo Escalonado</strong> · como motor de conversão do <strong>F6 Motor Comercial</strong>.' },
        { k: 'Por que não é framework', v: 'Por atravessar tudo, é mais poderosa como <strong>assinatura ética e clínica da marca</strong> do que como caixinha entre outras.' },
        { k: 'Opção registrada', v: 'Se o Rodrigo quiser visibilidade máxima: elevá-la a <strong>framework nº 0 — "A Abordagem Educativa"</strong>. Decisão dele.' },
      ],
    },
  ],
},

INSTRUMENTOS: [
  { nome: 'Ficha de 40 perguntas (RDC/DC + acréscimos)', formato: 'Formulário digital · template replicável', etapa: 'Diagnóstico · F2', uso: 'Configura na própria conta e aplica em pacientes antes da consulta', status: 'temos a base (ficha real dele) · falta virar template' },
  { nome: 'Roteiro de anamnese profunda', formato: 'PDF/checklist · roteiro de consulta', etapa: 'Diagnóstico · F2', uso: 'Conduz a anamnese cobrindo os componentes da dor + as 3 pernas sistêmicas', status: 'falta estruturar' },
  { nome: 'Checklist de exame físico protocolar', formato: 'PDF · roteiro pessoal pra imersão', etapa: 'Diagnóstico · F2', uso: 'Leva à imersão e usa como guia de palpação/sons/medidas', status: 'falta estruturar' },
  { nome: 'Mapa do Guarda-Chuva (3 grupos, ~10 diagnósticos)', formato: 'Infográfico · pôster de consultório', etapa: 'Diagnóstico · F3', uso: 'Referência de classificação + material de sala de espera', status: 'falta a lista nominal dos diagnósticos' },
  { nome: 'Infográfico dos Dois Tripés', formato: 'Infográfico · material paciente/aluno', etapa: 'Transversal · F1', uso: 'Explica ao paciente na devolutiva (aumenta adesão)', status: 'falta o material gravado-fonte (pendência Rodrigo)' },
  { nome: 'Protocolo Escalonado de DTM (fluxograma das 3 escadas)', formato: 'Fluxograma · pôster/decisão clínica', etapa: 'Tratamento · F4', uso: 'Decide o próximo degrau terapêutico por grupo, marcando executa × encaminha', status: 'temos as escadas · falta marcação capacita×teoria' },
  { nome: 'Checklist de reavaliação 3-6 meses', formato: 'Checklist · gatilho de decisão', etapa: 'Tratamento · F5', uso: 'Reavalia se sobe o degrau, por critério objetivo', status: 'falta estruturar' },
  { nome: 'Planilha de controles do funil', formato: 'Planilha/Notion · painel de gestão', etapa: 'Negócio · F6', uso: 'Registra avaliações/mês, conversão, ticket; lê a saúde do funil', status: 'template a criar' },
  { nome: 'Roteiro de devolutiva + fechamento', formato: 'Script · roteiro de consulta', etapa: 'Negócio · F6', uso: 'Conduz avaliação → apresentação do plano (via tripés) → fechamento', status: 'falta estruturar' },
  { nome: 'Scripts de recepção (lead → avaliação)', formato: 'Script · treino de secretária', etapa: 'Negócio · F6', uso: 'Treina a recepção a converter contato em agendamento', status: 'falta estruturar' },
  { nome: 'Mapa de Motores de Tração (matriz motor × perfil)', formato: 'Matriz/ferramenta de escolha', etapa: 'Negócio · F7', uso: 'O aluno cruza os motores permitidos com o próprio perfil (temperamento, tempo, capital, contexto) e monta seu mix de tração', status: 'a criar — depende do catálogo de motores com o Rodrigo' },
  { nome: 'IA de anamnese (metodologia dele)', formato: 'Agente/skill · assistente clínico', etapa: 'Diagnóstico · F2', uso: 'Pré-organiza a anamnese com a lógica dele', status: 'ideia plantada — backlog' },
],

};
