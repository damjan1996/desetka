import React, { useState, useEffect } from 'react';
import { useScrollContext } from './ScrollContext';

interface KeyboardEvent {
    key: string;
}

const DebugOverlay: React.FC = () => {
    const [showDebug, setShowDebug] = useState<boolean>(false);
    const { isTransitioning } = useScrollContext();

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'd') {
                setShowDebug((prev: boolean) => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    if (!showDebug) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg z-[100] font-mono text-sm">
            <div>Transitioning: {isTransitioning ? 'Yes' : 'No'}</div>
            <div>Body Overflow: {document.body.style.overflow}</div>
            <div>Scroll Position: {window.scrollY}</div>
            <div>View Height: {window.innerHeight}</div>
            <button
                onClick={() => document.body.style.overflow = ''}
                className="bg-blue-500 px-2 py-1 rounded mt-2"
            >
                Reset Overflow
            </button>
        </div>
    );
};

export default DebugOverlay;