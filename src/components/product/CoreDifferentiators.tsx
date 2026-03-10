import { useLanguage } from '../../contexts/LanguageContext';

const cards = [
  { key: 'd1', icon: 'sensors_off', bgClass: 'bg-brand-teal/10', textClass: 'text-brand-teal' },
  { key: 'd2', icon: 'verified', bgClass: 'bg-brand-navy/10', textClass: 'text-brand-navy' },
  { key: 'd3', icon: 'money_off', bgClass: 'bg-brand-orange/10', textClass: 'text-brand-orange' },
  { key: 'd4', icon: 'sync', bgClass: 'bg-brand-green/10', textClass: 'text-brand-green' },
];

export default function CoreDifferentiators() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-background-cool-gray">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('pp.diff.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('pp.diff.desc')}
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.key}
              className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-full ${card.bgClass} flex items-center justify-center mb-6 ${card.textClass} group-hover:bg-brand-navy group-hover:text-white transition-colors`}>
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                {t(`pp.diff.${card.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                {t(`pp.diff.${card.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
