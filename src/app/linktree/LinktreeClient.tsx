'use client';

import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';

export default function LinktreeClient() {
    const t = useTranslations();
    
    const links = [
        { title: t.linktree.youtube_music, url: 'https://www.youtube.com/channel/UC9AeInN2ozgSTm8-LLZBDhg', icon: '🎵' },
        { title: t.linktree.spotify, url: 'https://open.spotify.com/intl-de/artist/5GVCVObf4MGbZCOjjFNDTE', icon: '🎧' },
        { title: t.linktree.soundcloud, url: 'https://soundcloud.com/desetka', icon: '☁️' },
        { title: t.linktree.instagram, url: 'https://instagram.com/desetkanakvadrat', icon: '📷' },
        { title: t.linktree.tiktok, url: 'https://www.tiktok.com/@desetkanakvadrat', icon: '🎬' },
    ];

    return (
        <section className="h-[calc(100vh-4rem)] flex flex-col justify-start pt-16 overflow-hidden">
            <div className="max-w-md mx-auto px-4 w-full">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-zinc-900 mb-1 tracking-tight">{t.linktree.title}</h1>
                    <p className="text-zinc-600 text-sm">{t.linktree.subtitle}</p>
                    <div className="h-1 w-16 bg-primary rounded-full mx-auto mt-3" />
                </div>

                {/* Link Buttons */}
                <div className="space-y-3">
                    {links.map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-3 bg-white border border-zinc-200 hover:border-primary/40 rounded-xl text-center transition-all shadow-sm hover:shadow-md group"
                        >
                            <span className="text-2xl mr-3">{link.icon}</span>
                            <span className="text-zinc-900 font-medium group-hover:text-primary transition-colors">
                                {link.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}