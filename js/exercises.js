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
        notes: "Alle parallele, movimento controllato senza slancio"
      },
      {
        id: `week${weekNum}-russian-twist`,
        name: "Russian Twist with Extra Weight",
        muscleGroup: "core",
        defaultSets: 3,
        defaultReps: "20",
        defaultRest: 60,
        notes: "Con peso aggiuntivo, 20 reps totali (10 per lato)"
      },
      {
        id: `week${weekNum}-hyperextension`,
        name: "Hyperextension with Extra Weight",
        muscleGroup: "core",
        defaultSets: 3,
        defaultReps: "10",
        defaultRest: 90,
        notes: "Con peso aggiuntivo, contrazione controllata in alto"
      },
      {
        id: `week${weekNum}-scissors`,
        name: "Scissors for Abs",
        muscleGroup: "core",
        defaultSets: 3,
        defaultReps: "40 sec",
        defaultRest: 60,
        notes: "3×40 secondi, gambe tese e basse"
      },
      {
        id: `week${weekNum}-plank`,
        name: "Plank",
        muscleGroup: "core",
        defaultSets: 1,
        defaultReps: "max",
        defaultRest: 0,
        notes: "Massimo tempo possibile, mantieni la posizione corretta"
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
