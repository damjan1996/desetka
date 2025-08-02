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
            {/* Background layer - behind everything */}
            <div 
                className="fixed inset-0 bg-zinc-900"
                style={{ 
                    zIndex: -2,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%'
                }}
            />
            
            {/* Gradient overlay */}
            <div 
                className="fixed inset-0"
                style={{ 
                    zIndex: -1,
                    background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 50%, #1e1e1e 100%)',
                    opacity: 0.9
                }}
            />
            
            {/* FloatingPaths layer */}
            <div 
                className="fixed inset-0"
                style={{ 
                    zIndex: -1,
                    pointerEvents: 'none'
                }}
            >
                <FloatingPaths position={scrollPosition} />
            </div>
            
            {/* Test: Visible animated lines */}
            <div 
                className="fixed inset-0 pointer-events-none"
                style={{ zIndex: -1 }}
            >
                <svg 
                    className="w-full h-full" 
                    preserveAspectRatio="none"
                    style={{ opacity: 0.3 }}
                >
                    <line 
                        x1="0%" 
                        y1="20%" 
                        x2="100%" 
                        y2="20%" 
                        stroke="white" 
                        strokeWidth="1"
                        opacity="0.2"
                    >
                        <animate 
                            attributeName="y1" 
                            values="20%;80%;20%" 
                            dur="10s" 
                            repeatCount="indefinite" 
                        />
                        <animate 
                            attributeName="y2" 
                            values="20%;80%;20%" 
                            dur="10s" 
                            repeatCount="indefinite" 
                        />
                    </line>
                    
                    <line 
                        x1="0%" 
                        y1="50%" 
                        x2="100%" 
                        y2="50%" 
                        stroke="white" 
                        strokeWidth="1"
                        opacity="0.15"
                    >
                        <animate 
                            attributeName="x1" 
                            values="0%;100%;0%" 
                            dur="15s" 
                            repeatCount="indefinite" 
                        />
                    </line>
                    
                    <line 
                        x1="20%" 
                        y1="0%" 
                        x2="20%" 
                        y2="100%" 
                        stroke="white" 
                        strokeWidth="1"
                        opacity="0.1"
                    >
                        <animate 
                            attributeName="x1" 
                            values="20%;80%;20%" 
                            dur="12s" 
                            repeatCount="indefinite" 
                        />
                        <animate 
                            attributeName="x2" 
                            values="20%;80%;20%" 
                            dur="12s" 
                            repeatCount="indefinite" 
                        />
                    </line>
                </svg>
            </div>

            {/* Grid overlay */}
            <div 
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: -1,
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    opacity: 0.5
                }}
            />
        </>
    );
};

export default GlobalBackground;