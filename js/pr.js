import { getPRs, savePRs } from './store.js';

/**
 * Estimated 1RM using Epley formula: weight × (1 + reps/30)
 */
export function calcEstimated1RM(weight, reps) {
  if (reps <= 0 || weight <= 0) return 0;
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30) * 10) / 10;
}

/**
 * Check and update PRs for a given exercise after logging sets.
 * Returns an array of new PR descriptions (empty if no new PRs).
 */
export function checkAndUpdatePRs(exerciseId, exerciseName, sets) {
  const prs = getPRs();
  const current = prs[exerciseId] || {
    exerciseId,
    exerciseName,
    best1RM: 0,
    best1RMDate: null,
    bestWeight: 0,
    bestWeightDate: null,
    bestRepsAtWeight: {},
    history: []
  };

  const newPRs = [];

  for (const set of sets) {
    if (!set.completed || !set.weight || !set.reps) continue;

    const estimated1RM = calcEstimated1RM(set.weight, set.reps);

    // Check estimated 1RM PR
    if (estimated1RM > current.best1RM) {
      current.best1RM = estimated1RM;
      current.best1RMDate = new Date().toISOString();
      newPRs.push(`1RM stimato: ${estimated1RM} kg`);
    }

    // Check absolute weight PR
    if (set.weight > current.bestWeight) {
      current.bestWeight = set.weight;
      current.bestWeightDate = new Date().toISOString();
      newPRs.push(`Peso max: ${set.weight} kg`);
    }

    // Check max reps at weight
    const weightKey = String(set.weight);
    const prevBestReps = current.bestRepsAtWeight[weightKey] || 0;
    if (set.reps > prevBestReps) {
      current.bestRepsAtWeight[weightKey] = set.reps;
      if (prevBestReps > 0) {
        newPRs.push(`${set.weight} kg × ${set.reps} reps`);
      }
    }

    // Add to history
    current.history.push({
      date: new Date().toISOString(),
      weight: set.weight,
      reps: set.reps,
      estimated1RM
    });
  }

  current.exerciseName = exerciseName;
  prs[exerciseId] = current;
  savePRs(prs);

  return newPRs;
}

/**
 * Get all PRs sorted by most recent
 */
export function getAllPRsSorted() {
  const prs = getPRs();
  return Object.values(prs)
    .filter(pr => pr.best1RM > 0)
    .sort((a, b) => {
      const dateA = a.best1RMDate || '';
      const dateB = b.best1RMDate || '';
      return dateB.localeCompare(dateA);
    });
}
