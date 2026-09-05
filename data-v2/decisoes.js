window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

/* ─────────── devolutivas ─────────── */
DASH.views['devolutivas'] = {
  titulo: 'O que você já validou',
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
        ['Plataforma da formação', 'Plataforma própria, com ferramentas integradas e gamificação', '05/09', 'Área de membros'],
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
        ['Grupo de WhatsApp', 'Só para quem entra no presencial', '05/09', 'Oferta, área de membros'],
        ['Canal de atendimento', 'Número secundário com atendente próprio, desde o começo da captação', '05/09', 'Fluxo comercial'],
        ['Assistente de IA clínica', 'Ferramenta autotreinável para anamnese e apoio ao diagnóstico', '05/09', 'Proposta de adicionais'],
      ],
    },
  ],
  decisoes: [
    { data: '2026-07-11', texto: 'Marco 02 concluído: naming, identidade visual e formato do produto ratificados por você.' },
    { data: '2026-09-05', texto: 'Data de início da turma fixada em 23/02/2027.' },
  ],
  pendencias: [
    { quem: 'inception', texto: 'Manter esta tabela como registro único do que foi validado, a cada reunião.', prazo: 'contínuo' },
  ],
  links: [
    { rotulo: 'O que ainda depende de você', href: '#decisoes-rodrigo' },
  ],
  atualizado: '2026-09-05',
};

/* ─────────── decisoes-rodrigo ─────────── */
DASH.views['decisoes-rodrigo'] = {
  titulo: 'O que depende de você agora',
  kicker: 'Decisões',
  resumo: 'Dezesseis decisões abertas, na ordem em que travam o trabalho. Os prazos são sugestão nossa, calculados a partir da divulgação em outubro e do início da turma em 23/02/2027.',
  fatos: [
    { rotulo: 'decisões abertas', valor: '16' },
    { rotulo: 'travam o calendário', valor: '5' },
    { rotulo: 'divulgação começa em', valor: 'outubro' },
  ],
  blocos: [
    {
      tipo: 'tabela', titulo: 'Trava o calendário — decidir primeiro',
      colunas: ['O que decidir', 'Por que importa', 'Prazo sugerido'],
      linhas: [
        ['Dias exatos da Imersão 1, na semana de 17/05', 'O aluno compra passagem com meses de antecedência', '15/09'],
        ['Dias exatos da Imersão 2, na semana de 04/10', 'Mesma razão; ela fecha a etapa de tratamento', '15/09'],
        ['Imersão 3: confirmar segunda 29 e terça 30/11', 'É a única combinação que fecha a formatura em 30/11', '15/09'],
        ['Os três encontros de feriado: quarta ou quinta', 'Independência, Aparecida e Finados caem na terça e precisam de dia fixo no calendário publicado', '15/09'],
        ['Aula inaugural na semana de 16/02, sim ou não', 'Muda a data que a página anuncia como início da turma', '15/09'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Trava a captação — a oferta',
      colunas: ['O que decidir', 'Por que importa', 'Prazo sugerido'],
      linhas: [
        ['Formato do shadowing com 20 alunos', 'Duplas, trios ou um dia só: hoje custa de 14 a 20 dias da sua agenda', '30/09'],
        ['Modelo de garantia', 'É a única promessa da oferta que alguém pode cobrar na justiça', '30/09'],
        ['Autorização de uso dos depoimentos', 'Sem ela, a prova social em vídeo não pode ir ao ar', '30/09'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Trava a captação — o canal',
      colunas: ['O que decidir', 'Por que importa', 'Prazo sugerido'],
      linhas: [
        ['Renomear o perfil para Academia DTM', 'A divulgação começa em outubro e o tráfego precisa cair no nome certo', '30/09'],
        ['Revisar os pilares e temas do conteúdo', 'A produção dos conteúdos de atração só começa depois do seu aval', '20/09'],
        ['Aparelho extra, WhatsApp Business e nome do atendente', 'Sem os três, o canal comercial não existe', '30/09'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Trava a produção do produto — outubro em diante',
      colunas: ['O que decidir', 'Por que importa', 'Prazo sugerido'],
      linhas: [
        ['Lista nominal dos diagnósticos de cada grupo', 'Sem ela o guarda-chuva não vira material de aula nem pôster de consultório', '15/10'],
        ['Critérios objetivos de escalonamento por grupo', 'Completam a escada terapêutica e o checklist de reavaliação', '15/10'],
        ['As perguntas de sono e bruxismo da sua ficha', 'São o acréscimo autoral que separa a sua ficha do protocolo padrão', '15/10'],
        ['Nome do método, entre as três opções de 28/07', 'Hoje nenhuma peça usa nome de método; sem decisão, continua assim', '31/10'],
        ['Números atuais da clínica', 'Ticket, leads por mês e conversão calibram os scripts comerciais da Etapa 3', '31/10'],
      ],
    },
    {
      tipo: 'detalhe', titulo: 'Ver o contexto de cada decisão',
      html: `
        <p><strong>As três imersões.</strong> As semanas já estão fixadas: 17/05, 04/10 e 29/11 de 2027. Falta só o dia dentro de cada semana. A recomendação é começo de semana, de segunda a quarta, porque o aluno viaja no domingo e volta a atender antes do fim da semana. Na Imersão 3 não existe escolha: são dois dias e precisam ser segunda 29 e terça 30, senão a formação não fecha em 30/11 como você definiu. Vale saber que 30 de novembro é Dia do Evangélico, feriado distrital no DF — isso afeta serviços locais, não a atividade da imersão.</p>
        <p><strong>Os três feriados.</strong> Independência em 07/09, Aparecida em 12/10 e Finados em 02/11 caem todos numa terça. A regra que você fixou é deslocar o encontro daquela semana. Falta escolher entre quarta e quinta em cada um dos três casos.</p>
        <p><strong>O shadowing.</strong> Ele é bônus da turma fundadora e virou uma quarta viagem, separada das imersões. Com 20 alunos, em duplas ou trios, são de sete a dez rodadas de dois dias, o que dá de 14 a 20 dias do seu calendário em 2027. A janela recomendada é de junho a setembro, entre a Imersão 1 e a Imersão 2, com quinta e sexta como dias sugeridos. Se esse volume não couber, a alternativa é reduzir para um dia por rodada ou aumentar o tamanho do grupo. A decisão precisa sair antes de a oferta ir pra rua.</p>
        <p><strong>Conteúdo do professor para a área de membros.</strong> Três lacunas do método dependem só de você: a lista nominal dos diagnósticos de cada grupo do guarda-chuva, os critérios objetivos de quando subir o degrau em cada escada, e as perguntas de sono e bruxismo da sua ficha de avaliação. São o que falta pra fechar os materiais das Etapas 1 e 2.</p>
        <p><strong>Depoimentos.</strong> Chegaram quatro depoimentos de paciente em vídeo. Falta a autorização de imagem de cada um para uso público com identificação. Os depoimentos de aluno foram gravados no contexto da parceria antiga, então o direito de uso precisa ser confirmado antes de qualquer publicação.</p>
        <p><strong>Garantia.</strong> O ponto de corte proposto é o Encontro 3, fim do bloco inicial. O que segue em aberto é o desenho: devolução integral, devolução do valor líquido, garantia condicionada a execução das tarefas, ou crédito para uma turma seguinte. A escolha final depende também de duas confirmações que não são nossas para dar: a alíquota efetiva com a contabilidade e a redação da cláusula com o jurídico.</p>
      `,
    },
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'Semanas das três imersões mantidas: 17/05, 04/10 e 29/11 de 2027.' },
    { data: '2026-09-05', texto: 'Shadowing confirmado como viagem separada das imersões.' },
  ],
  pendencias: [
    { quem: 'inception', texto: 'Pesquisar contatos e orçamento de credenciamento junto ao MEC, para a rota de certificação.', prazo: 'outubro' },
    { quem: 'inception', texto: 'Escrever a proposta dos dois adicionais de IA, um para a clínica e um para os alunos.', prazo: 'setembro' },
  ],
  links: [
    { rotulo: 'Calendário completo da turma 2027', href: 'docs/calendario-turma-2027.md' },
  ],
  atualizado: '2026-09-05',
};

/* ─────────── marcos ─────────── */
DASH.views['marcos'] = {
  titulo: 'Os quatro marcos',
  kicker: 'Projeto',
  resumo: 'O contrato tem quatro marcos. Os dois primeiros estão concluídos, o terceiro está em andamento e o quarto fecha o projeto com a passagem de bastão e o treinamento.',
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
      tipo: 'texto', titulo: 'Marco 03 · Configuração Operacional — em andamento',
      html: '<p>É a fase assíncrona, com validações pontuais. Já entregues: página de aplicação, apresentação comercial, guia de social media, brandbook e kit de frameworks visuais, todos aguardando a sua revisão. Em produção: refinamento da página, segunda versão da apresentação para a porta online e a pasta de referências para a sua produção de conteúdo. Depende de você: o setup de domínio, hospedagem e canais, listado na tela de decisões.</p>',
    },
    {
      tipo: 'texto', titulo: 'Marco 04 · Entrega Final — previsto',
      html: '<p>Reunião de passagem do projeto, treinamento para você operar tudo sozinho e esta dashboard organizada com as entregas. O suporte de trinta dias corridos começa a contar depois do treinamento. A previsão registrada no início do projeto era 25/09/2026; a data efetiva depende do fechamento das peças comerciais e do calendário de divulgação de outubro, e será confirmada na próxima reunião.</p>',
    },
  ],
  decisoes: [
    { data: '2026-07-02', texto: 'Marco 01 concluído com a conversa de levantamento.' },
    { data: '2026-07-11', texto: 'Marco 02 concluído com a validação da estratégia.' },
  ],
  pendencias: [
    { quem: 'inception', texto: 'Confirmar a data da reunião de entrega final e do treinamento.', prazo: 'próxima reunião' },
    { quem: 'rodrigo', texto: 'Revisar as peças entregues em 03/09: página de aplicação, apresentação comercial e guia de social media.', prazo: '20/09' },
  ],
  links: [
    { rotulo: 'Contrato assinado', href: 'docs/contrato-rodrigo-wendel.pdf' },
  ],
  atualizado: '2026-09-05',
};
