import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
    children: React.ReactNode
    delay?: number
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, delay = 0 }) => {
    const controls = useAnimation()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } })
                }
            },
            {
                threshold: 0.5,
            },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [controls, delay])

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
            {children}
        </motion.div>
    )
}

export default ScrollAnimation

