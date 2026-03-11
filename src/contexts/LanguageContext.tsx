import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../i18n/translations';

export type Language = 'en' | 'zh' | 'zh-TW' | 'ja' | 'ko' | 'de' | 'es';

export const LANGUAGES: { code: Language; flag: string; label: string; shortLabel: string }[] = [
  { code: 'en', flag: '\u{1F1FA}\u{1F1F8}', label: 'English', shortLabel: 'EN' },
  { code: 'zh', flag: '\u{1F1E8}\u{1F1F3}', label: '简体中文', shortLabel: '简中' },
  { code: 'zh-TW', flag: '\u{1F1F9}\u{1F1FC}', label: '繁體中文', shortLabel: '繁中' },
  { code: 'ja', flag: '\u{1F1EF}\u{1F1F5}', label: '日本語', shortLabel: 'JA' },
  { code: 'ko', flag: '\u{1F1F0}\u{1F1F7}', label: '한국어', shortLabel: 'KO' },
  { code: 'de', flag: '\u{1F1E9}\u{1F1EA}', label: 'Deutsch', shortLabel: 'DE' },
  { code: 'es', flag: '\u{1F1EA}\u{1F1F8}', label: 'Español', shortLabel: 'ES' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
