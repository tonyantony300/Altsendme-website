"use client";

import { useEffect, useRef } from "react";

export default function TallyPopup() {
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    // Set up Intersection Observer to detect when download section is in view
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasOpenedRef.current) {
          // Wait for Tally to be ready
          const checkTally = setInterval(() => {
            if (typeof window.Tally !== "undefined") {
              clearInterval(checkTally);
              hasOpenedRef.current = true;
              window.Tally.openPopup("ob2Vkx", {
                layout: "default",
                width: 440,
                hideTitle: true,
                overlay: true,
                emoji: {
                  text: "❤️",
                  animation: "heart-beat",
                },
              });
            }
          }, 100);

          // Cleanup after 5 seconds if Tally doesn't load
          setTimeout(() => clearInterval(checkTally), 5000);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Find the download section element
    const downloadSection = document.querySelector("#download-section");
    if (downloadSection) {
      observer.observe(downloadSection);
    }

    return () => {
      if (downloadSection) {
        observer.unobserve(downloadSection);
      }
    };
  }, []);

  return null;
}
