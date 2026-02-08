import { Locale } from '@/i18n';
import en from '@/public/locales/en.json';
import it from '@/public/locales/it.json';

const translations = {
  en,
  it,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export type Translations = typeof en;
