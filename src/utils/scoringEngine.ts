import type { Concern, Step0Answers, DirectionScores, RecommendedConcern } from '../types/getStarted';

interface ScoringRule {
  direction: Concern;
  points: number;
  condition: (a: Step0Answers) => boolean;
  reasonKey?: string;
}

function asMulti(val: string | string[] | undefined): string[] {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
}

function asSingle(val: string | string[] | undefined): string {
  if (!val) return '';
  return Array.isArray(val) ? val[0] || '' : val;
}

const SCORING_RULES: ScoringRule[] = [
  // ===== Cardio Risk Monitoring =====
  { direction: 'cardio_risk', points: 30, condition: (a) => asSingle(a.q3) === 'q3_diagnosed', reasonKey: 'gs.rec.reason.heartDiagnosed' },
  { direction: 'cardio_risk', points: 20, condition: (a) => asSingle(a.q3) === 'q3_concerned', reasonKey: 'gs.rec.reason.heartConcern' },
  { direction: 'cardio_risk', points: 20, condition: (a) => asMulti(a.q4).includes('q4_heart'), reasonKey: 'gs.rec.reason.heartMeds' },
  { direction: 'cardio_risk', points: 25, condition: (a) => asMulti(a.q5).includes('q5_chest'), reasonKey: 'gs.rec.reason.chestSymptoms' },
  { direction: 'cardio_risk', points: 10, condition: (a) => asMulti(a.q5).includes('q5_overweight'), reasonKey: 'gs.rec.reason.weightConcern' },
  {
    direction: 'cardio_risk', points: 15,
    condition: (a) => ['q12_high', 'q12_very_high'].includes(asSingle(a.q12)) && asSingle(a.q10) === 'q10_rarely',
    reasonKey: 'gs.rec.reason.stressSedentary',
  },
  { direction: 'cardio_risk', points: 10, condition: (a) => ['q1_50_59', 'q1_60plus'].includes(asSingle(a.q1)) },
  { direction: 'cardio_risk', points: 5, condition: (a) => asSingle(a.q2) === 'q2_male' },

  // ===== Sleep Apnea Detection =====
  { direction: 'sleep_apnea', points: 30, condition: (a) => asSingle(a.q6) === 'q6_stop_breathing', reasonKey: 'gs.rec.reason.observedApnea' },
  { direction: 'sleep_apnea', points: 20, condition: (a) => asSingle(a.q6) === 'q6_snore_loud', reasonKey: 'gs.rec.reason.loudSnoring' },
  { direction: 'sleep_apnea', points: 25, condition: (a) => asSingle(a.q7) === 'q7_almost_always', reasonKey: 'gs.rec.reason.chronicTiredness' },
  { direction: 'sleep_apnea', points: 15, condition: (a) => asMulti(a.q5).includes('q5_overweight'), reasonKey: 'gs.rec.reason.bmiRisk' },
  { direction: 'sleep_apnea', points: 15, condition: (a) => asMulti(a.q5).includes('q5_headaches'), reasonKey: 'gs.rec.reason.morningHeadaches' },
  { direction: 'sleep_apnea', points: 10, condition: (a) => asMulti(a.q9).includes('q9_wake_multiple'), reasonKey: 'gs.rec.reason.nightWaking' },
  { direction: 'sleep_apnea', points: 10, condition: (a) => ['q1_50_59', 'q1_60plus'].includes(asSingle(a.q1)) },
  { direction: 'sleep_apnea', points: 10, condition: (a) => asSingle(a.q2) === 'q2_male' },

  // ===== Advanced Sleep Analysis =====
  { direction: 'sleep_analysis', points: 25, condition: (a) => asMulti(a.q9).includes('q9_hard_fall_asleep'), reasonKey: 'gs.rec.reason.fallAsleepDifficulty' },
  { direction: 'sleep_analysis', points: 20, condition: (a) => asMulti(a.q9).includes('q9_wake_multiple'), reasonKey: 'gs.rec.reason.frequentWaking' },
  { direction: 'sleep_analysis', points: 20, condition: (a) => asMulti(a.q9).includes('q9_wake_early'), reasonKey: 'gs.rec.reason.earlyWaking' },
  { direction: 'sleep_analysis', points: 25, condition: (a) => asMulti(a.q9).includes('q9_sleep_aids'), reasonKey: 'gs.rec.reason.sleepAidDependence' },
  { direction: 'sleep_analysis', points: 25, condition: (a) => asSingle(a.q8) === 'q8_irregular', reasonKey: 'gs.rec.reason.irregularSchedule' },
  { direction: 'sleep_analysis', points: 10, condition: (a) => asSingle(a.q8) === 'q8_somewhat' },
  { direction: 'sleep_analysis', points: 15, condition: (a) => asMulti(a.q4).includes('q4_sleep_anxiety'), reasonKey: 'gs.rec.reason.sleepMeds' },
  { direction: 'sleep_analysis', points: 15, condition: (a) => asMulti(a.q5).includes('q5_chronic_pain'), reasonKey: 'gs.rec.reason.chronicPain' },

  // ===== Recovery Insight =====
  {
    direction: 'recovery', points: 30,
    condition: (a) => asSingle(a.q10) === 'q10_5plus' && asSingle(a.q11) !== 'q11_very_satisfied',
    reasonKey: 'gs.rec.reason.highExerciseLowRecovery',
  },
  {
    direction: 'recovery', points: 25,
    condition: (a) => ['q10_3_4'].includes(asSingle(a.q10)) && ['q7_almost_always', 'q7_sometimes'].includes(asSingle(a.q7)),
    reasonKey: 'gs.rec.reason.moderateExerciseTired',
  },
  { direction: 'recovery', points: 25, condition: (a) => asSingle(a.q11) === 'q11_very_unsatisfied', reasonKey: 'gs.rec.reason.veryLowEnergy' },
  { direction: 'recovery', points: 15, condition: (a) => asSingle(a.q11) === 'q11_not_satisfied', reasonKey: 'gs.rec.reason.lowEnergy' },
  { direction: 'recovery', points: 15, condition: (a) => asSingle(a.q7) === 'q7_almost_always' },
  { direction: 'recovery', points: 10, condition: (a) => ['q12_high', 'q12_very_high'].includes(asSingle(a.q12)), reasonKey: 'gs.rec.reason.highStress' },
];

export function calculateScores(answers: Step0Answers): DirectionScores {
  const scores: DirectionScores = {
    sleep_apnea: 0,
    cardio_risk: 0,
    recovery: 0,
    sleep_analysis: 0,
  };

  for (const rule of SCORING_RULES) {
    try {
      if (rule.condition(answers)) {
        scores[rule.direction] = Math.min(100, scores[rule.direction] + rule.points);
      }
    } catch {
      // skip rule if condition throws (e.g., missing answer)
    }
  }

  return scores;
}

export function getRecommendations(scores: DirectionScores, answers: Step0Answers): RecommendedConcern[] {
  const concerns: Concern[] = ['sleep_apnea', 'cardio_risk', 'recovery', 'sleep_analysis'];

  return concerns
    .map((concern) => {
      const matchedReasons = SCORING_RULES
        .filter((r) => r.direction === concern && r.reasonKey)
        .filter((r) => {
          try { return r.condition(answers); } catch { return false; }
        })
        .map((r) => r.reasonKey!);

      return { concern, score: scores[concern], reasonKeys: matchedReasons };
    })
    .sort((a, b) => b.score - a.score);
}
