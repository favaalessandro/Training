/* ═══════════════════════════════════════
   WEEKLY MENU DATA & RENDERER
   ═══════════════════════════════════════
   Menù Settimanale Primavera-Estate
   Dott.ssa Dietista Giulia Corradini
   ═══════════════════════════════════════ */

const WEEKLY_MENU = {
  titolo: 'Menù Settimanale Primavera-Estate',
  autore: 'Dott.ssa Dietista Giulia Corradini',
  contatti: {
    telefono: '3337923360',
    email: 'info@dietistagiuliacorradini.com',
    sito: 'www.dietistagiuliacorradini.com'
  },
  legenda: {
    'Legumi':       { color: '#7c6ef6', bg: 'rgba(124,110,246,0.12)' },
    'Carne':        { color: '#e05577', bg: 'rgba(224,85,119,0.12)' },
    'Affettati':    { color: '#e05577', bg: 'rgba(224,85,119,0.12)' },
    'Affettato':    { color: '#e05577', bg: 'rgba(224,85,119,0.12)' },
    'Pesce':        { color: '#4da6e8', bg: 'rgba(77,166,232,0.12)' },
    'Pesce Cons.':  { color: '#4da6e8', bg: 'rgba(77,166,232,0.12)' },
    'Pesce cons.':  { color: '#4da6e8', bg: 'rgba(77,166,232,0.12)' },
    'Uova':         { color: '#e8a84d', bg: 'rgba(232,168,77,0.12)' },
    'Formaggio':    { color: '#e8a84d', bg: 'rgba(232,168,77,0.12)' },
    '//':           { color: '#6b7280', bg: 'rgba(107,114,128,0.1)' }
  },
  settimane: [
    {
      numero: 1,
      giorni: [
        { giorno: 'Lunedì', pranzo: { cat: 'Legumi', piatto: 'Cous cous con ceci e verdure miste' }, cena: { cat: 'Carne', piatto: 'Insalatona con rucola, petto di pollo all\'aceto balsamico e pomodorini, patate lesse' } },
        { giorno: 'Martedì', pranzo: { cat: 'Affettati', piatto: 'Panino ai 5 cereali con prosciutto cotto e fagiolini tagliati, maionese light (no olio)' }, cena: { cat: 'Pesce', piatto: 'Merluzzo gratinato in padella, bieta, pane integrale' } },
        { giorno: 'Mercoledì', pranzo: { cat: 'Pesce Cons.', piatto: 'Penne con tonno in scatola, pomodorini e olive' }, cena: { cat: 'Uova', piatto: 'Insalatona con insalata verde, pezzi di finocchio, cetrioli, uova strapazzate e crostini' } },
        { giorno: 'Giovedì', pranzo: { cat: 'Legumi', piatto: 'Farro con lenticchie e pomodorini' }, cena: { cat: 'Pesce', piatto: 'Salmone in padella con carote grattugiate e pane integrale' } },
        { giorno: 'Venerdì', pranzo: { cat: 'Formaggio', piatto: 'Farfalle integrali con feta e pomodorini' }, cena: { cat: 'Carne', piatto: 'Burger di manzo con purè di cavolfiore e patate' } },
        { giorno: 'Sabato', pranzo: { cat: '//', piatto: 'Riso con verdure miste' }, cena: { cat: '//', piatto: 'PASTO LIBERO' } },
        { giorno: 'Domenica', pranzo: { cat: 'Formaggio', piatto: 'Pasta al sugo di pomodoro e basilico, ricotta' }, cena: { cat: 'Legumi', piatto: 'Hummus di ceci con carote e grissini' } }
      ]
    },
    {
      numero: 2,
      giorni: [
        { giorno: 'Lunedì', pranzo: { cat: 'Pesce cons.', piatto: 'Toast con salmone affumicato e insalata mista' }, cena: { cat: 'Uova', piatto: 'Insalatona con uova sode e pane integrale' } },
        { giorno: 'Martedì', pranzo: { cat: 'Formaggio', piatto: 'Sedanini con ricotta e pomodorini' }, cena: { cat: 'Carne', piatto: 'Petto di tacchino al limone con asparagi e pane integrale' } },
        { giorno: 'Mercoledì', pranzo: { cat: 'Affettato', piatto: 'Fusilli integrali con speck e piselli' }, cena: { cat: 'Pesce', piatto: 'Pesce spada con melanzane e pomodori, pane integrale' } },
        { giorno: 'Giovedì', pranzo: { cat: 'Legumi', piatto: 'Cous cous con piselli e verdure miste' }, cena: { cat: 'Carne', piatto: 'Bistecca di maiale con patate lesse e fagiolini' } },
        { giorno: 'Venerdì', pranzo: { cat: 'Formaggio', piatto: 'Spaghetti aglio olio e peperoncino con pomodorini' }, cena: { cat: 'Legumi', piatto: 'Burger di fagioli con spinaci e pane integrale' } },
        { giorno: 'Sabato', pranzo: { cat: '//', piatto: 'Farfalle integrali con broccoli' }, cena: { cat: '//', piatto: 'PASTO LIBERO' } },
        { giorno: 'Domenica', pranzo: { cat: 'Legumi', piatto: 'Insalata di farro, lenticchie e verdure miste' }, cena: { cat: 'Pesce', piatto: 'Branzino al limone con pane integrale e zucchine' } }
      ]
    },
    {
      numero: 3,
      giorni: [
        { giorno: 'Lunedì', pranzo: { cat: 'Legumi', piatto: 'Piadina all\'olio evo con tonno e insalata' }, cena: { cat: 'Carne', piatto: 'Straccetti di pollo in padella, carciofi e pane integrale' } },
        { giorno: 'Martedì', pranzo: { cat: 'Affettati', piatto: 'Bresaola, rucola e pomodorini con fette di pane' }, cena: { cat: 'Pesce', piatto: 'Polpo e patate lesse, insalata mista' } },
        { giorno: 'Mercoledì', pranzo: { cat: 'Pesce', piatto: 'Linguine con zucchine e gamberetti' }, cena: { cat: 'Uova', piatto: 'Uova all\'occhio di bue con pane tostato e broccoli' } },
        { giorno: 'Giovedì', pranzo: { cat: 'Legumi', piatto: 'Quinoa con fagioli e pomodorini' }, cena: { cat: 'Pesce', piatto: 'Orata gratinata in padella con patate lesse e asparagi' } },
        { giorno: 'Venerdì', pranzo: { cat: 'Legumi', piatto: 'Fusilli con cubetti di melanzana e lenticchie' }, cena: { cat: 'Carne', piatto: 'Bistecca di cavallo al limone con rucola e pomodorini, pane integrale' } },
        { giorno: 'Sabato', pranzo: { cat: '//', piatto: 'Riso con zucchine' }, cena: { cat: '//', piatto: 'PASTO LIBERO' } },
        { giorno: 'Domenica', pranzo: { cat: 'Formaggio', piatto: 'Bruschette con Philadelphia light e pomodorini' }, cena: { cat: 'Legumi', piatto: 'Insalatona con ceci e patate lesse' } }
      ]
    },
    {
      numero: 4,
      giorni: [
        { giorno: 'Lunedì', pranzo: { cat: 'Pesce', piatto: 'Sedanini con pesce spada e melanzane' }, cena: { cat: 'Uova', piatto: 'Uova sode con maionese light, carote grattugiate e pane integrale' } },
        { giorno: 'Martedì', pranzo: { cat: 'Legumi', piatto: 'Pane integrale con insalata di finocchi e ceci' }, cena: { cat: 'Carne', piatto: 'Burger di tacchino con patate lesse e insalata' } },
        { giorno: 'Mercoledì', pranzo: { cat: 'Affettato', piatto: 'Pasta fredda con cubetti di prosciutto e piselli' }, cena: { cat: 'Pesce', piatto: 'Burger di merluzzo con fagiolini e pane integrale' } },
        { giorno: 'Giovedì', pranzo: { cat: 'Legumi', piatto: 'Conchiglie con ceci e prezzemolo, pinzimonio' }, cena: { cat: 'Carne', piatto: 'Straccetti di vitello con peperoni e pane integrale' } },
        { giorno: 'Venerdì', pranzo: { cat: 'Formaggio', piatto: 'Fusilli integrali con pomodorini e mozzarella' }, cena: { cat: 'Legumi', piatto: 'Riso con lenticchie e verdure miste' } },
        { giorno: 'Sabato', pranzo: { cat: '//', piatto: 'Mezze penne con olio e verdure miste' }, cena: { cat: '//', piatto: 'PASTO LIBERO' } },
        { giorno: 'Domenica', pranzo: { cat: 'Legumi', piatto: 'Cous cous con piselli e verdure miste' }, cena: { cat: 'Pesce', piatto: 'Halibut gratinato con insalata mista' } }
      ]
    }
  ]
};

function renderMealBadge(cat, legenda) {
  if (cat === '//') return '';
  const style = legenda[cat] || { color: '#6b7280', bg: 'rgba(107,114,128,0.1)' };
  return `<span class="wm-badge" style="color:${style.color};background:${style.bg}">${cat}</span>`;
}

export function renderWeeklyMenuSection() {
  const { settimane, legenda, autore } = WEEKLY_MENU;

  const weekAccordions = settimane.map((s) =>
    `<div class="wm-accordion">
      <div class="wm-accordion-header" data-wm-week="${s.numero}">
        <span class="wm-accordion-label">Settimana ${s.numero}</span>
        <i data-lucide="chevron-down" class="wm-accordion-icon"></i>
      </div>
      <div class="wm-accordion-body" id="wm-week-${s.numero}">
        <div class="wm-accordion-content">
          <div class="wm-grid">
            ${s.giorni.map(g => `
              <div class="wm-day ${g.cena.piatto === 'PASTO LIBERO' ? 'wm-day--free' : ''}">
                <div class="wm-day-name">${g.giorno}</div>
                <div class="wm-meal">
                  <span class="wm-meal-label">Pranzo</span>
                  ${renderMealBadge(g.pranzo.cat, legenda)}
                  <p class="wm-meal-text">${g.pranzo.piatto}</p>
                </div>
                <div class="wm-meal">
                  <span class="wm-meal-label">Cena</span>
                  ${renderMealBadge(g.cena.cat, legenda)}
                  <p class="wm-meal-text">${g.cena.piatto === 'PASTO LIBERO' ? '<strong>Pasto Libero</strong>' : g.cena.piatto}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>`
  ).join('');

  // Legenda unica (deduplicated)
  const uniqueCats = [
    { label: 'Legumi', color: legenda['Legumi'].color, bg: legenda['Legumi'].bg },
    { label: 'Carne / Affettati', color: legenda['Carne'].color, bg: legenda['Carne'].bg },
    { label: 'Pesce', color: legenda['Pesce'].color, bg: legenda['Pesce'].bg },
    { label: 'Uova / Formaggio', color: legenda['Uova'].color, bg: legenda['Uova'].bg }
  ];

  const legendaHtml = uniqueCats.map(c =>
    `<span class="wm-badge" style="color:${c.color};background:${c.bg}">${c.label}</span>`
  ).join('');

  return `
    <div class="nutrition-section">
      <h2 class="nutrition-section-title">Menù Settimanale</h2>
      <p class="wm-subtitle">Primavera-Estate — ${autore}</p>
      <div class="wm-legenda">${legendaHtml}</div>
      <div class="wm-accordions">${weekAccordions}</div>
    </div>
  `;
}

export function initWeeklyMenuTabs(view) {
  view.querySelectorAll('.wm-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const week = header.getAttribute('data-wm-week');
      const body = document.getElementById('wm-week-' + week);
      const icon = header.querySelector('.wm-accordion-icon');
      const isOpen = body.classList.contains('open');

      // Close all
      view.querySelectorAll('.wm-accordion-body').forEach(b => b.classList.remove('open'));
      view.querySelectorAll('.wm-accordion-header').forEach(h => h.classList.remove('active'));
      view.querySelectorAll('.wm-accordion-icon').forEach(i => i.classList.remove('rotated'));

      // Open clicked if it was closed
      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('active');
        icon.classList.add('rotated');
      }
    });
  });
}
