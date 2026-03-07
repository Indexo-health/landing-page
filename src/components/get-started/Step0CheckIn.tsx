import { useState, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Step0Answers } from '../../types/getStarted';
import { QUESTIONS, SECTIONS } from './step0/questionsConfig';
import QuestionCard from './step0/QuestionCard';
import QuestionProgressBar from './step0/QuestionProgressBar';

interface Step0CheckInProps {
  answers: Step0Answers;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
  onComplete: () => void;
}

export default function Step0CheckIn({ answers, onAnswerChange, onComplete }: Step0CheckInProps) {
  const { t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [transitionSectionId, setTransitionSectionId] = useState<string | null>(null);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const currentSection = SECTIONS.find((s) => s.id === currentQuestion.section)!;

  const handleAutoAdvance = useCallback(() => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      const nextQ = QUESTIONS[currentQuestionIndex + 1];
      if (nextQ.section !== currentQuestion.section) {
        const nextSection = SECTIONS.find((s) => s.id === nextQ.section);
        if (nextSection?.transitionKey) {
          setTransitionSectionId(nextSection.id);
          setShowTransition(true);
          setTimeout(() => {
            setShowTransition(false);
            setTransitionSectionId(null);
            setCurrentQuestionIndex((prev) => prev + 1);
          }, 1500);
        } else {
          setCurrentQuestionIndex((prev) => prev + 1);
        }
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    } else {
      onComplete();
    }
  }, [currentQuestionIndex, currentQuestion.section, onComplete]);

  const handleContinue = () => {
    handleAutoAdvance();
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Transition screen
  if (showTransition) {
    const transitionSection = SECTIONS.find((s) => s.id === transitionSectionId);
    return (
      <div className="w-full min-h-[calc(100vh-73px)] flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-brand-teal text-2xl">check_circle</span>
          </div>
          <p className="text-xl text-brand-navy font-medium max-w-md">
            {transitionSection?.transitionKey ? t(transitionSection.transitionKey) : ''}
          </p>
        </div>
      </div>
    );
  }

  const currentAnswer = answers[currentQuestion.id];
  const isMulti = currentQuestion.type === 'multi';
  const multiHasSelection = isMulti && Array.isArray(currentAnswer) && currentAnswer.length > 0;

  return (
    <div className="w-full min-h-[calc(100vh-73px)] flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-8 lg:py-12">
        <div className="w-full max-w-2xl mx-auto">
          {/* Back button */}
          {currentQuestionIndex > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-text-secondary hover:text-brand-navy transition-colors mb-6"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="text-sm font-medium">{t('gs.s0.back')}</span>
            </button>
          )}

          {/* Title and description (only on first question) */}
          {currentQuestionIndex === 0 && (
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
                {t('gs.s0.title')}
              </h1>
              <p className="text-text-secondary text-lg mb-2">{t('gs.s0.desc')}</p>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="material-symbols-outlined text-brand-teal text-base">verified_user</span>
                {t('gs.s0.privacy')}
              </div>
            </div>
          )}

          {/* Progress bar */}
          <QuestionProgressBar current={currentQuestionIndex + 1} total={QUESTIONS.length} />

          {/* Section badge */}
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-6">
            {t(currentSection.titleKey)}
          </span>

          {/* Question card */}
          <QuestionCard
            question={currentQuestion}
            answer={currentAnswer}
            onAnswer={onAnswerChange}
            onAutoAdvance={handleAutoAdvance}
          />

          {/* Continue button for multi-select */}
          {isMulti && (
            <button
              onClick={handleContinue}
              disabled={!multiHasSelection}
              className={`mt-6 w-full flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-lg transition-all ${
                multiHasSelection
                  ? 'bg-brand-teal text-white hover:bg-brand-teal/90 shadow-md'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {t('gs.s0.continue')}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
