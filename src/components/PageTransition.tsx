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
    const { setIsTransitioning } = useScrollContext()
    const [isAnimating, setIsAnimating] = useState(false)

    const resetScroll = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }, [])

    const startTransition = useCallback(() => {
        setIsAnimating(true)
        setIsTransitioning(true)
        setShowContent(false)
        setShowLogo(true)
    }, [setIsTransitioning])

    const finishTransition = useCallback(() => {
        setShowContent(true)
        setShowLogo(false)
        setIsAnimating(false)
        setIsTransitioning(false)
        resetScroll()
    }, [setIsTransitioning, resetScroll])

    useEffect(() => {
        const cleanup = () => {
            setShowLogo(false)
            setShowContent(true)
            setIsAnimating(false)
            setIsTransitioning(false)
        }

        if (location.pathname) {
            startTransition()

            const logoTimer = setTimeout(() => {
                setShowLogo(false)
            }, 800)

            const contentTimer = setTimeout(() => {
                finishTransition()
            }, 1000)

            return () => {
                clearTimeout(logoTimer)
                clearTimeout(contentTimer)
                cleanup()
            }
        }

        return cleanup
    }, [location.pathname, startTransition, finishTransition])

    return (
        <div className={`relative min-h-screen bg-zinc-900 ${isAnimating ? 'pointer-events-none' : ''}`}>
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
                        <div className={isAnimating ? 'pointer-events-none' : ''}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default PageTransition