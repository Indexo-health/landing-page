import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 md:px-10 lg:px-20 relative overflow-hidden bg-background-app">
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[128px] pointer-events-none"></div>
      
      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center z-10">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 w-fit shadow-sm">
            <span className="material-symbols-outlined text-brand-teal text-sm">home_health</span>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{t('hm.badge')}</span>
          </div>
          
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy">
              {t('hm.title1')}<span className="text-brand-teal relative inline-block">{t('hm.title2')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                </svg>
              </span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[540px]">
              {t('hm.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-teal/50 hover:shadow-card-hover transition-all group shadow-card">
              <div className="p-2.5 rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('hm.card1.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('hm.card1.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-orange/50 hover:shadow-card-hover transition-all group shadow-card">
              <div className="p-2.5 rounded-full bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">notifications_active</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('hm.card2.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('hm.card2.desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20">
              <span>{t('hm.btn1')}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-white border border-surface-border text-brand-navy font-bold hover:bg-surface-border/50 hover:border-brand-navy/20 transition-all">
              <span>{t('hm.btn2')}</span>
            </button>
          </div>
        </div>
        
        <div className="relative w-full aspect-auto lg:h-[850px] bg-card-white rounded-3xl border border-surface-border shadow-2xl overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-surface-border/50 flex justify-between items-center bg-white shrink-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-text-secondary text-xs font-bold uppercase tracking-wider">Tonight vs 30-Day Avg</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-teal/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-teal"></div>
                  <span className="ml-2 text-[10px] font-bold text-brand-teal">BASELINE ON</span>
                </label>
              </div>
              <span className="text-brand-navy text-2xl font-bold flex items-center gap-2">
                October 24
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-text-secondary">calendar_today</span>
              </div>
              <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-text-secondary">more_horiz</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6 md:p-6 flex flex-col gap-4 relative bg-white overflow-hidden">
            <div className="grid grid-cols-2 gap-2 z-10 shrink-0">
              <div className="flex flex-col p-2.5 rounded-xl bg-gray-50 border border-surface-border/60">
                <div className="flex justify-between items-start mb-0.5">
                  <span className="text-text-secondary text-[10px] font-semibold uppercase tracking-wider">AHI Score</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-gray-200 text-gray-600">MODERATE</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-brand-navy">18.4</span>
                  <span className="text-[9px] text-text-secondary font-medium">/hr</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-xs text-brand-danger" style={{fontSize: '12px'}}>trending_up</span>
                  <span className="text-[9px] font-bold text-brand-danger">+2.1 vs Avg</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full bg-brand-orange w-[60%] rounded-full"></div>
                </div>
              </div>
              
              <div className="flex flex-col p-2.5 rounded-xl bg-gray-50 border border-surface-border/60">
                <div className="flex justify-between items-start mb-0.5">
                  <span className="text-text-secondary text-[10px] font-semibold uppercase tracking-wider">Min SpO2</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-brand-danger/10 text-brand-danger">LOW</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-brand-navy">88</span>
                  <span className="text-[9px] text-text-secondary font-medium">%</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-xs text-brand-danger" style={{fontSize: '12px'}}>trending_down</span>
                  <span className="text-[9px] font-bold text-brand-danger">-4% vs Avg</span>
                </div>
              </div>
              
              <div className="flex flex-col p-2.5 rounded-xl bg-gray-50 border border-surface-border/60">
                <div className="flex justify-between items-start mb-0.5">
                  <span className="text-text-secondary text-[10px] font-semibold uppercase tracking-wider">T90 Duration</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-brand-danger text-white">ALERT</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-brand-navy">15</span>
                  <span className="text-[9px] text-text-secondary font-medium">min</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-xs text-brand-danger" style={{fontSize: '12px'}}>arrow_upward</span>
                  <span className="text-[9px] font-bold text-brand-danger">+5 min vs Avg</span>
                </div>
              </div>
              
              <div className="flex flex-col p-2.5 rounded-xl bg-gray-50 border border-surface-border/60">
                <div className="flex justify-between items-start mb-0.5">
                  <span className="text-text-secondary text-[10px] font-semibold uppercase tracking-wider">Desat &gt;30s</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-gray-200 text-gray-600">NORMAL</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-brand-navy">2</span>
                  <span className="text-[9px] text-text-secondary font-medium">events</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-xs text-brand-green" style={{fontSize: '12px'}}>remove</span>
                  <span className="text-[9px] font-bold text-brand-green">Same as Avg</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-h-[350px] flex flex-col gap-2 relative mt-4 bg-white rounded-xl border border-surface-border/30 p-4 shadow-sm">
              <div className="flex justify-between items-center px-1">
                <h4 className="text-sm font-bold text-brand-navy">30-Day AHI Trend vs. Baseline</h4>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-text-secondary font-medium">Unit: events/hr</span>
                </div>
              </div>
              
              <div className="relative w-full h-full pt-8 pb-4 flex flex-col justify-end">
                <div className="absolute left-0 top-0 h-full w-full pointer-events-none flex flex-col justify-between text-[9px] text-text-secondary/50 font-mono pr-2 pb-8 z-0">
                  <div className="border-t border-dashed border-surface-border w-full h-0"></div>
                  <div className="border-t border-dashed border-surface-border w-full h-0"></div>
                  <div className="border-t border-dashed border-surface-border w-full h-0"></div>
                  <div className="border-t border-dashed border-surface-border w-full h-0"></div>
                </div>
                
                <div className="absolute left-0 right-0 top-[65%] border-t-2 border-dashed border-brand-teal/40 w-full z-10 flex items-center">
                  <span className="absolute right-0 -top-5 text-[10px] font-bold text-brand-teal bg-white/90 px-1 backdrop-blur-sm rounded">Baseline: 5.2</span>
                </div>
                
                <div className="flex-1 flex items-end justify-between gap-[2px] md:gap-1 px-1 relative z-10 h-full">
                  {[15, 25, 18, 30, 22, 16, 20, 35, 24, 18, 14, 26, 40, 20, 16, 18, 30, 24, 19, 28, 15, 26, 18, 30, 22, 16, 20, 35, 24].map((h, i) => (
                    <div key={i} className="w-full bg-gray-100 hover:bg-brand-teal/30 rounded-t-[2px] transition-all duration-300" style={{height: `${h}%`}}></div>
                  ))}
                  <div className="w-full bg-brand-orange rounded-t-[2px] h-[85%] relative group cursor-pointer shadow-md hover:brightness-110 transition-all duration-300">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap z-20">
                      18.4
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-navy rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between text-[10px] text-text-secondary font-medium px-1 mt-0">
                <span>30 Days Ago</span>
                <span>15 Days Ago</span>
                <span className="text-brand-orange font-bold">Today</span>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-surface-border rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors shrink-0">
              <div className="p-2 rounded-full bg-brand-danger/10 text-brand-danger flex-shrink-0 animate-pulse">
                <span className="material-symbols-outlined text-base">warning</span>
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-brand-navy text-xs font-bold truncate">Anomaly Detected</p>
                <p className="text-text-secondary text-[10px] mt-0.5 truncate">Significant O2 drop detected at 3:15 AM.</p>
              </div>
              <div className="ml-auto">
                <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
