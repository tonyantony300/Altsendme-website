"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const accessKey = "5f8ad34e-532c-4372-b840-f93bc9ff89a0";
    
    if (!accessKey) {
      setError(t('contact.error'));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          _captcha: false,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError(t('contact.error'));
      }
    } catch (err) {
      setError(t('contact.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center pt-10 pb-10 px-5 w-full md:px-10 md:pb-20 lg:px-[60px] lg:pb-24">
      <h1 className="font-swear-display text-[32px] leading-[1.2] text-center text-foreground font-normal mb-8 max-w-[600px] md:text-[40px] md:mb-10 lg:mb-12">
        {t('contact.title')}
      </h1>

      <div className="w-full max-w-[600px]">
        {submitted ? (
          <div className="border-2 border-foreground rounded-[20px] bg-background p-6 text-center">
            <p className="font-fanwood-text text-base text-foreground md:text-lg">
              {t('contact.success')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-fanwood-text text-base text-foreground mb-2 md:text-lg">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-foreground rounded-[20px] bg-background text-foreground font-fanwood-text text-base md:text-lg focus:outline-none focus:ring-0 hover:bg-foreground hover:bg-opacity-5 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-fanwood-text text-base text-foreground mb-2 md:text-lg">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-foreground rounded-[20px] bg-background text-foreground font-fanwood-text text-base md:text-lg focus:outline-none focus:ring-0 hover:bg-foreground hover:bg-opacity-5 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-fanwood-text text-base text-foreground mb-2 md:text-lg">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 border-2 border-foreground rounded-[20px] bg-background text-foreground font-fanwood-text text-base md:text-lg focus:outline-none focus:ring-0 hover:bg-foreground hover:bg-opacity-5 transition-colors resize-none"
              ></textarea>
            </div>

            {error && (
              <div className="border-2 border-foreground rounded-[20px] bg-background p-4">
                <p className="font-fanwood-text text-base text-foreground md:text-lg">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full border-2 border-foreground rounded-[20px] bg-background text-foreground font-federo font-medium py-4 px-6 text-base md:text-lg shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-foreground hover:bg-opacity-5 disabled:opacity-50"
            >
              {loading ? t('contact.submitting') || 'Sending...' : t('contact.submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

