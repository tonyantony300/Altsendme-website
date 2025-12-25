"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-footer-bg text-footer-text w-full py-6 px-5 md:fixed md:bottom-0 md:left-0 md:right-0 md:z-10 md:py-8 md:px-10 lg:px-[60px]">
      <div className="flex flex-col items-center gap-6 max-w-[1200px] mx-auto md:flex-row md:justify-between md:items-center md:gap-0">
        <p className="font-fanwood-text text-sm text-center md:text-left">{t('common.license')}</p>
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-6 md:items-center">
          <Link href="/faq" className="font-fanwood-text text-sm text-footer-text hover:underline underline-offset-[3px]">FAQ</Link>
          <Link href="/contact" className="font-fanwood-text text-sm text-footer-text hover:underline underline-offset-[3px]">{t('common.contactUs')}</Link>
          <a 
            href="https://buymeacoffee.com/tny_antny" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-fanwood-text text-sm text-footer-text flex items-center gap-2 md:hidden hover:underline underline-offset-[3px]"
          >
            {t('common.buyMeACoffee')}
          </a>
        </div>
      </div>
    </footer>
  );
}

