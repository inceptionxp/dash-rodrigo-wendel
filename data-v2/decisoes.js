window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

/* ─────────── devolutivas ─────────── */
DASH.views['devolutivas'] = {
  titulo: 'O que você já validou',
  status: 'entregue',
  kicker: 'Decisões',
  resumo: 'Tudo que você aprovou desde julho, com a data e o lugar onde a decisão já está aplicada. O que ainda depende de você está na fila da próxima tela.',
  fatos: [
    { rotulo: 'decisões registradas', valor: '18' },
    { rotulo: 'primeira validação', valor: '11/07/2026' },
    { rotulo: 'última validação', valor: '05/09/2026' },
  ],
  blocos: [
    {
      tipo: 'tabela', titulo: 'Marca e posicionamento',
      colunas: ['Tema', 'O que você decidiu', 'Quando', 'Onde está aplicado'],
      linhas: [
        ['Nome da empresa e da formação', 'Academia DTM e Viver de DTM, ratificados', '11/07', 'Marca, páginas, perfil-alvo'],
        ['Identidade visual', 'Território Pulso, navy com verde-limão', '11/07', 'Brandbook, página, apresentação'],
        ['Posicionamento', 'Formação para dentistas que não dominam DTM', '11/07', 'Toda a comunicação'],
        ['Página de aplicação', 'Estrutura, cores e identidade validadas, com refinamento visual autorizado', '05/09', 'Página de aplicação'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Produto e conteúdo',
      colunas: ['Tema', 'O que você decidiu', 'Quando', 'Onde está aplicado'],
      linhas: [
        ['Formato', 'Turma fechada, dez meses, encontros semanais, três imersões obrigatórias, sem atendimento individual', '11/07', 'Grade, página, apresentação'],
        ['O que a formação capacita', 'Todos os conservadores, mais infiltração anestésica e agulhamento; o resto entra como indicação', '10/07', 'Escada terapêutica, grade'],
        ['Prática das imersões', 'Rodízio entre os próprios alunos, com triagem antes e recrutamento externo só da diferença', '28/07', 'Imersões 1 e 2'],
        ['Material dos dois tripés', 'Gravado por você, com o gesto da folha riscada ao meio', '28/07', 'Encontro 3'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Público e voz comercial',
      colunas: ['Tema', 'O que você decidiu', 'Quando', 'Onde está aplicado'],
      linhas: [
        ['Quem é o aluno', 'Inclui o especialista de outra área, não só o clínico geral', '12/07', 'Quem é o dentista, copy'],
        ['Gênero do público', 'Maioria feminina, com 80% nas duas últimas turmas', '12/07', 'Linguagem das peças'],
        ['Horário dos encontros', 'Noite de semana, das 19h às 21h', '12/07', 'Calendário'],
        ['Urgência na consulta', 'Nada de urgência fabricada: fica só a verdade clínica de que DTM piora sem tratar', '28/07', 'Etapa 3, roteiro de consulta'],
        ['Desconto', 'Sem régua fixa: cada um calibra pela própria margem', '28/07', 'Etapa 3'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Calendário e operação comercial',
      colunas: ['Tema', 'O que você decidiu', 'Quando', 'Onde está aplicado'],
      linhas: [
        ['Data de início', '23/02/2027, depois do carnaval, com fim em 30/11', '05/09', 'Calendário, página, apresentação'],
        ['Grupo de WhatsApp', 'Só para quem entra no presencial', '05/09', 'Oferta'],
        ['Canal de atendimento', 'Número secundário com atendente próprio, desde o começo da captação', '05/09', 'Fluxo comercial']
      ],
    },
  ],
  decisoes: [
    { data: '2026-07-11', texto: 'Marco 02 concluído: naming, identidade visual e formato do produto ratificados por você.' },
    { data: '2026-09-05', texto: 'Data de início da turma fixada em 23/02/2027.' },
  ],
  pendencias: [
  ],
  links: [
    { rotulo: 'O que ainda depende de você', href: '#decisoes-rodrigo' },
  ],
  atualizado: '2026-10-06',
};

/* ─────────── decisoes-rodrigo ─────────── */
DASH.views['decisoes-rodrigo'] = {
  titulo: 'O que depende de você agora',
  status: 'pendente',
  kicker: 'Decisões',
  resumo: 'As decisões abertas em setembro estão fechadas. Faltam do senhor três coisas, e nenhuma é decisão nova: são o que libera as peças públicas.',
  fatos: [
    { rotulo: 'com o senhor agora', valor: '3' },
    { rotulo: 'decisões de setembro', valor: 'fechadas' }
  ],
  blocos: [
    {
      tipo: 'tabela', titulo: 'Libera as peças públicas',
      colunas: ['O que falta', 'Por que importa', 'Prazo sugerido'],
      linhas: [
        ['Autorizações de uso dos depoimentos', 'Sem elas, nenhum depoimento em vídeo vai ao ar', 'em andamento'],
        ['Nome da instituição do certificado', 'Define o texto do certificado na página e na apresentação. Selo do MEC só entra escrito depois que a instituição confirmar como ele vale para curso livre', 'depois da reunião em Brasília'],
        ['Revisão dos cinco carrosséis', 'São os posts de abertura do perfil da Academia DTM', 'ao receber os links'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'O que foi fechado desde setembro',
      colunas: ['Tema', 'Como ficou', 'Quando'],
      linhas: [
        ['Encontro em semana de feriado', 'Vai para a quarta da mesma semana', '13/09'],
        ['Aula inaugural', 'Cortada; a turma abre no Encontro 1, em 23/02', '13/09'],
        ['Shadowing', '2 dias, em duplas', '13/09'],
        ['Nome do método', 'Abordagem Multimodal', '13/09'],
        ['Carga horária', '134 horas; a divulgação usa o piso de 130 e o certificado sai com a carga real', '22/09'],
        ['Reuniões de venda', '30 minutos, segunda, quarta e quinta às 19h30', '22/09'],
        ['Dias das imersões', '20 a 22/05, 21 a 23/10 e 29 e 30/11 de 2027', '24/09'],
        ['Garantia', 'Devolução até o Encontro 3, descontados os impostos e as taxas já recolhidos', '06/10'],
        ['Grade de outubro', 'A Etapa 3 abre em 05/10, com os Encontros 36 e 37 antes da Imersão 2; o respiro de 22/11 continua', '06/10'],
        ['Números da clínica', 'Ticket médio de 2025 e valor da avaliação enviados', '04/10'],
        ['Trajetória', 'Começo em 2003 na clínica de uma amiga, com clínica geral e DTM, migrando depois só para DTM', '06/10'],
        ['Conteúdo do professor, perfil, canal e linha editorial', 'Encerrados como pendência deste projeto', '06/10'],
      ],
    },
  ],
  decisoes: [
    { data: '2026-09-13', texto: 'Feriado na terça desloca o encontro para a quarta da mesma semana.' },
    { data: '2026-09-13', texto: 'Shadowing de 2 dias, em duplas.' },
    { data: '2026-09-22', texto: 'Carga horária de 134 horas; a divulgação usa o piso de 130 e o certificado sai com a carga real.' },
    { data: '2026-09-22', texto: 'Certificado como curso livre.' },
    { data: '2026-09-24', texto: 'Imersão 1 em 20 a 22/05 e Imersão 2 em 21 a 23/10, de quinta a sábado.' },
    { data: '2026-10-06', texto: 'Garantia com devolução do valor líquido até o Encontro 3.' },
  ],
  pendencias: [
    { quem: 'rodrigo', feito: false, texto: 'Passar o nome da instituição que emite o certificado.', prazo: 'depois da reunião em Brasília' },
  ],
  links: [
    { rotulo: 'Calendário completo da turma 2027', href: 'docs/calendario-turma-2027.md' },
  ],
  atualizado: '2026-10-06',
};

/* ─────────── marcos ─────────── */
DASH.views['marcos'] = {
  titulo: 'Os quatro marcos',
  status: 'em-producao',
  kicker: 'Projeto',
  resumo: 'O contrato tem quatro marcos. Os dois primeiros estão concluídos e o terceiro está na reta final: faltam carrosséis, criativos, página e apresentação atualizadas. O quarto fecha o projeto com a reunião de entrega e o treinamento.',
  fatos: [
    { rotulo: 'marcos concluídos', valor: '2 de 4' },
    { rotulo: 'levantamento', valor: '02/07/2026' },
    { rotulo: 'validação', valor: '11/07/2026' },
  ],
  blocos: [
    {
      tipo: 'texto', titulo: 'Marco 01 · Conversa de Levantamento — concluído em 02/07/2026',
      html: '<p>Call de duas horas e dezesseis minutos, transcrita e documentada. Saiu daí o briefing inteiro: quem é o aluno, quais são os seus diferenciais e como o método se organiza. O posicionamento foi calibrado na mesma conversa: formação para dentistas que não dominam DTM, em grupo e com prática presencial, sem atendimento individual.</p>',
    },
    {
      tipo: 'texto', titulo: 'Marco 02 · Validação da Estratégia — concluído em 11/07/2026',
      html: '<p>Você ratificou o nome da empresa e da formação, a identidade visual e o formato do produto. Ficou com você a revisão da estrutura técnica, que foi chegando ao longo de julho e agosto. <strong>A garantia contratual de devolução integral em cinco dias úteis venceu com este marco.</strong></p>',
    },
    {
      tipo: 'lista', titulo: 'Marco 03 · Configuração Operacional — reta final',
      itens: [
        'Entregue: método, formação, oferta, calendário de 2027, marca, brandbook e kit de frameworks.',
        'Entregue: página de aplicação, apresentação comercial em duas versões e especificação do fluxo do formulário à matrícula.',
        'Entregue: guia de social media, linha editorial, pautas e termos de autorização dos depoimentos.',
        'Entregue: domínio academiadtm.com.br no ar, com HTTPS.',
        'Em revisão: os cinco carrosséis de abertura do perfil.',
        'Em produção: os 10 criativos estáticos e os 5 roteiros de vídeo para o tráfego.',
        'Em produção: a página de aplicação e a apresentação de vendas atualizadas com as últimas definições.',
      ],
    },
    {
      tipo: 'texto', titulo: 'Marco 04 · Entrega Final — próximo',
      html: '<p>Reunião de passagem do projeto, treinamento para você operar tudo sozinho e esta dashboard organizada com as entregas. O suporte de trinta dias corridos começa a contar depois do treinamento. A data sai assim que essas quatro entregas estiverem com o senhor.</p>',
    },
  ],
  decisoes: [
    { data: '2026-07-02', texto: 'Marco 01 concluído com a conversa de levantamento.' },
    { data: '2026-07-11', texto: 'Marco 02 concluído com a validação da estratégia.' },
  ],
  pendencias: [
    { quem: 'rodrigo', feito: true, texto: 'Revisar as peças entregues em 03/09: página de aplicação, apresentação comercial e guia de social media.', prazo: 'feito' },
    { quem: 'inception', feito: false, texto: 'Marcar a reunião de entrega final e o treinamento.', prazo: 'depois das quatro entregas' },
  ],
  links: [
    { rotulo: 'Contrato assinado', href: 'docs/contrato-rodrigo-wendel.pdf' },
  ],
  atualizado: '2026-10-06',
};
