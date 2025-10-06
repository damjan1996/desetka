'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Song } from '@/types';
import { useAudioPlayer } from '@/contexts/AudioPlayerContext';

interface SongCardProps {
    song: Song;
}

export default function SongCard({ song }: SongCardProps) {
    const { currentSong, isPlaying, playSong } = useAudioPlayer();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-white/90 rounded-2xl overflow-hidden border border-zinc-200 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300"
        >
            {/* Cover Image */}
            <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image
                    src={song.coverImage}
                    alt={song.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                        isHovered || (currentSong?.id === song.id && isPlaying) ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <button
                        onClick={() => playSong(song)}
                        className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-all duration-200"
                    >
                        <div className="transition-all duration-200">
                            {currentSong?.id === song.id && isPlaying ? (
                                <Pause className="w-8 h-8 transition-all duration-200" />
                            ) : (
                                <Play className="w-8 h-8 translate-x-0.5 transition-all duration-200" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Song Info */}
            <div className="p-4 space-y-3">
                <div>
                    <h3 className="text-zinc-900 font-semibold text-lg mb-1 line-clamp-1">{song.title}</h3>
                    <p className="text-zinc-600 text-sm">{song.artist}</p>
                </div>

                {/* Meta Info */}
                <div className="flex gap-2">
                    <span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs">{song.genre}</span>
                    <span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs">{song.duration}</span>
                </div>

            </div>
        </motion.div>
    );
}
