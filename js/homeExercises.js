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
            gifUrl: "https://static.tildacdn.net/tild6336-3938-4830-b966-383930613863/video_1_1_1.gif"
          },
          {
            id: "hw2-crunches",
            name: "Crunches",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "20",
            defaultRest: 60,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3665-6663-4533-b635-303037393964/video2.gif"
          },
          {
            id: "hw2-alternating-heel-touches",
            name: "Alternating Heel Touches",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "15",
            defaultRest: 60,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6330-3031-4835-b334-666464616164/video3.gif"
          },
          {
            id: "hw2-lying-leg-raises",
            name: "Lying Leg Raises",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "20",
            defaultRest: 60,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6366-3236-4132-a139-616533323339/video4.gif"
          },
          {
            id: "hw2-plank",
            name: "Plank",
            muscleGroup: "core",
            defaultSets: 2,
            defaultReps: "max",
            defaultRest: 60,
            notes: "Tenere la posizione il più a lungo possibile",
            gifUrl: "https://static.tildacdn.net/tild3030-6363-4364-b336-313463656436/video5.gif"
          }
        ]
      }
    ]
  },
  3: {
    days: [
      {
        dayLabel: "Monday — Legs",
        exercises: [
          {
            id: "hw3-squats-jump",
            name: "Squats with Jump",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "18",
            defaultRest: 90,
            notes: "Squat con salto",
            gifUrl: "https://static.tildacdn.net/tild6634-6661-4362-b634-643233333132/video.gif"
          },
          {
            id: "hw3-step-up-jumps",
            name: "Step-up Jumps",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild6637-3536-4337-b861-366663633563/video2.gif"
          },
          {
            id: "hw3-each-leg-step-ups",
            name: "Each Leg Step-ups (combined approach)",
            muscleGroup: "legs",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Per ogni gamba, approccio combinato",
            gifUrl: "https://static.tildacdn.net/tild6636-3036-4531-b665-333630383339/video3.gif"
          },
          {
            id: "hw3-chair-pose-weight-front",
            name: "Chair Pose with Weight in Front",
            muscleGroup: "legs",
            defaultSets: 2,
            defaultReps: "25",
            defaultRest: 60,
            notes: "Con peso davanti",
            gifUrl: "https://static.tildacdn.net/tild3962-6535-4666-a439-316661323632/video4.gif"
          }
        ]
      },
      {
        dayLabel: "Wednesday — Back + Biceps",
        exercises: [
          {
            id: "hw3-wide-grip-pullups-pause",
            name: "Wide-grip Pull-ups with Pause",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "Presa larga con pausa",
            gifUrl: "https://static.tildacdn.net/tild3165-3863-4066-b038-343039623736/video.gif"
          },
          {
            id: "hw3-parallel-grip-pullups",
            name: "Parallel Grip Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "Presa parallela",
            gifUrl: "https://static.tildacdn.net/tild3037-6630-4531-a565-306638376635/video1.gif"
          },
          {
            id: "hw3-low-bar-pullups",
            name: "Low Bar Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Sbarra bassa",
            gifUrl: "https://static.tildacdn.net/tild3237-6437-4234-b764-373331346133/video2.gif"
          },
          {
            id: "hw3-low-bar-parallel-grip-pullups",
            name: "Low Bar Parallel Grip Pull-ups",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "8",
            defaultRest: 90,
            notes: "Sbarra bassa, presa parallela",
            gifUrl: "https://static.tildacdn.net/tild3834-3030-4333-a239-306434373765/video3.gif"
          },
          {
            id: "hw3-bent-over-rows",
            name: "Bent-over Barbell Rows (with weight)",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "15",
            defaultRest: 90,
            notes: "Rematore con bilanciere/peso",
            gifUrl: "https://static.tildacdn.net/tild3336-3831-4238-a363-656666353066/video4.gif"
          }
        ]
      },
      {
        dayLabel: "Friday — Chest + Triceps",
        exercises: [
          {
            id: "hw3-wide-dips-forward-lean",
            name: "Wide-grip Dips with Slight Forward Lean",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Presa larga con leggera inclinazione avanti",
            gifUrl: "https://static.tildacdn.net/tild3137-3831-4464-b536-646236333038/video.gif"
          },
          {
            id: "hw3-elevated-pushups",
            name: "Elevated Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Push-up con piedi rialzati",
            gifUrl: "https://static.tildacdn.net/tild3365-6337-4438-a132-666232653437/video1.gif"
          },
          {
            id: "hw3-close-grip-pushups",
            name: "Close-grip Push-ups",
            muscleGroup: "chest",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 90,
            notes: "Presa stretta",
            gifUrl: "https://static.tildacdn.net/tild6566-6332-4364-b666-646332306165/video2.gif"
          },
          {
            id: "hw3-weighted-back-extensions",
            name: "Weighted Back Extensions (bent-over position)",
            muscleGroup: "back",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "Con manubri, pesi o bottiglie d'acqua, posizione piegata",
            gifUrl: "https://static.tildacdn.net/tild6533-3931-4964-b263-366338373963/video3.gif"
          },
          {
            id: "hw3-french-press",
            name: "French Press",
            muscleGroup: "arms",
            defaultSets: 3,
            defaultReps: "10",
            defaultRest: 90,
            notes: "",
            gifUrl: "https://static.tildacdn.net/tild3363-3464-4737-b634-623164366266/video4.gif"
          }
        ]
      },
      {
        dayLabel: "Saturday — Abs + Static",
        exercises: [
          {
            id: "hw3-leg-raises-bar",
            name: "Leg Raises on a Bar",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 60,
            notes: "Alla sbarra",
            gifUrl: "https://static.tildacdn.net/tild3563-3564-4931-b663-396337643735/video.gif"
          },
          {
            id: "hw3-leg-raises-parallel-bars",
            name: "Leg Raises on Parallel Bars",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "12",
            defaultRest: 60,
            notes: "Alle parallele",
            gifUrl: "https://static.tildacdn.net/tild3034-3461-4262-a339-326134313562/video1.gif"
          },
          {
            id: "hw3-crunches-elevated",
            name: "Crunches (knees bent on elevated surface)",
            muscleGroup: "core",
            defaultSets: 3,
            defaultReps: "20",
            defaultRest: 60,
            notes: "Con ginocchia piegate su superficie rialzata",
            gifUrl: "https://static.tildacdn.net/tild3262-6236-4363-b830-323561656136/video2.gif"
          },
          {
            id: "hw3-chair-pose",
            name: "Chair Pose",
            muscleGroup: "core",
            defaultSets: 2,
            defaultReps: "max",
            defaultRest: 60,
            notes: "Tenere la posizione il più a lungo possibile",
            gifUrl: "https://static.tildacdn.net/tild3064-3039-4130-a233-396137623661/video3.gif"
          },
          {
            id: "hw3-plank",
            name: "Plank",
            muscleGroup: "core",
            defaultSets: 1,
            defaultReps: "max",
            defaultRest: 0,
            notes: "Tenere la posizione il più a lungo possibile",
            gifUrl: "https://static.tildacdn.net/tild6132-3635-4266-b863-316161343434/video4.gif"
          }
        ]
      }
    ]
  },
  4: {
    days: [
      {
        dayLabel: "Monday — Legs",
        exercises: [
          { id: "hw4-plie-squats", name: "Plie Squats with Added Weight", muscleGroup: "legs", defaultSets: 3, defaultReps: "15", defaultRest: 90, notes: "Wide stance, weight between legs", gifUrl: "https://static.tildacdn.net/tild3939-6261-4666-b538-643838333263/video.gif" },
          { id: "hw4-pistol-squats", name: "Pistol Squats with Weight", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild6433-3130-4463-b231-373566666231/video1.gif" },
          { id: "hw4-bulgarian-split-squats", name: "Bulgarian Split Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "15", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3937-3566-4739-b435-313464316664/video2.gif" },
          { id: "hw4-deadlift", name: "Deadlift with Added Weight", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3064-3265-4361-a363-383665656237/video3.gif" }
        ]
      },
      {
        dayLabel: "Wednesday — Back + Biceps",
        exercises: [
          { id: "hw4-chin-ups", name: "Chin-ups from Below", muscleGroup: "back", defaultSets: 4, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3937-3163-4438-b133-316664326364/video.gif" },
          { id: "hw4-bent-over-rows", name: "Bent-over Rows", muscleGroup: "back", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "Dumbbells, weights, or water bottles - anything that adds resistance", gifUrl: "https://static.tildacdn.net/tild6231-3439-4165-b931-326432323633/video1.gif" },
          { id: "hw4-horizontal-pullups", name: "Horizontal Pull-ups", muscleGroup: "back", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6530-3965-4366-a438-323239383734/video2.gif" },
          { id: "hw4-pullups-behind-head", name: "Pull-ups Behind the Head", muscleGroup: "back", defaultSets: 4, defaultReps: "6", defaultRest: 150, notes: "", gifUrl: "https://static.tildacdn.net/tild6666-6330-4765-a539-383136353330/video3.gif" }
        ]
      },
      {
        dayLabel: "Friday — Chest + Triceps",
        exercises: [
          { id: "hw4-weighted-pushups", name: "Weighted Push-ups on the Back", muscleGroup: "chest", defaultSets: 4, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3330-6630-4631-a437-373866653032/video.gif" },
          { id: "hw4-wide-grip-pushups", name: "Wide Grip Push-ups on Parallel Bars", muscleGroup: "chest", defaultSets: 4, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3739-6630-4364-b033-336261633637/video1.gif" },
          { id: "hw4-reverse-dips", name: "Reverse Dips with Straight Legs", muscleGroup: "arms", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "For triceps", gifUrl: "https://static.tildacdn.net/tild3739-6232-4264-b735-373762303639/video2.gif" },
          { id: "hw4-french-press", name: "French Press", muscleGroup: "arms", defaultSets: 4, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3064-3436-4337-b961-623237616634/video3.gif" },
          { id: "hw4-flyes", name: "Flyes with Palms Facing Forward", muscleGroup: "chest", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "Dumbbells, weights, or water bottles - anything that adds resistance", gifUrl: "https://static.tildacdn.net/tild3833-3364-4966-b461-623164633930/video4.gif" }
        ]
      },
      {
        dayLabel: "Saturday — Abs + Static Holds",
        exercises: [
          { id: "hw4-knee-raises", name: "Knee Raises on a Pull-up Bar", muscleGroup: "abs", defaultSets: 3, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3238-3339-4761-a432-356266613962/video.gif" },
          { id: "hw4-situps", name: "Sit-ups", muscleGroup: "abs", defaultSets: 3, defaultReps: "20", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3432-6136-4433-a265-383130353437/video1.gif" },
          { id: "hw4-heel-touches", name: "Alternate Heel Touches", muscleGroup: "abs", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3236-6630-4534-a361-306563316139/video2.gif" },
          { id: "hw4-scissors", name: "Scissors while Lying Down", muscleGroup: "abs", defaultSets: 3, defaultReps: "25", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3639-3566-4162-b463-346163346232/video3.gif" },
          { id: "hw4-plank", name: "Plank", muscleGroup: "abs", defaultSets: 2, defaultReps: "Max", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6366-3336-4534-b930-303464376231/video4.gif" }
        ]
      }
    ]
  },
  5: {
    days: [
      {
        dayLabel: "Monday — Legs",
        exercises: [
          { id: "hw5-lateral-lunges", name: "Lateral Lunges", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3833-6138-4439-b739-636464333032/video.gif" },
          { id: "hw5-one-legged-squats", name: "One-legged Squats with Support", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Wall or any other vertical support", gifUrl: "https://static.tildacdn.net/tild3835-3330-4438-a439-313138613561/video1.gif" },
          { id: "hw5-standing-calf-raises", name: "Standing Calf Raises with Added Weight", muscleGroup: "legs", defaultSets: 3, defaultReps: "25", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3530-3361-4066-b035-656338666334/video2.gif" },
          { id: "hw5-chair-pose", name: "Chair Pose", muscleGroup: "legs", defaultSets: 1, defaultReps: "Max", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3738-3732-4534-b063-306431306562/video3.gif" }
        ]
      },
      {
        dayLabel: "Wednesday — Back + Biceps",
        exercises: [
          { id: "hw5-military-pullups", name: "Military Pull-ups", muscleGroup: "back", defaultSets: 3, defaultReps: "6", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3031-3031-4563-b037-306661643536/video.gif" },
          { id: "hw5-dumbbell-rows", name: "Dumbbell Rows Alternating Sides while Bent Over", muscleGroup: "back", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "Weights, or water bottles - anything that adds resistance", gifUrl: "https://static.tildacdn.net/tild6131-6565-4937-b437-323233663533/video2.gif" },
          { id: "hw5-low-bar-rows", name: "Low Bar Rows", muscleGroup: "back", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6633-3039-4839-b164-353230636634/video3.gif" },
          { id: "hw5-shrugs", name: "Shrugs with Added Weight", muscleGroup: "back", defaultSets: 3, defaultReps: "12", defaultRest: 60, notes: "Shoulder blades pinched together, without circular movements", gifUrl: "https://static.tildacdn.net/tild3565-6364-4661-b265-386236393133/video4.gif" }
        ]
      },
      {
        dayLabel: "Friday — Chest + Triceps",
        exercises: [
          { id: "hw5-flyes-lying-down", name: "Flyes Lying Down", muscleGroup: "chest", defaultSets: 3, defaultReps: "15", defaultRest: 90, notes: "Dumbbells, weights, or water bottles - anything that adds resistance", gifUrl: "https://static.tildacdn.net/tild3134-3130-4634-b263-313533306331/video.gif" },
          { id: "hw5-pushups-feet-elevated", name: "Push-ups with Feet Elevated", muscleGroup: "chest", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3239-3033-4232-a535-333131373930/video1.gif" },
          { id: "hw5-close-grip-pushups", name: "Close Grip Push-ups with Feet Elevated", muscleGroup: "chest", defaultSets: 3, defaultReps: "15", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3631-6264-4363-b961-373038633266/video2.gif" },
          { id: "hw5-archer-pushups", name: "Archer Push-ups", muscleGroup: "chest", defaultSets: 3, defaultReps: "7", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild6462-3234-4535-a564-633435643330/video3.gif" },
          { id: "hw5-triceps-extensions", name: "Alternating Dumbbell Triceps Extensions", muscleGroup: "arms", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3134-6666-4338-a331-613939336665/video4.gif" }
        ]
      },
      {
        dayLabel: "Saturday — Abs + Static",
        exercises: [
          { id: "hw5-hanging-knee-raises", name: "Hanging Knee Raises with Bent Knees", muscleGroup: "abs", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "Do not lower below parallel", gifUrl: "https://static.tildacdn.net/tild3532-3739-4066-b238-336232623765/video.gif" },
          { id: "hw5-hanging-leg-raises", name: "Hanging Leg Raises with Added Weight", muscleGroup: "abs", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6566-3863-4334-b861-643166663039/video1.gif" },
          { id: "hw5-weighted-crunches", name: "Weighted Crunches", muscleGroup: "abs", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3232-3366-4731-b066-303334353730/video3.gif" },
          { id: "hw5-l-sit", name: "L-sit", muscleGroup: "abs", defaultSets: 2, defaultReps: "Max", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3238-6166-4639-b266-313130383164/video2.gif" }
        ]
      }
    ]
  },
  6: {
    days: [
      {
        dayLabel: "Monday — Legs",
        exercises: [
          { id: "hw6-front-squats", name: "Front Squats with Weight in Front", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "Emphasis on negative repetitions", gifUrl: "https://static.tildacdn.net/tild3930-3833-4339-b263-666565623062/video.gif" },
          { id: "hw6-pistol-squats", name: "Pistol Squats", muscleGroup: "legs", defaultSets: 3, defaultReps: "8", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3462-6465-4165-b364-626336396334/video1.gif" },
          { id: "hw6-reverse-lunges", name: "Reverse Lunges", muscleGroup: "legs", defaultSets: 3, defaultReps: "10", defaultRest: 90, notes: "On each leg", gifUrl: "https://static.tildacdn.net/tild3861-6236-4132-a430-613466363233/video2.gif" },
          { id: "hw6-burpees", name: "Burpees", muscleGroup: "legs", defaultSets: 1, defaultReps: "Max", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3636-6161-4264-b738-393163316536/video3.gif" }
        ]
      },
      {
        dayLabel: "Wednesday — Back + Biceps",
        exercises: [
          { id: "hw6-scapular-retraction", name: "Scapular Retraction in Hang", muscleGroup: "back", defaultSets: 2, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3930-3833-4339-b263-666565623062/video.gif" },
          { id: "hw6-wide-grip-pullups", name: "Wide Grip Pull-ups, Alternating Each", muscleGroup: "back", defaultSets: 3, defaultReps: "7", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3164-3564-4239-a338-336535346536/video1.gif" },
          { id: "hw6-close-grip-pullups-low-bar", name: "Close Grip Pull-ups on Low Bar", muscleGroup: "back", defaultSets: 3, defaultReps: "8", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3336-6262-4331-b761-386465643736/video2.gif" },
          { id: "hw6-bicep-curls", name: "Bicep Curls with Supination", muscleGroup: "arms", defaultSets: 4, defaultReps: "10", defaultRest: 60, notes: "Dumbbell, weight, or water bottle", gifUrl: "https://static.tildacdn.net/tild3732-6638-4639-a337-663639346461/video3.gif" }
        ]
      },
      {
        dayLabel: "Friday — Chest + Triceps",
        exercises: [
          { id: "hw6-dips", name: "Dips", muscleGroup: "chest", defaultSets: 4, defaultReps: "7", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3731-3866-4236-a439-316539333135/video.gif" },
          { id: "hw6-floor-press", name: "Press Lying on the Floor", muscleGroup: "chest", defaultSets: 4, defaultReps: "Max", defaultRest: 90, notes: "Dumbbell, weight, or water bottle", gifUrl: "https://static.tildacdn.net/tild3365-6263-4362-b262-643462656461/video1.gif" },
          { id: "hw6-floor-press-pause", name: "Press Lying on the Floor with Pause", muscleGroup: "chest", defaultSets: 4, defaultReps: "7", defaultRest: 90, notes: "Pause at the top for 2 seconds", gifUrl: "https://static.tildacdn.net/tild3262-3830-4132-b661-656165313533/video2.gif" },
          { id: "hw6-triceps-pushdown", name: "Triceps Pushdown with Extra Weight", muscleGroup: "arms", defaultSets: 4, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6335-3136-4862-a137-363038343466/video3.gif" },
          { id: "hw6-french-press", name: "French Press with Weight", muscleGroup: "arms", defaultSets: 4, defaultReps: "10", defaultRest: 60, notes: "Dumbbell, water bottle", gifUrl: "https://static.tildacdn.net/tild3139-6332-4139-a539-373263313433/video4.gif" },
          { id: "hw6-pushups", name: "Push-ups", muscleGroup: "chest", defaultSets: 1, defaultReps: "Max", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3963-3466-4364-b061-646661633231/video5.gif" }
        ]
      },
      {
        dayLabel: "Saturday — Abs + Static Holds",
        exercises: [
          { id: "hw6-leg-raises-bar", name: "Leg Raises on a Bar", muscleGroup: "abs", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3333-3637-4032-b735-666361333639/video.gif" },
          { id: "hw6-leg-raises-parallel-bars", name: "Leg Raises on Parallel Bars", muscleGroup: "abs", defaultSets: 3, defaultReps: "8", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6239-6262-4336-b761-653331313639/video1.gif" },
          { id: "hw6-crunches", name: "Crunches", muscleGroup: "abs", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild3061-3363-4363-b939-366561343637/video2.gif" },
          { id: "hw6-plank", name: "Plank", muscleGroup: "abs", defaultSets: 2, defaultReps: "Max", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild3636-3933-4435-b037-623830666332/video3.gif" }
        ]
      }
    ]
  },
  7: {
    days: [
      {
        dayLabel: "Monday — Legs",
        exercises: [
          { id: "hw7-reverse-lunges", name: "Reverse Lunges", muscleGroup: "legs", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "On each leg" },
          { id: "hw7-squat-jumps", name: "Squat Jumps with Weight", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "" },
          { id: "hw7-front-squats", name: "Front Squats with Weight in Front", muscleGroup: "legs", defaultSets: 4, defaultReps: "12", defaultRest: 120, notes: "Emphasis on negative repetitions" },
          { id: "hw7-lunges-shoulders", name: "Lunges with Weight on Shoulders", muscleGroup: "legs", defaultSets: 3, defaultReps: "12", defaultRest: 90, notes: "" }
        ]
      },
      {
        dayLabel: "Wednesday — Back + Biceps",
        exercises: [
          { id: "hw7-wide-grip-pullups-neck", name: "Wide Grip Pull-ups Behind the Neck", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3339-3163-4835-b230-336130363839/video.gif" },
          { id: "hw7-scapular-retraction", name: "Scapular Retraction in Hang", muscleGroup: "back", defaultSets: 3, defaultReps: "15", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6662-3563-4837-a631-643262623865/video1_1.gif" },
          { id: "hw7-pullups-behind-neck", name: "Pull-ups Behind the Neck", muscleGroup: "back", defaultSets: 3, defaultReps: "10", defaultRest: 120, notes: "", gifUrl: "https://static.tildacdn.net/tild3634-6163-4937-a236-383633663433/video2.gif" },
          { id: "hw7-close-grip-pullups-reverse", name: "Close Grip Pull-ups on Low Bar with Reverse Grip", muscleGroup: "back", defaultSets: 3, defaultReps: "18", defaultRest: 90, notes: "", gifUrl: "https://static.tildacdn.net/tild6535-3730-4139-b536-613264356464/video3.gif" },
          { id: "hw7-bicep-curls-supination", name: "Bicep Curls with Barbell with Supination", muscleGroup: "arms", defaultSets: 4, defaultReps: "10", defaultRest: 60, notes: "", gifUrl: "https://static.tildacdn.net/tild6535-3731-4536-b266-663632326137/video4.gif" }
        ]
      },
      {
        dayLabel: "Friday — Chest + Triceps",
        exercises: [
          { id: "hw7-dips", name: "Dips", muscleGroup: "chest", defaultSets: 4, defaultReps: "12", defaultRest: 120, notes: "" },
          { id: "hw7-pushups-superset", name: "Push-ups (Superset)", muscleGroup: "chest", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "" },
          { id: "hw7-shoulder-pushups", name: "Shoulder Push-ups", muscleGroup: "chest", defaultSets: 4, defaultReps: "15", defaultRest: 90, notes: "Legs on elevation, pelvis bent" },
          { id: "hw7-triceps-pushup-bar", name: "Triceps Push-up from a Bar with Extra Weight", muscleGroup: "arms", defaultSets: 4, defaultReps: "12", defaultRest: 60, notes: "" },
          { id: "hw7-close-grip-dips", name: "Close Grip Dips", muscleGroup: "arms", defaultSets: 4, defaultReps: "12", defaultRest: 90, notes: "" },
          { id: "hw7-french-press-dumbbell", name: "French Press with Dumbbell", muscleGroup: "arms", defaultSets: 4, defaultReps: "12", defaultRest: 60, notes: "One arm at a time" },
          { id: "hw7-pushups-elevated", name: "Push-ups with Legs on Elevation", muscleGroup: "chest", defaultSets: 1, defaultReps: "Max", defaultRest: 90, notes: "" }
        ]
      },
      {
        dayLabel: "Saturday — Sprints + Static Holds",
        exercises: [
          { id: "hw7-sprints", name: "Sprints (60 meters)", muscleGroup: "legs", defaultSets: 4, defaultReps: "Max", defaultRest: 120, notes: "" },
          { id: "hw7-plank", name: "Plank", muscleGroup: "abs", defaultSets: 2, defaultReps: "Max", defaultRest: 90, notes: "" }
        ]
      }
    ]
  }
};

export default homeExerciseDB;
