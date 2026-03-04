import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface PhysiologicalReadinessAuditProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PhysiologicalReadinessAudit({ onNext, onBack }: PhysiologicalReadinessAuditProps) {
  const { t } = useLanguage();

  const [physicalDemand, setPhysicalDemand] = useState(5);
  const [stressLevel, setStressLevel] = useState(5);
  const [recharged, setRecharged] = useState(5);

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
            {t('gs.pr.title1')}
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-teal tracking-tight mb-4 leading-tight">
            {t('gs.pr.title2')}
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-base leading-relaxed mb-10">
            {t('gs.pr.desc')}
          </p>

          {/* ===== Slider 1: Physical Demand ===== */}
          <div className="rounded-2xl border border-surface-border p-6 mb-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                {t('gs.pr.sec1')}
              </span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-brand-navy">{t('gs.pr.physicalDemand')}</h3>
              <span className="text-2xl font-bold text-brand-teal">{physicalDemand}</span>
            </div>
            <p className="text-xs text-text-secondary mb-4">{t('gs.pr.physicalDemandDesc')}</p>

            {/* Custom slider */}
            <div className="relative h-8 flex items-center mb-1">
              <div className="absolute inset-x-0 h-2 bg-gray-100 rounded-full" />
              <div
                className="absolute left-0 h-2 bg-brand-teal rounded-full transition-all"
                style={{ width: `${(physicalDemand / 10) * 100}%` }}
              />
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={physicalDemand}
                onChange={(e) => setPhysicalDemand(parseInt(e.target.value))}
                className="absolute inset-x-0 w-full h-8 opacity-0 cursor-pointer z-10"
              />
              <div
                className="absolute w-5 h-5 bg-brand-teal rounded-full shadow-md border-2 border-white pointer-events-none transition-all"
                style={{ left: `calc(${(physicalDemand / 10) * 100}% - 10px)` }}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-text-secondary">{t('gs.pr.sedentary')}</span>
              <span className="text-[10px] text-text-secondary">{t('gs.pr.extreme')}</span>
            </div>
          </div>

          {/* ===== Slider 2: Stress Level ===== */}
          <div className="rounded-2xl border border-surface-border p-6 mb-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                {t('gs.pr.sec2')}
              </span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-brand-navy">{t('gs.pr.stressLevel')}</h3>
              <span className="text-2xl font-bold text-brand-teal">{stressLevel}</span>
            </div>
            <p className="text-xs text-text-secondary mb-4">{t('gs.pr.stressLevelDesc')}</p>

            <div className="relative h-8 flex items-center mb-1">
              <div className="absolute inset-x-0 h-2 bg-gray-100 rounded-full" />
              <div
                className="absolute left-0 h-2 bg-brand-teal rounded-full transition-all"
                style={{ width: `${(stressLevel / 10) * 100}%` }}
              />
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={stressLevel}
                onChange={(e) => setStressLevel(parseInt(e.target.value))}
                className="absolute inset-x-0 w-full h-8 opacity-0 cursor-pointer z-10"
              />
              <div
                className="absolute w-5 h-5 bg-brand-teal rounded-full shadow-md border-2 border-white pointer-events-none transition-all"
                style={{ left: `calc(${(stressLevel / 10) * 100}% - 10px)` }}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-text-secondary">{t('gs.pr.low')}</span>
              <span className="text-[10px] text-text-secondary">{t('gs.pr.high')}</span>
            </div>
          </div>

          {/* ===== Slider 3: Feeling Recharged ===== */}
          <div className="rounded-2xl border border-surface-border p-6 mb-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                {t('gs.pr.sec3')}
              </span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-brand-navy">{t('gs.pr.recharged')}</h3>
              <span className="text-2xl font-bold text-brand-teal">{recharged}</span>
            </div>
            <p className="text-xs text-text-secondary mb-4">{t('gs.pr.rechargedDesc')}</p>

            <div className="relative h-8 flex items-center mb-1">
              <div className="absolute inset-x-0 h-2 bg-gray-100 rounded-full" />
              <div
                className="absolute left-0 h-2 bg-brand-teal rounded-full transition-all"
                style={{ width: `${(recharged / 10) * 100}%` }}
              />
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={recharged}
                onChange={(e) => setRecharged(parseInt(e.target.value))}
                className="absolute inset-x-0 w-full h-8 opacity-0 cursor-pointer z-10"
              />
              <div
                className="absolute w-5 h-5 bg-brand-teal rounded-full shadow-md border-2 border-white pointer-events-none transition-all"
                style={{ left: `calc(${(recharged / 10) * 100}% - 10px)` }}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-text-secondary">{t('gs.pr.rarely')}</span>
              <span className="text-[10px] text-text-secondary">{t('gs.pr.always')}</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onNext}
            className="flex items-center justify-center gap-2 h-12 w-full rounded-full bg-brand-teal text-white font-bold hover:bg-brand-teal/90 hover:shadow-lg transition-all shadow-md shadow-brand-teal/20 mb-6"
          >
            {t('gs.s2.continue')}
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
          <h2 className="text-2xl font-bold text-white mb-1">{t('gs.pr.rp.title')}</h2>
          <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-8">
            {t('gs.pr.rp.subtitle')}
          </p>

          {/* SVG Chart Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
            <svg viewBox="0 0 320 180" className="w-full" preserveAspectRatio="xMidYMid meet">
              {/* Grid lines */}
              <line x1="40" y1="20" x2="40" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="40" y1="140" x2="300" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="40" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="110" x2="300" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Y-axis labels */}
              <text x="10" y="55" fill="rgba(255,255,255,0.4)" fontSize="8">High</text>
              <text x="10" y="115" fill="rgba(255,255,255,0.4)" fontSize="8">Low</text>

              {/* HRV Baseline line (teal, solid) */}
              <polyline
                points="50,90 90,75 130,85 170,60 210,70 250,55 290,65"
                fill="none"
                stroke="#00BFA5"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Data points for HRV */}
              <circle cx="50" cy="90" r="3" fill="#00BFA5" />
              <circle cx="90" cy="75" r="3" fill="#00BFA5" />
              <circle cx="130" cy="85" r="3" fill="#00BFA5" />
              <circle cx="170" cy="60" r="3" fill="#00BFA5" />
              <circle cx="210" cy="70" r="3" fill="#00BFA5" />
              <circle cx="250" cy="55" r="3" fill="#00BFA5" />
              <circle cx="290" cy="65" r="3" fill="#00BFA5" />

              {/* Perceived Fatigue line (red, dashed) */}
              <polyline
                points="50,60 90,80 130,95 170,100 210,85 250,105 290,95"
                fill="none"
                stroke="#FF3B30"
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Data points for Fatigue */}
              <circle cx="50" cy="60" r="3" fill="#FF3B30" />
              <circle cx="90" cy="80" r="3" fill="#FF3B30" />
              <circle cx="130" cy="95" r="3" fill="#FF3B30" />
              <circle cx="170" cy="100" r="3" fill="#FF3B30" />
              <circle cx="210" cy="85" r="3" fill="#FF3B30" />
              <circle cx="250" cy="105" r="3" fill="#FF3B30" />
              <circle cx="290" cy="95" r="3" fill="#FF3B30" />

              {/* X-axis labels (Mon-Sun) */}
              <text x="50" y="158" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">Mon</text>
              <text x="90" y="158" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">Tue</text>
              <text x="130" y="158" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">Wed</text>
              <text x="170" y="158" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">Thu</text>
              <text x="210" y="158" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">Fri</text>
              <text x="250" y="158" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">Sat</text>
              <text x="290" y="158" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">Sun</text>
            </svg>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-0.5 bg-brand-teal rounded-full" />
                <span className="text-[10px] text-white/60">{t('gs.pr.rp.hrvBaseline')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-0.5 border-t-2 border-dashed border-red-400" />
                <span className="text-[10px] text-white/60">{t('gs.pr.rp.perceivedFatigue')}</span>
              </div>
            </div>
          </div>

          {/* Explanatory text box */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
            <p className="text-xs text-white/60 leading-relaxed">
              {t('gs.pr.rp.chartNote')}
            </p>
          </div>

          {/* FINE-TUNING YOUR RECOVERY BASELINE */}
          <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-xl p-5">
            <h3 className="text-sm font-bold text-brand-teal mb-2 uppercase tracking-wider">
              {t('gs.pr.rp.tuningTitle')}
            </h3>
            <p className="text-xs text-brand-teal/80 leading-relaxed">
              {t('gs.pr.rp.tuningDesc')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
