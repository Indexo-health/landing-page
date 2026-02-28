import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

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

      {/* Hardware Section */}
      <section className="py-20 lg:py-28 relative z-30 px-4 md:px-10 lg:px-16 mb-0 bg-white">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfcfc_100%)] rounded-[24px] border border-surface-border p-8 flex flex-col items-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 shadow-card group overflow-hidden relative ring-1 ring-surface-border/50">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-navy to-brand-teal opacity-80"></div>
              <div className="relative w-full h-72 mb-8 rounded-2xl overflow-hidden bg-background-subtle flex items-center justify-center border border-surface-border/50 shadow-inner">
                <img alt="Indexo Health under-mattress fiber optic sleep sensor placed beneath mattress" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/sensor_under_mattress.jpg" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="text-brand-teal font-bold text-xs uppercase tracking-widest bg-white/95 px-5 py-2 rounded-full backdrop-blur-xl border border-brand-teal/20 shadow-sm">{t('hiw.hw1.badge')}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-brand-navy">{t('hiw.hw1.title')}</h3>
              <p className="text-text-secondary text-center text-sm mb-8 flex-grow max-w-sm mx-auto leading-relaxed">{t('hiw.hw1.desc')}</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-1.5 bg-background-subtle rounded-full text-xs font-semibold text-brand-navy border border-surface-border/80 shadow-sm">{t('hiw.hw1.tag1')}</span>
                <span className="px-4 py-1.5 bg-background-subtle rounded-full text-xs font-semibold text-brand-navy border border-surface-border/80 shadow-sm">{t('hiw.hw1.tag2')}</span>
                <span className="px-4 py-1.5 bg-background-subtle rounded-full text-xs font-semibold text-brand-navy border border-surface-border/80 shadow-sm">{t('hiw.hw1.tag3')}</span>
              </div>
            </div>
            <div className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfcfc_100%)] rounded-[24px] border border-surface-border p-8 flex flex-col items-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 shadow-card group overflow-hidden relative ring-1 ring-surface-border/50">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-teal to-brand-peach opacity-80"></div>
              <div className="relative w-full h-72 mb-8 rounded-2xl overflow-hidden bg-background-subtle flex items-center justify-center border border-surface-border/50 shadow-inner">
                <img alt="Indexo Health SpO2 pulse oximetry ring sensor worn on finger during sleep" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/SpO2_ring_on_finger.JPG" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span className="text-brand-orange font-bold text-xs uppercase tracking-widest bg-white/95 px-5 py-2 rounded-full backdrop-blur-xl border border-brand-orange/20 shadow-sm">{t('hiw.hw2.badge')}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-brand-navy">{t('hiw.hw2.title')}</h3>
              <p className="text-text-secondary text-center text-sm mb-8 flex-grow max-w-sm mx-auto leading-relaxed">{t('hiw.hw2.desc')}</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-1.5 bg-background-subtle rounded-full text-xs font-semibold text-brand-navy border border-surface-border/80 shadow-sm">{t('hiw.hw2.tag1')}</span>
                <span className="px-4 py-1.5 bg-background-subtle rounded-full text-xs font-semibold text-brand-navy border border-surface-border/80 shadow-sm">{t('hiw.hw2.tag2')}</span>
                <span className="px-4 py-1.5 bg-background-subtle rounded-full text-xs font-semibold text-brand-navy border border-surface-border/80 shadow-sm">{t('hiw.hw2.tag3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section className="py-20 lg:py-28 bg-background-cool-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,191,165,0.03),transparent_40%)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-teal-light/20 to-transparent pointer-events-none"></div>
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-5/12 relative z-10">
              <span className="text-brand-teal font-bold uppercase tracking-wider text-xs mb-3 block">{t('hiw.net.badge')}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">{t('hiw.net.title')}</h2>
              <p className="text-text-secondary leading-relaxed mb-10 text-lg">
                {t('hiw.net.desc')}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 bg-white rounded-[24px] border border-surface-border shadow-sm hover:border-brand-teal/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/10 text-brand-teal shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">cell_tower</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg mb-1">{t('hiw.net.f1.title')}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{t('hiw.net.f1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-white rounded-[24px] border border-surface-border shadow-sm hover:border-brand-teal/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center border border-brand-teal/10 text-brand-teal shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">wifi</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg mb-1">{t('hiw.net.f2.title')}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{t('hiw.net.f2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12 flex justify-center py-8 relative">
              <div className="relative w-full max-w-xl h-96 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-brand-teal/10 relative animate-float z-20 ring-4 ring-brand-teal/5">
                    <span className="material-symbols-outlined text-5xl text-brand-teal drop-shadow-sm">cloud_upload</span>
                  </div>
                  <span className="text-xs font-bold text-brand-navy mt-4 bg-white/95 px-4 py-1.5 rounded-full backdrop-blur-sm z-20 shadow-sm border border-surface-border">{t('hiw.net.diag.cloud')}</span>
                </div>
                <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-20 h-20 bg-brand-navy rounded-2xl flex items-center justify-center shadow-xl shadow-brand-navy/20 border border-brand-teal/30 relative z-20">
                    <span className="material-symbols-outlined text-4xl text-white">bed</span>
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-green rounded-full border-2 border-white animate-pulse shadow-glow"></div>
                  </div>
                  <span className="text-xs font-bold text-brand-navy mt-3 text-center whitespace-pre-line">{t('hiw.net.diag.home')}</span>
                  <div className="absolute inset-0 -m-3 bg-brand-teal/10 rounded-3xl animate-ping pointer-events-none -z-10"></div>
                </div>
                <div className="absolute top-[10%] right-[5%] z-20 flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-card hover:shadow-card-hover border border-surface-border relative z-20 transition-all">
                    <span className="material-symbols-outlined text-3xl text-brand-navy group-hover:text-brand-teal transition-colors">smartphone</span>
                  </div>
                  <span className="text-xs font-bold text-brand-navy mt-2 text-center w-28 leading-tight whitespace-pre-line">{t('hiw.net.diag.dash')}</span>
                </div>
                <div className="absolute top-1/2 right-[0%] -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform translate-x-2">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-card hover:shadow-card-hover border border-surface-border relative z-20 transition-all">
                    <span className="material-symbols-outlined text-3xl text-brand-navy group-hover:text-brand-teal transition-colors">diversity_3</span>
                  </div>
                  <span className="text-xs font-bold text-brand-navy mt-2 text-center w-28 leading-tight whitespace-pre-line">{t('hiw.net.diag.fam')}</span>
                </div>
                <div className="absolute bottom-[10%] right-[5%] z-20 flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-card hover:shadow-card-hover border border-surface-border relative z-20 transition-all">
                    <span className="material-symbols-outlined text-3xl text-brand-navy group-hover:text-brand-teal transition-colors">stethoscope</span>
                  </div>
                  <span className="text-xs font-bold text-brand-navy mt-2 text-center w-28 leading-tight whitespace-pre-line">{t('hiw.net.diag.care')}</span>
                </div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 600 400">
                  <defs>
                    <linearGradient id="gradientTeal" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#00C4A7" stopOpacity="0"></stop>
                      <stop offset="50%" stopColor="#00C4A7" stopOpacity="1"></stop>
                      <stop offset="100%" stopColor="#00C4A7" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 110 200 L 250 200" fill="none" stroke="#cbd5e1" strokeDasharray="6 6" strokeWidth="1.5"></path>
                  <path className="animate-dash" d="M 110 200 L 250 200" fill="none" stroke="url(#gradientTeal)" strokeDasharray="10 20" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M 350 200 L 510 80" fill="none" stroke="#cbd5e1" strokeDasharray="6 6" strokeWidth="1.5"></path>
                  <path className="animate-dash" d="M 350 200 L 510 80" fill="none" stroke="url(#gradientTeal)" strokeDasharray="10 20" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M 350 200 L 540 200" fill="none" stroke="#cbd5e1" strokeDasharray="6 6" strokeWidth="1.5"></path>
                  <path className="animate-dash" d="M 350 200 L 540 200" fill="none" stroke="url(#gradientTeal)" strokeDasharray="10 20" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M 350 200 L 510 320" fill="none" stroke="#cbd5e1" strokeDasharray="6 6" strokeWidth="1.5"></path>
                  <path className="animate-dash" d="M 350 200 L 510 320" fill="none" stroke="url(#gradientTeal)" strokeDasharray="10 20" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 lg:py-28 bg-white" id="how-to-use">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4 tracking-tight">{t('hiw.use.title')}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">{t('hiw.use.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-[2px] z-0 border-t-2 border-dashed border-surface-border"></div>
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-64 h-48 mb-8 rounded-[24px] overflow-hidden shadow-card hover:shadow-card-hover border border-surface-border bg-white relative flex flex-col items-center justify-center p-4 transition-all duration-300 ring-1 ring-surface-border/50">
                <div className="relative w-full h-full flex items-center justify-center bg-background-subtle rounded-xl">
                  <div className="w-full h-8 bg-brand-navy/5 rounded-lg absolute bottom-8"></div>
                  <div className="w-full h-16 bg-white border border-surface-border/80 rounded-lg absolute bottom-10 z-10 shadow-sm"></div>
                  <div className="w-3/4 h-2 bg-brand-teal absolute bottom-[3.5rem] z-20 rounded-full shadow-glow"></div>
                  <span className="material-symbols-outlined absolute top-4 right-4 text-brand-teal animate-bounce">arrow_downward</span>
                </div>
                <div className="absolute bottom-[-16px] w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg shadow-lg z-30 ring-4 ring-white">1</div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('hiw.use.s1.title')}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{t('hiw.use.s1.desc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-64 h-48 mb-8 rounded-[24px] overflow-hidden shadow-card hover:shadow-card-hover border border-surface-border bg-white relative flex flex-col items-center justify-center p-4 transition-all duration-300 ring-1 ring-surface-border/50">
                <div className="relative flex items-center justify-center w-full h-full bg-background-subtle rounded-xl">
                  <span className="material-symbols-outlined text-6xl text-brand-teal drop-shadow-sm z-10">power_settings_new</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-dashed border-brand-teal/30 rounded-full animate-spin-slow"></div>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-1 opacity-60">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-ping"></div>
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-ping delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-ping delay-200"></div>
                  </div>
                </div>
                <div className="absolute bottom-[-16px] w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg shadow-lg z-30 ring-4 ring-white">2</div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('hiw.use.s2.title')}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{t('hiw.use.s2.desc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-64 h-48 mb-8 rounded-[24px] overflow-hidden shadow-card hover:shadow-card-hover border border-surface-border bg-white relative flex flex-col items-center justify-center p-0 transition-all duration-300 ring-1 ring-surface-border/50">
                <div className="flex w-full h-full">
                  <div className="w-1/2 bg-brand-teal-light/20 flex flex-col items-center justify-center border-r border-surface-border/60">
                    <span className="material-symbols-outlined text-4xl text-brand-navy mb-2">ring_volume</span>
                    <span className="text-[10px] font-bold uppercase text-brand-teal tracking-wide">{t('hiw.use.s3.tag1')}</span>
                  </div>
                  <div className="w-1/2 bg-white flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-brand-navy/30 mb-2">bedtime_off</span>
                    <span className="text-[10px] font-bold uppercase text-text-secondary tracking-wide">{t('hiw.use.s3.tag2')}</span>
                  </div>
                </div>
                <div className="absolute bottom-[-16px] w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg shadow-lg z-30 ring-4 ring-white">3</div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('hiw.use.s3.title')}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{t('hiw.use.s3.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Comfort Section */}
      <section className="py-20 lg:py-28 bg-background-teal-tint">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('hiw.comf.title')}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">{t('hiw.comf.desc')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[24px] p-10 border border-surface-border relative overflow-hidden group hover:border-brand-teal/40 transition-colors shadow-card hover:shadow-card-hover">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -mr-10 -mt-10 blur-2xl opacity-60"></div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-white text-brand-navy rounded-2xl flex items-center justify-center shadow-md border border-surface-border">
                  <span className="material-symbols-outlined text-3xl">bed</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy">{t('hiw.comf.pA.title')}</h3>
                  <p className="text-sm text-brand-teal font-bold tracking-wide uppercase mt-1">{t('hiw.comf.pA.badge')}</p>
                </div>
              </div>
              <p className="text-text-secondary mb-10 text-base h-12 leading-relaxed">{t('hiw.comf.pA.desc')}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-background-subtle/50 p-5 rounded-xl shadow-sm border border-surface-border/60 hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-brand-teal text-2xl">ecg_heart</span>
                  <span className="text-base font-bold text-brand-navy">{t('hiw.comf.pA.f1')}</span>
                </div>
                <div className="flex items-center gap-4 bg-background-subtle/50 p-5 rounded-xl shadow-sm border border-surface-border/60 hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-brand-teal text-2xl">air</span>
                  <span className="text-base font-bold text-brand-navy">{t('hiw.comf.pA.f2')}</span>
                </div>
                <div className="flex items-center gap-4 bg-background-subtle/50 p-5 rounded-xl shadow-sm border border-surface-border/60 hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-brand-teal text-2xl">night_shelter</span>
                  <span className="text-base font-bold text-brand-navy">{t('hiw.comf.pA.f3')}</span>
                </div>
                <div className="flex items-center gap-4 bg-background-subtle/50 p-5 rounded-xl shadow-sm border border-surface-border/60 hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-brand-teal text-2xl">sensor_door</span>
                  <span className="text-base font-bold text-brand-navy">{t('hiw.comf.pA.f4')}</span>
                </div>
              </div>
            </div>
            <div className="bg-brand-navy rounded-[24px] p-10 border border-brand-navy/20 relative overflow-hidden text-white group hover:shadow-2xl transition-shadow shadow-card">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-teal/20 to-transparent"></div>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-16 h-16 bg-brand-teal text-white rounded-2xl flex items-center justify-center shadow-glow">
                  <span className="material-symbols-outlined text-3xl">ring_volume</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('hiw.comf.pB.title')}</h3>
                  <p className="text-sm text-brand-teal font-bold tracking-wide uppercase mt-1">{t('hiw.comf.pB.badge')}</p>
                </div>
              </div>
              <p className="text-white/80 mb-10 text-base h-12 relative z-10 leading-relaxed">{t('hiw.comf.pB.desc')}</p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <span className="material-symbols-outlined text-brand-teal text-2xl">bloodtype</span>
                  <span className="text-base font-bold text-white">{t('hiw.comf.pB.f1')}</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <span className="material-symbols-outlined text-brand-teal text-2xl">warning_amber</span>
                  <span className="text-base font-bold text-white">{t('hiw.comf.pB.f2')}</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-brand-teal/70 text-2xl">add_circle</span>
                  <span className="text-base font-bold text-white/90">{t('hiw.comf.pB.f3')}</span>
                </div>
              </div>
              <div className="absolute top-8 right-8 text-brand-teal opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[140px]">medical_services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section className="py-20 lg:py-28 bg-background-off-white border-t border-surface-border">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('hiw.int.title')}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">{t('hiw.int.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-brand-teal-light/40 flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                <span className="material-symbols-outlined text-3xl">pulmonology</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{t('hiw.int.c1.title')}</h3>
              <p className="text-sm text-text-secondary mb-8 min-h-[40px] leading-relaxed">{t('hiw.int.c1.desc')}</p>
              <div className="pt-6 border-t border-surface-border flex gap-3">
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c1.t1')}</span>
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c1.t2')}</span>
              </div>
            </div>
            <div className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-brand-teal-light/40 flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                <span className="material-symbols-outlined text-3xl">cardiology</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{t('hiw.int.c2.title')}</h3>
              <p className="text-sm text-text-secondary mb-8 min-h-[40px] leading-relaxed">{t('hiw.int.c2.desc')}</p>
              <div className="pt-6 border-t border-surface-border flex gap-3">
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c2.t1')}</span>
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c2.t2')}</span>
              </div>
            </div>
            <div className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-brand-teal-light/40 flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                <span className="material-symbols-outlined text-3xl">battery_charging_full</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{t('hiw.int.c3.title')}</h3>
              <p className="text-sm text-text-secondary mb-8 min-h-[40px] leading-relaxed">{t('hiw.int.c3.desc')}</p>
              <div className="pt-6 border-t border-surface-border flex gap-3">
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c3.t1')}</span>
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c3.t2')}</span>
              </div>
            </div>
            <div className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-brand-teal-light/40 flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                <span className="material-symbols-outlined text-3xl">bedtime</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{t('hiw.int.c4.title')}</h3>
              <p className="text-sm text-text-secondary mb-8 min-h-[40px] leading-relaxed">{t('hiw.int.c4.desc')}</p>
              <div className="pt-6 border-t border-surface-border flex gap-3">
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c4.t1')}</span>
                <span className="px-3 py-1 bg-background-subtle text-xs font-bold text-brand-navy rounded-full border border-surface-border">{t('hiw.int.c4.t2')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
