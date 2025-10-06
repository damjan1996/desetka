'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';

interface AudioPlayerProps {
    audioUrl: string;
    isPlaying: boolean;
    onPlayPause?: () => void;
    onEnded?: () => void;
}

export default function AudioPlayer({ audioUrl, isPlaying, onPlayPause, onEnded }: AudioPlayerProps) {
    const t = useTranslations();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Handle play/pause with proper error handling
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const playAudio = async () => {
            try {
                setIsLoading(true);
                if (isPlaying) {
                    await audio.play();
                } else {
                    audio.pause();
                }
            } catch (error) {
                console.error('Audio play error:', error);
                onPlayPause?.();
            } finally {
                setIsLoading(false);
            }
        };

        playAudio();
    }, [isPlaying, onPlayPause]);

    // Handle audio source changes
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        setCurrentTime(0);
        setDuration(0);
        setIsLoading(false);
    }, [audioUrl]);

    // Audio event listeners
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            if (!isNaN(audio.currentTime)) {
                setCurrentTime(audio.currentTime);
            }
        };

        const handleLoadedMetadata = () => {
            if (!isNaN(audio.duration)) {
                setDuration(audio.duration);
            }
        };

        const handleEnded = () => {
            setCurrentTime(0);
            onEnded?.();
            onPlayPause?.();
        };

        const handleLoadStart = () => setIsLoading(true);
        const handleCanPlay = () => setIsLoading(false);
        const handleError = () => {
            setIsLoading(false);
            console.error('Audio loading error');
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('loadstart', handleLoadStart);
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('loadstart', handleLoadStart);
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('error', handleError);
        };
    }, [onPlayPause, onEnded]);

    const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        const newTime = Number(e.target.value);
        
        if (audio && !isNaN(newTime)) {
            audio.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }, []);


    const formatTime = useCallback((time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, []);

    return (
        <div className="space-y-3 sm:space-y-3">
            {/* Play Button & Progress */}
            <div className="flex items-center gap-3 sm:gap-4">
                <button
                    onClick={onPlayPause}
                    disabled={isLoading}
                    className="flex-shrink-0 w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white hover:bg-gray-800 active:bg-gray-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                    aria-label={isPlaying ? t.music.pause : t.music.play}
                >
                    {isLoading ? (
                        <div className="w-5 h-5 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                        <Pause className="w-6 h-6 sm:w-5 sm:h-5" />
                    ) : (
                        <Play className="w-6 h-6 sm:w-5 sm:h-5 translate-x-0.5" />
                    )}
                </button>

                {/* Progress Bar */}
                <div className="flex-1 space-y-2 sm:space-y-1">
                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            disabled={!duration}
                            className="w-full h-3 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider disabled:cursor-not-allowed touch-manipulation"
                        />
                    </div>
                    <div className="flex justify-between text-sm sm:text-xs text-gray-600">
                        <span className="font-mono">{formatTime(currentTime)}</span>
                        <span className="font-mono">{formatTime(duration)}</span>
                    </div>
                </div>
            </div>


            <audio 
                ref={audioRef} 
                src={audioUrl}
                preload="metadata"
                crossOrigin="anonymous"
            />

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
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
                    width: 20px;
                    height: 20px;
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
                        width: 24px;
                        height: 24px;
                        border-width: 4px;
                    }
                    .slider::-moz-range-thumb {
                        width: 24px;
                        height: 24px;
                        border-width: 4px;
                    }
                }
            `}</style>
        </div>
    );
}
