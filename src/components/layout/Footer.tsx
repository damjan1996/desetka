'use client';

import Link from 'next/link';
import { Instagram, Youtube, Music2 } from 'lucide-react';
import { useTranslations } from '@/contexts/LanguageContext';

const socialLinks = [
    { platform: 'YouTube Music', url: 'https://www.youtube.com/channel/UC9AeInN2ozgSTm8-LLZBDhg', icon: Youtube },
    { platform: 'SoundCloud', url: 'https://soundcloud.com/desetka', icon: Music2 },
    { platform: 'Instagram', url: 'https://www.instagram.com/desetkanakvadrat/', icon: Instagram },
];

export default function Footer() {
    const year = new Date().getFullYear();
    const t = useTranslations();

    const footerLinks = {
        music: [
            { label: t.footer.all_songs, href: '/music' },
            { label: 'Spotify', href: 'https://open.spotify.com/intl-de/artist/5GVCVObf4MGbZCOjjFNDTE' },
        ],
        about: [
            { label: t.footer.about_me, href: '/about' },
            { label: t.nav.blog, href: '/blog' },
            { label: 'FAQ', href: '/#faq' },
        ],
        connect: [
            { label: t.nav.contact, href: '/contact' },
            { label: 'LinkTree', href: '/linktree' },
        ],
    };

    return (
        <footer
            className="border-t border-zinc-200/60 supports-[backdrop-filter]:bg-white/50 bg-white/80 backdrop-blur-md"
            aria-label="Footer"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-900">DESETKA</h3>
                        <p className="text-sm text-zinc-600">{t.footer.tagline}</p>

                        <div className="flex gap-3">
                            {socialLinks.map(({ platform, url, icon: Icon }) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={platform}
                                    className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-zinc-200 text-zinc-700 hover:text-primary hover:border-primary/40 transition-colors shadow-sm"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Musik */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-4">{t.footer.music}</h4>
                        <ul className="space-y-2">
                            {footerLinks.music.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-700 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Über */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-4">{t.footer.about_section}</h4>
                        <ul className="space-y-2">
                            {footerLinks.about.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-700 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-4">{t.footer.connect}</h4>
                        <ul className="space-y-2">
                            {footerLinks.connect.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-700 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

                {/* Bottom */}
                <div className="py-6 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-600">© {year} Desetka. {t.footer.rights_reserved}</p>
                    <div className="flex items-center gap-6">
                        <Link href="/impressum" className="text-sm text-zinc-600 hover:text-primary transition-colors">
                            {t.footer.imprint}
                        </Link>
                        <Link href="/datenschutz" className="text-sm text-zinc-600 hover:text-primary transition-colors">
                            {t.footer.privacy}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
