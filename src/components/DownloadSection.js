"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';

export default function DownloadSection() {
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
      id: "mac-apple-silicon",
      label: t('hero.downloadForMacAppleSilicon'),
      size: "12.6 MB",
      icon: "/applelogo.svg",
      url: "https://github.com/tonyantony300/alt-sendme/releases/download/v0.2.0/AltSendme_0.2.0_aarch64_darwin.dmg",
    },
    {
      id: "mac-intel",
      label: t('hero.downloadForMacIntel'),
      size: "13.1 MB",
      icon: "/applelogo.svg",
      url: "https://github.com/tonyantony300/alt-sendme/releases/download/v0.2.0/AltSendme_0.2.0_x64_darwin.dmg",
    },
    {
      id: "windows",
      label: t('hero.downloadForWindows'),
      size: "7.57 MB",
      icon: "/windows.svg",
      url: "https://github.com/tonyantony300/alt-sendme/releases/download/v0.2.0/AltSendme_0.2.0_x64-setup_windows.exe",
    },
    {
      id: "linux-appimage",
      label: t('hero.downloadForLinuxAppImage'),
      size: "86.8 MB",
      icon: "/linuxlogo.svg",
      url: "https://github.com/tonyantony300/alt-sendme/releases/download/v0.2.0/AltSendme_0.2.0_amd64_linux.AppImage",
    },
  ];

  const primaryDownload = downloadOptions.find((opt) => 
    (detectedOS === "mac" && opt.id === "mac-apple-silicon") ||
    (detectedOS === "windows" && opt.id === "windows") ||
    (detectedOS === "linux" && opt.id === "linux-appimage")
  ) || downloadOptions[0];

  return (
    <section className="flex flex-col items-center py-10 px-5 w-full md:px-10 lg:px-[60px]">
      <h2 className="font-swear-display text-[32px] leading-[1.2] text-center text-foreground font-normal mb-4 max-w-[600px] md:text-[40px] md:mb-6 lg:mb-8">
        {t('download.title')}
      </h2>

      <p className="font-fanwood-text text-lg text-center text-foreground mb-8 max-w-[600px] md:text-xl md:mb-10">
        {t('download.subtitle')}
      </p>

      <div className="relative w-full max-w-[460px] lg:max-w-[660px] download-container mb-6">
        {/* Button Group */}
        <div className="flex group hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] rounded-2xl transition-all border-2 border-foreground bg-transparent w-full rounded-[20px] lg:w-auto">
          {/* Main Download Button */}
          <a
            href={primaryDownload.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all h-16 rounded-[20px] px-6 text-xl flex-1 rounded-r-none border-0 shadow-none group-hover:shadow-none transform-none group-hover:transform-none bg-transparent hover:bg-transparent text-foreground"
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
                  <span className="font-federo text-sm font-bold flex-shrink-0 ml-2">{option.size}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="font-fanwood-text text-sm text-center text-foreground mb-6 md:text-base">
        {t('download.note')}
      </p>

      <div className="flex flex-col items-center gap-2 max-w-[600px]">
        <p className="font-fanwood-text text-base text-center text-foreground italic md:text-lg">
          {t('download.tagline1')}
        </p>
        <p className="font-fanwood-text text-base text-center text-foreground italic md:text-lg">
          {t('download.tagline2')}
        </p>
      </div>
    </section>
  );
}

