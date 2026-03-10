import { useLanguage } from '../../contexts/LanguageContext';

export default function BlogHero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-white via-50% to-brand-orange/5 z-0 pointer-events-none" />
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 relative z-10 text-center">
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs mb-6 border border-brand-teal/20">
          <span className="material-symbols-outlined text-sm">article</span>
          {t('blog.hero.badge')}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4 tracking-tight">
          {t('blog.hero.title')}
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          {t('blog.hero.desc')}
        </p>
      </div>
    </section>
  );
}
