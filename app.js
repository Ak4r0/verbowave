// ==========================================
// 1. BASE DE DATOS DE VERBOS (Ahora usamos "let" para poder mezclarlo globalmente)
// ==========================================
let verbGroups = [
  [
    { infinitive: "be", past: "was", participle: "been", meaning: "ser / estar" },
    { infinitive: "become", past: "became", participle: "become", meaning: "convertirse / llegar a ser" },
    { infinitive: "begin", past: "began", participle: "begun", meaning: "comenzar" },
    { infinitive: "break", past: "broke", participle: "broken", meaning: "romper" },
    { infinitive: "bring", past: "brought", participle: "brought", meaning: "traer" }
  ],
  [
    { infinitive: "win", past: "won", participle: "won", meaning: "ganar" },
    { infinitive: "write", past: "wrote", participle: "written", meaning: "escribir" },
    { infinitive: "bite", past: "bit", participle: "bitten", meaning: "morder" },
    { infinitive: "blow", past: "blew", participle: "blown", meaning: "soplar" },
    { infinitive: "catch", past: "caught", participle: "caught", meaning: "atrapar" }
  ],
  [
    { infinitive: "cost", past: "cost", participle: "cost", meaning: "costar" },
    { infinitive: "cut", past: "cut", participle: "cut", meaning: "cortar" },
    { infinitive: "do", past: "did", participle: "done", meaning: "hacer" },
    { infinitive: "draw", past: "drew", participle: "drawn", meaning: "dibujar" },
    { infinitive: "dream", past: "dreamt", participle: "dreamt", meaning: "soñar" }
  ],
  [
    { infinitive: "drink", past: "drank", participle: "drunk", meaning: "beber" },
    { infinitive: "drive", past: "drove", participle: "driven", meaning: "conducir" },
    { infinitive: "eat", past: "ate", participle: "eaten", meaning: "comer" },
    { infinitive: "fall", past: "fell", participle: "fallen", meaning: "caer" },
    { infinitive: "feel", past: "felt", participle: "felt", meaning: "sentir" }
  ],
  [
    { infinitive: "fight", past: "fought", participle: "fought", meaning: "pelear" },
    { infinitive: "find", past: "found", participle: "found", meaning: "encontrar" },
    { infinitive: "fly", past: "flew", participle: "flown", meaning: "volar" },
    { infinitive: "forget", past: "forgot", participle: "forgotten", meaning: "olvidar" },
    { infinitive: "get", past: "got", participle: "gotten", meaning: "obtener" }
  ],
  [
    { infinitive: "give", past: "gave", participle: "given", meaning: "dar" },
    { infinitive: "go", past: "went", participle: "gone", meaning: "ir" },
    { infinitive: "grow", past: "grew", participle: "grown", meaning: "crecer" },
    { infinitive: "have", past: "had", participle: "had", meaning: "tener" },
    { infinitive: "hear", past: "heard", participle: "heard", meaning: "escuchar" }
  ],
  [
    { infinitive: "hide", past: "hid", participle: "hidden", meaning: "esconder" },
    { infinitive: "hit", past: "hit", participle: "hit", meaning: "golpear" },
    { infinitive: "hold", past: "held", participle: "held", meaning: "sostener" },
    { infinitive: "hurt", past: "hurt", participle: "hurt", meaning: "herir / doler" },
    { infinitive: "keep", past: "kept", participle: "kept", meaning: "mantener / guardar" }
  ],
  [
    { infinitive: "know", past: "knew", participle: "known", meaning: "saber / conocer" },
    { infinitive: "learn", past: "learnt", participle: "learnt", meaning: "aprender" },
    { infinitive: "leave", past: "left", participle: "left", meaning: "dejar / irse" },
    { infinitive: "lose", past: "lost", participle: "lost", meaning: "perder" },
    { infinitive: "make", past: "made", participle: "made", meaning: "hacer / fabricar" }
  ],
  [
    { infinitive: "meet", past: "met", participle: "met", meaning: "conocer / reunirse" },
    { infinitive: "pay", past: "paid", participle: "paid", meaning: "pagar" },
    { infinitive: "put", past: "put", participle: "put", meaning: "poner" },
    { infinitive: "read", past: "read", participle: "read", meaning: "leer" },
    { infinitive: "ride", past: "rode", participle: "ridden", meaning: "montar / cabalgar" }
  ],
  [
    { infinitive: "ring", past: "rang", participle: "rung", meaning: "llamar / sonar" },
    { infinitive: "run", past: "ran", participle: "run", meaning: "correr" },
    { infinitive: "say", past: "said", participle: "said", meaning: "decir" },
    { infinitive: "see", past: "saw", participle: "seen", meaning: "ver" },
    { infinitive: "sell", past: "sold", participle: "sold", meaning: "vender" }
  ],
  [
    { infinitive: "send", past: "sent", participle: "sent", meaning: "enviar" },
    { infinitive: "set", past: "set", participle: "set", meaning: "establecer / colocar" },
    { infinitive: "show", past: "showed", participle: "shown", meaning: "mostrar" },
    { infinitive: "shut", past: "shut", participle: "shut", meaning: "cerrar" },
    { infinitive: "sing", past: "sang", participle: "sung", meaning: "cantar" }
  ],
  [
    { infinitive: "sit", past: "sat", participle: "sat", meaning: "sentarse" },
    { infinitive: "sleep", past: "slept", participle: "slept", meaning: "dormir" },
    { infinitive: "speak", past: "spoke", participle: "spoken", meaning: "hablar" },
    { infinitive: "spend", past: "spent", participle: "spent", meaning: "gastar / pasar tiempo" },
    { infinitive: "stand", past: "stood", participle: "stood", meaning: "ponerse de pie" }
  ],
  [
    { infinitive: "steal", past: "stole", participle: "stolen", meaning: "robar" },
    { infinitive: "swim", past: "swam", participle: "swum", meaning: "nadar" },
    { infinitive: "take", past: "took", participle: "taken", meaning: "tomar / llevar" },
    { infinitive: "teach", past: "taught", participle: "taught", meaning: "enseñar" },
    { infinitive: "tell", past: "told", participle: "told", meaning: "contar / decir" }
  ],
  [
    { infinitive: "think", past: "thought", participle: "thought", meaning: "pensar" },
    { infinitive: "throw", past: "threw", participle: "thrown", meaning: "lanzar / tirar" },
    { infinitive: "understand", past: "understood", participle: "understood", meaning: "entender" },
    { infinitive: "wake", past: "woke", participle: "woken", meaning: "despertar" },
    { infinitive: "wear", past: "wore", participle: "worn", meaning: "vestir / usar" }
  ],
  [
    { infinitive: "win", past: "won", participle: "won", meaning: "ganar" },
    { infinitive: "write", past: "wrote", participle: "written", meaning: "escribir" },
    { infinitive: "bite", past: "bit", participle: "bitten", meaning: "morder" },
    { infinitive: "blow", past: "blew", participle: "blown", meaning: "soplar" },
    { infinitive: "sweep", past: "swept", participle: "swept", meaning: "barrer" }
  ],
  [
    { infinitive: "forgive", past: "forgave", participle: "forgiven", meaning: "perdonar" },
    { infinitive: "freeze", past: "froze", participle: "frozen", meaning: "congelar" },
    { infinitive: "shake", past: "shook", participle: "shaken", meaning: "agitar / sacudir" },
    { infinitive: "shine", past: "shone", participle: "shone", meaning: "brillar" },
    { infinitive: "tear", past: "tore", participle: "torn", meaning: "rasgar / romper" }
  ],
  [
    { infinitive: "beat", past: "beat", participle: "beaten", meaning: "golpear / latir" },
    { infinitive: "bend", past: "bent", participle: "bent", meaning: "doblar" },
    { infinitive: "bet", past: "bet", participle: "bet", meaning: "apostar" },
    { infinitive: "bleed", past: "bled", participle: "bled", meaning: "sangrar" },
    { infinitive: "burn", past: "burnt", participle: "burnt", meaning: "quemar" }
  ],
  [
    { infinitive: "deal", past: "dealt", participle: "dealt", meaning: "tratar / repartir" },
    { infinitive: "dig", past: "dug", participle: "dug", meaning: "cavar" },
    { infinitive: "feed", past: "fed", participle: "fed", meaning: "alimentar" },
    { infinitive: "forbid", past: "forbade", participle: "forbidden", meaning: "prohibir" },
    { infinitive: "hang", past: "hung", participle: "hung", meaning: "colgar" }
  ],
  [
    { infinitive: "lay", past: "laid", participle: "laid", meaning: "poner / extender" },
    { infinitive: "lead", past: "led", participle: "led", meaning: "liderar / guiar" },
    { infinitive: "lend", past: "lent", participle: "lent", meaning: "prestar" },
    { infinitive: "let", past: "let", participle: "let", meaning: "permitir / dejar" },
    { infinitive: "light", past: "lit", participle: "lit", meaning: "encender / iluminar" }
  ],
  [
    { infinitive: "mean", past: "meant", participle: "meant", meaning: "significar / querer decir" },
    { infinitive: "quit", past: "quit", participle: "quit", meaning: "renunciar / abandonar" },
    { infinitive: "rise", past: "rose", participle: "risen", meaning: "elevarse / levantarse" },
    { infinitive: "shoot", past: "shot", participle: "shot", meaning: "disparar" },
    { infinitive: "shrink", past: "shrank", participle: "shrunk", meaning: "encogerse" }
  ]
];

// ==========================================
// 2. VARIABLES Y ELEMENTOS DEL DOM
// ==========================================
let currentGroupIndex = 0;
const MAX_ROUNDS = 5;
let isPlaying = false, isPaused = false;
let testVerbIndex = 0;
let inputMode = 'voice';

let intentosActuales = 0;
let isTransitioning = false;

let verbPauseInterval = 450;
let speechRate = 0.85;
let currentSessionID = 0;
let modoContinuoActivado = false;

const blockBadge = document.getElementById("blockBadge");
const statusMessage = document.getElementById("statusMessage");
const waveBox = document.getElementById("waveBox");
const roundCounter = document.getElementById("roundCounter");
const displayInfinitive = document.getElementById("displayInfinitive");
const displayPast = document.getElementById("displayPast");
const displayParticiple = document.getElementById("displayParticiple");
const displayTranslation = document.getElementById("displayTranslation");

const visualizerCard = document.getElementById("visualizerCard");
const testPanel = document.getElementById("testPanel");
const testWord = document.getElementById("testWord");
const testMeaning = document.getElementById("testMeaning");

const pauseSlider = document.getElementById("pauseSlider");
const pauseValueDisplay = document.getElementById("pauseValueDisplay");

const blockVerbsList = document.getElementById("blockVerbsList");
const mistakesList = document.getElementById("mistakesList");
const clearMistakesBtn = document.getElementById("clearMistakesBtn");

const startAudioBtn = document.getElementById("startAudioBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const skipToTestBtn = document.getElementById("skipToTestBtn");
const resetBlockBtn = document.getElementById("resetBlockBtn");
const restartRoundBtn = document.getElementById("restartRoundBtn");
const nextBlockBtn = document.getElementById("nextBlockBtn");

const mistakesModal = document.getElementById("mistakesModal");
const openMistakesBtn = document.getElementById("openMistakesBtn");
const closeMistakesBtn = document.getElementById("closeMistakesBtn");

const modeVoiceBtn = document.getElementById("modeVoiceBtn");
const modeTextBtn = document.getElementById("modeTextBtn");
const voiceInputSection = document.getElementById("voiceInputSection");
const textInputSection = document.getElementById("textInputSection");
const micBtn = document.getElementById("micBtn");
const micStatus = document.getElementById("micStatus");
const voiceFeedback = document.getElementById("voiceFeedback");
const pastInput = document.getElementById("pastInput");
const participleInput = document.getElementById("participleInput");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");
const textFeedback = document.getElementById("textFeedback");
const showAnswerBtn = document.getElementById("showAnswerBtn");

const btnMezclar = document.getElementById('btn-mezclar');
const toggleModoContinuo = document.getElementById('toggle-modo-continuo');
const clearCacheBtn = document.getElementById("clearCacheBtn");
const practiceMistakesBtn = document.getElementById("practiceMistakesBtn");

// ==========================================
// LIMPIEZA DE CACHÉ Y PRÁCTICA DE FALLOS
// ==========================================
if (clearCacheBtn) {
  clearCacheBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de querer borrar la caché y reiniciar la app? Esto solucionará problemas pero cerrará tu sesión actual.")) {
      if ('serviceWorker' in navigator) {
        caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))));
        navigator.serviceWorker.getRegistrations().then(regs => {
          for (let reg of regs) reg.unregister();
        });
      }
      localStorage.clear();
      window.location.reload(true);
    }
  });
}

if (practiceMistakesBtn) {
  practiceMistakesBtn.addEventListener("click", () => {
    const mistakes = getMistakes();
    const keys = Object.keys(mistakes);

    if (keys.length === 0) {
      alert("No tienes fallos registrados para practicar.");
      return;
    }

    let todosLosVerbos = verbGroups.flat();
    let verbosAEstudiar = todosLosVerbos.filter(v => keys.includes(v.infinitive));

    let nuevosGrupos = [];
    for (let i = 0; i < verbosAEstudiar.length; i += 5) {
      nuevosGrupos.push(verbosAEstudiar.slice(i, i + 5));
    }

    verbGroups = nuevosGrupos;
    currentGroupIndex = 0;
    if (mistakesModal) mistakesModal.classList.remove("show");

    renderGroupInfo();
    alert("¡Modo de práctica activado! Se han creado bloques exclusivos con los verbos que más fallas.");
  });
}

if (toggleModoContinuo) {
  toggleModoContinuo.addEventListener('change', (e) => {
    modoContinuoActivado = e.target.checked;
  });
}

// ==========================================
// ACCIÓN: MEZCLAR VERBOS MANUAL (Mantenido por si existe en HTML)
// ==========================================
if (btnMezclar) {
  btnMezclar.addEventListener('click', () => {
    currentSessionID++;
    isPlaying = false;
    isPaused = false;
    window.speechSynthesis.cancel();
    finishAudioPhase();

    let todosLosVerbos = [];
    verbGroups.forEach(grupo => {
      todosLosVerbos.push(...grupo);
    });

    shuffleArray(todosLosVerbos);

    let nuevosGrupos = [];
    for (let i = 0; i < todosLosVerbos.length; i += 5) {
      nuevosGrupos.push(todosLosVerbos.slice(i, i + 5));
    }

    verbGroups = nuevosGrupos;
    currentGroupIndex = 0;
    renderGroupInfo();
    statusMessage.textContent = "Verbos mezclados manualmente.";
  });
}

// ==========================================
// 3. CONTROL DESLIZADOR DE VELOCIDAD
// ==========================================
pauseSlider.addEventListener("input", (e) => {
  const val = parseInt(e.target.value, 10);
  switch (val) {
    case 1: pauseValueDisplay.textContent = "⚡ Muy Rápido"; verbPauseInterval = 200; speechRate = 1.0; break;
    case 2: pauseValueDisplay.textContent = "🚶 Normal"; verbPauseInterval = 450; speechRate = 0.85; break;
    case 3: pauseValueDisplay.textContent = "🐢 Lento"; verbPauseInterval = 800; speechRate = 0.7; break;
    case 4: pauseValueDisplay.textContent = "💤 Muy Lento"; verbPauseInterval = 1200; speechRate = 0.6; break;
  }
});

// ==========================================
// 4. SANITIZACIÓN Y SÍNTESIS DE VOZ
// ==========================================
let voicesList = [];
window.speechSynthesis.onvoiceschanged = () => { voicesList = window.speechSynthesis.getVoices(); };

function getPreferredVoice(lang) {
  if (!voicesList.length) voicesList = window.speechSynthesis.getVoices();
  const femaleNames = ['samantha', 'zira', 'paulina', 'monica', 'victoria', 'sabina', 'helena'];
  let available = voicesList.filter(v => v.lang.startsWith(lang));
  if (lang === "es") available = available.filter(v => !v.lang.includes("es-ES"));
  const female = available.find(v => femaleNames.some(name => v.name.toLowerCase().includes(name)));
  return female || available[0] || null;
}

function cleanTextForSpeech(text, lang) {
  if (lang === "es") { return text.replace(/\s*\/\s*/g, " o "); }
  else { return text.replace(/\s*\/\s*/g, " or "); }
}

function speakText(text, langType = "en", sessionID) {
  return new Promise((resolve) => {
    if (!isPlaying || sessionID !== currentSessionID) return resolve();
    const cleanText = cleanTextForSpeech(text, langType);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voice = getPreferredVoice(langType);
    if (voice) { utterance.voice = voice; utterance.lang = voice.lang; }
    else { utterance.lang = langType === "es" ? "es-MX" : "en-US"; }
    utterance.rate = speechRate; utterance.pitch = 1.2;
    utterance.onend = () => resolve(); utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

function safeDelay(ms, sessionID) {
  return new Promise(resolve => {
    let elapsed = 0;
    const interval = setInterval(() => {
      if (!isPlaying || sessionID !== currentSessionID) { clearInterval(interval); return resolve(); }
      if (!isPaused) { elapsed += 50; if (elapsed >= ms) { clearInterval(interval); resolve(); } }
    }, 50);
  });
}

async function speakVerbSequence(verb, sessionID) {
  if (sessionID !== currentSessionID) return;
  await speakText(verb.infinitive, "en", sessionID);
  if (sessionID !== currentSessionID) return;
  await speakText(verb.past, "en", sessionID);
  if (sessionID !== currentSessionID) return;
  await speakText(verb.participle, "en", sessionID);
  if (sessionID !== currentSessionID) return;
  await speakText(verb.meaning, "es", sessionID);
}

// ==========================================
// 5. CICLO DE REPRODUCCIÓN GLOBAL
// ==========================================
function renderGroupInfo() {
  const group = verbGroups[currentGroupIndex];
  blockBadge.textContent = `Bloque ${currentGroupIndex + 1} de ${verbGroups.length}`;
  blockVerbsList.innerHTML = "";
  group.forEach((verb, idx) => {
    const li = document.createElement("li");
    li.id = `verb-item-${idx}`;
    li.innerHTML = `<span><strong>${verb.infinitive}</strong> - ${verb.past} - ${verb.participle}</span> <span>${verb.meaning}</span>`;
    blockVerbsList.appendChild(li);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]; array[i] = array[j]; array[j] = temp;
  }
  return array;
}

async function playRhythmicCycle() {
  renderGroupInfo();
  currentSessionID++;
  const mySessionID = currentSessionID;
  isPlaying = true; isPaused = false;

  startAudioBtn.classList.add("hidden"); restartRoundBtn.classList.add("hidden"); nextBlockBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden"); skipToTestBtn.classList.remove("hidden"); resetBlockBtn.classList.remove("hidden");
  waveBox.classList.add("wave-active");
  statusMessage.textContent = "Escucha y asimila la pronunciación";
  const group = verbGroups[currentGroupIndex];

  for (let round = 1; round <= MAX_ROUNDS; round++) {
    roundCounter.textContent = `Repetición ${round} de ${MAX_ROUNDS}`;
    for (let i = 0; i < group.length; i++) {
      if (!isPlaying || mySessionID !== currentSessionID) return;
      while (isPaused) { await new Promise(r => setTimeout(r, 100)); }
      if (mySessionID !== currentSessionID) return;

      const verb = group[i];
      displayInfinitive.textContent = verb.infinitive; displayPast.textContent = verb.past; displayParticiple.textContent = verb.participle; displayTranslation.textContent = `Significado: ${verb.meaning}`;

      document.querySelectorAll("#blockVerbsList li").forEach(el => el.classList.remove("highlighted"));
      document.getElementById(`verb-item-${i}`)?.classList.add("highlighted");

      await speakVerbSequence(verb, mySessionID);

      if (!isPlaying || mySessionID !== currentSessionID) return;
      await safeDelay(verbPauseInterval, mySessionID);
    }
  }

  if (isPlaying && mySessionID === currentSessionID) {
    finishAudioPhase();

    if (modoContinuoActivado) {
      statusMessage.textContent = "Pasando al siguiente bloque (Modo Continuo)...";
      currentGroupIndex++;

      if (currentGroupIndex < verbGroups.length) {
        setTimeout(() => { playRhythmicCycle(); }, 1500);
      } else {
        statusMessage.textContent = "¡Has completado todos los bloques en Modo Continuo!";
        currentGroupIndex = 0;
        restartRoundBtn.classList.remove("hidden");
      }
    } else {
      iniciarTestModo();
    }
  }
}

function finishAudioPhase() {
  waveBox.classList.remove("wave-active"); pauseBtn.classList.add("hidden"); resumeBtn.classList.add("hidden"); skipToTestBtn.classList.add("hidden"); resetBlockBtn.classList.add("hidden"); isPlaying = false;
}

skipToTestBtn.addEventListener("click", () => { currentSessionID++; isPlaying = false; window.speechSynthesis.cancel(); finishAudioPhase(); iniciarTestModo(); });
resetBlockBtn.addEventListener("click", () => { currentSessionID++; isPlaying = false; window.speechSynthesis.cancel(); finishAudioPhase(); setTimeout(() => { playRhythmicCycle(); }, 300); });
pauseBtn.addEventListener("click", () => { window.speechSynthesis.pause(); isPaused = true; waveBox.classList.remove("wave-active"); pauseBtn.classList.add("hidden"); resumeBtn.classList.remove("hidden"); statusMessage.textContent = "Audio en pausa..."; });
resumeBtn.addEventListener("click", () => { window.speechSynthesis.resume(); isPaused = false; waveBox.classList.add("wave-active"); resumeBtn.classList.add("hidden"); pauseBtn.classList.remove("hidden"); statusMessage.textContent = "Escucha y asimila la pronunciación"; });

// ==========================================
// 6. PERSISTENCIA Y LOCALSTORAGE
// ==========================================
const STORAGE_KEY = "verbowave_mistakes";
function getMistakes() { const data = localStorage.getItem(STORAGE_KEY); return data ? JSON.parse(data) : {}; }
function recordMistake(infinitive) {
  const mistakes = getMistakes(); mistakes[infinitive] = (mistakes[infinitive] || 0) + 1; localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes)); renderMistakes();
}
function renderMistakes() {
  const mistakes = getMistakes(); mistakesList.innerHTML = ""; const keys = Object.keys(mistakes);
  if (keys.length === 0) { mistakesList.innerHTML = '<li class="empty-notice">Aún no tienes errores registrados. ¡Buen trabajo!</li>'; return; }
  keys.sort((a, b) => mistakes[b] - mistakes[a]);
  keys.forEach((verb) => {
    const li = document.createElement("li"); li.innerHTML = `<span><strong>${verb}</strong></span> <span class="fail-badge">${mistakes[verb]} fallos</span>`; mistakesList.appendChild(li);
  });
}
clearMistakesBtn.addEventListener("click", () => { localStorage.removeItem(STORAGE_KEY); renderMistakes(); });

// =========================================================
// 7. FLEXIBILIDAD DE PRONUNCIACIÓN (Levenshtein)
// =========================================================
function getLevenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
  for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
      }
    }
  }
  return matrix[b.length][a.length];
}

function isCloseEnough(spokenPhrase, targetWord) {
  if (spokenPhrase.includes(targetWord)) return true;
  const spokenWords = spokenPhrase.split(" ");
  const tolerance = targetWord.length <= 4 ? 1 : 2;
  for (let word of spokenWords) {
    if (getLevenshteinDistance(word, targetWord) <= tolerance) { return true; }
  }
  return false;
}

// ==========================================
// 8. EVALUACIÓN (Fix WebKit Audio Focus iOS)
// ==========================================
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;
let recognition = null;
let isListening = false;

micBtn.addEventListener("click", () => {
  if (isTransitioning || !recognition) return;

  if (isListening) {
    recognition.stop();
    return;
  }

  try {
    recognition.start();
  } catch (e) {
    if (e.name === 'InvalidStateError') {
      recognition.stop();
      micStatus.textContent = "Ajustando micrófono... Toca de nuevo.";
    }
  }
});

function iniciarTestModo() {
  visualizerCard.classList.add("hidden");
  testPanel.classList.remove("hidden");
  statusMessage.textContent = "Evaluación de retención";
  testVerbIndex = 0;

  window.speechSynthesis.cancel();

  if (SpeechRecognition) {
    if (recognition) {
      try { recognition.abort(); } catch (e) { }
    }

    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      isListening = true;
      micBtn.classList.add("listening");
      micStatus.textContent = `Escuchando... (Intento ${intentosActuales + 1} de 3)`;
      voiceFeedback.textContent = "";
      voiceFeedback.className = "feedback-preview";
    };

    recognition.onresult = (event) => {
      if (isTransitioning) return;
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
        else interimTranscript += event.results[i][0].transcript;
      }

      if (interimTranscript !== '') {
        voiceFeedback.innerHTML = `Detectando: <span style="color: var(--cyan-accent); font-weight: bold;">${interimTranscript.toLowerCase()}</span>`;
      }

      if (finalTranscript !== '') {
        const transcript = finalTranscript.toLowerCase();
        const verb = verbGroups[currentGroupIndex][testVerbIndex];

        const isPastCorrect = isCloseEnough(transcript, verb.past.toLowerCase());
        const isParticipleCorrect = isCloseEnough(transcript, verb.participle.toLowerCase());

        if (isPastCorrect || isParticipleCorrect) {
          voiceFeedback.innerHTML = `¡Bien hecho! (${verb.past} - ${verb.participle})`;
          voiceFeedback.className = "feedback-preview success";
          isListening = false;
          recognition.stop();
          registrarAcierto();
        } else {
          intentosActuales++;
          recordMistake(verb.infinitive);

          if (intentosActuales >= 3) {
            voiceFeedback.innerHTML = `¡Límite alcanzado! Respuesta: <strong>${verb.past} - ${verb.participle}</strong>`;
            voiceFeedback.className = "feedback-preview error";
            isListening = false;
            recognition.stop();
            registrarAcierto(2500);
          } else {
            voiceFeedback.innerHTML = `No coincide. Intento ${intentosActuales} de 3.`;
            voiceFeedback.className = "feedback-preview error";
            isListening = false;
            recognition.stop();
            micBtn.classList.remove("listening");
          }
        }
      }
    };

    recognition.onend = () => {
      isListening = false;
      micBtn.classList.remove("listening");
    };

    recognition.onerror = (event) => {
      isListening = false;
      micBtn.classList.remove("listening");
      if (event.error === 'no-speech') {
        micStatus.textContent = "No detecté tu voz. Intenta de nuevo.";
      } else {
        micStatus.textContent = `Error de audio. Toca de nuevo.`;
      }
    };
  } else {
    micBtn.disabled = true;
    micStatus.textContent = "Micrófono no soportado.";
  }

  cargarPreguntaTest();
}

function cargarPreguntaTest() {
  isTransitioning = false;
  intentosActuales = 0;
  isListening = false;

  const verb = verbGroups[currentGroupIndex][testVerbIndex];
  testWord.textContent = verb.infinitive.toUpperCase();
  testMeaning.textContent = `(${verb.meaning})`;

  voiceFeedback.innerHTML = "Esperando tu respuesta... <br><span style='font-size: 0.8em; color: #94a3b8;'>(Tienes 3 intentos)</span>";
  voiceFeedback.className = "feedback-preview";

  textFeedback.innerHTML = "Esperando tu respuesta... <br><span style='font-size: 0.8em; color: #94a3b8;'>(Tienes 3 intentos)</span>";
  textFeedback.className = "feedback-preview";

  pastInput.value = "";
  participleInput.value = "";
  micStatus.textContent = "Toca el micrófono y pronuncia el pasado y participio";
  micBtn.classList.remove("listening");
}

function registrarAcierto(tiempoDeEspera = 1200) {
  isTransitioning = true;
  testVerbIndex++;
  isListening = false;

  const group = verbGroups[currentGroupIndex];

  if (testVerbIndex < group.length) {
    setTimeout(cargarPreguntaTest, tiempoDeEspera);
  } else {
    setTimeout(() => {
      testPanel.classList.add("hidden");
      visualizerCard.classList.remove("hidden");
      statusMessage.textContent = "¡Felicitaciones! Has dominado este grupo.";
      restartRoundBtn.classList.remove("hidden");
      if (currentGroupIndex < verbGroups.length - 1) {
        nextBlockBtn.classList.remove("hidden");
      }
    }, tiempoDeEspera);
  }
}

// Validación Teclado
checkAnswerBtn.addEventListener("click", () => {
  if (isTransitioning) return;

  const currentVerb = verbGroups[currentGroupIndex][testVerbIndex];
  if (pastInput.value.trim().toLowerCase() === currentVerb.past.toLowerCase() && participleInput.value.trim().toLowerCase() === currentVerb.participle.toLowerCase()) {
    textFeedback.textContent = "¡Correcto! Excelente memoria.";
    textFeedback.className = "feedback-preview success";
    registrarAcierto();
  } else {
    intentosActuales++;
    recordMistake(currentVerb.infinitive);

    if (intentosActuales >= 3) {
      textFeedback.innerHTML = `¡Límite alcanzado! La respuesta era: <strong>${currentVerb.past} - ${currentVerb.participle}</strong>`;
      textFeedback.className = "feedback-preview error";
      registrarAcierto(2500);
    } else {
      textFeedback.innerHTML = `Incorrecto. Intento ${intentosActuales} de 3.`;
      textFeedback.className = "feedback-preview error";
    }
  }
});

showAnswerBtn.addEventListener("click", () => {
  if (isTransitioning) return;
  const verb = verbGroups[currentGroupIndex][testVerbIndex];
  const resp = `Pasado: ${verb.past} | Participio: ${verb.participle}`;
  inputMode === 'voice' ? voiceFeedback.textContent = resp : textFeedback.textContent = resp;
  recordMistake(verb.infinitive);
  registrarAcierto(2500);
});

// ==========================================
// 9. EVENTOS GENERALES Y MODAL
// ==========================================
modeVoiceBtn.addEventListener("click", () => { inputMode = 'voice'; modeVoiceBtn.classList.add("active"); modeTextBtn.classList.remove("active"); voiceInputSection.classList.remove("hidden"); textInputSection.classList.add("hidden"); });
modeTextBtn.addEventListener("click", () => { inputMode = 'text'; modeTextBtn.classList.add("active"); modeVoiceBtn.classList.remove("active"); textInputSection.classList.remove("hidden"); voiceInputSection.classList.add("hidden"); pastInput.focus(); });

// ==========================================================
// EVENTO PRINCIPAL: EL "NUEVO" BOTÓN INICIAR RITMO (Mezclar + Iniciar)
// ==========================================================
startAudioBtn.addEventListener("click", () => {
  // 1. Hack de audio silencioso
  const silentAudioEl = document.getElementById("silentAudio");
  if (silentAudioEl) {
    silentAudioEl.play().catch((e) => console.log("Audio en segundo plano bloqueado", e));
  }

  // 2. Limpieza de procesos (Igual que el botón mezclar)
  currentSessionID++;
  isPlaying = false;
  isPaused = false;
  window.speechSynthesis.cancel();
  finishAudioPhase();

  // 3. Mezclar todos los verbos globalmente (Igual que el botón mezclar)
  let todosLosVerbos = [];
  verbGroups.forEach(grupo => {
    todosLosVerbos.push(...grupo);
  });

  shuffleArray(todosLosVerbos);

  let nuevosGrupos = [];
  for (let i = 0; i < todosLosVerbos.length; i += 5) {
    nuevosGrupos.push(todosLosVerbos.slice(i, i + 5));
  }

  verbGroups = nuevosGrupos;
  currentGroupIndex = 0;

  // 4. Iniciar el programa automáticamente
  playRhythmicCycle();
});

restartRoundBtn.addEventListener("click", () => { restartRoundBtn.classList.add("hidden"); nextBlockBtn.classList.add("hidden"); playRhythmicCycle(); });
nextBlockBtn.addEventListener("click", () => { currentGroupIndex++; restartRoundBtn.classList.add("hidden"); nextBlockBtn.classList.add("hidden"); playRhythmicCycle(); });

openMistakesBtn.addEventListener("click", () => { renderMistakes(); mistakesModal.classList.add("show"); });
closeMistakesBtn.addEventListener("click", () => { mistakesModal.classList.remove("show"); });
mistakesModal.addEventListener("click", (e) => { if (e.target === mistakesModal) { mistakesModal.classList.remove("show"); } });

// Inicialización de la App
renderGroupInfo();
renderMistakes();

// ==========================================
// 10. REGISTRO DEL SERVICE WORKER (PWA)
// ==========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado con éxito', reg))
      .catch(err => console.error('Error al registrar el Service Worker', err));
  });
}