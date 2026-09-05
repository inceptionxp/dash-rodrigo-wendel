window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

DASH.views['com-pagina'] = {
  titulo: 'A página de aplicação',
  kicker: 'Comercial',
  resumo: 'A página não vende: ela faz o dentista aplicar para uma conversa. Nenhum valor aparece ali. O investimento entra depois, na apresentação, com o senhor na frente.',
  fatos: [
    { rotulo: 'dobras', valor: '11' },
    { rotulo: 'passos até a matrícula', valor: '3' },
    { rotulo: 'valor na página', valor: 'nenhum' },
    { rotulo: 'perguntas no bloco final', valor: '8' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'Por que aplicação e não checkout', html: '<p>O público está no nível de consciência mais baixo: o dentista não sabe que confunde sinal de bruxismo com sinal de DTM. Botão de compra em cima desse leitor não converte, porque ele ainda não aceitou que tem um problema. A página existe para elevar a consciência, gerar desejo e levar a uma conversa sem compromisso. É nessa conversa que a formação é apresentada e o investimento aparece.</p>' },
    { tipo: 'lista', titulo: 'As 11 dobras, uma linha cada', itens: [
      '01 · Abertura: a cena do paciente que já está na cadeira dele esta semana.',
      '02 · O que é: um percurso ao vivo com prática presencial, não um curso gravado.',
      '03 · O ponto cego: o dado de que a maioria dos dentistas lê sinal de DTM como bruxismo.',
      '04 · A virada: DTM é um guarda-chuva de cerca de dez quadros, e cada grupo pede um raciocínio.',
      '05 · O percurso: três etapas encadeadas, 43 encontros ao vivo e três imersões presenciais.',
      '06 · O critério: três itens de quem entra e três de quem não entra, sem meio-termo.',
      '07 · Quem conduz: as instituições reais da trajetória e a história em primeira pessoa.',
      '08 · O que está dentro: o pacote item a item, com o grupo no WhatsApp entre eles.',
      '09 · A vaga: a turma é fechada porque o limite é a supervisão, sem contagem regressiva.',
      '10 · Perguntas: oito respostas às objeções mais frequentes.',
      '11 · A aplicação: os três passos e o formulário, com a pergunta sobre viajar a Brasília.'
    ]},
    { tipo: 'lista', titulo: 'Os três passos, como aparecem na página', itens: [
      '01. O dentista aplica pelo formulário, em cerca de três minutos.',
      '02. A equipe analisa e agenda um horário com o senhor.',
      '03. Reunião de apresentação da formação e matrícula, se os dois entenderem que é o momento.'
    ]},
    { tipo: 'lista', titulo: 'O que olhar na revisão', itens: [
      'A trajetória e as instituições citadas na dobra 07 estão corretas.',
      'Os critérios de entrada e de exclusão descrevem quem o senhor quer na turma.',
      'As oito perguntas cobrem o que os dentistas mais perguntam ao senhor.',
      'A pergunta do formulário sobre viajar quatro vezes a Brasília em 2027 está clara.',
      'Nada na página promete título de especialista nem reconhecimento de conselho.'
    ]}
  ],
  decisoes: [
    { data: '2026-09-04', texto: 'A página não exibe valor, parcela nem número de vagas. O investimento vive na apresentação comercial.' },
    { data: '2026-09-04', texto: 'O fluxo de aplicação foi reduzido de seis para três passos.' },
    { data: '2026-09-05', texto: 'A estrutura, as cores e a identidade da página foram validadas pelo Dr. Rodrigo.' }
  ],
  pendencias: [
    { quem: 'inception', texto: 'Trocar a expressão dez meses por de fevereiro a novembro de 2027 em toda a página, conforme o calendário refeito.', prazo: 'antes da divulgação' },
    { quem: 'inception', texto: 'Refino visual e de animação para o acabamento premium combinado na reunião.', prazo: 'setembro de 2026' },
    { quem: 'rodrigo', texto: 'Conferir a página no link e apontar qualquer informação incoerente.', prazo: 'setembro de 2026' }
  ],
  links: [
    { rotulo: 'Abrir a página de aplicação', href: 'pecas/pagina-aplicacao/index.html' }
  ],
  atualizado: '2026-09-05'
};

DASH.views['com-apresentacao'] = {
  titulo: 'A apresentação comercial',
  kicker: 'Comercial',
  resumo: 'Duas versões do mesmo deck. A padrão defende só o presencial e fecha em R$ 15.000. A segunda abre a porta online e só entra quando a objeção for viagem ou valor.',
  fatos: [
    { rotulo: 'lâminas na versão padrão', valor: '35' },
    { rotulo: 'lâminas com a porta online', valor: '37' },
    { rotulo: 'investimento no presencial', valor: 'R$ 15.000' },
    { rotulo: 'investimento no online', valor: 'R$ 8.000' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'Quando usar cada uma', colunas: ['Versão', 'Quando abrir', 'O que ela defende'], linhas: [
      ['Padrão', 'Sempre. É com ela que a conversa começa, com qualquer pessoa.', 'Uma coisa só: oito dias com a mão no paciente, corrigida por quem ensina.'],
      ['Com a porta online', 'Depois, e só quando a objeção for viagem ou valor.', 'O mesmo percurso, mais a segunda porta e a comparação lado a lado.']
    ]},
    { tipo: 'texto', titulo: 'A regra que não se quebra', html: '<p>Oferecer duas opções antes de a pessoa querer o presencial é entregar desconto sem ninguém ter pedido. Se a hesitação for sobre o conteúdo, a resposta é conversa, não preço menor. Na prática: conduza a versão padrão e, se a pessoa disser que não consegue viajar três vezes no ano, abra a segunda na lâmina da porta online.</p>' },
    { tipo: 'lista', titulo: 'A cadência da conversa, em seis linhas', itens: [
      'Abre no paciente que já está na cadeira dele e no dado de prevalência.',
      'Mostra o ponto cego: DTM não é um diagnóstico, é cerca de dez, e a maioria erra o sinal.',
      'Coloca os dois lados na mesa: o paciente sem resposta e o teto do consultório dele.',
      'Faz a conta do que um tratamento estruturado de DTM representa na agenda.',
      'Vira a chave do método: quem só tem martelo trata tudo como prego, e cada grupo tem sua escada.',
      'Fecha no percurso, em quem conduz, no investimento e no próximo passo.'
    ]},
    { tipo: 'lista', titulo: 'Como abrir e como conduzir', itens: [
      'Duplo clique no index.html da pasta. Abre em tela cheia no navegador.',
      'Seta para a direita ou clique avança um passo por vez, e a lâmina se constrói enquanto o senhor fala.',
      'Seta para a esquerda volta um passo.',
      'A tecla N liga e desliga as notas do apresentador, com a fala sugerida de cada lâmina.',
      'As duas versões leem as mesmas imagens: mova as pastas juntas, nunca uma sozinha.'
    ]}
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'A apresentação passa a ter duas versões, e o Dr. Rodrigo escolhe qual abre em cada conversa.' },
    { data: '2026-09-04', texto: 'O presencial declara 20 vagas na lâmina de investimento.' }
  ],
  pendencias: [
    { quem: 'inception', texto: 'Trocar a expressão dez meses por de fevereiro a novembro de 2027 nas lâminas do percurso.', prazo: 'antes da divulgação' },
    { quem: 'inception', texto: 'Ajustes finos de formatação identificados na reunião de 05/09.', prazo: 'setembro de 2026' }
  ],
  links: [
    { rotulo: 'Abrir a versão padrão', href: 'pecas/apresentacao-comercial/padrao/index.html' },
    { rotulo: 'Abrir a versão com a porta online', href: 'pecas/apresentacao-comercial/com-online/index.html' }
  ],
  atualizado: '2026-09-05'
};

DASH.views['com-fluxo'] = {
  titulo: 'Do formulário à matrícula',
  kicker: 'Comercial',
  resumo: 'Três passos entre a aplicação e a matrícula, com um número secundário de WhatsApp atendendo em nome da Academia. A especificação completa do fluxo está em produção.',
  fatos: [
    { rotulo: 'passos', valor: '3' },
    { rotulo: 'canal de atendimento', valor: 'WhatsApp Business' },
    { rotulo: 'papel da IA', valor: 'só a qualificação inicial' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'Os três passos', colunas: ['Passo', 'O que acontece', 'Quem conduz'], linhas: [
      ['01', 'O dentista preenche o formulário de aplicação na página.', 'A página'],
      ['02', 'O contato é qualificado e um horário é agendado com o professor.', 'O atendimento, pelo número secundário'],
      ['03', 'Reunião de apresentação da formação, com o deck, e matrícula se houver acordo.', 'Dr. Rodrigo Wendel']
    ]},
    { tipo: 'texto', titulo: 'O número secundário e o personagem', html: '<p>O atendimento comercial roda em um número separado, com um personagem respondendo em nome da Academia. Isso é prática comum e resolve dois problemas ao mesmo tempo: preserva a agenda do senhor e evita que o professor seja a única pessoa disponível para responder mensagem, o que desvaloriza o serviço. O tempo dele fica reservado para a reunião de apresentação, que é onde a venda acontece de verdade.</p>' },
    { tipo: 'texto', titulo: 'Onde a IA entra, e onde não entra', html: '<p>A IA cobre a qualificação inicial: responde quem preencheu o formulário de madrugada, confirma os dados e mantém a conversa andando até o horário comercial. Daí para a frente é pessoa. Substituir o atendimento humano inteiro por IA não é recomendação nossa, e não é o que faz esse funil converter.</p>' },
    { tipo: 'lista', titulo: 'O que o Dr. Rodrigo providencia', itens: [
      'Um aparelho celular adicional, pode ser um antigo, só para esse canal.',
      'Um chip com número novo, dedicado ao atendimento comercial.',
      'Uma conta de WhatsApp Business cadastrada nesse aparelho. Dois perfis profissionais não convivem no mesmo aparelho, mesmo com chip eletrônico.',
      'A definição de quem responde no dia a dia: alguém da equipe da clínica ou uma pessoa contratada para isso.'
    ]}
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'O atendimento comercial roda desde o início em número secundário, com personagem.' },
    { data: '2026-09-05', texto: 'A IA fica restrita à qualificação inicial; o acompanhamento e o fechamento são humanos.' }
  ],
  pendencias: [
    { quem: 'inception', texto: 'Especificação completa do fluxo comercial, do formulário à matrícula, com scripts de cada passo.', prazo: 'em produção' },
    { quem: 'rodrigo', texto: 'Aparelho, chip e conta de WhatsApp Business configurados.', prazo: 'antes de outubro de 2026' },
    { quem: 'rodrigo', texto: 'Definir quem atende no número secundário.', prazo: 'antes de outubro de 2026' }
  ],
  links: [],
  atualizado: '2026-09-05'
};
