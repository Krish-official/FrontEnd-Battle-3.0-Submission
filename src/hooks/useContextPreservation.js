// src/hooks/useContextPreservation.js
import { useState, useEffect, useRef } from 'react';

export function useContextPreservation(breakpoint = 768) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < breakpoint
  );
  const resizeTimerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Debounce to prevent excessive calls
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        const newIsMobile = window.innerWidth < breakpoint;

        if (newIsMobile !== isMobile) {
          setIsMobile(newIsMobile);
          // activeIndex is PRESERVED automatically
          // If bento card #2 was hovered → accordion #2 opens
        }
      }, 50);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimerRef.current);
    };
  }, [isMobile, breakpoint]);

  return { activeIndex, setActiveIndex, isMobile };
}