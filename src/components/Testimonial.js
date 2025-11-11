"use client";

import { useTranslations } from 'next-intl';

export default function Testimonial() {
  const t = useTranslations();

  return (
    <section className="flex flex-col items-center py-10 px-5 w-full md:px-10 lg:px-[60px]">
      <h2 className="font-swear-display text-[32px] leading-[1.2] text-center text-foreground font-normal mb-8 max-w-[600px] md:text-[40px] md:mb-10 lg:mb-12">
        {t('testimonial.title')}
      </h2>

      <div className="flex flex-col items-center gap-4 max-w-[800px]">
        <div className="font-federo text-xl text-center text-foreground font-medium md:text-2xl">
          ⭐⭐⭐⭐☆ <strong>{t('testimonial.rating')}</strong>
        </div>
        <p className="font-fanwood-text text-lg text-center text-foreground italic md:text-xl">
          "{t('testimonial.quote')}"
        </p>
      </div>
    </section>
  );
}

