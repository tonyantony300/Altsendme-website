import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono, Federo } from "next/font/google";
import { routing } from '@/i18n/routing';
import StructuredData from './StructuredData';
import '../globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const federo = Federo({
  variable: "--font-federo",
  weight: "400",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: [
      "file transfer",
      "peer-to-peer",
      "P2P file sharing",
      "encrypted file transfer",
      "cross-platform file transfer",
      "secure file sharing",
      "private file transfer",
      "free file transfer",
      "unlimited file transfer",
      "AltSendme",
      "sendme",
      "iroh",
      "file sharing software",
      "desktop file transfer",
      "Windows file transfer",
      "macOS file transfer",
      "Linux file transfer",
    ],
    authors: [{ name: "tonyantony300" }],
    creator: "tonyantony300",
    publisher: "AltSendme",
    applicationName: "AltSendme",
    category: "File Transfer Software",
    classification: "Desktop Application",
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] || 'en_US',
      url: `https://altsendme.com/${locale === 'en' ? '' : locale}`,
      siteName: "AltSendme",
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: "/hero.png",
          width: 1200,
          height: 800,
          alt: "AltSendme - Peer-to-peer file transfer application",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('meta.title'),
      description: t('meta.description'),
      images: ["/hero.png"],
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
      canonical: `https://altsendme.com/${locale === 'en' ? '' : locale}`,
      languages: {
        en: "https://altsendme.com",
        ru: "https://altsendme.com/ru",
        th: "https://altsendme.com/th",
        de: "https://altsendme.com/de",
        fr: "https://altsendme.com/fr",
        ja: "https://altsendme.com/ja",
        zh: "https://altsendme.com/zh",
        ko: "https://altsendme.com/ko",
      },
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${federo.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <StructuredData locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

