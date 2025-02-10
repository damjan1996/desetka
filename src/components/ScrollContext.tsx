// ScrollContext.tsx
import React, { createContext, useContext, useState, useCallback } from 'react';

interface ScrollContextType {
    isTransitioning: boolean;
    setIsTransitioning: (value: boolean) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
    lockScroll: () => void;
    unlockScroll: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const lockScroll = useCallback(() => {
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
    }, []);

    const unlockScroll = useCallback(() => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, []);

    return (
        <ScrollContext.Provider
            value={{
                isTransitioning,
                setIsTransitioning,
                isMenuOpen,
                setIsMenuOpen,
                lockScroll,
                unlockScroll
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScrollContext must be used within a ScrollProvider');
    }
    return context;
};