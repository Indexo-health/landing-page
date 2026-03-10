import { useLanguage } from '../../contexts/LanguageContext';

const steps = [
  { key: 's1', icon: 'king_bed', img: '/images/product/installation-diagram.png' },
  { key: 's2', icon: 'power', img: '/images/product/power-on-connect.jpg' },
  { key: 's3', icon: 'nightlight', img: '/images/product/product-angle-4.jpg' },
];

export default function InstallationGuide() {
  const { t } = useLanguage();

  return (
    <section id="setup" className="py-20 lg:py-28 bg-background-teal-tint">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">build</span>
            {t('pp.install.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('pp.install.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('pp.install.desc')}
          </p>
        </div>

        {/* 3-step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Dashed connector line (desktop only) */}
          <div className="hidden md:block absolute top-28 left-[20%] right-[20%] border-t-2 border-dashed border-brand-teal/30 z-0" />

          {steps.map((step, index) => (
            <div key={step.key} className="relative z-10 flex flex-col items-center text-center">
              {/* Step number */}
              <div className="w-14 h-14 rounded-full bg-brand-teal text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-brand-teal/20">
                {index + 1}
              </div>

              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-surface-border shadow-card mb-6">
                <img
                  src={step.img}
                  alt={t(`pp.install.${step.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-brand-teal text-xl">{step.icon}</span>
                <h3 className="text-lg font-bold text-brand-navy">
                  {t(`pp.install.${step.key}.title`)}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed max-w-[280px]">
                {t(`pp.install.${step.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
