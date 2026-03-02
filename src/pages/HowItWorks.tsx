import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import EcosystemSection from '../components/EcosystemSection';
import InsightsSection from '../components/InsightsSection';
import HowToUseSection from '../components/HowToUseSection';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>How It Works — Indexo Health | Effortless Sleep & Health Monitoring</title>
        <meta name="description" content="Discover how Indexo Health's contactless sensor monitors your sleep, breathing, and cardiovascular health every night. Setup in minutes, results by morning — no wearables, no discomfort." />
        <link rel="canonical" href="https://indexo.health/how-it-works" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indexo.health/how-it-works" />
        <meta property="og:title" content="How It Works — Indexo Health | Effortless Sleep & Health Monitoring" />
        <meta property="og:description" content="Contactless sensor monitors your sleep, breathing, and cardiovascular health every night. Setup in minutes, results by morning." />
        <meta property="og:image" content="https://indexo.health/images/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How It Works — Indexo Health" />
        <meta name="twitter:description" content="Contactless sleep and cardiovascular monitoring. Setup in minutes, results by morning — no wearables, no discomfort." />
      </Helmet>
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-0 lg:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 via-white via-40% to-orange-200 z-0 pointer-events-none"></div>
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">

            {/* Left: text content */}
            <div className="w-full lg:w-5/12 flex flex-col items-start text-left relative z-20 pb-8 lg:pb-16">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs mb-8 border border-brand-teal/20 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shadow-[0_0_8px_rgba(0,196,167,0.6)]"></span>
                {t('hiw.hero.badge')}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold mb-6 text-brand-navy leading-[1.05] tracking-tight">
                {t('hiw.hero.title1')}<br />
                <span className="text-brand-teal relative inline-block">
                  {t('hiw.hero.title2')}
                  <svg className="absolute w-full h-3 bottom-1 left-0 text-brand-teal/20 -z-10" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-lg mb-10 leading-relaxed font-medium">
                {t('hiw.hero.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-surface-border shadow-sm hover:shadow-md transition-shadow cursor-default ring-1 ring-white/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(46,204,113,0.6)] animate-pulse"></span>
                  <span className="text-sm font-bold text-brand-navy">{t('hiw.hero.status')}</span>
                </div>
                <a className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-brand-navy font-bold text-sm hover:text-brand-teal transition-colors group" href="#how-to-use">
                  {t('hiw.hero.link')}
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Right: hero image — landscape 2624×1632, fill column width */}
            <div className="w-full lg:w-7/12 relative">
              <div className="relative w-full">
                <img
                  alt="Indexo Health medical team reviewing sleep monitoring data with patient"
                  className="w-full h-auto object-contain"
                  src="/images/How_it_works_hero_nobg.png"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  }}
                />

                {/* Floating card — top-right */}
                <div className="absolute top-[8%] right-[4%] glass-card p-3 rounded-2xl animate-float z-30 max-w-[200px] ring-1 ring-white/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center text-white shadow-lg shrink-0">
                      <span className="material-symbols-outlined text-base">notifications_active</span>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-text-secondary tracking-wider mb-0.5">{t('hiw.hero.notif.title')}</p>
                      <p className="text-xs font-bold text-brand-navy leading-tight">{t('hiw.hero.notif.desc')}</p>
                    </div>
                  </div>
                </div>

                {/* Floating card — bottom-left */}
                <div className="absolute bottom-[18%] left-[3%] glass-card p-3 rounded-2xl animate-float-delayed z-30 max-w-[210px] ring-1 ring-white/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center text-white shadow-lg shrink-0 relative">
                      <span className="material-symbols-outlined text-base">verified_user</span>
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-green border-2 border-white rounded-full shadow-sm"></span>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-text-secondary tracking-wider mb-0.5">{t('hiw.hero.service.title')}</p>
                      <p className="text-xs font-bold text-brand-navy leading-tight">{t('hiw.hero.service.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <EcosystemSection />
      <HowToUseSection />
      <InsightsSection />

      {/* CTA Section */}
      <section className="bg-brand-navy text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[length:20px_20px] opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-teal/20 via-brand-navy to-brand-navy pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('hiw.cta.title')}</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">{t('hiw.cta.desc')}</p>
          <button className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-brand-teal text-brand-navy font-bold text-lg hover:bg-brand-teal/90 hover:scale-105 transition-all shadow-glow hover:shadow-btn-glow">
            {t('hiw.cta.btn')}
          </button>
        </div>
      </section>
    </div>
    </>
  );
}
