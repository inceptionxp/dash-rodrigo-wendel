/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   Dados do projeto — conteúdo editável conforme andamento.
   Status: planejado · aguard-material · em-dev · aguard-aprov · aprovado
   ═══════════════════════════════════════════════════════════════════ */

const PROJETO = {
  cliente: 'Dr. Rodrigo Wendel',
  produto: 'O Salto · Consultoria Estratégica e Operacional',
  data_inicio: '29 de junho de 2026',
  data_fim_prevista: '25 de setembro de 2026',
  prazo_total: 'até 60 dias corridos após a Validação da Estratégia (Marco 02)',
  proposta_url: 'https://acervo.inceptionxp.com/proposta-rodrigo',
  contrato_url: '../../contrato/contrato-rodrigo-wendel.pdf',
};

const MARCOS = [
  {
    id: 'marco-1',
    n: '01',
    titulo: 'Conversa de Levantamento',
    descricao: 'Extração inicial, alinhamento de expectativas, envio dos materiais existentes e definição do Cronograma de Marcos.',
    prazo: 'Realizada em 02/07/2026',
    status: 'aprovado',
    detalhes: [
      '✓ Call de levantamento realizada em 02/07/2026 (2h16) — transcrita e documentada',
      '✓ Posicionamento calibrado: FORMAÇÃO para dentistas que não dominam DTM; mentoria vem depois, para ex-alunos',
      '✓ Direção de formato: encontros semanais em grupo + hands-on presencial em Brasília, sem 1:1 na formação',
      '✓ Documentação do briefing gerada: DNA do Expert, DNA do Aprendiz, DNA do Método (ver menu Documentação)',
      'Pendente: envio dos materiais complementares (lista priorizada enviada no WhatsApp)',
    ],
  },
  {
    id: 'marco-2',
    n: '02',
    titulo: 'Validação da Estratégia',
    descricao: 'Apresentação da estratégia da campanha (método, posicionamento, oferta, naming e funil) para revisão e aprovação do Rodrigo antes do início da produção.',
    prazo: 'Até 15 dias úteis após a Conversa de Levantamento',
    status: 'planejado',
    detalhes: [
      'Reunião síncrona obrigatória — ponto-chave de alinhamento',
      'Garantia ativa: devolução integral em 5 dias úteis se incompatível com expectativa',
      'Aprovação aqui destrava o início da fase de produção',
    ],
  },
  {
    id: 'marco-3',
    n: '03',
    titulo: 'Configuração Operacional',
    descricao: 'Setup das ferramentas, integrações e automações. Configuração do CRM, das páginas no domínio e do fluxo automatizado de captação → reunião → fechamento.',
    prazo: 'Durante a fase de produção',
    status: 'planejado',
    detalhes: [
      'Fase assíncrona com validações pontuais',
      'CRM: opção recomendada — CRM da Funnel Labs (grátis por 3 meses)',
      'Hospedagem: Hostinger Premium ou Business',
      'Integrações: formulário, CRM, WhatsApp, agendamento',
    ],
  },
  {
    id: 'marco-4',
    n: '04',
    titulo: 'Entrega Final',
    descricao: 'Passagem completa do projeto, treinamento da Maiara para Rodrigo operar e disponibilização desta dashboard organizada com todas as entregas.',
    prazo: 'Conforme cronograma definido na Validação',
    status: 'planejado',
    detalhes: [
      'Reunião síncrona de handoff',
      'Treinamento síncrono ou assíncrono',
      'Início do período de suporte (30 dias corridos) após treinamento',
    ],
  },
];

const BLOCOS = [
  {
    id: 'bloco-1',
    n: '01',
    titulo: 'Consultoria de Método e Produto',
    subtitulo: 'A inteligência estratégica que sustenta tudo',
    valor_mercado: 'R$ 22.000',
    status: 'em-dev',
    descricao: 'O coração da entrega. Aqui a gente define quem é o dentista ideal, qual é o método autoral, qual o formato da formação, a oferta completa e a estratégia da campanha. Sem isso, o resto é só embalagem.',
    entregas: [
      {titulo: 'Pesquisa aprofundada de mercado', detalhe: '4 relatórios: mercado DTM, concorrência em formações, perfil do aprendiz e rotas de certificação — síntese no menu Documentação', status: 'em-dev'},
      {titulo: 'Perfil do dentista ideal', detalhe: 'Dores, motivações, processo de decisão, linguagem que ele usa — ver DNA do Aprendiz', status: 'em-dev'},
      {titulo: 'Definição de posicionamento', detalhe: 'Decidido na call de 02/07: formação para dentistas que não dominam DTM — formaliza no Marco 02', status: 'aguard-aprov'},
      {titulo: 'Definição de nome', detalhe: 'Nome da empresa (braço educacional), do Instagram novo e da formação', status: 'planejado'},
      {titulo: 'Estruturação do método autoral', detalhe: 'Pilares, frameworks, jornada de transformação — ver DNA do Método (aguarda materiais do Rodrigo pra fechar)', status: 'em-dev'},
      {titulo: 'Formato dos encontros', detalhe: 'Direção definida na call: semanal em grupo + presencial hands-on, sem 1:1 na formação', status: 'em-dev'},
      {titulo: 'Régua da formação e onboarding', detalhe: 'Arquitetura de 10 meses em 3 etapas definida (ver D5) — cronograma semana a semana aguarda lista de conteúdos do Rodrigo', status: 'em-dev'},
      {titulo: 'Oferta completa', detalhe: 'Escopo, duração e faixa de investimento em estudo (D5) — bônus, promessa e garantia no Marco 02', status: 'em-dev'},
      {titulo: 'Documento mestre de estratégia da campanha', detalhe: 'Orienta todas as peças que vêm depois — pré-estrutura da proposta do produto em construção', status: 'em-dev'},
    ],
  },
  {
    id: 'bloco-2',
    n: '02',
    titulo: 'Brandbook',
    subtitulo: 'A identidade do seu braço educacional',
    valor_mercado: 'R$ 5.000',
    status: 'planejado',
    descricao: 'O que vai estampar a mentoria, o Instagram novo, as peças, tudo. Direção visual e verbal da marca.',
    entregas: [
      {titulo: 'Nome aplicado e manifesto', detalhe: 'O nome ancorado no posicionamento e o porquê da marca em texto', status: 'planejado'},
      {titulo: 'Moodboard', detalhe: 'Direção visual de referência antes da aplicação na identidade', status: 'planejado'},
      {titulo: 'Identidade visual', detalhe: 'Paleta, tipografia, logo e variações', status: 'planejado'},
      {titulo: 'Tom de voz e diretrizes verbais', detalhe: 'Como a marca fala: vocabulário, frases de marca, o que evitar', status: 'planejado'},
    ],
  },
  {
    id: 'bloco-3',
    n: '03',
    titulo: 'Conteúdo Orgânico — Instagram novo',
    subtitulo: 'O perfil dedicado ao braço educacional',
    valor_mercado: 'R$ 4.000',
    status: 'planejado',
    descricao: 'O Instagram pessoal (@rodrigowendeldtm) segue com a agência atual. Esse aqui é o novo, dedicado à mentoria e ao curso futuro.',
    entregas: [
      {titulo: 'Estratégia editorial', detalhe: 'Pilares de conteúdo, frequência, formatos prioritários', status: 'planejado'},
      {titulo: '10 roteiros de Reels', detalhe: 'Copy + estrutura visual prontos pra gravação', status: 'planejado'},
      {titulo: '5 carrosséis', detalhe: 'Copy + design finalizados', status: 'planejado'},
      {titulo: '10 sequências de Stories para social selling', detalhe: 'Sequências completas para conversão de aplicações', status: 'planejado'},
    ],
  },
  {
    id: 'bloco-4',
    n: '04',
    titulo: 'Páginas do Funil',
    subtitulo: 'A captação, qualificação e venda',
    valor_mercado: 'R$ 10.000',
    status: 'planejado',
    descricao: 'Todas as páginas do funil em copy + design + implementação. Prontas pra rodar.',
    entregas: [
      {titulo: 'Página de captação / aplicação', detalhe: 'Estrutura de conversão para entrada do dentista no funil', status: 'planejado'},
      {titulo: 'Formulário de qualificação', detalhe: 'Perguntas que filtram perfil e qualificam reunião', status: 'planejado'},
      {titulo: 'Página de obrigado com agendamento', detalhe: 'Integração direta com calendário pra marcar reunião', status: 'planejado'},
      {titulo: 'Página de venda da mentoria', detalhe: 'Depoimentos, FAQ, oferta detalhada, fechamento estruturado', status: 'planejado'},
    ],
  },
  {
    id: 'bloco-5',
    n: '05',
    titulo: 'Criativos',
    subtitulo: 'Tráfego pago pra ampliar a lista',
    valor_mercado: 'R$ 4.000',
    status: 'planejado',
    descricao: 'As peças de tráfego pago que ampliam a lista e mantêm o funil cheio durante e depois do lançamento.',
    entregas: [
      {titulo: '10 criativos estáticos para tráfego pago', detalhe: 'Copy + design finalizados, formatos feed e story', status: 'planejado'},
      {titulo: '5 roteiros de criativos em vídeo para tráfego', detalhe: 'Copy + roteiro estruturados pra gravação', status: 'planejado'},
    ],
  },
  {
    id: 'bloco-6',
    n: '06',
    titulo: 'Materiais de Venda',
    subtitulo: 'Da aplicação ao contrato assinado',
    valor_mercado: 'R$ 4.000',
    status: 'planejado',
    descricao: 'Tudo que você precisa pra encantar o dentista certo, conduzir a reunião e fechar a venda. Sem improviso.',
    entregas: [
      {titulo: 'Scripts de WhatsApp', detalhe: 'Convocação, follow-up, marcação de reunião, no-show, quebra de objeções', status: 'planejado'},
      {titulo: 'Página de agendamento configurada', detalhe: 'Google Calendar / Calendly integrado às páginas', status: 'planejado'},
      {titulo: 'Pitch deck da mentoria', detalhe: 'PowerPoint + PDF pra reunião 1:1', status: 'planejado'},
      {titulo: 'Roteiro de condução da reunião', detalhe: 'Estrutura passo a passo, perguntas-chave e fechamento', status: 'planejado'},
    ],
  },
  {
    id: 'bloco-7',
    n: '07',
    titulo: 'Setup, Infraestrutura e Operação',
    subtitulo: 'A máquina configurada pra rodar com autonomia',
    valor_mercado: 'R$ 4.000',
    status: 'planejado',
    descricao: 'Tudo configurado, integrado e documentado pra você operar o funil com autonomia depois da entrega.',
    entregas: [
      {titulo: 'Setup do CRM', detalhe: 'Recomendação: CRM da Funnel Labs (grátis por 3 meses) ou Full Funnel. Pipeline: Aplicação → Qualificação → Reunião agendada → Reunião feita → Fechado/Perdido', status: 'planejado'},
      {titulo: 'Configuração de domínio e hospedagem', detalhe: 'Recomendação: Hostinger Premium (R$ 130-280/ano com domínio grátis no 1º ano)', status: 'planejado'},
      {titulo: 'Automações e integrações', detalhe: 'Formulário, CRM, WhatsApp e agendamento conectados de ponta a ponta', status: 'planejado'},
      {titulo: 'Orientações de gestão do fluxo', detalhe: 'Rotinas diárias e métricas-chave para acompanhar', status: 'planejado'},
      {titulo: 'Guia de condução das reuniões de venda', detalhe: 'Estrutura, perguntas-chave e fechamento prontos pra usar', status: 'planejado'},
    ],
  },
];

const MATERIAIS_PENDENTES = [
  {categoria: '⚡ Prioritário — recebido & pendente (atualizado 03/07)', itens: ['✓ Números de autoridade — recebido (30 anos, +8.000 pacientes, +95% melhora, R$1M/ano)', '✓ Credenciais e formação — recebido (UNESP 2000, UNIFESP 2001-2004, fellowship Zurique 2013)', '✓ Jargões e crenças-âncora — recebido', '✓ Temas da parte comercial — recebido (triagem básico × avançado na Pré-estrutura D5)', '✓ Perfil da concorrente do "MEC online" — recebido e analisado', '⏳ Lista de conteúdos da etapa de DIAGNÓSTICO', '🟡 As 3 escadas de tratamento — RECEBIDAS (03/07); falta só marcar capacita × só teoria','⏳ Material/aula gravada dos dois tripés (sistêmico e local)', '⏳ Vídeo-depoimento da paciente da peregrinação', '⏳ Nome da consultora high ticket (a dos vídeos)']},
  {categoria: '01 · Pessoal e Expert', itens: ['Trajetória profissional resumida', 'Fotos profissionais (retrato, consultório, casual)', 'Bio curta e longa', 'Lista de credenciais e títulos', 'Vídeos seus falando do assunto (2-3 amostras)', 'Histórias marcantes de casos clínicos']},
  {categoria: '02 · Produto Atual', itens: ['Material da parceria atual do curso DTM (ementa, apresentações, vídeos)', 'Depoimentos de alunos do curso atual', 'Histórico de vendas (alunos, ticket, conversão)', 'Material da pós-graduação para calibrar limites', 'Tabela de preços e produtos atuais']},
  {categoria: '03 · Pesquisa e Mercado', itens: ['Pesquisas com alunos anteriores', 'Dados de mercado que conhece', 'Conhecimento sobre concorrentes em DTM', 'Objeções recorrentes', 'Linguagem do público (prints de WhatsApp/comentários)']},
  {categoria: '04 · Público e Leads', itens: ['Lista quente exportada (CSV)', 'Segmentação da lista', 'Histórico de campanhas (se houver)', 'Acessos às ferramentas onde a lista está']},
  {categoria: '05 · Identidade Visual', itens: ['Logo do "Curso DTM" atual', 'Paleta de cores e tipografia atuais', 'Manual de marca (se existir)', 'Referências visuais que gosta (5-10 perfis/sites)', 'Anti-referências']},
  {categoria: '06 · Conteúdo e Instagram', itens: ['Acesso de leitura ao @rodrigowendeldtm', 'Acesso ao @cursodtm parado', 'Stories antigos salvos', 'Reels e posts que mais performaram', 'Contatos da agência atual', 'Conteúdo educacional avulso']},
  {categoria: '07 · Técnico e Acessos', itens: ['Domínio (se possui)', 'Hospedagem atual', 'CRM atual', 'Conta Meta Ads e Google Ads', 'E-mail profissional', 'WhatsApp Business', 'Calendário (Google ou outro)']},
];

const VALIDACOES = [
  {item: 'Proposta comercial', status: 'aprovado', data: '22/06/2026'},
  {item: 'Contrato', status: 'aprovado', data: '22/06/2026'},
  {item: 'Pagamento (12x R$ 1.447 Assiny)', status: 'aprovado', data: '22/06/2026'},
  {item: 'Marco 01 · Conversa de Levantamento', status: 'aprovado', data: '02/07/2026 · call de 2h16'},
  {item: 'Briefing extraído e documentado (Expert · Aprendiz · Método)', status: 'aprovado', data: '02/07/2026 · via call (substituiu o formulário)'},
  {item: 'Pesquisas expandidas (concorrência, aprendiz, certificação)', status: 'aprovado', data: '02/07/2026 · síntese no menu Documentação'},
  {item: 'Materiais complementares enviados (lista priorizada)', status: 'aguard-material', data: 'Aguardando Rodrigo'},
  {item: 'Pré-estrutura da proposta do produto (D5)', status: 'aguard-aprov', data: 'Publicada em 02/07 · validar com Rodrigo'},
  {item: 'Marco 02 · Validação da Estratégia', status: 'planejado', data: 'Após materiais + pré-estrutura'},
];

const STATUS_LABELS = {
  'planejado': 'Planejado',
  'aguard-material': 'Aguardando material',
  'em-dev': 'Em desenvolvimento',
  'aguard-aprov': 'Aguardando aprovação',
  'aprovado': 'Aprovado e entregue',
};

window.DASH = { PROJETO, MARCOS, BLOCOS, MATERIAIS_PENDENTES, VALIDACOES, STATUS_LABELS };
