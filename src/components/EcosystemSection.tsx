import { useLanguage } from '../contexts/LanguageContext';

export default function EcosystemSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-background-subtle py-20 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('hiw.eco.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('hiw.eco.desc')}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-card border border-surface-border overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-surface-border">
            <div className="p-8 md:p-12 md:border-r border-surface-border flex flex-col items-center">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group shadow-lg">
                <img alt={t('hiw.eco.sensor.title')} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/sensor_under_mattress.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full text-center">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-brand-navy px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm border border-surface-border">
                    {t('hiw.eco.sensor.badge')}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{t('hiw.eco.sensor.title')}</h3>
              <p className="text-text-secondary text-center text-sm">
                {t('hiw.eco.sensor.desc')}
              </p>
            </div>

            <div className="p-8 md:p-12 flex flex-col items-center bg-background-subtle/50">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-brand-cream flex items-center justify-center group shadow-lg border border-surface-border">
                <img alt={t('hiw.eco.ring.title')} className="w-2/3 h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="/images/SpO2_ring_on_finger.JPG" />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full text-center">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-brand-teal px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm border border-brand-teal/20">
                    {t('hiw.eco.ring.badge')}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{t('hiw.eco.ring.title')}</h3>
              <p className="text-text-secondary text-center text-sm">
                {t('hiw.eco.ring.desc')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 md:border-r border-surface-border bg-white relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-text-secondary">
                  <span className="material-symbols-outlined">bed</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy">{t('hiw.eco.std.title')}</h4>
                  <p className="text-xs text-text-secondary font-medium uppercase tracking-wide">{t('hiw.eco.std.badge')}</p>
                </div>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal shrink-0 mt-0.5">monitor_heart</span>
                  <div>
                    <span className="block text-sm font-semibold text-brand-navy">{t('hiw.eco.std.f1.title')}</span>
                    <span className="text-xs text-text-secondary">{t('hiw.eco.std.f1.desc')}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal shrink-0 mt-0.5">air</span>
                  <div>
                    <span className="block text-sm font-semibold text-brand-navy">{t('hiw.eco.std.f2.title')}</span>
                    <span className="text-xs text-text-secondary">{t('hiw.eco.std.f2.desc')}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal shrink-0 mt-0.5">battery_charging_full</span>
                  <div>
                    <span className="block text-sm font-semibold text-brand-navy">{t('hiw.eco.std.f3.title')}</span>
                    <span className="text-xs text-text-secondary">{t('hiw.eco.std.f3.desc')}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal shrink-0 mt-0.5">night_shelter</span>
                  <div>
                    <span className="block text-sm font-semibold text-brand-navy">{t('hiw.eco.std.f4.title')}</span>
                    <span className="text-xs text-text-secondary">{t('hiw.eco.std.f4.desc')}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 md:p-12 bg-background-teal-tint relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal-light/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal-light flex items-center justify-center text-brand-teal">
                    <span className="material-symbols-outlined">medical_services</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy">{t('hiw.eco.enh.title')}</h4>
                    <p className="text-xs text-brand-teal font-bold uppercase tracking-wide">{t('hiw.eco.enh.badge')}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-surface-border mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] md:text-xs font-bold text-brand-teal uppercase tracking-wider">{t('hiw.eco.enh.unlock')}</span>
                    <span className="material-symbols-outlined text-brand-teal text-lg">lock_open</span>
                  </div>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-brand-teal shrink-0 mt-0.5">bloodtype</span>
                      <div>
                        <span className="block text-sm font-bold text-brand-navy">{t('hiw.eco.enh.f1.title')}</span>
                        <span className="text-xs text-text-secondary">{t('hiw.eco.enh.f1.desc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-brand-teal shrink-0 mt-0.5">warning_amber</span>
                      <div>
                        <span className="block text-sm font-bold text-brand-navy">{t('hiw.eco.enh.f2.title')}</span>
                        <span className="text-xs text-text-secondary">{t('hiw.eco.enh.f2.desc')}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-text-secondary bg-gray-100 py-3 px-4 rounded-xl border border-surface-border border-dashed">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  <span>{t('hiw.eco.enh.includes')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-xs text-text-secondary/60 italic leading-relaxed">
            {t('hiw.eco.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}
