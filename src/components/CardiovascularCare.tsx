import { useLanguage } from '../contexts/LanguageContext';

export default function CardiovascularCare() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 md:px-10 lg:px-20 relative overflow-hidden bg-background-app">
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[128px] pointer-events-none"></div>
      
      <div className="w-full max-w-[1380px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-teal/20 w-fit shadow-sm">
            <span className="material-symbols-outlined text-brand-teal text-sm">monitor_heart</span>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{t('cc.badge')}</span>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy">
              {t('cc.title1')}<span className="text-brand-teal relative inline-block">{t('cc.title2')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                </svg>
              </span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[540px]">
              {t('cc.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-teal/50 hover:shadow-card-hover transition-all group shadow-card">
              <div className="p-2.5 rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('cc.card1.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('cc.card1.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-surface-border hover:border-brand-orange/50 hover:shadow-card-hover transition-all group shadow-card">
              <div className="p-2.5 rounded-full bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">notification_important</span>
              </div>
              <div>
                <h3 className="text-brand-navy font-bold mb-1 text-lg">{t('cc.card2.title')}</h3>
                <p className="text-sm text-text-secondary leading-snug">{t('cc.card2.desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20">
              <span>View Detailed Report</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-white border border-surface-border text-brand-navy font-bold hover:bg-surface-border/50 hover:border-brand-navy/20 transition-all">
              <span>Learn Methodology</span>
            </button>
          </div>
        </div>
        
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[760px] bg-card-white rounded-3xl border border-surface-border shadow-2xl overflow-hidden flex flex-col scale-105 origin-left-top lg:origin-center">
          <div className="px-8 py-6 border-b border-surface-border/50 flex justify-between items-start bg-white shrink-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-text-secondary text-xs font-bold uppercase tracking-wider">Long-term Analysis</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-navy/10 text-brand-navy border border-brand-navy/20 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">history</span>
                  30-DAY VIEW
                </span>
              </div>
              <span className="text-brand-navy text-2xl font-bold flex items-center gap-2">
                Baseline Comparison
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-text-secondary">settings</span>
              </div>
              <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-text-secondary">more_horiz</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-8 flex flex-col gap-6 relative bg-white overflow-hidden">
            <div className="grid grid-cols-3 gap-4 z-10 shrink-0">
              <div className="flex flex-col p-4 rounded-2xl bg-gray-50 border border-surface-border/60">
                <span className="text-text-secondary text-xs font-semibold mb-1 truncate">Nightly Heart Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-navy">72</span>
                  <span className="text-sm font-bold text-text-secondary">BPM</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <span className="text-xs text-text-secondary">Base: 58</span>
                  <span className="flex items-center gap-0.5 text-xs font-bold text-brand-orange">
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                    +15%
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col p-4 rounded-2xl bg-gray-50 border border-surface-border/60">
                <span className="text-text-secondary text-xs font-semibold mb-1 truncate">Nightly Resp. Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-navy">14</span>
                  <span className="text-sm font-bold text-text-secondary">BrPM</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <span className="text-xs text-text-secondary">Base: 14</span>
                  <span className="flex items-center gap-0.5 text-xs font-bold text-brand-green">
                    <span className="material-symbols-outlined text-xs">check</span>
                    Stable
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col p-4 rounded-2xl bg-gray-50 border border-surface-border/60">
                <span className="text-text-secondary text-xs font-semibold mb-1 truncate">Central AHI</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-navy">4.2</span>
                  <span className="text-sm font-bold text-text-secondary">Events/h</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <span className="text-xs text-text-secondary">Base: 3.8</span>
                  <span className="flex items-center gap-0.5 text-xs font-bold text-brand-teal">
                    <span className="material-symbols-outlined text-xs">arrow_right_alt</span>
                    ~0.4
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative mt-6 h-full min-h-[220px] flex items-end">
              <div className="flex flex-col justify-between h-full text-[10px] text-gray-400 font-medium pb-6 pr-2">
                <span>80</span>
                <span>75</span>
                <span>70</span>
                <span>65</span>
                <span>60</span>
              </div>
              <div className="flex-1 h-full relative pl-2 border-l border-gray-100">
                <div className="absolute inset-0 flex flex-col justify-between h-[85%]">
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                  <div className="w-full border-t border-dashed border-gray-100"></div>
                </div>
                <div className="absolute w-full border-t border-dashed border-slate-400 top-[75%] z-0"></div>
                <div className="absolute right-0 top-[72%] text-[10px] text-slate-400 font-medium bg-white px-1 z-10">Base 60</div>
                
                <div className="relative z-10 w-full h-full flex items-end justify-between px-1 pb-6 gap-[4px]">
                  {[25, 28, 22, 26, 30, 24, 27, 29, 25, 23, 32, 26, 28, 24, 30, 27, 25, 29, 23, 34, 26, 28, 24, 31, 27, 25, 29].map((h, i) => (
                    <div key={i} className="w-full bg-slate-200 rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{height: `${h}%`}}></div>
                  ))}
                  <div className="relative w-full h-full flex items-end group cursor-pointer">
                    <div className="w-full bg-gradient-to-t from-brand-orange to-red-500 rounded-t-sm h-[60%] shadow-lg shadow-brand-orange/20"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-[10px] text-gray-400 font-medium">
                  <span>30 days ago</span>
                  <span>15 days ago</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-6 py-4 flex items-center gap-4 mt-auto shrink-0 z-10 shadow-sm min-h-[80px]">
              <div className="p-2 rounded-full bg-white shadow-sm text-brand-orange flex-shrink-0">
                <span className="material-symbols-outlined text-lg">lightbulb</span>
              </div>
              <div className="flex-1">
                <p className="text-brand-navy/80 text-sm font-medium">Today's data has significantly deviated from the past 30-day stable range.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
