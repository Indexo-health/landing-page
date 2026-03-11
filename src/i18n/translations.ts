import { en } from './en';
import { zh } from './zh';
import { zhTW } from './zh-TW';
import { ja } from './ja';
import { ko } from './ko';
import { de } from './de';
import { es } from './es';

export const translations: Record<string, Record<string, string>> = {
  en,
  zh,
  'zh-TW': zhTW,
  ja,
  ko,
  de,
  es,
};
