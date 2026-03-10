import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ProductHero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white pt-16 pb-0 lg:pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-white via-50% to-brand-orange/5 z-0 pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          {/* Left: text content */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left relative z-20 pb-8 lg:pb-16">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-6">
              <span className="material-symbols-outlined text-sm">monitor_heart</span>
              {t('pp.hero.badge')}
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 text-brand-navy leading-[1.08] tracking-tight">
              {t('pp.hero.title1')}
              <br />
              <span className="text-brand-teal relative inline-block">
                {t('pp.hero.title2')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-[480px]">
              {t('pp.hero.desc')}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['pp.hero.trust1', 'pp.hero.trust2', 'pp.hero.trust3'].map((key) => (
                <span key={key} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-surface-border text-xs font-semibold text-brand-navy">
                  <span className="material-symbols-outlined text-brand-teal text-sm">check_circle</span>
                  {t(key)}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#buy"
                className="flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20"
              >
                {t('pp.hero.cta')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <Link
                to="/how-it-works"
                className="flex items-center gap-2 h-12 px-8 rounded-full bg-white border border-surface-border text-brand-navy font-bold hover:bg-surface-border/50 transition-all"
              >
                {t('pp.hero.ctaSecondary')}
              </Link>
            </div>
          </div>

          {/* Right: product image */}
          <div className="w-full lg:w-7/12 relative">
            <img
              src="/images/product/hero-sleep-mat.jpg"
              alt={t('pp.hero.imgAlt')}
              className="w-full h-auto object-contain self-start"
            />

            {/* Floating glass cards */}
            <div className="hidden lg:flex absolute top-8 right-0 glass-card p-3 rounded-xl items-center gap-3 animate-float">
              <div className="p-2 rounded-full bg-brand-teal/10">
                <span className="material-symbols-outlined text-brand-teal text-xl">sensors</span>
              </div>
              <div>
                <p className="text-xs font-bold text-brand-navy">{t('pp.hero.float1Title')}</p>
                <p className="text-[10px] text-text-secondary">{t('pp.hero.float1Desc')}</p>
              </div>
            </div>

            <div className="hidden lg:flex absolute bottom-16 left-0 glass-card p-3 rounded-xl items-center gap-3 animate-float-delayed">
              <div className="p-2 rounded-full bg-brand-orange/10">
                <span className="material-symbols-outlined text-brand-orange text-xl">nightlight</span>
              </div>
              <div>
                <p className="text-xs font-bold text-brand-navy">{t('pp.hero.float2Title')}</p>
                <p className="text-[10px] text-text-secondary">{t('pp.hero.float2Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
