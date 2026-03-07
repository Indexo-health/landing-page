import { useLanguage } from '../../contexts/LanguageContext';
import type { Concern } from '../../types/getStarted';

interface RecommendedConcernCardProps {
  concern: Concern;
  score: number;
  reasonKeys: string[];
  selected: boolean;
  recommended: boolean;
  onToggle: () => void;
}

const CONCERN_META: Record<Concern, { icon: string; titleKey: string; descKey: string; iconColor: string; iconBg: string }> = {
  sleep_apnea: { icon: 'pulmonology', titleKey: 'gs.s1.concern.sleepApnea.title', descKey: 'gs.s1.concern.sleepApnea.desc', iconColor: 'text-brand-navy', iconBg: 'bg-gray-100' },
  cardio_risk: { icon: 'monitor_heart', titleKey: 'gs.s1.concern.cardio.title', descKey: 'gs.s1.concern.cardio.desc', iconColor: 'text-brand-danger', iconBg: 'bg-red-50' },
  recovery: { icon: 'battery_charging_full', titleKey: 'gs.s1.concern.recovery.title', descKey: 'gs.s1.concern.recovery.desc', iconColor: 'text-brand-teal', iconBg: 'bg-brand-teal/10' },
  sleep_analysis: { icon: 'auto_graph', titleKey: 'gs.s1.concern.sleepAnalysis.title', descKey: 'gs.s1.concern.sleepAnalysis.desc', iconColor: 'text-brand-teal', iconBg: 'bg-brand-teal/10' },
};

export default function RecommendedConcernCard({
  concern,
  score,
  reasonKeys,
  selected,
  onToggle,
}: RecommendedConcernCardProps) {
  const { t } = useLanguage();
  const meta = CONCERN_META[concern];

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-2xl border-2 p-6 transition-all cursor-pointer w-full text-left ${
        selected
          ? 'border-brand-teal bg-brand-teal/5 shadow-card-hover'
          : 'border-gray-200 hover:border-brand-teal/40 hover:shadow-card'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left: icon + content */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-full ${meta.iconBg} flex items-center justify-center shrink-0 ${meta.iconColor}`}>
            <span className="material-symbols-outlined">{meta.icon}</span>
          </div>

          {/* Title + score bar + reason */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-brand-navy">{t(meta.titleKey)}</h3>

            {/* Score bar */}
            <div className="h-1.5 bg-gray-100 rounded-full mt-3 w-full">
              <div
                className="h-1.5 bg-brand-teal rounded-full transition-all duration-500"
                style={{ width: `${score}%` }}
              />
            </div>
            <span className="text-xs text-text-secondary mt-1 block">
              {t('gs.s1r.score')}: {score}%
            </span>

            {/* Reason text */}
            {reasonKeys.length > 0 && (
              <p className="text-sm text-text-secondary mt-2 italic">
                {t(reasonKeys[0])}
              </p>
            )}
          </div>
        </div>

        {/* Right: checkbox indicator */}
        <div className="shrink-0 mt-1">
          {selected ? (
            <div className="w-6 h-6 rounded-full bg-brand-teal flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">check</span>
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
          )}
        </div>
      </div>
    </button>
  );
}
