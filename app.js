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
  phase: "exercise",
  remaining: 0,
  paused: false,
  timerId: null,
  workoutStartedAt: null,
  lastViewBeforeInfo: "workoutView",
};

const els = {
  views: document.querySelectorAll(".view"),
  streakCount: document.querySelector("#streakCount"),
  todayLabel: document.querySelector("#todayLabel"),
  exerciseTotal: document.querySelector("#exerciseTotal"),
  routineMinutes: document.querySelector("#routineMinutes"),
  completedCount: document.querySelector("#completedCount"),
  startWorkout: document.querySelector("#startWorkout"),
  viewPlan: document.querySelector("#viewPlan"),
  progressLabel: document.querySelector("#progressLabel"),
  progressFill: document.querySelector("#progressFill"),
  modeLabel: document.querySelector("#modeLabel"),
  exerciseName: document.querySelector("#exerciseName"),
  exerciseTarget: document.querySelector("#exerciseTarget"),
  timerFace: document.querySelector("#timerFace"),
  coachLine: document.querySelector("#coachLine"),
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
  els.exerciseTotal.textContent = routine.length;
  els.routineMinutes.textContent = Math.max(1, Math.round(plannedSeconds() / 60));
  els.completedCount.textContent = stats.completed;
  els.todayLabel.textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
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
        <p>${exercise.target} · ${exercise.bodyPart}</p>
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

function startWorkout() {
  state.currentIndex = 0;
  state.phase = "exercise";
  state.paused = false;
  state.workoutStartedAt = Date.now();
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

  if (state.phase === "exercise") {
    state.remaining = exercise.type === "time" ? exercise.seconds : 0;
    els.modeLabel.textContent = exercise.type === "time" ? "Timed exercise" : "Rep exercise";
    els.exerciseName.textContent = exercise.name;
    els.exerciseTarget.textContent = exercise.target;
    els.coachLine.textContent =
      exercise.type === "time"
        ? "Stay smooth and controlled. The timer will handle the count."
        : "Complete the reps at your pace, then tap Next.";
    els.skipStep.textContent = exercise.type === "time" ? "Skip" : "Next";
  } else {
    state.remaining = exercise.restSeconds;
    els.modeLabel.textContent = "Rest";
    els.exerciseName.textContent = "Rest";
    els.exerciseTarget.textContent = `${exercise.restSeconds} seconds before the next move`;
    els.coachLine.textContent = "Breathe, reset, and get ready for the next exercise.";
    els.skipStep.textContent = "Skip";
  }

  state.paused = false;
  els.pauseResume.textContent = "Pause";
  updateWorkoutDisplay();

  if (state.remaining > 0) {
    state.timerId = setInterval(tick, 1000);
  }
}

function tick() {
  if (state.paused) return;
  state.remaining -= 1;
  updateWorkoutDisplay();
  if (state.remaining <= 0) {
    advanceStep();
  }
}

function updateWorkoutDisplay() {
  const totalSteps = routine.length;
  const completedAmount = state.currentIndex + (state.phase === "rest" ? 0.55 : 0);
  const progress = Math.min(100, (completedAmount / totalSteps) * 100);

  els.progressLabel.textContent = `Exercise ${Math.min(state.currentIndex + 1, totalSteps)} of ${totalSteps}`;
  els.progressFill.style.width = `${progress}%`;
  els.timerFace.textContent =
    state.remaining > 0 ? formatTime(state.remaining) : currentExercise().target;
}

function advanceStep() {
  clearInterval(state.timerId);
  const exercise = currentExercise();
  if (state.phase === "exercise" && exercise.restSeconds > 0) {
    state.phase = "rest";
  } else {
    state.currentIndex += 1;
    state.phase = "exercise";
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
  updateHome();
  showView("finishView");
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
