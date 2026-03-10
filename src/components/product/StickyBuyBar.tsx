import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ShopifyState } from '../../types/shopify';

interface Props {
  shopify: ShopifyState;
}

export default function StickyBuyBar({ shopify }: Props) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const buySection = document.getElementById('buy');
      if (buySection) {
        const rect = buySection.getBoundingClientRect();
        setVisible(rect.bottom < -100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = shopify.product?.variants ?? [];
  const standardVariant = variants.find((v) => v.title.toLowerCase().includes('standard'));
  const startPrice = standardVariant?.price?.amount;

  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-surface-border shadow-2xl transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-3 flex items-center justify-between gap-4">
        {/* Left: Product name + price */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-bold text-brand-navy">{t('pp.buy.title')}</p>
          </div>
          <div>
            <p className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold md:hidden">{t('pp.sticky.from')}</p>
            <p className="text-xl font-bold text-brand-navy">
              {startPrice ? `$${parseFloat(startPrice).toFixed(0)}` : '$--'}
            </p>
          </div>
        </div>

        {/* Right: Buy button */}
        <button
          onClick={scrollToBuy}
          className="h-11 px-8 md:px-10 rounded-full bg-brand-teal text-white font-bold shadow-md shadow-brand-teal/20 hover:bg-brand-teal/90 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">shopping_cart</span>
          {t('pp.sticky.buy')}
        </button>
      </div>
    </div>
  );
}
