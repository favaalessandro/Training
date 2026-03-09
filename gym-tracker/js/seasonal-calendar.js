/* ═══════════════════════════════════════
   SEASONAL CALENDAR DATA & RENDERER
   ═══════════════════════════════════════
   Stagionalità Frutta & Verdura
   Dott.ssa Dietista Giulia Corradini
   ═══════════════════════════════════════ */

const TUTTO_ANNO = {
  frutta: ['Limoni', 'Ananas', 'Banane', 'Cocco', 'Mango'],
  verdura: ['Bietole', 'Carote', 'Cavoli', 'Cicorie', 'Patate', 'Radicchi']
};

const MESI = [
  { mese: 'Gennaio', abbr: 'Gen', frutta: ['Arance', 'Clementine', 'Kiwi', 'Limoni', 'Mandarini', 'Mele', 'Pere', 'Pompelmi'], verdura: ['Bietole', 'Carciofi', 'Carote', 'Broccoli', 'Cavolfiori', 'Cavoli', 'Cicoria', 'Finocchi', 'Cime di rapa', 'Rosmarino', 'Radicchio', 'Rape', 'Spinaci', 'Zucche'] },
  { mese: 'Febbraio', abbr: 'Feb', frutta: ['Arance', 'Clementine', 'Kiwi', 'Limoni', 'Mandarini', 'Mele', 'Pere', 'Pompelmi'], verdura: ['Bietole', 'Carciofi', 'Carote', 'Broccoli', 'Cavolfiori', 'Cavoli', 'Cicoria', 'Patate', 'Radicchio', 'Rape', 'Spinaci', 'Zucche'] },
  { mese: 'Marzo', abbr: 'Mar', frutta: ['Arance', 'Kiwi', 'Limoni', 'Mele', 'Pere', 'Pompelmi'], verdura: ['Asparagi', 'Bietole', 'Carciofi', 'Carote', 'Broccoli', 'Cavoli', 'Cicoria', 'Cipolline', 'Finocchi', 'Insalata', 'Patate', 'Radicchio', 'Rape', 'Ravanelli', 'Sedano', 'Spinaci'] },
  { mese: 'Aprile', abbr: 'Apr', frutta: ['Arance', 'Fragole', 'Kiwi', 'Limoni', 'Mele', 'Nespole', 'Pere', 'Pompelmi'], verdura: ['Aglio', 'Asparagi', 'Bietole', 'Carciofi', 'Carote', 'Cavolfiori', 'Cavoli', 'Cipolline', 'Finocchi', 'Insalata', 'Patate', 'Radicchio', 'Ravanelli', 'Sedano', 'Spinaci', 'Rucola'] },
  { mese: 'Maggio', abbr: 'Mag', frutta: ['Ciliegie', 'Fragole', 'Kiwi', 'Lamponi', 'Mele', 'Meloni', 'Nespole', 'Pompelmi', 'Pere'], verdura: ['Aglio', 'Asparagi', 'Bietole', 'Carote', 'Cavolfiori', 'Cavoli', 'Cipolla', 'Cicoria', 'Fagiolini', 'Finocchi', 'Insalata', 'Patate', 'Piselli', 'Radicchio', 'Ravanelli', 'Sedano', 'Spinaci'] },
  { mese: 'Giugno', abbr: 'Giu', frutta: ['Albicocche', 'Amarene', 'Ciliegie', 'Fichi', 'Fragole', 'Lamponi', 'Meloni', 'Pesche', 'Susine'], verdura: ['Aglio', 'Asparagi', 'Bietole', 'Carciofi', 'Carote', 'Cavoli', 'Cetrioli', 'Cicoria', 'Fagioli', 'Fagiolini', 'Fave', 'Insalate', 'Melanzane', 'Patate', 'Peperoni', 'Piselli', 'Pomodori', 'Radicchio', 'Ravanelli', 'Sedano', 'Zucchine'] },
  { mese: 'Luglio', abbr: 'Lug', frutta: ['Albicocche', 'Amarene', 'Anguria', 'Ciliegie', 'Fichi', 'Fragole', 'Lamponi', 'Meloni', 'Mirtilli', 'Pesche', 'Prugne', 'Susine'], verdura: ['Aglio', 'Bietole', 'Carote', 'Cavoli', 'Cetrioli', 'Cicoria', 'Fagioli', 'Fagiolini', 'Fave', 'Insalate', 'Melanzane', 'Patate', 'Peperoni', 'Pomodori', 'Radicchio', 'Ravanelli', 'Sedano', 'Zucchine'] },
  { mese: 'Agosto', abbr: 'Ago', frutta: ['Angurie', 'Fichi', 'Fragole', 'Lamponi', 'Mele', 'Meloni', 'Mirtilli', 'Pere', 'Pesche', 'Prugne', 'Susine', 'Uva'], verdura: ['Aglio', 'Carote', 'Cavoli', 'Cetrioli', 'Cicoria', 'Fagioli', 'Insalata', 'Melanzane', 'Patate', 'Peperoni', 'Pomodori', 'Radicchio', 'Ravanelli', 'Sedano', 'Zucche', 'Zucchine'] },
  { mese: 'Settembre', abbr: 'Set', frutta: ['Fichi', 'Lamponi', 'Mele', 'Meloni', 'Mirtilli', 'Pere', 'Pesche', 'Prugne', 'Susine', 'Uva'], verdura: ['Aglio', 'Bietole', 'Carote', 'Broccoli', 'Cavoli', 'Cetrioli', 'Cicoria', 'Fagioli', 'Fagiolini', 'Insalate', 'Melanzane', 'Patate', 'Peperoni', 'Pomodori', 'Radicchio', 'Ravanelli', 'Sedano', 'Spinaci', 'Zucche', 'Zucchine'] },
  { mese: 'Ottobre', abbr: 'Ott', frutta: ['Clementine', 'Kaki', 'Lamponi', 'Limoni', 'Mele', 'Pere', 'Uva', 'Castagne'], verdura: ['Aglio', 'Bietole', 'Carote', 'Broccoli', 'Cavolfiori', 'Cavoli', 'Cicoria', 'Finocchi', 'Insalate', 'Melanzane', 'Patate', 'Peperoni', 'Radicchio', 'Rape', 'Ravanelli', 'Sedano', 'Spinaci', 'Zucche'] },
  { mese: 'Novembre', abbr: 'Nov', frutta: ['Arance', 'Castagne', 'Clementine', 'Kaki', 'Kiwi', 'Limoni', 'Mandarini', 'Mele', 'Pere', 'Pompelmi', 'Uva'], verdura: ['Aglio', 'Bietole', 'Carote', 'Broccoli', 'Cavolfiori', 'Cavoli', 'Cicoria', 'Finocchi', 'Insalate', 'Patate', 'Radicchio', 'Rape', 'Sedano', 'Spinaci', 'Zucche'] },
  { mese: 'Dicembre', abbr: 'Dic', frutta: ['Arance', 'Castagne', 'Clementine', 'Kaki', 'Kiwi', 'Limoni', 'Mandarini', 'Mele', 'Pere', 'Pompelmi', 'Uva'], verdura: ['Bietole', 'Carote', 'Broccoli', 'Cavolfiori', 'Cavoli', 'Cicoria', 'Finocchi', 'Insalate', 'Patate', 'Radicchio', 'Rape', 'Spinaci', 'Zucche'] }
];

const MESI_ABBR = ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'];

const ALIMENTI = [
  { nome: 'Aglio', mesi: [0,0,0,1,1,1,1,1,1,1,1,0] },
  { nome: 'Alchechengi', mesi: [0,0,0,0,0,0,1,1,1,0,0,0] },
  { nome: 'Albicocca', mesi: [0,0,0,0,0,1,1,1,0,0,0,0] },
  { nome: 'Ananas', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Anguria', mesi: [0,0,0,0,0,1,1,1,0,0,0,0] },
  { nome: 'Arancia', mesi: [1,1,1,1,0,0,0,0,0,0,1,1] },
  { nome: 'Asparago', mesi: [0,0,1,1,1,1,0,0,0,0,0,0] },
  { nome: 'Avocado', mesi: [1,1,1,1,0,0,0,0,0,0,1,1] },
  { nome: 'Banana', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Barbabietola', mesi: [1,1,0,0,0,0,0,1,1,1,1,1] },
  { nome: 'Bietola/Costa', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Caki', mesi: [0,0,0,0,0,0,0,0,0,1,1,1] },
  { nome: 'Carciofo', mesi: [1,1,1,1,0,0,0,0,0,0,1,1] },
  { nome: 'Carota', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Castagna', mesi: [0,0,0,0,0,0,0,0,0,1,1,0] },
  { nome: 'Cavoli', mesi: [1,1,1,1,0,0,0,0,0,1,1,1] },
  { nome: 'Cetriolo', mesi: [0,0,0,0,0,1,1,1,1,0,0,0] },
  { nome: 'Ciliegia', mesi: [0,0,0,0,1,1,1,0,0,0,0,0] },
  { nome: 'Cima di rapa', mesi: [1,1,0,0,0,0,0,0,0,0,0,1] },
  { nome: 'Clementine', mesi: [1,1,0,0,0,0,0,0,0,1,1,1] },
  { nome: 'Cocco', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Fagiolini', mesi: [0,0,0,0,1,1,1,1,1,0,0,0] },
  { nome: 'Fava', mesi: [0,0,0,1,1,1,1,0,0,0,0,0] },
  { nome: 'Fico', mesi: [0,0,0,0,0,1,1,1,1,0,0,0] },
  { nome: 'Finocchio', mesi: [1,1,1,1,1,0,0,0,0,1,1,1] },
  { nome: 'Fragole', mesi: [0,0,0,1,1,1,1,0,0,0,0,0] },
  { nome: 'Insalata', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Kiwi', mesi: [1,1,1,1,0,0,0,0,0,0,1,1] },
  { nome: 'Lampone', mesi: [0,0,0,0,1,1,1,1,1,1,0,0] },
  { nome: 'Lime', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Limone', mesi: [1,1,1,1,0,0,0,0,0,1,1,1] },
  { nome: 'Litchi', mesi: [1,1,0,0,0,0,0,0,0,0,1,1] },
  { nome: 'Mandarino', mesi: [1,1,0,0,0,0,0,0,0,0,1,0] },
  { nome: 'Mango', mesi: [0,0,0,0,0,0,0,1,1,1,0,0] },
  { nome: 'Mela', mesi: [1,1,1,1,0,0,0,1,1,1,1,1] },
  { nome: 'Melanzana', mesi: [0,0,0,0,0,1,1,1,1,1,0,0] },
  { nome: 'Melograno', mesi: [0,0,0,0,0,0,0,0,0,1,1,0] },
  { nome: 'Melone', mesi: [0,0,0,0,1,1,1,1,1,0,0,0] },
  { nome: 'Mirtillo', mesi: [0,0,0,0,0,0,1,1,1,0,0,0] },
  { nome: 'Mora', mesi: [0,0,0,0,0,0,1,1,1,0,0,0] },
  { nome: 'Nespole', mesi: [0,0,0,1,1,0,0,0,0,0,0,0] },
  { nome: 'Papaya', mesi: [0,0,0,0,0,0,1,1,1,1,1,1] },
  { nome: 'Passion fruit', mesi: [0,0,0,0,0,1,1,1,1,1,1,1] },
  { nome: 'Patata', mesi: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { nome: 'Peperone', mesi: [0,0,0,0,1,1,1,1,1,1,0,0] },
  { nome: 'Pera', mesi: [1,1,1,1,1,0,0,1,1,1,1,1] },
  { nome: 'Pesca', mesi: [0,0,0,0,0,1,1,1,1,0,0,0] },
  { nome: 'Piselli', mesi: [0,0,0,1,1,1,0,0,0,0,0,0] },
  { nome: 'Pomodoro', mesi: [0,0,0,0,1,1,1,1,1,0,0,0] },
  { nome: 'Pompelmo', mesi: [1,1,1,1,1,0,0,0,0,0,1,1] },
  { nome: 'Porro', mesi: [1,1,0,0,0,0,0,0,0,1,1,1] },
  { nome: 'Ravanello', mesi: [0,0,0,0,1,1,1,1,1,1,0,0] },
  { nome: 'Sedano', mesi: [0,0,0,1,1,1,1,1,1,1,1,0] },
  { nome: 'Spinacio', mesi: [1,1,1,1,1,0,0,0,1,1,1,1] },
  { nome: 'Susina', mesi: [0,0,0,0,0,1,1,1,1,0,0,0] },
  { nome: 'Uva', mesi: [0,0,0,0,0,0,0,1,1,1,1,1] },
  { nome: 'Topinambur', mesi: [1,1,1,0,0,0,0,0,0,1,1,1] },
  { nome: 'Zucca', mesi: [1,1,1,0,0,0,0,1,1,1,1,1] },
  { nome: 'Zucchina', mesi: [0,0,0,0,1,1,1,1,1,0,0,0] }
];

function renderChips(items, type) {
  return items.map(item =>
    `<span class="sc-chip sc-chip--${type}">${item}</span>`
  ).join('');
}

function renderMatrixView() {
  const headerCells = MESI_ABBR.map(m => `<th class="sc-matrix-th">${m}</th>`).join('');

  const rows = ALIMENTI.map(a => {
    const totalMesi = a.mesi.reduce((s, v) => s + v, 0);
    const isYearRound = totalMesi === 12;
    const cells = a.mesi.map((v, i) =>
      `<td class="sc-matrix-cell ${v ? 'sc-matrix-cell--active' : ''}" title="${a.nome} — ${MESI[i].mese}">${v ? '' : ''}</td>`
    ).join('');
    return `<tr class="${isYearRound ? 'sc-matrix-row--yearround' : ''}">
      <td class="sc-matrix-name">${a.nome}</td>
      ${cells}
      <td class="sc-matrix-total">${totalMesi}</td>
    </tr>`;
  }).join('');

  return `
    <div class="sc-matrix-wrapper">
      <table class="sc-matrix">
        <thead>
          <tr>
            <th class="sc-matrix-th sc-matrix-th--name">Alimento</th>
            ${headerCells}
            <th class="sc-matrix-th sc-matrix-th--total">Mesi</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderMonthView() {
  const tabs = MESI.map((m, i) =>
    `<button class="sc-tab ${i === 0 ? 'active' : ''}" data-month="${i}">${m.abbr}</button>`
  ).join('');

  const panels = MESI.map((m, i) =>
    `<div class="sc-panel ${i === 0 ? 'active' : ''}" id="sc-month-${i}">
      <h3 class="sc-month-name">${m.mese}</h3>
      <div class="sc-columns">
        <div class="sc-column">
          <div class="sc-column-header">
            <i data-lucide="apple"></i>
            <span>Frutta</span>
            <span class="sc-count">${m.frutta.length}</span>
          </div>
          <div class="sc-chips">${renderChips(m.frutta, 'frutta')}</div>
        </div>
        <div class="sc-column">
          <div class="sc-column-header">
            <i data-lucide="salad"></i>
            <span>Verdura</span>
            <span class="sc-count">${m.verdura.length}</span>
          </div>
          <div class="sc-chips">${renderChips(m.verdura, 'verdura')}</div>
        </div>
      </div>
    </div>`
  ).join('');

  const yearRound = `
    <div class="sc-year-round">
      <div class="sc-year-round-title">
        <i data-lucide="calendar-check"></i>
        <span>Disponibile tutto l'anno</span>
      </div>
      <div class="sc-columns">
        <div class="sc-column">
          <div class="sc-column-header">
            <i data-lucide="apple"></i>
            <span>Frutta</span>
          </div>
          <div class="sc-chips">${renderChips(TUTTO_ANNO.frutta, 'frutta')}</div>
        </div>
        <div class="sc-column">
          <div class="sc-column-header">
            <i data-lucide="salad"></i>
            <span>Verdura</span>
          </div>
          <div class="sc-chips">${renderChips(TUTTO_ANNO.verdura, 'verdura')}</div>
        </div>
      </div>
    </div>
  `;

  return `
    <div class="sc-month-view">
      <div class="sc-tabs">${tabs}</div>
      <div class="sc-panels">${panels}</div>
      ${yearRound}
    </div>
  `;
}

export function renderSeasonalCalendar() {
  return `
    <div class="nutrition-section">
      <h2 class="nutrition-section-title">Stagionalità Frutta & Verdura</h2>
      <p class="sc-subtitle">Dott.ssa Dietista Giulia Corradini</p>
      <div class="sc-view-toggle">
        <button class="sc-view-btn active" data-view="month">
          <i data-lucide="calendar-days"></i> Per Mese
        </button>
        <button class="sc-view-btn" data-view="matrix">
          <i data-lucide="table"></i> Per Alimento
        </button>
      </div>
      <div class="sc-view" id="sc-view-month" style="display:block">
        ${renderMonthView()}
      </div>
      <div class="sc-view" id="sc-view-matrix" style="display:none">
        ${renderMatrixView()}
      </div>
    </div>
  `;
}

export function initSeasonalCalendarTabs(view) {
  // View toggle
  view.querySelectorAll('.sc-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      view.querySelectorAll('.sc-view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      view.querySelectorAll('.sc-view').forEach(v => v.style.display = 'none');
      const target = document.getElementById('sc-view-' + targetView);
      if (target) target.style.display = 'block';
    });
  });

  // Month tabs
  view.querySelectorAll('.sc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const month = tab.getAttribute('data-month');
      view.querySelectorAll('.sc-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      view.querySelectorAll('.sc-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('sc-month-' + month);
      if (panel) panel.classList.add('active');
    });
  });
}
