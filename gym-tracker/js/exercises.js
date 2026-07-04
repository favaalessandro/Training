/**
 * Exercise Database — Workout 8 settimane · versione Knee-Safe
 *
 * Fusione del programma originale di forza (8 settimane, picco verso i massimali)
 * con il protocollo knee-safe (reperti RM: menisco interno dx, femoro-rotulea dx, rotula sx).
 *
 * Principi della fusione:
 *  - Upper body, core e stacchi (hinge): INVARIATI — knee-neutral
 *  - Squat profondi → Box Squat al parallelo (stessa progressione 12→8→6→5→4→3→2)
 *  - Front squat → Goblet Box Squat · Pistol squat → Wall sit / Leg extension parziale
 *  - Salti (jumping jacks, long/high/vertical jumps) → Bike Sprint (zero impatto)
 *  - Leg press e varianti squat rimaste: ROM controllato (tag ROM)
 *  - 🦵 Priming pre-gambe + coda ginocchia + sessione fasi F1 (sett. 1-4) / F2 (sett. 5-8)
 *  - Gate test a fine sett. 4 (F1→F2) e sett. 8 (F2→F3, attiva dal 2° ciclo)
 *  - Giorno Conditioning + Ginocchia opzionale in ogni settimana
 *  - Sett. 8: Squat Record 1×1 → Box Squat Test 3RM · Deadlift max INVARIATO (hinge)
 *
 * Format: { weekNumber: { days: [{ dayLabel, exercises: [...] }] } }
 */

/* ── GIF esercizi knee-safe (fitnessprogramer.com) ── */
const GIF = {
  boxSquat: 'https://gymvisual.com/img/p/2/0/2/6/8/20268.gif',
  gobletSquat: 'https://fitnessprogramer.com/wp-content/uploads/2023/01/Dumbbell-Goblet-Squat.gif',
  tke: 'https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-leg-extension.gif',
  spanishSquat: null, // nessuna GIF esistente: link video nelle note
  wallSit: 'https://gymvisual.com/img/p/2/9/3/0/9/29309.gif',
  bike: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Stationary-Bike-Run.gif',
  reverseLunge: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Reverse-Lunge.gif',
  calfRaise: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Bench-Press-Machine-Standing-Calf-Raise.gif',
  clamshell: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Side-Lying-Clam.gif',
  balance: 'https://i.makeagif.com/media/11-20-2015/PAu5WY.gif',
  stepDown: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Single-Leg-Step-Down.gif',
  nordicCurl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Nordic-Hamstring-Curl.gif',
  hipThrustSingle: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Barbell-Single-Leg-Hip-Thrust.gif',
  sidePlank: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank.gif',
  sidePlankAbd: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank-Leg-Raises.gif',
  slr: 'https://gymvisual.com/img/p/5/8/7/5/5875.gif',
  kbSwing: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Swings.gif',
  turkishGetUp: 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Turkish-Get-Up.gif',
  farmerCarry: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Farmers-walk_Cardio.gif',
  kneeToWall: 'https://media.giphy.com/media/3iCs4KMfIJiNvjxCHs/giphy.gif',
  legExtension: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
  deadBug: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Dead-Bug.gif',
  legRaiseLying: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif'
};

/* ── Blocchi ginocchia riutilizzabili ── */

// 🦵 Priming pre-seduta gambe (~8 min)
function kneePriming(weekNum) {
  return [
    {
      id: `week${weekNum}-prime-tke`,
      name: "Terminal Knee Extension (priming)",
      muscleGroup: "legs",
      defaultSets: 2,
      defaultReps: "15",
      defaultRest: 45,
      notes: "🦵 Priming · leggero, 15/gamba. Porta sangue al ginocchio e attiva il vasto mediale prima del carico",
      gifUrl: GIF.tke,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-prime-spanish`,
      name: "Spanish Squat isometrico (priming)",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "30 sec",
      defaultRest: 60,
      notes: "🦵 Priming · busto verticale, effetto analgesico sul tendine rotuleo · <a href='https://youtu.be/mik90mAS6fU' target='_blank' rel='noopener' style='color:var(--gold-primary)'>▶ Video tecnica</a>",
      gifUrl: GIF.spanishSquat,
      tag: "KNEE"
    }
  ];
}

// 🦵 Coda ginocchia post-seduta gambe (~8 min)
function kneeTail(weekNum, phase2 = false) {
  return [
    {
      id: `week${weekNum}-tail-calf`,
      name: "Calf Raise in piedi",
      muscleGroup: "legs",
      defaultSets: 4,
      defaultReps: "15",
      defaultRest: 60,
      notes: "🦵 Coda · discesa lenta sotto il gradino, pausa in allungamento. Polpacci forti assorbono carico prima del ginocchio",
      gifUrl: GIF.calfRaise,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-tail-clamshell`,
      name: "Clamshell con elastico",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "15",
      defaultRest: 45,
      notes: "🦵 Coda · 15/lato. Gluteo medio: controlla il valgismo e riallinea la traiettoria rotulea (chiave per la rotula sinistra)",
      gifUrl: GIF.clamshell,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-tail-balance`,
      name: "Equilibrio monopodalico",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "30 sec",
      defaultRest: 30,
      notes: phase2
        ? "🦵 Coda · 30\"/gamba su superficie instabile (cuscino) — Fase 2"
        : "🦵 Coda · 30\"/gamba, occhi aperti → chiusi — Fase 1",
      gifUrl: GIF.balance,
      tag: "KNEE"
    }
  ];
}

// 🦵 Sessione ginocchia Fase 1 (sett. 1-4) — la parte chiave della settimana
function kneePhase1(weekNum) {
  return [
    {
      id: `week${weekNum}-f1-spanish`,
      name: "Spanish Squat isometrico (Fase 1)",
      muscleGroup: "legs",
      defaultSets: 5,
      defaultReps: "45 sec",
      defaultRest: 60,
      notes: "🦵 Fase 1 · dose piena, recupero 1'. Busto verticale per caricare davvero quadricipite e tendine rotuleo · <a href='https://youtu.be/mik90mAS6fU' target='_blank' rel='noopener' style='color:var(--gold-primary)'>▶ Video tecnica</a>",
      gifUrl: GIF.spanishSquat,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-f1-tke`,
      name: "Terminal Knee Extension",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "15",
      defaultRest: 45,
      notes: "🦵 Fase 1 · 15/gamba con banda elastica",
      gifUrl: GIF.tke,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-f1-slr`,
      name: "Straight Leg Raise extraruotata",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "12",
      defaultRest: 45,
      notes: "🦵 Fase 1 · 12/gamba. Gamba tesa, punta ruotata verso l'esterno, solleva 30-40 cm con quadricipite contratto",
      gifUrl: GIF.slr,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-f1-kneetowall`,
      name: "Knee-to-Wall (mobilità caviglia)",
      muscleGroup: "legs",
      defaultSets: 2,
      defaultReps: "10",
      defaultRest: 30,
      notes: "🦵 Fase 1 · 10/lato. Piede a ~10 cm dal muro, ginocchio a toccare senza sollevare il tallone. Caviglia rigida = ginocchio sovraccaricato",
      gifUrl: GIF.kneeToWall,
      tag: "KNEE"
    }
  ];
}

// 🦵 Sessione ginocchia Fase 2 (sett. 5-8)
function kneePhase2(weekNum) {
  return [
    {
      id: `week${weekNum}-f2-stepdown`,
      name: "Step-Down controllato",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "8",
      defaultRest: 60,
      notes: "🦵 Fase 2 · 8/gamba, discesa 4\". Il gold standard per la femoro-rotulea. Ginocchio in linea col 2° dito del piede — controllati allo specchio",
      gifUrl: GIF.stepDown,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-f2-nordic`,
      name: "Nordic Curl eccentrico",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "5",
      defaultRest: 90,
      notes: "🦵 Fase 2 · anche assistito. Hamstring fortissimi = menisco più protetto. Aspettati DOMS forti le prime settimane",
      gifUrl: GIF.nordicCurl,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-f2-hipthrust-mono`,
      name: "Hip Thrust monopodalico",
      muscleGroup: "legs",
      defaultSets: 3,
      defaultReps: "10",
      defaultRest: 60,
      notes: "🦵 Fase 2 · 10/gamba, stessa tecnica del bilaterale",
      gifUrl: GIF.hipThrustSingle,
      tag: "KNEE"
    },
    {
      id: `week${weekNum}-f2-sideplank-abd`,
      name: "Side Plank + abduzione",
      muscleGroup: "core",
      defaultSets: 3,
      defaultReps: "10",
      defaultRest: 45,
      notes: "🦵 Fase 2 · 10/lato. Core laterale + gluteo medio insieme",
      gifUrl: GIF.sidePlankAbd || GIF.sidePlank,
      tag: "KNEE"
    }
  ];
}

// Giorno Conditioning + Ginocchia (opzionale, ogni settimana)
function conditioningDay(weekNum, phase2 = false) {
  return {
    dayLabel: "Conditioning + Ginocchia (Opzionale)",
    exercises: [
      {
        id: `week${weekNum}-cond-bike`,
        name: "Bike Sprint",
        muscleGroup: "legs",
        defaultSets: 8,
        defaultReps: "30 sec",
        defaultRest: 90,
        notes: "VARIANTE BASE · Opzione A (preferita): bike sprint massimale · B: rower · C (solo se asintomatico): sprint in leggera salita. Unico HIIT della settimana. In settimana di scarico: cardio blando 30-40 min. In alternativa a bike + circuito core: variante KB/EMOM qui sotto",
        gifUrl: GIF.bike
      },
      {
        id: `week${weekNum}-cond-kb-swing`,
        name: "Kettlebell Swing (EMOM min 1)",
        muscleGroup: "legs",
        defaultSets: 4,
        defaultReps: "15",
        defaultRest: 0,
        notes: "🔁 VARIANTE KB/EMOM 16' (alternativa a bike + core): 4 round, ogni esercizio parte allo scatto del minuto. Hip hinge esplosivo come lo stacco: le ginocchia restano quasi ferme, spinge l'anca. Knee-safe",
        gifUrl: GIF.kbSwing,
        tag: "VAR"
      },
      {
        id: `week${weekNum}-cond-kb-tgu`,
        name: "Turkish Get-Up (EMOM min 2)",
        muscleGroup: "core",
        defaultSets: 4,
        defaultReps: "1+1",
        defaultRest: 0,
        notes: "🔁 Variante KB/EMOM · 1 per lato al minuto, lento e controllato. Se il passaggio in ginocchio dà fastidio: cuscino sotto il ginocchio o fermati alla posizione seduta (half get-up)",
        gifUrl: GIF.turkishGetUp,
        tag: "VAR"
      },
      {
        id: `week${weekNum}-cond-kb-bike`,
        name: "Bike Sprint (EMOM min 3)",
        muscleGroup: "legs",
        defaultSets: 4,
        defaultReps: "40 sec",
        defaultRest: 0,
        notes: "🔁 Variante KB/EMOM · sprint 40\", recupero nei 20\" restanti",
        gifUrl: GIF.bike,
        tag: "VAR"
      },
      {
        id: `week${weekNum}-cond-kb-farmer`,
        name: "Farmer Carry (EMOM min 4)",
        muscleGroup: "core",
        defaultSets: 4,
        defaultReps: "40 sec",
        defaultRest: 0,
        notes: "🔁 Variante KB/EMOM · camminata pesante 40\", presa salda e busto eretto. Chiude il round: il minuto successivo si riparte dallo swing",
        gifUrl: GIF.farmerCarry,
        tag: "VAR"
      },
      {
        id: `week${weekNum}-cond-deadbug`,
        name: "Dead Bug",
        muscleGroup: "core",
        defaultSets: 4,
        defaultReps: "10",
        defaultRest: 45,
        notes: "VARIANTE BASE · Circuito core · lombare aderente al pavimento. Conta anche come lavoro ginocchia (controllo del tronco). Se fai la variante KB/EMOM il core è già coperto da get-up e farmer carry",
        gifUrl: GIF.deadBug
      },
      {
        id: `week${weekNum}-cond-legraise`,
        name: "Leg Raise a terra",
        muscleGroup: "core",
        defaultSets: 4,
        defaultReps: "10",
        defaultRest: 45,
        notes: "Circuito core · lombare aderente al pavimento",
        gifUrl: GIF.legRaiseLying
      },
      {
        id: `week${weekNum}-cond-sideplank`,
        name: "Plank laterale",
        muscleGroup: "core",
        defaultSets: 4,
        defaultReps: "30 sec",
        defaultRest: 45,
        notes: "Circuito core · corpo in linea, bacino alto",
        gifUrl: GIF.sidePlank
      },
      {
        id: `week${weekNum}-cond-tke`,
        name: "Terminal Knee Extension",
        muscleGroup: "legs",
        defaultSets: 3,
        defaultReps: "15",
        defaultRest: 45,
        notes: "🦵 Coda post-cardio · 15/gamba",
        gifUrl: GIF.tke,
        tag: "KNEE"
      },
      {
        id: `week${weekNum}-cond-spanish`,
        name: phase2 ? "Spanish Squat dinamico" : "Spanish Squat isometrico",
        muscleGroup: "legs",
        defaultSets: 3,
        defaultReps: phase2 ? "10" : "40 sec",
        defaultRest: 60,
        notes: (phase2
          ? "🦵 Fase 2 · versione dinamica 3×10"
          : "🦵 Fase 1 · isometrico 30-45\"") + " · <a href='https://youtu.be/mik90mAS6fU' target='_blank' rel='noopener' style='color:var(--gold-primary)'>▶ Video tecnica</a>",
        gifUrl: GIF.spanishSquat,
        tag: "KNEE"
      },
      {
        id: `week${weekNum}-cond-balance`,
        name: "Equilibrio monopodalico",
        muscleGroup: "legs",
        defaultSets: 3,
        defaultReps: "30 sec",
        defaultRest: 30,
        notes: "🦵 30\"/gamba. A ginocchia affaticate dal cardio la propriocezione lavora di più: è il momento giusto" + (phase2 ? " · su superficie instabile (Fase 2)" : ""),
        gifUrl: GIF.balance,
        tag: "KNEE"
      }
    ]
  };
}

function absAndCoreDay(weekNum) {
  return {
    dayLabel: "ABS and Core",
    exercises: [
      {
        id: `week${weekNum}-leg-raise-bars`,
        name: "Leg Raise on the Bars",
        muscleGroup: "core",
        defaultSets: 3,
        defaultReps: "20",
        defaultRest: 60,
        notes: "Alle parallele, movimento controllato senza slancio",
        gifUrl: "https://static.tildacdn.net/tild3165-3663-4363-a361-376366343030/video_1.gif"
      },
      {
        id: `week${weekNum}-russian-twist`,
        name: "Russian Twist with Extra Weight",
        muscleGroup: "core",
        defaultSets: 2,
        defaultReps: "15",
        defaultRest: 60,
        notes: "Con peso aggiuntivo, 15 reps per lato",
        gifUrl: "https://static.tildacdn.net/tild3730-3363-4866-b465-303265373139/video_2_1.gif"
      },
      {
        id: `week${weekNum}-hyperextension`,
        name: "Hyperextension with Extra Weight",
        muscleGroup: "core",
        defaultSets: 3,
        defaultReps: "10",
        defaultRest: 90,
        notes: "Con peso aggiuntivo, contrazione controllata in alto",
        gifUrl: "https://static.tildacdn.net/tild6466-3964-4865-a630-373563373563/video_3.gif"
      },
      {
        id: `week${weekNum}-scissors`,
        name: "Scissors for Abs",
        muscleGroup: "core",
        defaultSets: 3,
        defaultReps: "40 sec",
        defaultRest: 60,
        notes: "3×40 secondi, gambe tese e basse",
        gifUrl: "https://static.tildacdn.net/tild6562-6563-4163-a666-386562343732/video_4.gif"
      },
      {
        id: `week${weekNum}-plank`,
        name: "Plank",
        muscleGroup: "core",
        defaultSets: 1,
        defaultReps: "max",
        defaultRest: 0,
        notes: "Massimo tempo possibile, mantieni la posizione corretta",
        gifUrl: "https://static.tildacdn.net/tild6237-6662-4563-a663-376535636439/video_5.gif"
      }
    ]
  };
}

const exerciseDB = {
  1: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          ...kneePriming(1),
          { id: "week1-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 120, notes: "Sostituisce lo squat profondo: il box impone lo stop al parallelo. Discesa controllata, mai sedersi di colpo", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week1-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 2, defaultReps: "15", defaultRest: 90, notes: "ROM controllato: mai oltre 90° al ginocchio, profondità mai forzata", gifUrl: "https://static.tildacdn.net/tild3566-6664-4061-a336-343838626130/video_2.gif", tag: "ROM" },
          { id: "week1-deadlift-db", name: "Deadlift with Dumbbells", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Pause for 1 sec at the bottom · Hinge d'anca: ginocchio quasi esteso e stabile", gifUrl: "https://static.tildacdn.net/tild6162-3331-4138-b135-623638386563/video_3.gif" },
          { id: "week1-wall-sit", name: "Wall Sit isometrico", muscleGroup: "legs", defaultSets: 3, defaultReps: "45 sec", defaultRest: 60, notes: "Sostituisce i single-leg squats. Schiena piatta al muro, ginocchia a ~60-70°. È anche il test del gate Fase 1→2 (obiettivo: 60\")", gifUrl: GIF.wallSit, tag: "KNEE" },
          { id: "week1-bike-sprint", name: "Bike Sprint", muscleGroup: "legs", defaultSets: 4, defaultReps: "30 sec", defaultRest: 60, notes: "Sostituisce i jumping jacks (impatto vietato): sprint massimale sulla bike, zero impatto", gifUrl: GIF.bike },
          ...kneeTail(1)
        ]
      },
      {
        dayLabel: "Wednesday - Chest, Biceps, Shoulders",
        exercises: [
          { id: "week1-bench-press", name: "Bench Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "2 sec pause at the bottom", gifUrl: "https://static.tildacdn.net/tild3761-3361-4138-b162-666264346636/video.gif" },
          { id: "week1-dips", name: "Dips", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "With or without additional weight", gifUrl: "https://static.tildacdn.net/tild3366-3835-4363-b736-653637353030/video_2.gif" },
          { id: "week1-incline-db-press", name: "Incline Dumbbell Press (45°)", muscleGroup: "chest", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "45° incline", gifUrl: "https://static.tildacdn.net/tild6564-6233-4236-b466-656164303134/video_3.gif" },
          { id: "week1-prayer-bench-press", name: "Prayer Bench Press", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6337-6365-4165-b735-346437343338/video_4_1.gif" },
          { id: "week1-hammer-curls", name: "Hammer Curls", muscleGroup: "arms", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3230-3761-4561-a530-363363336361/video_5_1.gif" },
          { id: "week1-db-curls-incline", name: "Dumbbell Curls with Supination (Incline 45°)", muscleGroup: "arms", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "On incline bench 45°", gifUrl: "https://static.tildacdn.net/tild3964-3664-4861-a333-613831396435/video_6.gif" },
          { id: "week1-arm-swings", name: "Standing Arm Swings", muscleGroup: "shoulders", defaultSets: 2, defaultReps: "20", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6630-6532-4730-a165-306536333666/video_7.gif" }
        ]
      },
      {
        dayLabel: "Friday - Back, Triceps",
        exercises: [
          { id: "week1-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "Sumo or conventional, whichever is more comfortable", gifUrl: "https://static.tildacdn.net/tild6366-6363-4164-b831-396430313238/video.gif" },
          { id: "week1-bent-over-row", name: "Bent-Over Barbell Row", muscleGroup: "back", defaultSets: 2, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3033-6239-4766-b735-623963373538/video_2.gif" },
          { id: "week1-wide-lat-pulldown", name: "Wide-Grip Lat Pulldown", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3664-6437-4361-b566-326233666134/video_3.gif" },
          { id: "week1-db-rows-bench", name: "Dumbbell Rows on Bench", muscleGroup: "back", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3633-6563-4730-a162-646365663162/video_4.gif" },
          { id: "week1-db-shrugs", name: "Dumbbell Shrugs", muscleGroup: "back", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6133-3564-4438-b163-373263313862/video_5.gif" },
          { id: "week1-triceps-cable", name: "Triceps Extensions with Cable Machine", muscleGroup: "arms", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3339-6337-4432-b738-656539376238/video_6.gif" },
          ...kneePhase1(1)
        ]
      },
      absAndCoreDay(1),
      conditioningDay(1)
    ]
  },
  2: {
    days: [
      {
        dayLabel: "Monday - Legs, Shoulders",
        exercises: [
          ...kneePriming(2),
          { id: "week2-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 2, defaultReps: "8", defaultRest: 120, notes: "Sostituisce lo squat profondo: stop al parallelo, discesa controllata", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week2-box-squat-pause", name: "Box Squat con pausa", muscleGroup: "legs", defaultSets: 2, defaultReps: "7", defaultRest: 120, notes: "Pausa 1-2\" seduto sul box senza rilassare, poi risali. Sostituisce lo squat con pausa in buca", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week2-leg-press-wide", name: "Leg Press with Wide and High Stance", muscleGroup: "legs", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "Stance largo e alto (già più knee-friendly) · ROM controllato, mai oltre 90°", gifUrl: "https://static.tildacdn.net/tild6163-6536-4036-b364-636365333334/video_3.gif", tag: "ROM" },
          { id: "week2-reverse-lunges", name: "Reverse Lunge con manubri", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "Sostituisce gli affondi in camminata: il passo indietro mantiene la tibia verticale. 10/gamba", gifUrl: GIF.reverseLunge, tag: "ROM" },
          { id: "week2-seated-lateral-raises", name: "Seated Dumbbell Lateral Raises", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6661-3132-4333-b639-376133613436/video_5.gif" },
          { id: "week2-standing-shoulder-press", name: "Standing Barbell Shoulder Press", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3836-3938-4730-a232-643536336135/video_6.gif" },
          ...kneeTail(2)
        ]
      },
      {
        dayLabel: "Wednesday - Chest, Triceps",
        exercises: [
          { id: "week2-incline-bench-press", name: "Incline Bench Press (30°)", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "Inclinazione 30°", gifUrl: "https://static.tildacdn.net/tild3064-3164-4433-a563-353232363132/video.gif" },
          { id: "week2-db-bench-press", name: "Dumbbell Bench Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3137-6162-4539-b835-666132306131/video_2.gif" },
          { id: "week2-cable-crossovers", name: "Cable Crossovers", muscleGroup: "chest", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3034-3961-4135-a364-343534323131/video_3.gif" },
          { id: "week2-close-grip-bench", name: "Close-Grip Bench Press", muscleGroup: "arms", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3436-6162-4563-b064-393130313739/video_4.gif" },
          { id: "week2-seated-db-triceps", name: "Seated Dumbbell Raises for Triceps", muscleGroup: "arms", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3866-6165-4237-b935-343165363731/video_5.gif" },
          { id: "week2-max-pushups", name: "Max Push-Ups", muscleGroup: "chest", defaultSets: 1, defaultReps: "max", defaultRest: 0, notes: "1 set al cedimento", gifUrl: "https://static.tildacdn.net/tild6234-3234-4634-a238-616665616538/video_6.gif" }
        ]
      },
      {
        dayLabel: "Friday - Back, Biceps",
        exercises: [
          { id: "week2-box-deadlift", name: "Box Deadlift (3-5 cm height)", muscleGroup: "back", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Rialzo 3-5 cm", gifUrl: "https://static.tildacdn.net/tild6532-3464-4663-a639-353537396235/video.gif" },
          { id: "week2-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 2, defaultReps: "3", defaultRest: 150, notes: "", gifUrl: "https://static.tildacdn.net/tild3032-6633-4561-a664-653636346161/video_2.gif" },
          { id: "week2-pullups", name: "Pull-Ups (or Lat Pulldown)", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "Oppure lat pulldown", gifUrl: "https://static.tildacdn.net/tild3234-3834-4766-b265-383864353662/video_3.gif" },
          { id: "week2-db-rows-bent", name: "Dumbbell Rows in Bent-Over Position", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3265-3763-4439-a438-383064613631/video_4.gif" },
          { id: "week2-seated-db-shrugs", name: "Seated Dumbbell Shrugs", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3231-3437-4330-a562-343334356239/video_5.gif" },
          { id: "week2-barbell-curls", name: "Straight Barbell Curls", muscleGroup: "arms", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3364-3431-4664-b061-363038623866/video_6.gif" },
          { id: "week2-reverse-grip-curls", name: "Reverse Grip Barbell Curls", muscleGroup: "arms", defaultSets: 2, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6535-6630-4962-b735-323231353266/video_7.gif" },
          ...kneePhase1(2)
        ]
      },
      absAndCoreDay(2),
      conditioningDay(2)
    ]
  },
  3: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          ...kneePriming(3),
          { id: "week3-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 4, defaultReps: "6", defaultRest: 150, notes: "Sostituisce lo squat profondo: stop al parallelo, discesa controllata", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week3-goblet-box-squat", name: "Goblet Box Squat", muscleGroup: "legs", defaultSets: 2, defaultReps: "10", defaultRest: 120, notes: "Sostituisce il front squat (flessione profonda): manubrio al petto, discesa al box/parallelo, tibia il più verticale possibile", gifUrl: GIF.gobletSquat, tag: "ROM" },
          { id: "week3-deadlifts", name: "Deadlifts", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3939-6334-4831-b230-663137353634/video_3.gif" },
          { id: "week3-leg-press-pause", name: "Leg Press with Pause at the Bottom for 3 sec", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "Pausa di 3 secondi a 60-90° di flessione — MAI in flessione profonda", gifUrl: "https://static.tildacdn.net/tild6464-6135-4432-a530-346530383764/video_4.gif", tag: "ROM" },
          { id: "week3-bike-sprint", name: "Bike Sprint", muscleGroup: "legs", defaultSets: 3, defaultReps: "30 sec", defaultRest: 60, notes: "Sostituisce i jumping jacks (impatto vietato): sprint massimale sulla bike", gifUrl: GIF.bike },
          ...kneeTail(3)
        ]
      },
      {
        dayLabel: "Wednesday - Chest",
        exercises: [
          { id: "week3-db-bench-press", name: "Dumbbell Bench Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3633-6532-4163-b134-613963383032/video.gif" },
          { id: "week3-close-grip-bench", name: "Close-Grip Barbell Bench Press", muscleGroup: "chest", defaultSets: 2, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3734-6562-4436-b435-343562353961/video_2.gif" },
          { id: "week3-parallel-dips", name: "Parallel Bar Dips (weighted if possible)", muscleGroup: "chest", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "Con peso aggiuntivo se possibile", gifUrl: "https://static.tildacdn.net/tild3332-6336-4664-b066-653733343464/video_3.gif" },
          { id: "week3-flyes", name: "Flyes", muscleGroup: "chest", defaultSets: 4, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3065-6639-4761-a231-633161653636/video_4.gif" },
          { id: "week3-plate-press", name: "Plate Press", muscleGroup: "chest", defaultSets: 2, defaultReps: "20", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3832-3635-4034-b366-386661306632/video_5.gif" }
        ]
      },
      {
        dayLabel: "Friday - Back",
        exercises: [
          { id: "week3-deadlifts-fri", name: "Deadlifts", muscleGroup: "back", defaultSets: 3, defaultReps: "7", defaultRest: 150, notes: "", gifUrl: "https://static.tildacdn.net/tild3433-3133-4030-b034-313539326266/video.gif" },
          { id: "week3-rack-pulls", name: "Rack Pulls (bar 3-5 cm above the knee)", muscleGroup: "back", defaultSets: 2, defaultReps: "9", defaultRest: 120, notes: "Barra 3-5 cm sopra il ginocchio", gifUrl: "https://static.tildacdn.net/tild6335-6233-4564-a364-376261326635/video_2.gif" },
          { id: "week3-seated-cable-rows", name: "Seated Cable Rows", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3439-3236-4237-b234-386436353066/video_3.gif" },
          { id: "week3-close-grip-pulldown", name: "Close Grip Pulldown", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3031-6532-4332-b939-643965353461/video_4.gif" },
          { id: "week3-straight-arm-pulldowns", name: "Straight-Arm Pulldowns", muscleGroup: "back", defaultSets: 4, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3738-6363-4631-a431-366639366337/video_5.gif" },
          ...kneePhase1(3)
        ]
      },
      {
        dayLabel: "Saturday - Arms and Shoulders",
        exercises: [
          { id: "week3-hammer-curls", name: "Hammer Curls", muscleGroup: "arms", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3139-3939-4463-b831-353836656564/video.gif" },
          { id: "week3-wide-grip-curls", name: "Wide-Grip Barbell Curls", muscleGroup: "arms", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6639-3162-4434-b134-343733373435/video_2.gif" },
          { id: "week3-skull-crushers", name: "Skull Crushers", muscleGroup: "arms", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6166-6235-4530-a363-636534373338/video_3.gif" },
          { id: "week3-incline-triceps-ext", name: "Incline Dumbbell Triceps Extensions", muscleGroup: "arms", defaultSets: 4, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6634-3731-4138-a637-333036306334/video_4.gif" },
          { id: "week3-seated-lateral-raises", name: "Seated Dumbbell Lateral Raises", muscleGroup: "shoulders", defaultSets: 4, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3133-6464-4338-a139-616333646235/video_5.gif" }
        ]
      },
      absAndCoreDay(3),
      conditioningDay(3)
    ]
  },
  4: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          ...kneePriming(4),
          { id: "week4-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 5, defaultReps: "5", defaultRest: 180, notes: "5×5 pesante sul box: stop al parallelo, +2,5-5% solo se la tecnica è impeccabile per tutte le serie", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week4-leg-press-pause", name: "Leg Press (pause for 3 seconds at the bottom)", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Pausa di 3 secondi a 60-90° di flessione — MAI in flessione profonda", gifUrl: "https://static.tildacdn.net/tild3139-6631-4034-b334-666532616262/video_2.gif", tag: "ROM" },
          { id: "week4-goblet-box-squat", name: "Goblet Box Squat", muscleGroup: "legs", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "Sostituisce il front squat con manubrio: discesa al box/parallelo, tibia verticale", gifUrl: GIF.gobletSquat, tag: "ROM" },
          { id: "week4-bike-sprint", name: "Bike Sprint", muscleGroup: "legs", defaultSets: 3, defaultReps: "30 sec", defaultRest: 90, notes: "Sostituisce i long jumps (impatto in atterraggio vietato): sprint massimale sulla bike", gifUrl: GIF.bike },
          { id: "week4-weighted-hyperext", name: "Weighted Hyperextensions", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3333-3934-4032-a537-353262653164/video_5.gif" },
          ...kneeTail(4)
        ]
      },
      {
        dayLabel: "Wednesday - Chest",
        exercises: [
          { id: "week4-bench-press", name: "Bench Press", muscleGroup: "chest", defaultSets: 5, defaultReps: "5", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3731-6664-4965-b165-626138303037/video0.gif" },
          { id: "week4-narrow-db-press", name: "Narrow Dumbbell Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3662-3431-4831-b935-383166303031/video.gif" },
          { id: "week4-incline-flyes", name: "Incline Flyes (30°)", muscleGroup: "chest", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "Panca inclinata a 30 gradi", gifUrl: "https://static.tildacdn.net/tild3064-3734-4361-a262-366631303138/video_2.gif" },
          { id: "week4-cable-crossovers", name: "Cable Crossovers", muscleGroup: "chest", defaultSets: 4, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3931-3061-4266-b336-366635343530/video_3.gif" },
          { id: "week4-triceps-pushdowns", name: "Triceps Pushdowns", muscleGroup: "arms", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3838-3463-4232-a237-316165323634/video_4.gif" },
          { id: "week4-close-grip-bench-tempo", name: "Close Grip Bench Press (3s down, 1s up)", muscleGroup: "chest", defaultSets: 3, defaultReps: "5", defaultRest: 120, notes: "3 secondi in discesa, 1 secondo in salita. Importante farlo con uno spotter", gifUrl: "https://static.tildacdn.net/tild6131-6266-4434-a231-386232643061/video_5.gif" }
        ]
      },
      {
        dayLabel: "Friday - Back",
        exercises: [
          { id: "week4-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 5, defaultReps: "5", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3932-3731-4066-a130-313034646233/video.gif" },
          { id: "week4-pullups", name: "Pull-ups (or Cable Pulldowns)", muscleGroup: "back", defaultSets: 4, defaultReps: "8", defaultRest: 90, notes: "O lat pulldown ai cavi", gifUrl: "https://static.tildacdn.net/tild3762-3731-4037-b739-623235396465/video_2.gif" },
          { id: "week4-horizontal-cable-rows", name: "Horizontal Cable Rows", muscleGroup: "back", defaultSets: 4, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6333-3962-4333-b662-396132373633/video_3.gif" },
          { id: "week4-good-morning", name: "Good Morning", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "Non usare troppo peso, concentrati sul sentire il movimento", gifUrl: "https://static.tildacdn.net/tild3263-3363-4465-b234-616435336361/video_4.gif" },
          ...kneePhase1(4),
          { id: "week4-gate-f2", name: "🚪 Gate Test → Fase 2", muscleGroup: "legs", defaultSets: 1, defaultReps: "60 sec", defaultRest: 0, notes: "GATE Fase 1→2: wall sit 60\" + equilibrio monopodalico 30\" a occhi chiusi, senza dolore né compensi. Se non superato: la Fase 1 si ripete anche se i pesi progrediscono. I gate comandano sul calendario", gifUrl: null, tag: "KNEE" }
        ]
      },
      absAndCoreDay(4),
      conditioningDay(4)
    ]
  },
  5: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          ...kneePriming(5),
          { id: "week5-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 4, defaultReps: "4", defaultRest: 180, notes: "Carico alto: stop al parallelo, tecnica impeccabile prima del carico", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week5-goblet-box-squat", name: "Goblet Box Squat", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "Sostituisce il front squat: discesa al box/parallelo, tibia verticale", gifUrl: GIF.gobletSquat, tag: "ROM" },
          { id: "week5-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "ROM controllato: mai oltre 90° al ginocchio", gifUrl: "https://static.tildacdn.net/tild3639-3561-4838-b934-616163363962/video_3.gif", tag: "ROM" },
          { id: "week5-bike-sprint", name: "Bike Sprint", muscleGroup: "legs", defaultSets: 4, defaultReps: "30 sec", defaultRest: 60, notes: "Sostituisce gli high jumps (impatto vietato): sprint massimale sulla bike", gifUrl: GIF.bike },
          { id: "week5-leg-extension-partial", name: "Leg Extension ROM parziale", muscleGroup: "legs", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "Sostituisce i single-leg squats. Solo gli ultimi 30° di estensione, movimento lento: vasto mediale — qui ipertrofia e protezione rotulea coincidono", gifUrl: GIF.legExtension, tag: "KNEE" },
          ...kneeTail(5, true)
        ]
      },
      {
        dayLabel: "Wednesday - Chest",
        exercises: [
          { id: "week5-bench-press", name: "Bench Press", muscleGroup: "chest", defaultSets: 4, defaultReps: "4", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3033-3237-4464-b334-333032353133/video.gif" },
          { id: "week5-bench-press-pause", name: "Bench Press (4s pause at bottom)", muscleGroup: "chest", defaultSets: 3, defaultReps: "3", defaultRest: 180, notes: "4 secondi di pausa in basso", gifUrl: "https://static.tildacdn.net/tild3030-6233-4463-b935-656463356131/video_2.gif" },
          { id: "week5-db-bench-press", name: "Dumbbell Bench Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3161-3961-4362-b366-353066383061/video_3.gif" },
          { id: "week5-pullover", name: "Pullover", muscleGroup: "chest", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6162-3561-4165-b438-623161313361/video_4.gif" },
          { id: "week5-floor-presses", name: "Floor Presses", muscleGroup: "chest", defaultSets: 2, defaultReps: "max", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3434-6561-4264-b630-613961363836/video_5.gif" }
        ]
      },
      {
        dayLabel: "Friday - Back and Legs",
        exercises: [
          { id: "week5-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 4, defaultReps: "4", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild6166-6433-4163-a462-306464333236/video.gif" },
          { id: "week5-leg-press-fri", name: "Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "ROM controllato: mai oltre 90° al ginocchio", gifUrl: "https://static.tildacdn.net/tild6264-3366-4039-b539-626530333935/video_2.gif", tag: "ROM" },
          { id: "week5-cable-rows-pause", name: "Cable Rows (2s pause at top)", muscleGroup: "back", defaultSets: 5, defaultReps: "8", defaultRest: 90, notes: "2 secondi di pausa in alto", gifUrl: "https://static.tildacdn.net/tild3533-3262-4262-a335-393763396365/video_3.gif" },
          { id: "week5-bike-sprint-fri", name: "Bike Sprint", muscleGroup: "legs", defaultSets: 3, defaultReps: "30 sec", defaultRest: 60, notes: "Sostituisce i vertical jumps (impatto vietato): sprint massimale sulla bike", gifUrl: GIF.bike },
          ...kneePhase2(5)
        ]
      },
      absAndCoreDay(5),
      conditioningDay(5, true)
    ]
  },
  6: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          ...kneePriming(6),
          { id: "week6-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 3, defaultReps: "3", defaultRest: 180, notes: "Carico alto: tecnica impeccabile, +2,5-5% solo se tutte le serie sono pulite", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week6-trap-bar-squats", name: "Trap Bar Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "Maniglie alte, ROM al parallelo, tibia il più verticale possibile", gifUrl: "https://static.tildacdn.net/tild3062-3335-4432-a534-316163356137/video_2.gif", tag: "ROM" },
          { id: "week6-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "ROM controllato: mai oltre 90° al ginocchio", gifUrl: "https://static.tildacdn.net/tild3734-6631-4631-a161-343631613730/video_3.gif", tag: "ROM" },
          { id: "week6-sumo-squats-db", name: "Sumo Squats with Dumbbells on Chest", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "Stance largo = minor traslazione del ginocchio. Al parallelo, mai sotto", gifUrl: "https://static.tildacdn.net/tild3665-6634-4664-a634-393236663364/video_4.gif", tag: "ROM" },
          ...kneeTail(6, true)
        ]
      },
      {
        dayLabel: "Wednesday - Chest",
        exercises: [
          { id: "week6-bench-press", name: "Bench Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "3", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3738-6637-4663-b831-383733386266/video.gif" },
          { id: "week6-incline-bench-45", name: "Incline Bench Press (45°)", muscleGroup: "chest", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild6436-3835-4135-a664-323764646565/video_2.gif" },
          { id: "week6-standing-barbell-press", name: "Standing Barbell Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "6", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3330-3439-4534-a266-306261356166/video_3.gif" },
          { id: "week6-incline-db-press-40", name: "Incline Dumbbell Press (40°)", muscleGroup: "chest", defaultSets: 4, defaultReps: "15", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6365-3034-4932-a261-616532303239/video_4.gif" }
        ]
      },
      {
        dayLabel: "Friday - Back",
        exercises: [
          { id: "week6-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 3, defaultReps: "3", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3734-3638-4262-b561-343830326534/video.gif" },
          { id: "week6-reverse-grip-rows", name: "Reverse-Grip Bent-Over Rows", muscleGroup: "back", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3935-3565-4534-a336-373436356435/video_2.gif" },
          { id: "week6-lat-pulldowns", name: "Lat Pulldowns", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6237-6634-4036-b030-613833376237/video_3.gif" },
          { id: "week6-tbar-rows", name: "T-Bar Rows", muscleGroup: "back", defaultSets: 4, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3437-3236-4464-b731-353134663930/video_4.gif" },
          { id: "week6-shrugs-barbell", name: "Shrugs with Barbell", muscleGroup: "back", defaultSets: 4, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3837-3731-4431-b763-346332396330/video_5.gif" },
          ...kneePhase2(6)
        ]
      },
      absAndCoreDay(6),
      conditioningDay(6, true)
    ]
  },
  7: {
    days: [
      {
        dayLabel: "Monday - Legs and Shoulders",
        exercises: [
          ...kneePriming(7),
          { id: "week7-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 2, defaultReps: "2", defaultRest: 180, notes: "Quasi massimale: solo se le ginocchia sono asintomatiche da 2+ settimane. Tecnica prima di tutto, il test è il giorno dopo", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week7-goblet-box-squat", name: "Goblet Box Squat", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 120, notes: "Sostituisce il front squat: discesa al box/parallelo, tibia verticale", gifUrl: GIF.gobletSquat, tag: "ROM" },
          { id: "week7-sumo-leg-press", name: "Sumo Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "ROM controllato: mai oltre 90° al ginocchio", gifUrl: "https://static.tildacdn.net/tild3234-6266-4061-b635-316531373439/video_3.gif", tag: "ROM" },
          { id: "week7-standing-barbell-press", name: "Standing Barbell Press", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "6", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3365-6331-4738-a630-643833323164/video_4.gif" },
          { id: "week7-seated-db-press", name: "Seated Dumbbell Press", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6564-3939-4639-b833-303462663763/video_5.gif" },
          ...kneeTail(7, true)
        ]
      },
      {
        dayLabel: "Wednesday - Chest and Triceps",
        exercises: [
          { id: "week7-bench-press", name: "Bench Press", muscleGroup: "chest", defaultSets: 2, defaultReps: "2", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3732-3231-4964-b964-376335633461/video.gif" },
          { id: "week7-incline-db-press-30", name: "Incline Dumbbell Press (30°)", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3631-3662-4631-b436-643465393965/video_2.gif" },
          { id: "week7-dips", name: "Dips", muscleGroup: "chest", defaultSets: 3, defaultReps: "15", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6531-3436-4134-b736-623939663866/video_3.gif" },
          { id: "week7-db-french-press-incline", name: "Dumbbell French Press on Incline Bench (30°)", muscleGroup: "triceps", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3933-3831-4232-b731-313762663933/video_4.gif" },
          { id: "week7-cable-triceps-ext", name: "Cable Triceps Extensions", muscleGroup: "triceps", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3735-6539-4137-b763-643965656131/video_5.gif" }
        ]
      },
      {
        dayLabel: "Friday - Back and Biceps",
        exercises: [
          { id: "week7-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 2, defaultReps: "2", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild6162-3861-4862-b037-393365313136/video.gif" },
          { id: "week7-good-morning", name: "Good Morning", muscleGroup: "back", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3561-6461-4462-b339-313563636561/video_2.gif" },
          { id: "week7-bent-over-rows-db", name: "Bent-Over Rows with Dumbbells", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6233-3963-4631-a661-396566326663/video_3.gif" },
          { id: "week7-pull-ups", name: "Pull-Ups", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3031-3133-4738-b439-653036636463/video_4.gif" },
          { id: "week7-reverse-grip-curls", name: "Reverse-Grip Barbell Curls", muscleGroup: "biceps", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6265-6136-4535-b066-326537366163/video_5.gif" },
          { id: "week7-bicep-curls-cable", name: "Bicep Curls on Cable Machine", muscleGroup: "biceps", defaultSets: 3, defaultReps: "20", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6435-3335-4735-b132-323033303738/video_6.gif" },
          ...kneePhase2(7)
        ]
      },
      absAndCoreDay(7),
      conditioningDay(7, true)
    ]
  },
  8: {
    days: [
      {
        dayLabel: "Monday - Legs and Shoulders",
        exercises: [
          ...kneePriming(8),
          { id: "week8-box-squat-test", name: "Box Squat Test 3RM", muscleGroup: "legs", defaultSets: 1, defaultReps: "3", defaultRest: 180, notes: "Test da record sul box squat: 3RM invece del massimale a singola — l'app stima comunque l'1RM (formula Epley). Mai 1RM profondo con i reperti attuali", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week8-box-squat", name: "Box Squat al parallelo", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 120, notes: "Back-off dopo il test: stop al parallelo, discesa controllata", gifUrl: GIF.boxSquat, tag: "ROM" },
          { id: "week8-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "15", defaultRest: 90, notes: "ROM controllato: mai oltre 90° al ginocchio", gifUrl: "https://static.tildacdn.net/tild3563-3730-4864-b035-306564353465/video_3.gif", tag: "ROM" },
          { id: "week8-lateral-raises-db", name: "Lateral Raises with Dumbbells", muscleGroup: "shoulders", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6166-6366-4465-b234-633065366234/video_4.gif" },
          { id: "week8-standing-db-press", name: "Standing Dumbbell Press", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6431-3137-4632-a364-356664306539/video_5.gif" },
          ...kneeTail(8, true)
        ]
      },
      {
        dayLabel: "Wednesday - Chest and Biceps",
        exercises: [
          { id: "week8-bench-press-record", name: "Bench Press (Record)", muscleGroup: "chest", defaultSets: 1, defaultReps: "1", defaultRest: 180, notes: "Knee-neutral: il test massimale di panca resta invariato", gifUrl: "https://static.tildacdn.net/tild6131-3638-4132-a134-316465663063/video.gif" },
          { id: "week8-bench-press", name: "Bench Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3839-3632-4533-b035-613135373532/video_2.gif" },
          { id: "week8-incline-db-press", name: "Incline Dumbbell Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3531-3130-4162-b135-373830376236/video_3.gif" },
          { id: "week8-hammer-curls", name: "Hammer Curls", muscleGroup: "biceps", defaultSets: 5, defaultReps: "5", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3235-3662-4463-b132-383263623532/video_4_1.gif" },
          { id: "week8-single-arm-cable-curls", name: "Single-Arm Cable Curls", muscleGroup: "biceps", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6132-6665-4662-a331-363138303837/video_5.gif" }
        ]
      },
      {
        dayLabel: "Saturday - Deadlift",
        exercises: [
          { id: "week8-deadlift-max", name: "Deadlift", muscleGroup: "back", defaultSets: 1, defaultReps: "max", defaultRest: 180, notes: "Test massimale INVARIATO: lo stacco è un hinge d'anca, knee-neutral. Il tuo esercizio preferito resta intatto", gifUrl: "https://static.tildacdn.net/tild3135-6632-4235-a633-623133393435/video.gif" },
          { id: "week8-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3636-6439-4565-b661-326135336666/video_2.gif" },
          { id: "week8-lat-pulldowns", name: "Lat Pulldowns", muscleGroup: "back", defaultSets: 5, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6630-3461-4433-a538-613636306161/video_3.gif" },
          { id: "week8-tricep-ext-cable", name: "Tricep Extensions on Cable Machine", muscleGroup: "triceps", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6132-6461-4433-b362-623063353236/video_4.gif" },
          { id: "week8-db-french-press-flat", name: "Dumbbell French Press on Flat Bench", muscleGroup: "triceps", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3639-3234-4835-a630-323839346664/video_5.gif" },
          { id: "week8-diamond-pushups", name: "Diamond Push-Ups", muscleGroup: "chest", defaultSets: 2, defaultReps: "max", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3166-3632-4937-a561-346463646265/video_6.gif" },
          ...kneePhase2(8),
          { id: "week8-gate-f3", name: "🚪 Gate Test → Fase 3", muscleGroup: "legs", defaultSets: 1, defaultReps: "8", defaultRest: 0, notes: "GATE Fase 2→3: 8 step-down lenti per gamba senza dolore e senza ginocchio che crolla verso l'interno. Superato → 2° ciclo del programma con Fase 3 attiva: split squat con manubri 4×8, nordic curl senza assistenza, pallof press in mezzo affondo. Il box squat può guadagnare qualche grado di ROM se tutto resta asintomatico", gifUrl: null, tag: "KNEE" }
        ]
      },
      absAndCoreDay(8),
      conditioningDay(8, true)
    ]
  }
};

export default exerciseDB;
