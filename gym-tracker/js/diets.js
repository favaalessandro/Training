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
  },
  {
    id: 'anatoly-1',
    name: 'Anatoly Menu 1',
    description: 'Menu da ~3000 kcal di Anatoly. Bilanciato con cereali, pollo, pesce e verdure per una crescita muscolare pulita',
    icon: 'crown',
    kcal: '~3000 kcal',
    meals: [
      {
        name: 'Colazione',
        time: '07:00',
        items: [
          '100g fiocchi d\'avena con 200ml latte 1.5%',
          '3 uova sode (2 albumi + 1 intero)',
          '1 fetta di pane integrale tostato'
        ]
      },
      {
        name: 'Seconda Colazione',
        time: '10:00',
        items: [
          '1 banana',
          '1 panino ai semi di papavero'
        ]
      },
      {
        name: 'Pranzo',
        time: '13:00',
        items: [
          '100g riso bianco (peso a secco)',
          '1/2 petto di pollo',
          '100g verdure',
          '1 fetta di pane integrale'
        ]
      },
      {
        name: 'Spuntino Pomeriggio',
        time: '16:00',
        items: [
          '100g riso cotto',
          '1/2 petto di pollo',
          '100g insalata di verdure'
        ]
      },
      {
        name: 'Cena',
        time: '19:30',
        items: [
          '200g merluzzo nordico',
          '150g patate',
          '150g insalata di verdure con panna acida'
        ]
      },
      {
        name: 'Pre-Nanna',
        time: '22:00',
        items: [
          '150g yogurt greco magro',
          '150g kefir (1%)'
        ]
      }
    ]
  },
  {
    id: 'anatoly-2',
    name: 'Anatoly Menu 2',
    description: 'Menu da ~3000 kcal di Anatoly. Variante con grano saraceno, tacchino e frutta secca per diversificare i nutrienti',
    icon: 'crown',
    kcal: '~3000 kcal',
    meals: [
      {
        name: 'Colazione',
        time: '07:00',
        items: [
          '100g grano saraceno (peso a secco)',
          'Omelette con 1 uovo intero e 2 albumi',
          '1 fetta di pane integrale tostato',
          '30g hummus'
        ]
      },
      {
        name: 'Seconda Colazione',
        time: '10:00',
        items: [
          '1 mela',
          '100g frutta secca (albicocche, uvetta o mix)'
        ]
      },
      {
        name: 'Pranzo',
        time: '13:00',
        items: [
          '100g semola di grano (peso a secco)',
          '200g filetto/bistecca di tacchino',
          '100g vinaigrette',
          '1 fetta di pane ai cereali'
        ]
      },
      {
        name: 'Spuntino Pomeriggio',
        time: '16:00',
        items: [
          '100g semola di grano cotta',
          '200g filetto di tacchino',
          '100g vinaigrette'
        ]
      },
      {
        name: 'Cena',
        time: '19:30',
        items: [
          '200g nasello',
          '100g fagiolini/verdure stufate',
          '150g insalata di verdure con panna acida'
        ]
      },
      {
        name: 'Pre-Nanna',
        time: '22:00',
        items: [
          '150g yogurt greco',
          '1 banana'
        ]
      }
    ]
  },
  {
    id: 'anatoly-3',
    name: 'Anatoly Menu 3',
    description: 'Menu da ~3000 kcal di Anatoly. Variante con polenta di mais, manzo e orzo perlato per massima varietà',
    icon: 'crown',
    kcal: '~3000 kcal',
    meals: [
      {
        name: 'Colazione',
        time: '07:00',
        items: [
          '100g polenta di mais con 200ml latte 1.5%',
          '1 uovo al tegamino + 2 albumi',
          '1 fetta di pane di mais',
          '1 cucchiaino di burro'
        ]
      },
      {
        name: 'Seconda Colazione',
        time: '10:00',
        items: [
          '1 pera',
          '30g frutta secca (noci, arachidi, mandorle)',
          '100g marshmallow/marmellata'
        ]
      },
      {
        name: 'Pranzo',
        time: '13:00',
        items: [
          '100g orzo perlato (peso a secco)',
          '200g gulasch di manzo/bistecca',
          '150g insalata di verdure',
          '1 fetta di pane di segale'
        ]
      },
      {
        name: 'Spuntino Pomeriggio',
        time: '16:00',
        items: [
          '100g orzo perlato cotto',
          '200g gulasch di manzo/carne rossa',
          '150g insalata di verdure'
        ]
      },
      {
        name: 'Cena',
        time: '19:30',
        items: [
          '1/2 petto di pollo',
          '150g verdure fresche/in scatola',
          '100g riso (peso a secco)'
        ]
      },
      {
        name: 'Pre-Nanna',
        time: '22:00',
        items: [
          '150g yogurt greco magro',
          '1 tazza di ryazhenka'
        ]
      }
    ]
  }
];
