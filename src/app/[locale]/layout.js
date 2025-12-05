import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono, Federo } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
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

const keywords = [
  "open source blip alternative",
  "blip alternative",
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
  "open source",
  "free",
  "unlimited",
  "open source file transfer",
  "free file transfer",
  "unlimited file transfer",
  "open source file sharing",
  "free file sharing",
  "unlimited file sharing",
  "open source file transfer software",
  "free file transfer software",
  "unlimited file transfer software",
  "open source file sharing software",
  "free file sharing software",
  "unlimited file sharing software",
  "file sharing software",
  "desktop file transfer",
  "Windows file transfer",
  "macOS file transfer",
  "Linux file transfer",
];

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
    metadataBase: new URL('https://altsendme.com'),
    title: t('meta.title'),
    description: t('meta.description'),
    keywords,
    authors: [{ name: "tonyantony300", url: "https://github.com/tonyantony300" }],
    creator: "tonyantony300",
    publisher: "AltSendme",
    other: {
      "github:repository": "https://github.com/tonyantony300/alt-sendme",
      "review:softpedia-mac": "https://mac.softpedia.com/get/Internet-Utilities/AltSendme.shtml",
      "review:softpedia-linux": "https://linux.softpedia.com/get/Communications/Filesharing/AltSendme-104966.shtml",
      "review:neowin": "https://www.neowin.net/amp/altsendme-021/",
      "review:xda-developers": "https://www.xda-developers.com/i-swapped-dropbox-for-this-self-hosted-alternative/",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
    },
    applicationName: "AltSendme",
    category: "File Transfer Software",
    classification: "Desktop Application",
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
      ],
    },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] || 'en_US',
      url: `https://altsendme.com/${locale === 'en' ? '' : locale}`,
      siteName: "AltSendme",
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "AltSendme - Peer-to-peer file transfer application",
        },
      ],
      seeAlso: "https://github.com/tonyantony300/alt-sendme",
    },
    twitter: {
      card: "summary_large_image",
      title: t('meta.title'),
      description: t('meta.description'),
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
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${federo.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <StructuredData locale={locale} />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

