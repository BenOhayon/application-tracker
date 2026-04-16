import { useEffect, useState } from "react";

const useIsResolution = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(`(max-width: ${breakpoint}px)`).matches
  );
  
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);
  
  return isMobile;
}

export const useIsMobile = (): boolean => {
  return useIsResolution(650);
}

export const useIsTablet = (): boolean => {
  return useIsResolution(900);
}

export const useIsDesktop = (): boolean => {
  return useIsResolution(900);
}