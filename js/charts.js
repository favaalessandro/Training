import { getLogs, getExerciseDB, getSettings } from './store.js';
import { calcEstimated1RM } from './pr.js';

let currentChart = null;

const CHART_COLORS = {
  gold: '#C8A84E',
  goldLight: '#E8D48B',
  goldDim: '#8B7635',
  gridLine: 'rgba(255,255,255,0.05)',
  success: '#34C759'
};

const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#1C1C1E',
      titleColor: '#F5F5F5',
      bodyColor: '#F5F5F5',
      borderColor: '#8B7635',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
      titleFont: { family: 'DM Sans', size: 13 },
      bodyFont: { family: 'JetBrains Mono', size: 12 }
    }
  },
  scales: {
    x: {
      ticks: { color: '#8E8E93', font: { family: 'DM Sans', size: 11 } },
      grid: { color: CHART_COLORS.gridLine }
    },
    y: {
      ticks: { color: '#8E8E93', font: { family: 'JetBrains Mono', size: 11 } },
      grid: { color: CHART_COLORS.gridLine }
    }
  }
};

function destroyChart() {
  if (currentChart) {
    currentChart.destroy();
    currentChart = null;
  }
}

/**
 * Get all unique exercise names/ids from logs
 */
export function getLoggedExercises() {
  const logs = getLogs();
  const exerciseMap = new Map();
  const db = getExerciseDB();

  // Gather from DB
  for (const [weekNum, weekData] of Object.entries(db)) {
    for (const day of (weekData.days || [])) {
      for (const ex of day.exercises) {
        exerciseMap.set(ex.id, ex.name);
      }
    }
  }

  // Also from logs
  for (const log of logs) {
    for (const ex of (log.exercises || [])) {
      if (ex.exerciseId && !exerciseMap.has(ex.exerciseId)) {
        exerciseMap.set(ex.exerciseId, ex.exerciseId);
      }
    }
  }

  return Array.from(exerciseMap.entries()).map(([id, name]) => ({ id, name }));
}

/**
 * Build data for a specific exercise: weight progression over time
 */
function getExerciseProgressionData(exerciseId) {
  const logs = getLogs()
    .filter(l => l.exercises && l.exercises.some(e => e.exerciseId === exerciseId))
    .sort((a, b) => (a.date || '').localeCompare(b.date || ''));

  const labels = [];
  const weights = [];
  const e1rms = [];

  for (const log of logs) {
    const exLog = log.exercises.find(e => e.exerciseId === exerciseId);
    if (!exLog || !exLog.sets) continue;

    let maxWeight = 0;
    let maxE1RM = 0;
    for (const set of exLog.sets) {
      if (set.completed && set.weight > 0) {
        if (set.weight > maxWeight) maxWeight = set.weight;
        const e1rm = calcEstimated1RM(set.weight, set.reps || 1);
        if (e1rm > maxE1RM) maxE1RM = e1rm;
      }
    }

    if (maxWeight > 0) {
      const d = new Date(log.date);
      labels.push(d.toLocaleDateString('it-IT', { day: '2-digit', month: 'short' }));
      weights.push(maxWeight);
      e1rms.push(maxE1RM);
    }
  }

  return { labels, weights, e1rms };
}

/**
 * Render exercise progression chart
 */
export function renderExerciseChart(canvasId, exerciseId) {
  destroyChart();
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const data = getExerciseProgressionData(exerciseId);
  if (data.labels.length === 0) return null;

  const unit = getSettings().unit || 'kg';

  currentChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: `Peso Max (${unit})`,
          data: data.weights,
          borderColor: CHART_COLORS.gold,
          backgroundColor: 'rgba(200, 168, 78, 0.1)',
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: CHART_COLORS.gold,
          borderWidth: 2
        },
        {
          label: '1RM Stimato',
          data: data.e1rms,
          borderColor: CHART_COLORS.goldDim,
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: CHART_COLORS.goldDim,
          borderWidth: 1.5
        }
      ]
    },
    options: {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        legend: { display: true, labels: { color: '#8E8E93', font: { family: 'DM Sans', size: 11 } } }
      }
    }
  });

  return currentChart;
}

/**
 * Get weekly volume data (sets × reps × weight) aggregated
 */
function getWeeklyVolumeData(muscleGroup) {
  const logs = getLogs();
  const db = getExerciseDB();
  const weekVolumes = {};

  // Build exercise→muscleGroup map from db
  const muscleMap = {};
  for (const [, weekData] of Object.entries(db)) {
    for (const day of (weekData.days || [])) {
      for (const ex of day.exercises) {
        muscleMap[ex.id] = ex.muscleGroup;
      }
    }
  }

  for (const log of logs) {
    const week = log.weekNumber || 0;
    if (!weekVolumes[week]) weekVolumes[week] = 0;

    for (const ex of (log.exercises || [])) {
      if (muscleGroup && muscleMap[ex.exerciseId] !== muscleGroup) continue;
      for (const set of (ex.sets || [])) {
        if (set.completed && set.weight > 0 && set.reps > 0) {
          weekVolumes[week] += set.weight * set.reps;
        }
      }
    }
  }

  const weeks = Object.keys(weekVolumes).map(Number).sort((a, b) => a - b);
  return {
    labels: weeks.map(w => `Sett. ${w}`),
    volumes: weeks.map(w => Math.round(weekVolumes[w]))
  };
}

/**
 * Render weekly volume chart
 */
export function renderVolumeChart(canvasId, muscleGroup) {
  destroyChart();
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const data = getWeeklyVolumeData(muscleGroup);
  if (data.labels.length === 0) return null;

  const unit = getSettings().unit || 'kg';

  currentChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [{
        label: `Volume (${unit})`,
        data: data.volumes,
        backgroundColor: 'rgba(200, 168, 78, 0.6)',
        borderColor: CHART_COLORS.gold,
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      scales: {
        ...CHART_DEFAULTS.scales,
        y: {
          ...CHART_DEFAULTS.scales.y,
          beginAtZero: true
        }
      }
    }
  });

  return currentChart;
}

/**
 * Get summary stats
 */
export function getStats() {
  const logs = getLogs();
  const totalWorkouts = logs.length;

  let totalVolume = 0;
  let thisWeekVolume = 0;
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0, 0, 0, 0);

  let streak = 0;
  const sortedDates = logs
    .map(l => l.date ? l.date.split('T')[0] : null)
    .filter(Boolean)
    .sort()
    .reverse();

  // Calculate streak
  if (sortedDates.length > 0) {
    const uniqueDates = [...new Set(sortedDates)];
    const today = now.toISOString().split('T')[0];
    let checkDate = today;

    for (const d of uniqueDates) {
      if (d === checkDate || d === getPrevDay(checkDate)) {
        streak++;
        checkDate = d;
      } else {
        break;
      }
    }
  }

  for (const log of logs) {
    for (const ex of (log.exercises || [])) {
      for (const set of (ex.sets || [])) {
        if (set.completed && set.weight > 0 && set.reps > 0) {
          const vol = set.weight * set.reps;
          totalVolume += vol;
          if (log.date && new Date(log.date) >= weekStart) {
            thisWeekVolume += vol;
          }
        }
      }
    }
  }

  return {
    totalWorkouts,
    totalVolume: Math.round(totalVolume),
    thisWeekVolume: Math.round(thisWeekVolume),
    streak
  };
}

function getPrevDay(dateStr) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

export function destroyCurrentChart() {
  destroyChart();
}
