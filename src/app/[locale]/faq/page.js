"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

