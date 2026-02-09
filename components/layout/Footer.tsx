import Link from 'next/link';
import { Locale } from '@/i18n';
import { Translations } from '@/lib/utils/i18n';

interface FooterProps {
  locale: Locale;
  t: Translations;
}

export default function Footer({ locale, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.overview, href: `/${locale}/overview` },
    { name: t.nav.lectures, href: `/${locale}/lectures` },
    { name: t.nav.resources, href: `/${locale}/resources` },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="font-semibold text-lg">AI & Data</span>
            </div>
            <p className="text-text-white/80 text-sm mb-2">{t.footer.course}</p>
            <p className="text-text-white/80 text-sm mb-2">{t.footer.institution}</p>
            <p className="text-text-white/80 text-sm">{t.footer.professor}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-text-white/80 text-sm mb-2">ESCP Business School</p>
            <p className="text-text-white/80 text-sm mb-2">Turin Campus</p>
            <p className="text-text-white/80 text-sm">
              <a href="mailto:riccardo.bovetti@gmail.com" className="hover:text-accent transition-colors">
                riccardo.bovetti@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-text-white/60 text-sm">
            {t.footer.copyright.replace('2026', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
