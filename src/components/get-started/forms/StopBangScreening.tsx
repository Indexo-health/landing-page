import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface StopBangScreeningProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StopBangScreening({ onNext, onBack }: StopBangScreeningProps) {
  const { t } = useLanguage();
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({
    1: null, 2: null, 3: null, 4: null,
    5: null, 6: null, 7: null, 8: null,
  });

  const score = Object.values(answers).filter((v) => v === true).length;

  const handleAnswer = (q: number, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [q]: value }));
  };

  const questions = [1, 2, 3, 4, 5, 6, 7, 8] as const;

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
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 self-start mb-4">
            {t('gs.s2.badge')}
          </span>

          {/* Score counter */}
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gray-100 text-text-secondary font-bold text-xs self-start mb-6">
            <span className="material-symbols-outlined text-base">assessment</span>
            {t('gs.sb.score')}: <span className="text-brand-teal">{score}</span> / 8
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-2 leading-tight">
            {t('gs.sb.title1')}
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-teal tracking-tight mb-4 leading-tight">
            {t('gs.sb.title2')}
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            {t('gs.sb.desc')}
          </p>

          {/* Question cards */}
          <div className="flex flex-col gap-4 mb-10">
            {questions.map((q) => (
              <div
                key={q}
                className="rounded-2xl border border-surface-border p-5 transition-all duration-200 hover:border-brand-teal/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold">
                        {q}
                      </span>
                      <h3 className="text-sm font-bold text-brand-navy">
                        {t(`gs.sb.q${q}.title`)}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed ml-8">
                      {t(`gs.sb.q${q}.desc`)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                    <button
                      onClick={() => handleAnswer(q, true)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                        answers[q] === true
                          ? 'bg-brand-teal text-white shadow-md'
                          : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                      }`}
                    >
                      {t('gs.sb.yes')}
                    </button>
                    <button
                      onClick={() => handleAnswer(q, false)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                        answers[q] === false
                          ? 'border-2 border-brand-navy text-brand-navy bg-brand-navy/5'
                          : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                      }`}
                    >
                      {t('gs.sb.no')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
          <h2 className="text-2xl font-bold text-white mb-1">{t('gs.sb.rp.title')}</h2>
          <div className="w-12 h-1 bg-brand-teal rounded-full mb-8" />

          {/* Airway diagrams card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Clear Airway */}
              <div className="flex flex-col items-center">
                <svg width="100" height="120" viewBox="0 0 100 120" className="mb-3">
                  {/* Head outline */}
                  <ellipse cx="50" cy="35" rx="28" ry="32" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  {/* Airway path - clear */}
                  <path d="M50 50 L50 110" stroke="#00BFA5" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
                  <path d="M50 50 L50 110" stroke="#00BFA5" strokeWidth="6" strokeLinecap="round" />
                  {/* Air flow arrows */}
                  <path d="M40 65 L50 55 L60 65" stroke="#00BFA5" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <path d="M40 80 L50 70 L60 80" stroke="#00BFA5" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <path d="M40 95 L50 85 L60 95" stroke="#00BFA5" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                  {t('gs.sb.rp.clear')}
                </span>
              </div>
              {/* Obstruction */}
              <div className="flex flex-col items-center">
                <svg width="100" height="120" viewBox="0 0 100 120" className="mb-3">
                  {/* Head outline */}
                  <ellipse cx="50" cy="35" rx="28" ry="32" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  {/* Airway path - obstructed */}
                  <path d="M50 50 L50 70" stroke="#FF3B30" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
                  <path d="M50 50 L50 70" stroke="#FF3B30" strokeWidth="6" strokeLinecap="round" />
                  {/* Obstruction */}
                  <ellipse cx="50" cy="78" rx="14" ry="6" fill="#FF3B30" opacity="0.5" />
                  <line x1="36" y1="78" x2="64" y2="78" stroke="#FF3B30" strokeWidth="2" />
                  {/* Blocked path */}
                  <path d="M50 85 L50 110" stroke="#FF3B30" strokeWidth="6" strokeLinecap="round" opacity="0.2" strokeDasharray="4 4" />
                </svg>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  {t('gs.sb.rp.obstruction')}
                </span>
              </div>
            </div>
          </div>

          {/* Info items */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-teal text-xl mt-0.5">straighten</span>
              <p className="text-sm text-white/70 leading-relaxed">{t('gs.sb.rp.neck')}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-teal text-xl mt-0.5">monitor_weight</span>
              <p className="text-sm text-white/70 leading-relaxed">{t('gs.sb.rp.bmi')}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-teal text-xl mt-0.5">favorite</span>
              <p className="text-sm text-white/70 leading-relaxed">{t('gs.sb.rp.bp')}</p>
            </div>
          </div>

          {/* Risk Level Guidance */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-6">
            <h3 className="text-sm font-bold text-white mb-4">{t('gs.sb.rp.riskTitle')}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-brand-teal" />
                  ))}
                  {[4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-white/10 ml-0.5" />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-teal">0-2 {t('gs.sb.rp.low')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-brand-orange" />
                  ))}
                  {[6, 7, 8].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-white/10 ml-0.5" />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-orange">3-4 {t('gs.sb.rp.intermediate')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-brand-danger" />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-danger">5-8 {t('gs.sb.rp.high')}</span>
              </div>
            </div>
          </div>

          {/* Tip box */}
          <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-teal text-lg mt-0.5">tips_and_updates</span>
              <p className="text-xs text-brand-teal/90 leading-relaxed">{t('gs.sb.rp.tip')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
