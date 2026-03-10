import { useLanguage } from '../../contexts/LanguageContext';

const features = [
  {
    key: 'sleep',
    icon: 'bedtime',
    appImg: '/images/product/app-sleep.png',
    extraImg: '/images/product/app-regularity.png',
  },
  {
    key: 'recovery',
    icon: 'health_and_safety',
    appImg: '/images/product/app-recovery.png',
    extraImg: '/images/product/app-home-dashboard.png',
  },
  {
    key: 'heart',
    icon: 'monitor_heart',
    appImg: '/images/product/app-vitals.png',
    extraImg: '/images/product/app-care-hub.png',
  },
  {
    key: 'spo2',
    icon: 'spo2',
    appImg: '/images/product/app-spo2-trend.png',
    extraImg: '/images/product/app-apnea.png',
    isPro: true,
  },
];

export default function FeatureShowcase() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">insights</span>
            {t('pp.feat.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('pp.feat.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('pp.feat.desc')}
          </p>
        </div>

        {/* Feature blocks — alternating layout */}
        <div className="flex flex-col gap-28">
          {features.map((feat, index) => (
            <div
              key={feat.key}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Phone mockups — side by side, no overlap */}
              <div className={`flex justify-center gap-4 md:gap-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Primary phone */}
                <div className="w-[160px] md:w-[200px] lg:w-[220px] rounded-[28px] overflow-hidden shadow-2xl border-[5px] border-brand-navy/90 bg-black flex-shrink-0">
                  <img
                    src={feat.appImg}
                    alt={t(`pp.feat.${feat.key}.title`)}
                    className="w-full h-auto"
                  />
                </div>
                {/* Secondary phone */}
                <div className="w-[160px] md:w-[200px] lg:w-[220px] rounded-[28px] overflow-hidden shadow-xl border-[5px] border-gray-300/80 bg-black flex-shrink-0">
                  <img
                    src={feat.extraImg}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className={`flex flex-col gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {feat.isPro && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold w-fit">
                    <span className="material-symbols-outlined text-xs">star</span>
                    {t('pp.feat.proOnly')}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                    <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">{t(`pp.feat.${feat.key}.title`)}</h3>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {t(`pp.feat.${feat.key}.desc`)}
                </p>

                {/* Highlight points */}
                <ul className="flex flex-col gap-2.5 mt-2">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-brand-teal text-lg mt-0.5">check_circle</span>
                      <span className="text-sm text-text-secondary leading-relaxed">{t(`pp.feat.${feat.key}.p${n}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* App + Hardware callout */}
                <div className="mt-4 flex flex-col gap-3">
                  {/* App insight */}
                  <div className="p-4 rounded-2xl bg-background-teal-tint border border-brand-teal/15 flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-teal text-xl mt-0.5">smartphone</span>
                    <div>
                      <p className="text-sm font-bold text-brand-navy mb-0.5">{t(`pp.feat.${feat.key}.appTitle`)}</p>
                      <p className="text-xs text-text-secondary leading-relaxed">{t(`pp.feat.${feat.key}.appDesc`)}</p>
                    </div>
                  </div>
                  {/* Hardware connection */}
                  <div className="p-4 rounded-2xl bg-background-subtle border border-surface-border/60 flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-navy/70 text-xl mt-0.5">sensors</span>
                    <div>
                      <p className="text-sm font-bold text-brand-navy mb-0.5">{t(`pp.feat.${feat.key}.hwTitle`)}</p>
                      <p className="text-xs text-text-secondary leading-relaxed">{t(`pp.feat.${feat.key}.hwDesc`)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
