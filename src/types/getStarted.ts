export type Concern = 'sleep_apnea' | 'cardio_risk' | 'recovery' | 'sleep_analysis';
export type Beneficiary = 'myself' | 'family';
export type Step = 0 | 1 | 2 | 3;

// Step 0 Question Types
export type QuestionType = 'single' | 'multi';
export type QuestionId = 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'q8' | 'q9' | 'q10' | 'q11' | 'q12';
export type SectionId = 'about_you' | 'heart_body' | 'sleep_breathing' | 'sleep_quality' | 'energy_recovery';

export interface QuestionOption {
  id: string;
  labelKey: string;
}

export interface QuestionDef {
  id: QuestionId;
  section: SectionId;
  type: QuestionType;
  titleKey: string;
  options: QuestionOption[];
}

export interface SectionDef {
  id: SectionId;
  titleKey: string;
  transitionKey?: string;
  questions: QuestionId[];
}

// Step 0 Answers: single-select stores string, multi-select stores string[]
export type Step0Answers = Partial<Record<QuestionId, string | string[]>>;

// Scoring
export interface DirectionScores {
  sleep_apnea: number;
  cardio_risk: number;
  recovery: number;
  sleep_analysis: number;
}

export interface RecommendedConcern {
  concern: Concern;
  score: number;
  reasonKeys: string[];
}

// Assessment state for useReducer
export interface AssessmentState {
  step: Step;
  beneficiary: Beneficiary;
  step0Answers: Step0Answers;
  scores: DirectionScores;
  recommendations: RecommendedConcern[];
  selectedConcerns: Concern[];
  currentFormIndex: number;
}
