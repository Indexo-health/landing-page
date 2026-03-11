import { useLanguage } from '../../contexts/LanguageContext';

const ahiRows = [
  { key: 'mild', auc: '0.935', sens: '88.9%', spec: '80.5%' },
  { key: 'moderate', auc: '0.974', sens: '91.0%', spec: '89.5%' },
  { key: 'severe', auc: '0.977', sens: '85.3%', spec: '97.3%' },
];

export default function ClinicalValidation() {
  const { t } = useLanguage();

  return (
    <section id="clinical" className="py-20 lg:py-28 bg-background-cool-gray">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">clinical_notes</span>
            {t('tech.clin.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('tech.clin.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('tech.clin.desc')}
          </p>
        </div>

        {/* ── FDA Clinical Study ── */}
        <div className="bg-white rounded-[24px] p-6 md:p-8 border border-surface-border shadow-card mb-10">
          <h3 className="text-xl font-bold text-brand-navy mb-2">{t('tech.clin.fda.title')}</h3>
          <p className="text-sm text-text-secondary mb-6">{t('tech.clin.fda.desc')}</p>

          {/* Comparison table (desktop) / cards (mobile) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 pr-4 text-sm font-bold text-text-secondary uppercase tracking-wider">{t('tech.clin.fda.metric')}</th>
                  <th className="py-3 px-4 text-sm font-bold text-brand-teal uppercase tracking-wider">{t('tech.clin.fda.indexo')}</th>
                  <th className="py-3 px-4 text-sm font-bold text-text-secondary uppercase tracking-wider">{t('tech.clin.fda.comp')}</th>
                  <th className="py-3 pl-4 text-sm font-bold text-text-secondary uppercase tracking-wider">{t('tech.clin.fda.pvalue')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-4 pr-4 text-sm font-medium text-brand-navy">{t('tech.clin.fda.hr')}</td>
                  <td className="py-4 px-4">
                    <span className="text-2xl font-bold text-brand-teal">1.41</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-lg text-text-secondary/60 line-through">2.14</span>
                  </td>
                  <td className="py-4 pl-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold">&lt;0.0001</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-sm font-medium text-brand-navy">{t('tech.clin.fda.rr')}</td>
                  <td className="py-4 px-4">
                    <span className="text-2xl font-bold text-brand-teal">1.67</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-lg text-text-secondary/60 line-through">2.35</span>
                  </td>
                  <td className="py-4 pl-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold">0.0136</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-4">
            {[
              { label: t('tech.clin.fda.hr'), indexo: '1.41', comp: '2.14', p: '<0.0001' },
              { label: t('tech.clin.fda.rr'), indexo: '1.67', comp: '2.35', p: '0.0136' },
            ].map((row) => (
              <div key={row.label} className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm font-bold text-brand-navy mb-3">{row.label}</p>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-teal">{row.indexo}</p>
                    <p className="text-[10px] text-text-secondary uppercase">{t('tech.clin.fda.indexo')}</p>
                  </div>
                  <span className="text-text-secondary/40 text-lg">vs</span>
                  <div className="text-center">
                    <p className="text-lg text-text-secondary/60 line-through">{row.comp}</p>
                    <p className="text-[10px] text-text-secondary uppercase">{t('tech.clin.fda.comp')}</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold">
                    p={row.p}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Result callout */}
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-brand-teal/5 border border-brand-teal/10 p-4">
            <span className="material-symbols-outlined text-brand-teal text-lg mt-0.5 flex-shrink-0">check_circle</span>
            <p className="text-sm text-brand-navy font-medium">{t('tech.clin.fda.result')}</p>
          </div>
          <p className="text-xs text-text-secondary mt-2 ml-1">{t('tech.clin.fda.lower')}</p>
        </div>

        {/* ── Sleep Apnea Study ── */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-brand-navy mb-2">{t('tech.clin.apnea.title')}</h3>
          <p className="text-sm text-text-secondary mb-6">{t('tech.clin.apnea.desc')}</p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: '302', label: t('tech.clin.apnea.subjects'), icon: 'groups' },
              { value: '0.925', label: t('tech.clin.apnea.pearson'), icon: 'trending_up' },
              { value: '0.921', label: t('tech.clin.apnea.icc'), icon: 'handshake' },
              { value: '0.977', label: t('tech.clin.apnea.auc'), icon: 'auto_graph' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-surface-border shadow-card text-center">
                <span className="material-symbols-outlined text-brand-teal text-2xl mb-2">{stat.icon}</span>
                <p className="text-2xl font-bold text-brand-navy">{stat.value}</p>
                <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* AHI cutoff table */}
          <div className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 pr-4 text-sm font-bold text-text-secondary uppercase tracking-wider">{t('tech.clin.apnea.cutoff')}</th>
                    <th className="py-3 px-4 text-sm font-bold text-text-secondary uppercase tracking-wider">AUC</th>
                    <th className="py-3 px-4 text-sm font-bold text-text-secondary uppercase tracking-wider">{t('tech.clin.apnea.sens')}</th>
                    <th className="py-3 pl-4 text-sm font-bold text-text-secondary uppercase tracking-wider">{t('tech.clin.apnea.spec')}</th>
                  </tr>
                </thead>
                <tbody>
                  {ahiRows.map((row) => (
                    <tr key={row.key} className="border-b border-gray-50 last:border-0">
                      <td className="py-3.5 pr-4 text-sm font-medium text-brand-navy">{t(`tech.clin.apnea.${row.key}`)}</td>
                      <td className="py-3.5 px-4 text-sm font-bold text-brand-teal">{row.auc}</td>
                      <td className="py-3.5 px-4 text-sm text-brand-navy">{row.sens}</td>
                      <td className="py-3.5 pl-4 text-sm text-brand-navy">{row.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Breathing Disturbance Detection (CSA / OSA) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-gray-50 mb-4 flex-1 flex items-center justify-center p-2">
              <img src="/images/technology/breathing-csa.png" alt={t('tech.clin.csa.title')} className="w-full h-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">{t('tech.clin.csa.title')}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{t('tech.clin.csa.desc')}</p>
          </div>
          <div className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-gray-50 mb-4 flex-1 flex items-center justify-center p-2">
              <img src="/images/technology/breathing-osa.png" alt={t('tech.clin.osa.title')} className="w-full h-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">{t('tech.clin.osa.title')}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{t('tech.clin.osa.desc')}</p>
          </div>
        </div>

        {/* ── HRV Poincaré Plots ── */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-brand-navy mb-2">{t('tech.clin.hrv.title')}</h3>
          <p className="text-sm text-text-secondary mb-6 max-w-3xl">{t('tech.clin.hrv.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-gray-50 mb-4 flex-1 flex items-center justify-center p-4">
              <img src="/images/technology/poincare-arrhythmia.png" alt={t('tech.clin.poincare1.title')} className="max-h-[300px] object-contain" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-1">{t('tech.clin.poincare1.title')}</h3>
            <p className="text-sm text-text-secondary">{t('tech.clin.poincare1.desc')}</p>
          </div>
          <div className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-gray-50 mb-4 flex-1 flex items-center justify-center p-4">
              <img src="/images/technology/poincare-healthy.png" alt={t('tech.clin.poincare2.title')} className="max-h-[300px] object-contain" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-1">{t('tech.clin.poincare2.title')}</h3>
            <p className="text-sm text-text-secondary">{t('tech.clin.poincare2.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
