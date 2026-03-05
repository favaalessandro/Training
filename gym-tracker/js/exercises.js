/**
 * Exercise Database
 *
 * This file starts with demo data for testing.
 * Real workout weeks will be added progressively from program screenshots.
 *
 * Format:
 * { weekNumber: { days: [{ dayLabel, exercises: [...] }] } }
 */

const exerciseDB = {
  1: {
    days: [
      {
        dayLabel: "Day 1 - Push",
        exercises: [
          {
            id: "week1-bench-press",
            name: "Bench Press",
            muscleGroup: "chest",
            defaultSets: 4,
            defaultReps: "8-10",
            defaultRest: 120,
            notes: "Controlla la discesa, pausa al petto"
          },
          {
            id: "week1-incline-db-press",
            name: "Incline Dumbbell Press",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "10-12",
            defaultRest: 90,
            notes: "30° di inclinazione"
          },
          {
            id: "week1-ohp",
            name: "Overhead Press",
            muscleGroup: "shoulders",
            defaultSets: 3,
            defaultReps: "8-10",
            defaultRest: 120,
            notes: "Bilanciere, posizione strict"
          },
          {
            id: "week1-lateral-raise",
            name: "Lateral Raise",
            muscleGroup: "shoulders",
            defaultSets: 3,
            defaultReps: "12-15",
            defaultRest: 60,
            notes: "Leggero, focus sulla contrazione"
          },
          {
            id: "week1-tricep-pushdown",
            name: "Tricep Pushdown",
            muscleGroup: "arms",
            defaultSets: 3,
            defaultReps: "12-15",
            defaultRest: 60,
            notes: "Cavo, corda o barra"
          }
        ]
      },
      {
        dayLabel: "Day 2 - Pull",
        exercises: [
          {
            id: "week1-barbell-row",
            name: "Barbell Row",
            muscleGroup: "back",
            defaultSets: 4,
            defaultReps: "8-10",
            defaultRest: 120,
            notes: "Presa prona, busto a 45°"
          },
          {
            id: "week1-lat-pulldown",
            name: "Lat Pulldown",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "10-12",
            defaultRest: 90,
            notes: "Presa larga"
          },
          {
            id: "week1-face-pull",
            name: "Face Pull",
            muscleGroup: "shoulders",
            defaultSets: 3,
            defaultReps: "15-20",
            defaultRest: 60,
            notes: "Rotazione esterna alla fine"
          },
          {
            id: "week1-barbell-curl",
            name: "Barbell Curl",
            muscleGroup: "arms",
            defaultSets: 3,
            defaultReps: "10-12",
            defaultRest: 60,
            notes: "Bilanciere EZ o dritto"
          },
          {
            id: "week1-hammer-curl",
            name: "Hammer Curl",
            muscleGroup: "arms",
            defaultSets: 3,
            defaultReps: "10-12",
            defaultRest: 60,
            notes: "Alternato o simultaneo"
          }
        ]
      },
      {
        dayLabel: "Day 3 - Legs",
        exercises: [
          {
            id: "week1-squat",
            name: "Barbell Squat",
            muscleGroup: "legs",
            defaultSets: 4,
            defaultReps: "6-8",
            defaultRest: 180,
            notes: "Profondità parallelo o sotto"
          },
          {
            id: "week1-rdl",
            name: "Romanian Deadlift",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10-12",
            defaultRest: 120,
            notes: "Focus sui femorali, schiena neutra"
          },
          {
            id: "week1-leg-press",
            name: "Leg Press",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10-12",
            defaultRest: 90,
            notes: "Piedi larghezza spalle"
          },
          {
            id: "week1-leg-curl",
            name: "Leg Curl",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "12-15",
            defaultRest: 60,
            notes: "Macchina, contrazione lenta"
          },
          {
            id: "week1-calf-raise",
            name: "Calf Raise",
            muscleGroup: "legs",
            defaultSets: 4,
            defaultReps: "15-20",
            defaultRest: 60,
            notes: "Pausa in alto 2 secondi"
          }
        ]
      }
    ]
  },
  3: {
    days: [
      {
        dayLabel: "Day 1 - Legs (Monday)",
        exercises: [
          {
            id: "week3-barbell-squats",
            name: "Barbell Squats",
            muscleGroup: "legs",
            defaultSets: 4,
            defaultReps: "6",
            defaultRest: 180,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3339-3433-4134-a565-393135373832/video.gif"
          },
          {
            id: "week3-front-squats",
            name: "Front Squats",
            muscleGroup: "legs",
            defaultSets: 2,
            defaultReps: "10",
            defaultRest: 120,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6638-3430-4663-a634-326163666530/video_2.gif"
          },
          {
            id: "week3-deadlifts",
            name: "Deadlifts",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 150,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3939-6334-4831-b230-663137353634/video_3.gif"
          },
          {
            id: "week3-leg-press",
            name: "Leg Press",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 120,
            notes: "Pause at the bottom for 3 sec",
            gifUrl: "https://static.tildacdn.net/tild6464-6135-4432-a530-346530383764/video_4.gif"
          },
          {
            id: "week3-jumping-jacks",
            name: "Jumping Jacks to Maximum Height",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6130-3335-4365-b563-616437613833/video_5.gif"
          }
        ]
      }
    ]
  }
};

export default exerciseDB;
