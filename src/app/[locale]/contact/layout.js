import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const ogLocaleMap = {
    en: 'en_US',
    ru: 'ru_RU',
    th: 'th_TH',
    de: 'de_DE',
    fr: 'fr_FR',
    ja: 'ja_JP',
    zh: 'zh_CN',
    ko: 'ko_KR'
  };

  return {
    metadataBase: new URL('https://altsendme.com'),
    title: 'Contact - AltSendme',
    description: 'Get in touch with AltSendme developer - Contact us for inquiries, support, or collaboration opportunities',
    keywords: [
      "contact",
      "contact AltSendme",
      "AltSendme contact",
      "file transfer contact",
      "hire developer",
      "AltSendme support",
      "reach out",
    ],
    authors: [{ name: "tonyantony300" }],
    creator: "tonyantony300",
    publisher: "AltSendme",
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] || 'en_US',
      url: `https://altsendme.com/${locale === 'en' ? '' : locale}/contact`,
      siteName: "AltSendme",
      title: 'Contact - AltSendme',
      description: 'Get in touch with AltSendme developer - Contact us for inquiries, support, or collaboration opportunities',
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "AltSendme Contact",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: 'Contact - AltSendme',
      description: 'Get in touch with AltSendme developer - Contact us for inquiries, support, or collaboration opportunities',
      images: ["/og-image.png"],
      creator: "@tonyantony300",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://altsendme.com/${locale === 'en' ? '' : locale}/contact`,
    },
  };
}

export default function ContactLayout({ children }) {
  return <>{children}</>;
}

