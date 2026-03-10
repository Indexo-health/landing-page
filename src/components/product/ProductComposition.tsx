import { useLanguage } from '../../contexts/LanguageContext';

const components = [
  { key: 'mat', icon: 'bed', img: '/images/product/cs03-components.png', imgFit: 'object-contain' as const },
  { key: 'ring', icon: 'ring_volume', img: '/images/product/spo2-ring-3d.png', imgFit: 'object-contain' as const },
];

export default function ProductComposition() {
  const { t } = useLanguage();

  return (
    <section id="overview" className="py-20 lg:py-28 bg-background-subtle">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">devices</span>
            {t('pp.comp.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('pp.comp.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('pp.comp.desc')}
          </p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {components.map((item) => (
            <div
              key={item.key}
              className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-6">
                <img
                  src={item.img}
                  alt={t(`pp.comp.${item.key}.title`)}
                  className={`w-full h-full ${item.imgFit} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{t(`pp.comp.${item.key}.title`)}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                {t(`pp.comp.${item.key}.desc`)}
              </p>

              {/* Pro badge for ring */}
              {item.key === 'ring' && (
                <span className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold w-fit">
                  <span className="material-symbols-outlined text-xs">star</span>
                  {t('pp.comp.ring.badge')}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
