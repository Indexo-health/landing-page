import { useReducer, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import type {
  Concern,
  Beneficiary,
  Step,
  Step0Answers,
  AssessmentState,
} from '../types/getStarted';
import { calculateScores, getRecommendations } from '../utils/scoringEngine';
import StepProgressBar from '../components/get-started/StepProgressBar';
import Step0CheckIn from '../components/get-started/Step0CheckIn';
import Step1Results from '../components/get-started/Step1Results';
import Step2Forms from '../components/get-started/Step2Forms';
import Step3Plan from '../components/get-started/Step3Plan';

// ─── Reducer ────────────────────────────────────────────────
type Action =
  | { type: 'SET_STEP'; step: Step }
  | { type: 'SET_BENEFICIARY'; beneficiary: Beneficiary }
  | { type: 'ANSWER_STEP0'; questionId: string; value: string | string[] }
  | { type: 'COMPLETE_STEP0' }
  | { type: 'TOGGLE_CONCERN'; concern: Concern }
  | { type: 'CONFIRM_STEP1' }
  | { type: 'NEXT_FORM' }
  | { type: 'PREV_FORM' }
  | { type: 'DEEP_LINK'; concern: Concern };

const initialState: AssessmentState = {
  step: 0,
  beneficiary: 'myself',
  step0Answers: {},
  scores: { sleep_apnea: 0, cardio_risk: 0, recovery: 0, sleep_analysis: 0 },
  recommendations: [],
  selectedConcerns: [],
  currentFormIndex: 0,
};

function reducer(state: AssessmentState, action: Action): AssessmentState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.step };

    case 'SET_BENEFICIARY':
      return { ...state, beneficiary: action.beneficiary };

    case 'ANSWER_STEP0':
      return {
        ...state,
        step0Answers: { ...state.step0Answers, [action.questionId]: action.value },
      };

    case 'COMPLETE_STEP0': {
      const scores = calculateScores(state.step0Answers);
      const recommendations = getRecommendations(scores, state.step0Answers);
      const selectedConcerns = recommendations
        .filter((r) => r.score >= 40)
        .map((r) => r.concern);
      return { ...state, step: 1, scores, recommendations, selectedConcerns };
    }

    case 'TOGGLE_CONCERN': {
      const exists = state.selectedConcerns.includes(action.concern);
      return {
        ...state,
        selectedConcerns: exists
          ? state.selectedConcerns.filter((c) => c !== action.concern)
          : [...state.selectedConcerns, action.concern],
      };
    }

    case 'CONFIRM_STEP1':
      return { ...state, step: 2, currentFormIndex: 0 };

    case 'NEXT_FORM': {
      if (state.currentFormIndex < state.selectedConcerns.length - 1) {
        return { ...state, currentFormIndex: state.currentFormIndex + 1 };
      }
      return { ...state, step: 3 };
    }

    case 'PREV_FORM': {
      if (state.currentFormIndex > 0) {
        return { ...state, currentFormIndex: state.currentFormIndex - 1 };
      }
      return { ...state, step: 1 };
    }

    case 'DEEP_LINK': {
      return {
        ...state,
        step: 1,
        selectedConcerns: [action.concern],
        recommendations: [{ concern: action.concern, score: 100, reasonKeys: [] }],
        scores: {
          sleep_apnea: action.concern === 'sleep_apnea' ? 100 : 0,
          cardio_risk: action.concern === 'cardio_risk' ? 100 : 0,
          recovery: action.concern === 'recovery' ? 100 : 0,
          sleep_analysis: action.concern === 'sleep_analysis' ? 100 : 0,
        },
      };
    }

    default:
      return state;
  }
}

// ─── Component ──────────────────────────────────────────────
export default function GetStarted() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const urlConcern = searchParams.get('concern') as Concern | null;
    if (
      urlConcern &&
      ['sleep_apnea', 'cardio_risk', 'recovery', 'sleep_analysis'].includes(urlConcern)
    ) {
      dispatch({ type: 'DEEP_LINK', concern: urlConcern });
    }
  }, [searchParams]);

  const handleExit = () => {
    navigate(-1);
  };

  const handleAnswerChange = useCallback((questionId: string, value: string | string[]) => {
    dispatch({ type: 'ANSWER_STEP0', questionId, value });
  }, []);

  return (
    <>
      <Helmet>
        <title>Get Started — Indexo Health | Personalized Health Assessment</title>
        <meta
          name="description"
          content="Take our personalized health assessment to find the right Indexo Health monitoring plan for you. Sleep apnea screening, cardiovascular risk, recovery insights, and sleep analysis."
        />
        <link rel="canonical" href="https://indexo.health/get-started" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indexo.health/get-started" />
        <meta
          property="og:title"
          content="Get Started — Indexo Health | Personalized Health Assessment"
        />
        <meta
          property="og:description"
          content="Take our personalized health assessment to find the right monitoring plan for you."
        />
        <meta property="og:image" content="https://indexo.health/images/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Started — Indexo Health" />
        <meta
          name="twitter:description"
          content="Personalized health assessment for sleep and cardiovascular monitoring."
        />
      </Helmet>
      <div className="bg-background-app font-display antialiased text-text-main min-h-screen flex flex-col">
        <StepProgressBar step={state.step} onExit={handleExit} />

        {state.step === 0 && (
          <Step0CheckIn
            answers={state.step0Answers}
            onAnswerChange={handleAnswerChange}
            onComplete={() => dispatch({ type: 'COMPLETE_STEP0' })}
          />
        )}

        {state.step === 1 && (
          <Step1Results
            recommendations={state.recommendations}
            scores={state.scores}
            selectedConcerns={state.selectedConcerns}
            onToggleConcern={(c) => dispatch({ type: 'TOGGLE_CONCERN', concern: c })}
            beneficiary={state.beneficiary}
            setBeneficiary={(b) => dispatch({ type: 'SET_BENEFICIARY', beneficiary: b })}
            onNext={() => dispatch({ type: 'CONFIRM_STEP1' })}
            onBack={() => dispatch({ type: 'SET_STEP', step: 0 })}
          />
        )}

        {state.step === 2 && (
          <Step2Forms
            selectedConcerns={state.selectedConcerns}
            currentFormIndex={state.currentFormIndex}
            onNextForm={() => dispatch({ type: 'NEXT_FORM' })}
            onPrevForm={() => dispatch({ type: 'PREV_FORM' })}
            step0Answers={state.step0Answers}
          />
        )}

        {state.step === 3 && (
          <Step3Plan
            scores={state.scores}
            selectedConcerns={state.selectedConcerns}
            recommendations={state.recommendations}
            onBack={() => dispatch({ type: 'SET_STEP', step: 2 })}
          />
        )}
      </div>
    </>
  );
}
