import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

/* ══════════════════════════════════════════════════════
   Custom inline SVG icons for hardware devices
   ══════════════════════════════════════════════════════ */

function SpO2RingIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={className}>
      <ellipse cx="14" cy="14" rx="11" ry="12" stroke="currentColor" strokeWidth="3" opacity="0.9" />
      <circle cx="14" cy="3" r="3" fill="currentColor" opacity="0.9" />
      <path d="M9 16 L11 16 L12.5 12 L14 19 L15.5 14 L17 16 L19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

function ThermometerIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={className}>
      <rect x="11" y="3" width="6" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" opacity="0.85" />
      <circle cx="14" cy="22" r="4" stroke="currentColor" strokeWidth="1.8" fill="currentColor" opacity="0.3" />
      <circle cx="14" cy="22" r="2" fill="currentColor" opacity="0.8" />
      <rect x="13" y="10" width="2" height="9" rx="1" fill="currentColor" opacity="0.7" />
      <line x1="17.5" y1="7" x2="19.5" y2="7" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <line x1="17.5" y1="10" x2="19.5" y2="10" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <line x1="17.5" y1="13" x2="19.5" y2="13" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function EEGIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={className}>
      <path d="M14 3 C8 3 4 8 4 14 C4 18 6 21 9 23 L9 25 L19 25 L19 23 C22 21 24 18 24 14 C24 8 20 3 14 3Z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" opacity="0.08" />
      <path d="M8 11 L10 11 L11 8 L13 14 L14 10 L15 13 L16 9 L17 12 L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M8 17 L10 17 L11.5 14 L13 19 L14.5 15 L16 18 L17.5 16 L20 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="9" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="14" cy="5" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function ECGPatchIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={className}>
      <rect x="3" y="8" width="22" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" fill="currentColor" opacity="0.08" />
      <path d="M6 15 L9 15 L10.5 11 L12 19 L13.5 9 L15 18 L16.5 13 L18 15 L22 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <circle cx="7" cy="22" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="14" cy="23" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="21" cy="22" r="1.5" fill="currentColor" opacity="0.5" />
      <line x1="7" y1="22" x2="7" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="14" y1="23" x2="14" y2="21" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="21" y1="22" x2="21" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

const deviceIcons: Record<string, React.FC<{ className?: string }>> = {
  spo2: SpO2RingIcon,
  therm: ThermometerIcon,
  eeg: EEGIcon,
  ecg: ECGPatchIcon,
};

/* ══════════════════════════════════════════════════════
   Data arrays
   ══════════════════════════════════════════════════════ */

const devices = [
  { key: 'spo2', statusBg: 'bg-brand-green/10', statusText: 'text-brand-green', iconBg: 'bg-brand-green/10', iconColor: 'text-brand-green' },
  { key: 'therm', statusBg: 'bg-brand-orange/10', statusText: 'text-brand-orange', iconBg: 'bg-brand-orange/10', iconColor: 'text-brand-orange' },
  { key: 'eeg', statusBg: 'bg-gray-100', statusText: 'text-text-secondary', iconBg: 'bg-brand-navy/8', iconColor: 'text-brand-navy/50' },
  { key: 'ecg', statusBg: 'bg-gray-100', statusText: 'text-text-secondary', iconBg: 'bg-brand-navy/8', iconColor: 'text-brand-navy/50' },
];

const connectivity = [
  { key: 'ble', icon: 'bluetooth' },
  { key: 'wifi', icon: 'wifi' },
  { key: 'esim', icon: 'sim_card' },
];

/* ══════════════════════════════════════════════════════
   Layer connector (decorative divider between layers)
   ══════════════════════════════════════════════════════ */

function LayerConnector({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-teal/20" />
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/5 border border-brand-teal/15">
        <span className="material-symbols-outlined text-brand-teal text-sm">swap_vert</span>
        <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{label}</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-teal/20" />
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   Main component
   ══════════════════════════════════════════════════════ */

export default function PlatformEcosystem() {
  const { t } = useLanguage();

  return (
    <section id="platform" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-bold tracking-wider uppercase text-xs border border-brand-teal/20 mb-4">
            <span className="material-symbols-outlined text-sm">hub</span>
            {t('tech.plat.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            {t('tech.plat.title')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            {t('tech.plat.desc')}
          </p>
        </div>

        {/* ── Layer 1: Hardware Devices ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
          {/* Left: Sleep Mat image */}
          <div className="bg-white rounded-[24px] border border-surface-border shadow-card p-6 flex flex-col items-center justify-center">
            <img
              src="/images/product/cs03-components.png"
              alt={t('tech.plat.hub')}
              className="w-full max-w-[400px] h-auto object-contain"
            />
            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white shadow-md">
              <span className="material-symbols-outlined text-brand-teal text-lg">bed</span>
              <span className="text-sm font-bold">{t('tech.plat.hub')}</span>
            </div>
          </div>

          {/* Right: 2x2 Device grid */}
          <div className="grid grid-cols-2 gap-3">
            {devices.map((device) => {
              const IconComponent = deviceIcons[device.key];
              return (
                <div key={device.key} className="bg-white rounded-2xl p-4 border border-surface-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-2.5">
                    <div className={`w-10 h-10 rounded-xl ${device.iconBg} flex items-center justify-center ${device.iconColor} group-hover:scale-110 transition-transform`}>
                      {IconComponent && <IconComponent />}
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${device.statusBg} ${device.statusText}`}>
                      {t(`tech.plat.${device.key}.status`)}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-brand-navy mb-1">{t(`tech.plat.${device.key}.title`)}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{t(`tech.plat.${device.key}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Connector: Hardware → Connectivity ── */}
        <LayerConnector label={t('tech.plat.layer.conn')} />

        {/* ── Layer 2: Connectivity ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          {connectivity.map((item) => (
            <div
              key={item.key}
              className="bg-white rounded-[24px] p-6 border border-surface-border shadow-card hover:shadow-card-hover hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4 text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                {t(`tech.plat.${item.key}.title`)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t(`tech.plat.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* ── Connector: Connectivity → Management ── */}
        <LayerConnector label={t('tech.plat.layer.mgmt')} />

        {/* ── Layer 3: Intelligent Software Suite ── */}
        <div className="mb-10">
          {/* Header row */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-brand-teal text-2xl">apps</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">{t('tech.plat.mgmt.title')}</h3>
              <p className="text-text-secondary text-sm mt-0.5">{t('tech.plat.mgmt.desc')}</p>
            </div>
          </div>

          {/* Product showcase: Dashboard + iOS App */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Dashboard Card */}
            <div className="bg-white rounded-[24px] border border-surface-border shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="bg-gray-50 p-6 flex items-center justify-center flex-1">
                <img
                  src="/images/technology/dashboard.png"
                  alt={t('tech.plat.mgmt.dashboard')}
                  className="w-full h-auto object-contain rounded-xl shadow-card border border-surface-border/40"
                />
              </div>
              <div className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">dashboard</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-navy">{t('tech.plat.mgmt.dashboard')}</h4>
                  <p className="text-xs text-text-secondary">{t('tech.plat.mgmt.dashboard.sub')}</p>
                </div>
              </div>
            </div>

            {/* iOS App Card */}
            <div className="bg-white rounded-[24px] border border-surface-border shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="bg-gray-50 p-6 flex items-center justify-center gap-8 flex-1">
                <img
                  src="/images/product/app-home-dashboard.png"
                  alt={t('tech.plat.mgmt.app')}
                  className="w-[42%] max-w-[180px] h-auto object-contain rounded-2xl shadow-card"
                />
                <img
                  src="/images/product/app-care-hub.png"
                  alt={t('tech.plat.mgmt.app')}
                  className="w-[42%] max-w-[180px] h-auto object-contain rounded-2xl shadow-card"
                />
              </div>
              <div className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">phone_iphone</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-navy">{t('tech.plat.mgmt.app')}</h4>
                  <p className="text-xs text-text-secondary">{t('tech.plat.mgmt.app.sub')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data value proposition — unified block */}
          <div className="mt-8 rounded-[24px] bg-background-teal-tint border border-brand-teal/10 p-6 md:p-8">
            {/* Intro: vision statement as context */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-brand-teal text-xl">database</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-navy mb-1">{t('tech.plat.val.title')}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{t('tech.plat.vision')}</p>
              </div>
            </div>

            {/* 2x2 value cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {([
                { key: 'v1', icon: 'stream', iconBg: 'bg-brand-teal/10', iconColor: 'text-brand-teal' },
                { key: 'v2', icon: 'data_thresholding', iconBg: 'bg-brand-orange/10', iconColor: 'text-brand-orange' },
                { key: 'v3', icon: 'trending_up', iconBg: 'bg-brand-navy/10', iconColor: 'text-brand-navy' },
                { key: 'v4', icon: 'groups', iconBg: 'bg-brand-green/10', iconColor: 'text-brand-green' },
              ] as const).map((item) => (
                <div
                  key={item.key}
                  className="bg-white rounded-2xl p-4 border border-surface-border/60 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 flex gap-3.5"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className={`material-symbols-outlined ${item.iconColor} text-lg`}>{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-sm font-bold text-brand-navy mb-0.5">{t(`tech.plat.val.${item.key}.title`)}</h5>
                    <p className="text-xs text-text-secondary leading-relaxed">{t(`tech.plat.val.${item.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
