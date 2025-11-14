"use client";

import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations();

  return (
    <section className="flex flex-col items-center py-12 pt-0 px-4 w-full sm:px-6 md:px-10 md:pb-16 lg:px-[60px] lg:pb-20">
      <h2 className="font-swear-display text-[32px] leading-[1.2] text-center text-foreground font-normal mb-2 md:mb-4 max-w-[600px] md:text-[40px]">
        {t('howItWorks.title')}
      </h2>
      
      <p className="font-fanwood-text text-base text-center text-foreground mb-10 lg:mb-14 max-w-[600px] sm:text-lg md:text-xl ">
        {t('howItWorks.subtitle')}
      </p>

      <div className="w-full max-w-[800px] flex flex-col gap-7 md:gap-10">
        {/* Step 1 */}
        <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
          <h3 className="font-swear-display text-lg text-foreground font-medium sm:text-xl md:text-2xl">
            1. {t('howItWorks.step1.title')}
          </h3>
          <p className="font-fanwood-text text-sm text-foreground sm:text-base md:text-lg">
            {t('howItWorks.step1.description')}
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
          <h3 className="font-swear-display text-lg text-foreground font-medium sm:text-xl md:text-2xl">
            2. {t('howItWorks.step2.title')}
          </h3>
          <p className="font-fanwood-text text-sm text-foreground sm:text-base md:text-lg">
            {t('howItWorks.step2.description')}
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
          <h3 className="font-swear-display text-lg text-foreground font-medium sm:text-xl md:text-2xl">
            3. {t('howItWorks.step3.title')}
          </h3>
          <p className="font-fanwood-text text-sm text-foreground sm:text-base md:text-lg">
            {t('howItWorks.step3.description')}
          </p>
        </div>
      </div>
    </section>
  );
}

