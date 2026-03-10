import { useLanguage } from '../../contexts/LanguageContext';

const steps = [
  { key: 'step1', icon: 'favorite' },
  { key: 'step2', icon: 'sensors' },
  { key: 'step3', icon: 'analytics' },
];

/* Inline SVG illustrations for each pipeline step */
function StepIllustration({ step }: { step: number }) {
  const w = 200;
  const h = 120;
  if (step === 1) {
    // Side-view: person lying on bed, heartbeat vibrations going down through mattress to sensor
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="text-brand-teal">
        {/* Bed frame */}
        <rect x="20" y="58" width="160" height="6" rx="2" fill="currentColor" opacity="0.08" />
        {/* Mattress */}
        <rect x="24" y="38" width="152" height="20" rx="4" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <text x="100" y="51" textAnchor="middle" fill="currentColor" fontSize="6" opacity="0.25" fontWeight="600">MATTRESS</text>
        {/* Person lying (simplified side-view silhouette) */}
        {/* Head */}
        <circle cx="42" cy="22" r="9" fill="currentColor" opacity="0.12" />
        {/* Pillow */}
        <rect x="30" y="28" width="24" height="10" rx="5" fill="currentColor" opacity="0.06" />
        {/* Body (torso + legs) */}
        <path d="M52 30 C60 28 70 26 80 27 L160 30 C162 30 163 32 163 34 L163 36 C163 37 162 38 160 38 L52 38 C50 38 48 36 48 34 L48 34 C48 32 50 30 52 30Z" fill="currentColor" opacity="0.1" />
        {/* Heart icon on chest */}
        <path d="M85 29 C83 26 79 26 79 29 C79 32 85 35 85 35 C85 35 91 32 91 29 C91 26 87 26 85 29Z" fill="currentColor" opacity="0.4" />
        {/* Vibration arrows going DOWN from body through mattress */}
        <line x1="75" y1="42" x2="75" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="2 2" />
        <line x1="85" y1="42" x2="85" y2="54" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeDasharray="2 2" />
        <line x1="95" y1="42" x2="95" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="2 2" />
        <line x1="110" y1="42" x2="110" y2="54" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeDasharray="2 2" />
        {/* Down arrows */}
        <polygon points="83,54 85,58 87,54" fill="currentColor" opacity="0.5" />
        <polygon points="73,54 75,58 77,54" fill="currentColor" opacity="0.4" />
        <polygon points="93,54 95,58 97,54" fill="currentColor" opacity="0.4" />
        {/* Sensor mat thin strip */}
        <rect x="60" y="60" width="80" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
        {/* Concentric vibration arcs around heart */}
        <path d="M78 22 C76 18 78 14 85 14" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M92 22 C94 18 92 14 85 14" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M75 20 C72 14 75 8 85 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M95 20 C98 14 95 8 85 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15" />
        {/* Labels */}
        <text x="85" y="78" textAnchor="middle" fill="currentColor" fontSize="6.5" opacity="0.35" fontWeight="600">MICRO-VIBRATIONS</text>
        {/* Heartbeat ECG line */}
        <path d="M30 90 L55 90 L60 85 L63 95 L66 80 L69 100 L72 88 L75 90 L100 90 L105 85 L108 95 L111 80 L114 100 L117 88 L120 90 L170 90" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
      </svg>
    );
  }
  if (step === 2) {
    // LED → fiber → photodiode
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="text-brand-teal">
        {/* LED */}
        <rect x="16" y="40" width="24" height="40" rx="4" fill="currentColor" opacity="0.15" />
        <text x="28" y="64" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="700" opacity="0.6">LED</text>
        {/* Fiber serpentine */}
        <path d="M44 60 Q60 30 76 60 Q92 90 108 60 Q124 30 140 60" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4" />
        <path d="M44 60 Q60 30 76 60 Q92 90 108 60 Q124 30 140 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" strokeDasharray="6 3" />
        {/* Light particles along fiber */}
        <circle cx="60" cy="45" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="92" cy="60" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="124" cy="45" r="2" fill="currentColor" opacity="0.6" />
        {/* Photodiode */}
        <rect x="160" y="40" width="24" height="40" rx="4" fill="currentColor" opacity="0.15" />
        <text x="172" y="64" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="700" opacity="0.6">PD</text>
        {/* Arrow from LED */}
        <path d="M40 60 L44 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* Arrow to PD */}
        <path d="M140 60 L160 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* Micro-bending label */}
        <path d="M80 95 L120 95" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <text x="100" y="108" textAnchor="middle" fill="currentColor" fontSize="7" opacity="0.4" fontWeight="600">MICRO-BENDING</text>
      </svg>
    );
  }
  // Step 3: Signal processing
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="text-brand-teal">
      {/* Raw signal */}
      <path d="M20 50 Q30 50 35 35 Q40 20 45 50 Q50 80 55 50 Q60 20 65 50 Q70 80 75 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Arrow */}
      <path d="M80 50 L100 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      <polygon points="98,46 106,50 98,54" fill="currentColor" opacity="0.4" />
      {/* Clean BCG waveform */}
      <path d="M110 50 L118 50 L121 42 L124 58 L127 35 L130 65 L133 45 L136 50 L145 50 L148 42 L151 58 L154 35 L157 65 L160 45 L163 50 L180 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      {/* Labels */}
      <text x="48" y="100" textAnchor="middle" fill="currentColor" fontSize="7" opacity="0.4" fontWeight="600">RAW</text>
      <text x="145" y="100" textAnchor="middle" fill="currentColor" fontSize="7" opacity="0.4" fontWeight="600">BCG OUTPUT</text>
      {/* Processing box */}
      <rect x="86" y="36" width="20" height="28" rx="3" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="0.5" />
      <text x="96" y="52" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="700" opacity="0.5">DSP</text>
    </svg>
  );
}

export default function SensingScience() {
  const { t } = useLanguage();

  return (
    <section id="sensing" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">sensors</span>
            {t('tech.sense.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('tech.sense.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('tech.sense.desc')}
          </p>
        </div>

        {/* 3-step pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-16 relative">
          {steps.map((step, i) => (
            <div key={step.key} className="flex items-stretch">
              {/* Card */}
              <div className="bg-white rounded-[24px] p-8 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group flex-1">
                {/* Illustration */}
                <div className="flex items-center justify-center mb-5 rounded-xl bg-gray-50 p-4 h-[140px]">
                  <StepIllustration step={i + 1} />
                </div>
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {t(`tech.sense.${step.key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`tech.sense.${step.key}.desc`)}
                </p>
              </div>

              {/* Arrow connector (hidden on mobile, visible md+) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0 text-brand-teal/40">
                  <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Signal evidence: 2-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* BCG vs ECG */}
          <div className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card">
            <div className="rounded-2xl overflow-hidden bg-gray-50 mb-4">
              <img
                src="/images/technology/bcg-vs-ecg.png"
                alt={t('tech.sense.bcg.title')}
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">{t('tech.sense.bcg.title')}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{t('tech.sense.bcg.desc')}</p>
          </div>

          {/* Respiratory vs PSG */}
          <div className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card">
            <div className="rounded-2xl overflow-hidden bg-gray-50 mb-4">
              <img
                src="/images/technology/respiratory-vs-psg.png"
                alt={t('tech.sense.resp.title')}
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">{t('tech.sense.resp.title')}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{t('tech.sense.resp.desc')}</p>
          </div>
        </div>

        {/* Sensitivity callout — with image */}
        <div className="rounded-[24px] bg-white border border-surface-border shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="bg-gray-50 flex items-center justify-center p-6">
              <img
                src="/images/technology/work-under-50cm.png"
                alt={t('tech.sense.sensitivity.title')}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            {/* Text */}
            <div className="p-8 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-brand-teal text-2xl">height</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{t('tech.sense.sensitivity.title')}</h3>
              <p className="text-sm text-text-secondary mb-4">{t('tech.sense.sensitivity.desc')}</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal text-lg">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy">{t('tech.sense.sensitivity.mattress')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-teal text-lg">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy">{t('tech.sense.sensitivity.weight')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
