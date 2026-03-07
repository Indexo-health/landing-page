import { useLanguage } from '../../../contexts/LanguageContext';

interface QuestionProgressBarProps {
  current: number;  // 1-based question number
  total: number;    // 12
}

export default function QuestionProgressBar({ current, total }: QuestionProgressBarProps) {
  const { t } = useLanguage();

  const progressText = t('gs.s0.questionOf')
    .replace('{current}', String(current))
    .replace('{total}', String(total));

  const progressPercent = (current / total) * 100;

  return (
    <div className="mb-8">
      <p className="text-sm text-text-secondary font-medium mb-2">{progressText}</p>
      <div className="h-1 bg-gray-100 rounded-full w-full overflow-hidden">
        <div
          className="h-full bg-brand-teal rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
