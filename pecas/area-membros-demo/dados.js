/* Dados da Formação Viver de DTM · Academia DTM · Dr. Rodrigo Wendel
   Onda 1 · Inception

   PROCEDÊNCIA. Cada campo abaixo é rastreável a um dos três documentos-fonte:
     produto/plano-de-ensino-formacao.md   → etapas, blocos, títulos, resumos, materiais, formato
     produto/calendario-turma-2027.md      → as 44 semanas, datas, feriados, respiros e imersões
     produto/gamificacao-faixas.md         → faixas, graus e gates
   Nada aqui foi inventado para preencher tela. Encontro sem material listado no plano
   fica com `materiais: []`, e a interface mostra o estado vazio.

   O QUE NÃO ESTÁ AQUI, DE PROPÓSITO:
     · dia da semana e horário das aulas — a janela validada é 19h-21h em noite de semana,
       mas o dia continua pendente com o Rodrigo (calendario-turma-2027.md, Pendências 1).
     · carga horária das imersões — pendência P9 do contrato do design system.
     · qualquer número financeiro — pendência P7 do contrato do design system.
     · cor aplicada das faixas — a identidade visual das faixas é do @brand-director
       (gamificacao-faixas.md, seção 9). Aqui vive só a cor de referência em palavra. */

const DADOS = {
  formacao: {
    nome: 'Viver de DTM',
    subtitulo: 'Formação em DTM e Dor Orofacial',
    marcaMae: 'Academia DTM',
    professor: 'Dr. Rodrigo Wendel',
    turma: 'Turma Fundadora',
    periodo: 'fevereiro a novembro de 2027',
    inicio: '2027-02-01',
    fim: '2027-11-29',
    totalEncontros: 43,
    totalEncontrosOnline: 35,
    totalDiasPresenciais: 8,
    totalSemanas: 44,
    totalEtapas: 3,
    totalBlocos: 15,
    localImersoes: 'Brasília · Instituto Odontológico Rodrigo Wendel',
    janelaAula: '19h-21h em noite de semana',
    diaDaSemana: null
  },

  etapas: [
    {
      id: 'etapa-1',
      numero: 1,
      nome: 'Fundação e Diagnóstico',
      duracao: '~16 semanas',
      faixaDestino: 'azul',
      objetivo: 'O aluno sai diagnosticando DTM com precisão, usando anamnese estruturada, exame físico protocolar e leitura de imagem.',
      encontros: ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15'],
      blocos: [
        { id: 'e1-b0', numero: 0, nome: 'Nivelamento', duracaoSemanas: 3, encontros: ['E1','E2','E3'] },
        { id: 'e1-b1', numero: 1, nome: 'Ficha + Anamnese', duracaoSemanas: 4, encontros: ['E4','E5','E6','E7'] },
        { id: 'e1-b2', numero: 2, nome: 'Exame Físico Protocolar — Preparação Teórica', duracaoSemanas: 1, encontros: ['E8'] },
        { id: 'e1-b3', numero: 3, nome: 'Imagem (ressonância) + Diagnóstico específico', duracaoSemanas: 4, encontros: ['E9','E10','E11','E12'] },
        { id: 'e1-b4', numero: 4, nome: 'Imersão Presencial de Fechamento + GATE Faixa Azul', duracaoSemanas: 1, encontros: ['E13','E14','E15'] }
      ]
    },
    {
      id: 'etapa-2',
      numero: 2,
      nome: 'Tratamento',
      duracao: '~18 semanas',
      faixaDestino: 'roxa',
      objetivo: 'O aluno sai montando o plano de tratamento escalonado — do conservador ao invasivo — para cada um dos 3 grupos diagnósticos, e executando com as próprias mãos as técnicas em que está capacitado.',
      encontros: ['E16','E17','E18','E19','E20','E21','E22','E23','E24','E25','E26','E27','E28','E29','E30','E31','E32','E33','E34','E35'],
      blocos: [
        { id: 'e2-b0', numero: 0, nome: 'Princípios do Tratamento', duracaoSemanas: 2, encontros: ['E16','E17'] },
        { id: 'e2-b1', numero: 1, nome: 'Escada Muscular', duracaoSemanas: 6, encontros: ['E18','E19','E20','E21','E22','E23'] },
        { id: 'e2-b2', numero: 2, nome: 'Escada Deslocamento de Disco', duracaoSemanas: 4, encontros: ['E24','E25','E26','E27'] },
        { id: 'e2-b3', numero: 3, nome: 'Escada Articular', duracaoSemanas: 4, encontros: ['E28','E29','E30','E31'] },
        { id: 'e2-b4', numero: 4, nome: 'Casos Mistos — Preparação', duracaoSemanas: 1, encontros: ['E32'] },
        { id: 'e2-b5', numero: 5, nome: 'Imersão Presencial de Fechamento + GATE Faixa Roxa', duracaoSemanas: 1, encontros: ['E33','E34','E35'] }
      ]
    },
    {
      id: 'etapa-3',
      numero: 3,
      nome: 'Comercial, Gestão e Marketing Básico',
      duracao: '~8 semanas',
      faixaDestino: 'marrom',
      objetivo: 'Transformar a competência clínica recém-adquirida em receita: converter avaliação em tratamento, captar por indicação e posicionamento, reter e controlar os números essenciais.',
      encontros: ['E36','E37','E38','E39','E40','E41','E42','E43'],
      blocos: [
        { id: 'e3-b1', numero: 1, nome: 'Narrativa da Primeira Consulta', duracaoSemanas: 3, encontros: ['E36','E37','E38'] },
        { id: 'e3-b2', numero: 2, nome: 'Captação Básica', duracaoSemanas: 2, encontros: ['E39','E40'] },
        { id: 'e3-b3', numero: 3, nome: 'Retenção e Números', duracaoSemanas: 1, encontros: ['E41'] },
        { id: 'e3-b4', numero: 4, nome: 'Imersão Presencial Final — Workshop de Gestão, Comercial e Lucro + Formatura', duracaoSemanas: 1, encontros: ['E42','E43'] }
      ]
    }
  ],

  encontros: [
    {
      id: 'E1', numero: 1, etapaId: 'etapa-1', blocoId: 'e1-b0',
      titulo: 'O paciente que já está na sua cadeira',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'A prevalência real de DTM na população e a diferença entre ter sinal e precisar de tratamento. Por que essa demanda já está na cadeira do aluno todo dia e ele não a enxerga.',
      materiais: [
        { id: 'M-E1-1', nome: 'Lista de 3 pacientes reais com sinais de DTM não investigados', tipo: 'entrega' }
      ]
    },
    {
      id: 'E2', numero: 2, etapaId: 'etapa-1', blocoId: 'e1-b0',
      titulo: 'Os erros mais comuns (e por que eles acontecem)',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Confundir bruxismo com DTM, tratar sintoma sem diagnóstico, viés de especialidade e ausência de escuta clínica estruturada — os quatro erros que o dentista comum comete.',
      materiais: [
        { id: 'M-E2-1', nome: 'Autodiagnóstico escrito dos erros já cometidos na própria prática', tipo: 'entrega' }
      ]
    },
    {
      id: 'E3', numero: 3, etapaId: 'etapa-1', blocoId: 'e1-b0',
      titulo: 'Anatomia da ATM + os 2 frameworks-mãe',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null,
      pendencia: 'Depende do material gravado dos Dois Tripés, ainda pendente com o Rodrigo. Pode virar aula invertida.',
      resumo: 'Revisão da anatomia funcional da ATM e da musculatura mastigatória, e os dois modelos mentais que atravessam a formação inteira: o Guarda-Chuva e os Dois Tripés.',
      materiais: [
        { id: 'M-E3-1', nome: 'Template de mapa mental — guarda-chuva × dois tripés', tipo: 'template' },
        { id: 'M-E3-2', nome: 'Mapa mental preenchido relacionando os 3 grupos com os 2 tripés', tipo: 'entrega' }
      ]
    },
    {
      id: 'E4', numero: 4, etapaId: 'etapa-1', blocoId: 'e1-b1',
      titulo: 'O formulário de 40 perguntas: a ficha que já acolhe antes da consulta',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'A estrutura das 40 perguntas com base RDC/DC validada em PT-BR e os acréscimos autorais do Rodrigo. Por que aplicar a ficha antes da consulta muda a experiência do paciente.',
      materiais: [
        { id: 'M-E4-1', nome: 'Formulário de 40 perguntas (base RDC/DC + acréscimos autorais)', tipo: 'template' },
        { id: 'M-E4-2', nome: 'Formulário de 40 perguntas configurado na própria conta', tipo: 'entrega' }
      ]
    },
    {
      id: 'E5', numero: 5, etapaId: 'etapa-1', blocoId: 'e1-b1',
      titulo: 'Anamnese profunda: sentar, parar e escutar',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Os componentes da dor orofacial — intensidade, frequência, duração e fatores de melhora, piora e precipitação. Escuta clínica não é natural: precisa ser treinada.',
      materiais: [
        { id: 'M-E5-1', nome: 'Script de caso para o role-play de anamnese', tipo: 'caso' },
        { id: 'M-E5-2', nome: 'Roteiro de anamnese preenchido com os 4 componentes da dor', tipo: 'entrega' }
      ]
    },
    {
      id: 'E6', numero: 6, etapaId: 'etapa-1', blocoId: 'e1-b1',
      titulo: 'Investigando o Tripé Sistêmico na anamnese (sono, atividade física, psicoemocional)',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Sono, atividade física e aspecto psicoemocional como parte obrigatória da anamnese. Sem cuidar disso, tratamento local é enxugar gelo.',
      materiais: [
        { id: 'M-E6-1', nome: '2 casos clínicos reais anonimizados do Rodrigo', tipo: 'caso' },
        { id: 'M-E6-2', nome: 'Análise escrita dos 2 casos, com a perna comprometida do tripé sistêmico marcada', tipo: 'entrega' }
      ]
    },
    {
      id: 'E7', numero: 7, etapaId: 'etapa-1', blocoId: 'e1-b1',
      titulo: 'Estudo de caso: anamnese completa do zero ao registro',
      modalidade: 'online', formato: 'estudo-de-caso', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Estudo de caso mensal nº 1. Ficha pré-consulta, anamnese profunda e tripé sistêmico integrados num único atendimento simulado, conduzido pelo aluno sozinho.',
      materiais: [
        { id: 'M-E7-1', nome: 'Perfil de paciente do estudo de caso nº 1', tipo: 'caso' },
        { id: 'M-E7-2', nome: 'Anamnese completa de 1 caso, entregue por escrito antes do encontro', tipo: 'entrega' }
      ]
    },
    {
      id: 'E8', numero: 8, etapaId: 'etapa-1', blocoId: 'e1-b2',
      titulo: 'O exame físico protocolar: o que a literatura pede',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'A base teórica do protocolo validado internacionalmente: palpação muscular e articular, sons articulares e medidas de movimento mandibular com seus valores de referência.',
      materiais: [
        { id: 'M-E8-1', nome: 'Vídeo demonstrativo do protocolo executado pelo Rodrigo (aula invertida)', tipo: 'video' },
        { id: 'M-E8-2', nome: 'Checklist do protocolo de exame físico como roteiro pessoal da imersão', tipo: 'entrega' }
      ]
    },
    {
      id: 'E9', numero: 9, etapaId: 'etapa-1', blocoId: 'e1-b3',
      titulo: 'Interpretação de imagem: o que a ressonância mostra (e por que "dentista nenhum sabe ver")',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Anatomia da ATM em imagem, achados típicos de deslocamento de disco com e sem redução, sinais de degeneração articular, e quando pedir imagem — porque nem todo caso precisa.',
      materiais: [
        { id: 'M-E9-1', nome: 'Banco de imagens de ressonância reais anonimizadas', tipo: 'caso' },
        { id: 'M-E9-2', nome: 'Template de laudo simplificado', tipo: 'template' },
        { id: 'M-E9-3', nome: 'Laudo simplificado preenchido a partir de 2 imagens', tipo: 'entrega' }
      ]
    },
    {
      id: 'E10', numero: 10, etapaId: 'etapa-1', blocoId: 'e1-b3',
      titulo: 'Guarda-Chuva: Grupo Muscular — reconhecendo o diagnóstico',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Os diagnósticos musculares mais comuns do DC/RDC e como cada um se apresenta na anamnese, no exame físico e na imagem. O diferencial contra os outros 2 grupos.',
      materiais: [
        { id: 'M-E10-1', nome: '2 casos completos do grupo muscular (ficha + exame + imagem)', tipo: 'caso' },
        { id: 'M-E10-2', nome: 'Diagnóstico escrito dos 2 casos, com descarte explícito dos outros 2 grupos', tipo: 'entrega' }
      ]
    },
    {
      id: 'E11', numero: 11, etapaId: 'etapa-1', blocoId: 'e1-b3',
      titulo: 'Guarda-Chuva: Grupo Articular — reconhecendo o diagnóstico',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Osteoartrite, osteoartrose e os demais diagnósticos articulares do DC/RDC, com os achados típicos de imagem e o diferencial contra muscular e deslocamento de disco.',
      materiais: [
        { id: 'M-E11-1', nome: '2 casos completos do grupo articular', tipo: 'caso' },
        { id: 'M-E11-2', nome: 'Diagnóstico escrito e justificado de 2 casos do grupo articular', tipo: 'entrega' }
      ]
    },
    {
      id: 'E12', numero: 12, etapaId: 'etapa-1', blocoId: 'e1-b3',
      titulo: 'Guarda-Chuva: Grupo Deslocamento de Disco — reconhecendo o diagnóstico',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Deslocamento com redução contra deslocamento sem redução, os achados de imagem característicos e o fechamento do raciocínio diagnóstico à distância antes da imersão.',
      materiais: [
        { id: 'M-E12-1', nome: '2 casos completos de deslocamento de disco', tipo: 'caso' },
        { id: 'M-E12-2', nome: 'Diagnóstico escrito e justificado de 2 casos de deslocamento de disco', tipo: 'entrega' }
      ]
    },
    {
      id: 'E13', numero: 13, etapaId: 'etapa-1', blocoId: 'e1-b4',
      titulo: 'Imersão presencial: palpação e sons articulares hands-on — dia 1',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 1, diasImersao: 3,
      marco: null, pendencia: null,
      resumo: 'Prática supervisionada de palpação dos músculos mastigatórios e da região articular, reconhecimento tátil de pontos de tensão e identificação de sons articulares em tempo real.',
      materiais: [
        { id: 'M-E13-1', nome: 'Ficha de exame físico preenchida ao vivo e validada pelo Rodrigo', tipo: 'entrega' }
      ]
    },
    {
      id: 'E14', numero: 14, etapaId: 'etapa-1', blocoId: 'e1-b4',
      titulo: 'Imersão presencial: medidas de movimento e integração diagnóstica — dia 2',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 2, diasImersao: 3,
      marco: null, pendencia: null,
      resumo: 'Medição de abertura bucal, lateralidade e protrusão com régua milimetrada, correlacionando o que foi palpado no dia 1 com a leitura de imagem e a diferenciação dos 3 grupos.',
      materiais: [
        { id: 'M-E14-1', nome: 'Ficha de exame físico completa de ao menos 2 casos reais, com hipótese diagnóstica validada', tipo: 'entrega' }
      ]
    },
    {
      id: 'E15', numero: 15, etapaId: 'etapa-1', blocoId: 'e1-b4',
      titulo: 'Imersão presencial: GATE de diagnóstico + cerimônia de passagem de faixa azul — dia 3',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 3, diasImersao: 3,
      marco: 'gate-faixa-azul', pendencia: null,
      resumo: 'Avaliação presencial e individual: o aluno conduz o exame físico completo num caso nunca visto antes, integra com anamnese e imagem e fecha um diagnóstico específico defensável, sozinho, diante do Rodrigo.',
      materiais: [
        { id: 'M-E15-1', nome: 'Diagnóstico específico de um caso real, com justificativa clínica apresentada ao vivo', tipo: 'entrega' }
      ]
    },
    {
      id: 'E16', numero: 16, etapaId: 'etapa-2', blocoId: 'e2-b0',
      titulo: 'Multimodal, conservador escalonado e risco-benefício',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Os 4 princípios filosóficos do método como critério de decisão antes de qualquer escolha terapêutica: multimodal, conservador e reversível primeiro, individualização e risco-benefício.',
      materiais: [
        { id: 'M-E16-1', nome: 'Primeira escolha terapêutica justificada para 1 caso já diagnosticado', tipo: 'entrega' }
      ]
    },
    {
      id: 'E17', numero: 17, etapaId: 'etapa-2', blocoId: 'e2-b0',
      titulo: 'Timing de intervenção + Tripé Local aplicado ao tratamento',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Os critérios objetivos para subir o degrau terapêutico e o Tripé Local como primeira camada de intervenção, atravessando as 3 escadas independentemente do diagnóstico específico.',
      materiais: [
        { id: 'M-E17-1', nome: 'Plano de intervenção do Tripé Local (dispositivo + consciência de hábito) para 1 caso', tipo: 'entrega' }
      ]
    },
    {
      id: 'E18', numero: 18, etapaId: 'etapa-2', blocoId: 'e2-b1',
      titulo: 'Conservador muscular I: eletroestimulação, laser e liberação miofascial',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Indicação, parâmetros e técnica de eletroestimulação, infravermelho, laser terapêutico e liberação miofascial manual. A execução hands-on fica reservada para a imersão.',
      materiais: [
        { id: 'M-E18-1', nome: 'Vídeo de demonstração técnica da liberação miofascial manual', tipo: 'video' },
        { id: 'M-E18-2', nome: 'Checklist de parâmetros (eletroestimulação, laser, liberação miofascial)', tipo: 'entrega' }
      ]
    },
    {
      id: 'E19', numero: 19, etapaId: 'etapa-2', blocoId: 'e2-b1',
      titulo: 'Conservador muscular II: controle do bruxismo (vigília e sono)',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Biofeedback com eletromiografia e apps de consciência para o bruxismo de vigília; dispositivo interoclusal para o bruxismo do sono — com os critérios de indicação e ajuste de cada um.',
      materiais: [
        { id: 'M-E19-1', nome: 'Prescrição de controle de bruxismo (vigília + sono) para 2 casos', tipo: 'entrega' }
      ]
    },
    {
      id: 'E20', numero: 20, etapaId: 'etapa-2', blocoId: 'e2-b1',
      titulo: 'Conservador muscular III: fármacos, exercícios caseiros e educação em dor',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Farmacoterapia básica, exercícios caseiros de relaxamento e alongamento, e a educação em dor com base IASP como ferramenta terapêutica em si — não como complemento.',
      materiais: [
        { id: 'M-E20-1', nome: 'Roteiro de educação em dor, prescrição farmacológica e protocolo de exercícios caseiros', tipo: 'entrega' }
      ]
    },
    {
      id: 'E21', numero: 21, etapaId: 'etapa-2', blocoId: 'e2-b1',
      titulo: 'Minimamente invasivo muscular: infiltração anestésica e dry needling',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Critérios de indicação a partir da falha do conservador, fundamentos técnicos de infiltração anestésica e dry needling, cuidados e contraindicações. A agulha só entra na imersão.',
      materiais: [
        { id: 'M-E21-1', nome: 'Vídeo de referência da técnica de infiltração e dry needling', tipo: 'video' },
        { id: 'M-E21-2', nome: 'Protocolo de decisão escrito para 2 casos musculares que não respondem', tipo: 'entrega' }
      ]
    },
    {
      id: 'E22', numero: 22, etapaId: 'etapa-2', blocoId: 'e2-b1',
      titulo: 'Invasivo muscular: toxina botulínica no lugar certo da escada',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Por que a toxina é o último recurso da escada muscular e não a primeira opção, o que a pesquisa de neurologistas mostra, o risco de dano ósseo no uso indiscriminado, e quando ela de fato entra.',
      materiais: [
        { id: 'M-E22-1', nome: 'Casos de mercado anonimizados de uso indevido + 1 caso de indicação correta', tipo: 'caso' },
        { id: 'M-E22-2', nome: 'Parecer escrito comparando o uso indevido com a indicação correta', tipo: 'entrega' }
      ]
    },
    {
      id: 'E23', numero: 23, etapaId: 'etapa-2', blocoId: 'e2-b1',
      titulo: 'Estudo de caso: montando o plano de tratamento muscular completo (grau 1 na faixa azul)',
      modalidade: 'online', formato: 'estudo-de-caso', duracao: '2h', marco: 'grau-1-azul', pendencia: null,
      resumo: 'Estudo de caso mensal nº 2. O aluno monta o plano do conservador ao invasivo para um caso muscular com diagnóstico já fechado, com sequência e critério de subida de degrau.',
      materiais: [
        { id: 'M-E23-1', nome: 'Caso muscular completo com diagnóstico fechado', tipo: 'caso' },
        { id: 'M-E23-2', nome: 'Plano de tratamento escalonado completo da escada muscular', tipo: 'entrega' }
      ]
    },
    {
      id: 'E24', numero: 24, etapaId: 'etapa-2', blocoId: 'e2-b2',
      titulo: 'Conservador: exercícios de aumento da amplitude bucal',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'O protocolo de exercícios de amplitude bucal — técnica, frequência e progressão — e por que este grupo diagnóstico tem uma escada mais enxuta que a muscular.',
      materiais: [
        { id: 'M-E24-1', nome: 'Protocolo de exercícios prescrito e demonstrado para 1 caso de deslocamento de disco', tipo: 'entrega' }
      ]
    },
    {
      id: 'E25', numero: 25, etapaId: 'etapa-2', blocoId: 'e2-b2',
      titulo: 'Minimamente invasivo: infiltração com ácido hialurônico e artrocentese',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'O que cada procedimento resolve fisiopatologicamente — lubrificação contra lavagem articular — e por que o ácido hialurônico capacita e a artrocentese fica fora do escopo desta formação.',
      materiais: [
        { id: 'M-E25-1', nome: 'Vídeo demonstrativo dos dois procedimentos', tipo: 'video' },
        { id: 'M-E25-2', nome: 'Parecer de indicação escrito para 2 casos, marcando qual o aluno executaria', tipo: 'entrega' }
      ]
    },
    {
      id: 'E26', numero: 26, etapaId: 'etapa-2', blocoId: 'e2-b2',
      titulo: 'Cirúrgico: artroscopia e discopexia — reconhecendo o limite do escopo',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Indicações de artroscopia e discopexia, e o papel do dentista formado aqui: não executa, mas reconhece, explica ao paciente e encaminha mantendo a relação terapêutica.',
      materiais: [
        { id: 'M-E26-1', nome: 'Caso de paciente que evoluiu do conservador ao cirúrgico ao longo do tempo', tipo: 'caso' },
        { id: 'M-E26-2', nome: 'Linha do tempo anotada com o ponto de encaminhamento marcado e justificado', tipo: 'entrega' }
      ]
    },
    {
      id: 'E27', numero: 27, etapaId: 'etapa-2', blocoId: 'e2-b2',
      titulo: 'Estudo de caso: plano de tratamento completo — deslocamento de disco (grau 2 na faixa azul)',
      modalidade: 'online', formato: 'estudo-de-caso', duracao: '2h', marco: 'grau-2-azul', pendencia: null,
      resumo: 'Estudo de caso mensal nº 3. O Bloco 2 inteiro integrado num plano escalonado, incluindo o ponto de encaminhamento quando ele existe.',
      materiais: [
        { id: 'M-E27-1', nome: 'Caso de deslocamento de disco com diagnóstico fechado', tipo: 'caso' },
        { id: 'M-E27-2', nome: 'Plano de tratamento escalonado, com marcação explícita de execução × encaminhamento', tipo: 'entrega' }
      ]
    },
    {
      id: 'E28', numero: 28, etapaId: 'etapa-2', blocoId: 'e2-b3',
      titulo: 'Conservador: laserterapia, fármaco e crioterapia',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Indicação, técnica e parâmetros das modalidades conservadoras do grupo articular: laserterapia, farmacoterapia específica do quadro articular e crioterapia.',
      materiais: [
        { id: 'M-E28-1', nome: 'Checklist de execução com os 3 recursos conservadores parametrizados', tipo: 'entrega' }
      ]
    },
    {
      id: 'E29', numero: 29, etapaId: 'etapa-2', blocoId: 'e2-b3',
      titulo: 'Minimamente invasivo articular I: corticoide e artrocentese',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Indicação do corticoide intra-articular e seus limites de uso repetido, e a artrocentese no contexto articular — mesma técnica do deslocamento de disco, racional distinto.',
      materiais: [
        { id: 'M-E29-1', nome: 'Parecer escrito comparando a artrocentese no deslocamento de disco e no grupo articular', tipo: 'entrega' }
      ]
    },
    {
      id: 'E30', numero: 30, etapaId: 'etapa-2', blocoId: 'e2-b3',
      titulo: 'Minimamente invasivo articular II: iPRF por infiltração e ácido hialurônico',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'O que é iPRF e agregado plaquetário, e onde está o limite de escopo: a infiltração simples o aluno executa na imersão, a variante guiada por ultrassom ele sai sabendo indicar.',
      materiais: [
        { id: 'M-E30-1', nome: 'Vídeo demonstrativo dos dois formatos do procedimento', tipo: 'video' },
        { id: 'M-E30-2', nome: 'Ficha de indicação preenchida para 1 caso, marcando execução ou encaminhamento', tipo: 'entrega' }
      ]
    },
    {
      id: 'E31', numero: 31, etapaId: 'etapa-2', blocoId: 'e2-b3',
      titulo: 'Invasivo articular + estudo de caso: plano de tratamento completo (grau 3 na faixa azul)',
      modalidade: 'online', formato: 'estudo-de-caso', duracao: '2h', marco: 'grau-3-azul', pendencia: null,
      resumo: 'Estudo de caso mensal nº 4. As indicações cirúrgicas do grupo articular e o Bloco 3 integrado, com um cenário de degeneração avançada para forçar a discussão do limite cirúrgico.',
      materiais: [
        { id: 'M-E31-1', nome: 'Caso articular completo, com cenário de degeneração avançada', tipo: 'caso' },
        { id: 'M-E31-2', nome: 'Plano de tratamento escalonado do grupo articular, com execução × encaminhamento por degrau', tipo: 'entrega' }
      ]
    },
    {
      id: 'E32', numero: 32, etapaId: 'etapa-2', blocoId: 'e2-b4',
      titulo: 'O paciente real tem mais de um diagnóstico: integrando as 3 escadas',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Como sequenciar o tratamento quando há sobreposição de grupos diagnósticos e qual degrau tratar primeiro. É a preparação mental para o gate presencial da imersão.',
      materiais: [
        { id: 'M-E32-1', nome: 'Casos mistos reais anonimizados do Rodrigo', tipo: 'caso' },
        { id: 'M-E32-2', nome: 'Plano de tratamento integrado multi-diagnóstico para 1 caso misto, com sequência justificada', tipo: 'entrega' }
      ]
    },
    {
      id: 'E33', numero: 33, etapaId: 'etapa-2', blocoId: 'e2-b5',
      titulo: 'Imersão presencial: modalidades físicas conservadoras hands-on — dia 1',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 1, diasImersao: 3,
      marco: null, pendencia: null,
      resumo: 'Eletroestimulação, laser terapêutico, liberação miofascial manual e crioterapia aplicadas de fato, em rotação de estações, com correção de técnica em tempo real.',
      materiais: [
        { id: 'M-E33-1', nome: 'Checklist de execução validado pelo Rodrigo nas 4 modalidades do dia', tipo: 'entrega' }
      ]
    },
    {
      id: 'E34', numero: 34, etapaId: 'etapa-2', blocoId: 'e2-b5',
      titulo: 'Imersão presencial: infiltrações e minimamente invasivos hands-on — dia 2',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 2, diasImersao: 3,
      marco: null, pendencia: null,
      resumo: 'Infiltração anestésica, dry needling, ácido hialurônico, corticoide e iPRF por infiltração simples, com supervisão individual apertada e manejo de intercorrências.',
      materiais: [
        { id: 'M-E34-1', nome: 'Checklist de execução validado individualmente para cada procedimento praticado', tipo: 'entrega' }
      ]
    },
    {
      id: 'E35', numero: 35, etapaId: 'etapa-2', blocoId: 'e2-b5',
      titulo: 'Imersão presencial: casos mistos hands-on + GATE de tratamento + cerimônia de passagem de faixa roxa — dia 3',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 3, diasImersao: 3,
      marco: 'gate-faixa-roxa', pendencia: null,
      resumo: 'Avaliação presencial e individual: caso misto real, plano de tratamento escalonado completo e ao menos uma técnica executada sob supervisão, com marcação de execução × encaminhamento.',
      materiais: [
        { id: 'M-E35-1', nome: 'Plano de tratamento de 1 caso misto, com ao menos 1 técnica executada sob supervisão', tipo: 'entrega' }
      ]
    },
    {
      id: 'E36', numero: 36, etapaId: 'etapa-3', blocoId: 'e3-b1',
      titulo: 'A consulta de avaliação como ato terapêutico (e comercial)',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Por que a narrativa de conversão nasce do próprio método, a estrutura da consulta de avaliação e como devolver o diagnóstico ao paciente sem gerar pânico nem minimizar.',
      materiais: [
        { id: 'M-E36-1', nome: 'Roteiro de devolutiva de diagnóstico escrito e ensaiado em dupla', tipo: 'entrega' }
      ]
    },
    {
      id: 'E37', numero: 37, etapaId: 'etapa-3', blocoId: 'e3-b1',
      titulo: 'Apresentando o plano de tratamento com os Dois Tripés como narrativa',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'O framework dos Dois Tripés como estrutura de apresentação do plano ao paciente, e como traduzir jargão clínico sem perder precisão.',
      materiais: [
        { id: 'M-E37-1', nome: 'Áudio ou vídeo de 2 a 3 minutos apresentando o plano de tratamento pelos tripés', tipo: 'entrega' }
      ]
    },
    {
      id: 'E38', numero: 38, etapaId: 'etapa-3', blocoId: 'e3-b1',
      titulo: 'Fechamento: da apresentação do plano ao "sim"',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Como apresentar o investimento do tratamento e responder às objeções mais frequentes do paciente de DTM sem pressão agressiva, coerente com o tom educativo do método.',
      materiais: [
        { id: 'M-E38-1', nome: 'Script pessoal de fechamento para usar na própria clínica', tipo: 'entrega' }
      ]
    },
    {
      id: 'E39', numero: 39, etapaId: 'etapa-3', blocoId: 'e3-b2',
      titulo: 'Treinando a recepção: scripts de conversão lead → avaliação',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'O funil lead → avaliação, o papel da recepção como primeiro ponto de contato que já constrói confiança, e os scripts de resposta para as dúvidas mais comuns.',
      materiais: [
        { id: 'M-E39-1', nome: 'Template de script de atendimento da recepção', tipo: 'template' },
        { id: 'M-E39-2', nome: 'Script de atendimento pronto para entregar à própria recepção', tipo: 'entrega' }
      ]
    },
    {
      id: 'E40', numero: 40, etapaId: 'etapa-3', blocoId: 'e3-b2',
      titulo: 'Posicionamento e indicação: o canal mais barato de quem está começando',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Por que indicação é o canal mais imediato para quem está começando na especialidade, como pedi-la de forma natural, e o que comunicar sobre a nova competência para a própria rede.',
      materiais: [
        { id: 'M-E40-1', nome: 'Peça de comunicação pronta anunciando a nova competência', tipo: 'entrega' }
      ]
    },
    {
      id: 'E41', numero: 41, etapaId: 'etapa-3', blocoId: 'e3-b3',
      titulo: 'Pós-venda, contrato/acompanhamento e os controles essenciais do funil',
      modalidade: 'online', formato: 'aula', duracao: '2h', marco: null, pendencia: null,
      resumo: 'Os controles essenciais do funil e como ler esses números para saber se o problema é de captação, de conversão ou de execução clínica. Sem número não tem estratégia.',
      materiais: [
        { id: 'M-E41-1', nome: 'Template de planilha de controles do funil', tipo: 'template' },
        { id: 'M-E41-2', nome: 'Planilha de controles preenchida com os próprios números', tipo: 'entrega' }
      ]
    },
    {
      id: 'E42', numero: 42, etapaId: 'etapa-3', blocoId: 'e3-b4',
      titulo: 'Imersão presencial: workshop de gestão, comercial e lucratividade — dia 1',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 1, diasImersao: 2,
      marco: null, pendencia: null,
      resumo: 'Workshop mão na massa de precificação, produtividade de agenda e leitura conjunta dos números que cada aluno trouxe de casa, com o Rodrigo revisando caso a caso.',
      materiais: [
        { id: 'M-E42-1', nome: 'Planilha de precificação e meta comercial revisada com o Rodrigo', tipo: 'entrega' }
      ]
    },
    {
      id: 'E43', numero: 43, etapaId: 'etapa-3', blocoId: 'e3-b4',
      titulo: 'Imersão presencial: apresentações finais + GATE de formatura + cerimônia de passagem de faixa marrom — dia 2',
      modalidade: 'presencial', formato: 'imersao', duracao: null, diaImersao: 2, diasImersao: 2,
      marco: 'gate-formatura', pendencia: null,
      resumo: 'Cada aluno conduz ao vivo, diante da turma, a simulação completa de uma consulta de avaliação e apresenta o próprio painel de números. Fecha com a formatura e a ponte para a mentoria.',
      materiais: [
        { id: 'M-E43-1', nome: 'Consulta de avaliação conduzida ao vivo + planilha de controles apresentada', tipo: 'entrega' }
      ]
    }
  ],

  semanas: [
    {"numero": 1, "inicio": "2027-02-01", "rotulo": "01/02", "tipo": "aula", "encontros": ["E1"], "feriado": null, "nota": null},
    {"numero": 2, "inicio": "2027-02-08", "rotulo": "08/02", "tipo": "pausa", "encontros": [], "feriado": "Carnaval (seg/ter), Cinzas (qua)", "nota": "Pausa de Carnaval — sem aula. Pausa fixa no calendário, derruba a aula em qualquer cenário de segunda a quarta."},
    {"numero": 3, "inicio": "2027-02-15", "rotulo": "15/02", "tipo": "aula", "encontros": ["E2"], "feriado": null, "nota": null},
    {"numero": 4, "inicio": "2027-02-22", "rotulo": "22/02", "tipo": "aula", "encontros": ["E3"], "feriado": null, "nota": null},
    {"numero": 5, "inicio": "2027-03-01", "rotulo": "01/03", "tipo": "aula", "encontros": ["E4"], "feriado": null, "nota": null},
    {"numero": 6, "inicio": "2027-03-08", "rotulo": "08/03", "tipo": "aula", "encontros": ["E5"], "feriado": null, "nota": null},
    {"numero": 7, "inicio": "2027-03-15", "rotulo": "15/03", "tipo": "aula", "encontros": ["E6"], "feriado": null, "nota": null},
    {"numero": 8, "inicio": "2027-03-22", "rotulo": "22/03", "tipo": "aula", "encontros": ["E7"], "feriado": "Sexta-feira Santa (26/03)", "nota": null},
    {"numero": 9, "inicio": "2027-03-29", "rotulo": "29/03", "tipo": "respiro", "encontros": [], "feriado": null, "nota": "Respiro 1 — fecha o primeiro arco (ficha, anamnese e o estudo de caso do E7) antes de abrir imagem e diagnóstico específico."},
    {"numero": 10, "inicio": "2027-04-05", "rotulo": "05/04", "tipo": "aula", "encontros": ["E8"], "feriado": null, "nota": null},
    {"numero": 11, "inicio": "2027-04-12", "rotulo": "12/04", "tipo": "aula", "encontros": ["E9"], "feriado": null, "nota": null},
    {"numero": 12, "inicio": "2027-04-19", "rotulo": "19/04", "tipo": "aula", "encontros": ["E10"], "feriado": "Tiradentes (qua)", "nota": null},
    {"numero": 13, "inicio": "2027-04-26", "rotulo": "26/04", "tipo": "aula", "encontros": ["E11"], "feriado": null, "nota": null},
    {"numero": 14, "inicio": "2027-05-03", "rotulo": "03/05", "tipo": "aula", "encontros": ["E12"], "feriado": null, "nota": null},
    {"numero": 15, "inicio": "2027-05-10", "rotulo": "10/05", "tipo": "imersao", "encontros": ["E13", "E14", "E15"], "feriado": null, "nota": "Imersão 1 · Brasília · Encontros 13 a 15 · gate e cerimônia da faixa azul."},
    {"numero": 16, "inicio": "2027-05-17", "rotulo": "17/05", "tipo": "respiro", "encontros": [], "feriado": null, "nota": "Respiro 2 — semana de aterrissagem, logo após a Imersão 1. Emendar aula na semana seguinte à viagem derruba presença."},
    {"numero": 17, "inicio": "2027-05-24", "rotulo": "24/05", "tipo": "aula", "encontros": ["E16"], "feriado": "Corpus Christi (qui)", "nota": null},
    {"numero": 18, "inicio": "2027-05-31", "rotulo": "31/05", "tipo": "aula", "encontros": ["E17"], "feriado": null, "nota": null},
    {"numero": 19, "inicio": "2027-06-07", "rotulo": "07/06", "tipo": "aula", "encontros": ["E18"], "feriado": null, "nota": null},
    {"numero": 20, "inicio": "2027-06-14", "rotulo": "14/06", "tipo": "aula", "encontros": ["E19"], "feriado": null, "nota": null},
    {"numero": 21, "inicio": "2027-06-21", "rotulo": "21/06", "tipo": "aula", "encontros": ["E20"], "feriado": null, "nota": null},
    {"numero": 22, "inicio": "2027-06-28", "rotulo": "28/06", "tipo": "aula", "encontros": ["E21"], "feriado": null, "nota": null},
    {"numero": 23, "inicio": "2027-07-05", "rotulo": "05/07", "tipo": "aula", "encontros": ["E22"], "feriado": null, "nota": null},
    {"numero": 24, "inicio": "2027-07-12", "rotulo": "12/07", "tipo": "aula", "encontros": ["E23"], "feriado": null, "nota": null},
    {"numero": 25, "inicio": "2027-07-19", "rotulo": "19/07", "tipo": "respiro", "encontros": [], "feriado": null, "nota": "Respiro 3 — meio da Etapa 2, logo depois do E23, que fecha a escada muscular e entrega o primeiro grau da faixa azul."},
    {"numero": 26, "inicio": "2027-07-26", "rotulo": "26/07", "tipo": "aula", "encontros": ["E24"], "feriado": null, "nota": null},
    {"numero": 27, "inicio": "2027-08-02", "rotulo": "02/08", "tipo": "aula", "encontros": ["E25"], "feriado": null, "nota": null},
    {"numero": 28, "inicio": "2027-08-09", "rotulo": "09/08", "tipo": "aula", "encontros": ["E26"], "feriado": null, "nota": null},
    {"numero": 29, "inicio": "2027-08-16", "rotulo": "16/08", "tipo": "aula", "encontros": ["E27"], "feriado": null, "nota": null},
    {"numero": 30, "inicio": "2027-08-23", "rotulo": "23/08", "tipo": "aula", "encontros": ["E28"], "feriado": null, "nota": null},
    {"numero": 31, "inicio": "2027-08-30", "rotulo": "30/08", "tipo": "aula", "encontros": ["E29"], "feriado": null, "nota": null},
    {"numero": 32, "inicio": "2027-09-06", "rotulo": "06/09", "tipo": "aula", "encontros": ["E30"], "feriado": "Independência (ter)", "nota": null},
    {"numero": 33, "inicio": "2027-09-13", "rotulo": "13/09", "tipo": "aula", "encontros": ["E31"], "feriado": null, "nota": null},
    {"numero": 34, "inicio": "2027-09-20", "rotulo": "20/09", "tipo": "aula", "encontros": ["E32"], "feriado": null, "nota": null},
    {"numero": 35, "inicio": "2027-09-27", "rotulo": "27/09", "tipo": "respiro", "encontros": [], "feriado": null, "nota": "Respiro 4 — preparação da viagem mais técnica do ano. É onde a triagem de pacientes-modelo da imersão precisa estar fechada."},
    {"numero": 36, "inicio": "2027-10-04", "rotulo": "04/10", "tipo": "imersao", "encontros": ["E33", "E34", "E35"], "feriado": null, "nota": "Imersão 2 · Brasília · Encontros 33 a 35 · gate e cerimônia da faixa roxa."},
    {"numero": 37, "inicio": "2027-10-11", "rotulo": "11/10", "tipo": "aula", "encontros": ["E36"], "feriado": "Aparecida (ter)", "nota": null},
    {"numero": 38, "inicio": "2027-10-18", "rotulo": "18/10", "tipo": "aula", "encontros": ["E37"], "feriado": null, "nota": null},
    {"numero": 39, "inicio": "2027-10-25", "rotulo": "25/10", "tipo": "aula", "encontros": ["E38"], "feriado": null, "nota": null},
    {"numero": 40, "inicio": "2027-11-01", "rotulo": "01/11", "tipo": "aula", "encontros": ["E39"], "feriado": "Finados (ter)", "nota": null},
    {"numero": 41, "inicio": "2027-11-08", "rotulo": "08/11", "tipo": "aula", "encontros": ["E40"], "feriado": null, "nota": null},
    {"numero": 42, "inicio": "2027-11-15", "rotulo": "15/11", "tipo": "aula", "encontros": ["E41"], "feriado": "Proclamação (seg)", "nota": null},
    {"numero": 43, "inicio": "2027-11-22", "rotulo": "22/11", "tipo": "respiro", "encontros": [], "feriado": null, "nota": "Respiro 5 — semana de preparação da planilha de números e da consulta completa que o aluno apresenta na formatura."},
    {"numero": 44, "inicio": "2027-11-29", "rotulo": "29/11", "tipo": "imersao", "encontros": ["E42", "E43"], "feriado": null, "nota": "Imersão 3 · Brasília · Encontros 42 e 43 · gate de formatura e cerimônia da faixa marrom."}
  ],

  /* `cor` é a cor de referência do jiu-jitsu real, em palavra, como está no documento de
     gamificação. A cor aplicada de cada faixa NÃO está definida: a identidade visual das
     faixas é entrega do @brand-director (gamificacao-faixas.md, seção 9). Não derivar hex
     aqui — a paleta da Academia DTM não tem roxo nem marrom. */
  faixas: [
    {
      id: 'branca', nome: 'Branca', cor: 'branco', corAplicada: null,
      encontroGate: null, ordem: 0,
      criterio: 'Estado de partida, sem gate. Recebida no kit de boas-vindas, antes do Encontro 1.',
      identidade: 'ponto de partida',
      graus: []
    },
    {
      id: 'azul', nome: 'Azul', cor: 'azul', corAplicada: null,
      encontroGate: 'E15', ordem: 1,
      criterio: 'Na imersão presencial que fecha a Etapa 1, o aluno realiza o exame físico completo em paciente ou voluntário real, integra com anamnese e imagem e fecha um diagnóstico específico defensável, com justificativa clínica apresentada ao vivo.',
      identidade: 'eu diagnostico',
      graus: [
        { id: 'grau-1-azul', numero: 1, encontro: 'E23', criterio: 'Estudo de caso mensal nº 2 aprovado: plano de tratamento escalonado completo da escada muscular, com sequência e critério de subida corretos.' },
        { id: 'grau-2-azul', numero: 2, encontro: 'E27', criterio: 'Estudo de caso mensal nº 3 aprovado, com marcação execução × encaminhamento correta.' },
        { id: 'grau-3-azul', numero: 3, encontro: 'E31', criterio: 'Estudo de caso mensal nº 4 aprovado.' }
      ]
    },
    {
      id: 'roxa', nome: 'Roxa', cor: 'roxo', corAplicada: null,
      encontroGate: 'E35', ordem: 2,
      criterio: 'Na imersão presencial que fecha a Etapa 2, o aluno recebe um caso misto real ou voluntário, monta o plano de tratamento escalonado completo e executa sob supervisão ao menos uma técnica em que está capacitado.',
      identidade: 'eu trato',
      graus: []
    },
    {
      id: 'marrom', nome: 'Marrom / Formatura', cor: 'marrom', corAplicada: null,
      encontroGate: 'E43', ordem: 3,
      criterio: 'Na imersão presencial final, o aluno conduz ao vivo a simulação completa de uma primeira consulta — avaliação, apresentação do plano e fechamento — e apresenta os próprios números de baseline.',
      identidade: 'eu cobro pelo que sei',
      graus: []
    }
  ],

  /* ALUNO DEMO. Personagem fictício, criado só para esta demonstração navegável.
     Nenhum aluno real existe: a Turma Fundadora só começa em fevereiro de 2027.
     Progresso, faixa, graus e materiais baixados abaixo são inventados de propósito,
     para a interface ter estado. Não são dado de cliente. */
  aluno: {
    demo: true,
    nome: 'Dra. Camila Ferraz',
    turma: 'Turma Fundadora 2027',
    faixaAtual: 'azul',
    grausConquistados: ['grau-1-azul'],
    encontroAtual: 'E24',
    encontrosConcluidos: ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15','E16','E17','E18','E19','E20','E21','E22','E23'],
    materiaisBaixados: ['M-E3-1','M-E4-1','M-E5-1','M-E8-1','M-E9-1','M-E9-2','M-E18-1','M-E21-1','M-E23-1']
  }
};

const MAPA_ENCONTROS = new Map(DADOS.encontros.map(e => [e.id, e]));
const MAPA_BLOCOS = new Map(DADOS.etapas.flatMap(et => et.blocos.map(b => [b.id, { ...b, etapaId: et.id }])));
const MAPA_ETAPAS = new Map(DADOS.etapas.map(et => [et.id, et]));
const MAPA_SEMANA_POR_ENCONTRO = new Map(DADOS.semanas.flatMap(s => s.encontros.map(id => [id, s])));
const MAPA_FAIXAS = new Map(DADOS.faixas.map(f => [f.id, f]));

DADOS.encontroPorId = id => MAPA_ENCONTROS.get(id) || null;
DADOS.blocoPorId = id => MAPA_BLOCOS.get(id) || null;
DADOS.etapaPorId = id => MAPA_ETAPAS.get(id) || null;
DADOS.faixaPorId = id => MAPA_FAIXAS.get(id) || null;
DADOS.semanaDoEncontro = id => MAPA_SEMANA_POR_ENCONTRO.get(id) || null;

/* ===================================================================
   ONDA 3 · CAIXA DE FERRAMENTAS, ASSISTENTE E JORNADA
   ===================================================================
   Procedência de cada bloco abaixo, sem exceção:
     briefing/dna/frameworks-metodo.md   → F1 dois tripés · F2 leitura de precisão
                                           F3 guarda-chuva · F4 as três escadas
     produto/plano-de-ensino-formacao.md → nomes de diagnóstico, sinais e sons
                                           articulares, medidas de movimento
     produto/ia-anamnese-escopo-tecnico.md → campos da ficha, LGPD, rascunho
     produto/jornada-do-aluno.md         → fases, ganhos e checkpoints
     inputs/audios-2026-09/…14.35.48.txt → os campos que o Rodrigo pediu no áudio

   O que NÃO está aqui porque o Rodrigo ainda não nomeou:
     · a lista nominal completa dos ~10 diagnósticos do guarda-chuva
       (frameworks-metodo.md, F3: "falta a listagem nominal") — o que o plano
       de ensino nomeia está abaixo; o resto vive em `lacuna`, e a tela mostra
       como "conteúdo do professor". NUNCA completar por conta própria.
     · o que cada som articular sugere (plano, Encontro 8: "e o que cada um
       sugere" — o conteúdo em si não está escrito em lugar nenhum).
     · os valores de referência das medidas de movimento (mesmo Encontro 8).
     · o texto das 7 perguntas de sono da ficha dele (F2 registra que são 7 e
       que o corte é em 5 pontos — só a estrutura, nunca o enunciado).
     · qualquer preço, de proposta ao paciente ou de formação. */

DADOS.ferramentas = {

  /* ---------- 1 · guarda-chuva da DTM · mini whitebook ---------- */
  guardaChuva: {
    tese: 'DTM não é um diagnóstico. É um guarda-chuva que abriga cerca de dez diagnósticos em três grupos — muscular, articular e deslocamento de disco.',
    analogia: 'É como dor de dente: cárie pede restauração, pulpite irreversível pede canal, fratura catastrófica pede extração. Os três doem igual, e o tratamento não tem nada a ver um com o outro.',
    misto: 'O quadro pode ser isolado ou misto. Um estalo por deslocamento de disco e uma dor muscular podem conviver no mesmo paciente sem ter relação entre si.',
    grupos: [
      {
        id: 'muscular',
        nome: 'Muscular',
        ordem: 1,
        encontroDiagnostico: 'E10',
        encontrosEscada: ['E18','E19','E20','E21','E22','E23'],
        resumo: 'Os diagnósticos musculares mais comuns do DC/RDC, com o que cada um mostra na anamnese, no exame físico e, quando aplicável, na imagem.',
        diagnosticos: [
          { nome: 'Mialgia', fonte: 'Plano de ensino · Encontro 10' },
          { nome: 'Dor miofascial', fonte: 'Plano de ensino · Encontro 10' }
        ],
        lacuna: 'O plano de ensino diz "entre outros do DC/RDC" e não nomeia os demais diagnósticos musculares.',
        sinais: [
          { termo: 'Dor à palpação muscular', nota: 'Palpação dos músculos mastigatórios — teoria no Encontro 8, prática supervisionada na imersão.', fonte: 'Plano de ensino · Encontros 8 e 13' },
          { termo: 'Dor referida', nota: 'Reconhecimento tátil de pontos de tensão e de dor referida, na prática de palpação.', fonte: 'Plano de ensino · Encontro 13' },
          { termo: 'Bruxismo do sono e de vigília', nota: 'Entra pelo tripé local: no sono não há consciência, na vigília há. Investigado na anamnese.', fonte: 'F1 · Os Dois Tripés' }
        ],
        diferencial: 'A diferenciação contra articular e deslocamento de disco é conduzida ao vivo no Encontro 10, com o Rodrigo perguntando "por que não é articular? por que não é deslocamento?" sobre cada caso.',
        diferencialLacuna: 'Os critérios de diferenciação escritos são conteúdo do professor — a aula existe, o texto ainda não.',
        escada: {
          conservador: ['Eletroestimulação', 'Infravermelho', 'Laser terapêutico', 'Liberação miofascial manual', 'Controle do bruxismo de vigília (biofeedback de eletromiografia, aplicativos, adesivos)', 'Controle do bruxismo do sono (dispositivo interoclusal)', 'Fármacos', 'Exercícios caseiros', 'Educação em dor'],
          intermediario: ['Infiltração anestésica', 'Dry needling'],
          avancado: ['Toxina botulínica — último recurso da escada, nunca a primeira opção']
        }
      },
      {
        id: 'articular',
        nome: 'Articular',
        ordem: 2,
        encontroDiagnostico: 'E11',
        encontrosEscada: ['E28','E29','E30','E31'],
        resumo: 'Os diagnósticos articulares mais comuns do DC/RDC, com os achados típicos de imagem e o diferencial contra os outros dois grupos.',
        diagnosticos: [
          { nome: 'Osteoartrite', fonte: 'Plano de ensino · Encontro 11' },
          { nome: 'Osteoartrose', fonte: 'Plano de ensino · Encontro 11' }
        ],
        lacuna: 'O plano de ensino diz "entre outros do DC/RDC" e não nomeia os demais diagnósticos articulares.',
        sinais: [
          { termo: 'Sinais de degeneração na imagem', nota: 'Degeneração e alterações ósseas na ressonância.', fonte: 'Plano de ensino · Encontros 9 e 11' },
          { termo: 'Crepitação', nota: 'Som articular identificado no exame físico. O que cada som sugere é conteúdo do Encontro 8 — ainda não escrito.', fonte: 'Plano de ensino · Encontro 8' }
        ],
        diferencial: 'Mesmo formato do Encontro 10: casos completos, com diferenciação forçada contra muscular e deslocamento de disco.',
        diferencialLacuna: 'Os critérios de diferenciação escritos são conteúdo do professor.',
        escada: {
          conservador: ['Laserterapia', 'Fármaco', 'Crioterapia'],
          intermediario: ['Corticoide intra-articular', 'Artrocentese', 'iPRF / agregado plaquetário', 'Ácido hialurônico'],
          avancado: ['Artroscopia', 'Cirurgia aberta', 'Prótese de ATM']
        },
        escopo: 'Lavagem articular e agregados plaquetários guiados por ultrassom entram na formação só como teoria: executar exige equipamento e treinamento próprios.'
      },
      {
        id: 'disco',
        nome: 'Deslocamento de disco',
        ordem: 3,
        encontroDiagnostico: 'E12',
        encontrosEscada: ['E24','E25','E26','E27'],
        resumo: 'Deslocamento com redução contra deslocamento sem redução, pelos achados de imagem e pela integração com anamnese e exame físico.',
        diagnosticos: [
          { nome: 'Deslocamento de disco com redução', fonte: 'Plano de ensino · Encontros 9 e 12' },
          { nome: 'Deslocamento de disco sem redução', fonte: 'Plano de ensino · Encontros 9 e 12' }
        ],
        lacuna: 'O guarda-chuva prevê outros diagnósticos deste grupo no DC/RDC. O plano de ensino nomeia estes dois.',
        sinais: [
          { termo: 'Estalido', nota: 'Som articular. O Rodrigo usa o estalo por deslocamento de disco como exemplo de quadro que convive com uma dor muscular sem ter relação com ela.', fonte: 'F3 · O Guarda-Chuva da DTM' },
          { termo: 'Posição do disco na imagem', nota: 'Presença ou ausência de redução ao movimento, na ressonância.', fonte: 'Plano de ensino · Encontro 12' }
        ],
        diferencial: 'Fechamento do bloco no Encontro 12: os três grupos revisitados lado a lado antes da imersão.',
        diferencialLacuna: 'Os critérios de diferenciação escritos são conteúdo do professor.',
        escada: {
          conservador: ['Exercícios de amplitude bucal'],
          intermediario: ['Ácido hialurônico', 'Artrocentese'],
          avancado: ['Artroscopia', 'Discopexia']
        }
      }
    ],
    /* Índice de sintomas: só entra termo que aparece escrito num insumo, com a
       origem ao lado. Termo sem origem não entra — vira lacuna declarada. */
    sintomas: [
      { termo: 'Estalido ao abrir ou fechar a boca', grupos: ['disco'], fonte: 'F3 · O Guarda-Chuva da DTM' },
      { termo: 'Crepitação', grupos: [], fonte: 'Plano de ensino · Encontro 8', lacuna: 'O plano ensina a identificar o som e diz que cada um sugere uma coisa. O que a crepitação sugere é conteúdo do professor.' },
      { termo: 'Dor à palpação dos músculos mastigatórios', grupos: ['muscular'], fonte: 'Plano de ensino · Encontros 8, 10 e 13' },
      { termo: 'Dor referida à palpação', grupos: ['muscular'], fonte: 'Plano de ensino · Encontro 13' },
      { termo: 'Limitação de abertura, lateralidade ou protrusão', grupos: [], fonte: 'Plano de ensino · Encontro 8', lacuna: 'As medidas e os tipos de movimento estão no plano. Os valores de referência são conteúdo do professor.' },
      { termo: 'Degeneração ou alteração óssea na ressonância', grupos: ['articular'], fonte: 'Plano de ensino · Encontros 9 e 11' },
      { termo: 'Disco sem redução ao movimento na ressonância', grupos: ['disco'], fonte: 'Plano de ensino · Encontros 9 e 12' },
      { termo: 'Tensão emocional, sono ruim ou ausência de atividade física', grupos: ['muscular'], fonte: 'F1 · Os Dois Tripés', nota: 'Tripé sistêmico: é a origem da sobrecarga, investigada obrigatoriamente na anamnese. Tratar o local sem resolver o sistêmico é enxugar gelo.' }
    ]
  },

  /* ---------- 2 · anamnese assistida ---------- */
  anamnese: {
    consentimento: 'Com sua autorização, vou gravar esta conversa para estruturar o seu histórico.',
    campos: [
      { id: 'queixa', rotulo: 'Queixa principal', fonte: 'F2 · anamnese profunda' },
      { id: 'tipo', rotulo: 'Tipo da dor', fonte: 'Áudio do Rodrigo · 03/09' },
      { id: 'caracteristica', rotulo: 'Característica da dor', fonte: 'Áudio do Rodrigo · 03/09' },
      { id: 'intensidade', rotulo: 'Intensidade (0 a 10)', fonte: 'Áudio do Rodrigo · 03/09' },
      { id: 'frequencia', rotulo: 'Frequência semanal', fonte: 'Áudio do Rodrigo · 03/09' },
      { id: 'duracao', rotulo: 'Duração', fonte: 'F2 · anamnese profunda' },
      { id: 'piora', rotulo: 'Fatores de piora', fonte: 'F2 · anamnese profunda' },
      { id: 'melhora', rotulo: 'Fatores de melhora', fonte: 'F2 · anamnese profunda' },
      { id: 'precipitacao', rotulo: 'Fatores de precipitação', fonte: 'F2 · anamnese profunda' },
      { id: 'sono', rotulo: 'Tripé sistêmico · sono', fonte: 'F1 · Os Dois Tripés' },
      { id: 'atividade', rotulo: 'Tripé sistêmico · atividade física', fonte: 'F1 · Os Dois Tripés' },
      { id: 'psicoemocional', rotulo: 'Tripé sistêmico · psicoemocional', fonte: 'F1 · Os Dois Tripés' }
    ],
    /* Conversa de demonstração escrita para esta tela. Não é paciente real e não
       é transcrição de consulta real — existe só para o botão ter o que mostrar.
       A tela declara isso em texto visível. */
    /* `corte: true` é o que o assistente descarta por não agregar à ficha.
       A tela mostra o descarte riscado, nunca escondido. */
    transcricao: [
      { quem: 'profissional', texto: 'Então me conta, o que te trouxe aqui?' },
      { quem: 'paciente', texto: 'Ah, doutor, é essa dor no lado direito do rosto. Já faz uns oito meses.' },
      { quem: 'paciente', texto: 'Meu marido falou pra eu vir, porque eu não paro de reclamar.', corte: true },
      { quem: 'paciente', texto: 'Eu já fui em três lugares, ninguém achou nada. Um me falou que era sinusite, aí eu tomei um monte de remédio e não resolveu nada.' },
      { quem: 'profissional', texto: 'Entendi. E essa dor, ela é como? Pontada, peso, queimação?' },
      { quem: 'paciente', texto: 'É um peso. Um cansaço, sabe? Parece que eu segurei alguma coisa com a boca o dia inteiro.' },
      { quem: 'profissional', texto: 'Se zero é nenhuma dor e dez é a pior dor que você já sentiu, onde ela fica?' },
      { quem: 'paciente', texto: 'Nos dias ruins, uns sete. Teve dia de nove, mas foi raro.' },
      { quem: 'profissional', texto: 'E quantas vezes por semana ela aparece?' },
      { quem: 'paciente', texto: 'Quase todo dia. Uns cinco dias na semana, mais ou menos.' },
      { quem: 'profissional', texto: 'O que piora?' },
      { quem: 'paciente', texto: 'Mastigar carne, mastigar chiclete. E quando eu fico nervosa no trabalho piora demais. Ah, e tem um estalo quando eu abro muito a boca, mas isso já é antigo, nem dói.' },
      { quem: 'profissional', texto: 'E o que melhora?' },
      { quem: 'paciente', texto: 'Compressa quente ajuda um pouco. Fim de semana melhora.' },
      { quem: 'paciente', texto: 'Ah, e minha filha vai fazer aniversário sábado, vai ser uma correria, mas enfim, desculpa, é que eu falo demais.', corte: true },
      { quem: 'profissional', texto: 'Sem problema. Como está o seu sono?' },
      { quem: 'paciente', texto: 'Ruim. Durmo tarde, acordo várias vezes. E acordo com a mandíbula travada, doendo.' },
      { quem: 'profissional', texto: 'Faz alguma atividade física?' },
      { quem: 'paciente', texto: 'Não, nenhuma. Parei faz uns dois anos.' },
      { quem: 'profissional', texto: 'E como você está de ansiedade, estresse?' },
      { quem: 'paciente', texto: 'Bem estressada. Estou num processo difícil no trabalho desde o ano passado.' }
    ],
    ficha: {
      identificacao: 'Paciente #042',
      notaIdentificacao: 'O nome real fica só no prontuário local. O que sai da máquina vai com código — desidentificação obrigatória antes de qualquer processamento em nuvem.',
      valores: {
        queixa: 'Dor no lado direito da face, há cerca de oito meses, sem diagnóstico fechado em três atendimentos anteriores.',
        tipo: 'Dor facial de repetição, unilateral à direita.',
        caracteristica: 'Peso e cansaço, com sensação de esforço mantido.',
        intensidade: '7 nos dias ruins, com pico relatado de 9.',
        frequencia: 'Cerca de 5 dias por semana.',
        duracao: 'Aproximadamente 8 meses.',
        piora: 'Mastigação de alimentos duros e de chiclete; períodos de tensão no trabalho.',
        melhora: 'Compressa quente; fins de semana.',
        precipitacao: 'Relata estalo à abertura ampla, sem dor associada, de longa data.',
        sono: 'Sono fragmentado, latência aumentada; acorda com sensação de travamento e dor mandibular.',
        atividade: 'Sedentária há cerca de dois anos.',
        psicoemocional: 'Estresse ocupacional mantido desde o ano anterior.'
      },
      cortado: ['Menção a familiares', 'Comentário sobre o aniversário da filha', 'Pedido de desculpas por falar demais'],
      candidatos: [
        { grupo: 'muscular', porque: 'Dor de característica muscular à mastigação, com tripé sistêmico inteiro alterado — sono, atividade física e psicoemocional.' },
        { grupo: 'disco', porque: 'Estalido à abertura ampla relatado. O Rodrigo usa exatamente este exemplo de quadro que convive com dor muscular sem ter relação com ela.' }
      ],
      rascunhoPlano: [
        { grupo: 'muscular', degrau: 'Conservador', itens: ['Educação em dor', 'Controle do bruxismo do sono (dispositivo interoclusal)', 'Controle do bruxismo de vigília', 'Exercícios caseiros'] },
        { grupo: 'disco', degrau: 'Conservador', itens: ['Exercícios de amplitude bucal'] }
      ],
      sistemico: 'O tripé sistêmico veio alterado nas três pernas. Pelo método, ele entra antes: tratar o local sem resolver o sistêmico é enxugar gelo.'
    }
  },

  /* ---------- 3 · questionários ---------- */
  questionarios: [
    {
      id: 'dor',
      nome: 'Registro estruturado da dor',
      resumo: 'Os campos que o Rodrigo listou no áudio de 03/09, mais os fatores da anamnese profunda. Não pontua — organiza.',
      procedencia: 'completo',
      tipo: 'registro',
      itens: [
        { id: 'intensidade', rotulo: 'Intensidade agora (0 a 10)', tipo: 'escala', max: 10 },
        { id: 'pico', rotulo: 'Pior intensidade no período (0 a 10)', tipo: 'escala', max: 10 },
        { id: 'frequencia', rotulo: 'Dias com dor na última semana', tipo: 'escala', max: 7 }
      ],
      leitura: 'O registro não gera classificação automática. Ele entrega o número do paciente na mesma unidade, consulta após consulta, para a reavaliação de 3 a 6 meses ter com o que comparar.',
      leituraFonte: 'F5 · Timing de Intervenção'
    },
    {
      id: 'sono',
      nome: 'Rastreio de sono',
      resumo: 'Sete perguntas, corte em cinco pontos. É a estrutura da própria ficha do Rodrigo.',
      procedencia: 'estrutura',
      tipo: 'sim-nao',
      itens: [1,2,3,4,5,6,7].map(n => ({ id: 'sono-' + n, rotulo: 'Pergunta ' + n, pendente: true })),
      corte: 5,
      lacuna: 'O enunciado das sete perguntas é o da ficha de 40 perguntas dele. A estrutura está registrada em F2; o texto entra quando ele enviar a ficha.',
      leitura: 'Cinco pontos ou mais aciona o cuidado com a perna do sono antes de qualquer intervenção local.',
      leituraFonte: 'F2 · Leitura de Precisão, Camada 1'
    },
    {
      id: 'bruxismo',
      nome: 'Triagem de bruxismo',
      resumo: 'Separa sono de vigília, porque a conduta muda inteira entre os dois.',
      procedencia: 'estrutura',
      tipo: 'sim-nao',
      grupos: [
        { id: 'bx-sono', rotulo: 'No sono', conduta: 'Dispositivo interoclusal — no sono não há consciência para intervir.', itens: [1,2,3].map(n => ({ id: 'bxs-' + n, rotulo: 'Pergunta ' + n, pendente: true })) },
        { id: 'bx-vigilia', rotulo: 'Na vigília', conduta: 'Aumentar a consciência: biofeedback de eletromiografia, aplicativos, adesivos.', itens: [1,2,3].map(n => ({ id: 'bxv-' + n, rotulo: 'Pergunta ' + n, pendente: true })) }
      ],
      lacuna: 'A conduta de cada lado vem do tripé local, em F1. O enunciado das perguntas de triagem é conteúdo do professor.',
      leitura: 'A triagem não fecha diagnóstico. Ela decide por qual porta do tripé local o tratamento começa.',
      leituraFonte: 'F1 · Os Dois Tripés'
    },
    {
      id: 'movimento',
      nome: 'Medidas de movimento mandibular',
      resumo: 'Abertura, lateralidade e protrusão registradas em milímetros, mais os sons articulares.',
      procedencia: 'estrutura',
      tipo: 'medida',
      itens: [
        { id: 'abertura', rotulo: 'Abertura máxima', unidade: 'mm' },
        { id: 'lat-d', rotulo: 'Lateralidade direita', unidade: 'mm' },
        { id: 'lat-e', rotulo: 'Lateralidade esquerda', unidade: 'mm' },
        { id: 'protrusao', rotulo: 'Protrusão', unidade: 'mm' }
      ],
      sons: ['Estalido à direita', 'Estalido à esquerda', 'Crepitação à direita', 'Crepitação à esquerda'],
      lacuna: 'Os tipos e as medidas de movimento estão no plano de ensino, no Encontro 8. Os valores de referência que separam normal de alterado são conteúdo do professor — por isso a tela registra o número e não o classifica.',
      leitura: 'Sem valor de referência publicado, a ferramenta guarda a medida e mostra a variação entre consultas. A leitura clínica é sua.',
      leituraFonte: 'Plano de ensino · Encontro 8'
    }
  ],

  /* ---------- 4 · assistente da formação ---------- */
  assistente: {
    aviso: 'Responde com base na grade da formação: título, resumo e posição de cada um dos 43 encontros.',
    limite: 'A minutagem do trecho entra quando as aulas forem gravadas. Nenhuma aula da Turma Fundadora existe em vídeo hoje.',
    /* `chave` é o termo com que o índice é consultado. Existe porque a pergunta
       falada nem sempre usa a palavra que está no título da aula. */
    perguntas: [
      { texto: 'Em que aula falamos da toxina botulínica?', chave: 'toxina botulínica' },
      { texto: 'Onde entra a ficha de 40 perguntas?', chave: 'formulário 40 perguntas ficha' },
      { texto: 'Qual aula ensina a ler ressonância?', chave: 'ressonância imagem' },
      { texto: 'Como diferencio deslocamento de disco com e sem redução?', chave: 'deslocamento disco redução' },
      { texto: 'Onde aprendo a apresentar o plano ao paciente?', chave: 'apresentando plano tratamento tripés narrativa' }
    ]
  },

  /* ---------- 5 · minha jornada ---------- */
  jornada: {
    fases: [
      {
        etapaId: 'etapa-1',
        nomeProposto: 'O diagnóstico que ninguém sabe fazer',
        periodo: 'Encontros 1 a 15 · cerca de 16 semanas',
        virada: 'O aluno deixa de achar que sabe DTM e passa a diagnosticar com precisão: anamnese estruturada, exame físico protocolar e leitura de imagem.',
        identitario: 'Eu enxergo o que os outros não enxergam.',
        checkpoints: [
          { tipo: 'Diagnóstica', quando: 'Encontro 1', o: 'Autodiagnóstico escrito: quais erros ele já cometeu na própria prática. É a linha de base do antes.' },
          { tipo: 'Formativa', quando: 'Encontro 7', o: 'Estudo de caso mensal com correção individual, devolvendo o gap específico.' },
          { tipo: 'Somativa', quando: 'Encontro 15', o: 'O gate presencial: exame físico completo em paciente real, diante do Rodrigo.' },
          { tipo: 'Antes e depois', quando: 'Encontros 1 e 15', o: 'Comparação entre os erros que ele cometia e o diagnóstico demonstrado ao vivo.' }
        ]
      },
      {
        etapaId: 'etapa-2',
        nomeProposto: 'De quem nomeia o problema a quem resolve o problema',
        periodo: 'Encontros 16 a 35 · cerca de 18 semanas',
        virada: 'O aluno deixa de saber nomear e passa a tratar com julgamento clínico, montando o plano escalonado para os três grupos e sabendo quando executar e quando encaminhar.',
        identitario: 'Eu trato, e sei até onde vai a minha mão.',
        checkpoints: []
      },
      {
        etapaId: 'etapa-3',
        nomeProposto: 'De quem sabe tratar a quem sabe cobrar pelo que sabe fazer',
        periodo: 'Encontros 36 a 43',
        virada: 'A competência clínica vira receita: condução da primeira consulta, conversão da avaliação em tratamento e leitura dos próprios números.',
        identitario: 'Eu cobro pelo que sei.',
        checkpoints: []
      }
    ],
    lacunaCheckpoints: 'Os checkpoints das Fases 2 e 3 seguem a mesma mecânica da Fase 1 — diagnóstica, formativa, somativa e antes/depois. O detalhamento de cada um é conteúdo do professor.'
  }
};
