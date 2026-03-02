import { useLanguage } from '../contexts/LanguageContext';

export default function HowToUseSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 lg:py-28 bg-background-subtle" id="how-to-use">
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            {t('hiw.use.title')}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-medium">
            {t('hiw.use.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full relative">
          <div className="hidden md:block absolute top-[35%] left-[16%] right-[16%] h-0 border-t-2 border-dashed border-gray-200 -z-10"></div>

          {/* Step 1: Placement */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full aspect-square bg-white rounded-xl shadow-card border border-surface-border p-4 flex items-center justify-center mb-10 transition-transform duration-300 group-hover:-translate-y-2 hover:shadow-card-hover">
              <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-background-subtle">
                <img
                  src="/images/How_to_use_step1.png"
                  alt={t('hiw.use.s1.title')}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-white z-20">
                1
              </div>
            </div>
            <div className="text-center space-y-3 px-4">
              <h3 className="text-2xl font-bold text-brand-navy">{t('hiw.use.s1.title')}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {t('hiw.use.s1.desc')}
              </p>
            </div>
          </div>

          {/* Step 2: Automatic Connectivity */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full aspect-square bg-white rounded-xl shadow-card border border-surface-border p-8 flex items-center justify-center mb-10 transition-transform duration-300 group-hover:-translate-y-2 hover:shadow-card-hover">
              <div className="relative w-full h-full bg-background-subtle rounded-lg flex flex-col items-center justify-center space-y-6 px-4">
                <div className="w-full flex items-center justify-between group/esim cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-teal border border-surface-border">
                      <span className="material-symbols-outlined text-xl">sim_card</span>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">eSIM</p>
                      <p className="text-[10px] text-brand-teal font-semibold">{t('hiw.use.s2.title') === '自动连接' ? '即时自动连接' : 'Instant Auto-Connect'}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-brand-teal text-lg">bolt</span>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="w-full flex items-center justify-between group/wifi cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 border border-surface-border group-hover/wifi:text-brand-teal transition-colors">
                      <span className="material-symbols-outlined text-xl">wifi</span>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">Wi-Fi</p>
                      <p className="text-[10px] text-text-secondary leading-tight">{t('hiw.use.s2.title') === '自动连接' ? '一次设置，\n自动采集' : 'Setup Once,\nAuto-Collect Always'}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-200 text-lg group-hover/wifi:text-brand-teal transition-colors">check_circle</span>
                </div>
              </div>
              <div className="absolute -bottom-6 w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-white z-20">
                2
              </div>
            </div>
            <div className="text-center space-y-3 px-4">
              <h3 className="text-2xl font-bold text-brand-navy">{t('hiw.use.s2.title')}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {t('hiw.use.s2.desc')}
              </p>
            </div>
          </div>

          {/* Step 3: Set & Forget + Add-on */}
          <div className="flex flex-col items-center group">
            <div className="relative w-full aspect-square bg-white rounded-xl shadow-card border border-surface-border p-8 flex items-center justify-center mb-10 transition-transform duration-300 group-hover:-translate-y-2 hover:shadow-card-hover">
              <div className="relative w-full h-full bg-background-subtle rounded-lg flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center w-full mb-4 border-b border-gray-200 pb-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10 relative border border-surface-border">
                      <span className="material-symbols-outlined text-3xl text-brand-teal">cloud_done</span>
                    </div>
                    <div className="absolute -right-1 -top-1 w-4 h-4 bg-brand-teal rounded-full border-2 border-white"></div>
                  </div>
                  <p className="mt-2 text-xs font-bold text-brand-navy uppercase tracking-wide">{t('hiw.use.s3.title') === '设置即忘 + 扩展' ? '设置即忘' : 'Set & Forget'}</p>
                </div>
                <div className="w-full relative group/ring flex items-center gap-3 pl-2">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex-shrink-0 flex items-center justify-center border border-brand-teal/30 group-hover/ring:border-brand-teal transition-colors">
                    <span className="material-symbols-outlined text-2xl text-brand-navy group-hover/ring:text-brand-teal transition-colors">spo2</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-brand-teal uppercase bg-brand-teal/10 px-1.5 py-0.5 rounded-full">{t('hiw.use.s3.title') === '设置即忘 + 扩展' ? '扩展' : 'Add-on'}</span>
                    </div>
                    <p className="text-[10px] text-text-secondary leading-tight mt-1">
                      {t('hiw.use.s3.title') === '设置即忘 + 扩展' ? '脉搏血氧指环，获取更深入洞察' : 'Pulse Oximetry Ring for deeper insights'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-white z-20">
                3
              </div>
            </div>
            <div className="text-center space-y-3 px-4">
              <h3 className="text-2xl font-bold text-brand-navy">{t('hiw.use.s3.title')}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {t('hiw.use.s3.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
