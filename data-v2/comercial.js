window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

DASH.views['com-pagina'] = {
  titulo: 'A página de aplicação',
  status: 'entregue',
  kicker: 'Comercial',
  resumo: 'A página está no ar em academiadtm.com.br/formacao desde 12/10. Ela não vende: faz o dentista aplicar para uma conversa de 30 minutos com o senhor. Nenhum valor, vaga ou horário aparece ali.',
  fatos: [
    { rotulo: 'no ar desde', valor: '12/10/2026' },
    { rotulo: 'dobras', valor: '9' },
    { rotulo: 'passos até a matrícula', valor: '3' },
    { rotulo: 'perguntas respondidas', valor: '8' },
    { rotulo: 'valor na página', valor: 'nenhum' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'Por que aplicação e não checkout', html: '<p>O público está no nível de consciência mais baixo: o dentista não sabe que confunde sinal de bruxismo com sinal de DTM. Botão de compra em cima desse leitor não converte, porque ele ainda não aceitou que tem um problema. A página existe para elevar a consciência, gerar desejo e levar a uma conversa sem compromisso. É nessa conversa que a formação é apresentada e o investimento aparece.</p>' },
    { tipo: 'lista', titulo: 'O que a página mostra, na ordem', itens: [
      'Abertura: a turma fundadora começa em 23 de fevereiro de 2027, com aplicação por conversa.',
      'DTM é um guarda-chuva com cerca de dez diagnósticos dentro.',
      'Quem só tem martelo trata tudo como prego: o método em três partes.',
      'O caso de DTM começa e termina na cadeira do dentista: as três etapas e as imersões.',
      'Quem conduz: a trajetória do senhor.',
      'Os dois perfis de dentista que cabem na turma.',
      'Só a turma fundadora passa 2 dias na clínica do senhor.',
      'Oito perguntas que todo dentista se faz antes da matrícula.',
      'A aplicação: os três passos e o formulário.'
    ]},
    { tipo: 'lista', titulo: 'Os três passos, como aparecem na página', itens: [
      '01. O dentista preenche o formulário, em cerca de 3 minutos.',
      '02. A coordenação da Academia DTM chama no WhatsApp, conhece a rotina dele e agenda a conversa.',
      '03. Conversa por vídeo de 30 minutos com o senhor, que ouve o caso, mostra a formação e, se fizer sentido para os dois lados, apresenta a proposta.'
    ]},
    { tipo: 'lista', titulo: 'O que já funciona na página', itens: [
      'O formulário grava cada aplicação num banco de dados, com nome, WhatsApp, e-mail, o que ele vê na cadeira e a resposta sobre viajar.',
      'A pergunta de viagem: "Você consegue viajar a Brasília em 4 ocasiões em 2027?", com três respostas.',
      'A origem de cada aplicação fica registrada: indicação, orgânico ou pago, com os parâmetros da campanha.',
      'O Gerenciador de Tags do Google está instalado e dispara o evento aplicacao_enviada a cada envio. O Pedro liga o pixel e as conversões a partir dele.',
      'Consentimento obrigatório e política de privacidade publicada.'
    ]}
  ],
  decisoes: [
    { data: '2026-09-04', texto: 'A página não exibe valor, parcela nem número de vagas. O investimento vive na apresentação comercial.' },
    { data: '2026-09-04', texto: 'O fluxo de aplicação foi reduzido de seis para três passos.' },
    { data: '2026-09-05', texto: 'A estrutura, as cores e a identidade da página foram validadas pelo senhor.' },
    { data: '2026-10-12', texto: 'Versão 7 publicada em academiadtm.com.br/formacao, com o currículo confirmado e sem número de vagas nem horários.' }
  ],
  pendencias: [
    { quem: 'inception', feito: true, texto: 'Período escrito como fevereiro a novembro de 2027.', prazo: 'feito' },
    { quem: 'rodrigo', feito: true, texto: 'Conferir a página no link e apontar qualquer informação incoerente.', prazo: 'feito' },
    { quem: 'inception', feito: true, texto: 'Versão 7: copy para o funil de reunião individual, visual mais limpo e as definições de 06/10.', prazo: 'entregue em 06/10' },
    { quem: 'inception', feito: true, texto: 'Publicar a página no domínio academiadtm.com.br.', prazo: 'feito em 12/10' },
    { quem: 'inception', feito: true, texto: 'Formulário gravando cada aplicação, com o evento de conversão no Gerenciador de Tags.', prazo: 'feito' }
  ],
  links: [
    { rotulo: 'Abrir a página no ar', href: 'https://academiadtm.com.br/formacao' }
  ],
  atualizado: '2026-10-17'
};

DASH.views['com-apresentacao'] = {
  titulo: 'A apresentação comercial',
  status: 'entregue',
  kicker: 'Comercial',
  resumo: 'Duas versões do mesmo deck. A padrão defende só o presencial e fecha em R$ 15.000. A segunda abre a porta online e só entra quando a objeção for viagem ou valor.',
  fatos: [
    { rotulo: 'lâminas na versão padrão', valor: '19' },
    { rotulo: 'lâminas com a porta online', valor: '21' },
    { rotulo: 'investimento no presencial', valor: 'R$ 15.000' },
    { rotulo: 'investimento no online', valor: 'R$ 8.000' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'Quando usar cada uma', colunas: ['Versão', 'Quando abrir', 'O que ela defende'], linhas: [
      ['Padrão', 'Sempre. É com ela que a conversa começa, com qualquer pessoa.', 'Uma coisa só: quatro dias com a mão no paciente, corrigida por quem ensina.'],
      ['Com a porta online', 'Depois, e só quando a objeção for viagem ou valor.', 'O mesmo percurso, mais a segunda porta e a comparação lado a lado.']
    ]},
    { tipo: 'texto', titulo: 'A regra que não se quebra', html: '<p>Oferecer duas opções antes de a pessoa querer o presencial é entregar desconto sem ninguém ter pedido. Se a hesitação for sobre o conteúdo, a resposta é conversa, não preço menor. Na prática: conduza a versão padrão e, se a pessoa disser que não consegue viajar três vezes no ano, abra a segunda na lâmina da porta online.</p>' },
    { tipo: 'lista', titulo: 'Os 30 minutos da conversa', itens: [
      'Abertura e escuta, 6 minutos: o senhor pergunta quantos casos o dentista devolveu no mês e ouve, citando o que ele escreveu na aplicação.',
      'O problema e o método, 7 minutos e meio: 3 em cada 10 adultos, os cerca de dez diagnósticos, o martelo e a escada.',
      'A formação, 3 minutos e meio: as três etapas, os 43 encontros e os 4 dias com a mão no paciente.',
      'Quem conduz e a prova, 3 minutos, seguidos de uma pausa para ouvir o dentista.',
      'A oferta, 5 minutos: o que entra, os 2 dias na clínica, o investimento e a conta do ticket.',
      'Garantia e decisão, 3 minutos e meio: devolução até o Encontro 3 e como a matrícula fecha.'
    ]},
    { tipo: 'lista', titulo: 'Como abrir e como conduzir', itens: [
      'Duplo clique no index.html da pasta. Abre em tela cheia no navegador.',
      'Seta para a direita, espaço ou passador avançam um passo por vez.',
      'A tecla P abre a janela do apresentador, com a nota, o próximo clique e o cronômetro. No Zoom ou no Meet, compartilhe só a janela do deck.',
      'Seta para a esquerda volta um passo.',
      'A tecla N liga e desliga as notas do apresentador, com a fala sugerida de cada lâmina.',
      'As fotos vão embutidas no arquivo. Abra uma vez no Chrome com internet para a fonte ficar guardada.'
    ]}
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'A apresentação passa a ter duas versões, e o Dr. Rodrigo escolhe qual abre em cada conversa.' },
    { data: '2026-09-04', texto: 'O presencial declara 20 vagas na lâmina de investimento.' },
    { data: '2026-10-06', texto: 'O deck passa a ser feito para a reunião individual de 30 minutos, com uma ideia por lâmina.' },
    { data: '2026-10-12', texto: 'Quadro de valor em 7 itens, somando R$ 45.897, com a turma fundadora a R$ 15.000.' }
  ],
  pendencias: [
    { quem: 'inception', feito: true, texto: 'Apresentação refeita para a reunião individual de 30 minutos: 19 lâminas na padrão, mais limpa e com as últimas definições.', prazo: 'entregue em 06/10' },
    { quem: 'inception', feito: true, texto: 'Versão 10: currículo confirmado pelo senhor, novo quadro de valor e certificado credenciado pelo MEC.', prazo: 'entregue em 12/10' }
  ],
  links: [
    { rotulo: 'Abrir a versão padrão', href: 'pecas/apresentacao-comercial/padrao/index.html' },
    { rotulo: 'Abrir a versão com a porta online', href: 'pecas/apresentacao-comercial/com-online/index.html' }
  ],
  atualizado: '2026-10-17'
};

DASH.views['com-fluxo'] = {
  titulo: 'Do formulário à matrícula',
  status: 'entregue',
  kicker: 'Comercial',
  resumo: 'Três passos entre a aplicação e a matrícula, com um número secundário de WhatsApp atendendo em nome da Academia. A especificação está entregue; a configuração é com o Pedro.',
  fatos: [
    { rotulo: 'passos', valor: '3' },
    { rotulo: 'canal de atendimento', valor: 'WhatsApp Business' },
    { rotulo: 'papel da IA', valor: 'só a qualificação inicial' }
  ],
  blocos: [
    { tipo: 'framework', titulo: 'O plano de infra, do formulário à matrícula', svg: 'assets/diagramas/infra-do-funil.svg', legenda: 'Dez passos entre a aplicação e a matrícula. A cor da barra à esquerda de cada caixa diz quem executa o passo.' },
    { tipo: 'tabela', titulo: 'Os três passos', colunas: ['Passo', 'O que acontece', 'Quem conduz'], linhas: [
      ['01', 'O dentista preenche o formulário de aplicação na página.', 'A página'],
      ['02', 'O contato é qualificado e um horário é agendado com o professor.', 'O atendimento, pelo número secundário'],
      ['03', 'Reunião de apresentação da formação, com o deck, e matrícula se houver acordo.', 'Dr. Rodrigo Wendel']
    ]},
    { tipo: 'texto', titulo: 'O número secundário e o personagem', html: '<p>O atendimento comercial roda em um número separado, com um personagem respondendo em nome da Academia. Isso é prática comum e resolve dois problemas ao mesmo tempo: preserva a agenda do senhor e evita que o professor seja a única pessoa disponível para responder mensagem, o que desvaloriza o serviço. O tempo dele fica reservado para a reunião de apresentação, que é onde a venda acontece de verdade.</p>' },
    { tipo: 'texto', titulo: 'Onde a IA entra, e onde não entra', html: '<p>A IA cobre a qualificação inicial: responde quem preencheu o formulário de madrugada, confirma os dados e mantém a conversa andando até o horário comercial. Daí para a frente é pessoa. Substituir o atendimento humano inteiro por IA não é recomendação nossa, e não é o que faz esse funil converter.</p>' },
    { tipo: 'texto', titulo: 'A trava que não se negocia', html: '<p>Nenhuma reunião entra na agenda sem que uma pessoa tenha falado antes com quem aplicou. Ele pode escolher o horário sozinho pelo link, e isso é bom, mas até a véspera alguém conversa com ele. É essa regra que separa o desenho de um atendimento inteiro por robô, e ela continua valendo quando o volume subir.</p>' },
    { tipo: 'tabela', titulo: 'As ferramentas de cada etapa', colunas: ['Etapa', 'Ferramenta', 'Quem configura'], linhas: [
      ['Formulário e campos de origem', 'No ar: grava cada aplicação com origem e parâmetros de campanha', 'feito'],
      ['Validação e barreira de robô', 'No ar: campos validados e campo-armadilha contra robô', 'feito'],
      ['Rastreio', 'Gerenciador de Tags instalado com o evento aplicacao_enviada; pixel e API de conversões a ligar', 'Pedro'],
      ['Automação do fluxo', 'Automações de WhatsApp e agendamento', 'Pedro'],
      ['Estado do contato', 'CRM com seis estágios', 'Pedro'],
      ['Envio de WhatsApp', 'Caminho oficial, direto ou dentro do CRM', 'Pedro'],
      ['Agenda e link da reunião', 'Segunda, quarta e quinta às 19h30, 30 minutos', 'Pedro'],
      ['Canal de atendimento', 'WhatsApp Business em número próprio', 'Dr. Rodrigo e Pedro'],
      ['E-mail de confirmação', 'Caixa no domínio da Academia', 'Pedro']
    ]},
    { tipo: 'lista', titulo: 'O que o Dr. Rodrigo providencia', itens: [
      'Um aparelho celular adicional, pode ser um antigo, só para esse canal.',
      'Um chip com número novo, dedicado ao atendimento comercial.',
      'Um número dedicado, cadastrado na API oficial da Meta. O aparelho tanto faz, pode ser chip eletrônico no celular dele (13/09): o que a infra exige é o número exclusivo do comercial.',
      'A definição de quem responde no dia a dia: alguém da equipe da clínica ou uma pessoa contratada para isso.'
    ]},
    { tipo: 'lista', titulo: 'A configuração do canal, passo a passo', itens: [
      'O chip é novo e no CNPJ da empresa, e o aparelho fica guardado, na tomada e no Wi-Fi. Número que já foi pessoal não serve, porque o histórico de contatos vem junto.',
      'O WhatsApp Business instalado nesse aparelho, com o perfil da Academia DTM: selo da marca, categoria educação, descrição curta, e-mail e site. Esse número nunca atende paciente, que continua no canal da clínica.',
      'O horário de atendimento declarado, com a mensagem de ausência repetindo esse mesmo horário e a saudação automática desligada, para não atropelar a confirmação que sai na hora.',
      'As etiquetas do atendimento criadas: aplicação nova, em conversa, agendado, compareceu, matriculado e agora não. Elas espelham o CRM enquanto ele não estiver ligado.',
      'O catálogo decidido, com a recomendação de não usar, porque valor só existe na conversa. E o número adicionado ao Meta Business, que é o que libera anúncio com botão de WhatsApp.',
      'As janelas fixas de agenda, definidas em 22/09: reuniões de 30 minutos, segunda, quarta e quinta às 19h30, uma por dia. Se a agenda lotar, abre a segunda janela do dia.'
    ]},
    { tipo: 'lista', titulo: 'O que o gestor do funil configura (Pedro)', itens: [
      'O pixel e a API de conversões dentro do Gerenciador de Tags, disparando no evento aplicacao_enviada. O formulário, os campos de origem, o campo-armadilha e o consentimento já estão no ar.',
      'A escolha do CRM e a integração dele com as aplicações que o formulário grava.',
      'O fluxo no n8n, nesta ordem: recebe, normaliza, gera a chave contra duplicidade, pontua, grava na planilha, cria ou atualiza o contato no CRM e dispara as três mensagens.',
      'A escolha das ferramentas de WhatsApp e de agenda, sempre por caminho oficial. O caminho não oficial é barato e rápido de ligar, e arrisca o número que sustenta o comercial.',
      'A agenda ligada à Google Agenda do Dr. Rodrigo: bloqueia o horário, gera o link da chamada, aceita remarcação pelo próprio link e avisa o fluxo a cada agendamento, remarcação ou falta.',
      'A conformidade e o monitoramento: consentimento no formulário, política de privacidade publicada, credenciais fora do código, registro de erro com sete dias de retenção e alerta quando passarem 48 horas sem nenhuma aplicação com campanha no ar.'
    ]},
    { tipo: 'tabela', titulo: 'A ordem de execução, e o que cada passo trava', colunas: ['Ordem', 'Passo', 'Quem', 'Trava o quê'], linhas: [
      ['01', 'Chip, aparelho e perfil no WhatsApp Business', 'Dr. Rodrigo', 'Trava tudo'],
      ['02', 'Janelas de agenda e duração da conversa', 'Dr. Rodrigo', 'Trava a agenda'],
      ['03', 'Escolha das ferramentas de WhatsApp e de agenda', 'Pedro', 'Trava o fluxo'],
      ['04', 'Pixel e conversões no Gerenciador de Tags', 'Pedro', 'Trava a medição da campanha'],
      ['05', 'Fluxo no n8n ligado ao formulário', 'Pedro', 'Trava o teste'],
      ['06', 'Teste de ponta a ponta em ambiente de teste', 'Pedro', 'Trava a produção'],
      ['07', 'Virada para produção e primeira aplicação real', 'Pedro e Dr. Rodrigo', 'Abre a captação']
    ]}
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'O atendimento comercial roda desde o início em número secundário, com personagem.' },
    { data: '2026-09-05', texto: 'A IA fica restrita à qualificação inicial; o acompanhamento e o fechamento são humanos.' }
  ],
  pendencias: [
    { quem: 'inception', feito: true, texto: 'Especificação do fluxo comercial, do formulário à matrícula.', prazo: 'entregue' },
    { quem: 'rodrigo', feito: true, texto: 'Quem atende no número secundário: o próprio Dr. Rodrigo, sob o nome do personagem.', prazo: 'fechado em 13/09' },
    { quem: 'inception', feito: true, texto: 'Formulário da página gravando cada aplicação, com origem, consentimento e evento de conversão.', prazo: 'feito' },
    { quem: 'rodrigo', feito: false, texto: 'Número de WhatsApp da Academia cadastrado na API oficial da Meta, com o Pedro.', prazo: 'antes da primeira aplicação' }
  ],
  links: [],
  atualizado: '2026-10-17'
};

DASH.views['com-campanha'] = {
  titulo: 'A campanha de abertura',
  status: 'entregue',
  kicker: 'Comercial',
  resumo: 'Tudo o que leva o dentista até a página de aplicação, validado pelo senhor em 12/10. A central reúne cada peça pronta para usar: imagens dos anúncios, roteiros, textos de e-mail e de WhatsApp e as legendas dos carrosséis.',
  fatos: [
    { rotulo: 'anúncios estáticos', valor: '10' },
    { rotulo: 'roteiros de vídeo', valor: '5' },
    { rotulo: 'carrosséis', valor: '5' },
    { rotulo: 'e-mails', valor: '7' },
    { rotulo: 'mensagens de WhatsApp', valor: '7' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'O que está na central', colunas: ['Peça', 'O que é', 'Quem usa'], linhas: [
      ['10 anúncios estáticos', 'Cada um em feed e em story, com texto e link da página', 'Pedro, no tráfego pago'],
      ['5 roteiros de vídeo', 'De 30 a 45 segundos, falados pelo senhor para a câmera', 'O senhor grava; o Pedro sobe'],
      ['5 carrosséis', '01 Mitos, 03 O que o paciente vive antes do sim, 05 Como funciona a formação, 08 Quem é Rodrigo Wendel e 09 Você pode, com a legenda final de cada um', 'O senhor publica no @academiadtm'],
      ['7 e-mails', '6 para a lista, da semana anterior à abertura até 13 dias antes do início da turma, e 1 para ex-alunos pedindo indicação', 'Quem dispara a lista'],
      ['7 mensagens de WhatsApp', '6 para a lista, no mesmo calendário dos e-mails, e 1 para ex-alunos', 'Quem dispara a lista']
    ]},
    { tipo: 'lista', titulo: 'Como usar a central', itens: [
      'Abra o link no computador. Cada anúncio tem a prévia, o arquivo em alta para baixar e o texto para copiar.',
      'Os textos de e-mail, WhatsApp e legenda saem com um clique no botão de copiar.',
      'Todo link leva para academiadtm.com.br/formacao, com os parâmetros que dizem de onde veio cada aplicação.'
    ]},
    { tipo: 'texto', titulo: 'O que liga a campanha', html: '<p>As peças estão prontas. Os anúncios entram no ar quando o perfil estiver renomeado para @academiadtm, com os carrosséis publicados, e quando o número de WhatsApp da Academia e o Meta Business estiverem configurados com o Pedro. Os vídeos entram assim que o senhor gravar os 5 roteiros.</p>' }
  ],
  decisoes: [
    { data: '2026-10-08', texto: 'O carrossel 02 saiu da série. Ficam 01, 03, 05, 08 e 09.' },
    { data: '2026-10-12', texto: 'Anúncios, roteiros de vídeo, e-mails e mensagens de WhatsApp validados pelo senhor.' },
    { data: '2026-10-17', texto: 'Legendas finais dos 5 carrosséis fechadas.' }
  ],
  pendencias: [
    { quem: 'inception', feito: true, texto: 'Os 10 anúncios estáticos em feed e story, com texto e link.', prazo: 'feito em 12/10' },
    { quem: 'inception', feito: true, texto: 'Os 5 roteiros de vídeo.', prazo: 'feito em 12/10' },
    { quem: 'inception', feito: true, texto: 'Os 5 carrosséis no Canva e as legendas finais.', prazo: 'feito' },
    { quem: 'inception', feito: true, texto: 'Os 7 e-mails e as 7 mensagens de WhatsApp.', prazo: 'feito em 12/10' },
    { quem: 'rodrigo', feito: false, texto: 'Renomear o perfil para @academiadtm e publicar os 5 carrosséis.', prazo: 'antes de ligar os anúncios' },
    { quem: 'rodrigo', feito: false, texto: 'Gravar os 5 vídeos dos roteiros.', prazo: 'antes de ligar os anúncios' }
  ],
  links: [
    { rotulo: 'Abrir a central da campanha', href: 'pecas/campanha/index.html' }
  ],
  atualizado: '2026-10-17'
};
