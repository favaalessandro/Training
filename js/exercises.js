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
  2: { days: [absAndCoreDay(2)] },
  3: { days: [absAndCoreDay(3)] },
  4: { days: [absAndCoreDay(4)] },
  5: { days: [absAndCoreDay(5)] },
  6: { days: [absAndCoreDay(6)] },
  7: { days: [absAndCoreDay(7)] },
  8: { days: [absAndCoreDay(8)] }
};

export default exerciseDB;
