/**
 * Home Workout Exercise Database
 *
 * 7 weeks of home workouts.
 * Exercises will be added progressively.
 *
 * Format:
 * { weekNumber: { days: [{ dayLabel, exercises: [...] }] } }
 */

const homeExerciseDB = {
  1: {
    days: [
      {
        dayLabel: "Monday — Legs",
        exercises: [
          {
            id: "hw1-pistol-squats",
            name: "Pistol Squats (each leg)",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Per ogni gamba, si possono fare con supporto"
          },
          {
            id: "hw1-box-jumps",
            name: "Box Jumps",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: ""
          },
          {
            id: "hw1-step-ups",
            name: "Step-ups with Additional Weight on Elevation (each leg)",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "14",
            defaultRest: 90,
            notes: "Con peso aggiuntivo su un rialzo, per ogni gamba"
          },
          {
            id: "hw1-standing-calf-raises",
            name: "Standing Calf Raises with Additional Weight (one leg)",
            muscleGroup: "legs",
            defaultSets: 4,
            defaultReps: "20",
            defaultRest: 60,
            notes: "Con peso aggiuntivo su una gamba"
          },
          {
            id: "hw1-chair-pose",
            name: "Chair Pose",
            muscleGroup: "legs",
            defaultSets: 1,
            defaultReps: "max",
            defaultRest: 0,
            notes: "Tenere la posizione il più a lungo possibile"
          }
        ]
      },
      {
        dayLabel: "Wednesday — Back + Biceps",
        exercises: [
          {
            id: "hw1-wide-grip-pullups",
            name: "Wide-grip Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "Presa larga"
          },
          {
            id: "hw1-reverse-grip-pullups",
            name: "Reverse-grip Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Presa inversa (supina)"
          },
          {
            id: "hw1-low-bar-pullups",
            name: "Low Bar Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Sbarra bassa"
          },
          {
            id: "hw1-reverse-narrow-low-bar-pullups",
            name: "Reverse Narrow Grip Low Bar Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Presa inversa stretta, sbarra bassa"
          }
        ]
      },
      {
        dayLabel: "Friday — Chest + Triceps",
        exercises: [
          {
            id: "hw1-dips",
            name: "Dips",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: ""
          },
          {
            id: "hw1-elevated-feet-pushups",
            name: "Elevated Feet Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Piedi rialzati"
          },
          {
            id: "hw1-close-grip-pushups",
            name: "Close-grip Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Presa stretta"
          },
          {
            id: "hw1-archer-pushups",
            name: "Archer Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: ""
          },
          {
            id: "hw1-french-press",
            name: "French Press",
            muscleGroup: "arms",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: ""
          }
        ]
      },
      {
        dayLabel: "Saturday — Abs + Static",
        exercises: [
          {
            id: "hw1-hanging-leg-raises",
            name: "Hanging Leg Raises",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 60,
            notes: ""
          },
          {
            id: "hw1-leg-raises-parallel-bars",
            name: "Leg Raises on Parallel Bars",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 60,
            notes: "Alle parallele"
          },
          {
            id: "hw1-crunches",
            name: "Crunches",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "20",
            defaultRest: 60,
            notes: ""
          },
          {
            id: "hw1-plank",
            name: "Plank",
            muscleGroup: "core",
            defaultSets: 2,
            defaultReps: "max",
            defaultRest: 60,
            notes: "Tenere la posizione il più a lungo possibile"
          }
        ]
      }
    ]
  },
  2: { days: [] },
  3: { days: [] },
  4: { days: [] },
  5: { days: [] },
  6: { days: [] },
  7: { days: [] }
};

export default homeExerciseDB;
