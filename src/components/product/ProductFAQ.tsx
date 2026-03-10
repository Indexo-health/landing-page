import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FAQ_COUNT = 8;

function FAQItem({ index }: { index: number }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-surface-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors pr-4">
          {t(`pp.faq.q${index}`)}
        </span>
        <span
          className={`material-symbols-outlined text-brand-teal transition-transform duration-300 flex-shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-text-secondary leading-relaxed">{t(`pp.faq.a${index}`)}</p>
      </div>
    </div>
  );
}

export default function ProductFAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">help</span>
            {t('pp.faq.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('pp.faq.title')}
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-[800px] mx-auto bg-white rounded-[24px] p-8 md:p-10 border border-surface-border shadow-card">
          {Array.from({ length: FAQ_COUNT }, (_, i) => (
            <div key={i + 1}>
              <FAQItem index={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
