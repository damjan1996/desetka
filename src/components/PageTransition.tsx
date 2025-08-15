"use client"
import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useScrollContext } from './ScrollContext'

interface PageTransitionProps {
    children: React.ReactNode
}

const Logo = () => {
    const [imageError, setImageError] = useState(false);
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4 },
            }}
            exit={{
                opacity: 0,
                scale: 1.2,
                transition: { duration: 0.3 },
            }}
            className="w-16 h-16 relative"
        >
            {!imageError ? (
                <img
                    src="/loading-logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain filter brightness-200"
                    onError={() => setImageError(true)}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-2xl bg-zinc-800 rounded-full">
                    DS
                </div>
            )}
        </motion.div>
    );
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation()
    const [isTransitioning, setIsTransitioning] = useState(true) // Start with transition on initial load
    const [showContent, setShowContent] = useState(false)
    const { setIsTransitioning: setGlobalTransitioning } = useScrollContext()
    const previousPathRef = useRef<string | null>(null)
    const isFirstMount = useRef(true)

    // Handle initial page load transition
    useEffect(() => {
        if (isFirstMount.current) {
            setIsTransitioning(true);
            setGlobalTransitioning(true);
            
            // Show content after transition animation
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setGlobalTransitioning(false);
                setShowContent(true);
                isFirstMount.current = false;
            }, 1200);
            
            return () => clearTimeout(timer);
        }
    }, [setGlobalTransitioning]);

    useEffect(() => {
        // Skip on first mount
        if (isFirstMount.current) {
            previousPathRef.current = location.pathname;
            return;
        }

        // Only animate if path actually changed
        if (location.pathname === previousPathRef.current) {
            return;
        }

        // Hide content immediately
        setShowContent(false);
        
        // Small delay to ensure React has finished updating
        const startTimer = setTimeout(() => {
            // Update previous path
            previousPathRef.current = location.pathname;

            // Reset scroll position
            window.scrollTo(0, 0);

            // Start transition
            setIsTransitioning(true);
            setGlobalTransitioning(true);

            // End transition after animation and show new content
            const endTimer = setTimeout(() => {
                setIsTransitioning(false);
                setGlobalTransitioning(false);
                setShowContent(true);
            }, 1200);

            // Store the end timer for cleanup
            (window as unknown as Window & { __pageTransitionEndTimer?: NodeJS.Timeout }).__pageTransitionEndTimer = endTimer;
        }, 10);

        return () => {
            clearTimeout(startTimer);
            const windowWithTimer = window as unknown as Window & { __pageTransitionEndTimer?: NodeJS.Timeout };
            if (windowWithTimer.__pageTransitionEndTimer) {
                clearTimeout(windowWithTimer.__pageTransitionEndTimer);
            }
            setIsTransitioning(false);
            setGlobalTransitioning(false);
        };
    }, [location.pathname, setGlobalTransitioning]);

    return (
        <>
            {/* Page transition overlay - always on top */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        key="transition-overlay"
                        className="fixed inset-0 bg-zinc-900/95 backdrop-blur-sm flex items-center justify-center page-transition-active"
                        style={{ zIndex: 9999 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Logo />
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Content - only show when transition is complete */}
            <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContent ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default PageTransition