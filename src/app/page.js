"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex justify-between items-center py-6 px-5 w-full md:px-10 lg:px-[60px]">
        <div className="flex items-center gap-3">
          <Image
            src="/AltSendmelogo.png"
            alt="Altsendme logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-federo text-2xl text-foreground font-light lg:text-[28px]">AltSendme</span>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Image
            src="/bmclogo.png"
            alt="Buy me a coffee"
            width={14}
            height={14}
            className="flex-shrink-0"
          />
          <a href="#buy-me-a-coffee" className="font-federo text-base text-foreground font-light hover:underline underline-offset-[3px]">Buy me a coffee</a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center py-10 px-5 pb-[120px] w-full max-w-full mb-20 md:py-[15px] md:px-10 md:pb-[140px] md:mb-[100px] lg:py-[15px] lg:px-[60px] lg:pb-[160px] lg:mb-[120px]">
        <h1 className="font-swear-display text-[41px] leading-[1.2] text-center text-foreground font-normal mb-6 max-w-[600px] md:text-[48px] md:mb-8 md:max-w-[800px] lg:mb-10 lg:max-w-[1000px]">
         Send files <em className="italic font-normal">anywhere</em> - <br></br>fast, private, and simple.
        </h1>
        
        <div className="flex items-center justify-center gap-2 font-fanwood-text text-lg text-foreground -ml-8">
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
            Free & Open source
          </a>
        </div>

        <div className="w-full max-w-[460px] flex flex-col items-center">
          <Image
            src="/hero.png"
            alt="Hero image"
            width={1200}
            height={800}
            className="w-full h-auto object-contain mb-4"
            priority
          />
        </div>
      </main>

      <footer className="bg-footer-bg text-footer-text w-full py-6 px-5 fixed bottom-0 left-0 right-0 z-10 md:py-8 md:px-10 lg:px-[60px]">
        <div className="flex flex-col items-center gap-4 max-w-[1200px] mx-auto md:flex-row md:justify-between md:items-center md:gap-0">
          <p className="font-fanwood-text text-sm text-center md:text-left">© GNU Affero General Public License v3.0</p>
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6 md:items-center">
            <a href="mailto:placeholder@example.com" className="font-fanwood-text text-sm text-footer-text">Hire developer</a>
            <a href="#buy-me-a-coffee" className="font-fanwood-text text-sm text-footer-text block md:hidden flex items-center gap-2">
              Buy me a coffee
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
