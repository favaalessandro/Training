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

// Piano base (uguale per tutti i giorni per ora — personalizzabile giorno per giorno)
function pianoBase() {
  return [
    {
      nome: 'Colazione',
      nota: '*Per biscotti secchi si intende senza uova. ** attenzione alla frequenza di consumo degli affettati tra i vari pasti',
      alimenti: [
        { nome: 'Cornflakes', q: '50 g' },
        { nome: 'Latte di vacca parzial. scremato', q: '200 g' },
        { nome: 'Noci', q: '30 g' },
        { nome: 'Mela', q: '150 g' }
      ]
    },
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
      nota: 'E\' possibile utilizzare la porzione di fagioli o alternative come condimento del primo oppure aggiungerlo alla porzione di secondo. Oppure è possibile utilizzare sia la porzione di fagioli che quella di petto di pollo.',
      alimenti: [
        { nome: 'Pasta di semola', q: '180 g' },
        { nome: 'Fagioli - Borlotti secchi', q: '30 g' },
        { nome: 'Petto di pollo', q: '150 g' },
        { nome: 'Verdure fresche (media)', q: '150 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' }
      ]
    },
    {
      nome: 'Merenda',
      nota: 'Nelle giornate in cui vai a nuoto si consiglia di spostare questa merenda, tutta o in parte, come merenda post allenamento di nuoto.',
      alimenti: [
        { nome: 'Pane (media)', q: '50 g' },
        { nome: 'Mela', q: '150 g' },
        { nome: 'Mela', q: '150 g' },
        { nome: 'Yogurt greco 0% bianco', q: '150 g' }
      ]
    },
    {
      nome: 'Cena',
      nota: null,
      alimenti: [
        { nome: 'Pane (media)', q: '100 g' },
        { nome: 'Petto di pollo', q: '150 g' },
        { nome: 'Olio Extra Vergine di Oliva', q: '1 cucchiaio e mezzo (15 g)' },
        { nome: 'Verdure fresche (media)', q: '150 g' }
      ]
    }
  ];
}

export const CORRADINI_DIET = {
  id: 'corradini',
  name: 'Dott.ssa Corradini',
  description: 'Piano alimentare personalizzato con quantità precise, giorno per giorno',
  icon: 'clipboard-list',
  noteGenerali: NOTE_GENERALI,
  giorni: GIORNI_ABBR.map((abbr, i) => ({
    abbr,
    nome: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'][i],
    pasti: pianoBase()
  }))
};
