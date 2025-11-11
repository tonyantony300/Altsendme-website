"use client";

import { useState } from 'react';

const faqs = [
  {
    id: 'faq-1',
    question: 'What is AltSendme and how does it work?',
    answer: (
      <>
        AltSendme is a minimal, cross-platform desktop application that lets users send files and directories peer-to-peer anywhere in the world. It is built around the{' '}
        <a 
          href="https://www.iroh.computer/docs/faq" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:opacity-80 transition-opacity"
        >
          Iroh networking stack
        </a>
        {' '}and uses open-source public connection relays to perform advanced techniques like NAT traversal and hole punching to reach the destination.
      </>
    )
  },
  {
    id: 'faq-2',
    question: 'Is AltSendme free to use?',
    answer: 'Yes, AltSendme currently has no infrastructure costs. If you benefit from this work, consider supporting the developer through Buy Me a Coffee or GitHub Sponsors.'
  },
  {
    id: 'faq-3',
    question: 'What file types can I transfer with AltSendme?',
    answer: 'You can transfer anything—images, videos, documents, and more. Integrity checks are performed on both ends, so your files are automatically verified for correctness during both sending and receiving.'
  },
  {
    id: 'faq-4',
    question: 'How secure is my data when using AltSendme?',
    answer: 'AltSendme uses strong end-to-end encryption based on modern standards like TLS 1.3 and QUIC, ensuring that only you and the recipient can access your data. It provides forward and backward secrecy, so even if tickets are exposed, past and future transfers remain secure.'
  },
  {
    id: 'faq-5',
    question: 'How does it compare to FilePizza, Wormhole, and PairDrop?',
    answer: 'AltSendme offers a better file-sharing experience than web-only tools like FilePizza, Wormhole, or PairDrop. By leveraging QUIC over UDP, it enables faster, resilient peer-to-peer transfers with built-in encryption, authentication, and stream multiplexing. Its desktop app allows sending large files and full folders with pause/resume support and fewer browser limitations. Additionally, integrity and cryptographic operations are optimized for speed, making AltSendme a reliable choice for verified transfers.'
  },
  {
    id: 'faq-6',
    question: 'Do I need an internet connection to use AltSendme?',
    answer: 'Yes, a network connection is required because the devices must connect to each other. If both devices are on the same local network (e.g., the same Wi-Fi), full internet access is not necessary—just LAN connectivity. However, if devices are on different networks behind NATs or firewalls, an internet connection is required for hole punching or relay fallback.'
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="flex flex-col items-center pt-10 pb-10 px-5 w-full md:px-10 md:pb-20 lg:px-[60px] lg:pb-24">
      <h1 className="font-swear-display text-[32px] leading-[1.2] text-center text-foreground font-normal mb-8 max-w-[600px] md:text-[40px] md:mb-10 lg:mb-12">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-[1000px] flex flex-col gap-4">
        {faqs.map((faq) => {
          const isOpen = openItems.has(faq.id);
          return (
            <details
              key={faq.id}
              open={isOpen}
              className="border-2 border-foreground rounded-[20px] bg-background overflow-hidden"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(faq.id);
                }}
                className="font-swear-display text-lg text-foreground font-medium px-6 py-4 cursor-pointer list-none md:text-xl hover:bg-foreground hover:bg-opacity-5 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`${faq.id}-content`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleItem(faq.id);
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </div>
              </summary>
              <div
                id={`${faq.id}-content`}
                className="px-6 pb-4 pt-2"
                aria-hidden={!isOpen}
              >
                <p className="font-fanwood-text text-base text-foreground md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

