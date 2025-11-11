"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations();
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      id: 'faq-1',
      question: t('faq.items.faq1.question'),
      answer: t.rich('faq.items.faq1.answer', {
        link: (chunks) => (
          <a 
            href="https://www.iroh.computer/docs/faq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            {chunks}
          </a>
        )
      })
    },
    {
      id: 'faq-2',
      question: t('faq.items.faq2.question'),
      answer: t('faq.items.faq2.answer')
    },
    {
      id: 'faq-3',
      question: t('faq.items.faq3.question'),
      answer: t('faq.items.faq3.answer')
    },
    {
      id: 'faq-4',
      question: t('faq.items.faq4.question'),
      answer: t('faq.items.faq4.answer')
    },
    {
      id: 'faq-5',
      question: t('faq.items.faq5.question'),
      answer: t('faq.items.faq5.answer')
    },
    {
      id: 'faq-6',
      question: t('faq.items.faq6.question'),
      answer: t('faq.items.faq6.answer')
    },
  ];

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
        {t('faq.title')}
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

