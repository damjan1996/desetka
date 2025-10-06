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
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="grid grid-cols-3 items-center gap-6">
                            {/* Song Info - Left */}
                            <motion.div 
                                className="flex items-center gap-3 min-w-0"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                                    <Image
                                        src={currentSong.coverImage}
                                        alt={currentSong.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-gray-900 truncate text-sm">
                                        {currentSong.title}
                                    </h4>
                                    <p className="text-gray-600 truncate text-xs">
                                        {currentSong.artist}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Play Button + Timeline - Center */}
                            <motion.div 
                                className="flex justify-center items-center gap-4"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <button
                                    onClick={togglePlayPause}
                                    disabled={isLoading}
                                    className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                                    aria-label={isPlaying ? t.music.pause : t.music.play}
                                >
                                    <div className="transition-all duration-200">
                                        {isLoading ? (
                                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : isPlaying ? (
                                            <Pause className="w-4 h-4 transition-all duration-200" />
                                        ) : (
                                            <Play className="w-4 h-4 translate-x-0.5 transition-all duration-200" />
                                        )}
                                    </div>
                                </button>

                                <div className="w-full max-w-sm space-y-1">
                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 0}
                                        value={currentTime}
                                        onChange={handleSeek}
                                        disabled={!duration}
                                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider disabled:cursor-not-allowed"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Close Button - Right */}
                            <motion.div 
                                className="flex items-center justify-end"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <button
                                    onClick={closePlayer}
                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
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
                            width: 14px;
                            height: 14px;
                            border-radius: 50%;
                            background: #111827;
                            cursor: pointer;
                            border: 2px solid white;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                        }
                        .slider::-moz-range-thumb {
                            width: 14px;
                            height: 14px;
                            border-radius: 50%;
                            background: #111827;
                            cursor: pointer;
                            border: 2px solid white;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                        }
                        .slider:disabled::-webkit-slider-thumb {
                            background: #9ca3af;
                            cursor: not-allowed;
                        }
                        .slider:disabled::-moz-range-thumb {
                            background: #9ca3af;
                            cursor: not-allowed;
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}