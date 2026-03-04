import { useLanguage } from '../../../contexts/LanguageContext';

export default function RecoveryRightPanel() {
  const { t } = useLanguage();

  return (
    <div className="hidden lg:flex w-full lg:w-[55%] bg-background-subtle relative items-center justify-center p-12 overflow-y-auto custom-scrollbar">
      <div className="relative z-10 w-full max-w-2xl">
        {/* Title & Description */}
        <div className="mb-8 text-left">
          <h3 className="text-4xl font-bold text-brand-navy mb-4">{t('gs.rp.recovery.title')}</h3>
          <p className="text-text-secondary text-lg leading-relaxed">{t('gs.rp.recovery.desc')}</p>
        </div>

        {/* Main Recovery Card */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-200 mb-6">
          <div className="p-8">
            {/* Header row */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <span className="text-text-secondary text-[10px] font-bold tracking-widest uppercase">{t('gs.rp.recovery.todayLabel')}</span>
                <span className="bg-brand-teal/10 text-brand-teal text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-brand-teal/20">{t('gs.rp.recovery.recharged')}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="material-symbols-outlined cursor-pointer hover:text-text-secondary text-xl">calendar_today</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-text-secondary text-xl">tune</span>
              </div>
            </div>

            {/* Date */}
            <h2 className="text-3xl font-bold text-brand-navy mb-12">{t('gs.rp.recovery.date')}</h2>

            {/* Large Circular Progress - 94% */}
            <div className="flex justify-center mb-12 relative">
              <div className="relative w-64 h-64">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F5F9" strokeWidth="10" />
                  <circle
                    cx="50" cy="50" r="40" fill="none"
                    stroke="#00BFA5" strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="15.072"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[80px] font-bold text-brand-navy tracking-tighter leading-none mb-1">94</span>
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">{t('gs.rp.recovery.score')}</span>
                </div>
              </div>
            </div>

            {/* 3 Stat Cards with mini bar charts */}
            <div className="grid grid-cols-3 gap-4">
              {/* HRV */}
              <div className="border border-gray-100 rounded-[20px] p-5 flex flex-col justify-between h-32 shadow-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.recovery.hrv')}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-brand-navy">102</span>
                    <span className="text-xs text-gray-400">ms</span>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-6 mt-2">
                  <div className="w-1/4 bg-brand-teal/15 rounded-sm h-[30%]"></div>
                  <div className="w-1/4 bg-brand-teal/15 rounded-sm h-[40%]"></div>
                  <div className="w-1/4 bg-brand-teal/40 rounded-sm h-[60%]"></div>
                  <div className="w-1/4 bg-brand-teal rounded-sm h-[100%]"></div>
                </div>
              </div>

              {/* RHR */}
              <div className="border border-gray-100 rounded-[20px] p-5 flex flex-col justify-between h-32 shadow-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.recovery.rhr')}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-brand-navy">44</span>
                    <span className="text-xs text-gray-400">bpm</span>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-6 mt-2">
                  <div className="w-1/4 bg-amber-100 rounded-sm h-[80%]"></div>
                  <div className="w-1/4 bg-amber-200 rounded-sm h-[60%]"></div>
                  <div className="w-1/4 bg-amber-300 rounded-sm h-[50%]"></div>
                  <div className="w-1/4 bg-brand-orange rounded-sm h-[40%]"></div>
                </div>
              </div>

              {/* SLEEP */}
              <div className="border border-gray-100 rounded-[20px] p-5 flex flex-col justify-between h-32 shadow-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.recovery.sleep')}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-brand-navy">92%</span>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-6 mt-2">
                  <div className="w-1/4 bg-brand-teal/15 rounded-sm h-[40%]"></div>
                  <div className="w-1/4 bg-brand-teal/15 rounded-sm h-[50%]"></div>
                  <div className="w-1/4 bg-brand-teal/40 rounded-sm h-[70%]"></div>
                  <div className="w-1/4 bg-brand-teal rounded-sm h-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Recovery Status Card */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-200 shadow-sm flex items-center gap-5 cursor-pointer hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
            <span className="material-symbols-outlined text-2xl">check_circle</span>
          </div>
          <div className="flex-grow">
            <h4 className="font-bold text-brand-navy text-lg mb-1">{t('gs.rp.recovery.deep')}</h4>
            <p className="text-text-secondary text-sm">{t('gs.rp.recovery.deepDesc')}</p>
          </div>
          <span className="material-symbols-outlined text-gray-300">chevron_right</span>
        </div>
      </div>
    </div>
  );
}
