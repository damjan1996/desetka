'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { getFeaturedSongs } from '@/lib/data/songs';
import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';

import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Music() {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const t = useTranslations();

    const songs = getFeaturedSongs();

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSong]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    const prevSong = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentSong(swiper.activeIndex);
        setIsPlaying(false);
    };

    return (
        <section id="music" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {t.music.title}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {t.music.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Swiper - Left Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <Swiper
                                effect="cards"
                                grabCursor={true}
                                modules={[EffectCards, Autoplay]}
                                onSwiper={setSwiperInstance}
                                onSlideChange={handleSlideChange}
                                cardsEffect={{
                                    perSlideOffset: 8,
                                    perSlideRotate: 2,
                                    rotate: true,
                                    slideShadows: false,
                                }}
                                className="w-full max-w-xs sm:max-w-sm mx-auto"
                            >
                                {songs.map((song) => (
                                    <SwiperSlide key={song.id}>
                                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
                                            <Image
                                                src={song.coverImage}
                                                alt={song.title}
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="400" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="system-ui" font-size="24" fill="%239ca3af" text-anchor="middle" dominant-baseline="middle"%3E' + song.title + '%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                                            {/* Song Info on Card */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <h3 className="text-white text-2xl font-bold mb-1">
                                                    {song.title}
                                                </h3>
                                                <p className="text-gray-200 text-sm">{song.artist}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>

                        {/* Player Controls - Right Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-8"
                        >
                            {/* Current Song Info */}
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {songs[currentSong]?.title}
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    {songs[currentSong]?.artist}
                                </p>
                                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                    {songs[currentSong]?.genre}
                  </span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                    {songs[currentSong]?.duration}
                  </span>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-center gap-6">
                                <button
                                    onClick={prevSong}
                                    className="p-3 text-gray-500 hover:text-gray-900 transition-colors"
                                    aria-label={t.music.previous}
                                >
                                    <SkipBack className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={togglePlay}
                                    className="p-6 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
                                    aria-label={isPlaying ? t.music.pause : t.music.play}
                                >
                                    {isPlaying ? (
                                        <Pause className="w-8 h-8" />
                                    ) : (
                                        <Play className="w-8 h-8 ml-1" />
                                    )}
                                </button>

                                <button
                                    onClick={nextSong}
                                    className="p-3 text-gray-500 hover:text-gray-900 transition-colors"
                                    aria-label={t.music.next}
                                >
                                    <SkipForward className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Streaming Links */}
                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-gray-500 text-sm mb-3">{t.music.stream_on}</p>
                                <div className="flex flex-wrap gap-3">
                                    {songs[currentSong]?.streamingLinks?.spotify && (
                                        <a
                                            href={songs[currentSong].streamingLinks.spotify}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                                        >
                                            {t.music.spotify}
                                        </a>
                                    )}
                                    {songs[currentSong]?.streamingLinks?.youtube && (
                                        <a
                                            href={songs[currentSong].streamingLinks.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                                        >
                                            {t.music.youtube}
                                        </a>
                                    )}
                                    {songs[currentSong]?.streamingLinks?.soundcloud && (
                                        <a
                                            href={songs[currentSong].streamingLinks.soundcloud}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                                        >
                                            {t.music.soundcloud}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* View All Link */}
                            <div className="pt-4">
                                <Link
                                    href="/music"
                                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                                >
                                    <span>{t.music.view_all}</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Hidden Audio Element */}
                <audio
                    ref={audioRef}
                    src={songs[currentSong]?.audioUrl}
                    onEnded={() => setIsPlaying(false)}
                />
            </div>
        </section>
    );
}