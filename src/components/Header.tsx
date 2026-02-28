import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-border px-10 py-3 sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="flex items-center gap-2">
        <Link to="/">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-navy">
            Indexo<span className="text-brand-teal">health</span>
          </h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden md:flex items-center gap-9">
          <Link to="/mission" className={`${location.pathname === '/mission' ? 'text-brand-teal font-bold' : 'text-text-main hover:text-brand-teal font-medium'} transition-colors text-sm leading-normal`}>{t('nav.mission')}</Link>
          <Link to="/how-it-works" className={`${location.pathname === '/how-it-works' ? 'text-brand-teal font-bold' : 'text-text-main hover:text-brand-teal font-medium'} transition-colors text-sm leading-normal`}>{t('nav.howItWorks')}</Link>
          <a className="text-text-main hover:text-brand-teal transition-colors text-sm font-medium leading-normal" href="#">{t('nav.technology')}</a>
          <a className="text-text-main hover:text-brand-teal transition-colors text-sm font-medium leading-normal" href="#">{t('nav.blog')}</a>
        </div>
        <div className="flex gap-4 items-center">
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
          <div className="flex gap-2">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-brand-navy text-white text-sm font-bold leading-normal hover:bg-brand-navy/90 transition-all shadow-md">
              <span className="truncate">{t('nav.getStarted')}</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white border border-surface-border text-brand-navy text-sm font-bold leading-normal hover:bg-surface-border/20 transition-all">
              <span className="truncate">{t('nav.logIn')}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
