import { useLanguage } from '../../contexts/LanguageContext';

export default function BottomCTA() {
  const { t } = useLanguage();

  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-brand-navy text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {t('pp.cta.title')}
        </h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          {t('pp.cta.desc')}
        </p>
        <button
          onClick={scrollToBuy}
          className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-brand-teal text-white font-bold text-lg hover:bg-brand-teal/90 hover:scale-105 transition-all shadow-glow hover:shadow-btn-glow"
        >
          {t('pp.cta.btn')}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
