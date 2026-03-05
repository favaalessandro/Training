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
            notes: "Per ogni gamba, si possono fare con supporto",
            gifUrl: "https://static.tildacdn.net/tild6238-3665-4233-a139-636439376530/video_1.gif"
          },
          {
            id: "hw1-box-jumps",
            name: "Box Jumps",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3734-3961-4736-b164-323032346539/video_1_1.gif"
          },
          {
            id: "hw1-step-ups",
            name: "Step-ups with Additional Weight on Elevation (each leg)",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "14",
            defaultRest: 90,
            notes: "Con peso aggiuntivo su un rialzo, per ogni gamba",
            gifUrl: "https://static.tildacdn.net/tild6162-6234-4632-a435-666136376463/video_2.gif"
          },
          {
            id: "hw1-standing-calf-raises",
            name: "Standing Calf Raises with Additional Weight (one leg)",
            muscleGroup: "legs",
            defaultSets: 4,
            defaultReps: "20",
            defaultRest: 60,
            notes: "Con peso aggiuntivo su una gamba",
            gifUrl: "https://static.tildacdn.net/tild3838-3538-4239-b666-363065373663/video_3.gif"
          },
          {
            id: "hw1-chair-pose",
            name: "Chair Pose",
            muscleGroup: "legs",
            defaultSets: 1,
            defaultReps: "max",
            defaultRest: 0,
            notes: "Tenere la posizione il più a lungo possibile",
            gifUrl: "https://static.tildacdn.net/tild6338-3962-4435-a463-363038303638/video_4.gif"
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
            notes: "Presa larga",
            gifUrl: "https://static.tildacdn.net/tild3633-3861-4036-b065-316237656366/video_1.gif"
          },
          {
            id: "hw1-reverse-grip-pullups",
            name: "Reverse-grip Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Presa inversa (supina)",
            gifUrl: "https://static.tildacdn.net/tild3634-6637-4138-a262-356439336661/video_1_1.gif"
          },
          {
            id: "hw1-low-bar-pullups",
            name: "Low Bar Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Sbarra bassa",
            gifUrl: "https://static.tildacdn.net/tild3232-6266-4330-b337-663133393430/video_2.gif"
          },
          {
            id: "hw1-reverse-narrow-low-bar-pullups",
            name: "Reverse Narrow Grip Low Bar Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Presa inversa stretta, sbarra bassa",
            gifUrl: "https://static.tildacdn.net/tild3432-6430-4963-b338-623234363030/video_5.gif"
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
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3230-3561-4265-b235-303430623933/video_4.gif"
          },
          {
            id: "hw1-elevated-feet-pushups",
            name: "Elevated Feet Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Piedi rialzati",
            gifUrl: "https://static.tildacdn.net/tild3534-6630-4665-b934-313539313332/video1.gif"
          },
          {
            id: "hw1-close-grip-pushups",
            name: "Close-grip Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Presa stretta",
            gifUrl: "https://static.tildacdn.net/tild3735-3565-4461-a132-336139303531/video2_1.gif"
          },
          {
            id: "hw1-archer-pushups",
            name: "Archer Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6334-6234-4464-b061-653438313437/video3_1.gif"
          },
          {
            id: "hw1-french-press",
            name: "French Press",
            muscleGroup: "arms",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3936-6633-4734-a532-353339636132/video4_1.gif"
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
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6263-6137-4438-b539-393661396232/video_1.gif"
          },
          {
            id: "hw1-leg-raises-parallel-bars",
            name: "Leg Raises on Parallel Bars",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 60,
            notes: "Alle parallele",
            gifUrl: "https://static.tildacdn.net/tild3330-6538-4563-b734-326637376265/video1.gif"
          },
          {
            id: "hw1-crunches",
            name: "Crunches",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "20",
            defaultRest: 60,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6235-6663-4232-b838-346339656331/video2.gif"
          },
          {
            id: "hw1-plank",
            name: "Plank",
            muscleGroup: "core",
            defaultSets: 2,
            defaultReps: "max",
            defaultRest: 60,
            notes: "Tenere la posizione il più a lungo possibile",
            gifUrl: "https://static.tildacdn.net/tild3135-3763-4430-a437-306161613333/video3.gif"
          }
        ]
      }
    ]
  },
  2: {
    days: [
      {
        dayLabel: "Monday — Legs",
        exercises: [
          {
            id: "hw2-weighted-squats-jump",
            name: "Weighted Squats with Jump",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "15",
            defaultRest: 90,
            notes: "Squat con peso e salto",
            gifUrl: "https://static.tildacdn.net/tild3238-3838-4338-a466-656630326264/video.gif"
          },
          {
            id: "hw2-pistol-squats",
            name: "Pistol Squats",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3530-3134-4238-b635-363839303962/video2.gif"
          },
          {
            id: "hw2-weighted-lunges",
            name: "Weighted Lunges (each leg)",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "15",
            defaultRest: 90,
            notes: "Per ogni gamba",
            gifUrl: "https://static.tildacdn.net/tild3430-6631-4765-b137-316539393762/video3.gif"
          },
          {
            id: "hw2-chair-pose-weight",
            name: "Chair Pose with Weight",
            muscleGroup: "legs",
            defaultSets: 1,
            defaultReps: "max",
            defaultRest: 0,
            notes: "Tenere la posizione il più a lungo possibile con peso",
            gifUrl: "https://static.tildacdn.net/tild6466-6338-4038-a136-323162343162/video4.gif"
          },
          {
            id: "hw2-single-leg-calf-raises-weight",
            name: "Single-leg Calf Raises with Weight",
            muscleGroup: "legs",
            defaultSets: 4,
            defaultReps: "25",
            defaultRest: 60,
            notes: "Per ogni gamba, con peso",
            gifUrl: "https://static.tildacdn.net/tild3936-3232-4336-b539-396636623464/video5.gif"
          }
        ]
      },
      {
        dayLabel: "Wednesday — Back + Biceps",
        exercises: [
          {
            id: "hw2-reverse-grip-pullups",
            name: "Reverse-grip Pull-ups",
            muscleGroup: "back",
            defaultSets: 4,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Presa inversa (supina)",
            gifUrl: "https://static.tildacdn.net/tild6462-3931-4462-a362-393635623334/video.gif"
          },
          {
            id: "hw2-wide-grip-alternating-pullups",
            name: "Wide-grip Alternating Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Presa larga, alternando",
            gifUrl: "https://static.tildacdn.net/tild3338-3962-4639-b535-303666316637/video2.gif"
          },
          {
            id: "hw2-close-grip-low-bar-pullups",
            name: "Close-grip Low Bar Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "Presa stretta, sbarra bassa",
            gifUrl: "https://static.tildacdn.net/tild3366-3663-4065-a563-343966346263/video3.gif"
          },
          {
            id: "hw2-pullups-behind-neck",
            name: "Pull-ups Behind the Neck",
            muscleGroup: "back",
            defaultSets: 5,
            defaultReps: "6",
            defaultRest: 90,
            notes: "Trazioni dietro il collo",
            gifUrl: "https://static.tildacdn.net/tild6139-3132-4834-b032-383832316437/video4.gif"
          }
        ]
      },
      {
        dayLabel: "Friday — Chest + Triceps",
        exercises: [
          {
            id: "hw2-dips",
            name: "Dips",
            muscleGroup: "chest",
            defaultSets: 4,
            defaultReps: "10",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3837-6563-4236-a636-643333616564/video.gif"
          },
          {
            id: "hw2-one-leg-elevated-feet-pushups",
            name: "One-leg Elevated Feet Push-ups",
            muscleGroup: "chest",
            defaultSets: 4,
            defaultReps: "10",
            defaultRest: 90,
            notes: "Push-up con piedi rialzati su una gamba",
            gifUrl: "https://static.tildacdn.net/tild3363-6435-4437-b635-303930393039/video1.gif"
          },
          {
            id: "hw2-triceps-pushups",
            name: "Triceps Push-ups",
            muscleGroup: "arms",
            defaultSets: 4,
            defaultReps: "12",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6539-3832-4665-a363-306537356637/video2.gif"
          },
          {
            id: "hw2-french-press",
            name: "French Press",
            muscleGroup: "arms",
            defaultSets: 4,
            defaultReps: "8",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3965-6231-4666-b866-393262306330/video3.gif"
          },
          {
            id: "hw2-pushups-max",
            name: "Push-ups",
            muscleGroup: "chest",
            defaultSets: 1,
            defaultReps: "max",
            defaultRest: 0,
            notes: "Massimo numero di ripetizioni",
            gifUrl: "https://static.tildacdn.net/tild3635-3838-4065-b838-613839383932/video4.gif"
          }
        ]
      },
      {
        dayLabel: "Saturday — Abs + Static",
        exercises: [
          {
            id: "hw2-hanging-leg-raises",
            name: "Hanging Leg Raises",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 60,
            notes: "",
            gifUrl: ""
          },
          {
            id: "hw2-crunches",
            name: "Crunches",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "20",
            defaultRest: 60,
            notes: "",
            gifUrl: ""
          },
          {
            id: "hw2-alternating-heel-touches",
            name: "Alternating Heel Touches",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "15",
            defaultRest: 60,
            notes: "",
            gifUrl: ""
          },
          {
            id: "hw2-lying-leg-raises",
            name: "Lying Leg Raises",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "20",
            defaultRest: 60,
            notes: "",
            gifUrl: ""
          },
          {
            id: "hw2-plank",
            name: "Plank",
            muscleGroup: "core",
            defaultSets: 2,
            defaultReps: "max",
            defaultRest: 60,
            notes: "Tenere la posizione il più a lungo possibile",
            gifUrl: ""
          }
        ]
      }
    ]
  },
  3: { days: [] },
  4: { days: [] },
  5: { days: [] },
  6: { days: [] },
  7: { days: [] }
};

export default homeExerciseDB;
