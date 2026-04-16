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

  // Track scroll depth
  useEffect(() => {
    let scrollTracked = false;
    const handleScroll = () => {
      if (scrollTracked) return;
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);
      
      // Track at key milestones
      if (percentage >= 25 && percentage < 50) {
        trackScroll(25);
        scrollTracked = true;
      } else if (percentage >= 50 && percentage < 75) {
        trackScroll(50);
      } else if (percentage >= 75) {
        trackScroll(75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
