import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ShopifyState, SelectedPackage } from '../../types/shopify';

interface Props {
  shopify: ShopifyState;
}

const STANDARD_FEATURES = ['pp.pkg.std.f1', 'pp.pkg.std.f2', 'pp.pkg.std.f3', 'pp.pkg.std.f4', 'pp.pkg.std.f5'];
const PRO_FEATURES = ['pp.pkg.pro.f1', 'pp.pkg.pro.f2', 'pp.pkg.pro.f3', 'pp.pkg.pro.f4', 'pp.pkg.pro.f5'];

export default function PackageSelector({ shopify }: Props) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<SelectedPackage>('pro');

  const variants = shopify.product?.variants ?? [];
  const standardVariant = variants.find((v) => v.title.toLowerCase().includes('standard'));
  const proVariant = variants.find((v) => v.title.toLowerCase().includes('pro'));
  const selectedVariant = selected === 'standard' ? standardVariant : proVariant;

  const formatPrice = (amount: string | undefined) => {
    if (!amount) return '$--';
    const num = parseFloat(amount);
    return num % 1 === 0 ? `$${num.toFixed(0)}` : `$${num}`;
  };

  const handleBuy = () => {
    if (selectedVariant) {
      shopify.addToCart(selectedVariant.id);
    }
  };

  return (
    <section id="buy" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">shopping_cart</span>
            {t('pp.pkg.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('pp.pkg.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('pp.pkg.desc')}
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mb-10">
          {/* Standard Card */}
          <button
            type="button"
            onClick={() => setSelected('standard')}
            className={`text-left rounded-[24px] p-8 border-2 transition-all duration-300 flex flex-col ${
              selected === 'standard'
                ? 'border-brand-teal shadow-glow bg-background-teal-tint'
                : 'border-surface-border bg-white hover:border-brand-teal/30 hover:shadow-card'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2 w-full">
              <h3 className="text-xl font-bold text-brand-navy">{t('pp.pkg.std.title')}</h3>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === 'standard' ? 'border-brand-teal bg-brand-teal' : 'border-gray-200'
              }`}>
                {selected === 'standard' && (
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                )}
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-4">{t('pp.pkg.std.desc')}</p>

            {/* Price */}
            <p className="text-3xl font-bold text-brand-navy mb-6">
              {shopify.loading ? (
                <span className="inline-block w-20 h-9 bg-gray-100 rounded animate-pulse" />
              ) : (
                formatPrice(standardVariant?.price?.amount)
              )}
            </p>

            {/* Features */}
            <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">{t('pp.pkg.includes')}</p>
            <ul className="flex flex-col gap-2.5 flex-grow">
              {STANDARD_FEATURES.map((key) => (
                <li key={key} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-brand-teal text-lg mt-0.5">check_circle</span>
                  <span className="text-sm text-text-secondary">{t(key)}</span>
                </li>
              ))}
            </ul>
          </button>

          {/* Pro Card */}
          <button
            type="button"
            onClick={() => setSelected('pro')}
            className={`text-left rounded-[24px] p-8 border-2 transition-all duration-300 flex flex-col relative ${
              selected === 'pro'
                ? 'border-brand-teal shadow-glow bg-background-teal-tint'
                : 'border-surface-border bg-white hover:border-brand-teal/30 hover:shadow-card'
            }`}
          >
            {/* Popular badge */}
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold shadow-md">
              <span className="material-symbols-outlined text-xs">star</span>
              {t('pp.pkg.pro.badge')}
            </span>

            {/* Header */}
            <div className="flex items-center justify-between mb-2 w-full">
              <h3 className="text-xl font-bold text-brand-navy">{t('pp.pkg.pro.title')}</h3>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === 'pro' ? 'border-brand-teal bg-brand-teal' : 'border-gray-200'
              }`}>
                {selected === 'pro' && (
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                )}
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-4">{t('pp.pkg.pro.desc')}</p>

            {/* Price */}
            <p className="text-3xl font-bold text-brand-navy mb-6">
              {shopify.loading ? (
                <span className="inline-block w-20 h-9 bg-gray-100 rounded animate-pulse" />
              ) : (
                formatPrice(proVariant?.price?.amount)
              )}
            </p>

            {/* Features */}
            <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">{t('pp.pkg.includes')}</p>
            <ul className="flex flex-col gap-2.5 flex-grow">
              {PRO_FEATURES.map((key, i) => (
                <li key={key} className="flex items-start gap-2">
                  <span className={`material-symbols-outlined text-lg mt-0.5 ${i >= 2 ? 'text-brand-orange' : 'text-brand-teal'}`}>
                    check_circle
                  </span>
                  <span className={`text-sm ${i >= 2 ? 'text-brand-navy font-semibold' : 'text-text-secondary'}`}>
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>
          </button>
        </div>

        {/* Buy Now button */}
        <div className="text-center">
          <button
            onClick={handleBuy}
            disabled={shopify.loading || shopify.adding || !selectedVariant}
            className="inline-flex items-center gap-2 h-14 px-12 rounded-full bg-brand-teal text-white font-bold text-lg hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {shopify.adding ? (
              <>
                <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                {t('pp.pkg.adding')}
              </>
            ) : (
              <>
                {t('pp.pkg.buyNow')}
                <span className="material-symbols-outlined text-xl">shopping_cart</span>
              </>
            )}
          </button>
          {shopify.error && (
            <p className="mt-3 text-sm text-brand-danger">{shopify.error}</p>
          )}
        </div>
      </div>
    </section>
  );
}
