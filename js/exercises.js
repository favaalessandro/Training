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
          { id: "week1-barbell-squats", name: "Barbell Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 120, notes: "" },
          { id: "week1-leg-press", name: "Leg Press", muscleGroup: "legs", defaultSets: 2, defaultReps: "15", defaultRest: 90, notes: "" },
          { id: "week1-deadlift-db", name: "Deadlift with Dumbbells", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Pause for 1 sec at the bottom" },
          { id: "week1-single-leg-squats", name: "Single-Leg Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "With or without support" },
          { id: "week1-jumping-jacks", name: "Jumping Jacks to Max Height", muscleGroup: "legs", defaultSets: 4, defaultReps: "10", defaultRest: 60, notes: "Jump as high as possible" }
        ]
      },
      {
        dayLabel: "Wednesday - Chest, Biceps, Shoulders",
        exercises: [
          { id: "week1-bench-press", name: "Bench Press", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "2 sec pause at the bottom" },
          { id: "week1-dips", name: "Dips", muscleGroup: "chest", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "With or without additional weight" },
          { id: "week1-incline-db-press", name: "Incline Dumbbell Press (45°)", muscleGroup: "chest", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "45° incline" },
          { id: "week1-prayer-bench-press", name: "Prayer Bench Press", muscleGroup: "shoulders", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "" },
          { id: "week1-hammer-curls", name: "Hammer Curls", muscleGroup: "arms", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "" },
          { id: "week1-db-curls-incline", name: "Dumbbell Curls with Supination (Incline 45°)", muscleGroup: "arms", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "On incline bench 45°" },
          { id: "week1-arm-swings", name: "Standing Arm Swings", muscleGroup: "shoulders", defaultSets: 2, defaultReps: "20", defaultRest: 60, notes: "" }
        ]
      },
      {
        dayLabel: "Friday - Back, Triceps",
        exercises: [
          { id: "week1-deadlift", name: "Deadlift", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "Sumo or conventional, whichever is more comfortable" },
          { id: "week1-bent-over-row", name: "Bent-Over Barbell Row", muscleGroup: "back", defaultSets: 2, defaultReps: "10", defaultRest: 90, notes: "" },
          { id: "week1-wide-lat-pulldown", name: "Wide-Grip Lat Pulldown", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "" },
          { id: "week1-db-rows-bench", name: "Dumbbell Rows on Bench", muscleGroup: "back", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "" },
          { id: "week1-db-shrugs", name: "Dumbbell Shrugs", muscleGroup: "back", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "" },
          { id: "week1-triceps-cable", name: "Triceps Extensions with Cable Machine", muscleGroup: "arms", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "" }
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
