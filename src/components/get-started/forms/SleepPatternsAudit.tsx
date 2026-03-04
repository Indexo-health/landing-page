import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface SleepPatternsAuditProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SleepPatternsAudit({ onNext, onBack }: SleepPatternsAuditProps) {
  const { t } = useLanguage();

  // Section 1: Baseline Metrics
  const [sleepDuration, setSleepDuration] = useState(7);
  const [fallAsleep, setFallAsleep] = useState(20);

  // Section 2: Pain Point Verification - severity per disruption
  const [severities, setSeverities] = useState<Record<number, string | null>>({
    1: null, 2: null, 3: null, 4: null,
  });

  const handleSeverity = (id: number, level: string) => {
    setSeverities((prev) => ({ ...prev, [id]: level }));
  };

  const disruptions = [1, 2, 3, 4];
  const severityLevels = ['mild', 'mod', 'severe'] as const;

  return (
    <main className="flex-grow flex flex-col lg:flex-row relative overflow-hidden h-[calc(100vh-73px)]">
      {/* Left: form content */}
      <div className="w-full lg:w-[50%] flex flex-col justify-start items-center px-6 py-8 lg:p-12 z-10 bg-white overflow-y-auto custom-scrollbar">
        <div className="max-w-xl w-full flex flex-col pb-20">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-text-secondary hover:text-brand-navy text-sm font-medium mb-6 self-start transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            {t('gs.s1.badge')}
          </button>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 self-start mb-6">
            {t('gs.s2.badge')}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-2 leading-tight">
            {t('gs.sp.title1')}
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-teal tracking-tight mb-4 leading-tight">
            {t('gs.sp.title2')}
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-base leading-relaxed mb-10">
            {t('gs.sp.desc')}
          </p>

          {/* ===== Section 1: Baseline Metrics ===== */}
          <div className="mb-10">
            <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-6">
              {t('gs.sp.sec1')}
            </h2>

            {/* Sleep Duration Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-brand-navy">{t('gs.sp.duration')}</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-teal">{sleepDuration}</span>
                  <span className="text-xs text-text-secondary">{t('gs.sp.durationUnit')}</span>
                </div>
              </div>
              {/* Custom slider */}
              <div className="relative h-8 flex items-center">
                {/* Track background */}
                <div className="absolute inset-x-0 h-2 bg-gray-100 rounded-full" />
                {/* Track fill */}
                <div
                  className="absolute left-0 h-2 bg-brand-teal rounded-full transition-all"
                  style={{ width: `${((sleepDuration - 2) / 10) * 100}%` }}
                />
                {/* Invisible range input */}
                <input
                  type="range"
                  min={2}
                  max={12}
                  step={0.5}
                  value={sleepDuration}
                  onChange={(e) => setSleepDuration(parseFloat(e.target.value))}
                  className="absolute inset-x-0 w-full h-8 opacity-0 cursor-pointer z-10"
                />
                {/* Thumb visual */}
                <div
                  className="absolute w-5 h-5 bg-brand-teal rounded-full shadow-md border-2 border-white pointer-events-none transition-all"
                  style={{ left: `calc(${((sleepDuration - 2) / 10) * 100}% - 10px)` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-text-secondary">2h</span>
                <span className="text-[10px] text-text-secondary">12h</span>
              </div>
            </div>

            {/* Time to Fall Asleep Slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-brand-navy">{t('gs.sp.fallAsleep')}</label>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-brand-teal">{fallAsleep}</span>
                  <span className="text-xs text-text-secondary">{t('gs.sp.fallAsleepUnit')}</span>
                </div>
              </div>
              {/* Custom slider */}
              <div className="relative h-8 flex items-center">
                <div className="absolute inset-x-0 h-2 bg-gray-100 rounded-full" />
                <div
                  className="absolute left-0 h-2 bg-brand-teal rounded-full transition-all"
                  style={{ width: `${(fallAsleep / 120) * 100}%` }}
                />
                <input
                  type="range"
                  min={0}
                  max={120}
                  step={5}
                  value={fallAsleep}
                  onChange={(e) => setFallAsleep(parseInt(e.target.value))}
                  className="absolute inset-x-0 w-full h-8 opacity-0 cursor-pointer z-10"
                />
                <div
                  className="absolute w-5 h-5 bg-brand-teal rounded-full shadow-md border-2 border-white pointer-events-none transition-all"
                  style={{ left: `calc(${(fallAsleep / 120) * 100}% - 10px)` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-text-secondary">0 min</span>
                <span className="text-[10px] text-text-secondary">120 min</span>
              </div>
            </div>

            {/* Info tip box */}
            <div className="flex items-start gap-3 p-4 bg-brand-teal/5 border border-brand-teal/15 rounded-xl">
              <span className="material-symbols-outlined text-brand-teal text-lg mt-0.5 flex-shrink-0">info</span>
              <p className="text-xs text-text-secondary leading-relaxed">{t('gs.sp.infoTip')}</p>
            </div>
          </div>

          {/* ===== Section 2: Pain Point Verification ===== */}
          <div className="mb-10">
            <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">
              {t('gs.sp.sec2')}
            </h2>
            <p className="text-sm text-text-secondary mb-5">{t('gs.sp.rateLabel')}</p>

            <div className="flex flex-col gap-4">
              {disruptions.map((d) => (
                <div
                  key={d}
                  className="flex items-center justify-between gap-4 p-4 rounded-xl border border-surface-border"
                >
                  <p className="text-sm font-medium text-brand-navy flex-1 min-w-0">
                    {t(`gs.sp.d${d}`)}
                  </p>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {severityLevels.map((level) => (
                      <button
                        key={level}
                        onClick={() => handleSeverity(d, level)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                          severities[d] === level
                            ? 'bg-brand-teal text-white shadow-sm'
                            : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                        }`}
                      >
                        {t(`gs.sp.${level}`)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onNext}
            className="flex items-center justify-center gap-2 h-12 w-full rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20 mb-6"
          >
            {t('gs.sp.analyze')}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          {/* Footer */}
          <div className="flex items-center justify-center gap-3 text-xs text-text-secondary">
            <span className="material-symbols-outlined text-base text-brand-teal">verified_user</span>
            <span>{t('gs.s1.security')}</span>
            <span className="w-px h-3 bg-surface-border" />
            <span className="font-bold text-brand-navy">{t('gs.s1.hipaa')}</span>
            <span>{t('gs.s1.compliant')}</span>
          </div>
        </div>
      </div>

      {/* Right: info panel */}
      <div className="hidden lg:flex w-full lg:w-[50%] bg-brand-navy relative items-start justify-center p-12 overflow-y-auto custom-scrollbar">
        <div className="max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-1">{t('gs.sp.rp.title')}</h2>
          <p className="text-sm text-white/60 mb-8">{t('gs.sp.rp.desc')}</p>

          {/* Main glass card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
            {/* Your Estimate bar */}
            <div className="mb-5">
              <p className="text-xs font-medium text-white/70 mb-2">{t('gs.sp.rp.estimate')}</p>
              <div className="h-6 bg-brand-teal/30 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-teal/60 rounded-lg" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-[10px] font-bold text-white">8h</span>
                </div>
              </div>
            </div>

            {/* Actual Sleep bar */}
            <div className="mb-4">
              <p className="text-xs font-medium text-white/70 mb-2">{t('gs.sp.rp.actual')}</p>
              <div className="h-6 bg-white/5 rounded-lg relative overflow-hidden flex">
                {/* Segmented bar showing gaps */}
                <div className="h-full w-[25%] bg-brand-teal rounded-l-lg" />
                <div className="h-full w-[3%] bg-brand-orange/60" />
                <div className="h-full w-[20%] bg-brand-teal" />
                <div className="h-full w-[2%] bg-red-400/60" />
                <div className="h-full w-[18%] bg-brand-teal" />
                <div className="h-full w-[3%] bg-brand-orange/60" />
                <div className="h-full w-[10%] bg-brand-teal rounded-r-lg" />
              </div>
            </div>

            {/* Gap indicator */}
            <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-brand-orange/10 border border-brand-orange/20 mb-5">
              <span className="material-symbols-outlined text-brand-orange text-sm">warning</span>
              <span className="text-xs font-bold text-brand-orange">{t('gs.sp.rp.gap')}</span>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mb-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-brand-orange/60" />
                <span className="text-[10px] text-white/60">{t('gs.sp.rp.micro')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-red-400/60" />
                <span className="text-[10px] text-white/60">{t('gs.sp.rp.stress')}</span>
              </div>
            </div>
          </div>

          {/* Clinical Insight section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-brand-teal text-lg">psychology</span>
              <h3 className="text-sm font-bold text-white">{t('gs.sp.rp.insightTitle')}</h3>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {t('gs.sp.rp.insightDesc')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
