import { useLanguage } from '../../../contexts/LanguageContext';

export default function CardioRightPanel() {
  const { t } = useLanguage();

  return (
    <div className="hidden lg:flex w-full lg:w-[55%] bg-background-subtle relative items-center justify-center p-12 overflow-y-auto custom-scrollbar">
      <div className="relative z-10 w-full max-w-2xl">
        <div className="mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-red w-fit mb-4">
            <span className="material-symbols-outlined text-brand-red text-sm">monitor_heart</span>
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">{t('gs.rp.cardio.badge')}</span>
          </div>
          <h3 className="text-4xl font-bold text-brand-navy mb-3 leading-tight">{t('gs.rp.cardio.title')}</h3>
          <p className="text-text-secondary text-base leading-relaxed">{t('gs.rp.cardio.desc')}</p>
        </div>

        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-200 mb-6 p-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Nightly HR */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-28 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.cardio.hr')}</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-navy">72</span>
                  <span className="text-xs text-gray-400">BPM</span>
                </div>
                <div className="mt-1">
                  <span className="bg-red-50 text-red-500 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[10px]">arrow_upward</span> +15%
                  </span>
                </div>
              </div>
            </div>

            {/* Resp. Rate */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-28 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.cardio.resp')}</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-navy">14</span>
                  <span className="text-xs text-gray-400">BrPM</span>
                </div>
                <div className="mt-1">
                  <span className="bg-brand-teal/10 text-brand-teal text-[9px] font-bold px-1.5 py-0.5 rounded uppercase flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[10px]">check</span> {t('gs.rp.cardio.stable')}
                  </span>
                </div>
              </div>
            </div>

            {/* Central AHI */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-28 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.cardio.ahi')}</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-navy">4.2</span>
                </div>
                <div className="mt-1">
                  <span className="text-gray-400 text-[9px] font-bold uppercase">{t('gs.rp.cardio.eventsH')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 30-Day Trend Chart */}
          <div className="border border-gray-100 rounded-xl p-6 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-bold text-brand-navy text-sm">{t('gs.rp.cardio.trendTitle')}</h4>
                <p className="text-xs text-gray-400">{t('gs.rp.cardio.trendSub')}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase">
                  <div className="w-2 h-2 rounded-full bg-gray-200"></div> {t('gs.rp.cardio.history')}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 uppercase">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div> {t('gs.rp.cardio.today')}
                </span>
              </div>
            </div>

            <div className="relative h-32 w-full flex items-end justify-between gap-1">
              {/* Baseline dashed line at ~40% */}
              <div className="absolute top-[40%] left-0 right-0 h-[1px] border-t border-dashed border-gray-300 z-10 flex items-center justify-end">
                <span className="text-gray-400 text-[10px] font-bold -mt-4 bg-white px-1">{t('gs.rp.cardio.baseline')}</span>
              </div>

              {/* History bars */}
              {[35, 42, 38, 45, 40, 32, 38, 41, 44, 36, 39, 42, 48, 40, 35, 44, 46, 42, 55, 60].map((h, i) => (
                <div key={i} className="w-full bg-gray-200 rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}

              {/* Today bar (red, 85%) */}
              <div className="w-full bg-red-500 rounded-t-sm h-[85%] relative z-20">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-[10px] font-bold py-0.5 px-1.5 rounded whitespace-nowrap">72 BPM</div>
              </div>
            </div>

            <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-4">
              <span>{t('gs.rp.cardio.daysAgo30')}</span>
              <span>{t('gs.rp.cardio.daysAgo15')}</span>
              <span className="text-red-500">{t('gs.rp.cardio.today')}</span>
            </div>
          </div>

          {/* Orange Insight Box */}
          <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-orange-600 text-sm mb-1">{t('gs.rp.cardio.insightTitle')}</h4>
              <p className="text-orange-800/80 text-xs leading-relaxed">{t('gs.rp.cardio.insightDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
