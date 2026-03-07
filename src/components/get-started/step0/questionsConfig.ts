import type { QuestionDef, SectionDef } from '../../../types/getStarted';

export const QUESTIONS: QuestionDef[] = [
  // Page 1: You & Your Health
  {
    id: 'q1', section: 'you_health', type: 'single', titleKey: 'gs.s0.q1.title',
    options: [
      { id: 'q1_under30', labelKey: 'gs.s0.q1.opt1' },
      { id: 'q1_30_39', labelKey: 'gs.s0.q1.opt2' },
      { id: 'q1_40_49', labelKey: 'gs.s0.q1.opt3' },
      { id: 'q1_50_59', labelKey: 'gs.s0.q1.opt4' },
      { id: 'q1_60plus', labelKey: 'gs.s0.q1.opt5' },
    ],
  },
  {
    id: 'q2', section: 'you_health', type: 'single', titleKey: 'gs.s0.q2.title',
    options: [
      { id: 'q2_male', labelKey: 'gs.s0.q2.opt1' },
      { id: 'q2_female', labelKey: 'gs.s0.q2.opt2' },
      { id: 'q2_prefer_not', labelKey: 'gs.s0.q2.opt3' },
    ],
  },
  {
    id: 'q3', section: 'you_health', type: 'single', titleKey: 'gs.s0.q3.title',
    options: [
      { id: 'q3_diagnosed', labelKey: 'gs.s0.q3.opt1' },
      { id: 'q3_concerned', labelKey: 'gs.s0.q3.opt2' },
      { id: 'q3_none', labelKey: 'gs.s0.q3.opt3' },
    ],
  },
  {
    id: 'q4', section: 'you_health', type: 'multi', titleKey: 'gs.s0.q4.title',
    options: [
      { id: 'q4_bp', labelKey: 'gs.s0.q4.opt1' },
      { id: 'q4_heart', labelKey: 'gs.s0.q4.opt2' },
      { id: 'q4_sleep_anxiety', labelKey: 'gs.s0.q4.opt3' },
      { id: 'q4_none', labelKey: 'gs.s0.q4.opt4' },
    ],
  },
  {
    id: 'q5', section: 'you_health', type: 'multi', titleKey: 'gs.s0.q5.title',
    options: [
      { id: 'q5_overweight', labelKey: 'gs.s0.q5.opt1' },
      { id: 'q5_headaches', labelKey: 'gs.s0.q5.opt2' },
      { id: 'q5_chest', labelKey: 'gs.s0.q5.opt3' },
      { id: 'q5_chronic_pain', labelKey: 'gs.s0.q5.opt4' },
      { id: 'q5_none', labelKey: 'gs.s0.q5.opt5' },
    ],
  },

  // Page 2: Sleep & Breathing
  {
    id: 'q6', section: 'sleep_breathing', type: 'single', titleKey: 'gs.s0.q6.title',
    options: [
      { id: 'q6_snore_loud', labelKey: 'gs.s0.q6.opt1' },
      { id: 'q6_stop_breathing', labelKey: 'gs.s0.q6.opt2' },
      { id: 'q6_no', labelKey: 'gs.s0.q6.opt3' },
      { id: 'q6_not_sure', labelKey: 'gs.s0.q6.opt4' },
    ],
  },
  {
    id: 'q7', section: 'sleep_breathing', type: 'single', titleKey: 'gs.s0.q7.title',
    options: [
      { id: 'q7_almost_always', labelKey: 'gs.s0.q7.opt1' },
      { id: 'q7_sometimes', labelKey: 'gs.s0.q7.opt2' },
      { id: 'q7_rarely', labelKey: 'gs.s0.q7.opt3' },
    ],
  },
  {
    id: 'q8', section: 'sleep_breathing', type: 'single', titleKey: 'gs.s0.q8.title',
    options: [
      { id: 'q8_consistent', labelKey: 'gs.s0.q8.opt1' },
      { id: 'q8_somewhat', labelKey: 'gs.s0.q8.opt2' },
      { id: 'q8_irregular', labelKey: 'gs.s0.q8.opt3' },
    ],
  },
  {
    id: 'q9', section: 'sleep_breathing', type: 'multi', titleKey: 'gs.s0.q9.title',
    options: [
      { id: 'q9_hard_fall_asleep', labelKey: 'gs.s0.q9.opt1' },
      { id: 'q9_wake_multiple', labelKey: 'gs.s0.q9.opt2' },
      { id: 'q9_wake_early', labelKey: 'gs.s0.q9.opt3' },
      { id: 'q9_sleep_aids', labelKey: 'gs.s0.q9.opt4' },
      { id: 'q9_none', labelKey: 'gs.s0.q9.opt5' },
    ],
  },

  // Page 3: Energy & Recovery
  {
    id: 'q10', section: 'energy_recovery', type: 'single', titleKey: 'gs.s0.q10.title',
    options: [
      { id: 'q10_rarely', labelKey: 'gs.s0.q10.opt1' },
      { id: 'q10_1_2', labelKey: 'gs.s0.q10.opt2' },
      { id: 'q10_3_4', labelKey: 'gs.s0.q10.opt3' },
      { id: 'q10_5plus', labelKey: 'gs.s0.q10.opt4' },
    ],
  },
  {
    id: 'q11', section: 'energy_recovery', type: 'single', titleKey: 'gs.s0.q11.title',
    options: [
      { id: 'q11_very_satisfied', labelKey: 'gs.s0.q11.opt1' },
      { id: 'q11_okay', labelKey: 'gs.s0.q11.opt2' },
      { id: 'q11_not_satisfied', labelKey: 'gs.s0.q11.opt3' },
      { id: 'q11_very_unsatisfied', labelKey: 'gs.s0.q11.opt4' },
    ],
  },
  {
    id: 'q12', section: 'energy_recovery', type: 'single', titleKey: 'gs.s0.q12.title',
    options: [
      { id: 'q12_low', labelKey: 'gs.s0.q12.opt1' },
      { id: 'q12_moderate', labelKey: 'gs.s0.q12.opt2' },
      { id: 'q12_high', labelKey: 'gs.s0.q12.opt3' },
      { id: 'q12_very_high', labelKey: 'gs.s0.q12.opt4' },
    ],
  },
];

export const PAGES: SectionDef[] = [
  { id: 'you_health', titleKey: 'gs.s0.page1.title', questions: ['q1', 'q2', 'q3', 'q4', 'q5'] },
  { id: 'sleep_breathing', titleKey: 'gs.s0.page2.title', questions: ['q6', 'q7', 'q8', 'q9'] },
  { id: 'energy_recovery', titleKey: 'gs.s0.page3.title', questions: ['q10', 'q11', 'q12'] },
];

export function getQuestionById(id: string): QuestionDef | undefined {
  return QUESTIONS.find((q) => q.id === id);
}
