(function () {
  const STORAGE_KEY = "dol_progress";
  const SETTINGS_KEY = "dol_settings";

  let progress = {};
  let settings = { dark: false };

  // ── Utilities ──

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getProgress(id) {
    return progress[id] || { attempts: 0, correct: 0, starred: false };
  }

  function updateProgress(id, wasCorrect) {
    const p = getProgress(id);
    p.attempts++;
    if (wasCorrect) p.correct++;
    p.lastAttempt = new Date().toISOString().slice(0, 10);
    progress[id] = p;
    saveProgress();
  }

  function toggleStar(id) {
    const p = getProgress(id);
    p.starred = !p.starred;
    progress[id] = p;
    saveProgress();
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch {}
  }

  function loadProgress() {
    try {
      const d = localStorage.getItem(STORAGE_KEY);
      if (d) progress = JSON.parse(d);
    } catch {}
  }

  function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch {}
  }

  function loadSettings() {
    try {
      const d = localStorage.getItem(SETTINGS_KEY);
      if (d) settings = JSON.parse(d);
    } catch {}
  }

  function getFiltered(chapter, topic, starredOnly, incorrectOnly) {
    let qs = QUESTIONS;
    if (chapter) qs = qs.filter(q => q.chapter === parseInt(chapter));
    if (topic) qs = qs.filter(q => q.topic === topic);
    if (starredOnly) qs = qs.filter(q => getProgress(q.id).starred);
    if (incorrectOnly) qs = qs.filter(q => {
      const p = getProgress(q.id);
      return p.attempts > 0 && p.correct < p.attempts;
    });
    return qs;
  }

  function getTopics(chapter) {
    let qs = QUESTIONS;
    if (chapter) qs = qs.filter(q => q.chapter === parseInt(chapter));
    return [...new Set(qs.map(q => q.topic))].sort();
  }

  function populateChapterSelect(sel) {
    sel.innerHTML = '<option value="">All Chapters</option>';
    CHAPTERS.forEach(c => {
      sel.innerHTML += `<option value="${c.id}">Ch ${c.id}: ${c.title}</option>`;
    });
  }

  function populateTopicSelect(sel, chapter) {
    sel.innerHTML = '<option value="">All Topics</option>';
    getTopics(chapter).forEach(t => {
      sel.innerHTML += `<option value="${t}">${t}</option>`;
    });
  }

  // ── Navigation ──

  function navigate(view) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.getElementById("view-" + view).classList.add("active");
    document.querySelector(`[data-view="${view}"]`).classList.add("active");

    if (view === "dashboard") renderDashboard();
    if (view === "flashcards") initFlashcards();
  }

  // ── Dashboard ──

  function renderDashboard() {
    let attempted = 0, correct = 0, starred = 0;
    QUESTIONS.forEach(q => {
      const p = getProgress(q.id);
      if (p.attempts > 0) attempted++;
      correct += p.correct;
      if (p.starred) starred++;
    });

    const totalAttempts = Object.values(progress).reduce((s, p) => s + p.attempts, 0);
    const pct = totalAttempts > 0 ? Math.round((correct / totalAttempts) * 100) : 0;

    document.getElementById("overallPercent").textContent = pct + "%";
    document.getElementById("statAttempted").textContent = attempted;
    document.getElementById("statCorrect").textContent = correct;
    document.getElementById("statStarred").textContent = starred;
    document.getElementById("statTotal").textContent = QUESTIONS.length;

    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (pct / 100) * circumference;
    document.querySelector(".progress-ring-fill").style.strokeDashoffset = offset;

    const container = document.getElementById("chapterProgress");
    container.innerHTML = "";
    CHAPTERS.forEach(ch => {
      const qs = QUESTIONS.filter(q => q.chapter === ch.id);
      let chAttempted = 0, chCorrect = 0, chTotal = 0;
      qs.forEach(q => {
        const p = getProgress(q.id);
        chTotal += p.attempts;
        chCorrect += p.correct;
        if (p.attempts > 0) chAttempted++;
      });
      const chPct = chTotal > 0 ? Math.round((chCorrect / chTotal) * 100) : 0;
      container.innerHTML += `
        <div class="chapter-bar">
          <div class="chapter-bar-header">
            <span class="chapter-bar-title">Ch ${ch.id}: ${ch.title}</span>
            <span class="chapter-bar-stat">${chAttempted}/${qs.length} attempted &middot; ${chPct}% correct</span>
          </div>
          <div class="chapter-bar-track">
            <div class="chapter-bar-fill" style="width:${chPct}%"></div>
          </div>
        </div>`;
    });
  }

  // ── Flashcards ──

  let flash = { ids: [], idx: 0, flipped: false };

  function initFlashcards() {
    const chapter = document.getElementById("flashChapter").value;
    const topic = document.getElementById("flashTopic").value;
    const starredOnly = document.getElementById("flashStarredOnly").checked;
    const incorrectOnly = document.getElementById("flashIncorrectOnly").checked;
    const qs = getFiltered(chapter, topic, starredOnly, incorrectOnly);
    flash.ids = shuffle(qs).map(q => q.id);
    flash.idx = 0;
    flash.flipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const card = document.getElementById("flashcard");
    card.classList.remove("flipped");
    flash.flipped = false;

    if (flash.ids.length === 0) {
      document.getElementById("flashQuestion").textContent = "No questions match your filters.";
      document.getElementById("flashAnswer").textContent = "";
      document.getElementById("flashExplanation").textContent = "";
      document.getElementById("flashCounter").textContent = "0 / 0";
      document.getElementById("flashStar").classList.remove("starred");
      document.getElementById("flashStar").innerHTML = "&#9734;";
      return;
    }

    const q = QUESTIONS.find(q => q.id === flash.ids[flash.idx]);
    document.getElementById("flashQuestion").textContent = q.question;
    document.getElementById("flashAnswer").textContent = q.choices[q.correctIndex];
    document.getElementById("flashExplanation").innerHTML = q.explanation + (q.page ? `<span class="page-ref">DOL Guide p. ${q.page}</span>` : "");
    document.getElementById("flashCounter").textContent = `${flash.idx + 1} / ${flash.ids.length}`;

    const starred = getProgress(q.id).starred;
    const btn = document.getElementById("flashStar");
    btn.classList.toggle("starred", starred);
    btn.innerHTML = starred ? "&#9733;" : "&#9734;";

    document.getElementById("flashPrev").disabled = flash.idx === 0;
    document.getElementById("flashNext").disabled = flash.idx >= flash.ids.length - 1;
  }

  function flipCard() {
    if (flash.ids.length === 0) return;
    flash.flipped = !flash.flipped;
    document.getElementById("flashcard").classList.toggle("flipped", flash.flipped);
  }

  // ── Quiz ──

  let quiz = { ids: [], idx: 0, answers: {}, correct: 0, total: 0, answered: false };

  function startQuiz(questionIds) {
    quiz.ids = questionIds || [];
    if (quiz.ids.length === 0) {
      const chapter = document.getElementById("quizChapter").value;
      const topic = document.getElementById("quizTopic").value;
      let count = parseInt(document.getElementById("quizCount").value);
      let qs = getFiltered(chapter, topic, false, false);
      qs = shuffle(qs);
      if (count > 0) qs = qs.slice(0, count);
      quiz.ids = qs.map(q => q.id);
    }

    if (quiz.ids.length === 0) { alert("No questions match your filters."); return; }

    quiz.idx = 0;
    quiz.answers = {};
    quiz.correct = 0;
    quiz.total = 0;
    quiz.answered = false;

    document.getElementById("quizSetup").style.display = "none";
    document.getElementById("quizSummary").style.display = "none";
    document.getElementById("quizActive").style.display = "block";
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    quiz.answered = false;
    const q = QUESTIONS.find(q => q.id === quiz.ids[quiz.idx]);
    document.getElementById("quizChapterBadge").textContent = `Ch ${q.chapter}: ${CHAPTERS.find(c => c.id === q.chapter).title} — ${q.topic}`;
    document.getElementById("quizQuestionText").textContent = q.question;
    document.getElementById("quizScore").textContent = `${quiz.correct} / ${quiz.total} correct`;
    document.getElementById("quizProgress").textContent = `Question ${quiz.idx + 1} of ${quiz.ids.length}`;

    const keys = ["A", "B", "C", "D"];
    const choicesEl = document.getElementById("quizChoices");
    choicesEl.innerHTML = "";
    q.choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.className = "quiz-choice";
      btn.innerHTML = `<span class="quiz-choice-key">${keys[i]}</span><span>${c}</span>`;
      btn.onclick = () => selectQuizChoice(i);
      choicesEl.appendChild(btn);
    });

    document.getElementById("checkAnswer").style.display = "none";
    document.getElementById("quizFeedback").style.display = "none";
    document.getElementById("nextQuestion").style.display = "none";

    const starred = getProgress(q.id).starred;
    const starBtn = document.getElementById("quizStar");
    starBtn.classList.toggle("starred", starred);
    starBtn.innerHTML = starred ? "&#9733;" : "&#9734;";
  }

  let selectedQuizChoice = -1;

  function selectQuizChoice(i) {
    if (quiz.answered) return;
    selectedQuizChoice = i;
    document.querySelectorAll(".quiz-choice").forEach((c, idx) => {
      c.classList.toggle("selected", idx === i);
    });
    document.getElementById("checkAnswer").style.display = "inline-block";
  }

  function checkQuizAnswer() {
    if (quiz.answered || selectedQuizChoice < 0) return;
    quiz.answered = true;
    quiz.total++;

    const q = QUESTIONS.find(q => q.id === quiz.ids[quiz.idx]);
    const isCorrect = selectedQuizChoice === q.correctIndex;
    if (isCorrect) quiz.correct++;
    quiz.answers[q.id] = selectedQuizChoice;
    updateProgress(q.id, isCorrect);

    document.querySelectorAll(".quiz-choice").forEach((c, idx) => {
      c.classList.add("disabled");
      if (idx === q.correctIndex) c.classList.add("correct");
      if (idx === selectedQuizChoice && !isCorrect) c.classList.add("incorrect");
    });

    const feedback = document.getElementById("quizFeedback");
    feedback.className = "quiz-feedback " + (isCorrect ? "correct" : "incorrect");
    feedback.innerHTML = (isCorrect ? "Correct! " : "Incorrect. ") + q.explanation + (q.page ? `<span class="page-ref">DOL Guide p. ${q.page}</span>` : "");
    feedback.style.display = "block";

    document.getElementById("checkAnswer").style.display = "none";
    document.getElementById("nextQuestion").style.display = "inline-block";
    document.getElementById("nextQuestion").textContent = quiz.idx < quiz.ids.length - 1 ? "Next Question" : "See Results";
    document.getElementById("quizScore").textContent = `${quiz.correct} / ${quiz.total} correct`;
  }

  function nextQuizQuestion() {
    selectedQuizChoice = -1;
    quiz.idx++;
    if (quiz.idx >= quiz.ids.length) {
      showQuizSummary();
      return;
    }
    renderQuizQuestion();
  }

  function showQuizSummary() {
    document.getElementById("quizActive").style.display = "none";
    document.getElementById("quizSummary").style.display = "block";

    const pct = Math.round((quiz.correct / quiz.ids.length) * 100);
    const scoreEl = document.getElementById("summaryScore");
    scoreEl.textContent = `${quiz.correct} / ${quiz.ids.length} (${pct}%)`;
    scoreEl.className = "summary-score " + (pct >= 80 ? "pass" : "fail");

    const detailsEl = document.getElementById("summaryDetails");
    detailsEl.innerHTML = "<h3>Missed Questions</h3>";
    let missedIds = [];
    quiz.ids.forEach(id => {
      const q = QUESTIONS.find(q => q.id === id);
      const ans = quiz.answers[id];
      if (ans !== q.correctIndex) {
        missedIds.push(id);
        detailsEl.innerHTML += `
          <div class="summary-item">
            <div class="summary-item-q">${q.question}</div>
            <div class="summary-item-your">Your answer: ${ans !== undefined ? q.choices[ans] : "Not answered"}</div>
            <div class="summary-item-correct">Correct: ${q.choices[q.correctIndex]}</div>
            <div class="summary-item-explanation">${q.explanation}${q.page ? `<span class="page-ref">DOL Guide p. ${q.page}</span>` : ""}</div>
          </div>`;
      }
    });

    if (missedIds.length === 0) detailsEl.innerHTML = "<p>You got every question right!</p>";

    const retryBtn = document.getElementById("retryMissed");
    retryBtn.style.display = missedIds.length > 0 ? "inline-block" : "none";
    retryBtn.onclick = () => startQuiz(missedIds);
  }

  // ── Practice Test ──

  let test = { ids: [], idx: 0, answers: {}, flags: {}, timer: null, timeLeft: 0 };

  function startPracticeTest() {
    const count = parseInt(document.getElementById("testCount").value);
    const timerMin = parseInt(document.getElementById("testTimer").value);

    const chapterWeights = {};
    CHAPTERS.forEach(ch => {
      chapterWeights[ch.id] = QUESTIONS.filter(q => q.chapter === ch.id).length;
    });
    const totalQ = QUESTIONS.length;

    let selected = [];
    CHAPTERS.forEach(ch => {
      const chapterQs = shuffle(QUESTIONS.filter(q => q.chapter === ch.id));
      const n = Math.max(1, Math.round((chapterWeights[ch.id] / totalQ) * count));
      selected.push(...chapterQs.slice(0, n));
    });
    selected = shuffle(selected).slice(0, count);
    if (selected.length === 0) { alert("No questions available."); return; }

    test.ids = selected.map(q => q.id);
    test.idx = 0;
    test.answers = {};
    test.flags = {};

    document.getElementById("testSetup").style.display = "none";
    document.getElementById("testResults").style.display = "none";
    document.getElementById("testActive").style.display = "block";

    if (timerMin > 0) {
      test.timeLeft = timerMin * 60;
      startTestTimer();
    } else {
      test.timeLeft = 0;
      document.getElementById("testTimerDisplay").textContent = "";
    }

    buildTestNavStrip();
    renderTestQuestion();
  }

  function startTestTimer() {
    updateTimerDisplay();
    test.timer = setInterval(() => {
      test.timeLeft--;
      updateTimerDisplay();
      if (test.timeLeft <= 0) {
        clearInterval(test.timer);
        submitTest();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(test.timeLeft / 60);
    const s = test.timeLeft % 60;
    const el = document.getElementById("testTimerDisplay");
    el.textContent = `${m}:${s.toString().padStart(2, "0")}`;
    el.className = "test-timer" + (test.timeLeft <= 60 ? " danger" : test.timeLeft <= 300 ? " warning" : "");
  }

  function buildTestNavStrip() {
    const strip = document.getElementById("testNavStrip");
    strip.innerHTML = "";
    test.ids.forEach((id, i) => {
      const dot = document.createElement("button");
      dot.className = "test-nav-dot";
      dot.textContent = i + 1;
      dot.onclick = () => { test.idx = i; renderTestQuestion(); };
      strip.appendChild(dot);
    });
    updateTestNavStrip();
  }

  function updateTestNavStrip() {
    const dots = document.querySelectorAll(".test-nav-dot");
    dots.forEach((dot, i) => {
      dot.className = "test-nav-dot";
      if (i === test.idx) dot.classList.add("current");
      if (test.answers[test.ids[i]] !== undefined) dot.classList.add("answered");
      if (test.flags[test.ids[i]]) dot.classList.add("flagged");
    });
  }

  function renderTestQuestion() {
    const q = QUESTIONS.find(q => q.id === test.ids[test.idx]);
    document.getElementById("testQuestionText").textContent = q.question;
    document.getElementById("testProgressText").textContent = `${test.idx + 1} / ${test.ids.length}`;

    const keys = ["A", "B", "C", "D"];
    const choicesEl = document.getElementById("testChoices");
    choicesEl.innerHTML = "";
    q.choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.className = "test-choice";
      if (test.answers[q.id] === i) btn.classList.add("selected");
      btn.innerHTML = `<span class="quiz-choice-key">${keys[i]}</span><span>${c}</span>`;
      btn.onclick = () => {
        test.answers[q.id] = i;
        renderTestQuestion();
      };
      choicesEl.appendChild(btn);
    });

    const flagBtn = document.getElementById("testFlag");
    flagBtn.classList.toggle("flagged", !!test.flags[q.id]);
    flagBtn.textContent = test.flags[q.id] ? "Flagged" : "Flag for Review";

    document.getElementById("testPrev").disabled = test.idx === 0;
    document.getElementById("testNext").disabled = test.idx >= test.ids.length - 1;

    updateTestNavStrip();
  }

  function submitTest() {
    if (test.timer) clearInterval(test.timer);

    document.getElementById("testActive").style.display = "none";
    document.getElementById("testResults").style.display = "block";

    let correct = 0;
    test.ids.forEach(id => {
      const q = QUESTIONS.find(q => q.id === id);
      const isCorrect = test.answers[id] === q.correctIndex;
      if (isCorrect) correct++;
      updateProgress(id, isCorrect);
    });

    const pct = Math.round((correct / test.ids.length) * 100);
    const passed = pct >= 80;

    document.getElementById("testResultBadge").textContent = passed ? "PASS" : "FAIL";
    document.getElementById("testResultBadge").style.color = passed ? "var(--success)" : "var(--error)";

    const scoreEl = document.getElementById("testScore");
    scoreEl.textContent = `${correct} / ${test.ids.length} (${pct}%)`;
    scoreEl.className = "summary-score " + (passed ? "pass" : "fail");

    const breakdownEl = document.getElementById("testBreakdown");
    breakdownEl.innerHTML = "<h3>Chapter Breakdown</h3>";
    CHAPTERS.forEach(ch => {
      const chIds = test.ids.filter(id => QUESTIONS.find(q => q.id === id).chapter === ch.id);
      if (chIds.length === 0) return;
      let chCorrect = 0;
      chIds.forEach(id => {
        const q = QUESTIONS.find(q => q.id === id);
        if (test.answers[id] === q.correctIndex) chCorrect++;
      });
      const chPct = Math.round((chCorrect / chIds.length) * 100);
      breakdownEl.innerHTML += `
        <div class="chapter-bar">
          <div class="chapter-bar-header">
            <span class="chapter-bar-title">Ch ${ch.id}: ${ch.title}</span>
            <span class="chapter-bar-stat">${chCorrect}/${chIds.length} (${chPct}%)</span>
          </div>
          <div class="chapter-bar-track">
            <div class="chapter-bar-fill" style="width:${chPct}%"></div>
          </div>
        </div>`;
    });

    const detailsEl = document.getElementById("testDetails");
    detailsEl.innerHTML = "<h3>Missed Questions</h3>";
    let hasMissed = false;
    test.ids.forEach(id => {
      const q = QUESTIONS.find(q => q.id === id);
      const ans = test.answers[id];
      if (ans !== q.correctIndex) {
        hasMissed = true;
        detailsEl.innerHTML += `
          <div class="summary-item">
            <div class="summary-item-q">${q.question}</div>
            <div class="summary-item-your">Your answer: ${ans !== undefined ? q.choices[ans] : "Not answered"}</div>
            <div class="summary-item-correct">Correct: ${q.choices[q.correctIndex]}</div>
            <div class="summary-item-explanation">${q.explanation}${q.page ? `<span class="page-ref">DOL Guide p. ${q.page}</span>` : ""}</div>
          </div>`;
      }
    });
    if (!hasMissed) detailsEl.innerHTML = "<p>Perfect score!</p>";
  }

  // ── Modal ──

  function showModal(text, onConfirm) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalText").textContent = text;
    document.getElementById("modalConfirm").onclick = () => {
      document.getElementById("modal").style.display = "none";
      onConfirm();
    };
    document.getElementById("modalCancel").onclick = () => {
      document.getElementById("modal").style.display = "none";
    };
  }

  // ── Init ──

  function init() {
    loadProgress();
    loadSettings();

    if (settings.dark) document.body.classList.add("dark");

    populateChapterSelect(document.getElementById("flashChapter"));
    populateChapterSelect(document.getElementById("quizChapter"));

    // Nav
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.addEventListener("click", () => navigate(btn.dataset.view));
    });

    // Dark mode
    document.getElementById("darkModeToggle").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      settings.dark = document.body.classList.contains("dark");
      saveSettings();
    });

    // Flashcard filters
    document.getElementById("flashChapter").addEventListener("change", (e) => {
      populateTopicSelect(document.getElementById("flashTopic"), e.target.value);
      initFlashcards();
    });
    document.getElementById("flashTopic").addEventListener("change", initFlashcards);
    document.getElementById("flashStarredOnly").addEventListener("change", initFlashcards);
    document.getElementById("flashIncorrectOnly").addEventListener("change", initFlashcards);

    // Flashcard interaction
    document.getElementById("flashcard").addEventListener("click", (e) => {
      if (e.target.closest(".star-btn")) return;
      flipCard();
    });
    document.getElementById("flashPrev").addEventListener("click", () => {
      if (flash.idx > 0) { flash.idx--; renderFlashcard(); }
    });
    document.getElementById("flashNext").addEventListener("click", () => {
      if (flash.idx < flash.ids.length - 1) { flash.idx++; renderFlashcard(); }
    });
    document.getElementById("flashStar").addEventListener("click", () => {
      if (flash.ids.length === 0) return;
      toggleStar(flash.ids[flash.idx]);
      const starred = getProgress(flash.ids[flash.idx]).starred;
      const btn = document.getElementById("flashStar");
      btn.classList.toggle("starred", starred);
      btn.innerHTML = starred ? "&#9733;" : "&#9734;";
    });

    // Quiz filters
    document.getElementById("quizChapter").addEventListener("change", (e) => {
      populateTopicSelect(document.getElementById("quizTopic"), e.target.value);
    });

    // Quiz buttons
    document.getElementById("startQuiz").addEventListener("click", () => startQuiz());
    document.getElementById("checkAnswer").addEventListener("click", checkQuizAnswer);
    document.getElementById("nextQuestion").addEventListener("click", nextQuizQuestion);
    document.getElementById("newQuiz").addEventListener("click", () => {
      document.getElementById("quizSummary").style.display = "none";
      document.getElementById("quizActive").style.display = "none";
      document.getElementById("quizSetup").style.display = "block";
    });
    document.getElementById("quizStar").addEventListener("click", () => {
      if (quiz.ids.length === 0) return;
      const id = quiz.ids[quiz.idx];
      toggleStar(id);
      const starred = getProgress(id).starred;
      const btn = document.getElementById("quizStar");
      btn.classList.toggle("starred", starred);
      btn.innerHTML = starred ? "&#9733;" : "&#9734;";
    });

    // Practice test
    document.getElementById("startTest").addEventListener("click", startPracticeTest);
    document.getElementById("submitTest").addEventListener("click", () => {
      const unanswered = test.ids.filter(id => test.answers[id] === undefined).length;
      if (unanswered > 0) {
        showModal(`You have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Submit anyway?`, submitTest);
      } else {
        submitTest();
      }
    });
    document.getElementById("testPrev").addEventListener("click", () => {
      if (test.idx > 0) { test.idx--; renderTestQuestion(); }
    });
    document.getElementById("testNext").addEventListener("click", () => {
      if (test.idx < test.ids.length - 1) { test.idx++; renderTestQuestion(); }
    });
    document.getElementById("testFlag").addEventListener("click", () => {
      const id = test.ids[test.idx];
      test.flags[id] = !test.flags[id];
      renderTestQuestion();
    });
    document.getElementById("newTest").addEventListener("click", () => {
      document.getElementById("testResults").style.display = "none";
      document.getElementById("testActive").style.display = "none";
      document.getElementById("testSetup").style.display = "block";
    });

    // Dashboard actions
    document.getElementById("btnRandomQuiz").addEventListener("click", () => {
      navigate("quiz");
      document.getElementById("quizChapter").value = "";
      document.getElementById("quizCount").value = "10";
      startQuiz();
    });
    document.getElementById("btnWeakest").addEventListener("click", () => {
      let weakest = null, worstPct = 101;
      CHAPTERS.forEach(ch => {
        const qs = QUESTIONS.filter(q => q.chapter === ch.id);
        let total = 0, correct = 0;
        qs.forEach(q => {
          const p = getProgress(q.id);
          total += p.attempts;
          correct += p.correct;
        });
        const pct = total > 0 ? (correct / total) * 100 : 0;
        if (pct < worstPct) { worstPct = pct; weakest = ch.id; }
      });
      navigate("quiz");
      document.getElementById("quizChapter").value = weakest || "";
      populateTopicSelect(document.getElementById("quizTopic"), weakest || "");
      document.getElementById("quizCount").value = "10";
      startQuiz();
    });
    document.getElementById("btnStarred").addEventListener("click", () => {
      const starred = QUESTIONS.filter(q => getProgress(q.id).starred);
      if (starred.length === 0) { alert("No starred questions yet. Star questions while studying to review them later."); return; }
      navigate("flashcards");
      document.getElementById("flashStarredOnly").checked = true;
      initFlashcards();
    });
    document.getElementById("btnResetProgress").addEventListener("click", () => {
      showModal("Are you sure you want to reset all progress? This cannot be undone.", () => {
        progress = {};
        saveProgress();
        renderDashboard();
      });
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      const activeView = document.querySelector(".view.active");
      if (!activeView) return;
      const viewId = activeView.id;

      if (viewId === "view-flashcards") {
        if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); flipCard(); }
        if (e.key === "ArrowLeft") { e.preventDefault(); if (flash.idx > 0) { flash.idx--; renderFlashcard(); } }
        if (e.key === "ArrowRight") { e.preventDefault(); if (flash.idx < flash.ids.length - 1) { flash.idx++; renderFlashcard(); } }
      }

      if (viewId === "view-quiz" && document.getElementById("quizActive").style.display !== "none") {
        if (["1", "2", "3", "4"].includes(e.key)) {
          e.preventDefault();
          selectQuizChoice(parseInt(e.key) - 1);
        }
        if (e.key === "Enter") {
          e.preventDefault();
          if (!quiz.answered) checkQuizAnswer();
          else nextQuizQuestion();
        }
      }

      if (viewId === "view-test" && document.getElementById("testActive").style.display !== "none") {
        if (["1", "2", "3", "4"].includes(e.key)) {
          e.preventDefault();
          const q = QUESTIONS.find(q => q.id === test.ids[test.idx]);
          test.answers[q.id] = parseInt(e.key) - 1;
          renderTestQuestion();
        }
        if (e.key === "ArrowLeft") { e.preventDefault(); if (test.idx > 0) { test.idx--; renderTestQuestion(); } }
        if (e.key === "ArrowRight") { e.preventDefault(); if (test.idx < test.ids.length - 1) { test.idx++; renderTestQuestion(); } }
      }
    });

    renderDashboard();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
