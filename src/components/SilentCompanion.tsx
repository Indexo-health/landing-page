import { useLanguage } from '../contexts/LanguageContext';

export default function SilentCompanion() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Person waking up refreshed in soft morning light" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJJKvCbEAo4qU5vzbgTODmz_TF0yPG407ClnPOcxt3MAiiBIEdywoXXhZH-YNmiVmnnWXr_ft_Ze8UKzEcj8E-IYqaxavqs6vsMYR6V38mT1Fgto8YgDOhSnexYH_nszBIYTjxRw8-oUnoxAJFcEHaKzRdHutYDbl_E-FQJkqYTqwhO6DyT7M5t47HcTq8_TTq40m3k3YonYrxmSO-8OTfAXiMGWQvAfON_yfTgjqMbhrwZWGRJC5badb5iGdDhsYsn0cOXQpcCU4" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 px-4 py-24 md:px-10 lg:px-20 h-full min-h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-8 justify-center h-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 w-fit backdrop-blur-sm">
            <span className="material-symbols-outlined text-brand-teal text-sm">bedtime</span>
            <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">{t('sc.badge')}</span>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy">
              {t('sc.title1')}<span className="text-brand-teal relative inline-block">{t('sc.title2')}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                </svg>
              </span>.
            </h2>
            <p className="text-brand-navy/80 text-lg leading-relaxed max-w-[540px]">
              {t('sc.desc')}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 h-14 px-8 rounded-full bg-brand-teal text-white font-bold text-lg hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20">
              <span>{t('sc.btn')}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4 mt-6 text-sm font-medium text-brand-navy/70">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <img alt="User avatar 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJO3VLLENX1x2rXLcmib8NQvqTX8ZW1ZslGOXSaNTqatQ3aTfZaCTb0ti2tUxeqLDW0b6Rhzwu-X7PPZUsrsY6lircOv_HznWeXIgv_MUNIYohUInxigSpN3erQaswDAz69d9LFF6uBj7DVwJxQeK9rcsCkXmj-sD9QHOsDlX-W-e6GdncxW0q82FH8ndXDi9qIUF-cMsN2WuN7KG4Bt1AgdjreOJ4sEJn9IKXCIlv1T_Mpk5TcwWvqYcaoaCix8Fx6xD5TtBlugs" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <img alt="User avatar 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2VqQt-qprBveZK-0QaULHvBrGXYJTKcjBxG-Xfs7y-_sWogvbPRF0vJny4rzDhfeSXsORl4RkeuwUsv442Lx9cUigGGsXiWOjyoq68Byfg66cOm1gpDyz-iFQZrm31PvigMwu3ZranSNYzMWsprFs-OcLZwhRmfTjmRvwhwTNhrxiqBT-byF7xv7iA2N3zqXzk_AJNZ931sUoQ3ZBOv8Kpzt9bet0JB_vKZvmCOamn6jFaF16x7f7FGz-l9Hd5IMIRc62orXNoMM" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <img alt="User avatar 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7R3M5SrZeVL7_KOWqS2GrTLuRwIjo7ICIIF_wzal0GWHqOrO4uB04fgkWsGTHXFnV3HBoTxEGSrBBUaZAjcU1b5USeOfF-VcsUvMzFBCzniEm39bKAUBf8DyGRmoDGPiSChS4pM4k0zvyqdnOVouwdKM1min7aGhKJM_7O9mlqe2MK5_emKSt2UEJLtm61OEDsiFcTSitkVrAsd4tad3hg6QyMUBZcG2UUV8sM6pgWGbIwr_JOQJ19OlGu5_jb0NF4dT9aAscxe0" />
              </div>
            </div>
            <span>{t('sc.trusted')}</span>
          </div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center lg:items-end pointer-events-none">
          <div className="relative w-full max-w-md h-[500px]">
            <div className="absolute top-10 right-0 lg:-right-10 w-80 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-card-hover border border-white/50 animate-float z-30">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-green/10 rounded-full text-brand-green mt-1">
                  <span className="material-symbols-outlined text-xl">security</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">{t('sc.card1.title')}</h4>
                  <p className="text-xs text-text-secondary">{t('sc.card1.desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-48 right-10 lg:right-4 w-72 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-card-hover border border-white/50 animate-float animation-delay-2000 z-20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-teal/10 rounded-full text-brand-teal mt-1">
                  <span className="material-symbols-outlined text-xl">notifications_active</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">{t('sc.card2.title')}</h4>
                  <p className="text-xs text-text-secondary">{t('sc.card2.desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 right-4 lg:-right-8 w-80 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-card-hover border border-white/50 animate-float animation-delay-4000 z-10">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-orange/10 rounded-full text-brand-orange mt-1">
                  <span className="material-symbols-outlined text-xl">monitor_heart</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">{t('sc.card3.title')}</h4>
                  <p className="text-xs text-text-secondary">{t('sc.card3.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
