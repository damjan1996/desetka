'use client';

import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X } from 'lucide-react';
import Image from 'next/image';
import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import { useTranslations } from '@/contexts/LanguageContext';

export default function GlobalAudioPlayer() {
    const t = useTranslations();
    const {
        currentSong,
        isPlaying,
        isVisible,
        currentTime,
        duration,
        isLoading,
        togglePlayPause,
        seekTo,
        closePlayer,
    } = useAudioPlayer();

    const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        if (!isNaN(newTime)) {
            seekTo(newTime);
        }
    }, [seekTo]);

    const formatTime = useCallback((time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, []);

    return (
        <AnimatePresence>
            {isVisible && currentSong && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30,
                        opacity: { duration: 0.2 }
                    }}
                    className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl z-50"
                >
                    <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 sm:gap-6">
                            {/* Song Info - Top on mobile, Left on desktop */}
                            <motion.div 
                                className="flex items-center gap-3 min-w-0 sm:col-span-1 order-1 sm:order-1"
                                key={currentSong.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                <motion.div 
                                    className="relative w-14 h-14 sm:w-12 sm:h-12 rounded-lg overflow-hidden shadow-md flex-shrink-0"
                                    key={`cover-${currentSong.id}`}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={currentSong.coverImage}
                                        alt={currentSong.title}
                                        fill
                                        className="object-cover transition-all duration-300"
                                    />
                                </motion.div>
                                <motion.div 
                                    className="min-w-0 flex-1"
                                    key={`info-${currentSong.id}`}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                >
                                    <h4 className="font-semibold text-gray-900 truncate text-base sm:text-sm transition-all duration-300">
                                        {currentSong.title}
                                    </h4>
                                    <p className="text-gray-600 truncate text-sm sm:text-xs transition-all duration-300">
                                        {currentSong.artist}
                                    </p>
                                </motion.div>
                                {/* Close Button - Mobile only */}
                                <button
                                    onClick={closePlayer}
                                    className="w-10 h-10 sm:hidden flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
                                    aria-label="Close player"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </motion.div>

                            {/* Play Button + Timeline - Bottom on mobile, Center on desktop */}
                            <motion.div 
                                className="flex items-center gap-3 sm:gap-4 sm:justify-center order-2 sm:order-2"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <button
                                    onClick={togglePlayPause}
                                    disabled={isLoading}
                                    className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-900 rounded-full text-white hover:bg-gray-800 active:bg-gray-700 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 touch-manipulation"
                                    aria-label={isPlaying ? t.music.pause : t.music.play}
                                >
                                    <div className="relative w-5 h-5 sm:w-4 sm:h-4">
                                        <div className={`absolute inset-0 transition-all duration-300 ${isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                            <div className="w-full h-full border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        </div>
                                        <div className={`absolute inset-0 transition-all duration-300 ${!isLoading && isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                            <Pause className="w-full h-full" />
                                        </div>
                                        <div className={`absolute inset-0 transition-all duration-300 ${!isLoading && !isPlaying ? 'opacity-100 scale-100 translate-x-0.5' : 'opacity-0 scale-75'}`}>
                                            <Play className="w-full h-full" />
                                        </div>
                                    </div>
                                </button>

                                <div className="flex-1 sm:w-full sm:max-w-sm space-y-1.5 sm:space-y-1">
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="0"
                                            max={duration || 0}
                                            value={currentTime}
                                            onChange={handleSeek}
                                            disabled={!duration}
                                            className="w-full h-2 sm:h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider disabled:cursor-not-allowed touch-manipulation transition-opacity duration-300"
                                            style={{ opacity: isLoading ? 0.5 : 1 }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm sm:text-xs text-gray-500 font-mono transition-opacity duration-300" style={{ opacity: isLoading ? 0.7 : 1 }}>
                                        <span className="transition-all duration-300">{formatTime(currentTime)}</span>
                                        <span className="transition-all duration-300">{formatTime(duration)}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Close Button - Desktop only */}
                            <motion.div 
                                className="hidden sm:flex items-center justify-end order-3 sm:order-3"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <button
                                    onClick={closePlayer}
                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
                                    aria-label="Close player"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    <style jsx>{`
                        .slider::-webkit-slider-thumb {
                            appearance: none;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            background: #111827;
                            cursor: pointer;
                            border: 3px solid white;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                            transition: all 0.2s ease;
                        }
                        .slider::-webkit-slider-thumb:hover {
                            transform: scale(1.1);
                            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                        }
                        .slider::-webkit-slider-thumb:active {
                            transform: scale(1.2);
                        }
                        .slider::-moz-range-thumb {
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            background: #111827;
                            cursor: pointer;
                            border: 3px solid white;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                            transition: all 0.2s ease;
                        }
                        .slider::-moz-range-thumb:hover {
                            transform: scale(1.1);
                            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                        }
                        .slider::-moz-range-thumb:active {
                            transform: scale(1.2);
                        }
                        .slider:disabled::-webkit-slider-thumb {
                            background: #9ca3af;
                            cursor: not-allowed;
                            transform: none;
                        }
                        .slider:disabled::-moz-range-thumb {
                            background: #9ca3af;
                            cursor: not-allowed;
                            transform: none;
                        }
                        
                        /* Mobile optimizations */
                        @media (max-width: 640px) {
                            .slider::-webkit-slider-thumb {
                                width: 22px;
                                height: 22px;
                                border-width: 4px;
                            }
                            .slider::-moz-range-thumb {
                                width: 22px;
                                height: 22px;
                                border-width: 4px;
                            }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}