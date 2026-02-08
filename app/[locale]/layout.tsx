import { Locale, locales } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import './globals.css';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const t = getTranslations(params.locale);

  return (
    <div lang={params.locale} className="min-h-screen bg-background flex flex-col">
      <Header locale={params.locale} t={t} />
      <Breadcrumbs locale={params.locale} t={t} />
      <main className="flex-grow">{children}</main>
      <Footer locale={params.locale} t={t} />
    </div>
  );
}
