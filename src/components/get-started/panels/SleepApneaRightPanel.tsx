import { useLanguage } from '../../../contexts/LanguageContext';

export default function SleepApneaRightPanel() {
  const { t } = useLanguage();

  return (
    <div className="hidden lg:flex w-full lg:w-[55%] bg-brand-navy relative items-center justify-center p-12 overflow-y-auto custom-scrollbar">
      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white rounded-[24px] overflow-hidden shadow-2xl">
          <div className="p-8">
            {/* Header with compare label, baseline toggle, calendar/more icons */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="text-text-secondary text-xs font-bold tracking-widest uppercase">{t('gs.rp.apnea.compare')}</span>
                <div className="flex items-center gap-2 bg-brand-teal/10 px-2 py-1 rounded-full">
                  <div className="w-6 h-3 bg-brand-teal rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-brand-teal text-[10px] font-bold tracking-wider uppercase">{t('gs.rp.apnea.baselineOn')}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="material-symbols-outlined cursor-pointer hover:text-text-secondary">calendar_today</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-text-secondary">more_horiz</span>
              </div>
            </div>

            {/* Date */}
            <h2 className="text-3xl font-bold text-brand-navy mb-6">{t('gs.rp.apnea.date')}</h2>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold text-brand-navy mb-3 leading-tight">
              {t('gs.rp.apnea.title1')}<br />{t('gs.rp.apnea.title2')}
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              {t('gs.rp.apnea.desc')}
            </p>

            {/* 2 Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-background-subtle rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-4">
                  <span className="material-symbols-outlined text-xl">troubleshoot</span>
                </div>
                <h4 className="font-bold text-brand-navy text-sm mb-2">{t('gs.rp.apnea.continuous')}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{t('gs.rp.apnea.continuousDesc')}</p>
              </div>
              <div className="bg-background-subtle rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                  <span className="material-symbols-outlined text-xl">notifications_active</span>
                </div>
                <h4 className="font-bold text-brand-navy text-sm mb-2">{t('gs.rp.apnea.alerts')}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{t('gs.rp.apnea.alertsDesc')}</p>
              </div>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {/* AHI Score */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{t('gs.rp.apnea.ahiScore')}</span>
                  <span className="bg-gray-100 text-text-secondary text-[9px] font-bold px-1.5 py-0.5 rounded">{t('gs.rp.apnea.moderate')}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-brand-navy">18.4</span>
                    <span className="text-[10px] text-gray-400">/hr</span>
                  </div>
                  <div className="text-brand-orange text-[10px] font-bold flex items-center gap-0.5 mt-1">
                    <span className="material-symbols-outlined text-[10px]">trending_up</span> +2.1
                  </div>
                </div>
              </div>

              {/* MIN SPO2 */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{t('gs.rp.apnea.minSpo2')}</span>
                  <span className="bg-red-50 text-red-500 text-[9px] font-bold px-1.5 py-0.5 rounded">{t('gs.rp.apnea.spo2Low')}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-brand-navy">88</span>
                    <span className="text-[10px] text-gray-400">%</span>
                  </div>
                  <div className="text-red-500 text-[10px] font-bold flex items-center gap-0.5 mt-1">
                    <span className="material-symbols-outlined text-[10px]">trending_down</span> -4%
                  </div>
                </div>
              </div>

              {/* T90 TIME */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{t('gs.rp.apnea.t90')}</span>
                  <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">{t('gs.rp.apnea.alert')}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-brand-navy">15</span>
                    <span className="text-[10px] text-gray-400">min</span>
                  </div>
                  <div className="text-red-500 text-[10px] font-bold flex items-center gap-0.5 mt-1">
                    <span className="material-symbols-outlined text-[10px]">arrow_upward</span> +5m
                  </div>
                </div>
              </div>

              {/* DESAT */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{t('gs.rp.apnea.desat')}</span>
                  <span className="bg-gray-100 text-text-secondary text-[9px] font-bold px-1.5 py-0.5 rounded">{t('gs.rp.apnea.normal')}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-brand-navy">2</span>
                    <span className="text-[10px] text-gray-400">evt</span>
                  </div>
                  <div className="text-brand-teal text-[10px] font-bold flex items-center gap-0.5 mt-1">
                    -- --
                  </div>
                </div>
              </div>
            </div>

            {/* 30-Day AHI Trend Chart */}
            <div className="border border-gray-200 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-brand-navy text-sm">{t('gs.rp.apnea.trendTitle')}</h4>
                <span className="text-[10px] text-gray-400">{t('gs.rp.apnea.trendUnit')}</span>
              </div>

              <div className="relative h-32 w-full flex items-end justify-between gap-1">
                {/* Baseline dashed line */}
                <div className="absolute top-[60%] left-0 right-0 h-[1px] border-t border-dashed border-brand-teal z-10 flex items-center justify-end">
                  <span className="text-brand-teal text-[10px] font-bold -mt-4 bg-white px-1">Baseline: 5</span>
                </div>

                {/* 29 gray bars with gradual increase */}
                {[3, 4, 3, 5, 4, 6, 5, 7, 6, 8, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14].map((h, i) => (
                  <div key={i} className="w-full bg-surface-border rounded-t-sm" style={{ height: `${h * 3}%` }}></div>
                ))}

                {/* Today bar (orange) */}
                <div className="w-full bg-brand-orange rounded-t-sm h-[90%] relative z-20">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-[10px] font-bold py-0.5 px-1.5 rounded whitespace-nowrap">18.4</div>
                </div>
              </div>

              <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-4">
                <span>30 Days Ago</span>
                <span>15 Days Ago</span>
                <span className="text-brand-orange">Today</span>
              </div>
            </div>

            {/* Anomaly Alert Card */}
            <div className="border border-gray-200 rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-brand-navy text-sm">{t('gs.rp.apnea.anomaly')}</h4>
                <p className="text-text-secondary text-xs">{t('gs.rp.apnea.anomalyDesc')}</p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
