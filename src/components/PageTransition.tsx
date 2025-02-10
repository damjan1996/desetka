"use client"
import React, { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence, cubicBezier } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useScrollContext } from './ScrollContext'

interface PageTransitionProps {
    children: React.ReactNode
}

const customEase = cubicBezier(0.25, 0.1, 0.25, 1)

const Logo = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: customEase },
        }}
        exit={{
            opacity: 0,
            scale: 1.2,
            transition: { duration: 0.3, ease: customEase },
        }}
        className="w-16 h-16"
    >
        <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain filter brightness-200"
        />
    </motion.div>
)

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation()
    const [showLogo, setShowLogo] = useState(false)
    const [showContent, setShowContent] = useState(true)
    const { setIsTransitioning, lockScroll, unlockScroll } = useScrollContext()

    const resetScroll = useCallback(() => {
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        });
    }, []);

    const handleTransitionStart = useCallback(() => {
        setIsTransitioning(true);
        lockScroll();
        setShowContent(false);
        setShowLogo(true);
    }, [setIsTransitioning, lockScroll]);

    const handleTransitionEnd = useCallback(() => {
        setShowContent(true);
        setShowLogo(false);
        setIsTransitioning(false);
        unlockScroll();
        resetScroll();
    }, [setIsTransitioning, unlockScroll, resetScroll]);

    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setShowLogo(false);
        }, 800);

        const transitionTimer = setTimeout(() => {
            handleTransitionEnd();
        }, 1000);

        handleTransitionStart();

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(transitionTimer);
            unlockScroll();
        };
    }, [location.pathname, handleTransitionStart, handleTransitionEnd, unlockScroll]);

    return (
        <div className="relative min-h-screen bg-zinc-900">
            <AnimatePresence mode="wait">
                {showLogo && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-zinc-900 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: customEase }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Logo />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {showContent && (
                    <motion.div
                        className="relative z-0 min-h-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: customEase,
                        }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default PageTransition