"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturesGrid from '@/components/FeaturesGrid';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonial from '@/components/Testimonial';
import PressReviews from '@/components/PressReviews';
import DownloadSection from '@/components/DownloadSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <HowItWorks />
        <FeaturesGrid />
        <ComparisonTable />
        <Testimonial />
        <PressReviews />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
}

