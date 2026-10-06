window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

DASH.views['inicio'] = {
  titulo: 'Onde o projeto está',
  status: 'em-producao',
  kicker: 'Início',
  resumo: 'O projeto está na fase final. Método, formação, oferta, calendário e marca estão entregues e decididos. Faltam quatro entregas da Inception, todas já em produção, e a reunião de entrega final.',
  fatos: [
    { rotulo: 'início da turma', valor: '23/02/2027' },
    { rotulo: 'encontros', valor: '43' },
    { rotulo: 'vagas no presencial', valor: '20' },
    { rotulo: 'carga horária', valor: '134 h' },
    { rotulo: 'portas de entrada', valor: '2' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'Onde estamos', html: '<p>O método está extraído e nomeado: Abordagem Multimodal. A formação está desenhada de ponta a ponta, com 43 encontros, 3 etapas, 3 imersões com datas fechadas e o calendário de 2027 semana a semana. A oferta, a garantia e as duas portas de entrada estão decididas.</p><p>As peças de venda estão nesta dash: a página de aplicação, a apresentação em duas versões e a especificação do fluxo do formulário à matrícula. A marca, o brandbook, o kit de frameworks e a linha editorial também. O domínio academiadtm.com.br está no ar.</p>' },
    { tipo: 'lista', titulo: 'O que a Inception entrega para fechar o projeto', itens: [
      'Os cinco carrosséis de abertura do perfil, para a revisão do senhor.',
      'Os 10 criativos estáticos e os 5 roteiros de vídeo para o tráfego pago.',
      'A página de aplicação atualizada com as últimas definições.',
      'A apresentação de vendas refeita para a reunião individual de 30 minutos, mais limpa e com menos lâminas.',
      'A reunião de entrega final e o treinamento.'
    ]},
    { tipo: 'lista', titulo: 'O que falta do Dr. Rodrigo', itens: [
      'As autorizações de uso dos depoimentos, que o senhor está colhendo nesta semana.',
      'O nome da instituição que emite o certificado, depois da reunião em Brasília.',
      'A revisão dos cinco carrosséis.'
    ]},
    { tipo: 'texto', titulo: 'O que fica com o Pedro', html: '<p>O canal comercial, as automações, o rastreio e a campanha no ar são configurados pelo Pedro, a partir da especificação entregue na tela Do formulário à matrícula. Esses assuntos são tratados direto entre o senhor e ele.</p>' }
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'A turma fundadora começa em 23/02/2027 e termina em 30/11/2027, com encontros às terças.' },
    { data: '2026-09-04', texto: 'A oferta tem duas portas: 20 vagas no presencial e uma opção só online, aberta apenas em objeção de viagem ou de valor.' },
    { data: '2026-09-05', texto: 'O comercial roda em número secundário de WhatsApp; a IA só qualifica o contato inicial.' },
    { data: '2026-09-13', texto: 'O método se chama Abordagem Multimodal.' },
    { data: '2026-09-24', texto: 'Imersões em 20 a 22/05, 21 a 23/10 e 29 e 30/11 de 2027.' },
    { data: '2026-10-06', texto: 'Garantia: devolução até o Encontro 3, descontados os impostos e as taxas já recolhidos.' },
    { data: '2026-10-06', texto: 'A Etapa 3 abre em 05/10/2027, com os Encontros 36 e 37 antes da Imersão 2.' }
  ],
  pendencias: [
    { quem: 'rodrigo', feito: true, texto: 'Dias das imersões: 20 a 22/05, 21 a 23/10 e 29 e 30/11 de 2027.', prazo: 'feito' },
    { quem: 'rodrigo', feito: true, texto: 'Feriado na terça: o encontro vai para a quarta da mesma semana.', prazo: 'fechado em 13/09' },
    { quem: 'rodrigo', feito: true, texto: 'Encontro de abertura em 16/02: cortado em 13/09.', prazo: 'feito' },
    { quem: 'inception', feito: false, texto: 'Os cinco carrosséis de abertura, em revisão com o senhor.', prazo: 'em revisão' },
    { quem: 'inception', feito: false, texto: 'Os 10 criativos estáticos e os 5 roteiros de vídeo para o tráfego.', prazo: 'em produção' }
  ],
  links: [],
  atualizado: '2026-10-06'
};
