"use client";

import { useTranslations } from 'next-intl';

export default function PressReviews() {
  const t = useTranslations();

  const reviews = [
    {
      name: "Softpedia (macOS)",
      url: "https://mac.softpedia.com/get/Internet-Utilities/AltSendme.shtml",
      platform: "macOS"
    },
    {
      name: "Softpedia (Linux)",
      url: "https://linux.softpedia.com/get/Communications/Filesharing/AltSendme-104966.shtml",
      platform: "Linux"
    },
    {
      name: "Neowin",
      url: "https://www.neowin.net/amp/altsendme-021/",
      platform: "Windows"
    },
    {
      name: "XDA Developers",
      url: "https://www.xda-developers.com/i-swapped-dropbox-for-this-self-hosted-alternative/",
      platform: "Review"
    }
  ];

  return (
    <section className="flex flex-col items-center py-10 px-5 w-full md:px-10 lg:px-[60px]">
      <h2 className="font-swear-display text-[32px] leading-[1.2] text-center text-foreground font-normal mb-6 max-w-[600px] md:text-[40px] md:mb-8">
        {t('pressReviews.title')}
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-[800px]">
        {reviews.map((review, index) => (
          <a
            key={index}
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-fanwood-text text-base text-foreground hover:underline underline-offset-[3px] transition-opacity hover:opacity-70 px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:bg-opacity-5"
          >
            {review.name}
          </a>
        ))}
      </div>
    </section>
  );
}

