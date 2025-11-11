"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations();

  return (
    <header className="w-full py-6 px-5 md:px-10 lg:px-[60px]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <Image
              src="/Altsendmelogo.png"
              alt="Altsendme logo"
              width={36}
              height={36}
              priority
            />
            <span className="font-federo text-2xl text-foreground font-light lg:text-[28px]">{t('common.logo')}</span>
          </Link>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/faq" 
            className="font-federo text-base text-foreground font-light hover:underline underline-offset-[3px]"
          >
            FAQ
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src="/bmclogo.png"
              alt="Buy me a coffee"
              width={14}
              height={14}
              className="flex-shrink-0"
            />
            <a 
              href="https://buymeacoffee.com/tny_antny" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-federo text-base text-foreground font-light hover:underline underline-offset-[3px]"
            >
              {t('common.buyMeACoffee')}
            </a>
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

