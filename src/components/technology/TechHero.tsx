import { useLanguage } from '../../contexts/LanguageContext';

export default function TechHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-16 pb-0 lg:pt-24 lg:pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-white via-40% to-brand-navy/3 pointer-events-none" />

      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              {t('tech.hero.badge')}
            </span>

            {/* Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
                {t('tech.hero.title1')}
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-teal tracking-tight leading-tight">
                {t('tech.hero.title2')}
              </h1>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              {t('tech.hero.desc')}
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-semibold text-sm border border-brand-navy/10">
                <span className="material-symbols-outlined text-brand-teal text-lg">verified</span>
                {t('tech.hero.stat1')}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-semibold text-sm border border-brand-navy/10">
                <span className="material-symbols-outlined text-brand-teal text-lg">science</span>
                {t('tech.hero.stat2')}
              </span>
            </div>
          </div>

          {/* Right: Image + floating cards */}
          <div className="relative flex items-center justify-center pb-10 lg:pb-16">
            {/* Main image */}
            <div className="w-full rounded-[24px] overflow-hidden bg-white border border-surface-border shadow-card">
              <img
                src="/images/technology/fiber-optics-diagram.png"
                alt={t('tech.hero.badge')}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating card: bottom-right */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-2 md:-right-6 glass-card p-3 rounded-2xl animate-float max-w-[180px] shadow-soft-xl z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-teal text-lg">sensors</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy leading-tight">{t('tech.hero.float1.title')}</p>
                  <p className="text-[10px] text-text-secondary leading-snug">{t('tech.hero.float1.desc')}</p>
                </div>
              </div>
            </div>

            {/* Floating card: bottom-left */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-2 md:-left-6 glass-card p-3 rounded-2xl animate-float-delayed max-w-[180px] shadow-soft-xl z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-teal text-lg">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy leading-tight">{t('tech.hero.float2.title')}</p>
                  <p className="text-[10px] text-text-secondary leading-snug">{t('tech.hero.float2.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
