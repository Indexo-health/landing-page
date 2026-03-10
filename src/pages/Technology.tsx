import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import TechHero from '../components/technology/TechHero';
import TechSectionNav from '../components/technology/TechSectionNav';
import SensingScience from '../components/technology/SensingScience';
import ClinicalValidation from '../components/technology/ClinicalValidation';
import SystemArchitecture from '../components/technology/SystemArchitecture';
import FutureEcosystem from '../components/technology/FutureEcosystem';

export default function Technology() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Technology — Indexo Health</title>
        <meta name="description" content="Discover the fiber optic BCG technology behind Indexo Health's medical-grade sleep and cardiovascular monitoring." />
        <link rel="canonical" href="https://indexo.health/technology" />
        <meta property="og:title" content="Technology — Indexo Health" />
        <meta property="og:description" content="FDA-validated fiber optic sensor technology for precision health monitoring." />
      </Helmet>

      <TechHero />
      <TechSectionNav />
      <SensingScience />
      <ClinicalValidation />
      <SystemArchitecture />
      <FutureEcosystem />

      {/* ── Bottom CTA ── */}
      <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 text-center">
          <span className="material-symbols-outlined text-brand-teal text-5xl mb-6">science</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('tech.cta.title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-8">
            {t('tech.cta.desc')}
          </p>
          <a
            href="/product"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20"
          >
            {t('tech.cta.btn')}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}
