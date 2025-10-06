'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import type { Song } from '@/types';

interface AudioPlayerState {
    currentSong: Song | null;
    isPlaying: boolean;
    isVisible: boolean;
    currentTime: number;
    duration: number;
    isLoading: boolean;
}

interface AudioPlayerContextType extends AudioPlayerState {
    playSong: (song: Song) => void;
    togglePlayPause: () => void;
    seekTo: (time: number) => void;
    closePlayer: () => void;
    showPlayer: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<AudioPlayerState>({
        currentSong: null,
        isPlaying: false,
        isVisible: false,
        currentTime: 0,
        duration: 0,
        isLoading: false,
    });

    const audioRef = useRef<HTMLAudioElement>(null);

    // Handle play/pause with proper error handling
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !state.currentSong) return;

        const playAudio = async () => {
            try {
                setState(prev => ({ ...prev, isLoading: true }));
                if (state.isPlaying) {
                    await audio.play();
                } else {
                    audio.pause();
                }
            } catch (error) {
                console.error('Audio play error:', error);
                setState(prev => ({ ...prev, isPlaying: false }));
            } finally {
                setState(prev => ({ ...prev, isLoading: false }));
            }
        };

        playAudio();
    }, [state.isPlaying, state.currentSong]);

    // Audio event listeners
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            if (!isNaN(audio.currentTime)) {
                setState(prev => ({ ...prev, currentTime: audio.currentTime }));
            }
        };

        const handleLoadedMetadata = () => {
            if (!isNaN(audio.duration)) {
                setState(prev => ({ ...prev, duration: audio.duration }));
            }
        };

        const handleEnded = () => {
            setState(prev => ({ 
                ...prev, 
                currentTime: 0, 
                isPlaying: false 
            }));
        };

        const handlePlay = () => {
            setState(prev => ({ ...prev, isPlaying: true, isLoading: false }));
        };

        const handlePause = () => {
            setState(prev => ({ ...prev, isPlaying: false }));
        };

        const handleLoadStart = () => {
            setState(prev => ({ ...prev, isLoading: true }));
        };

        const handleCanPlay = () => {
            setState(prev => ({ ...prev, isLoading: false }));
        };

        const handleError = () => {
            setState(prev => ({ ...prev, isLoading: false }));
            console.error('Audio loading error');
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('loadstart', handleLoadStart);
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('loadstart', handleLoadStart);
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('error', handleError);
        };
    }, []);

    const playSong = useCallback((song: Song) => {
        const audio = audioRef.current;
        if (!audio) return;

        // If same song, just toggle play/pause
        if (state.currentSong?.id === song.id) {
            setState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
            return;
        }

        // Smooth transition for new song - preserve progress bar visually
        setState(prev => ({
            ...prev,
            currentSong: song,
            isVisible: true,
            isLoading: true,
            isPlaying: false,  // Set to false initially to avoid flicker
            // Don't reset currentTime/duration immediately for smoother visual transition
        }));

        // Load new song
        audio.src = song.audioUrl;
        
        // Reset progress after audio starts loading
        const handleLoadStart = () => {
            setState(prev => ({ 
                ...prev, 
                currentTime: 0,
                duration: 0
            }));
        };

        // Auto-play when ready
        const handleCanPlay = () => {
            setState(prev => ({ 
                ...prev, 
                isPlaying: true,
                isLoading: false 
            }));
        };

        // Add temporary listeners for this song load
        audio.addEventListener('loadstart', handleLoadStart, { once: true });
        audio.addEventListener('canplay', handleCanPlay, { once: true });
        
    }, [state.currentSong]);

    const togglePlayPause = useCallback(() => {
        setState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    }, []);

    const seekTo = useCallback((time: number) => {
        const audio = audioRef.current;
        if (audio && !isNaN(time)) {
            audio.currentTime = time;
            setState(prev => ({ ...prev, currentTime: time }));
        }
    }, []);

    const closePlayer = useCallback(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.pause();
            audio.src = '';
        }
        setState({
            currentSong: null,
            isPlaying: false,
            isVisible: false,
            currentTime: 0,
            duration: 0,
            isLoading: false,
        });
    }, []);

    const showPlayer = useCallback(() => {
        setState(prev => ({ ...prev, isVisible: true }));
    }, []);

    const contextValue: AudioPlayerContextType = {
        ...state,
        playSong,
        togglePlayPause,
        seekTo,
        closePlayer,
        showPlayer,
    };

    return (
        <AudioPlayerContext.Provider value={contextValue}>
            {children}
            <audio 
                ref={audioRef} 
                preload="metadata"
                crossOrigin="anonymous"
            />
        </AudioPlayerContext.Provider>
    );
}

export function useAudioPlayer() {
    const context = useContext(AudioPlayerContext);
    if (context === undefined) {
        throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
    }
    return context;
}