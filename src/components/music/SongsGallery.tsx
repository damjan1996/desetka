'use client';

import { motion } from 'framer-motion';
import { songs } from '@/lib/data/songs';
import SongCard from './SongCard';
import { useTranslations } from '@/contexts/LanguageContext';

export default function SongsGallery() {
    const t = useTranslations();


    return (
        <section className="min-h-screen pt-6 pb-12 sm:pt-8 sm:pb-16">
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
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
