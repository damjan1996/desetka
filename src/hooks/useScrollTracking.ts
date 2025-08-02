import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../services/gtm';

/**
 * Hook to track scroll depth for GTM
 */
export const useScrollTracking = () => {
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const depths = [25, 50, 75, 90, 100];

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage = Math.round(
          ((scrollTop + windowHeight) / documentHeight) * 100
        );

        // Track each depth milestone only once
        depths.forEach(depth => {
          if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
            trackedDepths.current.add(depth);
            trackScrollDepth(depth);
          }
        });
      }, 100); // Debounce scroll events
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Reset tracked depths when route changes
  useEffect(() => {
    trackedDepths.current.clear();
  }, [window.location.pathname]);
};