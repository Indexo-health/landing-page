import { useLanguage } from '../../contexts/LanguageContext';

const specRows = [
  'sensor', 'dimensions', 'thickness', 'weight', 'connectivity',
  'power', 'compatibility', 'ringBattery', 'certifications',
];

export default function TechSpecs() {
  const { t } = useLanguage();

  return (
    <section id="specs" className="py-20 lg:py-28 bg-background-cool-gray">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
            {t('pp.specs.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('pp.specs.title')}
          </h2>
        </div>

        {/* Specs table */}
        <div className="bg-white rounded-[24px] p-8 md:p-12 border border-surface-border shadow-card max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {specRows.map((key) => (
              <div key={key} className="flex justify-between py-4 border-b border-surface-border/60">
                <span className="text-sm text-text-secondary font-medium">{t(`pp.specs.${key}.label`)}</span>
                <span className="text-sm text-brand-navy font-bold text-right">{t(`pp.specs.${key}.value`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
