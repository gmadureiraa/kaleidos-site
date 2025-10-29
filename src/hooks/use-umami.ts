"use client";

import { useCallback } from "react";

// Tipo para o objeto Umami global
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

export function useUmami() {
  const trackEvent = useCallback((eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track(eventName, eventData);
    }
  }, []);

  const trackClick = useCallback((elementName: string, location?: string, additionalData?: Record<string, unknown>) => {
    trackEvent("click", {
      element: elementName,
      location: location || "unknown",
      ...additionalData,
    });
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string, location?: string, action?: string) => {
    trackEvent("button_click", {
      button: buttonName,
      location: location || "unknown",
      action: action || "click",
    });
  }, [trackEvent]);

  const trackLinkClick = useCallback((linkUrl: string, linkText?: string, location?: string) => {
    trackEvent("link_click", {
      url: linkUrl,
      text: linkText || "",
      location: location || "unknown",
    });
  }, [trackEvent]);

  const trackConversion = useCallback((conversionType: string, value?: number, additionalData?: Record<string, unknown>) => {
    trackEvent("conversion", {
      type: conversionType,
      value: value || 0,
      ...additionalData,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackClick,
    trackButtonClick,
    trackLinkClick,
    trackConversion,
  };
}
