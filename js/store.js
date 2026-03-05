const KEYS = {
  exercises: 'gym-tracker-exercises',
  logs: 'gym-tracker-logs',
  prs: 'gym-tracker-prs',
  settings: 'gym-tracker-settings',
  savedWeights: 'gym-tracker-saved-weights'
};

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function read(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function write(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Storage write failed:', e);
  }
}

/* ── Settings ── */

const DEFAULT_SETTINGS = {
  unit: 'kg',
  timerAutoStart: false,
  defaultRest: 90,
  startDate: null,
  currentWeek: 1
};

export function getSettings() {
  return { ...DEFAULT_SETTINGS, ...read(KEYS.settings) };
}

export function saveSettings(partial) {
  const current = getSettings();
  write(KEYS.settings, { ...current, ...partial });
}

/* ── Exercise DB ── */

export function getExerciseDB() {
  return read(KEYS.exercises) || {};
}

export function saveExerciseDB(db) {
  write(KEYS.exercises, db);
}

export function getAvailableWeeks() {
  const db = getExerciseDB();
  return Object.keys(db).map(Number).sort((a, b) => a - b);
}

export function getWeekData(weekNum) {
  const db = getExerciseDB();
  return db[weekNum] || null;
}

/* ── Workout Logs ── */

export function getLogs() {
  return read(KEYS.logs) || [];
}

export function saveLog(log) {
  const logs = getLogs();
  const idx = logs.findIndex(l => l.id === log.id);
  if (idx >= 0) {
    logs[idx] = log;
  } else {
    log.id = log.id || generateId();
    logs.push(log);
  }
  write(KEYS.logs, logs);
  return log;
}

export function deleteLog(id) {
  const logs = getLogs().filter(l => l.id !== id);
  write(KEYS.logs, logs);
}

export function getLogsByWeek(weekNum) {
  return getLogs().filter(l => l.weekNumber === weekNum);
}

export function getLogByDate(dateStr) {
  return getLogs().filter(l => l.date && l.date.startsWith(dateStr));
}

/* ── Personal Records ── */

export function getPRs() {
  return read(KEYS.prs) || {};
}

export function savePRs(prs) {
  write(KEYS.prs, prs);
}

export function getPRForExercise(exerciseId) {
  const prs = getPRs();
  return prs[exerciseId] || null;
}

export function updatePR(exerciseId, record) {
  const prs = getPRs();
  prs[exerciseId] = record;
  write(KEYS.prs, prs);
  return record;
}

/* ── Saved Weights ── */

export function getSavedWeights(exerciseId) {
  const all = read(KEYS.savedWeights) || {};
  const data = all[exerciseId] || null;
  // Backward compat: if stored as plain array of numbers, convert
  if (Array.isArray(data)) return { weights: data, rpes: [] };
  return data;
}

export function saveExerciseWeights(exerciseId, weights, rpes) {
  const all = read(KEYS.savedWeights) || {};
  all[exerciseId] = { weights, rpes: rpes || [] };
  write(KEYS.savedWeights, all);
}

export function getAllSavedWeights() {
  return read(KEYS.savedWeights) || {};
}

/* ── Export / Import ── */

export function exportAllData() {
  return {
    version: 1,
    exportDate: new Date().toISOString(),
    exercises: getExerciseDB(),
    logs: getLogs(),
    prs: getPRs(),
    settings: getSettings(),
    savedWeights: getAllSavedWeights()
  };
}

export function importAllData(data) {
  if (!data || data.version !== 1) {
    throw new Error('Formato dati non valido');
  }
  if (data.exercises) write(KEYS.exercises, data.exercises);
  if (data.logs) write(KEYS.logs, data.logs);
  if (data.prs) write(KEYS.prs, data.prs);
  if (data.settings) write(KEYS.settings, data.settings);
  if (data.savedWeights) write(KEYS.savedWeights, data.savedWeights);
}

export function resetAllData() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
}

export { generateId };
