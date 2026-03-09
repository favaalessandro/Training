/* ═══════════════════════════════════════
   DIETS DATA
   ═══════════════════════════════════════
   Per aggiungere una nuova dieta, basta aggiungere un oggetto
   all'array DIETS seguendo la struttura esistente.

   Struttura:
   {
     id: 'identificativo-unico',
     name: 'Nome Dieta',
     description: 'Breve descrizione',
     icon: 'nome-icona-lucide',
     kcal: 'range kcal giornaliere',
     meals: [
       { name: 'Nome Pasto', time: 'orario', items: ['alimento 1', 'alimento 2', ...] },
       ...
     ]
   }
   ═══════════════════════════════════════ */

export const DIETS = [
  {
    id: 'massa',
    name: 'Massa Muscolare',
    description: 'Dieta ipercalorica per la crescita muscolare con alto apporto proteico e di carboidrati complessi',
    icon: 'dumbbell',
    kcal: '2800–3200 kcal',
    meals: [
      {
        name: 'Colazione',
        time: '07:00',
        items: [
          '80g fiocchi d\'avena con latte intero',
          '2 uova intere + 2 albumi strapazzati',
          '1 banana',
          '20g burro di arachidi',
          '1 caffè'
        ]
      },
      {
        name: 'Spuntino Mattina',
        time: '10:00',
        items: [
          '30g proteine whey in 250ml latte',
          '40g mandorle',
          '1 mela'
        ]
      },
      {
        name: 'Pranzo',
        time: '13:00',
        items: [
          '100g riso basmati (peso a secco)',
          '200g petto di pollo alla griglia',
          'Verdure miste condite con olio EVO',
          '1 cucchiaio di olio extravergine d\'oliva'
        ]
      },
      {
        name: 'Spuntino Pomeriggio',
        time: '16:00',
        items: [
          '2 fette di pane integrale',
          '50g bresaola',
          '1 frutto di stagione'
        ]
      },
      {
        name: 'Cena',
        time: '19:30',
        items: [
          '100g pasta integrale',
          '180g salmone al forno',
          'Insalata mista con avocado',
          '1 cucchiaio di olio EVO'
        ]
      },
      {
        name: 'Pre-Nanna',
        time: '22:00',
        items: [
          '200g yogurt greco intero',
          '20g noci',
          '1 cucchiaino di miele'
        ]
      }
    ]
  },
  {
    id: 'definizione',
    name: 'Definizione',
    description: 'Dieta ipocalorica controllata per ridurre il grasso corporeo mantenendo la massa magra',
    icon: 'flame',
    kcal: '1800–2200 kcal',
    meals: [
      {
        name: 'Colazione',
        time: '07:00',
        items: [
          '50g fiocchi d\'avena con acqua',
          '4 albumi + 1 uovo intero',
          '100g frutti di bosco',
          '1 caffè senza zucchero'
        ]
      },
      {
        name: 'Spuntino Mattina',
        time: '10:00',
        items: [
          '150g yogurt greco 0% grassi',
          '15g mandorle',
          '1 kiwi'
        ]
      },
      {
        name: 'Pranzo',
        time: '13:00',
        items: [
          '70g riso integrale (peso a secco)',
          '200g petto di tacchino alla griglia',
          'Zucchine e peperoni grigliati',
          '1 cucchiaino di olio EVO'
        ]
      },
      {
        name: 'Spuntino Pomeriggio',
        time: '16:00',
        items: [
          '30g proteine whey isolate in acqua',
          '1 galletta di riso',
          '50g fiocchi di latte'
        ]
      },
      {
        name: 'Cena',
        time: '19:30',
        items: [
          '200g merluzzo al vapore',
          '200g broccoli al vapore',
          'Insalata verde con pomodorini',
          '1 cucchiaino di olio EVO'
        ]
      },
      {
        name: 'Pre-Nanna',
        time: '22:00',
        items: [
          '150g ricotta magra',
          '1 cucchiaino di cacao amaro'
        ]
      }
    ]
  },
  {
    id: 'endurance',
    name: 'Endurance',
    description: 'Dieta ad alto contenuto di carboidrati per sport di resistenza e allenamenti prolungati',
    icon: 'heart-pulse',
    kcal: '2500–3000 kcal',
    meals: [
      {
        name: 'Colazione',
        time: '06:30',
        items: [
          '100g porridge d\'avena con latte parzialmente scremato',
          '1 banana',
          '30g miele',
          '15g semi di chia',
          '1 succo d\'arancia fresco'
        ]
      },
      {
        name: 'Spuntino Mattina',
        time: '09:30',
        items: [
          '2 fette di pane integrale con marmellata',
          '1 frutto di stagione',
          '20g frutta secca mista'
        ]
      },
      {
        name: 'Pranzo',
        time: '12:30',
        items: [
          '120g pasta integrale al pomodoro',
          '150g petto di pollo',
          'Patate dolci al forno (150g)',
          'Verdure a foglia verde',
          '1 cucchiaio di olio EVO'
        ]
      },
      {
        name: 'Spuntino Pomeriggio',
        time: '15:30',
        items: [
          '2 barrette energetiche ai cereali',
          '1 banana',
          '250ml bevanda isotonica'
        ]
      },
      {
        name: 'Cena',
        time: '19:00',
        items: [
          '100g riso basmati',
          '180g tonno fresco alla griglia',
          'Verdure miste saltate',
          '1 cucchiaio di olio EVO'
        ]
      },
      {
        name: 'Pre-Nanna',
        time: '21:30',
        items: [
          '200g yogurt alla frutta',
          '30g cereali integrali',
          '1 cucchiaino di miele'
        ]
      }
    ]
  },
  {
    id: 'mantenimento',
    name: 'Mantenimento',
    description: 'Dieta normocalorica bilanciata per mantenere peso e composizione corporea stabile',
    icon: 'scale',
    kcal: '2200–2500 kcal',
    meals: [
      {
        name: 'Colazione',
        time: '07:30',
        items: [
          '60g fiocchi d\'avena con latte parzialmente scremato',
          '1 uovo sodo',
          '1 frutto di stagione',
          '1 caffè'
        ]
      },
      {
        name: 'Spuntino Mattina',
        time: '10:30',
        items: [
          '150g yogurt greco',
          '20g noci',
          '1 pera'
        ]
      },
      {
        name: 'Pranzo',
        time: '13:00',
        items: [
          '80g pasta integrale con verdure',
          '150g petto di pollo o pesce',
          'Insalata mista',
          '1 cucchiaio di olio EVO'
        ]
      },
      {
        name: 'Spuntino Pomeriggio',
        time: '16:30',
        items: [
          '1 fetta di pane integrale',
          '40g prosciutto crudo sgrassato',
          '1 frutto'
        ]
      },
      {
        name: 'Cena',
        time: '20:00',
        items: [
          '180g orata al forno',
          '200g verdure grigliate',
          '150g patate lesse',
          '1 cucchiaino di olio EVO'
        ]
      },
      {
        name: 'Pre-Nanna',
        time: '22:00',
        items: [
          '150g fiocchi di latte',
          '10g mandorle'
        ]
      }
    ]
  }
];
