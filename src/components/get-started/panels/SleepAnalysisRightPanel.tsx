import { useLanguage } from '../../../contexts/LanguageContext';

export default function SleepAnalysisRightPanel() {
  const { t } = useLanguage();

  return (
    <div className="hidden lg:flex w-full lg:w-[55%] bg-background-subtle relative items-center justify-center p-12 overflow-y-auto custom-scrollbar">
      <div className="relative z-10 w-full max-w-2xl">
        {/* Badge */}
        <div className="mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal w-fit mb-4">
            <span className="material-symbols-outlined text-brand-teal text-sm">contactless</span>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{t('gs.rp.sleep.badge')}</span>
          </div>
          {/* Two-line title with teal underline on second line */}
          <h3 className="text-4xl font-bold text-brand-navy mb-2 leading-tight">{t('gs.rp.sleep.title1')}</h3>
          <h3 className="text-4xl font-bold text-brand-teal mb-4 leading-tight underline decoration-4 underline-offset-8">{t('gs.rp.sleep.title2')}</h3>
          <p className="text-text-secondary text-base leading-relaxed">{t('gs.rp.sleep.desc')}</p>
        </div>

        {/* Sleep Score Card */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-200 mb-6 p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-brand-navy text-lg">{t('gs.rp.sleep.scoreTitle')}</h4>
            <span className="material-symbols-outlined text-gray-400 cursor-pointer">more_horiz</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Efficiency */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-28 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.sleep.efficiency')}</span>
                <span className="material-symbols-outlined text-gray-300 text-sm">bar_chart</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-navy">94</span>
                  <span className="text-xs text-gray-400">%</span>
                </div>
                <div className="mt-1">
                  <span className="bg-blue-50 text-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">{t('gs.rp.sleep.excellent')}</span>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-28 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.sleep.duration')}</span>
                <span className="material-symbols-outlined text-gray-300 text-sm">bedtime</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-navy">7</span><span className="text-xs text-gray-400 mr-1">h</span>
                  <span className="text-2xl font-bold text-brand-navy">45</span><span className="text-xs text-gray-400">m</span>
                </div>
                <div className="mt-1">
                  <span className="bg-brand-teal/10 text-brand-teal text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">NORMAL</span>
                </div>
              </div>
            </div>

            {/* In Bed */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-28 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('gs.rp.sleep.inBed')}</span>
                <span className="material-symbols-outlined text-gray-300 text-sm">bed</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-navy">8</span><span className="text-xs text-gray-400 mr-1">h</span>
                  <span className="text-2xl font-bold text-brand-navy">15</span><span className="text-xs text-gray-400">m</span>
                </div>
                <div className="mt-1">
                  <span className="bg-brand-teal/10 text-brand-teal text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">NORMAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sleep Consistency (7 Days) */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-200 mb-6 p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-brand-navy text-lg">{t('gs.rp.sleep.consistencyTitle')}</h4>
            <span className="bg-brand-teal/10 text-brand-teal text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{t('gs.rp.sleep.regular')}</span>
          </div>

          <div className="space-y-3">
            {[
              { day: 'Today', start: '23:15', end: '07:15', width: '75%', left: '15%', color: 'bg-blue-500' },
              { day: '1/14', start: '23:30', end: '06:30', width: '65%', left: '20%', color: 'bg-blue-400' },
              { day: '1/13', start: '22:45', end: '06:45', width: '80%', left: '10%', color: 'bg-blue-500' },
              { day: '1/12', start: '01:00', end: '08:00', width: '65%', left: '35%', color: 'bg-blue-400' },
            ].map((row, i) => (
              <div key={i} className="flex items-center text-xs text-text-secondary">
                <span className="w-12 font-medium">{row.day}</span>
                <span className="w-10">{row.start}</span>
                <div className="flex-grow relative h-3 bg-gray-100 rounded-full mx-3 overflow-hidden">
                  <div className={`absolute top-0 h-full ${row.color} rounded-full`} style={{ width: row.width, left: row.left }}></div>
                </div>
                <span className="w-10 text-right">{row.end}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[10px] text-gray-400 mt-4 ml-28 mr-12">
            <span>22:00</span>
            <span>00:00</span>
            <span>02:00</span>
            <span>04:00</span>
            <span>06:00</span>
            <span>08:00</span>
          </div>
        </div>

        {/* Restfulness & Movement */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-brand-navy text-lg">{t('gs.rp.sleep.restTitle')}</h4>
            <div className="flex items-center gap-3 text-[10px] font-bold text-text-secondary uppercase">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-teal"></div> {t('gs.rp.sleep.normalLabel')}</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-orange"></div> {t('gs.rp.sleep.frequent')}</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-navy"></div> {t('gs.rp.sleep.outOfBed')}</span>
            </div>
          </div>

          <div className="relative h-32 w-full flex items-end justify-between gap-1 px-2">
            {[2, 4, 1, 6, 3, 2, 8, 1, 2, 3, 10, 1, 2, 4, 2, 3, 5, 2, 1, 3, 2].map((h, i) => {
              let color = 'bg-brand-teal';
              if (h > 5) color = 'bg-brand-orange';
              if (h > 8) color = 'bg-brand-navy';

              return (
                <div key={i} className={`w-2 rounded-t-sm ${color} relative group`} style={{ height: `${h * 10}%` }}>
                  {h > 8 && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-[9px] font-bold py-1 px-2 rounded whitespace-nowrap z-10">
                      02:00 Out of Bed (15m)
                    </div>
                  )}
                </div>
              );
            })}

            <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between text-[10px] text-gray-400 pb-2">
              <span>15</span>
              <span>10</span>
              <span>5</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
