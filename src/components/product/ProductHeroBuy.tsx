import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ShopifyState, SelectedPackage } from '../../types/shopify';

interface Props {
  shopify: ShopifyState;
}

const galleryImages = [
  { src: '/images/product/hero-sleep-mat.jpg', key: 'hero' },
  { src: '/images/product/cs03-components.png', key: 'components' },
  { src: '/images/product/product-angle-4.jpg', key: 'angle1' },
  { src: '/images/product/product-angle-9.jpg', key: 'angle2' },
  { src: '/images/product/ring-spo2.jpg', key: 'ring' },
  { src: '/images/product/app-home-dashboard.png', key: 'app' },
];

const highlights = [
  { icon: 'hotel', key: 'h1' },
  { icon: 'verified', key: 'h2' },
  { icon: 'health_and_safety', key: 'h3' },
  { icon: 'sync', key: 'h4' },
];

const stdFeatures = ['f1', 'f2', 'f3', 'f4', 'f5'];
const proFeatures = ['f1', 'f2', 'f3', 'f4', 'f5'];

export default function ProductHeroBuy({ shopify }: Props) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<SelectedPackage>('pro');
  const [activeImage, setActiveImage] = useState(0);

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
    <section id="buy" className="bg-white pt-6 pb-8 lg:pt-10 lg:pb-16">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* ── Left: Image Gallery ── */}
          <div className="flex flex-col gap-3 lg:sticky lg:top-[160px]">
            {/* Main image */}
            <div className="w-full aspect-square rounded-[20px] overflow-hidden bg-gray-50 border border-surface-border/60">
              <img
                src={galleryImages[activeImage].src}
                alt={t('pp.buy.title')}
                className="w-full h-full object-contain p-3 transition-opacity duration-300"
              />
            </div>
            {/* Thumbnail strip */}
            <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={img.key}
                  onClick={() => setActiveImage(i)}
                  className={`w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                    activeImage === i
                      ? 'border-brand-teal ring-2 ring-brand-teal/20'
                      : 'border-surface-border hover:border-brand-teal/40'
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Product Info ── */}
          <div className="flex flex-col">
            {/* Product title */}
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-3">
              {t('pp.buy.title')}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-brand-navy">
                {shopify.loading ? (
                  <span className="inline-block w-24 h-9 bg-gray-100 rounded-lg animate-pulse" />
                ) : (
                  formatPrice(selectedVariant?.price?.amount)
                )}
              </span>
              <span className="text-sm text-text-secondary font-medium">USD</span>
            </div>

            {/* Key highlights */}
            <div className="rounded-2xl bg-background-subtle border border-surface-border/50 p-5 mb-6">
              <div className="flex flex-col gap-3">
                {highlights.map((h) => (
                  <div key={h.key} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-brand-teal text-lg">{h.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-navy leading-tight">
                        {t(`pp.buy.${h.key}.title`)}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {t(`pp.buy.${h.key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Package selector — vertical config cards ── */}
            <p className="text-sm font-bold text-brand-navy mb-3 uppercase tracking-wider">
              {t('pp.buy.selectPkg')}
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {/* Standard card */}
              <button
                type="button"
                onClick={() => setSelected('standard')}
                className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                  selected === 'standard'
                    ? 'border-brand-teal bg-background-teal-tint shadow-glow'
                    : 'border-surface-border bg-white hover:border-brand-teal/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-brand-navy">{t('pp.pkg.std.title')}</p>
                    <span className="text-xs text-text-secondary font-medium">— {t('pp.buy.std.brief')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-bold text-brand-navy">
                      {shopify.loading ? (
                        <span className="inline-block w-14 h-6 bg-gray-100 rounded animate-pulse" />
                      ) : (
                        formatPrice(standardVariant?.price?.amount)
                      )}
                    </p>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selected === 'standard' ? 'border-brand-teal bg-brand-teal' : 'border-gray-200'
                    }`}>
                      {selected === 'standard' && (
                        <span className="material-symbols-outlined text-white text-xs">check</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mb-3">{t('pp.pkg.std.desc')}</p>
                <div className="flex flex-col gap-1.5">
                  {stdFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-sm">check_circle</span>
                      <span className="text-xs text-text-secondary">{t(`pp.pkg.std.${f}`)}</span>
                    </div>
                  ))}
                </div>
              </button>

              {/* Pro card */}
              <button
                type="button"
                onClick={() => setSelected('pro')}
                className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-200 relative ${
                  selected === 'pro'
                    ? 'border-brand-teal bg-background-teal-tint shadow-glow'
                    : 'border-surface-border bg-white hover:border-brand-teal/30'
                }`}
              >
                <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-bold shadow-sm">
                  <span className="material-symbols-outlined text-[10px]">star</span>
                  {t('pp.pkg.pro.badge')}
                </span>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-brand-navy">{t('pp.pkg.pro.title')}</p>
                    <span className="text-xs text-text-secondary font-medium">— {t('pp.buy.pro.brief')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-bold text-brand-navy">
                      {shopify.loading ? (
                        <span className="inline-block w-14 h-6 bg-gray-100 rounded animate-pulse" />
                      ) : (
                        formatPrice(proVariant?.price?.amount)
                      )}
                    </p>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selected === 'pro' ? 'border-brand-teal bg-brand-teal' : 'border-gray-200'
                    }`}>
                      {selected === 'pro' && (
                        <span className="material-symbols-outlined text-white text-xs">check</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mb-3">{t('pp.pkg.pro.desc')}</p>
                <div className="flex flex-col gap-1.5">
                  {proFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-sm">check_circle</span>
                      <span className="text-xs text-text-secondary">{t(`pp.pkg.pro.${f}`)}</span>
                    </div>
                  ))}
                </div>
              </button>
            </div>

            {/* ── Buy button ── */}
            <button
              onClick={handleBuy}
              disabled={shopify.loading || shopify.adding || !selectedVariant}
              className="w-full h-14 rounded-full bg-brand-teal text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {shopify.adding ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                  {t('pp.pkg.adding')}
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  {t('pp.buy.addToCart')}
                </>
              )}
            </button>
            {shopify.error && (
              <p className="mt-2 text-sm text-brand-danger text-center">{shopify.error}</p>
            )}

            {/* Shipping & trust */}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-text-secondary justify-center">
                <span className="material-symbols-outlined text-sm">local_shipping</span>
                {t('pp.buy.ship1')}
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary justify-center">
                <span className="material-symbols-outlined text-sm">refresh</span>
                {t('pp.buy.ship2')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
