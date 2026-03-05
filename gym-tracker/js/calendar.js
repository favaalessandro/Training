import { getLogs } from './store.js';

/**
 * Generate calendar data for a given month/year
 */
export function getCalendarData(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDow = (firstDay.getDay() + 6) % 7; // Monday=0
  const daysInMonth = lastDay.getDate();

  const logs = getLogs();
  const logDates = {};
  for (const log of logs) {
    if (!log.date) continue;
    const d = log.date.split('T')[0];
    if (!logDates[d]) logDates[d] = [];
    logDates[d].push(log);
  }

  const cells = [];

  // Pad start
  for (let i = 0; i < startDow; i++) {
    cells.push({ day: null, status: 'empty' });
  }

  const today = new Date().toISOString().split('T')[0];

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayLogs = logDates[dateStr] || [];
    let status = 'rest';

    if (dayLogs.length > 0) {
      // Check if all exercises had at least one completed set
      const allCompleted = dayLogs.every(log =>
        (log.exercises || []).every(ex =>
          (ex.sets || []).some(s => s.completed)
        )
      );
      status = allCompleted ? 'completed' : 'partial';
    }

    cells.push({
      day: d,
      date: dateStr,
      status,
      isToday: dateStr === today,
      logs: dayLogs
    });
  }

  return {
    year,
    month,
    monthName: firstDay.toLocaleDateString('it-IT', { month: 'long' }),
    cells
  };
}

/**
 * Render calendar HTML
 */
export function renderCalendar(containerId, year, month, onDayClick) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = getCalendarData(year, month);
  const dayLabels = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

  let html = `
    <div class="section-header">
      <button class="btn-icon nav-month" data-dir="-1">
        <i data-lucide="chevron-left"></i>
      </button>
      <h3 style="text-transform: capitalize">${data.monthName} ${data.year}</h3>
      <button class="btn-icon nav-month" data-dir="1">
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
    <div class="calendar-grid">
  `;

  for (const label of dayLabels) {
    html += `<div class="calendar-day-label">${label}</div>`;
  }

  for (const cell of data.cells) {
    if (cell.day === null) {
      html += `<div class="calendar-cell"></div>`;
    } else {
      const classes = ['calendar-cell'];
      if (cell.isToday) classes.push('today');
      if (cell.status === 'completed') classes.push('completed');
      if (cell.status === 'partial') classes.push('partial');

      html += `<div class="${classes.join(' ')}" data-date="${cell.date}">${cell.day}</div>`;
    }
  }

  html += '</div>';
  container.innerHTML = html;

  // Bind nav
  container.querySelectorAll('.nav-month').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = parseInt(btn.dataset.dir);
      let newMonth = month + dir;
      let newYear = year;
      if (newMonth < 0) { newMonth = 11; newYear--; }
      if (newMonth > 11) { newMonth = 0; newYear++; }
      renderCalendar(containerId, newYear, newMonth, onDayClick);
      if (window.lucide) lucide.createIcons();
    });
  });

  // Bind day click
  container.querySelectorAll('.calendar-cell[data-date]').forEach(cell => {
    cell.addEventListener('click', () => {
      if (onDayClick) onDayClick(cell.dataset.date);
    });
  });
}
