/**
 * Schede Personalizzate — 12 Schede (A/B/C/D + E1-E4 + F1-F4)
 *
 * Programma non progressivo (nessuna settimana).
 * Tipologie speciali:
 *   - SS (Superset): esercizi raggruppati, eseguiti senza recupero
 *   - Alternato settimanale: due esercizi alternati settimana per settimana
 *   - Varianti: stesso esercizio con diverse modalità (preattivazione, tenuta, esplosive)
 *
 * I campi `tag` e `groupId` sono usati solo per il rendering visivo;
 * il tracker tratta ogni entry come un esercizio indipendente.
 */

const schedeDB = {
  1: {
    days: [
      /* ═══════════ SCHEDA A — Femorali e Dorsali ═══════════ */
      {
        dayLabel: 'Scheda A — Femorali e Dorsali',
        exercises: [
          {
            id: 'scheda-a-calf-pressa',
            name: 'Calf pressa',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '50',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Leg-Press-Calf-Raise.gif'
          },
          {
            id: 'scheda-a-adductor-machine',
            name: 'Adductor machine',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '20-30',
            defaultRest: 0,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/HIP-ADDUCTION-MACHINE.gif',
            tag: 'SS',
            groupId: 'ss-a1'
          },
          {
            id: 'scheda-a-abductor-machine',
            name: 'Abductor machine',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '20-30',
            defaultRest: 90,
            notes: 'a circuito. no recupero',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/HiP-ABDUCTION-MACHINE.gif',
            tag: 'SS',
            groupId: 'ss-a1'
          },
          {
            id: 'scheda-a-leg-curl',
            name: 'Leg curl',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '12-10',
            defaultRest: 90,
            notes: 'negativa 2" iso a metà',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif'
          },
          {
            id: 'scheda-a-stacchi-semitese',
            name: 'Stacchi con gambe semitese',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '12-10',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif'
          },
          {
            id: 'scheda-a-pulldown-sbarra',
            name: 'Pull down',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '20-15',
            defaultRest: 0,
            notes: 'sbarra dritta',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Cable-Straight-Arm-Pulldown.gif',
            tag: 'SS',
            groupId: 'ss-a2'
          },
          {
            id: 'scheda-a-iperestensioni',
            name: 'Iperestensioni con adduzione peso',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '15',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/hyperextension.gif',
            tag: 'SS',
            groupId: 'ss-a2'
          },
          {
            id: 'scheda-a-trazioni',
            name: 'Trazioni',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: 'max',
            defaultRest: 90,
            notes: 'Settimana 1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif',
            tag: 'ALT',
            groupId: 'alt-a1'
          },
          {
            id: 'scheda-a-lat-avanti-prona',
            name: 'Lat avanti presa prona',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '10-8',
            defaultRest: 90,
            notes: 'Settimana 2',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
            tag: 'ALT',
            groupId: 'alt-a1'
          },
          {
            id: 'scheda-a-rematore-tbar',
            name: 'Rematore T bar',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '10-8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/t-bar-rows.gif'
          },
          {
            id: 'scheda-a-lat-presa-inversa',
            name: 'Lat machine presa inversa',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '12-10',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Lat-Pulldown.gif'
          },
          {
            id: 'scheda-a-pulldown-corda',
            name: 'Pull down con corda',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '15-20',
            defaultRest: 0,
            notes: 'Settimana 1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Rope-Straight-Arm-Pulldown.gif',
            tag: 'SS+ALT',
            groupId: 'ssalt-a1'
          },
          {
            id: 'scheda-a-stacco-terra',
            name: 'Stacco da terra',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '10',
            defaultRest: 0,
            notes: 'Settimana 2',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
            tag: 'SS+ALT',
            groupId: 'ssalt-a1'
          },
          {
            id: 'scheda-a-lat-dietro',
            name: 'Lat machine dietro',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Cable-Rear-Pulldown.gif',
            tag: 'SS+ALT',
            groupId: 'ssalt-a1'
          }
        ]
      },

      /* ═══════════ SCHEDA B — Petto, Spalle e Bicipiti ═══════════ */
      {
        dayLabel: 'Scheda B — Petto, Spalle e Bicipiti',
        exercises: [
          {
            id: 'scheda-b-pectoral-machine',
            name: 'Pectoral machine',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '20',
            defaultRest: 90,
            notes: 'ogni 5 rep, 5" iso chiuso',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif'
          },
          {
            id: 'scheda-b-panca-inclinata',
            name: 'Panca inclinata al multipower',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '8-10',
            defaultRest: 90,
            notes: '3 serie normali + 1 stripping 6+6',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Incline-Bench-Press.gif'
          },
          {
            id: 'scheda-b-chest-press',
            name: 'Chest press',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '10-12',
            defaultRest: 90,
            notes: 'negativa 2" iso a metà',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif'
          },
          {
            id: 'scheda-b-croci-cavi-alti',
            name: 'Croci ai cavi alti',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif'
          },
          {
            id: 'scheda-b-alzate-90',
            name: 'Alzate a 90°',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 0,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Lateral-Raise.gif',
            tag: 'SS',
            groupId: 'ss-b1'
          },
          {
            id: 'scheda-b-alzate-lat-avanti',
            name: 'Alzate laterali avanti',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 0,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif',
            tag: 'SS',
            groupId: 'ss-b1'
          },
          {
            id: 'scheda-b-alzate-laterali',
            name: 'Alzate laterali',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
            tag: 'SS',
            groupId: 'ss-b1'
          },
          {
            id: 'scheda-b-curl-inclinata',
            name: 'Curl su inclinata a 60°',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '8+6+4',
            defaultRest: 90,
            notes: 'Rest pause 10"-5"',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Curl.gif'
          },
          {
            id: 'scheda-b-curl-cavi-alti',
            name: 'Curl ai cavi alti',
            muscleGroup: 'arms',
            defaultSets: 3,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Settimana 1. stripping',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Overhead-Cable-Curl.gif',
            tag: 'ALT',
            groupId: 'alt-b1'
          },
          {
            id: 'scheda-b-curl-panca-scott',
            name: 'Curl panca scott',
            muscleGroup: 'arms',
            defaultSets: 3,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Settimana 2. stripping',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Preacher-Curl.gif',
            tag: 'ALT',
            groupId: 'alt-b1'
          },
          {
            id: 'scheda-b-curl-martello',
            name: 'Curl a martello',
            muscleGroup: 'arms',
            defaultSets: 3,
            defaultReps: '15-20',
            defaultRest: 90,
            notes: 'Settimana 1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
            tag: 'ALT',
            groupId: 'alt-b2'
          },
          {
            id: 'scheda-b-curl-bilanciere-inv',
            name: 'Curl bilanciere inverso',
            muscleGroup: 'arms',
            defaultSets: 3,
            defaultReps: '15-20',
            defaultRest: 90,
            notes: 'Settimana 2',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Curl.gif',
            tag: 'ALT',
            groupId: 'alt-b2'
          },
          {
            id: 'scheda-b-plank',
            name: 'Plank',
            muscleGroup: 'core',
            defaultSets: 5,
            defaultReps: '45"',
            defaultRest: 0,
            notes: 'a circuito. no recupero',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Plank.gif',
            tag: 'SS',
            groupId: 'ss-b2'
          },
          {
            id: 'scheda-b-crunch-alto',
            name: 'Crunch alto',
            muscleGroup: 'core',
            defaultSets: 5,
            defaultReps: '20-30',
            defaultRest: 60,
            notes: 'a circuito. no recupero',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif',
            tag: 'SS',
            groupId: 'ss-b2'
          }
        ]
      },

      /* ═══════════ SCHEDA C — Gambe e Polpacci ═══════════ */
      {
        dayLabel: 'Scheda C — Gambe e Polpacci',
        exercises: [
          {
            id: 'scheda-c-calf-in-piedi',
            name: 'Calf in piedi',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'stripping',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Bench-Press-Machine-Standing-Calf-Raise.gif'
          },
          {
            id: 'scheda-c-leg-ext-preatt',
            name: 'Leg extension (preattivazione)',
            muscleGroup: 'legs',
            defaultSets: 1,
            defaultReps: '20-30',
            defaultRest: 0,
            notes: 'preattivazione',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
            tag: 'VAR',
            groupId: 'var-c1'
          },
          {
            id: 'scheda-c-leg-ext-iso',
            name: 'Leg extension (tenuta in iso)',
            muscleGroup: 'legs',
            defaultSets: 3,
            defaultReps: '12',
            defaultRest: 90,
            notes: 'tenuta in iso',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
            tag: 'VAR',
            groupId: 'var-c1'
          },
          {
            id: 'scheda-c-leg-ext-esplosive',
            name: 'Leg extension (esplosive)',
            muscleGroup: 'legs',
            defaultSets: 3,
            defaultReps: 'max',
            defaultRest: 90,
            notes: 'esplosive',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
            tag: 'VAR',
            groupId: 'var-c1'
          },
          {
            id: 'scheda-c-pressa-1gamba',
            name: 'Pressa orizzontale a 1 gamba',
            muscleGroup: 'legs',
            defaultSets: 3,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Single-Leg-Press.gif'
          },
          {
            id: 'scheda-c-pressa-45',
            name: 'Pressa a 45',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: 'Settimana 1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif',
            tag: 'ALT',
            groupId: 'alt-c1'
          },
          {
            id: 'scheda-c-hack-squat',
            name: 'Hack squat',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: 'Settimana 2',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Sled-Hack-Squat.gif',
            tag: 'ALT',
            groupId: 'alt-c1'
          },
          {
            id: 'scheda-c-leg-ext-1gamba-iso',
            name: 'Leg ext. 1 gamba punta intraruotata (iso)',
            muscleGroup: 'legs',
            defaultSets: 2,
            defaultReps: '8-10',
            defaultRest: 0,
            notes: '3" iso',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Single-Leg-Extension.gif',
            tag: 'VAR',
            groupId: 'var-c2'
          },
          {
            id: 'scheda-c-leg-ext-1gamba-expl',
            name: 'Leg ext. 1 gamba punta intraruotata (esplosive)',
            muscleGroup: 'legs',
            defaultSets: 1,
            defaultReps: 'max',
            defaultRest: 90,
            notes: 'esplosive',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Single-Leg-Extension.gif',
            tag: 'VAR',
            groupId: 'var-c2'
          },
          {
            id: 'scheda-c-affondi-bulgari-preatt',
            name: 'Affondi bulgari manubri (preattivazione)',
            muscleGroup: 'legs',
            defaultSets: 1,
            defaultReps: '20',
            defaultRest: 0,
            notes: 'preattivazione',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif',
            tag: 'VAR',
            groupId: 'var-c3'
          },
          {
            id: 'scheda-c-affondi-bulgari',
            name: 'Affondi bulgari manubri',
            muscleGroup: 'legs',
            defaultSets: 3,
            defaultReps: '10-12',
            defaultRest: 90,
            notes: 'negativa 2" iso a metà',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif',
            tag: 'VAR',
            groupId: 'var-c3'
          },
          {
            id: 'scheda-c-abductor',
            name: 'Abductor machine',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '20',
            defaultRest: 90,
            notes: 'max peso',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/HiP-ABDUCTION-MACHINE.gif'
          },
          {
            id: 'scheda-c-rdl',
            name: 'RDL',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: 'Settimana 1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif',
            tag: 'ALT',
            groupId: 'alt-c2'
          },
          {
            id: 'scheda-c-affondi-camminata',
            name: 'Affondi in camminata',
            muscleGroup: 'legs',
            defaultSets: 3,
            defaultReps: '12-10',
            defaultRest: 90,
            notes: 'Settimana 2',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Barbell-Walking-Lunge.gif',
            tag: 'ALT',
            groupId: 'alt-c2'
          },
          {
            id: 'scheda-c-plank',
            name: 'Plank',
            muscleGroup: 'core',
            defaultSets: 5,
            defaultReps: '45"',
            defaultRest: 0,
            notes: 'a circuito. no recupero',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Plank.gif',
            tag: 'SS',
            groupId: 'ss-c1'
          },
          {
            id: 'scheda-c-crunch-alto',
            name: 'Crunch alto',
            muscleGroup: 'core',
            defaultSets: 5,
            defaultReps: '20-30',
            defaultRest: 60,
            notes: 'a circuito. no recupero',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif',
            tag: 'SS',
            groupId: 'ss-c1'
          }
        ]
      },

      /* ═══════════ SCHEDA D — Spalle e Tricipiti ═══════════ */
      {
        dayLabel: 'Scheda D — Spalle e Tricipiti',
        exercises: [
          {
            id: 'scheda-d-rear-delts-preatt',
            name: 'Rear delts (preattivazione)',
            muscleGroup: 'shoulders',
            defaultSets: 2,
            defaultReps: '20-30',
            defaultRest: 0,
            notes: 'preattivazione',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Rear-Delt-Machine-Fly.gif',
            tag: 'VAR',
            groupId: 'var-d1'
          },
          {
            id: 'scheda-d-rear-delts-iso',
            name: 'Rear delts (tenuta in iso)',
            muscleGroup: 'shoulders',
            defaultSets: 3,
            defaultReps: '12',
            defaultRest: 90,
            notes: 'tenuta in iso',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Rear-Delt-Machine-Fly.gif',
            tag: 'VAR',
            groupId: 'var-d1'
          },
          {
            id: 'scheda-d-rear-delts-expl',
            name: 'Rear delts (esplosive)',
            muscleGroup: 'shoulders',
            defaultSets: 3,
            defaultReps: 'max',
            defaultRest: 90,
            notes: 'esplosive',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Rear-Delt-Machine-Fly.gif',
            tag: 'VAR',
            groupId: 'var-d1'
          },
          {
            id: 'scheda-d-delt-machine',
            name: 'Delt machine',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: '3 serie normali + 1 stripping 10+10+10',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lateral-Raise-Machine.gif'
          },
          {
            id: 'scheda-d-military-press',
            name: 'Military press al multipower',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '8-10',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Shoulder-Press.gif'
          },
          {
            id: 'scheda-d-tirate-larghe',
            name: 'Tirate larghe bilanciere',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '12-10',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wide-Grip-Upright-Row.gif'
          },
          {
            id: 'scheda-d-delt-lat-cavo',
            name: 'Delt laterali cavo basso',
            muscleGroup: 'shoulders',
            defaultSets: 3,
            defaultReps: '15-20',
            defaultRest: 90,
            notes: 'maniglia dietro busto',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif'
          },
          {
            id: 'scheda-d-panca-stretta',
            name: 'Panca stretta',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '10-8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Barbell-Bench-Press.gif'
          },
          {
            id: 'scheda-d-french-press',
            name: 'French press manubri',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '12-15',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lying-Triceps-Extension.gif'
          },
          {
            id: 'scheda-d-push-down',
            name: 'Push down',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '20-30',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif'
          },
          {
            id: 'scheda-d-plank',
            name: 'Plank',
            muscleGroup: 'core',
            defaultSets: 5,
            defaultReps: '45"',
            defaultRest: 0,
            notes: 'a circuito. no recupero',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Plank.gif',
            tag: 'SS',
            groupId: 'ss-d1'
          },
          {
            id: 'scheda-d-hanged-knee-rise',
            name: 'Hanged knee rise',
            muscleGroup: 'core',
            defaultSets: 5,
            defaultReps: '20-30',
            defaultRest: 60,
            notes: 'a circuito. no recupero',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Knee-Raise.gif',
            tag: 'SS',
            groupId: 'ss-d1'
          }
        ]
      },

      /* ═══════════ SCHEDA E1 — Petto e Bicipiti ═══════════ */
      {
        dayLabel: 'Scheda E1 — Petto e Bicipiti',
        exercises: [
          {
            id: 'scheda-e1-peck-deck',
            name: 'Peck Deck',
            muscleGroup: 'chest',
            defaultSets: 3,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Stripping: fai 10 rep poi diminuisci il peso e fai altre 10',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif'
          },
          {
            id: 'scheda-e1-spinte-bilanciere-inclinata',
            name: 'Spinte con bilanciere su inclinata',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Incline-Bench-Press.gif'
          },
          {
            id: 'scheda-e1-croci-panca-piana',
            name: 'Croci panca piana',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif'
          },
          {
            id: 'scheda-e1-curl-bilanciere',
            name: 'Curl bilanciere',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '10+10"',
            defaultRest: 90,
            notes: 'Restpause: fai 10 poi aspetti 10" e ne fai altre tante',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif'
          },
          {
            id: 'scheda-e1-curl-panca-scott',
            name: 'Curl alla panca scott',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Preacher-Curl.gif'
          },
          {
            id: 'scheda-e1-russian-twist',
            name: 'Russian twist',
            muscleGroup: 'core',
            defaultSets: 4,
            defaultReps: '20',
            defaultRest: 60,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif'
          }
        ]
      },

      /* ═══════════ SCHEDA E2 — Gambe ═══════════ */
      {
        dayLabel: 'Scheda E2 — Gambe',
        exercises: [
          {
            id: 'scheda-e2-leg-extension',
            name: 'Leg extension',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Stripping',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif'
          },
          {
            id: 'scheda-e2-leg-press-orizzontale',
            name: 'Leg press orizzontale',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '15-12-10-8',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Horizontal-Leg-Press.gif'
          },
          {
            id: 'scheda-e2-squat-bilanciere',
            name: 'Squat con bilanciere',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif'
          },
          {
            id: 'scheda-e2-leg-curl',
            name: 'Leg curl',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '10+10"',
            defaultRest: 90,
            notes: 'Restpause',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif'
          },
          {
            id: 'scheda-e2-standing-calf',
            name: 'Standing calf',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '20',
            defaultRest: 60,
            notes: 'Macchina per polpacci',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Bench-Press-Machine-Standing-Calf-Raise.gif'
          },
          {
            id: 'scheda-e2-crunch-inverso-leg-raise',
            name: 'Crunch inverso + Leg raise',
            muscleGroup: 'core',
            defaultSets: 4,
            defaultReps: '15+15',
            defaultRest: 60,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Crunch.gif'
          }
        ]
      },

      /* ═══════════ SCHEDA E3 — Spalle e Tricipiti ═══════════ */
      {
        dayLabel: 'Scheda E3 — Spalle e Tricipiti',
        exercises: [
          {
            id: 'scheda-e3-deltoid',
            name: 'Deltoid',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Stripping',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lateral-Raise-Machine.gif'
          },
          {
            id: 'scheda-e3-lento-avanti-multipower',
            name: 'Lento avanti al multipower',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Shoulder-Press.gif'
          },
          {
            id: 'scheda-e3-alzate-busto-90',
            name: 'Alzate busto 90°',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Lateral-Raise.gif'
          },
          {
            id: 'scheda-e3-pushdown-cavo-alto',
            name: 'Pushdown cavo alto',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '15-12-10-8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif'
          },
          {
            id: 'scheda-e3-frenchpress-bilanciere',
            name: 'French press con bilanciere',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '10+10"',
            defaultRest: 90,
            notes: 'Restpause',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Lying-Triceps-Extension.gif'
          },
          {
            id: 'scheda-e3-situp-inclinata',
            name: 'Sit-up su inclinata',
            muscleGroup: 'core',
            defaultSets: 4,
            defaultReps: '15',
            defaultRest: 60,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Sit-up.gif'
          }
        ]
      },

      /* ═══════════ SCHEDA E4 — Dorsali ═══════════ */
      {
        dayLabel: 'Scheda E4 — Dorsali',
        exercises: [
          {
            id: 'scheda-e4-lat-presa-inversa',
            name: 'Lat machine presa inversa',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '10+10"',
            defaultRest: 90,
            notes: 'Restpause',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Lat-Pulldown.gif'
          },
          {
            id: 'scheda-e4-rowing-machine',
            name: 'Rowing machine',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif'
          },
          {
            id: 'scheda-e4-pulley-triangolo',
            name: 'Pulley con triangolo',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '10+10',
            defaultRest: 120,
            notes: 'Stripping',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif'
          },
          {
            id: 'scheda-e4-lat-avanti-larga',
            name: 'Lat machine avanti presa larga',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif'
          },
          {
            id: 'scheda-e4-scrollate-manubri',
            name: 'Scrollate con manubri',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '12',
            defaultRest: 60,
            notes: '2 serie avanti e 2 serie indietro',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shrug.gif'
          },
          {
            id: 'scheda-e4-hyperextension',
            name: 'Hyperextension',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '15',
            defaultRest: 60,
            notes: 'Puoi farlo anche con il peso',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/hyperextension.gif'
          }
        ]
      },

      /* ═══════════ SCHEDA F1 — Petto e Bicipiti ═══════════ */
      {
        dayLabel: 'Scheda F1 — Petto e Bicipiti',
        exercises: [
          {
            id: 'scheda-f1-spinte-manubri-panca-piana',
            name: 'Spinte manubri su panca piana',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif'
          },
          {
            id: 'scheda-f1-croci-panca-inclinata',
            name: 'Croci su panca inclinata',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-dumbbell-Fly.gif'
          },
          {
            id: 'scheda-f1-chest-press',
            name: 'Chest press',
            muscleGroup: 'chest',
            defaultSets: 4,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Ultime serie stripping x1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif'
          },
          {
            id: 'scheda-f1-curl-manubri',
            name: 'Curl con manubri',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 90,
            notes: 'Al calare delle ripetizioni aumenta il peso',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif'
          },
          {
            id: 'scheda-f1-curl-sbarra-cavo-basso',
            name: 'Curl sbarra cavo basso presa inversa',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '10+10"',
            defaultRest: 90,
            notes: 'Ultima serie rest pause 10"',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Reverse-Curl.gif'
          },
          {
            id: 'scheda-f1-plank',
            name: 'Plank',
            muscleGroup: 'core',
            defaultSets: 4,
            defaultReps: '60"',
            defaultRest: 30,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Plank.gif'
          }
        ]
      },

      /* ═══════════ SCHEDA F2 — Gambe ═══════════ */
      {
        dayLabel: 'Scheda F2 — Gambe',
        exercises: [
          {
            id: 'scheda-f2-hack-squat',
            name: 'Hack squat',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '8-10-12-15',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Sled-Hack-Squat.gif'
          },
          {
            id: 'scheda-f2-affondi-indietro-manubri',
            name: 'Affondi indietro con manubri',
            muscleGroup: 'legs',
            defaultSets: 3,
            defaultReps: '8+stripping',
            defaultRest: 120,
            notes: 'Ultima serie stripping x1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-Reverse-Lunge.gif'
          },
          {
            id: 'scheda-f2-leg-press',
            name: 'Leg press',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif'
          },
          {
            id: 'scheda-f2-mezzo-stacco-gambe-tese',
            name: 'Mezzo stacco a gambe tese con manubri',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '10',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif'
          },
          {
            id: 'scheda-f2-calf-pressa',
            name: 'Calf alla pressa',
            muscleGroup: 'legs',
            defaultSets: 4,
            defaultReps: '20',
            defaultRest: 60,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Leg-Press-Calf-Raise.gif'
          },
          {
            id: 'scheda-f2-crunch-inverso-parallele',
            name: 'Crunch inverso alle parallele',
            muscleGroup: 'core',
            defaultSets: 4,
            defaultReps: '20',
            defaultRest: 60,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Reverse-Crunch.gif'
          }
        ]
      },

      /* ═══════════ SCHEDA F3 — Spalle e Tricipiti ═══════════ */
      {
        dayLabel: 'Scheda F3 — Spalle e Tricipiti',
        exercises: [
          {
            id: 'scheda-f3-rear-delt',
            name: 'Rear delt',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Ultima serie stripping x1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Rear-Delt-Machine-Fly.gif'
          },
          {
            id: 'scheda-f3-alzate-laterali-manubri',
            name: 'Alzate laterali manubri',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '15-12-10-8',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif'
          },
          {
            id: 'scheda-f3-military-press',
            name: 'Military press',
            muscleGroup: 'shoulders',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shoulder-Press.gif'
          },
          {
            id: 'scheda-f3-dip-no-gravity',
            name: 'Dip alla no-gravity',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Chest-Dip.gif'
          },
          {
            id: 'scheda-f3-pushdown-corda',
            name: 'Pushdown corda',
            muscleGroup: 'arms',
            defaultSets: 4,
            defaultReps: '10+15"',
            defaultRest: 90,
            notes: 'Ultima serie rest pause 15"',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif'
          },
          {
            id: 'scheda-f3-side-plank',
            name: 'Side plank',
            muscleGroup: 'core',
            defaultSets: 3,
            defaultReps: 'max',
            defaultRest: 60,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank.gif'
          }
        ]
      },

      /* ═══════════ SCHEDA F4 — Dorsali ═══════════ */
      {
        dayLabel: 'Scheda F4 — Dorsali',
        exercises: [
          {
            id: 'scheda-f4-trazioni-no-gravity',
            name: 'Trazioni alla no-gravity',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '12-10-8-6',
            defaultRest: 120,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif'
          },
          {
            id: 'scheda-f4-rowing-machine',
            name: 'Rowing machine',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '10',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif'
          },
          {
            id: 'scheda-f4-lat-machine-triangolo',
            name: 'Lat machine triangolo',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '10+10',
            defaultRest: 90,
            notes: 'Ultima serie stripping x1',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif'
          },
          {
            id: 'scheda-f4-doppio-rematore-manubri',
            name: 'Doppio rematore con manubri panca 30°',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '8',
            defaultRest: 90,
            notes: 'Altezza schienale 3',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif'
          },
          {
            id: 'scheda-f4-tirate-petto-bilanciere',
            name: 'Tirate al petto con bilanciere',
            muscleGroup: 'back',
            defaultSets: 4,
            defaultReps: '12',
            defaultRest: 90,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wide-Grip-Upright-Row.gif'
          },
          {
            id: 'scheda-f4-v-up',
            name: 'V Up',
            muscleGroup: 'core',
            defaultSets: 3,
            defaultReps: 'max',
            defaultRest: 60,
            notes: '',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/V-up.gif'
          }
        ]
      }
    ]
  }
};

export default schedeDB;
