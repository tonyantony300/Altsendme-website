import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
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
    title: 'FAQ - AltSendme',
    description: 'Frequently asked questions about AltSendme - peer-to-peer file transfer application',
    keywords: [
      "FAQ",
      "frequently asked questions",
      "AltSendme FAQ",
      "file transfer FAQ",
      "peer-to-peer FAQ",
      "P2P file sharing questions",
      "AltSendme help",
    ],
    authors: [{ name: "tonyantony300" }],
    creator: "tonyantony300",
    publisher: "AltSendme",
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] || 'en_US',
      url: `https://altsendme.com/${locale === 'en' ? '' : locale}/faq`,
      siteName: "AltSendme",
      title: 'FAQ - AltSendme',
      description: 'Frequently asked questions about AltSendme - peer-to-peer file transfer application',
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "AltSendme FAQ",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: 'FAQ - AltSendme',
      description: 'Frequently asked questions about AltSendme - peer-to-peer file transfer application',
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
      canonical: `https://altsendme.com/${locale === 'en' ? '' : locale}/faq`,
    },
  };
}

export default function FAQLayout({ children }) {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AltSendme and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      },
      {
        "@type": "Question",
        "name": "Is AltSendme free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      },
      {
        "@type": "Question",
        "name": "What file types can I transfer with AltSendme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is my data when using AltSendme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      },
      {
        "@type": "Question",
        "name": "What operating systems does AltSendme support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an internet connection to use AltSendme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      },
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {children}
    </>
  );
}

