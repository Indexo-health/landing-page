import { useLanguage } from '../../contexts/LanguageContext';
import type { Step } from '../../types/getStarted';

interface StepProgressBarProps {
  step: Step;
  onExit: () => void;
}

export default function StepProgressBar({ step, onExit }: StepProgressBarProps) {
  const { t } = useLanguage();

  const steps = [
    { key: 'checkIn', label: t('gs.step.checkIn') },
    { key: 'results', label: t('gs.step.results') },
    { key: 'assessment', label: t('gs.step.assessment') },
    { key: 'plan', label: t('gs.step.plan') },
  ];

  const progressWidth = `${((step + 1) / steps.length) * 100}%`;

  return (
    <header className="flex items-center justify-between border-b border-surface-border px-6 md:px-10 py-4 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-navy">
          Indexo<span className="text-brand-teal">health</span>
        </h2>
      </div>

      {/* Center: Step labels + progress bar (hidden on small screens) */}
      <div className="flex-col items-center flex-1 max-w-sm md:max-w-lg mx-auto hidden sm:flex">
        <div className="flex items-center w-full justify-between text-xs font-semibold text-brand-navy mb-2 px-1">
          {steps.map((s, i) => (
            <span
              key={s.key}
              className={i <= step ? 'text-brand-teal' : 'text-gray-400'}
            >
              {s.label}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-brand-teal h-full rounded-full transition-all duration-500"
            style={{ width: progressWidth }}
          ></div>
        </div>
      </div>

      {/* Right: Exit button */}
      <div className="flex justify-end min-w-[80px]">
        <button
          onClick={onExit}
          className="text-sm font-medium text-text-secondary hover:text-brand-navy transition-colors"
        >
          {t('gs.step.exit')}
        </button>
      </div>
    </header>
  );
}
