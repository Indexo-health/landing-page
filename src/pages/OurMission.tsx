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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
          <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors z-10"></div>
          <img
            alt="Peaceful bedroom environment for restful sleep monitoring"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            src="/images/hero-bedroom.jpg"
          />
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
        
        <div className="flex flex-col gap-6 lg:pl-8">
          <div className="w-12 h-1 bg-brand-teal rounded-full mb-2"></div>
          <h2 className="text-3xl font-bold text-brand-navy">{t('om.subtitle')}</h2>
          <p className="text-lg leading-relaxed text-brand-navy/80">
            {t('om.p1')}
          </p>
          <p className="text-lg leading-relaxed text-brand-navy/80">
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
