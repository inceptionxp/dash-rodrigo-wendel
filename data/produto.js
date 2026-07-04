/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   O PRODUTO — Formação · Grade (41 encontros) · Mentoria · Comparação ·
   Jornada do Aluno · Gamificação por Faixas.
   Fontes: produto/plano-de-ensino-formacao.md · produto/jornada-do-aluno.md ·
   pré-estrutura validada na dashboard (D5/D6) · call de 02/07/2026.
   Nomes de fase e de produto = PROPOSTA, a validar com Maiara + Rodrigo.
   ═══════════════════════════════════════════════════════════════════ */

window.DASH_PRODUTO = {

/* ─────────────────────── FORMAÇÃO (visão do produto) ─────────────────────── */
FORMACAO: {
  html: `
    <p class="page-lead">A visão do produto principal — o que já está desenhado, o que é hipótese de trabalho e o que a Maiara e o Rodrigo ainda decidem juntos. Nada aqui é definitivo até o Marco 02 (Validação da Estratégia).</p>

    <h2 class="section-title">A esteira em <span class="ei">uma linha</span></h2>
    <div class="card destaque">
      <p style="font-family:var(--serif);font-size:18px;line-height:1.6;margin:0;">Curso gravado existente (porta de entrada — 9 aulas que "tiram do zero absoluto e dão o primeiro grau na faixa branca") → <strong>FORMAÇÃO em DTM</strong> (10 meses, o carro-chefe do lançamento) → <strong>MENTORIA</strong> (continuidade técnica + negócio, renovável) — cada degrau prepara e vende o próximo.</p>
    </div>
    <ul class="entregas-lista">
      <li><strong>Backlog (não prometido)</strong><em>App educacional pro paciente (licenciável aos alunos) · agente de IA de anamnese com a metodologia dele · parcerias com fabricantes de equipamento na mentoria.</em></li>
    </ul>

    <h2 class="section-title">Formato <span class="ei">operacional</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Cadência</dt><dd>1 encontro semanal em grupo, ao vivo (online) + estudo de caso mensal</dd>
        <dt>Presencial</dt><dd>1 imersão hands-on obrigatória em Brasília (palpação, Etapa 1) · até 2 encontros presenciais opcionais adicionais</dd>
        <dt>1:1</dt><dd>Não há na formação — o individual é diferencial da mentoria (quando o aluno tem caso real na mão). <em>Direção da call, a confirmar no Marco 02.</em></dd>
        <dt>Turma</dt><dd>Fechada, com início conjunto — a coesão do grupo é parte do produto</dd>
        <dt>Duração</dt><dd>10 meses · 41 encontros semanais em 3 etapas (ver Grade)</dd>
        <dt>ROI-alvo do aluno</dt><dd>"Que ele recupere o investimento ao longo do ano — a formação sai de graça"</dd>
      </dl>
    </div>

    <h2 class="section-title">As 3 etapas <span class="ei">resumidas</span></h2>
    <ul class="entregas-lista">
      <li><strong>Etapa 1 · Diagnóstico (~4 meses · 16 encontros)</strong><em>Fundamentação + anamnese profunda (ficha de 40 perguntas e escuta clínica) + exame físico protocolar com IMERSÃO PRESENCIAL de palpação + interpretação de imagem. Gate: "todo aluno sabe dar diagnóstico". Sem diagnóstico não há tratamento nem receita.</em></li>
      <li><strong>Etapa 2 · Tratamento (~4-5 meses · 18 encontros)</strong><em>Os dois tripés aplicados + as 3 escadas de tratamento (muscular, articular, deslocamento de disco), diagnóstico a diagnóstico, do conservador ao invasivo + timing de intervenção. Procedimentos de alta complexidade só em teoria — a prática é território da mentoria.</em></li>
      <li><strong>Etapa 3 · Comercial, gestão e marketing básico (~2 meses · 7 encontros)</strong><em>Vender a abordagem terapêutica: narrativa da avaliação → tratamento, captação básica, retenção e números. Fecha com o convite natural pra mentoria.</em></li>
      <li><strong>Transversal · Ganhos rápidos desde o mês 1</strong><em>Elementos comerciais agnósticos a DTM (formulário pré-consulta, agenda, processos, leitura de números) — o aluno começa a recuperar o investimento antes de terminar a parte técnica.</em></li>
      <li><strong>Transversal · Progressão por faixas</strong><em>Analogia de jiu-jitsu (autoral do Rodrigo): cada etapa vencida = passagem de faixa, com marco visível de evolução. Ver a página Gamificação.</em></li>
    </ul>

    <h2 class="section-title">Comercial: o que entra na <span class="ei">formação</span> × fica na <span class="ei">mentoria</span></h2>
    <p>A triagem segue uma lógica só: a formação ensina a <strong>MONETIZAR</strong> a competência clínica recém-adquirida (extrair o máximo dos pacientes que já chegam); a mentoria ensina a <strong>ESCALAR</strong> (gerar mais pacientes) — o que também dá à mentoria o valor recorrente que justifica a renovação.</p>
    <div class="card">
      <p style="margin:0 0 8px;font-family:var(--cond);font-size:19px;text-transform:uppercase;color:var(--vermelho-esc);">Na formação — comercial básico</p>
      <ul class="entregas-lista" style="margin-top:0;">
        <li><strong>Narrativa da primeira consulta</strong><em>Como conduzir a avaliação pra converter em tratamento — a expressão comercial da abordagem educativa (os dois tripés), inseparável do método. Núcleo da etapa 3.</em></li>
        <li><strong>Scripts de conversão lead → avaliação</strong><em>Treinamento da secretária/recepção. Ganho rápido, agnóstico a DTM, aplicável desde o mês 1.</em></li>
        <li><strong>Pós-venda, contrato e acompanhamento</strong><em>Fechar o ciclo do paciente e sustentar a recorrência.</em></li>
        <li><strong>Controles essenciais</strong><em>Os números mínimos pra enxergar o próprio funil: avaliações, taxa de conversão, ticket.</em></li>
        <li><strong>Fundamentos de posicionamento + indicação</strong><em>O canal mais barato e imediato pra quem está começando — sem depender de tráfego pago.</em></li>
      </ul>
      <p style="margin:16px 0 8px;font-family:var(--cond);font-size:19px;text-transform:uppercase;color:var(--cinza);">Na mentoria — comercial avançado</p>
      <ul class="entregas-lista" style="margin-top:0;">
        <li><strong>Máquina de captação completa</strong><em>Redes sociais, Google, tráfego pago, conteúdo e posicionamento em busca por IA — a aquisição que escala e é contínua.</em></li>
        <li><strong>Posicionamento de marca e escala</strong><em>Autoridade digital, gestão avançada, times, novos canais.</em></li>
      </ul>
    </div>
    <div class="alert">
      <strong>Por que essa divisão:</strong> sem a narrativa de conversão (avaliação → tratamento), a competência técnica não vira receita e a promessa de ROI da formação quebra — por isso ela é inegociável na formação. Já a máquina de aquisição é o que gera renovação e valor contínuo: o coração da mentoria.
    </div>

    <h2 class="section-title">Investimento — <span class="ei">hipótese de trabalho</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Faixa em estudo</dt><dd><strong>R$ 15.000 a R$ 20.000</strong> pelos 10 meses (ex.: 12x R$ 1.500-1.800)</dd>
        <dt>Ancoragem de mercado</dt><dd>Mentoria intensiva do nicho: R$ 6-9 mil por 4 semanas · Especialização tradicional: R$ 36-60 mil por 18-30 meses · A formação ocupa o meio com um formato que nenhum player tem</dd>
        <dt>Lógica de ROI</dt><dd>2 a 4 tratamentos de DTM (R$ 3.500-10.000 cada) pagam a formação — e a meta declarada é o aluno recuperar o investimento DENTRO do ciclo</dd>
      </dl>
      <p style="font-size:12px;color:var(--cinza);margin:10px 0 0;">Preço final definido na Validação da Estratégia, junto com a oferta completa (bônus, garantia, condições de fundador).</p>
    </div>

    <h2 class="section-title">Certificação e <span class="ei">linguagem de venda</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Rota recomendada</dt><dd><strong>Curso livre</strong> com certificado de conclusão e carga horária — a autoridade real é quem assina: o formador de ~10% dos especialistas do país</dd>
        <dt>Cuidado jurídico</dt><dd>Não pode chamar de "especialização" nem prometer título — a linguagem de venda será validada juridicamente antes da campanha</dd>
        <dt>Reavaliação</dt><dd>Parceria com instituição de ensino reavaliada na v2 (detalhes das rotas na página Pesquisas)</dd>
      </dl>
    </div>

    <div class="alert decisao">
      <strong>🟥 Decisões em aberto — Maiara + Rodrigo definem juntos (workspace de decisão · Marco 02):</strong>
      <ul>
        <li><strong>Nome</strong> — da empresa (braço educacional), da formação e do Instagram novo. Propostas de nome do método na página O Método &amp; Frameworks.</li>
        <li><strong>Ticket final</strong> — dentro (ou fora) da faixa de R$ 15-20 mil em estudo.</li>
        <li><strong>Bônus e garantia</strong> — a oferta completa, incluindo condições de fundador.</li>
        <li><strong>Confirmação do "sem 1:1" na formação</strong> — direção da call, a ratificar.</li>
      </ul>
      <p style="margin:8px 0 0;">Use os comentários desta página pra registrar posição sobre qualquer um desses pontos.</p>
    </div>

    <h2 class="section-title">O que falta pra fechar <span class="ei">(insumos)</span></h2>
    <ul class="entregas-lista">
      <li><strong>Do Rodrigo</strong><em>Marcação capacita × só-teoria nas 3 escadas + material gravado dos dois tripés → refinam 6 aulas da Etapa 2 e o Encontro 3 (ajuste local, sem redesenho).</em></li>
      <li><strong>Da Inception</strong><em>Naming (empresa, formação, Instagram) + oferta completa (bônus, garantia) + Documento Mestre de Estratégia → apresentados na Validação da Estratégia (Marco 02).</em></li>
    </ul>
    <div class="alert amarelo">
      <strong>Pra validar nesta página (comentários abaixo):</strong> 1) a divisão 4 + 4-5 + 2 meses das etapas · 2) a faixa de investimento · 3) o formato presencial (1 obrigatório + 2 opcionais) · 4) o desenho da mentoria como continuação técnica + negócio.
    </div>
  `,
},

/* ─────────────────────── GRADE · 41 ENCONTROS ─────────────────────── */
GRADE_ETAPAS: [
  {
    n: 1, titulo: 'Etapa 1 · Fundação e Diagnóstico', meta: '16 encontros · ~4 meses · faixa branca → azul',
    objetivo: 'O aluno sai sabendo o que 99,6% dos dentistas do Brasil não sabem: diagnosticar DTM com precisão (anamnese + exame físico + imagem). Sem isso, não há tratamento nem receita.',
    gate: 'GATE → faixa azul: diagnosticar um caso inédito completo (ficha + exame + imagem) com justificativa clínica, corrigido pelo Rodrigo. "Eu sei diagnosticar" — a virada que separa quem acha que sabe de quem sabe.',
    faixa: 'azul',
  },
  {
    n: 2, titulo: 'Etapa 2 · Tratamento', meta: '18 encontros · ~4-5 meses · faixa azul → roxa',
    objetivo: 'Montar o plano de tratamento escalonado (do conservador ao invasivo) para os 3 grupos, com julgamento sobre timing e risco-benefício. Aqui fica explícito o que o aluno EXECUTA × o que INDICA e encaminha.',
    gate: 'GATE → faixa roxa: montar o plano escalonado de 2-3 casos mistos inéditos, com marcação de execução × encaminhamento. A virada de diagnosticador pra terapeuta.',
    faixa: 'roxa',
    nota: '⚠️ A marcação [prática] × [indicação] da etapa segue hipótese de trabalho — a confirmação do Rodrigo (capacita × só-teoria nas escadas) pode mover 1-2 procedimentos de coluna, sem mudar estrutura nem contagem.',
  },
  {
    n: 3, titulo: 'Etapa 3 · Comercial, gestão e marketing básico', meta: '7 encontros · ~2 meses · faixa roxa → marrom/formatura',
    objetivo: 'Transformar a competência clínica em receita: converter avaliação em tratamento, captar pelos canais mais baratos, reter e controlar os números. O comercial avançado (aquisição, tráfego, escala) fica na mentoria.',
    gate: 'GATE → formatura: conduzir uma consulta de avaliação completa (avaliação → plano → fechamento) + apresentar o painel de números. Sabe tratar E sabe cobrar pelo que sabe.',
    faixa: 'marrom',
  },
],

ENCONTROS: [
  // ETAPA 1 · Bloco 0 — Nivelamento
  { n: 1,  etapa: 1, bloco: 'Bloco 0 · Nivelamento (3 semanas)', titulo: 'O paciente que já está na sua cadeira', essencia: 'Prevalência real da DTM (40-60% da população com sinais) e a demanda invisível na própria clínica — "sem diagnóstico, sem tratamento, sem monetização".', output: 'Lista de 3 pacientes reais da própria agenda com sinais de DTM não investigados.', fmt: 'online' },
  { n: 2,  etapa: 1, bloco: 'Bloco 0 · Nivelamento (3 semanas)', titulo: 'Os erros mais comuns (e por que acontecem)', essencia: 'Confundir bruxismo com DTM, tratar sem diagnóstico, viés de especialidade ("pra quem só tem martelo, tudo é prego").', output: 'Autodiagnóstico escrito — qual erro ele mesmo já cometeu, com 1 exemplo real.', fmt: 'online' },
  { n: 3,  etapa: 1, bloco: 'Bloco 0 · Nivelamento (3 semanas)', titulo: 'Anatomia da ATM + os 2 frameworks-mãe', essencia: 'Revisão de anatomia + o Guarda-Chuva (DTM não é um diagnóstico) + os Dois Tripés como modelos mentais que atravessam toda a formação.', output: 'Mapa mental ligando os 3 grupos do guarda-chuva aos 2 tripés.', fmt: 'online', nota: '⚠️ Incorpora o material gravado dos tripés (pendência do Rodrigo) — pode virar aula invertida.' },
  // ETAPA 1 · Bloco 1 — Ficha + Anamnese
  { n: 4,  etapa: 1, bloco: 'Bloco 1 · Ficha + Anamnese (4 semanas)', titulo: 'O formulário de 40 perguntas', essencia: 'A ficha pré-consulta (base RDC/DC + acréscimos autorais de sono, atividade física e medicação) que já acolhe o paciente antes da consulta.', output: 'Formulário configurado na própria conta, pronto pra aplicar em pacientes reais.', fmt: 'online' },
  { n: 5,  etapa: 1, bloco: 'Bloco 1 · Ficha + Anamnese (4 semanas)', titulo: 'Anamnese profunda: sentar, parar e escutar', essencia: 'Os componentes da dor (intensidade, frequência, duração, fatores de melhora/piora/precipitação) — "não é simples, é difícil".', output: 'Roteiro de anamnese preenchido via role-play, com os 4 componentes documentados.', fmt: 'online' },
  { n: 6,  etapa: 1, bloco: 'Bloco 1 · Ficha + Anamnese (4 semanas)', titulo: 'O Tripé Sistêmico na anamnese', essencia: 'Sono, atividade física e psicoemocional como parte obrigatória — sem isso, "tratamento local é enxugar gelo".', output: 'Análise escrita de 2 casos reais, com a perna comprometida do tripé marcada em cada um.', fmt: 'online' },
  { n: 7,  etapa: 1, bloco: 'Bloco 1 · Ficha + Anamnese (4 semanas)', titulo: 'Estudo de caso: anamnese do zero ao registro', essencia: 'Integra ficha + anamnese + tripé sistêmico num atendimento simulado completo.', output: 'Anamnese completa de 1 caso, entregue por escrito e corrigida ao vivo pelo Rodrigo.', fmt: 'caso' },
  // ETAPA 1 · Bloco 2 — Exame físico + Imersão
  { n: 8,  etapa: 1, bloco: 'Bloco 2 · Exame físico + Imersão presencial (4 semanas)', titulo: 'O exame físico protocolar', essencia: 'Palpação, sons articulares e medidas de movimento — a teoria balizada internacionalmente, antes do hands-on.', output: 'Checklist do protocolo preenchido como roteiro pessoal pra levar à imersão.', fmt: 'online' },
  { n: 9,  etapa: 1, bloco: 'Bloco 2 · Exame físico + Imersão presencial (4 semanas)', titulo: 'Imersão presencial (Brasília) — dia 1', essencia: 'Palpação muscular e articular em pacientes/modelos reais, com supervisão direta e rotação em estações de prática.', output: 'Ficha de exame físico preenchida ao vivo e validada pelo Rodrigo no momento.', fmt: 'presencial' },
  { n: 10, etapa: 1, bloco: 'Bloco 2 · Exame físico + Imersão presencial (4 semanas)', titulo: 'Imersão presencial — dia 2', essencia: 'Medidas de movimento mandibular (abertura, lateralidade, protrusão) + integração com a palpação e primeira hipótese diagnóstica.', output: 'Ficha completa de ao menos 2 casos reais da imersão, validada pelo Rodrigo.', fmt: 'presencial' },
  { n: 11, etapa: 1, bloco: 'Bloco 2 · Exame físico + Imersão presencial (4 semanas)', titulo: 'Pós-imersão: consolidando à distância', essencia: 'Feedback agregado dos erros da turma na imersão + replicação autônoma do protocolo na própria clínica.', output: 'Relato + ficha de exame físico de 1 paciente real da própria clínica.', fmt: 'online' },
  // ETAPA 1 · Bloco 3 — Imagem + Diagnóstico específico
  { n: 12, etapa: 1, bloco: 'Bloco 3 · Imagem + Diagnóstico específico (5 semanas)', titulo: 'Interpretação de imagem (ressonância)', essencia: 'O que "dentista nenhum sabe ver": disco, degeneração, quando pedir imagem e quando ela é indispensável.', output: 'Laudo simplificado de 2 imagens apresentadas em aula.', fmt: 'online' },
  { n: 13, etapa: 1, bloco: 'Bloco 3 · Imagem + Diagnóstico específico (5 semanas)', titulo: 'Guarda-Chuva: grupo Muscular', essencia: 'Diferenciar os diagnósticos musculares integrando anamnese + exame + imagem — "por que não é articular? por que não é deslocamento?".', output: 'Diagnóstico justificado de 2 casos musculares, com descarte explícito dos outros grupos.', fmt: 'online' },
  { n: 14, etapa: 1, bloco: 'Bloco 3 · Imagem + Diagnóstico específico (5 semanas)', titulo: 'Guarda-Chuva: grupo Articular', essencia: 'Os diagnósticos articulares e seus achados típicos de imagem (degeneração, alterações ósseas).', output: 'Diagnóstico justificado de 2 casos articulares.', fmt: 'online' },
  { n: 15, etapa: 1, bloco: 'Bloco 3 · Imagem + Diagnóstico específico (5 semanas)', titulo: 'Guarda-Chuva: grupo Deslocamento de Disco', essencia: 'Com redução × sem redução; os achados de imagem característicos.', output: 'Diagnóstico justificado de 2 casos de deslocamento de disco.', fmt: 'online' },
  { n: 16, etapa: 1, bloco: 'Bloco 3 · Imagem + Diagnóstico específico (5 semanas)', titulo: 'Estudo de caso final + GATE faixa azul', essencia: 'Caso clínico inédito completo (ficha + exame + imagem), corrigido individualmente — a prova de que o aluno diagnostica sozinho.', output: 'Diagnóstico específico justificado — critério de aprovação da faixa azul.', fmt: 'gate' },
  // ETAPA 2 · Bloco 0 — Princípios
  { n: 17, etapa: 2, bloco: 'Bloco 0 · Princípios do Tratamento (2 semanas)', titulo: 'Multimodal, conservador escalonado e risco-benefício', essencia: 'Os 4 princípios filosóficos como critério de decisão — incluindo o próprio erro do Rodrigo ("já perdi a mão do momento de intervir") como caso de calibração.', output: 'Primeira escolha terapêutica escrita pra 1 caso já diagnosticado (revisitada ao fim do bloco pra comparar evolução).', fmt: 'online' },
  { n: 18, etapa: 2, bloco: 'Bloco 0 · Princípios do Tratamento (2 semanas)', titulo: 'Timing de intervenção + Tripé Local aplicado', essencia: 'O critério dos 3-6 meses pra subir o degrau + o tripé local como primeira camada de qualquer plano, independentemente do diagnóstico.', output: 'Plano de intervenção do Tripé Local (dispositivo + consciência de hábito) pra 1 caso.', fmt: 'online' },
  // ETAPA 2 · Bloco 1 — Escada Muscular
  { n: 19, etapa: 2, bloco: 'Bloco 1 · Escada Muscular (6 semanas)', titulo: 'Conservador I: eletroestimulação, laser e liberação miofascial', essencia: 'Modalidades físicas conservadoras — indicação, parâmetros e técnica. [prática supervisionada]', output: 'Checklist de execução + liberação miofascial validada em dupla.', fmt: 'online' },
  { n: 20, etapa: 2, bloco: 'Bloco 1 · Escada Muscular (6 semanas)', titulo: 'Conservador II: controle do bruxismo (vigília e sono)', essencia: 'Biofeedback/eletromiografia, apps de consciência e dispositivo interoclusal — critérios de indicação e ajuste. [prática supervisionada]', output: 'Prescrição completa de controle de bruxismo pra 2 casos (1 de vigília, 1 de sono).', fmt: 'online' },
  { n: 21, etapa: 2, bloco: 'Bloco 1 · Escada Muscular (6 semanas)', titulo: 'Conservador III: fármacos, exercícios e educação em dor', essencia: 'Farmacoterapia básica, exercícios caseiros e a educação em dor como ferramenta terapêutica em si. [prática supervisionada]', output: 'Roteiro de educação em dor + prescrição + protocolo de exercícios pra 1 caso completo.', fmt: 'online' },
  { n: 22, etapa: 2, bloco: 'Bloco 1 · Escada Muscular (6 semanas)', titulo: 'Minimamente invasivo: infiltração anestésica e dry needling', essencia: 'Quando o conservador falha dentro do timing: indicação, técnica, cuidados e contraindicações. [prática supervisionada]', output: 'Protocolo de decisão escrito pra 2 casos que não respondem ao conservador.', fmt: 'online', nota: '⚠️ Marcação capacita × só-teoria a confirmar pelo Rodrigo.' },
  { n: 23, etapa: 2, bloco: 'Bloco 1 · Escada Muscular (6 semanas)', titulo: 'Invasivo: a toxina no lugar certo da escada', essencia: 'A bandeira central do método: por que a toxina é o ÚLTIMO recurso, não o primeiro — "tem onda que é marola e tem onda que é tsunami".', output: 'Parecer escrito comparando casos de uso indevido com o caso de indicação correta.', fmt: 'online' },
  { n: 24, etapa: 2, bloco: 'Bloco 1 · Escada Muscular (6 semanas)', titulo: 'Estudo de caso: plano muscular completo', essencia: 'Integra todo o bloco num plano escalonado do conservador ao invasivo.', output: 'Plano de tratamento escalonado completo da escada muscular, com timing e critério de subida.', fmt: 'caso' },
  // ETAPA 2 · Bloco 2 — Escada Deslocamento de Disco
  { n: 25, etapa: 2, bloco: 'Bloco 2 · Escada Deslocamento de Disco (4 semanas)', titulo: 'Conservador: exercícios de amplitude bucal', essencia: 'Protocolo de exercícios — técnica, frequência, progressão; por que essa escada é mais enxuta. [prática supervisionada]', output: 'Protocolo de exercícios prescrito e demonstrado pra 1 caso.', fmt: 'online' },
  { n: 26, etapa: 2, bloco: 'Bloco 2 · Escada Deslocamento de Disco (4 semanas)', titulo: 'Minimamente invasivo: ácido hialurônico e artrocentese', essencia: 'O que cada procedimento resolve (lubrificação × lavagem articular) e por que exigem equipamento e treinamento específicos. [estudo de caso de indicação]', output: 'Parecer de indicação escrito pra 2 casos.', fmt: 'online', nota: '⚠️ Ácido hialurônico: confirmar com o Rodrigo se entra em prática supervisionada.' },
  { n: 27, etapa: 2, bloco: 'Bloco 2 · Escada Deslocamento de Disco (4 semanas)', titulo: 'Cirúrgico: artroscopia e discopexia — reconhecer o limite', essencia: 'O aluno não executa, mas sabe reconhecer o ponto cirúrgico, explicar ao paciente e encaminhar mantendo a relação terapêutica. [indicação]', output: 'Linha do tempo do caso anotada, com o ponto de encaminhamento marcado e justificado.', fmt: 'online' },
  { n: 28, etapa: 2, bloco: 'Bloco 2 · Escada Deslocamento de Disco (4 semanas)', titulo: 'Estudo de caso: plano completo — deslocamento de disco', essencia: 'Integra o bloco, incluindo o ponto de encaminhamento quando aplicável.', output: 'Plano escalonado completo, com marcação explícita de executa × encaminha.', fmt: 'caso' },
  // ETAPA 2 · Bloco 3 — Escada Articular
  { n: 29, etapa: 2, bloco: 'Bloco 3 · Escada Articular (4 semanas)', titulo: 'Conservador: laserterapia, fármaco e crioterapia', essencia: 'As modalidades conservadoras do grupo articular — indicação, técnica e parâmetros. [prática supervisionada]', output: 'Checklist de execução preenchido pra 1 caso articular, com os 3 recursos parametrizados.', fmt: 'online' },
  { n: 30, etapa: 2, bloco: 'Bloco 3 · Escada Articular (4 semanas)', titulo: 'Minimamente invasivo I: corticoide e artrocentese', essencia: 'Corticoide intra-articular (limites e riscos do uso repetido) + a mesma artrocentese com racional distinto do bloco anterior. [indicação]', output: 'Parecer comparando a indicação de artrocentese nas 2 escadas — entende o racional, não decorou o procedimento.', fmt: 'online' },
  { n: 31, etapa: 2, bloco: 'Bloco 3 · Escada Articular (4 semanas)', titulo: 'Minimamente invasivo II: iPRF e ácido hialurônico', essencia: 'Agregados plaquetários guiados por ultrassom: alta complexidade, fora do escopo prático — "você sai sabendo indicar; a execução é território da mentoria". [indicação]', output: 'Ficha de indicação preenchida pra 1 caso + como explicar ao paciente.', fmt: 'online' },
  { n: 32, etapa: 2, bloco: 'Bloco 3 · Escada Articular (4 semanas)', titulo: 'Invasivo articular + estudo de caso: plano completo', essencia: 'Indicações cirúrgicas (artroscopia, cirurgia aberta, prótese de ATM) em casos de degeneração avançada. [indicação]', output: 'Plano escalonado completo do grupo articular, com executa × encaminha por degrau.', fmt: 'caso' },
  // ETAPA 2 · Bloco 4 — Casos mistos
  { n: 33, etapa: 2, bloco: 'Bloco 4 · Casos mistos (2 semanas)', titulo: 'O paciente real tem mais de um diagnóstico', essencia: 'Sequenciar tratamento quando há sobreposição de grupos — qual degrau tratar primeiro quando há mais de uma escada em jogo.', output: 'Plano de tratamento integrado (multi-diagnóstico) pra 1 caso misto, com sequência justificada.', fmt: 'online' },
  { n: 34, etapa: 2, bloco: 'Bloco 4 · Casos mistos (2 semanas)', titulo: 'Estudo de caso final + GATE faixa roxa', essencia: '2-3 casos mistos inéditos com diagnóstico fechado, corrigidos individualmente pelo Rodrigo.', output: 'Planos escalonados completos com executa × encaminha — critério de aprovação da faixa roxa.', fmt: 'gate' },
  // ETAPA 3 · Bloco 1 — Narrativa da 1ª consulta
  { n: 35, etapa: 3, bloco: 'Bloco 1 · Narrativa da Primeira Consulta (3 semanas)', titulo: 'A consulta de avaliação como ato terapêutico (e comercial)', essencia: 'A narrativa de conversão nasce do próprio método: educar = converter. Como devolver o diagnóstico sem gerar pânico nem minimizar.', output: 'Roteiro de devolutiva de diagnóstico escrito e ensaiado em dupla.', fmt: 'online' },
  { n: 36, etapa: 3, bloco: 'Bloco 1 · Narrativa da Primeira Consulta (3 semanas)', titulo: 'Apresentando o plano com os Dois Tripés como narrativa', essencia: 'Explicar os tripés ao paciente aumenta a adesão — "formar uma dupla, os dois caminharem juntos".', output: 'Áudio/vídeo de 2-3 minutos apresentando o plano de tratamento de 1 caso.', fmt: 'online' },
  { n: 37, etapa: 3, bloco: 'Bloco 1 · Narrativa da Primeira Consulta (3 semanas)', titulo: 'Fechamento: da apresentação ao "sim"', essencia: 'Apresentar o investimento e responder às objeções do paciente ("é caro", "posso pensar") sem pressão agressiva — coerente com o tom educativo.', output: 'Script pessoal de fechamento pra usar na própria clínica na semana seguinte.', fmt: 'online' },
  // ETAPA 3 · Bloco 2 — Captação básica
  { n: 38, etapa: 3, bloco: 'Bloco 2 · Captação Básica (2 semanas)', titulo: 'Treinando a recepção: scripts lead → avaliação', essencia: 'A recepção como primeiro ponto de confiança — scripts pra converter contato em agendamento.', output: 'Script de atendimento pronto pra entregar à própria secretária.', fmt: 'online' },
  { n: 39, etapa: 3, bloco: 'Bloco 2 · Captação Básica (2 semanas)', titulo: 'Posicionamento e indicação', essencia: 'O canal mais barato e imediato de quem está começando — como comunicar a nova competência à própria base e rede.', output: 'Peça de comunicação pronta anunciando a nova competência.', fmt: 'online' },
  // ETAPA 3 · Blocos 3 e 4
  { n: 40, etapa: 3, bloco: 'Bloco 3 · Retenção e Números', titulo: 'Pós-venda, contrato e os controles essenciais do funil', essencia: 'Ler os números (avaliações/mês, conversão, ticket) pra saber se o gargalo é captação, conversão ou execução clínica.', output: 'Planilha de controles preenchida com números reais + meta projetada pros 3 meses pós-formatura.', fmt: 'online' },
  { n: 41, etapa: 3, bloco: 'Bloco 4 · Ponte pra Mentoria + Formatura', titulo: 'Estudo de caso final + GATE formatura', essencia: 'Simulação completa da consulta de avaliação (acolhimento → devolutiva → plano → fechamento) + painel de baseline + cerimônia de faixa final e pitch da mentoria.', output: 'Gravação/condução da consulta completa + planilha apresentada — critério de formatura.', fmt: 'gate' },
],

GRADE_TRANSVERSAIS: [
  { t: 'Ganhos rápidos comerciais desde o Bloco 0', d: 'Elementos agnósticos a DTM (agenda, processos, scripts) — o aluno vê retorno antes de dominar a técnica.' },
  { t: 'Estudo de caso mensal', d: '7 estudos de caso formais (Encontros 7, 16, 24, 28, 32, 34 e 41 — os de 16, 34 e 41 também são gates) — âncora do "aprender fazendo".' },
  { t: 'Gamificação por faixas', d: 'Passagem de faixa ao fim de cada etapa (jiu-jitsu), com marco visível de evolução.' },
  { t: 'Comunidade / grupo ao vivo', d: 'O encontro semanal onde a dúvida de um vira aprendizado de todos.' },
],

/* ─────────────────────── MENTORIA ─────────────────────── */
MENTORIA: {
  html: `
    <div class="alert amarelo">
      <strong>Desenho preliminar — decidir juntos.</strong> A mentoria será montada e vendida ~6 meses após o lançamento da formação, validada primeiro com a base de ex-alunos. Tudo nesta página é direção de trabalho, não produto fechado.
    </div>

    <h2 class="section-title">Pra <span class="ei">quem</span></h2>
    <div class="card">
      <p style="margin:0;"><strong>Duas portas de entrada:</strong> os ~120 ex-alunos especialistas (base quente, formados nas 8 turmas de especialização) + os egressos da formação, que chegam via pitch natural da Etapa 3 — quando a turma 1 concluir, a mentoria já roda pra recebê-la.</p>
    </div>

    <h2 class="section-title">O que <span class="ei">só ela tem</span></h2>
    <ul class="entregas-lista">
      <li><strong>Discussão de casos complexos</strong><em>1:1 e em grupo — o individual que a formação deliberadamente não tem, porque é aqui que o aluno tem caso real na mão.</em></li>
      <li><strong>Procedimentos avançados na prática</strong><em>Artrocentese, agregados plaquetários guiados por ultrassom — o que a formação só apresenta em teoria.</em></li>
      <li><strong>Comercial avançado</strong><em>Máquina de captação completa: redes, Google, tráfego pago, conteúdo, posicionamento em busca por IA, escala e gestão avançada.</em></li>
      <li><strong>Atualizações contínuas</strong><em>A fronteira da evolução terapêutica — o motivo pelo qual o aluno fica.</em></li>
      <li><strong>Parcerias com fabricantes de equipamento</strong><em>Condições exclusivas pros mentorados (backlog, não prometido).</em></li>
    </ul>

    <h2 class="section-title">Natureza e <span class="ei">timeline</span></h2>
    <div class="card">
      <dl class="kv">
        <dt>Natureza</dt><dd><strong>Ambiente de continuidade e renovação</strong> — não "curso que acaba". O aluno fica pelo acesso, pela comunidade e pela fronteira do conhecimento</dd>
        <dt>Timeline</dt><dd>Montada e vendida <strong>~6 meses após o lançamento da formação</strong>, validada primeiro com a base de ex-alunos (condição de fundador)</dd>
        <dt>Hipótese de investimento</dt><dd><strong>~R$ 25 mil/ano</strong> (≈ R$ 2 mil/mês) — a calibrar após a validação com a base</dd>
        <dt>O que justifica renovar</dt><dd>Acesso contínuo a casos, atualizações, comunidade e à máquina comercial que escala — o valor recorrente mora aqui</dd>
      </dl>
    </div>

    <div class="alert">
      <strong>Papel estratégico na esteira:</strong> a mentoria protege a promessa da formação (o que é avançado não infla o produto 1) e cria o degrau natural de continuidade — o pitch dela é feito de dentro da jornada, no Encontro 41, não como "mais uma oferta".
    </div>
  `,
},

/* ─────────────────────── FORMAÇÃO × MENTORIA ─────────────────────── */
COMPARACAO: [
  { c: 'Pra quem', f: 'Clínico geral que não domina DTM — aprende do zero', m: 'Egressos da formação + ex-alunos especialistas (~120, base quente)' },
  { c: 'Objetivo', f: 'Capacitar: diagnosticar, tratar e monetizar', m: 'Escalar: casos complexos, procedimentos avançados e máquina de aquisição' },
  { c: 'Duração', f: '10 meses, turma fechada com início conjunto', m: 'Anual, renovável — ambiente de continuidade' },
  { c: 'Formato', f: 'Encontro semanal ao vivo (online) + 1 imersão presencial + estudos de caso mensais', m: 'Discussão de casos reais (grupo e 1:1) + atualizações contínuas' },
  { c: 'Conteúdo técnico', f: 'As 3 escadas completas, até o nível "executa × encaminha"', m: 'Procedimentos avançados na prática (artrocentese, agregados por ultrassom)' },
  { c: 'Conteúdo comercial', f: 'Básico — converter avaliação, captar por indicação, controlar os números', m: 'Avançado — máquina de captação, tráfego, escala, busca por IA' },
  { c: '1:1', f: 'Não há (direção da call, a confirmar)', m: 'Sim — discussão individual de casos reais' },
  { c: 'Ticket (hipótese)', f: 'R$ 15-20 mil pelos 10 meses', m: '~R$ 25 mil/ano' },
  { c: 'Quando o aluno entra', f: 'No lançamento (turma 1)', m: '~6 meses após o lançamento da formação' },
  { c: 'O que justifica renovar', f: '— (produto com fim: formatura)', m: 'Acesso contínuo à fronteira, comunidade, atualizações e parcerias' },
],

/* ─────────────────────── JORNADA DO ALUNO ─────────────────────── */
JORNADA_NOTA: 'Nomes de fase = PROPOSTA do Experience Architect, a validar com Maiara e Rodrigo. Os títulos comunicam a virada de identidade de cada fase — nada se grava como definitivo sem OK explícito dos dois.',

JORNADA: [
  {
    tipo: 'momento', quando: 'Semana 0 · antes do Encontro 1', nome: 'Momento 0 · Acolhimento', faixas: null, hl: false,
    objetivo: 'O aluno sai da "compra" e entra na "pertença" antes da 1ª aula.',
    vive: ['Recebe boas-vindas e entende o mapa completo da jornada (as 3 fases + faixas)', 'Conhece os colegas de turma (cohort)', 'Recebe o material de apoio inicial (ficha de 40 perguntas, template de mapa mental)', 'Agenda a imersão presencial'],
    ganhos: null,
    marco: null,
    checkpoint: null,
    risco: 'Baixo, mas existe — se o welcome for frio/genérico, quebra a expectativa gerada na venda.',
    antidoto: 'O Rodrigo (ou vídeo dele) recebe pessoalmente, reforça a frase de posicionamento e mostra o percurso completo — o aluno vê o mapa inteiro antes de andar o primeiro passo.',
  },
  {
    tipo: 'fase', quando: 'Encontros 1 a 16 · ~4 meses', nome: 'Fase 1 · "O diagnóstico que ninguém sabe fazer"', proposta: true, faixas: ['branca', 'azul'], hl: false,
    objetivo: 'Deixar de "achar que sabe" DTM e passar a diagnosticar com precisão clínica — anamnese estruturada, exame físico protocolar e leitura de imagem. Sem isso não existe tratamento nem monetização.',
    vive: ['Semanas 1-3: desmonta a crença errada ("DTM é bruxismo") e descobre a demanda que já está na cadeira dele — com os primeiros ganhos rápidos comerciais', 'Semanas 4-7: aplica a ficha de 40 perguntas e conduz anamnese profunda, investigando os 2 tripés', 'Semanas 8-11: IMERSÃO PRESENCIAL em Brasília — a habilidade manual sai da teoria e entra no corpo', 'Semanas 12-16: lê ressonância e diferencia os 3 grupos do guarda-chuva até fechar diagnóstico defensável'],
    ganhos: { tecnico: 'O pacote diagnóstico completo (ficha + anamnese + exame + imagem) que 99,6% dos dentistas do Brasil não têm.', financeiro: 'Ganhos rápidos desde o mês 1 — elementos comerciais agnósticos a DTM geram eficiência antes do domínio técnico; o ROI começa a rodar cedo.', identitario: '"Eu enxergo o que os outros não enxergam" — para de confundir bruxismo com DTM e vê, na própria agenda, pacientes que peregrinaram anos sem resposta.' },
    marco: 'GATE faixa branca → azul (Encontro 16): diagnóstico específico e defensável de um caso inédito completo, corrigido pelo Rodrigo.',
    checkpoint: ['Diagnóstica (entrada): autodiagnóstico escrito dos erros que ele mesmo já cometeu — linha de base do "antes"', 'Formativa: 2 estudos de caso com correção individual (Encontros 7 e 16)', 'Somativa: diagnóstico correto de caso inédito — não "assistiu as aulas", mas "acertou sozinho"', 'Antes/depois: comparação entre o autodiagnóstico do Encontro 1 e o caso final do Encontro 16'],
    risco: 'A fase mais longa e teórica antes da imersão — risco de "cansaço de conteúdo sem ver resultado no bolso", especialmente entre as semanas 4 e 7 (anamnese é "difícil, não simples").',
    antidoto: 'Os ganhos rápidos comerciais do Bloco 0 seguram esse período — o aluno já aplica algo na clínica antes de dominar o diagnóstico. A imersão presencial funciona como recarga de energia exatamente no ponto de maior risco de cansaço.',
  },
  {
    tipo: 'imersao', quando: 'Semanas 8-11 da Fase 1 · 2-3 dias em Brasília', nome: 'Imersão presencial — o marco físico da jornada', faixas: null, hl: true,
    objetivo: 'O momento mais denso da Fase 1: palpação hands-on, sons articulares, medidas de movimento — tudo sob supervisão direta e validação ao vivo do Rodrigo.',
    vive: ['Rotação em estações de prática, em pequenos grupos', 'Só é aprovado quem demonstra a técnica corretamente na frente dele', 'Quebra o ritmo só-online e reconecta o grupo fisicamente'],
    ganhos: null, marco: null, checkpoint: null,
    risco: 'É também o momento mais vulnerável — aprender a palpar sendo avaliado ao vivo exige coragem de expor a própria dificuldade técnica.',
    antidoto: 'Sem competição nem "desafio" na imersão (regra do brief de gamificação) — o formato é supervisão e validação, não disputa.',
  },
  {
    tipo: 'fase', quando: 'Encontros 17 a 34 · ~4-5 meses', nome: 'Fase 2 · "De quem nomeia o problema a quem resolve o problema"', proposta: true, faixas: ['azul', 'roxa'], hl: false,
    objetivo: 'Deixar de "saber nomear" e passar a "saber tratar com julgamento clínico" — plano escalonado pros 3 grupos, sabendo quando executar e quando encaminhar. A fase mais densa da jornada.',
    vive: ['Semanas 1-2: os 4 princípios do método + o critério objetivo de quando subir de degrau', 'Semanas 3-8: a escada MUSCULAR inteira — do conservador à toxina (com a bandeira: ela é o ÚLTIMO recurso)', 'Semanas 9-12: a escada de DESLOCAMENTO DE DISCO — até reconhecer o limite cirúrgico e encaminhar com segurança', 'Semanas 13-16: a escada ARTICULAR — conservador, minimamente invasivo e o reconhecimento do invasivo', 'Semanas 17-18: casos MISTOS — o desafio mais realista, porque o paciente real raramente é caso de livro'],
    ganhos: { tecnico: 'As 3 escadas internalizadas e a marcação clara do que executa × encaminha — nenhum "achismo terapêutico".', financeiro: 'Cada degrau da escada é um procedimento monetizável — o ticket de R$ 4.500-5.000 deixa de ser número abstrato do Rodrigo e vira plano que ELE sabe montar.', identitario: '"Eu não empurro o paciente pra frente — eu resolvo, ou encaminho sabendo por quê." A virada de diagnosticador pra terapeuta.' },
    marco: 'GATE faixa azul → roxa (Encontro 34): plano de tratamento escalonado completo pra 2-3 casos mistos inéditos, com sequência, timing e execução × encaminhamento.',
    checkpoint: ['Formativa: 4 estudos de caso (Encontros 24, 28, 32, 34) — cada escada fecha com plano corrigido individualmente', 'Somativa: plano completo e correto pra casos mistos inéditos — sequência + timing + marcação certas', 'Antes/depois: o registro bruto do Encontro 17 (a escolha terapêutica antes de ver as escadas) revisitado no fim da fase — o aluno se confronta com o próprio ponto de partida'],
    risco: 'A fase mais longa e tecnicamente pesada — sobrecarga cognitiva na virada de uma escada pra outra; e a bandeira anti-botox (Encontro 23) pode gerar fricção com quem já usa toxina no consultório.',
    antidoto: 'Cada escada fecha com estudo de caso próprio — conclusão parcial a cada 4-6 semanas, não só no fim. E o confronto do Encontro 23 é conduzido como o Rodrigo desenhou: "tsunamizinho", não acusação.',
  },
  {
    tipo: 'fase', quando: 'Encontros 35 a 41 · ~2 meses', nome: 'Fase 3 · "De quem sabe tratar a quem sabe cobrar pelo que sabe fazer"', proposta: true, faixas: ['roxa', 'marrom'], hl: false,
    objetivo: 'Transformar a competência clínica em receita — o comercial básico: converter avaliação em tratamento, captar pelos canais mais baratos, reter e controlar os números do próprio funil.',
    vive: ['Semanas 1-3: a consulta de avaliação como ato terapêutico E comercial — devolutiva, plano com os Dois Tripés, fechamento', 'Semanas 4-5: scripts pra própria recepção + comunicação simples de posicionamento/indicação, sem tráfego pago', 'Semanas 6-7: pós-venda e os controles essenciais — o primeiro painel de gestão que ele mesmo vai manter', 'Semana 8: a simulação completa + a faixa final, com o pitch da mentoria como continuidade natural'],
    ganhos: { tecnico: 'Script pessoal de fechamento pronto pra usar na semana seguinte; script de recepção pronto pra treinar a secretária.', financeiro: 'O funil próprio mapeado (avaliação → conversão → ticket) e a meta dos 3 meses seguintes projetada — a promessa "o investimento se paga dentro do ciclo" vira operação concreta.', identitario: '"Eu sei cobrar pelo que sei fazer" — fecha o arco: enxergo o problema (Fase 1), resolvo o problema (Fase 2), monetizo sem culpa (Fase 3).' },
    marco: 'GATE faixa roxa → marrom/formatura (Encontro 41): consulta de avaliação completa conduzida com os scripts construídos + painel de números de baseline apresentado.',
    checkpoint: ['Formativa: scripts entregues e ensaiados em role-play (Encontros 35-38), com feedback antes da aplicação real', 'Somativa: 1ª avaliação cobrada com o script novo e/ou 1º tratamento fechado com a narrativa dos Dois Tripés — dinheiro entrando por causa do que ele aprendeu', 'Métrica do mundo real: painel de baseline com números REAIS da própria clínica + meta projetada pros 3 meses seguintes'],
    risco: 'A fase que expõe o aluno socialmente — role-play de venda é desconfortável pra muito clínico que "não gosta de vender"; risco de recuo emocional na hora de aplicar de verdade.',
    antidoto: 'O roteiro nasce do próprio método (educação antes da intervenção também é o que converte) — não é script de vendedor, é extensão natural do jeito como ele já atende.',
  },
  {
    tipo: 'momento', quando: 'Dentro do Encontro 41', nome: 'Formatura + ponte para a mentoria', faixas: ['marrom'], hl: true,
    objetivo: 'Fechar a jornada com clareza de identidade: "eu era clínico geral perdido em DTM, sou hoje um dentista que diagnostica, trata e cobra por isso".',
    vive: ['Cerimônia de passagem de faixa final, com reconhecimento coletivo diante da turma', 'Apresentação da mentoria como o próximo passo natural — a continuidade de algo que ele viveu por 10 meses, não "mais uma oferta"'],
    ganhos: null, marco: null, checkpoint: null,
    risco: 'Sensação de "acabou, e agora?" — vácuo entre a formatura e a abertura da mentoria (que só roda ~6 meses depois do lançamento).',
    antidoto: 'O painel de baseline já é o "e agora" concreto — o aluno sai com meta de 3 meses pra rodar sozinho; e a comunidade construída em 10 meses sustenta o intervalo até a mentoria abrir.',
  },
],

/* ─────────────────────── GAMIFICAÇÃO · FAIXAS ─────────────────────── */
GAMIFICACAO: {
  status: 'Sistema completo especificado e APROVADO pela consultoria em 04/07 (faixas, marcos e mecânicas). Validação final com o Rodrigo no Marco 02; produção visual (design das faixas, certificados) segue pro brandbook.',
  por_que: 'Gamificação, aqui, não decora a formação com pontuação — ela NOMEIA publicamente uma transformação que já é real e verificável. O aluno não sobe de faixa porque assistiu aula, comentou no grupo ou fez login toda semana: ele sobe porque passou num gate técnico corrigido pelo próprio Rodrigo. A faixa é a linguagem; o gate é a régua. Se a régua ceder uma vez, todas as faixas anteriores ficam suspeitas aos olhos do público mais cético que existe — dentista adulto que já foi enganado por curso raso. E a origem da mecânica é do próprio Rodrigo: faixa roxa, um grau, jiu-jitsu real — não analogia importada de squad de marketing.',
  visao_geral: [
    { faixa: 'branca', nome: 'Faixa Branca', quando: 'Semana 0 · onboarding', diz: 'O ponto de partida, sem gate — o "ainda não sabe" reconhecido sem vergonha.' },
    { faixa: 'azul', nome: 'Faixa Azul', quando: 'Encontro 16 · 16 semanas depois', diz: '"Eu diagnostico."' },
    { faixa: 'roxa', nome: 'Faixa Roxa', quando: 'Encontro 34 · 18 semanas depois', diz: '"Eu trato."' },
    { faixa: 'marrom', nome: 'Faixa Marrom · Formatura', quando: 'Encontro 41 · 7-8 semanas depois', diz: '"Eu cobro pelo que sei."' },
  ],
  nota_marrom: 'Por que marrom, e não preta: no jiu-jitsu real, marrom antecede a preta. Usar "marrom" como faixa de formatura comunica com precisão o que o produto entrega — o aluno está pronto pra atuar, mas a mentoria é o caminho até a maestria plena ("faixa preta"). Ninguém forma faixa preta em 10 meses, e o público técnico vai reconhecer essa honestidade como coerente com o método — o próprio Rodrigo é faixa roxa com um grau, ainda em progressão.',
  graus: {
    intro: 'A Fase 2 (18 semanas) é a mais longa e densa — uma faixa só no fim deixaria o aluno sem reconhecimento formal por 4-5 meses, no bloco mais pesado da jornada. A solução vem do próprio jiu-jitsu: GRAUS na faixa azul, não uma faixa nova. Cada grau amarrado a um estudo de caso mensal que já existe no plano de ensino — não cria avaliação extra. Graus não recebem cerimônia ao vivo (só a faixa recebe): reconhecimento verbal do Rodrigo + registro no painel, preservando o momento alto pros 3 marcos de identidade.',
    rows: [
      { marco: 'Faixa azul, 1º grau', quando: 'Encontro 24 — fim da Escada Muscular', criterio: 'Estudo de caso nº 3 aprovado: plano escalonado completo da escada muscular, com sequência e critério de subida corretos.' },
      { marco: 'Faixa azul, 2º grau', quando: 'Encontro 28 — fim da Escada de Deslocamento de Disco', criterio: 'Estudo de caso nº 4 aprovado, com marcação execução × encaminhamento correta.' },
      { marco: 'Faixa azul, 3º grau', quando: 'Encontro 32 — fim da Escada Articular', criterio: 'Estudo de caso nº 5 aprovado.' },
      { marco: 'Faixa roxa', quando: 'Encontro 34 — gate final da Fase 2', criterio: 'Plano escalonado completo pra 2-3 casos mistos inéditos — cerimônia completa.' },
    ],
  },
  marcos: [
    { faixa: 'branca', nome: 'Faixa Branca (entrada)', faz: 'Nada — é o estado de partida, reconhecido sem vergonha (o Rodrigo abre a Aula 1 com "os dentistas não sabem NADA de DTM").', valida: '—', recebe: 'Faixa branca simbólica no kit de boas-vindas (Momento 0).', sustenta: 'Reduz a vergonha de admitir ignorância — abre espaço psicológico pra aprender do zero sem defensiva.' },
    { faixa: 'azul', nome: 'Graus 1-2-3 da faixa azul', faz: 'Entrega e aprova os estudos de caso mensais 3, 4 e 5 (fechamento de cada escada de tratamento).', valida: 'Rodrigo — correção individual já prevista no plano de ensino.', recebe: 'Reconhecimento verbal em aula + atualização no painel de progresso. Nenhum item físico — o grau é registro, não objeto.', sustenta: 'Ritmo de entrega na fase mais longa e pesada — cada escada fechada é uma vitória visível, não um silêncio de 18 semanas.' },
    { faixa: 'azul', nome: 'Faixa Azul (Encontro 16)', faz: 'Recebe caso clínico inédito (ficha + exame + imagem) e entrega diagnóstico específico defensável nos 3 grupos do guarda-chuva, com justificativa clínica.', valida: 'Rodrigo — correção individual, critério do plano de ensino.', recebe: 'Cerimônia ao vivo diante da turma + faixa azul física ou digital + certificado nominal de "1ª faixa: Diagnóstico" (nome a validar).', sustenta: 'Consolida presença + entrega consistente ao longo da Fase 1 — a faixa reconhece um histórico, não um teste isolado de sorte.' },
    { faixa: 'roxa', nome: 'Faixa Roxa (Encontro 34)', faz: 'Recebe 2-3 casos mistos já diagnosticados e monta o plano de tratamento escalonado completo, com sequência, timing e execução × encaminhamento.', valida: 'Rodrigo — correção individual, critério do plano de ensino.', recebe: 'Cerimônia ao vivo diante da turma + faixa roxa + certificado nominal de "2ª faixa: Tratamento" (nome a validar).', sustenta: 'Consolida aplicação clínica progressiva — a faixa reconhece julgamento clínico treinado, não decoreba de procedimento.' },
    { faixa: 'marrom', nome: 'Faixa Marrom · Formatura (Encontro 41)', faz: 'Grava (ou conduz ao vivo) a simulação completa da consulta de avaliação usando os scripts construídos + apresenta o painel de números de baseline da própria clínica.', valida: 'Rodrigo — critério do plano de ensino.', recebe: 'Cerimônia de formatura ao vivo, com ponte pra mentoria + faixa marrom + certificado de conclusão da Formação + convite formal à mentoria.', sustenta: 'Fecha o ciclo prometido — competência clínica virando receita — e consolida a identidade de "dentista que diagnostica, trata e cobra por isso".' },
  ],
  regra_marcos: 'Regra que atravessa a tabela inteira: nenhuma linha pode ser entregue por tempo, frequência ou "boa vontade". Se o aluno não passou no gate, ele não sobe — mesmo que isso gere desconforto de ficar pra trás na turma.',
  rastreabilidade: [
    { mec: '4 faixas amarradas a gates técnicos reais', motor: 'Desenvolvimento & Conquista · Competência', porque: 'O aluno não pede pra acreditar que evoluiu — ele tem prova objetiva, corrigida por quem entende do assunto.' },
    { mec: 'Graus intermediários na Fase 2', motor: 'Desenvolvimento & Conquista · Competência', porque: 'Resolve o silêncio de 18 semanas sem inventar critério — usa avaliação que já existia (estudo de caso mensal).' },
    { mec: 'Cerimônia diante da turma', motor: 'Influência Social · Pertencimento', porque: 'A estrutura social (cohort, turma fixa) já existe — a gamificação só aproveita, não recria.' },
    { mec: 'Narrativa de virada de identidade por faixa (diagnostica → trata → cobra)', motor: 'Significado & Propósito', porque: 'Conecta as faixas ao propósito maior que o Rodrigo já defende: devolver rigor a uma especialidade tomada por picaretagem.' },
    { mec: 'Painel de números de baseline (Fase 3)', motor: 'Posse & Propriedade (leve) · Autonomia', porque: 'O aluno decide a própria meta a partir dos próprios números — não é imposto.' },
  ],
  rastreabilidade_nota: 'Nenhuma mecânica aciona escassez, imprevisibilidade ou medo de perda como motor. Isso é deliberado — vem do brief estratégico, não é omissão.',
  cerimonia: {
    tom: 'Sóbrio, breve, real. É reconhecimento de competência profissional — não apresentação de prêmio, não hype de lançamento. O modelo emocional correto: uma banca de residência médica anunciando aprovação, ou um professor de jiu-jitsu amarrando a faixa nova no aluno.',
    passos: [
      'A cerimônia acontece DENTRO do encontro ao vivo já programado (não é evento à parte) — nos últimos 15-20 minutos, depois que as correções já foram devolvidas individualmente. A correção detalhada é privada; a cerimônia é reconhecimento coletivo, não hora de dar nota.',
      'Passo 1 · Contexto breve (1-2 min) — o Rodrigo nomeia o que a fase pediu e o que ela significou.',
      'Passo 2 · Chamada individual — cada aluno aprovado é chamado pelo nome. Sem ranking, sem ordem de "melhor pra pior".',
      'Passo 3 · Reconhecimento nomeado (30-60s por aluno) — o Rodrigo diz especificamente o que aquele aluno demonstrou no caso entregue, não elogio genérico. É isso que dá peso real ao momento.',
      'Passo 4 · Entrega simbólica — atualização visível da faixa no painel do aluno + certificado formal por e-mail/área de membros em prazo definido.',
      'Passo 5 · Fechamento coletivo (1-2 min) — o Rodrigo nomeia o que vem a seguir. Nunca fecha em tom de "chegou lá, terminou" quando ainda há caminho — só no Encontro 41 esse tom muda, porque ali é formatura de fato.',
    ],
    falas: [
      { marco: 'Encontro 16 · passagem pra faixa azul', texto: '"Vocês passaram os últimos quatro meses aprendendo o que 99,6% dos dentistas do Brasil nunca vão aprender: a enxergar o que está na cadeira deles todo dia e eles não veem. Quem eu vou chamar agora entregou um diagnóstico específico, defensável, num caso que nunca tinha visto antes. Isso é faixa azul: vocês saem daqui sabendo diagnosticar de verdade — não achando que sabem. A partir de agora, a régua muda: vocês não vão só nomear o problema, vão aprender a resolver."' },
      { marco: 'Encontro 34 · passagem pra faixa roxa', texto: '"Faixa roxa, no jiu-jitsu, é quando você para de só defender e começa a atacar com critério. Foi exatamente isso que vocês fizeram: passaram pelas três escadas — muscular, disco, articular — e agora sabem montar um plano de tratamento completo, sabendo quando executar e quando encaminhar. Isso não é decoreba de procedimento. É julgamento clínico. O que falta agora é a parte que a maioria de vocês nunca teve coragem de aprender: cobrar pelo que sabem fazer."' },
      { marco: 'Encontro 41 · formatura (faixa marrom)', texto: '"Há dez meses, vocês entraram aqui sem saber diferenciar bruxismo de DTM. Hoje vocês diagnosticam com precisão, montam plano de tratamento escalonado e sabem conduzir uma consulta de avaliação do acolhimento ao fechamento. Isso é faixa marrom. Eu mesmo sou faixa roxa, um grau, e não tenho pressa nenhuma de fingir que cheguei no topo. Vocês também não chegaram — chegaram no ponto de atuar com solidez e continuar evoluindo. O que vem depois é o caminho até a faixa preta. É a mentoria. Quem quiser continuar essa faixa comigo, eu quero continuar."' },
    ],
    nota: 'As falas são ESQUELETO — o Rodrigo adapta ao próprio jeito de falar no dia. O inegociável: nomear o que o aluno demonstrou (não elogio vago), manter o jiu-jitsu como fio condutor, e nunca usar linguagem de "conquista desbloqueada" ou tom de evento de vendas.',
  },
  ainda_nao: {
    principio: '"Ainda não é faixa azul" ≠ "você reprovou". Reprovação é veredito fechado; "ainda não" é estado transitório com caminho de ação. No jiu-jitsu real, ninguém "reprova" o exame de faixa — o professor diz "ainda não é a hora", e o aluno continua treinando. A régua é dura, mas a comunicação preserva a competência percebida e dá caminho claro, sem humilhar e sem infantilizar.',
    nunca: [
      'Anunciar publicamente, na cerimônia coletiva, quem não passou — a cerimônia só chama quem foi aprovado; quem não passou recebe a conversa em separado, nunca durante o momento coletivo.',
      'Usar a palavra "reprovado" ou qualquer linguagem de exame escolar.',
      'Comparar o aluno com os colegas que passaram.',
      'Deixar o aluno sem prazo ou sem plano — "ainda não" sem rota de recuperação vira limbo, que é pior que reprovação franca.',
    ],
    passos: [
      'Passo 1 · Nomear o que já está certo — todo caso entregue tem acerto parcial; começar por aí, com especificidade real.',
      'Passo 2 · Nomear o gap com precisão clínica — a mesma linguagem técnica do feedback que o aluno já recebeu ao longo da fase ("aqui você confundiu X com Y, é por aqui que fecha").',
      'Passo 3 · Rota de recuperação com prazo definido — nova entrega em 2-3 semanas, com foco só no gap; sem repetir a fase inteira, sem refazer o que já foi aprovado.',
      'Passo 4 · Nomear o "ainda" explicitamente — "quando você resolver X, a faixa está esperando por você; ninguém aqui trava por burocracia."',
    ],
    fala: '"Você acertou a leitura do exame físico e identificou corretamente o componente muscular — a anamnese estruturada já entrou pra valer no seu jeito de trabalhar. Onde ainda precisa de ajuste é na diferenciação entre deslocamento de disco com e sem redução. Isso não é reprovação, é ainda não. Me manda um novo caso em duas semanas, focando só nessa diferenciação — não precisa refazer o resto, que já está sólido. Quando fechar isso, a faixa azul está esperando por você."',
    painel: 'No painel do aluno, o status "ainda não" usa linguagem neutra e de continuidade — nunca vermelho de erro, nunca ícone de X. A faixa atual permanece visível e ativa, com indicação discreta de "próxima entrega: [data]" — sem marcador de falha.',
  },
  aparece: {
    ve: [
      'Faixa atual sempre visível — elemento fixo na área de membros, com a cor de referência (branco, azul, roxo, marrom).',
      'Graus da faixa azul como pequenas marcações — barras discretas no "fecho" da faixa visual, como o próprio jiu-jitsu marca; sem contador gamificado.',
      'Linha do tempo da jornada — as 3 fases + faixas em sequência, com a posição atual do aluno (reforça o mapa completo do Momento 0).',
      'Data/status da próxima entrega quando aplicável — informação, não contador regressivo ansiogênico.',
      'Certificado nominal por faixa — documento formal a cada passagem, reforçando a seriedade profissional do reconhecimento.',
    ],
    nao_ve: [
      'Os nomes técnicos das mecânicas ou qualquer linguagem de "gamificação".',
      'Pontuação numérica cumulativa, ranking ou comparação direta com colegas.',
      'Qualquer indicador de "aluno mais avançado" × "mais atrasado" — cada aluno vê só a própria jornada.',
      'Streak, contador de dias consecutivos ou indicador de frequência/presença.',
    ],
  },
  visual: {
    certo: 'Registro de credencial profissional — medalha de conclusão de residência médica, diploma de faixa de arte marcial real, insígnia de patente. Tipografia séria, cores sólidas e reais (branco, azul, roxo, marrom — as cores das faixas de jiu-jitsu, não paleta "gamificada" com gradiente neon).',
    errado: 'Ícone de troféu, estrela, medalha dourada brilhante, confete, mascote — qualquer elemento que lembre conquista de aplicativo de celular ou jogo mobile.',
    referencia: 'O próprio Rodrigo mostrando a faixa roxa física dele durante a call é a referência mais autêntica que existe — se possível, usar foto real dele de kimono na comunicação da formatura.',
  },
  anti_armadilhas_confirma: [
    { el: 'Streak de presença/login', pq: 'Não existe nenhum contador de frequência no sistema. Faltar 1 encontro por atendimento clínico não afeta faixa nem grau.' },
    { el: 'Pontos por participação/comentário no grupo', pq: 'Nenhuma mecânica de pontuação social existe. Grau e faixa vêm exclusivamente de estudo de caso corrigido.' },
    { el: 'Leaderboard entre alunos (ranking cru)', pq: 'O painel mostra só a própria jornada — nenhuma comparação direta ou ranking entre colegas.' },
    { el: 'Badges por microtarefas ("assistiu vídeo")', pq: 'Não existem. Os únicos reconhecimentos são faixa e grau, ambos amarrados a gate técnico real.' },
    { el: 'Elementos visuais lúdicos (confete, mascote, emojis)', pq: 'Diretriz visual explícita proíbe — registro de credencial profissional, não de app gamificado.' },
    { el: 'Competição/desafios na imersão presencial', pq: 'A imersão (E9-E10) não recebe nenhuma mecânica de faixa, grau ou competição — segue como prática supervisionada pura.' },
  ],
  regras_operacionais: [
    'Anti-inflação de faixa: nenhuma exceção de "quase passou" — o gate é binário (passou ou ainda não).',
    'Anti-inflação: nenhum ajuste de régua por pressão de turma ou proximidade da formatura — se acontecer uma vez, a credibilidade de todas as faixas desmorona.',
    'O Rodrigo (ou critério que ele validar) é o único validador dos 3 gates principais — correção de gate não é delegada a terceiros sem aval explícito dele.',
    'Anti-elitização: o fechamento da cerimônia fala do que vem a seguir pra turma como grupo — nunca separa publicamente "os que avançam" dos "que ficaram pra trás".',
    'Anti-elitização: a conversa de "ainda não" é sempre privada — nunca vira argumento de exclusão social dentro da turma.',
  ],
  materiais: [
    { material: 'Identidade visual das 4 faixas (cores, tipografia, aplicação)', resp: 'Direção de marca', dep: 'Diretriz de sobriedade deste sistema' },
    { material: 'Certificado nominal por faixa (template PDF)', resp: 'Direção de marca + construção da ferramenta', dep: 'Identidade visual aprovada' },
    { material: 'Painel de progresso do aluno (faixa atual, graus, linha do tempo, próxima entrega)', resp: 'Construção da ferramenta', dep: 'Especificação deste sistema' },
    { material: 'Registro interno de aprovação de gate (uso do Rodrigo/equipe)', resp: 'Construção da ferramenta', dep: 'Especificação deste sistema' },
    { material: 'Roteiro/resumo das falas-modelo pros Encontros 16, 34 e 41', resp: 'Pronto — está nesta página', dep: '—' },
    { material: 'Kit de onboarding com a faixa branca simbólica (Momento 0)', resp: 'Direção de marca + construção da ferramenta', dep: 'Identidade visual aprovada' },
  ],
},

};
