import { useState, useEffect, useRef } from 'react';

export function useContextPreservation(breakpoint = 768) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  const resizeTimeoutRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current);
      
      resizeTimeoutRef.current = setTimeout(() => {
        const newIsMobile = window.innerWidth < breakpoint;
        
        if (newIsMobile !== isMobile) {
          setIsMobile(newIsMobile);
          // Context is preserved via activeIndex state
        }
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeoutRef.current);
    };
  }, [isMobile, breakpoint]);
  
  return { activeIndex, setActiveIndex, isMobile };
}