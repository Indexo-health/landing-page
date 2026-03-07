import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Concern, Beneficiary, RecommendedConcern, DirectionScores } from '../../types/getStarted';
import RecommendedConcernCard from './RecommendedConcernCard';

interface Step1ResultsProps {
  recommendations: RecommendedConcern[];
  scores: DirectionScores;
  selectedConcerns: Concern[];
  onToggleConcern: (concern: Concern) => void;
  beneficiary: Beneficiary;
  setBeneficiary: (b: Beneficiary) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step1Results({
  recommendations,
  selectedConcerns,
  onToggleConcern,
  beneficiary,
  setBeneficiary,
  onNext,
  onBack,
}: Step1ResultsProps) {
  const { t } = useLanguage();
  const [exploreExpanded, setExploreExpanded] = useState(false);

  const recommended = recommendations.filter(r => r.score >= 40);
  const explore = recommendations.filter(r => r.score < 40);

  return (
    <div className="max-w-[960px] mx-auto px-4 md:px-10 py-8 lg:py-12">
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-text-secondary hover:text-brand-navy transition-colors mb-6"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        <span className="text-sm font-medium">{t('gs.s1r.back')}</span>
      </button>

      {/* Badge */}
      <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
        {t('gs.s1r.badge')}
      </span>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 tracking-tight">
        {t('gs.s1r.title')}
      </h1>

      {/* Description */}
      <p className="text-text-secondary text-lg mb-10">
        {t('gs.s1r.desc')}
      </p>

      {/* RECOMMENDED section */}
      {recommended.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4">
            {t('gs.s1r.recommended')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {recommended.map(r => (
              <div key={r.concern}>
                <RecommendedConcernCard
                  concern={r.concern}
                  score={r.score}
                  reasonKeys={r.reasonKeys}
                  selected={selectedConcerns.includes(r.concern)}
                  recommended={true}
                  onToggle={() => onToggleConcern(r.concern)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EXPLORE section (collapsible) */}
      {explore.length > 0 && (
        <div>
          <h2
            className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4 cursor-pointer flex items-center gap-2"
            onClick={() => setExploreExpanded(!exploreExpanded)}
          >
            {t('gs.s1r.explore')}
            <span className="material-symbols-outlined text-sm">
              {exploreExpanded ? 'expand_less' : 'expand_more'}
            </span>
          </h2>
          {exploreExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {explore.map(r => (
                <div key={r.concern}>
                  <RecommendedConcernCard
                    concern={r.concern}
                    score={r.score}
                    reasonKeys={r.reasonKeys}
                    selected={selectedConcerns.includes(r.concern)}
                    recommended={false}
                    onToggle={() => onToggleConcern(r.concern)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* WHO IS THIS FOR? */}
      <div className="mt-4">
        <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4">
          {t('gs.s1.whoLabel')}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setBeneficiary('myself')}
            className={`rounded-xl border-2 p-3 flex items-center gap-3 transition-all ${
              beneficiary === 'myself'
                ? 'border-brand-teal text-brand-teal font-semibold'
                : 'border-gray-200 text-text-secondary hover:border-brand-teal/40'
            }`}
          >
            <span className="material-symbols-outlined">person</span>
            {t('gs.s1.myself')}
          </button>
          <button
            type="button"
            onClick={() => setBeneficiary('family')}
            className={`rounded-xl border-2 p-3 flex items-center gap-3 transition-all ${
              beneficiary === 'family'
                ? 'border-brand-teal text-brand-teal font-semibold'
                : 'border-gray-200 text-text-secondary hover:border-brand-teal/40'
            }`}
          >
            <span className="material-symbols-outlined">group</span>
            {t('gs.s1.family')}
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <button
          type="button"
          onClick={onNext}
          disabled={selectedConcerns.length === 0}
          className="w-full md:w-auto flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-brand-teal text-white font-bold text-lg hover:bg-brand-teal/90 transition-all shadow-md shadow-brand-teal/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('gs.s1r.continue')} ({selectedConcerns.length} {t('gs.s1r.selected')})
        </button>
        {selectedConcerns.length === 0 && (
          <p className="text-sm text-text-secondary mt-2">
            {t('gs.s1r.minSelect')}
          </p>
        )}
      </div>
    </div>
  );
}
