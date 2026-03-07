import { useLanguage } from '../../../contexts/LanguageContext';
import type { QuestionDef } from '../../../types/getStarted';

interface QuestionCardProps {
  question: QuestionDef;
  answer: string | string[] | undefined;
  onAnswer: (questionId: string, value: string | string[]) => void;
}

export default function QuestionCard({ question, answer, onAnswer }: QuestionCardProps) {
  const { t } = useLanguage();

  const handleSingleSelect = (optionId: string) => {
    onAnswer(question.id, optionId);
  };

  const handleMultiToggle = (optionId: string) => {
    const currentSelections = Array.isArray(answer) ? answer : [];
    const isNoneOption = optionId.endsWith('_none');

    let updated: string[];

    if (isNoneOption) {
      // Clicking "none" deselects all others
      updated = currentSelections.includes(optionId) ? [] : [optionId];
    } else {
      // Clicking a regular option: remove any "none" option, then toggle this one
      const withoutNone = currentSelections.filter((id) => !id.endsWith('_none'));
      if (withoutNone.includes(optionId)) {
        updated = withoutNone.filter((id) => id !== optionId);
      } else {
        updated = [...withoutNone, optionId];
      }
    }

    onAnswer(question.id, updated);
  };

  if (question.type === 'single') {
    return (
      <div>
        <h3 className="text-xl font-bold text-brand-navy mb-4">{t(question.titleKey)}</h3>
        <div className="flex flex-col gap-2.5">
          {question.options.map((option) => {
            const isSelected = answer === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleSingleSelect(option.id)}
                className={`rounded-xl border p-3.5 text-left w-full transition-all ${
                  isSelected
                    ? 'border-brand-teal border-2 bg-brand-teal/5'
                    : 'border-gray-200 hover:border-brand-teal/50 bg-white'
                }`}
              >
                <span className={`text-sm font-medium ${isSelected ? 'text-brand-navy' : 'text-text-secondary'}`}>
                  {t(option.labelKey)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Multi-select
  const currentSelections = Array.isArray(answer) ? answer : [];

  return (
    <div>
      <h3 className="text-xl font-bold text-brand-navy mb-4">{t(question.titleKey)}</h3>
      <div className="flex flex-col gap-2.5">
        {question.options.map((option) => {
          const isChecked = currentSelections.includes(option.id);
          return (
            <button
              key={option.id}
              onClick={() => handleMultiToggle(option.id)}
              className={`rounded-xl border p-3.5 text-left w-full transition-all flex items-center gap-3 ${
                isChecked
                  ? 'border-brand-teal border-2 bg-brand-teal/5'
                  : 'border-gray-200 hover:border-brand-teal/50 bg-white'
              }`}
            >
              {/* Checkbox indicator */}
              <div
                className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center ${
                  isChecked
                    ? 'bg-brand-teal border-2 border-brand-teal'
                    : 'border-2 border-gray-300'
                }`}
              >
                {isChecked && (
                  <span className="material-symbols-outlined text-white text-sm" style={{ fontSize: '14px' }}>
                    check
                  </span>
                )}
              </div>
              <span className={`text-sm font-medium ${isChecked ? 'text-brand-navy' : 'text-text-secondary'}`}>
                {t(option.labelKey)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
