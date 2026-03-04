import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface CardioAuditProps {
  onNext: () => void;
  onBack: () => void;
}

export default function CardioAudit({ onNext, onBack }: CardioAuditProps) {
  const { t } = useLanguage();

  // Section 1: Medical Profile - checkboxes
  const [selectedConditions, setSelectedConditions] = useState<Set<number>>(new Set());
  // Section 2: Medication toggles
  const [activeMeds, setActiveMeds] = useState<Set<number>>(new Set());
  // Section 3: Lifestyle
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [selectedLifestyle, setSelectedLifestyle] = useState<Set<number>>(new Set());

  const conditions = [1, 2, 3, 4, 5, 6, 7, 8];
  const medications = [
    { id: 1, icon: 'medication' },
    { id: 2, icon: 'bloodtype' },
    { id: 3, icon: 'science' },
    { id: 4, icon: 'water_drop' },
    { id: 5, icon: 'local_pharmacy' },
  ];
  const lifestyleItems = [1, 2, 3, 4, 5];

  const toggleCondition = (id: number) => {
    setSelectedConditions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleMed = (id: number) => {
    setActiveMeds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleLifestyle = (id: number) => {
    setSelectedLifestyle((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
            {t('gs.ca.title1')}
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-teal tracking-tight mb-4 leading-tight">
            {t('gs.ca.title2')}
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-base leading-relaxed mb-10">
            {t('gs.ca.desc')}
          </p>

          {/* ===== Section 1: Medical Profile ===== */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                {t('gs.ca.sec1')}
              </span>
            </div>
            <h2 className="text-lg font-bold text-brand-navy mb-1">{t('gs.ca.conditions')}</h2>
            <p className="text-sm text-text-secondary mb-4">{t('gs.ca.conditionsDesc')}</p>

            <div className="grid grid-cols-2 gap-3">
              {conditions.map((c) => {
                const selected = selectedConditions.has(c);
                return (
                  <label
                    key={c}
                    onClick={() => toggleCondition(c)}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                      selected
                        ? 'border-brand-teal bg-brand-teal/5'
                        : 'border-surface-border hover:border-brand-teal/30'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200 ${
                        selected
                          ? 'bg-brand-teal border-brand-teal'
                          : 'border-gray-400 bg-white'
                      }`}
                    >
                      {selected && (
                        <span className="material-symbols-outlined text-white text-sm">check</span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-brand-navy leading-tight">
                      {t(`gs.ca.c${c}`)}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* ===== Section 2: Medication History ===== */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                {t('gs.ca.sec2')}
              </span>
            </div>
            <h2 className="text-lg font-bold text-brand-navy mb-4">{t('gs.ca.meds')}</h2>

            <div className="flex flex-col gap-3">
              {medications.map((med) => {
                const active = activeMeds.has(med.id);
                return (
                  <div
                    key={med.id}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                      active
                        ? 'border-brand-teal bg-brand-teal/5'
                        : 'border-surface-border'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center">
                        <span className="material-symbols-outlined text-brand-navy text-xl">
                          {med.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy">
                          {t(`gs.ca.m${med.id}.name`)}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {t(`gs.ca.m${med.id}.desc`)}
                        </p>
                      </div>
                    </div>
                    {/* Toggle switch */}
                    <button
                      onClick={() => toggleMed(med.id)}
                      className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
                        active ? 'bg-brand-teal' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                          active ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== Section 3: Lifestyle & Wellbeing ===== */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">
                {t('gs.ca.sec3')}
              </span>
            </div>
            <h2 className="text-lg font-bold text-brand-navy mb-4">{t('gs.ca.personal')}</h2>

            {/* Age and Sex inputs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium text-brand-navy mb-1.5 block">
                  {t('gs.ca.age')}
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder={t('gs.ca.agePlaceholder')}
                  className="w-full h-11 px-4 rounded-xl border border-surface-border text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy mb-1.5 block">
                  {t('gs.ca.sex')}
                </label>
                <select
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-surface-border text-sm text-brand-navy bg-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all appearance-none cursor-pointer"
                >
                  <option value="">{t('gs.ca.sexSelect')}</option>
                  <option value="male">{t('gs.ca.sexMale')}</option>
                  <option value="female">{t('gs.ca.sexFemale')}</option>
                </select>
              </div>
            </div>

            {/* Lifestyle stressors */}
            <h3 className="text-sm font-bold text-brand-navy mb-1">{t('gs.ca.stressors')}</h3>
            <p className="text-xs text-text-secondary mb-3">{t('gs.ca.stressorsDesc')}</p>

            <div className="flex flex-col gap-3">
              {lifestyleItems.map((l) => {
                const selected = selectedLifestyle.has(l);
                return (
                  <label
                    key={l}
                    onClick={() => toggleLifestyle(l)}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                      selected
                        ? 'border-brand-teal bg-brand-teal/5'
                        : 'border-surface-border hover:border-brand-teal/30'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200 ${
                        selected
                          ? 'bg-brand-teal border-brand-teal'
                          : 'border-gray-400 bg-white'
                      }`}
                    >
                      {selected && (
                        <span className="material-symbols-outlined text-white text-sm">check</span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-navy">{t(`gs.ca.l${l}.name`)}</p>
                      <p className="text-xs text-text-secondary">{t(`gs.ca.l${l}.desc`)}</p>
                    </div>
                  </label>
                );
              })}
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
          <h2 className="text-2xl font-bold text-white mb-1">{t('gs.ca.rp.title')}</h2>
          <p className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-8">
            {t('gs.ca.rp.subtitle')}
          </p>

          {/* Main glass card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
            {/* Clinical Foundation */}
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-brand-teal/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-brand-teal text-lg">ecg_heart</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t('gs.ca.rp.clinical')}</p>
                  <p className="text-xs text-white/50">{t('gs.ca.rp.clinicalDesc')}</p>
                </div>
              </div>
              {/* Visual: heartbeat line */}
              <div className="h-8 ml-11">
                <svg width="100%" height="32" viewBox="0 0 280 32" className="text-brand-teal">
                  <polyline
                    points="0,16 40,16 50,4 60,28 70,16 110,16 120,4 130,28 140,16 180,16 190,4 200,28 210,16 280,16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            {/* Medication Offset */}
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400 text-lg">medication</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t('gs.ca.rp.medOffset')}</p>
                  <p className="text-xs text-white/50">{t('gs.ca.rp.medShift')}</p>
                </div>
              </div>
              {/* Visual: shifted baseline */}
              <div className="ml-11 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-blue-500/20 rounded-full">
                    <div className="h-full w-3/4 bg-blue-400/60 rounded-full" />
                  </div>
                </div>
                <p className="text-[10px] text-blue-300/70">{t('gs.ca.rp.medNote')}</p>
              </div>
            </div>

            {/* Lifestyle Sensitivity */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-brand-orange text-lg">monitoring</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t('gs.ca.rp.lifestyle')}</p>
                </div>
              </div>
              {/* Time bars */}
              <div className="ml-11 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-white/50 w-14">{t('gs.ca.rp.day')}</span>
                  <div className="h-2 flex-1 bg-white/10 rounded-full">
                    <div className="h-full w-1/3 bg-brand-teal/50 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-white/50 w-14">{t('gs.ca.rp.evening')}</span>
                  <div className="h-2 flex-1 bg-white/10 rounded-full">
                    <div className="h-full w-2/3 bg-brand-teal/70 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-white/50 w-14">{t('gs.ca.rp.nocturnal')}</span>
                  <div className="h-2 flex-1 bg-white/10 rounded-full">
                    <div className="h-full w-full bg-brand-teal rounded-full" />
                  </div>
                </div>
                <p className="text-[10px] text-brand-teal/70 mt-1">{t('gs.ca.rp.nocturnalNote')}</p>
              </div>
            </div>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-teal mb-1">98%</p>
              <p className="text-xs text-white/60">{t('gs.ca.rp.accuracy')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <p className="text-sm font-bold text-white mb-1">{t('gs.ca.rp.clinicalGrade')}</p>
              <p className="text-xs text-white/60">{t('gs.ca.rp.intelligence')}</p>
            </div>
          </div>

          {/* TRUE NORMAL SETUP */}
          <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-xl p-5">
            <h3 className="text-sm font-bold text-brand-teal mb-2 uppercase tracking-wider">
              {t('gs.ca.rp.trueNormal')}
            </h3>
            <p className="text-xs text-brand-teal/80 leading-relaxed">
              {t('gs.ca.rp.trueNormalDesc')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
