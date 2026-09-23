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

const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];
const TODAY_INDEX = new Date().getDay();
const BIRTHDAY_MONTH = 8;
const BIRTHDAY_DAY = 26;
const ICONS = {
  gear: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.04.04a2 2 0 0 1-2.83 2.83l-.04-.04A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6V20a2 2 0 0 1-4 0v-.06a1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.88.34l-.04.04a2 2 0 1 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H4a2 2 0 0 1 0-4h.06a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.88l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6V4a2 2 0 0 1 4 0v.06a1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.88-.34l.04-.04a2 2 0 1 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.4 9c.22.35.43.66.6 1H20a2 2 0 0 1 0 4h-.06a1.7 1.7 0 0 0-.54 1Z" /></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>',
  flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.4-1.3-4.5-3.2-6.5-.6 1.8-1.7 2.9-3.1 3.4.7-3.7-.9-6.8-4-9.1.2 3.3-1.9 5.1-3.1 7.1A8.2 8.2 0 0 0 5 15.2C5 19.1 7.8 22 12 22Z" /><path d="M12 18.5c1.5 0 2.6-1 2.6-2.5 0-1.1-.6-1.9-1.4-2.7-.3.9-.9 1.5-1.8 1.8.3-1.6-.3-2.9-1.5-4-.1 1.7-1.1 2.6-1.5 3.6a3.2 3.2 0 0 0-.3 1.3c0 1.5 1.1 2.5 2.6 2.5Z" /></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 9h18" /><path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="M8 13h.01" /><path d="M12 13h.01" /><path d="M16 13h.01" /><path d="M8 17h.01" /><path d="M12 17h.01" /></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7-11-7Z" /></svg>',
  list: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" /></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14" /><path d="M16 5v14" /></svg>',
  resume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7-11-7Z" /></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>',
  info: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17v-5" /><path d="M12 7h.01" /><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" /></svg>',
  cancel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>',
};
const DAY_COPY = {
  uk: {
    0: ["Нд", "Неділя", "Повний відпочинок"],
    1: ["Пн", "Понеділок", "Верх тіла + прес"],
    2: ["Вт", "Вівторок", "Ноги + сідниці"],
    3: ["Ср", "Середа", "Відпочинок / хода"],
    4: ["Чт", "Четвер", "Спина: тяга + прес"],
    5: ["Пт", "П'ятниця", "Кругове, все тіло"],
    6: ["Сб", "Субота", "Активне відновлення"],
  },
  en: {
    0: ["Sun", "Sunday", "Full rest"],
    1: ["Mon", "Monday", "Upper body + core"],
    2: ["Tue", "Tuesday", "Legs + glutes"],
    3: ["Wed", "Wednesday", "Rest / walk"],
    4: ["Thu", "Thursday", "Back: pull + core"],
    5: ["Fri", "Friday", "Full-body circuit"],
    6: ["Sat", "Saturday", "Active recovery"],
  },
};
const TEXT = {
  uk: {
    appIntro:
      "ТВІЙ ТИЖНЕВИЙ ПЛАН ВЖЕ РОЗКЛАДЕНИЙ ПО СЕКУНДАХ 🙂",
    streak: "днів серія",
    moves: "рухів",
    minutes: "хвилин",
    sessions: "сесій",
    start: "Почати",
    markDay: "Відмітити день",
    plan: "План",
    week: "Тиждень",
    todayAuto: "Сьогоднішній день обрано автоматично",
    lockedDay: "Цей день заблоковано, бо сьогодні інший план",
    selectedOverride: "День розблоковано вручну",
    birthdayTitle: "З днем народження, тату.",
    normalTitle: "План на сьогодні",
    warmup: "Useful tip: почни з 5 хв легкої розминки, щоб суглоби і пульс встигли підготуватися.",
    facts: [
      "Fun fact, 7-8 тисяч кроків на день часто дають більше користі, ніж рідкісні довгі тренування.",
      "Useful tip: білок у кожному прийомі їжі допомагає м'язам відновлюватися після тренування.",
      "Interesting fact, сон - це частина програми: сила і настрій часто падають раніше, ніж ти помітиш втому.",
      "Did you know, ікіґай - це не тільки велика мрія, а й маленька причина встати і зробити план сьогодні.",
      "Useful tip: повільний темп у вправі може зробити легку гантель значно важчою без додаткового обладнання.",
      "Interesting fact, м'язи ростуть не під час підходу, а коли тіло відновлюється після нього.",
      "Fun fact, регулярність перемагає ідеальність: коротка сесія сьогодні краща за ідеальну, яку відклали.",
    ],
    completedToday: "Сьогоднішню сесію вже завершено.",
    getReady: "Приготуйся",
    startTarget: "Старт",
    prepCoach: "Займи позицію. Наступний сигнал починає вправу.",
    timer: "Таймер",
    reps: "Повтори",
    timedCoach: "Рухайся рівно і контрольовано. Таймер рахує за тебе.",
    repsCoach: "Зроби підходи у своєму темпі, потім натисни Готово.",
    skip: "Пропустити",
    cancel: "Скасувати",
    done: "Готово",
    rest: "Відпочинок",
    restBefore: "с перед наступним рухом",
    restCoach: "Дихай, розслаб плечі і готуйся до наступної вправи.",
    restAfter: "Відпочинок після",
    pause: "Пауза",
    resume: "Продовжити",
    work: "Робота",
    readiness: "Готовність",
    exercise: "Вправа",
    of: "з",
    nextControlled: "Далі: почати рух контрольовано.",
    nextRest: "Далі:",
    secondsRest: "с відпочинку.",
    next: "Далі:",
    finish: "Далі: фініш.",
    dayComplete: "день відновлення відмічено. Поточна серія:",
    workoutComplete: "рухів завершено приблизно за",
    currentStreak: "Поточна серія:",
    minShort: "хв",
    details: "Деталі",
    planDay: "План дня",
    trains: "Працює",
    benefitNow: "Користь зараз",
    benefitLater: "Користь з часом",
    finishTitle: "Сесію завершено. Пишаюся тобою, тату.",
    home: "На головну",
    overrideEyebrow: "Заблокований день",
    overrideTitle: "Все одно зробити цей день?",
    overrideText:
      "HAPOD обирає сьогоднішній план автоматично. Якщо ти спеціально хочеш інший день, можна розблокувати його для цієї сесії.",
    no: "Ні",
    yes: "Так",
    settingsEyebrow: "Додаток",
    settings: "Налаштування",
    soundCues: "Звуки",
    soundText: "Біп на старті, під час відпочинку і на останніх секундах.",
    on: "Увімк.",
    off: "Вимк.",
    language: "Мова",
    theme: "Тема",
    dark: "Темна",
    light: "Світла",
    lockIcon: "🔒",
  },
  en: {
    appIntro:
      "YOUR WEEKLY PLAN IS NOW SCHEDULED DOWN TO THE SECONDS 🙂",
    streak: "day streak",
    moves: "moves",
    minutes: "minutes",
    sessions: "sessions",
    start: "Start",
    markDay: "Mark day",
    plan: "Plan",
    week: "Week",
    todayAuto: "Today is selected automatically",
    lockedDay: "This day is locked because today has a different plan",
    selectedOverride: "Day unlocked manually",
    birthdayTitle: "Happy Birthday, Dad.",
    normalTitle: "Today's Plan",
    warmup: "Useful tip: start with 5 easy minutes so your joints and heart rate have time to wake up.",
    facts: [
      "Fun fact, 7-8 thousand steps a day can matter more than one rare huge workout.",
      "Useful tip: protein with each meal helps muscles repair after training.",
      "Interesting fact, sleep is part of the plan: strength and mood often dip before you notice fatigue.",
      "Did you know, ikigai can be a small reason to get up and do today's plan, not only a huge life mission.",
      "Useful tip: slow tempo can make a light dumbbell feel much heavier without extra equipment.",
      "Interesting fact, muscles grow during recovery, not during the set itself.",
      "Fun fact, consistency beats perfection: a short session today beats a perfect one you postpone.",
    ],
    completedToday: "Today's session is already complete.",
    getReady: "Get ready",
    startTarget: "Start",
    prepCoach: "Set your position. The next cue starts the exercise.",
    timer: "Timer",
    reps: "Reps",
    timedCoach: "Move smoothly and stay controlled. The timer counts for you.",
    repsCoach: "Do the sets at your pace, then tap Done.",
    skip: "Skip",
    cancel: "Cancel",
    done: "Done",
    rest: "Rest",
    restBefore: "sec before the next move",
    restCoach: "Breathe, relax your shoulders, and get ready for the next exercise.",
    restAfter: "Rest after",
    pause: "Pause",
    resume: "Resume",
    work: "Work",
    readiness: "Ready",
    exercise: "Exercise",
    of: "of",
    nextControlled: "Next: start with control.",
    nextRest: "Next:",
    secondsRest: "sec rest.",
    next: "Next:",
    finish: "Next: finish.",
    dayComplete: "recovery day marked complete. Current streak:",
    workoutComplete: "moves finished in about",
    currentStreak: "Current streak:",
    minShort: "min",
    details: "Details",
    planDay: "Day plan",
    trains: "Trains",
    benefitNow: "Benefit now",
    benefitLater: "Benefit over time",
    finishTitle: "Session complete. Proud of you, Dad.",
    home: "Home",
    overrideEyebrow: "Locked day",
    overrideTitle: "Do this day anyway?",
    overrideText:
      "HAPOD selects today's plan automatically. If you intentionally want another day, you can unlock it for this session.",
    no: "No",
    yes: "Yes",
    settingsEyebrow: "App",
    settings: "Settings",
    soundCues: "Sound cues",
    soundText: "Beeps at start, rest, and final seconds.",
    on: "On",
    off: "Off",
    language: "Language",
    theme: "Theme",
    dark: "Dark",
    light: "Light",
    lockIcon: "🔒",
  },
};

const state = {
  selectedDay: TODAY_INDEX,
  currentIndex: 0,
  phase: "prep",
  remaining: 0,
  stepTotal: 0,
  paused: false,
  timerId: null,
  workoutStartedAt: null,
  lastViewBeforeInfo: "workoutView",
  soundOn: localStorage.getItem("hapodSound") === "true",
  language: localStorage.getItem("hapodLanguage") || "uk",
  theme: localStorage.getItem("hapodTheme") || "dark",
  unlockedDays: new Set(JSON.parse(localStorage.getItem("hapodUnlockedDays") || "[]")),
  audioContext: null,
};

const els = {
  views: document.querySelectorAll(".view"),
  streakCount: document.querySelector("#streakCount"),
  streakIcon: document.querySelector("#streakIcon"),
  heroMark: document.querySelector("#heroMark"),
  todayLabel: document.querySelector("#todayLabel"),
  exerciseTotal: document.querySelector("#exerciseTotal"),
  routineMinutes: document.querySelector("#routineMinutes"),
  completedCount: document.querySelector("#completedCount"),
  todayNote: document.querySelector("#todayNote"),
  soundToggle: document.querySelector("#soundToggle"),
  settingsOpen: document.querySelector("#settingsOpen"),
  settingsDialog: document.querySelector("#settingsDialog"),
  settingsClose: document.querySelector("#settingsClose"),
  overrideDialog: document.querySelector("#overrideDialog"),
  overrideNo: document.querySelector("#overrideNo"),
  overrideYes: document.querySelector("#overrideYes"),
  homeTitle: document.querySelector("#homeTitle"),
  movesLabel: document.querySelector("#movesLabel"),
  minutesLabel: document.querySelector("#minutesLabel"),
  sessionsLabel: document.querySelector("#sessionsLabel"),
  streakLabel: document.querySelector("#streakLabel"),
  weekLabel: document.querySelector("#weekLabel"),
  lockStatus: document.querySelector("#lockStatus"),
  settingsEyebrow: document.querySelector("#settingsEyebrow"),
  settingsTitle: document.querySelector("#settingsTitle"),
  soundSettingTitle: document.querySelector("#soundSettingTitle"),
  soundSettingText: document.querySelector("#soundSettingText"),
  languageSettingTitle: document.querySelector("#languageSettingTitle"),
  themeSettingTitle: document.querySelector("#themeSettingTitle"),
  langUk: document.querySelector("#langUk"),
  langEn: document.querySelector("#langEn"),
  themeDark: document.querySelector("#themeDark"),
  themeLight: document.querySelector("#themeLight"),
  overrideEyebrow: document.querySelector("#overrideEyebrow"),
  overrideTitle: document.querySelector("#overrideTitle"),
  overrideText: document.querySelector("#overrideText"),
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
  cancelWorkout: document.querySelector("#cancelWorkout"),
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

function t(key) {
  return TEXT[state.language][key];
}

function setButton(button, label, iconName) {
  button.classList.toggle("with-icon", Boolean(iconName));
  button.innerHTML = iconName ? `${ICONS[iconName]}<span>${label}</span>` : label;
}

function isSelectedToday() {
  return state.selectedDay === TODAY_INDEX;
}

function isSelectedUnlocked() {
  return isSelectedToday() || state.unlockedDays.has(state.selectedDay);
}

function saveUnlockedDays() {
  localStorage.setItem("hapodUnlockedDays", JSON.stringify([...state.unlockedDays]));
}

function relockSelectedDayIfNeeded() {
  if (!isSelectedToday() && state.unlockedDays.has(state.selectedDay)) {
    state.unlockedDays.delete(state.selectedDay);
    saveUnlockedDays();
  }
}

function dayCopy(index) {
  const [short, title, subtitle] = DAY_COPY[state.language][index];
  return { short, title, subtitle };
}

function isBirthdayToday(date = new Date()) {
  return date.getMonth() === BIRTHDAY_MONTH && date.getDate() === BIRTHDAY_DAY;
}

function dailyFact(date = new Date()) {
  const facts = t("facts");
  const daySeed = Math.floor(date.getTime() / 86400000);
  return facts[daySeed % facts.length];
}

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

function showDialog(dialog) {
  dialog.classList.add("active");
  dialog.setAttribute("aria-hidden", "false");
  if (dialog === els.settingsDialog) {
    els.settingsOpen.classList.add("is-open");
    els.settingsOpen.innerHTML = ICONS.x;
    els.settingsOpen.setAttribute("aria-label", "Close settings");
  }
}

function hideDialog(dialog) {
  dialog.classList.remove("active");
  dialog.setAttribute("aria-hidden", "true");
  if (dialog === els.settingsDialog) {
    els.settingsOpen.classList.remove("is-open");
    els.settingsOpen.innerHTML = ICONS.gear;
    els.settingsOpen.setAttribute("aria-label", "Settings");
  }
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
  document.documentElement.lang = state.language;
  document.documentElement.dataset.theme = state.theme;
  document.querySelector('meta[name="theme-color"]').setAttribute(
    "content",
    state.theme === "dark" ? "#081310" : "#14342b"
  );
  els.streakCount.textContent = stats.streak;
  els.streakIcon.innerHTML = ICONS.flame;
  els.heroMark.innerHTML = ICONS.calendar;
  if (!els.settingsDialog.classList.contains("active")) {
    els.settingsOpen.innerHTML = ICONS.gear;
  }
  els.streakLabel.textContent = t("streak");
  els.movesLabel.textContent = t("moves");
  els.minutesLabel.textContent = t("minutes");
  els.sessionsLabel.textContent = t("sessions");
  els.weekLabel.textContent = t("week");
  els.soundToggle.textContent = state.soundOn ? t("on") : t("off");
  els.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  els.langUk.setAttribute("aria-pressed", String(state.language === "uk"));
  els.langEn.setAttribute("aria-pressed", String(state.language === "en"));
  els.themeDark.setAttribute("aria-pressed", String(state.theme === "dark"));
  els.themeLight.setAttribute("aria-pressed", String(state.theme === "light"));
  els.exerciseTotal.textContent = plan.restDay ? "0" : routine().length;
  els.routineMinutes.textContent = plan.minutes;
  els.completedCount.textContent = stats.completed;
  const selectedCopy = dayCopy(state.selectedDay);
  els.todayLabel.textContent = `${selectedCopy.title} - ${selectedCopy.subtitle}`;
  els.homeTitle.textContent =
    isBirthdayToday() ? t("birthdayTitle") : t("normalTitle");
  document.querySelector(".hero > p").textContent = t("appIntro");
  els.todayNote.textContent = dailyFact();
  els.lockStatus.textContent = isSelectedToday()
    ? t("todayAuto")
    : isSelectedUnlocked()
      ? t("selectedOverride")
      : t("lockedDay");
  setButton(els.startWorkout, plan.restDay ? t("markDay") : t("start"), plan.restDay ? "check" : "play");
  setButton(els.viewPlan, t("plan"), "list");
  setButton(els.cancelWorkout, t("cancel"), "cancel");
  document.querySelector("#infoTitle").textContent = t("details");
  document.querySelector("#planView .eyebrow").textContent = t("planDay");
  document.querySelector("#infoView .eyebrow").textContent = t("details");
  document.querySelectorAll(".detail-group h4")[0].textContent = t("trains");
  document.querySelectorAll(".detail-group h4")[1].textContent = t("benefitNow");
  document.querySelectorAll(".detail-group h4")[2].textContent = t("benefitLater");
  document.querySelector("#finishTitle").textContent = t("finishTitle");
  setButton(els.finishHome, t("home"), "home");
  els.overrideEyebrow.textContent = t("overrideEyebrow");
  els.overrideTitle.textContent = t("overrideTitle");
  els.overrideText.textContent = t("overrideText");
  setButton(els.overrideNo, t("no"), "cancel");
  setButton(els.overrideYes, t("yes"), "check");
  els.settingsEyebrow.textContent = t("settingsEyebrow");
  els.settingsTitle.textContent = t("settings");
  els.soundSettingTitle.textContent = t("soundCues");
  els.soundSettingText.textContent = t("soundText");
  els.languageSettingTitle.textContent = t("language");
  els.themeSettingTitle.textContent = t("theme");
  els.themeDark.textContent = t("dark");
  els.themeLight.textContent = t("light");
  renderDayStrip();
}

function renderDayStrip() {
  els.dayStrip.innerHTML = "";
  WEEK_ORDER.forEach((index) => {
    const day = weeklyPlan[index];
    const copy = dayCopy(index);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-button";
    button.textContent = copy.short;
    button.setAttribute("aria-pressed", String(index === state.selectedDay));
    button.classList.toggle("is-today", index === TODAY_INDEX);
    button.classList.toggle("is-locked", index !== TODAY_INDEX && !state.unlockedDays.has(index));
    button.setAttribute(
      "aria-label",
      `${copy.title}. ${
        index === TODAY_INDEX
          ? t("todayAuto")
          : state.unlockedDays.has(index)
            ? t("selectedOverride")
            : t("lockedDay")
      }`
    );
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
  const copy = dayCopy(state.selectedDay);
  els.exerciseList.innerHTML = "";
  document.querySelector("#planTitle").textContent = `${copy.title}: ${copy.subtitle}`;
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
  if (!isSelectedUnlocked()) {
    showDialog(els.overrideDialog);
    return;
  }

  if (currentPlan().restDay) {
    const stats = markDayComplete();
    els.finishStats.textContent = `${dayCopy(state.selectedDay).title}: ${t("dayComplete")} ${stats.streak}.`;
    relockSelectedDayIfNeeded();
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
    state.stepTotal = 5;
    els.modeLabel.textContent = t("getReady");
    els.exerciseName.textContent = exercise.name;
    els.exerciseTarget.textContent = `${t("startTarget")}: ${exercise.target}`;
    els.coachLine.textContent = t("prepCoach");
    setButton(els.skipStep, t("startTarget"), "play");
    beep(520, 0.06);
  } else if (state.phase === "exercise") {
    state.remaining = exercise.type === "time" ? exercise.seconds : 0;
    state.stepTotal = exercise.type === "time" ? exercise.seconds : 0;
    els.modeLabel.textContent = exercise.type === "time" ? t("timer") : t("reps");
    els.exerciseName.textContent = exercise.name;
    els.exerciseTarget.textContent = exercise.target;
    els.coachLine.textContent =
      exercise.type === "time"
        ? t("timedCoach")
        : t("repsCoach");
    setButton(els.skipStep, exercise.type === "time" ? t("skip") : t("done"), exercise.type === "time" ? "next" : "check");
    beep(760, 0.08);
    pulse(35);
  } else {
    state.remaining = exercise.restSeconds || 60;
    state.stepTotal = state.remaining;
    els.modeLabel.textContent = t("rest");
    els.exerciseName.textContent = t("rest");
    els.exerciseTarget.textContent = `${state.remaining} ${t("restBefore")}`;
    els.coachLine.textContent = t("restCoach");
    setButton(els.skipStep, t("skip"), "next");
    beep(440, 0.07);
  }

  state.paused = false;
  setButton(els.pauseResume, t("pause"), "pause");
  setButton(els.showInfo, t("details"), "info");
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

  els.progressLabel.textContent = `${state.phase === "rest" ? t("restAfter") : t("exercise")} ${Math.min(
    state.currentIndex + 1,
    totalSteps
  )} ${t("of")} ${totalSteps}`;
  els.progressFill.style.width = `${progress}%`;
  els.timerValue.textContent =
    state.remaining > 0 ? formatTime(state.remaining) : exercise.target;
  els.timerFace.classList.toggle("has-long-value", els.timerValue.textContent.length > 7);
  els.timerHint.textContent =
    state.phase === "prep" ? t("readiness") : state.phase === "rest" ? t("rest") : t("work");
  const timedStep = state.stepTotal > 0;
  const elapsed = timedStep ? Math.max(0, state.stepTotal - state.remaining) : state.stepTotal;
  const timerProgress = timedStep ? Math.min(100, (elapsed / state.stepTotal) * 100) : 100;
  const warning = timedStep && state.remaining <= 3 && state.remaining > 0;
  els.timerFace.style.setProperty("--timer-progress", `${timerProgress}%`);
  els.timerFace.style.setProperty(
    "--timer-color",
    warning ? "var(--danger)" : state.phase === "rest" ? "var(--blue)" : "var(--leaf)"
  );
  document.querySelector(".exercise-card").classList.toggle("is-rest", state.phase === "rest");
  document
    .querySelector(".exercise-card")
    .classList.toggle("is-warning", warning);
}

function updateNextUp() {
  const next = routine()[state.currentIndex + 1];
  const exercise = currentExercise();
  if (state.phase === "prep") {
    els.nextUp.textContent = t("nextControlled");
  } else if (state.phase === "exercise" && exercise.restSeconds > 0) {
    els.nextUp.textContent = `${t("nextRest")} ${exercise.restSeconds} ${t("secondsRest")}`;
  } else if (next) {
    els.nextUp.textContent = `${t("next")} ${next.name}.`;
  } else {
    els.nextUp.textContent = t("finish");
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
  els.finishStats.textContent = `${dayCopy(state.selectedDay).title}: ${routine().length} ${t("workoutComplete")} ${minutes} ${t("minShort")}. ${t("currentStreak")} ${stats.streak}.`;
  relockSelectedDayIfNeeded();
  beep(820, 0.09);
  window.setTimeout(() => beep(980, 0.1), 110);
  pulse([30, 45, 30, 45, 60]);
  launchCelebration();
  updateHome();
  showView("finishView");
}

function cancelWorkout() {
  clearInterval(state.timerId);
  state.paused = false;
  state.remaining = 0;
  state.stepTotal = 0;
  relockSelectedDayIfNeeded();
  updateHome();
  renderPlan();
  showView("homeView");
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
els.cancelWorkout.addEventListener("click", cancelWorkout);
els.finishHome.addEventListener("click", () => showView("homeView"));
els.settingsOpen.addEventListener("click", () => {
  if (els.settingsDialog.classList.contains("active")) {
    hideDialog(els.settingsDialog);
  } else {
    showDialog(els.settingsDialog);
  }
});
els.settingsClose.addEventListener("click", () => hideDialog(els.settingsDialog));
els.settingsDialog.addEventListener("click", (event) => {
  if (event.target === els.settingsDialog) {
    hideDialog(els.settingsDialog);
  }
});
els.overrideNo.addEventListener("click", () => hideDialog(els.overrideDialog));
els.overrideYes.addEventListener("click", () => {
  state.unlockedDays.add(state.selectedDay);
  saveUnlockedDays();
  hideDialog(els.overrideDialog);
  updateHome();
  renderPlan();
  startWorkout();
});
els.overrideDialog.addEventListener("click", (event) => {
  if (event.target === els.overrideDialog) {
    hideDialog(els.overrideDialog);
  }
});
els.soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  localStorage.setItem("hapodSound", String(state.soundOn));
  updateHome();
  if (state.soundOn) {
    ensureAudio();
    beep(660, 0.07);
  }
});
els.langUk.addEventListener("click", () => {
  state.language = "uk";
  localStorage.setItem("hapodLanguage", state.language);
  updateHome();
  renderPlan();
});
els.langEn.addEventListener("click", () => {
  state.language = "en";
  localStorage.setItem("hapodLanguage", state.language);
  updateHome();
  renderPlan();
});
els.themeDark.addEventListener("click", () => {
  state.theme = "dark";
  localStorage.setItem("hapodTheme", state.theme);
  updateHome();
});
els.themeLight.addEventListener("click", () => {
  state.theme = "light";
  localStorage.setItem("hapodTheme", state.theme);
  updateHome();
});

els.pauseResume.addEventListener("click", () => {
  state.paused = !state.paused;
  setButton(els.pauseResume, state.paused ? t("resume") : t("pause"), state.paused ? "resume" : "pause");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

document.documentElement.dataset.theme = state.theme;
updateHome();
renderPlan();
