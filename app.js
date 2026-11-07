const APP_VERSION = "0.8.29";

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

const BEGINNER_WEEKLY_PLAN = [
  {
    key: "sun", short: "Нд", title: "Неділя", subtitle: "Відпочинок", minutes: 0, restDay: true,
    note: "Відпочинок або спокійна прогулянка. Сила росте і між тренуваннями.",
    exercises: [{ name: "Відпочинок", type: "rest", target: "Відновлення", description: "Дай м'язам відновитися. Легка хода - за бажанням.", bodyPart: "Все тіло", shortBenefit: "Зменшує втому.", longBenefit: "Допомагає тренуватися стабільно." }],
  },
  {
    key: "mon", short: "Пн", title: "Понеділок", subtitle: "Основи A", minutes: 25,
    exercises: [
      { name: "Віджимання", type: "reps", sets: 3, reps: "6-10", restSeconds: 75, target: "3 x 6-10", description: "Тримай тіло прямим, долоні трохи ширше плечей. Якщо звичайні віджимання важкі, роби їх від високої опори.", bodyPart: "Груди, трицепс, плечі, корпус", shortBenefit: "Тренує головні жимові м'язи.", longBenefit: "Будує базову силу верху тіла." },
      { name: "Присідання з вагою тіла", type: "reps", sets: 3, reps: "10-12", restSeconds: 75, target: "3 x 10-12", description: "Сідай тазом назад, коліна веди в напрямку носків, вставай через всю стопу.", bodyPart: "Квадрицепс, сідниці, корпус", shortBenefit: "Дає просте навантаження на ноги.", longBenefit: "Покращує силу для ходи, сходів і спорту." },
      { name: "Згинання рук з гантелями", type: "reps", sets: 3, reps: "10-12", restSeconds: 60, target: "3 x 10-12", description: "Лікті залишаються біля корпусу. Піднімай гантелі без розгойдування, опускай повільно.", bodyPart: "Біцепс, передпліччя", shortBenefit: "Вчить контролювати вагу руками.", longBenefit: "Підсилює хват і тягові рухи." },
      { name: "Dead bug для початківців", type: "reps", sets: 3, reps: "8 / сторона", restSeconds: 45, target: "3 x 8 / сторона", description: "Притисни поперек до підлоги та повільно опускай протилежні руку й ногу.", bodyPart: "Прес, стабілізатори таза", shortBenefit: "Вмикає корпус без скручування спини.", longBenefit: "Покращує контроль попереку." },
    ],
  },
  {
    key: "tue", short: "Вт", title: "Вівторок", subtitle: "Хода / відновлення", minutes: 0, restDay: true,
    note: "Легка хода 20-30 хвилин або повний відпочинок.",
    exercises: [{ name: "Легка хода", type: "rest", target: "20-30 хв", description: "Йди у комфортному темпі, в якому можеш говорити реченнями.", bodyPart: "Серце, ноги, відновлення", shortBenefit: "Розганяє кров без сильної втоми.", longBenefit: "Підтримує звичку щоденного руху." }],
  },
  {
    key: "wed", short: "Ср", title: "Середа", subtitle: "Основи B", minutes: 25,
    exercises: [
      { name: "Віджимання від опори", type: "reps", sets: 3, reps: "8-12", restSeconds: 75, target: "3 x 8-12", description: "Поклади руки на стіл, лавку або підвіконня. Чим вища опора, тим легше.", bodyPart: "Груди, трицепс, плечі", shortBenefit: "Дозволяє набрати якісні повтори без зриву техніки.", longBenefit: "Підводить до сильних віджимань від підлоги." },
      { name: "Тяга гантелі однією рукою", type: "reps", sets: 3, reps: "10 / рука", restSeconds: 75, target: "3 x 10 / рука", description: "Сприся вільною рукою на стілець. Тягни лікоть до стегна, не крути корпус.", bodyPart: "Спина, біцепс, задні дельти", shortBenefit: "Балансить віджимання тяговим рухом.", longBenefit: "Покращує поставу і силу спини." },
      { name: "Скручування на прес", type: "reps", sets: 2, reps: "8-12", restSeconds: 60, target: "2 x 8-12", description: "Піднімай лише лопатки, не тягни шию руками. Якщо поперек або шия болять, заміни на dead bug.", bodyPart: "Прямий м'яз живота", shortBenefit: "Дає просту роботу на прес.", longBenefit: "Покращує витривалість корпуса." },
      { name: "Згинання рук з гантелями", type: "reps", sets: 3, reps: "10-12", restSeconds: 60, target: "3 x 10-12", description: "Починай з легшої ваги, яку можеш опускати повільно та без розгойдування.", bodyPart: "Біцепс, передпліччя", shortBenefit: "Додає обсяг роботи для рук.", longBenefit: "Підсилює руки для щоденних задач." },
    ],
  },
  {
    key: "thu", short: "Чт", title: "Четвер", subtitle: "Відпочинок", minutes: 0, restDay: true,
    note: "Відновлення. За бажанням - легка прогулянка та розтяжка.",
    exercises: [{ name: "Відпочинок", type: "rest", target: "Відновлення", description: "Сон, їжа і пауза теж частина прогресу.", bodyPart: "Все тіло", shortBenefit: "Знімає накопичену втому.", longBenefit: "Допомагає уникати перевантаження." }],
  },
  {
    key: "fri", short: "Пт", title: "П'ятниця", subtitle: "Основи C", minutes: 25,
    exercises: [
      { name: "Віджимання", type: "reps", sets: 3, reps: "6-10", restSeconds: 75, target: "3 x 6-10", description: "Зупиняйся за 1-2 повтори до повної відмови, щоб техніка лишалася чистою.", bodyPart: "Груди, трицепс, плечі, корпус", shortBenefit: "Закріплює базовий жимовий рух.", longBenefit: "Поступово додає силу і витривалість." },
      { name: "Румунська тяга для початківців", type: "reps", sets: 3, reps: "10", restSeconds: 90, target: "3 x 10", description: "М'які коліна, таз назад, гантелі близько до ніг. Спина нейтральна весь рух.", bodyPart: "Сідниці, задня поверхня стегна, спина", shortBenefit: "Вчить безпечному руху тазом.", longBenefit: "Будує сильні ноги і задній ланцюг." },
      { name: "Коротка планка на передпліччях", type: "time", sets: 3, seconds: 25, restSeconds: 45, target: "3 x 25 с", description: "Лікті під плечима, сідниці стиснуті, не провисай у попереку.", bodyPart: "Прес, сідниці, плечі", shortBenefit: "Вмикає стабілізацію корпуса.", longBenefit: "Допомагає спині витримувати навантаження." },
      { name: "Згинання рук з гантелями (коротко)", type: "reps", sets: 2, reps: "12", restSeconds: 60, target: "2 x 12", description: "Працюй повільно, без розгону корпусом.", bodyPart: "Біцепс, передпліччя", shortBenefit: "Завершує роботу рук.", longBenefit: "Підтримує силу хвата та рук." },
    ],
  },
  {
    key: "sat", short: "Сб", title: "Субота", subtitle: "Активне відновлення", minutes: 0, restDay: true,
    note: "Легка прогулянка, улюблена активність або відпочинок.",
    exercises: [{ name: "Активне відновлення", type: "rest", target: "20+ хв легкої активності", description: "Обери рух, який не виснажує: прогулянку, велосипед або легку розтяжку.", bodyPart: "Серце, суглоби, відновлення", shortBenefit: "Допомагає тілу відчути себе краще.", longBenefit: "Робить звичку до руху простішою." }],
  },
];

const WORKOUT_PROGRAMS = {
  andrii: { week: weeklyPlan },
  beginner: { week: BEGINNER_WEEKLY_PLAN },
};

const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];
const PREP_SECONDS = 20;
// Add a localized entry here for every release. An optional image creates a visual update card.
const RELEASE_NOTES_VERSION = "0.8.29";
const RELEASE_NOTES = [
  {
    ukTitle: "Експериментальний журнал їжі",
    ukBody: "Додали позначку, щоб було зрозуміло: значення їжі та майбутні оцінки з фото можуть бути лише приблизними.",
    enTitle: "Experimental food log",
    enBody: "A new label makes it clear that food values and future photo estimates can only be approximate.",
  },
  {
    ukTitle: "Журнал їжі",
    ukBody: "Відстежуй калорії та макронутрієнти за день. Є швидкі корисні продукти і ручне додавання власних страв.",
    enTitle: "Food log",
    enBody: "Track daily calories and macros. Add a quick healthy staple or log your own food manually.",
  },
  {
    ukTitle: "Відстежуй вагу",
    ukBody: "Додали приватний журнал ваги з коротким трендом. Він працює офлайн і синхронізується між пристроями після входу.",
    enTitle: "Track your weight",
    enBody: "A private weight log with a simple trend is here. It works offline and syncs across devices after sign-in.",
  },
  {
    ukTitle: "Новий план для початківців",
    ukBody: "Додали простий триденний план: віджимання, присідання, прес, тяги й гантелі. Зміни план у Налаштуваннях.",
    enTitle: "New beginner plan",
    enBody: "A simple three-day plan is here: push-ups, squats, core work, rows, and dumbbells. Switch plans in Settings.",
  },
];
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
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>',
  scale: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 10a4 4 0 0 1 8 0" /><path d="m12 10 2-2" /></svg>',
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

const EXERCISE_EN = {
  "Повний відпочинок": {
    name: "Full rest",
    target: "0 strength exercises",
    description: "Let the body recover. If you really want movement, take an easy walk with no pressure.",
    bodyPart: "Whole-body recovery",
    shortBenefit: "Reduces fatigue and gives muscles time to rebuild.",
    longBenefit: "Helps you keep progressing without overtraining.",
  },
  "Алмазні віджимання": {
    name: "Diamond push-ups",
    target: "3 x 12",
    description: "Place your hands in a diamond under the center of your chest. Keep elbows about 45 degrees back and hold the body in one straight line.",
    bodyPart: "Triceps, chest, front delts, core",
    shortBenefit: "Quickly warms up pressing muscles and switches on the core.",
    longBenefit: "Improves push-up strength and shoulder stability.",
  },
  "Floor press гантелями": {
    name: "Dumbbell floor press",
    target: "3 x 8-10",
    description: "Lie on your back with knees bent. Keep elbows about 45 degrees from the body, lower until they lightly touch the floor, then press up.",
    bodyPart: "Chest, triceps, shoulders",
    shortBenefit: "Gives a strong controlled press without a bench.",
    longBenefit: "Builds chest and arm strength with less shoulder risk.",
  },
  "Щучі віджимання": {
    name: "Pike push-ups",
    target: "3 x 8",
    description: "Lift hips into a pike shape and move your head toward the floor between your hands. Easier: lower the hips. Harder: feet on a chair.",
    bodyPart: "Shoulders, triceps, upper chest",
    shortBenefit: "Replaces overhead pressing without equipment.",
    longBenefit: "Strengthens shoulders and upper-body control.",
  },
  "Горизонтальна тяга під столом": {
    name: "Under-table rows",
    target: "3 x 10",
    description: "Under a sturdy table, keep your body straight and pull your chest toward the edge. Squeeze shoulder blades together.",
    bodyPart: "Lats, rhomboids, biceps, rear delts",
    shortBenefit: "Balances push-ups so the shoulders do not drift forward.",
    longBenefit: "Improves posture and back strength.",
  },
  "Планка на передпліччях": {
    name: "Forearm plank",
    target: "3 x 40 sec",
    description: "Elbows under shoulders, glutes tight, pelvis slightly tucked. Do not let the lower back sag.",
    bodyPart: "Core, abs, glutes, shoulders",
    shortBenefit: "Turns on core stability.",
    longBenefit: "Helps your back handle daily load better.",
  },
  "Dead bug": {
    name: "Dead bug",
    target: "3 x 10 / side",
    description: "Keep your lower back pressed into the floor. Slowly lower the opposite arm and leg without losing control.",
    bodyPart: "Deep abs and hip stabilizers",
    shortBenefit: "Teaches the lower back to stay stable.",
    longBenefit: "Reduces the risk of lower-back overload.",
  },
  "Зважені дотики до стопи": {
    name: "Weighted toe touches",
    target: "3 x 10-12",
    description: "Hold the 2.25 kg dumbbell overhead. Lift one leg and reach the dumbbell toward the foot, then switch legs.",
    bodyPart: "Abs, obliques, hip flexors",
    shortBenefit: "Hits the abs hard without a long static hold.",
    longBenefit: "Improves core control and rotational strength.",
  },
  "Болгарські присідання": {
    name: "Bulgarian split squats",
    target: "3 x 10 / leg",
    description: "Place the back foot on a chair and stand about 1 meter away. Lower straight down with a slight forward lean.",
    bodyPart: "Quads, glutes, hamstrings",
    shortBenefit: "Loads the legs strongly even with light weight.",
    longBenefit: "Improves leg strength, balance, and knee stability.",
  },
  "Румунська тяга з гантелями": {
    name: "Dumbbell Romanian deadlift",
    target: "3 x 12",
    description: "Keep knees slightly bent, hips back, and back straight. Feel the hamstring stretch, then drive the hips forward.",
    bodyPart: "Hamstrings, glutes, back",
    shortBenefit: "Teaches a strong hip hinge without rounding the back.",
    longBenefit: "Builds the posterior chain, important for the back and walking.",
  },
  "Випади на місці": {
    name: "Stationary lunges",
    target: "3 x 12 / leg",
    description: "Hold dumbbells, keep your back tall. Both knees near 90 degrees, push through the front heel.",
    bodyPart: "Quads, glutes, hip stabilizers",
    shortBenefit: "Raises heart rate and trains one leg at a time.",
    longBenefit: "Improves knee control and stair strength.",
  },
  "Сідничний міст на одній нозі": {
    name: "Single-leg glute bridge",
    target: "3 x 12 / leg",
    description: "Lift the hips using the glute until knee, hip, and shoulder line up. Pause 1 second at the top.",
    bodyPart: "Glutes, hamstrings, core",
    shortBenefit: "Activates glutes without loading the knees.",
    longBenefit: "Supports healthier hip and lower-back mechanics.",
  },
  "Підйоми на носки зі сходинки": {
    name: "Step calf raises",
    target: "3 x 20",
    description: "Put toes on the edge of a step or threshold, drop heels below the edge, then rise as high as possible. Pause 1 second.",
    bodyPart: "Calves, Achilles tendon, feet",
    shortBenefit: "Finishes the lower legs well.",
    longBenefit: "Improves foot strength, walking, and calf endurance.",
  },
  "Хода або відпочинок": {
    name: "Walk or rest",
    target: "6-8k steps or full rest",
    description: "No strength training. If you have energy, take an easy walk, but do not turn it into a race.",
    bodyPart: "Recovery, heart, joints",
    shortBenefit: "Helps blood flow and reduces fatigue after leg day.",
    longBenefit: "Keeps activity consistent without extra stress.",
  },
  "Тяга гантелями в нахилі": {
    name: "Bent-over dumbbell rows",
    target: "3 x 12",
    description: "Hinge about 45 degrees with a straight back. Pull toward the lower stomach, squeeze shoulder blades, pause 1 second.",
    bodyPart: "Lats, mid-back, biceps",
    shortBenefit: "Turns on the back and balances pressing days.",
    longBenefit: "Improves posture and pulling strength.",
  },
  "Вертикальна тяга гумкою або друга тяга": {
    name: "Band pulldown or second row",
    target: "3 x 12",
    description: "With a band, pull from above to the chest, shoulder blades down and together. Without a band, do another narrow-grip under-table row.",
    bodyPart: "Lats, lower traps, biceps",
    shortBenefit: "Adds a vertical pull direction for shoulder balance.",
    longBenefit: "Helps keep shoulders back and down.",
  },
  "Face pulls гумкою": {
    name: "Band face pulls",
    target: "2 x 15, if you have a band",
    description: "Anchor the band at face height. Pull toward the forehead while spreading the elbows.",
    bodyPart: "Rear delts, upper back, rotator cuff",
    shortBenefit: "Relieves the shoulders after pressing.",
    longBenefit: "Supports posture and healthier shoulders.",
  },
  "Bird dog": {
    name: "Bird dog",
    target: "3 x 8 / side",
    description: "On hands and knees, keep the spine neutral. Extend opposite arm and leg, hold 8-10 seconds, and keep hips from twisting.",
    bodyPart: "Back extensors, glutes, deep core",
    shortBenefit: "Loads the back more safely than supermans.",
    longBenefit: "Improves lower-back stability.",
  },
  "Бічна планка": {
    name: "Side plank",
    target: "3 x 30 sec / side",
    description: "Elbow under shoulder, lift hips into a straight line from head to hips to feet.",
    bodyPart: "Obliques, core, shoulders",
    shortBenefit: "Turns on side-core stability.",
    longBenefit: "Helps control the hips and lower back.",
  },
  "Зворотні скручування": {
    name: "Reverse crunches",
    target: "3 x 15",
    description: "Pull knees in and lift the hips using the abs. Lower slowly for 2-3 seconds without swinging the legs.",
    bodyPart: "Lower abs, deep core",
    shortBenefit: "Gives controlled ab work without extra lower-back pressure.",
    longBenefit: "Improves lower-ab strength and hip control.",
  },
  "Ротаційні knee tucks": {
    name: "Rotational knee tucks",
    target: "3 x 12 / side",
    description: "Lie with support on your hands, pull knees to chest and rotate to one side, then move through center to the other side.",
    bodyPart: "Obliques, abs, core rotation",
    shortBenefit: "Trains the abs in rotation, not only straight forward.",
    longBenefit: "Improves core control during turns.",
  },
  "Коло 1-4": {
    name: "Circuit rounds 1-4",
    target: "4 rounds",
    description: "12 push-ups, 12 squats, 10 under-table rows, 10 chair step-ups per leg, 30 sec plank. No rest inside a round, 90 sec between rounds.",
    bodyPart: "Full body: chest, back, legs, core, heart",
    shortBenefit: "Raises heart rate fast and brings the whole body into one session.",
    longBenefit: "Improves general endurance and work capacity.",
  },
  "Хода": {
    name: "Walk",
    target: "8-10k steps",
    description: "Calm activity with no strength load. The main goal is to get steps and recover.",
    bodyPart: "Heart, legs, recovery",
    shortBenefit: "Keeps you moving without adding much fatigue.",
    longBenefit: "Helps with weight control and endurance.",
  },
  "Відпочинок": {
    name: "Rest",
    target: "Recovery",
    description: "Give your muscles time to recover. An easy walk is optional.",
    bodyPart: "Whole body",
    shortBenefit: "Reduces fatigue.",
    longBenefit: "Helps you train consistently.",
  },
  "Віджимання": {
    name: "Push-ups",
    target: "3 x 6-10",
    description: "Keep your body in a straight line with hands slightly wider than shoulders. If regular push-ups are hard, use a high surface.",
    bodyPart: "Chest, triceps, shoulders, core",
    shortBenefit: "Trains the main pressing muscles.",
    longBenefit: "Builds foundational upper-body strength.",
  },
  "Присідання з вагою тіла": {
    name: "Bodyweight squats",
    target: "3 x 10-12",
    description: "Sit the hips back, let knees follow the toes, and stand through the whole foot.",
    bodyPart: "Quads, glutes, core",
    shortBenefit: "Gives the legs a simple training stimulus.",
    longBenefit: "Builds strength for walking, stairs, and sport.",
  },
  "Згинання рук з гантелями": {
    name: "Dumbbell biceps curls",
    target: "3 x 10-12",
    description: "Keep elbows near your body. Lift without swinging and lower slowly.",
    bodyPart: "Biceps, forearms",
    shortBenefit: "Teaches controlled dumbbell work.",
    longBenefit: "Strengthens grip and pulling movements.",
  },
  "Згинання рук з гантелями (коротко)": {
    name: "Dumbbell biceps curls (short)",
    target: "2 x 12",
    description: "Move slowly without using the body to create momentum.",
    bodyPart: "Biceps, forearms",
    shortBenefit: "Finishes the arm work.",
    longBenefit: "Supports grip and arm strength.",
  },
  "Dead bug для початківців": {
    name: "Beginner dead bug",
    target: "3 x 8 / side",
    description: "Press the lower back to the floor and slowly lower the opposite arm and leg.",
    bodyPart: "Abs, hip stabilizers",
    shortBenefit: "Turns on the core without curling the spine.",
    longBenefit: "Improves lower-back control.",
  },
  "Легка хода": {
    name: "Easy walk",
    target: "20-30 min",
    description: "Walk at a comfortable pace where you can still speak in sentences.",
    bodyPart: "Heart, legs, recovery",
    shortBenefit: "Improves blood flow without hard fatigue.",
    longBenefit: "Supports a daily movement habit.",
  },
  "Віджимання від опори": {
    name: "Incline push-ups",
    target: "3 x 8-12",
    description: "Place hands on a table, bench, or countertop. A higher surface makes the movement easier.",
    bodyPart: "Chest, triceps, shoulders",
    shortBenefit: "Lets you build quality reps with good form.",
    longBenefit: "Builds toward strong floor push-ups.",
  },
  "Тяга гантелі однією рукою": {
    name: "One-arm dumbbell row",
    target: "3 x 10 / arm",
    description: "Support yourself with the free hand on a chair. Pull the elbow toward the hip without twisting the torso.",
    bodyPart: "Back, biceps, rear delts",
    shortBenefit: "Balances pushing with a pulling movement.",
    longBenefit: "Improves posture and back strength.",
  },
  "Скручування на прес": {
    name: "Ab crunches",
    target: "2 x 8-12",
    description: "Lift only the shoulder blades and do not pull the neck with your hands. Switch to dead bugs if your back or neck hurts.",
    bodyPart: "Rectus abdominis",
    shortBenefit: "Provides simple ab training.",
    longBenefit: "Improves core endurance.",
  },
  "Румунська тяга для початківців": {
    name: "Beginner Romanian deadlift",
    target: "3 x 10",
    description: "Keep soft knees, move hips back, and keep dumbbells close to the legs with a neutral back.",
    bodyPart: "Glutes, hamstrings, back",
    shortBenefit: "Teaches a safe hip hinge.",
    longBenefit: "Builds strong legs and posterior chain.",
  },
  "Коротка планка на передпліччях": {
    name: "Short forearm plank",
    target: "3 x 25 sec",
    description: "Keep elbows below shoulders, squeeze the glutes, and do not sag through the lower back.",
    bodyPart: "Abs, glutes, shoulders",
    shortBenefit: "Activates core stability.",
    longBenefit: "Helps the back handle daily loads.",
  },
  "Активне відновлення": {
    name: "Active recovery",
    target: "20+ min easy activity",
    description: "Choose movement that does not exhaust you: walking, cycling, or easy stretching.",
    bodyPart: "Heart, joints, recovery",
    shortBenefit: "Helps the body feel better.",
    longBenefit: "Makes a movement habit easier to sustain.",
  },
};

const EXERCISE_MEDIA = {
  "Алмазні віджимання": {
    src: "assets/exercises/diamond-push-ups.gif",
    uk: "Анімація алмазних віджимань",
    en: "Diamond push-up animation",
  },
  "Floor press гантелями": {
    src: "assets/exercises/dumbbell-floor-press.gif",
    uk: "Анімація жиму гантелей лежачи на підлозі",
    en: "Dumbbell floor press animation",
  },
  "Щучі віджимання": {
    src: "assets/exercises/pike-push-ups.gif",
    uk: "Анімація щучих віджимань",
    en: "Pike push-up animation",
  },
  "Планка на передпліччях": {
    src: "assets/exercises/forearm-plank.gif",
    uk: "Анімація планки на передпліччях",
    en: "Forearm plank animation",
  },
  "Dead bug": {
    src: "assets/exercises/dead-bug.gif",
    uk: "Анімація вправи dead bug",
    en: "Dead bug animation",
  },
  "Dead bug для початківців": {
    src: "assets/exercises/dead-bug.gif",
    uk: "Анімація вправи dead bug",
    en: "Beginner dead bug animation",
  },
  "Коротка планка на передпліччях": {
    src: "assets/exercises/forearm-plank.gif",
    uk: "Анімація планки на передпліччях",
    en: "Short forearm plank animation",
  },
  "Горизонтальна тяга під столом": {
    src: "assets/exercises/under-table-rows.gif?v=0.8.23",
    uk: "Анімація підтягувань під столом",
    en: "Under-table row animation",
  },
};

const FACT_SOURCES = {
  WHO: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
  CDC_ACTIVITY: "https://www.cdc.gov/physical-activity-basics/benefits/",
  CDC_SLEEP: "https://www.cdc.gov/sleep/about/index.html",
  ODPHP: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines/top-10-things-know",
  ISSN: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
};

// Kept locally so HAPOD remains useful offline. Each entry has a public-health or research source.
const DAILY_FACTS = [
  { uk: "Факт: ВООЗ радить дорослим 150-300 хвилин помірної аеробної активності на тиждень.", en: "Fact: WHO recommends 150-300 minutes of moderate aerobic activity per week for adults.", source: "WHO" },
  { uk: "Факт: Альтернатива від ВООЗ - 75-150 хвилин інтенсивної аеробної активності на тиждень.", en: "Fact: WHO's vigorous alternative is 75-150 minutes of aerobic activity per week.", source: "WHO" },
  { uk: "Факт: ВООЗ повідомляє, що 31% дорослих у світі не досягли рекомендованого рівня активності у 2022 році.", en: "Fact: WHO reports that 31% of adults worldwide did not meet activity recommendations in 2022.", source: "WHO" },
  { uk: "Факт: Це приблизно 1.8 мільярда дорослих людей з недостатньою активністю у 2022 році.", en: "Fact: That was about 1.8 billion insufficiently active adults in 2022.", source: "WHO" },
  { uk: "Факт: Якщо глобальна тенденція не зміниться, ВООЗ прогнозує 35% недостатньої активності серед дорослих до 2030 року.", en: "Fact: If the global trend continues, WHO projects adult inactivity could reach 35% by 2030.", source: "WHO" },
  { uk: "Факт: ВООЗ оцінює витрати систем охорони здоров'я від недостатньої активності у $300 млрд за 2020-2030 роки.", en: "Fact: WHO estimates physical inactivity could cost health systems about $300 billion from 2020 to 2030.", source: "WHO" },
  { uk: "Факт: 81% підлітків віком 11-17 років у світі не досягають рекомендацій ВООЗ щодо активності.", en: "Fact: 81% of adolescents aged 11-17 worldwide do not meet WHO activity recommendations.", source: "WHO" },
  { uk: "Факт: ВООЗ прагне зменшити недостатню активність на 15% до 2030 року відносно рівня 2010 року.", en: "Fact: WHO's global target is a 15% relative reduction in inactivity by 2030 versus 2010.", source: "WHO" },
  { uk: "Факт: У дорослих регулярна активність пов'язана зі зниженням ризику 8 видів раку за даними CDC.", en: "Fact: CDC says regular physical activity is linked to lower risk of 8 types of cancer in adults.", source: "CDC_ACTIVITY" },
  { uk: "Факт: За даними CDC, у дорослих до 60 років зниження ризику передчасної смерті вирівнювалося приблизно біля 8-10 тисяч кроків на день.", en: "Fact: CDC reports that, for adults under 60, premature-death risk leveled off around 8,000-10,000 steps per day.", source: "CDC_ACTIVITY" },
  { uk: "Факт: Для дорослих від 60 років цей показник у дослідженні CDC був приблизно 6-8 тисяч кроків на день.", en: "Fact: For adults 60 and older, the CDC-cited study found that level around 6,000-8,000 steps per day.", source: "CDC_ACTIVITY" },
  { uk: "Факт: CDC зазначає, що одна сесія помірної або інтенсивної активності може дати негайну користь для здоров'я.", en: "Fact: CDC says one session of moderate-to-vigorous activity can provide immediate health benefits.", source: "CDC_ACTIVITY" },
  { uk: "Факт: CDC вказує, що навіть деяка кількість помірної чи інтенсивної активності дає дорослим користь для здоров'я.", en: "Fact: CDC says adults gain some health benefits from any amount of moderate-to-vigorous activity.", source: "CDC_ACTIVITY" },
  { uk: "Факт: У 2024 році 26.4% дорослих США виконували і аеробні, і силові рекомендації у вільний час.", en: "Fact: In 2024, 26.4% of U.S. adults met both aerobic and muscle-strengthening guidelines in leisure time.", source: "ODPHP" },
  { uk: "Факт: Ціль Healthy People 2030 для цього показника - 29.7% дорослих.", en: "Fact: The Healthy People 2030 target for that measure is 29.7% of adults.", source: "ODPHP" },
  { uk: "Факт: У рекомендаціях США силові вправи для основних груп м'язів радять виконувати щонайменше 2 дні на тиждень.", en: "Fact: U.S. guidelines recommend muscle-strengthening work for major muscle groups on at least 2 days each week.", source: "ODPHP" },
  { uk: "Факт: У шкалі навантаження 0-10 помірна активність зазвичай відповідає 5-6 балам.", en: "Fact: On a 0-10 effort scale, moderate activity is usually a 5 or 6.", source: "ODPHP" },
  { uk: "Факт: У тій самій шкалі інтенсивна активність починається приблизно з 7-8 балів із 10.", en: "Fact: On the same scale, vigorous activity begins around 7 or 8 out of 10.", source: "ODPHP" },
  { uk: "Факт: У рекомендаціях США 2 хвилини помірної активності приблизно дорівнюють 1 хвилині інтенсивної.", en: "Fact: U.S. guidelines use roughly 2 minutes of moderate activity as equivalent to 1 minute of vigorous activity.", source: "ODPHP" },
  { uk: "Факт: Активність, що зміцнює м'язи, працює саме для м'язів, які ти навантажуєш - тому важлива різноманітність рухів.", en: "Fact: Muscle-strengthening adaptations are specific to the muscles used, which is why movement variety matters.", source: "ODPHP" },
  { uk: "Факт: CDC радить людям 18-60 років спати 7 або більше годин на добу.", en: "Fact: CDC recommends 7 or more hours of sleep per day for adults aged 18-60.", source: "CDC_SLEEP" },
  { uk: "Факт: CDC радить людям 61-64 років спати 7-9 годин на добу.", en: "Fact: CDC recommends 7-9 hours of sleep per day for adults aged 61-64.", source: "CDC_SLEEP" },
  { uk: "Факт: CDC радить людям від 65 років спати 7-8 годин на добу.", en: "Fact: CDC recommends 7-8 hours of sleep per day for adults aged 65 and older.", source: "CDC_SLEEP" },
  { uk: "Факт: У 2024 році 30.5% дорослих США в середньому спали менш ніж 7 годин на добу.", en: "Fact: In 2024, 30.5% of U.S. adults averaged less than 7 hours of sleep in a 24-hour period.", source: "CDC_SLEEP" },
  { uk: "Факт: Позиція ISSN називає 1.4-2.0 г білка на кг маси тіла на добу достатнім діапазоном для більшості людей, які тренуються.", en: "Fact: The ISSN position stand lists 1.4-2.0 g of protein per kg of body weight per day as sufficient for most exercising people.", source: "ISSN" },
  { uk: "Факт: Позиція ISSN наводить 20-40 г якісного білка як загальний абсолютний розмір порції після тренування.", en: "Fact: The ISSN position stand gives 20-40 g of high-quality protein as a general absolute serving range.", source: "ISSN" },
  { uk: "Факт: Позиція ISSN описує рівномірний розподіл білка кожні 3-4 години як практичний підхід протягом дня.", en: "Fact: The ISSN position stand describes spreading protein about every 3-4 hours as a practical daily approach.", source: "ISSN" },
  { uk: "Факт: У дослідженнях, оглянутих ISSN, анаболічний ефект тренування може тривати щонайменше 24 години.", en: "Fact: In research reviewed by ISSN, the anabolic effect of exercise can last at least 24 hours.", source: "ISSN" },
  { uk: "Факт: Рекомендації ВООЗ включають у фізичну активність не лише спорт, а й ходьбу, велосипед, роботу та домашні справи.", en: "Fact: WHO includes walking, cycling, work, and household chores in physical activity, not only sport.", source: "WHO" },
  { uk: "Факт: Для старших людей із поганою рухливістю ВООЗ радить вправи на баланс 3 або більше днів на тиждень.", en: "Fact: For older adults with poor mobility, WHO recommends balance-focused activity on 3 or more days per week.", source: "WHO" },
  { uk: "Факт: ВООЗ зазначає, що активність підтримує профілактику й контроль серцево-судинних хвороб, діабету та деяких видів раку.", en: "Fact: WHO says activity supports prevention and management of cardiovascular disease, diabetes, and some cancers.", source: "WHO" },
  { uk: "Факт: CDC пов'язує регулярну активність зі зниженням ризику деменції, депресії, хвороб серця, інсульту та діабету 2 типу.", en: "Fact: CDC links regular activity with lower risk of dementia, depression, heart disease, stroke, and type 2 diabetes.", source: "CDC_ACTIVITY" },
  { uk: "Факт: CDC називає кращу якість сну, менше тривоги та нижчий тиск серед негайних переваг однієї сесії активності.", en: "Fact: CDC lists better sleep quality, less anxiety, and lower blood pressure among immediate benefits of activity.", source: "CDC_ACTIVITY" },
  { uk: "Факт: За даними ВООЗ, недостатня активність частіше зростає після 60 років.", en: "Fact: WHO reports that physical inactivity generally rises after age 60.", source: "WHO" },
  { uk: "Факт: ВООЗ повідомляє, що у світі жінки менш активні за чоловіків у середньому на 5 відсоткових пунктів.", en: "Fact: WHO reports that women are less active than men worldwide by an average of 5 percentage points.", source: "WHO" },
  { uk: "Факт: ВООЗ пов'язує недостатню активність із підвищенням ризику смерті на 20-30% порівняно з достатньою активністю.", en: "Fact: WHO links insufficient activity with a 20-30% higher risk of death compared with sufficient activity.", source: "WHO" },
  { uk: "Факт: За даними ВООЗ, частка недостатньо активних дорослих зросла на 5 відсоткових пунктів між 2010 і 2022 роками.", en: "Fact: WHO reports adult inactivity rose by 5 percentage points between 2010 and 2022.", source: "WHO" },
  { uk: "Факт: ВООЗ оцінила щорічну вартість недостатньої активності для систем охорони здоров'я приблизно у $27 млрд.", en: "Fact: WHO estimates the annual health-system cost of physical inactivity at about $27 billion.", source: "WHO" },
  { uk: "Факт: Серед підлітків 11-17 років ВООЗ наводить 85% дівчат і 78% хлопців, які не виконують рекомендації щодо активності.", en: "Fact: For ages 11-17, WHO reports 85% of girls and 78% of boys do not meet activity recommendations.", source: "WHO" },
  { uk: "Факт: CDC показує простий шлях до 150 хвилин на тиждень: 30 хвилин активності 5 днів на тиждень.", en: "Fact: CDC gives a simple route to 150 weekly minutes: 30 minutes of activity on 5 days each week.", source: "CDC_ACTIVITY" },
  { uk: "Факт: CDC оцінює, що в США приблизно 110 тисяч смертей на рік можна було б запобігти, якби люди від 40 років додали 10 хвилин активності на день.", en: "Fact: CDC estimates that about 110,000 U.S. deaths per year could be prevented if adults 40+ added 10 minutes of activity a day.", source: "CDC_ACTIVITY" },
  { uk: "Факт: У згаданому CDC дослідженні люди, які виконували і аеробні, і силові рекомендації, були приблизно вдвічі менш схильні померти від грипу або пневмонії, ніж ті, хто не виконував жодної.", en: "Fact: In a CDC-cited study, adults meeting both aerobic and strength guidelines were about half as likely to die from flu or pneumonia as adults meeting neither.", source: "CDC_ACTIVITY" },
  { uk: "Факт: CDC радить вимикати електронні пристрої щонайменше за 30 хвилин до сну.", en: "Fact: CDC recommends turning off electronic devices at least 30 minutes before bedtime.", source: "CDC_SLEEP" },
  { uk: "Факт: CDC називає однаковий час відходу до сну і підйому щодня звичкою, що може покращити сон.", en: "Fact: CDC lists going to bed and getting up at the same time every day as a habit that can improve sleep.", source: "CDC_SLEEP" },
  { uk: "Факт: CDC зазначає, що достатній сон може покращити увагу й пам'ять для щоденних справ.", en: "Fact: CDC says getting enough sleep can improve attention and memory for daily activities.", source: "CDC_SLEEP" },
  { uk: "Факт: ВООЗ наголошує: будь-яка кількість фізичної активності краща, ніж її відсутність.", en: "Fact: WHO emphasizes that any amount of physical activity is better than none.", source: "WHO" },
];

const TEXT = {
  uk: {
    appTagline: "Твій щоденний помічник для тренувань",
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
    homeTitle: "План на сьогодні",
    factSource: "Джерело",
    warmup: "Useful tip: почни з 5 хв легкої розминки, щоб суглоби і пульс встигли підготуватися.",
    completedToday: "Сьогоднішню сесію вже завершено.",
    getReady: "Приготуйся",
    startTarget: "Старт",
    prepCoach: "Підготуй килимок або вагу, займи позицію. Можна натиснути Старт раніше.",
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
    finishTitle: "Сесію завершено. Гарна робота.",
    home: "На головну",
    overrideEyebrow: "Заблокований день",
    overrideTitle: "Все одно зробити цей день?",
    overrideText:
      "HAPOD обирає сьогоднішній план автоматично. Якщо ти спеціально хочеш інший день, можна розблокувати його лише для цієї сесії.",
    no: "Ні",
    yes: "Так",
    settingsEyebrow: "Додаток",
    settings: "Налаштування",
    version: "Версія",
    privacy: "Приватність",
    terms: "Умови",
    account: "Акаунт",
    accountTitle: "Збережи свій прогрес",
    accountGuest: "Увійди через Google, щоб зберігати серію та завершені сесії між пристроями.",
    continueGoogle: "Продовжити з Google",
    accountLoading: "Завантажуємо твій прогрес...",
    accountSynced: "Твій прогрес синхронізовано.",
    accountSessions: "Завершено сесій",
    accountBestStreak: "Найдовша серія",
    accountRecordDate: "Встановлено",
    accountNoRecord: "Ще без рекорду",
    weightOpen: "Відстежити вагу",
    weightHintEmpty: "Додай перше зважування, щоб бачити свій тренд.",
    weightHint: "Остання вага: {value}",
    weightEyebrow: "Прогрес",
    weightTitle: "Вага",
    weightCurrent: "Останнє зважування",
    weightChange: "Від першого запису",
    weightToday: "Вага сьогодні",
    weightSave: "Зберегти вагу",
    weightRemove: "Видалити сьогодні",
    weightUpdated: "Сьогоднішній запис можна змінити.",
    weightNew: "Один запис на день, щоб тренд був чесним.",
    weightPrivacy: "Вага зберігається на цьому пристрої. Після входу вона синхронізується з твоїм акаунтом.",
    weightNoData: "Додай перше зважування, щоб побачити тренд.",
    weightTrend: "Останні записи",
    nutritionOpen: "Журнал їжі",
    nutritionHintEmpty: "Додай їжу, щоб побачити денний підсумок.",
    nutritionHint: "Сьогодні: {value} kcal",
    nutritionEyebrow: "Харчування",
    nutritionTitle: "Журнал їжі",
    experimental: "Експеримент",
    nutritionCalories: "kcal сьогодні",
    nutritionProtein: "білки",
    nutritionCarbs: "вуглеводи",
    nutritionFat: "жири",
    quickFoods: "Швидко додати",
    foodLogEmpty: "Ще немає записів на сьогодні.",
    foodName: "Продукт або страва",
    foodCalories: "kcal",
    foodProtein: "Білки, г",
    foodCarbs: "Вуглеводи, г",
    foodFat: "Жири, г",
    foodSave: "Додати їжу",
    foodNote: "Швидкі продукти мають типові порції. Для точності перевіряй етикетку.",
    foodPrivacy: "Експеримент: записи та майбутні оцінки з фото можуть бути неточними. Записи харчування зберігаються на цьому пристрої, а після входу синхронізуються з твоїм акаунтом.",
    foodRemove: "Видалити",
    signOut: "Вийти",
    restartEyebrow: "Прогрес",
    restartTitle: "Почати прогрес заново?",
    restartText: "Це скине завершені сесії, поточну серію та записи ваги на всіх пристроях. Акаунт залишиться.",
    restart: "Почати заново",
    restartSettingTitle: "Почати прогрес заново",
    restartSettingText: "Скинути завершені сесії, серію та записи ваги.",
    cancelEyebrow: "Тренування",
    cancelTitle: "Завершити тренування?",
    cancelText: "Прогрес цієї сесії не буде збережено.",
    keepWorkout: "Продовжити",
    endWorkout: "Завершити",
    whatsNewEyebrow: "Оновлення",
    whatsNewTitle: "Що нового",
    whatsNewClose: "Зрозуміло",
    accountError: "Не вдалося підключити акаунт. Спробуй ще раз.",
    closeSettings: "Закрити налаштування",
    soundCues: "Звуки",
    soundText: "Біп на старті, під час відпочинку і на останніх секундах.",
    on: "Увімк.",
    off: "Вимк.",
    language: "Мова",
    workoutPlan: "План тренувань",
    workoutPlanText: "Обери план, який підходить саме тобі.",
    andriiPlan: "Оригінальний план Андрія",
    beginnerPlan: "Початківець: сила",
    theme: "Тема",
    dark: "Темна",
    light: "Світла",
    lockIcon: "🔒",
    optional: "опційно",
  },
  en: {
    appTagline: "Your daily workout companion",
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
    homeTitle: "Today's Plan",
    factSource: "Source",
    warmup: "Useful tip: start with 5 easy minutes so your joints and heart rate have time to wake up.",
    completedToday: "Today's session is already complete.",
    getReady: "Get ready",
    startTarget: "Start",
    prepCoach: "Set up the mat or weight, then get into position. You can tap Start early.",
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
    finishTitle: "Session complete. Good work.",
    home: "Home",
    overrideEyebrow: "Locked day",
    overrideTitle: "Do this day anyway?",
    overrideText:
      "HAPOD selects today's plan automatically. If you intentionally want another day, you can unlock it for this session only.",
    no: "No",
    yes: "Yes",
    settingsEyebrow: "App",
    settings: "Settings",
    version: "Version",
    privacy: "Privacy",
    terms: "Terms",
    account: "Account",
    accountTitle: "Save your progress",
    accountGuest: "Sign in with Google to keep your streak and completed sessions in sync across devices.",
    continueGoogle: "Continue with Google",
    accountLoading: "Loading your progress...",
    accountSynced: "Your progress is synced.",
    accountSessions: "Sessions completed",
    accountBestStreak: "Longest streak",
    accountRecordDate: "Set on",
    accountNoRecord: "No record yet",
    weightOpen: "Track weight",
    weightHintEmpty: "Add a first weigh-in to see your trend.",
    weightHint: "Latest weight: {value}",
    weightEyebrow: "Progress",
    weightTitle: "Weight",
    weightCurrent: "Latest weigh-in",
    weightChange: "Since first check-in",
    weightToday: "Today's weight",
    weightSave: "Save weigh-in",
    weightRemove: "Remove today",
    weightUpdated: "You can revise today's check-in.",
    weightNew: "One check-in a day keeps the trend honest.",
    weightPrivacy: "Weight stays on this device. After sign-in, it syncs with your account.",
    weightNoData: "Add a first weigh-in to see your trend.",
    weightTrend: "Recent check-ins",
    nutritionOpen: "Food log",
    nutritionHintEmpty: "Add food to see your daily total.",
    nutritionHint: "Today: {value} kcal",
    nutritionEyebrow: "Nutrition",
    nutritionTitle: "Food log",
    experimental: "Experimental",
    nutritionCalories: "kcal today",
    nutritionProtein: "protein",
    nutritionCarbs: "carbs",
    nutritionFat: "fat",
    quickFoods: "Quick add",
    foodLogEmpty: "No food logged today yet.",
    foodName: "Food or meal",
    foodCalories: "kcal",
    foodProtein: "Protein g",
    foodCarbs: "Carbs g",
    foodFat: "Fat g",
    foodSave: "Add food",
    foodNote: "Quick foods use typical servings. Check the label for accuracy.",
    foodPrivacy: "Experimental: food entries and future photo estimates may be inaccurate. Entries stay on this device and sync with your account after sign-in.",
    foodRemove: "Remove",
    signOut: "Sign out",
    restartEyebrow: "Progress",
    restartTitle: "Restart your progress?",
    restartText: "This resets completed sessions, your current streak, and weight check-ins on every device. Your account stays active.",
    restart: "Restart",
    restartSettingTitle: "Restart progress",
    restartSettingText: "Reset completed sessions, streaks, and weight check-ins.",
    cancelEyebrow: "Workout",
    cancelTitle: "End this workout?",
    cancelText: "Progress from this session will not be saved.",
    keepWorkout: "Keep going",
    endWorkout: "End workout",
    whatsNewEyebrow: "Update",
    whatsNewTitle: "What's new",
    whatsNewClose: "Got it",
    accountError: "We could not connect your account. Please try again.",
    closeSettings: "Close settings",
    soundCues: "Sound cues",
    soundText: "Beeps at start, rest, and final seconds.",
    on: "On",
    off: "Off",
    language: "Language",
    workoutPlan: "Workout plan",
    workoutPlanText: "Choose the plan that fits you.",
    andriiPlan: "Andrii's original plan",
    beginnerPlan: "Beginner strength",
    theme: "Theme",
    dark: "Dark",
    light: "Light",
    lockIcon: "🔒",
    optional: "optional",
  },
};

const state = {
  programId: localStorage.getItem("hapodWorkoutProgram") || "andrii",
  selectedDay: new Date().getDay(),
  currentIndex: 0,
  phase: "prep",
  remaining: 0,
  stepTotal: 0,
  paused: false,
  timerId: null,
  deadlineAt: null,
  wakeLock: null,
  workoutStartedAt: null,
  lastViewBeforeInfo: "workoutView",
  soundOn: localStorage.getItem("hapodSound") === "true",
  language: localStorage.getItem("hapodLanguage") || "uk",
  theme: localStorage.getItem("hapodTheme") || "dark",
  unlockedDays: new Set(),
  audioContext: null,
  dailyRefreshId: null,
  account: null,
  accountLoading: false,
  syncReady: false,
  accountError: "",
  weightUnit: localStorage.getItem("hapodWeightUnit") === "lb" ? "lb" : "kg",
};

state.unlockedDays = loadUnlockedDays(state.programId);

const els = {
  views: document.querySelectorAll(".view"),
  streakCount: document.querySelector("#streakCount"),
  streakIcon: document.querySelector("#streakIcon"),
  exerciseTotal: document.querySelector("#exerciseTotal"),
  routineMinutes: document.querySelector("#routineMinutes"),
  completedCount: document.querySelector("#completedCount"),
  todayNote: document.querySelector("#todayNote"),
  factSource: document.querySelector("#factSource"),
  appTagline: document.querySelector("#appTagline"),
  soundToggle: document.querySelector("#soundToggle"),
  settingsOpen: document.querySelector("#settingsOpen"),
  accountOpen: document.querySelector("#accountOpen"),
  accountDialog: document.querySelector("#accountDialog"),
  accountClose: document.querySelector("#accountClose"),
  accountGuest: document.querySelector("#accountGuest"),
  accountMember: document.querySelector("#accountMember"),
  accountGuestText: document.querySelector("#accountGuestText"),
  accountMemberText: document.querySelector("#accountMemberText"),
  accountSessions: document.querySelector("#accountSessions"),
  accountBestStreak: document.querySelector("#accountBestStreak"),
  accountSessionsLabel: document.querySelector("#accountSessionsLabel"),
  accountBestStreakLabel: document.querySelector("#accountBestStreakLabel"),
  accountBestStreakDate: document.querySelector("#accountBestStreakDate"),
  accountError: document.querySelector("#accountError"),
  accountEyebrow: document.querySelector("#accountEyebrow"),
  accountTitle: document.querySelector("#accountTitle"),
  googleSignIn: document.querySelector("#googleSignIn"),
  signOut: document.querySelector("#signOut"),
  accountPrivacyLink: document.querySelector("#accountPrivacyLink"),
  accountTermsLink: document.querySelector("#accountTermsLink"),
  weightOpen: document.querySelector("#weightOpen"),
  accountWeightHint: document.querySelector("#accountWeightHint"),
  nutritionOpen: document.querySelector("#nutritionOpen"),
  accountNutritionHint: document.querySelector("#accountNutritionHint"),
  nutritionDialog: document.querySelector("#nutritionDialog"),
  nutritionClose: document.querySelector("#nutritionClose"),
  nutritionEyebrow: document.querySelector("#nutritionEyebrow"),
  nutritionTitle: document.querySelector("#nutritionTitle"),
  nutritionExperimental: document.querySelector("#nutritionExperimental"),
  nutritionCalories: document.querySelector("#nutritionCalories"),
  nutritionProtein: document.querySelector("#nutritionProtein"),
  nutritionCarbs: document.querySelector("#nutritionCarbs"),
  nutritionFat: document.querySelector("#nutritionFat"),
  nutritionCaloriesLabel: document.querySelector("#nutritionCaloriesLabel"),
  nutritionProteinLabel: document.querySelector("#nutritionProteinLabel"),
  nutritionCarbsLabel: document.querySelector("#nutritionCarbsLabel"),
  nutritionFatLabel: document.querySelector("#nutritionFatLabel"),
  quickFoods: document.querySelector("#quickFoods"),
  foodLog: document.querySelector("#foodLog"),
  foodForm: document.querySelector("#foodForm"),
  foodName: document.querySelector("#foodName"),
  foodCalories: document.querySelector("#foodCalories"),
  foodProtein: document.querySelector("#foodProteinInput"),
  foodCarbs: document.querySelector("#foodCarbsInput"),
  foodFat: document.querySelector("#foodFatInput"),
  foodNameLabel: document.querySelector("#foodNameLabel"),
  foodCaloriesLabel: document.querySelector("#foodCaloriesLabel"),
  foodProteinLabel: document.querySelector("#foodProteinLabel"),
  foodCarbsLabel: document.querySelector("#foodCarbsLabel"),
  foodFatLabel: document.querySelector("#foodFatLabel"),
  foodFormNote: document.querySelector("#foodFormNote"),
  foodSave: document.querySelector("#foodSave"),
  foodPrivacy: document.querySelector("#foodPrivacy"),
  weightDialog: document.querySelector("#weightDialog"),
  weightClose: document.querySelector("#weightClose"),
  weightEyebrow: document.querySelector("#weightEyebrow"),
  weightTitle: document.querySelector("#weightTitle"),
  weightCurrent: document.querySelector("#weightCurrent"),
  weightCurrentLabel: document.querySelector("#weightCurrentLabel"),
  weightChange: document.querySelector("#weightChange"),
  weightChangeLabel: document.querySelector("#weightChangeLabel"),
  weightChart: document.querySelector("#weightChart"),
  weightForm: document.querySelector("#weightForm"),
  weightInput: document.querySelector("#weightInput"),
  weightInputLabel: document.querySelector("#weightInputLabel"),
  weightFormNote: document.querySelector("#weightFormNote"),
  unitKg: document.querySelector("#unitKg"),
  unitLb: document.querySelector("#unitLb"),
  weightSave: document.querySelector("#weightSave"),
  weightRemove: document.querySelector("#weightRemove"),
  weightPrivacy: document.querySelector("#weightPrivacy"),
  settingsDialog: document.querySelector("#settingsDialog"),
  settingsClose: document.querySelector("#settingsClose"),
  privacyLink: document.querySelector("#privacyLink"),
  termsLink: document.querySelector("#termsLink"),
  restartSettingTitle: document.querySelector("#restartSettingTitle"),
  restartSettingText: document.querySelector("#restartSettingText"),
  resetProgress: document.querySelector("#resetProgress"),
  restartDialog: document.querySelector("#restartDialog"),
  restartEyebrow: document.querySelector("#restartEyebrow"),
  restartTitle: document.querySelector("#restartTitle"),
  restartText: document.querySelector("#restartText"),
  restartNo: document.querySelector("#restartNo"),
  restartYes: document.querySelector("#restartYes"),
  cancelDialog: document.querySelector("#cancelDialog"),
  cancelEyebrow: document.querySelector("#cancelEyebrow"),
  cancelTitle: document.querySelector("#cancelTitle"),
  cancelText: document.querySelector("#cancelText"),
  cancelNo: document.querySelector("#cancelNo"),
  cancelYes: document.querySelector("#cancelYes"),
  whatsNewDialog: document.querySelector("#whatsNewDialog"),
  whatsNewEyebrow: document.querySelector("#whatsNewEyebrow"),
  whatsNewTitle: document.querySelector("#whatsNewTitle"),
  whatsNewClose: document.querySelector("#whatsNewClose"),
  releaseList: document.querySelector("#releaseList"),
  overrideDialog: document.querySelector("#overrideDialog"),
  overrideNo: document.querySelector("#overrideNo"),
  overrideYes: document.querySelector("#overrideYes"),
  homeTitle: document.querySelector("#homeTitle"),
  movesLabel: document.querySelector("#movesLabel"),
  minutesLabel: document.querySelector("#minutesLabel"),
  sessionsLabel: document.querySelector("#sessionsLabel"),
  streakLabel: document.querySelector("#streakLabel"),
  weekLabel: document.querySelector("#weekLabel"),
  weekIcon: document.querySelector("#weekIcon"),
  lockStatus: document.querySelector("#lockStatus"),
  daySectionCopy: document.querySelector("#daySectionCopy"),
  settingsEyebrow: document.querySelector("#settingsEyebrow"),
  appVersion: document.querySelector("#appVersion"),
  settingsTitle: document.querySelector("#settingsTitle"),
  soundSettingTitle: document.querySelector("#soundSettingTitle"),
  soundSettingText: document.querySelector("#soundSettingText"),
  languageSettingTitle: document.querySelector("#languageSettingTitle"),
  programSettingTitle: document.querySelector("#programSettingTitle"),
  programSettingText: document.querySelector("#programSettingText"),
  programSelect: document.querySelector("#programSelect"),
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
  exerciseDemo: document.querySelector("#exerciseDemo"),
  exerciseDemoImage: document.querySelector("#exerciseDemoImage"),
  infoDescription: document.querySelector("#infoDescription"),
  infoBodyPart: document.querySelector("#infoBodyPart"),
  infoShortBenefit: document.querySelector("#infoShortBenefit"),
  infoLongBenefit: document.querySelector("#infoLongBenefit"),
  celebration: document.querySelector("#celebration"),
  finishView: document.querySelector("#finishView"),
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

function activeWeek() {
  return WORKOUT_PROGRAMS[state.programId]?.week || weeklyPlan;
}

function unlockedDaysStorageKey(programId = state.programId) {
  return `hapodUnlockedDays:${programId}`;
}

function loadUnlockedDays(programId) {
  try {
    const stored = localStorage.getItem(unlockedDaysStorageKey(programId));
    const legacy = programId === "andrii" ? localStorage.getItem("hapodUnlockedDays") : null;
    return new Set(JSON.parse(stored || legacy || "[]"));
  } catch {
    return new Set();
  }
}

function changeWorkoutProgram(programId) {
  if (!WORKOUT_PROGRAMS[programId] || programId === state.programId) return;
  if (document.querySelector("#workoutView").classList.contains("active")) return;
  state.programId = programId;
  state.selectedDay = todayIndex();
  state.unlockedDays = loadUnlockedDays(programId);
  localStorage.setItem("hapodWorkoutProgram", programId);
  updateHome();
  renderPlan();
}

function isSelectedToday() {
  return state.selectedDay === todayIndex();
}

function isSelectedUnlocked() {
  return isSelectedToday() || state.unlockedDays.has(state.selectedDay);
}

function saveUnlockedDays() {
  localStorage.setItem(unlockedDaysStorageKey(), JSON.stringify([...state.unlockedDays]));
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

function todayIndex() {
  return new Date().getDay();
}

function exerciseCopy(exercise) {
  if (state.language !== "en" || !exercise) return exercise;
  return { ...exercise, ...(EXERCISE_EN[exercise.name] || {}) };
}

function dailyFact(date = new Date()) {
  const daySeed = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
  return DAILY_FACTS[daySeed % DAILY_FACTS.length];
}

function currentPlan() {
  return activeWeek()[state.selectedDay];
}

function routine() {
  return currentPlan().exercises;
}

const EMPTY_STATS = { completed: 0, streak: 0, lastCompletedDate: null, bestStreak: 0, bestStreakDate: null };

function hasActiveStreak(lastCompletedDate) {
  if (!lastCompletedDate) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return lastCompletedDate === localDateKey() || lastCompletedDate === localDateKey(yesterday);
}

function normalizeStats(stats) {
  const streak = Number.isSafeInteger(stats?.streak) && stats.streak >= 0 ? stats.streak : 0;
  const lastCompletedDate = typeof stats?.lastCompletedDate === "string" ? stats.lastCompletedDate : null;
  const savedBestStreak = Number.isSafeInteger(stats?.bestStreak) && stats.bestStreak >= 0 ? stats.bestStreak : 0;
  const bestStreak = Math.max(savedBestStreak, streak);
  const normalized = {
    completed: Number.isSafeInteger(stats?.completed) && stats.completed >= 0 ? stats.completed : 0,
    streak,
    lastCompletedDate,
    bestStreak,
    bestStreakDate:
      bestStreak === 0
        ? null
        : typeof stats?.bestStreakDate === "string"
          ? stats.bestStreakDate
          : lastCompletedDate,
  };

  if (normalized.streak > 0 && !hasActiveStreak(normalized.lastCompletedDate)) {
    normalized.streak = 0;
  }
  return normalized;
}

function getStats() {
  let stored = EMPTY_STATS;
  try {
    stored = JSON.parse(localStorage.getItem("hapodStats") || JSON.stringify(EMPTY_STATS));
  } catch {
    // A broken local value should never prevent the app from opening.
  }
  const rawStats = stored && typeof stored === "object" ? stored : EMPTY_STATS;
  const stats = normalizeStats(rawStats);
  if (
    stats.streak !== rawStats.streak ||
    stats.bestStreak !== rawStats.bestStreak ||
    stats.bestStreakDate !== rawStats.bestStreakDate
  ) {
    saveStats(stats);
    if (state.account && state.syncReady) {
      sendFirebaseEvent("hapod:normalize-stats", { stats });
    }
  }
  return stats;
}

function saveStats(stats) {
  localStorage.setItem("hapodStats", JSON.stringify(stats));
}

const WEIGHT_STORAGE_KEY = "hapodWeightEntries";
const KG_PER_LB = 0.45359237;

function normalizeWeightEntries(entries) {
  const byDate = new Map();
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const kilograms = Number(entry?.kilograms);
    const date = typeof entry?.date === "string" ? entry.date : "";
    const updatedAt = Number(entry?.updatedAt) || 0;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(kilograms) || kilograms < 20 || kilograms > 500) return;
    const current = byDate.get(date);
    if (!current || updatedAt >= current.updatedAt) {
      byDate.set(date, { date, kilograms: Math.round(kilograms * 10) / 10, updatedAt });
    }
  });
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date)).slice(-365);
}

function getWeightEntries() {
  try {
    return normalizeWeightEntries(JSON.parse(localStorage.getItem(WEIGHT_STORAGE_KEY) || "[]"));
  } catch {
    return [];
  }
}

function saveWeightEntries(entries) {
  localStorage.setItem(WEIGHT_STORAGE_KEY, JSON.stringify(normalizeWeightEntries(entries)));
}

function mergeWeightEntries(localEntries, remoteEntries) {
  return normalizeWeightEntries([...(remoteEntries || []), ...(localEntries || [])]);
}

function weightInUnit(kilograms) {
  return state.weightUnit === "lb" ? kilograms / KG_PER_LB : kilograms;
}

function kilogramsFromInput(value) {
  const weight = Number(value);
  if (!Number.isFinite(weight)) return null;
  return state.weightUnit === "lb" ? weight * KG_PER_LB : weight;
}

function formatWeight(kilograms, maximumFractionDigits = 1) {
  if (!Number.isFinite(kilograms)) return "--";
  const unit = state.weightUnit;
  const value = weightInUnit(kilograms);
  return `${new Intl.NumberFormat(state.language === "uk" ? "uk-UA" : "en-US", {
    maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(value)} ${unit}`;
}

function weightDifference(current, first) {
  if (!Number.isFinite(current) || !Number.isFinite(first)) return "--";
  const difference = weightInUnit(current - first);
  if (Math.abs(difference) < 0.05) return `0 ${state.weightUnit}`;
  const rounded = new Intl.NumberFormat(state.language === "uk" ? "uk-UA" : "en-US", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
    signDisplay: "always",
  }).format(difference);
  return `${rounded} ${state.weightUnit}`;
}

function persistWeightEntries(entries) {
  const normalized = normalizeWeightEntries(entries);
  saveWeightEntries(normalized);
  if (state.account && state.syncReady) {
    sendFirebaseEvent("hapod:sync-weight-entries", { entries: normalized });
  }
  return normalized;
}

const FOOD_STORAGE_KEY = "hapodFoodEntries";
const QUICK_FOODS = [
  { uk: "Яйце", en: "Egg", calories: 78, protein: 6.3, carbs: 0.6, fat: 5.3 },
  { uk: "Вівсянка 40 г", en: "Oats 40 g", calories: 150, protein: 5, carbs: 27, fat: 3 },
  { uk: "Куряче філе 100 г", en: "Chicken breast 100 g", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { uk: "Банан", en: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
];

function normalizeFoodEntries(entries) {
  const byId = new Map();
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const id = typeof entry?.id === "string" ? entry.id.slice(0, 80) : "";
    const date = typeof entry?.date === "string" ? entry.date : "";
    const name = typeof entry?.name === "string" ? entry.name.trim().slice(0, 48) : "";
    const calories = Number(entry?.calories);
    const protein = Math.max(0, Number(entry?.protein) || 0);
    const carbs = Math.max(0, Number(entry?.carbs) || 0);
    const fat = Math.max(0, Number(entry?.fat) || 0);
    const updatedAt = Number(entry?.updatedAt) || 0;
    if (!id || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !name || !Number.isFinite(calories) || calories < 0 || calories > 10000 || protein > 1000 || carbs > 1000 || fat > 1000) return;
    const current = byId.get(id);
    if (!current || updatedAt >= current.updatedAt) byId.set(id, { id, date, name, calories, protein, carbs, fat, updatedAt });
  });
  return [...byId.values()].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 500);
}

function getFoodEntries() {
  try { return normalizeFoodEntries(JSON.parse(localStorage.getItem(FOOD_STORAGE_KEY) || "[]")); } catch { return []; }
}

function saveFoodEntries(entries) { localStorage.setItem(FOOD_STORAGE_KEY, JSON.stringify(normalizeFoodEntries(entries))); }

function persistFoodEntries(entries) {
  const normalized = normalizeFoodEntries(entries);
  saveFoodEntries(normalized);
  if (state.account && state.syncReady) sendFirebaseEvent("hapod:sync-food-entries", { entries: normalized });
  return normalized;
}

function foodId() { return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`; }

function dateRank(dateKey) {
  return typeof dateKey === "string" ? dateKey : "";
}

function mergeAccountStats(localStats, remoteStats) {
  const local = normalizeStats(localStats);
  const remote = normalizeStats(remoteStats);
  const localIsNewer = dateRank(local.lastCompletedDate) > dateRank(remote.lastCompletedDate);
  const remoteIsNewer = dateRank(remote.lastCompletedDate) > dateRank(local.lastCompletedDate);
  const primary = remoteIsNewer ? remote : local;
  const other = remoteIsNewer ? local : remote;
  const localHasUnsyncedCompletion = localIsNewer || (
    local.lastCompletedDate === remote.lastCompletedDate &&
    (local.streak > remote.streak || local.completed > remote.completed)
  );
  const localHasBest = local.bestStreak > remote.bestStreak;

  return {
    stats: {
      ...primary,
      completed: Math.max(local.completed, remote.completed),
      streak: localIsNewer || (!remoteIsNewer && local.streak > remote.streak)
        ? local.streak
        : primary.streak,
      bestStreak: Math.max(local.bestStreak, remote.bestStreak),
      bestStreakDate: localHasBest
        ? local.bestStreakDate
        : remote.bestStreakDate || primary.bestStreakDate || other.bestStreakDate,
    },
    shouldRepairRemote: localHasUnsyncedCompletion || localHasBest,
  };
}

function resetLocalProgress() {
  stopCountdown();
  releaseWakeLock();
  state.paused = false;
  state.remaining = 0;
  state.stepTotal = 0;
  state.unlockedDays.clear();
  saveUnlockedDays();
  saveStats(EMPTY_STATS);
  saveWeightEntries([]);
  saveFoodEntries([]);
  state.selectedDay = todayIndex();
}

function sendFirebaseEvent(name, detail = {}) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function scheduleDailyRefresh() {
  clearTimeout(state.dailyRefreshId);
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
  state.dailyRefreshId = window.setTimeout(() => {
    state.selectedDay = todayIndex();
    updateHome();
    renderPlan();
    scheduleDailyRefresh();
  }, nextMidnight.getTime() - now.getTime());
}

function showView(id) {
  els.views.forEach((view) => view.classList.toggle("active", view.id === id));
}

const dialogScroll = { locked: false, y: 0 };

function lockDocumentScroll() {
  if (dialogScroll.locked) return;
  dialogScroll.y = window.scrollY;
  dialogScroll.locked = true;
  document.documentElement.classList.add("dialog-open");
  document.body.classList.add("dialog-open");
  document.body.style.top = `-${dialogScroll.y}px`;
}

function syncDialogScrollLock() {
  const hasOpenDialog = document.querySelector(".dialog-layer.active");
  if (hasOpenDialog) {
    lockDocumentScroll();
    return;
  }
  if (!dialogScroll.locked) return;
  document.documentElement.classList.remove("dialog-open");
  document.body.classList.remove("dialog-open");
  document.body.style.top = "";
  window.scrollTo(0, dialogScroll.y);
  dialogScroll.locked = false;
}

function showDialog(dialog) {
  if (dialog === els.settingsDialog) {
    openSettingsDrawer();
    return;
  }
  dialog.classList.add("active");
  dialog.setAttribute("aria-hidden", "false");
  syncDialogScrollLock();
}

function openSettingsDrawer() {
  els.settingsDialog.classList.remove("is-closing");
  els.settingsDialog.classList.add("active");
  els.settingsDialog.setAttribute("aria-hidden", "false");
  els.settingsOpen.classList.add("is-hidden");
  els.settingsOpen.setAttribute("aria-hidden", "true");
  syncDialogScrollLock();
}

function openSettings() {
  if (!els.settingsDialog.classList.contains("active")) showDialog(els.settingsDialog);
}

function openAccount() {
  showDialog(els.accountDialog);
}

window.HAPOD = { openSettings, openAccount };

function hideDialog(dialog) {
  if (dialog === els.settingsDialog) {
    closeSettingsDrawer();
    return;
  }
  dialog.classList.remove("active");
  dialog.setAttribute("aria-hidden", "true");
  syncDialogScrollLock();
}

function closeSettingsDrawer() {
  els.settingsDialog.classList.add("is-closing");
  els.settingsOpen.classList.remove("is-hidden");
  els.settingsOpen.removeAttribute("aria-hidden");
  els.settingsOpen.setAttribute("aria-label", t("settings"));
  window.setTimeout(() => {
    els.settingsDialog.classList.remove("active", "is-closing");
    els.settingsDialog.setAttribute("aria-hidden", "true");
    syncDialogScrollLock();
  }, 360);
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
  els.accountOpen.innerHTML = ICONS.user;
  els.accountOpen.setAttribute("aria-label", state.account ? `${t("account")}: ${state.account.displayName || state.account.email || ""}` : t("account"));
  els.appTagline.textContent = t("appTagline");
  els.streakIcon.innerHTML = ICONS.flame;
  if (!els.settingsDialog.classList.contains("active")) {
    els.settingsOpen.innerHTML = ICONS.gear;
  }
  els.streakLabel.textContent = t("streak");
  els.movesLabel.textContent = t("moves");
  els.minutesLabel.textContent = t("minutes");
  els.sessionsLabel.textContent = t("sessions");
  els.weekLabel.textContent = t("week");
  els.weekIcon.innerHTML = ICONS.calendar;
  els.soundToggle.textContent = state.soundOn ? t("on") : t("off");
  els.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  els.langUk.setAttribute("aria-pressed", String(state.language === "uk"));
  els.langEn.setAttribute("aria-pressed", String(state.language === "en"));
  els.themeDark.setAttribute("aria-pressed", String(state.theme === "dark"));
  els.themeLight.setAttribute("aria-pressed", String(state.theme === "light"));
  els.exerciseTotal.textContent = plan.restDay ? "0" : routine().length;
  els.routineMinutes.textContent = plan.minutes;
  els.completedCount.textContent = stats.completed;
  els.homeTitle.textContent = "HAPOD";
  const fact = dailyFact();
  els.todayNote.textContent = fact[state.language];
  els.factSource.textContent = `${t("factSource")}: ${fact.source}`;
  els.factSource.href = FACT_SOURCES[fact.source];
  const hasDayStatus = !isSelectedToday();
  els.lockStatus.textContent = hasDayStatus
    ? isSelectedUnlocked()
      ? t("selectedOverride")
      : t("lockedDay")
    : "";
  els.daySectionCopy.classList.toggle("has-status", hasDayStatus);
  setButton(els.startWorkout, plan.restDay ? t("markDay") : t("start"), plan.restDay ? "check" : "play");
  setButton(els.viewPlan, t("homeTitle"), "list");
  setButton(els.cancelWorkout, t("cancel"), "cancel");
  document.querySelector("#infoTitle").textContent = t("details");
  document.querySelector("#planView .eyebrow").textContent = t("planDay");
  document.querySelector("#infoView .eyebrow").textContent = t("details");
  document.querySelectorAll(".detail-group h4")[0].textContent = t("trains");
  document.querySelectorAll(".detail-group h4")[1].textContent = t("benefitNow");
  document.querySelectorAll(".detail-group h4")[2].textContent = t("benefitLater");
  document.querySelector("#finishView .eyebrow").textContent = t("done");
  document.querySelector("#finishTitle").textContent = t("finishTitle");
  setButton(els.finishHome, t("home"), "home");
  els.overrideEyebrow.textContent = t("overrideEyebrow");
  els.overrideTitle.textContent = t("overrideTitle");
  els.overrideText.textContent = t("overrideText");
  setButton(els.overrideNo, t("no"), "cancel");
  setButton(els.overrideYes, t("yes"), "check");
  els.settingsEyebrow.textContent = t("settingsEyebrow");
  els.settingsTitle.textContent = t("settings");
  els.appVersion.textContent = `${t("version")} ${APP_VERSION}`;
  els.privacyLink.textContent = t("privacy");
  els.termsLink.textContent = t("terms");
  els.soundSettingTitle.textContent = t("soundCues");
  els.soundSettingText.textContent = t("soundText");
  els.languageSettingTitle.textContent = t("language");
  els.programSettingTitle.textContent = t("workoutPlan");
  els.programSettingText.textContent = t("workoutPlanText");
  els.programSelect.value = state.programId;
  els.programSelect.options[0].textContent = t("andriiPlan");
  els.programSelect.options[1].textContent = t("beginnerPlan");
  els.themeSettingTitle.textContent = t("theme");
  els.themeDark.textContent = t("dark");
  els.themeLight.textContent = t("light");
  els.restartSettingTitle.textContent = t("restartSettingTitle");
  els.restartSettingText.textContent = t("restartSettingText");
  els.resetProgress.textContent = t("restart");
  updateAccountUI();
  if (els.whatsNewDialog.classList.contains("active")) renderWhatsNew();
  refreshWorkoutText();
  renderDayStrip();
}

function updateAccountUI() {
  els.accountEyebrow.textContent = t("account");
  const accountName = state.account?.displayName?.trim() || state.account?.email?.split("@")[0];
  els.accountTitle.textContent = accountName || t("accountTitle");
  els.accountGuestText.textContent = t("accountGuest");
  els.accountMemberText.textContent = state.accountLoading
    ? t("accountLoading")
    : state.account
      ? `${t("accountSynced")} ${state.account.displayName || state.account.email || ""}`.trim()
      : "";
  const stats = getStats();
  els.accountSessions.textContent = stats.completed;
  els.accountBestStreak.textContent = stats.bestStreak;
  els.accountSessionsLabel.textContent = t("accountSessions");
  els.accountBestStreakLabel.textContent = t("accountBestStreak");
  els.accountBestStreakDate.textContent = stats.bestStreakDate
    ? `${t("accountRecordDate")} ${new Intl.DateTimeFormat(state.language === "uk" ? "uk-UA" : "en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(`${stats.bestStreakDate}T12:00:00`))}`
    : t("accountNoRecord");
  setButton(els.googleSignIn, t("continueGoogle"), "user");
  setButton(els.signOut, t("signOut"), "cancel");
  els.accountPrivacyLink.textContent = t("privacy");
  els.accountTermsLink.textContent = t("terms");
  els.restartEyebrow.textContent = t("restartEyebrow");
  els.restartTitle.textContent = t("restartTitle");
  els.restartText.textContent = t("restartText");
  setButton(els.restartNo, t("no"), "cancel");
  els.restartYes.textContent = t("restart");
  els.cancelEyebrow.textContent = t("cancelEyebrow");
  els.cancelTitle.textContent = t("cancelTitle");
  els.cancelText.textContent = t("cancelText");
  setButton(els.cancelNo, t("keepWorkout"), "resume");
  setButton(els.cancelYes, t("endWorkout"), "cancel");
  els.accountGuest.hidden = Boolean(state.account);
  els.accountMember.hidden = !state.account;
  els.googleSignIn.disabled = state.accountLoading;
  els.accountError.hidden = !state.accountError;
  els.accountError.textContent = state.accountError ? t("accountError") : "";
  renderWeightUI();
  renderNutritionUI();
}

function renderNutritionUI() {
  const todayEntries = getFoodEntries().filter((entry) => entry.date === localDateKey());
  const totals = todayEntries.reduce((total, entry) => ({
    calories: total.calories + entry.calories,
    protein: total.protein + entry.protein,
    carbs: total.carbs + entry.carbs,
    fat: total.fat + entry.fat,
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
  const rounded = (value) => new Intl.NumberFormat(state.language === "uk" ? "uk-UA" : "en-US", { maximumFractionDigits: 1 }).format(value);
  setButton(els.nutritionOpen, t("nutritionOpen"), "list");
  els.accountNutritionHint.textContent = todayEntries.length
    ? t("nutritionHint").replace("{value}", rounded(totals.calories))
    : t("nutritionHintEmpty");
  els.nutritionEyebrow.textContent = t("nutritionEyebrow");
  els.nutritionTitle.textContent = t("nutritionTitle");
  els.nutritionExperimental.textContent = t("experimental");
  els.nutritionCalories.textContent = rounded(totals.calories);
  els.nutritionProtein.textContent = `${rounded(totals.protein)} g`;
  els.nutritionCarbs.textContent = `${rounded(totals.carbs)} g`;
  els.nutritionFat.textContent = `${rounded(totals.fat)} g`;
  els.nutritionCaloriesLabel.textContent = t("nutritionCalories");
  els.nutritionProteinLabel.textContent = t("nutritionProtein");
  els.nutritionCarbsLabel.textContent = t("nutritionCarbs");
  els.nutritionFatLabel.textContent = t("nutritionFat");
  els.foodNameLabel.textContent = t("foodName");
  els.foodCaloriesLabel.textContent = t("foodCalories");
  els.foodProteinLabel.textContent = t("foodProtein");
  els.foodCarbsLabel.textContent = t("foodCarbs");
  els.foodFatLabel.textContent = t("foodFat");
  els.foodFormNote.textContent = t("foodNote");
  els.foodPrivacy.textContent = t("foodPrivacy");
  setButton(els.foodSave, t("foodSave"), "check");
  els.quickFoods.innerHTML = "";
  QUICK_FOODS.forEach((food) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-food";
    button.textContent = food[state.language];
    button.addEventListener("click", () => addFood({ ...food, name: food[state.language] }));
    els.quickFoods.append(button);
  });
  els.foodLog.innerHTML = "";
  if (todayEntries.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = t("foodLogEmpty");
    els.foodLog.append(empty);
  } else {
    todayEntries.slice(0, 5).forEach((entry) => {
      const item = document.createElement("article");
      const copy = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = entry.name;
      const detail = document.createElement("small");
      detail.textContent = `${rounded(entry.calories)} kcal · P ${rounded(entry.protein)} · C ${rounded(entry.carbs)} · F ${rounded(entry.fat)}`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.setAttribute("aria-label", `${t("foodRemove")}: ${entry.name}`);
      remove.textContent = "×";
      remove.addEventListener("click", () => { persistFoodEntries(getFoodEntries().filter((food) => food.id !== entry.id)); renderNutritionUI(); });
      copy.append(title, detail);
      item.append(copy, remove);
      els.foodLog.append(item);
    });
  }
}

function addFood(food) {
  persistFoodEntries([...getFoodEntries(), {
    id: foodId(), date: localDateKey(), name: food.name,
    calories: Number(food.calories), protein: Number(food.protein) || 0, carbs: Number(food.carbs) || 0, fat: Number(food.fat) || 0,
    updatedAt: Date.now(),
  }]);
  renderNutritionUI();
}

function renderWeightUI() {
  const entries = getWeightEntries();
  const latest = entries.at(-1);
  const today = entries.find((entry) => entry.date === localDateKey());
  const first = entries[0];
  const accountHint = latest
    ? t("weightHint").replace("{value}", formatWeight(latest.kilograms))
    : t("weightHintEmpty");

  setButton(els.weightOpen, t("weightOpen"), "scale");
  els.accountWeightHint.textContent = accountHint;
  els.weightEyebrow.textContent = t("weightEyebrow");
  els.weightTitle.textContent = t("weightTitle");
  els.weightCurrent.textContent = latest ? formatWeight(latest.kilograms) : "--";
  els.weightCurrentLabel.textContent = t("weightCurrent");
  els.weightChange.textContent = entries.length > 1
    ? weightDifference(latest.kilograms, first.kilograms)
    : "--";
  els.weightChangeLabel.textContent = t("weightChange");
  els.weightInputLabel.textContent = t("weightToday");
  els.weightInput.value = today ? weightInUnit(today.kilograms).toFixed(1).replace(/\.0$/, "") : "";
  els.weightFormNote.textContent = today ? t("weightUpdated") : t("weightNew");
  els.weightPrivacy.textContent = t("weightPrivacy");
  setButton(els.weightSave, t("weightSave"), "check");
  setButton(els.weightRemove, t("weightRemove"), "cancel");
  els.weightRemove.hidden = !today;
  els.unitKg.setAttribute("aria-pressed", String(state.weightUnit === "kg"));
  els.unitLb.setAttribute("aria-pressed", String(state.weightUnit === "lb"));
  renderWeightChart(entries);
}

function renderWeightChart(entries) {
  els.weightChart.innerHTML = "";
  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = t("weightNoData");
    els.weightChart.append(empty);
    return;
  }

  const heading = document.createElement("p");
  heading.className = "weight-chart-title";
  heading.textContent = t("weightTrend");
  const bars = document.createElement("div");
  bars.className = "weight-bars";
  const recent = entries.slice(-7);
  const values = recent.map((entry) => weightInUnit(entry.kilograms));
  const min = Math.min(...values);
  const range = Math.max(Math.max(...values) - min, 0.4);
  recent.forEach((entry) => {
    const value = weightInUnit(entry.kilograms);
    const bar = document.createElement("div");
    bar.className = "weight-bar";
    bar.style.setProperty("--height", `${28 + ((value - min) / range) * 64}%`);
    bar.title = `${entry.date}: ${formatWeight(entry.kilograms)}`;
    const valueLabel = document.createElement("strong");
    valueLabel.textContent = new Intl.NumberFormat(state.language === "uk" ? "uk-UA" : "en-US", { maximumFractionDigits: 1 }).format(value);
    const dateLabel = document.createElement("small");
    dateLabel.textContent = entry.date.slice(5).replace("-", "/");
    bar.append(valueLabel, dateLabel);
    bars.append(bar);
  });
  els.weightChart.append(heading, bars);
}

function renderWhatsNew() {
  els.releaseList.innerHTML = "";
  RELEASE_NOTES.forEach((note) => {
    const entry = document.createElement("article");
    entry.className = "release-entry";
    const title = document.createElement("h3");
    title.textContent = note[`${state.language}Title`] || note.title || "";
    const body = document.createElement("p");
    body.textContent = note[`${state.language}Body`] || note.body || "";
    entry.append(title, body);
    if (note.image) {
      const image = document.createElement("img");
      image.src = note.image;
      image.alt = note[`${state.language}ImageAlt`] || note.imageAlt || "";
      entry.append(image);
    }
    els.releaseList.append(entry);
  });
}

function openWhatsNewIfNeeded() {
  if (!RELEASE_NOTES_VERSION || RELEASE_NOTES.length === 0) return;
  if (localStorage.getItem("hapodSeenRelease") === RELEASE_NOTES_VERSION) return;
  renderWhatsNew();
  showDialog(els.whatsNewDialog);
}

function refreshWorkoutText() {
  const exercise = currentExercise();
  if (!exercise) return;

  const displayExercise = exerciseCopy(exercise);
  if (state.phase === "prep") {
    els.modeLabel.textContent = t("getReady");
    els.exerciseName.textContent = displayExercise.name;
    els.exerciseTarget.textContent = `${t("startTarget")}: ${displayExercise.target}`;
    els.coachLine.textContent = t("prepCoach");
    setButton(els.skipStep, t("startTarget"), "play");
  } else if (state.phase === "exercise") {
    els.modeLabel.textContent = exercise.type === "time" ? t("timer") : t("reps");
    els.exerciseName.textContent = displayExercise.name;
    els.exerciseTarget.textContent = displayExercise.target;
    els.coachLine.textContent = exercise.type === "time" ? t("timedCoach") : t("repsCoach");
    setButton(els.skipStep, exercise.type === "time" ? t("skip") : t("done"), exercise.type === "time" ? "next" : "check");
  } else {
    els.modeLabel.textContent = t("rest");
    els.exerciseName.textContent = t("rest");
    els.exerciseTarget.textContent = `${state.remaining} ${t("restBefore")}`;
    els.coachLine.textContent = t("restCoach");
    setButton(els.skipStep, t("skip"), "next");
  }

  setButton(els.pauseResume, state.paused ? t("resume") : t("pause"), state.paused ? "resume" : "pause");
  setButton(els.showInfo, t("details"), "info");
  updateNextUp();
  updateWorkoutDisplay();
}

function renderDayStrip() {
  els.dayStrip.innerHTML = "";
  WEEK_ORDER.forEach((index) => {
    const day = activeWeek()[index];
    const copy = dayCopy(index);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-button";
    button.textContent = copy.short;
    button.setAttribute("aria-pressed", String(index === state.selectedDay));
    button.classList.toggle("is-today", index === todayIndex());
    button.classList.toggle("is-locked", index !== todayIndex() && !state.unlockedDays.has(index));
    button.setAttribute(
      "aria-label",
      `${copy.title}. ${
        index === todayIndex()
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
  document.querySelector("#planTitle").textContent = copy.title;
  routine().forEach((exercise, index) => {
    const displayExercise = exerciseCopy(exercise);
    const item = document.createElement("article");
    item.className = "plan-item";
    item.innerHTML = `
      <span class="plan-number">${index + 1}</span>
      <div>
        <strong>${displayExercise.name}${exercise.optional ? ` (${t("optional")})` : ""}</strong>
        <p>${displayExercise.target} - ${displayExercise.bodyPart}</p>
      </div>
    `;
    item.addEventListener("click", () => showExerciseInfo(index, "planView"));
    els.exerciseList.appendChild(item);
  });
}

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator && !state.wakeLock) {
      state.wakeLock = await navigator.wakeLock.request("screen");
      state.wakeLock.addEventListener("release", () => {
        state.wakeLock = null;
      });
    }
  } catch {
    // The workout still works if iOS/browser refuses wake lock.
  }
}

async function releaseWakeLock() {
  if (!state.wakeLock) return;
  try {
    await state.wakeLock.release();
  } catch {
    // A browser can release this automatically when it is no longer visible.
  } finally {
    state.wakeLock = null;
  }
}

function stopCountdown() {
  clearInterval(state.timerId);
  state.timerId = null;
  state.deadlineAt = null;
}

function startCountdown() {
  if (state.remaining <= 0) return;
  state.deadlineAt = Date.now() + state.remaining * 1000;
  state.timerId = window.setInterval(tick, 250);
}

function syncCountdown() {
  if (state.paused || !state.deadlineAt) return;
  const previousRemaining = state.remaining;
  state.remaining = Math.max(0, Math.ceil((state.deadlineAt - Date.now()) / 1000));
  if (state.remaining === previousRemaining) return;

  updateWorkoutDisplay();
  if (state.remaining <= 3 && state.remaining > 0) {
    beep(620 + (4 - state.remaining) * 80, 0.055);
    pulse(20);
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
    if (stats.streak > stats.bestStreak || !stats.bestStreakDate) {
      stats.bestStreak = stats.streak;
      stats.bestStreakDate = today;
    }
    saveStats(stats);
    if (state.account && state.syncReady) {
      sendFirebaseEvent("hapod:complete-day", { date: today });
    }
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
  showView("workoutView");
  startStep();
}

function currentExercise() {
  return routine()[state.currentIndex];
}

function startStep() {
  stopCountdown();
  const exercise = currentExercise();
  const displayExercise = exerciseCopy(exercise);
  if (!exercise) {
    finishWorkout();
    return;
  }

  if (state.phase === "prep") {
    state.remaining = PREP_SECONDS;
    state.stepTotal = PREP_SECONDS;
    els.modeLabel.textContent = t("getReady");
    els.exerciseName.textContent = displayExercise.name;
    els.exerciseTarget.textContent = `${t("startTarget")}: ${displayExercise.target}`;
    els.coachLine.textContent = t("prepCoach");
    setButton(els.skipStep, t("startTarget"), "play");
    beep(520, 0.06);
  } else if (state.phase === "exercise") {
    state.remaining = exercise.type === "time" ? exercise.seconds : 0;
    state.stepTotal = exercise.type === "time" ? exercise.seconds : 0;
    els.modeLabel.textContent = exercise.type === "time" ? t("timer") : t("reps");
    els.exerciseName.textContent = displayExercise.name;
    els.exerciseTarget.textContent = displayExercise.target;
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
  document.querySelector("#workoutView").classList.remove("is-paused");
  setButton(els.pauseResume, t("pause"), "pause");
  setButton(els.showInfo, t("details"), "info");
  updateNextUp();
  updateWorkoutDisplay();
  animateWorkoutStep();

  if (state.remaining > 0) {
    startCountdown();
  }
}

function animateWorkoutStep() {
  const card = document.querySelector("#workoutView .exercise-card");
  if (!card) return;
  card.classList.remove("is-transitioning");
  window.requestAnimationFrame(() => card.classList.add("is-transitioning"));
}

function tick() {
  if (state.paused) return;
  syncCountdown();
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
  const displayExercise = exerciseCopy(exercise);

  els.progressLabel.textContent = `${state.phase === "rest" ? t("restAfter") : t("exercise")} ${Math.min(
    state.currentIndex + 1,
    totalSteps
  )} ${t("of")} ${totalSteps}`;
  els.progressFill.style.width = `${progress}%`;
  els.timerValue.textContent =
    state.remaining > 0 ? formatTime(state.remaining) : displayExercise.target;
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
  const nextDisplay = exerciseCopy(next);
  if (state.phase === "prep") {
    els.nextUp.textContent = t("nextControlled");
  } else if (state.phase === "exercise" && exercise.restSeconds > 0) {
    els.nextUp.textContent = `${t("nextRest")} ${exercise.restSeconds} ${t("secondsRest")}`;
  } else if (next) {
    els.nextUp.textContent = `${t("next")} ${nextDisplay.name}.`;
  } else {
    els.nextUp.textContent = t("finish");
  }
}

function advanceStep() {
  stopCountdown();
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
  stopCountdown();
  releaseWakeLock();
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
  stopCountdown();
  releaseWakeLock();
  state.paused = false;
  state.remaining = 0;
  state.stepTotal = 0;
  relockSelectedDayIfNeeded();
  updateHome();
  renderPlan();
  showView("homeView");
}

function openCancelDialog() {
  if (!state.paused) {
    syncCountdown();
    state.paused = true;
    stopCountdown();
    setButton(els.pauseResume, t("resume"), "resume");
    document.querySelector("#workoutView").classList.add("is-paused");
  }
  showDialog(els.cancelDialog);
}

function launchCelebration() {
  const colors = ["#2f7d62", "#d59b2d", "#386fa4", "#f4d35e", "#f45b69", "#f7fff7"];
  els.celebration.innerHTML = "";
  els.finishView.classList.add("is-celebrating");
  window.setTimeout(() => els.finishView.classList.remove("is-celebrating"), 2800);
  for (let index = 0; index < 76; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.background = colors[index % colors.length];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.width = `${Math.random() * 7 + 6}px`;
    piece.style.height = `${Math.random() * 12 + 10}px`;
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.setProperty("--r", `${Math.random() * 900 - 450}deg`);
    piece.style.animationDelay = `${Math.random() * 520}ms`;
    piece.style.animationDuration = `${Math.random() * 900 + 1900}ms`;
    els.celebration.appendChild(piece);
  }
}

function showExerciseInfo(index = state.currentIndex, backView = "workoutView") {
  const exercise = routine()[index] || currentExercise();
  const displayExercise = exerciseCopy(exercise);
  const media = EXERCISE_MEDIA[exercise.name];
  state.lastViewBeforeInfo = backView;
  els.infoExerciseName.textContent = displayExercise.name;
  els.exerciseDemo.hidden = !media;
  if (media) {
    els.exerciseDemoImage.src = media.src;
    els.exerciseDemoImage.alt = media[state.language];
  } else {
    els.exerciseDemoImage.removeAttribute("src");
    els.exerciseDemoImage.alt = "";
  }
  els.infoDescription.textContent = displayExercise.description;
  els.infoBodyPart.textContent = displayExercise.bodyPart;
  els.infoShortBenefit.textContent = displayExercise.shortBenefit;
  els.infoLongBenefit.textContent = displayExercise.longBenefit;
  showView("infoView");
}

els.startWorkout.addEventListener("click", startWorkout);
els.viewPlan.addEventListener("click", () => showView("planView"));
els.backFromPlan.addEventListener("click", () => showView("homeView"));
els.closeInfo.addEventListener("click", () => showView(state.lastViewBeforeInfo));
els.showInfo.addEventListener("click", () => showExerciseInfo());
els.skipStep.addEventListener("click", advanceStep);
els.cancelWorkout.addEventListener("click", openCancelDialog);
els.finishHome.addEventListener("click", () => showView("homeView"));
els.settingsOpen.addEventListener("click", openSettings);
els.accountOpen.addEventListener("click", openAccount);
els.accountClose.addEventListener("click", () => hideDialog(els.accountDialog));
els.accountDialog.addEventListener("click", (event) => {
  if (event.target === els.accountDialog) hideDialog(els.accountDialog);
});
els.weightOpen.addEventListener("click", () => {
  hideDialog(els.accountDialog);
  renderWeightUI();
  showDialog(els.weightDialog);
});
els.nutritionOpen.addEventListener("click", () => {
  hideDialog(els.accountDialog);
  renderNutritionUI();
  showDialog(els.nutritionDialog);
});
els.nutritionClose.addEventListener("click", () => {
  hideDialog(els.nutritionDialog);
  showDialog(els.accountDialog);
});
els.nutritionDialog.addEventListener("click", (event) => {
  if (event.target === els.nutritionDialog) {
    hideDialog(els.nutritionDialog);
    showDialog(els.accountDialog);
  }
});
els.foodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = els.foodName.value.trim();
  const calories = Number(els.foodCalories.value);
  if (!name || !Number.isFinite(calories) || calories < 0 || calories > 10000) return;
  addFood({
    name, calories,
    protein: Number(els.foodProtein.value) || 0,
    carbs: Number(els.foodCarbs.value) || 0,
    fat: Number(els.foodFat.value) || 0,
  });
  els.foodForm.reset();
});
els.weightClose.addEventListener("click", () => {
  hideDialog(els.weightDialog);
  showDialog(els.accountDialog);
});
els.weightDialog.addEventListener("click", (event) => {
  if (event.target === els.weightDialog) {
    hideDialog(els.weightDialog);
    showDialog(els.accountDialog);
  }
});
els.weightForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const kilograms = kilogramsFromInput(els.weightInput.value);
  if (!kilograms || kilograms < 20 || kilograms > 500) {
    els.weightInput.focus();
    return;
  }
  const today = localDateKey();
  const entries = getWeightEntries().filter((entry) => entry.date !== today);
  persistWeightEntries([...entries, { date: today, kilograms, updatedAt: Date.now() }]);
  renderWeightUI();
});
els.weightRemove.addEventListener("click", () => {
  const today = localDateKey();
  persistWeightEntries(getWeightEntries().filter((entry) => entry.date !== today));
  renderWeightUI();
});
function changeWeightUnit(unit) {
  if (unit === state.weightUnit) return;
  const inputKilograms = kilogramsFromInput(els.weightInput.value);
  state.weightUnit = unit;
  localStorage.setItem("hapodWeightUnit", unit);
  renderWeightUI();
  if (inputKilograms && !getWeightEntries().some((entry) => entry.date === localDateKey())) {
    els.weightInput.value = weightInUnit(inputKilograms).toFixed(1).replace(/\.0$/, "");
  }
}
els.unitKg.addEventListener("click", () => changeWeightUnit("kg"));
els.unitLb.addEventListener("click", () => changeWeightUnit("lb"));
els.googleSignIn.addEventListener("click", () => {
  state.accountError = "";
  state.accountLoading = true;
  updateAccountUI();
  sendFirebaseEvent("hapod:sign-in");
});
els.signOut.addEventListener("click", () => sendFirebaseEvent("hapod:sign-out"));
els.resetProgress.addEventListener("click", () => showDialog(els.restartDialog));
els.restartNo.addEventListener("click", () => hideDialog(els.restartDialog));
els.restartYes.addEventListener("click", () => {
  hideDialog(els.restartDialog);
  resetLocalProgress();
  if (state.account) sendFirebaseEvent("hapod:restart-progress");
  updateHome();
  renderPlan();
  showView("homeView");
});
els.whatsNewClose.addEventListener("click", () => {
  localStorage.setItem("hapodSeenRelease", RELEASE_NOTES_VERSION);
  hideDialog(els.whatsNewDialog);
});
els.whatsNewDialog.addEventListener("click", (event) => {
  if (event.target === els.whatsNewDialog) {
    localStorage.setItem("hapodSeenRelease", RELEASE_NOTES_VERSION);
    hideDialog(els.whatsNewDialog);
  }
});
els.restartDialog.addEventListener("click", (event) => {
  if (event.target === els.restartDialog) hideDialog(els.restartDialog);
});
els.cancelNo.addEventListener("click", () => hideDialog(els.cancelDialog));
els.cancelYes.addEventListener("click", () => {
  hideDialog(els.cancelDialog);
  cancelWorkout();
});
els.cancelDialog.addEventListener("click", (event) => {
  if (event.target === els.cancelDialog) hideDialog(els.cancelDialog);
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
els.programSelect.addEventListener("change", (event) => changeWorkoutProgram(event.target.value));
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
  if (state.paused) {
    state.paused = false;
    startCountdown();
  } else {
    syncCountdown();
    if (state.remaining <= 0) advanceStep();
    state.paused = true;
    stopCountdown();
  }
  document.querySelector("#workoutView").classList.toggle("is-paused", state.paused);
  setButton(els.pauseResume, state.paused ? t("resume") : t("pause"), state.paused ? "resume" : "pause");
});

function reconcileWorkoutTimer() {
  if (document.visibilityState !== "visible" || state.paused || !state.deadlineAt) return;
  tick();
  if (document.querySelector("#workoutView.active")) requestWakeLock();
}

document.addEventListener("visibilitychange", reconcileWorkoutTimer);
window.addEventListener("focus", reconcileWorkoutTimer);
window.addEventListener("pageshow", reconcileWorkoutTimer);

window.addEventListener("hapod:auth-state", (event) => {
  state.account = event.detail.user;
  state.accountLoading = Boolean(event.detail.user);
  state.syncReady = false;
  state.accountError = "";
  updateHome();
});

window.addEventListener("hapod:account-ready", (event) => {
  const { user, stats, weightEntries, foodEntries } = event.detail;
  state.account = user;
  state.accountLoading = false;
  state.accountError = "";
  if (stats) {
    const merged = mergeAccountStats(getStats(), stats);
    saveStats(merged.stats);
    state.syncReady = true;
    if (merged.shouldRepairRemote) {
      sendFirebaseEvent("hapod:reconcile-stats", { stats: merged.stats });
    }
  } else {
    state.syncReady = true;
    sendFirebaseEvent("hapod:initialize-account", { stats: getStats(), weightEntries: getWeightEntries(), foodEntries: getFoodEntries() });
  }
  const localWeightEntries = getWeightEntries();
  const mergedWeightEntries = mergeWeightEntries(localWeightEntries, weightEntries);
  saveWeightEntries(mergedWeightEntries);
  if (JSON.stringify(mergedWeightEntries) !== JSON.stringify(normalizeWeightEntries(weightEntries))) {
    sendFirebaseEvent("hapod:sync-weight-entries", { entries: mergedWeightEntries });
  }
  const localFoodEntries = getFoodEntries();
  const mergedFoodEntries = normalizeFoodEntries([...(foodEntries || []), ...localFoodEntries]);
  saveFoodEntries(mergedFoodEntries);
  if (JSON.stringify(mergedFoodEntries) !== JSON.stringify(normalizeFoodEntries(foodEntries))) {
    sendFirebaseEvent("hapod:sync-food-entries", { entries: mergedFoodEntries });
  }
  updateHome();
});

window.addEventListener("hapod:remote-stats", (event) => {
  saveStats(event.detail.stats);
  state.syncReady = true;
  updateHome();
});

window.addEventListener("hapod:remote-weight-entries", (event) => {
  saveWeightEntries(event.detail.entries);
  updateAccountUI();
});

window.addEventListener("hapod:remote-food-entries", (event) => {
  saveFoodEntries(event.detail.entries);
  updateAccountUI();
});

window.addEventListener("hapod:firebase-error", () => {
  state.accountLoading = false;
  state.accountError = "firebase";
  updateHome();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(`sw.js?v=${APP_VERSION}`, { updateViaCache: "none" })
      .then((registration) => registration.update());
  });
}

document.documentElement.dataset.theme = state.theme;
updateHome();
renderPlan();
scheduleDailyRefresh();
openWhatsNewIfNeeded();
