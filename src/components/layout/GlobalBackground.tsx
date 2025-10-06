'use client';

import { useEffect, useState } from 'react';
import { FloatingPaths } from './FloatingPaths';

const GlobalBackground = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY * 0.001);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Base layer */}
            <div
                className="fixed inset-0 bg-white"
                style={{
                    zIndex: -2,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                }}
            />

            {/* Soft light gradient */}
            <div
                className="fixed inset-0"
                style={{
                    zIndex: -1,
                    background:
                        'linear-gradient(135deg, #ffffff 0%, #f7f8fa 50%, #ffffff 100%)',
                    opacity: 0.9,
                }}
            />

            {/* FloatingPaths in subtle gray */}
            <div
                className="fixed inset-0"
                style={{
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
            >
                {/* Neu: Farbe für Light-Theme explizit setzen */}
                <FloatingPaths position={scrollPosition} color="rgba(0,0,0,0.8)" />
            </div>

            {/* Animated guide lines (helles Design: dunkle, sehr transparente Linien) */}
            <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
                <svg className="w-full h-full" preserveAspectRatio="none" style={{ opacity: 0.25 }}>
                    <line
                        x1="0%"
                        y1="20%"
                        x2="100%"
                        y2="20%"
                        stroke="black"
                        strokeWidth="1"
                        opacity="0.12"
                    >
                        <animate attributeName="y1" values="20%;80%;20%" dur="10s" repeatCount="indefinite" />
                        <animate attributeName="y2" values="20%;80%;20%" dur="10s" repeatCount="indefinite" />
                    </line>

                    <line
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        stroke="black"
                        strokeWidth="1"
                        opacity="0.10"
                    >
                        <animate attributeName="x1" values="0%;100%;0%" dur="15s" repeatCount="indefinite" />
                    </line>

                    <line
                        x1="20%"
                        y1="0%"
                        x2="20%"
                        y2="100%"
                        stroke="black"
                        strokeWidth="1"
                        opacity="0.08"
                    >
                        <animate attributeName="x1" values="20%;80%;20%" dur="12s" repeatCount="indefinite" />
                        <animate attributeName="x2" values="20%;80%;20%" dur="12s" repeatCount="indefinite" />
                    </line>
                </svg>
            </div>

            {/* Grid overlay (helles, dezentes Grid) */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: -1,
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    opacity: 0.45,
                }}
            />
        </>
    );
};

export default GlobalBackground;
