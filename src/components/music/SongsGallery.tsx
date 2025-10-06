'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { songs } from '@/lib/data/songs';
import SongCard from './SongCard';
import AudioPlayer from './AudioPlayer';
import { useTranslations } from '@/contexts/LanguageContext';

export default function SongsGallery() {
    const t = useTranslations();
    const [currentSongId, setCurrentSongId] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentSong = songs.find((song) => song.id === currentSongId);

    const handlePlaySong = (songId: string) => {
        if (currentSongId === songId) setIsPlaying(!isPlaying);
        else {
            setCurrentSongId(songId);
            setIsPlaying(true);
        }
    };

    const handlePlayPause = () => setIsPlaying(!isPlaying);

    return (
        <section className="min-h-screen py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-zinc-900 mb-4">{t.music.all_songs_title}</h1>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        {t.music.all_songs_subtitle}
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {songs.map((song) => (
                        <SongCard
                            key={song.id}
                            song={song}
                            onPlay={() => handlePlaySong(song.id)}
                            isPlaying={isPlaying && currentSongId === song.id}
                        />
                    ))}
                </div>

                {currentSong && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-zinc-200 shadow-md z-40"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <img
                                    src={currentSong.coverImage}
                                    alt={currentSong.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div className="min-w-0">
                                    <h4 className="text-zinc-900 font-semibold truncate">{currentSong.title}</h4>
                                    <p className="text-zinc-600 text-sm truncate">{currentSong.artist}</p>
                                </div>
                            </div>

                            <div className="flex-1 max-w-2xl">
                                <AudioPlayer
                                    audioUrl={currentSong.audioUrl}
                                    isPlaying={isPlaying}
                                    onPlayPause={handlePlayPause}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
