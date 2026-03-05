import { getExerciseDB, getWeekData, saveLog, getLogs, getSettings, generateId } from './store.js';
import { checkAndUpdatePRs } from './pr.js';

let activeWorkout = null;
let timerInterval = null;
let timerSeconds = 0;
let timerTotal = 0;
let timerCallback = null;

/* ═══════════════════════════════════════
   WORKOUT SESSION
   ═══════════════════════════════════════ */

export function startWorkout(weekNumber, dayIndex) {
  const weekData = getWeekData(weekNumber);
  if (!weekData || !weekData.days[dayIndex]) return null;

  const day = weekData.days[dayIndex];

  activeWorkout = {
    id: generateId(),
    date: new Date().toISOString(),
    weekNumber,
    dayLabel: day.dayLabel,
    startTime: Date.now(),
    duration: 0,
    exercises: day.exercises.map(ex => ({
      exerciseId: ex.id,
      exerciseName: ex.name,
      muscleGroup: ex.muscleGroup,
      gifUrl: ex.gifUrl || null,
      sets: Array.from({ length: ex.defaultSets }, () => ({
        reps: 0,
        weight: 0,
        rpe: null,
        restTime: null,
        completed: false
      })),
      notes: ''
    })),
    generalNotes: '',
    mood: null
  };

  // Pre-fill with last workout data for same day if available
  prefillFromHistory(activeWorkout, weekNumber, day.dayLabel);
  autoSave();

  return activeWorkout;
}

function prefillFromHistory(workout, weekNumber, dayLabel) {
  const logs = getLogs()
    .filter(l => l.weekNumber === weekNumber && l.dayLabel === dayLabel)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  if (logs.length === 0) return;

  const lastLog = logs[0];
  for (const ex of workout.exercises) {
    const prevEx = (lastLog.exercises || []).find(e => e.exerciseId === ex.exerciseId);
    if (!prevEx) continue;

    for (let i = 0; i < ex.sets.length && i < (prevEx.sets || []).length; i++) {
      const prev = prevEx.sets[i];
      if (prev.weight > 0) ex.sets[i].weight = prev.weight;
      if (prev.reps > 0) ex.sets[i].reps = prev.reps;
    }
  }
}

export function getActiveWorkout() {
  return activeWorkout;
}

export function updateSet(exerciseIndex, setIndex, field, value) {
  if (!activeWorkout) return;
  const set = activeWorkout.exercises[exerciseIndex]?.sets[setIndex];
  if (!set) return;
  set[field] = value;
  autoSave();
}

export function toggleSetComplete(exerciseIndex, setIndex) {
  if (!activeWorkout) return [];
  const ex = activeWorkout.exercises[exerciseIndex];
  if (!ex) return [];
  const set = ex.sets[setIndex];
  if (!set) return [];

  set.completed = !set.completed;
  autoSave();

  // Check PRs if completed
  if (set.completed && set.weight > 0 && set.reps > 0) {
    return checkAndUpdatePRs(ex.exerciseId, ex.exerciseName, [set]);
  }
  return [];
}

export function addSet(exerciseIndex) {
  if (!activeWorkout) return;
  const ex = activeWorkout.exercises[exerciseIndex];
  if (!ex) return;

  const lastSet = ex.sets[ex.sets.length - 1] || {};
  ex.sets.push({
    reps: lastSet.reps || 0,
    weight: lastSet.weight || 0,
    rpe: null,
    restTime: null,
    completed: false
  });
  autoSave();
}

export function removeSet(exerciseIndex, setIndex) {
  if (!activeWorkout) return;
  const ex = activeWorkout.exercises[exerciseIndex];
  if (!ex || ex.sets.length <= 1) return;
  ex.sets.splice(setIndex, 1);
  autoSave();
}

export function updateExerciseNotes(exerciseIndex, notes) {
  if (!activeWorkout) return;
  const ex = activeWorkout.exercises[exerciseIndex];
  if (ex) ex.notes = notes;
  autoSave();
}

export function updateWorkoutMood(mood) {
  if (!activeWorkout) return;
  activeWorkout.mood = mood;
  autoSave();
}

export function updateWorkoutNotes(notes) {
  if (!activeWorkout) return;
  activeWorkout.generalNotes = notes;
  autoSave();
}

export function finishWorkout() {
  if (!activeWorkout) return null;
  activeWorkout.duration = Math.round((Date.now() - activeWorkout.startTime) / 60000);
  const saved = saveLog(activeWorkout);
  const result = { ...activeWorkout };
  activeWorkout = null;
  return result;
}

export function discardWorkout() {
  activeWorkout = null;
}

function autoSave() {
  if (!activeWorkout) return;
  // Save to localStorage as temp workout
  try {
    localStorage.setItem('gym-tracker-active-workout', JSON.stringify(activeWorkout));
  } catch { /* ignore */ }
}

export function recoverWorkout() {
  try {
    const raw = localStorage.getItem('gym-tracker-active-workout');
    if (raw) {
      activeWorkout = JSON.parse(raw);
      return activeWorkout;
    }
  } catch { /* ignore */ }
  return null;
}

export function clearRecovery() {
  localStorage.removeItem('gym-tracker-active-workout');
}

/* ═══════════════════════════════════════
   REST TIMER
   ═══════════════════════════════════════ */

export function startTimer(seconds, onTick, onDone) {
  stopTimer();
  timerSeconds = seconds;
  timerTotal = seconds;
  timerCallback = onDone;

  onTick(timerSeconds, timerTotal);

  timerInterval = setInterval(() => {
    timerSeconds--;
    onTick(timerSeconds, timerTotal);

    if (timerSeconds <= 0) {
      stopTimer();
      // Sound alert
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880;
        gain.gain.value = 0.3;
        osc.start();
        setTimeout(() => { osc.stop(); ctx.close(); }, 300);
      } catch { /* no audio */ }

      // Vibration
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);

      if (onDone) onDone();
    }
  }, 1000);
}

export function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerSeconds = 0;
}

export function isTimerRunning() {
  return timerInterval !== null;
}
