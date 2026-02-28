import { useLanguage } from '../contexts/LanguageContext';

export default function SleepAnalysis() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 md:px-10 lg:px-20 relative overflow-hidden bg-background-app">
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[128px] pointer-events-none"></div>
      
      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start z-10">
        <div className="flex flex-col gap-8 self-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 w-fit shadow-sm">
            <span className="material-symbols-outlined text-brand-teal text-sm">monitor_heart</span>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{t('sa.badge')}</span>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy">
              {t('sa.title1')}<span className="text-brand-teal relative inline-block">{t('sa.title2')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                </svg>
              </span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[540px]">
              {t('sa.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-teal/50 hover:shadow-card-hover transition-all group shadow-card">
              <div className="p-2.5 rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">timeline</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('sa.card1.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('sa.card1.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-navy/50 hover:shadow-card-hover transition-all group shadow-card">
              <div className="p-2.5 rounded-full bg-brand-navy/10 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('sa.card2.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('sa.card2.desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20">
              <span>{t('sa.btn1')}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-white border border-surface-border text-brand-navy font-bold hover:bg-surface-border/50 hover:border-brand-navy/20 transition-all">
              <span>{t('sa.btn2')}</span>
            </button>
          </div>
        </div>
        
        <div className="relative w-full bg-background-app rounded-3xl flex flex-col gap-6">
          <div className="bg-card-white rounded-2xl p-6 shadow-sm border border-surface-border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-brand-navy">Sleep Score</h3>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-text-secondary text-lg">more_horiz</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-surface-border/60 flex flex-col justify-between h-32 relative overflow-hidden">
                <div className="flex justify-between items-start z-10">
                  <span className="text-text-secondary text-xs font-semibold">Efficiency</span>
                  <span className="material-symbols-outlined text-gray-300 text-lg">equalizer</span>
                </div>
                <div className="z-10">
                  <span className="text-3xl font-bold text-brand-navy">94<span className="text-lg">%</span></span>
                  <div className="mt-2 inline-flex px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-bold">Excellent</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 border border-surface-border/60 flex flex-col justify-between h-32 relative overflow-hidden">
                <div className="flex justify-between items-start z-10">
                  <span className="text-text-secondary text-xs font-semibold">Sleep Duration</span>
                  <span className="material-symbols-outlined text-gray-300 text-lg">bedtime</span>
                </div>
                <div className="z-10">
                  <span className="text-3xl font-bold text-brand-navy">7<span className="text-lg">h</span> 45<span className="text-lg">m</span></span>
                  <div className="mt-2 inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold">Normal</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 border border-surface-border/60 flex flex-col justify-between h-32 relative overflow-hidden">
                <div className="flex justify-between items-start z-10">
                  <span className="text-text-secondary text-xs font-semibold">Time in Bed</span>
                  <span className="material-symbols-outlined text-gray-300 text-lg">hotel</span>
                </div>
                <div className="z-10">
                  <span className="text-3xl font-bold text-brand-navy">8<span className="text-lg">h</span> 15<span className="text-lg">m</span></span>
                  <div className="mt-2 inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold">Normal</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card-white rounded-2xl p-6 shadow-sm border border-surface-border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-brand-navy">Sleep Consistency (7 Days)</h3>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-wider bg-brand-teal/10 px-2 py-1 rounded">Regular</span>
            </div>
            
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center text-xs text-text-secondary">
                <div className="w-10 font-bold text-brand-navy">Today</div>
                <div className="flex-1 h-8 relative mx-2">
                  <div className="absolute inset-y-0 left-[15%] right-[20%] bg-blue-500 rounded-full flex items-center justify-center group cursor-pointer hover:shadow-md transition-all">
                    <span className="text-white font-bold text-[10px] opacity-0 group-hover:opacity-100">8h 00m</span>
                  </div>
                  <span className="absolute left-[2%] top-1/2 -translate-y-1/2 text-[10px]">23:15</span>
                  <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[10px]">07:15</span>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-text-secondary">
                <div className="w-10">1/14</div>
                <div className="flex-1 h-8 relative mx-2">
                  <div className="absolute inset-y-0 left-[18%] right-[25%] bg-blue-500 rounded-full flex items-center justify-center group cursor-pointer hover:shadow-md transition-all">
                    <span className="text-white font-bold text-[10px] opacity-0 group-hover:opacity-100">7h 00m</span>
                  </div>
                  <span className="absolute left-[5%] top-1/2 -translate-y-1/2 text-[10px]">23:30</span>
                  <span className="absolute right-[10%] top-1/2 -translate-y-1/2 text-[10px]">06:30</span>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-text-secondary">
                <div className="w-10">1/13</div>
                <div className="flex-1 h-8 relative mx-2">
                  <div className="absolute inset-y-0 left-[12%] right-[22%] bg-blue-500 rounded-full flex items-center justify-center group cursor-pointer hover:shadow-md transition-all">
                    <span className="text-white font-bold text-[10px] opacity-0 group-hover:opacity-100">8h 00m</span>
                  </div>
                  <span className="absolute left-[0%] top-1/2 -translate-y-1/2 text-[10px]">22:45</span>
                  <span className="absolute right-[8%] top-1/2 -translate-y-1/2 text-[10px]">06:45</span>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-text-secondary">
                <div className="w-10">1/12</div>
                <div className="flex-1 h-8 relative mx-2">
                  <div className="absolute inset-y-0 left-[25%] right-[15%] bg-blue-500 rounded-full flex items-center justify-center group cursor-pointer hover:shadow-md transition-all">
                    <span className="text-white font-bold text-[10px] opacity-0 group-hover:opacity-100">7h 00m</span>
                  </div>
                  <span className="absolute left-[13%] top-1/2 -translate-y-1/2 text-[10px]">01:00</span>
                  <span className="absolute right-[2%] top-1/2 -translate-y-1/2 text-[10px]">08:00</span>
                </div>
              </div>
              
              <div className="flex justify-between pl-12 pr-2 mt-2 text-[10px] text-text-secondary font-medium">
                <span>22:00</span>
                <span>00:00</span>
                <span>02:00</span>
                <span>04:00</span>
                <span>06:00</span>
                <span>08:00</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card-white rounded-2xl p-6 shadow-sm border border-surface-border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-brand-navy">Restfulness &amp; Movement</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green"></div>
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Normal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange"></div>
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Frequent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Out of Bed</span>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-40">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full border-t border-dashed border-gray-100 h-0"></div>
                <div className="w-full border-t border-dashed border-gray-100 h-0"></div>
                <div className="w-full border-t border-dashed border-gray-100 h-0"></div>
                <div className="w-full border-b border-surface-border h-0"></div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-text-secondary font-medium pb-4">
                <span>15</span>
                <span>10</span>
                <span>5</span>
                <span>0</span>
              </div>
              <div className="absolute left-6 right-0 top-2 bottom-0 flex items-end justify-between px-2 pb-5">
                {[
                  {h: 20, c: 'bg-brand-green'}, {h: 15, c: 'bg-brand-green'}, {h: 40, c: 'bg-brand-orange'},
                  {h: 60, c: 'bg-red-500'}, {h: 30, c: 'bg-brand-green'}, {h: 18, c: 'bg-brand-green'},
                  {h: 12, c: 'bg-brand-green'}, {h: 38, c: 'bg-brand-orange'}, {h: 65, c: 'bg-blue-500'},
                  {h: 35, c: 'bg-brand-green'}, {h: 20, c: 'bg-brand-green'}, {h: 28, c: 'bg-brand-green'},
                  {h: 15, c: 'bg-brand-green'}, {h: 10, c: 'bg-brand-green'}, {h: 25, c: 'bg-brand-green'},
                  {h: 18, c: 'bg-brand-green'}, {h: 30, c: 'bg-brand-green'}, {h: 15, c: 'bg-brand-green'}
                ].map((item, i) => (
                  <div key={i} className={`w-3 ${item.c} rounded-t-sm`} style={{height: `${item.h}%`}}></div>
                ))}
              </div>
              <div className="absolute left-6 right-0 bottom-0 flex justify-between text-[10px] text-text-secondary pt-1">
                <span>22:00</span>
                <span>00:00</span>
                <span>02:00</span>
                <span>04:00</span>
                <span>06:00</span>
                <span>08:00</span>
              </div>
              <div className="absolute left-[45%] top-[10%] bg-blue-500 text-white text-[10px] px-2 py-1 rounded shadow-md transform -translate-x-1/2 pointer-events-none">
                02:00 Out of Bed (15m)
                <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-blue-500 transform -translate-x-1/2 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
