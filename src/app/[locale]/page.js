"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturesGrid from '@/components/FeaturesGrid';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonial from '@/components/Testimonial';
import PrivacySection from '@/components/PrivacySection';
import DownloadSection from '@/components/DownloadSection';
import TaglineFooter from '@/components/TaglineFooter';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex justify-between items-center py-6 px-5 w-full md:px-10 lg:px-[60px]">
        <div className="flex items-center gap-3">
          <Image
            src="/Altsendmelogo.png"
            alt="Altsendme logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-federo text-2xl text-foreground font-light lg:text-[28px]">{t('common.logo')}</span>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
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
      </header>

      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <HowItWorks />
        <FeaturesGrid />
        <ComparisonTable />
        <Testimonial />
        <PrivacySection />
        <DownloadSection />
        <TaglineFooter />
      </main>

      <footer className="bg-footer-bg text-footer-text w-full py-6 px-5 md:fixed md:bottom-0 md:left-0 md:right-0 md:z-10 md:py-8 md:px-10 lg:px-[60px]">
        <div className="flex flex-col items-center gap-4 max-w-[1200px] mx-auto md:flex-row md:justify-between md:items-center md:gap-0">
          <p className="font-fanwood-text text-sm text-center md:text-left">{t('common.license')}</p>
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6 md:items-center">
            <a href="mailto:tnyantny@protonmail.com" className="font-fanwood-text text-sm text-footer-text hover:underline underline-offset-[3px]">{t('common.hireDeveloper')}</a>
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
    </div>
  );
}

