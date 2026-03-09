/* ═══════════════════════════════════════
   LUNCH IDEAS DATA & RENDERER
   ═══════════════════════════════════════
   Idee per il Pranzo
   Dott.ssa Dietista Giulia Corradini
   ═══════════════════════════════════════ */

const IDEE_PRANZO = [
  'Riso con piselli e cubetti di prosciutto',
  'Riso al pomodoro e parmigiano',
  'Riso in bianco con parmigiano',
  'Pasta al pesto',
  'Pasta al ragù di carne magro',
  'Pasta con tonno',
  'Pasta e ceci',
  'Pasta e fagioli',
  'Pasta con sugo di fagioli in rosso',
  'Pasta con sugo al tonno in rosso',
  'Pasta con sugo di pomodoro e ricotta / pasta con pomodorini e ricotta',
  'Cous cous con verdure miste e ceci',
  'Panino con bresaola, rucola e maionese al posto dell\'olio',
  'Panino con prosciutto e insalata e maionese al posto dell\'olio',
  'Panino con fesa di tacchino',
  'Panino con zucchine e 1 uovo',
  'Panino con salmone affumicato, ricotta e verdure',
  'Panino con tonno e insalata',
  'Uovo sodo con insalata e crostini',
  'Insalatona di farro e lenticchie',
  'Insalatona di orzo, ceci, lenticchie, pomodorini e zucchine',
  'Lenticchie al sugo di pomodoro con pane'
];

const PANINI_SPECIALI = [
  { n: 1, desc: 'Pane di segale, bresaola della Valtellina, rucola e funghi, conditi con una spruzzata di limone e di pepe verde.' },
  { n: 2, desc: 'Pane integrale, prosciutto crudo di Parma sgrassato, melanzane e zucchine grigliate condite con qualche goccia di aceto balsamico di Modena.' },
  { n: 3, desc: 'Pane con semi di sesamo, prosciutto cotto sgrassato, peperoni a listarelle e valerianella, conditi con un pizzico di peperoncino.' },
  { n: 4, desc: 'Pane con semi di papavero, salmone affumicato, radicchio e valerianella, conditi con un pizzico di peperoncino e una spruzzata di limone.' },
  { n: 5, desc: 'Pane integrale, tonno al naturale, pomodoro, basilico e cipollotti freschi, conditi con un pizzico di pepe nero.' },
  { n: 6, desc: 'Pane di segale, mozzarella light, pomodoro, songino, basilico, un pizzico di origano e una spruzzata di aceto di vino.' },
  { n: 7, desc: 'Pane di segale, crescenza light, melanzane e peperoni grigliati, conditi con basilico e un pizzico di pepe verde.' },
  { n: 8, desc: 'Pane con semi di sesamo, roast-beef, insalata iceberg, finocchi grigliati, un pizzico di pepe rosa e una spruzzata di limone.' },
  { n: 9, desc: 'Pane di semola di grano duro, petto di pollo ai ferri, pomodoro e carote a julienne, conditi con un cucchiaino di olio.' },
  { n: 10, desc: 'Pane di segale, tofu al naturale, insalata iceberg, cipollotti freschi, pomodoro, conditi con erbe aromatiche.' }
];

export function renderLunchIdeas() {
  const chips = IDEE_PRANZO.map(idea =>
    `<span class="li-chip">${idea}</span>`
  ).join('');

  const panini = PANINI_SPECIALI.map(p =>
    `<div class="li-panino-card">
      <span class="li-panino-num">#${p.n}</span>
      <p class="li-panino-desc">${p.desc}</p>
    </div>`
  ).join('');

  return `
    <div class="nutrition-section">
      <h2 class="nutrition-section-title">Idee per il Pranzo</h2>
      <p class="li-subtitle">Dott.ssa Dietista Giulia Corradini</p>

      <div class="li-accordion">
        <div class="li-accordion-header" data-li-target="li-idee">
          <div class="li-accordion-label">
            <i data-lucide="lightbulb"></i>
            <span>Idee Rapide</span>
          </div>
          <i data-lucide="chevron-down" class="li-accordion-icon"></i>
        </div>
        <div class="li-accordion-body" id="li-idee">
          <div class="li-accordion-content">
            <div class="li-chips">${chips}</div>
          </div>
        </div>
      </div>

      <div class="li-accordion">
        <div class="li-accordion-header" data-li-target="li-panini">
          <div class="li-accordion-label">
            <i data-lucide="sandwich"></i>
            <span>Panini Speciali</span>
          </div>
          <i data-lucide="chevron-down" class="li-accordion-icon"></i>
        </div>
        <div class="li-accordion-body" id="li-panini">
          <div class="li-accordion-content">
            <div class="li-panini-grid">${panini}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initLunchIdeasAccordions(view) {
  view.querySelectorAll('.li-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-li-target');
      const body = document.getElementById(targetId);
      const icon = header.querySelector('.li-accordion-icon');
      const isOpen = body.classList.contains('open');

      // Close all lunch idea accordions
      view.querySelectorAll('.li-accordion-body').forEach(b => b.classList.remove('open'));
      view.querySelectorAll('.li-accordion-header').forEach(h => h.classList.remove('active'));
      view.querySelectorAll('.li-accordion-icon').forEach(i => i.classList.remove('rotated'));

      if (!isOpen) {
        body.classList.add('open');
        header.classList.add('active');
        icon.classList.add('rotated');
      }
    });
  });
}
