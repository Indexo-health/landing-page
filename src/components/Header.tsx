import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/mission', label: t('nav.mission') },
    { to: '/how-it-works', label: t('nav.howItWorks') },
    { to: '#', label: t('nav.technology') },
    { to: '#', label: t('nav.blog') },
  ];

  return (
    <header className="border-b border-solid border-surface-border sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/images/Indexo_health_Logo_black.png"
              alt="Indexo Health"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`${
                  location.pathname === link.to
                    ? 'text-brand-teal font-bold'
                    : 'text-text-main hover:text-brand-teal font-medium'
                } transition-colors text-sm leading-normal`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            {/* Language switcher */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-text-main hover:text-brand-teal transition-colors text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">language</span>
                {language === 'en' ? 'EN' : '中文'}
              </button>
              <div className="absolute right-0 top-full mt-0 w-24 bg-white rounded-lg shadow-lg border border-surface-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <button onClick={() => setLanguage('en')} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'en' ? 'text-brand-teal font-bold' : 'text-text-main'}`}>English</button>
                <button onClick={() => setLanguage('zh')} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'zh' ? 'text-brand-teal font-bold' : 'text-text-main'}`}>中文</button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-brand-navy text-white text-sm font-bold leading-normal hover:bg-brand-navy/90 transition-all shadow-md">
                <span className="truncate">{t('nav.getStarted')}</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white border border-surface-border text-brand-navy text-sm font-bold leading-normal hover:bg-surface-border/20 transition-all">
                <span className="truncate">{t('nav.logIn')}</span>
              </button>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-brand-navy">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-border bg-white px-6 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-brand-teal/10 text-brand-teal font-bold'
                    : 'text-text-main hover:bg-gray-50 hover:text-brand-teal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-surface-border pt-4 flex flex-col gap-3">
            {/* Language switcher (mobile) */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors border ${language === 'en' ? 'border-brand-teal text-brand-teal bg-brand-teal/5' : 'border-surface-border text-text-main hover:bg-gray-50'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors border ${language === 'zh' ? 'border-brand-teal text-brand-teal bg-brand-teal/5' : 'border-surface-border text-text-main hover:bg-gray-50'}`}
              >
                中文
              </button>
            </div>

            <button className="w-full h-11 rounded-full bg-brand-navy text-white text-sm font-bold hover:bg-brand-navy/90 transition-all shadow-md">
              {t('nav.getStarted')}
            </button>
            <button className="w-full h-11 rounded-full bg-white border border-surface-border text-brand-navy text-sm font-bold hover:bg-gray-50 transition-all">
              {t('nav.logIn')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
