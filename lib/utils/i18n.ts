import { Locale } from '@/i18n';
import en from '@/public/locales/en.json';

const translations = {
  en,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export type Translations = typeof en;
