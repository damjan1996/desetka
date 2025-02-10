"use client"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence, cubicBezier } from "framer-motion"
import { useLocation } from "react-router-dom"

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
    const [isAnimating, setIsAnimating] = useState(false)
    const [showContent, setShowContent] = useState(true)

    useEffect(() => {
        setIsAnimating(true)
        setShowContent(false)

        const contentTimer = setTimeout(() => {
            setShowContent(true)
        }, 800)

        const animationTimer = setTimeout(() => {
            setIsAnimating(false)
        }, 1000)

        return () => {
            clearTimeout(contentTimer)
            clearTimeout(animationTimer)
        }
    }, [location.pathname])

    return (
        <div className="relative min-h-screen bg-zinc-900">
            {/* Overlay mit Logo */}
            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 z-[60] bg-zinc-900 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Logo />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content */}
            <AnimatePresence mode="wait">
                {showContent && (
                    <motion.div
                        key={location.pathname}
                        className="relative z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default PageTransition