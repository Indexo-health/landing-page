import { useLanguage } from '../../contexts/LanguageContext';
import type { Concern, DirectionScores, RecommendedConcern } from '../../types/getStarted';

interface Props {
  scores: DirectionScores;
  selectedConcerns: Concern[];
  recommendations: RecommendedConcern[];
  onBack: () => void;
}

const CONCERN_META: Record<Concern, { icon: string; titleKey: string }> = {
  sleep_apnea: { icon: 'pulmonology', titleKey: 'gs.s1.concern.sleepApnea.title' },
  cardio_risk: { icon: 'monitor_heart', titleKey: 'gs.s1.concern.cardio.title' },
  recovery: { icon: 'battery_charging_full', titleKey: 'gs.s1.concern.recovery.title' },
  sleep_analysis: { icon: 'auto_graph', titleKey: 'gs.s1.concern.sleepAnalysis.title' },
};

function getRiskLevel(score: number): { labelKey: string; color: string; bg: string } {
  if (score <= 30) return { labelKey: 'gs.s3.low', color: 'text-brand-green', bg: 'bg-green-50' };
  if (score <= 60) return { labelKey: 'gs.s3.moderate', color: 'text-brand-orange', bg: 'bg-orange-50' };
  return { labelKey: 'gs.s3.highRisk', color: 'text-brand-danger', bg: 'bg-red-50' };
}

export default function Step3Plan({ scores, selectedConcerns, recommendations, onBack }: Props) {
  const { t } = useLanguage();

  // Find the primary concern (highest score among selected)
  const primaryConcern = selectedConcerns.reduce((best, c) => {
    return scores[c] > scores[best] ? c : best;
  }, selectedConcerns[0]);

  const primaryScore = primaryConcern ? scores[primaryConcern] : 0;
  const riskInfo = getRiskLevel(primaryScore);

  return (
    <main className="flex-grow flex flex-col relative overflow-hidden h-[calc(100vh-73px)] bg-background-subtle">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-teal/10 to-transparent pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto px-6 py-8 lg:py-12 z-10 flex-grow flex flex-col overflow-y-auto custom-scrollbar">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-text-secondary hover:text-brand-navy transition-colors mb-6 w-fit"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span className="text-sm font-medium">{t('gs.s3.back')}</span>
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4 relative">
            <span className="material-symbols-outlined text-brand-teal text-3xl">task_alt</span>
            <div className="absolute inset-0 rounded-full border-2 border-brand-teal animate-pulse-border"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">{t('gs.s3.title')}</h1>
          <p className="text-text-secondary text-lg max-w-2xl">{t('gs.s3.desc')}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Summary */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Profile Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-teal">analytics</span>
                {t('gs.s3.summaryTitle')}
              </h3>
              <div className="space-y-4">
                {/* Dynamic primary focus */}
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-text-secondary text-sm">{t('gs.s3.primaryFocus')}</span>
                  <span className="font-semibold text-brand-navy text-sm">
                    {primaryConcern ? t(CONCERN_META[primaryConcern].titleKey) : '—'}
                  </span>
                </div>
                {/* Dynamic risk level */}
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-text-secondary text-sm">{t('gs.s3.riskLevel')}</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 ${riskInfo.bg} ${riskInfo.color} text-xs font-bold rounded`}>
                    {t(riskInfo.labelKey)}
                  </span>
                </div>
                {/* Areas assessed */}
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-text-secondary text-sm">{t('gs.s3.keyIndicator')}</span>
                  <span className="font-semibold text-brand-navy text-sm">
                    {selectedConcerns.length} {selectedConcerns.length === 1 ? 'area' : 'areas'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-sm">{t('gs.s3.dataConfidence')}</span>
                  <span className="font-semibold text-brand-teal text-sm">{t('gs.s3.high')}</span>
                </div>
              </div>
            </div>

            {/* Assessed Areas Card */}
            {selectedConcerns.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal">checklist</span>
                  {t('gs.s3.summaryTitle')}
                </h3>
                <div className="space-y-3">
                  {selectedConcerns.map((c) => {
                    const meta = CONCERN_META[c];
                    const score = scores[c];
                    const risk = getRiskLevel(score);
                    return (
                      <div key={c} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-surface-border">
                        <span className="material-symbols-outlined text-brand-teal">{meta.icon}</span>
                        <span className="text-sm font-medium text-brand-navy flex-1">{t(meta.titleKey)}</span>
                        <span className={`text-xs font-bold ${risk.color}`}>{score}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Next Steps Card */}
            <div className="bg-brand-navy rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2 relative z-10">{t('gs.s3.nextSteps')}</h3>
              <p className="text-white/80 text-sm mb-4 relative z-10">{t('gs.s3.nextStepsDesc')}</p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-brand-teal text-base shrink-0">check_circle</span>
                  <span>{t('gs.s3.ns1')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-brand-teal text-base shrink-0">check_circle</span>
                  <span>{t('gs.s3.ns2')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="material-symbols-outlined text-white/30 text-base shrink-0">circle</span>
                  <span className="text-white/50">{t('gs.s3.ns3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Recommendations */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-brand-navy">{t('gs.s3.recTitle')}</h2>

            {/* Primary Recommendation */}
            <div className="bg-white rounded-2xl p-1 shadow-sm border-2 border-brand-teal relative">
              <div className="absolute -top-3 left-6 bg-brand-teal text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                {t('gs.s3.bestMatch')}
              </div>
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-32 h-32 shrink-0 bg-brand-teal/10 rounded-xl flex items-center justify-center border border-brand-teal/20">
                  <span className="material-symbols-outlined text-6xl text-brand-teal">watch</span>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">{t('gs.s3.proTitle')}</h3>
                  <p className="text-text-secondary text-sm mb-4">{t('gs.s3.proDesc')}</p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
                    <span className="px-2.5 py-1 bg-gray-100 text-text-secondary text-xs font-medium rounded-md">{t('gs.s3.proF1')}</span>
                    <span className="px-2.5 py-1 bg-gray-100 text-text-secondary text-xs font-medium rounded-md">{t('gs.s3.proF2')}</span>
                    <span className="px-2.5 py-1 bg-gray-100 text-text-secondary text-xs font-medium rounded-md">{t('gs.s3.proF3')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all">
                      {t('gs.s3.proBtn')}
                    </button>
                    <span className="text-brand-navy font-bold text-lg">
                      {t('gs.s3.proPrice')} <span className="text-text-secondary text-sm font-normal">{t('gs.s3.proPriceSub')}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Recommendation */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:border-brand-teal/30 transition-colors">
              <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-gray-400">app_shortcut</span>
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-lg font-bold text-brand-navy mb-1">{t('gs.s3.appTitle')}</h3>
                <p className="text-text-secondary text-sm mb-3">{t('gs.s3.appDesc')}</p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-brand-navy font-bold">
                    {t('gs.s3.appPrice')} <span className="text-text-secondary text-sm font-normal">{t('gs.s3.appPriceSub')}</span>
                  </span>
                  <button className="text-brand-teal font-bold text-sm hover:text-brand-teal/80 transition-colors">
                    {t('gs.s3.appBtn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
