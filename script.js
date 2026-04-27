const PONTOS_POR_ACERTO = 10;
const TEMPO_POR_PERGUNTA = 30;
const QUESTOES_POR_GRUPO = 5;
const TOTAL_GRUPOS = 5;

const perguntasBase = [
  { pergunta: "Qual é o principal objetivo da prospecção mineral?", opcoes: ["Extrair imediatamente o minério", "Identificar áreas com potencial mineral", "Transportar o minério", "Recuperar área degradada"], correta: 1 },
  { pergunta: "A prospecção mineral é considerada:", opcoes: ["Etapa final da mineração", "Etapa de venda do minério", "Fase inicial e de maior risco", "Fase de descomissionamento"], correta: 2 },
  { pergunta: "Qual alternativa NÃO corresponde a um método de prospecção?", opcoes: ["Geofísica", "Geoquímica", "Lavra", "Mapeamento geológico"], correta: 2 },
  { pergunta: "A sondagem permite:", opcoes: ["Confirmar a presença de minério no subsolo", "Substituir toda a pesquisa mineral", "Vender o minério", "Recuperar o solo"], correta: 0 },
  { pergunta: "A pesquisa mineral serve para:", opcoes: ["Somente encontrar rochas", "Confirmar a jazida e sua viabilidade econômica", "Fechar a mina", "Fazer propaganda da empresa"], correta: 1 },

  { pergunta: "O profissional mais ligado à análise geológica é o:", opcoes: ["Geólogo", "Técnico em Mineração", "Engenheiro Físico", "Arqueólogo"], correta: 0 },
  { pergunta: "A principal diferença entre prospecção e pesquisa mineral é que:", opcoes: ["São exatamente a mesma coisa", "A prospecção é mais detalhada que a pesquisa", "A prospecção busca indícios, enquanto a pesquisa confirma e avalia", "A pesquisa vem antes da prospecção"], correta: 2 },
  { pergunta: "O mapeamento geológico ajuda a:", opcoes: ["Identificar tipos de rochas", "Identificar estruturas e indícios de mineralização", "Definir o preço do minério", "Encerrar a mina"], correta: 1 },
  { pergunta: "Antes da lavra, a pesquisa mineral reduz incertezas sobre:", opcoes: ["Quantidade, qualidade e viabilidade econômica da jazida", "Observação direta das rochas apenas", "Número de funcionários da empresa", "Divulgação do empreendimento"], correta: 0 },
  { pergunta: "A ordem correta das etapas da mineração é:", opcoes: ["Descomissionamento → Lavra → Prospecção → Pesquisa", "Pesquisa → Lavra → Descomissionamento → Prospecção", "Prospecção → Pesquisa → Lavra → Descomissionamento", "Beneficiamento → Descomissionamento → Prospecção → Sondagem"], correta: 2 },

  { pergunta: "A geofísica é utilizada para:", opcoes: ["Detectar variações físicas no subsolo", "Pintar mapas geológicos", "Transportar amostras", "Fechar a mina"], correta: 0 },
  { pergunta: "Amostras de solo, sedimento e rocha são importantes porque:", opcoes: ["Substituem a lavra", "Ajudam a indicar a presença de mineralização", "Servem apenas para exposição", "Eliminam a necessidade de sondagem"], correta: 1 },
  { pergunta: "Jazida mineral é:", opcoes: ["Qualquer rocha encontrada no solo", "Acúmulo natural de minerais com valor econômico", "Um tipo de máquina de perfuração", "Uma etapa da lavra"], correta: 1 },
  { pergunta: "Uma etapa comum da pesquisa mineral é:", opcoes: ["Sondagem", "Propaganda", "Fundição", "Comercialização"], correta: 0 },
  { pergunta: "A prospecção é importante porque:", opcoes: ["Evita todo o risco do projeto", "Ajuda a encontrar áreas promissoras", "Garante lucro imediato", "Substitui a pesquisa mineral"], correta: 1 },

  { pergunta: "A pesquisa mineral acontece:", opcoes: ["Depois do beneficiamento", "Antes da lavra", "Depois do fechamento da mina", "Somente após a venda do minério"], correta: 1 },
  { pergunta: "Uma das principais funções da geoquímica na pesquisa mineral é:", opcoes: ["Identificar e analisar anomalias químicas associadas à mineralização", "Controlar o transporte de caminhões", "Definir salários dos trabalhadores", "Realizar o fechamento de poços de lavra"], correta: 0 },
  { pergunta: "Quando a empresa perfura o solo para investigar a profundidade do minério, ela realiza:", opcoes: ["Sondagem", "Descomissionamento", "Beneficiamento", "Fundição"], correta: 0 },
  { pergunta: "O objetivo econômico da pesquisa mineral é descobrir se:", opcoes: ["A jazida pode ser explorada com retorno econômico", "A rocha é visualmente bonita", "A mina pode ser vendida", "A empresa vai mudar de nome"], correta: 0 },
  { pergunta: "Um indício superficial de mineralização pode ser obtido por meio de:", opcoes: ["Mapeamento geológico", "Comercialização", "Lavra subterrânea", "Beneficiamento"], correta: 0 },

  { pergunta: "A lavra começa somente quando:", opcoes: ["A jazida é confirmada e avaliada", "A propaganda é realizada", "O minério é exportado", "A área já foi recuperada"], correta: 0 },
  { pergunta: "O que é um sedimento mineral?", opcoes: ["Rocha ígnea formada em grandes profundidades", "Material resultante da decomposição, transporte e deposição de minerais e rochas", "Um tipo de máquina usada na lavra", "Minério já pronto para comercialização"], correta: 1 },
  { pergunta: "Qual órgão autoriza a pesquisa mineral no Brasil?", opcoes: ["IBAMA", "DNIT", "CPRM", "ANM"], correta: 3 },
  { pergunta: "O que é uma anomalia, no contexto da pesquisa mineral?", opcoes: ["Algo esperado", "Algo comum", "Um laboratório de pesquisas", "Algo que apresenta diferença em relação ao padrão normal"], correta: 3 },
  { pergunta: "A prospecção e a pesquisa mineral são importantes porque:", opcoes: ["Diminuem as incertezas antes da extração", "Eliminam totalmente os custos", "Substituem todas as licenças ambientais", "Impedem qualquer impacto ambiental"], correta: 0 },

  { pergunta: "Questão dourada: A principal finalidade da prospecção é:", opcoes: ["Extrair o minério", "Identificar áreas com potencial mineral", "Vender o minério", "Fundir o minério"], correta: 1, dourada: true },
  { pergunta: "Questão dourada: A pesquisa mineral confirma:", opcoes: ["Apenas a cor da rocha", "A viabilidade e as características da jazida", "Somente o preço final", "A propaganda da empresa"], correta: 1, dourada: true },
  { pergunta: "Questão dourada: A geoquímica estuda:", opcoes: ["A composição química de materiais geológicos", "Somente o peso dos caminhões", "Apenas a temperatura do ar", "A cor dos equipamentos"], correta: 0, dourada: true }
];

const grupos = [
  { nome: "Grupo 1", pontos: 0, respondidas: 0, ajudas: { pular: 1, universitarios: 1, eliminar: 1 } },
  { nome: "Grupo 2", pontos: 0, respondidas: 0, ajudas: { pular: 1, universitarios: 1, eliminar: 1 } },
  { nome: "Grupo 3", pontos: 0, respondidas: 0, ajudas: { pular: 1, universitarios: 1, eliminar: 1 } },
  { nome: "Grupo 4", pontos: 0, respondidas: 0, ajudas: { pular: 1, universitarios: 1, eliminar: 1 } },
  { nome: "Grupo 5", pontos: 0, respondidas: 0, ajudas: { pular: 1, universitarios: 1, eliminar: 1 } }
];

let perguntasNormais = [];
let perguntasDouradas = [];

let grupoAtual = 0;
let perguntaAtual = 0;
let tempoRestante = TEMPO_POR_PERGUNTA;
let timer = null;
let jogoIniciado = false;
let respondeu = false;
let vozLigada = true;
let emQuestaoDourada = false;
let empatados = [];
let perguntaDouradaAtual = null;
let buzzDisponiveis = [];
let buzzVencedor = null;
let perguntaAtualRenderizada = null;

const scoreboard = document.getElementById("scoreboard");
const currentTeam = document.getElementById("currentTeam");
const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const messageEl = document.getElementById("message");
const presenterText = document.getElementById("presenterText");
const finalScreen = document.getElementById("finalScreen");
const gameScreen = document.getElementById("gameScreen");
const winnerText = document.getElementById("winnerText");
const rankingList = document.getElementById("rankingList");
const helpStatus = document.getElementById("helpStatus");
const hintBox = document.getElementById("hintBox");
const hintText = document.getElementById("hintText");
const hintTitle = document.getElementById("hintTitle");
const goldenSection = document.getElementById("goldenSection");
const signalBox = document.getElementById("signalBox");
const goldenBuzzBox = document.getElementById("goldenBuzzBox");
const goldenBuzzText = document.getElementById("goldenBuzzText");
const goldenBuzzButtons = document.getElementById("goldenBuzzButtons");

const btnIniciar = document.getElementById("btnIniciar");
const btnProxima = document.getElementById("btnProxima");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const btnPular = document.getElementById("btnPular");
const btnUniversitarios = document.getElementById("btnUniversitarios");
const btnEliminar = document.getElementById("btnEliminar");
const btnLerPergunta = document.getElementById("btnLerPergunta");
const btnToggleVoice = document.getElementById("btnToggleVoice");
const btnIniciarDourada = document.getElementById("btnIniciarDourada");

document.getElementById("tempoInfo").textContent = TEMPO_POR_PERGUNTA;
timerEl.textContent = TEMPO_POR_PERGUNTA;

btnIniciar.addEventListener("click", iniciarJogo);
btnProxima.addEventListener("click", proximaPerguntaManual);
btnReiniciar.addEventListener("click", reiniciarJogo);
btnJogarNovamente.addEventListener("click", reiniciarJogo);
btnPular.addEventListener("click", usarPular);
btnUniversitarios.addEventListener("click", usarUniversitarios);
btnEliminar.addEventListener("click", usarEliminar);
btnLerPergunta.addEventListener("click", lerPerguntaAtual);
btnToggleVoice.addEventListener("click", toggleVoice);
btnIniciarDourada.addEventListener("click", iniciarQuestaoDourada);

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function prepararPerguntas() {
  const normais = perguntasBase.filter(p => !p.dourada);
  const douradas = perguntasBase.filter(p => p.dourada);

  perguntasNormais = embaralhar(normais);
  perguntasDouradas = embaralhar(douradas);
}

function embaralharAlternativas(pergunta) {
  const itens = pergunta.opcoes.map((texto, indice) => ({
    texto,
    correta: indice === pergunta.correta
  }));

  for (let i = itens.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itens[i], itens[j]] = [itens[j], itens[i]];
  }

  return {
    pergunta: pergunta.pergunta,
    opcoes: itens.map(item => item.texto),
    correta: itens.findIndex(item => item.correta),
    dourada: !!pergunta.dourada
  };
}

function atualizarPlacar() {
  scoreboard.innerHTML = "";
  grupos.forEach((grupo, i) => {
    const div = document.createElement("div");
    div.className = "team";
    if (i === grupoAtual && jogoIniciado && !emQuestaoDourada) div.classList.add("active");
    div.innerHTML = `
      <div class="name">${grupo.nome}<br><small>${grupo.respondidas}/${QUESTOES_POR_GRUPO} questões</small></div>
      <div class="score">${grupo.pontos}</div>
    `;
    scoreboard.appendChild(div);
  });
}

function atualizarAjudas() {
  const grupo = grupos[grupoAtual];
  helpStatus.innerHTML = `
    Pular: <strong>${grupo.ajudas.pular}</strong><br>
    Universitários: <strong>${grupo.ajudas.universitarios}</strong><br>
    Eliminar 2: <strong>${grupo.ajudas.eliminar}</strong>
  `;

  btnPular.disabled = grupo.ajudas.pular <= 0 || respondeu || emQuestaoDourada;
  btnUniversitarios.disabled = grupo.ajudas.universitarios <= 0 || respondeu || emQuestaoDourada;
  btnEliminar.disabled = grupo.ajudas.eliminar <= 0 || respondeu || emQuestaoDourada;
}

function textoApresentador(texto) {
  presenterText.textContent = texto;
}

function mostrarSinal(tipo, texto) {
  signalBox.innerHTML = `<div class="signal ${tipo}">${texto}</div>`;
}

function limparSinal() {
  signalBox.innerHTML = "";
}

function iniciarJogo() {
  reiniciarEstado();
  prepararPerguntas();
  jogoIniciado = true;
  renderPerguntaNormal();
  textoApresentador("Começamos. Perguntas e alternativas agora aparecem embaralhadas.");
}

function reiniciarEstado() {
  clearInterval(timer);
  grupos.forEach(g => {
    g.pontos = 0;
    g.respondidas = 0;
    g.ajudas = { pular: 1, universitarios: 1, eliminar: 1 };
  });
  perguntasNormais = [];
  perguntasDouradas = [];
  grupoAtual = 0;
  perguntaAtual = 0;
  tempoRestante = TEMPO_POR_PERGUNTA;
  respondeu = false;
  emQuestaoDourada = false;
  empatados = [];
  perguntaDouradaAtual = null;
  buzzDisponiveis = [];
  buzzVencedor = null;
  perguntaAtualRenderizada = null;
  finalScreen.classList.remove("show");
  gameScreen.classList.remove("hidden");
  goldenSection.classList.add("hidden");
  goldenBuzzBox.classList.add("hidden");
  hintBox.classList.add("hidden");
  limparSinal();
  messageEl.textContent = "";
  atualizarPlacar();
  atualizarAjudas();
}

function renderPerguntaNormal() {
  if (perguntaAtual >= perguntasNormais.length) {
    finalizarJogo();
    return;
  }

  respondeu = false;
  hintBox.classList.add("hidden");
  goldenBuzzBox.classList.add("hidden");

  const perguntaBase = perguntasNormais[perguntaAtual];
  const pergunta = embaralharAlternativas(perguntaBase);
  perguntaAtualRenderizada = pergunta;

  montarPergunta(pergunta, `Pergunta ${perguntaAtual + 1} de ${perguntasNormais.length}`, grupos[grupoAtual].nome);
}

function montarPergunta(pergunta, contadorTexto, nomeGrupo) {
  currentTeam.textContent = `Grupo da vez: ${nomeGrupo}`;
  questionCount.textContent = contadorTexto;
  questionText.textContent = pergunta.pergunta;
  answers.innerHTML = "";
  messageEl.textContent = "";
  limparSinal();

  const letras = ["A", "B", "C", "D"];
  pergunta.opcoes.forEach((opcao, indice) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.dataset.index = indice;
    btn.innerHTML = `<span>${letras[indice]})</span> ${opcao}`;
    btn.addEventListener("click", () => responder(indice, btn, pergunta));
    answers.appendChild(btn);
  });

  if (emQuestaoDourada && !buzzVencedor) {
    bloquearAlternativas();
  }

  atualizarPlacar();
  atualizarAjudas();

  tempoRestante = TEMPO_POR_PERGUNTA;
  timerEl.textContent = tempoRestante;
  timerEl.style.color = "var(--gold)";
  iniciarTimer();

  if (vozLigada) lerTexto(pergunta.pergunta);
}

function iniciarTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    tempoRestante--;
    timerEl.textContent = tempoRestante;
    timerEl.style.color = tempoRestante <= 5 ? "#ff8080" : "var(--gold)";
    if (tempoRestante <= 0) {
      clearInterval(timer);
      tempoEsgotado();
    }
  }, 1000);
}

function responder(indiceSelecionado, botaoClicado, pergunta) {
  if (respondeu) return;
  if (emQuestaoDourada && !buzzVencedor) return;

  respondeu = true;
  clearInterval(timer);
  desativarBotoes();

  const correta = pergunta.correta;
  const botoes = document.querySelectorAll(".answer");
  const letras = ["A", "B", "C", "D"];

  if (botoes[correta]) botoes[correta].classList.add("correct");

  if (indiceSelecionado === correta) {
    grupos[grupoAtual].pontos += PONTOS_POR_ACERTO;
    botaoClicado.classList.add("correct");
    mostrarSinal("correct", "✅ ACERTOU!");
    messageEl.textContent = `${grupos[grupoAtual].nome} acertou e ganhou ${PONTOS_POR_ACERTO} pontos!`;
    tocarAcerto();

    if (emQuestaoDourada) {
      finalizarVencedorDourado(grupos[grupoAtual]);
      return;
    }
  } else {
    botaoClicado.classList.add("wrong");
    mostrarSinal("wrong", "❌ ERROU!");
    messageEl.textContent = `${grupos[grupoAtual].nome} errou. A correta era ${letras[correta]}.`;
    tocarErro();
  }

  if (!emQuestaoDourada) {
    grupos[grupoAtual].respondidas++;
    atualizarPlacar();
    atualizarAjudas();
    setTimeout(() => avancarRodadaNormal(), 2200);
  } else {
    buzzDisponiveis = buzzDisponiveis.filter(nome => nome !== grupos[grupoAtual].nome);
    buzzVencedor = null;
    atualizarPlacar();
    setTimeout(() => {
      if (buzzDisponiveis.length === 0) {
        reiniciarBatalhaDourada();
      } else {
        prepararBuzzDourado();
      }
    }, 2200);
  }
}

function tempoEsgotado() {
  if (respondeu) return;

  respondeu = true;
  desativarBotoes();

  const pergunta = perguntaAtualRenderizada;
  const correta = pergunta.correta;
  const botoes = document.querySelectorAll(".answer");

  if (botoes[correta]) {
    botoes[correta].classList.add("correct");
  }

  mostrarSinal("wrong", "⏱️ TEMPO ESGOTADO!");
  messageEl.textContent = `Tempo esgotado para ${grupos[grupoAtual].nome}.`;
  tocarErro();

  if (!emQuestaoDourada) {
    grupos[grupoAtual].respondidas++;
    atualizarPlacar();
    setTimeout(() => avancarRodadaNormal(), 2200);
  } else {
    buzzDisponiveis = buzzDisponiveis.filter(nome => nome !== grupos[grupoAtual].nome);
    buzzVencedor = null;
    setTimeout(() => {
      if (buzzDisponiveis.length === 0) {
        reiniciarBatalhaDourada();
      } else {
        prepararBuzzDourado();
      }
    }, 2200);
  }
}

function desativarBotoes() {
  document.querySelectorAll(".answer").forEach(btn => btn.disabled = true);
  btnPular.disabled = true;
  btnUniversitarios.disabled = true;
  btnEliminar.disabled = true;
}

function bloquearAlternativas() {
  document.querySelectorAll(".answer").forEach(btn => {
    btn.disabled = true;
    btn.classList.add("locked");
  });
}

function liberarAlternativas() {
  document.querySelectorAll(".answer").forEach(btn => {
    if (!btn.classList.contains("eliminated")) {
      btn.disabled = false;
    }
    btn.classList.remove("locked");
  });
}

function avancarRodadaNormal() {
  perguntaAtual++;

  if (perguntaAtual >= perguntasNormais.length) {
    finalizarJogo();
    return;
  }

  grupoAtual = (grupoAtual + 1) % TOTAL_GRUPOS;
  renderPerguntaNormal();
}

function finalizarJogo() {
  clearInterval(timer);
  jogoIniciado = false;

  const ranking = [...grupos].sort((a, b) => b.pontos - a.pontos);
  const maior = ranking[0].pontos;
  empatados = ranking.filter(g => g.pontos === maior);

  gameScreen.classList.add("hidden");
  finalScreen.classList.add("show");
  rankingList.innerHTML = "";

  ranking.forEach((grupo, i) => {
    const div = document.createElement("div");
    div.className = "rank-item" + (i === 0 ? " top" : "");
    div.innerHTML = `<span>${i + 1}º lugar • ${grupo.nome}</span><strong>${grupo.pontos} pontos</strong>`;
    rankingList.appendChild(div);
  });

  if (empatados.length === 1) {
    winnerText.textContent = `🎉 Vencedor: ${empatados[0].nome} com ${empatados[0].pontos} pontos!`;
    goldenSection.classList.add("hidden");
  } else {
    winnerText.textContent = `🤝 Empate entre ${empatados.map(g => g.nome).join(" e ")} com ${maior} pontos!`;
    goldenSection.classList.remove("hidden");
  }
}

function iniciarQuestaoDourada() {
  emQuestaoDourada = true;
  buzzDisponiveis = empatados.map(g => g.nome);
  buzzVencedor = null;

  if (perguntasDouradas.length === 0) {
    prepararPerguntas();
  }

  const perguntaBase = perguntasDouradas[Math.floor(Math.random() * perguntasDouradas.length)];
  perguntaDouradaAtual = embaralharAlternativas(perguntaBase);
  perguntaAtualRenderizada = perguntaDouradaAtual;

  finalScreen.classList.remove("show");
  gameScreen.classList.remove("hidden");
  hintBox.classList.add("hidden");

  grupoAtual = grupos.findIndex(g => g.nome === buzzDisponiveis[0]);
  montarPergunta(
    perguntaDouradaAtual,
    `⭐ Questão dourada`,
    "Equipes empatadas"
  );

  prepararBuzzDourado();
  textoApresentador("Questão dourada: equipes empatadas respondem juntas. Quem clicar primeiro ganha a vez.");
}

function prepararBuzzDourado() {
  respondeu = false;
  goldenBuzzBox.classList.remove("hidden");
  goldenBuzzButtons.innerHTML = "";
  goldenBuzzText.textContent = "As equipes empatadas podem responder juntas. Quem clicar primeiro ganha a vez.";

  bloquearAlternativas();

  buzzDisponiveis.forEach(nome => {
    const btn = document.createElement("button");
    btn.className = "buzz-btn";
    btn.textContent = `Responder: ${nome}`;
    btn.addEventListener("click", () => registrarBuzz(nome));
    goldenBuzzButtons.appendChild(btn);
  });

  if (buzzDisponiveis.length === 1) {
    goldenBuzzText.textContent = `${buzzDisponiveis[0]} é a única equipe restante nesta questão dourada.`;
  }
}

function registrarBuzz(nomeGrupo) {
  if (buzzVencedor) return;

  buzzVencedor = nomeGrupo;
  grupoAtual = grupos.findIndex(g => g.nome === nomeGrupo);
  currentTeam.textContent = `Grupo da vez: ${nomeGrupo}`;
  goldenBuzzText.textContent = `${nomeGrupo} apertou primeiro e ganhou a vez!`;
  goldenBuzzButtons.querySelectorAll("button").forEach(btn => btn.disabled = true);

  liberarAlternativas();
  atualizarPlacar();
  atualizarAjudas();
  mostrarSinal("correct", `⚡ ${nomeGrupo} foi mais rápido!`);
}

function reiniciarBatalhaDourada() {
  buzzDisponiveis = empatados.map(g => g.nome);
  buzzVencedor = null;

  const perguntaBase = perguntasDouradas[Math.floor(Math.random() * perguntasDouradas.length)];
  perguntaDouradaAtual = embaralharAlternativas(perguntaBase);
  perguntaAtualRenderizada = perguntaDouradaAtual;

  montarPergunta(
    perguntaDouradaAtual,
    `⭐ Questão dourada`,
    "Equipes empatadas"
  );
  prepararBuzzDourado();
}

function finalizarVencedorDourado(grupoVencedor) {
  clearInterval(timer);
  emQuestaoDourada = false;

  gameScreen.classList.add("hidden");
  finalScreen.classList.add("show");
  goldenSection.classList.add("hidden");
  goldenBuzzBox.classList.add("hidden");

  winnerText.textContent = `⭐ Vencedor na questão dourada: ${grupoVencedor.nome}!`;
  messageEl.textContent = "";

  const ranking = [...grupos].sort((a, b) => b.pontos - a.pontos);
  rankingList.innerHTML = "";

  ranking.forEach((grupo, index) => {
    const div = document.createElement("div");
    div.className = "rank-item" + (grupo.nome === grupoVencedor.nome ? " top" : "");
    div.innerHTML = `<span>${index + 1}º lugar • ${grupo.nome}</span><strong>${grupo.pontos} pontos</strong>`;
    rankingList.appendChild(div);
  });
}

function proximaPerguntaManual() {
  if (!jogoIniciado && !emQuestaoDourada) return;
  clearInterval(timer);

  if (emQuestaoDourada) {
    prepararBuzzDourado();
  } else {
    grupos[grupoAtual].respondidas++;
    avancarRodadaNormal();
  }
}

function reiniciarJogo() {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
  reiniciarEstado();
  questionText.textContent = "Clique em “Iniciar jogo” para começar.";
  currentTeam.textContent = "Grupo da vez: Grupo 1";
  questionCount.textContent = `Pergunta 1 de ${TOTAL_GRUPOS * QUESTOES_POR_GRUPO}`;
  answers.innerHTML = "";
  messageEl.textContent = "";
  goldenBuzzButtons.innerHTML = "";
  textoApresentador("Jogo reiniciado.");
}

function usarPular() {
  const grupo = grupos[grupoAtual];
  if (grupo.ajudas.pular <= 0 || respondeu || emQuestaoDourada) return;

  grupo.ajudas.pular--;
  grupo.respondidas++;
  messageEl.textContent = `⏭️ ${grupo.nome} usou o cartão de pular questão.`;
  mostrarSinal("wrong", "⏭️ QUESTÃO PULADA");
  atualizarAjudas();
  clearInterval(timer);

  setTimeout(() => {
    avancarRodadaNormal();
  }, 1200);
}

function usarUniversitarios() {
  const grupo = grupos[grupoAtual];
  if (grupo.ajudas.universitarios <= 0 || respondeu || emQuestaoDourada) return;

  grupo.ajudas.universitarios--;
  atualizarAjudas();


  const pergunta = perguntaAtualRenderizada;
  const letras = ["A", "B", "C", "D"];
  const correta = letras[pergunta.correta];

  let sugestao;
  const sorteio = Math.random();

  if (sorteio < 0.75) {
    sugestao = `Os universitários acreditam que a alternativa mais provável é ${correta}.`;
  } else {
    const opcoesErradas = letras.filter((_, i) => i !== pergunta.correta);
    const errada = opcoesErradas[Math.floor(Math.random() * opcoesErradas.length)];
    sugestao = `Os universitários estão divididos, mas muitos apostam na alternativa ${errada}.`;
  }

  hintTitle.textContent = "Ajuda dos universitários:";
  hintText.textContent = sugestao;
  hintBox.classList.remove("hidden");
  messageEl.textContent = `🎓 ${grupo.nome} usou a ajuda dos universitários.`;
}

function usarEliminar() {
  const grupo = grupos[grupoAtual];
  if (grupo.ajudas.eliminar <= 0 || respondeu || emQuestaoDourada) return;

  grupo.ajudas.eliminar--;
  atualizarAjudas();

  const pergunta = perguntaAtualRenderizada;
  const botoes = [...document.querySelectorAll(".answer")];
  const erradas = botoes.filter((btn, i) => i !== pergunta.correta && !btn.classList.contains("eliminated"));

  const embaralhadas = embaralhar(erradas);
  embaralhadas.slice(0, 2).forEach(btn => {
    btn.classList.add("eliminated");
    btn.disabled = true;
  });

  messageEl.textContent = `✂️ ${grupo.nome} eliminou duas alternativas.`;
}

function toggleVoice() {
  vozLigada = !vozLigada;
  btnToggleVoice.textContent = vozLigada ? "🎙️ Voz ligada" : "🔇 Voz desligada";
  if (!vozLigada && "speechSynthesis" in window) speechSynthesis.cancel();
}

function lerPerguntaAtual() {
  const pergunta = perguntaAtualRenderizada;
  if (pergunta) lerTexto(pergunta.pergunta);
}

function lerTexto(texto) {
  if (!vozLigada || !("speechSynthesis" in window)) return;

  speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  fala.rate = 1;
  fala.pitch = 1;
  speechSynthesis.speak(fala);
}

function tocarTom(freq, dur, start = 0, type = "sine", gainValue = 0.05) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = gainValue;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + dur);
  } catch (erro) {}
}

function tocarAcerto() {
  tocarTom(523, 0.12, 0, "triangle", 0.06);
  tocarTom(659, 0.12, 0.11, "triangle", 0.06);
  tocarTom(784, 0.2, 0.22, "triangle", 0.06);
  tocarTom(1046, 0.25, 0.42, "triangle", 0.06);
}

function tocarErro() {
  tocarTom(900, 0.08, 0, "square", 0.08);
  tocarTom(900, 0.08, 0.15, "square", 0.08);
}

atualizarPlacar();
atualizarAjudas();