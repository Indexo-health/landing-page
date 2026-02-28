import { useLanguage } from '../contexts/LanguageContext';

export default function SleepOptimization() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 md:px-10 lg:px-20 relative overflow-hidden bg-background-app">
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[128px] pointer-events-none"></div>
      
      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 w-fit shadow-sm">
            <span className="material-symbols-outlined text-brand-teal text-sm">bedtime</span>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{t('so.badge')}</span>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy">
              {t('so.title1')}<span className="text-brand-teal relative inline-block">{t('so.title2')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                </svg>
              </span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[540px]">
              {t('so.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-teal/50 hover:shadow-card-hover transition-all group shadow-card w-full sm:w-auto h-full">
              <div className="p-2.5 rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors flex-shrink-0">
                <span className="material-symbols-outlined">vital_signs</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('so.card1.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('so.card1.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-teal/50 hover:shadow-card-hover transition-all group shadow-card w-full sm:w-auto h-full">
              <div className="p-2.5 rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors flex-shrink-0">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('so.card2.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('so.card2.desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20">
              <span>{t('so.btn1')}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-white border border-surface-border text-brand-navy font-bold hover:bg-surface-border/50 hover:border-brand-navy/20 transition-all">
              <span>{t('so.btn2')}</span>
            </button>
          </div>
        </div>
        
        <div className="relative w-full bg-card-white rounded-3xl border border-surface-border shadow-2xl overflow-hidden flex flex-col shadow-glow">
          <div className="px-8 py-6 border-b border-surface-border/50 flex justify-between items-start bg-white">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-text-secondary text-xs font-bold uppercase tracking-wider">Today's Recovery</span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20">RECHARGED</span>
              </div>
              <span className="text-brand-navy text-xl font-bold flex items-center gap-2 mt-1">
                Wednesday, Oct 24
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors" title="Calendar">
                <span className="material-symbols-outlined text-text-secondary text-xl">calendar_month</span>
              </div>
              <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors" title="Settings">
                <span className="material-symbols-outlined text-text-secondary text-xl">tune</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col gap-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center relative">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" fill="none" r="45" stroke="#f1f5f9" strokeWidth="8"></circle>
                    <circle className="drop-shadow-sm" cx="50" cy="50" fill="none" r="45" stroke="#00b8b0" strokeDasharray="283" strokeDashoffset="17" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-brand-navy">94</span>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider mt-1">RECOVERY</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-brand-navy">Fully Recovered</p>
                  <p className="text-xs text-text-secondary">Optimal recovery achieved</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 justify-center">
                <h4 className="text-xs font-bold text-text-secondary uppercase mb-1">Contributors</h4>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-surface-border/60 hover:border-brand-teal/30 transition-colors cursor-default group">
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary font-medium mb-0.5 group-hover:text-brand-teal transition-colors">HRV</span>
                    <span className="text-lg font-bold text-brand-navy">102 <span className="text-xs font-normal text-text-secondary">ms</span></span>
                  </div>
                  <div className="w-20 h-8">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 32">
                      <path d="M0 25 L 10 20 L 20 28 L 30 15 L 40 18 L 50 10 L 60 12 L 70 5 L 80 8" fill="none" stroke="#00b8b0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-surface-border/60 hover:border-brand-teal/30 transition-colors cursor-default group">
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary font-medium mb-0.5 group-hover:text-brand-teal transition-colors">Resting HR</span>
                    <span className="text-lg font-bold text-brand-navy">44 <span className="text-xs font-normal text-text-secondary">bpm</span></span>
                  </div>
                  <div className="w-20 h-8">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 32">
                      <path d="M0 10 L 10 12 L 20 8 L 30 15 L 40 12 L 50 20 L 60 18 L 70 25 L 80 22" fill="none" stroke="#00b8b0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-surface-border/60 hover:border-brand-teal/30 transition-colors cursor-default group">
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary font-medium mb-0.5 group-hover:text-brand-teal transition-colors">Sleep Perf.</span>
                    <span className="text-lg font-bold text-brand-navy">92%</span>
                  </div>
                  <div className="w-20 h-8">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 80 32">
                      <path d="M0 20 L 10 18 L 20 22 L 30 15 L 40 10 L 50 12 L 60 8 L 70 5 L 80 8" fill="none" stroke="#00b8b0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-text-secondary uppercase">7-Day Recovery Trend</h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  <span className="text-[10px] text-text-secondary">High Recovery</span>
                  <span className="w-2 h-2 rounded-full bg-brand-amber-soft ml-2"></span>
                  <span className="text-[10px] text-text-secondary">Low Recovery</span>
                </div>
              </div>
              
              <div className="h-32 w-full relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="w-full h-px border-t border-dashed border-gray-400"></div>
                  <div className="w-full h-px border-t border-dashed border-gray-400"></div>
                  <div className="w-full h-px border-t border-dashed border-gray-400"></div>
                </div>
                
                <div className="h-full w-full flex items-end justify-between px-2 gap-2">
                  {[
                    { day: 'M', val: 45, color: 'bg-brand-amber-soft/80', hover: 'group-hover:bg-brand-amber-soft' },
                    { day: 'T', val: 58, color: 'bg-brand-amber-soft/80', hover: 'group-hover:bg-brand-amber-soft' },
                    { day: 'W', val: 72, color: 'bg-brand-teal/40', hover: 'group-hover:bg-brand-teal/50' },
                    { day: 'T', val: 85, color: 'bg-brand-teal/60', hover: 'group-hover:bg-brand-teal/70' },
                    { day: 'F', val: 50, color: 'bg-brand-amber-soft/80', hover: 'group-hover:bg-brand-amber-soft' },
                    { day: 'S', val: 91, color: 'bg-brand-teal/80', hover: 'group-hover:bg-brand-teal/90' },
                  ].map((item, i) => (
                    <div key={i} className="group relative flex flex-col items-center justify-end w-full h-full cursor-pointer">
                      <div className={`w-full max-w-[24px] ${item.color} rounded-t-sm transition-all ${item.hover} relative`} style={{height: `${item.val}%`}}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">{item.val}%</div>
                      </div>
                      <span className="text-[10px] text-text-secondary font-medium mt-2">{item.day}</span>
                    </div>
                  ))}
                  <div className="group relative flex flex-col items-center justify-end w-full h-full cursor-pointer">
                    <div className="w-full max-w-[24px] bg-brand-teal h-[94%] rounded-t-sm shadow-md shadow-brand-teal/30 relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-navy rounded-full"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">94%</div>
                    </div>
                    <span className="text-[10px] text-brand-navy font-bold mt-2">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 border-t border-surface-border px-8 py-5 flex items-center gap-4 mt-auto">
            <div className="p-2.5 rounded-full bg-brand-teal/10 text-brand-teal flex-shrink-0">
              <span className="material-symbols-outlined text-lg">check_circle</span>
            </div>
            <div>
              <p className="text-brand-navy text-sm font-bold">Deep Recovery</p>
              <p className="text-text-secondary text-xs mt-0.5">Your body is fully recharged after a quality night of sleep.</p>
            </div>
            <div className="ml-auto">
              <span className="material-symbols-outlined text-gray-300 text-lg hover:text-brand-teal cursor-pointer transition-colors">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
