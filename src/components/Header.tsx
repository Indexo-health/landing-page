import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, LANGUAGES } from '../contexts/LanguageContext';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLinks = [
    { to: '/mission', label: t('nav.mission') },
    { to: '/how-it-works', label: t('nav.howItWorks') },
    { to: '/technology', label: t('nav.technology') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/product', label: t('nav.product') },
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
                key={link.to}
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
            {/* Language switcher — click dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-text-main hover:text-brand-teal transition-colors text-sm font-medium py-2"
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
                <span>{currentLang.shortLabel}</span>
                <span className={`material-symbols-outlined text-[16px] transition-transform ${langOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl shadow-lg border border-surface-border overflow-hidden z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-2.5 transition-colors ${
                        language === lang.code ? 'text-brand-teal font-bold bg-brand-teal/5' : 'text-text-main'
                      }`}
                    >
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2">
              <Link to="/get-started" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-brand-navy text-white text-sm font-bold leading-normal hover:bg-brand-navy/90 transition-all shadow-md">
                <span className="truncate">{t('nav.getStarted')}</span>
              </Link>
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
                key={link.to}
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
            {/* Language switcher (mobile) — compact grid */}
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`py-2 px-1 rounded-lg text-xs font-medium transition-colors border flex items-center justify-center gap-1.5 ${
                    language === lang.code
                      ? 'border-brand-teal text-brand-teal bg-brand-teal/5'
                      : 'border-surface-border text-text-main hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm leading-none">{lang.flag}</span>
                  <span className="truncate">{lang.shortLabel}</span>
                </button>
              ))}
            </div>

            <Link to="/get-started" onClick={() => setMobileOpen(false)} className="w-full h-11 rounded-full bg-brand-navy text-white text-sm font-bold hover:bg-brand-navy/90 transition-all shadow-md flex items-center justify-center">
              {t('nav.getStarted')}
            </Link>
            <button className="w-full h-11 rounded-full bg-white border border-surface-border text-brand-navy text-sm font-bold hover:bg-gray-50 transition-all">
              {t('nav.logIn')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
