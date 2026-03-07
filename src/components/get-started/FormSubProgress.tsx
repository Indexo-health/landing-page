import { useLanguage } from '../../contexts/LanguageContext';
import type { Concern } from '../../types/getStarted';

interface FormSubProgressProps {
  currentIndex: number;
  totalForms: number;
  concerns: Concern[];
}

const CONCERN_LABELS: Record<Concern, { icon: string; labelKey: string }> = {
  sleep_apnea: { icon: 'pulmonology', labelKey: 'gs.s1.concern.sleepApnea.title' },
  cardio_risk: { icon: 'monitor_heart', labelKey: 'gs.s1.concern.cardio.title' },
  recovery: { icon: 'battery_charging_full', labelKey: 'gs.s1.concern.recovery.title' },
  sleep_analysis: { icon: 'auto_graph', labelKey: 'gs.s1.concern.sleepAnalysis.title' },
};

export default function FormSubProgress({ currentIndex, totalForms, concerns }: FormSubProgressProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border border-surface-border">
        {concerns.map((concern, index) => {
          const meta = CONCERN_LABELS[concern];
          let pillClasses: string;

          if (index === currentIndex) {
            pillClasses = 'bg-brand-teal text-white';
          } else if (index < currentIndex) {
            pillClasses = 'bg-brand-teal/10 text-brand-teal';
          } else {
            pillClasses = 'bg-gray-100 text-gray-400';
          }

          return (
            <span
              key={concern}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${pillClasses}`}
            >
              <span className="material-symbols-outlined text-sm">{meta.icon}</span>
              {t(meta.labelKey)}
            </span>
          );
        })}
      </div>
      <span className="text-xs text-text-secondary ml-2">
        {t('gs.s2.formOf')
          .replace('{current}', String(currentIndex + 1))
          .replace('{total}', String(totalForms))}
      </span>
    </div>
  );
}
