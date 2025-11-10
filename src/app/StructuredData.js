export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AltSendme",
    "applicationCategory": "FileTransferApplication",
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AltSendme is an open-source, frictionless peer-to-peer file transfer cross-platform desktop application. Send files and directories over the internet with no account requirements, end-to-end encryption using QUIC + TLS 1.3, unlimited transfers, and full privacy control. Features include NAT hole punching, verified streaming with Blake3, resumable downloads, and CLI compatibility with sendme tool.",
    "featureList": [
      "Peer-to-peer file transfer",
      "No account required",
      "End-to-end encryption (QUIC + TLS 1.3)",
      "Unlimited file size and transfers",
      "Cross-platform (Windows, macOS, Linux)",
      "NAT hole punching",
      "Verified streaming (Blake3)",
      "Resumable downloads",
      "CLI compatible with sendme",
      "Open source (AGPL-3.0)",
      "Free and unlimited"
    ],
    "softwareVersion": "0.2.0",
    "releaseNotes": "Cross-platform desktop application for frictionless file transfer",
    "license": "https://www.gnu.org/licenses/agpl-3.0.html",
    "author": {
      "@type": "Person",
      "name": "tonyantony300"
    },
    "downloadUrl": "https://github.com/tonyantony300/alt-sendme/releases",
    "codeRepository": "https://github.com/tonyantony300/alt-sendme",
    "isAccessibleForFree": true,
    "softwareHelp": "https://www.iroh.computer/docs/faq",
    "applicationSubCategory": "File Sharing",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "Softpedia"
      },
      "reviewBody": "AltSendme received a 4.5/5 rating from Softpedia",
      "url": "https://mac.softpedia.com/get/Internet-Utilities/AltSendme.shtml"
    },
    "screenshot": "https://altsendme.com/hero.png",
    "keywords": "file transfer, peer-to-peer, P2P, encrypted, secure, private, cross-platform, free, unlimited, open source, iroh, sendme",
    "inLanguage": ["en", "fr", "th", "de", "zh", "ja", "ru"],
    "browserRequirements": "Requires desktop application installation",
    "softwareRequirements": "Windows 10+, macOS 10.13+, or Linux",
    "permissions": "File system access for sending and receiving files"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AltSendme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AltSendme is an open-source, frictionless peer-to-peer file transfer cross-platform desktop application that allows you to send files and directories over the internet. It requires no account, uses end-to-end encryption, and offers unlimited transfers for free. The source code is available on GitHub under the AGPL-3.0 license."
        }
      },
      {
        "@type": "Question",
        "name": "Is AltSendme free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AltSendme is completely free and open-source. There are no limits on file size or number of transfers."
        }
      },
      {
        "@type": "Question",
        "name": "Is AltSendme secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AltSendme uses end-to-end encryption with QUIC + TLS 1.3. All traffic between endpoints is encrypted, and there are no account requirements, ensuring maximum privacy."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms does AltSendme support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AltSendme is available for Windows, macOS (both Apple Silicon and Intel), and Linux (deb and AppImage formats)."
        }
      },
      {
        "@type": "Question",
        "name": "How does AltSendme work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AltSendme uses iroh networking library for peer-to-peer file transfer. It handles NAT traversal automatically through hole punching, falling back to a relay if needed. Files are transferred directly between sender and receiver with end-to-end encryption."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an account to use AltSendme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, AltSendme requires no account. It enables direct transfer between sender and receiver without any registration or login."
        }
      },
      {
        "@type": "Question",
        "name": "Can I resume interrupted downloads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AltSendme supports resumable downloads. If a download is interrupted, you can resume it seamlessly without starting over."
        }
      },
      {
        "@type": "Question",
        "name": "Is AltSendme compatible with the sendme CLI tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AltSendme is interoperable with the sendme CLI tool. Tickets generated by the CLI can be used in the desktop app and vice versa, and both versions can send/receive to each other."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}

