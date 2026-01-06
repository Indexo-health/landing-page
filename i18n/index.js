import en from "./en.json";
import zh from "./zh.json";

export const copies = { en, zh };

export function getCopy(lang) {
  return lang === "zh" ? zh : en;
}
