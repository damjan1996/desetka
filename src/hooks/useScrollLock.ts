// hooks/useScrollLock.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollContext } from '../components/ScrollContext';

export const useScrollLock = (lock: boolean) => {
    const location = useLocation();
    const { isTransitioning, lockScroll, unlockScroll } = useScrollContext();

    // Handle lock state changes
    useEffect(() => {
        if (lock && !isTransitioning) {
            lockScroll();
        } else {
            unlockScroll();
        }
    }, [lock, isTransitioning, lockScroll, unlockScroll]);

    // Handle location changes
    useEffect(() => {
        const timeout = setTimeout(() => {
            unlockScroll();
            window.scrollTo(0, 0);
        }, 100);
        return () => clearTimeout(timeout);
    }, [location.pathname, unlockScroll]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            unlockScroll();
        };
    }, [unlockScroll]);
};