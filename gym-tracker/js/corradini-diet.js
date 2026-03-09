/* ═══════════════════════════════════════
   CORRADINI DIET - DAILY PLAN
   ═══════════════════════════════════════
   Dieta personalizzata giorno per giorno
   Dott.ssa Dietista Giulia Corradini
   ═══════════════════════════════════════
   Per aggiornare: modifica i pasti nel giorno
   corrispondente. Ogni giorno può avere pasti
   diversi con alimenti e quantità specifiche.
   ═══════════════════════════════════════ */

const NOTE_GENERALI = [
  'I pesi si intendono a crudo e al netto dello scarto.',
  'Le marche indicate non sono da intendersi come preferenziali.'
];

const GIORNI_ABBR = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

const NOTA_COLAZIONE = '*Per biscotti secchi si intende senza uova. ** attenzione alla frequenza di consumo degli affettati tra i vari pasti';
const NOTA_PRANZO = 'E\' possibile utilizzare la porzione di fagioli o alternative come condimento del primo oppure aggiungerlo alla porzione di secondo. Oppure è possibile utilizzare sia la porzione di fagioli che quella di petto di pollo.';
const NOTA_MERENDA = 'Nelle giornate in cui vai a nuoto si consiglia di spostare questa merenda, tutta o in parte, come merenda post allenamento di nuoto.';

const COLAZIONE_BASE = {
  nome: 'Colazione',
  nota: NOTA_COLAZIONE,
  alimenti: [
    { nome: 'Cornflakes', q: '50 g' },
    { nome: 'Latte di vacca parzial. scremato', q: '200 g' },
    { nome: 'Noci', q: '30 g' },
    { nome: 'Mela', q: '150 g' }
  ]
};

const MERENDA_BASE = {
  nome: 'Merenda',
  nota: NOTA_MERENDA,
  alimenti: [
    { nome: 'Pane (media)', q: '50 g' },
    { nome: 'Mela', q: '150 g' },
    { nome: 'Mela', q: '150 g' },
    { nome: 'Yogurt greco 0% bianco', q: '150 g' }
  ]
};

const CENA_BASE = {
  nome: 'Cena',
  nota: null,
  alimenti: [
    { nome: 'Pane (media)', q: '100 g' },
    { nome: 'Petto di pollo', q: '150 g' },
    { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' },
    { nome: 'Verdure fresche (media)', q: '150 g' }
  ]
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ─── LUNEDÌ ───
function pianoLunedi() {
  return [
    clone(COLAZIONE_BASE),
    {
      nome: 'Spuntino Mattina',
      nota: null,
      alimenti: [
        { nome: 'Mela', q: '150 g' },
        { nome: 'Tarallini all\'olio d\'oliva (Primia)', q: '30 g' }
      ]
    },
    {
      nome: 'Pranzo',
      nota: NOTA_PRANZO,
      alimenti: [
        { nome: 'Pasta di semola', q: '180 g' },
        { nome: 'Fagioli - Borlotti in scatola - scolati', q: '90 g' },
        { nome: 'Tonno', q: '90 g' },
        { nome: 'Verdure fresche (media)', q: '150 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' }
      ]
    },
    {
      nome: 'Merenda',
      nota: NOTA_MERENDA,
      alimenti: [
        { nome: 'Barretta di Cereali Nocciole e Cioccolato Fondente (Grancereale)', q: '30 g' },
        { nome: 'Mela', q: '150 g' },
        { nome: 'Mela', q: '150 g' },
        { nome: 'Yogurt greco 0% bianco', q: '150 g' }
      ]
    },
    clone(CENA_BASE)
  ];
}

// ─── MARTEDÌ ───
function pianoMartedi() {
  return [
    clone(COLAZIONE_BASE),
    {
      nome: 'Spuntino Mattina',
      nota: null,
      alimenti: [
        { nome: 'Mela', q: '150 g' },
        { nome: 'Pane (media)', q: '50 g' }
      ]
    },
    {
      nome: 'Pranzo',
      nota: NOTA_PRANZO,
      alimenti: [
        { nome: 'Pasta di semola', q: '180 g' },
        { nome: 'Fagioli - Borlotti secchi', q: '30 g' },
        { nome: 'Petto di pollo', q: '150 g' },
        { nome: 'Verdure fresche (media)', q: '150 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' }
      ]
    },
    clone(MERENDA_BASE),
    clone(CENA_BASE)
  ];
}

// ─── MERCOLEDÌ ───
function pianoMercoledi() {
  return pianoMartedi(); // identico al Martedì
}

// ─── GIOVEDÌ ───
function pianoGiovedi() {
  return [
    clone(COLAZIONE_BASE),
    {
      nome: 'Spuntino Mattina',
      nota: null,
      alimenti: [
        { nome: 'Mela', q: '150 g' },
        { nome: 'Pane (media)', q: '50 g' }
      ]
    },
    {
      nome: 'Pranzo',
      nota: NOTA_PRANZO,
      alimenti: [
        { nome: 'Pasta di semola', q: '180 g' },
        { nome: 'Tonno sott\'olio sgocciolato', q: '50 g' },
        { nome: 'Bresaola', q: '100 g' },
        { nome: 'Verdure fresche (media)', q: '150 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' }
      ]
    },
    clone(MERENDA_BASE),
    {
      nome: 'Cena',
      nota: null,
      alimenti: [
        { nome: 'Pane (media)', q: '100 g' },
        { nome: 'Orata fresca', q: '120 g' },
        { nome: 'Orata fresca', q: '120 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' },
        { nome: 'Verdure fresche (media)', q: '150 g' }
      ]
    }
  ];
}

// ─── VENERDÌ ───
function pianoVenerdi() {
  return [
    clone(COLAZIONE_BASE),
    {
      nome: 'Spuntino Mattina',
      nota: null,
      alimenti: [
        { nome: 'Mela', q: '150 g' },
        { nome: 'Pane (media)', q: '50 g' }
      ]
    },
    {
      nome: 'Pranzo',
      nota: NOTA_PRANZO,
      alimenti: [
        { nome: 'Pasta di semola', q: '180 g' },
        { nome: 'Fagioli - Borlotti secchi', q: '30 g' },
        { nome: 'Prosciutto Crudo (media)', q: '70 g' },
        { nome: 'Verdure fresche (media)', q: '150 g' },
        { nome: 'Verdure fresche (media)', q: '150 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' }
      ]
    },
    clone(MERENDA_BASE),
    {
      nome: 'Cena',
      nota: null,
      alimenti: [
        { nome: 'Pane (media)', q: '100 g' },
        { nome: 'Maiale', q: '100 g' },
        { nome: 'Maiale', q: '100 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' },
        { nome: 'Verdure fresche (media)', q: '150 g' }
      ]
    }
  ];
}

// ─── SABATO ───
function pianoSabato() {
  return [
    clone(COLAZIONE_BASE),
    {
      nome: 'Spuntino Mattina',
      nota: null,
      alimenti: [
        { nome: 'Mela', q: '150 g' },
        { nome: 'Pane (media)', q: '50 g' }
      ]
    },
    {
      nome: 'Pranzo',
      nota: NOTA_PRANZO,
      alimenti: [
        { nome: 'Pasta di semola', q: '180 g' },
        { nome: 'Fagioli - Borlotti secchi', q: '30 g' },
        { nome: 'Tonno sott\'olio sgocciolato', q: '80 g' },
        { nome: 'Verdure fresche (media)', q: '150 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' }
      ]
    },
    clone(MERENDA_BASE),
    {
      nome: 'Cena',
      nota: null,
      alimenti: [
        { nome: 'Pane (media)', q: '100 g' },
        { nome: 'Sogliola', q: '180 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' },
        { nome: 'Verdure fresche (media)', q: '150 g' }
      ]
    }
  ];
}

// ─── DOMENICA ───
function pianoDomenica() {
  return pianoMartedi(); // identico al Martedì
}

const PIANI_GIORNO = [
  pianoLunedi,
  pianoMartedi,
  pianoMercoledi,
  pianoGiovedi,
  pianoVenerdi,
  pianoSabato,
  pianoDomenica
];

export const CORRADINI_DIET = {
  id: 'corradini',
  name: 'Dott.ssa Corradini',
  description: 'Piano alimentare personalizzato con quantità precise, giorno per giorno',
  icon: 'clipboard-list',
  noteGenerali: NOTE_GENERALI,
  giorni: GIORNI_ABBR.map((abbr, i) => ({
    abbr,
    nome: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'][i],
    pasti: PIANI_GIORNO[i]()
  }))
};
