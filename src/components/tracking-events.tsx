"use client";

import { useAnalytics } from "./analytics";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Componente para tracking automático de páginas
export function PageTracking() {
  const { trackPageView } = useAnalytics();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, trackPageView]);

  return null;
}

// Hook para tracking de interações com cases
export function useCaseTracking() {
  const { trackEvent } = useAnalytics();

  const trackCaseView = (caseName: string) => {
    trackEvent('case_view', 'engagement', caseName);
  };

  const trackCaseVideoPlay = (caseName: string, videoName: string) => {
    trackEvent('case_video_play', 'engagement', `${caseName} - ${videoName}`);
  };

  const trackCaseContact = (caseName: string) => {
    trackEvent('case_contact', 'conversion', caseName);
  };

  return {
    trackCaseView,
    trackCaseVideoPlay,
    trackCaseContact,
  };
}

// Hook para tracking de serviços
export function useServiceTracking() {
  const { trackEvent } = useAnalytics();

  const trackServiceView = (serviceName: string) => {
    trackEvent('service_view', 'engagement', serviceName);
  };

  const trackServiceContact = (serviceName: string) => {
    trackEvent('service_contact', 'conversion', serviceName);
  };

  return {
    trackServiceView,
    trackServiceContact,
  };
}

// Hook para tracking de navegação
export function useNavigationTracking() {
  const { trackEvent } = useAnalytics();

  const trackMenuClick = (menuItem: string) => {
    trackEvent('menu_click', 'navigation', menuItem);
  };

  const trackCTAClick = (ctaType: string, location: string) => {
    trackEvent('cta_click', 'conversion', `${ctaType} - ${location}`);
  };

  return {
    trackMenuClick,
    trackCTAClick,
  };
}

// Hook para tracking de performance
export function usePerformanceTracking() {
  const { trackEvent } = useAnalytics();

  const trackPageLoadTime = (loadTime: number) => {
    trackEvent('page_load_time', 'performance', 'page_load', loadTime);
  };

  const trackVideoLoadTime = (videoName: string, loadTime: number) => {
    trackEvent('video_load_time', 'performance', videoName, loadTime);
  };

  return {
    trackPageLoadTime,
    trackVideoLoadTime,
  };
} 