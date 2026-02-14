import { Locale, locales } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import HtmlLangUpdater from '@/components/layout/HtmlLangUpdater';
import { notFound } from 'next/navigation';
import './globals.css';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HtmlLangUpdater locale={locale} />
      <Header locale={locale} t={t} />
      <Breadcrumbs locale={locale} t={t} />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} t={t} />
    </div>
  );
}
