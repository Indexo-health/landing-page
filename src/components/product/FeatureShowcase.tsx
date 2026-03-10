import { useLanguage } from '../../contexts/LanguageContext';

const features = [
  {
    key: 'sleep',
    icon: 'bedtime',
    appImg: '/images/product/app-sleep.png',
  },
  {
    key: 'recovery',
    icon: 'health_and_safety',
    appImg: '/images/product/app-recovery.png',
  },
  {
    key: 'heart',
    icon: 'monitor_heart',
    appImg: '/images/product/app-vitals.png',
  },
  {
    key: 'spo2',
    icon: 'spo2',
    appImg: '/images/product/app-spo2-trend.png',
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

        {/* Feature blocks — alternating layout, single phone */}
        <div className="flex flex-col gap-24">
          {features.map((feat, index) => (
            <div
              key={feat.key}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Single phone mockup */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-[200px] md:w-[240px] lg:w-[260px] rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-brand-navy/90 bg-black">
                  <img
                    src={feat.appImg}
                    alt={t(`pp.feat.${feat.key}.title`)}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Text content — streamlined */}
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
                <p className="text-text-secondary text-base leading-relaxed">
                  {t(`pp.feat.${feat.key}.desc`)}
                </p>

                {/* Highlight points */}
                <ul className="flex flex-col gap-2 mt-1">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-brand-teal text-lg mt-0.5">check_circle</span>
                      <span className="text-sm text-text-secondary leading-relaxed">{t(`pp.feat.${feat.key}.p${n}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* App insight callout only — no "How It Works" */}
                <div className="mt-3 p-4 rounded-2xl bg-background-teal-tint border border-brand-teal/15 flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal text-xl mt-0.5">smartphone</span>
                  <div>
                    <p className="text-sm font-bold text-brand-navy mb-0.5">{t(`pp.feat.${feat.key}.appTitle`)}</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{t(`pp.feat.${feat.key}.appDesc`)}</p>
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
