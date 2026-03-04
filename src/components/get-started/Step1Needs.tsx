import { useLanguage } from '../../contexts/LanguageContext';
import { Concern, Beneficiary } from '../../types/getStarted';
import ConcernCard from './ConcernCard';
import CardioRightPanel from './panels/CardioRightPanel';
import SleepApneaRightPanel from './panels/SleepApneaRightPanel';
import RecoveryRightPanel from './panels/RecoveryRightPanel';
import SleepAnalysisRightPanel from './panels/SleepAnalysisRightPanel';

interface Props {
  concern: Concern;
  setConcern: (c: Concern) => void;
  beneficiary: Beneficiary;
  setBeneficiary: (b: Beneficiary) => void;
  onNext: () => void;
}

export default function Step1Needs({ concern, setConcern, beneficiary, setBeneficiary, onNext }: Props) {
  const { t } = useLanguage();

  return (
    <main className="flex-grow flex flex-col lg:flex-row relative overflow-hidden h-[calc(100vh-73px)]">
      {/* Left panel - scrollable form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-start items-center px-6 py-8 lg:p-12 z-10 bg-white overflow-y-auto custom-scrollbar">
        <div className="max-w-xl w-full flex flex-col gap-6 pb-20">
          {/* Step badge + Title + Description */}
          <div className="flex flex-col gap-3 mb-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/10 w-fit mb-2">
              <span className="material-symbols-outlined text-brand-teal text-sm">check_circle</span>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{t('gs.s1.badge')}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-brand-navy">
              {t('gs.s1.title')}
            </h1>
            <p className="text-text-secondary text-lg">
              {t('gs.s1.desc')}
            </p>
          </div>

          {/* Select Your Primary Concern */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">{t('gs.s1.selectLabel')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ConcernCard
                icon="pulmonology"
                title={t('gs.s1.concern.sleepApnea.title')}
                desc={t('gs.s1.concern.sleepApnea.desc')}
                selected={concern === 'sleep_apnea'}
                onClick={() => setConcern('sleep_apnea')}
                iconColor="text-slate-700"
                iconBg="bg-slate-100"
                selectedLabel={t('gs.s1.selected')}
                viewDetailsLabel={t('gs.s1.viewDetails')}
              />
              <ConcernCard
                icon="monitor_heart"
                title={t('gs.s1.concern.cardio.title')}
                desc={t('gs.s1.concern.cardio.desc')}
                selected={concern === 'cardio_risk'}
                onClick={() => setConcern('cardio_risk')}
                iconColor="text-red-500"
                iconBg="bg-red-50"
                selectedLabel={t('gs.s1.selected')}
                viewDetailsLabel={t('gs.s1.viewDetails')}
              />
              <ConcernCard
                icon="battery_charging_full"
                title={t('gs.s1.concern.recovery.title')}
                desc={t('gs.s1.concern.recovery.desc')}
                selected={concern === 'recovery'}
                onClick={() => setConcern('recovery')}
                iconColor="text-brand-orange"
                iconBg="bg-orange-50"
                selectedLabel={t('gs.s1.selected')}
                viewDetailsLabel={t('gs.s1.viewDetails')}
              />
              <ConcernCard
                icon="auto_graph"
                title={t('gs.s1.concern.sleepAnalysis.title')}
                desc={t('gs.s1.concern.sleepAnalysis.desc')}
                selected={concern === 'sleep_analysis'}
                onClick={() => setConcern('sleep_analysis')}
                iconColor="text-purple-500"
                iconBg="bg-purple-50"
                selectedLabel={t('gs.s1.selected')}
                viewDetailsLabel={t('gs.s1.viewDetails')}
              />
            </div>
          </div>

          {/* Who is this for? */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">{t('gs.s1.whoLabel')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setBeneficiary('myself')}
                className={`flex items-center justify-center gap-2 py-4 px-6 rounded-xl transition-all ${
                  beneficiary === 'myself'
                    ? 'border-2 border-brand-teal text-brand-teal font-semibold bg-white'
                    : 'border border-gray-200 bg-white text-text-secondary font-medium hover:border-brand-teal/50 hover:text-brand-navy'
                }`}
              >
                <span className="material-symbols-outlined">person</span>
                {t('gs.s1.myself')}
              </button>
              <button
                onClick={() => setBeneficiary('family')}
                className={`flex items-center justify-center gap-2 py-4 px-6 rounded-xl transition-all ${
                  beneficiary === 'family'
                    ? 'border-2 border-brand-teal text-brand-teal font-semibold bg-white'
                    : 'border border-gray-200 bg-white text-text-secondary font-medium hover:border-brand-teal/50 hover:text-brand-navy'
                }`}
              >
                <span className="material-symbols-outlined">group</span>
                {t('gs.s1.family')}
              </button>
            </div>
          </div>

          {/* Continue CTA */}
          <div className="mt-6">
            <button
              onClick={onNext}
              className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              {t('gs.s1.continue')}
            </button>
          </div>

          {/* Security + HIPAA footer */}
          <div className="mt-6 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-secondary text-sm font-medium">
              <span className="material-symbols-outlined text-brand-teal text-lg">verified_user</span>
              {t('gs.s1.security')}
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-100 text-text-secondary text-[10px] font-bold px-2 py-1 rounded">{t('gs.s1.hipaa')}</span>
              <span className="text-gray-400 text-xs">{t('gs.s1.compliant')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - concern-specific, hidden on mobile */}
      {concern === 'cardio_risk' && <CardioRightPanel />}
      {concern === 'sleep_apnea' && <SleepApneaRightPanel />}
      {concern === 'recovery' && <RecoveryRightPanel />}
      {concern === 'sleep_analysis' && <SleepAnalysisRightPanel />}
    </main>
  );
}
