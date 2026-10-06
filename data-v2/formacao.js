window.DASH = window.DASH || {}; DASH.views = DASH.views || {};

DASH.views['form-oferta'] = {
  titulo: 'A oferta em duas portas',
  status: 'em-revisao',
  kicker: 'Formação',
  resumo: 'O presencial é a oferta. O online é a resposta a quem trava em viagem ou em valor, e só entra depois que o presencial já foi oferecido.',
  fatos: [
    { rotulo: 'vagas no presencial', valor: '20' },
    { rotulo: 'turma fundadora', valor: 'R$ 15.000' },
    { rotulo: 'segunda porta', valor: 'R$ 8.000' },
    { rotulo: 'a partir da 2ª turma', valor: 'R$ 19.900' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'Presencial e online, lado a lado', colunas: ['', 'Presencial', 'Online'], linhas: [
      ['Vagas', '20', 'sem limite declarado'],
      ['Investimento', 'R$ 15.000, à vista ou em 12x de R$ 1.250', 'R$ 8.000'],
      ['Encontros ao vivo', '43', '43'],
      ['Imersões em Brasília', '3, com 8 dias de prática', 'gravação das imersões, produzida em 2027'],
      ['Shadowing na clínica', '2 dias, em duplas', 'não entra'],
      ['Grupo com o professor', 'o ano inteiro, até a formatura', 'não entra'],
      ['Certificado', 'carga completa', 'carga do online']
    ]},
    { tipo: 'texto', titulo: 'A regra comercial', html: '<p>O presencial é apresentado primeiro, sempre. O online só aparece para quem trava em viagem ou em valor, ou depois que as 20 vagas esgotarem. Nunca para quem hesita no conteúdo: nesse caso a resposta é conversa, não preço menor. A intenção é que o presencial pareça, o tempo todo, a escolha que vale mais a pena.</p><p>O online depende de duas coisas que ainda não existem: produção audiovisual contratada e cessão de imagem de pacientes e alunos. Enquanto isso, ele é carta de fechamento, não produto anunciado.</p>' },
    { tipo: 'tabela', titulo: 'O que sustenta o valor', colunas: ['Componente', 'Valor de referência'], linhas: [
      ['Currículo completo, 43 encontros com 3 imersões presenciais', 'R$ 19.900'],
      ['Shadowing na clínica do Dr. Rodrigo, 2 dias', 'R$ 6.500'],
      ['Banco de casos clínicos reais comentados', 'R$ 1.750'],
      ['DTM Para Todos, curso introdutório de 9 aulas', 'R$ 397'],
      ['Total', 'R$ 28.547']
    ]},
    { tipo: 'lista', titulo: 'O que a turma fundadora leva a mais', itens: [
      'Shadowing na clínica real: 2 dias em duplas, uma quarta viagem a Brasília. Sai da oferta a partir da segunda turma.',
      'Reconhecimento de fundador: o nome gravado como parte da primeira geração, na comunidade e na formatura.',
      'Grupo fechado no WhatsApp com o professor dentro, do primeiro dia à formatura.',
      'Kit de Ativação Imediata: ficha de anamnese, scripts de recepção e roteiro de devolutiva, liberados antes do primeiro encontro.',
      'Banco de casos comentados, incluindo o raciocínio de procedimentos que a formação ensina a indicar e encaminhar.',
      'Preço de fundador: R$ 4.900 abaixo do que a própria formação passa a custar na segunda turma.'
    ]},
    { tipo: 'texto', titulo: 'A garantia', html: '<p>Devolução até o Encontro 3, descontados os impostos e as taxas já recolhidos. Ela soma com os 7 dias de arrependimento previstos no Código de Defesa do Consumidor.</p>' },
    { tipo: 'lista', titulo: 'O que ainda não pode ir a público', itens: [
      'Os nove depoimentos em vídeo já gravados, até a autorização de cada um chegar.',
      'Qualquer cifra de faturamento. Nenhum número financeiro entra em peça antes da conferência com a clínica.',
      'Título de especialista ou reconhecimento de conselho. A promessa é certificado de conclusão com carga horária (piso de 130 horas na divulgação). O texto final do certificado sai com o nome da instituição.',
      'A palavra shadowing. Na peça pública o bônus é "2 dias na minha clínica, acompanhando minha rotina". E nenhum faturamento da clínica acompanha o bônus.'
    ]}
  ],
  decisoes: [
    { data: '2026-09-04', texto: '20 vagas no presencial e abertura de uma segunda porta, só online, a R$ 8.000.' },
    { data: '2026-09-04', texto: 'O presencial é sempre oferecido primeiro; o online é resposta a objeção de viagem ou valor.' },
    { data: '2026-08-26', texto: 'A turma fundadora custa R$ 15.000, e a formação passa a R$ 19.900 a partir da segunda turma.' }
  ],
  pendencias: [
    { quem: 'inception', feito: true, texto: 'Modelo de garantia: devolução do valor líquido até o Encontro 3.', prazo: 'feito' },
    { quem: 'rodrigo', feito: false, texto: 'Autorizações de uso dos depoimentos gravados.', prazo: 'em andamento' },
    { quem: 'rodrigo', feito: true, texto: 'Número de pacientes elegíveis por imersão.', prazo: 'encerrado' }
  ],
  links: [],
  atualizado: '2026-10-06'
};

DASH.views['form-grade'] = {
  titulo: 'As três etapas e os 43 encontros',
  status: 'entregue',
  kicker: 'Formação',
  resumo: 'Diagnóstico, tratamento e comercial, nessa ordem. Cada etapa fecha com uma imersão em Brasília, e a imersão é a prova prática: quem não passa, não muda de faixa.',
  fatos: [
    { rotulo: 'encontros', valor: '43' },
    { rotulo: 'online', valor: '35' },
    { rotulo: 'dias presenciais', valor: '8' },
    { rotulo: 'blocos de conteúdo', valor: '15' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'O que o aluno sai fazendo em cada etapa', colunas: ['Etapa', 'Encontros', 'O que ele sai fazendo'], linhas: [
      ['1 · Fundação e Diagnóstico', 'E1 a E15', 'Diagnostica dentro dos três grupos do guarda-chuva, com anamnese estruturada, exame físico protocolar e leitura de ressonância.'],
      ['2 · Tratamento', 'E16 a E35', 'Monta o plano escalonado das três escadas, executa com as próprias mãos o que está capacitado a fazer e sabe o que encaminhar.'],
      ['3 · Comercial, Gestão e Marketing', 'E36 a E43', 'Conduz a consulta de avaliação, apresenta o plano, fecha o tratamento e controla os próprios números.']
    ]},
    { tipo: 'tabela', titulo: 'As três provas presenciais', colunas: ['Prova', 'Onde', 'O que ele faz na frente da turma'], linhas: [
      ['Faixa azul', 'Imersão 1, dia 3', 'Exame físico completo em paciente real, integrado com anamnese e imagem, fechando um diagnóstico defensável.'],
      ['Faixa roxa', 'Imersão 2, dia 3', 'Caso misto: plano de tratamento completo e ao menos uma técnica executada sob supervisão.'],
      ['Faixa marrom', 'Imersão 3, dia 2', 'Simulação da consulta de avaliação inteira, do acolhimento ao fechamento, com os números da própria clínica.']
    ]},
    { tipo: 'texto', titulo: 'A linha entre executar e encaminhar', html: '<p>A Etapa 2 deixa explícito, encontro a encontro, o que o aluno sai capacitado a fazer e o que ele sai sabendo indicar. Ele executa todos os conservadores das três escadas, infiltração anestésica, dry needling, ácido hialurônico, corticoide e iPRF por infiltração simples. Conhece a indicação e encaminha toxina botulínica, artrocentese, artroscopia, discopexia, cirurgia aberta e prótese de ATM. A prática de agulha acontece só nas imersões, por um motivo óbvio: não se treina infiltração à distância.</p>' },
    { tipo: 'detalhe', titulo: 'Ver os 15 blocos de conteúdo', html: '<p><strong>Etapa 1 · Fundação e Diagnóstico</strong></p><ul><li>Bloco 0 · Nivelamento, 3 semanas, E1 a E3</li><li>Bloco 1 · Ficha e anamnese, 4 semanas, E4 a E7</li><li>Bloco 2 · Exame físico protocolar, preparação teórica, 1 semana, E8</li><li>Bloco 3 · Imagem e diagnóstico específico, 4 semanas, E9 a E12</li><li>Bloco 4 · Imersão de fechamento e prova da faixa azul, E13 a E15</li></ul><p><strong>Etapa 2 · Tratamento</strong></p><ul><li>Bloco 0 · Princípios do tratamento, 2 semanas, E16 e E17</li><li>Bloco 1 · Escada muscular, 6 semanas, E18 a E23</li><li>Bloco 2 · Escada de deslocamento de disco, 4 semanas, E24 a E27</li><li>Bloco 3 · Escada articular, 4 semanas, E28 a E31</li><li>Bloco 4 · Casos mistos, preparação, 1 semana, E32</li><li>Bloco 5 · Imersão de fechamento e prova da faixa roxa, E33 a E35</li></ul><p><strong>Etapa 3 · Comercial, Gestão e Marketing</strong></p><ul><li>Bloco 1 · Narrativa da primeira consulta, 3 semanas, E36 a E38</li><li>Bloco 2 · Captação básica, 2 semanas, E39 e E40</li><li>Bloco 3 · Retenção e números, 1 semana, E41</li><li>Bloco 4 · Imersão final, workshop de gestão e formatura, E42 e E43</li></ul><p>Os quatro estudos de caso caem em E7, E23, E27 e E31. As três provas caem em E15, E35 e E43.</p>' }
  ],
  decisoes: [
    { data: '2026-07-11', texto: 'A formação tem três imersões presenciais, uma fechando cada etapa, e cada uma é a prova daquela etapa.' },
    { data: '2026-07-10', texto: 'A linha entre o que o aluno executa e o que ele encaminha foi confirmada técnica por técnica.' }
  ],
  pendencias: [
    { quem: 'rodrigo', feito: true, texto: 'Material gravado dos Dois Tripés: gravado em agosto.', prazo: 'feito' },
    { quem: 'rodrigo', feito: true, texto: 'Carga horária: 2 horas por encontro online e 8 por dia de imersão, 134 horas no total.', prazo: 'fechado em 22/09' }
  ],
  links: [],
  atualizado: '2026-10-06'
};

DASH.views['form-calendario'] = {
  titulo: 'O calendário de 2027',
  status: 'em-revisao',
  kicker: 'Formação',
  resumo: 'De 23 de fevereiro a 30 de novembro de 2027, às terças, das 19h às 21h. São 41 semanas: 38 com encontro e 3 de respiro.',
  fatos: [
    { rotulo: 'início', valor: 'terça, 23/02/2027' },
    { rotulo: 'formatura', valor: 'terça, 30/11/2027' },
    { rotulo: 'semanas de calendário', valor: '41' },
    { rotulo: 'semanas com encontro', valor: '38' },
    { rotulo: 'semanas de respiro', valor: '3' }
  ],
  blocos: [
    { tipo: 'texto', titulo: 'Como a conta fecha', html: '<p>Entre 23/02 e 30/11 existem 41 terças. O conteúdo fixo soma 38 semanas: 35 encontros online mais as 3 semanas de imersão. Sobram 3 semanas livres, que viram respiro.</p><p>Os respiros só existem por causa de uma regra: quando o feriado cai na terça, aquele encontro anda para quarta ou quinta na mesma semana, em vez de ser cancelado. Sem isso, o calendário fecharia 38 por 38, sem uma única semana de folga. O respiro é a margem para quando uma aula que parecia caber em duas precisar de quatro.</p>' },
    { tipo: 'tabela', titulo: 'As três imersões em Brasília', colunas: ['Imersão', 'Semana', 'Dias', 'Fecha com'], linhas: [
      ['1 · Diagnóstico', 'quinta 20 a sábado 22/05', '3 dias', 'prova prática e faixa azul'],
      ['2 · Tratamento', 'quinta 21 a sábado 23/10', '3 dias', 'prova prática e faixa roxa'],
      ['3 · Formatura', 'segunda 29 e terça 30/11', '2 dias', 'apresentação final e faixa marrom']
    ]},
    { tipo: 'tabela', titulo: 'Os três encontros que mudam de dia', colunas: ['Semana', 'Feriado na terça', 'Encontro vai para'], linhas: [
      ['06/09', 'Independência, 07/09', 'quarta 08/09'],
      ['11/10', 'Aparecida, 12/10', 'quarta 13/10'],
      ['01/11', 'Finados, 02/11', 'quarta 03/11']
    ]},
    { tipo: 'lista', titulo: 'O resto do ano em quatro pontos', itens: [
      'Respiros nas semanas de 24/05, 26/07 e 22/11, um por etapa.',
      'A Etapa 3 abre em 05/10, duas semanas antes da Imersão 2. Os Encontros 36 e 37 são de conteúdo comercial e não dependem da prova da faixa roxa, que acontece em 23/10.',
      'Shadowing entre junho e setembro, em duplas, de preferência quinta e sexta. Com 20 alunos são 10 duplas, ou 20 dias da agenda ao longo do ano.',
      'Cada dia de imersão tem 8 horas. Somadas aos 35 encontros online de 2 horas, dão 134 horas de formação.',
      '30 de novembro é Dia do Evangélico no Distrito Federal. Não bloqueia a formatura, mas afeta equipe de apoio e comércio.'
    ]},
    { tipo: 'texto', titulo: 'Como comunicar as três datas deslocadas', html: '<p>As três entram no material de venda e no calendário do aluno desde o primeiro dia, já resolvidas. Avisar em cima da hora derruba presença e passa recado de improviso. Nas três, o encontro vai para a quarta.</p>' },
    { tipo: 'detalhe', titulo: 'Ver o calendário semana a semana', html: '<table><thead><tr><th>Sem</th><th>Semana de</th><th>O que acontece</th><th>Dia da aula</th><th>Feriado na semana</th><th>Marco</th></tr></thead><tbody><tr><td>1</td><td>22/02</td><td>ETAPA 1 abre · E1</td><td>ter 23/02</td><td></td><td></td></tr><tr><td>2</td><td>01/03</td><td>E2</td><td>ter 02/03</td><td></td><td></td></tr><tr><td>3</td><td>08/03</td><td>E3</td><td>ter 09/03</td><td></td><td></td></tr><tr><td>4</td><td>15/03</td><td>E4</td><td>ter 16/03</td><td></td><td></td></tr><tr><td>5</td><td>22/03</td><td>E5</td><td>ter 23/03</td><td>Sexta Santa (sex 26/03)</td><td></td></tr><tr><td>6</td><td>29/03</td><td>E6</td><td>ter 30/03</td><td>Páscoa (dom 28/03)</td><td></td></tr><tr><td>7</td><td>05/04</td><td>E7 · estudo de caso 1</td><td>ter 06/04</td><td></td><td></td></tr><tr><td>8</td><td>12/04</td><td>E8</td><td>ter 13/04</td><td></td><td></td></tr><tr><td>9</td><td>19/04</td><td>E9</td><td>ter 20/04</td><td>Tiradentes (qua 21/04)</td><td></td></tr><tr><td>10</td><td>26/04</td><td>E10</td><td>ter 27/04</td><td>1º de Maio (sáb 01/05)</td><td></td></tr><tr><td>11</td><td>03/05</td><td>E11</td><td>ter 04/05</td><td></td><td></td></tr><tr><td>12</td><td>10/05</td><td>E12</td><td>ter 11/05</td><td></td><td></td></tr><tr><td>13</td><td>17/05</td><td>IMERSÃO 1 · E13-E15 · 3 dias em Brasília</td><td>qui 20 a sáb 22/05</td><td></td><td>GATE + faixa azul</td></tr><tr><td>14</td><td>24/05</td><td>RESPIRO 1</td><td></td><td>Corpus Christi (qui 27/05)</td><td></td></tr><tr><td>15</td><td>31/05</td><td>ETAPA 2 abre · E16</td><td>ter 01/06</td><td></td><td></td></tr><tr><td>16</td><td>07/06</td><td>E17</td><td>ter 08/06</td><td></td><td></td></tr><tr><td>17</td><td>14/06</td><td>E18</td><td>ter 15/06</td><td></td><td></td></tr><tr><td>18</td><td>21/06</td><td>E19</td><td>ter 22/06</td><td></td><td></td></tr><tr><td>19</td><td>28/06</td><td>E20</td><td>ter 29/06</td><td></td><td></td></tr><tr><td>20</td><td>05/07</td><td>E21</td><td>ter 06/07</td><td></td><td></td></tr><tr><td>21</td><td>12/07</td><td>E22</td><td>ter 13/07</td><td></td><td></td></tr><tr><td>22</td><td>19/07</td><td>E23 · estudo de caso 2</td><td>ter 20/07</td><td></td><td>1º grau na faixa azul</td></tr><tr><td>23</td><td>26/07</td><td>RESPIRO 2</td><td></td><td></td><td></td></tr><tr><td>24</td><td>02/08</td><td>E24</td><td>ter 03/08</td><td></td><td></td></tr><tr><td>25</td><td>09/08</td><td>E25</td><td>ter 10/08</td><td></td><td></td></tr><tr><td>26</td><td>16/08</td><td>E26</td><td>ter 17/08</td><td></td><td></td></tr><tr><td>27</td><td>23/08</td><td>E27 · estudo de caso 3</td><td>ter 24/08</td><td></td><td>2º grau na faixa azul</td></tr><tr><td>28</td><td>30/08</td><td>E28</td><td>ter 31/08</td><td></td><td></td></tr><tr><td>29</td><td>06/09</td><td>E29</td><td>qua 08/09</td><td>Independência (ter 07/09)</td><td></td></tr><tr><td>30</td><td>13/09</td><td>E30</td><td>ter 14/09</td><td></td><td></td></tr><tr><td>31</td><td>20/09</td><td>E31 · estudo de caso 4</td><td>ter 21/09</td><td></td><td>3º grau na faixa azul</td></tr><tr><td>32</td><td>27/09</td><td>E32 · casos mistos (prepara o gate)</td><td>ter 28/09</td><td></td><td></td></tr><tr><td>33</td><td>04/10</td><td>ETAPA 3 abre · E36</td><td>ter 05/10</td><td></td><td></td></tr><tr><td>34</td><td>11/10</td><td>E37</td><td>qua 13/10</td><td>Aparecida (ter 12/10)</td><td></td></tr><tr><td>35</td><td>18/10</td><td>IMERSÃO 2 · E33-E35 · 3 dias em Brasília</td><td>qui 21 a sáb 23/10</td><td></td><td>GATE + faixa roxa</td></tr><tr><td>36</td><td>25/10</td><td>E38</td><td>ter 26/10</td><td></td><td></td></tr><tr><td>37</td><td>01/11</td><td>E39</td><td>qua 03/11</td><td>Finados (ter 02/11)</td><td></td></tr><tr><td>38</td><td>08/11</td><td>E40</td><td>ter 09/11</td><td></td><td></td></tr><tr><td>39</td><td>15/11</td><td>E41</td><td>ter 16/11</td><td>Proclamação (seg 15/11), Consciência Negra (sáb 20/11)</td><td></td></tr><tr><td>40</td><td>22/11</td><td>RESPIRO 3</td><td></td><td></td><td></td></tr><tr><td>41</td><td>29/11</td><td>IMERSÃO 3 · E42-E43 · 2 dias · FORMATURA</td><td>seg 29 e ter 30/11</td><td>Dia do Evangélico no DF (ter 30/11)</td><td>GATE final + faixa marrom</td></tr></tbody></table>' }
  ],
  decisoes: [
    { data: '2026-09-05', texto: 'A turma começa em 23/02/2027, depois do Carnaval, e o cronograma fecha em 30/11/2027.' },
    { data: '2026-09-13', texto: 'Feriado na terça desloca o encontro para a quarta da mesma semana, em vez de cancelar.' },
    { data: '2026-09-05', texto: 'O shadowing é uma quarta viagem, separada das três imersões.' },
    { data: '2026-09-22', texto: 'Imersão 3 em 29 e 30/11, com 8 horas por dia de imersão.' },
    { data: '2026-09-24', texto: 'Imersão 1 em 20 a 22/05 e Imersão 2 em 21 a 23/10.' }
  ],
  pendencias: [
    { quem: 'rodrigo', feito: true, texto: 'Imersões 1 e 2 em 20 a 22/05 e 21 a 23/10.', prazo: 'fechado em 24/09' },
    { quem: 'rodrigo', feito: true, texto: 'Imersão 3 em 29 e 30/11, usando o feriado do Distrito Federal.', prazo: 'fechado em 22/09' },
    { quem: 'rodrigo', feito: true, texto: 'Semanas de feriado: encontro na quarta.', prazo: 'fechado em 13/09' },
    { quem: 'rodrigo', feito: true, texto: 'Abertura da turma em 16/02: cortada em 13/09.', prazo: 'feito' },
    { quem: 'rodrigo', feito: true, texto: 'Shadowing em duplas, entre junho e setembro.', prazo: 'encerrado' },
    { quem: 'rodrigo', feito: true, texto: 'Data limite de matrícula.', prazo: 'encerrado' },
    { quem: 'inception', feito: true, texto: 'Grade de outubro reajustada: a Etapa 3 abre em 05/10, com os Encontros 36 e 37 antes da Imersão 2.', prazo: 'feito' }
  ],
  links: [],
  atualizado: '2026-10-06'
};

DASH.views['form-jornada'] = {
  titulo: 'A jornada do aluno e as faixas',
  status: 'entregue',
  kicker: 'Formação',
  resumo: 'Quatro faixas em três viradas de identidade: eu diagnostico, eu trato, eu cobro pelo que sei. Faixa só se recebe passando na prova presencial, nunca por presença.',
  fatos: [
    { rotulo: 'faixas', valor: '4' },
    { rotulo: 'provas presenciais', valor: '3' },
    { rotulo: 'graus na faixa azul', valor: '3' },
    { rotulo: 'faixa preta', valor: 'fora desta formação' }
  ],
  blocos: [
    { tipo: 'tabela', titulo: 'As fases e o que muda no aluno', colunas: ['Fase', 'Faixa', 'A virada'], linhas: [
      ['Acolhimento, antes do primeiro encontro', 'branca', 'Sai da compra e entra na turma: recebe o mapa da jornada, conhece os colegas e o material inicial.'],
      ['Fase 1 · E1 a E15', 'branca para azul', 'Deixa de achar que sabe e passa a diagnosticar com precisão.'],
      ['Fase 2 · E16 a E35', 'azul para roxa', 'Deixa de nomear o problema e passa a resolver, com julgamento clínico e com as próprias mãos.'],
      ['Fase 3 · E36 a E43', 'roxa para marrom', 'Deixa de só saber tratar e passa a cobrar pelo que sabe fazer.']
    ]},
    { tipo: 'texto', titulo: 'Como se sobe de faixa', html: '<p>A faixa é entregue ao vivo, na imersão que fecha a etapa, diante da turma, e só depois de o aluno demonstrar a competência daquela etapa em paciente real ou voluntário, com validação em tempo real do professor. Nenhuma faixa é entregue por tempo de curso, por presença ou por boa vontade. Se o aluno não passa, ele não sobe, e a conversa sobre isso acontece em particular, antes da cerimônia coletiva.</p><p>A faixa marrom fecha a formação. A preta representa a elite da área, quem vira referência e ensina outros profissionais, e está fora do que esta formação entrega.</p>' },
    { tipo: 'lista', titulo: 'Os graus dentro da faixa azul', itens: [
      'A Fase 2 dura de quatro a cinco meses. Uma faixa só no fim deixaria o aluno sem reconhecimento nenhum no trecho mais pesado da jornada.',
      'Por isso ele acumula três graus na faixa azul, um a cada escada fechada: muscular no E23, disco no E27 e articular no E31.',
      'O critério é o estudo de caso daquele bloco, que já existe na grade. Nenhuma avaliação nova foi criada.',
      'Grau não tem cerimônia: é reconhecimento em aula. Só a faixa tem cerimônia, para o momento alto não banalizar.'
    ]},
  ],
  decisoes: [
    { data: '2026-07-11', texto: 'A formação vai até a faixa marrom; a preta representa a elite da área e fica fora do escopo.' },
    { data: '2026-07-11', texto: 'As três passagens de faixa acontecem dentro da imersão presencial, não em encontro online.' }
  ],
  pendencias: [
    { quem: 'rodrigo', feito: true, texto: 'Nomenclatura branca, azul, roxa e marrom, e os nomes das três fases.', prazo: 'encerrado' },
    { quem: 'rodrigo', feito: true, texto: 'Suporte da faixa.', prazo: 'encerrado' }
  ],
  links: [],
  atualizado: '2026-10-06'
};
