"use client";

import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations();

  return (
    <section className="flex flex-col items-center py-10 px-5 w-full md:px-10 lg:px-[60px]">
      <h2 className="font-swear-display text-[32px] leading-[1.2] text-center text-foreground font-normal mb-2 max-w-[600px] md:text-[40px] md:mb-4 lg:mb-6">
        {t('howItWorks.title')}
      </h2>
      
      <p className="font-fanwood-text text-lg text-center text-foreground mb-8 max-w-[600px] md:text-xl md:mb-10 lg:mb-12">
        {t('howItWorks.subtitle')}
      </p>

      <div className="w-full max-w-[800px] flex flex-col gap-8 md:gap-10">
        {/* Step 1 */}
        <div className="flex flex-col gap-2">
          <h3 className="font-federo text-xl text-foreground font-medium md:text-2xl">
            1. {t('howItWorks.step1.title')}
          </h3>
          <p className="font-fanwood-text text-base text-foreground md:text-lg">
            {t('howItWorks.step1.description')}
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-2">
          <h3 className="font-federo text-xl text-foreground font-medium md:text-2xl">
            2. {t('howItWorks.step2.title')}
          </h3>
          <p className="font-fanwood-text text-base text-foreground md:text-lg">
            {t('howItWorks.step2.description')}
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-2">
          <h3 className="font-federo text-xl text-foreground font-medium md:text-2xl">
            3. {t('howItWorks.step3.title')}
          </h3>
          <p className="font-fanwood-text text-base text-foreground mb-2 md:text-lg">
            {t('howItWorks.step3.description')}
          </p>
          <p className="font-fanwood-text text-base text-foreground italic md:text-lg">
            {t('howItWorks.step3.note')}
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-[800px]">
        <p className="font-fanwood-text text-base text-center text-foreground italic md:text-lg">
          {t('howItWorks.privacyNote')}
        </p>
      </div>
    </section>
  );
}

