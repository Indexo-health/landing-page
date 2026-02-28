import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="flex flex-col gap-4">
          <img
            src="/images/Indexo_health_Logo_black.png"
            alt="Indexo Health"
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            {t('footer.desc')}
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg mb-2">{t('footer.solutions')}</h4>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.sol1')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.sol2')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.sol3')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.sol4')}</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg mb-2">{t('footer.company')}</h4>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.about')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.tech')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.careers')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.contact')}</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg mb-2">{t('footer.legal')}</h4>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.privacy')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.terms')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.cookie')}</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.hipaa')}</a>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
        <p className="text-gray-500 text-xs text-center md:text-right max-w-md">
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
}
