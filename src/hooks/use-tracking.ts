"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAnalytics } from "@/components/analytics";

export function useTracking() {
  const pathname = usePathname();
  const { trackPageView, trackScroll, trackTimeOnPage } = useAnalytics();
  
  // Track page views
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, trackPageView]);

  // Track scroll depth (throttled + passive — evita trabalho a cada pixel e corrige marcos 25/50/75)
  useEffect(() => {
    const hit = { 25: false, 50: false, 75: false };
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;

        const percentage = Math.round((window.scrollY / scrollHeight) * 100);

        if (percentage >= 75 && !hit[75]) {
          hit[75] = true;
          trackScroll(75);
        }
        if (percentage >= 50 && !hit[50]) {
          hit[50] = true;
          trackScroll(50);
        }
        if (percentage >= 25 && !hit[25]) {
          hit[25] = true;
          trackScroll(25);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackScroll]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    };
  }, [trackTimeOnPage]);
}
