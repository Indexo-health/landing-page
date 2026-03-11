import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const sections = [
  { id: 'sensing', icon: 'sensors', key: 'sensing' },
  { id: 'clinical', icon: 'clinical_notes', key: 'clinical' },
  { id: 'platform', icon: 'hub', key: 'platform' },
];

export default function TechSectionNav() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('sensing');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={navRef}
      className="sticky top-[56px] md:top-[60px] z-40 bg-white/95 backdrop-blur-md border-b border-surface-border/80"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <nav className="flex justify-start lg:justify-center gap-0 overflow-x-auto scrollbar-hide -mx-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative flex items-center gap-1.5 px-4 md:px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-brand-teal'
                  : 'text-text-secondary hover:text-brand-navy'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] hidden md:inline">{section.icon}</span>
              {t(`tech.nav.${section.key}`)}
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-teal rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
