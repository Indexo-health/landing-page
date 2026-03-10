import { Helmet } from 'react-helmet-async';
import ProductHeroBuy from '../components/product/ProductHeroBuy';
import SectionNav from '../components/product/SectionNav';
import ProductComposition from '../components/product/ProductComposition';
import FeatureShowcase from '../components/product/FeatureShowcase';
import InstallationGuide from '../components/product/InstallationGuide';
import TechSpecs from '../components/product/TechSpecs';
import ProductFAQ from '../components/product/ProductFAQ';
import BottomCTA from '../components/product/BottomCTA';
import StickyBuyBar from '../components/product/StickyBuyBar';
import { useShopify } from '../hooks/useShopify';
import { useLanguage } from '../contexts/LanguageContext';

export default function Product() {
  const shopify = useShopify();
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('pp.seo.title')}</title>
        <meta name="description" content={t('pp.seo.desc')} />
        <link rel="canonical" href="https://indexo.health/product" />
        <meta property="og:title" content={t('pp.seo.title')} />
        <meta property="og:description" content={t('pp.seo.desc')} />
        <meta property="og:url" content="https://indexo.health/product" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://indexo.health/images/product/hero-sleep-mat.jpg" />
      </Helmet>

      {/* Buy section: product gallery + package selector + buy button */}
      <ProductHeroBuy shopify={shopify} />

      {/* Sticky section navigation */}
      <SectionNav />

      {/* What's Included */}
      <ProductComposition />

      {/* Feature deep-dive aligned with landing page categories */}
      <FeatureShowcase />

      {/* Setup guide */}
      <InstallationGuide />

      {/* Technical specifications */}
      <TechSpecs />

      {/* FAQ */}
      <ProductFAQ />

      {/* Final CTA */}
      <BottomCTA />

      {/* Sticky buy bar — all screen sizes */}
      <StickyBuyBar shopify={shopify} />
    </>
  );
}
