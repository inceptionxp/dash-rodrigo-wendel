window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

DASH.views['marca-identidade'] = {
  titulo: 'Academia DTM e Viver de DTM',
  kicker: 'Marca',
  resumo: 'Academia DTM é a casa que forma. Viver de DTM é a formação que ela vende. Duas marcas, uma assinatura: a Academia endossa, a formação aparece em destaque.',
  fatos: [
    { rotulo: 'marca-mãe', valor: 'Academia DTM' },
    { rotulo: 'produto', valor: 'Viver de DTM' },
    { rotulo: 'cores do sistema', valor: '5' },
    { rotulo: 'famílias tipográficas', valor: '3' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'O símbolo', html: '<p>O símbolo é um losango construído por oito traços de mesma espessura, com as pontas arredondadas. O losango veio do pedido do senhor de manter a referência à marca antiga; os oito traços trocaram o braço que irradia por módulos que se encaixam, e é isso que faz a figura ler como instituição, e não como sol ou floco.</p><p>A geometria está congelada. O símbolo herda a cor do contexto: navy sobre papel, fluor sobre navy. Ele nunca gira, nunca ganha sombra, nunca entra em moldura e nunca substitui a logo em documento oficial, certificado ou contrato.</p>' },
    { tipo: 'tabela', titulo: 'A paleta', colunas: ['Cor', 'Código', 'Onde entra', 'Proporção'], linhas: [
      ['Papel', '#F4F3EC', 'fundo de tudo que é impresso e de tudo que é lido', '55%'],
      ['Navy', '#101C46', 'texto de peso, fundo escuro, assinatura', '30%'],
      ['Cobalto', '#2C4BFF', 'ação: botão, link, o que se clica', '7%'],
      ['Fluor', '#CDF23F', 'rótulo, número-chave, símbolo sobre fundo escuro', '5%'],
      ['Menta', '#12D9A0', 'estado: barra de progresso, marcação de concluído', '3%']
    ]},
    { tipo: 'lista', titulo: 'Regras de cor que não se negociam', itens: [
      'Fluor nunca é fundo de área grande e nunca é texto sobre papel. Ele reprova em contraste.',
      'Menta é estado, cobalto é ação. As duas não se encostam com navy atrás.',
      'Nada de preto puro nem branco puro: o preto é #0B0F1A e o branco é #F4F3EC.',
      'Erro de formulário não usa vermelho. Resolve-se com peso do rótulo e um filete navy no campo.'
    ]},
    { tipo: 'lista', titulo: 'As três fontes, uma função cada', itens: [
      'Archivo nos títulos. Nunca em texto corrido.',
      'Hanken Grotesk no texto. Nunca em título.',
      'Space Mono em rótulo e número. Nunca passa de uma linha.',
      'Banidas em qualquer nível: Inter, Roboto, Open Sans, Montserrat, Poppins e Lato.'
    ]},
    { tipo: 'tabela', titulo: 'Os dois perfis', colunas: ['Perfil', 'Fala com', 'Assunto', 'Régua de voz'], linhas: [
      ['@rodrigowendeldtm', 'paciente', 'dor de mandíbula, tratamento, captação de consulta', 'linguagem simples, sem termo técnico sem tradução'],
      ['@academiadtm', 'dentista', 'diagnóstico, arsenal terapêutico, consultório e números', 'vocabulário técnico sem traduzir, dado com fonte, posição firme']
    ]},
    { tipo: 'texto', titulo: 'Como as duas marcas assinam juntas', html: '<p>Material institucional: a Academia DTM assina sozinha. Material de venda da formação: Viver de DTM em destaque, com a linha uma formação da e a assinatura da Academia em no máximo 60% da altura. Nunca dois logos do mesmo tamanho lado a lado, e nunca uma assinatura única misturando as duas marcas.</p>' }
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'A identidade visual da Academia DTM foi aprovada pelo Dr. Rodrigo, com as cores e a página validadas.' },
    { data: '2026-07-11', texto: 'Território visual definido: navy, fluor-lime e papel off-white.' }
  ],
  pendencias: [
    { quem: 'rodrigo', texto: 'Aprovar a versão horizontal da logo, que assina cabeçalho, e-mail, rodapé e certificado.', prazo: 'setembro de 2026' },
    { quem: 'rodrigo', texto: 'Confirmar se o selo vira o avatar do perfil @academiadtm.', prazo: 'antes da virada do perfil' },
    { quem: 'rodrigo', texto: 'Decidir a fonte da assinatura Viver de DTM, hoje uma exceção fora do sistema.', prazo: 'antes da divulgação' },
    { quem: 'rodrigo', texto: 'Enviar o arquivo vetorial da logo antiga do Curso DTM, se existir.', prazo: 'quando encontrar' }
  ],
  links: [
    { rotulo: 'Abrir o brandbook', href: 'brandbook-academia-dtm/index.html' },
    { rotulo: 'Símbolo em SVG', href: 'marca/simbolo-academia-dtm_navy.svg' },
    { rotulo: 'Viver de DTM · horizontal navy', href: 'marca/viver-de-dtm_horizontal_navy.png' },
    { rotulo: 'Viver de DTM · horizontal claro', href: 'marca/viver-de-dtm_horizontal_off.png' },
    { rotulo: 'Viver de DTM · selo navy', href: 'marca/viver-de-dtm_selo_navy.png' },
    { rotulo: 'Viver de DTM · selo claro', href: 'marca/viver-de-dtm_selo_off.png' }
  ],
  atualizado: '2026-09-05'
};

DASH.views['marca-social'] = {
  titulo: 'A linha editorial',
  kicker: 'Marca',
  resumo: 'Dois posts por semana no @academiadtm, com a linha educativa dominante. O feed existe para revelar um erro que o leitor não sabe que comete, e passa a vender a partir de outubro.',
  fatos: [
    { rotulo: 'posts por semana', valor: '2' },
    { rotulo: 'linhas editoriais', valor: '5' },
    { rotulo: 'pautas prontas', valor: '9' },
    { rotulo: 'divulgação começa', valor: 'outubro/2026' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'O mix da primeira fase', colunas: ['Linha', 'Proporção', 'Papel no funil'], linhas: [
      ['Educativa', '35%', 'Revela o problema: o dentista não sabe que confunde bruxismo com DTM'],
      ['Tese e autoridade', '25%', 'Separa o senhor dos formadores de ferramenta única'],
      ['Persuasiva', '20%', 'Planta a ideia de que DTM monetiza, sem vender nada ainda'],
      ['Prova e transformação', '10%', 'Sustenta que o método funciona fora do exemplo didático'],
      ['Conexão e bastidor', '10%', 'Humaniza o professor por trás da Academia']
    ]},
    { tipo: 'tabela', titulo: 'As quatro primeiras semanas', colunas: ['Semana', 'Terça', 'Quinta'], linhas: [
      ['1', 'Anúncio da virada de Curso DTM para Academia DTM', 'Educativa: o dado de que a maioria lê sinal de DTM como bruxismo'],
      ['2', 'Tese: o cinto do Batman', 'Educativa: o guarda-chuva da DTM'],
      ['3', 'Persuasiva: a falácia de que DTM não dá dinheiro', 'Prova: o caso das duas pacientes com o mesmo quadro'],
      ['4', 'Educativa: por que a placa genérica não resolve', 'Bastidor: jiu-jitsu e progressão']
    ]},
    { tipo: 'lista', titulo: 'A voz do perfil', itens: [
      'Cada peça ensina algo aplicável. Post que não deixa o leitor sabendo fazer algo novo não é da Academia.',
      'Número sempre com fonte e ano ao lado.',
      'Opinião forte é bem-vinda quando sustentada, e admitir o limite é parte da voz.',
      'Fala em arsenal de ferramentas, nunca em técnica única.',
      'Frase curta, verbo forte, vocabulário técnico sem tradução.',
      'Um pedido por peça: salvar, comentar ou responder.'
    ]},
    { tipo: 'lista', titulo: 'O que nunca entra', itens: [
      'Promessa de renda, em número, em insinuação ou por depoimento.',
      'Número financeiro que ainda não foi conferido com a clínica.',
      'Nome de concorrente. Ataca-se o padrão do mercado, nunca uma pessoa.',
      'Urgência fabricada, contagem regressiva ou últimas vagas inventadas.',
      'Depoimento sem autorização, de paciente ou de aluno.',
      'Linguagem de paciente, que pertence ao outro perfil, e emoji em peça pública.',
      'Superlativo sem medida: o melhor, o único, inédito, definitivo.'
    ]},
    { tipo: 'texto', titulo: 'A virada de outubro', html: '<p>Até outubro o feed só constrói autoridade. A partir daí a proporção muda: a linha educativa cai, a persuasiva sobe e a comunicação passa a converter interesse em aplicação. A régua de voz não muda em nenhum dos dois momentos.</p>' }
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'A documentação da estratégia de redes fica centralizada nesta dash.' },
    { data: '2026-09-05', texto: 'A divulgação começa em outubro, com a produção operacional começando imediatamente.' },
    { data: '2026-09-05', texto: 'Os perfis de paciente e de academia ficam separados, com linhas editoriais distintas.' }
  ],
  pendencias: [
    { quem: 'rodrigo', texto: 'Revisar os pilares e os temas antes de a produção começar.', prazo: 'setembro de 2026' },
    { quem: 'rodrigo', texto: 'Ler e validar o guia de direcionamento das redes.', prazo: 'setembro de 2026' },
    { quem: 'inception', texto: 'Montar a pasta de referências visuais para a produção.', prazo: 'setembro de 2026' }
  ],
  links: [
    { rotulo: 'Abrir o guia de conteúdos e criativos', href: 'brandbook-academia-dtm/ds-conteudos-criativos.html' }
  ],
  atualizado: '2026-09-05'
};

DASH.views['marca-crencas'] = {
  titulo: 'As crenças que o conteúdo muda',
  kicker: 'Marca',
  resumo: 'Cada post existe para trocar uma crença específica por outra. Uma delas sustenta todas as demais e nunca sai do ar por mais de duas semanas.',
  fatos: [
    { rotulo: 'crenças mapeadas', valor: '10' },
    { rotulo: 'a que se repete sempre', valor: 'o guarda-chuva' },
    { rotulo: 'blocos de instalação', valor: '4' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'A crença que derruba todas as outras', html: '<p>Se o dentista clínico acreditar que DTM não é um diagnóstico e sim um guarda-chuva de cerca de dez quadros diferentes, e que só um protocolo de leitura em camadas com arsenal completo revela qual quadro está na cadeira dele, toda objeção sobre preço, formato e tempo perde força. A pergunta deixa de ser vale a pena aprender DTM e passa a ser eu não posso continuar chutando o diagnóstico do paciente que já está sentado aqui.</p>' },
    { tipo: 'tabela', titulo: 'Crença hoje, crença a instalar', colunas: ['O que ele acredita hoje', 'O que o conteúdo instala', 'Pilar'], linhas: [
      ['DTM é bruxismo, ou é um diagnóstico só', 'DTM é um guarda-chuva com cerca de dez diagnósticos em três grupos', 'Educativa'],
      ['Uma placa resolve DTM', 'O arsenal completo, escolhido por critério, resolve o que a placa genérica não resolve', 'Educativa e tese'],
      ['Não tenho paciente de DTM suficiente', 'O paciente já está na minha agenda toda semana', 'Persuasiva · a confirmar com o professor'],
      ['DTM não dá dinheiro', 'O tratamento de DTM tem ticket muito acima de uma consulta comum', 'Persuasiva'],
      ['Não tenho tempo para mais uma formação', 'É um encontro por semana, e o alívio começa nas primeiras semanas', 'Educativa · a confirmar com o professor'],
      ['Online não ensina odontologia de verdade', 'Três imersões presenciais com prova prática validada ao vivo', 'Tese'],
      ['Preciso de título reconhecido para tratar DTM', 'Competência validada na prática pesa mais que diploma sem prática', 'Tese'],
      ['Já fiz pós e não voltou o investimento', 'A jornada completa liga diagnóstico, tratamento e negócio', 'Tese'],
      ['Ser conservador demais é sempre mais seguro', 'Existe critério objetivo para saber quando subir o degrau', 'Tese'],
      ['O que aprendi na formação já é suficiente', 'Ficar na fronteira da evolução terapêutica muda o desfecho do paciente', 'Prova']
    ]},
    { tipo: 'lista', titulo: 'A ordem em que elas entram', itens: [
      'Semanas 1 e 2: o guarda-chuva, a placa e o online contra o presencial. Sem essas três, nada do resto faz sentido.',
      'Semanas 3 e 4: o título, o critério de quando intervir e a atualização terapêutica. Aqui a crença muda de isso não é para mim para eu sou capaz de aprender.',
      'Semanas 5 e 6: paciente, tempo e dinheiro. São as objeções de circunstância, e só funcionam depois das anteriores.',
      'Perto da virada comercial: já fiz uma pós e não voltou o investimento.',
      'O guarda-chuva nunca fica fora do ar por mais de duas semanas seguidas.'
    ]},
    { tipo: 'texto', titulo: 'Uma crença ficou de fora', html: '<p>A crença sobre o uso de IA em consultório clínico foi levantada, mas não tem nenhuma fala do senhor por trás dela. Ela fica fora do calendário até o senhor confirmar que pensa assim e, de preferência, contar um caso real de uso. Publicar posição que não é sua é o único jeito rápido de perder a voz do perfil.</p>' }
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'O mapa de crenças passa a orientar cada pauta, para dar intenção ao conteúdo.' }
  ],
  pendencias: [
    { quem: 'rodrigo', texto: 'Confirmar as duas linhas marcadas como a confirmar e dizer se tem um caso de paciente escondido na própria cadeira.', prazo: 'setembro de 2026' },
    { quem: 'rodrigo', texto: 'Confirmar se quer instalar a crença sobre IA no consultório e ceder um caso real de uso.', prazo: 'quando decidir' }
  ],
  links: [],
  atualizado: '2026-09-05'
};
