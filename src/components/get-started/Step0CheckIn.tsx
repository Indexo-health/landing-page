import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Step0Answers } from '../../types/getStarted';
import { QUESTIONS, PAGES } from './step0/questionsConfig';
import QuestionCard from './step0/QuestionCard';
import QuestionProgressBar from './step0/QuestionProgressBar';

interface Step0CheckInProps {
  answers: Step0Answers;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
  onComplete: () => void;
}

export default function Step0CheckIn({ answers, onAnswerChange, onComplete }: Step0CheckInProps) {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const page = PAGES[currentPage];
  const pageQuestions = page.questions
    .map((qId) => QUESTIONS.find((q) => q.id === qId)!)
    .filter(Boolean);

  // Check if all questions on current page are answered
  const allAnswered = pageQuestions.every((q) => {
    const ans = answers[q.id];
    if (q.type === 'single') return typeof ans === 'string' && ans.length > 0;
    return Array.isArray(ans) && ans.length > 0;
  });

  const handleContinue = () => {
    if (currentPage < PAGES.length - 1) {
      setCurrentPage((p) => p + 1);
      window.scrollTo(0, 0);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-73px)] flex flex-col">
      <div className="flex-grow flex flex-col items-center px-4 py-8 lg:py-12">
        <div className="w-full max-w-2xl mx-auto">
          {/* Back button */}
          {currentPage > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-text-secondary hover:text-brand-navy transition-colors mb-6"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="text-sm font-medium">{t('gs.s0.back')}</span>
            </button>
          )}

          {/* Title and description (only on first page) */}
          {currentPage === 0 && (
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
          <QuestionProgressBar current={currentPage + 1} total={PAGES.length} />

          {/* Section badge */}
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-8">
            {t(page.titleKey)}
          </span>

          {/* All questions for current page */}
          <div className="flex flex-col gap-10">
            {pageQuestions.map((q) => (
              <div key={q.id}>
                <QuestionCard
                  question={q}
                  answer={answers[q.id]}
                  onAnswer={onAnswerChange}
                />
              </div>
            ))}
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!allAnswered}
            className={`mt-10 w-full flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-lg transition-all ${
              allAnswered
                ? 'bg-brand-teal text-white hover:bg-brand-teal/90 shadow-md'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentPage < PAGES.length - 1 ? t('gs.s0.continue') : t('gs.s0.finish')}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
