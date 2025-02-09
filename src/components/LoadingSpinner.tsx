import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    return (
        <div className={`flex items-center justify-center min-h-[200px] ${className}`}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={`relative ${sizes[size]}`}
            >
                {/* Base Triangle */}
                <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                >
                    <path
                        d="M50 10 L90 80 L10 80 Z"
                        className="fill-none stroke-zinc-800"
                        strokeWidth="4"
                    />
                </svg>

                {/* Animated Triangle Segments */}
                <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                >
                    <motion.path
                        d="M50 10 L90 80"
                        className="stroke-white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0.2, 1, 0.2]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.path
                        d="M90 80 L10 80"
                        className="stroke-white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0.2, 1, 0.2]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.66
                        }}
                    />
                    <motion.path
                        d="M10 80 L50 10"
                        className="stroke-white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0.2, 1, 0.2]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 1.33
                        }}
                    />
                </svg>

                {/* Optional inner gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent rounded-full" />
            </motion.div>
        </div>
    );
};

export default LoadingSpinner;