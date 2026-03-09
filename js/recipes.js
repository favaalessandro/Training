/* ═══════════════════════════════════════
   RECIPES DATA & RENDERER
   ═══════════════════════════════════════
   Le mie Ricette
   Dott.ssa Dietista Giulia Corradini
   ═══════════════════════════════════════ */

const CATEGORIE = [
  {
    nome: 'Primi Piatti',
    icon: 'soup',
    ricette: [
      {
        nome: 'Pasta con ricotta e pomodorini',
        porzioni: '2',
        ingredienti: [
          { a: 'Pasta integrale', q: '160g' },
          { a: 'Pomodorini freschi (ciliegino o datterino)', q: 'q.b.' },
          { a: 'Ricotta fresca', q: '50g' },
          { a: 'Olio extravergine di oliva', q: 'q.b.' },
          { a: 'Sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Tagliare i pomodorini a pezzi e passarli in padella per 5-10 minuti.',
          'Aggiungere la ricotta, mischiare bene e aggiungere sale e pepe quanto basta.',
          'Cuocere la pasta e farla poi saltare sulla padella del condimento.',
          'Aggiungere infine un po\' di olio extravergine d\'oliva a crudo.'
        ]
      },
      {
        nome: 'Carbonara Light',
        porzioni: null,
        ingredienti: [
          { a: 'Pasta integrale', q: 'q.b.' },
          { a: 'Ricotta fresca', q: '50g a persona' },
          { a: 'Prosciutto crudo e cotto a cubetti', q: 'q.b.' },
          { a: 'Zucchine', q: '1-2 a persona' },
          { a: 'Uovo', q: '1 ogni 2 persone' },
          { a: 'Olio Extravergine di oliva', q: 'q.b.' },
          { a: 'Sale, pepe e noce moscata', q: 'q.b.' },
          { a: 'Cipolla', q: 'q.b.' },
          { a: 'Latte (facoltativo)', q: 'q.b.' }
        ],
        preparazione: [
          'In padella antiaderente fare dorare la cipolla con un filo d\'olio evo; aggiungere il prosciutto a cubetti e fare rosolare per qualche minuto a fuoco vivo.',
          'Aggiungere poi le zucchine (grattugiate con una grattugia a fori larghi) e fare cuocere per il tempo di cottura della pasta.',
          'In una ciotola mescolare l\'uovo con la ricotta (ed eventualmente un po\' di latte), regolare di sale, pepe e noce moscata.',
          'Scolare la pasta, versarla nella padella antiaderente con le zucchine e il prosciutto e aggiungere infine il composto di uova e ricotta.',
          'Fare saltare il tutto a fuoco vivo per pochi secondi e servire ben caldo.'
        ]
      },
      {
        nome: 'Spaghetti integrali zucchine e bresaola',
        porzioni: '2',
        ingredienti: [
          { a: 'Pasta integrale', q: '160g' },
          { a: 'Bresaola', q: '150g' },
          { a: 'Zucchine', q: '3' },
          { a: 'Cipolla', q: 'q.b.' },
          { a: 'Olio EVO e sale', q: 'q.b.' },
          { a: 'Pepe e parmigiano reggiano', q: 'q.b.' }
        ],
        preparazione: [
          'In una padella antiaderente fare dorare la cipolla con un filo d\'olio evo.',
          'Aggiungere la bresaola a listarelle e le zucchine grattugiate con una grattugia a fori larghi.',
          'Aggiungere sale e pepe q.b. e fare cuocere per il tempo di cottura della pasta.',
          'Aggiungere la pasta nella padella antiaderente del condimento, fare saltare il tutto a fuoco vivo e servire ben caldo con una spolverata di parmigiano.'
        ]
      },
      {
        nome: 'Pasta e fagioli',
        porzioni: null,
        ingredienti: [
          { a: 'Fagioli borlotti', q: '1 barattolo' },
          { a: 'Fagioli cannellini', q: '1 barattolo' },
          { a: 'Verdure miste per minestrone', q: 'q.b.' },
          { a: 'Pasta corta oppure riso, orzo o farro', q: '~80g a persona' },
          { a: 'Cipolla', q: 'q.b.' },
          { a: 'Olio EVO', q: 'q.b.' },
          { a: 'Sale e pepe', q: 'q.b.' },
          { a: 'Parmigiano (facoltativo)', q: 'q.b.' }
        ],
        preparazione: [
          'In una padella piccola far rosolare la cipolla con un po\' di olio evo; aggiungere le verdure e insaporire con sale e pepe. Lasciare cuocere per 5 minuti.',
          'Aggiungere poi mezzo litro d\'acqua e lasciare cuocere per circa 30 minuti, poi frullare il tutto con il mixer.',
          'Aggiungere la pasta e i fagioli scolati e lasciare cuocere per il tempo di cottura della pasta.',
          'Aggiungere un filo d\'olio e se gradito del parmigiano grattugiato.',
          'Questa pasta e fagioli si pu\u00f2 consumare sia calda che fredda!'
        ]
      },
      {
        nome: 'Farfalle con rag\u00f9 di lenticchie',
        porzioni: '6',
        ingredienti: [
          { a: 'Lenticchie rosse secche', q: '300g' },
          { a: 'Polpa di pomodoro', q: '1 bottiglia (700g circa)' },
          { a: 'Carote', q: '2' },
          { a: 'Cipolla', q: '1/2' },
          { a: 'Aglio', q: '1 spicchio' },
          { a: 'Olio EVO', q: '20g (~2 cucchiai)' },
          { a: 'Sale e sedano', q: 'q.b.' },
          { a: 'Farfalle integrali', q: 'q.b.' }
        ],
        preparazione: [
          'In una padella antiaderente scaldare l\'olio e aggiungere aglio, cipolla affettata, sedano tagliato sottile e carote a rondelle.',
          'Far andare a fuoco basso, mescolando di tanto in tanto. Se necessario aggiungere acqua e coprire.',
          'Quando le carote sono morbide aggiungere le lenticchie rosse (solo sciacquate, no ammollo) e mescolare per qualche minuto.',
          'Aggiungere la polpa di pomodoro e 3 bicchieri d\'acqua, mescolare e alzare leggermente il fuoco.',
          'Cuocere per 25-30 minuti. Regolare di sale a fine cottura.',
          'Condire la pasta; eventualmente congelare il rag\u00f9 in monoporzioni.'
        ]
      },
      {
        nome: 'Gnocchi con ricotta e spinaci',
        porzioni: '6-7',
        ingredienti: [
          { a: 'Ricotta', q: '300g' },
          { a: 'Farina', q: '200g' },
          { a: 'Spinaci', q: '500g' },
          { a: 'Parmigiano reggiano grattugiato', q: '50g' },
          { a: 'Uova', q: '4' },
          { a: 'Noce moscata', q: 'q.b.' },
          { a: 'Burro', q: '40g' },
          { a: 'Sale, pepe nero, salvia', q: 'q.b.' }
        ],
        preparazione: [
          'Sbollentare gli spinaci, tritarli e farli raffreddare.',
          'In una ciotola unire ricotta, spinaci tritati, uova, noce moscata, sale e farina fino a impasto consistente.',
          'Ricavare palline da ~2 cm e arricciarle con il pollice. Far riposare 30 minuti.',
          'Mettere a bollire l\'acqua per gli gnocchi.',
          'Sciogliere a parte il burro con salvia, noce moscata e pepe nero.',
          'Cuocere gli gnocchi, unirli al condimento, farli saltare e aggiungere parmigiano.'
        ]
      },
      {
        nome: 'Cous Cous con funghi e verdure',
        porzioni: '1',
        ingredienti: [
          { a: 'Cous cous', q: '80g' },
          { a: 'Aglio', q: '1 spicchio' },
          { a: 'Funghi', q: '250g' },
          { a: 'Carota media', q: '1' },
          { a: 'Sedano', q: '1/2 gambo' },
          { a: 'Olio EVO', q: '1 cucchiaio e mezzo' },
          { a: 'Sale, pepe e prezzemolo', q: 'q.b.' }
        ],
        preparazione: [
          'Pulire i funghi e tagliarli a fettine sottili. Tagliare carota e sedano a dadini.',
          'In padella scaldare olio, rosolare aglio intero, unire carote e sedano.',
          'Cuocere 5 minuti a fuoco medio, aggiungere i funghi.',
          'Regolare di sale e cuocere ~15 minuti. Aggiungere prezzemolo tritato e pepe.',
          'Preparare il couscous come da confezione. Unire i funghi e lasciar raffreddare.'
        ]
      },
      {
        nome: 'Spaghetti integrali con broccoli e noci',
        porzioni: '1',
        ingredienti: [
          { a: 'Spaghetti integrali', q: '80g' },
          { a: 'Broccoli freschi', q: '150-200g' },
          { a: 'Noci', q: '5 (10 mezzi gherigli)' },
          { a: 'Acciuga sott\'olio', q: '1 filetto' },
          { a: 'Aglio', q: '1 spicchio' },
          { a: 'Peperoncino secco', q: '1' },
          { a: 'Olio EVO e sale', q: 'q.b.' }
        ],
        preparazione: [
          'Preparare l\'acqua per la pasta. Lavare i broccoli in cimette. Tritare le noci.',
          'Scottare i broccoli 2 minuti nell\'acqua bollente.',
          'In padella rosolare aglio con olio, sciogliere il filetto d\'acciuga.',
          'Scolare i broccoli e aggiungerli in padella con peperoncino. Cuocere 10 minuti a fuoco lento.',
          'Cuocere gli spaghetti nella stessa acqua. Scolarli al dente e farli saltare in padella.',
          'Aggiungere le noci tritate e servire.'
        ]
      },
      {
        nome: 'Risotto cremoso con gamberetti',
        porzioni: '1',
        ingredienti: [
          { a: 'Riso Carnaroli', q: '80g' },
          { a: 'Gamberetti surgelati', q: '100g' },
          { a: 'Porro grande', q: '1' },
          { a: 'Brodo vegetale', q: 'q.b.' },
          { a: 'Pepe nero', q: 'q.b.' },
          { a: 'Olio EVO', q: 'q.b.' },
          { a: 'Vino bianco', q: 'q.b.' },
          { a: 'Philadelphia light', q: '80g' }
        ],
        preparazione: [
          'Tagliare il porro a rondelle, rosolare con olio. Aggiungere i gamberetti surgelati.',
          'Cuocere finch\u00e9 non rilasciano tutta l\'acqua, aggiungere il riso e tostare 1 minuto.',
          'Sfumare con vino bianco, poi cuocere aggiungendo brodo un mestolo alla volta.',
          'A cottura ultimata, spegnere e mantecare con philadelphia light e pepe nero.'
        ]
      },
      {
        nome: 'Quinoa con piselli, zucchine, menta e prezzemolo',
        porzioni: '1',
        ingredienti: [
          { a: 'Quinoa', q: '80g' },
          { a: 'Piselli freschi o surgelati', q: '100g' },
          { a: 'Zucchina', q: '1' },
          { a: 'Cipolla', q: '1/2' },
          { a: 'Prezzemolo e menta', q: 'q.b.' },
          { a: 'Olio EVO', q: '1 cucchiaio' },
          { a: 'Sale', q: 'q.b.' }
        ],
        preparazione: [
          'Tritare la cipolla. Sciacquare e cuocere la quinoa come da confezione.',
          'Scaldare padella con olio e cipolla. Aggiungere zucchine a cubetti, poi piselli.',
          'Cuocere a fuoco medio. Tritare prezzemolo e menta, aggiungerli alla padella.',
          'Saltare la quinoa con il condimento e servire.'
        ]
      },
      {
        nome: 'Pasta con salmone, spinacine e noci',
        porzioni: '1',
        ingredienti: [
          { a: 'Penne rigate integrali', q: '80g' },
          { a: 'Noci', q: '4-5 (10 gherigli)' },
          { a: 'Spinacini freschi', q: 'a piacere' },
          { a: 'Salmone affumicato', q: '90g' },
          { a: 'Olio EVO, sale, pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Cuocere la pasta in acqua bollente salata.',
          'Condire spinacini con olio, sale e pepe. Aggiungere noci e mescolare.',
          'Aggiungere salmone affumicato tagliato a listarelle.',
          'Scolare la pasta e unire al condimento. Ottima anche fredda.'
        ]
      },
      {
        nome: 'Cous Cous con verdure e curcuma',
        porzioni: '1',
        ingredienti: [
          { a: 'Cous Cous', q: '70g' },
          { a: 'Acqua', q: '120 ml' },
          { a: 'Curcuma', q: '1 cucchiaino' },
          { a: 'Carota piccola', q: '1' },
          { a: 'Piselli', q: '70g' },
          { a: 'Zucchina', q: '1/2' },
          { a: 'Peperone', q: '1/2' },
          { a: 'Pomodorini ciliegino', q: '8' },
          { a: 'Cipolla', q: '1/2' },
          { a: 'Olio EVO, sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Lavare e tagliare tutte le verdure a dadini. Tritare la cipolla.',
          'Soffriggere cipolla, aggiungere carote, zucchine, piselli e peperoni.',
          'Cuocere a fuoco medio. Aggiungere pomodorini a fine cottura.',
          'Aggiungere couscous, curcuma e acqua bollente. Cuocere 1 minuto.',
          'Coprire 5 minuti, mescolare. Si consuma sia caldo che freddo.'
        ]
      }
    ]
  },
  {
    nome: 'Secondi di Carne',
    icon: 'beef',
    ricette: [
      {
        nome: 'Petto di pollo arrosto al forno',
        porzioni: null,
        ingredienti: [
          { a: 'Petto di pollo o tacchino intero', q: '1' },
          { a: 'Succo di limone', q: 'mezzo limone' },
          { a: 'Aceto balsamico di Modena', q: '3-4 cucchiai' },
          { a: 'Olio EVO', q: '2-3 cucchiai' },
          { a: 'Spezie (rosmarino, salvia)', q: 'a piacere' },
          { a: 'Sale grosso e pepe in grani', q: 'q.b.' }
        ],
        preparazione: [
          'Condire la carne con olio, aceto, limone, spezie, sale e pepe. Marinare 5-6 ore in frigo.',
          'Forno a 150\u00b0C statico. Cuocere circa 3 ore, rigirando 2-3 volte.',
          'Lasciar raffreddare 10 minuti, tagliare a fette e servire.'
        ]
      },
      {
        nome: 'Polpettine Light',
        porzioni: null,
        ingredienti: [
          { a: 'Carne magra di bovino macinata', q: '500g' },
          { a: 'Uovo', q: '1' },
          { a: 'Pane integrale raffermo', q: '50g' },
          { a: 'Parmigiano reggiano', q: '30g' },
          { a: 'Peperone rosso e giallo', q: '1+1' },
          { a: 'Olio EVO', q: '1 cucchiaio' },
          { a: 'Prezzemolo, sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Mescolare carne, pane a pezzetti, uovo, peperoni abbrustoliti, formaggio, prezzemolo, sale e pepe.',
          'Formare palline schiacciate. Cuocere in padella con olio, 5 min/lato a fiamma alta.',
          'Abbassare e cuocere con coperchio 20-30 minuti.',
          'Alternativa ai peperoni: melanzane, zucchine o legumi.'
        ]
      },
      {
        nome: 'Tacchino al cartoccio',
        porzioni: '2',
        ingredienti: [
          { a: 'Cosce di tacchino', q: '4' },
          { a: 'Aglio', q: '3 spicchi' },
          { a: 'Rosmarino e prezzemolo', q: 'q.b.' },
          { a: 'Farina', q: 'q.b.' },
          { a: 'Limone', q: '1' },
          { a: 'Vino bianco secco', q: '1 bicchiere' },
          { a: 'Olio EVO, sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Infarinare le cosce. Tritare aglio e prezzemolo.',
          'Ogni coscia in foglio di alluminio con olio, aglio, prezzemolo, rosmarino, limone, sale e pepe.',
          'Spruzzare vino bianco e chiudere il cartoccio.',
          'Forno preriscaldato 200\u00b0C per ~20 minuti. Servire nel cartoccio.'
        ]
      },
      {
        nome: 'Cotoletta allo zafferano',
        porzioni: null,
        ingredienti: [
          { a: 'Vitello magro', q: '4 fettine' },
          { a: 'Zafferano', q: '1/2 bustina' },
          { a: 'Prezzemolo tritato', q: 'q.b.' },
          { a: 'Uovo', q: '1' },
          { a: 'Pangrattato', q: 'q.b.' },
          { a: 'Sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Uovo con sale, pepe, zafferano e prezzemolo. Mescolare.',
          'Battere le fettine e immergerle nell\'uovo per 10 minuti.',
          'Passare nel pangrattato. Teglia con carta forno.',
          'Forno 180\u00b0C per ~20 minuti, girare dopo 10. Servire.'
        ]
      },
      {
        nome: 'Lonza di maiale alle erbe',
        porzioni: null,
        ingredienti: [
          { a: 'Lonza di maiale', q: '1' },
          { a: 'Olio EVO', q: 'q.b.' },
          { a: 'Rosmarino e salvia tritati', q: 'q.b.' },
          { a: 'Sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Salare, pepare e ungere la lonza. Rosolare in padella antiaderente su entrambi i lati.',
          'Trasferire in teglia. Nella stessa padella: acqua, olio e erbe. Versare sulla lonza.',
          'Forno 160\u00b0C: 30 min con umidit\u00e0, poi 15 min ventilato.',
          'Raffreddare quasi completamente prima di tagliare.'
        ]
      },
      {
        nome: 'Bocconcini di pollo ai carciofi',
        porzioni: '4',
        ingredienti: [
          { a: 'Petto di pollo', q: '400g' },
          { a: 'Burro', q: '30g' },
          { a: 'Carciofi (cuori)', q: '8' },
          { a: 'Aglio', q: '1 spicchio' },
          { a: 'Prezzemolo, sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Bollire il petto di pollo ~20 minuti. Scolare e tagliare a pezzetti.',
          'Soffriggere aglio nel burro, aggiungere prezzemolo e cuori di carciofi a fettine sottili.',
          'Dopo 20 minuti unire il pollo, insaporire altri 20 minuti.',
          'Regolare sale e pepe, servire caldo.'
        ]
      },
      {
        nome: 'Lonza light alla mediterranea',
        porzioni: '1',
        ingredienti: [
          { a: 'Lonza di maiale', q: '180g' },
          { a: 'Cipolla', q: '1/2' },
          { a: 'Aglio', q: '1 spicchio' },
          { a: 'Olio EVO', q: '1 cucchiaino' },
          { a: 'Pomodori secchi', q: '6-7' },
          { a: 'Olive verdi', q: '~10' },
          { a: 'Capperi', q: '1 cucchiaio' },
          { a: 'Dado vegetale', q: '1/2' },
          { a: 'Spezie ed erbe aromatiche', q: 'a piacere' },
          { a: 'Vino bianco', q: 'per sfumare' }
        ],
        preparazione: [
          'Rosolare cipolla e aglio con olio. Colorire la lonza da entrambi i lati, poi toglierla.',
          'Nella stessa padella: pomodori secchi, capperi, dado. Sfumare con vino bianco.',
          'Coprire 3 minuti. Aggiungere la lonza e cuocere altri 5 minuti.',
          'Spegnere, aggiustare di sale, aggiungere erbe aromatiche e servire.'
        ]
      }
    ]
  },
  {
    nome: 'Secondi di Pesce',
    icon: 'fish',
    ricette: [
      {
        nome: 'Burger di salmone',
        porzioni: null,
        ingredienti: [
          { a: 'Filetti di salmone grigliati all\'olio evo', q: '4 scatole' },
          { a: 'Uovo', q: '1' },
          { a: 'Farina di mais integrale', q: '4 cucchiai' },
          { a: 'Prezzemolo', q: 'q.b.' }
        ],
        preparazione: [
          'Sgocciolare i filetti, spezzettarli con forchetta.',
          'Aggiungere uovo, farina di mais e prezzemolo. Mescolare.',
          'Formare i burger con coppapasta.',
          'Rosolare in padella antiaderente 3-4 minuti per lato.'
        ]
      },
      {
        nome: 'Zucchine ripiene al tonno',
        porzioni: null,
        ingredienti: [
          { a: 'Zucchine grandi', q: '3-4' },
          { a: 'Filetti di tonno', q: '150g' },
          { a: 'Uovo', q: '1' },
          { a: 'Pane raffermo (pangrattato)', q: 'q.b.' },
          { a: 'Parmigiano o grana', q: 'q.b.' }
        ],
        preparazione: [
          'Bollire zucchine 10-15 minuti. Tagliare a met\u00e0, svuotare della polpa.',
          'Rosolare la polpa tritata in padella per 5 minuti.',
          'Unire tonno sgocciolato, uovo sbattuto e pangrattato. Aggiungere polpa di zucchine.',
          'Farcire le zucchine, spolverare di parmigiano.',
          'Forno 180\u00b0 per 20-25 min; ultimi 5 min con grill.'
        ]
      },
      {
        nome: 'Branzino all\'acquapazza',
        porzioni: '4',
        ingredienti: [
          { a: 'Branzino eviscerato', q: '~1 kg' },
          { a: 'Pomodorini', q: '300g' },
          { a: 'Aglio', q: '2 spicchi' },
          { a: 'Vino Bianco', q: '1 bicchiere' },
          { a: 'Prezzemolo, peperoncino, sale', q: 'q.b.' },
          { a: 'Olio EVO', q: 'q.b.' }
        ],
        preparazione: [
          'Squamare e sfilettare il branzino. Tagliare i pomodorini in quarti.',
          'In padella: aglio, pomodorini e vino. Cuocere 5 minuti coperto.',
          'Aggiungere filetti (pelle in basso), salare, peperoncino. Cuocere coperto ~20 minuti.',
          'Completare con prezzemolo fresco e olio.'
        ]
      },
      {
        nome: 'Filetto di merluzzo gratinato',
        porzioni: null,
        ingredienti: [
          { a: 'Filetti di merluzzo', q: '2' },
          { a: 'Patate (o zucchine)', q: '200g' },
          { a: 'Pomodorini', q: '200g' },
          { a: 'Olive verdi snocciolate', q: '80g' },
          { a: 'Prezzemolo e aglio', q: 'q.b.' },
          { a: 'Pangrattato', q: 'q.b.' },
          { a: 'Sale, pepe, olio EVO', q: 'q.b.' }
        ],
        preparazione: [
          'Patate a cubetti, pomodorini in 4, olive a met\u00e0.',
          'Teglia con carta forno. Adagiare il merluzzo.',
          'Mischiare verdure, prezzemolo, aglio, pangrattato, sale, pepe e olio.',
          'Coprire il merluzzo col composto. Forno 180\u00b0 per ~30 minuti.'
        ]
      },
      {
        nome: 'Seppie ripiene',
        porzioni: null,
        ingredienti: [
          { a: 'Seppie', q: '4' },
          { a: 'Pomodorini ciliegino', q: '400g' },
          { a: 'Pane (mollica)', q: '50g' },
          { a: 'Basilico', q: '6 foglie' },
          { a: 'Vino bianco', q: '50 ml' },
          { a: 'Brodo vegetale', q: '80 ml' },
          { a: 'Aglio, olio EVO, sale e pepe', q: 'q.b.' }
        ],
        preparazione: [
          'Pulire le seppie: separare testa/tentacoli dal mantello.',
          'Tritare tentacoli e teste; aprire i mantelli a libro.',
          'Soffriggere aglio con olio. Aggiungere tentacoli, sfumare con vino.',
          'Cuocere 5 min, unire pomodorini, sale, pepe, basilico. Altri 7-8 min.',
          'Frullare mollica con un po\' di condimento per farcire le seppie.',
          'Sigillare con stuzzicadenti. Cuocere in padella col condimento ~10 min.'
        ]
      },
      {
        nome: 'Filetti di platessa al forno',
        porzioni: '2',
        ingredienti: [
          { a: 'Filetti di platessa', q: '400g' },
          { a: 'Cipollotto fresco', q: '300g' },
          { a: 'Olio EVO, sale e pepe nero', q: 'q.b.' },
          { a: 'Rosmarino, salvia, timo', q: 'q.b.' },
          { a: 'Limone', q: '1' }
        ],
        preparazione: [
          'Cipollotti a met\u00e0, conditi con olio, sale e pepe in pirofila.',
          'Tritare le erbe aromatiche. Limone a fettine sottili.',
          'Adagiare filetti su leccarda unta. Condire con erbe, limone, sale e pepe.',
          'Cipollotti tra i filetti. Forno statico 220\u00b0 per 20 minuti.',
          'Filo di olio a crudo prima di servire.'
        ]
      },
      {
        nome: 'Medaglioni di merluzzo e broccoletti',
        porzioni: '6',
        ingredienti: [
          { a: 'Filetto di merluzzo', q: '400g' },
          { a: 'Broccoletti', q: '200g' },
          { a: 'Patate', q: '400g' },
          { a: 'Maggiorana', q: '3 rametti' },
          { a: 'Olio EVO, sale e pepe', q: 'q.b.' },
          { a: 'Pomodorini ciliegino', q: '200g' },
          { a: 'Aglio e origano', q: 'q.b.' }
        ],
        preparazione: [
          'Lessare patate 30-40 min e broccoletti 5 min.',
          'Tritare broccoletti. Schiacciare patate. Tritare merluzzo.',
          'Unire tutto con sale, pepe e maggiorana. Formare 6 medaglioni.',
          'Forno 200\u00b0 per ~20 minuti.',
          'Contorno: rosolare pomodorini con aglio, sale e origano per 15 min.'
        ]
      }
    ]
  },
  {
    nome: 'Piatti Vegetali',
    icon: 'leaf',
    ricette: [
      {
        nome: 'Burger di ceci neri',
        porzioni: '4',
        ingredienti: [
          { a: 'Ceci neri secchi', q: '100g (o 600g in scatola)' },
          { a: 'Zucchine', q: '110g' },
          { a: 'Asparagi', q: '115g' },
          { a: 'Parmigiano reggiano', q: '35g' },
          { a: 'Olio EVO', q: '50g' },
          { a: 'Sale, pepe, erba cipollina, aglio', q: 'q.b.' }
        ],
        preparazione: [
          'Ammollo ceci 24h. Cuocere 1-1.5 ore.',
          'Cuocere asparagi a rondelle con olio e aglio. Aggiungere zucchine grattugiate.',
          'Frullare i ceci in purea.',
          'Unire purea, verdure, parmigiano, erba cipollina e olio. Formare 4 burger.',
          'Cuocere in padella 2-3 minuti per lato.'
        ]
      },
      {
        nome: 'Zuppa di lenticchie e zucca',
        porzioni: null,
        ingredienti: [
          { a: 'Lenticchie secche', q: '50g (o 200g precotte)' },
          { a: 'Zucca Delicata', q: '1/4' },
          { a: 'Carota, cipolla, sedano', q: '1/2 ciascuno' },
          { a: 'Aglio e rosmarino', q: '1 spicchio + 1 rametto' },
          { a: 'Concentrato di pomodoro', q: '1 cucchiaio' },
          { a: 'Curcuma', q: '1 cucchiaino' },
          { a: 'Peperoncino, olio EVO e sale', q: 'q.b.' }
        ],
        preparazione: [
          'Ammollo lenticchie secche 12h. Tagliare verdure a dadini.',
          'Scaldare olio con aglio, aggiungere verdure, rosmarino, peperoncino e zucca.',
          'Cuocere 5 min, togliere aglio, aggiungere lenticchie.',
          'Aggiungere concentrato, curcuma e acqua bollente.',
          'Secche: 2h (o 30 min in pentola a pressione). Precotte: 20 min.',
          'Togliere rosmarino, filo di olio a crudo.'
        ]
      },
      {
        nome: 'Carciofi ripieni',
        porzioni: null,
        ingredienti: [
          { a: 'Carciofi grossi', q: '4' },
          { a: 'Pane (mollica)', q: '4 cucchiai' },
          { a: 'Capperi', q: '2 cucchiai' },
          { a: 'Aglio', q: '2 spicchi' },
          { a: 'Olio EVO', q: 'q.b.' },
          { a: 'Vino bianco secco', q: '1 bicchiere' },
          { a: 'Sale', q: 'q.b.' }
        ],
        preparazione: [
          'Mondare i carciofi delle foglie esterne, lavare e sgocciolare.',
          'Preparare ripieno: mollica, capperi e aglio tritati.',
          'Farcire i carciofi. Scaldare olio, disporre i carciofi.',
          'Salare, aggiungere vino, coprire. Cuocere ~1 ora a fuoco moderato.'
        ]
      },
      {
        nome: 'Crocchette di fagioli',
        porzioni: null,
        ingredienti: [
          { a: 'Fagioli lessati', q: '500g' },
          { a: 'Cipolla', q: '1' },
          { a: 'Santoreggia, timo, noce moscata', q: 'q.b.' },
          { a: 'Tamari', q: '1 cucchiaio' },
          { a: 'Olio EVO e pangrattato', q: 'q.b.' }
        ],
        preparazione: [
          'Passare i fagioli nel passaverdura.',
          'Battuto di cipolla, aromi, olio e tamari.',
          'Mescolare alla purea. Formare polpettine schiacciate.',
          'Passare nel pangrattato. Forno in teglia unta fino a doratura.'
        ]
      },
      {
        nome: 'Piselli alla trevisana',
        porzioni: null,
        ingredienti: [
          { a: 'Cipolle', q: '2' },
          { a: 'Olio EVO', q: '3 cucchiai' },
          { a: 'Piselli freschi', q: 'q.b.' },
          { a: 'Sale e peperoncino rosso', q: 'q.b.' },
          { a: 'Cespi di radicchio', q: '4' }
        ],
        preparazione: [
          'Tritare cipolle e saltarle con olio.',
          'Aggiungere piselli, sale, peperoncino e acqua tiepida.',
          'Bollire 20 minuti. Quando il liquido \u00e8 assorbito, aggiungere radicchio.',
          'Servire i cespi coperti con piselli e fondo di cottura.'
        ]
      },
      {
        nome: 'Patate al pomodoro',
        porzioni: null,
        ingredienti: [
          { a: 'Patate', q: '800g' },
          { a: 'Cipolle', q: '2' },
          { a: 'Olio EVO', q: '3 cucchiai' },
          { a: 'Passata di pomodoro', q: '500g' },
          { a: 'Alloro', q: '2 foglie' },
          { a: 'Sale', q: 'q.b.' }
        ],
        preparazione: [
          'Sbucciare patate e tagliare a pezzetti. Affettare e stufare cipolle con olio.',
          'Aggiungere patate e insaporire.',
          'Unire passata e alloro. Salare, coprire. Cuocere 40 min a fuoco moderato.'
        ]
      }
    ]
  },
  {
    nome: 'Piccole Delizie',
    icon: 'cake-slice',
    ricette: [
      {
        nome: 'Coppette di crema di ricotta',
        porzioni: null,
        ingredienti: [
          { a: 'Ricotta di vacca', q: '150g' },
          { a: 'Miele', q: '1 cucchiaino e mezzo' },
          { a: 'Frutti di bosco', q: 'q.b.' },
          { a: 'Noci', q: '4' },
          { a: 'Crema nocciole o cioccolato fondente', q: '2 cucchiaini / 30g' },
          { a: 'Biscotti secchi', q: '40g' }
        ],
        preparazione: [
          'Sbriciolare biscotti e compattare sul fondo di un bicchiere.',
          'Mischiare ricotta con miele. Met\u00e0 della crema sui biscotti.',
          'Strato di crema nocciole/cioccolato fuso. Altra met\u00e0 di ricotta.',
          'Frigo 30 minuti. Aggiungere mirtilli e noci sbriciolate.'
        ]
      },
      {
        nome: 'Pancakes allo yogurt',
        porzioni: null,
        ingredienti: [
          { a: 'Farina di avena', q: '50g' },
          { a: 'Yogurt greco magro', q: '250g' },
          { a: 'Albume', q: '150 ml' },
          { a: 'Farina di cocco', q: '5g' },
          { a: 'Marmellata o frutta', q: '40g' },
          { a: 'Lievito in polvere', q: '6g' }
        ],
        preparazione: [
          'Setacciare farina e lievito.',
          'Montare albumi a neve, unire allo yogurt senza smontare.',
          'Unire alla farina e mescolare.',
          'Padella antiaderente con burro. Un mestolo alla volta.',
          'Girare quando compaiono le bollicine. Ricoprire a piacere.'
        ]
      },
      {
        nome: 'Fit Cheesecake ai frutti di bosco',
        porzioni: null,
        ingredienti: [
          { a: 'Fette biscottate', q: '3' },
          { a: 'Burro di arachidi', q: '15g' },
          { a: 'Cacao amaro', q: '15g' },
          { a: 'Yogurt greco 0 grassi', q: '200g' },
          { a: 'Marmellata ai frutti di bosco', q: '50g' },
          { a: 'Frutti di bosco', q: '50g' }
        ],
        preparazione: [
          'Sbriciolare fette biscottate con cacao (5g), burro d\'arachidi e un goccio d\'acqua. Compattare la base.',
          'Ricoprire con yogurt greco. Marmellata in superficie.',
          'Frigo almeno 8 ore.',
          'Decorare con frutti di bosco e cremina di cacao+acqua.'
        ]
      },
      {
        nome: 'Torta all\'acqua',
        porzioni: null,
        ingredienti: [
          { a: 'Acqua', q: '375 ml' },
          { a: 'Zucchero', q: '230g' },
          { a: 'Farina 00', q: '360g' },
          { a: 'Olio di semi', q: '75g' },
          { a: 'Estratto di vaniglia', q: '1 cucchiaino' },
          { a: 'Lievito per dolci', q: '1 bustina' }
        ],
        preparazione: [
          'Acqua + zucchero, mescolare fino a sciogliere. Aggiungere olio e vaniglia.',
          'Setacciare farina e lievito. Unire ai liquidi con una frusta.',
          'Teglia 22 cm imburrata e infarinata.',
          'Forno 180\u00b0 per 40 minuti. Zucchero a velo e lasciar raffreddare.'
        ]
      }
    ]
  }
];

function renderRecipeCard(ricetta, idx) {
  const porzioniTag = ricetta.porzioni
    ? `<span class="rc-porzioni"><i data-lucide="users"></i> ${ricetta.porzioni} porz.</span>`
    : '';

  const ingredienti = ricetta.ingredienti.map(i =>
    `<li><strong>${i.q}</strong> ${i.a}</li>`
  ).join('');

  const steps = ricetta.preparazione.map((s, i) =>
    `<li><span class="rc-step-num">${i + 1}</span>${s}</li>`
  ).join('');

  return `
    <div class="rc-card" data-recipe="${idx}">
      <div class="rc-card-header">
        <h4 class="rc-card-title">${ricetta.nome}</h4>
        ${porzioniTag}
        <i data-lucide="chevron-down" class="rc-card-arrow"></i>
      </div>
      <div class="rc-card-body">
        <div class="rc-section">
          <h5 class="rc-section-title"><i data-lucide="shopping-basket"></i> Ingredienti</h5>
          <ul class="rc-ingredients">${ingredienti}</ul>
        </div>
        <div class="rc-section">
          <h5 class="rc-section-title"><i data-lucide="chef-hat"></i> Preparazione</h5>
          <ol class="rc-steps">${steps}</ol>
        </div>
      </div>
    </div>
  `;
}

export function renderRecipes() {
  const tabs = CATEGORIE.map((cat, i) =>
    `<button class="rc-tab ${i === 0 ? 'active' : ''}" data-cat="${i}">
      <i data-lucide="${cat.icon}"></i>
      <span>${cat.nome}</span>
    </button>`
  ).join('');

  const panels = CATEGORIE.map((cat, i) =>
    `<div class="rc-panel ${i === 0 ? 'active' : ''}" id="rc-cat-${i}">
      <div class="rc-grid">
        ${cat.ricette.map((r, idx) => renderRecipeCard(r, `${i}-${idx}`)).join('')}
      </div>
    </div>`
  ).join('');

  return `
    <div class="nutrition-section">
      <h2 class="nutrition-section-title">Le mie Ricette</h2>
      <p class="rc-subtitle">Dott.ssa Dietista Giulia Corradini</p>
      <div class="rc-tabs">${tabs}</div>
      <div class="rc-panels">${panels}</div>
    </div>
  `;
}

export function initRecipeTabs(view) {
  // Category tabs
  view.querySelectorAll('.rc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-cat');
      view.querySelectorAll('.rc-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      view.querySelectorAll('.rc-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('rc-cat-' + cat);
      if (panel) panel.classList.add('active');
    });
  });

  // Expandable cards
  view.querySelectorAll('.rc-card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.rc-card');
      const wasOpen = card.classList.contains('open');

      // Close all in same panel
      card.closest('.rc-panel').querySelectorAll('.rc-card').forEach(c => c.classList.remove('open'));

      if (!wasOpen) card.classList.add('open');
    });
  });
}
