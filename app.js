const weeklyPlan = [
  {
    key: "sun",
    short: "Нд",
    title: "Неділя",
    subtitle: "Повний відпочинок",
    minutes: 0,
    restDay: true,
    note: "Нічого силового. Сон 7-9 год і білок 1.6-2 г/кг теж працюють на результат.",
    exercises: [
      {
        name: "Повний відпочинок",
        type: "rest",
        target: "0 силових вправ",
        description: "Дай тілу відновитися. Якщо дуже хочеться руху - легка прогулянка без навантаження.",
        bodyPart: "Відновлення всього тіла",
        shortBenefit: "Зменшує втому і дає м'язам час відновитися.",
        longBenefit: "Допомагає стабільно прогресувати без перетренування.",
      },
    ],
  },
  {
    key: "mon",
    short: "Пн",
    title: "Понеділок",
    subtitle: "Верх тіла + прес",
    minutes: 35,
    exercises: [
      {
        name: "Алмазні віджимання",
        type: "reps",
        sets: 3,
        reps: "12",
        restSeconds: 75,
        target: "3 x 12",
        description: "Долоні діамантом під центром грудей. Лікті веди приблизно 45° назад, тіло тримай прямою лінією.",
        bodyPart: "Трицепс, груди, передні дельти, корпус",
        shortBenefit: "Швидко розігріває жимові м'язи і вмикає корпус.",
        longBenefit: "Покращує силу віджимань і стабільність плечей.",
      },
      {
        name: "Floor press гантелями",
        type: "reps",
        sets: 3,
        reps: "8-10",
        restSeconds: 120,
        target: "3 x 8-10",
        description: "Лежачи на спині, коліна зігнуті. Лікті приблизно 45° до тіла, опускай до легкого торкання підлоги і тисни вгору.",
        bodyPart: "Груди, трицепс, плечі",
        shortBenefit: "Дає сильний контрольований жим без лавки.",
        longBenefit: "Будує силу грудей і рук з меншим ризиком для плечей.",
      },
      {
        name: "Щучі віджимання",
        type: "reps",
        sets: 3,
        reps: "8",
        restSeconds: 75,
        target: "3 x 8",
        description: "Таз вгору дашком, голова рухається до підлоги між долонями. Легше - менше піднімати таз; важче - стопи на стілець.",
        bodyPart: "Плечі, трицепс, верх грудей",
        shortBenefit: "Замінює жим над головою без обладнання.",
        longBenefit: "Підсилює плечі і контроль верхньої частини тіла.",
      },
      {
        name: "Горизонтальна тяга під столом",
        type: "reps",
        sets: 3,
        reps: "10",
        restSeconds: 90,
        target: "3 x 10",
        description: "Під міцним столом тримай тіло прямим і тягни груди до краю. Лопатки зводь разом.",
        bodyPart: "Широчайші, ромбоподібні, біцепс, задні дельти",
        shortBenefit: "Баланс до віджимань, щоб плечі не тягнуло вперед.",
        longBenefit: "Покращує поставу і силу спини.",
      },
      {
        name: "Планка на передпліччях",
        type: "time",
        sets: 3,
        seconds: 40,
        restSeconds: 45,
        target: "3 x 40 с",
        description: "Лікті під плечима, сідниці стиснуті, таз підкручений. Без провислого попереку.",
        bodyPart: "Корпус, прес, сідниці, плечі",
        shortBenefit: "Вмикає стабілізацію корпуса.",
        longBenefit: "Допомагає спині витримувати щоденні навантаження.",
      },
      {
        name: "Dead bug",
        type: "reps",
        sets: 3,
        reps: "10 / сторона",
        restSeconds: 45,
        target: "3 x 10 / сторона",
        description: "Поперек притиснутий до підлоги. Повільно опускай протилежні руку й ногу, не втрачаючи контроль.",
        bodyPart: "Глибокий прес і стабілізатори таза",
        shortBenefit: "Вчить тримати поперек стабільним.",
        longBenefit: "Зменшує ризик перевантаження попереку.",
      },
      {
        name: "Зважені дотики до стопи",
        type: "reps",
        sets: 3,
        reps: "10-12",
        restSeconds: 60,
        target: "3 x 10-12",
        description: "Гантеля 2.25 кг в руках над головою. Піднімай одну ногу і тягнись гантелею до стопи, потім міняй ноги.",
        bodyPart: "Прес, косі м'язи, згиначі стегна",
        shortBenefit: "Сильно вмикає прес без довгої статичної роботи.",
        longBenefit: "Покращує контроль корпуса і ротаційну силу.",
      },
    ],
  },
  {
    key: "tue",
    short: "Вт",
    title: "Вівторок",
    subtitle: "Ноги + сідниці",
    minutes: 30,
    exercises: [
      {
        name: "Болгарські присідання",
        type: "reps",
        sets: 3,
        reps: "10 / нога",
        restSeconds: 120,
        target: "3 x 10 / нога",
        description: "Задня стопа на стільці, стань приблизно за 1 м. Опускайся вертикально з легким нахилом вперед.",
        bodyPart: "Квадрицепс, сідниці, задня поверхня стегна",
        shortBenefit: "Дає сильне навантаження на ноги навіть з легкою вагою.",
        longBenefit: "Покращує силу ніг, баланс і стабільність колін.",
      },
      {
        name: "Румунська тяга з гантелями",
        type: "reps",
        sets: 3,
        reps: "12",
        restSeconds: 120,
        target: "3 x 12",
        description: "Коліна ледь зігнуті, таз назад, спина пряма. Відчуй розтяг задньої поверхні стегна і виштовхни таз вперед.",
        bodyPart: "Задня поверхня стегна, сідниці, спина",
        shortBenefit: "Вчить сильному руху тазом без округлення спини.",
        longBenefit: "Будує задній ланцюг, який важливий для спини і ходи.",
      },
      {
        name: "Випади на місці",
        type: "reps",
        sets: 3,
        reps: "12 / нога",
        restSeconds: 90,
        target: "3 x 12 / нога",
        description: "Гантелі в руках, спина пряма. Обидва коліна близько 90°, відштовхуйся п'ятою передньої ноги.",
        bodyPart: "Квадрицепс, сідниці, стабілізатори таза",
        shortBenefit: "Піднімає пульс і вмикає ноги по одній.",
        longBenefit: "Покращує контроль коліна і силу для сходів.",
      },
      {
        name: "Сідничний міст на одній нозі",
        type: "reps",
        sets: 3,
        reps: "12 / нога",
        restSeconds: 75,
        target: "3 x 12 / нога",
        description: "Піднімай таз силою сідниці до лінії коліно-таз-плечі. Пауза 1 с угорі.",
        bodyPart: "Сідниці, задня поверхня стегна, корпус",
        shortBenefit: "Вмикає сідниці без навантаження на коліна.",
        longBenefit: "Підтримує здорову механіку таза і попереку.",
      },
      {
        name: "Підйоми на носки зі сходинки",
        type: "reps",
        sets: 3,
        reps: "20",
        restSeconds: 60,
        target: "3 x 20",
        description: "Носки на край сходинки або порога, п'яти нижче краю, потім максимально вгору. Пауза 1 с.",
        bodyPart: "Литки, ахіллове сухожилля, стопи",
        shortBenefit: "Добре добиває нижню частину ніг.",
        longBenefit: "Покращує силу стопи, ходу і витривалість литок.",
      },
    ],
  },
  {
    key: "wed",
    short: "Ср",
    title: "Середа",
    subtitle: "Відпочинок / хода",
    minutes: 0,
    restDay: true,
    note: "Повний відпочинок від силового або легка хода 6-8 тис. кроків.",
    exercises: [
      {
        name: "Хода або відпочинок",
        type: "rest",
        target: "6-8 тис. кроків або повний відпочинок",
        description: "Без силового тренування. Якщо є енергія - легка хода, але без гонки.",
        bodyPart: "Відновлення, серце, суглоби",
        shortBenefit: "Допомагає розігнати кров і зняти втому після ніг.",
        longBenefit: "Підтримує стабільну активність без зайвого стресу.",
      },
    ],
  },
  {
    key: "thu",
    short: "Чт",
    title: "Четвер",
    subtitle: "Спина: тяга + прес",
    minutes: 35,
    exercises: [
      {
        name: "Тяга гантелями в нахилі",
        type: "reps",
        sets: 3,
        reps: "12",
        restSeconds: 90,
        target: "3 x 12",
        description: "Нахил близько 45°, спина пряма. Тягни до низу живота, лопатки разом, пауза 1 с.",
        bodyPart: "Широчайші, середина спини, біцепс",
        shortBenefit: "Вмикає спину і вирівнює перекіс від жимових днів.",
        longBenefit: "Покращує поставу і силу тяги.",
      },
      {
        name: "Вертикальна тяга гумкою або друга тяга",
        type: "reps",
        sets: 3,
        reps: "12",
        restSeconds: 90,
        target: "3 x 12",
        description: "З гумкою тягни зверху до грудей, лопатки вниз-разом. Без гумки - ще одна тяга під столом вузьким хватом.",
        bodyPart: "Широчайші, нижні трапеції, біцепс",
        shortBenefit: "Дає вертикальний напрям тяги для балансу плечей.",
        longBenefit: "Допомагає тримати плечі назад і вниз.",
      },
      {
        name: "Face pulls гумкою",
        type: "reps",
        sets: 2,
        reps: "15",
        restSeconds: 60,
        optional: true,
        target: "2 x 15, якщо є гумка",
        description: "Гумка на рівні обличчя. Тягни до лоба, розводячи лікті.",
        bodyPart: "Задні дельти, верх спини, ротаторна манжета",
        shortBenefit: "Розвантажує плечі після жимів.",
        longBenefit: "Підтримує поставу і здорові плечі.",
      },
      {
        name: "Bird dog",
        type: "reps",
        sets: 3,
        reps: "8 / сторона",
        restSeconds: 45,
        target: "3 x 8 / сторона",
        description: "Рачки, спина нейтральна. Витягни протилежні руку й ногу, утримай 8-10 с, таз не крути.",
        bodyPart: "Розгиначі спини, сідниці, глибокий корпус",
        shortBenefit: "Безпечніше навантажує спину, ніж супермен.",
        longBenefit: "Покращує стабільність попереку.",
      },
      {
        name: "Бічна планка",
        type: "time",
        sets: 3,
        seconds: 30,
        restSeconds: 45,
        target: "3 x 30 с / сторона",
        description: "Лікоть під плечем, підніми таз до прямої лінії голова-таз-стопи.",
        bodyPart: "Косі м'язи, корпус, плечі",
        shortBenefit: "Вмикає бокову стабільність корпуса.",
        longBenefit: "Допомагає контролювати таз і поперек.",
      },
      {
        name: "Зворотні скручування",
        type: "reps",
        sets: 3,
        reps: "15",
        restSeconds: 60,
        target: "3 x 15",
        description: "Підтягуй коліна і відривай таз силою преса. Опускай повільно 2-3 с, без маху ногами.",
        bodyPart: "Низ преса, глибокий корпус",
        shortBenefit: "Дає контрольований рух на прес без зайвого тиску на поперек.",
        longBenefit: "Покращує силу нижнього преса і контроль таза.",
      },
      {
        name: "Ротаційні knee tucks",
        type: "reps",
        sets: 3,
        reps: "12 / сторона",
        restSeconds: 60,
        target: "3 x 12 / сторона",
        description: "Лежачи з упором на руки, підтягни коліна до грудей і поверни вбік, потім через центр в інший бік.",
        bodyPart: "Косі м'язи, прес, ротація корпуса",
        shortBenefit: "Вмикає прес у ротації, не тільки прямо.",
        longBenefit: "Покращує контроль корпуса в поворотах.",
      },
    ],
  },
  {
    key: "fri",
    short: "Пт",
    title: "П'ятниця",
    subtitle: "Кругове, все тіло",
    minutes: 25,
    exercises: [
      {
        name: "Коло 1-4",
        type: "reps",
        sets: 4,
        reps: "4 кола",
        restSeconds: 90,
        target: "4 кола",
        description: "12 віджимань, 12 присідань, 10 тяг під столом, 10 крокувань на стілець / ногу, планка 30 с. Без пауз усередині кола, між колами 90 с.",
        bodyPart: "Все тіло: груди, спина, ноги, прес, серце",
        shortBenefit: "Швидко піднімає пульс і збирає все тіло в одну сесію.",
        longBenefit: "Покращує загальну витривалість і робочу форму.",
      },
    ],
  },
  {
    key: "sat",
    short: "Сб",
    title: "Субота",
    subtitle: "Активне відновлення",
    minutes: 0,
    restDay: true,
    note: "Хода 8-10 тис. кроків. На дефіциті калорій хода - головний спалювач жиру для сидячої роботи.",
    exercises: [
      {
        name: "Хода",
        type: "rest",
        target: "8-10 тис. кроків",
        description: "Спокійна активність без силового навантаження. Головне - набрати кроки і відновитися.",
        bodyPart: "Серце, ноги, відновлення",
        shortBenefit: "Підтримує рух без додаткової втоми.",
        longBenefit: "Допомагає контролювати вагу і витривалість.",
      },
    ],
  },
];

const state = {
  selectedDay: new Date().getDay(),
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
  dayStrip: document.querySelector("#dayStrip"),
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

function currentPlan() {
  return weeklyPlan[state.selectedDay];
}

function routine() {
  return currentPlan().exercises;
}

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
  if (currentPlan().minutes > 0) return currentPlan().minutes * 60;
  return routine().reduce((total, exercise) => total + (exercise.seconds || 0), 0);
}

function updateHome() {
  const stats = getStats();
  const plan = currentPlan();
  els.streakCount.textContent = stats.streak;
  els.soundToggle.textContent = state.soundOn ? "Sound On" : "Sound Off";
  els.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  els.exerciseTotal.textContent = plan.restDay ? "0" : routine().length;
  els.routineMinutes.textContent = plan.minutes;
  els.completedCount.textContent = stats.completed;
  els.todayLabel.textContent = `${plan.title} - ${plan.subtitle}`;
  els.todayNote.textContent = plan.restDay
    ? plan.note
    : stats.lastCompletedDate === localDateKey()
      ? "Сьогоднішню сесію вже завершено."
      : "Розминка 5 хв: оберти суглобів, 15 легких присідань, кілька легких рухів.";
  els.startWorkout.textContent = plan.restDay ? "Відмітити день" : "Почати";
  renderDayStrip();
}

function renderDayStrip() {
  els.dayStrip.innerHTML = "";
  weeklyPlan.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-button";
    button.textContent = day.short;
    button.setAttribute("aria-pressed", String(index === state.selectedDay));
    button.addEventListener("click", () => {
      state.selectedDay = index;
      updateHome();
      renderPlan();
    });
    els.dayStrip.appendChild(button);
  });
}

function renderPlan() {
  const plan = currentPlan();
  els.exerciseList.innerHTML = "";
  document.querySelector("#planTitle").textContent = `${plan.title}: ${plan.subtitle}`;
  routine().forEach((exercise, index) => {
    const item = document.createElement("article");
    item.className = "plan-item";
    item.innerHTML = `
      <span class="plan-number">${index + 1}</span>
      <div>
        <strong>${exercise.name}${exercise.optional ? " (опційно)" : ""}</strong>
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

function markDayComplete() {
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
  return stats;
}

function startWorkout() {
  if (currentPlan().restDay) {
    const stats = markDayComplete();
    els.finishStats.textContent = `${currentPlan().title}: день відновлення відмічено. Поточна серія: ${stats.streak}.`;
    launchCelebration();
    updateHome();
    showView("finishView");
    return;
  }

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
  return routine()[state.currentIndex];
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
    els.modeLabel.textContent = "Приготуйся";
    els.exerciseName.textContent = exercise.name;
    els.exerciseTarget.textContent = `Старт: ${exercise.target}`;
    els.coachLine.textContent = "Займи позицію. Наступний сигнал починає вправу.";
    els.skipStep.textContent = "Старт";
    beep(520, 0.06);
  } else if (state.phase === "exercise") {
    state.remaining = exercise.type === "time" ? exercise.seconds : 0;
    els.modeLabel.textContent = exercise.type === "time" ? "Таймер" : "Повтори";
    els.exerciseName.textContent = exercise.name;
    els.exerciseTarget.textContent = exercise.target;
    els.coachLine.textContent =
      exercise.type === "time"
        ? "Рухайся рівно і контрольовано. Таймер рахує за тебе."
        : "Зроби підходи у своєму темпі, потім натисни Готово.";
    els.skipStep.textContent = exercise.type === "time" ? "Пропустити" : "Готово";
    beep(760, 0.08);
    pulse(35);
  } else {
    state.remaining = exercise.restSeconds || 60;
    els.modeLabel.textContent = "Відпочинок";
    els.exerciseName.textContent = "Відпочинок";
    els.exerciseTarget.textContent = `${state.remaining} с перед наступним рухом`;
    els.coachLine.textContent = "Дихай, розслаб плечі і готуйся до наступної вправи.";
    els.skipStep.textContent = "Пропустити";
    beep(440, 0.07);
  }

  state.paused = false;
  els.pauseResume.textContent = "Пауза";
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
  const totalSteps = routine().length;
  const completedAmount =
    state.currentIndex + (state.phase === "exercise" ? 0.2 : state.phase === "rest" ? 0.75 : 0);
  const progress = Math.min(100, (completedAmount / totalSteps) * 100);
  const exercise = currentExercise();

  els.progressLabel.textContent = `${state.phase === "rest" ? "Відпочинок після" : "Вправа"} ${Math.min(
    state.currentIndex + 1,
    totalSteps
  )} з ${totalSteps}`;
  els.progressFill.style.width = `${progress}%`;
  els.timerValue.textContent =
    state.remaining > 0 ? formatTime(state.remaining) : exercise.target;
  els.timerHint.textContent =
    state.phase === "prep" ? "Готовність" : state.phase === "rest" ? "Пауза" : "Робота";
  document.querySelector(".exercise-card").classList.toggle("is-rest", state.phase === "rest");
  document
    .querySelector(".exercise-card")
    .classList.toggle("is-warning", state.remaining <= 3 && state.remaining > 0);
}

function updateNextUp() {
  const next = routine()[state.currentIndex + 1];
  const exercise = currentExercise();
  if (state.phase === "prep") {
    els.nextUp.textContent = "Далі: почати рух контрольовано.";
  } else if (state.phase === "exercise" && exercise.restSeconds > 0) {
    els.nextUp.textContent = `Далі: ${exercise.restSeconds} с відпочинку.`;
  } else if (next) {
    els.nextUp.textContent = `Далі: ${next.name}.`;
  } else {
    els.nextUp.textContent = "Далі: фініш.";
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
  const stats = markDayComplete();
  const minutes = Math.max(1, Math.round((Date.now() - state.workoutStartedAt) / 60000));
  els.finishStats.textContent = `${currentPlan().title}: ${routine().length} рухів завершено приблизно за ${minutes} хв. Поточна серія: ${stats.streak}.`;
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
  const exercise = routine()[index] || currentExercise();
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
  els.pauseResume.textContent = state.paused ? "Продовжити" : "Пауза";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

updateHome();
renderPlan();
