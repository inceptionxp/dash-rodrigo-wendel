window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

DASH.views['inicio'] = {
  titulo: 'Onde o projeto está',
  status: 'em-producao',
  kicker: 'Início',
  resumo: 'A turma fundadora abre em 23 de fevereiro de 2027. Produto, calendário e oferta estão fechados; o que falta é a divulgação começar em outubro e as decisões de agenda que travam o material de venda.',
  fatos: [
    { rotulo: 'início da turma', valor: '23/02/2027' },
    { rotulo: 'encontros', valor: '43' },
    { rotulo: 'vagas no presencial', valor: '20' },
    { rotulo: 'portas de entrada', valor: '2' },
    { rotulo: 'divulgação começa', valor: 'outubro/2026' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'Onde estamos', html: '<p>A formação está desenhada de ponta a ponta: 43 encontros, 3 etapas, 3 imersões e o calendário de 2027 fechado semana a semana. As peças de venda existem e estão nesta dash: a página de aplicação, a apresentação em duas versões e a demonstração da área de membros.</p><p>O que ainda não começou é a divulgação. O perfil da Academia DTM precisa entrar no ar em outubro para que em fevereiro exista gente aplicando. É esse o caminho crítico agora.</p>' },
    { tipo: 'lista', titulo: 'O que mudou na reunião de 05/09', itens: [
      'A turma começa em 23 de fevereiro de 2027, depois do Carnaval, e termina em 30 de novembro. O calendário foi refeito inteiro a partir dessa data.',
      'A divulgação começa em outubro, e não em setembro como estava planejado.',
      'A formação ganha plataforma própria, com as ferramentas do aluno e as faixas dentro dela.',
      'Entra no escopo uma IA clínica que monta a anamnese a partir da consulta gravada e apoia o direcionamento diagnóstico.',
      'O atendimento comercial passa a rodar em número secundário, com um personagem atendendo, para preservar a agenda do senhor.',
      'A apresentação comercial ganha duas versões: a padrão, só presencial, e uma com a segunda porta online.',
      'A identidade visual da Academia DTM foi aprovada, junto com as cores da página de aplicação.'
    ]},
    { tipo: 'lista', titulo: 'Próximos passos da Inception', itens: [
      'Atualizar esta dash com tudo que foi decidido.',
      'Fechar o guia de direcionamento das redes e das orientações de perfil.',
      'Entregar o mapa de crenças do público, para dar intenção a cada conteúdo.',
      'Refinar a página de aplicação e enviar o link para conferência.',
      'Levantar contatos e orçamentos de certificação com faculdades credenciadas.',
      'Montar a pasta de referências visuais para a produção de conteúdo.',
      'Escrever a proposta dos dois adicionais de IA, o clínico e o do aluno.',
      'Enviar os links das pautas e os arquivos da logo em alta resolução.'
    ]},
    { tipo: 'lista', titulo: 'Próximos passos do Dr. Rodrigo', itens: [
      'Revisar os pilares e os temas de conteúdo antes de a produção começar.',
      'Ler e validar o guia de direcionamento das redes, apontando o que quiser mudar.',
      'Começar a gravar os conteúdos de atração com base nas orientações enviadas.',
      'Providenciar um celular adicional e abrir a conta de WhatsApp Business do atendimento.',
      'Fechar os dias exatos das três imersões dentro das semanas já reservadas.'
    ]}
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'A turma fundadora começa em 23/02/2027 e termina em 30/11/2027, com encontros às terças.' },
    { data: '2026-09-05', texto: 'A divulgação começa em outubro de 2026.' },
    { data: '2026-09-05', texto: 'A formação terá plataforma própria, com ferramentas do aluno, faixas e painel de acompanhamento.' },
    { data: '2026-09-05', texto: 'Entra no escopo a IA clínica de anamnese, autotreinável pelo feedback do professor.' },
    { data: '2026-09-05', texto: 'O comercial roda em número secundário de WhatsApp, com personagem atendendo; a IA só qualifica o contato inicial.' },
    { data: '2026-09-04', texto: 'A oferta tem duas portas: 20 vagas no presencial e uma opção só online, aberta apenas em objeção de viagem ou de valor.' }
  ],
  pendencias: [
    { quem: 'rodrigo', feito: false, texto: 'Dias exatos das três imersões dentro das semanas de 17/05, 04/10 e 29/11.', prazo: 'antes da abertura de vendas' },
    { quem: 'rodrigo', feito: false, texto: 'Quarta ou quinta nas três semanas de feriado.', prazo: 'antes da abertura de vendas' },
    { quem: 'rodrigo', feito: false, texto: 'Se entra o encontro de abertura da turma em 16/02, fora dos 43.', prazo: 'antes da abertura de vendas' },
    { quem: 'rodrigo', feito: false, texto: 'Autorização de uso dos depoimentos em vídeo já gravados.', prazo: 'antes da campanha' },
    { quem: 'inception', feito: false, texto: 'Modelo de garantia, com confirmação de contabilidade e revisão jurídica.', prazo: 'antes da abertura de vendas' },
    { quem: 'inception', feito: false, texto: 'Especificação do fluxo comercial, do formulário à matrícula.', prazo: 'em produção' }
  ],
  links: [],
  atualizado: '2026-09-05'
};

DASH.views['continuidade'] = {
  titulo: 'Depois da turma fundadora',
  status: 'pendente',
  kicker: 'Continuidade',
  resumo: 'O que sustenta receita depois de novembro de 2027: o programa de continuidade, a assinatura do sistema, os dois adicionais de IA, a certificação e o tier online como produto de 2028.',
  fatos: [
    { rotulo: 'formatura da turma 1', valor: '30/11/2027' },
    { rotulo: 'adicionais de IA propostos', valor: '2' },
    { rotulo: 'certificação', valor: 'a partir da 2ª turma' },
    { rotulo: 'tier online como produto próprio', valor: '2028' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'O que segura o aluno depois da formatura', html: '<p>Nenhum negócio de educação se sustenta só com conteúdo, porque o conteúdo já está em toda parte. O que faz o aluno continuar é ter ferramenta que ele não quer largar: a anamnese assistida, o whitebook, os questionários com escore e a calculadora de proposta.</p><p>Por isso o acesso ao sistema morre junto com a matrícula, e isso precisa estar escrito no material do aluno desde o primeiro dia. Ferramenta que continua funcionando depois da formatura não gera decisão nenhuma. Quem quiser seguir usando tem dois caminhos: assinar o sistema ou entrar no programa de continuidade, a mentoria, que já inclui o sistema dentro.</p>' },
    { tipo: 'texto', titulo: 'Regra de comunicação', html: '<p>O programa de continuidade não aparece em nenhum material de venda nem em nenhum material de aluno: página, apresentação, script, e-mail, WhatsApp, contrato, área de membros e comunicação de turma. Prometer vaga em um produto que ainda não tem data, formato nem preço cria expectativa que a operação não controla, e citar um próximo degrau durante a venda sugere que a formação não basta. A ponte só é feita na formatura.</p>' },
    { tipo: 'lista', titulo: 'Os dois adicionais de IA', itens: [
      'IA clínica do consultório: grava a consulta, devolve a anamnese já estruturada nos campos que o senhor definir, recebe o exame físico lançado por escrito e apoia o direcionamento diagnóstico e terapêutico. Aprende com o feedback dado ao fim de cada relatório, com atualizações a cada 50 ou 60 dias.',
      'Plataforma própria da formação: área de membros, caixa de ferramentas, assistente das aulas, percurso por faixas, pesquisas de entrada e de satisfação, painel de acompanhamento por aluno e banco de referências.',
      'Os dois são escopo novo, fora do contrato atual. Esforço estimado de 12,5 a 18 semanas de trabalho técnico na plataforma, com a IA clínica em fase própria.'
    ]},
    { tipo: 'texto', titulo: 'Certificação', html: '<p>A recomendação é vender a turma fundadora como curso livre, com certificado de conclusão e carga horária, e buscar chancela de faculdade a partir da segunda turma. O teto realista hoje é extensão ou aperfeiçoamento, que não dá título nem especialidade, e a grade da primeira turma precisa poder mudar. Com uma turma formada e casos na mão, a negociação com a faculdade acontece de cima.</p>' },
    { tipo: 'texto', titulo: 'O tier online', html: '<p>A porta online existe na oferta como resposta a objeção de viagem ou de valor. Como produto próprio, com material editado e prova social, ela é peça de 2028: as gravações das imersões só existem depois de maio de 2027, e o funil de aplicação atual não comporta volume de venda online.</p>' }
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'Os dois adicionais de IA entram como proposta de escopo novo, com detalhamento escrito.' },
    { data: '2026-09-05', texto: 'A certificação é pesquisada agora e decidida depois da turma fundadora aberta.' }
  ],
  pendencias: [
    { quem: 'rodrigo', feito: false, texto: 'Decidir se os dois adicionais de IA entram, e em que ordem.', prazo: 'antes de dezembro de 2026' },
    { quem: 'inception', feito: false, texto: 'Ligações e orçamentos com as faculdades levantadas na pesquisa de certificação.', prazo: 'setembro de 2026' }
  ],
  links: [],
  atualizado: '2026-09-05'
};
