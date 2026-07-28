/* ═══════════════════════════════════════════════════════════════════
   DASHBOARD · DR. RODRIGO WENDEL · O SALTO
   PESQUISAS — os 4 relatórios documentados em profundidade.
   Fontes: pesquisa/pesquisa-mercado-dtm.md · pesquisa-formacoes-dtm-iniciantes.md ·
   pesquisa-aprendiz-dentista-iniciante.md · pesquisa-certificacao-mec.md
   Regra da versão pública: concorrentes anonimizados (Concorrente A, B, C, D…);
   os relatórios completos, com nomes e links de fonte, ficam no repositório
   interno do projeto. Zero dado inventado.
   ═══════════════════════════════════════════════════════════════════ */

window.DASH_PESQUISAS = {
  html: `
    <p class="page-lead">Os 4 relatórios de pesquisa que sustentam a estratégia — mercado, concorrência, perfil do aluno e certificação — documentados aqui com os números, os achados e o que cada um muda nas decisões. Nesta versão pública os concorrentes aparecem anonimizados; os relatórios completos, com fontes nomeadas e links, ficam no repositório interno do projeto.</p>

    <div class="leg">
      <span>🟢 <strong>dado</strong> — fonte primária confirmada (órgãos oficiais, papers, páginas institucionais)</span>
      <span>🟡 <strong>médio</strong> — dado parcial ou estimado (preço oculto em funil, faixa geral de rede)</span>
      <span>🔴 <strong>hipótese fundamentada</strong> — sem fonte direta, com caminho de validação apontado</span>
    </div>

    <!-- ═══════════ RELATÓRIO 1 · MERCADO ═══════════ -->
    <h2 class="section-title">Relatório 1 · O mercado de DTM <span class="ei">(mai/2026)</span></h2>
    <p>A pesquisa-base do projeto: quantifica o mercado de dentistas, a densidade de especialistas, a demanda clínica e os tickets praticados. Fontes: conselho federal da categoria, conselhos regionais, sociedade da especialidade, base científica indexada e censo do setor.</p>

    <h3 class="card-title">O tamanho do mercado</h3>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Indicador</th><th>Valor</th><th>Confiança</th></tr></thead>
        <tbody>
          <tr><td><strong>Cirurgiões-dentistas registrados no Brasil</strong></td><td>~450.000 (marco atingido em 2025)</td><td>🟢</td></tr>
          <tr><td><strong>Crescimento</strong></td><td>~4% ao ano · 15-16 mil novos formados/ano</td><td>🟢</td></tr>
          <tr><td><strong>Histórico</strong></td><td>330 mil (2020) → 380 mil (2022) → 450 mil (2025) — expansão sustentada</td><td>🟢</td></tr>
          <tr><td><strong>Concentração geográfica</strong></td><td>~50% dos profissionais ativos no Sudeste (SP e MG)</td><td>🟢</td></tr>
          <tr><td><strong>Faturamento do setor</strong></td><td>R$ 45 bilhões/ano</td><td>🟡</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="card-title">A especialidade mais vazia do conselho</h3>
    <div class="card destaque">
      <p style="margin:0;">Apenas <strong>1.649 especialistas titulados em DTM e Dor Orofacial</strong> — 0,38% dos dentistas do país. Pra comparar: Ortodontia tem ~33.300 especialistas (20x mais), Implantodontia ~22.600 (14x) e a Harmonização Orofacial, reconhecida só em 2019, já passou de 4.000 — cresceu 50% num único ano. A especialidade de DTM existe desde 2002 e nunca explodiu: <strong>mercado subexplorado por escolha histórica dos profissionais, não por falta de demanda.</strong> 🟢</p>
    </div>

    <h3 class="card-title">A demanda clínica (o paciente existe, e muito)</h3>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Indicador</th><th>Valor</th><th>Confiança</th></tr></thead>
        <tbody>
          <tr><td><strong>População com pelo menos 1 sinal de DTM</strong></td><td>40-60%</td><td>🟢 base científica</td></tr>
          <tr><td><strong>Adultos com sintomas relevantes</strong></td><td>~33% (≈70 milhões de brasileiros)</td><td>🟢</td></tr>
          <tr><td><strong>Necessidade severa de tratamento</strong></td><td>3,6% a 7% da população (~7-15 milhões de adultos)</td><td>🟢</td></tr>
          <tr><td><strong>Proporção mulheres : homens entre pacientes</strong></td><td>4 : 1</td><td>🟢</td></tr>
        </tbody>
      </table>
      <div class="tbl-foot">Demanda represada gigante × 1.649 especialistas = um clínico geral capacitado em DTM tem mercado local praticamente infinito.</div>
    </div>

    <h3 class="card-title">O dinheiro por paciente e por consultório</h3>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Item</th><th>Particular</th><th>Convênio</th></tr></thead>
        <tbody>
          <tr><td><strong>Placa oclusal miorrelaxante</strong></td><td>R$ 1.250 – 1.500</td><td>R$ 349 – 437</td></tr>
          <tr><td><strong>Sessão de tratamento DTM</strong></td><td>R$ 200 – 400</td><td>R$ 144 (máx. 10 sessões)</td></tr>
          <tr><td><strong>Tratamento completo de DTM</strong></td><td><strong>R$ 3.500 – 10.000+</strong></td><td>—</td></tr>
        </tbody>
      </table>
      <div class="tbl-foot">Consultório individual fatura R$ 20-35 mil/mês bruto; clínica média R$ 40-70 mil; estruturada R$ 100 mil+. Margem líquida saudável: 20-35%. 🟢</div>
    </div>

    <h3 class="card-title">Quanto o dentista já paga pra se capacitar</h3>
    <ul class="entregas-lista">
      <li><strong>Especialização em DTM/DOF (formal, 18-30 meses)</strong><em>R$ 36 mil a R$ 60 mil 🟢 — presencial, longa, acadêmica.</em></li>
      <li><strong>Implantodontia</strong><em>R$ 35 mil a R$ 80 mil 🟢 — o teto de referência da categoria.</em></li>
      <li><strong>Ortodontia</strong><em>R$ 40 mil a R$ 70 mil 🟡.</em></li>
      <li><strong>Leitura</strong><em>O dentista ambicioso já orçamenta R$ 30-80 mil/ano em capacitação — a decisão é ponderada, não impulsiva, e há espaço confortável abaixo do teto das especializações formais.</em></li>
    </ul>

    <h3 class="card-title">Veredito: oceano azul qualificado</h3>
    <ul class="entregas-lista">
      <li><strong>Argumento 1 — densidade mínima de oferta</strong><em>0,38% dos dentistas são especialistas em DTM, com 23 anos de especialidade reconhecida e nenhuma explosão de adesão.</em></li>
      <li><strong>Argumento 2 — lacuna do componente de negócio</strong><em>Os formadores hegemônicos do nicho são professores universitários com cursos longos, técnicos e acadêmicos. Nenhum une técnica + construção de consultório lucrativo — e a única mentoria rotulada encontrada no nicho é clínica e multiprofissional, sem foco em negócio.</em></li>
      <li><strong>Argumento 3 — o ROI fecha a conta pro aluno</strong><em>Capacitar o clínico geral transforma consulta de R$ 200 em tratamento de R$ 3.500-10.000 — o retorno justifica o investimento na formação.</em></li>
      <li><strong>Ressalva</strong><em>A janela competitiva estimada é de 18 a 36 meses antes de outros formadores perceberem o espaço — e mentorias de negócio genéricas pra dentistas podem invadir o nicho se posicionarem um caso de DTM.</em></li>
    </ul>
    <div class="alert">
      <strong>Nota de moldura:</strong> este relatório foi feito no desenho antigo do projeto (mentoria anual pra especialistas). Com o pivô pra formação de iniciantes, a moldura competitiva foi refeita no Relatório 2 — os números de mercado, demanda e ticket seguem válidos.
    </div>

    <!-- ═══════════ RELATÓRIO 2 · CONCORRÊNCIA ═══════════ -->
    <h2 class="section-title">Relatório 2 · Concorrência em formações <span class="ei">(jul/2026)</span></h2>
    <p>Refaz a moldura competitiva pro produto real: uma formação técnica de longa duração pra clínico geral iniciante em DTM. A régua deixa de ser a especialização acadêmica e passa a ser o mercado de cursos e mentorias online de nicho técnico.</p>

    <h3 class="card-title">O mapa das 9 categorias que competem pelo mesmo aluno</h3>
    <div class="tbl-wrap">
      <table class="tbl" style="min-width:720px;">
        <thead><tr><th>Categoria</th><th>Formato típico</th><th>Duração</th><th>Ticket típico</th></tr></thead>
        <tbody>
          <tr><td><strong>A · Curso gravado de entrada</strong></td><td>100% online, assíncrono</td><td>8-16h de vídeo</td><td>R$ 77 – 995</td></tr>
          <tr><td><strong>B · Curso online robusto com comunidade</strong></td><td>Gravado + replay de lives + grupo</td><td>30-40h+</td><td>Não publicado (funil de vendas)</td></tr>
          <tr><td><strong>C · Mentoria em grupo intensiva curta</strong></td><td>Ao vivo (Zoom), semanal</td><td>4 semanas (4×4h)</td><td>R$ 6.000 – 9.000</td></tr>
          <tr><td><strong>D · Formação com componente de negócio</strong></td><td>Gravado/híbrido</td><td>Não especificado</td><td>Não publicado</td></tr>
          <tr><td><strong>E · Mentoria individualizada (1:1)</strong></td><td>Sob demanda</td><td>Não especificado</td><td>Não publicado</td></tr>
          <tr><td><strong>F · Pós EAD com selo formal (sem registro no conselho)</strong></td><td>100% EAD, provas online</td><td>15 meses / 760h</td><td>R$ 1.000 – 2.600 total</td></tr>
          <tr><td><strong>G · Imersão presencial curta</strong></td><td>Presencial, 2 dias</td><td>16h</td><td>R$ 995 – 2.500 à vista</td></tr>
          <tr><td><strong>H · Curso curto presencial semanal</strong></td><td>Presencial, 1x/semana à noite</td><td>60h / ~4 meses</td><td>~R$ 2.170</td></tr>
          <tr><td><strong>I · Especialização formal longa</strong></td><td>Presencial/híbrido</td><td>18-30 meses</td><td>R$ 36.000 – 60.000</td></tr>
        </tbody>
      </table>
      <div class="tbl-foot">A formação do Rodrigo (10 meses, semanal, ao vivo, em grupo) não tem par direto em NENHUMA das 9 categorias — fica entre a C (mesmo formato, 8x mais curta) e a I (duração comparável, presencial e 15-25x mais cara).</div>
    </div>

    <h3 class="card-title">Achado crítico: dois "concorrentes" são do próprio Rodrigo</h3>
    <div class="card destaque">
      <p style="margin:0 0 10px;">O levantamento encontrou dois produtos competindo no nicho que, na verdade, são <strong>ativos do próprio Rodrigo</strong>: o curso presencial de 160h em 8 módulos que ele coordena em Brasília (com supervisão clínica de pacientes reais) e o curso gravado de entrada de 9 aulas por R$ 397, com mais de 25 anos de autoridade na página. 🟢</p>
      <p style="margin:0;"><strong>O que isso muda:</strong> não são concorrência — são histórico de produto. O curso gravado é uma isca de funil pronta e testada (quem completa e gosta é o lead mais qualificado pra formação); o presencial é a prova social que nenhum player do cluster online tem — volume real de alunos formados com supervisão clínica.</p>
    </div>

    <h3 class="card-title">O cluster direto — 4 concorrentes online (anonimizados)</h3>
    <div class="tbl-wrap">
      <table class="tbl" style="min-width:720px;">
        <thead><tr><th>Concorrente</th><th>Formato</th><th>Preço</th><th>O que ele tem de relevante</th></tr></thead>
        <tbody>
          <tr><td><strong>Concorrente A</strong> · curso robusto gravado</td><td>35h+ gravadas + replay de lives + comunidade com discussão de casos</td><td>Não publicado (indício de ticket acima de R$ 2.000 🟡)</td><td>Vínculo acadêmico internacional e forte presença digital; foco declarado no iniciante</td></tr>
          <tr><td><strong>Concorrente B</strong> · mentoria intensiva</td><td>4 sessões semanais de 4h ao vivo (Zoom), ~1 mês; opção com tarde prática presencial</td><td><strong>R$ 6.000 só online · R$ 9.000 com presencial</strong> 🟢</td><td>O dado de ticket mais comparável do nicho — <strong>R$ 375-563 por hora ao vivo</strong></td></tr>
          <tr><td><strong>Concorrente C</strong> · formação com precificação</td><td>Online (plataforma de infoprodutos), formato não detalhado</td><td>Não publicado 🟡</td><td><strong>A concorrente mais próxima estrategicamente</strong>: a única que ensina explicitamente a precificar o serviço dentro do curso técnico</td></tr>
          <tr><td><strong>Concorrente D</strong> · ecossistema consolidado</td><td>Gravado + produtos adjacentes (placas, certificação própria, instituto)</td><td>Não publicado 🟡</td><td>Prova que o nicho sustenta negócio educacional de múltiplos produtos — e marca pessoal forte disputando busca e anúncio</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="card-title">O "certificado formal online" citado na call</h3>
    <div class="card">
      <dl class="kv">
        <dt>O que é</dt><dd>Pós-graduação EAD de uma grande rede de ensino: 760h, 15 meses, 100% online, sem interação ao vivo</dd>
        <dt>Preço</dt><dd>Mensalidade de R$ 69-173 — total estimado de R$ 1.000 a R$ 2.600 🟡</dd>
        <dt>A pegadinha</dt><dd>A própria página do curso avisa: o título <strong>não equivale ao registro de especialidade no conselho da categoria</strong> — vale pra lecionar e pontuar em concurso, não pra se anunciar especialista</dd>
        <dt>Como compete</dt><dd>Por preço + selo formal, não por profundidade clínica nem prática</dd>
      </dl>
      <p style="font-size:12.5px;color:var(--cinza);margin:10px 0 0;">A objeção "mas tem uma pós com selo formal por R$ 1-2,6 mil" precisa ser antecipada na copy — e o argumento vencedor não é preço: é prática clínica real contra titulação sem prática. Pendência: confirmar com o Rodrigo se este é exatamente o concorrente que ele tinha em mente.</p>
    </div>

    <h3 class="card-title">O gap confirmado e as implicações</h3>
    <ul class="entregas-lista">
      <li><strong>Ninguém entrega cadência semanal ao vivo por 8-10 meses</strong><em>O mercado está polarizado entre "gravado sem prazo" e "intensivo curto ao vivo de 1 mês". O formato da formação não tem concorrente direto — vantagem clara de diferenciação, com um risco embutido: não existe preço de referência pronto, então a comunicação vai precisar ensinar por que a duração longa é o mecanismo, não um defeito.</em></li>
      <li><strong>A régua de valor/hora sustenta o ticket</strong><em>R$ 375-563/hora ao vivo é o praticado pelo Concorrente B em 16h. A formação entrega ~41 encontros ao longo de 10 meses — mesmo aplicando uma fração dessa régua (formato em grupo, escala maior), o ticket fica bem acima de qualquer curso gravado sem chegar perto das especializações de R$ 36-60 mil.</em></li>
      <li><strong>Só 1 concorrente ocupa o ângulo de precificação/negócio</strong><em>E dentro de um curso pontual, não de uma jornada longa. O espaço "técnica + monetização numa jornada estruturada" segue aberto — mapear o Concorrente C em mais profundidade antes de fechar o posicionamento final.</em></li>
      <li><strong>Arquitetura de esteira já validada no nicho</strong><em>O Concorrente D provou que o nicho sustenta múltiplos produtos. A esteira do Rodrigo (curso de entrada → formação → mentoria) segue lógica que o mercado já paga.</em></li>
    </ul>

    <h3 class="card-title">Lacunas de dados declaradas</h3>
    <ul class="entregas-lista">
      <li><strong>Preços exatos dos Concorrentes A, C e D</strong><em>Ocultos em funil de vendas — resolver com checkout simulado ou lead oculto.</em></li>
      <li><strong>Volume de alunos / prova social do cluster online</strong><em>Nenhum dos 4 publica volume de formados — checar redes e depoimentos numa próxima rodada.</em></li>
      <li><strong>Taxa de evasão em curso gravado do nicho</strong><em>Sem dado público específico; o padrão geral de infoproduto assíncrono passa de 60-70% de abandono, mas sem fonte primária do nicho — usado só como referência, não como dado de venda.</em></li>
    </ul>

    <!-- ═══════════ RELATÓRIO 3 · O APRENDIZ ═══════════ -->
    <h2 class="section-title">Relatório 3 · O perfil do aluno <span class="ei">(jul/2026)</span></h2>
    <p>Quem é o dentista que a formação vai transformar — demografia, dores, desejos, medos, objeções e canais. A versão estruturada em 7 blocos (com o retrato falado da persona) vive na página <a href="#met-aprendiz" style="color:var(--vermelho);font-weight:600;">Cliente Ideal</a>; aqui ficam os achados do relatório e a metodologia.</p>

    <h3 class="card-title">Demografia do dentista brasileiro</h3>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Indicador</th><th>Dado</th><th>Confiança</th></tr></thead>
        <tbody>
          <tr><td><strong>Gênero</strong></td><td>60,1% mulheres entre cirurgiões-dentistas; 69,6% na força de trabalho odontológica total</td><td>🟢</td></tr>
          <tr><td><strong>Tendência histórica</strong></td><td>1960: 90% homens → hoje: predominância feminina cresce a cada década abaixo dos 60 anos</td><td>🟢</td></tr>
          <tr><td><strong>Consultórios generalistas</strong></td><td>53% (sem diferencial de nicho)</td><td>🟡</td></tr>
          <tr><td><strong>Renda CLT de clínico em início de carreira</strong></td><td>R$ 2.500 – 5.000/mês</td><td>🟡</td></tr>
          <tr><td><strong>Faturamento de consultório individual</strong></td><td>R$ 20-35 mil/mês bruto — o teto que empurra a busca por diferencial</td><td>🟢</td></tr>
        </tbody>
      </table>
      <div class="tbl-foot">✅ Validado pelo Rodrigo (12/07 e 26/07): o aluno-alvo é o dentista já estabelecido (de alguns anos de formado ao veterano de 20+), clínico geral OU especialista de outra área, com consultório próprio ou cadeira alugada.</div>
    </div>

    <h3 class="card-title">O dado mais forte do projeto</h3>
    <div class="card destaque">
      <p style="margin:0;"><strong>63,9% dos dentistas confundem sinais de DTM com bruxismo</strong> — relatam limitação de abertura bucal como sinal de bruxismo quando é sinal de DTM, e a maioria erra também estalos, crepitação e desgastes. É dado de paper com metodologia e amostra, não anedota 🟢 — e valida por ciência exatamente a tese do Rodrigo. Complemento do mesmo estudo: 100% dizem acreditar em tratamento multidisciplinar, mas a maioria encaminha o paciente em vez de conduzir a própria parte — sabe que precisa, não sabe fazer.</p>
    </div>

    <h3 class="card-title">Dores, problemas invisíveis e desejos</h3>
    <ul class="entregas-lista">
      <li><strong>Dor consciente — "não sei diferenciar bruxismo de DTM" 🟢</strong><em>A mais documentada; gancho central de qualquer peça de atração.</em></li>
      <li><strong>Dor consciente — "não sei fazer o diagnóstico protocolar" 🟡</strong><em>Anamnese estruturada, palpação e imagem não fazem parte da rotina da clínica geral.</em></li>
      <li><strong>Dor de negócio — o teto de renda do convênio 🟢</strong><em>R$ 20-35 mil/mês bruto de teto, concorrência crescendo 4% ao ano pelo mesmo bolo.</em></li>
      <li><strong>Problema inconsciente — trata sintoma, não a disfunção 🟡</strong><em>Prescreve placa genérica achando que "fez o protocolo". Ele não sabe que não sabe.</em></li>
      <li><strong>Problema inconsciente — não vê o valor comercial do próprio diagnóstico 🟢</strong><em>Com 40-60% da população com sinais, o paciente de R$ 3.500-10.000 já passa todo dia na cadeira dele. Não é falta de vontade — é cegueira. O problema mais poderoso pro mecanismo de venda.</em></li>
      <li><strong>Desejo dominante — status e maestria 🟢</strong><em>Ser o profissional que decifra o que ninguém decifrou (o paciente de DTM peregrina por especialidades sem resposta — padrão documentado pela entidade da especialidade). O dinheiro é prova do status, não o desejo em si.</em></li>
    </ul>

    <h3 class="card-title">Os 3 medos que travam a matrícula</h3>
    <ul class="entregas-lista">
      <li><strong>"Tem paciente de DTM na minha cidade?"</strong><em>Quebrar com o dado de prevalência (40-60% em qualquer população) — argumento local e matemático: "olha pro seu consultório, não pro Brasil".</em></li>
      <li><strong>Desconfiança de curso online na odontologia 🟢</strong><em>O conselho federal vetou EAD na graduação — isso criou um viés cultural que respinga até em pós e atualização. "Odontologia se aprende com as mãos" é objeção viva: o componente presencial (imersão de palpação) precisa estar visível desde a primeira peça de comunicação.</em></li>
      <li><strong>Burnout e sobrecarga 🟢</strong><em>1 em cada 10 dentistas vive burnout; o Brasil é o 2º país em casos diagnosticados. O argumento não pode ser "mais uma coisa pra fazer" — é alívio (parar de tratar errado) tanto quanto ganho.</em></li>
    </ul>

    <h3 class="card-title">Objeções mapeadas × como responder</h3>
    <div class="tbl-wrap">
      <table class="tbl" style="min-width:680px;">
        <thead><tr><th>Objeção</th><th>Resposta estratégica</th></tr></thead>
        <tbody>
          <tr><td><strong>"Não tem paciente na minha cidade"</strong></td><td>Você já atende esses pacientes — só não sabe reconhecer (prevalência de 40-60%)</td></tr>
          <tr><td><strong>"Curso online não ensina odontologia"</strong></td><td>Imersão presencial de palpação + encontros ao vivo semanais + casos reais corrigidos, visíveis desde a 1ª peça</td></tr>
          <tr><td><strong>"É caro, não sei se compensa"</strong></td><td>ROI explícito: 2-4 tratamentos de DTM (R$ 3.500-10.000 cada) pagam a formação</td></tr>
          <tr><td><strong>"Já fiz curso e não voltou o investimento"</strong></td><td>O diferencial é a etapa comercial: técnica sem monetização é o gap dos cursos acadêmicos</td></tr>
          <tr><td><strong>"Não tenho tempo"</strong></td><td>1 encontro semanal, não diário — e alívio, não só carga</td></tr>
          <tr><td><strong>"10 meses é muito"</strong></td><td>A duração é o mecanismo: jornada completa diagnóstico → tratamento → negócio, que nenhum concorrente entrega</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="card-title">Canais e gatilhos de decisão</h3>
    <ul class="entregas-lista">
      <li><strong>Onde ele está 🟢</strong><em>Instagram de professores-referência do nicho · congresso da especialidade (bienal, 800+ participantes — o maior de Dor Orofacial da América Latina) · a base própria do Rodrigo (~6.800 seguidores + 300 ex-alunos + leads históricos).</em></li>
      <li><strong>Gatilho mais provável 🔴</strong><em>O caso clínico que ele não soube resolver — o "fracasso silencioso" repetido. Segundo gatilho: a percepção do teto de renda. Terceiro (a confirmar): experiência pessoal ou familiar com dor orofacial. Validação: perguntar "o que te fez procurar essa formação?" aos primeiros leads reais.</em></li>
    </ul>
    <div class="alert">
      <strong>Transparência de metodologia:</strong> esta rodada não capturou citações literais de dentistas em grupos fechados (não indexados publicamente) nem dado de gênero/idade específico de alunos de DTM. As 5 lacunas estão declaradas no relatório interno com o caminho de validação — o mais barato: depoimentos e perfil das turmas anteriores do próprio Rodrigo.
    </div>

    <!-- ═══════════ RELATÓRIO 4 · CERTIFICAÇÃO ═══════════ -->
    <h2 class="section-title">Relatório 4 · Rotas de certificação <span class="ei">(jul/2026)</span></h2>
    <p>Responde a dúvida da call: dá pra agregar selo do Ministério da Educação a uma formação de 10 meses online sem virar instituição de ensino? O mapeamento regulatório completo, com a diferença crucial entre os dois "especialistas" que o mercado confunde.</p>

    <h3 class="card-title">O fato central</h3>
    <div class="card destaque">
      <p style="margin:0;">O Ministério da Educação <strong>não credencia pessoa física nem curso avulso — só instituições de ensino superior</strong>. O Rodrigo, como pessoa física ou empresa de curso, nunca vai ter "selo MEC" no próprio nome: a única via é uma instituição parceira credenciada assumir a emissão do certificado, com ele como conteudista/docente — o que muda a estrutura do negócio e reduz o controle sobre o produto. 🟢</p>
    </div>

    <h3 class="card-title">As 3 rotas comparadas</h3>
    <div class="tbl-wrap">
      <table class="tbl" style="min-width:760px;">
        <thead><tr><th>Critério</th><th>Curso livre (rota atual)</th><th>Pós lato sensu via instituição parceira</th><th>Especialização com registro no conselho</th></tr></thead>
        <tbody>
          <tr><td><strong>Base legal</strong></td><td>Art. 42 da LDB — sem autorização prévia de ninguém</td><td>Resolução federal de pós-graduação (360h mínimas)</td><td>Resolução do conselho da categoria: <strong>750h em até 24 meses</strong></td></tr>
          <tr><td><strong>Quem emite o certificado</strong></td><td>O próprio Rodrigo / a empresa dele</td><td>A instituição parceira (nunca o Rodrigo)</td><td>Instituição credenciada e aprovada pelo conselho</td></tr>
          <tr><td><strong>Formato online</strong></td><td>Livre, sem restrição</td><td>Permitido, com atividades presenciais obrigatórias</td><td>Mercado fortemente presencial — zona cinzenta a validar com o conselho</td></tr>
          <tr><td><strong>O que o aluno pode dizer</strong></td><td>Certificado de conclusão com carga horária — nunca "pós" ou "especialização"</td><td>"Especialista" no sentido acadêmico — <strong>sem direito de se anunciar especialista no conselho</strong></td><td>Título de especialista registrável — o único que autoriza o anúncio</td></tr>
          <tr><td><strong>Autonomia de produto</strong></td><td>Total</td><td>Parcial — currículo e avaliação sob aprovação da instituição</td><td>Baixa — grade e exigências do conselho à risca</td></tr>
          <tr><td><strong>Prazo pra estruturar</strong></td><td>Imediato (já opera assim)</td><td>Meses de negociação + aprovação pedagógica</td><td>O mais longo e caro</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="card-title">A diferença que o mercado esconde</h3>
    <div class="card">
      <p style="margin:0 0 10px;">Existem <strong>dois produtos com nomes quase idênticos e status regulatório completamente diferente</strong>: a pós de 360h com selo formal (que dá título "acadêmico" de especialista) e a especialização de 750h reconhecida pelo conselho (a única que permite o dentista se ANUNCIAR especialista). A ambiguidade entre os dois é explorada em publicidade por parte do mercado — inclusive, com alta probabilidade, pelo concorrente que motivou a dúvida do Rodrigo.</p>
      <p style="margin:0;"><strong>O risco jurídico é do aluno também:</strong> o Código de Ética da categoria veda anunciar especialidade sem registro (com penas que chegam à suspensão do exercício). A copy da formação não pode insinuar que o aluno "sai especialista" — seria promessa que induz o comprador a uma futura infração ética, além de publicidade enganosa.</p>
    </div>

    <h3 class="card-title">Recomendação da consultoria</h3>
    <ul class="entregas-lista">
      <li><strong>Lançar como curso livre</strong><em>O formato de 10 meses online em grupo não encaixa em nenhuma rota regulada sem mudança estrutural grande de negócio. O que vende nesse universo não é selo — é a autoridade de quem assina: o formador de ~10% dos especialistas do país.</em></li>
      <li><strong>Corrigir a comparação com o concorrente antes de decidir qualquer coisa</strong><em>O "selo formal online" dele provavelmente carrega a mesma limitação (não dá registro no conselho) — a vantagem aparente pode ser só ambiguidade de propaganda.</em></li>
      <li><strong>Parceria com instituição = opção real pra uma fase 2</strong><em>Mas é outro produto, com outro ciclo de venda, outro preço e menos controle — não um "upgrade" do atual.</em></li>
      <li><strong>Validação jurídica antes da campanha</strong><em>Revisar toda a linguagem de venda à luz do Código de Ética (termos reservados: "pós-graduação", "especialização", "especialista") — idealmente antes de cada lançamento, não só uma vez.</em></li>
    </ul>
    <div class="alert amarelo">
      <strong>Decisão final na Validação da Estratégia (Marco 02)</strong>, com validação jurídica da linguagem de venda. Pendência de verificação declarada: confirmar o texto integral da resolução de 750h direto na fonte oficial antes da decisão.
    </div>
  `,
};
