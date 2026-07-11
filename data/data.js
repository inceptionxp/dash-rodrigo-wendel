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
      '✓ Posicionamento calibrado: FORMAÇÃO para dentistas que não dominam DTM (mentoria vem depois, para ex-alunos) · formato semanal em grupo + hands-on presencial em Brasília, sem 1:1',
      '✓ Briefing documentado: cliente ideal, diferenciais e autoridade, método (ver seção Extração da Consultoria)',
      'Pendente: envio dos materiais complementares — checklist vivo na página Acompanhamento',
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
      {titulo: 'Pesquisa aprofundada de mercado', detalhe: '4 relatórios: mercado DTM, concorrência em formações, perfil do aprendiz e rotas de certificação — documentados na página Pesquisas', status: 'em-dev'},
      {titulo: 'Perfil do dentista ideal', detalhe: 'Dores, motivações, processo de decisão, linguagem que ele usa — ver Cliente Ideal', status: 'em-dev'},
      {titulo: 'Definição de posicionamento', detalhe: 'Decidido na call de 02/07: formação para dentistas que não dominam DTM — formaliza no Marco 02', status: 'aguard-aprov'},
      {titulo: 'Definição de nome', detalhe: 'Nome da empresa (braço educacional), do Instagram novo e da formação', status: 'planejado'},
      {titulo: 'Estruturação do método autoral', detalhe: 'Pilares, frameworks, jornada de transformação — ver Método e Frameworks (aguarda materiais do Rodrigo pra fechar)', status: 'em-dev'},
      {titulo: 'Formato dos encontros', detalhe: 'Direção definida na call: semanal em grupo + presencial hands-on, sem 1:1 na formação', status: 'em-dev'},
      {titulo: 'Régua da formação e onboarding', detalhe: 'Plano de ensino completo: 41 encontros aula a aula (ver Grade · 41 Encontros), 10 meses em 3 etapas. Marcação capacita × só-teoria confirmada em 04/07 (só o iPRF a fechar)', status: 'aguard-aprov'},
      {titulo: 'Oferta completa', detalhe: 'Escopo, duração e faixa de investimento em estudo (ver página Oferta) — bônus, promessa e garantia no Marco 02', status: 'em-dev'},
      {titulo: 'Documento mestre de estratégia da campanha', detalhe: 'Orienta todas as peças que vêm depois — estrutura do produto em construção', status: 'em-dev'},
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

/* ─────────────────────── ACOMPANHAMENTO ───────────────────────
   Lógica: item recebido/aprovado NUNCA fica em "pendente" — vai pro
   histórico. Pendências do Rodrigo têm checkbox com persistência local. */

const ACOMPANHAMENTO = {

  // Pendente do Rodrigo — grupos com slug estável (base do id do checkbox)
  pendente_rodrigo: [
    {
      slug: 'setup-marca', grupo: 'Setup da marca (nomes definidos) — ver Guia de Setup', aberto: true,
      itens: [
        {t: 'Registrar os domínios: academiadtm.com.br + viverdedtm.com.br', d: 'Ambos livres na última checagem — registrar HOJE no registro.br (~R$40/ano cada), em nome do CNPJ. É o mais barato e o mais urgente.'},
        {t: 'Iniciar o registro da marca Academia DTM no INPI (com advogado)', d: 'Registrar a marca MISTA (nome + logo Pulso) — "Academia DTM" isolada é marca fraca. Classe 41 (educação). Exame leva meses; começar logo garante a data. Anda junto com a identidade visual.'},
        {t: 'Renomear o Instagram @cursodtm → @academiadtm', d: '@academiadtm está livre. Renomear preserva seguidores e histórico. Fazer depois do logo Pulso pronto (foto/bio novas). Passo a passo no Guia de Setup.'},
      ],
    },
    {
      slug: 'prio', grupo: 'Prioritário — destrava a produção', aberto: true,
      itens: [
        {t: 'Enviar o material/aula gravada dos dois tripés (sistêmico e local)', d: 'Fortalece o Encontro 3 — pode virar aula invertida (aluno assiste antes, o encontro vira discussão). Obs.: a aula recebida em 07/07 é a COMERCIAL (abordagem de venda) — esta, técnica dos tripés, ainda falta.'},
        {t: 'Validar a estrutura do produto pelos comentários da dashboard', d: '4 pontos em aberto: divisão das etapas (4 + 4-5 + 2 meses) · faixa de investimento · formato presencial (1 obrigatório + 2 opcionais) · desenho da mentoria como continuidade.'},
      ],
    },
    {
      slug: 'marketing', grupo: 'Importante — entra na fase de materiais de venda', aberto: true,
      itens: [
        {t: 'Autorizações de uso dos depoimentos (pacientes e alunos)', d: 'Chegaram em 07/07: 4 depoimentos de PACIENTES em vídeo (Raquel, Carol, Maria Alice + 1) — falta a autorização de imagem de cada um pra uso público com identificação. Os depoimentos de ALUNOS são do contexto do Instituto Aria (parceria a desfazer) — confirmar o direito de uso antes de publicar. Ainda pendente: o vídeo-depoimento da paciente peregrina citada na call (pode ser um destes ou um 5º caso).'},
      ],
    },
    {
      slug: 'pessoal', grupo: 'Pessoal e expert', aberto: false,
      itens: [
        {t: 'Trajetória profissional resumida'},
        {t: 'Fotos profissionais (retrato, consultório, casual)'},
        {t: 'Bio curta e longa'},
        {t: 'Vídeos falando do assunto (2-3 amostras)'},
      ],
    },
    {
      slug: 'produto-atual', grupo: 'Produto atual', aberto: false,
      itens: [
        {t: 'Material da parceria atual do curso (ementa, apresentações, vídeos)'},
        {t: 'Histórico de vendas (alunos, ticket, conversão)'},
        {t: 'Material da pós-graduação para calibrar limites'},
        {t: 'Tabela de preços e produtos atuais'},
      ],
    },
    {
      slug: 'mercado', grupo: 'Pesquisa e mercado', aberto: false,
      itens: [
        {t: 'Pesquisas com alunos anteriores'},
        {t: 'Objeções recorrentes que ele ouve dos leads'},
        {t: 'Linguagem do público (prints de WhatsApp/comentários)'},
      ],
    },
    {
      slug: 'leads', grupo: 'Público e leads', aberto: false,
      itens: [
        {t: 'Lista quente exportada (CSV) + segmentação'},
        {t: 'Histórico de campanhas (se houver)'},
        {t: 'Acessos às ferramentas onde a lista está'},
      ],
    },
    {
      slug: 'visual', grupo: 'Identidade visual', aberto: false,
      itens: [
        {t: 'Logo, paleta e tipografia atuais (manual de marca, se existir)'},
        {t: 'Referências visuais que gosta (5-10 perfis/sites)'},
        {t: 'Anti-referências (o que NÃO quer parecer)'},
      ],
    },
    {
      slug: 'conteudo', grupo: 'Conteúdo e Instagram', aberto: false,
      itens: [
        {t: 'Acesso de leitura ao @rodrigowendeldtm'},
        {t: 'Acesso ao perfil do curso parado'},
        {t: 'Reels e posts que mais performaram + stories antigos salvos'},
        {t: 'Contatos da agência atual'},
      ],
    },
    {
      slug: 'tecnico', grupo: 'Técnico e acessos', aberto: false,
      itens: [
        {t: 'Domínio e hospedagem atuais (se possui)'},
        {t: 'CRM atual + contas Meta Ads e Google Ads'},
        {t: 'E-mail profissional, WhatsApp Business e calendário'},
      ],
    },
  ],

  // Como enviar (regra contratual)
  regra_envio: 'Pasta única no Google Drive compartilhada com consultorianotion@gmail.com. Materiais via WhatsApp ou e-mail não contam como envio oficial (Cláusula 3.1.c) — e envios parciais não iniciam a fase de produção (Cláusula 4.4). O que não tiver, marcar "não tenho" e mandar referências.',

  // Pendente da consultoria
  pendente_consultoria: [
    {t: 'Naming: empresa (braço educacional), formação e Instagram novo', d: 'Em pesquisa — nomes do método e do mecanismo já aprovados internamente (04/07). Apresenta no Marco 02.', status: 'em-dev'},
    {t: 'Oferta completa: bônus, garantia, condições de fundador e preço final', d: 'Construção conjunta na Validação da Estratégia — a base já está na página Oferta.', status: 'em-dev'},
    {t: 'Documento Mestre de Estratégia da campanha', d: 'Orienta todas as peças de execução que vêm depois.', status: 'em-dev'},
    {t: 'Agendar a Validação da Estratégia (Marco 02)', d: 'Destravada pelo envio dos materiais prioritários do Rodrigo.', status: 'planejado'},
  ],

  // Histórico — recebidos e aprovados (com data)
  historico: [
    {item: 'Proposta comercial aprovada', data: '22/06/2026'},
    {item: 'Contrato assinado + pagamento confirmado (12x R$ 1.447)', data: '22/06/2026'},
    {item: 'Marco 01 · Conversa de Levantamento realizada (call de 2h16, transcrita e documentada)', data: '02/07/2026'},
    {item: 'Briefing extraído e documentado (expert · cliente ideal · método) — via call, substituiu o formulário', data: '02/07/2026'},
    {item: 'Pesquisas expandidas entregues (mercado, concorrência, aprendiz e certificação — ver página Pesquisas)', data: '02-03/07/2026'},
    {item: 'Materiais recebidos: números de autoridade, credenciais e formação, jargões e crenças-âncora, temas da parte comercial, perfil da concorrente citada na call', data: '03/07/2026'},
    {item: 'Materiais recebidos: conteúdos de diagnóstico + as 3 escadas de tratamento', data: '03-04/07/2026'},
    {item: 'Marcação capacita × só-teoria FECHADA pelo Rodrigo: capacita em tudo, exceto toxina botulínica, artrocentese e procedimentos cirúrgicos (só teoria). iPRF confirmado como CAPACITA na escada articular', data: '10/07/2026'},
    {item: 'Naming aprovado pela consultoria: Abordagem MODAL (método) + Protocolo Escalonado de DTM (mecanismo) + ângulo da PUV — validação final com o Rodrigo no Marco 02', data: '04/07/2026'},
    {item: 'Jornada do aluno e gamificação por faixas aprovadas pela consultoria', data: '04/07/2026'},
    {item: 'Materiais recebidos e processados: aula comercial "Como faço uma abordagem comercial em DTM" (4h08) + depoimentos completos (5 de alunos + 4 pacientes em vídeo) — transcritos localmente, analisados e integrados ao briefing (Banco de Histórias, Método/F6, Cliente Ideal)', data: '07/07/2026'},
    {item: 'NAMING DEFINIDO: Método = Abordagem MODAL · Empresa = Academia DTM · Formação = Viver de DTM. Identidade visual = território Pulso (fluor-lime). Guia de Naming + Guia de Setup de Marca entregues', data: '10/07/2026'},
  ],
};

const STATUS_LABELS = {
  'planejado': 'Planejado',
  'aguard-material': 'Aguardando material',
  'em-dev': 'Em desenvolvimento',
  'aguard-aprov': 'Aguardando aprovação',
  'aprovado': 'Aprovado e entregue',
};

window.DASH = { PROJETO, MARCOS, BLOCOS, ACOMPANHAMENTO, STATUS_LABELS };
