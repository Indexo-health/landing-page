import { useLanguage } from '../../contexts/LanguageContext';
import type { Step, Concern } from '../../types/getStarted';

interface StepProgressBarProps {
  step: Step;
  concern: Concern;
  onExit: () => void;
}

export default function StepProgressBar({ step, concern, onExit }: StepProgressBarProps) {
  const { t } = useLanguage();

  // Step 2 label changes based on the selected concern
  const step2Label = (() => {
    switch (concern) {
      case 'sleep_apnea':
        return t('gs.step.screening');
      case 'sleep_analysis':
        return t('gs.step.sleepProfile');
      case 'recovery':
        return t('gs.step.recovery');
      case 'cardio_risk':
        return t('gs.step.profile');
      default:
        return t('gs.step.profile');
    }
  })();

  // Progress bar width based on current step
  const progressWidth = step === 1 ? '33.33%' : step === 2 ? '66.66%' : '100%';

  return (
    <header className="flex items-center justify-between border-b border-surface-border px-6 md:px-10 py-4 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-navy">
          Indexo<span className="text-brand-teal">health</span>
        </h2>
      </div>

      {/* Center: Step labels + progress bar (hidden on small screens) */}
      <div className="flex-col items-center flex-1 max-w-xs md:max-w-md mx-auto hidden sm:flex">
        <div className="flex items-center w-full justify-between text-xs font-semibold text-brand-navy mb-2 px-2">
          <span className="text-brand-teal">{t('gs.step.needs')}</span>
          <span className={step >= 2 ? 'text-brand-teal' : 'text-gray-400'}>
            {step2Label}
          </span>
          <span className={step >= 3 ? 'text-brand-teal' : 'text-gray-400'}>
            {t('gs.step.plan')}
          </span>
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
