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

function renderChips(items, type) {
  return items.map(item =>
    `<span class="sc-chip sc-chip--${type}">${item}</span>`
  ).join('');
}

export function renderSeasonalCalendar() {
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

  return `
    <div class="nutrition-section">
      <h2 class="nutrition-section-title">Stagionalità Frutta & Verdura</h2>
      <p class="sc-subtitle">Calendario mensile — Dott.ssa Dietista Giulia Corradini</p>
      <div class="sc-tabs">${tabs}</div>
      <div class="sc-panels">${panels}</div>
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
    </div>
  `;
}

export function initSeasonalCalendarTabs(view) {
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
