import { useLanguage } from '../../contexts/LanguageContext';

const connectivity = [
  { key: 'ble', icon: 'bluetooth' },
  { key: 'wifi', icon: 'wifi' },
  { key: 'esim', icon: 'sim_card' },
];

export default function SystemArchitecture() {
  const { t } = useLanguage();

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">developer_board</span>
            {t('tech.arch.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('tech.arch.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('tech.arch.desc')}
          </p>
        </div>

        {/* Connectivity cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {connectivity.map((item) => (
            <div
              key={item.key}
              className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                {t(`tech.arch.${item.key}.title`)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t(`tech.arch.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* SpO2 Ring card */}
        <div className="bg-white rounded-[24px] border border-surface-border shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="bg-gray-50 flex items-center justify-center p-8">
              <img
                src="/images/product/ring-spo2.jpg"
                alt={t('tech.arch.ring.title')}
                className="max-h-[320px] object-contain rounded-2xl"
              />
            </div>
            {/* Text */}
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs w-fit mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
                </span>
                Add-on Device
              </span>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">{t('tech.arch.ring.title')}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">{t('tech.arch.ring.desc')}</p>
              <ul className="flex flex-col gap-3">
                {['p1', 'p2', 'p3'].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-brand-teal text-lg mt-0.5 flex-shrink-0">check_circle</span>
                    <span className="text-sm text-brand-navy font-medium">{t(`tech.arch.ring.${p}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
