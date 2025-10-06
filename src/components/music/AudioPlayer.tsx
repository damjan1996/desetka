'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';

interface AudioPlayerProps {
    audioUrl: string;
    isPlaying: boolean;
    onPlayPause?: () => void;
}

export default function AudioPlayer({ audioUrl, isPlaying, onPlayPause }: AudioPlayerProps) {
    const t = useTranslations();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) audio.play();
        else audio.pause();
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleLoadedMetadata = () => setDuration(audio.duration);
        const handleEnded = () => onPlayPause?.();

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [onPlayPause]);

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        const newVolume = Number(e.target.value);
        if (audio) {
            audio.volume = newVolume;
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isMuted) {
                audio.volume = volume || 0.5;
                setIsMuted(false);
            } else {
                audio.volume = 0;
                setIsMuted(true);
            }
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="space-y-3">
            {/* Play Button & Progress */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onPlayPause}
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
                    aria-label={isPlaying ? t.music.pause : t.music.play}
                >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                {/* Progress Bar */}
                <div className="flex-1 space-y-1">
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-zinc-300 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-zinc-600">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3">
                <button
                    onClick={toggleMute}
                    className="text-zinc-600 hover:text-primary transition-colors"
                    aria-label={isMuted ? t.music.unmute : t.music.mute}
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1 bg-zinc-300 rounded-lg appearance-none cursor-pointer slider"
                />
            </div>

            <audio ref={audioRef} src={audioUrl} />

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #16a34a;
                    cursor: pointer;
                }
                .slider::-moz-range-thumb {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #16a34a;
                    cursor: pointer;
                    border: none;
                }
            `}</style>
        </div>
    );
}
