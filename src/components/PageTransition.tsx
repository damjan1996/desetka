"use client"
import type React from "react"
import { useEffect, useState } from "react"
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
          transition: { duration: 0.3, ease: customEase },
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
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isOverlayActive, setIsOverlayActive] = useState(true)

  useEffect(() => {
    setIsTransitioning(true)
    setIsOverlayActive(true)

    const overlayTimer = setTimeout(() => {
      setIsOverlayActive(false)
    }, 1200) // Overlay animation duration

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800)

    return () => {
      clearTimeout(overlayTimer)
      clearTimeout(transitionTimer)
    }
  }, [location])

  return (
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="relative">
          {/* Transition Container */}
          <div className={`fixed inset-0 pointer-events-none ${isOverlayActive ? 'z-50' : '-z-10'}`}>
            {/* Overlay Animation */}
            <motion.div
                className="absolute inset-0 bg-zinc-900"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  transition: {
                    duration: 1.2,
                    times: [0, 0.3, 0.7, 1],
                    ease: customEase,
                  },
                }}
            />

            {/* Logo */}
            <AnimatePresence>
              {isTransitioning && (
                  <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.3,
                          duration: 0.3,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.3,
                        },
                      }}
                  >
                    <Logo />
                  </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Page Content */}
          <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: 0.8,
                  ease: customEase,
                },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
  )
}

export default PageTransition