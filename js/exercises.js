/**
 * Exercise Database
 *
 * Real workout program — 8 weeks.
 * Weeks are added progressively from program screenshots.
 *
 * Format:
 * { weekNumber: { days: [{ dayLabel, exercises: [...] }] } }
 */

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
          { id: "week1-barbell-squats", name: "Barbell Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild6636-3736-4538-b466-376134306566/video.gif" },
          { id: "week1-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 2, defaultReps: "15", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3566-6664-4061-a336-343838626130/video_2.gif" },
          { id: "week1-deadlift-db", name: "Deadlift with Dumbbells", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Pause for 1 sec at the bottom", gifUrl: "https://static.tildacdn.net/tild6162-3331-4138-b135-623638386563/video_3.gif" },
          { id: "week1-single-leg-squats", name: "Single-Leg Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "With or without support", gifUrl: "https://static.tildacdn.net/tild3937-6564-4666-b235-313966383661/video_4.gif" },
          { id: "week1-jumping-jacks", name: "Jumping Jacks to Max Height", muscleGroup: "legs", defaultSets: 4, defaultReps: "10", defaultRest: 60, notes: "Jump as high as possible", gifUrl: "https://static.tildacdn.net/tild6137-6436-4561-b432-613737616631/video_5.gif" }
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
          { id: "week1-triceps-cable", name: "Triceps Extensions with Cable Machine", muscleGroup: "arms", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3339-6337-4432-b738-656539376238/video_6.gif" }
        ]
      },
      absAndCoreDay(1)
    ]
  },
  2: {
    days: [
      {
        dayLabel: "Monday - Legs, Shoulders",
        exercises: [
          { id: "week2-barbell-squats", name: "Barbell Squats", muscleGroup: "legs", defaultSets: 2, defaultReps: "8", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3733-3264-4463-b961-626537353962/video.gif" },
          { id: "week2-barbell-squats-pause", name: "Barbell Squats with Pause at the Bottom", muscleGroup: "legs", defaultSets: 2, defaultReps: "7", defaultRest: 120, notes: "Pausa in basso prima di risalire", gifUrl: "https://static.tildacdn.net/tild6464-6635-4131-b138-303139383731/video_2.gif" },
          { id: "week2-leg-press-wide", name: "Leg Press with Wide and High Stance", muscleGroup: "legs", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "Stance largo e alto", gifUrl: "https://static.tildacdn.net/tild6163-6536-4036-b364-636365333334/video_3.gif" },
          { id: "week2-walking-lunges", name: "Walking Lunges with Dumbbells", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "10 reps per gamba", gifUrl: "https://static.tildacdn.net/tild6662-3736-4732-b766-306361363730/video_4.gif" },
          { id: "week2-seated-lateral-raises", name: "Seated Dumbbell Lateral Raises", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6661-3132-4333-b639-376133613436/video_5.gif" },
          { id: "week2-standing-shoulder-press", name: "Standing Barbell Shoulder Press", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3836-3938-4730-a232-643536336135/video_6.gif" }
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
          { id: "week2-reverse-grip-curls", name: "Reverse Grip Barbell Curls", muscleGroup: "arms", defaultSets: 2, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6535-6630-4962-b735-323231353266/video_7.gif" }
        ]
      },
      absAndCoreDay(2)
    ]
  },
  3: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          { id: "week3-barbell-squats", name: "Barbell Squats", muscleGroup: "legs", defaultSets: 4, defaultReps: "6", defaultRest: 150, notes: "", gifUrl: "https://static.tildacdn.net/tild3339-3433-4134-a565-393135373832/video.gif" },
          { id: "week3-front-squats", name: "Front Squats", muscleGroup: "legs", defaultSets: 2, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild6638-3430-4663-a634-326163666530/video_2.gif" },
          { id: "week3-deadlifts", name: "Deadlifts", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3939-6334-4831-b230-663137353634/video_3.gif" },
          { id: "week3-leg-press-pause", name: "Leg Press with Pause at the Bottom for 3 sec", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "Pausa di 3 secondi in basso", gifUrl: "https://static.tildacdn.net/tild6464-6135-4432-a530-346530383764/video_4.gif" },
          { id: "week3-jumping-jacks", name: "Jumping Jacks to Maximum Height", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6130-3335-4365-b563-616437613833/video_5.gif" }
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
          { id: "week3-straight-arm-pulldowns", name: "Straight-Arm Pulldowns", muscleGroup: "back", defaultSets: 4, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3738-6363-4631-a431-366639366337/video_5.gif" }
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
      absAndCoreDay(3)
    ]
  },
  4: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          { id: "week4-squats", name: "Squats", muscleGroup: "legs", defaultSets: 5, defaultReps: "5", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3064-6431-4233-b933-376666646539/video.gif" },
          { id: "week4-leg-press-pause", name: "Leg Press (pause for 3 seconds at the bottom)", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Pausa di 3 secondi in basso", gifUrl: "https://static.tildacdn.net/tild3139-6631-4034-b334-666532616262/video_2.gif" },
          { id: "week4-front-squats-db", name: "Front Squats with Dumbbell", muscleGroup: "legs", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3666-3764-4964-a631-656264663136/video_3.gif" },
          { id: "week4-long-jumps", name: "Long Jumps", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6664-3534-4434-a433-343864363662/video_4.gif" },
          { id: "week4-weighted-hyperext", name: "Weighted Hyperextensions", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3333-3934-4032-a537-353262653164/video_5.gif" }
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
          { id: "week4-good-morning", name: "Good Morning", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "Non usare troppo peso, concentrati sul sentire il movimento", gifUrl: "https://static.tildacdn.net/tild3263-3363-4465-b234-616435336361/video_4.gif" }
        ]
      },
      absAndCoreDay(4)
    ]
  },
  5: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          { id: "week5-squats", name: "Squats", muscleGroup: "legs", defaultSets: 4, defaultReps: "4", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3133-6264-4030-a539-353964656462/video0.gif" },
          { id: "week5-front-squats", name: "Front Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3034-3935-4565-a431-313465623132/video_2.gif" },
          { id: "week5-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3639-3561-4838-b934-616163363962/video_3.gif" },
          { id: "week5-high-jumps", name: "High Jumps", muscleGroup: "legs", defaultSets: 4, defaultReps: "12", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3039-3865-4765-a464-653639346330/video_4.gif" },
          { id: "week5-single-leg-squats", name: "Single-Leg Squats", muscleGroup: "legs", defaultSets: 2, defaultReps: "10", defaultRest: 90, notes: "Si possono fare con supporto", gifUrl: "https://static.tildacdn.net/tild3764-6637-4163-b035-663833643465/video_5.gif" }
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
          { id: "week5-leg-press-fri", name: "Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6264-3366-4039-b539-626530333935/video_2.gif" },
          { id: "week5-cable-rows-pause", name: "Cable Rows (2s pause at top)", muscleGroup: "back", defaultSets: 5, defaultReps: "8", defaultRest: 90, notes: "2 secondi di pausa in alto", gifUrl: "https://static.tildacdn.net/tild3533-3262-4262-a335-393763396365/video_3.gif" },
          { id: "week5-vertical-jumps", name: "Vertical Jumps", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3661-6438-4638-b264-343633663566/video_4.gif" }
        ]
      },
      absAndCoreDay(5)
    ]
  },
  6: {
    days: [
      {
        dayLabel: "Monday - Legs",
        exercises: [
          { id: "week6-squats", name: "Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "3", defaultRest: 180, notes: "", gifUrl: "https://static.tildacdn.net/tild3932-3532-4732-a538-643938373735/video.gif" },
          { id: "week6-trap-bar-squats", name: "Trap Bar Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3062-3335-4432-a534-316163356137/video_2.gif" },
          { id: "week6-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3734-6631-4631-a161-343631613730/video_3.gif" },
          { id: "week6-sumo-squats-db", name: "Sumo Squats with Dumbbells on Chest", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3665-6634-4664-a634-393236663364/video_4.gif" }
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
          { id: "week6-shrugs-barbell", name: "Shrugs with Barbell", muscleGroup: "back", defaultSets: 4, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3837-3731-4431-b763-346332396330/video_5.gif" }
        ]
      },
      absAndCoreDay(6)
    ]
  },
  7: { days: [absAndCoreDay(7)] },
  8: { days: [absAndCoreDay(8)] }
};

export default exerciseDB;
