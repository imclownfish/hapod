const routine = [
  {
    name: "Neck Rolls",
    type: "time",
    seconds: 30,
    restSeconds: 10,
    target: "30 seconds",
    description: "Move slowly through a comfortable range. Keep the shoulders relaxed.",
    bodyPart: "Neck and upper traps",
    shortBenefit: "Eases morning stiffness and helps the upper body feel less tense.",
    longBenefit: "Supports better posture and smoother head movement when done gently.",
  },
  {
    name: "Arm Circles",
    type: "time",
    seconds: 40,
    restSeconds: 10,
    target: "20 seconds forward, 20 seconds backward",
    description: "Keep the arms long and controlled. Make circles that feel smooth.",
    bodyPart: "Shoulders, upper back, and chest",
    shortBenefit: "Warms up the shoulders before harder movement.",
    longBenefit: "Builds shoulder mobility and helps daily reaching feel easier.",
  },
  {
    name: "Bodyweight Squats",
    type: "reps",
    reps: 15,
    restSeconds: 20,
    target: "15 reps",
    description: "Sit the hips back, keep the chest tall, and press through the feet to stand.",
    bodyPart: "Quads, glutes, hamstrings, and core",
    shortBenefit: "Wakes up the legs and raises body temperature.",
    longBenefit: "Maintains leg strength for stairs, lifting, and everyday movement.",
  },
  {
    name: "Plank",
    type: "time",
    seconds: 30,
    restSeconds: 20,
    target: "30 seconds",
    description: "Brace the stomach, keep a straight line, and breathe steadily.",
    bodyPart: "Core, shoulders, and glutes",
    shortBenefit: "Activates the core without needing a lot of space.",
    longBenefit: "Builds trunk stability, which helps protect the back during daily tasks.",
  },
];

const state = {
  currentIndex: 0,
  phase: "prep",
  remaining: 0,
  paused: false,
  timerId: null,
  workoutStartedAt: null,
  lastViewBeforeInfo: "workoutView",
  soundOn: localStorage.getItem("hapodSound") === "true",
  audioContext: null,
};

const els = {
  views: document.querySelectorAll(".view"),
  streakCount: document.querySelector("#streakCount"),
  todayLabel: document.querySelector("#todayLabel"),
  exerciseTotal: document.querySelector("#exerciseTotal"),
  routineMinutes: document.querySelector("#routineMinutes"),
  completedCount: document.querySelector("#completedCount"),
  todayNote: document.querySelector("#todayNote"),
  soundToggle: document.querySelector("#soundToggle"),
  startWorkout: document.querySelector("#startWorkout"),
  viewPlan: document.querySelector("#viewPlan"),
  progressLabel: document.querySelector("#progressLabel"),
  progressFill: document.querySelector("#progressFill"),
  modeLabel: document.querySelector("#modeLabel"),
  exerciseName: document.querySelector("#exerciseName"),
  exerciseTarget: document.querySelector("#exerciseTarget"),
  timerFace: document.querySelector("#timerFace"),
  timerValue: document.querySelector("#timerValue"),
  timerHint: document.querySelector("#timerHint"),
  coachLine: document.querySelector("#coachLine"),
  nextUp: document.querySelector("#nextUp"),
  pauseResume: document.querySelector("#pauseResume"),
  skipStep: document.querySelector("#skipStep"),
  showInfo: document.querySelector("#showInfo"),
  exerciseList: document.querySelector("#exerciseList"),
  backFromPlan: document.querySelector("#backFromPlan"),
  closeInfo: document.querySelector("#closeInfo"),
  infoExerciseName: document.querySelector("#infoExerciseName"),
  infoDescription: document.querySelector("#infoDescription"),
  infoBodyPart: document.querySelector("#infoBodyPart"),
  infoShortBenefit: document.querySelector("#infoShortBenefit"),
  infoLongBenefit: document.querySelector("#infoLongBenefit"),
  celebration: document.querySelector("#celebration"),
  finishStats: document.querySelector("#finishStats"),
  finishHome: document.querySelector("#finishHome"),
};

function getStats() {
  return JSON.parse(
    localStorage.getItem("hapodStats") ||
      '{"completed":0,"streak":0,"lastCompletedDate":null}'
  );
}

function saveStats(stats) {
  localStorage.setItem("hapodStats", JSON.stringify(stats));
}

function localDateKey(date = new Date()) {
  return date.toLocaleDateString("en-CA");
}

function showView(id) {
  els.views.forEach((view) => view.classList.toggle("active", view.id === id));
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.max(0, seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function plannedSeconds() {
  return routine.reduce((total, exercise) => {
    const exerciseSeconds = exercise.type === "time" ? exercise.seconds : 45;
    return total + exerciseSeconds + exercise.restSeconds;
  }, 0);
}

function updateHome() {
  const stats = getStats();
  els.streakCount.textContent = stats.streak;
  els.soundToggle.textContent = state.soundOn ? "Sound On" : "Sound Off";
  els.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  els.exerciseTotal.textContent = routine.length;
  els.routineMinutes.textContent = Math.max(1, Math.round(plannedSeconds() / 60));
  els.completedCount.textContent = stats.completed;
  els.todayLabel.textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
  els.todayNote.textContent =
    stats.lastCompletedDate === localDateKey()
      ? "Today's routine is already finished."
      : "One focused session. No counting stress.";
}

function renderPlan() {
  els.exerciseList.innerHTML = "";
  routine.forEach((exercise, index) => {
    const item = document.createElement("article");
    item.className = "plan-item";
    item.innerHTML = `
      <span class="plan-number">${index + 1}</span>
      <div>
        <strong>${exercise.name}</strong>
        <p>${exercise.target} - ${exercise.bodyPart}</p>
      </div>
    `;
    item.addEventListener("click", () => showExerciseInfo(index, "planView"));
    els.exerciseList.appendChild(item);
  });
}

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      await navigator.wakeLock.request("screen");
    }
  } catch {
    // The workout still works if iOS/browser refuses wake lock.
  }
}

function pulse(pattern = 35) {
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

function ensureAudio() {
  if (!state.soundOn || state.audioContext) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (AudioContext) {
    state.audioContext = new AudioContext();
  }
}

function beep(frequency = 660, duration = 0.08) {
  if (!state.soundOn) return;
  ensureAudio();
  if (!state.audioContext) return;

  const oscillator = state.audioContext.createOscillator();
  const gain = state.audioContext.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = "sine";
  gain.gain.setValueAtTime(0.001, state.audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.22, state.audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, state.audioContext.currentTime + duration);
  oscillator.connect(gain).connect(state.audioContext.destination);
  oscillator.start();
  oscillator.stop(state.audioContext.currentTime + duration);
}

function startWorkout() {
  state.currentIndex = 0;
  state.phase = "prep";
  state.paused = false;
  state.workoutStartedAt = Date.now();
  ensureAudio();
  pulse([25, 35, 25]);
  requestWakeLock();
  startStep();
  showView("workoutView");
}

function currentExercise() {
  return routine[state.currentIndex];
}

function startStep() {
  clearInterval(state.timerId);
  const exercise = currentExercise();
  if (!exercise) {
    finishWorkout();
    return;
  }

  if (state.phase === "prep") {
    state.remaining = 5;
    els.modeLabel.textContent = "Get ready";
    els.exerciseName.textContent = exercise.name;
    els.exerciseTarget.textContent = `Starting ${exercise.target}`;
    els.coachLine.textContent = "Set your position. The next cue starts the move.";
    els.skipStep.textContent = "Start";
    beep(520, 0.06);
  } else if (state.phase === "exercise") {
    state.remaining = exercise.type === "time" ? exercise.seconds : 0;
    els.modeLabel.textContent = exercise.type === "time" ? "Timed exercise" : "Rep exercise";
    els.exerciseName.textContent = exercise.name;
    els.exerciseTarget.textContent = exercise.target;
    els.coachLine.textContent =
      exercise.type === "time"
        ? "Stay smooth and controlled. The timer will handle the count."
        : "Complete the reps at your pace, then tap Next.";
    els.skipStep.textContent = exercise.type === "time" ? "Skip" : "Done";
    beep(760, 0.08);
    pulse(35);
  } else {
    state.remaining = exercise.restSeconds;
    els.modeLabel.textContent = "Rest";
    els.exerciseName.textContent = "Rest";
    els.exerciseTarget.textContent = `${exercise.restSeconds} seconds before the next move`;
    els.coachLine.textContent = "Breathe, reset, and get ready for the next exercise.";
    els.skipStep.textContent = "Skip";
    beep(440, 0.07);
  }

  state.paused = false;
  els.pauseResume.textContent = "Pause";
  updateNextUp();
  updateWorkoutDisplay();

  if (state.remaining > 0) {
    state.timerId = setInterval(tick, 1000);
  }
}

function tick() {
  if (state.paused) return;
  state.remaining -= 1;
  updateWorkoutDisplay();
  if (state.remaining <= 3 && state.remaining > 0) {
    beep(620 + (4 - state.remaining) * 80, 0.055);
    pulse(20);
  }
  if (state.remaining <= 0) {
    advanceStep();
  }
}

function updateWorkoutDisplay() {
  const totalSteps = routine.length;
  const completedAmount =
    state.currentIndex + (state.phase === "exercise" ? 0.2 : state.phase === "rest" ? 0.75 : 0);
  const progress = Math.min(100, (completedAmount / totalSteps) * 100);
  const exercise = currentExercise();

  els.progressLabel.textContent = `${state.phase === "rest" ? "Rest after" : "Exercise"} ${Math.min(
    state.currentIndex + 1,
    totalSteps
  )} of ${totalSteps}`;
  els.progressFill.style.width = `${progress}%`;
  els.timerValue.textContent =
    state.remaining > 0 ? formatTime(state.remaining) : exercise.target;
  els.timerHint.textContent =
    state.phase === "prep" ? "Get ready" : state.phase === "rest" ? "Rest" : "Work";
  document.querySelector(".exercise-card").classList.toggle("is-rest", state.phase === "rest");
  document
    .querySelector(".exercise-card")
    .classList.toggle("is-warning", state.remaining <= 3 && state.remaining > 0);
}

function updateNextUp() {
  const next = routine[state.currentIndex + 1];
  if (state.phase === "prep") {
    els.nextUp.textContent = "Next: start this move with control.";
  } else if (state.phase === "exercise" && currentExercise().restSeconds > 0) {
    els.nextUp.textContent = `Next: ${currentExercise().restSeconds} second rest.`;
  } else if (next) {
    els.nextUp.textContent = `Next: ${next.name}.`;
  } else {
    els.nextUp.textContent = "Next: finish strong.";
  }
}

function advanceStep() {
  clearInterval(state.timerId);
  const exercise = currentExercise();
  if (state.phase === "prep") {
    state.phase = "exercise";
  } else if (state.phase === "exercise" && exercise.restSeconds > 0) {
    state.phase = "rest";
  } else {
    state.currentIndex += 1;
    state.phase = "prep";
  }
  startStep();
}

function finishWorkout() {
  clearInterval(state.timerId);
  const stats = getStats();
  const today = localDateKey();
  if (stats.lastCompletedDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    stats.streak = stats.lastCompletedDate === localDateKey(yesterday) ? stats.streak + 1 : 1;
    stats.completed += 1;
    stats.lastCompletedDate = today;
    saveStats(stats);
  }

  const minutes = Math.max(1, Math.round((Date.now() - state.workoutStartedAt) / 60000));
  els.finishStats.textContent = `${routine.length} exercises finished in about ${minutes} minute${
    minutes === 1 ? "" : "s"
  }. Current streak: ${stats.streak}.`;
  beep(820, 0.09);
  window.setTimeout(() => beep(980, 0.1), 110);
  pulse([30, 45, 30, 45, 60]);
  launchCelebration();
  updateHome();
  showView("finishView");
}

function launchCelebration() {
  const colors = ["#2f7d62", "#d59b2d", "#386fa4", "#14342b"];
  els.celebration.innerHTML = "";
  for (let index = 0; index < 24; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--x", `${Math.random() * 260 - 130}px`);
    piece.style.setProperty("--y", `${Math.random() * 220 + 100}px`);
    piece.style.setProperty("--r", `${Math.random() * 540 - 270}deg`);
    piece.style.animationDelay = `${index * 16}ms`;
    els.celebration.appendChild(piece);
  }
}

function showExerciseInfo(index = state.currentIndex, backView = "workoutView") {
  const exercise = routine[index] || currentExercise();
  state.lastViewBeforeInfo = backView;
  els.infoExerciseName.textContent = exercise.name;
  els.infoDescription.textContent = exercise.description;
  els.infoBodyPart.textContent = exercise.bodyPart;
  els.infoShortBenefit.textContent = exercise.shortBenefit;
  els.infoLongBenefit.textContent = exercise.longBenefit;
  showView("infoView");
}

els.startWorkout.addEventListener("click", startWorkout);
els.viewPlan.addEventListener("click", () => showView("planView"));
els.backFromPlan.addEventListener("click", () => showView("homeView"));
els.closeInfo.addEventListener("click", () => showView(state.lastViewBeforeInfo));
els.showInfo.addEventListener("click", () => showExerciseInfo());
els.skipStep.addEventListener("click", advanceStep);
els.finishHome.addEventListener("click", () => showView("homeView"));
els.soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  localStorage.setItem("hapodSound", String(state.soundOn));
  updateHome();
  if (state.soundOn) {
    ensureAudio();
    beep(660, 0.07);
  }
});

els.pauseResume.addEventListener("click", () => {
  state.paused = !state.paused;
  els.pauseResume.textContent = state.paused ? "Resume" : "Pause";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

updateHome();
renderPlan();
