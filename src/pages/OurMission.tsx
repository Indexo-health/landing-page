import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

export default function OurMission() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Our Mission — Indexo Health | Reinventing Sleep Care</title>
        <meta name="description" content="Indexo Health's mission is to make medical-grade sleep and cardiovascular monitoring accessible to everyone at home. We believe preventive health should be effortless, continuous, and non-invasive." />
        <link rel="canonical" href="https://indexo.health/mission" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indexo.health/mission" />
        <meta property="og:title" content="Our Mission — Indexo Health | Reinventing Sleep Care" />
        <meta property="og:description" content="Making medical-grade sleep and cardiovascular monitoring accessible to everyone at home. Preventive health should be effortless and non-invasive." />
        <meta property="og:image" content="https://indexo.health/images/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Mission — Indexo Health | Reinventing Sleep Care" />
        <meta name="twitter:description" content="Making medical-grade sleep monitoring accessible at home. Preventive health should be effortless and non-invasive." />
      </Helmet>
    <section className="relative w-full py-20 lg:py-28 px-4 md:px-10 lg:px-20 max-w-[1280px] mx-auto bg-white">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy mb-6">
          {t('om.title1')}<br className="hidden md:block" />
          <span className="text-brand-teal relative inline-block">
            {t('om.title2')}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30" preserveAspectRatio="none" viewBox="0 0 100 10">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
            </svg>
          </span>.
        </h1>
      </div>
      
      <div className="mb-24">
        <div className="relative rounded-[24px] overflow-hidden shadow-2xl group mb-16">
          <img
            alt="Indexo Health mission — silent health monitoring protecting sleep"
            className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
            src="/images/Our_mission_compressed.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px]">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-brand-teal text-xl">nightlight</span>
              <span className="text-xs font-bold text-brand-navy uppercase">{t('om.badge')}</span>
            </div>
            <div className="h-1 w-full bg-surface-border rounded-full overflow-hidden">
              <div className="h-full bg-brand-teal w-2/3"></div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-1 bg-brand-teal rounded-full mb-6 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 tracking-tight">{t('om.subtitle')}</h2>
          <p className="text-lg leading-relaxed text-text-secondary mb-4">
            {t('om.p1')}
          </p>
          <p className="text-lg leading-relaxed text-text-secondary">
            {t('om.p2')}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-background-app p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300 border border-surface-border group">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal mb-6 shadow-sm group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">timeline</span>
          </div>
          <h3 className="text-xl font-bold text-brand-navy mb-3">{t('om.card1.title')}</h3>
          <p className="text-text-secondary leading-relaxed">
            {t('om.card1.desc')}
          </p>
        </div>
        
        <div className="bg-background-app p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300 border border-surface-border group">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal mb-6 shadow-sm group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">bedtime_off</span>
          </div>
          <h3 className="text-xl font-bold text-brand-navy mb-3">{t('om.card2.title')}</h3>
          <p className="text-text-secondary leading-relaxed">
            {t('om.card2.desc')}
          </p>
        </div>
        
        <div className="bg-background-app p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300 border border-surface-border group">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal mb-6 shadow-sm group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">diversity_1</span>
          </div>
          <h3 className="text-xl font-bold text-brand-navy mb-3">{t('om.card3.title')}</h3>
          <p className="text-text-secondary leading-relaxed">
            {t('om.card3.desc')}
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
