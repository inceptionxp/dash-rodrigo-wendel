window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

/* ─────────── devolutivas ─────────── */
DASH.views['devolutivas'] = {
  titulo: 'O que você já validou',
  status: 'entregue',
  kicker: 'Decisões',
  resumo: 'Tudo que você aprovou desde julho, com a data e o lugar onde a decisão já está aplicada. O que ainda depende de você está na fila da próxima tela.',
  fatos: [
    { rotulo: 'decisões registradas', valor: '19' },
    { rotulo: 'primeira validação', valor: '11/07/2026' },
    { rotulo: 'última validação', valor: '12/10/2026' },
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
        ['Canal de atendimento', 'Número secundário com atendente próprio, desde o começo da captação', '05/09', 'Fluxo comercial'],
        ['Campanha de abertura', '10 anúncios, 5 roteiros de vídeo, 5 carrosséis, 7 e-mails e 7 mensagens de WhatsApp validados', '12/10', 'Central da campanha']
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
  atualizado: '2026-10-17',
};

/* ─────────── decisoes-rodrigo ─────────── */
DASH.views['decisoes-rodrigo'] = {
  titulo: 'O que depende de você agora',
  status: 'pendente',
  kicker: 'Decisões',
  resumo: 'As decisões abertas em setembro estão fechadas e a campanha foi validada em 12/10. O que falta do senhor agora é o que coloca a campanha no ar.',
  fatos: [
    { rotulo: 'com o senhor agora', valor: '6' },
    { rotulo: 'decisões de setembro', valor: 'fechadas' }
  ],
  blocos: [
    {
      tipo: 'tabela', titulo: 'Coloca a campanha no ar',
      colunas: ['O que falta', 'Por que importa', 'Prazo sugerido'],
      linhas: [
        ['Renomear o perfil para @academiadtm e publicar os 5 carrosséis', 'Os anúncios levam ao perfil, e ele precisa estar com o nome e o conteúdo novos', 'antes de ligar os anúncios'],
        ['Gravar os 5 vídeos dos roteiros', 'São os anúncios em vídeo da campanha', 'antes de ligar os anúncios'],
        ['Número de WhatsApp da Academia, cadastrado na API oficial da Meta com o Pedro', 'É por ele que a coordenação chama quem aplicou', 'antes da primeira aplicação'],
        ['Meta Business com o número e a conta de anúncios', 'Sem ele o Pedro não liga a campanha', 'antes de ligar os anúncios'],
        ['Plataforma de cobrança e se o 12x sai com ou sem juros', 'A primeira cobrança cai na matrícula, e a matrícula precisa de onde cobrar', 'antes da primeira reunião de venda'],
        ['Autorizações de uso dos depoimentos', 'Sem elas, nenhum depoimento em vídeo vai ao ar', 'em andamento'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'O que foi fechado desde setembro',
      colunas: ['Tema', 'Como ficou', 'Quando'],
      linhas: [
        ['Encontro em semana de feriado', 'Vai para a quarta da mesma semana', '13/09'],
        ['Aula inaugural', 'Cortada; a turma abre no Encontro 1, em 23/02', '13/09'],
        ['Dias na clínica', '2 dias na clínica do senhor, só para a turma fundadora', '13/09'],
        ['Nome do método', 'Abordagem Multimodal', '13/09'],
        ['Carga horária', '134 horas', '22/09'],
        ['Certificado', 'Credenciado pelo MEC, sem nome de instituição em nenhuma peça', '12/10'],
        ['Reuniões de venda', '30 minutos, segunda, quarta e quinta às 19h30', '22/09'],
        ['Dias das imersões', '20 a 22/05, 21 a 23/10 e 29 e 30/11 de 2027', '24/09'],
        ['Garantia', 'Devolução até o Encontro 3, descontados os impostos e as taxas já recolhidos', '06/10'],
        ['Grade de outubro', 'A Etapa 3 abre em 05/10, com os Encontros 36 e 37 antes da Imersão 2; o respiro de 22/11 continua', '06/10'],
        ['Números da clínica', 'Ticket médio de 2025 e valor da avaliação enviados', '04/10'],
        ['Trajetória', 'Começo em 2003 na clínica de uma amiga, com clínica geral e DTM, migrando depois só para DTM', '06/10'],
        ['Conteúdo do professor, perfil, canal e linha editorial', 'Encerrados como pendência deste projeto', '06/10'],
        ['Página de aplicação', 'No ar em academiadtm.com.br/formacao', '12/10'],
        ['Campanha de abertura', 'Anúncios, roteiros de vídeo, carrosséis, e-mails e WhatsApp validados', '12/10'],
      ],
    },
  ],
  decisoes: [
    { data: '2026-09-13', texto: 'Feriado na terça desloca o encontro para a quarta da mesma semana.' },
    { data: '2026-09-13', texto: '2 dias na clínica do senhor para a turma fundadora.' },
    { data: '2026-09-22', texto: 'Carga horária de 134 horas.' },
    { data: '2026-09-24', texto: 'Imersão 1 em 20 a 22/05 e Imersão 2 em 21 a 23/10, de quinta a sábado.' },
    { data: '2026-10-06', texto: 'Garantia com devolução do valor líquido até o Encontro 3.' },
    { data: '2026-10-12', texto: 'Certificado credenciado pelo MEC, sem nome de instituição. A página deixa de mostrar número de vagas e as apostilas e ferramentas saem sem promessa de prazo.' },
  ],
  pendencias: [
    { quem: 'rodrigo', feito: true, texto: 'Certificado decidido em 12/10/2026: credenciado pelo MEC, sem nome de instituição.', prazo: 'encerrado' },
    { quem: 'rodrigo', feito: true, texto: 'Validar os anúncios, os roteiros de vídeo, os carrosséis, os e-mails e as mensagens de WhatsApp.', prazo: 'feito em 12/10' },
  ],
  links: [
    { rotulo: 'Calendário completo da turma 2027', href: 'docs/calendario-turma-2027.md' },
    { rotulo: 'Central da campanha', href: '#com-campanha' },
  ],
  atualizado: '2026-10-17',
};

/* ─────────── marcos ─────────── */
DASH.views['marcos'] = {
  titulo: 'Os quatro marcos',
  status: 'em-producao',
  kicker: 'Projeto',
  resumo: 'O contrato tem quatro marcos. Os três primeiros estão concluídos: a campanha foi validada em 12/10 e a página está no ar. O quarto fecha o projeto com a reunião de entrega e o treinamento.',
  fatos: [
    { rotulo: 'marcos concluídos', valor: '3 de 4' },
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
      tipo: 'lista', titulo: 'Marco 03 · Configuração Operacional — concluído em 12/10/2026',
      itens: [
        'Entregue: método, formação, oferta, calendário de 2027, marca, brandbook e kit de frameworks.',
        'Entregue: apresentação comercial em duas versões e especificação do fluxo do formulário à matrícula.',
        'Entregue: guia de social media, linha editorial, pautas e termos de autorização dos depoimentos.',
        'No ar: academiadtm.com.br, com HTTPS, e a página de aplicação em academiadtm.com.br/formacao desde 12/10.',
        'Validados em 12/10: os 5 carrosséis de abertura do perfil, os 10 anúncios, os 5 roteiros de vídeo, os 7 e-mails e as 7 mensagens de WhatsApp.',
      ],
    },
    {
      tipo: 'texto', titulo: 'Marco 04 · Entrega Final — próximo',
      html: '<p>Reunião de passagem do projeto, treinamento para você operar tudo sozinho e esta dashboard organizada com as entregas. O suporte de trinta dias corridos começa a contar depois do treinamento.</p>',
    },
  ],
  decisoes: [
    { data: '2026-07-02', texto: 'Marco 01 concluído com a conversa de levantamento.' },
    { data: '2026-07-11', texto: 'Marco 02 concluído com a validação da estratégia.' },
    { data: '2026-10-12', texto: 'Marco 03 concluído com a página no ar e a campanha validada.' },
  ],
  pendencias: [
    { quem: 'rodrigo', feito: true, texto: 'Revisar as peças entregues em 03/09: página de aplicação, apresentação comercial e guia de social media.', prazo: 'feito' },
    { quem: 'inception', feito: false, texto: 'Marcar a reunião de entrega final e o treinamento.', prazo: 'data a combinar' },
  ],
  links: [
    { rotulo: 'Contrato assinado', href: 'docs/contrato-rodrigo-wendel.pdf' },
  ],
  atualizado: '2026-10-17',
};
