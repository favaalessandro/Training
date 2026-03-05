import {
  getExerciseDB, saveExerciseDB, getAvailableWeeks, getWeekData,
  getSettings, saveSettings, getLogs, getLogByDate, deleteLog,
  exportAllData, importAllData, resetAllData, getPRs
} from './store.js';
import exerciseDB from './exercises.js';
import {
  startWorkout, getActiveWorkout, updateSet, toggleSetComplete,
  addSet, removeSet, updateExerciseNotes, updateWorkoutMood,
  updateWorkoutNotes, finishWorkout, discardWorkout,
  startTimer, stopTimer, isTimerRunning,
  recoverWorkout, clearRecovery, saveCurrentExerciseWeights
} from './tracker.js';
import { getAllPRsSorted, calcEstimated1RM } from './pr.js';
import { renderCalendar } from './calendar.js';
import {
  renderExerciseChart, renderVolumeChart, getLoggedExercises,
  getStats, destroyCurrentChart
} from './charts.js';

/* ═══════════════════════════════════════
   INIT
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initExerciseDB();
  initRouter();
  initNavigation();
  if (window.lucide) lucide.createIcons();
});

const EXERCISE_DB_VERSION = 16; // Bump this when exercises.js changes

function initExerciseDB() {
  const savedVersion = parseInt(localStorage.getItem('gym-tracker-db-version') || '0');
  if (savedVersion < EXERCISE_DB_VERSION) {
    saveExerciseDB(exerciseDB);
    localStorage.setItem('gym-tracker-db-version', String(EXERCISE_DB_VERSION));
  }
}

/* ═══════════════════════════════════════
   ROUTER
   ═══════════════════════════════════════ */

const routes = {
  '/': renderHome,
  '/workout': renderWorkout,
  '/progress': renderProgress,
  '/calendar': renderCalendarView,
  '/records': renderRecords,
  '/settings': renderSettingsView
};

function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = location.hash.slice(1) || '/';
  const route = routes[hash];

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  // Update nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === '#' + hash);
  });

  if (route) {
    route();
  } else {
    renderHome();
  }
}

function navigate(hash) {
  location.hash = hash;
}

function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(item.getAttribute('href').slice(1));
    });
  });
}

/* ═══════════════════════════════════════
   TOAST
   ═══════════════════════════════════════ */

function showToast(message, type = 'default', duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'pr' ? 'pr-toast' : type === 'error' ? 'error-toast' : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

/* ═══════════════════════════════════════
   HOME VIEW
   ═══════════════════════════════════════ */

function renderHome() {
  const view = document.getElementById('view-home');
  view.classList.add('active');

  const settings = getSettings();
  const stats = getStats();
  const weeks = getAvailableWeeks();
  const currentWeek = settings.currentWeek || (weeks.length > 0 ? weeks[0] : 1);
  const weekData = getWeekData(currentWeek);

  const hour = new Date().getHours();
  let greeting = 'Buongiorno';
  if (hour >= 13 && hour < 18) greeting = 'Buon pomeriggio';
  else if (hour >= 18) greeting = 'Buonasera';

  // Find latest PR
  const prs = getAllPRsSorted();
  const latestPR = prs.length > 0 ? prs[0] : null;

  let nextWorkoutHTML = '';
  const completedToday = getLogs().filter(l => {
    const today = new Date().toISOString().split('T')[0];
    return l.date && l.date.startsWith(today);
  });
  if (weekData && weekData.days) {

    nextWorkoutHTML = weekData.days.map((day, idx) => {
      const done = completedToday.some(l => l.dayLabel === day.dayLabel);
      return `
        <div class="day-card ${done ? 'completed' : ''}" data-week="${currentWeek}" data-day="${idx}">
          <div class="day-card-info">
            <h4>${day.dayLabel}</h4>
            <p>${day.exercises.length} esercizi</p>
          </div>
          ${done
            ? '<span style="color: var(--success)"><i data-lucide="check-circle" style="width:20px;height:20px"></i></span>'
            : '<i data-lucide="chevron-right" style="width:20px;height:20px;color:var(--gold-dim)"></i>'}
        </div>
      `;
    }).join('');
  }

  view.innerHTML = `
    <div style="margin-bottom: var(--space-lg)">
      <p style="color: var(--text-secondary); font-size: 0.875rem">${greeting}</p>
      <h1 class="page-title">Settimana ${currentWeek}</h1>
    </div>

    <div class="week-selector" id="home-week-selector">
      ${weeks.map(w => `
        <button class="week-btn ${w === currentWeek ? 'active' : ''}" data-week="${w}">W${w}</button>
      `).join('')}
    </div>

    <div class="stats-row">
      <div class="stat-box">
        <div class="stat-value">${stats.totalWorkouts}</div>
        <div class="stat-label">Allenamenti</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${stats.streak}</div>
        <div class="stat-label">Streak</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${formatVolume(stats.thisWeekVolume)}</div>
        <div class="stat-label">Vol. Sett.</div>
      </div>
    </div>

    ${latestPR ? `
      <div class="card" style="border-color: var(--gold-primary)">
        <div style="display:flex;align-items:center;gap:var(--space-sm)">
          <span class="pr-badge">PR</span>
          <div>
            <div style="font-weight:600;font-size:0.875rem">${latestPR.exerciseName}</div>
            <div class="mono" style="color:var(--gold-primary);font-size:0.8125rem">${latestPR.best1RM} kg 1RM stimato</div>
          </div>
        </div>
      </div>
    ` : ''}

    <div class="section-header">
      <h3>Prossimo Allenamento</h3>
      ${completedToday.length > 0 ? `<button class="btn btn-sm btn-secondary" id="btn-reset-today">
        <i data-lucide="rotate-ccw" style="width:14px;height:14px"></i> Reset
      </button>` : ''}
    </div>
    <div class="day-cards">
      ${nextWorkoutHTML || '<div class="empty-state"><p>Nessun esercizio caricato. Vai nelle impostazioni per verificare.</p></div>'}
    </div>
  `;

  // Week selector — switch week and save setting
  view.querySelectorAll('#home-week-selector .week-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedWeek = parseInt(btn.dataset.week);
      saveSettings({ currentWeek: selectedWeek });
      renderHome();
    });
  });

  // Bind day cards — all clickable, including completed
  view.querySelectorAll('.day-card').forEach(card => {
    card.addEventListener('click', () => {
      const week = parseInt(card.dataset.week);
      const day = parseInt(card.dataset.day);
      navigate('/workout');
      setTimeout(() => startWorkoutSession(week, day), 50);
    });
  });

  // Reset — open selection modal
  document.getElementById('btn-reset-today')?.addEventListener('click', () => {
    const overlay = document.getElementById('reset-session-modal');
    if (overlay) { overlay.remove(); }

    const modal = document.createElement('div');
    modal.id = 'reset-session-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <h3 style="margin-bottom:var(--space-md);color:var(--gold-primary)">Reset Sessione</h3>
        <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:var(--space-md)">Seleziona le sessioni da resettare:</p>
        <div style="display:flex;flex-direction:column;gap:var(--space-sm)" id="reset-list">
          ${completedToday.map(l => `
            <label style="display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md);background:var(--bg-elevated);border-radius:var(--radius-sm);cursor:pointer;min-height:44px">
              <input type="checkbox" value="${l.id}" style="width:20px;height:20px;accent-color:var(--gold-primary)">
              <span style="font-size:0.875rem">${l.dayLabel}</span>
            </label>
          `).join('')}
        </div>
        <div style="display:flex;gap:var(--space-sm);margin-top:var(--space-lg)">
          <button class="btn btn-secondary" id="reset-modal-cancel" style="flex:1">Annulla</button>
          <button class="btn btn-danger" id="reset-modal-confirm" style="flex:1">Elimina</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('reset-modal-cancel').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });

    document.getElementById('reset-modal-confirm').addEventListener('click', () => {
      const checked = modal.querySelectorAll('#reset-list input:checked');
      if (checked.length === 0) {
        showToast('Seleziona almeno una sessione', 'error');
        return;
      }
      checked.forEach(cb => deleteLog(cb.value));
      modal.remove();
      showToast(`${checked.length} session${checked.length > 1 ? 'i resettate' : 'e resettata'}`);
      renderHome();
    });
  });

  if (window.lucide) lucide.createIcons();
}

function formatVolume(v) {
  if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
  if (v >= 1000) return (v / 1000).toFixed(1) + 'k';
  return String(v);
}

/* ═══════════════════════════════════════
   WORKOUT VIEW
   ═══════════════════════════════════════ */

function renderWorkout() {
  const view = document.getElementById('view-workout');
  view.classList.add('active');

  // Check for active/recovered workout
  const active = getActiveWorkout() || recoverWorkout();
  if (active) {
    renderActiveWorkout(view);
    return;
  }

  const weeks = getAvailableWeeks();
  const settings = getSettings();

  view.innerHTML = `
    <div class="section-header">
      <h2 class="page-title">Allenamento</h2>
    </div>

    <h4 style="color:var(--text-secondary);margin-bottom:var(--space-sm)">Seleziona Settimana</h4>
    <div class="week-selector" id="week-selector">
      ${weeks.map(w => `
        <button class="week-btn ${w === settings.currentWeek ? 'active' : ''}" data-week="${w}">W${w}</button>
      `).join('')}
      ${weeks.length === 0 ? '<p style="color:var(--text-secondary);font-size:0.875rem">Nessuna settimana disponibile</p>' : ''}
    </div>

    <div id="day-list" style="margin-top:var(--space-md)"></div>
  `;

  if (weeks.length > 0) {
    renderWeekDays(settings.currentWeek || weeks[0]);
  }

  view.querySelectorAll('.week-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      view.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWeekDays(parseInt(btn.dataset.week));
    });
  });

  if (window.lucide) lucide.createIcons();
}

function renderWeekDays(weekNum) {
  const container = document.getElementById('day-list');
  const weekData = getWeekData(weekNum);

  if (!weekData || !weekData.days) {
    container.innerHTML = '<div class="empty-state"><p>Nessun giorno disponibile per questa settimana.</p></div>';
    return;
  }

  container.innerHTML = `
    <div class="day-cards">
      ${weekData.days.map((day, idx) => `
        <div class="day-card" data-week="${weekNum}" data-day="${idx}">
          <div class="day-card-info">
            <h4>${day.dayLabel}</h4>
            <p>${day.exercises.length} esercizi — ${day.exercises.map(e => e.muscleGroup).filter((v, i, a) => a.indexOf(v) === i).join(', ')}</p>
          </div>
          <i data-lucide="play-circle" style="width:24px;height:24px;color:var(--gold-primary)"></i>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.day-card').forEach(card => {
    card.addEventListener('click', () => {
      startWorkoutSession(parseInt(card.dataset.week), parseInt(card.dataset.day));
    });
  });

  if (window.lucide) lucide.createIcons();
}

function startWorkoutSession(weekNum, dayIdx) {
  const workout = startWorkout(weekNum, dayIdx);
  if (!workout) {
    showToast('Impossibile avviare il workout', 'error');
    return;
  }
  renderActiveWorkout(document.getElementById('view-workout'));
}

function renderActiveWorkout(view) {
  const workout = getActiveWorkout();
  if (!workout) return;

  const unit = getSettings().unit || 'kg';

  view.innerHTML = `
    <div class="section-header">
      <div>
        <p style="color:var(--text-secondary);font-size:0.75rem">Settimana ${workout.weekNumber}</p>
        <h2 class="page-title" style="font-size:1.25rem">${workout.dayLabel}</h2>
      </div>
      <button class="btn btn-sm btn-danger" id="btn-finish">Termina</button>
    </div>

    <div class="card" style="border-color:var(--gold-dim);cursor:pointer" id="rpe-info-toggle">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div style="display:flex;align-items:center;gap:var(--space-sm)">
          <i data-lucide="info" style="width:16px;height:16px;color:var(--gold-primary)"></i>
          <span style="font-size:0.8125rem;font-weight:600;color:var(--gold-primary)">Scala RPE (Rate of Perceived Exertion)</span>
        </div>
        <i data-lucide="chevron-down" style="width:16px;height:16px;color:var(--gold-dim)" id="rpe-chevron"></i>
      </div>
      <div id="rpe-table" style="display:none;margin-top:var(--space-md)">
        <table style="width:100%;font-size:0.8125rem;border-collapse:collapse">
          <tr style="color:var(--gold-primary);border-bottom:1px solid var(--gold-dim)">
            <th style="text-align:left;padding:var(--space-xs) var(--space-sm)">RPE</th>
            <th style="text-align:left;padding:var(--space-xs) var(--space-sm)">Significato</th>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
            <td style="padding:var(--space-xs) var(--space-sm)" class="mono">10</td>
            <td style="padding:var(--space-xs) var(--space-sm);color:var(--text-secondary)">Sforzo massimo, 0 rep in riserva</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
            <td style="padding:var(--space-xs) var(--space-sm)" class="mono">9</td>
            <td style="padding:var(--space-xs) var(--space-sm);color:var(--text-secondary)">Forse 1 rep in più</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
            <td style="padding:var(--space-xs) var(--space-sm)" class="mono">8</td>
            <td style="padding:var(--space-xs) var(--space-sm);color:var(--text-secondary)">2 rep in riserva</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
            <td style="padding:var(--space-xs) var(--space-sm)" class="mono">7</td>
            <td style="padding:var(--space-xs) var(--space-sm);color:var(--text-secondary)">3 rep in riserva, peso gestibile</td>
          </tr>
          <tr>
            <td style="padding:var(--space-xs) var(--space-sm)" class="mono">5-6</td>
            <td style="padding:var(--space-xs) var(--space-sm);color:var(--text-secondary)">Riscaldamento / peso leggero</td>
          </tr>
        </table>
      </div>
    </div>

    <div id="exercise-list"></div>

    <div class="card" style="margin-top:var(--space-md)">
      <h4 class="card-title" style="margin-bottom:var(--space-sm)">Come ti senti?</h4>
      <div class="mood-selector">
        ${['great', 'good', 'neutral', 'bad', 'terrible'].map(m => {
          const emojis = { great: '💪', good: '😊', neutral: '😐', bad: '😓', terrible: '😵' };
          return `<button class="mood-btn ${workout.mood === m ? 'selected' : ''}" data-mood="${m}">${emojis[m]}</button>`;
        }).join('')}
      </div>
      <textarea id="workout-notes" placeholder="Note sulla sessione..."
        style="width:100%;margin-top:var(--space-md);min-height:60px;resize:vertical">${workout.generalNotes || ''}</textarea>
    </div>
  `;

  // RPE info toggle
  document.getElementById('rpe-info-toggle')?.addEventListener('click', () => {
    const table = document.getElementById('rpe-table');
    const chevron = document.getElementById('rpe-chevron');
    const open = table.style.display === 'none';
    table.style.display = open ? 'block' : 'none';
    chevron.setAttribute('data-lucide', open ? 'chevron-up' : 'chevron-down');
    if (window.lucide) lucide.createIcons();
  });

  // Render exercises
  const list = document.getElementById('exercise-list');
  workout.exercises.forEach((ex, exIdx) => {
    list.appendChild(createExerciseCard(ex, exIdx, unit));
  });

  // Mood buttons
  view.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      view.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      updateWorkoutMood(btn.dataset.mood);
    });
  });

  // Notes
  document.getElementById('workout-notes')?.addEventListener('input', (e) => {
    updateWorkoutNotes(e.target.value);
  });

  // Finish button
  document.getElementById('btn-finish')?.addEventListener('click', () => {
    const result = finishWorkout();
    clearRecovery();
    if (result) {
      showToast(`Allenamento completato — ${result.duration} min`, 'pr');
      renderWorkout();
    }
  });

  if (window.lucide) lucide.createIcons();
}

function createExerciseCard(ex, exIdx, unit) {
  const card = document.createElement('div');
  card.className = 'exercise-card';

  let setsHTML = `
    <div class="set-row header">
      <span>Set</span><span>${unit}</span><span>Reps</span><span>RPE</span><span></span>
    </div>
  `;

  const isTimeBased = ex.defaultReps && ex.defaultReps.toString().includes('sec');
  const isMaxHold = ex.defaultReps && ex.defaultReps.toString().toLowerCase() === 'max';

  ex.sets.forEach((set, sIdx) => {
    const repsCell = isTimeBased
      ? `<span class="mono" style="font-size:0.8125rem;color:var(--gold-primary);text-align:center">${ex.defaultReps}</span>`
      : isMaxHold
        ? `<span class="mono" style="font-size:0.8125rem;color:var(--gold-primary);text-align:center">max</span>`
        : `<input type="number" class="set-input" data-field="reps" value="${set.reps || ''}"
            placeholder="0" min="0" inputmode="numeric">`;

    setsHTML += `
      <div class="set-row" data-ex="${exIdx}" data-set="${sIdx}">
        <span class="set-number">${sIdx + 1}</span>
        <input type="number" class="set-input" data-field="weight" value="${set.weight || ''}"
          placeholder="0" min="0" step="0.5" inputmode="decimal">
        ${repsCell}
        <input type="number" class="set-input" data-field="rpe" value="${set.rpe || ''}"
          placeholder="-" min="1" max="10" inputmode="numeric" style="width:52px">
        <button class="set-check ${set.completed ? 'completed' : ''}" data-action="toggle">
          <i data-lucide="${set.completed ? 'check-circle' : 'circle'}" style="width:22px;height:22px"></i>
        </button>
      </div>
    `;
  });

  const gifHTML = ex.gifUrl ? `
    <div class="exercise-gif">
      <img src="${ex.gifUrl}" alt="${ex.exerciseName}" loading="lazy">
    </div>
  ` : '';

  card.innerHTML = `
    <div class="exercise-header" data-has-gif="${ex.gifUrl ? 'true' : 'false'}">
      <div>
        <div class="exercise-name">${ex.exerciseName}</div>
        <span class="muscle-tag">${ex.muscleGroup}</span>
      </div>
      <div style="display:flex;gap:var(--space-xs);align-items:center">
        ${ex.gifUrl ? `<button class="btn-icon gif-toggle-btn" data-ex="${exIdx}" title="Mostra esercizio">
          <i data-lucide="video" style="width:20px;height:20px;color:var(--gold-primary)"></i>
        </button>` : ''}
        <button class="btn-icon timer-btn" data-ex="${exIdx}" title="Timer riposo">
          <i data-lucide="timer" style="width:20px;height:20px;color:var(--gold-dim)"></i>
        </button>
      </div>
    </div>
    ${gifHTML}
    ${setsHTML}
    <div class="exercise-actions">
      <button class="btn btn-sm btn-secondary add-set-btn" data-ex="${exIdx}">
        <i data-lucide="plus" style="width:14px;height:14px"></i> Serie
      </button>
      <button class="btn btn-sm btn-secondary save-weights-btn" data-ex="${exIdx}">
        <i data-lucide="save" style="width:14px;height:14px"></i> Salva carichi e RPE
      </button>
    </div>
  `;

  // GIF toggle
  card.querySelector('.gif-toggle-btn')?.addEventListener('click', () => {
    const gif = card.querySelector('.exercise-gif');
    if (gif) gif.classList.toggle('open');
  });

  // Bind inputs
  card.querySelectorAll('.set-input').forEach(input => {
    input.addEventListener('change', () => {
      const row = input.closest('.set-row');
      const ei = parseInt(row.dataset.ex);
      const si = parseInt(row.dataset.set);
      const field = input.dataset.field;
      const val = parseFloat(input.value) || 0;
      updateSet(ei, si, field, val);
    });
  });

  // Bind check buttons
  card.querySelectorAll('[data-action="toggle"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.set-row');
      const ei = parseInt(row.dataset.ex);
      const si = parseInt(row.dataset.set);
      const newPRs = toggleSetComplete(ei, si);

      // Refresh the icon
      const workout = getActiveWorkout();
      const set = workout.exercises[ei].sets[si];
      btn.className = `set-check ${set.completed ? 'completed' : ''}`;
      const icon = btn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', set.completed ? 'check-circle' : 'circle');
        if (window.lucide) lucide.createIcons();
      }

      if (newPRs.length > 0) {
        newPRs.forEach(pr => showToast(`🏆 Nuovo PR! ${pr}`, 'pr'));
      }

      // Auto-start timer
      const settings = getSettings();
      if (set.completed && settings.timerAutoStart) {
        const db = getExerciseDB();
        const defaultRest = settings.defaultRest || 90;
        showRestTimer(defaultRest);
      }
    });
  });

  // Timer button
  card.querySelector('.timer-btn')?.addEventListener('click', () => {
    const settings = getSettings();
    showRestTimer(settings.defaultRest || 90);
  });

  // Add set button
  card.querySelector('.add-set-btn')?.addEventListener('click', () => {
    addSet(exIdx);
    renderActiveWorkout(document.getElementById('view-workout'));
  });

  // Save weights button
  card.querySelector('.save-weights-btn')?.addEventListener('click', (e) => {
    const ok = saveCurrentExerciseWeights(exIdx);
    if (ok) {
      showToast(`Carichi e RPE salvati per ${ex.exerciseName}`);
      const btn = e.currentTarget;
      btn.style.borderColor = 'var(--success)';
      btn.style.color = 'var(--success)';
      setTimeout(() => { btn.style.borderColor = ''; btn.style.color = ''; }, 1500);
    }
  });

  return card;
}

/* ═══════════════════════════════════════
   REST TIMER OVERLAY
   ═══════════════════════════════════════ */

function showRestTimer(seconds) {
  const overlay = document.getElementById('timer-overlay');
  overlay.classList.remove('hidden');

  const circumference = 2 * Math.PI * 90;

  overlay.innerHTML = `
    <svg class="timer-ring" viewBox="0 0 200 200">
      <circle class="track" cx="100" cy="100" r="90"/>
      <circle class="progress" cx="100" cy="100" r="90"
        stroke-dasharray="${circumference}" stroke-dashoffset="0"/>
    </svg>
    <div class="timer-display" id="timer-text">${formatTime(seconds)}</div>
    <div class="timer-presets">
      ${[60, 90, 120, 180].map(s => `
        <button class="timer-preset-btn ${s === seconds ? 'active' : ''}" data-seconds="${s}">${s}s</button>
      `).join('')}
    </div>
    <div style="display:flex;gap:var(--space-md)">
      <button class="btn btn-secondary" id="timer-cancel">Chiudi</button>
      <button class="btn btn-primary" id="timer-start">Avvia</button>
    </div>
  `;

  let selectedSeconds = seconds;

  overlay.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSeconds = parseInt(btn.dataset.seconds);
      document.getElementById('timer-text').textContent = formatTime(selectedSeconds);
      stopTimer();
    });
  });

  document.getElementById('timer-cancel').addEventListener('click', () => {
    stopTimer();
    overlay.classList.add('hidden');
  });

  document.getElementById('timer-start').addEventListener('click', () => {
    const progress = overlay.querySelector('.progress');
    startTimer(selectedSeconds,
      (remaining, total) => {
        document.getElementById('timer-text').textContent = formatTime(remaining);
        const offset = circumference * (1 - remaining / total);
        progress.style.strokeDashoffset = offset;
      },
      () => {
        setTimeout(() => overlay.classList.add('hidden'), 1500);
      }
    );
  });
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/* ═══════════════════════════════════════
   PROGRESS VIEW
   ═══════════════════════════════════════ */

function renderProgress() {
  const view = document.getElementById('view-progress');
  view.classList.add('active');

  const exercises = getLoggedExercises();
  const muscleGroups = ['chest', 'back', 'shoulders', 'legs', 'arms', 'core'];

  view.innerHTML = `
    <div class="section-header">
      <h2 class="page-title">Progressi</h2>
    </div>

    <div class="filter-pills" id="progress-mode">
      <button class="filter-pill active" data-mode="exercise">Per Esercizio</button>
      <button class="filter-pill" data-mode="volume">Volume Settimanale</button>
    </div>

    <div id="progress-filters" style="margin-top:var(--space-sm)"></div>

    <div class="card" style="margin-top:var(--space-md)">
      <div style="height:250px;position:relative">
        <canvas id="progress-chart"></canvas>
      </div>
    </div>

    <div id="progress-empty" class="empty-state" style="display:none">
      <i data-lucide="bar-chart-3"></i>
      <h3>Nessun dato</h3>
      <p>Completa qualche allenamento per vedere i tuoi progressi qui.</p>
    </div>
  `;

  let currentMode = 'exercise';

  function renderFilters() {
    const container = document.getElementById('progress-filters');
    if (currentMode === 'exercise') {
      container.innerHTML = `
        <select id="exercise-filter" style="width:100%">
          <option value="">Seleziona esercizio</option>
          ${exercises.map(e => `<option value="${e.id}">${e.name}</option>`).join('')}
        </select>
      `;
      container.querySelector('#exercise-filter')?.addEventListener('change', (e) => {
        if (e.target.value) {
          const chart = renderExerciseChart('progress-chart', e.target.value);
          document.getElementById('progress-empty').style.display = chart ? 'none' : 'block';
        }
      });
    } else {
      container.innerHTML = `
        <div class="filter-pills">
          <button class="filter-pill active" data-muscle="">Tutti</button>
          ${muscleGroups.map(m => `<button class="filter-pill" data-muscle="${m}">${m}</button>`).join('')}
        </div>
      `;
      container.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const chart = renderVolumeChart('progress-chart', btn.dataset.muscle || null);
          document.getElementById('progress-empty').style.display = chart ? 'none' : 'block';
        });
      });
      // Render default
      const chart = renderVolumeChart('progress-chart', null);
      document.getElementById('progress-empty').style.display = chart ? 'none' : 'block';
    }
  }

  view.querySelectorAll('#progress-mode .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      view.querySelectorAll('#progress-mode .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
      destroyCurrentChart();
      renderFilters();
    });
  });

  renderFilters();
  if (window.lucide) lucide.createIcons();
}

/* ═══════════════════════════════════════
   CALENDAR VIEW
   ═══════════════════════════════════════ */

function renderCalendarView() {
  const view = document.getElementById('view-calendar');
  view.classList.add('active');

  const now = new Date();

  view.innerHTML = `
    <div class="section-header">
      <h2 class="page-title">Calendario</h2>
    </div>
    <div id="calendar-container"></div>
    <div id="day-detail" style="margin-top:var(--space-md)"></div>
  `;

  renderCalendar('calendar-container', now.getFullYear(), now.getMonth(), (dateStr) => {
    renderDayDetail(dateStr);
  });

  if (window.lucide) lucide.createIcons();
}

function renderDayDetail(dateStr) {
  const container = document.getElementById('day-detail');
  const logs = getLogByDate(dateStr);

  if (logs.length === 0) {
    container.innerHTML = `
      <div class="card">
        <p style="color:var(--text-secondary);font-size:0.875rem">Nessun allenamento il ${formatDate(dateStr)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = logs.map(log => `
    <div class="card">
      <div class="card-header">
        <span class="card-title">${log.dayLabel}</span>
        <span class="mono" style="color:var(--text-secondary);font-size:0.75rem">${log.duration || '?'} min</span>
      </div>
      ${(log.exercises || []).map(ex => {
        const completedSets = (ex.sets || []).filter(s => s.completed).length;
        const totalSets = (ex.sets || []).length;
        const maxWeight = Math.max(...(ex.sets || []).filter(s => s.completed).map(s => s.weight || 0), 0);
        return `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:var(--space-xs) 0;border-bottom:1px solid rgba(255,255,255,0.05)">
            <span style="font-size:0.8125rem">${ex.exerciseName || ex.exerciseId}</span>
            <span class="mono" style="font-size:0.75rem;color:var(--gold-dim)">${completedSets}/${totalSets} — ${maxWeight} kg</span>
          </div>
        `;
      }).join('')}
      ${log.mood ? `<div style="margin-top:var(--space-sm);font-size:0.75rem;color:var(--text-secondary)">Mood: ${log.mood}</div>` : ''}
    </div>
  `).join('');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ═══════════════════════════════════════
   PR BOARD VIEW
   ═══════════════════════════════════════ */

function renderRecords() {
  const view = document.getElementById('view-records');
  view.classList.add('active');

  const prs = getAllPRsSorted();
  const unit = getSettings().unit || 'kg';

  view.innerHTML = `
    <div class="section-header">
      <h2 class="page-title">Personal Records</h2>
    </div>

    ${prs.length === 0 ? `
      <div class="empty-state">
        <i data-lucide="trophy"></i>
        <h3>Nessun PR ancora</h3>
        <p>Completa i tuoi allenamenti e i record appariranno qui.</p>
      </div>
    ` : prs.map(pr => `
      <div class="card">
        <div class="card-header">
          <span class="card-title">${pr.exerciseName}</span>
          ${isRecent(pr.best1RMDate) ? '<span class="pr-badge">New</span>' : ''}
        </div>
        <div class="stats-row" style="margin-bottom:0">
          <div class="stat-box">
            <div class="stat-value">${pr.best1RM}</div>
            <div class="stat-label">1RM (${unit})</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${pr.bestWeight}</div>
            <div class="stat-label">Max ${unit}</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${(pr.history || []).length}</div>
            <div class="stat-label">Sessioni</div>
          </div>
        </div>
        ${pr.best1RMDate ? `<p style="font-size:0.6875rem;color:var(--text-secondary);margin-top:var(--space-sm);text-align:right">${formatDate(pr.best1RMDate.split('T')[0])}</p>` : ''}
      </div>
    `).join('')}
  `;

  if (window.lucide) lucide.createIcons();
}

function isRecent(dateStr) {
  if (!dateStr) return false;
  const diff = Date.now() - new Date(dateStr).getTime();
  return diff < 7 * 24 * 60 * 60 * 1000; // 7 days
}

/* ═══════════════════════════════════════
   SETTINGS VIEW
   ═══════════════════════════════════════ */

function renderSettingsView() {
  const view = document.getElementById('view-settings');
  view.classList.add('active');

  const settings = getSettings();
  const weeks = getAvailableWeeks();

  view.innerHTML = `
    <div class="section-header">
      <h2 class="page-title">Impostazioni</h2>
    </div>

    <div class="card">
      <h4 class="card-title" style="margin-bottom:var(--space-md)">Programma</h4>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-md)">
        <span>Settimana corrente</span>
        <select id="setting-week" style="width:80px">
          ${[1,2,3,4,5,6,7,8].map(w => `<option value="${w}" ${settings.currentWeek === w ? 'selected' : ''} ${!weeks.includes(w) ? 'disabled' : ''}>${w}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-md)">
        <span>Unità di misura</span>
        <select id="setting-unit" style="width:80px">
          <option value="kg" ${settings.unit === 'kg' ? 'selected' : ''}>kg</option>
          <option value="lbs" ${settings.unit === 'lbs' ? 'selected' : ''}>lbs</option>
        </select>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-md)">
        <span>Riposo default (s)</span>
        <input type="number" id="setting-rest" value="${settings.defaultRest || 90}" min="30" max="300" step="15" style="width:80px">
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span>Timer auto-start</span>
        <label style="position:relative;width:48px;height:28px;cursor:pointer">
          <input type="checkbox" id="setting-autostart" ${settings.timerAutoStart ? 'checked' : ''} style="display:none">
          <span style="position:absolute;inset:0;background:${settings.timerAutoStart ? 'var(--gold-primary)' : 'var(--bg-elevated)'};border-radius:14px;transition:var(--transition-base);border:1px solid var(--gold-dim)">
            <span style="position:absolute;top:3px;${settings.timerAutoStart ? 'left:22px' : 'left:3px'};width:20px;height:20px;background:var(--text-primary);border-radius:50%;transition:var(--transition-base)"></span>
          </span>
        </label>
      </div>
    </div>

    <div class="card">
      <h4 class="card-title" style="margin-bottom:var(--space-md)">Dati</h4>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        <button class="btn btn-secondary btn-block" id="btn-export">
          <i data-lucide="download" style="width:16px;height:16px"></i> Esporta JSON
        </button>
        <button class="btn btn-secondary btn-block" id="btn-import">
          <i data-lucide="upload" style="width:16px;height:16px"></i> Importa JSON
        </button>
        <input type="file" id="file-import" accept=".json" style="display:none">
        <button class="btn btn-danger btn-block" id="btn-reset">
          <i data-lucide="trash-2" style="width:16px;height:16px"></i> Reset Dati
        </button>
      </div>
    </div>

    <div class="card">
      <h4 class="card-title" style="margin-bottom:var(--space-sm)">Info</h4>
      <p style="font-size:0.8125rem;color:var(--text-secondary)">
        Gym Tracker — Programma 8 settimane<br>
        Settimane caricate: ${weeks.join(', ') || 'nessuna'}<br>
        Allenamenti registrati: ${getLogs().length}
      </p>
    </div>

    <div id="reset-confirm" class="modal-overlay hidden">
      <div class="modal">
        <h3 style="color:var(--danger);margin-bottom:var(--space-md)">Reset Dati</h3>
        <p style="margin-bottom:var(--space-lg)">Sei sicuro? Tutti i dati verranno eliminati permanentemente. Questa azione non è reversibile.</p>
        <div style="display:flex;gap:var(--space-sm)">
          <button class="btn btn-secondary" id="reset-cancel" style="flex:1">Annulla</button>
          <button class="btn btn-danger" id="reset-confirm-btn" style="flex:1">Elimina Tutto</button>
        </div>
      </div>
    </div>
  `;

  // Bind settings
  document.getElementById('setting-week')?.addEventListener('change', (e) => {
    saveSettings({ currentWeek: parseInt(e.target.value) });
  });
  document.getElementById('setting-unit')?.addEventListener('change', (e) => {
    saveSettings({ unit: e.target.value });
  });
  document.getElementById('setting-rest')?.addEventListener('change', (e) => {
    saveSettings({ defaultRest: parseInt(e.target.value) || 90 });
  });
  document.getElementById('setting-autostart')?.addEventListener('change', (e) => {
    saveSettings({ timerAutoStart: e.target.checked });
    // Re-render to update toggle visual
    renderSettingsView();
  });

  // Export
  document.getElementById('btn-export')?.addEventListener('click', () => {
    const data = exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gym-tracker-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Dati esportati');
  });

  // Import
  document.getElementById('btn-import')?.addEventListener('click', () => {
    document.getElementById('file-import').click();
  });
  document.getElementById('file-import')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        importAllData(data);
        showToast('Dati importati con successo');
        renderSettingsView();
      } catch (err) {
        showToast('Errore nell\'importazione: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  });

  // Reset
  document.getElementById('btn-reset')?.addEventListener('click', () => {
    document.getElementById('reset-confirm').classList.remove('hidden');
  });
  document.getElementById('reset-cancel')?.addEventListener('click', () => {
    document.getElementById('reset-confirm').classList.add('hidden');
  });
  document.getElementById('reset-confirm-btn')?.addEventListener('click', () => {
    resetAllData();
    document.getElementById('reset-confirm').classList.add('hidden');
    showToast('Tutti i dati sono stati eliminati');
    initExerciseDB();
    renderSettingsView();
  });

  if (window.lucide) lucide.createIcons();
}
