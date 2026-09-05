window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

/* ─────────── met-aprendiz ─────────── */
DASH.views['met-aprendiz'] = {
  titulo: 'Quem é o dentista',
  kicker: 'Método',
  resumo: 'O aluno é o dentista que trata DTM como bruxismo e não sabe que erra. Maioria mulher, já com anos de consultório, muitas vezes com outra especialidade — e com caixa pra investir.',
  fatos: [
    { rotulo: 'mulheres nas duas últimas turmas', valor: '80%' },
    { rotulo: 'apontam limitação de abertura como bruxismo', valor: '63,9%' },
    { rotulo: 'adultos com sinais de DTM', valor: '3 em 10' },
    { rotulo: 'clínicos que desconhecem o DC/TMD', valor: '61%' },
  ],
  blocos: [
    {
      tipo: 'lista', titulo: 'O retrato — o que você já validou',
      itens: [
        'Não é só o clínico geral. O especialista de outra área (orto, prótese, cirurgia) é quem mais procura, e é quem tem caixa pra bancar a formação.',
        'Maioria feminina forte: 80% de mulheres nas duas últimas turmas. A comunicação assume a dentista como público majoritário.',
        'Agenda cheia de convênio, restauração e canal. Trabalha muito e o extrato do fim do mês não reflete isso.',
        'Estuda em noite de semana, das 19h às 21h — janela que você confirmou.',
      ],
    },
    {
      tipo: 'lista', titulo: 'O que ele sente e o que ele não vê',
      itens: [
        'Sente: não sabe diferenciar bruxismo de DTM. A confusão é estatística, não é falta de talento.',
        'Sente: teto de renda na clínica geral e dependência de convênio.',
        'Sente: trava comercial. A frase literal de aluna sua é "a gente sabe o que tem que fazer e fica patinando".',
        'Não vê: trata o sintoma com placa genérica achando que fez o protocolo completo.',
        'Não vê: o paciente que vale de dez a vinte vezes uma consulta comum já senta na cadeira dele.',
      ],
    },
    {
      tipo: 'tabela', titulo: 'As objeções que a venda vai encontrar',
      colunas: ['Objeção', 'O que responde'],
      linhas: [
        ['É longo, presencial demais, longe', 'Semanal e online, com três viagens no ano inteiro'],
        ['Curso online de odontologia funciona?', 'A palpação é presencial e o encontro é ao vivo toda semana'],
        ['Tem paciente de DTM na minha cidade?', 'Três em cada dez adultos têm sinais — ele já está na cadeira'],
        ['DTM não dá dinheiro', 'O caso do próprio professor: consultório pequeno, nada depois das 18h'],
        ['Vou investir e não vou aplicar', 'Ganho comercial já na primeira etapa, com cadência que não esfria'],
      ],
    },
    {
      tipo: 'texto', titulo: 'A leitura que a comunicação herda',
      html: '<p>A consciência do público é baixa e a sofisticação do mercado é intermediária. Existem ofertas de DTM ativas, mas nenhum mecanismo dominante. Por isso o conteúdo de atração precisa <strong>revelar o erro antes de vender</strong>: abrir pelo dado da confusão entre bruxismo e DTM converte mais do que abrir por oferta ou preço.</p>',
    },
    {
      tipo: 'detalhe', titulo: 'Ver o estudo completo do aluno',
      html: `
        <p><strong>Universo e recorte.</strong> Cerca de 450 mil cirurgiões-dentistas registrados no Brasil, com aproximadamente 33% de especialistas registrados e 53% seguindo generalistas. Metade dos profissionais ativos está no Sudeste. A profissão é majoritariamente feminina (60,1% entre cirurgiões-dentistas).</p>
        <p><strong>Tamanho de mercado.</strong> Universo total de 450 mil dentistas. O recorte intermediário é hipótese explícita: generalistas (53%) cruzados com um corte de 40% de carreira e contexto compatíveis, o que dá cerca de 95 mil. Não citar esse número como dado fechado em peça de venda. O alcance real hoje é o ecossistema do professor: cerca de 6.800 seguidores, aproximadamente 120 especialistas formados, mais de 300 alunos no total e os leads históricos da especialização.</p>
        <p><strong>Retrato falado.</strong> Ela tem entre 30 e 45 anos, formou-se há seis a oito anos e toca um consultório próprio ou divide uma cadeira alugada. Pelo menos uma vez por semana um paciente chega com dor na mandíbula, estalo ao mastigar, dor de cabeça constante ou desgaste nos dentes da frente. Ela faz o que aprendeu na faculdade: chama de bruxismo, indica placa, espera melhorar. Às vezes melhora. Na maioria das vezes o paciente some ou aprende a conviver com a dor. Ela sente que trata sintoma sem entender causa, e desconfia que devolve dinheiro toda vez que encaminha esse paciente. Já pensou numa pós, mas dois anos presenciais longe de casa travam a decisão.</p>
        <p><strong>A escada do desejo.</strong> O que ele declara é "quero aprender a tratar DTM", "quero um diferencial", "quero ganhar mais". O que está por trás é parar de se sentir incompetente quando esse paciente senta na cadeira, deixar de ser substituível e trabalhar menos horas ganhando mais. No topo: ser reconhecido como quem resolve o que os outros não resolvem. Escada construída por triangulação entre pesquisa e relato do professor, ainda sem entrevista com aluno — validar nos primeiros leads.</p>
        <p><strong>A concorrência pelo tempo dele.</strong> Agenda de convênio que paga as contas, exaustão documentada na categoria (um em cada dez dentistas com burnout), vida familiar, cursos de gestão do nicho e cursos gravados de DTM que prometem o mesmo resultado sem horário fixo. A implicação é comunicar o alívio de parar de tratar errado, não só o ganho.</p>
        <p><strong>Habilidades digitais.</strong> WhatsApp e Instagram são uso diário. Zoom e Teams estão confirmados como familiares nas turmas atuais. Formulário digital já é rotina, porque a ficha de avaliação roda assim. O que falta validar é o conforto com área de membros — o que sustenta um passo a passo explícito de primeiro acesso.</p>
        <p><strong>Objeções completas.</strong> Além das quatro da tabela: "tem certificado e quantas horas?" (certificação pesa na decisão), "dez meses é muito tempo" (ancorar a duração como mecanismo: diagnóstico, tratamento e negócio na mesma trilha) e "não tenho tempo, já sou sobrecarregado" (um encontro semanal, não diário).</p>
        <p><strong>Onde ele está.</strong> Instagram de professores-referência, congressos e sociedades da especialidade, e a base própria do professor: ex-alunos, seguidores e leads da especialização.</p>
      `,
    },
  ],
  decisoes: [
    { data: '2026-07-12', texto: 'Público inclui o especialista de outra área, não só o clínico geral.' },
    { data: '2026-07-12', texto: 'Maioria feminina confirmada com dado das duas últimas turmas.' },
    { data: '2026-07-12', texto: 'Janela de estudo: noite de semana, das 19h às 21h.' },
  ],
  pendencias: [
    { quem: 'inception', texto: 'Aplicar as quatro perguntas de detecção de consciência nos primeiros leads reais da captação.', prazo: 'na abertura da captação' },
  ],
  links: [
    { rotulo: 'Estudo completo do aluno (documento)', href: 'docs/dna-aprendiz.md' },
  ],
  atualizado: '2026-09-05',
};

/* ─────────── met-expert ─────────── */
DASH.views['met-expert'] = {
  titulo: 'Quem é você nesse mercado',
  kicker: 'Método',
  resumo: 'A base de autoridade de toda a comunicação: expertise clínica em volume real, formação científica e prova de negócio no próprio consultório. É o que nenhum concorrente do nicho reúne.',
  fatos: [
    { rotulo: 'anos de atuação', valor: '30' },
    { rotulo: 'especialistas formados', valor: '≈120' },
    { rotulo: 'pacientes atendidos na carreira', valor: '+8.000' },
    { rotulo: 'anos de atendimento voluntário', valor: '17' },
  ],
  blocos: [
    {
      tipo: 'texto', titulo: 'O posicionamento em uma frase',
      html: '<p>O único formador de DTM que reúne <strong>expertise clínica em volume real</strong>, <strong>base científica</strong> e <strong>visão de negócio comprovada no próprio consultório</strong> — ensinando o raciocínio clínico completo, não uma técnica da moda.</p>',
    },
    {
      tipo: 'tabela', titulo: 'Credenciais',
      colunas: ['O quê', 'Onde'],
      linhas: [
        ['Graduação em Odontologia', 'UNESP Araçatuba, 2000'],
        ['Especialização e mestrado em DTM e Dor Orofacial', 'UNIFESP, 2001 a 2004'],
        ['Fellowship internacional', 'Universidade de Zurique, 2013'],
        ['Título de especialista', 'Prova de 2002; a resposta virou modelo da banca e depois ele foi convidado a compor a banca'],
        ['Formação de especialistas', 'Cerca de 120 em 8 turmas, aproximadamente 10% dos especialistas de DTM do país'],
      ],
    },
    {
      tipo: 'texto', titulo: 'O número de resultado, e como ele deve ser dito',
      html: '<p>A melhora acima de <strong>92%</strong> em cerca de <strong>3.000 pacientes</strong> vem do <strong>atendimento voluntário de 17 anos</strong> — não da clínica particular. Sempre citar os dois juntos: é o que torna o número verificável e é a prova de que o tratamento conservador funciona mesmo com poucos recursos. Fora desse contexto, o número vira promessa solta.</p>',
    },
    {
      tipo: 'lista', titulo: 'As bandeiras — contra o que a marca se posiciona',
      itens: [
        'Cirurgia antes de esgotar o conservador.',
        'Toxina botulínica indiscriminada no músculo mastigatório.',
        'Confundir DTM com bruxismo — o erro número um do dentista comum.',
        'Cada especialista puxando pro próprio viés, enquanto o paciente peregrina e começa a duvidar de si.',
        'Guruismo e promessa de dinheiro fácil.',
      ],
    },
    {
      tipo: 'lista', titulo: 'A voz — o que é seu e ninguém copia',
      itens: [
        '"Pra quem só tem martelo, tudo é prego."',
        '"O cinto do Batman" — uma ferramenta pra cada demanda, nunca uma técnica só.',
        '"DTM é um guarda-chuva", como dor de dente: mesmo sintoma, tratamentos opostos.',
        '"Antes de intervir, você precisa entender."',
        '"Tem onda que é marola e tem onda que é tsunami."',
        '"Enxugando gelo" — tratar o local sem resolver o sistêmico.',
      ],
    },
    {
      tipo: 'detalhe', titulo: 'Ver a linha do tempo e os números completos',
      html: `
        <p><strong>2000.</strong> Graduação em Odontologia na UNESP Araçatuba. Fascinado pela anatomia da ATM no primeiro ano, tendo ele mesmo um estalo na articulação, num tempo em que quase nenhum professor dominava o tema.</p>
        <p><strong>Ainda na graduação.</strong> Estágio de três anos com o professor Norberto, conhecido num congresso em Uberaba ainda como estudante.</p>
        <p><strong>2001 a 2004.</strong> Especialização e mestrado em Dor Orofacial na UNIFESP.</p>
        <p><strong>2002.</strong> Estudou os dez temas possíveis da prova de título e escreveu dez dissertações. A prova dele virou o modelo de correção da banca.</p>
        <p><strong>2013.</strong> Fellowship na Universidade de Zurique.</p>
        <p><strong>2014.</strong> A virada: assume a coordenação de um curso com autonomia total e monta uma formação ampla, sem viés de técnica única.</p>
        <p><strong>Hoje.</strong> Referência nacional, com cerca de 10% dos especialistas de DTM do Brasil formados por ele.</p>
        <p><strong>Números.</strong> Trinta anos na área e consultório próprio desde 2003. Mais de 8.000 pacientes atendidos na carreira. Cerca de 1.500 avaliações estruturadas na base de dados clínica, a um ritmo aproximado de 300 por ano. Mais de 300 alunos no total, contando imersões, atualizações e palestras. Faturamento de um milhão no último ano com clínica pequena, atendendo sozinho, de 28 a 30 horas por semana, nada depois das 18h e nada aos sábados.</p>
        <p><strong>Crenças-âncora.</strong> Tratamento conservador e reversível como primeira opção. Tratamento multimodal, múltiplas modalidades para controle dos sintomas. Avaliação protocolar individualizada e diagnóstico específico. DTM não é um diagnóstico e bruxismo não é DTM. E a bandeira pronta pra campanha: não se trata DTM com cirurgia, ortodontia, botox ou placa.</p>
      `,
    },
  ],
  decisoes: [
    { data: '2026-07-11', texto: 'Posicionamento fechado: formação para dentistas que não dominam DTM.' },
  ],
  pendencias: [
    { quem: 'rodrigo', texto: 'Bio curta e longa, trajetória resumida e fotos profissionais (retrato, consultório, casual).', prazo: 'antes das peças de captação' },
  ],
  links: [
    { rotulo: 'Banco de histórias', href: '#met-historias' },
  ],
  atualizado: '2026-09-05',
};

/* ─────────── met-historias ─────────── */
DASH.views['met-historias'] = {
  titulo: 'Banco de histórias',
  kicker: 'Método',
  resumo: 'Dezessete histórias reais, cada uma com o lugar onde rende mais. Nenhuma delas é ilustração: são a prova que sustenta a página, o deck e o conteúdo. O texto integral está no documento.',
  fatos: [
    { rotulo: 'histórias catalogadas', valor: '17' },
    { rotulo: 'depoimentos de paciente em vídeo', valor: '4' },
    { rotulo: 'que forjaram a expertise', valor: '7' },
  ],
  blocos: [
    {
      tipo: 'tabela', titulo: 'Forjaram a expertise',
      colunas: ['História', 'Em uma frase', 'Onde usar'],
      linhas: [
        ['A prova que virou gabarito', 'Escreveu dissertação sobre os dez temas possíveis e a prova dele virou o modelo da banca.', 'Página, deck, abertura de aula'],
        ['O estalo na própria articulação', 'A ATM que o fascinou no primeiro ano era a dele, e rendeu o estágio que definiu a carreira.', 'Conteúdo de origem, página'],
        ['A virada de 2014', 'Ao coordenar com autonomia total, montou uma formação sem viés de técnica única.', 'Página, seção diferencial'],
        ['O cinto do Batman', 'A analogia autoral que organiza o método: uma ferramenta pra cada demanda.', 'Conteúdo, manifesto, deck'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Forjaram a expertise — parte 2',
      colunas: ['História', 'Em uma frase', 'Onde usar'],
      linhas: [
        ['O ultrassom que quebrou a resistência dele', 'Ficou anos fechado pros agregados plaquetários até a aplicação guiada mudar a mentalidade.', 'Conteúdo de autoridade'],
        ['Perdi a mão do momento de intervir', 'Ser conservador demais custou o timing em casos reais, e daí nasceu o critério de escalonar.', 'Conteúdo, aula de tratamento'],
        ['Dezessete anos de voluntariado', 'Cerca de 3.000 pacientes atendidos de graça, com melhora acima de 92% sem cirurgia.', 'Página, prova de resultado'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Pessoais',
      colunas: ['História', 'Em uma frase', 'Onde usar'],
      linhas: [
        ['A escolha da Odontologia', 'Entrou por matemática e física, e só se identificou quando começou a atender gente.', 'Conteúdo de bastidor'],
        ['Faixa roxa, um grau', 'O jiu-jitsu dele é a origem da progressão por faixas dentro da formação.', 'Conteúdo, desenho do produto'],
        ['A mãe e o dinheiro dormindo', 'A própria mãe foi seduzida por promessa de ganho fácil, e isso fixou a posição dele.', 'Conteúdo, posicionamento'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Pacientes — depoimento em vídeo',
      colunas: ['História', 'Em uma frase', 'Onde usar'],
      linhas: [
        ['Raquel, 20 anos sem diagnóstico', 'Ouviu falar em canal e em extrair o dente até chegar em quem lê DTM.', 'Página, prova social central'],
        ['Carol, chegava com dor e saía sem', 'O agulhamento aliviou na hora e a reeducação a ensinou a se autogerenciar.', 'Página, conteúdo de eficácia'],
        ['Maria Alice, a dor não passa sozinha', 'Melhorou, desistiu, voltou pior. Hoje gerencia as crises sozinha.', 'Abertura de vídeo, urgência'],
        ['Não é só passar uma placa', 'O que a marcou foi a clareza do plano e a disposição de adaptar até resolver.', 'Conteúdo contra o viés único'],
      ],
    },
    {
      tipo: 'tabela', titulo: 'Pacientes e alunos — outros casos',
      colunas: ['História', 'Em uma frase', 'Onde usar'],
      linhas: [
        ['As duas psicólogas', 'Mesmo caso, décadas de diferença: uma saiu com sequela, a outra sem nenhuma.', 'Página, história-âncora'],
        ['Eu tomava 15 comprimidos por dia', 'Peregrinou por cinco especialidades sem diagnóstico e cogitou se internar.', 'Abertura de vídeo, página'],
        ['O professor aposentado de 77 anos', 'Viaja de carro a Brasília uma vez por mês só pra assistir às aulas, e senta na frente.', 'Conteúdo, prova pedagógica'],
      ],
    },
  ],
  decisoes: [
    { data: '2026-07-07', texto: 'Quatro depoimentos de paciente em vídeo recebidos, transcritos e catalogados.' },
  ],
  pendencias: [
    { quem: 'rodrigo', texto: 'Autorização de uso de imagem de cada paciente, e confirmação do direito de uso dos depoimentos de aluno gravados na parceria antiga.', prazo: 'antes de qualquer publicação' },
  ],
  links: [
    { rotulo: 'Banco de histórias (texto integral)', href: 'docs/banco-de-historias.md' },
  ],
  atualizado: '2026-09-05',
};

/* ─────────── met-metodo ─────────── */
DASH.views['met-metodo'] = {
  titulo: 'O método',
  kicker: 'Método',
  resumo: 'O método ainda não tem nome fechado: três opções aguardam a sua decisão. A promessa já de pé: formar dentistas capazes de diagnosticar, tratar e lucrar com DTM, caso a caso, não com técnica única.',
  fatos: [
    { rotulo: 'diagnósticos sob o guarda-chuva', valor: '≈10 em 3 grupos' },
    { rotulo: 'camadas até o diagnóstico', valor: '4' },
    { rotulo: 'degraus da escada terapêutica', valor: '3' },
    { rotulo: 'critério pra subir o degrau', valor: '3 a 6 meses' },
  ],
  blocos: [
    {
      tipo: 'framework', titulo: 'O guarda-chuva da DTM',
      svg: '../brandbook-academia-dtm/kit-frameworks/svg/F1-guarda-chuva-dtm.svg',
      legenda: 'DTM não é um diagnóstico: são cerca de dez diagnósticos em três grupos — muscular, articular e deslocamento de disco.',
    },
    {
      tipo: 'framework', titulo: 'Os dois tripés',
      svg: '../brandbook-academia-dtm/kit-frameworks/svg/F2-dois-tripes.svg',
      legenda: 'O tripé sistêmico (sono, atividade física, aspectos psicoemocionais) explica a sobrecarga; o tripé local é onde se intervém.',
    },
    {
      tipo: 'framework', titulo: 'A escada terapêutica',
      svg: '../brandbook-academia-dtm/kit-frameworks/svg/F3-escada-terapeutica.svg',
      legenda: 'Uma escada por grupo diagnóstico: começa no conservador, sobe pro minimamente invasivo e só então chega no invasivo.',
    },
    {
      tipo: 'framework', titulo: 'O percurso da formação',
      svg: '../brandbook-academia-dtm/kit-frameworks/svg/F4-percurso-da-formacao.svg',
      legenda: 'Três etapas — diagnóstico, tratamento e negócio — e cada uma fecha numa imersão presencial em Brasília com prova prática ao vivo.',
    },
    {
      tipo: 'framework', titulo: 'O martelo único e o arsenal',
      svg: '../brandbook-academia-dtm/kit-frameworks/svg/F5-martelo-unico-e-arsenal.svg',
      legenda: 'Cada especialidade empurra a própria ferramenta. O arsenal faz o contrário: escolhe a ferramenta certa pra cada caso.',
    },
    {
      tipo: 'detalhe', titulo: 'Ver o método por dentro',
      html: `
        <p><strong>O nome do método está em aberto.</strong> MODAL foi proposto em julho e você pediu pra rever. Três opções seguem na mesa desde 28/07: <strong>Arsenal Multimodal</strong> (mantém a palavra que você gostou e a imagem do cinto do Batman), <strong>Amplitude Clínica</strong> (o mais forte juridicamente, com duplo sentido real com a amplitude de abertura bucal) e <strong>Abordagem Multicritério</strong> (o mais sóbrio, enfatiza o rigor da decisão). Enquanto não houver decisão, nenhuma peça usa nome de método: quem assina é <strong>Academia DTM</strong> e <strong>Viver de DTM</strong>. Isso não trava nada, mas deixa uma camada de diferenciação sem uso.</p>
        <p><strong>A leitura em quatro camadas.</strong> Camada 1, a ficha de perguntas que o paciente preenche antes, com base validada em português mais os acréscimos autorais de sono, atividade física e medicamentos. Camada 2, anamnese profunda: intensidade, frequência, duração e fatores de melhora, piora e precipitação. Camada 3, exame físico protocolar com palpação, sons articulares e medidas de movimento — a parte que exige o presencial. Camada 4, imagem. As quatro juntas fecham o diagnóstico específico.</p>
        <p><strong>As três escadas.</strong> A escada muscular vai da eletroestimulação, laser, liberação miofascial, controle do bruxismo e educação em dor até a infiltração anestésica e o agulhamento, com a toxina botulínica no topo, como último recurso. A escada do deslocamento de disco começa em exercícios de amplitude e sobe até artroscopia e discopexia. A escada articular vai de laser, fármaco e crioterapia até prótese de ATM. O corte do que a formação capacita a fazer, revisado por você em 28/07: todos os conservadores das três escadas, mais infiltração anestésica e agulhamento. O restante entra como indicação e condução, não como execução.</p>
        <p><strong>O timing.</strong> Insistir no conservador de três a seis meses. Se o paciente não responde e o diagnóstico está confirmado, subir o degrau. Gravidade, imagem e impacto em outras áreas da vida entram na conta. É o critério que evita os dois erros opostos: intervir cedo demais e tarde demais.</p>
        <p><strong>Os dois princípios transversais.</strong> A <em>educação em dor</em> atravessa diagnóstico, tratamento e venda — não é uma caixinha ao lado das outras, é a espinha filosófica. A <em>fenotipação</em> é a visão de futuro: entender por que cada paciente responde diferente a cada terapia. Ainda não tem passo a passo próprio ensinável, então segue como princípio, não como framework.</p>
        <p><strong>Nota de arte.</strong> O desenho do percurso ainda mostra a abertura em 1º de fevereiro. A data vigente é 23/02/2027 — a peça precisa ser atualizada antes de ir pra qualquer material público.</p>
      `,
    },
  ],
  decisoes: [
    { data: '2026-07-10', texto: 'Corte do que a formação capacita a fazer: capacita nos conservadores, mais infiltração anestésica e agulhamento.' },
    { data: '2026-07-28', texto: 'Material dos dois tripés gravado por você, com o gesto da folha riscada ao meio.' },
    { data: '2026-07-28', texto: 'O CPAD e as seis fases não são seus e saíram do material. Fica só a verdade clínica, sem urgência fabricada.' },
  ],
  pendencias: [
    { quem: 'rodrigo', texto: 'Decidir o nome do método entre as três opções enviadas em 28/07.', prazo: 'até 31/10' },
    { quem: 'rodrigo', texto: 'Lista nominal dos diagnósticos de cada grupo e critérios objetivos de escalonamento por grupo.', prazo: 'até 15/10' },
    { quem: 'inception', texto: 'Atualizar a arte do percurso com a data de abertura em 23/02/2027.', prazo: 'antes das peças públicas' },
  ],
  links: [
    { rotulo: 'Frameworks do método (documento)', href: 'docs/frameworks-metodo.md' },
    { rotulo: 'Kit de frameworks visuais', href: '../brandbook-academia-dtm/kit-frameworks/index.html' },
  ],
  atualizado: '2026-09-05',
};
