"use client";

import React, { useState, useEffect } from "react";

// Hook para detectar tamanho da tela e orientação
export function useResponsive() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLandscape: false,
    isPortrait: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        isLandscape: width > height,
        isPortrait: height > width,
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    window.addEventListener('orientationchange', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('orientationchange', updateScreenSize);
    };
  }, []);

  return screenSize;
}

// Hook para touch targets adequados
export function useTouchTarget() {
  const { isMobile } = useResponsive();
  
  return {
    minTouchTarget: isMobile ? 44 : 32, // 44px mínimo para mobile (Apple guidelines)
    padding: isMobile ? "px-4 py-3" : "px-3 py-2",
    fontSize: isMobile ? "text-base" : "text-sm",
  };
}

// Componente wrapper responsivo
interface ResponsiveWrapperProps {
  children: React.ReactNode;
  mobile?: React.ReactNode;
  tablet?: React.ReactNode;
  desktop?: React.ReactNode;
  className?: string;
}

export function ResponsiveWrapper({ 
  children, 
  mobile, 
  tablet, 
  desktop, 
  className = "" 
}: ResponsiveWrapperProps) {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const getContent = () => {
    if (isMobile && mobile) return mobile;
    if (isTablet && tablet) return tablet;
    if (isDesktop && desktop) return desktop;
    return children;
  };

  return (
    <div className={className}>
      {getContent()}
    </div>
  );
}

// Hook para breakpoints customizados
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<string>("");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width < 480) setBreakpoint("xs");
      else if (width < 768) setBreakpoint("sm");
      else if (width < 1024) setBreakpoint("md");
      else if (width < 1280) setBreakpoint("lg");
      else if (width < 1536) setBreakpoint("xl");
      else setBreakpoint("2xl");
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}

// Hook para orientação
export function useOrientation() {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? "portrait" : "landscape");
    };

    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);

    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return orientation;
}

// Hook para detectar se é dispositivo touch
export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore
      navigator.msMaxTouchPoints > 0
    );
  }, []);

  return isTouchDevice;
}

// Hook para safe area (notch, etc.)
export function useSafeArea() {
  const [safeArea, setSafeArea] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    const updateSafeArea = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      
      setSafeArea({
        top: parseInt(computedStyle.getPropertyValue('--safe-area-inset-top') || '0'),
        right: parseInt(computedStyle.getPropertyValue('--safe-area-inset-right') || '0'),
        bottom: parseInt(computedStyle.getPropertyValue('--safe-area-inset-bottom') || '0'),
        left: parseInt(computedStyle.getPropertyValue('--safe-area-inset-left') || '0'),
      });
    };

    updateSafeArea();
    window.addEventListener('resize', updateSafeArea);

    return () => window.removeEventListener('resize', updateSafeArea);
  }, []);

  return safeArea;
}
