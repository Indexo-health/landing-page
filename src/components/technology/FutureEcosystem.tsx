import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const devices = [
  { key: 'spo2', icon: 'ring_volume', color: 'brand-green', statusBg: 'bg-brand-green/10', statusText: 'text-brand-green' },
  { key: 'therm', icon: 'thermostat', color: 'brand-orange', statusBg: 'bg-brand-orange/10', statusText: 'text-brand-orange' },
  { key: 'eeg', icon: 'neurology', color: 'text-secondary', statusBg: 'bg-gray-100', statusText: 'text-text-secondary' },
  { key: 'ecg', icon: 'ecg', color: 'text-secondary', statusBg: 'bg-gray-100', statusText: 'text-text-secondary' },
];

export default function FutureEcosystem() {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-background-teal-tint">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">hub</span>
            {t('tech.eco.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('tech.eco.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('tech.eco.desc')}
          </p>
        </div>

        {/* Hub diagram */}
        <div className="relative mb-16">
          {/* Center hub (visible on lg) */}
          <div className="hidden lg:flex items-center justify-center mb-0">
            <div className="relative w-[600px] h-[600px]">
              {/* Radial lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
                <line x1="300" y1="300" x2="120" y2="120" stroke="#00BFA5" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
                <line x1="300" y1="300" x2="480" y2="120" stroke="#00BFA5" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
                <line x1="300" y1="300" x2="120" y2="480" stroke="#00BFA5" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
                <line x1="300" y1="300" x2="480" y2="480" stroke="#00BFA5" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
              </svg>

              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-brand-navy shadow-lg flex flex-col items-center justify-center z-10">
                <span className="material-symbols-outlined text-brand-teal text-4xl mb-1">bed</span>
                <span className="text-white text-xs font-bold text-center leading-tight px-2">{t('tech.eco.hub')}</span>
              </div>

              {/* Orbiting pulse ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-2 border-brand-teal/20 animate-pulse" />

              {/* Device cards positioned at corners */}
              {devices.map((device, i) => {
                const positions = [
                  'top-0 left-0',
                  'top-0 right-0',
                  'bottom-0 left-0',
                  'bottom-0 right-0',
                ];
                return (
                  <div key={device.key} className={`absolute ${positions[i]} w-[220px]`}>
                    <DeviceCard device={device} t={t} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/tablet: 2x2 grid with center label */}
          <div className="lg:hidden">
            {/* Center hub badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy text-white shadow-md">
                <span className="material-symbols-outlined text-brand-teal text-xl">bed</span>
                <span className="text-sm font-bold">{t('tech.eco.hub')}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {devices.map((device) => (
                <DeviceCard key={device.key} device={device} t={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Vision callout */}
        <div className="rounded-[24px] bg-brand-navy p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -mt-48 pointer-events-none" />
          <div className="relative z-10">
            <span className="material-symbols-outlined text-brand-teal text-4xl mb-4">rocket_launch</span>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              {t('tech.eco.vision')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeviceCard({
  device,
  t,
}: {
  key?: React.Key;
  device: (typeof devices)[number];
  t: (key: string) => string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-surface-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-brand-teal text-xl">{device.icon}</span>
        </div>
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${device.statusBg} ${device.statusText}`}>
          {t(`tech.eco.${device.key}.status`)}
        </span>
      </div>
      <h4 className="text-sm font-bold text-brand-navy mb-1">{t(`tech.eco.${device.key}.title`)}</h4>
      <p className="text-xs text-text-secondary leading-relaxed">{t(`tech.eco.${device.key}.desc`)}</p>
    </div>
  );
}
