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
  1: { days: [absAndCoreDay(1)] },
  2: { days: [absAndCoreDay(2)] },
  3: { days: [absAndCoreDay(3)] },
  4: { days: [absAndCoreDay(4)] },
  5: { days: [absAndCoreDay(5)] },
  6: { days: [absAndCoreDay(6)] },
  7: { days: [absAndCoreDay(7)] },
  8: { days: [absAndCoreDay(8)] }
};

export default exerciseDB;
