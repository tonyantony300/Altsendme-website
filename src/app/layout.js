import { Geist, Geist_Mono, Federo } from "next/font/google";
import "./globals.css";
import StructuredData from "./StructuredData";

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

// Note: Swear Display and Fanwood Text may not be available on Google Fonts
// Using CSS fallbacks defined in tailwind.config.js
// If these fonts don't exist, the fallback "Times New Roman" will be used

export const metadata = {
  title: "AltSendme - Send files anywhere | Frictionless, Fast, Private, Unlimited and Free",
  description: "AltSendme is a frictionless peer-to-peer file transfer cross-platform desktop application. Send files and directories over the internet with no account requirements, end-to-end encryption, unlimited transfers, and full privacy control. Available for Windows, macOS, and Linux.",
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
    locale: "en_US",
    url: "https://altsendme.com",
    siteName: "AltSendme",
    title: "AltSendme - Send files anywhere | Frictionless, Fast, Private, Unlimited and Free",
    description: "Frictionless peer-to-peer file transfer. No account required. End-to-end encrypted. Unlimited, fast, free, and open-source. Cross-platform desktop app for Windows, macOS, and Linux.",
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
    title: "AltSendme - Send files anywhere | Frictionless, Fast, Private, Unlimited and Free",
    description: "Frictionless peer-to-peer file transfer. No account required. End-to-end encrypted. Unlimited, fast, free, and open-source.",
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
    canonical: "https://altsendme.com",
    languages: {
      en: "https://altsendme.com",
      fr: "https://altsendme.com/fr",
      th: "https://altsendme.com/th",
      de: "https://altsendme.com/de",
      zh: "https://altsendme.com/zh",
      ja: "https://altsendme.com/ja",
      ru: "https://altsendme.com/ru",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${federo.variable}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
