"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [detectedOS, setDetectedOS] = useState("mac");

  useEffect(() => {
    // Detect OS
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("win") !== -1) {
      setDetectedOS("windows");
    } else if (userAgent.indexOf("mac") !== -1) {
      setDetectedOS("mac");
    } else if (userAgent.indexOf("linux") !== -1) {
      setDetectedOS("linux");
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.download-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);


  const downloadOptions = [
    {
      id: "mac",
      label: t('hero.downloadForMac'),
      size: "25.5 MB",
      icon: "/applelogo.svg",
      url: "https://github.com/tonyantony300/alt-sendme/releases/download/v0.2.1/AltSendme_0.2.1_universal.dmg",
    },
    {
      id: "windows",
      label: t('hero.downloadForWindows'),
      size: "7.57 MB",
      icon: "/windows.svg",
      url: "https://github.com/tonyantony300/alt-sendme/releases/download/v0.2.1/AltSendme_0.2.1_x64-setup.exe",
    },
    {
      id: "linux-appimage",
      label: t('hero.downloadForLinux'),
      size: "86.8 MB",
      icon: "/linuxlogo.svg",
      url: "https://github.com/tonyantony300/alt-sendme/releases/download/v0.2.1/AltSendme_0.2.1_amd64.AppImage",
    },
  ];

  const primaryDownload = downloadOptions.find((opt) => 
    (detectedOS === "mac" && opt.id === "mac") ||
    (detectedOS === "windows" && opt.id === "windows") ||
    (detectedOS === "linux" && opt.id === "linux-appimage")
  ) || downloadOptions[0];

  return (
    <section className="flex flex-col items-center py-10 px-5 w-full md:px-10 lg:px-[60px]">
      <h1 className="font-swear-display text-[41px] leading-[1.2] text-center text-foreground font-normal mb-6 max-w-[600px] md:text-[48px] md:mb-6 md:max-w-[800px] lg:mb-8 lg:max-w-[1000px]">
        {t('hero.title')}
      </h1>

      <p className="font-fanwood-text text-base text-center text-foreground mb-6 max-w-[600px] md:text-lg md:mb-8">
        {t('hero.description')}
      </p>

      <div className="flex flex-col items-center gap-3 mb-6 md:mb-8">
        <p className="font-fanwood-text text-base text-center text-foreground italic max-w-[600px] md:text-lg">
          {t('hero.airdropQuote')}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 font-fanwood-text text-lg text-foreground mb-8">
        <Image
          src="/github.png"
          alt="GitHub"
          width={18}
          height={18}
          className="flex-shrink-0"
        />
        <a 
          href="https://github.com/tonyantony300/alt-sendme" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground hover:underline underline-offset-[3px] transition-opacity hover:opacity-70"
        >
          {t('common.freeAndOpenSource')}
        </a>
      </div>

      <div className="w-full max-w-[460px] lg:max-w-[660px] flex flex-col items-center">
        {/* Download Button */}
        <div className="relative w-full rounded-[20px] lg:w-auto download-container mb-8">
          {/* Button Group */}
          <div className="flex group hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] rounded-2xl transition-all border-2 border-foreground bg-transparent w-full rounded-[20px] lg:w-auto">
            {/* Main Download Button */}
            <a
              href={primaryDownload.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all h-16 rounded-[20px] px-4 text-base md:px-6 md:text-lg lg:text-xl flex-1 rounded-r-none border-0 shadow-none group-hover:shadow-none transform-none group-hover:transform-none bg-transparent hover:bg-transparent text-foreground"
            >
              <Image
                src={primaryDownload.icon}
                alt=""
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <span className="font-federo font-medium">{primaryDownload.label}</span>
            </a>
            
            {/* Chevron Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all h-16 rounded-[20px] px-3 rounded-l-none border-0 flex-shrink-0 shadow-none group-hover:shadow-none transform-none group-hover:transform-none bg-transparent hover:bg-transparent text-foreground border-l-2 border-foreground"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="m7 15 5 5 5-5"></path>
                <path d="m7 9 5-5 5 5"></path>
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 w-full lg:w-[400px] bg-background rounded-[20px] overflow-hidden shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground z-40">
              <div className="m-1 overflow-hidden">
                {downloadOptions.map((option) => (
                  <a
                    key={option.id}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:text-foreground hover:bg-foreground hover:bg-opacity-5 rounded-2xl transition-all whitespace-nowrap"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Image
                        src={option.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      <span className="font-federo font-medium text-base truncate">{option.label}</span>
                    </div>
                    <span className="font-federo text-sm flex-shrink-0 ml-2">{option.size}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <Image
          src="/hero.png"
          alt="Hero image"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}

